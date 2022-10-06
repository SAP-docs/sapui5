<!-- loio84f3d52f492648d5b594e4f45dca7727 -->

# Semantic Pages

The semantic page controls help the app designers and developers implement and comply with the SAP Fiori design guidelines more easily.

The benefit of these controls is to separate the design requirements from the actual app implementations, allowing these requirements to be adjusted centrally for the controls without the apps having to reimplement them with each change.

The main functionality of the semantic pages is to predefine the placement, behavior and styles of the page elements, such as titles and actions. Content specified in the aggregations is automatically positioned in dedicated sections of the header or the footer of the pages.

There are two separate and non-dependent `semantic` namespaces in the main SAPUI5 libraries:

-   `sap.f.semantic` \(implements SAP Fiori 2.0\)

-   `sap.m.semantic`


Both of them extend and enhance the base pages of the library they are in - `sap.m.Page` and `sap.f.DynamicPage`. They allow app developers to quickly add controls to the page that correspond to common operations, such as add, delete and filter. They only have to specify the action type, and the required styling and positioning is automatically added internally.

