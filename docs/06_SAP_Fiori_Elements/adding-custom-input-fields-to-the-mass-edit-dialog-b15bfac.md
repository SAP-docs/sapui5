<!-- loiob15bfaca83a14d0e96ddcb8dc67efa74 -->

# Adding Custom Input Fields to the Mass Edit Dialog

You can add custom input fields to the mass edit dialog by defining them in the `manifest.json` file.

> ### Note:  
> -   Controls in custom extensions must be surrounded by a `GroupElement`.
> 
> -   The application developer must provide stable IDs for the custom input fields. Handle input values using `beforeMultiEditSaveExtension`.

In `ViewExtension`, you can add custom controls inside a `GroupElement` such as a Rating bar, Calendar, and so on. You can add `MultiEditFieldsExtension` under the `manifest.json` file in the extended `sap.ui5`section. `ViewExtension` is supported in both the `annotationPath` and `visibleTable` column scenarios.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "extends": {
>         "extensions": {
>             "sap.ui.viewExtensions":{
>                 "sap.suite.ui.generic.template.ListReport.view.ListReport":{
>                     "MultiEditFieldsExtension|STTA_C_SO_SalesOrder_ND": {  // MultiEditFieldsExtension + Entity
>                         "className": "sap.ui.core.Fragment",
>                         "fragmentName": "STTA_SO_ND.ext.fragments.MultiEditFieldsExtension",
>                         "type": "XML"
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```

> ### Sample Code:  
> Mass Edit Dialog `ViewExtension` with `quickVariantSelectionX`
> 
> ```
> "sap.ui5": {
>     "extends": {
>         "extensions": {
>             "sap.ui.viewExtensions":{
>                 "sap.suite.ui.generic.template.ListReport.view.ListReport":{
>                     "MultiEditFieldsExtension|C_STTA_SalesOrder_WD_20|1": {  // Key identifier need to be added at the end along with pipe.
>                         "className": "sap.ui.core.Fragment",
>                         "fragmentName": "ManageSalesOrderWithTableTabs.ext.fragments.MultiEditFieldsExtension",
>                         "type": "XML"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> "sap.ui.generic.app": {
>     "pages": [{
>         "entitySet": " C_STTA_SalesOrder_WD_20",
>         "component": {
>             "name": "sap.suite.ui.generic.template.ListReport",
>             "list": true,
>             "settings": {
>                 "quickVariantSelectionX": {
>                     "showCounts": true,
>                     "variants": {
>                         "0": {
>                             "key": "1", // <-- key identifier  
>                             "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Expensive",
>                             "tableSettings": {
>                                 "multiEdit":{
>                                     "enabled":true
>                                 },
>                             }
>                         },
>                     }
>                 }
>             }
>         }
>     }]
> }
> 
> ```

> ### Sample Code:  
> `MultiEditFieldsExtension` fragment file
> 
> ```
> <core:FragmentDefinition xmlns:sfo="sap.ui.comp.smartform" xmlns:core="sap.ui.core" xmlns="sap.m">
>     <sfo:GroupElement>
>         <Label text="Rating Bar" labelFor="RI_default"/>
>         <RatingIndicator id="RI_default" maxValue="5" class="sapUiSmallMarginBottom" value="4"/>
>     </sfo:GroupElement>
> </core:FragmentDefinition>
> 
> ```

