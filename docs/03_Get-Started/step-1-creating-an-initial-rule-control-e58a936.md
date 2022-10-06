<!-- loioe58a93699db5489a9ca1dfabbd431782 -->

# Step 1: Creating an Initial Rule Control

In this step, we embed a rule control into an application view.

The `RuleBuilder` component is a container of rules controls, which can bundle different visualization means. Currently the only visualization available is the decision table. The `RuleBuilder` defines common rules UI consumption patterns and APIs to be followed by UI developers.

In this example, we create a decision table, which will use the guided input mode.

> ### Note:  
> Guided input mode is predefined in the settings for each condition column in the data for this tutorial.



<a name="loioe58a93699db5489a9ca1dfabbd431782__section_mjx_fn3_rz"/>

## Coding

You can view and download all files at [Rule Builder - Guided Decision Table](https://ui5.sap.com/#/entity/sap.rules.ui.RuleBuilder/sample/sap.rules.ui.sample.GuidedDecisionTable).



<a name="loioe58a93699db5489a9ca1dfabbd431782__section_e3n_xn3_rz"/>

## Page.view.xml

```xml
<mvc:View
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        controllerName="sap.rules.ui.sample.GuidedDecisionTable.Page"
        viewName="sap.rules.ui.sample.GuidedDecisionTable.Page.view"
        xmlns:rules="sap.rules.ui">
    <Button id="editButton" press="handleEditButton" text="Edit"/>
    <rules:RuleBuilder id="ruleBuilder" types="DecisionTable" editable="false"/>
</mvc:View> 

```

We add to the view a `RuleBuilder` control of type `DecisionTable`.

The above code will place and render the `RuleBuilder` control in the view without data. Initially, the control is set to Display mode, which means that the decision table cannot be edited. The *Edit* button allows users to change the mode for editing.

Now we need to connect the `ExpressionLanguage` object association to the `RuleBuilder`, which we do in the next step, and then the control loads its data via the OData model.

