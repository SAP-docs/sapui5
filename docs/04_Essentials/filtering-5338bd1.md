<!-- loio5338bd1f9afb45fb8b2af957c3530e8f -->

# Filtering

The OData V4 Model supports server-side filtering on lists.

To use server-side filtering, set the operation mode to [`sap.ui.model.odata.OperationMode.Server`](https://ui5.sap.com/#/api/sap.ui.model.odata.OperationMode/properties). This can be done as follows:

-   For a single `ODataListBinding` instance, set the binding parameter `$$operationMode`

-   For all list bindings of the model, set the model parameter `operationMode`.


**Example: Operation mode set in `manifest.json` for the model** 

```json

"models" : {
    "" : {
        "dataSource" : "default",
        "settings" : {
            "operationMode" : "Server",
            "synchronizationMode" : "None"
        }
    }
}
```

**Example: Operation mode set as binding parameter for a specific list binding**

```xml

<Table growing="true" growingThreshold="5" id="Equipments"
    items="{
            path : '/Equipments',
            parameters : {
                $$operationMode : 'Server',
                $filter : 'Category eq \'Electronics\'',
                $select : 'Category,EmployeeId,ID,Name'
            }
        }">
```

The `ODataListBinding` allows to set static and dynamic filters:

-   To set a static filter, use the `$filter` system query option in the binding parameters. The static filter value is sent with every data service request for the binding; you may specify any filter value allowed in OData V4. The static filter cannot be overwritten for an existing binding.

-   The dynamic filter is an instance of [sap.ui.model.Filter](https://ui5.sap.com/#/api/sap.ui.model.Filter) , or an array thereof. For an array, the filters are combined with a logical AND. You can set the initial value for the dynamic filter in [ODataModel\#bindList](https://ui5.sap.com/#/api/ODataModel%23methods/bindList) or declaratively in an XML view with the `filters` property in an aggregation's binding information. To set the dynamic filter, use the [ODataListBinding\#filter](https://ui5.sap.com/#/api/ODataListBinding%23methods/filter) method. This filter overwrites the initial value specified on binding construction.


The `ODataListBinding` combines the dynamic filter and static filter with a logical AND.

**Examle: Dynamic and static filters**

```xml

<Table growing="true" growingThreshold="5" id="Equipments"
    items="{
            path : '/Equipments',
            parameters : {
                $$operationMode : 'Server',
                $filter : 'Category eq \'Electronics\'',                             <-- static filter
                $select : 'Category,EmployeeId,ID,Name'
            },
            filters : {                                      <-- dynamic filter initial value
                path : 'EmployeeId',
                operator : 'GE',
                value1 : '0000'
            }
        }">
```

The example above filters the `Equipments` entity set by `Category` \(static filter\) and `EmployeeId` \(dynamic filter, initial value\).



<a name="loio5338bd1f9afb45fb8b2af957c3530e8f__section_FAANN"/>

## Filtering with Any, All, NotAny, and NotAll

The OData V4 model supports the Lambda Operators `any` and `all` as defined in Section 5.1.1.13 of the [OData Version 4.01. Part 2: URL Conventions](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#_Toc31361024) specification. These operators and their negated forms are represented using [`sap.ui.model.Filter`](https://ui5.sap.com/#/api/sap.ui.model.Filter) objects with [filter operators](https://ui5.sap.com/#/api/sap.ui.model.FilterOperator/properties) `sap.ui.model.Filter.Any`, `sap.ui.model.Filter.All`, `sap.ui.model.Filter.NotAny`, and `sap.ui.model.Filter.NotAll`.

Example:

```
// "Filter" and "FilterOperator" required from modules "sap/ui/model/Filter" and "sap/ui/model/FilterOperator"
new Filter({
    // the path of the collection for which the condition needs to be evaluated
    path: "Trips",
    // one of the filter operators listed above
    operator: FilterOperator.Any,
    // any OData identifier which is a variable for the current element of the collection referenced by the path
    variable: "trip",
    // the filter condition; the path of the nested filter contains the variable as prefix to reference the current element of the collection
    condition: new Filter("trip/Budget", FilterOperator.GT, 1000)
});
```

The path of the filter object is the path of the collection for which the boolean condition needs to be evaluated. The variable can be any OData identifier, and it needs to be part of the path of a nested filter condition.



### Filter Operator Any

The filter operator Any applies the `boolean` filter condition to each member of the collection referenced by `path`. If the condition is true for **at least one** member of the collection, the Any filter matches. The filter with the Any operator without a filter condition matches only if the collection referenced by `path` is not empty.

Example 1: Retrieve all individuals who have at least one trip

```
oListBinding.filter(
    new Filter({
        path: "Trips",
        operator: FilterOperator.Any
    })
);
```

The resulting request is: **`https://host/service/People?$filter=Trips/any()`**

Example 2: Retrieve all individuals who have at least one trip with a budget exceeding 1000

```
oListBinding.filter(
    new Filter({
        path: "Trips",
        operator: FilterOperator.Any,
        variable: "trip",
        condition: new Filter("trip/Budget", FilterOperator.GT, 1000)
    })
);
```

The resulting request is: **`https://host/service/People?$filter=Trips/any(trip:trip/Budget gt 1000)`**



### Filter Operator NotAny

The filter operator NotAny applies the `boolean` filter condition to each member of the collection referenced by `path`. If the condition is true for **none** of the members of the collection, or if the collection is empty, the NotAny filter matches.

Example 1: Retrieve all individuals who have no trips at all

```
oListBinding.filter(
    new Filter({
        path: "Trips",
        operator: FilterOperator.NotAny
    })
);
```

The resulting request is: **`https://host/service/People?$filter=not Trips/any()`**

Example 2: Retrieve all individuals who have no trips with the status "Rejected"

```
oListBinding.filter(
    new Filter({
        path: "Trips",
        operator: FilterOperator.NotAny,
        variable: "trip",
        condition: new Filter("trip/Status", FilterOperator.EQ, "Rejected")
    })
);
```

The resulting request is: **`https://host/service/People?$filter=not Trips/any(trip:trip/Status eq 'Rejected')`**



### Filter Operator All

The filter operator All applies the `boolean` filter condition to each member of the collection referenced by `path`. If the condition is true for **all** members of the collection, the All filter matches.

Example: Retrieve all individuals whose trips are all named "Walldorf"

```
oListBinding.filter(
    new Filter({
        path: "Trips",
        operator: FilterOperator.All,
        variable: "trip",
        condition: new Filter("trip/Name", FilterOperator.EQ, "Walldorf")
    })
);
```

The resulting request is: **`https://host/service/People?$filter=Trips/all(trip:trip/Name eq 'Walldorf')`**



### Filter Operator NotAll

The filter operator NotAll applies the `boolean` filter condition to each member of the collection referenced by `path`. If the condition is not true for **any** member \(that is, at least one member\) of the collection, the NotAll filter matches.

Example: Retrieve all individuals whose trips do not all have the name "Walldorf" \(i.e. for whom at least one trip has a different name\)

```
oListBinding.filter(
    new Filter({
        path: "Trips",
        operator: FilterOperator.NotAll,
        variable: "trip",
        condition: new Filter("trip/Name", FilterOperator.EQ, "Walldorf")
    })
);
```

The resulting request is: **`https://host/service/People?$filter=not Trips/all(trip:trip/Name eq 'Walldorf')`**

**Related Information**  


[sap.ui.model.odata.OperationMode.Server](https://ui5.sap.com/#/api/sap.ui.model.odata.OperationMode/properties)

