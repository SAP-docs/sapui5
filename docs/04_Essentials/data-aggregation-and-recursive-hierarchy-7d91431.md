<!-- loio7d914317c0b64c23824bf932cc8a4ae1 -->

# Data Aggregation and Recursive Hierarchy

The OData V4 Model supports features of the OData Extension for Data Aggregation V4.0 specification.

The `$$aggregation` binding parameter at [`sap.ui.model.odata.v4.ODataModel#bindList`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataModel/methods/bindList) holds the information needed for data aggregation. It may be changed by [`sap.ui.model.odata.v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation). It cannot be combined with an explicit system query option `$apply`, because it implicitly derives `$apply`. For more information, see the [OData Extension for Data Aggregation V4.0 specification](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html).

Since 1.117.0, either a read-only recursive hierarchy \(see below\) or \(pure\) data aggregation is supported, but no mix; `hierarchyQualifier` is the leading property that decides between these two use cases. Since 1.125.0, maintenance of a recursive hierarchy is supported.

> ### Note:  
> -   Data aggregation or a recursive hierarchy cannot be combined with grouping via a list binding’s first sorter.For more information, see the `vGroup` parameter of [`sap.ui.model.Sorter`](https://ui5.sap.com/#/api/sap.ui.model.Sorter).
> 
> -   Data aggregation or a recursive hierarchy do not support the [creation](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/create), [deletion](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/delete), or [refreshing](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/refresh) of data. Additional property requests for an entity that already has been requested \(see [Data Reuse](data-reuse-648e360.md)\) as well as [updating](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/setProperty) of data including [invocation](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataContextBinding/methods/invoke) of bound actions and [side effects](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) are only supported for a recursive hierarchy.



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

Note that `Filter` objects are not supported for aggregatable properties with an alias.For more information, see the `name` property of the `aggregate` map of the `oAggregation` parameter of [`v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_SBDA"/>

## Search Before Data Aggregation

You can provide a search string to be applied before data aggregation via the `oAggregation.search` parameter of [ODataListBinding\#setAggregation](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation). It works like the ["5.1.7 System Query Option $search"](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc453752364), but is applied before data aggregation, not after it. Note that certain content will break the syntax of the `$apply` system query option when embedded into a `search()` transformation and thus result in an invalid request. If the OData service supports the [ODATA-1452](https://issues.oasis-open.org/browse/ODATA-1452) proposal, then the command system query option when embedded into a `ODataUtils.formatLiteral(sSearch, "Edm.String");` should be used to encapsulate the whole search string beforehand \(see [sap.ui.model.odata.v4.ODataUtils.formatLiteral](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataUtils/methods/sap.ui.model.odata.v4.ODataUtils.formatLiteral)\). Otherwise, it might be wise to restrict your search input accordingly.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_xb2_51x_q4b"/>

## Additional Properties

For each groupable property, you can define an optional list of strings that provides the paths to properties \(like texts or attributes\) related to this groupable property in a 1:1 relation. They are requested additionally via `groupby` and must not change the actual grouping; a `unit` for an aggregatable property must not be repeated there.



<a name="loio7d914317c0b64c23824bf932cc8a4ae1__section_RCH"/>

## Recursive Hierarchy

You can use a list binding to display hierarchical data \("a tree"\) inside a table. Read-only hierarchies are supported since 1.117.0 while maintenance is supported since 1.125.0. Such a recursive hierarchy is described by a pair of ["Org.OData.Aggregation.V1.RecursiveHierarchy"](https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Aggregation.V1.html#RecursiveHierarchy) and ["com.sap.vocabularies.Hierarchy.v1.RecursiveHierarchy"](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md) annotations at the list binding's entity type, and you need to use the same qualifier for both of these annotations - this is called the **hierarchy qualifier**. If the `hierarchyQualifier` property of `$$aggregation` is present, a recursive hierarchy without data aggregation is defined, and the only other supported properties are `expandTo`, which optionally specifies the number of initially expanded levels as a positive integer, and `search` \(see [Search Before Data Aggregation](data-aggregation-and-recursive-hierarchy-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_SBDA) above\). Sorting and filtering can be done as usual \(both as system query options and as UI5 objects\), but `$search` is not supported \(use `search` instead, see above\). Note how this influences [`v4.ODataListBinding#getCount`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/getCount)! You can use the [`v4.ODataListBinding#getAggregation`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/getAggregation) with the new `bVerbose` parameter to access some details from the above-mentioned annotations. The [`v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation) method can be used to change `$$aggregation`.The following properties are required from a ["com.sap.vocabularies.Hierarchy.v1.RecursiveHierarchy"](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md) annotation:

-   DistanceFromRoot
-   DrillState
-   LimitedDescendantCount
-   LimitedRank

Actions and functions can be invoked as usual. Side effects are supported both for single rows and the entire list \("side-effects refresh"; see [`v4.Context#requestSideEffects`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) for details\), even if they affect the hierarchy \(node IDs, parent/child relations, or sibling order\) itself. The current tree state with respect to [`expanded`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/expand) and [collapsed](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/collapse) nodes \(see [`v4.Context#isExpanded`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/isExpanded)\) is kept even in case of such a side-effects refresh.

The `@$ui5.node.level` and `@$ui5.node.isExpanded` client-side instance annotations can be used as described above to access a node level or expansion state. A context's index refers to its position in the list binding's "flat" collection. You can use [`v4.Context#getParent`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/getParent) to access a node's parent; if the parent is not yet known, [`v4.Context#requestParent`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/requestParent) can be used to request it from the server. The [`v4.Context#isAncestorOf`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/isAncestorOf) API also helps to inspect the parent/child relationship \(note that [`v4.ODataListBinding#getRootBinding`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/getRootBinding) is unrelated!\).

Since 1.125.0, a recursive hierarchy need not be read-only, but maintenance is supported, namely:

-   **Update of arbitrary properties**, including any corresponding side effects. Note that a side-effects refresh needs to be requested explicitly if the change affects the hierarchy \(node IDs, parent/child relations, or sibling order\); this is not done by the model itself.
-   **Creation of new nodes**, either as new root nodes or below an existing parent node. Creation is even supported if the parent was a leaf before, however it is not supported for a collapsed parent.For more details, see [`v4.ODataListBinding#create`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/create) and "`@$ui5.node.parent`" therein.
-   **Deletion of existing nodes**; see [`v4.Context#delete`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/delete). Note that the deletion is first done on the server and only later shown on the client. Thus, the group ID must not have submit mode "API".
-   **Moving of nodes**. You can change the parent node, including turning a child node into a root node and vice versa, and you can also change the sibling position, including making a node the last one among its siblings or moving it just before a specified sibling. For more details, see [`v4.Context#move`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context/methods/move). Note that `nextSibling` requires a ["com.sap.vocabularies.Hierarchy.v1.RecursiveHierarchyActions"](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md#RecursiveHierarchyActions) annotation with at least a `ChangeNextSiblingAction`.

Note that only one such change must be pending at any point in time. That is, you must wait for one change to be completed before starting the next change. The only exception is property updates, for which multiple properties can be combined as usual.



### Example Requests

The [`TopLevels`](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md#TopLevels) function is fundamental for recursive hierarchies. It describes the input set underlying the hierarchy \(see the list binding's path\) and specifies which recursive hierarchy is built on top \(see `hierarchyQualifier` above\). It takes care to initially expand a certain number of levels \(see `expandTo` above\) and later to expand or collapse certain nodes in order to keep the tree state during a side-effects refresh.

A typical request to read the first page of a hierarchical table may look like this:

`GET /sap/opu/odata4/IWBEP/TEA/default/IWBEP/TEA_BUSI/0001/EMPLOYEES?$apply=orderby(AGE)/com.sap.vocabularies.Hierarchy.v1.TopLevels(HierarchyNodes=$root/EMPLOYEES,HierarchyQualifier='OrgChart',NodeProperty='ID',Levels=2)&$select=AGE,DescendantCount,DistanceFromRoot,DrillState,ID,MANAGER_ID,Name&$count=true&$skip=0&$top=115`

Note how the sibling\(!\) order is specified via an [`orderby`](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs03/odata-data-aggregation-ext-v4.0-cs03.html#Transformationorderby) transformation \(see the list binding's sorters as well as `$orderby`\). The list binding's path would be "`/EMPLOYEES` ", and `$$aggregation` looks as follows. The model's `autoExpandSelect` parameter does its magic, and `$count&$skip&$top` is taken care of automatically by the list binding.

```xml
<Table rows="{
    path: '/EMPLOYEES',
    parameters: {
        $count: false,
        $orderby: 'AGE',
        $$aggregation: {
            expandTo: 2,
            hierarchyQualifier: 'OrgChart'
        },
        $$patchWithoutSideEffects: true
    },
    ...
}">
```

If the list binding uses `$count: true`, for example to show this count as part of a title, an extra request is sent once \(not each time when scrolling, but of course again after a \(side-effects\) refresh\). It includes any custom query options as well as filter and search criteria: `GET /sap/opu/odata4/IWBEP/TEA/default/IWBEP/TEA_BUSI/0001/EMPLOYEES/$count?sap-client=123&$filter=AGE ge 0 and (Is_Manager)&$search=covfefe`

With filter and search, the main request looks a bit more complicated and includes an [`ancestors`](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs03/odata-data-aggregation-ext-v4.0-cs03.html#Transformationsancestorsanddescendants) transformation beforehand: <code>GET /sap/opu/odata4/IWBEP/TEA/default/IWBEP/TEA_BUSI/0001/EMPLOYEES?<b>$apply=ancestors($root/EMPLOYEES,OrgChart,ID,filter(AGE ge 0 and (Is_Manager))/search(covfefe),keep start)</b>/orderby(AGE)/com.sap.vocabularies.Hierarchy.v1.TopLevels(HierarchyNodes=$root/EMPLOYEES,HierarchyQualifier='OrgChart',NodeProperty='ID',Levels=2)&amp;$select=AGE,DescendantCount,DistanceFromRoot,DrillState,ID,MANAGER_ID,Name&amp;$count=true&amp;$skip=0&amp;$top=115</code>

When a node is expanded individually, a request for its children is sent using a [`descendants`](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs03/odata-data-aggregation-ext-v4.0-cs03.html#Transformationsancestorsanddescendants) transformation, for example: <code>GET /sap/opu/odata4/IWBEP/TEA/default/IWBEP/TEA_BUSI/0001/EMPLOYEES?<b>$apply=descendants($root/EMPLOYEES,OrgChart,ID,filter(ID eq '0'),1)</b>/orderby(AGE)&amp;$select=AGE,DrillState,ID,MANAGER_ID,Name&amp;$count=true&amp;$skip=0&amp;$top=6</code>

When keeping the expand/collapsed state of nodes, the `TopLevels` function's `ExpandLevels` parameter is needed, for example: <code>GET /sap/opu/odata4/IWBEP/TEA/default/IWBEP/TEA_BUSI/0001/EMPLOYEES?$apply=com.sap.vocabularies.Hierarchy.v1.TopLevels(HierarchyNodes=$root/EMPLOYEES,HierarchyQualifier='OrgChart',NodeProperty='ID',Levels=2,<b>ExpandLevels=[{NodeID : "8", Levels : 0}, {NodeID : "1", Levels : 1}]</b>)&amp;...</code>

When moving a node, it is PATCHed with a payload like `"EMPLOYEE_2_MANAGER@odata.bind" : "EMPLOYEES('9')"`, which points to the new parent. When creating a new node, a similar payload is used to point to the new parent as part of the POST. For root nodes, a `null` value is sent. To determine a node's sibling position, the ["com.sap.vocabularies.Hierarchy.v1.RecursiveHierarchyActions"](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md#RecursiveHierarchyActions) annotation's `ChangeNextSiblingAction` is invoked with a payload like `NextSibling : {ID : "3" }`; a `null` value is used to make a node the last sibling.

