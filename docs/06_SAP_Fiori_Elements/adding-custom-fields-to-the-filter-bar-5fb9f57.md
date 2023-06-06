<!-- loio5fb9f57fcf12401bbe39a635e9a32a4e -->

# Adding Custom Fields to the Filter Bar

You can extend the filter bar by using a custom filter field.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



<a name="loio5fb9f57fcf12401bbe39a635e9a32a4e__section_r3m_ynr_jnb"/>

## Additional Features in SAP Fiori Elements for OData V2

To enable this, you need to add a view extension and a corresponding controller extension, as in the following example:

> ### Sample Code:  
> ```
> 
> "extends": {
>                         "extensions": {
>                         "sap.ui.controllerExtensions": {
>                           "sap.suite.ui.generic.template.ListReport.view.ListReport": {
>                             "controllerName": "my_app.ext.controller.ListReportExtension"
>                           }
>                         },
>                 "sap.ui.viewExtensions": { 
>                                         "sap.suite.ui.generic.template.ListReport.view.ListReport": {
>                                     "SmartFilterBarControlConfigurationExtension|<myEntityset>": {
>                                               "className": "sap.ui.core.Fragment",
>                                               "fragmentName": "<myNamespace>.ext.fragment.CustomFilter",
>                                               "type": "XML"
>                                           },
> 
> ```

You can add additional controls to the smart filter bar. The following methods are mandatory:

-   Use `onBeforeRebindTable` to evaluate the settings in the custom fields and to add the corresponding filters to the `bindingParameters` of the table.

-   Use `getCustomAppStateData` to read the state of all custom fields and store that state in the object provided to enable the templates to use it for navigation.

-   Use `restoreCustomAppStateData` to get the custom app state object you provided in `getCustomAppStateData` and set the corresponding values for your custom controls. For example, you call this method after returning from a navigation.


The `onInitSmartFilterBarExtension` method can be used to set the default filter values or to bind a custom control on initialization of filter bar.

The enhanced controller methods each call a corresponding extension method:

-   `onBeforeRebindTableExtension`

-   `getCustomAppStateDataExtension`

-   `restoreCustomAppStateDataExtension`

-   `onInitSmartFilterBarExtension` 


> ### Note:  
> The methods `getCustomAppStateDataExtension` and `restoreCustomAppStateDataExtension` are generated automatically in the controller extension if a custom field is added to the app via the SAP WebIDE wizard. You can change the code in the methods as needed.

> ### Note:  
> The filterable fields are defined by metadata annotations. Use the extension option if the filter attribute can only be calculated by the client.

For an example with step-by-step instructions, see [Adding Filterable Field to the Smart Filter Bar](adding-filterable-field-to-the-smart-filter-bar-3a51582.md).



### Adding Custom Filter Fields to Exported File

When exporting table content which includes filter fields, they are included by default. The custom filters, however, will show the values as passed to the query.

For example, if user-entered value in the filter bar is `Cost=Low`, the filter value passed to the query is `OverallCost<1000`.

To show the filter value as shown in the filter bar, such as `Cost=Low`, you can use the extension method `onBeforeExportTableExtension` in the controller extension. This extension method is supported for exporting tables on analytical list pages, list reports and object pages.

> ### Sample Code:  
> ```
> sap.ui.define([
> 	"sap/ui/export/util/Filter"
> ], function (ExportFilter) {
> 	"use strict";
> 
> 	return {
> 		onInit: function () {
> 			//...
> 		},
> 		/**
> 		 * This extension method modifies the "Cost" filter in the exported file.
> 		 * 
> 		 * Removes the existing filter with label "OverallCost" and value "<=1000",
> 		 * and adds a new filter with label "Cost" and value "Low"
> 		 * 
> 		 * @param oExportParams 
> 		 * @returns 
> 		 */
> 		onBeforeExportTableExtension: function (oExportParams) {
> 			if (!oExportParams.includeFilterSettings) {
> 				return;
> 			}
> 			// Array of filters in the exported file
> 			var aFilterSettings = oExportParams.filterSettings;
> 			// Find the "Cost" combobox in smart filter bar
>             var COST_COMBOBOX_ID = "STTA_MP::sap.suite.ui.generic.template.ListReport.view.ListReport::STTA_C_MP_Product--CustomFilter-OverallCost-combobox";
> 			var oCostCombobox = sap.ui.getCore().byId(COST_COMBOBOX_ID);
> 			
> 			if (oCostCombobox && oCostCombobox.getValue()) {
> 				var oRawValue, sNewCostValue;
> 
> 				for (var i = 0; i < aFilterSettings.length; i++) {
> 					var oCurrentFilter = aFilterSettings[i];
> 					// Find the filter with property "OverallCost"
> 					if (oCurrentFilter.getProperty() === "OverallCost") {
> 						//Store the raw value
> 						oRawValue = oCurrentFilter.rawValues[0];
> 						//Remove the current filter from the filters array
> 						aFilterSettings.splice(i, 1);
> 						break;
> 					}
> 				}
> 				// Derive Cost category (Low / High) from the raw value
> 				if (oRawValue.operator === "<=" && oRawValue.value === "1000") {
> 					sNewCostValue = "Low";
> 				} else {
> 					sNewCostValue = "High";
> 				}
> 
> 				//Create a new export filter with the new label and value
> 				var sProperty = "OverallCost",
> 					sLabel = "Cost",
> 					oNewRawValue = {operator: "==", value: sNewCostValue},
> 					oCostFilter = new ExportFilter(sProperty, oNewRawValue, sLabel);
> 
> 				//Add the updated filter to the filter settings array
> 				aFilterSettings.push(oCostFilter);
> 			}
> 		}
> 	};
> });
> 
> ```



<a name="loio5fb9f57fcf12401bbe39a635e9a32a4e__section_sjl_14r_jnb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can configure the `FilterBar` locally via the section `@com.sap.vocabularies.UI.v1.SelectionFields` in the `controlConfiguration` of the `manifest.json` for the list report target:

> ### Sample Code:  
> ```
>     ...
>             "targets": {
>                 "SalesOrderManageList": {
>                     "type": "Component",
>                     "id": "SalesOrderManageList",
>                     "name": "sap.fe.templates.ListReport",
>                     "options": {
>                         "settings" : {
>                             "entitySet" : "SalesOrderManage",                              
>                             "controlConfiguration" : {
>                                  "@com.sap.vocabularies.UI.v1.SelectionFields" : {
>                                     "navigationProperties": ["_Partner", "_DistributionChannel"],
>                                     "filterFields": {
>                                         "MyCustomRatingThing": {
>                                             "label": "{i18n>CustomRatingFilter}",
>                                             "property": "Rating",
>                                             "template": "SalesOrder.custom.CustomRatingFilter",
>                                             "required": true,
>                                             "position": {
>                                                 "placement": "After",
>                                                 "anchor": "SalesOrder"
>                                             }
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 },
> ...
> ```

You can use the `filterFields` setting to add custom filters. The pattern looks like this:

> ### Sample Code:  
> ```
> "<key>": {
>     "label": <UILabel>,                   // static string or i18n binding, e.g. "MyText" or "{i18n>MyCustomLabel}"
>     "property": <FullPropertyPath>,       // the full path to the property to be filtered, e.g. "Rating" or "_Partner/Rating"
>     "template": <XmlFragmentPath>,        // the path to the Xml Template containing the filter control, e.g. "SalesOrder.custom.CustomRatingFilter"
>     "required": (false) | true,           // filter field is (not) mandatory, i.e. it requires a value
>     "position": {
>         "placement": "Before"|"After",
>         "anchor": "<Key_of_filter_field>"    // for annotation based filterfields, the property is the key, e.g. "SalesOrder", "_Patner::FullName" (slashes are replaced by ::)
>     }
> }
> ```



### Custom Filter Field: Simple Example

The following sample code shows how you can build an XML template for an app called `SalesOrder`:

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:l="sap.ui.layout">
>     <HBox alignItems="Center" core:require="{handler: 'SalesOrder/custom/CustomRating'}" width="100%">
>  
> <!--     // either handle value change in the handler... // -->
> <!--     <RatingIndicator id="MyCustomRatingIndicatorId" value="{= ${filterValues>} ? ${filterValues>}.substring(1) : null }" change="handler.onValueChanged" />-->
>  
> <!--     // ...or bind it directly (and use a filter value type) (recommended) // -->
>         <RatingIndicator id="MyCustomRatingIndicatorId" value="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.Value'}" />
>  
> <!--     // Example for adapting the used operator, using GT (greater than) instead of default EQ -->
> <!--     <RatingIndicator-->
> <!--         id="MyCustomRatingIndicatorId"-->
> <!--         value="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.Value', formatOptions: { operator: 'GT' }}"-->
> <!--     />-->
>  
>         <core:Icon src="sap-icon://reset" press="handler.onReset" class="sapUiSmallMarginBegin" />
>     </HBox>
> </core:FragmentDefinition>
> ```

You can build these custom filter fields for different properties of the `SalesOrder`. To facilitate this, ensure that the key specified in the `manifest.json` is a unique string. The previous sample code shows the usage of custom handlers, that is, handling value changes or handling a button click that resets the filters. Following the naming of this example, these handlers are defined in file `SalesOrder/custom/CustomRating.js`.

> ### Sample Code:  
> ```
> sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
>   "use strict";
>   return {
>     onValueChanged: function(oEvent) {
>         this.setFilterValues("Rating", oEvent.getParameter("value").);
>     },
>     onReset: function(oEvent) {
>         this.setFilterValues("Rating");
>     }
>  };
> });
> ```

The function `setFilterValues` that is used is part of the list report's `ControllerExtensionAPI`.

 For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ListReport.ExtensionAPI/methods/setFilterValues) in the Demo Kit. 



### Custom Filter Field with Custom Filter Operators

If you want to avoid your users having to enter the exact values of a `SalesOrder` property, for example, and instead want to define your own value set to be used for input selection, you can use a custom filter operator:

> ### Sample Code:  
> Custom Rating Filter Operator
> 
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
>     
>         <ComboBox
>             id="MyCustomRatingComboBox"
>             core:require="{handler: 'SalesOrder/custom/CustomRating'}"
>             selectedKey="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.Value', formatOptions: { operator: 'SalesOrder.custom.CustomRating.ratingLevels' }}"
>         >
>             <items>
>                 <core:Item key="Low" text="Low Rating" />
>                 <core:Item key="Medium" text="Medium Rating" />
>                 <core:Item key="High" text="High Rating" />
>             </items>
>         </ComboBox>
> </core:FragmentDefinition>
> ```

In the following example, these custom filter operators are defined in function `ratingLevels()` of file `SalesOrder/custom/CustomRating.js` and returned as custom filter conditions containing the values that you want to define:

> ### Sample Code:  
> Implementation of the Custom Rating Operator
> 
> ```
> sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
>   "use strict";
>   return {
>     ratingLevels: function(sValue) {
>         switch (sValue) {
>             case "Low":
>                 return new Filter({ path: "Rating", operator: FilterOperator.LT, value1: 2 });
>             case "Medium":
>                 return new Filter({
>                     filters: [
>                         new Filter({ path: "Rating", operator: FilterOperator.GT, value1: 1 }),
>                         new Filter({ path: "Rating", operator: FilterOperator.LT, value1: 5 })
>                     ],
>                     and: true
>                 });           
>             case "High":
>                 return new Filter({ path: "Rating", operator: FilterOperator.EQ, value1: 5 });       
>         }
>     }
>  };
> });
> ```

In this function, you define new filter objects for every value \("Low", "Medium", and "High"\). Every value represents a specific key of the combo box used for user selection. The filter operators that you use can include all the filter operators defined in `sap/ui/model/FilterOperator`. For more information, see the [API Reference: `sap.ui.model.FilterOperator`](https://ui5.sap.com/#/api/sap.ui.model.FilterOperator). 

> ### Tip:  
> To use case insensitive filtering, you must also pass the property `caseSensitive = false` to the constructor `new Filter()`.



### Custom Filter Fields Marked as Mandatory

You can also define your custom filter as mandatory by setting it to `required = true` in the `manifest.json`. As a result, the field is automatically marked with an asterisk. If you additionally want a dynamic indicator, such as a red frame around a field, you must implement this in your custom template yourself. The following sample code is an example of a handler that visualizes a red frame around a mandatory input field that is missing a string value:

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
>     <Input
>         core:require="{handler: 'SalesOrder/custom/CustomRating'}"
>         value="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.Value', formatOptions: { operator: 'Contains' }}"
>         valueState="{path: 'filterValues>', formatter: 'handler.onFilterInputFormatValue'}"
>         placeholder="{i18n>customStringFilterPlaceholder}"
>     />
> </core:FragmentDefinition>
> ```

The red frame is switched on or off by the formatter `onFilterInputFormatValue()` in the file `SalesOrder/custom/CustomFilter.js` that updates the value state of the input field:

> ### Sample Code:  
> ```
> sap.ui.define(["sap/ui/core/ValueState"], function (ValueState) {
>     "use strict";
> 
>     return {
>         // this handler needs to be registered in the custom XML's input field
>         onFilterInputFormatValue: function (sValue) {
>             if (!sValue) {
>                 return ValueState.Error;
>             } else {
>                 return ValueState.None;
>             }
>         }
>     };
> });
> ```

You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Custom Filter](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customElementsOverview/customFilterContent).

> ### Note:  
> For custom filters, SAP Fiori elements provides an internal model called `filterValues`, which is bound to each custom filter field and contains the filtered values specific to the filter field.
> 
> To support variant management handling, as well as app state handling, the value-providing property of the filter control that is used should be bound against the relative path "\{filterValues\>\}".

