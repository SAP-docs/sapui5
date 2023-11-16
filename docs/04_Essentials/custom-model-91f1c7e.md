<!-- loio91f1c7ef6f4d1014b6dd926db0e91070 -->

# Custom Model

Custom models can be used if none of the models provided by SAPUI5 is suitable for the specific needs of an application.

> ### Note:  
> The subclassing of standard models is not supported in SAPUI5.

To instantiate a custom model, proceed as follows:

1.  Extend the `Model` class and specify the binding modes that the model should support \(for example, two-way, one-way, one-time\).

2.  Extend the `Binding` class to suit your specific binding or reuse the existing specific binding implementations `PropertyBinding`, `ListBinding`, and/or `TreeBinding`.

3.  To enable the filtering functionality, use the `Filter` class with `FilterOperator` enum in your binding implementation.

4.  To enable the sorting functionality, use the `Sorter` class in your binding implementation.


You can find all necessary classes in the `sap.ui.model` namespace. As a starting point, take a look at the `JSONModel` implementation in `sap.ui.model.json.JSONModel`, which is available on the SAP Open Source GitHub at [https://github.com/SAP/openui5/blob/-/src/sap.ui.core/src/sap/ui/model/json/JSONModel.js](https://github.com/SAP/openui5/blob/-/src/sap.ui.core/src/sap/ui/model/json/JSONModel.js).

