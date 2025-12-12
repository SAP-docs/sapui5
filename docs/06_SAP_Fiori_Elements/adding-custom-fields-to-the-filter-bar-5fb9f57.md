<!-- loio5fb9f57fcf12401bbe39a635e9a32a4e -->

# Adding Custom Fields to the Filter Bar

You can extend the filter bar by using a custom filter field.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



<a name="loio5fb9f57fcf12401bbe39a635e9a32a4e__section_r3m_ynr_jnb"/>

## Additional Features in SAP Fiori Elements for OData V2

To enable this, add a view extension along with the corresponding controller extension, as shown in the following example:

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

-   `onBeforeRebindTable`: To evaluate the settings in the custom fields and add the corresponding filters to the `bindingParameters` of the table.

-   `getCustomAppStateData`: To read the state of all custom fields and store that state in the object provided, so that the template can use it during navigation.

-   `restoreCustomAppStateData`: To retrieve the custom app state object stored in `getCustomAppStateData` and apply the corresponding values for your custom controls. For example, you call this method after returning from a navigation.


The `onInitSmartFilterBarExtension` method can be used to set the default filter values or to bind a custom control during the initialization of the filter bar.

Each enhanced controller methods call its corresponding extension method:

-   `onBeforeRebindTableExtension`

-   `getCustomAppStateDataExtension`

-   `restoreCustomAppStateDataExtension`

-   `onInitSmartFilterBarExtension` 


> ### Note:  
> Filterable fields are defined using metadata annotations. Use the extension option when the filter attribute can only be determined by the client.

For an example with detailed instructions, see [Adding Filterable Field to the Smart Filter Bar](adding-filterable-field-to-the-smart-filter-bar-3a51582.md).



### Adding Custom Filter Fields to Exported File

When a table is exported, including the filter fields, the filter values are included by default. The exported values match those shown in the filter bar.

For custom filters, the exported spreadsheet shows the filter property and condition as passed to the query. For example, if the user selects *Cost = Low* in the filter bar dropdown, the filter passed to the query can be `OverallCost < 1000`. This value appears in the exported file. To show the filter as displayed on the filter bar, you can use the `onBeforeExportTableExtension` extension method to modify the export content. This method supports table export on analytical list pages, list reports, and object pages.

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
>                if (oCostCombobox && oCostCombobox.getValue()) {
>                     var oRawValue, sNewCostValue;
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

You can configure custom filters to use either predefined operators or custom-defined operators. The following properties are available for configuring custom filters using the `manifest.json` file:

> ### Sample Code:  
> ```
> "<Key_of_filter_field>": {
>   // Must be the exact technical name of the underlying filter field if the custom filter uses predefined operators.
>   // For a custom filter using custom operators, this can be any unique key in the manifest.json file.
>  
>   "label": "<Static text or i18n binding>",
>   // Label displayed in the UI. Can be a static string (e.g., "MyText") or an i18n binding (e.g., "{i18n>MyCustomLabel}").
>  
>   "property": "<Path to filter property>",
>   // Only required for custom filters using custom operators.
>   // Specifies the full path to the property to be filtered.
>   // Example: "Rating"
>  
>   "template": "<Path to XML template>",
>   // Path to the XML fragment that contains the filter control.
>   // Example: "SalesOrder.ext.CustomRatingFilter".
>  
>   "required": true | false,
>   // Defines whether the filter field is mandatory.
>   // Default: false.
>  
>   "availability": "Default" | "Hidden" | "Adaptation",
>   // Determines the visibility of the filter field:
>   // - Default: shown in filter bar.
>   // - Adaptation: available only via the Adapt Filters dialog.
>   // - Hidden: not visible anywhere.
>  
>   "position": {
>     "placement": "Before" | "After",
>     "anchor": "<Key_of_filter_field>"
>     // Defines the position of the custom filter field relative to another field.
>     // For annotation-based filters, use the annotation key, e.g. "SalesOrder"
>   }
> }
> 
> ```



### The `filterValues` Model

For custom filters, SAP Fiori elements provides an internal model called `filterValues`. This model is bound to each custom filter field and stores the entered values.

> ### Note:  
> To support variant management handling and app state handling, bind the value-providing property of the filter control to the relative path `{filterValues>}`.



### Custom Filters with Predefined Operators

Using predefined operators with custom filters is suitable when you require a custom visualization of the filter, but the filter logic remains similar to that of standard filter fields and operates on a single property from the entity.

> ### Note:  
> The `key` property of the custom filter must match the name of the metadata property for which the filter is defined. In such cases, the `property` field must not be specified.

**Custom Filter Field: Simple Example**

The following code sample shows how to define a custom filter field for the metadata property `Rating`:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> ...
> "targets": {
>     "SalesOrderManageList": {
>         "type": "Component",
>         "id": "SalesOrderManageList",
>         "name": "sap.fe.templates.ListReport",
>         "options": {
>             "settings": {
>                 "contextPath": "/SalesOrderManage",
>                 "controlConfiguration": {
>                     "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                         "navigationProperties": ["_Partner", "_DistributionChannel"],
>                         "filterFields": {
>                             "Rating": {
>                                 "label": "{i18n>CustomRatingFilter}",
>                                 "availability": "Default",
>                                 "template": "<ProjectFolder>.ext.CustomRatingFilter",
>                                 "required": true,
>                                 "position": {
>                                     "placement": "After",
>                                     "anchor": "SalesOrder"
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> },
> ...
> 
> ```

The `template` property points to the custom fragment definition located at `<ProjectFolder>.ext.CustomRatingFilter`. The custom fragment can be defined as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:l="sap.ui.layout">
>     <HBox alignItems="Center" width="100%">
> 
> <!--     // ...bind it directly (and use a filter value type) (recommended) // -->
>          <RatingIndicator id="MyCustomRatingIndicatorId"
>              core:require="{
>                  Value: 'sap/fe/macros/filter/type/Value'
>              }"
>              value="{path: 'filterValues>', type: 'Value'}"
>          />
> 
> <!--     // Example for adapting the used operator, using GT (greater than) instead of default EQ -->
> <!--     <RatingIndicator-->
> <!--         id="MyCustomRatingIndicatorId"--> 
> <!--         core:require="{-->
> <!--             Value: 'sap/fe/macros/filter/type/Value'-->
> <!--         }"-->
> <!--         value="{path: 'filterValues>', type: 'Value', formatOptions: { operator: 'GT' }}"-->
> <!--     />-->
> 
>     </HBox>
> </core:FragmentDefinition>
> 
> ```

To track filter values, the value-holding property of the filter control must be bound to the `filterValues` model.

In the above example, no operator is explicitly specified, so the default operator `EQ` \(equals\) is used. However, you can configure a different operator, for example, the code in the comments includes the use of the `GT` \(greater than\) operator. In this case, the filters used are generated by SAP Fiori elements and invoked as part of the call.

**Custom Filter Field: Handling Filters on Value Change**

In addition to binding values directly, you can apply filters dynamically when the value of the custom filter field changes. To do so, use the `setFilterValues` extension API. For information about `setFilterValues`, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ListReport.ExtensionAPI%23methods/setFilterValues).

For example, consider a custom filter field with a rating indicator control, as defined in the `manifest.json` file \(see the **Custom Filter Field: Simple Example** sample code above\). The `template` property must point to a custom fragment that contains a control whose change event is used for filtering. This change event is typically invoked when the user changes the value in the custom control.

The following XML sample code shows how to handle filtering using the change event for the rating indicator control:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:l="sap.ui.layout">
>     <HBox alignItems="Center" core:require="{handler: <ProjectFolder>/ext/CustomRating'}" width="100%">
>  
>         <RatingIndicator id="MyCustomRatingIndicatorId" 
>             value="{= ${filterValues>} ? ${filterValues>}.substring(1) : null }" 
>             change="handler.onValueChanged" /> 
> 
>         <core:Icon src="sap-icon://reset" 
>             press="handler.onReset" 
>             class="sapUiSmallMarginBegin" />
>             
>     </HBox>
> </core:FragmentDefinition>
> 
> ```

The following sample code defines the event handlers for the custom filter field:

> ### Sample Code:  
> ```
> sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
>   "use strict";
>   return {
>     onValueChanged: function(oEvent) {
>         this.setFilterValues("Rating", oEvent.getParameter("value"));
>     },
>     onReset: function(oEvent) {
>         this.setFilterValues("Rating");
>     }
>   };
> });
> 
> ```



### Custom Filters with Custom Operators

Custom operators are recommended when the filter logic involves complex operations or spans multiple fields. For example:

-   A complex condition: `Product startsWith "IN_"` and `Product contains "plug"`.

-   A multi-field condition: `{Product = "abc" or (Product = "def" and Plant = "456")}`.


> ### Note:  
> When using a custom filter with custom operators, the `key` must be a unique string. Since the custom operator is implemented by application developers, the `property` must be specified so that SAP Fiori elements can identify which properties are involved. This information is used in various use cases within SAP Fiori elements.

The following sample code defines a custom filter using a custom operator:

> ### Sample Code:  
> ```
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
>                                         "Rating": {
>                                             "label": "{i18n>CustomRatingFilter}",
>                                             "availability": "Default",
>                                             "template": "<ProjectFolder>.ext.CustomRatingFilter",
>                                             "property": "Rating",
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
> 
> ```

> ### Note:  
> The `property` property must be specified in the `manifest.json` file. It must point to the metadata property for which the custom operator is implemented.

> ### Restriction:  
> If the custom operator contains multiple properties, you can specify only one property in the `manifest.json` file. This limitation can result in unexpected behavior when `property` is used to identify the relevant field. For example, in a multi-view list report where each tab is bound to a different entity.

The `template` property points to the custom fragment definition, located at `<ProjectFolder>.ext.CustomRatingFilter`. The custom fragment is defined as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
>   <MultiComboBox
>     width="100%"
>     selectedKeys="{path: 'filterValues>', type: 'sap.fe.macros.filter.type.MultiValue', formatOptions: { operator: 'SalesOrder.ext.onMultiValueRatingLevels' }}"
>   >
>     <layoutData>
>       <FlexItemData growFactor="1" />
>     </layoutData>
>     <items>
>       <core:Item key="low" text="low" />
>       <core:Item key="medium" text="medium" />
>       <core:Item key="high" text="high" />
>     </items>
>   </MultiComboBox>
> </core:FragmentDefinition>
> 
> 
> ```

The `onMultiValueRatingLevels` operator is implemented as a callback function. This function provides a single parameter, including an array of input values provided by the end user.

For any custom operators, application developers must ensure they are added to the `customFilterOperators` property under the `sap.fe` section of the `manifest.json` file. This step is essential to ensure that SAP Fiori elements can recognize and handle the custom operator correctly.

In the following sample code, the custom operator `'SalesOrder.ext.CustomRating.onMultiValueRatingLevels'`is added to the `customFilterOperators` array under the `sap.fe` section:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.fe": {
>     "macros": 
>         "filter": {          
>             "customFilterOperators": [{                     
>                 "name": "SalesOrder.ext.CustomRating.onMultiValueRatingLevels"
>               }]
>         }
>    }
> }
> 
> ```

The following sample code shows using the custom operator `onMultiValueRatingLevels`:

> ### Sample Code:  
> ```
> onMultiValueRatingLevels: function (values) {
>     const filters = [];
> 
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
>         }
>     });
> 
>     return new Filter({
>         filters: filters
>     });
> }
> 
> ```

This custom operator combines multiple filters using a logical `OR`, when the user selects the `medium` value, for example. Such behavior isn't possible with a predefined operator. Similarly, this approach allows you to create filters involving any number of properties, as long as the properties are valid metadata fields. These filters can be defined using model filters. For more information, see `sap.ui.model.Filter` API, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.Filter%23overview).

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Filter Bar - Extensions - Custom Filters](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarCustom).



### Custom Filter Fields Marked as Required

You can also define your custom filter as required by setting it to `required = true` in the `manifest.json`. As a result, the field is automatically marked with an asterisk. If you additionally want a dynamic indicator, such as a red frame around a field, you must implement this in your custom template yourself. The following sample code is an example of a handler that visualizes a red frame around a required input field that is missing a string value:

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m">
>     <Input
>         core:require="{
>             handler: 'SalesOrder/ext/CustomRating',
>             Value: 'sap/fe/macros/filter/type/Value'
>         }"
>         value="{path: 'filterValues>', type: 'Value', formatOptions: { operator: 'Contains' }}"
>         valueState="{path: 'filterValues>', formatter: 'handler.onFilterInputFormatValue'}"
>         placeholder="{i18n>customStringFilterPlaceholder}"
>     />
> </core:FragmentDefinition>
> ```

The red frame is switched on or off using the `onFilterInputFormatValue()` formatter in the `SalesOrder/ext/CustomFilter.js` file that updates the value state of the input field:

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

You can explore and work with the coding yourself. For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Filter Bar - Extensions - Custom Filters](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarCustom).



### Custom Filter Fields With Metadata Binding

You can define custom columns with metadata binding, as well as the labels for custom filters and custom form elements.

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

