<!-- loio21d273adeae349e3acb874b81d6c23f7 -->

# Create at a Position Calculated by the Back-End Server

The `createInPlace` option positions newly created nodes in hierarchical tables according to back-end server logic and applied sort criteria in SAP Fiori elements for OData V4. The system displays a message toast if filtering prevents visualization of the new entry.

By default, a newly created node is always displayed as the first child below its parent even if a sort or a filter is applied to the table.

You can use the `createInPlace` option to place the new node in its real position below its parent, which depends on the sort criteria applied to the table and the back-end server logic. If the new node cannot be visualized due to the filter criteria applied to the table, a message toast is displayed to the user.

> ### Note:  
> In the flexible column layout, when using both the `NewPage` and `createInPlace` options of the `createMode` property, the new entry is shown \(for example, in a subobject page\), but no message toast is displayed if it cannot be shown on the object page due to the applied filter criteria.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "tableSettings": {
>     "type": "TreeTable",
>     "hierarchyQualifier": "NodesHierarchy",
>     "personalization": true,
>     "creationMode": {
>         "name": "Inline",
>         "createInPlace": true,
>         "nodeType": {
>             "propertyName": "nodeType",
>             "values": {
>                 "Zone": "Create a new Zone",
>                 "Intermediary": "Create a new Intermediary node",
>                 "Line": "Create a new Line item"
>             }
>         },
>         "isCreateEnabled": ".extension.hierarchy-edit.custom.OPExtend.enableCreate"
>     }
> }
> ```

