<!-- loio5a27f03e18b6462298ef2d0bf261ecea -->

# Context Menu in Tables

Tables in list report page, object page, and analytical list page applications support a context menu in SAP Fiori elements for OData V4.

The context menu is available as a default option and appears only when users perform a right-click on a row or a set of selected rows. This menu displays all context-dependent actions, including both standard and custom actions that appear on the table toolbar. Additionally, an option to open the selected row or rows in a new browser tab or window is available within the menu. Inline actions are not included as part of context menu actions.

> ### Note:  
> When the table is configured to navigate to an object page in edit mode by setting `openInEditMode` to `true`, the *Open in New Tab* option is not shown in the context menu. For more information, see [Navigation to an Object Page in Edit Mode](navigation-to-an-object-page-in-edit-mode-8665847.md).

In the tree table, you can open the context menu by right-clicking on any node. All the other nodes are greyed out. Only bound actions are included in this menu.

> ### Note:  
> Actions that are specific to tree tables, such as cut, paste, expand entire node, or collapse entire node, aren't supported with multi-selection.

When implementing custom actions, you can use the `extensionAPI.getSelectedContexts` API to identify the rows associated with the context menu.

> ### Note:  
> You must use the `extensionAPI.getSelectedContexts` API only within synchronous code blocks.

