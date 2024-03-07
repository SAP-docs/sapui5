<!-- loio37dbf1f30127420d9c585bc1ad80086b -->

# Enabling the History of Recently Entered Values

You can enable the history of the most recently entered values in a field within the filter bar, when you move the cursor to that field again. It is enabled by default for some of the controls that are used as a filter, such as for multi-input fields. However, it may not be enabled for other controls such as drop-down list.



<a name="loio37dbf1f30127420d9c585bc1ad80086b__section_ic3_jhs_yqb"/>

## Prerequisites

To enable the history of recently entered values, you must enable the `INPUTFIELD_HISTORY` SAP Fiori launchpad parameter. For more information, see [Manage Launchpad Settings](https://help.sap.com/docs/SAP_S4HANA_CLOUD/4fc8d03390c342da8a60f8ee387bca1a/22d573aead754b80abca18ec71872fb7.html).



<a name="loio37dbf1f30127420d9c585bc1ad80086b__section_ztn_mph_tzb"/>

## Additional Features in SAP Fiori Elements for OData V2



### Context

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

Possible values for `historyEnabled` are *enabled*, *disabled*, or *auto*. *Auto* is the default setting, which means that the behavior depends on the used control type \(it depends on annotations according to the logic of the `SmartFilterBar`. For more information, see [SmartFilterBar](https://sapui5untested.int.sap.eu2.hana.ondemand.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar)\).

**Related Information**  


[Configuring Filter Bars](configuring-filter-bars-4bd7590.md "You can configure filter bars in list report applications and in the analytical list page.")

