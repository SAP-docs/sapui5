<!-- loio8665847a17a14e1abdcebe3e235c8c68 -->

# Navigation to an Object Page in Edit Mode

You can configure the navigation to an object page so that it opens directly in edit mode.

You can set `openInEditMode` to `true` in the `manifest.json` file to configure navigation, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "options": {
>     "settings": {
>         "entitySet": "LineItems",
>         ...
>         "openInEditMode": true
>     }
> }
> ```

> ### Note:  
> When `openInEditMode` is set to `true`, the *Open in New Tab* option is not shown in the table's context menu.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Navigation to an Object Page in Edit Mode](navigation-to-an-object-page-in-edit-mode-7952b13.md).

