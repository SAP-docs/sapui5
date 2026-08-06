<!-- loio7351123cb4144e348be0cd46a2d1f678 -->

# Copy and Paste in Tree Tables

The node copying functionality in tree tables allows you to control which nodes can be copied and where they can be pasted using extension points in SAP Fiori elements for OData V4. Use this feature to enable selective copy-paste operations in hierarchical data structures.

Copying a node is supported as of SAPUI5 1.136. It can be enabled or disabled by using the following extension points:

-   `isNodeCopyable`: Defines if a node can be copied. The associated callback receives the source context as a parameter.
-   `isCopyToPositionAllowed`: Defines if a source node can be pasted under a specific parent node. The associated callback receives the source and target contexts as parameters.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "tableSettings": {
>     "type": "TreeTable",
>     "hierarchyQualifier": "NodesHierarchy",
>     "personalization": true,
>     "creationMode": {...},
>     "isNodeCopyable": ".extension.hierarchy-edit.custom.OPExtend.enableCopy",
> 	"isCopyToPositionAllowed": ".extension.hierarchy-edit.custom.OPExtend.enablePasteFromCopy"
> }
> ```

