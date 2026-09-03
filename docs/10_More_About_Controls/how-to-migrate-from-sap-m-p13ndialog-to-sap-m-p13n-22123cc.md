<!-- loio22123cc5719b4a9b821f3422b43f88d3 -->

# How to migrate from sap.m.P13nDialog to sap.m.p13n

This documentation describes how to migrate from the deprecated components to the modern `sap.m.p13n` implementation. Use this documentation to update personalization dialogs to the current API, which provides improved state management, persistence integration, and `TypeScript` support.

Starting with version 1.98, the main elements of the `sap.m.P13n*` component family began to be deprecated. The remaining elements were deprecated in version 1.124.

> ### Note:  
> This documentation covers the migration of `sap.m.P13nDialog` and its panels. For more information about migrating `sap.m.TablePersoController`, see [Table Personalization \(deprecated\)](table-personalization-deprecated-1c60212.md).



<a name="loio22123cc5719b4a9b821f3422b43f88d3__api-mapping"/>

## API Mapping

In the following table, each deprecated class is mapped to its replacement in the `sap.m.p13n` namespace.


<table>
<tr>
<th valign="top">

Deprecated Class

</th>
<th valign="top">

Deprecated Since

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.m.P13nDialog`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.Popup` \(standalone\) or `sap.m.p13n.Engine` \(with persistence\)

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nPanel`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.m.p13n.BasePanel` \(abstract base, not used directly\)

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nColumnsPanel`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.SelectionPanel` and `sap.m.p13n.SelectionController`

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nSortPanel`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.SortPanel` and `sap.m.p13n.SortController`

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nGroupPanel`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.GroupPanel` and `sap.m.p13n.GroupController`

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nFilterPanel`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.m.p13n.FilterPanel` and `sap.m.p13n.FilterController`

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nDimMeasurePanel`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

No direct equivalent; see the chart personalization section below

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nItem`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.m.p13n.SelectionState` objects

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nColumnsItem`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.m.p13n.SelectionState` objects

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nSortItem`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.m.p13n.SortState` objects

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nGroupItem`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.m.p13n.GroupState` objects

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nFilterItem`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.m.p13n.FilterStateItem` objects

</td>
</tr>
</table>



<a name="loio22123cc5719b4a9b821f3422b43f88d3__migration-checklist"/>

## Migration Checklist

When migrating from `sap.m.P13nDialog` to `sap.m.p13n`, complete the following steps:

1.  **Mark aggregation items with a key**: Add `app:p13nKey` to each `Column` \(or list item\) in your XML view.

2.  **Create a `MetadataHelper`**: Replace `P13nItem` aggregations with a `MetadataHelper` array. Include `key` and `label` for every property. Include `path` as well — it is declared `required` in the type definition. In practice, the runtime only reads it when you call `helper.getPath(key)` to resolve binding paths yourself. For common visibility/sort/group scenarios, the `Engine` does not access it, but include it for type correctness and forward compatibility.

3.  **Register the control with the `Engine`**: Call `Engine.getInstance().register()` with one controller per personalization type \(`SelectionController`, `SortController`, etc.\). Attach the state change handler **before** calling `register()`.

4.  **Replace panel events with a single `StateChange` handler**: Remove all granular event handlers \(`changeColumnsItems`, `addSortItem`, `removeSortItem`, etc.\) and implement one `attachStateChange` handler that applies the full state to your control.

5.  **Clean up in `onExit`**: Call `detachStateChange()` and `deregister()` to prevent memory leaks when the view is destroyed.




<a name="loio22123cc5719b4a9b821f3422b43f88d3__conceptual-differences"/>

## Conceptual Differences

The new `sap.m.p13n` API is not a simple renaming. There are three conceptual shifts that affect how you write personalization code.



### Reactive to Declarative

The old API notified you about every individual change via granular events:

```
// OLD: three separate handlers just for sorting
addSortItem:    function(oEvt) { /* item added */ },
removeSortItem: function(oEvt) { /* item removed */ },
updateSortItem: function(oEvt) { /* item updated */ }
```

The new API delivers a single snapshot of the complete state after every change:

```
// NEW: one handler for everything
Engine.getInstance().attachStateChange(function(oEvt) {
    const oState = oEvt.getParameter("state");
    // oState.Sort = [{ key: "name", descending: false }]   // absent entries = not sorted
    // Apply the full state to your control
});
```



### State in Controls to State as Data

The old API mixed state and UI: `P13nColumnsItem` was an SAPUI5 element \(extending `sap.ui.core.Item`\) used as an aggregation to carry the current selection state.

```
// OLD: state lives in UI5 controls inside an aggregation
columnsItems: [
    new P13nColumnsItem({ columnKey: "name", visible: true,  index: 0 }),
    new P13nColumnsItem({ columnKey: "age",  visible: false, index: 1 })
]
```

The new API separates them clearly: Panels display the UI, the state is a typed plain object \(`sap.m.p13n.SelectionState`\), and no SAPUI5 control instantiation is needed.

```
// NEW: state is a sap.m.p13n.SelectionState object
oSelectionPanel.setP13nData([
    { name: "name", label: "Name", visible: true  },
    { name: "age",  label: "Age",  visible: false }
]);
```



### Manual Dialog Management to Engine Delegation

The old API required you to manage the dialog lifecycle manually by rebuilding aggregations:

-   Create once

-   Open

-   Close

-   Reset


The new `Engine` handles all of this. `Engine.show()` creates and opens the dialog; the `Engine` delegates the dialog lifecycle to its internal `UIManager` — the popup is added as a dependent to the source control and closed on *OK*/*Cancel*/*Escape*, with destruction following the standard SAPUI5-dependent lifecycle. `Engine.reset()` replaces manual aggregation teardown.



### Which Pattern to Choose: Engine or Stand-Alone Popup?

The following table shows when to use which entity.


<table>
<tr>
<th valign="top">

Use Case

</th>
<th valign="top">

Recommended Pattern

</th>
</tr>
<tr>
<td valign="top">

Persist settings across sessions \(variant management, key user adaptation\)

</td>
<td valign="top">

`sap.m.p13n.Engine` with `sap.ui.fl`

</td>
</tr>
<tr>
<td valign="top">

Simple in-session personalization, no `sap.ui.fl` dependency

</td>
<td valign="top">

Stand-alone `sap.m.p13n.Popup`

</td>
</tr>
</table>



<a name="loio22123cc5719b4a9b821f3422b43f88d3__migration-recipes"/>

## Migration Recipes



### Prerequisite: Adding `sap.ui.fl` to Your Project

`sap.m.p13n.Engine` loads `sap.ui.fl` internally at runtime. When using UI5 CLI \(local development with `ui5 serve`\), add `sap.ui.fl` to `ui5.yaml` **if** it is not already in your dependency tree \(for example, transitively via `sap.ui.mdc`, `sap.f`, or `sap.ui.rta`\). Without it, the browser will throw a `script load error` for `sap/ui/fl/library.js`, and the `Engine` will fail.

Add the library to the `framework.libraries` list in your project's `ui5.yaml`:

```
framework:
  name: SAPUI5
  version: "1.149.0"
  libraries:
    - name: sap.m
    - name: sap.ui.core
    - name: sap.ui.fl
```

During development, restart the server after adding it so the tooling can download the package. This step is not needed in productive SAP BTP or SAP Fiori launchpad environments where `sap.ui.fl` is always available.



### Prerequisite: Marking Aggregation Items with a Key

The `SelectionController` identifies items in the target aggregation by reading a `p13nKey` custom data entry from each item. Before using any `Engine`-based recipe, add a `CustomData` element with key `"p13nKey"` to every item in the personalized aggregation.

The best way is the custom namespace shorthand:

```
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:app="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1">

    <Table id="myTable">
        <columns>
            <Column app:p13nKey="firstName_col"><Text text="First Name"/></Column>
            <Column app:p13nKey="lastName_col"><Text text="Last Name"/></Column>
            <Column app:p13nKey="city_col"><Text text="City"/></Column>
            <Column app:p13nKey="size_col" visible="false"><Text text="Size"/></Column>
        </columns>
    </Table>
```

This key must match the `key` values you provide to `MetadataHelper`. Without it, the `SelectionController` cannot map aggregation items to personalization state entries.

> ### Note:  
> The attribute name \(`p13nKey`, `key`, or any other string\) is **arbitrary** — you choose it. What matters is consistency: The name you use in `app:p13nKey="…"` must be exactly what `getKeyForItem` reads via `oColumn.data("p13nKey")`, and the same string must appear as `key` in your `MetadataHelper` entries. The examples in this guide use `p13nKey` throughout.

> ### Remember:  
> If you choose a name other than `p13nKey`, you **must** also provide a `getKeyForItem` callback — the built-in default reads `oItem.data("p13nKey")` specifically \(see `SelectionController._calcPresentState`\). Without the callback, the mapping from aggregation items to metadata keys breaks.

> ### Tip:  
> If certain items should never appear in the personalization dialog but must still be taken into account during delta calculation \(for example, a mandatory first column\), pass them via the `stableKeys` option on `SelectionController`:
> 
> ```
> new SelectionController({
>     control: oTable,
>     targetAggregation: "columns",
>     getKeyForItem: (oCol) => oCol.getVisible() ? oCol.data("p13nKey") : null,
>     stableKeys: ["id_col"]   // always present, never shown in dialog
> })
> ```
> 
> **Edge case:** If a stable item can be invisible at runtime, its key must still be returned by `getKeyForItem` even when hidden — otherwise it won't appear in `getCurrentState()`, and the delta reinsertion logic will silently skip it. For items listed in `stableKeys` that can be invisible, return their key unconditionally inside `getKeyForItem`.
> 
> This is the one exception to the general rule in the [Common Pitfalls](https://help.sap.com/docs/SAPUI5/96880755e4e64fcd96c12694f430fece/22123cc5719b4a9b821f3422b43f88d3.html?state=DRAFT&ai=true#common-pitfalls) section, which says to return `null` for invisible columns. For **stable** columns \(those listed in `stableKeys`\), return their key even when invisible. The `Engine`excludes them from the dialog automatically via `stableKeys`, so there is no risk of them appearing as selected.



### Recipe A: Column Visibility and Order

This is the most common type of migration: Replacing `P13nColumnsPanel` with `SelectionPanel` and `SelectionController` via the `Engine`.

**Before:**

```
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/P13nDialog", "sap/m/P13nColumnsPanel",
    "sap/m/P13nItem", "sap/m/P13nColumnsItem"
], function(Controller, P13nDialog, P13nColumnsPanel, P13nItem, P13nColumnsItem) {

    return Controller.extend("my.app.controller.Main", {

        onInit: function() {
            this._oDialog = new P13nDialog({
                showReset: true,
                panels: [
                    new P13nColumnsPanel({
                        items: [
                            new P13nItem({ columnKey: "name", text: "Name" }),
                            new P13nItem({ columnKey: "city", text: "City" })
                        ],
                        columnsItems: [
                            new P13nColumnsItem({ columnKey: "name", visible: true,  index: 0 }),
                            new P13nColumnsItem({ columnKey: "city", visible: false, index: 1 })
                        ],
                        changeColumnsItems: function(oEvt) {
                            const aItems = oEvt.getParameter("items");
                            aItems.forEach(function(oItem) {
                                const oColumn = oTable.getColumns().find(
                                    (c) => c.data("key") === oItem.columnKey
                                );
                                oColumn.setVisible(oItem.visible);
                            });
                        }
                    })
                ],
                ok:     function() { this._oDialog.close(); }.bind(this),
                cancel: function() { this._oDialog.close(); }.bind(this),
                reset:  function() { /* rebuild aggregations manually */ }
            });
        }

    });
});
```

**After:**

```
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/p13n/Engine",
    "sap/m/p13n/SelectionController",
    "sap/m/p13n/MetadataHelper"
], function(Controller, Engine, SelectionController, MetadataHelper) {
    "use strict";

    return Controller.extend("my.app.controller.Main", {

        onInit: function() {
            const oTable = this.byId("myTable");

            // Attach BEFORE register() — if the control has stored personalization
            // (xConfig CustomData with `modified: true`), the Engine fires StateChange
            // during register(). Attach first to avoid missing that initial replay.
            Engine.getInstance().attachStateChange(this._onStateChange, this);

            Engine.getInstance().register(oTable, {
                helper: new MetadataHelper([
                    { key: "name", label: "Name", path: "name" },
                    { key: "city", label: "City", path: "city" }
                ]),
                controller: {
                    Columns: new SelectionController({
                        control:           oTable,
                        targetAggregation: "columns",
                        getKeyForItem: function(oColumn) {
                            // Fallback: called when oColumn.data("p13nKey") is falsy —
                            // i.e. for invisible columns OR columns with no p13nKey CustomData.
                            // Returning null excludes them from the state.
                            return oColumn.getVisible() ? oColumn.data("p13nKey") : null;
                        }
                    })
                }
            });
        },

        onExit: function() {
            Engine.getInstance().detachStateChange(this._onStateChange, this);
            Engine.getInstance().deregister(this.byId("myTable"));
        },

        _onStateChange: function(oEvt) {
            const oTable = this.byId("myTable");
            const oState = oEvt.getParameter("state");
            // oState always contains the full state of ALL registered controllers.
            if (!oState) { return; }
            if (oState.Columns) {
                const aVisibleKeys = oState.Columns.map((o) => o.key);
                oTable.getColumns().forEach((oCol) => {
                    oCol.setVisible(aVisibleKeys.includes(oCol.data("p13nKey")));
                });
            }
        },

        onOpenDialog: function(oEvt) {
            Engine.getInstance().show(this.byId("myTable"), ["Columns"], {
                contentHeight: "35rem",
                contentWidth:  "30rem",
                source: oEvt.getSource()
            });
        },

        onReset: function() {
            Engine.getInstance().reset(this.byId("myTable"), ["Columns"]);
        }

    });
});
```



### Recipe B: Multiple Panels: Columns, Sort, and Group

**Before:**

```
new P13nDialog({
    panels: [
        new P13nColumnsPanel({
            items: [ /* ... */ ], columnsItems: [ /* ... */ ],
            changeColumnsItems: this._onColumnsChanged.bind(this)
        }),
        new P13nSortPanel({
            items: [ /* ... */ ],
            addSortItem:    this._onSortAdded.bind(this),
            removeSortItem: this._onSortRemoved.bind(this),
            updateSortItem: this._onSortUpdated.bind(this)
        }),
        new P13nGroupPanel({
            items: [ /* ... */ ],
            addGroupItem:    this._onGroupAdded.bind(this),
            removeGroupItem: this._onGroupRemoved.bind(this),
            updateGroupItem: this._onGroupUpdated.bind(this)
        })
    ]
});
```

The granular sort and group handlers received items with `columnKey` and `operation: "Ascending"|"Descending"`:

```
_onSortAdded: function(oEvt) {
    var oItem = oEvt.getParameter("sortItem");
    // oItem.getColumnKey() → "city"
    // oItem.getOperation() → "Descending"
},
_applySort: function() {
    aData.sort(function(a, b) {
        var iResult = a[oSort.columnKey] < b[oSort.columnKey] ? -1 : 1;
        return oSort.operation === "Descending" ? -iResult : iResult;
    });
}
```

> ### Note:  
> **State shape changes after migration.** The new `SortState` and `GroupState` objects use **different property names** from the old `P13nSortItem`/`P13nGroupItem`:
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Old \(`P13nSortItem`\)
> 
> </th>
> <th valign="top">
> 
> New \(`SortState`\)
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> `getColumnKey()` → `"city"`
> 
> </td>
> <td valign="top">
> 
> `oSort.key` → `"city"`
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> `getOperation()` → `"Descending"`
> 
> </td>
> <td valign="top">
> 
> `oSort.descending` → `true`
> 
> </td>
> </tr>
> </table>
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Old \(`P13nGroupItem`\)
> 
> </th>
> <th valign="top">
> 
> New \(`GroupState`\)
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> `getColumnKey()` → `"city"`
> 
> </td>
> <td valign="top">
> 
> `oGroup.key` → `"city"`
> 
> </td>
> </tr>
> </table>
> 
> Update any existing `_applySorting` or `_applyGrouping` implementations to use the new property names.

**After:**

```
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/p13n/Engine",
    "sap/m/p13n/SelectionController",
    "sap/m/p13n/SortController",
    "sap/m/p13n/GroupController",
    "sap/m/p13n/MetadataHelper"
], function(Controller, Engine, SelectionController, SortController,
            GroupController, MetadataHelper) {
    "use strict";

    return Controller.extend("my.app.controller.Main", {

        onInit: function() {
            const oTable = this.byId("myTable");

            Engine.getInstance().attachStateChange(this._onStateChange, this);

            Engine.getInstance().register(oTable, {
                helper: new MetadataHelper([
                    { key: "name", label: "Name", path: "name" },
                    { key: "age",  label: "Age",  path: "age"  },
                    { key: "city", label: "City", path: "city" }
                ]),
                controller: {
                    Columns: new SelectionController({
                        control: oTable, targetAggregation: "columns",
                        getKeyForItem: (oCol) => oCol.getVisible() ? oCol.data("p13nKey") : null
                    }),
                    Sort:    new SortController({  control: oTable }),
                    Group:   new GroupController({ control: oTable })
                }
            });
        },

        onExit: function() {
            Engine.getInstance().detachStateChange(this._onStateChange, this);
            Engine.getInstance().deregister(this.byId("myTable"));
        },

        // oState always contains the full state of ALL registered controllers,
        // regardless of which one the user actually changed.
        _onStateChange: function(oEvt) {
            const oState = oEvt.getParameter("state");
            if (oState.Columns) { this._applyColumnVisibility(oState.Columns); }
            if (oState.Sort)    { this._applySorting(oState.Sort); }
            if (oState.Group)   { this._applyGrouping(oState.Group); }
        },

        // oState.Columns is a sap.m.p13n.SelectionState array — one entry per
        // visible column in display order. Columns absent from the array are hidden.
        _applyColumnVisibility: function(aColumns) {
            const oTable = this.byId("myTable");
            const aVisibleKeys = aColumns.map((o) => o.key);
            oTable.getColumns().forEach((oCol) => {
                oCol.setVisible(aVisibleKeys.includes(oCol.data("p13nKey")));
            });
        },

        // oState.Sort is a sap.m.p13n.SortState array — one entry per active
        // sorter in priority order. Apply as a multi-level sort to the model data.
        _applySorting: function(aSortState) {
            const oModel = this.getView().getModel();
            const aData  = oModel.getProperty("/items").slice();
            aData.sort(function(a, b) {
                for (const oSort of aSortState) {
                    const vA = a[oSort.key];
                    const vB = b[oSort.key];
                    const iCmp = vA < vB ? -1 : vA > vB ? 1 : 0;
                    const iResult = oSort.descending ? -iCmp : iCmp;
                    if (iResult !== 0) { return iResult; }
                }
                return 0;
            });
            oModel.setProperty("/items", aData);
        },

        // oState.Group is a sap.m.p13n.GroupState array. sap.m.Table does not
        // have built-in grouping — implement by sorting the data by the group key
        // so rows with the same value appear together.
        _applyGrouping: function(aGroupState) {
            if (!aGroupState || aGroupState.length === 0) { return; }
            const oModel = this.getView().getModel();
            const aData  = oModel.getProperty("/items").slice();
            aData.sort(function(a, b) {
                for (const oGroup of aGroupState) {
                    const vA = a[oGroup.key];
                    const vB = b[oGroup.key];
                    const iCmp = vA < vB ? -1 : vA > vB ? 1 : 0;
                    if (iCmp !== 0) { return iCmp; }
                }
                return 0;
            });
            oModel.setProperty("/items", aData);
        },

        onOpenDialog: function() {
            Engine.getInstance().show(this.byId("myTable"), ["Columns", "Sort", "Group"]);
        }

    });
});
```

> ### Note:  
> `sap.m.Table` has no built-in grouping renderer. The `_applyGrouping` implementation above sorts the model data by the group key so rows with equal values appear together, a common approach for flat tables. Controls that natively support grouping \(for example, `sap.ui.table.Table`\) can use `Sorter` with a `vGroup` function instead.



### Recipe C: Stand-Alone Popup \(Without Engine / `sap.ui.fl`\)

Use this pattern when you manage the state yourself and do not need SAPUI5 flexibility persistence.

**After \(XML view\):**

```
<p13n:Popup id="myPopup"
    xmlns:p13n="sap.m.p13n"
    title="Table Settings"
    warningText="Reset all changes?"
    reset=".onReset"
    close=".onClose">
    <p13n:panels>
        <p13n:SelectionPanel id="colPanel"  title="Columns" enableCount="true" showHeader="true"/>
        <p13n:SortPanel      id="sortPanel" title="Sort"/>
    </p13n:panels>
</p13n:Popup>
```

**After \(controller\):**

> ### Note:  
> `SelectionPanel.setP13nData()` accepts both `name` \(legacy alias, deprecated as of version 1.124\) and `key`. The examples below use `name` to illustrate the direct mapping from `P13nColumnsItem.columnKey`, but for new code, use `key` consistently — as shown in recipes A and B.

```
onOpenDialog: function(oEvt) {
    this.byId("colPanel").setP13nData([
        { name: "name", label: "Name", visible: true  },
        { name: "city", label: "City", visible: false }
    ]);
    this.byId("myPopup").open(oEvt.getSource());
},

// close event: reason is "Ok", "Cancel", or "Escape"
onClose: function(oEvt) {
    if (oEvt.getParameter("reason") === "Ok") {
        const aColumns = this.byId("colPanel").getP13nData();
        this._applyState(aColumns);
    }
},

onReset: function() {
    this.byId("colPanel").setP13nData(this._initialColumns);
}
```

> ### Note:  
> Unlike the `Engine` pattern, the stand-alone `Popup` does not automatically apply or persist changes. You must read the state with `getP13nData()` in the `close` handler and apply it to your control yourself.



### Recipe D: Filter Conditions

The filter migration is the most complex because the old and new APIs use fundamentally different approaches. The old `P13nFilterPanel` owned the filter input UI internally. The new `FilterPanel` requires you to provide an `itemFactory` function that returns the input control for each filterable property — one `MultiInput` \(or similar\) per filterable column. The snippet below shows the `FilterController` configuration; connect the resulting state to your binding via `oState.Filter` in `_onStateChange`, using the same `key → condition[]` map shape shown in the [State Object Reference](https://help.sap.com/docs/SAPUI5/96880755e4e64fcd96c12694f430fece/22123cc5719b4a9b821f3422b43f88d3.html?state=DRAFT&ai=true#state-object-reference) section.

**Before:**

```
new P13nDialog({
    panels: [
        new P13nFilterPanel({
            items: [
                new P13nItem({ columnKey: "city",    text: "City" }),
                new P13nItem({ columnKey: "country", text: "Country" })
            ],
            filterItems: [
                new P13nFilterItem({
                    columnKey: "city",
                    operation: sap.m.P13nConditionOperation.EQ,
                    value1:    "Berlin",
                    exclude:   false
                })
            ],
            addFilterItem: function(oEvt) {
                var oData = oEvt.getParameter("filterItemData");
                // oData.getColumnKey(), oData.getOperation(),
                // oData.getValue1(), oData.getValue2(), oData.getExclude()
            },
            removeFilterItem: function(oEvt) {
                // oEvt.getParameter("key"), oEvt.getParameter("index")
            },
            updateFilterItem: function(oEvt) {
                var oData = oEvt.getParameter("filterItemData");
                // same shape as addFilterItem
            }
        })
    ]
});
```

**After:**

```
new FilterController({
    control: oTable,
    itemFactory: function(oItem, oFilterPanel) {
        const oP13nItem = oFilterPanel.getItemByKey(oItem.name);
        return new MultiInput({
            tokens: oP13nItem.conditions.map((oCond) =>
                new Token({ text: oCond.values[0] })
            ),
            tokenUpdate: function(oEvt) {
                oEvt.getParameter("addedTokens").forEach((oToken) => {
                    oP13nItem.conditions.push({ operator: "EQ", values: [oToken.getText()] });
                });
                oEvt.getParameter("removedTokens").forEach((oToken) => {
                    const idx = oP13nItem.conditions.findIndex(
                        (c) => c.values[0] === oToken.getText()
                    );
                    if (idx > -1) { oP13nItem.conditions.splice(idx, 1); }
                });
                oFilterPanel.setP13nData(oFilterPanel.getP13nData().map((oFilterItem) =>
                    oFilterItem.name === oP13nItem.name ? oP13nItem : oFilterItem
                ));
            }
        });
    }
})
```

For a complete working example, see the `sap.m.sample.p13n.EngineCustomFilters` sample app in the Demo Kit.



<a name="loio22123cc5719b4a9b821f3422b43f88d3__state-object-reference"/>

## State Object Reference

The new API represents the personalization state as typed plain JavaScript objects and without SAPUI5 control instances. Each controller defines its own `@typedef` in the `sap.m.p13n` namespace. The `typedefs` are documented in the respective controller class in the API Reference, not as stand-alone entries.

```
// sap.m.p13n.SelectionState — one entry per visible item, in display order
// Full shape: { key: string, visible?: boolean, index?: number }
// API Reference: sap.m.p13n.SelectionController
[{ key: "name" }, { key: "city" }]

// sap.m.p13n.SortState — only active sorters appear; absent entries = not sorted
// Note: `sorted` is only used as INPUT to applyState() to remove a sorter — it is
// not returned by getCurrentState() or the StateChange event.
// API Reference: sap.m.p13n.SortController
[{ key: "name", descending: false }]

// sap.m.p13n.GroupState — only active groups appear; absent entries = not grouped
// API Reference: sap.m.p13n.GroupController
[{ key: "city" }]

// sap.m.p13n.FilterState — map of property key to condition array
// API Reference: sap.m.p13n.FilterController
{ "city_col": [{ operator: "EQ", values: ["Berlin"] }] }
```



<a name="loio22123cc5719b4a9b821f3422b43f88d3__reset-and-persistence"/>

## Reset and Persistence



### Reset

Replace each manual aggregation teardown with a single `Engine` call:

```
// OLD: destroy and rebuild P13nXxxItem aggregations
oColumnsPanel.destroyColumnsItems();
aInitialState.forEach((o) => oColumnsPanel.addColumnsItem(new P13nColumnsItem(o)));

// NEW: one call resets all specified controllers
Engine.getInstance().reset(oTable, ["Columns", "Sort", "Group"]);
```



### Persistence Modes

The `Engine` automatically detects the persistence configuration from the control's view tree:


<table>
<tr>
<th valign="top">

Scenario

</th>
<th valign="top">

Behavior

</th>
</tr>
<tr>
<td valign="top">

No `PersistenceProvider` or `VariantManagement` in the view

</td>
<td valign="top">

Changes are transient \(lost on reload\)

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.fl.variants.VariantManagement` wraps the control

</td>
<td valign="top">

Changes are stored in the active variant

</td>
</tr>
<tr>
<td valign="top">

`sap.m.p13n.PersistenceProvider` with `mode="Global"`

</td>
<td valign="top">

Changes are saved immediately to the back end

</td>
</tr>
</table>

To configure a persistence mode explicitly, place a `PersistenceProvider` in the view tree:

```
<p13n:PersistenceProvider for="myTable" mode="Global" xmlns:p13n="sap.m.p13n"/>
<Table id="myTable" .../>
```



<a name="loio22123cc5719b4a9b821f3422b43f88d3__what-has-no-direct-equivalent"/>

## Concepts without a Direct Equivalent



### Chart Personalization \(`P13nDimMeasurePanel`\)

`sap.m.P13nDimMeasurePanel` \(deprecated in 1.120\) has no replacement in the `sap.m.p13n` namespace. For chart dimension and measure personalization, use the controls provided by `sap.chart` or the `sap.ui.mdc.Chart` component.



### Validation Hooks \(`validationExecutor`, `onBeforeNavigationFrom`\)

The old API provided panel-level validation via `onBeforeNavigationFrom()` and dialog-level validation via `validationExecutor`. There are the following alternatives in the new API:

-   Show a `sap.m.MessageStrip` in the panel via `panel.setMessageStrip()`.

-   Implement `validateState(oState, sKey)` in your control. The `Engine` calls this method automatically after every `change` event.




<a name="loio22123cc5719b4a9b821f3422b43f88d3__common-pitfalls"/>

## Common Pitfalls



### `getKeyForItem` Ignoring Column Visibility

`_calcPresentState()` falls back to `getKeyForItem` whenever `sKey` is falsy — this covers **two** cases:

-   The column is invisible \(`getVisible()` returns `false`\)
-   The column is visible but has no `p13nKey` `CustomData` set

If `getKeyForItem` returns a key for those items, they are included in `getCurrentState()` and appear checked in the personalization dialog even though they are hidden in the view.

```
// WRONG — returns a key for invisible columns, so they appear as selected in the dialog
getKeyForItem: function(oColumn) { return oColumn.data("p13nKey"); }

// CORRECT
getKeyForItem: function(oColumn) {
    return oColumn.getVisible() ? oColumn.data("p13nKey") : null;
}
```



### Attaching `StateChange` After `register()`

If `attachStateChange` is called after `register()`, and the control has stored personalization \(`xConfig` `CustomData` with `modified: true`\), the `Engine` fires `StateChange` during `register()` — before your handler is attached. New controls with no prior personalization are not affected, but attach first anyway to avoid subtle ordering bugs when personalization is added later.

```
// WRONG
Engine.getInstance().register(oTable, { ... });
Engine.getInstance().attachStateChange(this._onStateChange, this); // too late

// CORRECT
Engine.getInstance().attachStateChange(this._onStateChange, this);
Engine.getInstance().register(oTable, { ... });
```



### Missing Cleanup in `onExit`

`Engine` is a global singleton. Without cleanup, the state change handler fires for a destroyed controller.

```
// WRONG
onExit: function() { }

// CORRECT
onExit: function() {
    Engine.getInstance().detachStateChange(this._onStateChange, this);
    Engine.getInstance().deregister(this.byId("myTable"));
}
```



<a name="loio22123cc5719b4a9b821f3422b43f88d3__typescript"/>

## `TypeScript`

The recipes in this guide use JavaScript. In a `TypeScript` project, only two things change: Imports and event handler types. The `Engine` API itself is identical.

> ### Note:  
> `TypeScript` types for the `p13n.Engine` are available since UI5 **1.140** and are correctly typed \(as a proper `sap/ui/base/Event` subclass\) since SAPUI5 **1.149**. The deprecated `sap.m.P13nDialog` family never had `TypeScript` support.



### Imports

Replace the `sap.ui.define` AMD block with ES6 imports:

```
import Controller from "sap/ui/core/mvc/Controller";
import Engine from "sap/m/p13n/Engine";
import type { Engine$StateChangeEvent } from "sap/m/p13n/Engine";
import SelectionController from "sap/m/p13n/SelectionController";
import SortController from "sap/m/p13n/SortController";
import GroupController from "sap/m/p13n/GroupController";
import MetadataHelper from "sap/m/p13n/MetadataHelper";
```



### Event Handler Type

Type the `attachStateChange` handler with `Engine$StateChangeEvent`:

```
Engine.getInstance().attachStateChange(this._onStateChange, this);

_onStateChange(oEvt: Engine$StateChangeEvent): void {
    const oState = oEvt.getParameter("state");
    if (oState?.Columns) { /* ... */ }
}
```

> ### Caution:  
> **Type Definition Mismatch in @sapui5/ts-types-esm in 1.148 or lower versions**: In `@sapui5/ts-types-esm` up to and including version 1.148, `Engine$StateChangeEvent` is typed as a **plain object** with a `.state` property, not as a subclass of `sap/ui/base/Event`. Therefore, the following applies:
> 
> -   `oEvt.getParameter("state")` causes a `TypeScript` compile error on the event parameter.
> 
> -   `oEvt.state` compiles correctly, but **does not work at runtime**. The `Engine` passes a real SAPUI5 `Event` object where `.state` is `undefined`.
> 
> 
> The workaround is to define the handler as an arrow class field and cast the event:
> 
> ```
> // Arrow field keeps `this` bound and gives a stable reference for detachStateChange
> private readonly _onStateChange = (oEvt: Engine$StateChangeEvent): void => {
>     // Cast needed: ts-types-esm types the event as a plain object,
>     // but the Engine passes a real UI5 Event at runtime.
>     const oState = (oEvt as unknown as { getParameter(s: string): unknown })
>         .getParameter("state") as {
>             Columns?: Array<{ key: string }>;
>             Sort?:    Engine$StateChangeEventSortState[];
>             Group?:   Engine$StateChangeEventGroupState[];
>         };
>     if (!oState) { return; }
>     // ...
> };
> ```
> 
> This issue is resolved in `@sapui5/ts-types-esm` 1.149 and higher versions, where `Engine$StateChangeEvent` correctly extends the base `Event` type.



### State Types \(optional\)

The state objects have matching `TypeScript` types derived from their JSDoc `@typedef` definitions:

```
import type { SelectionState }               from "sap/m/p13n/SelectionController";
import type { SortState }                    from "sap/m/p13n/SortController";
import type { GroupState }                   from "sap/m/p13n/GroupController";
import type { FilterState, FilterStateItem } from "sap/m/p13n/FilterController";
```

Everything else — `register()`, `MetadataHelper`, `show()`, `reset()`, `deregister()` — is identical to the JavaScript recipes.

**Related Information**  


[Enablement of Personalization \(With Variant Management\)](enablement-of-personalization-with-variant-management-f280251.md "The simple concept of personalization allows the user to personalize a control and to persist these settings using a VariantManagement control.")

[Personalization Dialog](personalization-dialog-a3c3c5e.md "The sap.m.p13n.Popup control in the sap.m.p13n namespace provides a dialog or popover for personalizing content, for example, of a table, such as selecting columns and adapting their order.")

