<!-- loio7862c07612874cd8b20d3bf04c345352 -->

# Triggering the Creation of a New Document Within a Table

The `createDocument` function enables creation of new documents within a table in SAP Fiori elements for OData V4.

You can trigger the creation of a document within a table by calling the `createDocument` function with the table reference within the `editFlow` controller extension:

> ### Sample Code:  
> Controller Extension
> 
> ```
> //Get the table API
> var table = this.getView().byId("fe::table::_Child::LineItem::Table");
> 
> //Create document 
> this.base.editFlow
>     .createDocument(table, {
>         creationMode: coreLibrary.CreationMode.Inline,
>         createAtEnd: true,
>         data: {
>             ChildTitleProperty: "Child Object Custom Title",
>             ChildDescriptionProperty: "Child Custom Description"
>         }
>     })
>     .then(function () {
>         MessageToast.show("Custom create action successfully invoked");
>     });
> ```

For more information and live examples, see the SAP Fiori development portal at [Global Patterns - Draft Handling](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/editFlow).

