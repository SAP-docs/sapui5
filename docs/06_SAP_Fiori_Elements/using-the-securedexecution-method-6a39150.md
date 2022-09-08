<!-- loio6a39150ad3e548a8b5304d32d560790a -->

# Using the SecuredExecution Method

The API for developers of extensions for SAP Fiori elements provides the `securedExecution` method that can be used for various purposes.

Use the `securedExecution` method whenever one of the following operations should be performed by extension coding:

-   An asynchronous operation

-   An operation that needs to be synchronized with other operations that are potentially triggered by the user

-   An operation that could result in losing the data entered by the user. Note that this is only relevant in non-draft scenarios and therefore applicable only to SAP Fiori elements for OData V2.

-   Displaying custom messages to the user, as described in [Adding Custom Messages](adding-custom-messages-5a9a2a0.md)

-   Changing the title of the message popup after a quick action has been performed by the system in SAP Fiori elements for OData V2. For examples, see [Adding Custom Messages](adding-custom-messages-5a9a2a0.md).

-   Custom code that changes the state of the object. When using SAP Fiori elements for OData V4, set `updatesDocument` to `true`.


The function that is to be executed must be encapsulated in a `fnFunction` function. In most use cases, the operation performed by this method is executed asynchronously. Therefore, `fnFunction` is to return a `Promise` that indicates that the operation has finished.

> ### Note:  
> `fnFunction` must not perform any user interactions.

Depending on the state of the user interaction, `fnFunction` may or may not be executed. For example, `fnFunction` is not executed if the following conditions apply:

-   In non-draft scenarios. Note that this is only applicable to SAP Fiori elements for OData V2.

-   If the user is in edit mode

-   If the user has entered data but hasn’t saved yet

-   If the user has triggered an action that is implemented via `securedExecution`

-   If the user has clicked *Cancel* in the dataloss conformation dialog


Note that the `securedExecution` method also returns a `Promise`. This `Promise` is rejected if `fnFunction` is not executed for any reason. If `fnFunction` is executed, the `Promise` returned by `securedExecution` behaves like the `Promise` returned by `fnFunction`.

For more information for SAP Fiori elements for OData V2, see the *API Reference* for [`securedExecution`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI/methods/securedExecution).

For more information for SAP Fiori elements for OData V4, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.EditFlow/methods/securedExecution) in the Demo Kit. 

