<!-- loio2cc6c03336954133beea3bd3dcac60db -->

# Influencing the Request Dynamically

You can retrieve and add table configuration before a table rebind.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

Before a table rebind, you can retrieve the sorters and filters applied to the table as well as the complete binding information. You can also add sorters, filters, and additional properties using the methods on the [`CollectionBindingInfo`](https://ui5.sap.com/#/api/sap.fe.macros.CollectionBindingInfo%23overview) object.

To do so, first add the `beforeRebindTable` key to the table settings in `manifest.json`.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "controlConfiguration": {
>     _Child/@com.sap.vocabularies.UI.v1.LineItem: {
>         "tableSettings": {
>             "beforeRebindTable": ".extension.sap.fe.core.fpmExplorer.OPExtend.onTableRefresh"
>         }
>     }
> }
> ```

Then, configure the controller extension for the object page.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "extends": {
>         "extensions": {
>             "sap.ui.controllerExtensions": {
>                 "sap.fe.templates.ObjectPage.ObjectPageController": {
>                     "controllerName": "sap.fe.core.fpmExplorer.OPExtend"
>                 }
>             }
>         }
>     }
> }
> 
> ```

Finally, implement the `beforeRebindTable` extension in your controller extension.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> sap.ui.define(
>     ["sap/ui/core/mvc/ControllerExtension", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"],
>     function (ControllerExtension, Filter, FilterOperator) {
>         "use strict";
> 
>         return ControllerExtension.extend("sap.fe.core.fpmExplorer.OPExtend", {
>             onTableRefresh: function (event) {
>                 var collectionBindingInfoAPI = event.getParameters("collectionBindingInfo");
> 
>                 //Add a filter
>                 var filter = new Filter({
>                     path: "BooleanProperty",
>                     operator: FilterOperator.EQ,
>                     value1: false
>                 });
>                 collectionBindingInfoAPI.addFilter(filter);
> 
>                 //Add a sorter
>                 var sorter = new Sorter("ID", true);
>                 collectionBindingInfoAPI.addSorter(sorter);
> 
>                 //Request an additional property to the request
>                 collectionBindingInfoAPI.addSelect(["TagStatus"]);                                             }
>             });
>     }
> );
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Custom Column](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/customColumn) and [Building Blocks - Table - Extensions - Custom Action](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/customTableAction).

> ### Note:  
> The `beforeRebindTable` extension is also available when using the `Table` building block. For more information, see [The Table Building Block](the-table-building-block-3801656.md).



<a name="loio2cc6c03336954133beea3bd3dcac60db__section_ynr_vff_sfc"/>

## Retrieving the Row Count of Tables

You can use the `getCount()` method to retrieve the number of rows loaded in a table and display the number in a tile or a data field. To do that, configure the `beforeRebindTable` section of the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "beforeRebindTable": ".extension.sap.fe.core.fpmExplorer.customListReportHeaderContent.LRExtend.beforeRebindTableLR"
>         }
>     }
> },
> 
> ```

Next, add a function to the controller extension as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> beforeRebindTableLR: function (event) {
>     let collectionBindingInfoAPI = event.getParameter("collectionBindingInfo");
>     collectionBindingInfoAPI.attachEvent(
>         "dataReceived",
>         () => {
>             let tableCount = this.getView()
>                 .byId("sap.fe.core.fpmExplorer.customListReportHeaderContent::Default--fe::table::RootEntity::LineItem::Table")
>                 .getCount();
>             this.getView().byId("sap.fe.core.fpmExplorer.customListReportHeaderContent::Default--numericId").setValue(tableCount);
>         },
>         this
>     );
>     collectionBindingInfoAPI.attachEvent(
>         "refresh",
>         () => {
>             let tableCount = this.getView()
>                 .byId("sap.fe.core.fpmExplorer.customListReportHeaderContent::Default--fe::table::RootEntity::LineItem::Table")
>                 .getCount();
>             this.getView().byId("sap.fe.core.fpmExplorer.customListReportHeaderContent::Default--numericId").setValue(tableCount);
>         },
>         this
>     );
> }
> 
> ```

