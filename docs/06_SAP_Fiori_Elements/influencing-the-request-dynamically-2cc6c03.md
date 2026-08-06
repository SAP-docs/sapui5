<!-- loio2cc6c03336954133beea3bd3dcac60db -->

# Influencing the Request Dynamically

The `beforeRebindTable` extension point allows you to modify table data requests before binding by dynamically adding filters, sorters, and properties to the table request in SAP Fiori elements for OData V4.

Before a table rebind, you can retrieve the sorting and filters applied to the table as well as the complete binding information. You can also add sorting, filters, and additional properties using the methods on the `CollectionBindingInfo` object. For more information, see the [API reference](https://ui5.sap.com/#/api/sap.fe.macros.CollectionBindingInfo%23overview).



## Influencing the Table Request Dynamically in the Standard Floorplans

To influence the table request, first add the `beforeRebindTable` key to the table settings in `manifest.json`.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "controlConfiguration": {
>     "_Child/@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "beforeRebindTable": ".extension.sap.fe.core.fpmExplorer.OPExtend.onTableRefresh"
>         }
>     }
> }
> ```

Then, configure the controller extension for the page.

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
> Controller Extension
> 
> ```javascript
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
>                 collectionBindingInfoAPI.addSelect(["TagStatus"]);
>             }
>         });
>     }
> );
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Standard Floorplans - Extensions - Extensions for List-Based Pages - Custom Header](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/floorplanListReport/customHeaderListReport) and [Building Blocks - Table - Table Selection Example](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableSelection).



## Influencing the Request Dynamically Using the `Table` Building Block

The `beforeRebindTable` extension is also available when using the `Table` building block.

To influence the table request, first add the `beforeRebindTable` key to the table definition as shown in the following sample code:

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <macros:Table 
>     metaPath="@com.sap.vocabularies.UI.v1.LineItem" 
>     readOnly="true" 
>     id="LineItemTablePageCustomActions" 
>     isSearchable="false" 
>     beforeRebindTable=".tableRefreshed" 
> >
> 
> ```

Then, implement the `beforeRebindTable` extension point in the controller extension of the page.

> ### Sample Code:  
> Controller Extension
> 
> ```javascript
> sap.ui.define(
>     ["sap/fe/core/PageController", "sap/m/MessageBox", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/Sorter"],
>     function (PageController, MessageBox, Filter, FilterOperator, Sorter) {
>         "use strict";
> 
>         return PageController.extend("sap.fe.core.fpmExplorer.tableCustoms.Page", {
>             tableRefreshed(event) {
>                 var collectionBindingInfoAPI = event.getParameters("collectionBindingInfo");
> 
>                 // Add a filter
>                 var filter = new Filter({
>                     path: "BooleanProperty",
>                     operator: FilterOperator.EQ,
>                     value1: false
>                 });
>                 collectionBindingInfoAPI.addFilter(filter);
> 
>                 // Add a sorter
>                 var sorter = new Sorter("ID", true);
>                 collectionBindingInfoAPI.addSorter(sorter);
> 
>                 // Request an additional property to the request
>                 collectionBindingInfoAPI.addSelect(["TagStatus"]);
>             }
>         });
>     }
> );
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Custom Action](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/customTableAction).

