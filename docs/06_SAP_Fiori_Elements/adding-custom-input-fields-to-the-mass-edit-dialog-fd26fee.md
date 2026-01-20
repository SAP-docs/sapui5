<!-- loiofd26feeff61e4b6194ad48c579bac17e -->

# Adding Custom Input Fields to the Mass Edit Dialog

You can add custom input fields to the mass edit dialog by defining them in the manifest.



<a name="loiofd26feeff61e4b6194ad48c579bac17e__section_rwz_4md_bdc"/>

## Additional Features in SAP Fiori Elements for OData V2

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



<a name="loiofd26feeff61e4b6194ad48c579bac17e__section_jyd_tmd_bdc"/>

## Additional Features in SAP Fiori Elements for OData V4

You can add a custom fragment to the *Mass Edit* dialog by defining the `customFragment` property in the `manifest.json` file.

> ### Note:  
> -   Controls in custom extensions must be surrounded by a `FormContainer`.
> 
> -   You must provide stable IDs for the custom input fields.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "options": {
>     "settings": {
>         "contextPath": "/RootEntity",
>         "variantManagement": "Control",
>         "controlConfiguration": {
>             "_Child/@com.sap.vocabularies.UI.v1.LineItem": {
>                 "tableSettings": {
>                     "type": "GridTable",
>                     "enableMassEdit":{
>                         "customFragment": "sap.fe.core.fpmExplorer.ext.fragment.customMassEdit"
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns:form="sap.ui.layout.form" xmlns:core="sap.ui.core" xmlns="sap.m">
>     <form:FormContainer>
>         <form:formElements>
>             <form:FormElement label="Execute with the custom Save">
>                 <form:fields>
>                     <CheckBox id="myCheckBox"/>
>                 </form:fields>
>             </form:FormElement>
>         </form:formElements>
>     </form:FormContainer>
> </core:FragmentDefinition>
> ```

Next, implement the `customMassEditSave` function within the list report or object page controller extension. For more information, see [Replacing the Standard Save Functionality in the Mass Edit Dialog](replacing-the-standard-save-functionality-in-the-mass-edit-dialog-492d8a9.md).

> ### Sample Code:  
> ```
> sap.ui.define(
>     [
>         "sap/ui/core/mvc/ControllerExtension",
>         "sap/m/MessageToast",
>         "sap/ui/core/Core"
>     ],
>     function (ControllerExtension, Filter, FilterOperator, IllustratedMessage, IllustratedMessageType, MessageToast, Core) {
>         "use strict";
> 
>         return ControllerExtension.extend("sap.fe.core.fpmExplorer.OPExtend", {
>             override: {
>                 editFlow: {
>                     customMassEditSave: async function (aParameters) {
>                         // aParameters.aContexts: array containing the selected contexts for the mass edit
>                         // aParameters.oUpdateData: a dictionary containing the propertyPath and its updated value
>                         
>                         //Retrieve the control within the custom fragment
>                         const isSelected = Core.byId("customMassEdit--myCheckBox").getSelected();
> 
>                         //Execute the custom save action if selected
>                         if (isSelected){
>                             await this.base.editFlow
>                             .invokeAction("Service.customUpdateAction", {
>                                 contexts: aParameters.aContexts,
>                                 parameterValues: aParameters.oUpdateData
>                             })
>                             .catch(function (e){
>                                 MessageToast.show("Custom save failed");
>                             });
>                         }
>                         //Do not execute the default mass-edit if custom save was selected
>                         return isSelected;
>                     }
>                 }
>             }
>         });
>     }
> );
> ```

**Related Information**  


[Enabling Editing Using a Dialog \(Mass Edit\) in the List Report](enabling-editing-using-a-dialog-mass-edit-in-the-list-report-7cc4f04.md "You can edit a single object or multiple objects using a dialog in the list report page.")

