<!-- loioc9723f8265f644af91c0ed941e114d46 -->

# Creating an Entity in a Collection

The `sap.ui.model.odata.v4.ODataListBinding#create` method creates a new entity inside a collection. Users can interact with a newly created entity even before it has been sent to the server.

> ### Note:  
> For creating a new single entity which is not part of a collection, see [Creating a Single Entity](creating-a-single-entity-ba0e73c.md).

> ### Note:  
> The `sap.ui.model.odata.v4.ODataListBinding#create` method is also used for creating records in controller code. For more information, see [Accessing Data in Controller Code](accessing-data-in-controller-code-17b30ac.md).

To create new entities, [`ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) uses the list binding's update group ID as group ID. For more information how this group ID is determined, see the documentation for the binding-specific parameter `$$updateGroupID` of [`ODataModel#bindList`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList).

A newly created entity can be inserted at the start or at the end of the list. This new entity is transient until it is successfully submitted, see [`Context#isTransient`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/isTransient). The initial data for the created entity can be supplied via the parameter `oInitialData` and modified via property bindings or [`Context#setProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/setProperty). Properties that are not part of the initial data show the default value from the service metadata on the UI, but they are not sent to the server. If there is no default value, null is used instead, even if the property is not nullable. Updates for the transient entity are collected and added to the POST request which creates the entity on the server. The initial data may contain instance annotations.

Inserting an entity at the end of the list is done via the `bAtEnd` parameter in the `create` call. The first call determines the overall position of created contexts within the binding's context list. When creating the first new entity at the beginning of the list, every succeeding insertion is relative to the created contexts within this list. Creation at the end of the list is only possible if the list's length has been requested via the `$count` system query option. [`ODataListBinding#isFirstCreateAtEnd`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/isFirstCreateAtEnd) can be used to determine whether any entries have already been created, and whether the first created entry was placed at the end of the list.

To delete transient entities, use [`Context#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/delete). Active transient entities are also deleted when you reset the changes for the list binding on which the entity has been created, see [`ODataListBinding#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/resetChanges) and [`ODataModel#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/resetChanges). The promise returned by [`Context#created`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/created) is rejected in all cases where the created entity is deleted before it is created in the back end. As long as the list binding has a transient entity, [`ODataListBinding#hasPendingChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/hasPendingChanges) returns `true`. Transient entities are handled by the following methods:

-   `setContext` for all bindings,
-   `changeParameters`, `filter`, `refresh`/`requestRefresh`, `sort`, and `suspend`/`resume` for root bindings and bindings using `$$ownRequest`; for other bindings, these methods raise an error.

Use the `bIgnoreKeptAlive` parameter of `ODataListBinding#hasPendingChanges` to check for pending changes which cannot be ignored. The deletion of another entity of the same list binding is possible.

> ### Note:  
> The position of the created entity may change after the methods `refresh`, `filter`, or `sort` of an [`ODataListBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding).

If you have called [`ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) on a list binding where the update group ID has [`SubmitMode.API`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) and the creation of the entity on the server fails, the creation is repeated with the next call of [`submitBatch`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) for this group. If the update group ID has [`SubmitMode.Auto`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) or [`SubmitMode.Direct`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) and the creation fails, the creation is repeated automatically with the next update for the entity. `submitBatch` can also be used for update group IDs with `SubmitMode.Auto` to repeat, independently of an update. The error returned by the server is passed to the [`Messaging`](https://ui5.sap.com/#/api/module:sap/ui/core/Messaging) module and the promise you get via [`Context.created`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/created) is not rejected. Each time the data for the created entity is sent to the server, a [`v4.ODataListBinding.createSent`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/events/createSent) event is fired. Each time the client receives a response for the creation, a [`v4.ODataListBinding.createCompleted`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/events/createCompleted) event is fired, independent of whether the creation was successful or not.

> ### Recommendation:  
> Lock the UI each time the \(`POST`\) request for the creation is sent to the server and unlock it, when the response from the server for that \(`POST`\) request is processed, because updates in between result in errors. If the update group ID is [`SubmitMode.API`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode), you can lock the UI when calling [`ODataModel#submitBatch`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) and unlock it again when the promise returned by `ODataModel#submitBatch` is resolved or rejected. However, if the update group ID is `SubmitMode.Auto` or `SubmitMode.Direct`, use the `createSent` event to lock the related UI and the `createCompleted` event to unlock it.

```
// suppose this list binding has no own update group; it uses the model's update group instead (an application group)
...
        onCreateSalesOrder : function (oEvent) {
            var oContext = this.getView().byId("SalesOrders").getBinding("items")
                    .create({
                        "Note" : "My new Sales Order",
                        "NoteLanguage" : "E",
                        "BuyerID" : "0100000000",
                        "CurrencyCode" : "EUR"
                    });
 
            // Note: This promise fails only if the transient entity is canceled, 
            //   i.e. deleted by either deleting the transient context or by resetting pending changes
            oContext.created().then(function () {
                    // sales order successfully created
                }, function (oError) {
                    // handle rejection of entity creation; if oError.canceled === true then the transient entity has been deleted
                        if (!oError.canceled) {
                            throw oError; // unexpected error
                        }
                });
        },
 
        onDeleteSalesOrder : function () {
            var oSalesOrderContext = this.getView().byId("SalesOrders").getSelectedItem().getBindingContext();
 
            oSalesOrderContext.delete("$auto").then(function () {
                    // sales order successfully deleted
               }, function (oError) {
                    // do error handling
               });
        },
 
        onSaveSalesOrder : function () {
            var oView = this.getView();
 
            function resetBusy() {
                oView.setBusy(false);
            }
 
            // lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
            oView.setBusy(true);
             
            oView.getModel().submitBatch(oView.getModel().getUpdateGroupId()).then(resetBusy, resetBusy);
        },
...
```

> ### Note:  
> To ensure that for a list binding all expanded data is available as soon as the promise returned by [`Context#created`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/created) is resolved, an additional single `GET` request for the newly created entity is sent automatically once the `POST` request has arrived.
> 
> If you want to skip this additional single `GET` request, call [`ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) with parameter `bSkipRefresh=true`.

The `promise` returned by [`Context#created`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/created) is resolved when the entity represented by this context has been created in the backend. Once the promise is resolved, [`sap.ui.model.Context#getPath`](https://ui5.sap.com/#/api/sap.ui.model.Context/methods/getPath) returns a path including the key predicate of the new entity. For returning the path including the key predicates, all key properties need to be available.



<a name="loioc9723f8265f644af91c0ed941e114d46__section_DCR"/>

## Deep Create

It is also possible to create nested entities in a navigation property with a single request together with their parent entity \(so-called "deep create"; the request itself is called "deep insert" in the [OData specification](http://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_CreateRelatedEntitiesWhenCreatinganE)\).



### Nested Collection

Bind the list for the nested collection relative to the transient context of the created main entity. A [`create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) in the nested table then creates a row which contributes to the POST request of the main entity. A deep create is not restricted to one level; it is also possible that a nested entity has a nested collection itself.

"Deep create" supports a simple collection-valued navigation property \(no path like "detail/items"\). It requires that the `autoExpandSelect` [model](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/constructor) parameter is `true`. There must be no context binding in the binding hierarchy between the top-level and nested list binding.

**Example: Creating a sales order with line items**

> ### Example:  
> **View**
> 
> ```
> 
> <SimpleForm id="form">
>     <Table id="items" items="{path : 'SO_2_SOITEM', parameters : {$$ownRequest : true}}">
>          <ColumnListItem>
>              <Input value="{ProductID}"/>
>              <Input value="{Amount}"/>
>              <Input value="{Unit}"/>
>            </ColumnListItem>
>     </Table>
> </SimpleForm>
> ```

> ### Example:  
> **Controller**
> 
> ```
>    createNewSalesOrder : function () {
>        var oSalesOrderBinding = this.getView().getModel().bindList("/SalesOrderList");
>        this.oNewSalesOrderContext = oSalesOrderBinding.create();
>        this.oNewSalesOrderContext.created().then(function () {
>            // successfully created
>        }, function () {
>            // creation canceled (if the request failed, it will be
>            // automatically queued again)
>        };
>        this.byId("form").setBindingContext(this.oNewSalesOrderContext);
>    },
>    addItem : function () {
>        oNewItemContext = this.byId("items").getBinding("items").create();
>    },
>    deleteItem : function () {
>        this.byId("items").getSelectedItem().getBindingContext().delete();
>    },
>    save : function () {
>        var oModel = this.getView().getModel();
>        oModel.submitBatch(oModel.getUpdateGroupId());
>    },
>    cancel : function () {
>          this.oNewSalesOrderContext.delete();
>         // alternatively
>         // oModel.resetChanges(oModel.getUpdateGroupId());
>    }
> ```

The `createNewSalesOrder` function creates a sales order and binds it to the form. Initially this is no deep create. The `addItem` and `deleteItem` functions show that you can create and delete nested items exactly like top-level items. They automatically add and remove an item in the nested collection of the top-level POST request. As soon as the first item has been added to the "items" table, the `create` becomes a deep create. `create` returns a context allowing to access the transient item's data. The [`isTransient`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/isTransient) value of such a nested context is `true`, and it has a [`created`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/created) promise. But there are two important differences:

-   A nested context becomes invalid after a successful deep create. New contexts are created for the nested collection, because it is not possible to reliably assign the response entities to those of the request, especially if the count differs.
-   Never use the `created` promise of a nested context! This context is about to be destroyed anyway, and it is not possible to access the created data through it. So the promise is always rejected, even if the creation succeeded.

It is also possible to create a sales order already having items in the initial data. These items then show up in the table immediately. They have transient contexts in the "items" table's binding, which can be accessed via [`getAllCurrentContexts`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/getAllCurrentContexts):

> ### Example:  
> ****
> 
> ```
> this.oNewSalesOrderContext = oSalesOrderBinding.create({
>     SO_2_SOITEM : [
>         {ProductID : "1", Amount : "1", Unit : "EA"},
>         {ProductID : "2", Amount : "3.7", Unit : "kg"}
>     ]
> });
> aInitialItemsContexts = this.byId("items").getBinding("items").getAllCurrentContexts();
> ```

The usage of the `bSkipRefresh` parameter when calling [`create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) is not recommended for a deep create. It leads to multiple single row requests if the POST response did not supply all properties of the nested list. If it is not set, the model checks whether all required properties and child entities are available on the client and requests only data that is missing.

Canceling a deep create or deleting the top-level entity removes the request, the top-level entity, and all its subentities. Deleting a nested entity also deletes its subentities.

As long as the parent context is still transient, requesting data from the server does not make sense. Hence, API functions leading to a server request \(like `refresh`, `sort`, `filter`, `requestSideEffects`\) are forbidden. When the parent entity including its nested entities has been created, the binding is fully functional.



### Nested Single Entity

No API is required here. Simply bind the properties of the nested entity relative to the transient context of the created main entity. If the user enters a value in such a field, this value is automatically added to the payload of the POST request, making it a deep create.

> ### Example:  
> **View**
> 
> ```
> 
> <SimpleForm>
>      <Text text="{SalesOrderID}"/>
>      <Text text="{SO_2_BP/BusinessPartnerID}"/>
>      <Input value="{SO_2_BP/CompanyName}"/>
> </SimpleForm>
> ```

In this \(unrealistic\) example, it is possible to create the business partner together with the sales order. As soon as the user enters a company name, the POST request for the sales order contains the `SO_2_BP` navigation property and thus becomes a deep create.

It is also possible to have this navigation property in the initial data.



<a name="loioc9723f8265f644af91c0ed941e114d46__section_ICR"/>

## Inline Creation Rows

In some applications users need to be able to quickly enter a large amount of new records. A "Create" button or the related keyboard shortcut that needs to be explicitly pressed would slow down the user. To avoid this, the application could provide multiple **inline creation rows** in the table that are initially filled with default values and are not persisted in the back end.

You can create such an inline creation row by calling [`sap.ui.model.odata.v4.ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) with the `bInactive` parameter. Call it multiple times for multiple rows. These rows are called inactive because they are not sent to the server. Once the user modifies a property of such an inactive row, and the modification passes the client-side validation, a [`v4.ODataListBinding.createActivate`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23events/createActivate) event is fired and the row will be sent to the server with the next batch for the binding's update group. You could use the event for additional custom validation, and it supports calling [`sap.ui.base.Event#preventDefault`](https://ui5.sap.com/#/api/sap.ui.base.Event/methods/preventDefault) to prevent the row from being sent to the server. You could use this, for example, to require certain properties to be set before sending the row to the server. You could also reset the row back to the initial state via [`Context#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/resetChanges). The event can also be used to create a new inline creation row. While inactive, an inline creation row does not count as a pending change and does not contribute to the collection's count.



<a name="loioc9723f8265f644af91c0ed941e114d46__section_CST"/>

## Context States

-   `persisted`: An already existing entity that was read from the server.
-   `inactive`: An inline creation row without any property update yet; it is waiting for a property change before adding a POST to the batch queue.
-   `transient`: A POST is waiting in the batch queue.
-   `createPending`: The POST has been sent to the server; the entity is waiting for the response.
-   `parked`: A POST via an auto group that failed is parked until a property update takes place.
-   `createdPersisted`: The POST succeeded, and the entity now exists on the server. If the binding is refreshed, the context's reaction depends on its `isKeepAlive` state. If it's set to `false`, the context is dropped and created anew when it's read from the server. If it's set to `true`, it is refreshed with a special request and remains in the `createdPersisted` state.

  
  
**Internal States of an OData V4 Binding Context**

![](images/Create_States_f359082.png "Internal States of an OData V4 Binding Context")

The state of a context can be checked via the following API functions:

-   [`Context#isTransient`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/isTransient). This function does not distinguish between the `transient`, `createPending`, and `parked` states of a context. It returns `true` for any of them; the internal state of a such a context should not matter to the application. `Context#isTransient` also returns `true` for `inactive` contexts. It returns `false` for `createdPersisted` contexts, and `undefined` for `persisted` contexts. The value of `isTransient()` can also be observed via the bindable annotation `@$ui5.context.isTransient`.

-   [`Context#isInactive`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/isInactive): This function returns `true` for `inactive` contexts, `false` for contexts that were created in the `inactive` state and have been activated, and `undefined` otherwise. The value of `isInactive()` can also be observed via the bindable annotation `@$ui5.context.isInactive`.

**Related Information**  


[sap.ui.model.odata.v4.ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding)

[sap.ui.model.odata.v4.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel)

[sap.ui.model.odata.v4.Context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context)

[sap/ui/core/Messaging](https://ui5.sap.com/#/api/module:sap/ui/core/Messaging)

[See also our Deep Create demo app](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel/sample/sap.ui.core.sample.odata.v4.DeepCreate)

