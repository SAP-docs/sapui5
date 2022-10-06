<!-- loioa4afb138acf64a61a038aa5b91a4f082 -->

# App and Nav Container

Apps are often composed of several pages and the user can drill-down to detail pages and go back up again. This is often visualized by horizontal slide animations. SAPUI5 supports this pattern by providing the `sap.m.App` and `sap.m.NavContainer` controls, which handle the navigation between the pages.

`sap.m.App` inherits the navigation capabilities from the `sap.m.NavContainer` control. Thus, both controls are equal with regard to navigation and navigation events. The following sections refer to the `sap.m.NavContainer`, but the same also applies to the `sap.m.App` control.

An app can control the navigation flow centrally and directly trigger the initialization of the pages. To support modularization of the app, however, it may also be beneficial to control the navigation flow non-centrally. In this case, code which constructs a page is also the code that handles, for example, the data load in this page.

To support this, SAPUI5 provides two types of events:

-   Events fired by the App or by the NavContainer whenever it navigates.

-   Events fired **on** the pages when they get shown or hidden by navigation.


**Related Information**  


[API Reference: `sap.m.App`](https://ui5.sap.com/#/api/sap.m.App)

[API Reference: `sap.m.NavContainer`](https://ui5.sap.com/#/api/sap.m.NavContainer)

