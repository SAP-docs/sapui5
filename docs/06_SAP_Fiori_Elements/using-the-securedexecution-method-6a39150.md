<!-- loio6a39150ad3e548a8b5304d32d560790a -->

# Using the `SecuredExecution` Method

You can use the `securedExecution` method to extend SAP Fiori elements applications.

Use the `securedExecution` method whenever one of the following operations should be performed by extension coding:

-   An asynchronous operation

-   An operation that needs to be synchronized with other operations that are potentially triggered by the user

-   Displaying custom messages to the user, as described in [Adding Custom Messages](adding-custom-messages-5a9a2a0.md)

-   Custom code that changes the state of the object. Set `updatesDocument` to `true`.


The function that is to be executed must be encapsulated in a `fnFunction` function. In most use cases, the operation performed by this method is executed asynchronously. Therefore, `fnFunction` is to return a `Promise` that indicates that the operation has finished.

> ### Note:  
> `fnFunction` must not perform any user interactions.

Depending on the state of the user interaction, `fnFunction` may or may not be executed. For example, `fnFunction` is not executed if the following conditions apply:

-   If the user is in edit mode

-   If the user has entered data but hasn't saved yet

-   If the user has triggered an action that is implemented through `securedExecution`

-   If the user has clicked *Cancel* in the data loss confirmation dialog


Note that the `securedExecution` method also returns a `Promise`. This `Promise` is rejected if `fnFunction` is not executed for any reason. If `fnFunction` is executed, the `Promise` returned by `securedExecution` behaves like the `Promise` returned by `fnFunction`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.EditFlow/methods/securedExecution) in the Demo Kit. 



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Using the SecuredExecution Method](using-the-securedexecution-method-5239ecd.md).

