<!-- loioceb9284b16f64f30865ce999dbd56064 -->

# Enabling Object Creation Using the Dialog in the List Report

You can enable the creation of objects that have a maximum of 8 data fields using a dialog in the list report page.



<a name="loioceb9284b16f64f30865ce999dbd56064__section_wxx_bvy_cnb"/>

## Additional Features in SAP Fiori Elements for OData V2

![](images/Create_Object_Dialog_in_List_Report_ac4a875.png)

You can enable this feature in the list report or worklist applications. To do this, configure the `manifest.json` file by adding the property `createWithParameterDialog` and passing the properties of the related entity set, as shown in the following sample code:

> ### Sample Code:  
> manifest.json
> 
> ```
> 
> "createWithParameterDialog" : {
>                "fields" : {
>                   "<fieldName>" : {"path":"<fieldname>"},
>                   "<fieldName>" : {"path":"<fieldname>"}
>              }
> 
> ```

The option to create objects using a dialog now appears in the list report application.

> ### Sample Code:  
> ```
> 
> "sap.ui.generic.app": {
>     "_version": "1.3.0",
>     "pages": {
>         "ListReport|STTA_C_SO_SalesOrder_ND": {
>             "entitySet": "STTA_C_SO_SalesOrder_ND",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ListReport",
>                 "list": true,
>                 "settings": {
>                     "multiSelect": true,
>                     "isWorklist": true,
>                     "tableSettings": {
>                         "createWithParameterDialog" : {
>                             "fields" : {
>                                 "BusinessPartnerID":{"path": "BusinessPartnerID"},
>                                 "CurrencyCode" : {"path":"CurrencyCode"},
>                                 "BillingStatus" : {"path":"BillingStatus"},
>                                 "DeliveryStatus" : {"path":"DeliveryStatus"},
>                                 "OpportunityID" : {"path":"OpportunityID"}
>                             }
>                         }
>                     }
>                 }
>             },
>             "pages": {
>                 ..............
>                 ..............
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> Enabling `createWithParameterDialog` in list reports or worklists in multi-view mode in the `manifest.json` file
> 
> ```
> "sap.ui.generic.app": {
>         "pages": [{
>             "entitySet": "C_STTA_SalesOrder_WD_20",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ListReport",
>                 "list": true,
>                 "settings": {
>                         "quickVariantSelectionX": {
>                                 "showCounts": true,
>                                 "variants": {
>                                         "0":
>                                                {
>                                                     "key": "_tab1",
>                                                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Expensive"
>                                                           },
>                                         "1": 
>                                                {
>                                                     "key": "_tab2",
>                                                     "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#Cheap",
>                                                     "tableSettings": {
>                                                                 "createWithParameterDialog": {
>                                                                         "fields": {
>                                                                                 "bp_id":
>                                                                                         {
>                                                                                             "path": "bp_id"
>                                                                                         },
>                                                                                             "currency_code":
>                                                                                         {
>                                                                                             "path": "currency_code"
>                                                                                         },
>                                                                                         "op_id":
>                                                                                         {
>                                                                                         "path": "op_id"
>                                                                                         }
>                                                                                 }
>                                                                     }
>                                                         }
>                                             }
>                                 }
>                     }
>         }
> },
> ```

If this feature is enabled, you cannot navigate to an object page in create mode. However, you can navigate to the object page in display mode to modify objects.

The draft state is not maintained when an object is created using the dialog.

> ### Note:  
> -   Make sure that the properties are related to the entities.
> 
> -   Make sure that all the mandatory fields of the entities are part of the create dialog.
> 
> -   Only list report pages support object creation using the dialog. On list report pages, this feature is available in both single view and multiple views scenarios. For more information, see [Defining Multiple Views on a List Report Table - Single Table Mode](defining-multiple-views-on-a-list-report-table-single-table-mode-0d390fe.md) and [Defining Multiple Views on a List Report Table - Multiple Table Mode](defining-multiple-views-on-a-list-report-table-multiple-table-mode-37aeed7.md).
> 
> -   You can also create objects using a dialog by prefilling fields from the filter values that you entered. For more information, see [Prefilling Fields When Creating a New Entity Using an Extension Point](prefilling-fields-when-creating-a-new-entity-using-an-extension-point-189e2d8.md).
> 
> -   When you click on *Create* while creating an object, the message displayed in the popup is the same as the transient message if it is received from the back end.
> 
> -   If a state message is received from the back end when clicking *Create*, it is then mandatory to send a target for each message pointing to a particular field. The same message is then displayed on the respective field with a red box and a text.



### Customizing the Dialog Title and Buttons

The default title of the dialog is *New Object*, and the key in the `i18n` file is `CREATE_DIALOG_TITLE`. You can change this by redefining the key in the application or in the Adaptation Editor. The default values of the buttons on the dialog are *Create* and *Cancel*. You can also change them in the Adaptation Editor.



<a name="loioceb9284b16f64f30865ce999dbd56064__section_r2b_hvy_cnb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can enable this feature for the list report by configuring the `creationMode` property in the `manifest.json` file, as shown in the following sample code:

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
>                 "entitySet": "Products",
>                 "controlConfiguration": {
>                     "@com.sap.vocabularies.UI.v1.LineItem": {
>                         "tableSettings": {
>                             "creationMode": {
>                                 "name": "CreationDialog",
>                                 "creationFields": "com.sap.vocabularies.UI.v1.FieldGroup#CreationParameters"
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

For the list report in multi-view mode, provide the creation mode parameters in the `TableSettings` configuration for each line item configured in a view.

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



### Customizing the Title of the Dialog

The default title of the dialog is *New Object*. Use the `C_TRANSACTION_HELPER_SAPFE_ACTION_CREATE` key in the `i18n` file to modify it.

