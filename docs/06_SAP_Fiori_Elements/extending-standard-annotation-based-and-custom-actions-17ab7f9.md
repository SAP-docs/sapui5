<!-- loio17ab7f988a504d88b40de26b06d00cf6 -->

# Extending Standard, Annotation-Based, and Custom Actions

You can initiate or override standard, annotation-based, and custom actions using `editFlow` APIs and hooks.



## Using the`editFlow` API

You can use the `editFlow` APIs from your custom code to create, edit, delete, and save documents, discard changes, or initiate an action on a specific context. The following `editFlow` APIs are available:

-   `createDocument`: Creates a new document

-   `editDocument`: Initiates draft creation for an active document and returns the draft context

-   `applyDocument`: Submits the current set of changes and navigates back

-   `cancelDocument`: Discards the editable document

-   `deleteDocument`: Deletes the document

-   `invokeAction`: Invokes a bound or unbound action and tracks the changes so that other pages refresh and show the updated data upon navigation


The following sample code shows how to call `editDocument` when the user clicks a custom button:

> ### Sample Code:  
> Custom Edit Action Handler
> 
> ```
> public async onEditPressed(this: PageController): Promise<void> {
>       const context = this.getView()?.getBindingContext() as ODataV4Context;
>       if (!context) {
>             MessageBox.show("You must first select a row before you can press edit!");
>       } else {
>             const targetContext = await this.getExtensionAPI().getEditFlow().editDocument(context);
>             if (targetContext) {
>                   this.getView()?.setBindingContext(targetContext);
>                   (this.getExtensionAPI().byId("travelTable") as TableAPI).refresh();
>             }
>       }
> }
> ```

For more information and live examples, see the SAP Fiori development portal at [Using the editFlow Controller Extension Bar](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/customEditFlow).



## Using the `editFlow` Hooks

You can use `editFlow` hooks to override the default action flow at specific points in the action lifecycle. Each hook follows the same behavior: resolve the promise to allow the action to proceed, or reject the promise to cancel the action.

> ### Note:  
> Override these hooks in your page controllers. You must not invoke them directly.

The following hooks intercept the action flow before or after an action executes:

**Action Flow Hooks**


<table>
<tr>
<th valign="top">

Hook

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`onBeforeCreate`

</td>
<td valign="top">

Before a document is created

</td>
</tr>
<tr>
<td valign="top">

`onBeforeDelete`

</td>
<td valign="top">

Before a document is deleted

</td>
</tr>
<tr>
<td valign="top">

`onBeforeDiscard`

</td>
<td valign="top">

Before a document is discarded

</td>
</tr>
<tr>
<td valign="top">

`onBeforeEdit`

</td>
<td valign="top">

Before a document enters edit mode

</td>
</tr>
<tr>
<td valign="top">

`onBeforeSave`

</td>
<td valign="top">

Before a document is saved

</td>
</tr>
<tr>
<td valign="top">

`onBeforeExecuteAction`

</td>
<td valign="top">

After the action parameter dialog closes, if applicable

</td>
</tr>
<tr>
<td valign="top">

`onAfterCreate`

</td>
<td valign="top">

After a document is created

</td>
</tr>
<tr>
<td valign="top">

`onAfterDelete`

</td>
<td valign="top">

After a document is deleted

</td>
</tr>
<tr>
<td valign="top">

`onAfterDiscard`

</td>
<td valign="top">

After changes are discarded

</td>
</tr>
<tr>
<td valign="top">

`onAfterEdit`

</td>
<td valign="top">

After a document enters edit mode

</td>
</tr>
<tr>
<td valign="top">

`onAfterSave`

</td>
<td valign="top">

After a document is saved

</td>
</tr>
</table>

The following sample code shows how to use the `onBeforeSave` hook to run custom validation before the save action is executed:

> ### Sample Code:  
> Custom Validation Using the `onBeforeSave` Hook
> 
> ```
> // MyObjectPageController.controller.js
> sap.ui.define(["sap/fe/templates/ObjectPage/ObjectPageController"], function(ObjectPageController) {
>     return ObjectPageController.extend("myapp.MyObjectPageController", {
>         editFlow: {
>             onBeforeSave: async function(mParameters) {
>                 // custom validation before save
>                 const isValid = await myValidation(mParameters.context);
>                 if (!isValid) {
>                     return Promise.reject(); // stops the Save, user stays in edit mode
>                 }
>             }
>         }
>     });
> });
> ```

For more information and live examples, see the SAP Fiori development portal at [Implementing a Hook](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/editFlow).

