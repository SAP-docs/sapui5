<!-- loio7fee938d7cba4bfd86810cfe6d011eb0 -->

# Enabling Object Creation Using the Dialog on the Object Page

You can enable the creation of objects using a dialog on the object page.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

You can enable this feature by configuring the `creationMode` property in the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "targets": {
>     "ProductsList": {
>         "type": "Component",
>         "name": "sap.fe.templates.ObjectPage",
>         "id": "ProductsObjectPage",
>         "options": {
>             "settings": {
>                 "contextPath": "/Products",
>                 "controlConfiguration": {
>                     "_suppliers/@com.sap.vocabularies.UI.v1.LineItem": {
>                         "tableSettings": {
>                             "creationMode": {
>                                 "name": "CreationDialog",
>                                 "creationFields": "com.sap.vocabularies.UI.v1.FieldGroup#CreationParametersSupplier"
>                             }
>                         }
>                     }
>                 },
>                 ...
>             }
>         }
>     }
> }
> ```

The `CreationFields` parameter can point to a `FieldGroup` annotation or a comma-separated list of properties. Immutable properties are added to the `CreationFields` list automatically.

If this feature is enabled, users can't navigate to an object page in create mode. However, they can navigate to the object page in display mode to modify objects.

If you have entered filter values to prefill fields with specific values, the user can also use a dialog to create objects. For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-11ff444.md).

Mandatory parameters are marked with a red asterisk in the create dialog.

> ### Note:  
> Navigation properties are not supported for the create dialog.

For information about enabling a create dialog in the list report, see [Enabling Object Creation Using the Dialog in the List Report](enabling-object-creation-using-the-dialog-in-the-list-report-ceb9284.md).

For information about enabling a custom create dialog on a tree table, see the [Create Mode and Custom Create Mode with a Menu Button](tree-tables-7cf7a31.md#loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_osy_44d_gbc) section in [Tree Tables](tree-tables-7cf7a31.md).



<a name="loio7fee938d7cba4bfd86810cfe6d011eb0__section_ucn_qc3_vfc"/>

## Customizing the Title of the Dialog

The default title of the dialog is *New Object*. Use the `C_TRANSACTION_HELPER_SAPFE_ACTION_CREATE` key in the `i18n` file of the page to modify it.

