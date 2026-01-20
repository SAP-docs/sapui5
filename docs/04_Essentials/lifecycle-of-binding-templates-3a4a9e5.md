<!-- loio3a4a9e562988456c9be0ef883ae7da50 -->

# Lifecycle of Binding Templates

The lifecycle of the binding templates differs from the lifecycle of controls that are contained in an aggregation. Whenever a control object is destroyed, any aggregating object is destroyed as well. For list binding templates, you specify the behavior by using the additional property [`templateShareable`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject.AggregationBindingInfo) in the parameter of the `bindAggregation` method of class `sap.ui.base.ManagedObject`.

> ### Caution:  
> Leaving the `templateShareable` parameter `undefined` is **highly error-prone**! We recommend always setting this parameter explicitly to `true` or `false`.

In **XML views**, you can also use the `templateShareable` property by adding it to the binding info as follows:

```xml
<Table id="EmployeeEquipments" headerText="Employee Equipments" items="{
    path: 'EMPLOYEE_2_EQUIPMENTS',
    templateShareable: false
}">
    <columns>
        <!-- ... -->
    </columns>
    <items>
        <ColumnListItem>
            <cells>
                <Text text="{ID}"/>
            </cells>
            <cells>
                <Text text="{EQUIPMENT_2_PRODUCT/Name}"/>
            </cells>
            <cells>
                <Text text="{Category}"/>
            </cells>
            <cells>
                <!-- Name="PRODUCT_2_CATEGORY" Type="Collection(...)" -->
                <List items="{
                    path: 'EQUIPMENT_2_PRODUCT/PRODUCT_2_CATEGORY',
                    templateShareable: true
                }">
                    <StandardListItem title="{CategoryName}"/>
                </List>
            </cells>
            <cells>
                <Text text="{EQUIPMENT_2_PRODUCT/PRODUCT_2_SUPPLIER/Supplier_Name}"/>
            </cells>
        </ColumnListItem>
    </items>
</Table>
```

-   `templateShareable: false` \(preferred setting\)

    If you set the parameter to `false`, the lifecycle is controlled by the framework. It will destroy the template when the binding is removed \(`unbindAggregation`, `unbindItems`\)

-   `templateShareable: true`

    If you set the parameter to `true`, the template is **not** destroyed when \(the binding of\) the aggregated object is destroyed. Use this option in the following cases only:

    -   The template is reused in your app to define an additional list binding.

        Since the template is not destroyed, this could also affect some other aggregation that uses the same template at a later point in time.

    -   The parent control that contains the list binding with the template is cloned. The binding info is used in the clone as well.

        This means, if `templateShareable` is `true`, the template won't be cloned when its parent is. If it's `false`, it will be.


    In these cases, the app has to make sure that the templates are properly cleaned up at some point in time - at the latest when the corresponding controller or component is destroyed.

-   If the parameter is undefined, \(neither `true` nor `false`\), the framework checks at several points in time whether all list bindings are removed. If there are no bindings, the template is marked as "candidate for destroy", but it's not immediately destroyed. The candidate is destroyed in the following cases:

    -   A **new object with the same ID** is created.

    -   The component that owns the objects is destroyed.


    If the framework determines that a "candidate for destroy" is still in use in another binding or in a clone operation, the framework makes sure that the candidate is not destroyed by implicitly setting `templateShareable` to `true` \(as this best reflects how the app deals with the template\). But now the template is not destroyed at all \(an error message is issued\), and the app implementation needs to make sure that the binding template is destroyed as soon as it is no longer needed.

    > ### Note:  
    > The error messages are:
    > 
    > -   *A binding template that is marked as "candidate for destroy" is reused in a binding.*
    > 
    > -   *During a clone operation, a template was found that neither was marked with 'templateShareable:true' nor 'templateShareable:false'.* 


