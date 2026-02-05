<!-- loio5239ecd148054841b22b32eac541a4f7 -->

# Using the `SecuredExecution` Method

The API for developers of extensions for SAP Fiori elements provides the `securedExecution` method that can be used for various purposes.

Use the `securedExecution` method whenever one of the following operations should be performed by extension coding:

-   An asynchronous operation

-   An operation that needs to be synchronized with other operations that are potentially triggered by the user

-   An operation that could result in losing the data entered by the user.

-   Displaying custom messages to the user, as described in [Adding Custom Messages](adding-custom-messages-51d8589.md)

-   Changing the title of the message popup after a quick action has been performed by the system. For examples, see [Adding Custom Messages](adding-custom-messages-51d8589.md).

-   Custom code that changes the state of the object.


The function that is to be executed must be encapsulated in a `fnFunction` function. In most use cases, the operation performed by this method is executed asynchronously. Therefore, `fnFunction` is to return a `Promise` that indicates that the operation has finished.

> ### Note:  
> `fnFunction` must not perform any user interactions.

Depending on the state of the user interaction, `fnFunction` may or may not be executed. For example, `fnFunction` is not executed if the following conditions apply:

-   In non-draft scenarios.

-   If the user is in edit mode

-   If the user has entered data but hasn't saved yet

-   If the user has triggered an action that is implemented through `securedExecution`

-   If the user has clicked *Cancel* in the data loss confirmation dialog


Note that the `securedExecution` method also returns a `Promise`. This `Promise` is rejected if `fnFunction` is not executed for any reason. If `fnFunction` is executed, the `Promise` returned by `securedExecution` behaves like the `Promise` returned by `fnFunction`.

For more information, see the *API Reference* for [`securedExecution`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI/methods/securedExecution).

