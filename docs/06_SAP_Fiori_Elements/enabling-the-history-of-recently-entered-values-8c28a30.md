<!-- loio8c28a30995354d6fa41b6237e68a7448 -->

# Enabling the History of Recently Entered Values

You can enable the history of the most recently entered values for any field, when you move the cursor back to that field. It is enabled by default for some of the controls that are used as a filter, such as for multi-input fields. However, it may not be enabled for controls such as drop-down list.

If you have fields that contain sensitive personal data, use the `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive` annotation to disable the storing of data in the history.

SAP Fiori elements doesn't store any data of a field in the history if either the property of the main entity set \(on which the value help is defined\), or any of the `ValueList` parameters, is annotated with `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive`. This ensures that no potentially sensitive information is retained.

End users can delete the history of the recently entered values. For more information, see [Input History](../10_More_About_Controls/input-history-152f84f.md).



<a name="loio8c28a30995354d6fa41b6237e68a7448__section_ic3_jhs_yqb"/>

## Prerequisites

To enable the history of recently entered values, you must enable the `INPUTFIELD_HISTORY` SAP Fiori launchpad parameter. For more information, see [Manage Launchpad Settings](https://help.sap.com/docs/SAP_S4HANA_CLOUD/4fc8d03390c342da8a60f8ee387bca1a/22d573aead754b80abca18ec71872fb7.html).



<a name="loio8c28a30995354d6fa41b6237e68a7448__section_ztn_mph_tzb"/>

## Procedure

In the `manifest.json` file, you can specify whether the history must be enabled for each field:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui.generic.app": {
>     "pages": {
>         "ListReport|RootEntity": {
>             "component": {
>                 "settings": {
>                     "filterSettings": {
>                         "historySettings": {
>                             "fields": {
>                                 "<fieldname>": {
>                                     "historyEnabled": ("enabled" | "disabled" | "auto")
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```

Here, `<fieldname>` refers to the property name of the field in the OData service.

You can also specify the same behavior for all the fields, or as a default for the fields that are not explicitly mentioned:

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
>     "pages": {
>         "ListReport|RootEntity": {
>             "component": {
>                 "settings": {
>                     "filterSettings": {
>                         "historySettings": {
>                             "historyEnabled": (
>                                 "enabled" |
>                                 "disabled" |
>                                 "auto"
>                             )
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```

The `historyEnabled` setting has three possible values: `enabled`, `disabled`, or `auto`. The default setting is `auto`, which means that the behavior is determined by the control type used.

**Related Information**  


[Configuring Filter Bars](configuring-filter-bars-76066e5.md "You can configure filter bars in both list report applications and analytical list pages.")

