<!-- loio10a6ef1b7bf84f59aaf57cb3ea0c9aab -->

# Example: Adding Columns to a Grid Table in the Object Page

To add custom columns to a grid table in the list report, follow the steps described below.



<a name="loio10a6ef1b7bf84f59aaf57cb3ea0c9aab__context_qxx_f22_scb"/>

## Context

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



## Procedure

1.  Define a fragment for the view extension.

    For a custom column in a responsive table, you have to implement two extensions. First, implement the definition of the custom columns and then implement the content of the custom columns.

    In the example project webapp/ext/fragments/ProductTextGridTableColumns.fragment.xml, two columns are added, one containing text, the other containing an action button:

    > ### Sample Code:  
    > ```
    > <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns:table="sap.ui.table" xmlns="sap.m" xmlns:sfi="sap.ui.comp.smartfield">
    >    <table:Column width="150px" >
    >       <Label text="{i18n|sap.suite.ui.generic.template.ObjectPage|STTA_C_MP_Product>xfld.BreakoutColumn}" />
    >       <table:template>
    >          <Text text="{i18n|sap.suite.ui.generic.template.ObjectPage|STTA_C_MP_Product>xfld.BreakoutColumnContent}"></Text>
    >       </table:template>
    >    </table:Column>
    >    <table:Column width="160px">
    >       <Label text="{i18n|sap.suite.ui.generic.template.ObjectPage|STTA_C_MP_Product>xfld.BreakoutColumn}" />
    >       <table:template>
    >          <Button text="GridTab.Button"
    >                  press = "onGridTableBreakoutButtonPress"></Button>
    >       </table:template>
    >    </table:Column>
    > </core:FragmentDefinition>
    > 
    > ```

2.  Register your view extensions in your application's `manifest.json` file as follows:

    > ### Sample Code:  
    > ```
    > "extends": {
    >      "extensions": {
    >          "sap.ui.controllerExtensions": {
    >              ....
    >          }
    >         "sap.ui.viewExtensions": {
    >               .... 
    >               "sap.suite.ui.generic.template.ObjectPage.view.Details": {
    >                      ....
    >                      "GridTableColumnsExtension|STTA_C_MP_ProductText|to_ProductTextNavigation::com.sap.vocabularies.UI.v1.LineItem": {
    >                                "className": "sap.ui.core.Fragment",
    >                                "fragmentName": "STTA_MP.ext.fragments.ProductTextGridTableColumns",
    >                                "type": "XML"
    >                       },
    >             ...
    >  
    > 
    > ```


