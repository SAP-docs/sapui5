<!-- loio4117ef96dc874c5cacf4e8be299a6388 -->

# Smart Table Extensions

Define custom actions for tables by configuring the descriptor and annotation files.



> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



## OnBeforeRebindTableExtension

Use onBeforeRebindTableExtension to define app-specific logic before the table is rendered. This allows you to bind additional parameters from custom filters to the table query.

In the descriptor file, define the sap.ui.controllerExtensions and extend ALP controller `sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage` as shown in this sample.

```
"sap.ui5": {
    "_version": "1.1.0",
	…
	…
"extends": {
		"extensions": {
		"sap.ui.controllerExtensions": {
			"sap.suite.ui.generic.template.AnalyticalListPage.controller.AnalyticalListPage": {
				"controllerName": "sap.poc.ftu.apps.alr.ext.controller.AnalyticalListPageExt",
				"sap.ui.generic.app": {
					…
					…
```

Define the extended behavior in the extension method. This enables ALP to pass the event object for extracting controls and other details.

```

sap.ui.define([], function() {
    return {
        onBeforeRebindTableExtension: function(oEvent) {
            alert('onBeforeRebindTableExtension called!');
        }
    }
})

```



## Table Column Extensions

In the descriptor file, define `sap.ui.viewExtensions` to extend ALP view and to create custom columns. Configure `sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage` to extend the ALP view and `AnalyticalTableColumnsExtension` to extended columns and its fragments \(define within the app namespace\) .

```
"sap.ui5": {
    "_version": "1.1.0",
    "extends": {
        "extensions": {
            "sap.ui.viewExtensions": {
            	"sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage": {
                 		"AnalyticalTableColumnsExtension|CZ_EASILINEITEMS_SADL": { // The second part after the "|" operator is the entity set
                        	"className": "sap.ui.core.Fragment",
                            "fragmentName": "sap.poc.ftu.apps.alr.ext.fragment.CustomColumn", // namespace of the application having the custom fragment name
                            "type": "XML"
                        }
                    }
                } // End of viewExtensions
        }  // End of extensions
    },
        ....
        ....
}
```

Fragment extension code sample:

```
<core:FragmentDefinition xmlns:core="sap.ui.core"
          xmlns="sap.m" xmlns:table="sap.ui.table">
    <table:AnalyticalColumn width="150px" autoResizable="true">
        <Label text="My Extended Column"/> // Column header name
        <table:template>
            <Label text="data"/> // value in each cell of the table
        </table:template>
            <table:customData>
                <core:CustomData key="p13nData"
                      value='\{"columnKey": "Test", "columnIndex" : "1"}' />
            </table:customData>
    </table:AnalyticalColumn>
</core:FragmentDefinition>
```



<a name="loio4117ef96dc874c5cacf4e8be299a6388__section_esz_m1d_ldb"/>

## Navigation Extension for Rows

ALP allows applications to do conditional navigation using the `onListNavigationExtension` API. ALP allows you to decide on the target application based on the context available in the selected table record. You can define different targets for each row in the table. You can also retain the standard ALP navigation mechanism \(inner app navigation to object page or navigation to an external application\) while enabling app-specific custom navigation to selected rows.

> ### Note:  
> We recommend you use the `navigateExternal()` API as shown below to perform any external navigation.

> ### Sample Code:  
> ```
> onListNavigationExtension: function(oEvent) {
>     var oNavigationController = this.extensionAPI.getNavigationController();
>     var oBindingContext = oEvent.getSource().getBindingContext();
>     var oObject = oBindingContext.getObject();
>     // for notebooks we trigger external navigation for all others we use internal navigation
>     if (oObject.CostCenter == "300-1000") {
>         oNavigationController.navigateExternal("ActualCostsKPIDetails");
>     } else {
>         // return false to trigger the default internal navigation
>         return false;
>     }
>     // return true is necessary to prevent further default navigation
>     return true;
>  }
> ```

**Related Information**  


[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

[Defining Custom Actions](defining-custom-actions-c3de5c0.md "Define custom actions by using the extensions in the app descriptor file. You can also define these custom actions so that they appear on charts, tables, or header toolbars based on the filter property value (chart/table/global).")

