<!-- loio459326f6bc734c48b00ba50827086084 -->

# Defining the Number of Visible Rows

Configuration options for controlling the number of visible rows in grid, tree, and analytical tables. Use these settings to optimize table display by defining `rowCount` and `rowCountMode` parameters in SAP Fiori elements for OData V4.

When a grid table is not the sole control within a section of an object page or when the `sectionLayout` is set to `Page`, 5 fixed rows are displayed in the table by default. In a tree table and an analytical table, 10 fixed rows are displayed by default in the same situation. You can change the number of rows displayed by defining the `rowCount` and `rowCountMode` parameters within the table settings in the `manifest.json` file as follows:

-   The `rowCount` parameter defines the number of rows to be displayed in the table.

-   The `rowCountMode` parameter defines how the table handles the visible rows. This parameter doesn't apply to responsive tables. The following values are allowed:

    -   `Fixed`: The number of rows displayed in the table always matches the value defined in the `rowCount` property.

    -   `Auto`: The number of rows is changed by the table automatically, adjusting to the space it is allowed to cover \(limited by the surrounding container\), but there are always at least as many rows as defined in the `rowCount` property.

    -   `Interactive`: The user can change the number of displayed rows by dragging a resize handle.



> ### Sample Code:  
> ```
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "type": "GridTable",
>             "rowCount": 10,
>             "rowCountMode": "Fixed",
>             "personalization": true,
>             ...
>         }
>     },
>     ...
> }
> ```

> ### Note:  
> If the `sectionLayout` is set to `Tabs` and the table is the sole control within the section, the `rowCountMode` is set to `Auto`.

