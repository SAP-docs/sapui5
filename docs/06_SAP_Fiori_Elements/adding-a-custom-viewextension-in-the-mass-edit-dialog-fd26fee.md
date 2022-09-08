<!-- loiofd26feeff61e4b6194ad48c579bac17e -->

# Adding a Custom ViewExtension in the Mass Edit Dialog

You can add a custom `ViewExtension` to the mass edit dialog by defining it in the manifest.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Note:  
> -   Controls in custom extensions must be surrounded by `GroupElement`.
> 
> -   The application team must provide stable IDs for the custom input fields. Handle input valuesusing `beforeMultiEditSaveExtension`.

In `ViewExtension`, you can add custom controls inside a `GroupElement` such as a Rating bar, Calendar, etc. `MultiEditFieldsExtension` is added under the `manifest.json` file in the `sap.ui5` extends section. `ViewExtension` is supported in both the `annotationPath` and `visibleTable` column scenarios.

Configured extension in manifest and file of extension must be present in `ext >` fragments.

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
> 
> > ### Sample Code:  
> > `MultiEditFieldsExtension` fragment file
> > 
> > ```
> > <core:FragmentDefinition xmlns:sfo="sap.ui.comp.smartform" xmlns:core="sap.ui.core" xmlns="sap.m">
> >     <sfo:GroupElement>
> >         <Label text="Rating Bar" labelFor="RI_default"/>
> >         <RatingIndicator id="RI_default" maxValue="5" class="sapUiSmallMarginBottom" value="4"/>
> >     </sfo:GroupElement>
> > </core:FragmentDefinition>
> > 
> > ```

**Related Information**  


[Enabling Editing Using a Dialog \(Mass Edit\) in the List Report](enabling-editing-using-a-dialog-mass-edit-in-the-list-report-7cc4f04.md "You can edit a single object or multiple objects using a dialog in the list report page.")

