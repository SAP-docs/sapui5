<!-- loio492d8a9844d4461b94406e1676027265 -->

# Replacing the Standard Save Functionality in the Mass Edit Dialog

You can enable custom save functionality for the mass edit dialog.

In the extension function, you can define the logic to save the data provided in the mass edit dialog. The default save functionality is executed by the framework if the extension is not defined. Clean-up tasks, such as closing the dialog, are performed by the framework after the extension logic is executed.



<a name="loio492d8a9844d4461b94406e1676027265__section_e4p_hxc_bdc"/>

## Additional Features in SAP Fiori Elements for OData V2

You can implement the `beforeMultiEditSaveExtension` function within the list report or controller extension.

> ### Sample Code:  
> ```
> beforeMultiEditSaveExtension: function (aContextsToBeUpdated) {
>             //aContextsToBeUpdated - The array of objects containing the contexts to be updated and the updated value.
>             //aContextsToBeUpdated[].sContextPath - The context path for the child to be updated.
>             //aContextsToBeUpdated[].oUpdateData - The Object with the updated values for the selected properties in the multi edit dialog.
>             var oApi = this.extensionAPI;
>               return new Promise(function(fnResolve,fnReject){
>                 var oPromise = oApi.invokeActions("STTA_SALES_ORDER_ND_SRV_01/STTA_C_SO_SalesOrder_NDSetopportunityid", [], aContextsToBeUpdated);//Your function import for save here
>                 oPromise.then(fnResolve,fnReject);
>         });
> ```



<a name="loio492d8a9844d4461b94406e1676027265__section_nvr_byc_bdc"/>

## Additional Features in SAP Fiori Elements for OData V4

You can implement the `customMassEditSave` function within the list report or object page controller extension. The default save functionality will not be executed when the `customMassEditSave` function returns `true`.

> ### Sample Code:  
> ```
> sap.ui.define(
>     [
>         "sap/ui/core/mvc/ControllerExtension",
>         "sap/m/MessageToast"
>     ],
>     function (ControllerExtension, Filter, FilterOperator, IllustratedMessage, IllustratedMessageType, MessageToast) {
>         "use strict";
> 
>         return ControllerExtension.extend("sap.fe.core.fpmExplorer.OPExtend", {
>             override: {
>                 editFlow: {
>                     customMassEditSave: async function (aParameters) {
>                         // aParameters.aContexts: array containing the selected contexts for the mass edit
>                         // aParameters.oUpdateData: a dictionary containing the propertyPath and its updated value
>                         
>                         //Execute the custom save action
>                         await this.base.editFlow
>                         .invokeAction("Service.customUpdateAction", {
>                             contexts: aParameters.aContexts,
>                             parameterValues: aParameters.oUpdateData
>                         })
>                         .catch(function (e){
>                             MessageToast.show(e.toString());
>                         });
>     
>                         //Do not execute the default mass-edit
>                         return true;
>                     }
>                 }
>             }
> 
>         });
>     }
> );
> ```

**Related Information**  


[Enabling Editing Using a Dialog \(Mass Edit\)](enabling-editing-using-a-dialog-mass-edit-965ef5b.md "Mass editing allows users to simultaneously change multiple objects that share the same editable properties.")

