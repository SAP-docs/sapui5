<!-- loio4754094fbf4046e88271d9ca881ceaa1 -->

# Creating a Binding Change

You can create property binding changes manually by using the Page Editor. You can use a property only if its data has already been retrieved by the model.



## Context

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

> ### Note:  
> This procedure is only relevant for the following use cases described in [Adapting the UI: List Report and Object Page](adapting-the-ui-list-report-and-object-page-0d2f1a9.md):
> 
> -   Object page: Show header content in edit mode
> 
> -   Object page: Show content parts in the header according to a specific mode
> 
> -   Object page: Control the visibility of a section

Perform the following steps to create a property binding change:



## Procedure

1.  Open the Page Editor for the application and page you want to add the binding change to.

2.  Find the property you want to apply an expression to \(such as the visibility of an object page section\). Change the value in the property panel. You can select a value from the drop-down or compose your own expression.

3.  You may already have a change file of type *propertyChange* like in the following example:

    ```
    
    {
        "fileName": "id_1460988346969_256_propertyChange",
        "fileType": "change",
        "changeType": "propertyChange",
        "reference": "STTA_MP.Component",
        "packageName": "$TMP",
        "content": {
            "property": "visible",
            "oldValue": true,
            "newValue": false
        },
        "selector": {        "id": "STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--action::STTA_PROD_MAN.STTA_PROD_MAN_Entities::STTA_C_MP_ProductCopywithparams",
            "type": "sap.uxap.ObjectPageHeaderActionButton"
        },
        "layer": "CUSTOMER_BASE",
        "texts": {},
        "namespace": "apps/STTA_MP/changes/",
        "creation": "2016-04-18T14:05:47.149Z",
        "originalLanguage": "EN",
        "conditions": {},
        "context": "",
        "support": {
            "generator": "Change.createInitialFileContent",
            "service": "",
            "user": ""
        }
    }
    
    ```

    In that case, you can make the following replacements in this change:

    -   Change the value of `changeType` from `propertyChange` to `propertyBindingChange`.

    -   In `content`, replace `newValue` with `newBinding`, and its value with your required binding, for example, `{myProperty}`. In this example, `myProperty` contains the values `true` or `false` to change the visibility.

        The result looks as follows:

        ```
        
        {
            "fileName": "id_1460988346969_256_propertyChange",
            "fileType": "change",
            "changeType": "propertyBindingChange",
            "reference": "STTA_MP.Component",
            "packageName": "$TMP",
            "content": {
                "property": "visible",
                "oldValue": true,
                "newBinding": "{myProperty}"
            },
            "selector": {
                "id": "STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--action::STTA_PROD_MAN.STTA_PROD_MAN_Entities::STTA_C_MP_ProductCopywithparams",
                "type": "sap.uxap.ObjectPageHeaderActionButton"
            },
            "layer": "CUSTOMER_BASE",
            "texts": {},
            "namespace": "apps/STTA_MP/changes/",
            "creation": "2016-04-18T14:05:47.149Z",
            "originalLanguage": "EN",
            "conditions": {},
            "context": "",
            "support": {
                "generator": "Change.createInitialFileContent",
                "service": "",
                "user": ""
            }
        }
        
        ```


    > ### Note:  
    > You can also use expression binding. For example, if you want to inverse your property, you can use `newBinding: "{= !${myProperty}}"`.
    > 
    > If the property of a control is bound to an OData property, the OData property must belong to the same node or the root node.
    > 
    > The following expressions might be useful:
    > 
    > -   Object Page: Edit mode: `{ui>/editable}`
    > 
    > -   Object Page: Display mode: `{= !${ui>/editable}}`
    > 
    > -   Object Page: Create mode: `{ui>/createMode}`
    > 
    >     Indicates whether the UI currently displays an entity that is about to be created \(no active version exists yet\).
    > 
    > -   Object Page: Controls enabled: `{ui>/enabled}`
    > 
    >     Indicates whether active UI elements \(such as buttons\) should currently be enabled.
    > 
    > 
    > You can set a binding to an i18n text. To do so, add the i18n model in front of the property. Example: `newBinding: "{i18n>xtol.MoveDown}"`.


