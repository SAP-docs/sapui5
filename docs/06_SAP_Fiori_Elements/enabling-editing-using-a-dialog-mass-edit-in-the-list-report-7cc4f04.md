<!-- loio7cc4f04364c540c397130ff92f84c3ca -->

# Enabling Editing Using a Dialog \(Mass Edit\) in the List Report

You can edit a single object or multiple objects using a dialog in the list report page.

When you select multiple objects, and use mass edit dialog, the values entered are applied for all objects.

When `multiEdit` is enabled, by default the dialog displays editable fields corresponding to columns that are currently displayed in the table. You can change the columns with table personalization. To enable, set the `multiEdit` property to `true` in the `manifest.json` file. When `multiEdit` is enabled, by default the dialog displays editable fields corresponding to columns that are currently displayed in the table. You can change the columns with table personalization.

> ### Sample Code:  
> > ### Sample Code:  
> > ```
> > "sap.ui.generic.app": {
> >         "_version": "1.1.0",
> >         "pages": [
> >             {
> >                 "entitySet": "STTA_C_SO_SalesOrder_ND",
> >                 "component": {
> >                     "name": "sap.suite.ui.generic.template.ListReport",
> >                     "list": true,
> >                     "settings": {
> >                            "tableSettings": {
> >                                   "multiEdit": {
> >                                          "enabled" : true
> >                                    }
> > 
> >                     }
> > ```

 ![](images/Enabling_Mass_Editing_Through_Dialog_LR_914eba7.png) 

You can also provide a `fieldgroup` annotation in the manifest with a particular qualifier to identify the multi-edit fields. The `dataFields` in the `fieldgroup` annotation are displayed as the multi-edit fields.

To use a `fieldgroup`, add its annotation path in the `manifest.json` file:

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
>         "_version": "1.1.0",
>         "pages": [
>             {
>                 "entitySet": "STTA_C_SO_SalesOrder_ND",
>                 "component": {
>                     "name": "sap.suite.ui.generic.template.ListReport",
>                     "list": true,
>                     "settings": {
>                            "tableSettings": {
>                                   "multiEdit": {
>                                          "enabled" : true,
>                                          "annotationPath" : "com.sap.vocabularies.UI.v1.FieldGroup#MultiEdit"
>                                    }
>                     }
> ```

> ### Sample Code:  
> Annotation for the `FieldGroup` :
> 
> ```
> <Annotation Term="UI.FieldGroup" Qualifier="MultiEdit">
>           <Record>
>               <PropertyValue Property="Data">
>                      <Collection>
>                           <Record Type="UI.DataField">
>                                 <PropertyValue Property="Value" Path="NetAmount"/>
>                           </Record>
>                           <Record Type="UI.DataField">
>                                 <PropertyValue Property="Value" Path="TaxAmount"/>
>                           </Record>
>                           <Record Type="UI.DataField">
>                            <PropertyValue Property="Value" Path="LifecycleStatus"/>
>                           </Record>
>                       </Collection>
>             	 </PropertyValue>
>           </Record>
> </Annotation>
> ```

> ### Note:  
> -   This feature is only supported for responsive tables.
> 
> -   This feature is currently not supported for smart multi-input fields, custom columns, and `dataFieldForAnnotations`.
> 
> -   Only the properties of the entity sets are supported for mass edit.
> 
> -   The request for each selected instance is sent in a separate changeset within a single batch. If an error occurs for one or more selected instances when update is executed, the other selected instances are still executed.



<a name="loio7cc4f04364c540c397130ff92f84c3ca__section_avc_gtw_nsb"/>

## Option to Ignore Certain Fields from the Mass Edit Dialog

You can choose to hide certain fields from being displayed in key user adaptation. Do this to restrict the fields from being added to the Mass Edit dialog. You can restrict the fields by adding an `ignoredFields` list in the manifest, as shown in the following example:

> ### Sample Code:  
> Input for `ignoredFields` key must have comma separated values
> 
> ```
> manifest.json:
> "tableSettings": {
>                             "multiEdit": {
>                                 "enabled": true,
>                                 "annotationPath": "com.sap.vocabularies.UI.v1.FieldGroup#MultiEdit",
>                                 "ignoredFields":"NetAmount,TaxAmount" // comma separated values
>                             }
> }
> 
> ```



<a name="loio7cc4f04364c540c397130ff92f84c3ca__section_bfv_hkg_wsb"/>

## Changing the Default Title

Currently, the default title for the edit dialog is `Edit(X)`. You can override the default title of `multiedit` dialog by adding the `MULTI_EDIT_DIALOG_TITLE` key in the i18n file of the list report.

**Related Information**  


[Replacing the Standard Save Functionality in Mass Edit Dialog](replacing-the-standard-save-functionality-in-the-mass-edit-dialog-492d8a9.md "You can enable custom save functionality for the mass edit dialog.")

