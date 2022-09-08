<!-- loio40986e6343c944279cafbbc6ac07c83d -->

# Draft Handling with the OData V4 Model

A draft is an interim version of a business entity that has not yet been explicitly saved. Drafts are saved automatically in the background whenever users add or change information within a business entity.

The SAP Fiori Design Guidelines specify how [Draft Handling](https://experience.sap.com/fiori-design-web/draft-handling/) works, and platforms like CAP \([capire - Fiori Drafts \(cloud.sap\)](https://cap.cloud.sap/docs/java/fiori-drafts)\) and RAP \([Draft - SAP Help Portal](https://help.sap.com/viewer/923180ddb98240829d935862025004d6/Cloud/en-US/a81081f76c904b878443bcdaf7a4eb10.html)\) support this. SAPUI5's OData V4 model offers some features to support draft handling as well.

Suppose your application shows a list report of draft-enabled entities and an object page with more details. To switch between an active and a draft version in the object page and have this switch immediately reflected in the list report as well, you should create the operation binding for the corresponding*edit* or *activation* action relative to a row context of the list report's binding. Use `$$inheritExpandSelect` and pass the `bReplaceWithRVC` flag to the operation binding's `execute` method. This will result in a single POST request which executes the action and returns the desired projection \(`$expand, $select`\) as needed for the object page. Also, it replaces the row context *in situ* with the sibling entity returned by the action. For more information, see [`sap.ui.model.odata.v4.ODataContextBinding#execute`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/execute).

```js
onEdit : function () {
    var oObjectPage = this.byId("objectPage"),
        oActiveContext = oObjectPage.getBindingContext(),
        that = this;
 
    oActiveContext.getModel().bindContext("namespace.EditAction(...)",
        oActiveContext, {$$inheritExpandSelect : true})
        .execute("$auto", false, null, /*bReplaceWithRVC*/true)
        .then(function (oDraftContext) {
            that.oActiveContext = oActiveContext; // remember for cancel
            oObjectPage.setBindingContext(oDraftContext);
        });
}
```

To support an efficient cancellation of editing, you should remember the current context of the active entity and have it kept alive \(see [`sap.ui.model.odata.v4.Context#setKeepAlive`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/setKeepAlive)\). Then you can call [`sap.ui.model.odata.v4.Context#replaceWith`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/replaceWith) on the draft entity's context in order to replace the draft with the active entity *in situ*. Afterwards, you should delete the draft entity without requesting a new count from the server. If the active entity is not known \(anymore\), you can use the `"SiblingEntity"` navigation property to go from draft to active entity. For this, it can be executed quite like a function, including usage of `$$inheritExpandSelect` and `bReplaceWithRVC`.

```js
onCancel : function () {
    var oObjectPage = this.byId("objectPage"),
        oDraftContext = oObjectPage.getBindingContext();
 
    function gotoActiveContext(oActiveContext) {
        oObjectPage.setBindingContext(oActiveContext);
        that.oActiveContext = null; // not needed anymore
        oDraftContext.delete("$auto", /*bDoNotRequestCount*/true);
    }
 
    if (this.oActiveContext) {
        oDraftContext.replaceWith(this.oActiveContext);
        gotoActiveContext(this.oActiveContext);
    } else {
        oDraftContext.getModel().bindContext("SiblingEntity(...)", oDraftContext,
                {$$inheritExpandSelect : true})
            .execute("$auto", false, null, /*bReplaceWithRVC*/true).then(gotoActiveContext);
    }
}
```

While editing the draft version in the object page, all changes are sent to the server immediately using a `SubmitMode.Auto` update group. For additional information on batch groups, see [Batch Control](batch-control-74142a3.md). For changing requests submitted in `auto` groups the model will automatically wait for the previous batch request to return before sending the current batch request. This way it is ensured that the up-to-date `ETag` is used.

Before calling the *activation* action to finish the editing and take over the changed data from the draft to the active version it is important that all changes are persisted in the server. Call [`sap.ui.model.odata.v4.ODataModel#submitBatch`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch) with the update group id to ensure that all changes are persisted. Note that this will also close the changeset. In case the *activation* action is`execute`d directly afterwards, it will be sent in the same batch request, but in a subsequent changeset. In the same way `ODataModel#submitBatch` can be used to perform the *preparation* action before the *activation* action, and put each in a separate changeset. After successful activation, you should delete the context for the draft instance, but without sending a DELETE request to the server: Pass `null` as a group ID to [`sap.ui.model.odata.v4.Context#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/delete).

Changes might cause side effects calculated in the server. These can either be loaded implicitly with the PATCH or POST response, or explicitly with [`sap.ui.model.odata.v4.Context#requestSideEffects`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) as described in [Side Effects](initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_SE). The latter is particularly useful if the side effects also affect other entities, for example if the change of the quantity of an item also causes the overall price at the header level to be updated. Implicit loading of side effects should be avoided by using the `$$patchWithoutSideEffects` binding parameter if explicit loading is used. The `return=minimal` preference is used if the `$$patchWithoutSideEffects` binding parameter is set. For more information, see [`sap.ui.model.odata.v4.ODataModel#bindContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext) and [`sap.ui.model.odata.v4.ODataModel#bindList`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList).

For informing the user about the implicit saving, for example with an [`sap.m.DraftIndicator`](https://ui5.sap.com/#/api/sap.m.DraftIndicator), the following events may be used:

-   `patchSent` and `patchCompleted` of [`sap.ui.model.odata.v4.ODataContextBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) and [`sap.ui.model.odata.v4.ODataListBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding),
-   `createSent` and `createCompleted` of [`sap.ui.model.odata.v4.ODataListBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding).

