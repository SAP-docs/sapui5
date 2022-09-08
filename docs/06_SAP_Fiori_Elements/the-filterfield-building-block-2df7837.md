<!-- loio2df783760a8e4540ad19ce5ec3ed91c8 -->

# The `FilterField` Building Block

The `FilterField` building block allows app developers to add custom XML fragments as filter fields to a `FilterBar` building block in the following way:

> ### Sample Code:  
> ```
> <macros:FilterBar
>     metaPath="@com.sap.vocabularies.UI.v1.SelectionFields#SF1"
>     id="FilterBar"
>     showMessages="true"
>     search=".handlers.onSearch"
>     filterChanged=".handlers.onFiltersChanged"
> >
>     <macros:filterFields>
>         <macros:FilterField key="NameProperty" label="Name">
>             <core:Fragment fragmentName="<ApplicationId.FolderName.NameFilterXMLFileName>" type="XML" />
>         </macros:FilterField>
>         <macros:FilterField key="StreetProperty" label="Street" required="true">
>             <core:Fragment fragmentName="<ApplicationId.FolderName.StreetFilterXMLFileName>" type="XML" />
>         </macros:FilterField>
>     </macros:filterFields>
> </macros:FilterBar>
> 
> 
> ```

For more information about creating your own XML templates for custom filter fields \(for example `NameFilterXMLFileName.xml`\), see [Adding Custom Fields to the Filter Bar](adding-custom-fields-to-the-filter-bar-5fb9f57.md).

You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Filter Bar - Custom Filters](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarCustoms).



<a name="loio2df783760a8e4540ad19ce5ec3ed91c8__section_l2r_2bs_j5b"/>

## API

For information about the `FilterField` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.FilterField).

