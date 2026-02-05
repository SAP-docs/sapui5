<!-- loiob56bc11de1a341deacefa71543827dfc -->

# Adding Custom Fields to the Filter Bar

You can extend the filter bar by using a custom filter field.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

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



<a name="loiob56bc11de1a341deacefa71543827dfc__section_r3m_ynr_jnb"/>

## Adding Custom Filter Fields to Exported File

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

