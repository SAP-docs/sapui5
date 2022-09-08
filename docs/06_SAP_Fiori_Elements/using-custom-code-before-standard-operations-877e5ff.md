<!-- loio877e5ff4e9e243e4a821811b183f8937 -->

# Using Custom Code Before Standard Operations

You can add custom coding before calling standard methods provided by SAP Fiori elements.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.

You can use the `onBefore` extension methods to add custom coding. The following extension methods are supported:

-   `onBeforeCreate`

    triggered before the standard create method is invoked

-   `onBeforeEdit`

    triggered before the standard edit flow is invoked

-   `onBeforeSave`

    triggered before the standard save method is invoked

-   `onBeforeDiscard`

    triggered before the standard draft discard is invoked

-   `onBeforeDelete`

    triggered before the standard delete method is invoked for an object page, or for each selected table context


For more information about using the extension methods, see the *Related Links* section below.

> ### Note:  
> If you want to use custom code to display messages, use the `securedExecution` method.
> 
> Also use this method to wrap custom code in case it changes the state of the object. In this case, ensure that the `"updatesDocument"` property is set to true so that SAP Fiori elements can display a confirmation popover, allowing users to discard their changes if they try to cancel or navigate away from the object.



<a name="loio877e5ff4e9e243e4a821811b183f8937__section_emm_bgh_fsb"/>

## Related Links

-   You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Custom Hooks](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/controllerExtensionsOverview/basicExtensibility).

-   For more information, see [EditFlow](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.EditFlow) in the Demo Kit.


