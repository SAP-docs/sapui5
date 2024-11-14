<!-- loio74142a38e3d4467c8d6a70b28764048f -->

# Batch Control

OData V4 allows you to group multiple operations into a single HTTP request payload, as described in the official OData V4 specification Part 1, Batch Requests \(see the link under Related Information for more details\).

The OData V4 model sends requests in the following cases:

-   **Implicit read requests** to retrieve data for a binding

    Example: A list binding with the absolute path `/SalesOrderList` initiates a `GET SalesOrderList` to read data.

-   **Implicit update requests** via two-way binding

    Example: Update a sales order's note through a property binding with the relative path `Note`, which has a context with path `/SalesOrderList(SalesOrderID='42')` initiating `PATCH SalesOrderList(SalesOrderID='42')` with the note's value as JSON payload.

-   **Explicit requests** initiated through API calls like `ODataListBinding.refresh` or `ODataContextBinding.invoke`


For each of these cases, it is possible to specify a group ID of type `string`.

A group ID has one of the following [submit modes](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) to control the use of batch requests:

-   `sap.ui.model.odata.v4.SubmitMode.API` - Requests associated with the group ID are sent in a batch request via [`sap.ui.model.odata.v4.ODataModel#submitBatch`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) .

-   `sap.ui.model.odata.v4.SubmitMode.Auto` - Requests associated with the group ID are sent in a batch request which is initiated automatically before rendering.

-   `sap.ui.model.odata.v4.SubmitMode.Direct` - Requests associated with the group ID are sent directly without batch. Note that some features of the OData V4 model rely on the correct order of request processing in the back end. This is only guaranteed for requests made in batch requests.


> ### Note:  
> We recommend using either`sap.ui.model.odata.v4.SubmitMode.API` or `sap.ui.model.odata.v4.SubmitMode.Auto` groups in productive applications as not all features of the OData V4 model work without batch requests.

The following group IDs are possible:

-   `"$auto"` and `"$auto.*"`: Predefined batch group ID which is the default if no group ID is specified. You can use different `$auto.*` group IDs to use different batch requests. The suffix can be any non-empty string consisting of alphanumeric characters from the basic Latin alphabet, including the underscore. They have the submit mode `sap.ui.model.odata.v4.SubmitMode.Auto`.

-   `"$direct"`: Predefined batch group ID which has the submit mode `sap.ui.model.odata.v4.SubmitMode.Direct`. For more information, see [Performance Aspects](performance-aspects-5a0d286.md).

-   An application group ID is a non-empty string consisting of alphanumeric characters from the basic Latin alphabet, including the underscore. By default, an application group has the submit mode `sap.ui.model.odata.v4.SubmitMode.API`. It is possible to use a different submit mode; for details see section [Define submit mode for an application group ID](batch-control-74142a3.md#loio74142a38e3d4467c8d6a70b28764048f__section_e1x_pfg_1cb).

-   With [`sap.ui.model.odata.v4.Context#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/delete), [`sap.ui.model.odata.v4.ODataModel#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/delete), and [`sap.ui.model.odata.v4.ODataContextBinding#invoke`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding%23methods/invoke), you can also use the `$single` group ID. With this group ID, a single batch request is sent directly, similar to `sap.ui.model.odata.v4.SubmitMode.Direct` groups.

To specify the group ID for implicit requests, use the parameters `$$groupId` \(group ID for read requests\) and `$$updateGroupId` \(group ID for update requests\) for the binding which initiates the request \(see the [ODataModel.bindList](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList), [ODataModel.bindContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext) and [ODataModel.bindProperty](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty) API documentation\).

Batch requests for update groups with a submit mode different from `$direct` are queued per group ID. A batch request with changes is only sent if the previous batch request for the same group ID is returned and processed. In this case, all submitted changes for that group ID are combined in one batch request; changes associated with different calls to [ODataModel.submitBatch](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) use different change sets inside the batch request.

Code example: Updates for the sales order note through two-way binding will use the group ID `"myGroup"`, whereas data is read with the group `"$auto"`.

**Batch group usage for binding created via JavaScript:**

```js

sap.ui.define(["sap/ui/model/odata/v4/ODataModel"], function (ODataModel) {
    var oModel = new ODataModel({serviceUrl : "/myService/", synchronizationMode : "None"}),
        oContextBinding = oModel.bindContext("/SalesOrderList(SalesOrderID='42')", /*oContext*/ undefined, {$$updateGroupId : "myGroup"}), 
        oPropertyBinding = oModel.bindProperty("Note", oContextBinding.getBoundContext());
});  
```

XML view sample: Declares controls which create the context binding \(in the `SimpleForm`\) and the property binding \(in the `Input`\) as sketched in the above JavaScript code sample.

**Batch group usage for bindings created via XML view:**

```xml

<form:SimpleForm binding="{path : '/SalesOrderList(SalesOrderID=\'42\')', parameters : {$$updateGroupId : 'myGroup'}}" editable="true" ...>
    <Label labelFor="Note" text="Note" /> 
    <Input id="Note" value="{Note}" />
    ...
</form:SimpleForm> 
```

On instantiation of an OData V4 model, you can provide both a group ID and an update group ID; they are used as defaults if the corresponding binding parameter is not specified. The default for the group ID is `"$auto"`. The value of group ID is used as a default for the update group ID.

For explicit requests, the group ID can be specified as an optional parameter to the corresponding API method. The group ID or update group ID of the binding is used as a default. For more information, see the [ODataContextBinding.invoke](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke), [ODataContextBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/refresh), [ODataListBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/refresh), [ODataPropertyBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding/methods/refresh) and [ODataPropertyBinding.setValue](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding/methods/setValue) API documentation in the Demo Kit.



## Change Sets and Order of Requests Inside a Batch Request

The OData V4 model automatically puts all non-GET requests into a single change set, which is located at the beginning of a batch request. All GET requests are put after it. If there is only a single request within the change set, it is replaced by that single request when submitting the batch group \(saves overhead on the wire\). PATCH requests for the same entity are merged into a single request.



## Resetting Property Changes

You can set an update group ID for a binding so that property changes are collected in a batch queue. The `ODataModel.submitBatch` method sends all these changes for a given batch group at once and the `ODataModel.resetChanges` method resets the changes. With these methods, you can, for example, implement a *Save* and a *Cancel* button for a form: *Save* initiates `submitBatch`, and *Cancel* initiates *resetChanges*.

> ### Note:  
> The `resetChanges` method only resets all implicit update requests via two-way binding for the given group, while read requests or requests from `ODataContextBinding.invoke` remain in the queue and are sent when the `submitBatch` method is called.

The list and context binding also offer the `resetChanges` method which resets changes for the binding and its child bindings.

> ### Note:  
> The promise returned by `submitBatch` can be used together with the `hasPendingChanges` method to check whether changes were successfully persisted. `hasPendingChanges` exists for the ODataModel as well as for ODataListBinding, ODataContextBinding and ODataPropertyBinding. Note that the promise returned by `submitBatch` is only rejected if the complete batch request has failed.



### Example: View

```js

<Toolbar design="Transparent">
    <content>
        <Button icon="sap-icon://save" press="onSaveSalesOrder"/>
        <Button icon="sap-icon://sys-cancel-2" press="onCancelSalesOrder"/>
    </content>
</Toolbar>
<form:SimpleForm id="mySimpleForm" binding="{path: '/SalesOrderList(ID=\'42\')', $$updateGroupId: 'SalesOrderUpdateGroup'}">
    <Label text="Sales Order ID" />
    <Text text="{SalesOrderID}" />
    <Label labelFor="Note" text="Note" />
    <Input id="Note" value="{Note}" />
</form:SimpleForm>
```



### Example: Controller

```js
onCancelSalesOrder : function (oEvent) {
    this.getView().getModel().resetChanges("SalesOrderUpdateGroup");
},
 
onSaveSalesOrder : function (oEvent) {
    var that = this;
    this.getView().getModel().submitBatch("SalesOrderUpdateGroup").then(function(){
        if (!that.byId("mySimpleForm").getBindingContext().getBinding().hasPendingChanges()){
            // raise success message
        }
    });
},
```



<a name="loio74142a38e3d4467c8d6a70b28764048f__section_cyg_3pw_vhb"/>

## Repeating Property Changes

The OData V4 model automatically repeats failed property changes \(PATCH requests\). If the update group ID has [SubmitMode.API](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode.API) and the property change of the entity on the server fails, the change is repeated with the next call of [ODataModel.submitBatch](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) for this group. If the update group ID has [SubmitMode.Auto](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode.Auto) or [SubmitMode.Direct](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode.Direct) and the change fails, the change is repeated automatically with the next update for the entity. Since 1.67.0, [ODataModel.submitBatch](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) can also be used for update group IDs with [SubmitMode.Auto](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode.Auto) in order to repeat, independently of an update.

The same holds true for [Creating an Entity](creating-an-entity-c9723f8.md) and [Deleting an Entity](deleting-an-entity-2613ebc.md).

> ### Note:  
> If updates for an entity fail and thus prevent its deletion, they should be reset via [`Context#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/resetChanges)

[Bound Actions](odata-operations-b54f789.md) also automatically repeat failed changes for their binding parameter.

When calling [`v4.Context#requestSideEffects`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/requestSideEffects), all failed updates or creates for the group ID are repeated within the same batch request. If the group ID has [SubmitMode.Auto](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode.Auto) and any updates or creates are currently running, the method first waits for them to be processed.



<a name="loio74142a38e3d4467c8d6a70b28764048f__section_e1x_pfg_1cb"/>

## Define submit mode for an application group ID



On construction of the model, it is possible to specify the submit mode for application group IDs. This is useful when you want to separate requests requiring short processing time on the server from those requiring long processing time, so that responses to "fast" requests are visible earlier on the UI.

The following example shows how to set the submit mode `sap.ui.model.odata.v4.SubmitMode.Auto` for the group IDs `fastGroup` and `slowGroup` in the manifest.

> ### Example:  
> Specify the submit mode for an application group in manifest.json
> 
> ```
> "models" : {
>     "" : {
>         "dataSource" : "default",
>         "settings" : {
>             "operationMode" : "Server",
>             "synchronizationMode" : "None",
>             "groupProperties" : {
>                 "fastGroup" : {"submit" : "Auto"},
>                 "slowGroup" : {"submit" : "Auto"}
>             }
>         }
>     }
> ```

**Related Information**  


[ODataModel.submitBatch](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch)

[ODataModel.bindList](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList)

[ODataModel.bindContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext)

[ODataModel.bindProperty](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty)

[ODataContextBinding.invoke](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke)

[ODataContextBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/refresh)

[ODataListBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/refresh)

[ODataPropertyBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding/methods/refresh)

[ODataPropertyBinding.setValue](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding/methods/setValue)

[OData V4 Specification Part 1, Batch Requests](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html)

