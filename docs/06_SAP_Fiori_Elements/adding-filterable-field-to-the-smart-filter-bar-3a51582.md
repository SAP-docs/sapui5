<!-- loio3a515829ffd74239878ebc0d453d001d -->

# Adding Filterable Field to the Smart Filter Bar

The following example shows the development steps for adding an additional filter to the smart filter bar of the list report.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

In this example, we assume that you want to add a *Price* field with two filter options to the smart filter bar of the Manage Products app's list report. To do so, you have to complete the following steps:

1.  Create a controller for a new facet on the list report
2.  Add field name and filter option texts to the `i18n` file
3.  Define a view and a controller extension in the `manifest.json` file

> ### Note:  
> You can only add new fields to the smart filter bar, not change existing ones. If you want to change existing fields, you must remove them first completely from the annotations, then add them again as new fields.



## Step 1: Create a controller for a new facet in the list report

In the SAP Web IDE, open the folder structure of the Manage Products project and then proceed as follows:

1.  In the `webapp` folder, create a new subfolder called `ext`.
2.  In the folder `ext`, create a new subfolder called `fragment`.
3.  In the `fragment` folder, create file `Custom.Filter.fragment.xml`.
4.  In the `controller` folder, create file `Custom.Filter.controller.js`.
5.  Define the fragment by adding `ControlConfiguration` to the smart filter bar. You can see the options for the `ComboBox` in the following example:

    > ### Sample Code:  
    > ```
    > <core:FragmentDefinition
    > 		xmlns="sap.m"
    > 		xmlns:smartfilterbar="sap.ui.comp.smartfilterbar"
    > 		xmlns:core="sap.ui.core">
    > 	<!-- Price Filter-->
    > 	<smartfilterbar:ControlConfiguration key="CustomPriceFilter" index="3" 
    > 	label="{i18n|sap.suite.ui.generic.template.ListReport|SEPMRA_C_PD_Product>xfld.Price}"
    > 							visibleInAdvancedArea="true" groupId="_BASIC">
    > 		<smartfilterbar:customControl>
    > 			<ComboBox id="CustomPriceFilter-combobox">
    > 				<core:Item id="CustomPriceFilterItem0" key="0" 
    > 						text="{i18n|sap.suite.ui.generic.template.ListReport|SEPMRA_C_PD_Product>xtit.Price_0-100}"/>
    > 				<core:Item id="CustomPriceFilterItem3" key="1" 
    > 						text="{i18n|sap.suite.ui.generic.template.ListReport|SEPMRA_C_PD_Product>xtit.Price_GE100}"/>
    > 			</ComboBox>
    > 		</smartfilterbar:customControl>
    > 	</smartfilterbar:ControlConfiguration> 
    > </core:FragmentDefinition>	
    > ```

    > ### Note:  
    > You can use the index property to define the position of the filterable field. For more information, see also [Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md)and [`sap.ui.comp.smartfilterbar.ControlConfiguration`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.ControlConfiguration).

6.  To generate the additional filter logic, implement the logic in the controller as shown in the example below.

    Note that if a user changes a filter field in the filter bar, the table shows an overlay to indicate that the state of the filter bar differs from the date currently being displayed. If the control used in your app does not trigger a change event, you have to set this up using `.fireChange()` so that the filter bar will recognize the change and display the overlay.

    > ### Sample Code:  
    > ```
    > 
    > sap.ui.define([], function () {
    >     return {
    >         onBeforeRebindTableExtension: function(oEvent) {
    >             var oBindingParams = oEvent.getParameter("bindingParams");
    >             oBindingParams.parameters = oBindingParams.parameters || {};
    >                             
    >             var oSmartTable = oEvent.getSource();
    >             var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());
    >             var vCategory;
    >             if (oSmartFilterBar instanceof sap.ui.comp.smartfilterbar.SmartFilterBar) {
    >                 //Custom price filter
    >                 var oCustomControl = oSmartFilterBar.getControlByKey("CustomPriceFilter");
    >                 if (oCustomControl instanceof sap.m.ComboBox) {
    >                     vCategory = oCustomControl.getSelectedKey();
    >                     switch (vCategory) {
    >                         case "0":
    >                             oBindingParams.filters.push(new sap.ui.model.Filter("Price", "LE", "100"));
    >                             break;
    >                         case "1":
    >                             oBindingParams.filters.push(new sap.ui.model.Filter("Price", "GT", "100"));
    >                             break;
    >                         default:
    >                             break;
    >                     }
    >                 }
    >             }
    >         }
    >     }
    > });
    > 
    > ```




## Step 2: Add field name and filter option texts to the i18n file

To make the field name and the filter options translatable, add the texts to the `i18n` file as follows:

> ### Sample Code:  
> ```
> #XFLD: Custom filter breakout label
> xfld.Price=Price
> #XTIT: Price range 0-100
> xtit.Price_0-100=Price between 0-100
> #XTIT: Price range Over 100
> xtit.Price_GE100=Price: Over 100		
> ```



## Step 3: Define a view and a controller extension in the `manifest.json` file

To integrate the logic as an extension, define a view and controller extension to load the files you created in Step 1 \(`Custom.Filter.fragment.xml` and `Custom.Filter.controller.js`\).

The logic is added to the `ListReport` section of the Manage Products app.

> ### Sample Code:  
> ```
> 
> "extends": {
>         "extensions": {
>                 "sap.ui.controllerExtensions": {
>                         "sap.suite.ui.generic.template.ListReport.view.ListReport": {
>                                 "controllerName": "my_app.ext.controller.ListReportExtension"
>                         }
>                 },
>                 "sap.ui.viewExtensions": {
>                         "sap.suite.ui.generic.template.ListReport.view.ListReport": {
>                                 "SmartFilterBarControlConfigurationExtension|SEPMRA_C_PD_Product": {
>                                         "className": "sap.ui.core.Fragment",
>                                         "fragmentName": "ManageProducts.ext.fragment.CustomFilter",
>                                         "type": "XML"
>                                 }                 
>                         }
>                 }
>         }
> },
> 
> ```



## Results

The list report of the Manage Products app displays the new *Price* field with filter options.

