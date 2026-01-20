<!-- loiofa9defba2fd94f438424e3a41c19b3ac -->

# Interacting with a Table Using the API

You can interact with and influence any table generated through annotations using all the properties and methods available on the `Table` building block.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

To interact with a table, you need to find the `id` of the `TableAPI` control.

Open the browser's developer tools and search for the `"<ApplicationId>::<PageId>–fe::table::<Entity name or navigation property>::LineItem::Table"` string where:

-   `ApplicationId` is the `id` of the application, which is found in the `manifest.json` file.
-   `PageId` is the `id` of the page.
-   Entity name is used for list report pages.
-   Navigation property is used for object pages and custom pages.

> ### Tip:  
> Within a controller extension, you can use the shorter form: `"fe::table::<Entity name or navigation property>::LineItem::Table"`.

Then, you can use any of the `Table` API properties and aggregations.

For more information about the `Table` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table). 

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableDefault).

