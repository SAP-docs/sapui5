<!-- loio3801656db27b4b7a9099b6ed5fa1d769 -->

# The `Table` Building Block

The `Table` building block provides an easy way to instantiate a table based on an `entitySet` or a specific navigation property.



You can instantiate the building block by referencing the building block namespace within a fragment enabled for building block usage.

> ### Sample Code:  
> ```
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="/MyEntitySet"/>
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="MyNavProperty"/>
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="MyNavProperty/@com.sap.vocabularies.UI.v1.LineItem"/>
> ```

This instantiates the actual control tree that corresponds to this building block.

You can use the `Table` building block inside custom sections, custom subsections, and custom pages.

You can use the `Table` building block to add bound and unbound actions, to group actions as menu buttons, to add custom columns, and to specify the create options for the table. For example, you have the following options:

-   Define the placement of the action relative to an anchor.

    You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Table Customization](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableCustoms).

-   Specify a bound action by using the `requiresSelection` property.

    By default, the action is unbound.

-   Define menu actions and contained actions using the `ActionGroup` building block.

-   Specify the create options and the related parameters for the table using the `creationMode` parameter. For more information about `TableCreationOptions`, see the [API Reference](https://ui5.sap.com//#/api/sap.fe.macros.table.TableCreationOptions).

    Check out our live example in the flexible programming model explorer at [Table - Edit Mode](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableEdit).


> ### Sample Code:  
> XML annotation
> 
> ```xml
> <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" readOnly="true" id="LineItemTablePageCustomActions"> <creationMode name="InlineCreationRows" inlineCreationRowsHiddenInEditMode="true" />  </macros:Table>
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

For a complete list of the available properties and aggregations, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table).

> ### Note:  
> The properties or aggregations defined at the manifest level aren't supported with the `Table` building block. They must be defined at the building-block level.

You can link the `Table` building block to a `FilterBar` that is defined in the same view or to a different one by referencing the ID of the `FilterBar`. This ID can be a local or a global one.

```
<Panel headerText="Table in Display Mode with FilterBar">
     <macros:FilterBar metaPath="@com.sap.vocabularies.UI.v1.SelectionFields#SF1" id="FilterBar" />
     <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" displayMode="true" id="LineItemTable" filterBar="FilterBar" />
</Panel>
```

Check out our live example in the flexible programming model explorer at [Table - FilterBar](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableFilterBar) and [Custom View with BuildingBlock Table](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customElementsOverview/customViewWithMacroTableContent).

You can use the `getPresentationVariant()` and `setPresentationVariant()` methods to programmatically get and set the presentation variants corresponding to the `Table` building block. Similarly, the `getSelectionVariant()` and `setSelectionVariant()` methods allows you to programmatically get and set the selection variants associated with the `Table` building block. The `getSelectionVariant()` method considers the variants that are applied directly to the table and excludes the variants that are applied to a bound model.

Check out our live example in the flexible programming model explorer at [Table - Interacting via APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tablePublicAPIs).

> ### Note:  
> The `getSelectionVariant()` and `setSelectionVariant()` methods only work if table personalization is enabled. For more information, see [Enabling Table Personalization](enabling-table-personalization-3e2b4d2.md).

You can use the `setCurrentVariantID` and `getCurrentVariantID` methods to programmatically set and get the current variant ID corresponding to the `Table` building block. Check out our live example in the flexible programming model explorer at [Table Extensibility](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/tableExtensibility).

You can send and remove messages related to the table by using the `sendMessage` and `removeMessage` methods. Check out our live example in the flexible programming model explorer at [Table Messages](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableMessages).

If the entity linked to the table is searchable, the *Search* field is displayed in the toolbar of the table. You can disable the *Search* field using the `isSearchable` parameter. Check out our live example in the flexible programming model explorer at [Table - Settings](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableCustoms).



<a name="loio3801656db27b4b7a9099b6ed5fa1d769__section_x2c_4vr_j5b"/>

## API

For information about the `Table` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table).



<a name="loio3801656db27b4b7a9099b6ed5fa1d769__section_fg2_qjw_11c"/>

## Influencing the Table Request Dynamically

Before a table rebind, you can retrieve the sorting and filters applied to the table as well as the complete binding information. You can also add sorting, filters, and additional properties using the methods on the [`CollectionBindingInfo`](https://ui5.sap.com/#/api/sap.fe.macros.CollectionBindingInfo%23overview) object.

To do so, first add the `beforeRebindTable` key to the table definition.

> ### Sample Code:  
> ```
> <macros:Table
>     metaPath="@com.sap.vocabularies.UI.v1.LineItem"
>     readOnly="true"
>     id="LineItemTablePageCustomActions"
>     isSearchable="false"
>     beforeRebindTable=".tableRefreshed"
> >
> 
> ```

Then, implement the `beforeRebindTable` extension point in the controller extension of the page.

> ### Sample Code:  
> ```
> sap.ui.define(
>     ["sap/fe/core/PageController", "sap/m/MessageBox", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/Sorter"],
>     function (PageController, MessageBox, Filter, FilterOperator, Sorter) {
>         "use strict";
> 
>         return PageController.extend("sap.fe.core.fpmExplorer.tableCustoms.Page", {
>             tableRefreshed(event) {
>                 var collectionBindingInfoAPI = event.getParameters("collectionBindingInfo");
> 
>                 //Add a filter
>                 var filter = new Filter({
>                     path: "BooleanProperty",
>                     operator: FilterOperator.EQ,
>                     value1: false
>                 });
>                 collectionBindingInfoAPI.addFilter(filter);
> 
>                 //Add a sorter
>                 var sorter = new Sorter("ID", true);
>                 collectionBindingInfoAPI.addSorter(sorter);
> 
>                 //Request an additional property to the request
>                 collectionBindingInfoAPI.addSelect(["TagStatus"]);
>             }
>         });
>     }
> );
> 
> ```

Check out our live example in the flexible programming model explorer at [Table - Custom Columns / Actions](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableCustoms).



<a name="loio3801656db27b4b7a9099b6ed5fa1d769__section_qmg_vvy_bdc"/>

## Triggering the Creation of a New Document Within a Table

You can trigger the creation of a document within a table by calling the `createDocument` function with the table reference within the `editFlow` controller extension:

> ### Sample Code:  
> ```
> //Get the table API
> var table = this.getView().byId("fe::table::_Child::LineItem::Table");
> 
> //Create document 
> this.base.editFlow
>     .createDocument(table, {
>         creationMode: coreLibrary.CreationMode.Inline,
>         createAtEnd: true,
>         data: {
>             ChildTitleProperty: "Child Object Custom Title",
>             ChildDescriptionProperty: "Child Custom Description"
>         }
>     })
>     .then(function () {
>         MessageToast.show("Custom create action successfully invoked");
>     });
> ```

Check out our live example in the flexible programming model explorer at [Controller Extensions - Edit Flow](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/basicExtensibility).

