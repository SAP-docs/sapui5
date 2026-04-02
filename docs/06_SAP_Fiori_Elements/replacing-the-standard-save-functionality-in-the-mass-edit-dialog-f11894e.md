<!-- loiof11894ee29cf4af0941dc18bd72e53e6 -->

# Replacing the Standard Save Functionality in the Mass Edit Dialog

You can enable a custom save functionality for the mass edit dialog.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Replacing the Standard Save Functionality in the Mass Edit Dialog](replacing-the-standard-save-functionality-in-the-mass-edit-dialog-492d8a9.md).

In the extension function, you can define the logic to save the data provided in the mass edit dialog. The default save functionality is executed by the framework if the extension is not defined. Clean-up tasks, such as closing the dialog, are performed by the framework after the extension logic is executed.

You can implement the `beforeMultiEditSaveExtension` function within the list report page or controller extension.

> ### Sample Code:  
> ```
> 
> beforeMultiEditSaveExtension: function (aContextsToBeUpdated) {
>     //aContextsToBeUpdated - The array of objects containing the contexts to be updated and the updated value.
>     //aContextsToBeUpdated[].sContextPath - The context path for the child to be updated.
>     //aContextsToBeUpdated[].oUpdateData - The Object with the updated values for the selected properties in the multi edit dialog.
>     var oApi = this.extensionAPI;
>     return new Promise(function(fnResolve,fnReject){
>         var oPromise = oApi.invokeActions("STTA_SALES_ORDER_ND_SRV_01/STTA_C_SO_SalesOrder_NDSetopportunityid", [], aContextsToBeUpdated);//Your function import for save here
>         oPromise.then(fnResolve,fnReject);
>     });
> }
> ```

**Related Information**  


[Enabling Editing Using a Dialog \(Mass Edit\)](enabling-editing-using-a-dialog-mass-edit-e67782c.md "You can enable the mass edit feature to allow users to simultaneously change multiple objects that share the same editable properties.")

