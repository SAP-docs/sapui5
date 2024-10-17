<!-- loiof28025135e0e4527bdfb7c5441647391 -->

# Enablement of Personalization \(With Variant Management\)

The simple concept of personalization allows the user to personalize a control and to persist these settings using a `VariantManagement` control.

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.m.p13n.Engine) and the [sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine).

Personalization currently supports, for example, defining the order of columns in a table and their visibility, sorting, and grouping. To enable this, the personalization engine can be used.



<a name="loiof28025135e0e4527bdfb7c5441647391__section_lfb_bsm_xwb"/>

## Using the Engine

To use the personalization, the following artifacts are required:

-   `sap.m.p13n.Engine`

    Personalization engine that enables the personalization.

-   `sap.m.p13n.SelectionController`

    Creates personalization content that is relevant for selection and visibility. This controller initializes `sap.m.p13n.SelectionPanel`.

-   `sap.m.p13n.SortController`

    Creates personalization content that is relevant for sorting. This controller initializes `sap.m.p13n.SortPanel`.

-   `sap.m.p13n.GroupController`

    Creates personalization content that is relevant for grouping. This controller initializes `sap.m.p13n.GroupPanel`.

-   `sap.m.p13n.MetadataHelper`

    Provides service-related data for the personalization engine, for example, to display columns that do currently not exist in a table.

-   `sap.ui.fl.variants.VariantManagement`

    Provides a UI to manage the view settings.




<a name="loiof28025135e0e4527bdfb7c5441647391__section_prf_hsm_xwb"/>

## Registering a Control in the Engine

When enabling a control for personalization, you need to register the control once using the `sap.m.p13n.Engine#register` method. `sap.m.p13n.MetadataHelper` is required to provide metadata-relevant information for the personalization engine. It needs to be initialized with an array of objects that have to provide the following information:

**Required Properties**


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Type

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`key` 

</td>
<td valign="top">

`string` 

</td>
<td valign="top">

The key associated to the item. The recommendation is to provide the ID of the related item to create an association between the metadata and the aggregation.

</td>
</tr>
<tr>
<td valign="top">

`label` 

</td>
<td valign="top">

`string` 

</td>
<td valign="top">

The text that is displayed in the personalization dialog.

</td>
</tr>
<tr>
<td valign="top">

`path` 

</td>
<td valign="top">

`string` 

</td>
<td valign="top">

The model path to create filters, groupings, and sorters.

</td>
</tr>
<tr>
<td valign="top">

`visible` 

</td>
<td valign="top">

`boolean` 

</td>
<td valign="top">

Default value is `true`. Hides an item from `SelectionPanel` in the personalization if set to `false`.

</td>
</tr>
<tr>
<td valign="top">

`sortable` 

</td>
<td valign="top">

`boolean` 

</td>
<td valign="top">

Default value is `true`. Hides an item from `SortPanel` in the personalization if set to `false`.

</td>
</tr>
<tr>
<td valign="top">

`groupable` 

</td>
<td valign="top">

`boolean` 

</td>
<td valign="top">

Default value is `true`. Hides an item from `GroupPanel` in the personalization if set to `false`.

</td>
</tr>
</table>

> ### Note:  
> Since the engine is a singleton, make sure you access it using the `getInstance()` method.

```js

/* 
*  The MetadataHelper provides the metadata information for the control.
*  each object in the array represents one item associated to an item in the controls
*  aggregation. Looking at a table in this example, each entry represents one column.
*  This information will be necessary to display all the columns and provide metadata specific information
*  for the personalization Engine.
*
*  The key will be used for persistence. The convention is to give the according control (for example the column here)
*  the same id the key provided so the Engine can create a connection between the column and metadata item.
*/
this.oMetadataHelper = new MetadataHelper([
    {key: "firstName", label: "First Name", path: "firstName"},
    {key: "lastName", label: "Last Name", path: "lastName"},
    {key: "city", label: "City", path: "city"},
    {key: "size", label: "Size", path: "size"}
]);

/* 
*  The registration is a one time process that enables the given control instane for personalization.
*  The registration process requires a helper for metadata related information.
*  The controller setting is a map of arbitrary keys with the accoridng controller as value. Whenever
*  the Engine will be accessed, these controller keys need to be provided as per wording in the registration process.
*/
Engine.getInstance().register(oTable, {
    helper: this.oMetadataHelper,
    controller: {
        //The SelectionController requires a targetAggregation to be personalized.
        //Each controller also requires the according control instance to where the settings should be persisted to.
        Columns: new SelectionController({
            targetAggregation: "columns",
            control: oTable
        }),
        Sorter: new SortController({
            control: oTable
        }),
        Groups: new GroupController({
            control: oTable
        })
    }
});
```



<a name="loiof28025135e0e4527bdfb7c5441647391__section_h42_r54_ywb"/>

## Displaying a Personalization Popup

The personalization engine provides basic tools and functions to initialize and display a `sap.m.p13n.Popup` with the related panels for each registered controller.

Once the registration process has been completed, the registered control instance can make use of the `sap.m.p13n.Engine#show` method. This method is easy to use and provides the complete process of initializing, opening, and creating the necessary delta output information for the developer.

The method can be used in the following way:

```js

// The control instance and an array of the desired keys to display for personalization needs to be provided. Optionally a map of settings
// such as the contentHeight and contentWidth can be provided to customize the defaults of the personalization dialog.
Engine.getInstance().show(oTable, ["Columns", "Sorter", "Groups"], {
    contentHeight: "35rem",
    contentWidth: "32rem"
});
```



<a name="loiof28025135e0e4527bdfb7c5441647391__section_g15_cv4_ywb"/>

## Handling of State Changes

Whenever a personalization state changes \(most likely when the user creates changes in the personalization popup provided by `sap.m.p13n.Engine#show`\), an event is triggered by the engine. This event can then be used to create application-specific implementations by registering via `sap.m.p13n.Engine#attachStateChange`. This event will provide an object of the state after the user created personalization changes. An exampe implementation for a table might look as follows:

```js

//Registration of the event handler
Engine.getInstance().attachStateChange(function(){

    //The new control state after the personalization
    var oState = oEvt.getParameter("state");

    //--> The following lines are meant to process the personalization state by toggling the table columns and recreating the binding and template.
	// this is just a demo implementation. The sorters and groupings can be created in a similar approach, also see the more detailed exmaple linked below.

    oTable.getColumns().forEach(function(oColumn, iIndex){
        oColumn.setVisible(false);
    });

    oState.Columns.forEach(function(oProp, iIndex){
        var oCol = this.byId(oProp.key);
        oCol.setVisible(true);

        oTable.removeColumn(oCol);
        oTable.insertColumn(oCol, iIndex);
    }.bind(this));

    var aCells = oState.Columns.map(function(oColumnState) {
        return new Text({
            text: "{" + oColumnState.key + "}"
        });
    });

    oTable.bindItems({
        templateShareable: false,
        path: '/items',
        sorter: aSorter,
        template: new ColumnListItem({
            cells: aCells
        })
    });
});
```



<a name="loiof28025135e0e4527bdfb7c5441647391__section_lkw_wrp_ywb"/>

## Programmatically Applying States

The personalization engine also provides capabilities to programmatically apply personalization. For example, if there are other personalization functions outside the control, such as a custom button for making a sort function available.

In this case, the `sap.m.p13n.Engine#retrieveState` and `sap.m.p13n.Engine#applyState` methods can be used to modify and persist personalization changes without a personalization UI.

> ### Note:  
> These changes are then also part of the currently selected variant.

```js

onSort: function(oEvt) {

    var oTable = this.byId("persoTable");
    var sAffectedProperty = oEvt.getParameter("column").getSortProperty();
    var sSortOrder = oEvt.getParameter("sortOrder");

    //Apply the state programatically on sorting through the column menu
    //1) Retrieve the current personalization state
    Engine.getInstance().retrieveState(oTable).then(function(oState){

        //2) Modify the existing personalization state
        oState.Sorter.forEach(function(oSorter){
            oSorter.sorted = false;
        });
        oState.Sorter.push({
            key: sAffectedProperty,
            descending:  sSortOrder === tableLibrary.SortOrder.Descending
        });

        //3) Apply the modified personalization state to persist it in the VariantManagement
        Engine.getInstance().applyState(oTable, oState);
    });
}
```

Whenever a value is provided in the `applyState` method, this value is added to the existing state.

The following properties can be used per controller to remove a state entry:

**Controller Types**


<table>
<tr>
<th valign="top">

Registered Controller Type

</th>
<th valign="top">

Key

</th>
<th valign="top">

Type

</th>
</tr>
<tr>
<td valign="top">

`SelectionController` 

</td>
<td valign="top">

`visible` 

</td>
<td valign="top">

`boolean` 

</td>
</tr>
<tr>
<td valign="top">

`SortController` 

</td>
<td valign="top">

`sorted` 

</td>
<td valign="top">

`boolean` 

</td>
</tr>
<tr>
<td valign="top">

`GroupController` 

</td>
<td valign="top">

`grouped` 

</td>
<td valign="top">

`boolean` 

</td>
</tr>
</table>



<a name="loiof28025135e0e4527bdfb7c5441647391__section_t4w_bsp_ywb"/>

## Persistence

Persistence is provided by using the `VariantManagement` control. When using the personalization engine, the engine will ensure that any related SAPUI5 flexibility changes for persisting personalization changes are made. For more information, see [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md).

**Related Information**  


[Personalization Dialog](personalization-dialog-a3c3c5e.md "The sap.m.p13n.Popup control in the sap.m.p13n namespace provides a dialog or popover for personalizing content, for example, of a table, such as selecting columns and adapting their order.")

