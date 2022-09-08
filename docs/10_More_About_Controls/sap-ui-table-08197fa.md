<!-- loio08197fa68e4f479cbe30f639cc1cd22c -->

# sap.ui.table

Table-like controls, mainly for desktop scenarios.

> ### Note:  
> The following sections only provide additional information for some of the controls. For a complete list of all controls and their documentation, see the [API Reference](https://ui5.sap.com/#/api) and the [Samples](https://ui5.sap.com/#/controls). 



## Row Virtualization

To improve rendering and memory performance, only the number of rows that are visible on the user interface are created internally for `sap.ui.table.Table` \(this is called "row virtualization"\). For example, if the table has enough space to render 20 rows, exactly 20 rows are created internally.

> ### Example:  
> Imagine an OData service with 10 million entries. Keeping 10 million row controls, either inside or outside the DOM, is simply not technically feasible for most client devices. Also, a single table row usually contains additional controls inside each cell, such as `sap.m.Labels` or `sap.ui.unified.Currency` controls. The number of used control instances would then be multiplied by the number of columns for every row. Instead of creating all of these SAPUI5 controls for every data entry, the table virtualizes the rows, and in this way only a limited set of control instances are created for each table control instance.



## OData Model

OData as a RESTful protocol provides a specified and a generalized way to access back-end services via HTTP requests. The SAPUI5 OData model provides a stable module for querying OData services via the network. All `sap.ui.table.*` controls fully support data bindings over OData V2. Since OData services can hold millions of entries, and these entries have to be loaded somehow to the client and rendered, the `sap.ui.table.*` controls implement advanced paging mechanisms based on the underlying `ODataListBinding` and `ODataTreeBinding`. The SAPUI5 OData bindings take care of all necessary back-end requests to retrieve the currently-needed data entries. This is done as efficiently as possible with the minimum amount of back-end requests.

**Related Information**  


[OData V2 Model](../04_Essentials/odata-v2-model-6c47b2b.md#loio6c47b2b39db9404582994070ec3d57a2 "The OData V2 Model enables binding of controls to data from OData services.")

[API Reference: `sap.ui.table`](https://ui5.sap.com/#/api/sap.ui.table)

[Tables: Which One Should I Choose?](tables-which-one-should-i-choose-148892f.md "The libraries provided by SAPUI5 contain various different table controls that are suitable for different use cases. The table below outlines which table controls are available, and what features are supported by each one.")

[Supported Library Combinations](../02_Read-Me-First/supported-library-combinations-363cd16.md "SAPUI5 provides a set of JavaScript and CSS libraries, which can be combined in an application using the combinations that are supported.")

[Browser and Platform Support](../02_Read-Me-First/browser-and-platform-support-74b59ef.md "Browser and platform support for the SAPUI5 libraries on iOS, Android, macOS, and Windows platforms.")

