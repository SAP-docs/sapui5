<!-- loioa6946a8d5ec0432ea7d1771df6a6474e -->

# Rebinding a Table with Each Instance Change on an Object Page

You can rebind a table on each instance change in an object page.



## Context

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

A table in an object page rebinds itself only the first time when the table initializes. When you switch your object page instances, the table only refreshes but does not rebind.

Follow the below steps to rebind a table on each instance change in an object page:



## Procedure

1.  In the manifest file, identify the ID of the subsection in which the table is located, for example `subsection1`. Add the following properties under the `section` settings of your object page in the manifest file:

    ```
    
    "loadingBehavior":{
    	"waitForHeaderData":true,
    	"waitForViewportEnter":true/false
    }
    ```

    In these settings, it is mandatory to set `waitForHeaderData` to `true`. Otherwise, multiple batch calls will be triggered for the same table. You can make settings for `waitForViewportEnter` based on your preference. For more information, see [Defining the Loading Behavior of Object Page Subsections](defining-the-loading-behavior-of-object-page-subsections-6b84249.md).

2.  In the extension file, add the `attachPageDataLoaded` event. For example, `this.oController.extensionAPI.attachPageDataLoaded(this.rebindSalesorderItemTable.bind(this));`.

3.  In the `pageDataLoaded` event handler, rebind the table that has a specific ID by using the extension API. For example, `this.oController.extensionAPI.rebind(salesOrderItemTableId);`.




<a name="loioa6946a8d5ec0432ea7d1771df6a6474e__result_vgv_qx3_xlb"/>

## Results

With the above steps, the table rebinds every time the object page instance is switched.



> ### Sample Code:  
> ```
> 
> /* Controller Implementation (CI) for the Sales Order object page */
> sap.ui.define(["sap/ui/base/Object", "sap/m/MessageBox", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"
> ], function(BaseObject, MessageBox, Filter, FilterOperator) {
>     "use strict";
> 
>     var salesOrderItemTableId = "STTASOWD20::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrder_WD_20--SalesOrderItemsID::Table";
> 
>     return BaseObject.extend("STTASOWD20.ext.controller.CISalesOrder", {
>         
>         onInit: function(oController){
>             this.oController = oController;
>             // Example to show attachpageDataLoaded event consumption.
>              this.oController.extensionAPI.attachPageDataLoaded(this.rebindSalesorderItemTable.bind(this));
> 
>         },
>         rebindSalesorderItemTable: function() {
>             // Example to show how to rebind a particular table, each time when binding context changes. For example switching from
>             // display to edit or edit to display mode or whenever changing the object page instance.
>             // To achieve this efficiently first of all go to the manifest and do following setting under "sections" of your object page
>             // "loadingBehavior":{
>             //  "waitForHeaderData":true,
>             //  "waitForViewportEnter":true
>             // }
>             // then attach a page data loaded event as we have registered above in on init
>             // oApi.attachPageDataLoaded(this.rebindSalesorderItemTable.bind(this));
>             // Now below lines will do the rest of the job
>             // rebind the table having specific id.
>             this.oController.extensionAPI.rebind(salesOrderItemTableId);
>         },
>         onBeforeRebindTableExtension: function (oEvent) {
>             // Filter a specific table based on table id, because this method is called before
>             // rebinding of every table.
>             if(oEvent.getSource().getId()=== salesOrderItemTableId) {
>                 // You can add additional filters, remove some, add sort order etc here in the following way
> 
>                 // var filter = new Filter("so_item_pos", FilterOperator.GE, "1");
>                 // oEvent.mParameters.bindingParams.filters.push(filter);
>             }
>             
>         },
> 
>     });
> });
> 
> ```

**Related Information**  


[Defining the Loading Behavior of Object Page Subsections](defining-the-loading-behavior-of-object-page-subsections-6b84249.md "You can define the loading behavior of subsections in an object page in the manifest settings.")

