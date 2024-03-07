<!-- loio78386110817d43978ffd6988d1704e38 -->

# The `FilterBar` Building Block

The `FilterBar` building block allows application developers to embed a filter bar in their application block.

> ### Sample Code:  
> `FilterBar` Building Block
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

> ### Note:  
> When using the `FilterBar` building block in an object page, a custom section or a custom subsection, make sure all the controls that need to be filtered are part of the same UI fragment as the `FilterBar` building block.

> ### Restriction:  
> The `FilterBar` building block has no provision to bring up the visual filter bar.



<a name="loio78386110817d43978ffd6988d1704e38__section_aqj_15s_qxb"/>

## Triggering Filter Search Programmatically

Applications can programmatically trigger the filter search on initial load using the `triggerSearch()` method. When called, it first validates that all the mandatory filter fields are filled out. The filter bar 'Go' is triggered only if all of them have valid values. If any of the mandatory filter fields aren't filled out, the focus is set to the first mandatory filter field that isn't filled. Note that in this case, the field won't be highlighted and no error messages will be sent to the user.

Check out our live example in the flexible programming model explorer at [Filter Bar - Default Values](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarAnnotationDefaults).



<a name="loio78386110817d43978ffd6988d1704e38__section_vgz_4gz_xxb"/>

## Using the SelectionVariant Format

The following methods are available for interacting with the `FilterBar` building block using the `SelectionVariant` format:

-   `async getSelectionVariant () : Promise<SelectionVariant>`

-   `async setSelectionVariant (selectionVariant : SelectionVariant)`


Check out our live example in the flexible programming model explorer at [Filter Bar - Interacting with the Filter Bar via Selection Variant Format \(get and set\)](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarSVPublicAPIs).

> ### Restriction:  
> Custom filters are not part of the `getSelectionVariant` and `setSelectionVariant` APIs.



<a name="loio78386110817d43978ffd6988d1704e38__section_x1y_jks_j5b"/>

## API

For information about the `FilterBar` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.FilterBar).

