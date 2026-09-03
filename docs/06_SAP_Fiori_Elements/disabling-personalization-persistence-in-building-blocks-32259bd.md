<!-- loio32259bd1391d4c2389b7dca8bc44cd8f -->

# Disabling Personalization Persistence in Building Blocks

You can make personalization changes transient in different building blocks in SAP Fiori elements for OData V4.

Personalization changes made by the user, such as in the *Adapt Filter* dialog for the `FilterBar` building block, or values set to filter fields, are automatically stored and restored using `iAppState`. You can use `ignorePersonalizationChanges` to make personalization changes applied by users to building blocks transient. When set to `true`, the building block doesn't retain the last used configuration when initialized with a different context in the same session.

`ignorePersonalizationChanges` is available in the following building blocks:

-   `Chart` building block

-   `FilterBar` building block

-   `Table` building block


The following sample codes show how to use `ignorePersonalizationChanges` to make personalization transient in the `Chart`, `FilterBar` and `Table` building blocks:

> ### Sample Code:  
> The `Chart` Building Block
> 
> ```
> 
> <macros:Chart
>     metaPath="@com.sap.vocabularies.UI.v1.Chart"
>     ignorePersonalizationChanges="true"
>     id="MyChart"
> />
> ```

> ### Sample Code:  
> The `FilterBar` Building Block
> 
> ```
> 
> <macros:FilterBar
>     metaPath="@com.sap.vocabularies.UI.v1.SelectionFields"
>     ignorePersonalizationChanges = "true"
>     id="FilterBar"
> />
> ```

> ### Sample Code:  
> The `Table` Building Block
> 
> ```
> 
> <macros:Table
>     metaPath="@com.sap.vocabularies.UI.v1.LineItem"
>     ignorePersonalizationChanges="true"
>     id="MyTable"
> />
> ```

> ### Note:  
> -   Don't use `ignorePersonalizationChanges` on building blocks with an existing ID. Create a new ID for the control to use this feature.
> 
> -   When personalization changes are not persisted, variants and application states stored with `iAppState` are not applied to the building block. Therefore, we recommend only using this setting in a transient context, such as in a custom dialog or in a value help dialog.

For more information about the `Chart` building block, see [The Chart Building Block](the-chart-building-block-52d065a.md).

For more information about the `FilterBar` building block, see [The FilterBar Building Block](the-filterbar-building-block-7838611.md).

For more information about the `Table` building block, see [The Table Building Block](the-table-building-block-3801656.md).

For more information about `iAppState`, see [Store/Restore the Application State](store-restore-the-application-state-46bf248.md).

For more information about variants, see [Managing Variants](managing-variants-8ce658e.md).

For more information about personalization changes, see [How to Enable Personalization for SAPUI5 Controls](../09_Developing_Controls/how-to-enable-personalization-for-sapui5-controls-5f215c1.md).

