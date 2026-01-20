<!-- loio1ab4f62de6ab467096a2a98b363a1373 -->

# Parameters

When creating a binding, you can provide a parameter map which can contain the following:

-   OData query options; the values determine parameters for data service requests initiated by the binding. For more information about these options, see [OData Version 4.01 Part 2: URL Conventions, 5 Query Options](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#_Toc31360954).

-   Binding-specific parameters start with `"$$"` and influence the behavior of the binding as follows:

-   -   `$$canonicalPath`: Set to `true` to use the canonical path computed from the path of the binding's context in the read URL for data service requests. All values other than `true` lead to an error.

-   `$$groupId` and `$$updateGroupId`: see [Batch Control](batch-control-74142a3.md)

-   `$$noPatch`: In a property binding, set to `true` to prevent changes of the value to appear in back-end requests.

-   `$$operationMode`: see [Filtering](filtering-5338bd1.md) and [Sorting](sorting-d2ce3f5.md)

-   `$$ownRequest`: Set to `true` to ensure the binding uses an own service request to read data. All values other than `true` lead to an error.

-   `$$patchWithoutSideEffects`: Set to `true` to switch off implicit loading of side effects via PATCH requests. This sets the"return=minimal" preference and requires the service to return an ETag header for "204 No Content" responses. If not specified, the value of the parent binding is used. All values other than `true` lead to an error.

-   `$$inheritExpandSelect`: For operation bindings only. Set to `true` to ensure that $expand and $select from the parent binding are used in the request sent on `#invoke`. If set to `true`, the binding must not set the $expand itself, the operation must be bound, and the return value and the binding parameter must belong to the same entity set.



The binding's OData query options are combined with the query options passed to the OData V4 model; the binding's query options overwrite model query options with the same name. The resulting query options are appended to each data service request by this binding. The following query options are supported; all others are not allowed and lead to an error:

-   OData custom query options except those with the name prefix `"sap-"` \(unless starting with `"sap-valid-"`, which can be used for [Temporal Data](https://www.oasis-open.org/committees/document.php?document_id=66196&wg_abbrev=odata)\). For more information about these, see [OData Version 4.01 Part 2: URL Conventions, 5.2 Custom Query Options](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#_Toc31361050).

-   The list and context binding support the OData system query options `$apply`, `$count`, `$expand`, `$filter`, `$orderby`, `$search` and `$select`.

-   An absolute property binding with a path that ends on "$count" supports the OData system query options `$apply`, `$filter`, and `$search`.

The query option `$count` must be specified as a boolean value with `true` or `false`. All other query options can be specified with a string value. In addition to strings, the following alternatives are possible:

-   `$select` can be specified as an array of strings where each string specifies a select item, or the value '`*`' to select all properties. Normally, these items point to direct parts of the query result without further expanding into related entities.Further options are available with [Automatic determination of $expand and $select](automatic-determination-of-expand-and-select-10ca58b.md).

-   `$expand` can be an object where each object property corresponds to an expand item: the key is the complete expand path. The value can be set as follows:

    a\) `true` or `null` if no `expand` options are required

    b\) An object with query options for the `$expand`; numeric options \(like `$levels`\) may be given as numbers. If the option is `$expand` or `$select`, the value may again be an object or array.


**Example: Binding with parameters in JavaScript**

```js

oView.byId("SalesOrderTable").bindItems({
    path : "/SalesOrderList",
    parameters : {
        "$count" : true,
        "$expand" : {
            "SO_2_SOITEM" : {
                "$orderby" : "ItemPosition",
                "$select" : ["ItemPosition", "Quantity", "QuantityUnit", "SalesOrderID"]
            }
        },
        "$filter" : "BuyerName ge 'M'",
        "$orderby" : "GrossAmount desc",
        "$select" : ["BuyerName", "CurrencyCode", "GrossAmount", "Note", "SalesOrderID"]
    }
});
```

**Example: Binding with parameters in an XML view \(`$select` and `$expand` values as string\)**

```js

<Table growing="true" growingThreshold="5" id="SalesOrders"
    items="{
            path : '/SalesOrderList',
            parameters : {
                $count : true,
                $expand : 'SO_2_BP',
                $filter : 'BuyerName ge \'M\'',
                $orderby : 'GrossAmount desc',
                $select : 'BuyerName,CurrencyCode,GrossAmount,Note,SalesOrderID'
            },
        }">
```

**Example: Binding with parameters in an XML view \(`$select` and `$expand` values as object\)**

```js

<Table growing="true" growingThreshold="5" id="SalesOrders"
    items="{
            path : '/SalesOrderList',
            parameters : {
                $count : true,
                $expand : {
                       'SO_2_SOITEM' : {
                               '$orderby' : 'ItemPosition',
                               '$select' : ['ItemPosition','Quantity','QuantityUnit','SalesOrderID']
                       }
               },
                $filter : 'BuyerName ge \'M\'',
                $orderby : 'GrossAmount desc',
                $select : ['BuyerName','CurrencyCode','GrossAmount','Note','SalesOrderID']
            },
        }">

```

`changeParameters` allows to change, add, or delete OData query options. This does **not** apply, however, to binding-specific parameters that start with `$$`.

The parameters are changed according to the given map of parameters: Parameters with an undefined value are removed, the other parameters are set, and missing parameters remain unchanged. Change, add or delete is possible at the same time. The binding is refreshed as soon as the parameter changes are applied.

**Example: Change binding parameters in JavaScript**

```js

oView.byId("SalesOrderTable").getBinding("items").changeParameters({
    "$search" : '"mountain bike"',
    "$filter" : undefined
});
```

