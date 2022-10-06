<!-- loio7251ea37044040629589478d43692713 -->

# Creating Custom Filter

Define custom filters for compact filters and KPI tags.



> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



## Compact Filters

Define custom filter view fragments, use view extensions and define extended fragments and controllers in the application namespace as shown here:

```

"sap.ui5": {
    "_version": "1.1.0",
    "extends": {
        "extensions": {
             "sap.ui.controllerExtensions": { // Controller extension
                 "sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage": { // ALP app view to be extended with controller
                   "controllerName": "my_app.ext.controller.AnalyticalListPageExt", // extended Controller declared using namespace
                       ... // Other custom controllers
                    ...
                  } // End of ALP controller extensions
             }, // End of controller extensions
             "sap.ui.viewExtensions": { // View Extension
                 "sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage": { // ALP app view to be extended with filter fragment
                    "SmartFilterBarControlConfigurationExtension|CZ_EASILINEITEMS_SADL": { // <Filter Bar Extension>|<Entity Set>
                    "className": "sap.ui.core.Fragment",
                    "fragmentName": "analytics2.alr.ext.fragments.CustomFilters", // extended Fragment declared using namespace
                    "type": "XML"
                },
                ... // Other view extensions
                ... 
            } // End of ALP view extensions
        } // End of view extensions
      }
   }
}

```

Sample of a custom view XML fragment:

```
<core:FragmentDefinition xmlns="sap.m" xmlns:smartfilterbar="sap.ui.comp.smartfilterbar" xmlns:core="sap.ui.core">
    <smartfilterbar:ControlConfiguration key="CustomFilters" index="99" visibleInAdvancedArea="true" label="Custom Filter" groupId="_BASIC">
        <smartfilterbar:customControl>
            <ComboBox id="CustomFilters-combobox">
                <core:Item key="0" text="Item1"/>
                <core:Item key="1" text="Item2"/>
                <core:Item key="2" text="Item3"/>
            </ComboBox>
        </smartfilterbar:customControl>
    </smartfilterbar:ControlConfiguration>
</core:FragmentDefinition>

```

Sample of a custom filter controller extension:

```

sap.ui.define([], function() {
    return {
        onInitSmartFilterBarExtension: function(oEvent) {
        // the custom field in the filter bar might have to be bound to a custom data model
        // if a value change in the field shall trigger a follow up action, this method is the 
        // place to define and bind an event handler to the field
        // Example:
        var oSmartFilterBar = oEvent.getSource();
        oSmartFilterBar.getControlByKey("CustomFilters").attachSelectionChange(function(oChangeEvent){
        //code
        },this);
        jQuery.sap.log.info("onInitSmartFilterBarExtension initialized");
        },
        onBeforeRebindTableExtension: function(oEvent) {
        // usually the value of the custom field should have an effect on the selected data in the table. 
        // So this is the place to add a binding parameter depending on the value in the custom field.
        },
        onBeforeRebindChartExtension: function(oEvent) {
            // usually the value of the custom field should have an effect on the selected data in the chart. 
            // So this is the place to add a binding parameter depending on the value in the custom field.
        },
        getCustomAppStateDataExtension : function(oCustomData) {
            // the content of the custom field shall be stored in the app state, so that it can be restored
            // later again e.g. after a back navigation. The developer has to ensure that the content of the
            // field is stored in the object that is returned by this method.
            // Example:
            var oComboBox = this.byId("CustomFilters-combobox");
                if (oComboBox){
            oCustomData.CustomPriceFilter = oComboBox.getSelectedKey();
        }
            },
        restoreCustomAppStateDataExtension : function(oCustomData) {
            // in order to to restore the content of the custom field in the filter bar e.g. after a 
            // back navigation, an object with the content is handed over to this method and the developer 
            // has to ensure, that the content of the custom field is set accordingly
            // also, empty properties have to be set
            // Example:
            if ( oCustomData.CustomPriceFilter !== undefined ){
                if ( this.byId("CustomFilters-combobox") ) {
                    this.byId("CustomFilters-combobox").setSelectedKey(oCustomData.CustomPriceFilter);
                }
            }
        }
    }
});

```

> ### Remember:  
> -   The custom filters do not show up in visual filters.
> 
> -   If you define logic in the `onBeforeRebindChartExtension` or `onBeforeRebindTableExtension` to handle values that come from the custom filter fields, then these values are refreshed when the table or chart area is refreshed. This ensures that custom filters are synchronized when the filter mode changes.
> 
> -   When you choose *Clear*, ALP triggers `onClearFilterExtension`, which clears all filter dimensions. This means that you need to define the logic to handle the clear event for custom filters in the application controller extension . For example:
> 
>     ```
>     onClearFilterExtension: function(oEvent) {
>             // Logic for clearing extended filters
>             'use strict';
>             if ( this.byId("CustomFilters-combobox") ) {
>                  this.byId("CustomFilters-combobox").setSelectedKey(null);
>             }
>     }
>     ```



<a name="loio7251ea37044040629589478d43692713__section_vxv_x4k_ngb"/>

## Visual Filters

Use the `onBeforeRebindVisualFilterExtension` to customize the visual filter. Configure the extension to:

-   Modify the visual filter or parameter values

-   Add a custom query parameter to the visual filter call

-   Influence the sorting order


In this extension, you can also access the incoming navigation context of the app with the `getNavigationContext` API.

```
onBeforeRebindVisualFilterExtension: function(sEntityType, sDimension, sMeasure, oContext){     // oContext has filters, queryParameters, sorters, entityParameters applicable for this specific visual filter 
    'use strict';
    var oNavigationContext = this.extensionAPI.getNavigationContext();                          //getting incoming navigation context through extension API                     
    if (sDimension === “CostCenter”) { 
        oContext.queryParameters.Type = "Cost";                                                 //adding custom query parameter (It will be included in visual filter query as “?Type=”Cost”)   
         
        if (oContext.entityParameters.P_DisplayCurrency === “USD”) {                            //Influencing applied parameters / filters                                         
            oContext.queryParameter.Country = “USA”;         
            oContext.filters.push(new sap.ui.model.Filter("Product", "EQ", "HT-1000"));
        }
    }
}

```

> ### Note:  
> -   The format for the date field is *YYYY-MM-DDT00:00:00Z*. For example, *2018-10-15T00:00:00Z*.
> 
> -   The format for date and time values from the `SelectionVariant` annotation is *YYYY-MM-DDT00:00:00.000Z* \(in UTC\) or *YYYY-MM-DDTHH:MM:SS.fff-HH:MM* \(local time with offset\). For example, *2018-09-03T12:46:00.000Z* or *2018-09-03T12:46:12:123-7:00*



<a name="loio7251ea37044040629589478d43692713__section_phn_wmh_kdb"/>

## KPI Tags

You can add or modify the existing filters or parameter values using the extension API `onBeforeRebindFilterableKPIExtension`. The applications can also change depending on the KPI's entity type or KPI ID.

> ### Sample Code:  
> ```
> sap.ui.define(["sap/base/Log"], function(Log) {
>     onBeforeRebindFilterableKPIExtension: function(oSelectionVariant, sEntityType, sKPIId) {
>         'use strict';
>         // using this extension app can modify the existing filters and parameters
>         // and also add/remove/modify the custom filters applied to FilterableKPIs
>         if (sKPIId === "alp.tech.app::sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage::SEPMRA_C_ALP_SlsOrdItemCubeALPResults--template::KPITag::kpi::KPINetProductPriceByCategory") {
>             oSelectionVariant.addSelectOption("Product", "I", "EQ", "HT-1502", null);
>         }
>         Log.info("onBeforeRebindFilterableKPIExtension called!");
>     }
> });
> ```

**Related Information**  


[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

