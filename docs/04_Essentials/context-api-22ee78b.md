<!-- loio22ee78b422614b40ad4c1938dc23d967 -->

# Context API

The OData V4 model's list and context bindings create `sap.ui.model.odata.v4.Context` objects, which enhance `sap.ui.model.Context` and provide the following methods:

-   `getObject` or `getProperty` provide synchronous and `requestObject` or `requestProperty` provide asynchronous access to values; the methods to access a property can provide the value in internal or external format

-   `getBinding` retrieves the binding which created the context

-   `getIndex` returns the context's list index provided the context has been created by an `ODataListBinding`

-   `created` returns a promise that resolves after the successful creation of the new entity in the back end

-   `delete` deletes an entity

-   `getCanonicalPath, requestCanonicalPath` determines the "canonical path" of an entity

-   `hasPendingChanges` tests for pending changes

-   `isKeepAlive` returns the context's `KeepAlive` attribute

-   `isTransient` tests whether a new entity exists on the client-side only

-   `refresh` refreshes an entity

-   `requestSideEffects` loads the side effects of a PATCH

-   `resetChanges` resets pending changes; also restores a context deleted on the client but not yet on the server

-   `setKeepAlive` sets the context's `KeepAlive` attribute. If `true`, the context is kept alive even when it is removed from its binding's collection, for example if a filter is applied and the entity represented by this context does not match the filter criteria. Note that the `refresh` and `requestSideEffects` methods are currently not supported for kept-alive contexts.

-   `setProperty` asynchronously sets a property value or an instance annotation. This is even possible without reading data first, in which case `If-Match : *` is used. You can also set a property without sending a PATCH request by using `null` as a group ID, but only if data has been read before.


> ### Note:  
> For `getObject` and `requestObject`, the data is cloned if the given path points to a non-primitive type. This ensures that internal OData model values cannot be modified.
> 
> When a property is read in external format, the format is solely determined by the type defined in the OData meta data of the property, and not by the type or formatter specified for the binding.

```js

// assume oEvent is an event fired when a button is pressed in an item of a table bound to /SalesOrderList
sOrderID = oEvent.getSource().getBindingContext().getProperty("SalesOrderID"); // the SalesOrderID in the same item

// get a value in external format e.g. "1.234,23" instead of 1234.23
sGrossAmount = oEvent.getSource().getBindingContext().getProperty("GrossAmount", true);
```

For more information, see [sap.ui.model.odata.v4.Context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context) in the Demo Kit.

