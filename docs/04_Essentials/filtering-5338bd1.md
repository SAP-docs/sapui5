<!-- loio5338bd1f9afb45fb8b2af957c3530e8f -->

# Filtering

The OData V4 Model supports server side filtering on lists.

To use server side filtering, set the operation mode to [`sap.ui.model.odata.OperationMode.Server`](https://ui5.sap.com/#/api/sap.ui.model.odata.OperationMode/properties). This can be done as follows:

-   For a single `ODataListBinding` instance, set the binding parameter `$$operationMode`

-   For all list bindings of the model, set the model parameter `operationMode`.


 **Example: Operation mode set in `manifest.json` for the model** 

```js

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

```js

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

-   The dynamic filter is an instance of [sap.ui.model.Filter](https://ui5.sap.com/#/api/sap.ui.model.Filter) , or an array thereof. For an array, the filters are combined with a logical AND. You can set the initial value for the dynamic filter in [ODataModel.bindList](https://ui5.sap.com/#/api/ODataModel.bindList) or declaratively in an XML view with the `filters` property in an aggregation's binding information. To set the dynamic filter, use the [ODataListBinding.filter](https://ui5.sap.com/#/api/ODataListBinding.filter) method. This filter overwrites the initial value specified on binding construction.


The `ODataListBinding` combines the dynamic filter and static filter with a logical AND.

**Examle: Dynamic and static filters**

```js

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



<a name="loio5338bd1f9afb45fb8b2af957c3530e8f__section_mqn_jkk_b1b"/>

## Filtering with Any and All

The OData V4 model also supports the Lambda Operators `any` and `all` as defined in section 5.1.1.10 of the [OData Version 4.0. Part 2: URL Conventions](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc453752358) specification. They are represented by [sap.ui.model.Filter](https://ui5.sap.com/#/api/sap.ui.model.Filter) objects with filter operators [sap.ui.model.FilterOperator.Any](https://ui5.sap.com/#/api/sap.ui.model.FilterOperator/properties) and [sap.ui.model.FilterOperator.All](https://ui5.sap.com/#/api/sap.ui.model.FilterOperator/properties).

Example:

```
sap.ui.model.Filter({
        // the path of the collection for which the condition needs to be evaluated
        path : "TEAM_2_EMPLOYEES",
        // either sap.ui.model.FilterOperator.Any or sap.ui.model.FilterOperator.All
        operator : sap.ui.model.FilterOperator.Any,    
        // any OData identifier which is a variable for the current element of the collection referenced by path
        variable : "employee",
        // the filter condition; the path of the nested filter contains the variable as prefix to reference current element of the collection
        condition : new sap.ui.model.Filter("employee/AGE", sap.ui.model.FilterOperator.GT, 42)  
    })
```

The path of the filter object is the path of the collection for which the boolean condition needs to be evaluated. The variable can be any OData identifier and it needs to be part of the path of a nested filter condition.



### Filter Operator any

The filter operator Any applies the `boolean` filter condition to each member of the collection referenced by `path`. If the condition is true for **at least one** member of the collection, the any-filter matches. The filter with the Any operator without a filter condition matches only if the collection referenced by path is not empty.

Example 1: Get all teams that have at least one employee who is older than 42

```

oTeamsBinding.filter(
    new sap.ui.model.Filter({
        path : "TEAM_2_EMPLOYEES",
        operator : sap.ui.model.FilterOperator.Any,
        variable : "employee",
        condition : new sap.ui.model.Filter("employee/AGE", sap.ui.model.FilterOperator.GT, 42)
    });
);
```

The resulting request would be: **`http://host/service/TEAMS?$filter=TEAM_2_EMPLOYEES/any(employee:employee/AGE gt 42)`**

Example 2: Get all teams that have at least one employee assigned

```
oTeamsBinding.filter(
    new sap.ui.model.Filter({
        path : "TEAM_2_EMPLOYEES",
        operator : sap.ui.model.FilterOperator.Any
    });
);
```

The resulting request would be: **`http://host/service/TEAMS?$filter=TEAM_2_EMPLOYEES/any()`**



### Filter Operator all

The filter operator All applies the `boolean` filter condition to each member of the collection referenced by `path`. If the condition is true for **all** members of the collection, the all-filter matches.

Example: Get all teams for which all employees are older than 42.

```

oOrdersListBinding.filter(
    new sap.ui.model.Filter({
        path : "TEAM_2_EMPLOYEES",
        operator : sap.ui.model.FilterOperator.All,
        variable : "employee",
        condition : new sap.ui.model.Filter("employee/AGE", sap.ui.model.FilterOperator.GT, 42)
    });
);
```

The resulting request would be: **`http://host/service/TEAMS?$filter=TEAM_2_EMPLOYEES/all(employee:employee/AGE gt 42)`**

**Related Information**  


[sap.ui.model.odata.OperationMode.Server](https://ui5.sap.com/#/api/sap.ui.model.odata.OperationMode/properties)

