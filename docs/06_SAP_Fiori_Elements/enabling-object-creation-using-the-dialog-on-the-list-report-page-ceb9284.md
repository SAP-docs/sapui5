<!-- loioceb9284b16f64f30865ce999dbd56064 -->

# Enabling Object Creation Using the Dialog on the List Report Page

You can enable the creation of objects that have a maximum of eight data fields using a dialog on the list report page.

You can enable this feature for the list report page by configuring the `creationMode` property in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "targets": {
>     "ProductsList": {
>         "type": "Component",
>         "name": "sap.fe.templates.ListReport",
>         "id": "ProductsList",
>         "options": {
>             "settings": {
>                 "contextPath": "/Products",
>                 "controlConfiguration": {
>                     "@com.sap.vocabularies.UI.v1.LineItem": {
>                         "tableSettings": {
>                             "creationMode": {
>                                 "name": "CreationDialog",
>                                 "creationFields": "@com.sap.vocabularies.UI.v1.FieldGroup#CreationParameters"
>                             }
>                         }
>                     }
>                 },
>                 ...
>             }
>         }
>     },
> ```

The `CreationFields` parameter can point to a `FieldGroup` annotation or a comma-separated list of properties. Immutable properties are added to the `CreationFields` list automatically.

For the list report page in multi-view mode, provide the creation mode parameters in the `TableSettings` configuration for each line item configured in a view.

If this feature is enabled, you cannot navigate to an object page in create mode. However, you can navigate to the object page in display mode to modify objects.

> ### Note:  
> -   The draft state is not maintained when an object is created using the dialog.
> 
> -   Navigation properties are not supported for the create dialog.
> 
> -   Mandatory parameters are marked with a red asterisk in the dialog.
> 
> -   For information about enabling a custom create dialog on a tree table, see the [Create Mode and Custom Create Mode with a Menu Button](tree-tables-7cf7a31.md#loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_osy_44d_gbc) section in [Tree Tables](tree-tables-7cf7a31.md).
> 
> -   If you have entered filter values to prefill fields with specific values, the user can also use a dialog to create objects. For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-11ff444.md).



## Customizing the Title of the Dialog

The default title of the dialog is *New Object*. Use the `C_TRANSACTION_HELPER_SAPFE_ACTION_CREATE` key in the `i18n` file of the page to modify it.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling Object Creation Using the Dialog on the List Report Page](enabling-object-creation-using-the-dialog-on-the-list-report-page-2d04f60.md).

