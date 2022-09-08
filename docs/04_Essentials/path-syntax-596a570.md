<!-- loio596a57003cda4201a0f381eaa8b96291 -->

# Path Syntax

According to the specification available under [OData Version 4.0 Part 2: URL Conventions, 4 Resource Path](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html), every resource path \(relative to the service root URL, no query options\) is a valid data binding path within this model if a leading slash is added. For example, you can use `"/EMPLOYEES('A%2FB%26C')"` to access an entity instance with key "A/B&C". Note that appropriate URI encoding is necessary. For more information, see [`sap.ui.model.odata.v4.ODataUtils.formatLiteral`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataUtils%23methods/sap.ui.model.odata.v4.ODataUtils.formatLiteral).

Furthermore, the OData V4 model only supports OData [SimpleIdentifier](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part3-csdl/odata-v4.0-errata03-os-part3-csdl-complete.html#_SimpleIdentifier) with characters from the US ASCII code character set.

