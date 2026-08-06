<!-- loio36793703ad39479ab648485ed9520feb -->

# Retrieving the Row Count of Tables

The `getCount()` method enables you to dynamically retrieve and display the number of loaded table rows in SAP Fiori elements for OData V4. Use this approach when you need real-time row counts that update automatically when table data changes.

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

