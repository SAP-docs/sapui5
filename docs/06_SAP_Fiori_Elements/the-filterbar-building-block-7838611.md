<!-- loio78386110817d43978ffd6988d1704e38 -->

# The `FilterBar` Building Block

The `FilterBar` building block allows application developers to embed a filter bar in their application.

> ### Sample Code:  
> The `FilterBar` Building Block
> 
> ```
> <macros:FilterBar
>     metaPath="@com.sap.vocabularies.UI.v1.SelectionFields#SF1"
>     id="FilterBar"
>     search=".handlers.onSearch"
>     filtersChanged=".handlers.onFiltersChanged"
> />
> ```

Default values using `UI.SelectionVariant` and `Common.FilterDefaultValue` as well as custom filters are supported. Check out our live example in the flexible programming model explorer at [Filter Bar - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarDefault).

For more information about adding custom filter fields to the `FilterBar` building block, see [The FilterField Building Block](the-filterfield-building-block-2df7837.md).

> ### Note:  
> When using the `FilterBar` building block in a custom section or a custom subsection that deals with a navigation entity, make sure all the controls that need to be filtered by the filter bar are part of the same UI fragment as the `FilterBar` building block.

> ### Restriction:  
> The `FilterBar` building block has no provision to bring up the visual filter bar.



<a name="loio78386110817d43978ffd6988d1704e38__section_aqj_15s_qxb"/>

## Triggering Filter Search Programmatically

Applications can programmatically trigger the filter search on initial load using the `triggerSearch()` method. When called, it first validates that all the mandatory filter fields are filled out. The 'Go' action of the filter bar is triggered only if all the mandatory filter fields have valid values. If any of these fields aren't filled out, the focus is set to the first mandatory filter field that isn't filled. In this case, the field isn't highlighted, and no error messages are sent to the user.

Check out our live example in the flexible programming model explorer at [Filter Bar - Default Values \(FilterDefaultValue\)](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarAnnotationDefaults).



<a name="loio78386110817d43978ffd6988d1704e38__section_vgz_4gz_xxb"/>

## Using the `SelectionVariant` Format

The following methods are available for interacting with the `FilterBar` building block using the `SelectionVariant` format:

-   `async getSelectionVariant () : Promise<SelectionVariant>`

-   `async setSelectionVariant (selectionVariant : SelectionVariant)`


Check out our live example in the flexible programming model explorer at [Filter Bar - Interacting via APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarPublicAPIs).

> ### Restriction:  
> Custom filters are not part of the `getSelectionVariant` and `setSelectionVariant` APIs.



<a name="loio78386110817d43978ffd6988d1704e38__section_bdj_x1n_cfc"/>

## Not Persisting Personalization Changes

You can choose to not persist personalization changes applied to the filter bar. This allows the end user changes on this filter bar to be stored in a transient manner. When the filter bar is initialized with a different context in the same session, it doesn't retain the last used configuration, such as filter field values or positions.

> ### Caution:  
> This is an experimental feature. For more information about experimental features, see [Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md).

Set the attribute `ignorePersonalizationChanges` to `true`, as shown in the following sample code:

> ### Sample Code:  
> ```
> <macros:FilterBar
>     metaPath="@com.sap.vocabularies.UI.v1.SelectionFields"
>     ignorePersonalizationChanges = "true"
>     id="FilterBar"
> />
> ```

> ### Note:  
> -   Don't use `ignorePersonalizationChanges` on a filter bar with an existing ID. Create a new ID for the control to use this feature.
> 
> -   When personalization changes are not persisted, variants and application states stored with `iAppState` are not applied to the filter. Therefore, we recommend only using this setting for filter bars in a transient context, such as within a custom dialog or within a value help dialog.
> 
>     For more information about variants, see [Managing Variants](managing-variants-8ce658e.md).
> 
>     For more information about `iAppState`, see [Store/Restore the Application State](store-restore-the-application-state-46bf248.md).

For more information about personalization changes, see [How to Enable Personalization for SAPUI5 Controls](../09_Developing_Controls/how-to-enable-personalization-for-sapui5-controls-5f215c1.md).



<a name="loio78386110817d43978ffd6988d1704e38__section_x1y_jks_j5b"/>

## API

For information about the `FilterBar` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.FilterBar).

