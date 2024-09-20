<!-- loio7cf7a31fd1ee490ab816ecd941bd2f1f -->

# Tree Tables

You can use tree tables in the list report and the object page.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

SAP Fiori elements for OData V4 supports displaying a tree table on the list report with a draft-enabled service with the following behavior:

-   Only the active entities are displayed.

-   The *Editing Status* field is not displayed in the filter bar.

-   The draft indicator is shown if a draft exists for an active record.

-   When creating a new object, the new object needs to be saved or discarded.

-   The behavior of already saved objects remains unchanged: a draft can be saved, kept, or discarded. The navigation is also unchanged.

-   Extension points are the same as for the object page.




<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_kmb_mld_gbc"/>

## Enabling Tree Tables

To activate tree tables in the list report or object page, the following parameters are needed in the `tableSettings` part of the `manifest.json`:

-   Set the `type` to `TreeTable`.

-   Set the `hierarchyQualifier`. You must use the qualifier for the `Hierarchy.RecursiveHierarchy` annotation for the page entity set.


> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "tableSettings": {
>      "type": "TreeTable",
>      "hierarchyQualifier": "NodesHierarchy",
>    ...
> }
> ```



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_osy_44d_gbc"/>

## Create Mode and Custom Create Mode with a Menu Button

Two creation modes are supported with a tree table:

-   `Inline`

-   `NewPage`


SAP Fiori elements for OData V4 supports the default create mode as well as a custom create mode. To use the custom create mode, the `nodeType` section needs the following annotations to be added:

-   `propertyName`: Name of the property on the page entity set used to categorize the node type to be created within the hierarchy.

-   `values`: An object containing the values of the `propertyName` and the corresponding label to be used in the menu:

    -   `value`: A value of the property defined by the `propertyName` key.

    -   `label`: The menu item label that can be localized using an `i18n` key.



> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "tableSettings": {
>     "type": "TreeTable",
>     "hierarchyQualifier": "NodesHierarchy",
>     "personalization": true,
>     "creationMode": {
>          "name": "Inline",
>          "nodeType": {
>             "propertyName": "nodeType",
>             "values": {
>                 "Zone": "Create a new Zone",
>                 "Intermediary": "Create a new Intermediary node",
>                 "Line": "Create a new Line item"
>              }
>          },
>          "isCreateEnabled": ".extension.hierarchy-edit.custom.OPExtend.enableCreate"
>      }
> }
> ```

  
  
**Custom Create Mode Options in the Tree Table**

![](images/Create_button_in_tree_table_46b2fb1.png "Custom Create Mode Options in the Tree
					Table")

For both the standard create mode and the custom create mode, you can define an extension point `isCreateEnabled` to control whether the *Create* button or *Create Menu* buttons are enabled or disabled. The extension point callback needs to be added to the page controller extension.

The following parameters are provided to the callback:

-   The `value` associated with the selected menu item.

    If the standard create mode is used, the `value` is `null`.

-   The `parent context` of the parent under which the new node is created.

    If no node is selected \(creation at the root level of the hierarchy\), the `parent context` is `undefined`.


> ### Sample Code:  
> `manifest.json`
> 
> ```json
> sap.ui.define(["sap/ui/core/mvc/ControllerExtension"], function (ControllerExtension) {
>     "use strict";
>  
>     return ControllerExtension.extend("hierarchy-edit.custom.OPExtend", {
>         // this section allows to extend lifecycle hooks or override public methods of the base controller
>  
>         //Callback to enable Create actions
>         enableCreate: function (value, parentContext) {
>             switch (parentContext?.getProperty("nodeType")) {
>                 case "Zone":
>                     return value !== "Zone"; // Anything but 'Zone' under 'Zone'
>  
>                 case "Intermediary":
>                     return value === "Line"; // Only 'Line' under 'Intermediary'
>  
>                 case "Line":
>                     return false; // Nothing under 'Line'
>  
>                 default:
>                     return value === "Zone"; // Only 'Zone' at root level
>             }
>         }
>     }
> }
> ```

The following screenshot shows an example of the outcome. Under an "Intermediary" parent, only a "Line" node type can be created.

  
  
**Disabled Create Menu Buttons**

![](images/Create_button_intermediary_to_line_node_only_cb60cdd.png "Disabled Create Menu Buttons")



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_ak5_szn_tbc"/>

## Create at a Position Calculated by the Back End

By default, a new node is always displayed as the first child below its parent. You can use the `createInPlace` option to place the new node in its correct position calculated by the back end. If the new node cannot be visualized due to the filter criteria applied to the table, a message toast is displayed to the end user.

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



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_qkl_rms_gbc"/>

## Drag and Drop

Drag and drop actions are supported by SAP Fiori elements for OData V4 as of SAPUI5 1.124.

Drag and drop between siblings is supported if the `ChangeNextSiblingAction` term is defined in the `RecursiveHierarchyActions` annotation. When using the ABAP RESTful Application Programming Model \(RAP\), this annotation is not set for root entities. Hence, drag and drop between siblings is not supported in the list report.

You can use two extensions to control the behavior of drag and drop:

-   `isMoveToPositionAllowed`: Define if a source node can be dropped on a specific parent node.

    -   The associated callback receives the source and target contexts as parameters.

    -   When dropping as a root node, the parent node is set to `null`.

-   `isNodeMovable`: Define if a node can be dragged

    -   The associated callback receives the source context as a parameter.



In the following example: drag and drop is enabled.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "tableSettings": {
>     "type": "TreeTable",
>     "hierarchyQualifier": "NodesHierarchy",
>     "personalization": true,
>     "creationMode": {...},
>     "isMoveToPositionAllowed": ".extension.hierarchy-edit.custom.OPExtend.moveToPositionAllowed",
>     "isNodeMovable": ".extension.hierarchy-edit.custom.OPExtend.nodeMovable"
> }
> ```

In the following example: `ControllerExtension` is used to control the behavior of drag and drop.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> sap.ui.define(["sap/ui/core/mvc/ControllerExtension"], function (ControllerExtension) {
>     "use strict";
>  
>     return ControllerExtension.extend("hierarchy-edit.custom.OPExtend", {
>         // this section allows to extend lifecycle hooks or override public methods of the base controller
>  
>         //Callback for Drop and Paste actions
>         moveToPositionAllowed: function (sourceContext, parentContext) {
>             switch (parentContext?.getProperty("nodeType")) {
>                 case "Zone":
>                     return sourceContext?.getProperty("nodeType") === "Intermediary"; //Only 'Intermediary' under a 'Zone'
>  
>                 case "Intermediary":
>                     return  sourceContext?.getProperty("nodeType") === "Line" && sourceContext?.getProperty("name") !== 'Dublin'; // Only 'Line' under 'Intermediary' AND 'Dublin' node cannot be moved
>  
>                 case "Line":
>                     return false; // Nothing under 'Line'
>  
>                 default:
>                     return false;
>             }
>         },
>  
>         //Callback for Drag and Cut actions
>         nodeMovable: function (sourceContext) {
>             return sourceContext?.getProperty("name") !== 'USA'; // 'USA' node cannot be moved or cut
>         }
>     });
> });
> ```

The following screenshot shows an example of the outcome. The end user can drag and drop the "Japan" node under "Asia".

  
  
**Example of Dropping a Node Under a Parent Node**

![](images/Example_of_dropping_a_node_under_a_parent_a13261e.png "Example of Dropping a Node Under a Parent Node")

The following screenshot shows another example of the outcome. Moving the "Dublin" node is forbidden, so the target node is not highlighted.

  
  
**Example of a Forbidden Move**

![](images/Example_of_a_forbidden_move_51a0bee.png "Example of a Forbidden Move")



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_u4g_lrt_vbc"/>

## Move Up and Move Down

End users can move a node up or down between its siblings in a tree table. To place a node before its previous sibling or after its next sibling, select the node and choose *Move Up* or *Move Down* from the tree table toolbar.

Moving a node up or down is supported if the `ChangeNextSiblingAction` term is defined in the `RecursiveHierarchyActions` annotation. When using the ABAP RESTful Application Programming Model \(RAP\), this annotation is not set for root entities. Hence, moving up or down a node is not supported in the list report.

> ### Restriction:  
> A node that is created without the option `createInPlace` is displayed as the first child below its parent and is therefore considered "out of place". Move operations are disabled for such nodes. Similarly, moving a node up is disabled if its previous sibling is an "out of place" node.
> 
> Moving a node up and down is also disabled in the following situations:
> 
> -   A sort is applied to the table.
> 
> -   The `isNodeMovable` or `isMoveToPositionAllowed` extension points return `false` \(see the previous section, [Drag and Drop](tree-tables-7cf7a31.md#loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_qkl_rms_gbc)\).



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_nl2_r1y_gbc"/>

## Cut and Paste

Cut and paste actions are supported by SAP Fiori elements for OData V4 as of SAPUI5 1.124.

Both actions can be enabled or disabled by using the same extension points as for drag and drop:

-   `isNodeMovable`: Define if a node can be cut.

-   `isMoveToPositionAllowed`: Define if a node can be pasted under a specific parent node.


In the following example: the USA node can't be cut or dragged:

  
  
**Example of a Node with Disabled Cut Action**

![](images/Example_of_a_node_with_disabled_cut_action_6478e27.png "Example of a Node
					with
					Disabled Cut Action")



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_u3q_5fy_gbc"/>

## Disabling Hierarchy Change Operations

You can disable drag and drop as well as cut and paste to restrict changes in the hierarchy. To do that, use the `UpdateRestrictions` and `NonUpdatableNavigationProperties` annotations on the navigation property to the hierarchy parent.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> @odata.draft.enabled
>   entity TreeTableSubEntityWithUpdateRestriction {
>         @Core.Immutable: true
>         @Common.Label  : 'ID'
>     key ID               : String;
>         parent           : String;
>  
>         @Common.Label  : 'Org level name'
>         name             : String;
>  
>         @UI.Hidden     : true
>         orgID            : String;
>  
>         @Core.Computed : true
>         @UI.Hidden     : true
>         DistanceFromRoot : Integer64;
>  
>         Superordinate    : Association to TreeTableSubEntityWithUpdateRestriction
>                              on Superordinate.ID = parent;
>         Organization     : Association to TreeTableEntity
>                              on Organization.ID = orgID;
>   }
>  
>   annotate TreeTableSubEntityWithUpdateRestriction with @(Capabilities: {UpdateRestrictions: {NonUpdatableNavigationProperties: [Superordinate]}});
> ```



<a name="loio7cf7a31fd1ee490ab816ecd941bd2f1f__section_vf1_cly_gbc"/>

## `TreeTable` Building Block

You can use a dedicated `TreeTable` building block in SAP Fiori elements for OData V4.

-   For more information about this building block, see the [API reference](https://ui5.sap.com/#/api/sap.fe.macros.TreeTable).

-   You can also check out our live example in the flexible programming model explorer at [Table - Tree Table](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/treeTable).


