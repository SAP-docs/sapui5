<!-- loiob54f7895b7594c61a83fa7257fa9d13f -->

# OData Operations

The OData V4 model supports OData operations \(`ActionImport`, `FunctionImport`, bound `Actions` and bound `Functions`\). Unbound parameters are limited to primitive values.



## Simple Function Bindings

You gain access to a `FunctionImport` by binding it to a view element. If there are no parameters and there is no need to control the point in time when the function is called, you can simply bind the OData path like this:

```
<Text 
    core:require="{
        Int16: 'sap/ui/model/odata/type/Int16'
    }"
    text="{
        path: '/GetNumberOfAvailableItems()',
        type: 'Int16'
    }" />
```

This binding path represents the function's return value. The model calls the function immediately when a control requests this value.

The type must be specified if the return value is a primitive type.



## Deferred Operation Bindings

Often it is not feasible for the operation to be called immediately, for example if there are parameters that the user has to enter first. In such cases, use an ODataContextBinding as element binding at a layout element in the view, for example a `<Form>` or a `<VBox>` \(see the [ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) API documentation in the Demo Kit\). Mark the operation as **deferred** by inserting an ellipsis \("..."\) in the brackets, for example `GetNextAvailableItem(...)`. Access the return value from child elements using relative bindings. When used like this, the context binding is called an **operation binding** or more specifically, a **function binding** or **action binding** depending on the type of OData operation it is used for.

If the operation binding defers operation invocation, you need to call its `invoke` method to invoke the operation. See below for an example.

**View:**

```xml
<Form id="getNextAvailableItem" binding="{/GetNextAvailableItem(...)}">
    <Label text="Description"/>
    <Text text="{Description}"/>
    <Button text="Call the function" press="onGetNextAvailableItem"/>
</Form>
```

**Controller:**

```js
onGetNextAvailableItem : function (oEvent) {
    this.getView().byId("getNextAvailableItem").getObjectBinding().invoke();
}
```

In the above example, the form \(which has an ID that we need later\) is bound to the context of the operation binding. The text field showing a property of the result is a child of this form. It has a relative binding to the property `"Description"`.

If the function returns a primitive value or a collection, the binding for the result must be `"{value}"` as shown in the two examples below:

**View:**

```xml
<Form id="getNumberOfAvailableItems" binding="{/GetNumberOfAvailableItems(...)}">
    <Label text="Number of available items:"/>
    <Text text="{value}"/>
    <Button text="Call the function" press="onGetNumberOfAvailableItems"/>
</Form>
```

```
<VBox id="getAvailableItems" binding="{path : '/GetAvailableItems(...)', parameters : {$select : ['ProductName', 'ProductId']}}">
    <List id="xyz" items="{value}">
        <items>
            <ObjectListItem title="{ProductName}" />
        </items>
    </List>
</VBox>
```

`invoke` returns a promise which is resolved if the operation was successful and rejected with an error if this was not the case. Note that the promise is **not** fulfilled with the action's result: Use dependent bindings to access the result.

`refresh` is silently ignored on a deferred function binding as long as it has not yet been invoked. Afterwards, a `refresh` calls the function again.



## Action Bindings

Action bindings must be deferred, otherwise the application cannot control when the action is invoked. A deferred action binding is declared exactly like a deferred function binding:

**View:**

```xml
<Form id="Submit" binding="{/Submit(...)}">
    <Button text="Submit the action" press="onSubmit"/>
</Form>
```

You append "\(...\)" even though the action's resource URL does not contain them. However, they are needed to mark the binding as deferred. In `invoke`, the binding uses the metadata to distinguish between action and function and to build the correct operation resource path.

`refresh` is always silently ignored on a deferred action binding to prevent the action from being invoked accidentally \(for example by calling the `refresh` method on the ODataModel instance `oModel.refresh()`\).



## Operation Parameters

You can use the parameters of a deferred operation binding inside an XML view.

The parameters are addressed by the path prefix "$Parameter". This can either be done by binding each control property via the path prefix "$Parameter" \(Option 1\) or by having an outer binding with a "$Parameter" path \(Option 2\).

> ### Note:  
> The path "$Parameter" must not be added directly to the path of a deferred operation binding. A deferred operation binding is identified by an ellipsis at the end of the path.

This is how to bind each property without a "$Parameter" context:

**View:**

> ### Example:  
> Binding parameters to a dialog \(Option 1\)
> 
> ```xml
> <Dialog binding="{/ChangeTeamBudgetByID(...)}" id="operation1" title ="Change Team Budget">
>     <buttons>
>         ...         
>     </buttons>
>     <form:SimpleForm>
>         <Label text="TeamID" />
>         <Input value="{$Parameter/TeamID}" />
>         <Label text="Budget" />
>         <Input value="{$Parameter/Budget}" />
>     </form:SimpleForm>
> </Dialog>
> ```

Alternatively, you may bind the entire form to the `$Parameter` context:

**View:**

> ### Example:  
> Binding parameters to a dialog \(Option 2\)
> 
> ```xml
> <Dialog binding="{/ChangeTeamBudgetByID(...)}" id="operation2" title="Change Team Budget">
>     <buttons>
>         ...         
>     </buttons>
>     <form:SimpleForm binding="{$Parameter}">
>         <Label text="TeamID" />
>         <Input value="{TeamID}" />
>         <Label text="Budget" />
>         <Input value="{Budget}" />
>     </form:SimpleForm>
> </Dialog>
> ```

In either case, the values of the parameters are set using the context binding of the control, with no need to write any application code.

Alternatively, operation parameters can be set by calling the function `setParameter` on the operation binding, as shown in this example:

**Controller:**

```js
onSubmit : function (oEvent) {
    this.getView().byId("Submit").getObjectBinding().setParameter("Comment", sComment).invoke();
}
```

The API method `getParameterContext` can be used to access parameters in controller code, see also [Accessing Data in Controller Code](accessing-data-in-controller-code-17b30ac.md)

The example below demonstrates how a budget may be modified depending on the `TeamID`:

**Controller:**

> ### Example:  
> Reading parameter values using the parameter context
> 
> ```js
> adaptBudgetToTeam : function (){
>     var oDialog = this.oView.byId("operation2"); // the second dialog in the paragraph before
>         oParameterContext = oDialog.getObjectBinding().getParameterContext();
>  
>  
>     if (oParameterContext.getProperty("TeamID") === "STARTUP") {
>         oParameterContext.setProperty("Budget", 555.55);
>     else {
>         oParameterContext.setProperty("Budget", 123.45);
>     }
> }
> ```

> ### Note:  
> The parameter context is only defined if the operation binding is resolved.



<a name="loiob54f7895b7594c61a83fa7257fa9d13f__section_BAAF"/>

## Bound Actions and Functions

So far, the examples always used operations at root level, addressed via an action import or function import. However, it is also possible to bind an action or a function to another resource of the service. This can be an entity or a collection of entities.

Bound actions or functions are controlled in the same way as unbound operations; append `(...)` to the binding path for the control's property.

To call actions or functions bound to a single entity or navigation property, use a relative binding. The following sample calls the "invoice created" action on the sales order selected in the corresponding table:

```js
var oModel = this.getView().getModel(),
    oTable = this.getView().byId("SalesOrders"),
    oSalesOrderContext = oTable.getSelectedItem().getBindingContext(),
    oAction = oModel.bindContext("name.space.InvoiceCreated(...)", oSalesOrderContext);
 
oAction.invoke().then(
    function () {
        MessageToast.show("Invoice created for sales order " + oSalesOrderContext.getProperty("SalesOrderID"));
    },
    function (oError) {
        MessageBox.alert(oError.message, {
            icon : MessageBox.Icon.ERROR,
            title : "Error"});
        });
    }
);
```

To call actions or functions bound to a collection specified by an OData entity set, you can create a context binding with an absolute path, or with a relative path for the operation \(for example `name.space.DestroyOutdated(...)"`\) and the header context of a list binding as parent context. The following sample shows a button press event handler which calls the `destroy outdated` action on the `LeaveRequests` entity set.

```js
var oModel = this.getView().getModel();
 
oModel.bindContext("/LeaveRequests/name.space.DestroyOutdated(...)").invoke();
```

The same example with a relative binding and the header context of the list binding as parent context:

```js
var oModel = this.getView().getModel(),
    // assume there is a table with ID "leaveRequests" and its items aggregation bound to "/LeaveRequests"
    oListBinding = this.byId("leaveRequests").getBinding("items"),
    oHeaderContext = oListBinding.getHeaderContext();

oModel.bindContext("name.space.DestroyOutdated(...)", oHeaderContext).invoke(); 
```

> ### Note:  
> -   The path of an operation binding may also start with a navigation property.
> 
>     Example: The operation binding has a relative path `BP_2_PRODUCT/name.space.Change(...)`. You set its binding context from the selected item in a table bound to `/BusinessPartners`. When you call `invoke` on the operation binding, the "change" action is invoked with the selected business partner's navigation property `BP_2_PRODUCT` as binding parameter.
> 
> -   The parent binding of a deferred operation must not be a deferred operation itself.
> 
> -   When invoking a bound action, you can use the `bIgnoreETag` argument of [`ODataContextBinding#invoke`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke) to actively ignore the ETag match that normally happens \(technically, the header *"If-Match : \*"* will be used\). This is useful if a second bound action for the same entity is to be invoked within the same batch \(especially if it is in a different change set\). An example would be "prepare" and "activate" for draft handling. Without this, the second bound action would be rejected, because the client sent the initial ETag via the *"If-Match"* header, but the first bound action changes that ETag on the server before the second one is invoked.



### Addressing properties of an entity via an operation's binding parameter

For operations bound to an entity, it is possible to address properties of the entity through the operation's binding parameter.

For example, let `CreateInvoice` be a bound action on the `SalesOrder` entity type with the binding parameter `_it`. Properties of the current sales order can be addressed with a property binding having a path that starts with the binding parameter name `_it`.

> ### Example:  
> Addressing properties of the binding parameter
> 
> ```xml
> 
> <Dialog binding="{name.space.CreateInvoice(...)}" id="operation" title="Address Note property of the sales order">
>     <form:SimpleForm binding="{$Parameter}">
>         <Label text="Note" />
>         <Input value="{_it/Note}" />
>     </form:SimpleForm>
> </Dialog>
> ```



<a name="loiob54f7895b7594c61a83fa7257fa9d13f__section_SH"/>

## Strict Handling

In some cases an action should not be performed in case warnings are present, unless the user explicitly confirms the action. To this end, the HTTP request header `Prefer:handling=strict` is used to request the server to handle warnings like errors. In the case of an action, this means that the request will only be successful if there are no warnings. In case the request fails, the user is prompted to decide whether the action is aborted, allowing the user to fix the warnings, or continued by ignoring the warnings.

The strict handling is requested by the client with the HTTP request header `Prefer:handling=strict`. The server replies with HTTP status code `412 Precondition Failed` and the response header `Preference-Applied:handling=strict` if the request fails because the preference was applied.

To request this behavior, you have to provide `fnOnStrictHandlingFailed` as a callback function when invoking [`sap.ui.model.odata.v4.ODataContextBinding#invoke`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke) . This callback is called if the action is rejected with HTTP status code `412 Precondition Failed` and the response header `Preference-Applied:handling=strict`. All relevant messages of the OData error are passed to the callback as an array of [`sap.ui.core.message.Message`](https://ui5.sap.com/#/api/sap.ui.core.message.Message) . These messages are not reported to the message model. The callback may be used to visualize the messages and has to return a `Promise` resolving with a `boolean` value. If this `Promise` resolves with `true`, the bound action is repeated, now without requesting `Prefer:handling=strict`. Otherwise, the `Promise` returned by `sap.ui.model.odata.v4.ODataContextBinding#invoke` will be canceled.

It is possible to include multiple actions in the same change set, for example when invoking an action on multiple items in a list. If one or more of the actions is rejected with HTTP status code `412 Precondition Failed` and the response header `Preference-Applied:handling=strict`, **all** of the actions included in the change set are rejected. The `fnOnStrictHandlingFailed` callback will then be invoked for all rejected actions; each callback instance only recieves the relevant messages for its associated action. This means that it's possible that no messages will be given to some of the callbacks.

To enable strict handling for the above example, the controller code snippet may look like this:

> ### Example:  
> "`Prefer:handling=strict`"
> 
> ```xml
> // XML view:
> // the messages may be visualized in a sap.m.Dialog via sap.m.MessageView and sap.m.MessageItem like this
>     <Dialog id="onStrictMessagesDialog"
>             title="Messages during order confirmation, do you want to continue?"
>             resizable="true" contentHeight="50%" contentWidth="50%"
>             verticalScrolling="false" state="Warning">
>         <buttons>
>             <Button id="confirmStrictMode" text="Yes"
>                     tooltip="Ignore warnings and confirm anyhow"
>                 press="onConfirmStrictMessages"/>
>             <Button id="cancelStrictMode" text="No"
>                     tooltip="Cancel confirmation"
>                 press="onCancelStrictMessages" type="Emphasized"/>
>         </buttons>
>         <MessageView items="{ui>/strictMessages}">
>             <MessageItem
>                 type="{ui>type}"
>                 title="{ui>message}"
>                 subtitle="{ui>target}">
>             </MessageItem>
>         </MessageView>
>     </Dialog>
>  
> // controller code:
> // event handler that invokes the bound action
> onInvokeAction : function () {
>   var that = this;
>  
> ...
>  
>     function onStrictHandlingFailed (aMessages) {
>         var oView = that.oView;
>  
>         oView.getModel("ui").setProperty("/strictMessages", aMessages);
>         oView.byId("onStrictMessagesDialog").open();
>             return new Promise(function (fnResolve) {
>                 that.fnStrictResolve = fnResolve;
>             });
>         }
>     }
>  
>     oAction.invoke(undefined, undefined, onStrictHandlingFailed).then(
>       function () {
>         MessageToast.show("Invoice created for sales order");
>       },
>       function (oError) {
>         if (!oError.canceled)
>           MessageBox.alert(oError.message, {icon : MessageBox.Icon.ERROR, title : "Error"});
>       });
> });
>  
> // event handler to confirm the message and repeat the action
> onConfirmStrictMessages : function () {
>     this.fnStrictResolve(true);
>     this.oView.byId("onStrictMessagesDialog").close();
> },
>  
> // event handler to reject the action
> onCancelStrictMessages : function () {
>     this.fnStrictResolve(false);
>     this.oView.byId("onStrictMessagesDialog").close();
> },
> ```

See also the example in the Demo Kit: [Controller Code for `sap.ui.core.sample.odata.v4.SalesOrders.onConfirmSalesOrder`](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel/sample/sap.ui.core.sample.odata.v4.SalesOrders/code/Main.controller.js)



<a name="loiob54f7895b7594c61a83fa7257fa9d13f__section_osx_m5l_gdb"/>

## Advertised Operations

According to the [OData 4.0 specification \("11.5.2 Advertising Available Operations within a Payload"\)](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752309) services may return available actions and functions bound to a particular entity as part of the entity representation within the payload. Data for an advertised operation within an entity is sent as property starting with `#<namespace>.<action>` of that entity. If the entity does not advertise the operation, it does not contain this property. To access the advertised operation in a binding, the same format has to be used. See the following example:

> ### Example:  
> Enable a button to initiate an action `AcSetIsOccupied` available on entity type of entity set `EMPLOYEES` depending on advertisement of this action on the entity `EMPLOYEES('1')`

```
<FlexBox binding="{/EMPLOYEES('1')}">
    <Button text="Set occupied" enabled="{= !!%{#com.sap.gateway.default.iwbep.tea_busi.v0001.AcSetIsOccupied} }"/>
</FlexBox>
```

Here a button is enabled only if the action `AcSetIsOccupied` is advertised for the entity `EMPLOYEES('1')`. The `%` operator is used to set the internal type to `any` because the advertised action is sent as an object. The double negation `!!` converts this object to a boolean value that is needed by the `enabled` control property.

If no advertised action was returned in the payload, `undefined` \(or `null` in OData 4.01 in case of advertised non-availability\) is returned as value for the binding. This translates to false in the expression above.

If there is an additional list of non-binding parameter names to identify a specific overload, then they need to be given in the binding path as well, for instance: `%{#Model.RemainingVacation(Year)}`.

> ### Note:  
> The bound action advertisement is added to $select automatically if the model parameter [`autoExpandSelect`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/constructor) is set.

To access the metadata of an operation, the double hash \(`##`\) syntax has to be used as is illustrated in the next example:

> ### Example:  
> Binding against metadata of an action
> 
> ```
> var oContext = oModel.createBindingContext("/EMPLOYEES('1')/##com.sap.gateway.default.iwbep.tea_busi.v0001.AcSetIsOccupied");
> var oMetaModel = oContext.getModel();
> oMetaModel.requestObject("0/$ReturnType/$Type", oContext).then(alert);
> ```

Here a context is created pointing to the metadata of the action and afterwards the type is accessed using this context.

This approach can also be used with XML templating where [`createBindingContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/createBindingContext) is called internally.



<a name="loiob54f7895b7594c61a83fa7257fa9d13f__section_AOR"/>

## Access Operation Results

You can access the results of the operation by calling `getObject()` from the bound context.

```js
// let oOperation be the operation's context binding
oOperation.invoke().then(function () {
    // Note: invoke does not deliver the results

    var oResults = oOperation.getBoundContext().getObject();
    ...
});
```

The promise returned by the operation binding's [`invoke`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke) method may resolve with a *return value context* provided the conditions specified in [`invoke`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke) are met. The operation binding may be bound to an entity or a collection of entities.

The typical use case for *return value context* is when you call a bound operation with a `C1` context defining its binding parameter and the bound operation returns a *different version* of the entity used as binding parameter. `C1` is the binding context of an "object page" container displaying properties of the corresponding entity. You need to replace `C1` as binding context of the object page by the*return value context*. This way, the *different version* of the entity is displayed without a further read request. If the bound operation returns the entity used as binding parameter, the changes will automatically be copied to the binding parameter.

If the operation binding fulfills the conditions for returning a context, you can set the `$$inheritExpandSelect` parameter for the binding: The request for the bound operation is then sent with the same `$expand` and `$select` query options used to load the operation's binding parameter. This way you guarantee that all fields of the object page are available in the operation response.

If the `C1` context belongs to a list binding, for example in a list report, you can pass the `bReplaceWithRVC` flag to the operation binding's `invoke` method in order to immediately replace `C1` in the list with the return value context and return that list context instead. This way, the *different version* of the entity is displayed even inside the list report without a further read request. For more information, see [`sap.ui.model.odata.v4.ODataContextBinding#invoke`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke) and [Draft Handling with the OData V4 Model](draft-handling-with-the-odata-v4-model-40986e6.md).

Sample object page to display an `Artist` entity

```
<form:SimpleForm id="objectPage">
    <Toolbar>
        <Button text="Edit" enabled="{IsActiveEntity}" press=".onEdit"/>
    </Toolbar>
    <Label text="ID"/> <Text text="{ArtistID}"/>
    <Label text="Is Active"/> <Text text="{IsActiveEntity}"/>
    <Label text="Name"/> <Input value="{Name}" />
    ...
</form:SimpleForm>
```

Controller code to display the active version of `Artist 42` initially and switch to draft version on *Edit*

```
// display "active" version of artist initially
onInit : function () {
    var oActiveArtistContext = oModel
        	.bindContext("/Artists(ArtistID='42',IsActiveEntity=true)")
        	.getBoundContext();
    this.byId("objectPage").setBindingContext(oActiveArtistContext);
},
 
// display the "inactive" version of the entity returned by the "EditAction"
onEdit : function () {
    var that = this;
    oModel.bindContext("name.space.EditAction(...)", this.byId("objectPage").getBindingContext(), {$$inheritExpandSelect : true})
        .invoke()
        .then(function (oInactiveArtistContext) {
            that.byId("objectPage").setBindingContext(oInactiveArtistContext);
        });
}
```

**Related Information**  


[OData Version 4.0 Part 1, 11.5 Operations](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html)

[ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding)

