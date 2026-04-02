<!-- loio7c620843ed5946d69e2f932f8d17ac8b -->

# Enabling Persistence Mode

You can configure the mode in which the state of the object page is stored/restored using `iAppState`.

You can use persistence mode for configuring object pages. It deals with the response by the object page to the personalization changes made by the user. Examples of such personalization changes are applying filters on a chart or table, displaying hidden columns, or selecting a specific tab.

This is the default mode for applications that use the flexible column layout. In this mode, changes made to the underlying controls affect the current object and an object at the same level when you navigate to another object using a paginator button, for example.

Consider the following use cases:

-   The filter applied to one object affects the next object.

-   Tab selection persists on all objects. When you select a tab on a object, then the same tab is selected when you open a new object.


> ### Note:  
> -   Section selection persists only when you select a section from the anchor navigation area, and not if you scroll to a section.
> 
> -   The changes made to the object page at any level don't persist and reset to the default value, either from an annotation or the manifest if you close the object page at that level. For example, the changes made to a chart or table in the subobject page persist only if the subobject page is open. Once you close the subobject page, the previously made changes are lost and reset to the default value.
> 
>     There is an exception for the latest object that you've opened. In this case, the changes you made to the last subobject page persist even after you've closed the subobject page.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling Discovery/Persistence Mode](enabling-discovery-persistence-mode-69503c2.md).

