<!-- loio91f27e3e6f4d1014b6dd926db0e91070 -->

# Views

The view in the Model-View-Controller \(MVC\) concept is responsible for defining and rendering the UI. SAPUI5 supports predefined view types.

The following predefined view types are available:

-   **XML view** \(file or string in XML format\); this type supports a mix of XML and plain HTML.

-   **JSON view** \(file or string in JSON format\)

-   **Typed view**, constructed in a programmatic manner

-   **HTML view** \(file or string in HTML format\)


> ### Note:  
> We recommend to use XML views, because XML views force a clear separation of the UI definition from the application logic \(which has to be implemented in the controller\). This makes the code more readable and easier to support.
> 
> Therefore, we concentrate on XML views and only provide examples for XML views throughout this documentation.



<a name="loio91f27e3e6f4d1014b6dd926db0e91070__section_fxz_jf5_y4b"/>

## Typed Views

A view can also be defined as a [typed view](typed-view-e6bb33d.md), representing its own class.

> ### Note:  
> Typed views are available since SAPUI5 1.88

**Related Information**  


[API Reference](https://ui5.sap.com/#/api/sap.ui.core.mvc.View)

