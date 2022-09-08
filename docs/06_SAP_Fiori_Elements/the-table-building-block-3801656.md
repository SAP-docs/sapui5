<!-- loio3801656db27b4b7a9099b6ed5fa1d769 -->

# The `Table` Building Block

The `Table` building block provides an easy way to instantiate a table based on an `entitySet` or a specific navigation property.



<a name="loio3801656db27b4b7a9099b6ed5fa1d769__section_ksj_xtr_j5b"/>

## Usage

You can instantiate the building block by referencing the building block namespace within a fragment enabled for building block usage.

> ### Sample Code:  
> ```
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="/MyEntitySet"/>
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="MyNavProperty"/>
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="MyNavProperty/@com.sap.vocabularies.UI.v1.LineItem"/>
> ```

This instantiates the actual control tree that corresponds to this building block.

You can use the `Table` building block inside custom sections, custom subsections, and custom pages.

You can use the `Table` building block to add bound and unbound actions, and to group actions as menu buttons. You have the following options:

-   Define the placement of the action relative to an anchor

    You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Table Customization](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableCustoms).

-   Specify a bound action by using the `requiresSelection` property

    By default, the action is unbound.

-   Define menu actions and contained actions using the `ActionGroup` building block


> ### Sample Code:  
> XML annotation
> 
> ```xml
> <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" readOnly="true" id="LineItemTablePageCustomActions">
>      <macros:actions>
>           <macros:Action
>                key="customAction"
>                text="My Custom Action"
>                press=".onPressAction"
>                placement="After"
>                anchor="DataFieldForAction::Service.toggleBoolean"
>                requiresSelection="true"
>           />
>           <macros:ActionGroup text="Grouped Actions" placement="After" anchor="customAction">
>                <macros:Action text="Menu Action 1" press=".onPressMenuAction" />
>                <macros:Action text="Menu Action 2" press=".onPressMenuAction" />
>           </macros:ActionGroup>
>      </macros:actions>
> </macros:Table>
> ```

You can link the `Table` building block to a `FilterBar` that is defined in the same view or to a different one by referencing the ID of the `FilterBar`. This ID can be a local or a global one.

```
<Panel headerText="Table in Display Mode with FilterBar">
     <macros:FilterBar metaPath="@com.sap.vocabularies.UI.v1.SelectionFields#SF1" id="FilterBar" />
     <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" displayMode="true" id="LineItemTable" filterBar="FilterBar" />
</Panel>
```

Check out our live example in the flexible programming model explorer at [Table - FilterBar](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableFilterBar) and [Custom View with BuildingBlock Table](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customElementsOverview/customViewWithMacroTableContent).

You can send and remove messages related to the table by using the `sendMessage` and `removeMessage` methods. Check out our live example in the flexible programming model explorer at [Table Messages](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableMessages).

If the entity linked to the table is searchable, the *Search* field is displayed in the toolbar of the table. You can disable the *Search* field using the `isSearchable` parameter. Check out our live example in the flexible programming model explorer at [Table - Settings](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableCustoms).



<a name="loio3801656db27b4b7a9099b6ed5fa1d769__section_x2c_4vr_j5b"/>

## API

For information about the `Table` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table).

