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
> The filterable fields are defined by metadata annotations. Use the extension option if the filter attribute can only be calculated by the client.

For an example with step-by-step instructions, see [Adding Filterable Field to the Smart Filter Bar](adding-filterable-field-to-the-smart-filter-bar-3a51582.md).



### Adding Custom Filter Fields to Exported File

When exporting table content which includes filter fields, they are included by default. The custom filters, however, show the values as they are passed to the query.

For example, if user-entered value in the filter bar is `Cost=Low`, the filter value passed to the query is `OverallCost<1000`.

To show the filter value as shown in the filter bar, such as `Cost=Low`, you can use the extension method `onBeforeExportTableExtension`

> ### Sample Code:  
> ```
> sap.ui.define([
>     "sap/ui/core/Element",
> >   "sap/ui/export/util/Filter"
> > ], function (Element, ExportFilter) {
> >   "use strict";
> > 
> >   return {
>           onInit: function () {
>                 //...
>            },
>            /**
>             * This extension method modifies the "Cost" filter in the exported file.
>             * 
>             * Removes the existing filter with label "OverallCost" and value "<=1000",
>             * and adds a new filter with label "Cost" and value "Low"
>            * 
>            * @param oExportParams 
>            * @returns 
>            */
>            onBeforeExportTableExtension: function (oExportParams) {
>                if (!oExportParams.includeFilterSettings) {
>                      return;
>                  }
>                // Array of filters in the exported file
>                var aFilterSettings = oExportParams.filterSettings;
>                 // Find the "Cost" combobox in smart filter bar
>            var COST_COMBOBOX_ID = "STTA_MP::sap.suite.ui.generic.template.ListReport.view.ListReport::STTA_C_MP_Product--CustomFilter-OverallCost-combobox";
>                var oCostCombobox = Element.getElementById(COST_COMBOBOX_ID);
>                 
>                if (oCostCombobox && oCostCombobox.getValue()) {
>                     var oRawValue, sNewCostValue;
> 
>                     for (var i = 0; i < aFilterSettings.length; i++) {
>                          var oCurrentFilter = aFilterSettings[i];
>                          // Find the filter with property "OverallCost"
>                          if (oCurrentFilter.getProperty() === "OverallCost") {
>                               //Store the raw value
>                               oRawValue = oCurrentFilter.rawValues[0];
>                              //Remove the current filter from the filters array
>                               aFilterSettings.splice(i, 1);
>                               break;
>                             }
>                      }
>                      // Derive Cost category (Low / High) from the raw value
>                      if (oRawValue.operator === "<=" && oRawValue.value === "1000") {
>                          sNewCostValue = "Low";
>                      } else {
>                         sNewCostValue = "High";
>                      }
> 
>                      //Create a new export filter with the new label and value
>                      var sProperty = "OverallCost",
>                          sLabel = "Cost",
>                          oNewRawValue = {operator: "==", value: sNewCostValue},
>                          oCostFilter = new ExportFilter(sProperty, oNewRawValue, sLabel);
> 
>                     //Add the updated filter to the filter settings array
>                     aFilterSettings.push(oCostFilter);
>                 }
>          }
>      };
> });
>  in the controller extension.
>                     This extension method is supported for exporting tables on analytical list
>                     pages, list reports and object pages.
> 
> ```



<a name="loio5fb9f57fcf12401bbe39a635e9a32a4e__section_sjl_14r_jnb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can configure the `FilterBar` in the controller extension locally. To do so, use the `@com.sap.vocabularies.UI.v1.SelectionFields` section of the `controlConfiguration` in the `manifest.json` file for the list report target.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
>     ...
> "targets": {
>                 "SalesOrderManageList": {
>                     "type": "Component",
>                     "id": "SalesOrderManageList",
>                     "name": "sap.fe.templates.ListReport",
>                     "options": {
>                         "settings" : {
>                             "contextPath" : "/SalesOrderManage",                              
>                             "controlConfiguration" : {
>                                  "@com.sap.vocabularies.UI.v1.SelectionFields" : {
>                                     "navigationProperties": ["_Partner", "_DistributionChannel"],
>                                     "filterFields": {
>                                         "MyCustomRatingThing": {
>                                             "label": "{i18n>CustomRatingFilter}",
>                                             "property": "Rating",
>                                             "availability": "Default",
>                                             "template": "SalesOrder.ext.CustomRatingFilter",
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

You can use the `filterFields` setting to add custom filters as shown in the following sample code:

> ### Sample Code:  
> manifest.json
> 
> ```
> "<filterField>": {
>    "label": , // static string or i18n binding, e.g. "MyText" or "{i18n>MyCustomLabel}"
>    "property": , // the full path to the property to be filtered, e.g. "Rating" or "_Partner/Rating"
>    "template": , // the path to the Xml Template containing the filter control, e.g. "SalesOrder.ext.CustomRatingFilter"
>    "required": false | true, // determines if the filter field is mandatory or not, i.e. if it requires a value for filtering to be triggered; Default value = false.
>    "availability": "Default" | "Hidden" | "Adaptation", //Toggling visibility of the filter field. Default = shown in filter bar; Adaptation = shown in Adapt Filters dialog; Hidden = Neither shown in filter bar nor within Adapt Filters dialog
>    "position": {
>       "placement": "Before"|"After",
>       "anchor": "<Key_of_filter_field>" // for annotation based filter fields, the property is the key, e.g. "SalesOrder", "_Partner::FullName" (slashes are replaced by ::)
>    }
> }
> ```



### Custom Filter Field: Simple Example

The following sample code shows how you can build an XML template for the `SalesOrder` app:

> ### Sample Code:  
> ```xml
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:l="sap.ui.layout">
>     <HBox alignItems="Center" core:require="{handler: 'SalesOrder/ext/CustomRating'}" width="100%">
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

You can build these custom filter fields for different properties of the `SalesOrder`. To facilitate this, ensure that the key specified in the `manifest.json` is a unique string. The previous sample code shows the usage of custom handlers, that is, handling value changes or handling a button click that resets the filters. Following the naming of this example, these handlers are defined in file `SalesOrder/ext/CustomRating.js`.

> ### Sample Code:  
> ```js
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

The used function `setFilterValues` is part of the list report's `ControllerExtensionAPI`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ListReport.ExtensionAPI/methods/setFilterValues) in the Demo Kit. 



### Custom Filter Field: MultiValue Example

When using controls that allow several values to be selected, you need to use a multi-valued field. In this case, each of the possible values provided by the configured control is handled using an operator function. This operator functon is used as a callback that only provides one parameter, including an array of input valus provided by the end user.

> ### Sample Code:  
> ```js
> onMultiValueRatingLevels: function (values) {
>     const filters = [];
>     values.forEach((value) => {
>         switch (value) {
>             case "low":
>                 filters.push(new Filter({ path: "Rating", operator: FilterOperator.EQ, value1: 1 }));
>                 break;
>             case "medium":
>                 filters.push(new Filter({ path: "Rating", operator: FilterOperator.EQ, value1: 2 }));
>                 filters.push(new Filter({ path: "Rating", operator: FilterOperator.EQ, value1: 3 }));
>                 filters.push(new Filter({ path: "Rating", operator: FilterOperator.EQ, value1: 4 }));
>                 break;
>             case "high":
>                 filters.push(new Filter({ path: "Rating", operator: FilterOperator.EQ, value1: 5 }));
>                 break;
>             default:
>                 return null;
>                 }
>             });
>  
>         return new Filter({
>             filters: filters
>     });
> }
> ```

Check out our live example in the flexible programming model explorer at [Custom Filters](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarCustoms).



### Custom Filter Field with Custom Filter Operators

In some cases, you may want to use a custom filter operator. For example, you may want to avoid your users having to enter the exact values of a `SalesOrder` property. Instead, you can define your own value set to be used for input selection.

> ### Sample Code:  
> Custom Rating Filter Operator
> 
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
>     
>         <ComboBox
>             id="MyCustomRatingComboBox"
>             core:require="{handler: 'SalesOrder/ext/CustomRating'}"
>             selectedKey="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.Value', formatOptions: { operator: 'SalesOrder.ext.CustomRating.ratingLevels' }}"
>         >
>             <items>
>                 <core:Item key="Low" text="Low Rating" />
>                 <core:Item key="Medium" text="Medium Rating" />
>                 <core:Item key="High" text="High Rating" />
>             </items>
>         </ComboBox>
> </core:FragmentDefinition>
> ```

In the following sample code, these custom filter operators are defined in the file `SalesOrder/ext/CustomRating.js` using the function `ratingLevels()` and returned as custom filter conditions containing the values that you want to define:

> ### Sample Code:  
> Implementation of the Custom Rating Operator
> 
> ```js
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

> ### Note:  
> You must ensure that the custom operator is added to the `customFilterOperators` property of the `sap.fe` entry in the `manifest.json` file. For instance, the custom operator in the following sample code is `SalesOrder.ext.CustomRating.ratingLevels`, and it must be added to the `manifest.json` file. This is essential to ensure that SAP Fiori elements can handle it correctly.
> 
> > ### Sample Code:  
> > manifest.json
> > 
> > ```
> > "sap.fe": {
> >    "macros": {
> >       "filter": {
> >          "customFilterOperators": [{
> >                     "name": "SalesOrder.ext.CustomRating.ratingLevels"
> >                   }]
> >         }
> >    }
> > }
> > ```



### Custom Filter Fields Marked as Required

You can also define your custom filter as required by setting it to `required = true` in the `manifest.json`. As a result, the field is automatically marked with an asterisk. If you additionally want a dynamic indicator, such as a red frame around a field, you must implement this in your custom template yourself. The following sample code is an example of a handler that visualizes a red frame around a required input field that is missing a string value:

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
>     <Input
>         core:require="{handler: 'SalesOrder/ext/CustomRating'}"
>         value="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.Value', formatOptions: { operator: 'Contains' }}"
>         valueState="{path: 'filterValues>', formatter: 'handler.onFilterInputFormatValue'}"
>         placeholder="{i18n>customStringFilterPlaceholder}"
>     />
> </core:FragmentDefinition>
> ```

The red frame is switched on or off using the formatter `onFilterInputFormatValue()` in the file `SalesOrder/ext/CustomFilter.js` that updates the value state of the input field:

> ### Sample Code:  
> ```js
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
> To support variant management handling and app state handling, the value-providing property of the filter control that is used should be bound against the relative path `{filterValues>}`.



### Custom Filter Fields With Metadata Binding

You can define custom columns with metadata binding. You can also use metadata binding to define the label for custom filters and custom form elements.

> ### Sample Code:  
> ```
> "MyCustomSoldToPartyThing": {
>   "label": "{metaModel>/SalesOrderManage/SoldToParty@com.sap.vocabularies.Common.v1.Label}",
>   "property": "Rating",
>   "template": "SalesOrder.ext.CustomSoldToParty",
>   "required": true,
>   "position": {
>         "placement": "After",
>         "anchor": "MyCustomRatingThing"
>     }
> }
> 
> ```

