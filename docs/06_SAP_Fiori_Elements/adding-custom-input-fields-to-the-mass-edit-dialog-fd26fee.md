<!-- loiofd26feeff61e4b6194ad48c579bac17e -->

# Adding Custom Input Fields to the Mass Edit Dialog

You can add custom input fields to the mass edit dialog by defining them in the manifest.

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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adding Custom Input Fields to the Mass Edit Dialog](adding-custom-input-fields-to-the-mass-edit-dialog-b15bfac.md).

**Related Information**  


[Enabling Editing Using a Dialog \(Mass Edit\) in the List Report](enabling-editing-using-a-dialog-mass-edit-on-the-list-report-page-7cc4f04.md "You can edit a single object or multiple objects using a dialog in the list report page.")

