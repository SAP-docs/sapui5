<!-- loiofac67cbc691a446aabd6847c9b4d8f8e -->

# Move Up and Move Down in Tree Tables

Node repositioning functionality that allows users to change the order of sibling nodes within a tree table hierarchy using *Move Up* and *Move Down* actions in SAP Fiori elements for OData V4.

Users can move a node up or down between its siblings in a tree table. To place a node before its previous sibling or after its next sibling, select the node and choose *Move Up* or *Move Down* from the tree table toolbar.

Moving a node up or down is supported if the `ChangeNextSiblingAction` term is defined in the `RecursiveHierarchyActions` annotation. When using the ABAP RESTful Application Programming Model \(RAP\), this annotation is not set for root entities. For this reason, moving up or down a node is not supported on the list report page.

> ### Restriction:  
> A node that is created without the `createInPlace` option is displayed as the first child below its parent and is therefore considered "out of place". Move operations are disabled for such nodes. Similarly, moving a node up is disabled if its previous sibling is an "out of place" node.
> 
> Moving a node up and down is also disabled in the following situations:
> 
> -   A sort is applied to the table.
> 
> -   The `isNodeMovable` or `isMoveToPositionAllowed` extension points return `false`. For more information, see [Drag and Drop in Tree Tables](drag-and-drop-in-tree-tables-d2823f3.md).

