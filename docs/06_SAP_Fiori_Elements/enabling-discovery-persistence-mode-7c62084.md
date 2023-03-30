<!-- loio7c620843ed5946d69e2f932f8d17ac8b -->

# Enabling Discovery/Persistence Mode

You can configure the mode in which the state of the object page is stored/restored using `iAppState`.

There are two different modes for configuring object pages. Both modes deal with the response by the object page to the personalization changes made by the user. Examples of such personalization changes are applying filters on a chart or table, displaying hidden columns, or selecting a specific tab.

-   Discovery mode: This is the default mode for applications that don't use the flexible column layout. In this mode, the changes made to the underlying controls affect only the current object. They don't affect the objects at the same level when you navigate to another object using a paginator button, for example. Instead, the default settings of the control, either from an annotation or the manifest, apply to the object.

    Consider the following use cases:

    -   The filter applied to one object doesn’t affect the next object.

    -   Tab selection doesn’t persist on all objects. When you open a new object, the application always selects the first tab on the page.


-   Persistence mode: This is the default mode for applications that use the flexible column layout. In this mode, changes made to the underlying controls affect the current object and an object at the same level when you navigate to another object using a paginator button, for example.

    Consider the following use cases:

    -   The filter applied to one object affects the next object.

    -   Tab selection persists on all objects. When you select a tab on a object, then the same tab is selected when you open a new object.



> ### Note:  
> -   Section selection persists only when you select a section from the anchor navigation area, and not if you scroll to a section.
> 
> -   The changes made to the object page at any level don't persist and reset to the default value, either from an annotation or the manifest if you close the object page at that level. For example, in persistence mode, the changes made to a chart or table in the subobject page persist only if the subobject page is open. Once you close the subobject page, the previously made changes are lost and reset to the default value.
> 
>     There is an exception for the latest object that you've opened. In this case, the changes you made to the last subobject page persist even after you've closed the subobject page.



<a name="loio7c620843ed5946d69e2f932f8d17ac8b__section_f12_4kn_dwb"/>

## Additional Features in SAP Fiori Elements for OData V2

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



<a name="loio7c620843ed5946d69e2f932f8d17ac8b__section_bkt_vyl_mtb"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Restriction:  
> Discovery mode isn't applicable to SAP Fiori elements for OData V4.

