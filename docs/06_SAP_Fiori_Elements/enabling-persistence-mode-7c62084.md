<!-- loio7c620843ed5946d69e2f932f8d17ac8b -->

# Enabling Persistence Mode

You can configure persistence mode in an object page.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

There are two different modes for configuring the display of object pages:

-   Discovery mode: In this mode, when you open an object page, the first section is always displayed. This is the default mode for applications with a non-flexible column layout.

-   Persistence mode: In this mode, if you select a section/tab on the anchor navigation area of an object page, that selection is persisted and displayed when you open another object page. This is the default mode for applications with a flexible column layout.


You can modify the default mode by using the `statePreservationMode` manifest property as follows:

> ### Sample Code:  
> ```
> 
> "sap.ui.generic.app": {
>         "_version": "1.3.0",
>         "settings": {
>             
>             "objectPageDynamicHeaderTitleWithVM": true,
>             "statePreservationMode": "persistence"/"discovery"
>         },
>         "pages": {
>             "ListReport|C_STTA_SalesOrder_WD_20": {
> 
> ```

> ### Note:  
> Section selection persists only when you select a section from the anchor navigation area, and not if you scroll to a section.

Persistence mode retains the tab selection made on an object page in the following cases:

-   In a two or three column layout mode, when you select a section in the anchor navigation area, the same selected section is opened when you select another object from the list.

-   In a full-screen mode with paginator buttons, when you select a section in the anchor navigation area, and then use the paginator buttons to move to the next objects, the section selection persists.


The persisted details get reset when you navigate back to the list report page in full screen mode.

