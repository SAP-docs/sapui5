<!-- loioeefe8c641bee4a46a88c56cb26dc072c -->

# Step 1: Creating a Rule Control

In this step, we embed rule builder of type `TextRule` into an application view.



<a name="loioeefe8c641bee4a46a88c56cb26dc072c__section_mjx_fn3_rz"/>

## Coding

You can view and download all files at [Rule Builder - Text Rule](https://ui5.sap.com/#/entity/sap.rules.ui.RuleBuilder/sample/sap.rules.ui.sample.TextRule).



<a name="loioeefe8c641bee4a46a88c56cb26dc072c__section_e3n_xn3_rz"/>

## Page.view.xml

```xml
<mvc:View
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m"
        controllerName="sap.rules.ui.sample.TextRule.Page"
        viewName="sap.rules.ui.sample.TextRule.Page.view"
        xmlns:rules="sap.rules.ui">
    <Button id="editButton" press="handleEditButton" text="Edit"/>
    <rules:RuleBuilder id="ruleBuilder" types="TextRule" editable="false"/>
</mvc:View> 

```

