<!-- loio28e95702b5854b938ac51c4bc2d078ab -->

# Example: Adding Columns to a Responsive Table in the List Report

You have to implement two extension points to add a custom column to a table.



<a name="loio28e95702b5854b938ac51c4bc2d078ab__context_zty_d2g_tnb"/>

## Context

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

 <a name="task_r4q_j3g_d4b"/>

<!-- task\_r4q\_j3g\_d4b -->

## Additional Features in SAP Fiori Elements for OData V2



## Context

For information about the configuration options and examples for defining custom columns in smart tables, see [Smart Table](../10_More_About_Controls/smart-table-bed8274.md).

The table containing additional custom columns can look like this:

   
  
**Custom columns in responsive table**

 ![](images/Add_columns_to_responsive_table_in_list_report_4efc171.png "Custom columns in responsive table") 



<a name="task_r4q_j3g_d4b__steps_g4h_lj1_5nb"/>

## Procedure

1.  Define a fragment for the view extension.

    For a custom column in a responsive table, you have to implement two extensions. First, implement the definition of the custom columns, then, implement the content of the custom columns.

    You can change the sequence of the columns via the `customData` property `columnIndex`, as shown in the sample code below.

    > ### Note:  
    > If the content of your custom column refers to a property \(such as`{Price}`\), you need to include a corresponding `"leadingProperty"` entry in the `CustomData` of the column definition.

    > ### Sample Code:  
    > ```
    > <core:FragmentDefinition xmlns:core="sap.ui.core"
    >        xmlns="sap.m">
    >        <Column>
    >               <Text text="{i18n|sap.suite.ui.generic.template.ListReport|STTA_C_MP_Product>xfld.Rating}" />
    >               <customData>
    >                      <core:CustomData key="p13nData"
    >                             value='\{"columnKey": "Rating", "leadingProperty":"Price", "columnIndex" : "100"}' />
    >               </customData>
    >        </Column>
    >        <Column>
    >               <Text text="{i18n|sap.suite.ui.generic.template.ListReport|STTA_C_MP_Product>xfld.BreakoutColumn}" />
    >               <customData>
    >                      <core:CustomData key="p13nData"
    >                             value='\{"columnKey": "Test", "columnIndex" : "101"}' />
    >               </customData>
    >        </Column>
    > </core:FragmentDefinition>
    > 
    > ```

    In the example project webapp/ext/fragments/ListReportResponsiveTableColumns.fragment.xml, enter the following:

    > ### Sample Code:  
    > ```
    > <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
    >        <RatingIndicator value="{= ${Price} > 500 ? 1:5}"></RatingIndicator>
    >        <Text text="{i18n|sap.suite.ui.generic.template.ListReport|STTA_C_MP_Product>xfld.BreakoutColumnContent}"></Text>
    > </core:FragmentDefinition>
    > 
    > ```

2.  Register your view extensions in the `manifest.json` file of your application, as follows:

    > ### Sample Code:  
    > ```
    > ...
    >  "extends": {
    >       "extensions": {
    >         "sap.ui.viewExtensions": {
    >           "sap.suite.ui.generic.template.ListReport.view.ListReport": { 
    >             "ResponsiveTableColumnsExtension|STTA_C_MP_Product": {
    >                   "className": "sap.ui.core.Fragment",
    >                   "fragmentName": "STTA_MP.ext.fragments.ListReportResponsiveTableColumns",
    >                   "type": "XML"
    >             },
    >             "ResponsiveTableCellsExtension|STTA_C_MP_Product": {
    >                   "className": "sap.ui.core.Fragment",
    >                   "fragmentName": "STTA_MP.ext.fragments.ListReportResponsiveTableCells",
    >                   "type": "XML"
    >             },...
    > 
    > ```

    If you use `QuickVariantSelectionX`, you need to define the extensions per tab. In this case, the names of the extension points are`ResponsiveTableColumnExtension|<EntitySet>|<tabKey>` and `ResponsiveTableCellsExtensions|<EntitySet>|<tabKey>`, respectively. `<tabKey>` is the key provided when defining the `QuickVariantSelectionX`. See also [Defining Multiple Views on a List Report Table - Multiple Table Mode](defining-multiple-views-on-a-list-report-table-multiple-table-mode-37aeed7.md).

    > ### Note:  
    > If you do not use |<tab key\> as part of the extension point name, for compatibility reasons, the feature will also work. However, you cannot provide stable IDs for the columns and cells.

    > ### Sample Code:  
    > ```
    > ...
    > "extends": {
    >   "extensions": {
    >     "sap.ui.viewExtensions": {
    >      "sap.suite.ui.generic.template.ListReport.view.ListReport": { 
    >         "ResponsiveTableColumnsExtension|STTA_C_MP_Product|Expensive": {
    >           "className": "sap.ui.core.Fragment",
    >          "fragmentName": "STTA_MP.ext.fragments.ListReportResponsiveTableColumnsExpensive",
    >           "type": "XML"
    >         },
    >         "ResponsiveTableCellsExtension|STTA_C_MP_Product|Expensive": {
    >           "className": "sap.ui.core.Fragment",
    >           "fragmentName": "STTA_MP.ext.fragments.ListReportResponsiveTableCellsExpensive",
    >           "type": "XML"
    >         },
    >         "ResponsiveTableColumnsExtension|STTA_C_MP_Product|Cheap": {
    >           "className": "sap.ui.core.Fragment",
    >          "fragmentName": "STTA_MP.ext.fragments.ListReportResponsiveTableColumnsCheap",
    >           "type": "XML"
    >         },
    >         "ResponsiveTableCellsExtension|STTA_C_MP_Product|Cheap": {
    >           "className": "sap.ui.core.Fragment",
    >           "fragmentName": "STTA_MP.ext.fragments.ListReportResponsiveTableCellsCheap",
    >           "type": "XML"
    >         },...
    > 
    > ```

    > ### Note:  
    > In case the fragment needs to be re-used for multiple tabs, the `id` property must be set to make the ids unique.

    > ### Sample Code:  
    > ```
    > ... "extends":{
    >    "extensions":{
    >       "sap.ui.viewExtensions":{
    >          "sap.suite.ui.generic.template.ListReport.view.ListReport":{
    >             "ResponsiveTableColumnsExtension|STTA_C_MP_Product|Expensive":{
    >                "className":"sap.ui.core.Fragment",
    >                "fragmentName":"STTA_MP.ext.fragments.ListReportResponsiveTableColumnsExpensive",
    >                "type":"XML",
    >                "id":"Expensive"
    >             
    > },
    >             "ResponsiveTableCellsExtension|STTA_C_MP_Product|Expensive":{
    >                "className":"sap.ui.core.Fragment",
    >                "fragmentName":"STTA_MP.ext.fragments.ListReportResponsiveTableCellsExpensive",
    >                "type":"XML",
    >                "id":"Expensive"
    >             
    > },
    >             "ResponsiveTableColumnsExtension|STTA_C_MP_Product|Cheap":{
    >                "className":"sap.ui.core.Fragment",
    >                "fragmentName":"STTA_MP.ext.fragments.ListReportResponsiveTableColumnsCheap",
    >                "type":"XML",
    >                "id":"Cheap"
    >             
    > },
    >             "ResponsiveTableCellsExtension|STTA_C_MP_Product|Cheap":{
    >                "className":"sap.ui.core.Fragment",
    >                "fragmentName":"STTA_MP.ext.fragments.ListReportResponsiveTableCellsCheap",
    >                "type":"XML",
    >                "id":"Cheap"
    >             
    > },…
    > 
    > ```


 <a name="task_k4t_zkg_d4b"/>

<!-- task\_k4t\_zkg\_d4b -->

## Additional Features in SAP Fiori Elements for OData V4



## Context

You can find a detailed description of how to add custom columns to a table in the topic [Extension Points for Tables](extension-points-for-tables-d525522.md).

