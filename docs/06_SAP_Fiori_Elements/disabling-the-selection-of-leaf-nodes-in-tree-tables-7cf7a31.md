<!-- loio7cf7a31fd1ee490ab816ecd941bd2f1f -->

# Disabling the Selection of Leaf Nodes in Tree Tables

Configuration option that prevents users from selecting leaf nodes in tree tables by disabling selection checkboxes and context menu options at the leaf level in SAP Fiori elements for OData V4. Use this to restrict selections to parent or header nodes only.

You can prevent users from selecting leaf nodes when selecting header nodes with `disableLeafSelection` in the `manifest.json` file or the `TreeTable` building block.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "controlConfiguration": {
>     "_Nodes/@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "type": "TreeTable",
>             "hierarchyQualifier": "NodesHierarchy",
>             "disableLeafSelection": true
>         }
>     }
> }
> ```

> ### Sample Code:  
> `disableLeafSelection` in the `TreeTable` Building Block
> 
> ```
> <macros:TreeTable
>     metaPath="/Products/@com.sap.vocabularies.UI.v1.LineItem"
>     hierarchyQualifier="ProductsHierarchy"
>     id="treeTable"
>     disableLeafSelection="true"/>
> ```

When `disableLeafSelection` is set to `true`, the selection checkbox is disabled at the leaf node level, as shown in the following screenshot:

  
  
**Node Selection with disableLeafSelection="true"**

![](images/LeafSelection1_71e8304.png "Node Selection with disableLeafSelection="true"")

Additionally, all options in the context menu are disabled, except *Open in New Tab or Window*, if navigation from a leaf node is enabled, as shown in the following screenshot:

  
  
**Context Menu with disableLeafSelection="true"**

![](images/LeafSelection-ContextMenu_d5d8938.png "Context Menu with disableLeafSelection="true"")

