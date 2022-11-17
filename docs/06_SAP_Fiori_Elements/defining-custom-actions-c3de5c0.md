<!-- loioc3de5c0b3c5043a4b683151dab526b01 -->

# Defining Custom Actions

Define custom actions by using the extensions in the app descriptor file. You can also define these custom actions so that they appear on charts, tables, or header toolbars based on the filter property value \(chart/table/global\).



> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



> ### Note:  
> To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).

Use the `getSelectedContexts()` API in the `extensionAPI` class to get the selection context. For buttons in the chart toolbar, pass the event ID as a parameter.

The analytical list page supports keyboard shortcut keys for custom actions defined in the manifest for global actions and chart/table toolbar actions.

In your app's `manifest.json` file, under `sap.ui5` → `extends` → `extensions`, you can specify extensions for the `AnalyticalListPage` controllers.

You can specify the following information and extend the manifest files as described here:

****


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `<entity set>` 



</td>
<td valign="top">

Entity set that is displayed on the analytical list page. \(For example `ZCostCenterCostQuery0020`\)

> ### Note:  
> If you use multiple views with different `entity set` properties on the analytical list page, define the `Actions` only for the main `entity set`.



</td>
</tr>
<tr>
<td valign="top">

 `<Action 1>`, `<Action 2>`, etc.



</td>
<td valign="top">

The names of actions.



</td>
</tr>
<tr>
<td valign="top">

 `<id>` 



</td>
<td valign="top">

The ID that is used for the action button.



</td>
</tr>
<tr>
<td valign="top">

 `<button text>` 



</td>
<td valign="top">

The `nullText` that is displayed on the button \(typically a binding to an i18n entry\). For example, `null<button text>nullnull{i18n>MY_BUTTON_TEXT}` 



</td>
</tr>
<tr>
<td valign="top">

 `<handler function>` 



</td>
<td valign="top">

The handler function that is called when the user selects the action button.



</td>
</tr>
<tr>
<td valign="top">

 `<global>` \(required\)



</td>
<td valign="top">

Indicates whether this is a global action. The default value is `false`.

> ### Note:  
> If a determining property is set along with the global property, the action is rendered as a global action since it takes precedence.



</td>
</tr>
<tr>
<td valign="top">

 `<requiresSelection>` \(optional: relevant only for table toolbar actions in the analytical list page\)



</td>
<td valign="top">

Indicates whether the action requires a selection of items. The default value is `true`.



</td>
</tr>
<tr>
<td valign="top">

 `<determining>` \(optional: relevant only for the analytical list page actions\)



</td>
<td valign="top">

Indicates whether the action should be displayed in the footer of the page. The default value is `false`.



</td>
</tr>
<tr>
<td valign="top">

 `<command>` 



</td>
<td valign="top">

Represents the command mapped to a keyboard shortcut defined under `sap.ui.commands`.

> ### Note:  
> If you are adding the command settings to an existing custom action, the `oEvent` parameter that is passed to the event handler of that custom action is changed. It requires code adaptation if the code in the event handler depends on the `oEvent` parameter. For example,  [Ctrl\] + [B\]  



</td>
</tr>
</table>

```

"sap.ui5": {
    "_version": "1.1.0",
    "extends": {
        "extensions": {
		"sap.ui.commands": {
			"sap.suite.generic.template.AnalyticalListPage#sap.suite.generic.template.AnalyticalListPage::ZCostCenterCostQuery0020": {
		"GlobalActionCommand": {
			"shortcut": "Ctrl+B"
		}
	}		
		},
            "sap.ui.controllerExtensions": {
                "sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage": {
                    "controllerName": "my_app.ext.controller.AnalyticalListPageExt",
                        "sap.ui.generic.app": {
                            "ZCostCenterCostQuery0020": {
                            "EntitySet": "ZCostCenterCostQuery0020",
                            "Actions": {
                                "Action A": {
                                    "id": "ActionA",
                                    "text": "{{Action A}}",
                                    "press": "onClickActionA",
                                    "global": true,
 					   "command": "GlobalActionCommand ",

                                },
                                "Action B": {
                                    "id": "ActionB_requiresSelection",
                                    "text": "{{Action B}}",
                                    "press": "onClickActionB",
                                    "filter": "table",
                                    "requiresSelection":true
                                }
                                "Action C: {
                                    "id": "ActionC_requiresSelection",
                                    "text": "{{Action C}}",
                                    "press": "onClickActionC",
                                    "filter": "chart",
                                    "requiresSelection":true
                                }
                                "Action D": {
                                    "id": "ActionD",
                                    "text": "{{Action D}}",
                                    "press": "onClickActionD",
                                    "filter": "table"
                                }
                                "Action E: {
                                    "id": "ActionE",
                                    "text": "{{Action E}}",
                                    "press": "onClickActionE",
                                    "filter": "chart"
                                }
                            } //End of Custom Actions
                        } // End of entity type ZCostCenterCostQuery0020
                    }
                } // End of ALP controllerExtensions       
            } // End of controllerExternsions
        }
    },
        ....,
        ....
}

```

Custom actions defined in the application’s custom controller:

```

sap.ui.define([], function() {
    return {
        onBeforeRebindTableExtension: function(oEvent){
            console.log('onBeforeRebindTableExtension called!');
        },
        onBeforeRebindChartExtension: function(oEvent){
            console.log('onBeforeRebindChartExtension called!');
        },
        onClickActionA() {
            console.log('Global Action Shortcut Key triggers');
            alert('Button A shows up only in table toolbar and is clicked toolbar!');
        },
        onClickActionB() {
            var contexts = this.extensionAPI.getSelectedContexts();
            alert('Button B which shows up in table toolbar only is clicked!');
        },
        onClickActionC() {
            var contexts = this.extensionAPI.getSelectedContexts(oEvent.ID);
            alert('Button C which shows up in chart toolbar only is clicked!');
        },
        onClickActionD() {
            alert('Button D which shows up in table toolbar only is clicked!');
        },
        onClickActionE() {
            alert('Button E which shows up in chart toolbar only is clicked!');
        }
    }
})

```



<a name="loioc3de5c0b3c5043a4b683151dab526b01__section_y52_dwn_j2b"/>

## Invoke Actions

This extension API lets you invoke any back-end action from the controller extensions \(standard SAPUI5 API methods\). For example:

```
onClickActionSTTA_C_SO_SalesOrder_ND1: function(oEvent) {
  var oApi = this.extensionAPI;    
  var mParameters = {
        "SalesOrderID": "500000052"
     };
  oApi.invokeActions("STTA_SALES_ORDER_ND_SRV_01/AFF8CCF97ACESave_stta_i_so_salesorder_nd", [], mParameters);
}

```

**Related Information**  


[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

[Smart Table Extensions](smart-table-extensions-4117ef9.md "Define custom actions for tables by configuring the descriptor and annotation files.")

