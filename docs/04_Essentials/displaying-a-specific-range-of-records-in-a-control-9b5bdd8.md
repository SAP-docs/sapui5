<!-- loio9b5bdd8931194e88b22faf8537099073 -->

# Displaying a Specific Range of Records in a Control

It is possible to display only a specific range of records when using a list binding. The necessary properties can be set in the binding information.



Use the `length` and `startIndex` properties of the `oBindingInfo` parameter of the [`sap.ui.base.ManagedObject#bindAggregation`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindAggregation) method if you wish to display only a specific range of your records. Your XML view will then look similar to the following example for a list of notes, for which the resulting table will display the fourth, fifth and sixth note ordered by `Rank` in ascending order.

```xml
<Table 
    items="{
        path: '/Notes',
        sorter: { path: 'Rank' },
        length: 3,
        startIndex: 3
}">
    <columns>
        <Column>
            <Text text="Note" />
        </Column>
    </columns>
    <items>
        <ColumnListItem>
            <cells>
                <Text text="{Note}" />
            </cells>
        </ColumnListItem>
    </items>
</Table>

```

