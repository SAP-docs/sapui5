<!-- loio492d8a9844d4461b94406e1676027265 -->

# Replacing the Standard Save Functionality in the Mass Edit Dialog

You can enable custom save functionality for the mass edit dialog.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

In the extension function, you can define the logic to save the data provided in the mass edit dialog. The default save functionality is executed by the framework if the extension is not defined. Clean up tasks, such as closing the dialog, are performed by the framework after the extension logic is executed.

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

**Related Information**  


[Enabling Editing Using a Dialog \(Mass Edit\) in the List Report](enabling-editing-using-a-dialog-mass-edit-in-the-list-report-7cc4f04.md "You can edit a single object or multiple objects using a dialog in the list report page.")

