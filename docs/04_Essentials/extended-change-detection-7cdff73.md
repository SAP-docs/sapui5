<!-- loio7cdff73f308b4b10bdf7d83b7aba72e7 -->

# Extended Change Detection

Extended change detection \(ECD\) offers fine-grained information on the actual data changes. This can be used, for example, to only update the DOM when really necessary and avoid complete rerendering of a huge list whenever data is changed.

In aggregations \(such as lists\), ECD can be used by controls to only modify entries which have been changed instead of updating the complete aggregation after model data have been changed and a change event has been fired by the binding. By the improved update mechanism, unnecessary updates of aggregations and rerenderings of the DOM are significantly reduced. In many scenarios this leads to a better performance for the end user.

The binding base class already offers a `change` event, which is fired whenever the bound data has been changed. This is sufficient for bindings like property and context binding. Since lists can contain a huge amount of data, you need more detailed information on the changes to avoid a complete rerendering of the whole list each time data has been changed on the UI.



<a name="loio7cdff73f308b4b10bdf7d83b7aba72e7__section_efm_hht_scb"/>

## Calculation of Differences

When extended change detection is enabled, an algorithm is executed to compare the last returned context array with the current context array and the differences is attached to the array of contexts as an additional property named `diff` whenever the `getContexts` method is called. The following results are possible:

-   There is no `diff` property on the context array

    The data was completely changed or a difference could not be calculated. In this case there is no possibility for fine-grained update, a complete recreation or rerendering is necessary.

-   The `diff` property returns an empty array

    The algorithm has been executed, but could not find any differences between the initial and the current state. This may occur if data within the list has been changed, but detection of updates have not been enabled for the extended change detection.

-   The `diff` property returns an array of different entries

    The difference has been calculated and can be used by the control or application to update dependent structures in a fine grained manner


The difference between the previous and the current state of the list is provided to the control as an array that contains `insert` and `remove` entries that contain the actual changes.

> ### Example:  
> 
> <table>
> <tr>
> <td valign="top">
> 
> **Old State** 
> 
> </td>
> <td valign="top">
> 
> **New State** 
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> `["one", "two", "three", "four", "five"]` 
> 
> </td>
> <td valign="top">
> 
> `["one", "three", "four", "five", "six"]` 
> 
> </td>
> </tr>
> <tr>
> <td valign="top" colspan="2">
> 
> **Difference** 
> 
> </td>
> </tr>
> <tr>
> <td valign="top" colspan="2">
> 
> `[{index: 1, type: "delete"}, {index: 4, type: "insert}]` 
> 
> </td>
> </tr>
> </table>
> 
> The algorithm is implemented in the utility module `sap/base/util/array/diff`, which tries to calculate the smallest possible difference for the transition from old to the new state. The indexes are calculated in a way that they are valid after all previous steps have been applied, so it can be used in a loop to update an existing array, without any additional index shift needed.

> ### Caution:  
> -   Extended change detection calculates the difference between the context arrays returned by calling `getContexts`. Any additional call to `getContexts`, either by the app or the control itself, may trigger a difference calculation and may cause update problems. This can, for example, occur if your control uses fixed headers or footers, which must therefore not be used together with ECD.
> 
>     If you want to access the contexts of a list binding that were requested by a control last time without triggering a data request, you should use `getCurrentContexts` in your app instead. For more information, see the [API Reference: `sap.ui.model.ListBinding#getCurrentContexts`](https://ui5.sap.com/#/api/sap.ui.model.ListBinding/methods/getCurrentContexts).
> 
> -   When a `ListBinding` is firing a `refresh` event, the call to `getContexts` caused by this event is used to inform the `ListBinding` on the `startIndex` and `length` of entries requested by the control. No difference calculation is done on this specific call, as controls do not use the result of this call but instead wait for the data returned by the server.



<a name="loio7cdff73f308b4b10bdf7d83b7aba72e7__section_a2g_vht_scb"/>

## Using Extended Change Detection in App Development

If a control you want to use in your app to visualize list entries supports extended change detection, you should make sure that each entity of your model has a unique key to improve performance.

-   For OData models, the unique keys are automatically provided.

-   For all other models \(like a JSON model\), you have to define the keys either by using a key property or by using a function that calculates the key in the binding info of their list binding as in the following example:


    <table>
    <tr>
    <th valign="top">

    `key` property
    
    </th>
    <th valign="top">

    `key` function
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    ```js
    oControl.bindItems({
      path: "/listData",
      key: "id"
    });
    ```


    
    </td>
    <td valign="top">
    
    ```js
    oControl.bindItems({
      path: "/listData",
      key: function(oContext) {
        return oContext.getProperty("user") + oContext.getProperty("timestamp"); 
      }
    });
    ```


    
    </td>
    </tr>
    </table>
    



<a name="loio7cdff73f308b4b10bdf7d83b7aba72e7__section_w1g_5ht_scb"/>

## Using Extended Change Detection in Control Development

Extended change detection is disabled by default. If your control is meant to have only a few children like a toolbar with buttons, you should not activate extended change detection because a copy of the previous state would then always be kept unnecessarily in the binding.

If extended change detection is enabled, your control, for example an [`sap.m.ListBase`](https://ui5.sap.com/#/api/sap.m.ListBase), uses specific `insert` and `remove` calls only for elements that need to be added or removed instead of recreating all elements of an aggregation or setting new binding contexts on all aggregated elements.

You activate extended change detection for your control by setting the `bUseExtendedChangeDetection` property either on the control prototype or a specific control instance. The `ManagedObject` class takes care of reading and applying the information about the differences to aggregations with the `enableExtendedChangeDetection` method. The method has the following parameters:

-   `bDetectUpdates`

    Defines whether data changes within the same entity should also be contained in the `diff`. This is especially relevant when a factory function is used to create child controls, so depending on the data a different control may be created by the same entity.

-   `vKey`

    Defines how a unique symbol for each row is calculated, which is then used for the calculation of differences. This can either be a property name \(in case the data already has something like a `key` property\) or a function that is able to calculate such a unique key from the entity data.


You also have to implement the specific aggregation modifier methods to avoid the rerendering of the complete UI and only to a fine-grained DOM update.

> ### Note:  
> If your control has a custom `updateAggregation` method \(that means control takes care for updating the aggregation\) you have to make sure in your implementation that the difference information is interpreted and applied.

For more information, see the [API Reference: `sap.ui.base.ManagedObject.bindAggregation`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindAggregation).

**Related Information**  


[API Reference: `sap.ui.base.ManagedObject.bindAggregation`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindAggregation)

[API Reference: `sap.ui.Model.ListBinding.getContexts`](https://ui5.sap.com/#/api/sap.ui.model.ListBinding/methods/getContexts)

