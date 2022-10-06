<!-- loio9113397cd27e4a1090590e1c4f6edf5f -->

# Feature Files

Feature files are human-readable specifications that are also machine-readable.

The Gherkin syntax is simple. Each major software feature is written in a separate file. You need to decide how to split your software up into features. For example, if you are testing a coffee machine, features might include: serving coffee, accepting money, dispensing change, setting the cost of each beverage, serving hot chocolate, serving hot water, etc. Each one of these features could have its own feature file.

Each feature file contains exactly one feature, and this feature contains one or more test scenarios. Each test scenario contains one or more test steps. Test steps describe the practical steps that the user needs to perform to execute the overall test scenario.

For example, for the "accepting money" feature, a test scenario might include steps such as \(1\) the user must insert enough money into the machine before \(2\) the machine serves coffee. You could create a second test scenario, where \(1\) the user doesn't insert enough money and \(2\) the machine does not serve coffee. In this example, each scenario is composed of two steps.



## Conventions for Feature Files

-   Use the file extension `.feature`

-   Can include comments by adding the hash \(`#`\) symbol at the beginning of a line

-   Feature files are composed of one or more test scenarios, which walk the user through using the software; what the user does, and what the expected results are.

-   These scenarios are themselves composed of lines starting with the keywords `Given`, `When`, `Then`, `And`, `But` and `*`.

-   New lines begin with a keyword

    -   Features start with `Feature`

    -   Test scenarios start with `Scenario`


    Indentation is purely for readability and is not parsed. Similarly, blank lines are ignored by the parser.

-   You can also just create a bulleted list of steps instead of using keywords




## Example

The following example shows the structure of a sample feature file :

```
#!featureFeature: this is the name of the feature

    Here you can describe the feature. Indentation is purely to make 
    this more readable for you. This section will not be used for 
    testing, it is solely for human consumption.

  Scenario: this is the scenario's name

      This is a comment about the scenario

    Given you make a certain assumption here
    And you make another assumption
    When some action is taken
    Then there is an expected response that you write here
    But there is an exception you should test for

  # comment lines must start with #, and will be skipped by the parser

  Scenario: another scenario's name
    * you can also just create a bulleted list of steps
    * instead of using keywords
```

