<!-- loioa509db45afbe42678f33f5b07f4cc35b -->

# Additional Options for Feature Files

We recommend that you familiarize yourself with the following advanced concepts in behavior-driven development with Gherkin.



## Tags

Gherkin supports the concept of tags. A tag is metadata that can augment a feature or scenario with contextual information. Tags begin with an @ symbol, appear on the line above a feature or scenario, and are separated by spaces. Tags can be added before a feature, a scenario, a scenario outline, or an example.

```
#!feature@lemmings
Feature: Clicking Buttons is a Life Saving Activity

  @saved @button
  Scenario: Click a button, save a life!
    Then  I save a lemming's life

```

Tags on a feature level are inherited by all of the scenarios and scenario outlines in the feature. In addition, tags on a scenario outline are inherited by its examples. In the example above, the scenario has three tags: `@lemmings`, `@saved`, and `@button`.

Tags generally help to understand the feature file, and have a number of interesting uses:

-   Tags can function like a category to create collections of features or scenarios, for example: `@sales` or `@human-resources`.

-   Tags can be used to refer to numbered documents, for example: `@BCP-1234567890`.

-   Tags can refer to the stage of the development process for that feature, for example: `@requirements`, `@development`, or `@testing`.


There is one special tag : the `@wip` tag. This tag indicates to the Gherkin test harness that it should skip that test during test execution. A skipped test is not executed and passes automatically. Use the `@wip` tag when you're in the middle of implementing the tests for a feature file. You can also use it for scenarios or features that you have no intention of testing.

Here's an example of a test execution with a skipped test:

 ![](images/GherkinAdvancedTags_179f07a.png) 



## Background scenarios

When writing a feature file, some test steps might need to be executed for every scenario. For example, the test step that loads the app is often repeated for each test scenario.

```
#!featureFeature: Clicking Buttons is a Life Saving Activity

  Scenario: Click a button, save a life!
    Given I have started the app
    Then I save a lemming's life

  Scenario: The saved lemming has a name
    Given I have started the app
    Then I see Alice at the end of the list
```

You can consolidate all of the repeated steps into a single "background scenario", which uses the keyword `Background`. The test steps in the background scenario get executed at the beginning of each scenario in the feature file. The following feature file is equivalent to the feature file shown above:

```
#!featureFeature: Clicking Buttons is a Life Saving Activity

  Background:
    Given I have started the app

  Scenario: Click a button, save a life!
    Then I save a lemming's life

  Scenario: The saved lemming has a name
    Then I see Alice at the end of the list
```



## Step arguments and regular expressions

When writing test steps in feature files, test steps are sometimes repeated, but with a slight variation in each step.

```
#!featureScenario: Save one lemming
  When I click on the life saving button 1 time
  Then I see Alice at the end of the list of saved lemmings

Scenario: Save two lemmings
  When I click on the life saving button 2 times
  Then I see Bob at the end of the list of saved lemmings
```

To write a steps file for the this feature file you might have to write four separate step definitions. The problem would only get worse if you needed to write more scenarios. However, using step arguments you can consolidate the four step definitions into two step definitions \(written here in pseudo-code\):

`I click on the life saving button <X> time(s)`

`I see <NAME> at the end of the list of saved lemmings`

How does this work in real JavaScript code? When you write the regular expression for the step definition, you can use a regular expression concept called "capturing groups" to specify arguments to extract from the natural language of the test step. If you've never worked with regular expressions before, it can take some getting used to, but it's a really powerful tool that is worth learning. The capturing groups are passed to the test function as parameters \(of type `string`\) that you can name whatever you want. Continuing the example above, here are the step definitions that you could write:

```js
this.register(
  /^I click on the life saving button (\d+) times?$/i,
  function(sNumTimes) {}
);

this.register(
  /^I see (.*?) at the end of the list of saved lemmings$/i,
  function(sName) {}
);

```

> ### Caution:  
> All parameters extracted from capturing groups are of the JavaScript type `string`. You will need to use `parseInt` to convert numbers into type `int` before you do a numerical comparison.

Here are a few regular expression concepts that are especially useful in Gherkin:

```js
(.*?) – captures any text into a parameter
(\d+) – captures any number into a parameter
\s* - matches 0 or more spaces
s? – matches the character "s" if it's there (replace "s" with any character)
(text)? – captures "text" into a parameter if it's there
(?:text)? – matches "text" if it's there, without capturing into a parameter

```

> ### Caution:  
> A common problem in regular expressions is that many characters are reserved and have a special meaning, in particular backslash \(`\`\), period \(`.`\), asterisk \(`*`\), plus \(`+`\), dash \(`-`\) and braces \(`[]`, `()` and `{}`\). Put the backslash character in front of a special character to treat it as plain text, for example: `\-` or `\+`.
> 
> If your regular expression contains multiple parameters, then they will be passed to the test function in the same order as they appear in the regular expression.
> 
> ```js
> this.register(
>   /^I click (\d+) times and see (.*?) at the end of the list$/i,
>   function(sNumTimes, sName) {}
> );
> ```



## Context

Look at the following feature file scenario:

```
#!featureScenario: some steps depend on each other
  Given I have a Latte Cappuccino in front of me
  When I drink the coffee
  Then I feel less sleepy

```

Trying to implement the step definitions might be a bit challenging because in the second step, `I drink the coffee`, there is no mention of which coffee. Sometimes, to make a feature file sound more natural, or just to reduce repetition, it can be beneficial to retain the context from one test step to the next.

In Gherkin, the JavaScript `this` variable is unique for each scenario. Any variables assigned to one step definition can be used in subsequent step definitions within the same scenario. Each new scenario in the feature starts with a new `this` object. As a result, we could implement the previous feature file's step definitions in the following manner:

```js
this.register(/^I have a (.*?) in front of me$/i, function(coffeeType) {
  this.coffeeType = coffeeType;
});

this.register(/^I drink the coffee$/i, function() {
  this.sleepinessBefore = user.getSleepiness();
  user.drink(this.coffeeType);
});

this.register(/^I feel less sleepy$/i, function() {
  Opa5.assert.ok(user.getSleepiness() < this.sleepinessBefore, "Verified...");
});

```



<a name="loioa509db45afbe42678f33f5b07f4cc35b__section_qfv_2lc_31b"/>

## QUnit Assert Object

To use QUnit for automated testing, it is necessary to use QUnit's built-in assertion methods. QUnit defines these assertion methods in the `QUnit.assert` object. QUnit makes this object globally available to your test code, but it's a good practice to refer to the local `assert` object \(particularly when you're doing asynchronous testing\).

Gherkin makes the `assert` object available to you in two different ways, depending on whether you are using OPA5 or not. If you are using pure QUnit \(no OPA5\), then you can access the QUnit assert object inside of a step definition with `this.assert`.

```js
this.register(/^I have launched my wombat$/i, function() {
  this.assert.strictEqual(this.myWombat.state, "launched");
});
```

If you are using OPA5, then OPA5 makes the QUnit `assert` object available to you inside a step definition via `Opa5.assert`:

```js
this.register(/^My wombat is currently in orbit$/i, function() {
  Opa5.assert.strictEqual(this.myWombat.state, "orbit");
});
```



## Data tables

If you want to use a large amount of structured data in your test, you can use a data table. In a feature file, a data table is placed underneath a test step and is composed of rows and columns, with rows separated by line breaks, and columns surrounded with the pipe \(`|`\) character.

```
#!featureScenario: lots of data
  Given I see the following lemmings:
    | Name    | Age in Months | Role         |
    | Alice   | 24            | Support      |
    | Bob     | 70            |              |
    | Charlie | 120           | Stories      |

```

In the steps file, if a data table is included in the test scenario then an extra parameter is passed at the end of the step definition function \(after any step arguments that appear in the regular expression\).

```js
this.register(
  /^I see the following (.*?):$/i,
  function(sAnimalType, aDataTable) {}
);

```

Data tables are usually passed to the test function as a two-dimensional array \(an array of arrays\). For example, the above feature file data table would produce the following array in a variable `aDataTable` at runtime:

```
#!feature[
  ["Name", "Age in Months", "Role"],
  ["Alice", "24", "Support"],
  ["Bob", "70", ""],
  ["Charlie", "120", "Stories"]
]

```

If the feature file data is a single row or a single column, then the test function receives a simple array instead of a two-dimensional array.

```
#!featureScenario: lots of data

  Given I see the following lemmings:
    | Alice   |
    | Bob     |
    | Charlie |

  And I see the following lemmings:
    | Alice | Bob | Charlie |

```

Both test steps will provide the following runtime value for `aDataTable`:

```js
["Alice", "Bob", "Charlie"]
```



## Data table utilities

The contents of the data table in the feature file are sent to the step definition function with no modifications. Although this raw format is often useful, sometimes a different format would be more helpful. There is a Gherkin namespace called `dataTableUtils` that makes this reformatting task easy. This namespace provides several utilities including the function `toTable`, which transforms the two-dimensional array into a simple array of objects. In the array of objects, each object's attribute names are derived from the header line in the table. For example, consider the following feature file:

```
#!featureScenario: lots of data
  Given I see the following lemmings:
    | Name    | Age in Months | Role         |
    | Alice   | 24            | Support      |
    | Bob     | 70            |              |
    | Charlie | 120           | Stories      |

```

And the following steps file:

```
this.register(
  /^I see the following lemmings:$/i, function(aRawData) {
    var aData = dataTableUtils.toTable(aRawData, "camelCase");
  }
);

```

In the above steps code, we ask the `dataTableUtils` to use camel case when setting the names of the object attributes. \(For those unfamiliar with coding conventions, camel case transforms the string "Hello World" into `helloWorld`.\) At runtime, the variable `aData` is assigned the following value:

```js
 [
  {
    ageInMonths: "24"
    name: "Alice"
    role: "Support"
  },
  {
    ageInMonths: "70"
    name: "Bob"
    role: ""
  },
  {
    ageInMonths: "120"
    name: "Charlie"
    role: "Stories"
  }
]

```

In this `toTable` format, the data is now easier to work with. There are other transformation functions and normalization functions available. For more information, see [API Reference: `sap.ui.test.gherkin`](https://ui5.sap.com/#/api/sap.ui.test.gherkin). 

If you have specialized normalization needs, you can also create your own normalization function. This is a function that accepts a single string parameter and returns a string. You could, for example, pass your custom normalization function into a `toTable` call like this:

```js
var aData = dataTableUtils.toTable(aRawData, function(s) {
  return dataTableUtils.normalization.camelCase(s).replace("role", "job");
});

```



## Scenario outlines

Sometimes you need to test a repeating pattern of steps. For example:

```
#!featureScenario: Save 1 Lemming
  When I click on the life saving button 1 time
  Then I see Alice at the end of the list of saved lemmings

Scenario: Save 2 Lemmings
  When I click on the life saving button 2 times
  Then I see Bob at the end of the list of saved lemmings

Scenario: Save 3 Lemmings
  When I click on the life saving button 3 times
  Then I see Charlie at the end of the list of saved lemmings

```

Step arguments make it easier to implement this in the steps file, but the repetition looks bad and is difficult to maintain. The solution is to use a scenario outline. With a scenario outline, you can write the test scenarios once, Gherkin will execute the test as many times as you specify, for whichever input examples you have given. Here's how it looks in the feature file:

```
#!featureScenario Outline: Using a scenario outline to Save Lemmings
  When I click on the life saving button <NUM CLICKS> times
  Then I see <NAME> at the end of the list of saved lemmings

Examples: list of lemmings
  | NUM CLICKS | NAME     |
  |  1         |  Alice   |
  |  2         |  Bob     |
  |  3         |  Charlie |

```

The above scenario outline is equivalent to writing out the three scenarios separately. In the above feature file, `NUM CLICKS` and `NAME` are called "placeholders". At test execution, these placeholders get replaced automatically with the values in the examples table. A new test scenario is generated for each row in the `Examples` table.

Pay attention to the following details:

-   Placeholders are case-sensitive, and can use spaces or punctuation.

-   Placeholders are surrounded by angle brackets \(`< >`\) in the scenario outline steps, and without angle brackets in the `Examples` table.

-   Each placeholder found in the scenario outline requires a column in the `Examples` table, with the header row holding the placeholders themselves.

-   The examples section must be immediately after the scenario outline in the feature file.

-   You can specify multiple sets of examples for a single scenario outline.


