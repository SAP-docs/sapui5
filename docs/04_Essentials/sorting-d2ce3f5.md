<!-- loiod2ce3f51e5e34198b0c1a7f6ddd98def -->

# Sorting

The OData V4 model supports server-side sorting on lists.

To use server-side sorting, set the operation mode to [sap.ui.model.odata.OperationMode.Server](https://ui5.sap.com/#/api/sap.ui.model.odata.OperationMode%23properties), as described in [Filtering](filtering-5338bd1.md).

`ODataListBinding` allows to set static and dynamic sorters:

-   For setting a static sorter, the `$orderby` system query option in the binding parameters is used. The static sorter value is sent with every data service request for the binding. The static sorter cannot be overwritten for an existing binding.

-   The dynamic sorter is an [`sap.ui.model.Sorter`](https://ui5.sap.com/#/api/sap.ui.model.Sorter) instance, or an array thereof, in which case the sorters are concatenated. You can set the initial value for the dynamic sorter in [`v4.ODataModel.bindList`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList), or declaratively in an XML view with the `sorter` property in an aggregation's binding information. For setting the dynamic sorter, the [`v4.ODataListBinding.sort`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/sort) method is used. The sorter that is given here overwrites the initial value specified on binding construction.


Dynamic sorters are transformed to an OData `$orderby` system query option value, and the static sorters are always appended as secondary sort criterion. In the example below, the equipments are first ordered by `CategoryID` \(dynamic sorter that can be overwritten by calling `sort` on the list binding, Line 8\) and then by `Name` \(secondary sort criterion, static sorter, Line 6\). For information on the optional `group` property \(Line 10\), see [Sorting, Grouping, and Filtering for List Binding and Tree Binding](sorting-grouping-and-filtering-for-list-binding-and-tree-binding-ec79a5d.md)and the `vGroup` parameter of [`sap.ui.model.Sorter`](https://ui5.sap.com/#/api/sap.ui.model.Sorter).

If additional properties need to be loaded in the context of a sorter — for example, for grouping — you can specify them via the `groupPaths` parameter of `sap.ui.model.Sorter`. With `autoExpandSelect` enabled, the `ODataListBinding` automatically adds these paths to `$select` and `$expand` — the effect is the same as specifying them in `$select` on [list binding construction](https://ui5.sap.com/#/api/sap.ui.model.Sorter). Sorters can also be changed via [`sort`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/sort), and the properties to be loaded adapt accordingly.

**Example: Dynamic and static sorters**

```
1 <Table growing="true" growingThreshold="5" id="Equipments"
2     items="{
3         path: '/Equipments',
4         parameters: {
5             $$operationMode: 'Server',
6             $orderby: 'Name',
7         },
8         sorter: {
9             path: 'CategoryID',
10            group: true
11            groupPaths: ['Category/CategoryName']
12        }
13    }">
```

**Related Information**  


[API Reference: `sap.ui.model.Sorter`](https://ui5.sap.com/#/api/sap.ui.model.Sorter%23constructor)

