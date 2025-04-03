<!-- loio37dbf1f30127420d9c585bc1ad80086b -->

# Enabling the History of Recently Entered Values

You can enable the history of the most recently entered values for any field, when you move the cursor back to that field. It is enabled by default for some of the controls that are used as a filter, such as for multi-input fields. However, it may not be enabled for controls such as drop-down list.

If you have fields that contain sensitive personal data, you can use the `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive` annotation to disable the storing of data in the history. For more security-related information, see [Security Configuration](security-configuration-ba0484b.md).

End users can delete the history of the recently entered values. For more information, see [Input History](../10_More_About_Controls/input-history-152f84f.md).



<a name="loio37dbf1f30127420d9c585bc1ad80086b__section_ic3_jhs_yqb"/>

## Prerequisites

To enable the history of recently entered values, you must enable the `INPUTFIELD_HISTORY` SAP Fiori launchpad parameter. For more information, see [Manage Launchpad Settings](https://help.sap.com/docs/SAP_S4HANA_CLOUD/4fc8d03390c342da8a60f8ee387bca1a/22d573aead754b80abca18ec71872fb7.html).



<a name="loio37dbf1f30127420d9c585bc1ad80086b__section_ztn_mph_tzb"/>

## Additional Features in SAP Fiori Elements for OData V2

In the manifest, per field, you can specify whether or not the history should be enabled:

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
> 	"pages": {
> 		"ListReport|RootEntity": {
> 			"component": {
> 				"settings": {
> 					"filterSettings": {
> 						"historySettings": {
> 							"fields": {
> 								<fieldname>: {
> 									"historyEnabled": ("enabled"|"disabled"|"auto")
> 
> ```

Here, `<fieldname>` refers to the property name of the field in the OData service.

You can also specify the same behavior for all the fields, or as a default for the fields that are not explicitly mentioned:

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
> 	"pages": {
> 		"ListReport|RootEntity": {
> 			"component": {
> 				"settings": {
> 					"filterSettings": {
> 						"historySettings": {
> 							"historyEnabled": ("enabled"|"disabled"|"auto")
> 
> ```

Possible values for `historyEnabled` are *enabled*, *disabled*, or *auto*. *Auto* is the default setting, which means that the behavior depends on the used control type.



<a name="loio37dbf1f30127420d9c585bc1ad80086b__section_ypz_j2y_51c"/>

## Additional Features in SAP Fiori Elements for OData V4

The history of recently entered values is enabled for SAP Fiori elements for OData V4 by default. However, you can disable this setting for each field by using the manifest settings.

> ### Sample Code:  
> ```
> "sap.fe": {
>     "historySettings": {
>              "fields": {
>                  <propertyPath>: {
>                          "historyEnabled": false
>                         }
>                     }
>                 }
>             }
> ```

Here, `<propertyPath>` refers to the property path in the OData service.

**Related Information**  


[Configuring Filter Bars](configuring-filter-bars-4bd7590.md "You can configure filter bars in both list report applications and analytical list pages.")

