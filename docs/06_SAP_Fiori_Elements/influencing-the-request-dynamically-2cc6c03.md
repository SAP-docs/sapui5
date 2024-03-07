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

Check out our live examples in the flexible programming model explorer:

-   [Table Extensibility](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/tableExtensibility)

-   [Table - Custom Columns / Actions](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableCustoms)


> ### Note:  
> The same extension point is also available when using the `Table` building block. For more information, see [The Table Building Block](the-table-building-block-3801656.md).

