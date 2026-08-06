<!-- loio3801656db27b4b7a9099b6ed5fa1d769 -->

# The `Table` Building Block

The `Table` building block enables dynamic table creation based on an entity set or navigation property in SAP Fiori elements for OData V4, supporting features like filtering, personalization, custom actions, and mass editing. Use it to create flexible, feature-rich tables in custom sections, subsections, pages, or controllers without manual configuration.

You can use the `Table` building block to instantiate a table based on an `entitySet` or a specific navigation property in SAP Fiori elements for OData V4. To instantiate the building block, reference the building block namespace within a fragment enabled for building block usage. This instantiates the control tree that corresponds to this building block.

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="/MyEntitySet"/>
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="MyNavProperty"/>
> <macros:Table xmlns:macro="sap.fe.macros" metaPath="MyNavProperty/@com.sap.vocabularies.UI.v1.LineItem"/>
> ```

You can use the `Table` building block inside custom sections, custom subsections, and custom pages.



## Key Capabilities

The following table provides information of some key capabilities of the `Table` building block:

**Key Capabilities of the Table Building Block**


<table>
<tr>
<th valign="top">

Capability

</th>
<th valign="top">

Description

</th>
<th valign="top">

More Information

</th>
</tr>
<tr>
<td valign="top">

Dynamic table creation

</td>
<td valign="top">

You can use the `Table` building block to dynamically create tables at runtime.

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Controller integration

</td>
<td valign="top">

You can use this building block inside controllers for more flexibility and a wider variety of use cases. The following sample code shows an example of a table inside a dialog:

> ### Sample Code:  
> Controller Extension
> 
> ```javascript
> 
> createTable: function() {
>     const table = new Table({
>         contextPath: "/Entities",
>         metaPath: "to_subEntities/@UI.LineItem"
>     });
>     const newDialog = new Dialog({
>         title: "Dialog",
>         content: [table],
>         beginButton: new Button({
>             text: "OK",
>             press: function () {
>                 newDialog.close();
>             }
>         }),
>         endButton: new Button({
>             text: "Cancel",
>             press: function () {
>                 newDialog.close();
>             }
>         })
>     })
> 
>     newDialog.setBindingContext(context);
>     newDialog.addStyleClass("sapUiContentPadding");
>     this.getExtensionAPI().addDependent(newDialog);
>     newDialog.open();
> }
> 
> ```



</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Configuring the table with different `metaPath` target annotations

</td>
<td valign="top">

The `metaPath` of the `Table` building block can point to any of the following annotations:

-   `LineItem`

-   `PresentationVariant`

-   `SelectionPresentationVariant`




</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Linking to a filter bar

</td>
<td valign="top">

You can link the `Table` building block to a `FilterBar` that is defined in the same view or to a different one by referencing the ID of the `FilterBar`. This ID can be a local or a global one.

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <Panel headerText="Table in Display Mode with FilterBar">
>     <macros:FilterBar metaPath="@com.sap.vocabularies.UI.v1.SelectionFields#SF1" id="FilterBar" />
>     <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" displayMode="true" id="LineItemTable" filterBar="FilterBar" />
> </Panel>
> ```



</td>
<td valign="top">

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Usage with Filter Bar](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableFilterBar).

</td>
</tr>
<tr>
<td valign="top">

Storing and restoring personalization

</td>
<td valign="top">

Any personalization done by the user is automatically stored and restored using `iAppState`.

</td>
<td valign="top">

[Store/Restore the Application State](store-restore-the-application-state-46bf248.md)

</td>
</tr>
<tr>
<td valign="top">

Not storing personalization

</td>
<td valign="top">

You can disable the storing and restoration of personalization done by the user using `ignorePersonalizationChanges`.

</td>
<td valign="top">

[Disabling Personalization Persistence in Building Blocks](disabling-personalization-persistence-in-building-blocks-32259bd.md)

</td>
</tr>
<tr>
<td valign="top">

Presentation variants and selection variants

</td>
<td valign="top">

You can use the `getPresentationVariant()` and `setPresentationVariant()` methods to programmatically get and set the presentation variants corresponding to the `Table` building block. Similarly, the `getSelectionVariant()` and `setSelectionVariant()` methods allow you to programmatically get and set the selection variants associated with the `Table` building block. The `getSelectionVariant()` method considers the variants that are applied directly to the table and excludes the variants that are applied to a bound model.

> ### Note:  
> The `getSelectionVariant()` and `setSelectionVariant()` methods only work if table personalization is enabled. For more information, see [Enabling Table Personalization](enabling-table-personalization-3e2b4d2.md).

You can use the `setCurrentVariantID` and `getCurrentVariantID` methods to programmatically set and get the current variant ID corresponding to the `Table` building block.

</td>
<td valign="top">

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Table APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tablePublicAPIs).

</td>
</tr>
<tr>
<td valign="top">

An illustrated message when no data is found

</td>
<td valign="top">

If a table doesn't contain any data, users see an illustrated message.

</td>
<td valign="top">

[Displaying An Illustrated Message When No Data Is Found](displaying-an-illustrated-message-when-no-data-is-found-f9925b6.md)

</td>
</tr>
<tr>
<td valign="top">

Bound and unbound actions

</td>
<td valign="top">

Specify a bound action by using the `requiresSelection` property.

By default, the action is unbound.

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Relative action placement

</td>
<td valign="top">

Define the placement of the action relative to an anchor.

</td>
<td valign="top">

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Custom Column](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/customColumn) and [Building Blocks - Table - Extensions - Custom Action](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/customTableAction).

</td>
</tr>
<tr>
<td valign="top">

Grouping actions as menu buttons

</td>
<td valign="top">

Define menu actions and contained actions using the `ActionGroup` building block.

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

*Search* field in the table toolbar

</td>
<td valign="top">

If the entity linked to the table is searchable, the *Search* field is displayed in the toolbar of the table. You can disable the *Search* field using the `isSearchable` parameter.

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Quick filters

</td>
<td valign="top">

With the `Table` building block, you can define quick filters which are applied to the table content.

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" id="LineItemTableQuickFilters">
>     <macros:quickVariantSelection>
>         <macrosTable:QuickVariantSelection 
>             paths="UI.SelectionVariant#All,UI.SelectionVariant#Approved" 
>             showCounts="true" />
>     </macros:quickVariantSelection>
> </macros:Table>
> ```



</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Messages

</td>
<td valign="top">

You can send and remove messages related to the table by using the `sendMessage` and `removeMessage` methods.

</td>
<td valign="top">

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Table APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tablePublicAPIs).

</td>
</tr>
<tr>
<td valign="top">

Custom columns

</td>
<td valign="top">

 

</td>
<td valign="top">

[Adding Custom Columns to Tables](adding-custom-columns-to-tables-b0e65da.md)

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Custom Column](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/customColumn).

</td>
</tr>
<tr>
<td valign="top">

Field display settings

</td>
<td valign="top">

Various field display settings apply to tables as well.

</td>
<td valign="top">

[The Field Building Block](the-field-building-block-5260b9c.md) 

</td>
</tr>
<tr>
<td valign="top">

Creation options

</td>
<td valign="top">

Specify the creation options and the related parameters for the table using the `creationMode` parameter.

</td>
<td valign="top">

[Enabling Inline Creation Mode or Empty Row Mode for Table Entries](enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md)

[API Reference](https://ui5.sap.com//#/api/sap.fe.macros.table.TableCreationOptions)

</td>
</tr>
<tr>
<td valign="top">

Mass edit

</td>
<td valign="top">

With the `Table` building block, you can also define mass-edit configuration using the `massEdit` aggregation. The logic is identical to [Enabling Editing Using a Dialog \(Mass Edit\)](enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" id="LineItemTablePageMassEdit">
>     <massEdit>
>         <macrosTable:MassEdit visibleFields="BooleanProperty,TagStatus">
>             <f:FormContainer>
>                 <f:formElements>
>                     <f:FormElement label="Custom Element">
>                         <Text text="This is a custom fragment displayed in the Mass Edit dialog" />
>                     </f:FormElement>
>                 </f:formElements>
>             </f:FormContainer>
>         </macrosTable:MassEdit>
>     </massEdit>
> </macros:Table>
> ```



</td>
<td valign="top">

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Mass Edit](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableMassEdit).

</td>
</tr>
</table>

For a complete list of the available properties and aggregations, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table).

> ### Note:  
> The properties or aggregations defined at the manifest level aren't supported with the `Table` building block. They must be defined at the building-block level.

The following sample code shows a combination of capabilities implemented:

> ### Sample Code:  
> Fragment Definition
> 
> ```xml
> <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" readOnly="true" id="LineItemTablePageCustomActions">
>     <creationMode name="InlineCreationRows" inlineCreationRowsHiddenInEditMode="true" />
>     <macros:actions>
>         <macros:Action 
>             key="customAction" 
>             text="My Custom Action" 
>             press=".onPressAction" 
>             placement="After" 
>             anchor="DataFieldForAction::Service.toggleBoolean" 
>             requiresSelection="true" />
>         <macros:ActionGroup text="Grouped Actions" placement="After" anchor="customAction">
>             <macros:Action text="Menu Action 1" press=".onPressMenuAction" />
>             <macros:Action text="Menu Action 2" press=".onPressMenuAction" />
>         </macros:ActionGroup>
>     </macros:actions>
> </macros:Table>
> ```

This example shows the following configurations for the `Table` building block:

-   The inline creation mode is enabled without including an empty row by default in edit mode.

-   A bound custom action is added to the table toolbar.

-   A *Grouped Actions* button is also added to the table toolbar. It opens a menu with two unbound custom actions.

-   The sample code includes the following examples of relative action placement:

    -   The standalone custom action is placed after another action named DataFieldForAction.

    -   The grouped actions are placed after the standalone action.





<a name="loio3801656db27b4b7a9099b6ed5fa1d769__section_x2c_4vr_j5b"/>

## API

You can interact and influence a `Table` building block using a set of properties and methods in the `Table` API. For example, you can use the `Table` API to select or deselect line items in a table.

For more information about the `Table` API, see the following resources:

-   [Interacting with a Table Using the API](interacting-with-a-table-using-the-api-fa9defb.md)

-   The [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table)

-   The SAP Fiori development portal at [Building Blocks - Table - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableDefault)

-   The SAP Fiori development portal at [Building Blocks - Table - Extensions - Table APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tablePublicAPIs)


