<!-- loio54e0ddf695af4a6c978472cecb01c64d -->

# Bindings

Bindings connect SAPUI5 view elements to model data, allowing changes in the model to be reflected in the view element and vice versa.

The OData V4 model supports the following types of binding:

-   **List bindings**, which represent a collection \(of OData entities, complex or primitive types\) such as `/SalesOrderList` \(see the [sap.ui.model.odata.v4.ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding) API documentation in the Demo Kit\)

-   **Context bindings**, which represent a single entity such as `/SalesOrderList('0500000000')` or a structural property with complex type \(see the [sap.ui.model.odata.v4.ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) API documentation in the Demo Kit\)

-   **Property bindings**, which represent a single, primitive type property in an entity or complex type such as `/ProductList('HT-1000')/Name` \(see the [sap.ui.model.odata.v4.ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding) API documentation in the Demo Kit\)


-   **[Creating Bindings](creating-bindings-95cf4b1.md "")**  

-   **[Path Syntax](path-syntax-596a570.md "")**  

-   **[Initialization and Read Requests](initialization-and-read-requests-fccfb2e.md "")**  

-   **[Parameters](parameters-1ab4f62.md "")**  

-   **[Binding Collection Inline Count](binding-collection-inline-count-77d2310.md "")**  

-   **[Type Determination](type-determination-53cdd55.md "")**  

-   **[Binding Modes](binding-modes-e37a0c3.md "")**  

-   **[Suspend and Resume](suspend-and-resume-b0f5c53.md " A suspended binding does not send data service requests nor does it fire change events. You can resume a suspended list or context
		binding with its resume method.")**  
 A suspended binding does not send data service requests nor does it fire change events. You can resume a suspended list or context binding with its `resume` method.
-   **[Context API](context-api-22ee78b.md "")**  

-   **[Accessing Data in Controller Code](accessing-data-in-controller-code-17b30ac.md "In the OData V4 model, bindings are used to access and modify back-end data also if the data is accessed or modified in controller
		code.")**  
In the OData V4 model, bindings are used to access and modify back-end data also if the data is accessed or modified in controller code.
-   **[Automatic determination of $expand and $select](automatic-determination-of-expand-and-select-10ca58b.md "")**  

-   **[Data Reuse](data-reuse-648e360.md "The OData V4 model keeps data with respect to bindings, which allows different views on the same data, but also means that data is not
		automatically shared between bindings. There are mechanisms for sharing data to avoid redundant requests and to keep the same data in
		different controls in sync.")**  
The OData V4 model keeps data with respect to bindings, which allows different views on the same data, but also means that data is not automatically shared between bindings. There are mechanisms for sharing data to avoid redundant requests and to keep the same data in different controls in sync.

**Related Information**  


[sap.ui.model.odata.v4.ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding)

[sap.ui.model.odata.v4.ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding)

[sap.ui.model.odata.v4.ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding)

[Sample: Sales Orders](https://ui5.sap.com/#/sample/sap.ui.core.sample.odata.v4.SalesOrders/code/Main.controller.js)

[Binding Events](binding-events-1a010d3.md "The OData V4 model supports certain events intended for applications, and others that are to be used for controls, as outlined in this section.")

[Batch Control](batch-control-74142a3.md "OData V4 allows you to group multiple operations into a single HTTP request payload, as described in the official OData V4 specification Part 1, Batch Requests (see the link under Related Information for more details).")

[Filtering](filtering-5338bd1.md "The OData V4 Model supports server side filtering on lists.")

[Sorting](sorting-d2ce3f5.md "The OData V4 model supports server side sorting on lists.")

[OData Version 4.0 Part 2: URL Conventions, 4 Resource Path](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html)

[OData Version 4.0 Part 2: URL Conventions, 5 Query Options](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html)

[OData Version 4.0 Part 2: URL Conventions, 5.2 Custom Query Options](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html)

[OData Version 4.0 SimpleIdentifier](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_SimpleIdentifier)

