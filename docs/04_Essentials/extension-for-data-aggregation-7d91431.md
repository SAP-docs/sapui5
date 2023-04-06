<!-- loio7d914317c0b64c23824bf932cc8a4ae1 -->

# Extension for Data Aggregation

The OData V4 Model supports features of the OData Extension for Data Aggregation V4.0 specification.

The `$$aggregation` binding parameter at [`sap.ui.model.odata.v4.ODataModel#bindList`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataModel/methods/bindList) holds the information needed for data aggregation. It may be changed by [`sap.ui.model.odata.v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation). It cannot be combined with an explicit system query option `$apply`, because it implicitly derives `$apply`. For more information, see the [OData Extension for Data Aggregation V4.0 specification](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html).

Since 1.105.0, either a recursive hierarchy \(see below\) or \(pure\) data aggregation is supported, but no mix; `hierarchyQualifier` is the leading property that decides between these two use cases - **this is an experimental API**.

> ### Note:  
> -   Data aggregation or a recursive hierarchy cannot be combined with grouping via a list binding’s first sorter.For more information, see the `vGroup` parameter of [`sap.ui.model.Sorter`](https://ui5.sap.com/#/api/sap.ui.model.Sorter).
> 
> -   Data aggregation or a recursive hierarchy do not support the [creation](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/create), [deletion](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/delete), or [refreshing](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/refresh) of data. Additional property requests for an entity that already has been requested \(see [Data Reuse](data-reuse-648e360.md)\) as well as [updating](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/setProperty) of data including [execution](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataContextBinding/methods/execute) of bound actions and [side effects](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) are only supported for a recursive hierarchy.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_nxp_ycx_35b"/>

## Data Aggregation

For every aggregatable property, you can provide the name of the custom aggregate for a corresponding currency or unit of measure. That custom aggregate must return the single value of a unit in case there is only one, or `null` otherwise \("multi-unit situation"\). For SQL-based services, this might be implemented as follows:

 `CASE WHEN min(Unit) = max(Unit) THEN min(Unit) END` 

Normally, there is also a structural property of the same name as the custom aggregate, providing type information, etc.

The following client-side instance annotations can be used to access a node level or expansion state. For property bindings, a syntax like `{= %{@$ui5.node.level} }` is usually helpful, because automatic type determination is not available.

-   `@$ui5.node.level` – A non-negative integer which describes the node level; "0" is the single root node which corresponds to the grand total row, "1" are the top-level group nodes, etc.

-   `@$ui5.node.isExpanded` – A boolean which determines whether this node is currently expanded. `true` means yes, `false` means no, `undefined` means that \(the state is undefined because\) this node is a leaf. As an implementation detail, the annotation might simply be missing for leaves.
-   `@$ui5.node.groupLevelCount` – An integer value which determines the count of the direct children of a group node. As an implementation detail, the annotation is only available if the corresponding node is expanded.


Two scenarios are supported:

-   You can provide properties for grouping and aggregation. An appropriate system query option `$apply` is derived from those. The list binding then still provides a flat list of contexts \("rows"\), but with additional aggregated properties \("columns"\). In addition, you can request grand total values for aggregatable properties. In this case, an extra row appears at the beginning of the flat list of contexts that contains the grand total values, as well as empty values for all other properties.

    > ### Sample Code:  
    > **Example XML View With Grand Total**
    > 
    > ```js
    > <table:Table fixedRowCount="1"
    >    rows="{
    >       path : '/BusinessPartners',
    >       parameters : {
    >          $$aggregation : {
    >             aggregate : {
    >                SalesAmount : {
    >                   grandTotal : true,
    >                   unit : 'Currency'
    >                }
    >             },
    >             group : {
    >                Country : {additionally : ['Texts/Country']}
    >             }
    >          },
    >          $filter : 'SalesAmount gt 1000000',
    >          $orderby : 'SalesAmount desc'
    >       }
    >    }">
    >    <table:Column template="Texts/Country">
    >       <Label text="Country"/>
    >    </table:Column>
    >    <table:Column hAlign="End" template="SalesAmount">
    >       <Label text="Sales Amount"/>
    >    </table:Column>
    >    <table:Column template="Currency">
    >       <Label text="Currency"/>
    >    </table:Column>
    > </table:Table>
    > ```

-   You can provide group levels to determine a hierarchy of expandable group levels in addition to the leaf nodes determined by the groupable and aggregatable properties. To achieve this, specify the names of the group levels in the `groupLevels` property of `$$aggregation`.

    Group levels can be combined with the system query option `$count : true`; for more information, see [Binding Collection Inline Count](binding-collection-inline-count-77d2310.md). Group levels can only be combined with filtering before the aggregation \(see below\). Note how an `$orderby` option can address groups across all levels. For every aggregatable property, you can request subtotals and a grand total individually.

    > ### Sample Code:  
    > **Example XML View With Hierarchy**
    > 
    > ```js
    > <table:Table fixedRowCount="1"
    >    rows="{
    >       path : '/BusinessPartners',
    >       parameters : {
    >          $$aggregation : {
    >             aggregate : {
    >                SalesAmount : {
    >                   grandTotal : true,
    >                   subtotals : true,
    >                   unit : 'Currency'
    >                }
    >             },
    >             group : {
    >                 Country : {additionally : ['CountryText']},
    >                 Region : {additionally : ['RegionText']}
    >             },
    >             groupLevels : ['Country','Region','Segment']
    >          },
    >          $count : false,
    >          $orderby : 'Country,Region desc,Segment',
    >          filters : {path : \'Region\', operator : \'GE\', value1 : \'Mid\'}
    >       }
    >    }">
    >    <table:Column template="CountryText">
    >       <Label text="Country"/>
    >    </table:Column>
    >    <table:Column template="RegionText">
    >       <Label text="Region"/>
    >    </table:Column>
    >    <table:Column template="Segment">
    >       <Label text="Segment"/>
    >    </table:Column>
    >    <table:Column hAlign="End" template="SalesAmount">
    >       <Label text="Sales Amount"/>
    >    </table:Column>
    >    <table:Column template="Currency">
    >       <Label text="Currency"/>
    >    </table:Column>
    > </table:Table>
    > ```


For aggregatable properties where grand total or subtotal values are requested, you can globally choose where these should be displayed:

-   at the bottom only,
-   at both the top and bottom,
-   at the top only \(default\).

Use the `grandTotalAtBottomOnly` or `subtotalsAtBottomOnly` property with values `true` or `false`, respectively, or simply omit it. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation) in the Demo Kit.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_igs_pyd_tkb"/>

## Filtering

Filters are provided to the list binding as described in [Filtering](filtering-5338bd1.md). The `Filter` objects are analyzed automatically to perform the filtering before the aggregation where possible using the `filter()` transformation. The remaining filters, including the provided `$filter` parameter of the binding, are applied after the aggregation either via the system query option `$filter` or within the system query option `$apply`, using again the `filter()` transformation.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_SBDA"/>

## Search Before Data Aggregation

You can provide a search string to be applied before data aggregation via the `oAggregation.search` parameter of [ODataListBinding\#setAggregation](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation). It works like the ["5.1.7 System Query Option $search"](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc453752364), but is applied before data aggregation, not after it. Note that certain content will break the syntax of the `$apply` system query option when embedded into a `search()` transformation and thus result in an invalid request. If the OData service supports the [ODATA-1452](https://issues.oasis-open.org/browse/ODATA-1452) proposal, then the command `ODataUtils.formatLiteral(sSearch, "Edm.String");` should be used to encapsulate the whole search string beforehand \(see [sap.ui.model.odata.v4.ODataUtils.formatLiteral](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataUtils/methods/sap.ui.model.odata.v4.ODataUtils.formatLiteral)\). Otherwise, it might be wise to restrict your search input accordingly.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_xb2_51x_q4b"/>

## Additional Properties

For each groupable property, you can define an optional list of strings that provides the paths to properties \(like texts or attributes\) related to this groupable property in a 1:1 relation. They are requested additionally via `groupby` and must not change the actual grouping; a `unit` for an aggregatable property must not be repeated there.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_RCH"/>

## Recursive Hierarchy

You can use a list binding to display hierarchical data \("a tree"\) inside a table. Such a recursive hierarchy is described by a pair of ["Org.OData.Aggregation.V1.RecursiveHierarchy"](https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Aggregation.V1.html#RecursiveHierarchy) and ["com.sap.vocabularies.Hierarchy.v1.RecursiveHierarchy"](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md) annotations at the list binding's entity type, and you need to use the same qualifier for both of these annotations - this is called the **hierarchy qualifier**. If the `hierarchyQualifier` property of `$$aggregation` is present \(an **experimental API** as of SAPUI5 1.105.0\), a recursive hierarchy without data aggregation is defined, and the only other supported properties are `expandTo`, which optionally specifies the number of initially expanded levels as a positive integer, and `search` \(see [Search Before Data Aggregation](extension-for-data-aggregation-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_SBDA) above\). Sorting and filtering can be done as usual \(both as system query options and as UI5 objects\), but `$search` is not supported. Side effects are supported both for single rows and the entire list, as long as they do not affect the hierarchy \(node IDs, parent/child relations, or sibling order\) itself.

The `@$ui5.node.level` and `@$ui5.node.isExpanded` client-side instance annotations can be used as described above to access a node level or expansion state.

