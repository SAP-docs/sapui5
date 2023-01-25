<!-- loiob5a51358b3574aea9143fa50ae4e0e2a -->

# Create a Ruleset for a Library

The Support Assistant allows you to create your own ruleset.



<a name="loiob5a51358b3574aea9143fa50ae4e0e2a__section_lqs_mmh_vbb"/>

## Choose Your Ruleset Location

A ruleset is a `library.support.js` file that defines an object `name` and `niceName` and returns a set of rules. Before you create a rule, you need to create a ruleset at a specific location. You can follow these steps as an example:

1.  Open the respective library project. Let's say that your library is part of OpenUI5, open the project in `openui5([openui5.git]/src/sap.ui.support/src/sap/m)`.

2.  Create a JavaScript file with name `library.support.js` in the root folder where `library.js` is placed.

3.  Add an extensions property in the `initLibrary()` function of the `library.js` file and there add `sap.ui.support` extension.

    If your library contains public rules it will look like this:

    ```
    …
    extensions: {
        //Configuration used for rule loading of Support Assistant
        "sap.ui.support": {
          publicRules: true
        }
    …
    
    
    ```

4.  Create a folder to hold the rules. For example, if the library name is `sap.m`, the folder structure, if there isn’t one already created, should be `src/sap/m/rules`.


Here is an example of folder structure depending on the location of your ruleset:

**Ruleset Folder Structure**


<table>
<tr>
<th valign="top">

Location



</th>
<th valign="top">

Folder Structure



</th>
</tr>
<tr>
<td valign="top">

 OpenUI5 



</td>
<td valign="top">

\[openui5.git\]/src/sap.m/src/sap/m/



</td>
</tr>
<tr>
<td valign="top">

Reuse library



</td>
<td valign="top">

\[project\]/src/\[library path\]



</td>
</tr>
</table>



<a name="loiob5a51358b3574aea9143fa50ae4e0e2a__section_oq3_fbp_vcb"/>

## Add `.supportrc` file

Each library should have a `.supportrc` file placed at its root folder. It is a simple JSON file specifying availability of public and internal rules per library. The `.supportrc` file defines whether to load ruleset files of the respective library. This reduces the number of redundant requests to load the respective ruleset library files.

Here is an example of `.supportrc file`:

```
{
  "publicRules": true,
  "internalRules": true
}

```

> ### Note:  
> If a `.supportrc` file doesn't exist, a library is considered not to have any rulesets. Therefore, all ruleset developers should add a `.supportrc` file to their libraries root folders. Have in mind that if a ruleset property is missing, its value is considered to be false.



<a name="loiob5a51358b3574aea9143fa50ae4e0e2a__section_ugb_whc_wbb"/>

## Add `SupportLib`

Once you choose the correct location for the `library.support.js`, the next step is to add the `SupportLib`. It provides a set of constants and enumerations you can use to define the rules inside the `library.support.js`. After creating your rules, return an object holding all of them and a `name/niceName` to specify their library.

Here is an example of how to add and use the `SupportLib`:

```js
sap.ui.define(["sap/ui/support/library"],
  function(SupportLib) {
    "use strict";
    var rule1 = {
      ...
      audiences: [SupportLib.Audiences.Control]
      categories: [SupportLib.Categories.Usability]
        ...
      check: function(oIssueManager, ...) {
        ...
        oIssueManager.addIssue({
          severity: SupportLib.Severity.Medium,
          ...
        });
      }
    };

    var rule2 = {…};

    return {
      name: "sap.ui.core",
      niceName: "UI5 Core Library",
      ruleset: [
        rule1,
        rule2
      ]
    };
  }, true);
```



<a name="loiob5a51358b3574aea9143fa50ae4e0e2a__section_knl_d3c_wbb"/>

## Create Helper Functions \(Optional\)

When creating a more complex ruleset, you may need to create helper functions. It is recommended that those helper functions are separated into a different file that ends in `.support.js` and is located in the same folder as the ruleset.

> ### Note:  
> Helper files must be required by a relative path such as `./CoreHelper.js` so that when the Support Assistant is loaded from a different origin, the file will be required from the correct place.



<a name="loiob5a51358b3574aea9143fa50ae4e0e2a__section_fxb_g3c_wbb"/>

## Split `library.support.js` \(Optional\)

You can also split a `library.support.js` into multiple files.

When creating a ruleset for a bigger library, there may be too many rules and the ruleset will become very big. To avoid this, the rule definitions can be split into multiple files. For example, we might want to split the ruleset of the `sap.m` library by creating a file with rules for each control.

If the `library.support.js` contains rules for `sap.m.Button` and `sap.m.Label`, you can create `Button.support.js` and `Label.support.js` files. After that, the `library.support.js` can require all the rules from those files and create a ruleset.

This is an example of a `library.support.js` before the split:



```js
sap.ui.define(["sap/ui/support/library"],
  function(SupportLib) {
    "use strict";
    var buttonRule = {…};

    var labelRule1 = {…};

    Var labelRule2 = {…};

    return {
      name: "sap.ui.core",
      niceName: "UI5 Core Library",
      ruleset: [
        buttonRule,
        labelRule1,
        labelRule2
      ]
    };
  }, true);
```

In this example there are three rules - one for button and two for label. Splitting these rules to different files is done in the following way:

1.  Create a `Button.support.js` and `Label.support.js` files.

    `Button.support.js`:

    ```js
    sap.ui.define(["sap/ui/support/library"],
      function(SupportLib) {
        "use strict";
        var buttonRule = {…};
    
        return buttonRule;
      }, true);
    
    ```

    `Label.support.js:`

    ```js
    sap.ui.define(["sap/ui/support/library"],
      function(SupportLib) {
        "use strict";
        var labelRule1 = {…};
    
        var labelRule2 = {…};
    
        return [labelRule1, labelRule2];
      }, true);
    
    ```

    > ### Note:  
    > You can return a single rule or an array of rules, as shown in the second example.

2.  Require the newly created files in `library.support.js`:

    ```js
    sap.ui.define(["sap/ui/support/library",
        "./Button.support", "./Label.support"
      ],
      function(SupportLib, ButtonSupport,
        LabelSupport) {
        "use strict";
    
        return {
          name: "sap.ui.core",
          niceName: "UI5 Core Library",
          ruleset: [
            ButtonSupport,
            LabelSupport
          ]
        };
      }, true);
    ```

    > ### Note:  
    > The ruleset property is an array which can contain both rule objects and arrays of rules. In the example, `LabelSupport` returns an array of two rules.


**Related Information**  


[Create a Rule](create-a-rule-c24569d.md "A rule consists of properties that test and advise on how possible issues can be resolved and a check function that tests the application for a specific issue. To create a rule, you need to set the properties and add a check function.")

