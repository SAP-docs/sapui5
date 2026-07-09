<!-- loio4739893805f74a409e241698858ee424 -->

# Adding Custom Filters to the Overview Page

You can add custom filters to your overview page application. This allows users to filter the data displayed in one or more cards.



This topic applies to SAP Fiori elements for OData V2.



<a name="loio4739893805f74a409e241698858ee424__section_uhm_ptp_zy"/>

## Procedure

To add custom filters, proceed as follows:

1.  Create a view extension fragment `customFilter.fragment.xml`, for example. The view extenstion fragment extends the smart filter bar by adding custom filter controls.

    > ### Sample Code:  
    > `customFilter.fragment.xml`
    > 
    > ```
    > <core:FragmentDefinition xmlns="sap.m" 
    >                          xmlns:smartfilterbar="sap.ui.comp.smartfilterbar" 
    >                          xmlns:core="sap.ui.core">
    >     <!-- Product ID Filter -->
    >     <smartfilterbar:ControlConfiguration groupId="_BASIC" key="ProductID" label="Product ID (Extension)" visibleInAdvancedArea="true">
    >         <smartfilterbar:customControl>
    >             <Input id="ProductID" type="Text"/>
    >         </smartfilterbar:customControl>
    >     </smartfilterbar:ControlConfiguration>
    > 
    >     <smartfilterbar:ControlConfiguration groupId="GlobalFilters" key="SalesOrderID" label="Sales Order ID (Extension)" visibleInAdvancedArea="false">
    >         <smartfilterbar:customControl>
    >             <Input id="SalesOrderID" type="Text"/>
    >         </smartfilterbar:customControl>
    >     </smartfilterbar:ControlConfiguration>
    > </core:FragmentDefinition>
    > ```

    The following properties must be defined in the sample code:


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
    
    `groupId` 
    
    </td>
    <td valign="top">
    
    Associates the custom control to a filter group. If the group ID doesn't exist, the filter is added to the default group.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `key` 
    
    </td>
    <td valign="top">
    
    A property of an entity type to define the filter criteria.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `visibleInAdvancedArea` 
    
    </td>
    <td valign="top">
    
    Enable this property to display custom filters on the filter bar.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `Input id` 
    
    </td>
    <td valign="top">
    
    A property of the entity type to define the input criteria.
    
    </td>
    </tr>
    </table>
    
2.  Create a controller extension. For example, create a `customFilter.controller.js` file to define the following functions:
    -   `getCustomFilters()` - Returns a filter object built from the current values of the custom controls.

        > ### Sample Code:  
        > ```
        > getCustomFilters: function () {
        >     var oValue1 = this.oView.byId("ProductID").getValue();
        >     var oValue2 = this.oView.byId("SalesOrderID").getValue();
        >     var aFilters = [],
        >         oFilter1,
        >         oFilter2;
        > 
        >     if (oValue1) {
        >         oFilter1 = new Filter({
        >             path: "ProductID",
        >             operator: "EQ",
        >             value1: oValue1
        >         });
        >         aFilters.push(oFilter1);
        >     }
        > 
        >     if (oValue2) {
        >         oFilter2 = new Filter({
        >             path: "SalesOrderID",
        >             operator: "EQ",
        >             value1: oValue2
        >         });
        >         aFilters.push(oFilter2);
        >     }
        > 
        >     if (aFilters && aFilters.length > 0) {
        >         return new Filter(aFilters, true);
        >     }
        > }
        > ```

    -   `getCustomAppStateDataExtension(oCustomData)` - Stores the custom filter values in the application state so they can be restored later after back navigation, for example.

        > ### Sample Code:  
        > ```
        > getCustomAppStateDataExtension: function (oCustomData) {
        >     // The content of the custom field will be stored in the app state,
        >     // so that it can be restored later, for example after a back navigation.
        >     // The developer has to ensure that the content of the field is stored
        >     // in the object that is returned by this method.
        >     if (oCustomData) {
        >         var oCustomField1 = this.oView.byId("ProductID");
        >         var oCustomField2 = this.oView.byId("SalesOrderID");
        > 
        >         if (oCustomField1) {
        >             oCustomData.ProductID = oCustomField1.getValue();
        >         }
        >         if (oCustomField2) {
        >             oCustomData.SalesOrderID = oCustomField2.getValue();
        >         }
        >     }
        > }
        > ```

    -   `restoreCustomAppStateDataExtension(oCustomData)` - Restores the custom filter values from the application state when the user navigates back to the overview page, for example.

        > ### Sample Code:  
        > ```
        > restoreCustomAppStateDataExtension: function (oCustomData) {
        >             //in order to restore the content of the custom field in the filter bar, for example after a back navigation,
        >             //an object with the content is handed over to this method and the developer has to ensure that the content of the custom field is set accordingly
        >             //also, empty properties have to be set
        >             if (oCustomData) {
        > 
        >                 if (oCustomData.ProductID) {
        >                     var oCustomField1 = this.oView.byId("ProductID");
        >                     oCustomField1.setValue(oCustomData.ProductID);
        >                 }
        > 
        >                 if (oCustomData.SalesOrderID) {
        >                     var oCustomField2 = this.oView.byId("SalesOrderID");
        >                     oCustomField2.setValue(oCustomData.SalesOrderID);
        >                 }
        >             }
        > 
        >         },
        > ```


3.  Add the controller and view extension settings to the `extends` section of the `manifest.json` file.

    > ### Note:  
    > Use the same entity type in both the `viewExtensions` and `globalFilterEntitySet` settings.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "extends": {
    >     "extensions": {
    >         "sap.ui.controllerExtensions": {
    >             "sap.ovp.app.Main": {
    >                 "controllerName": "my_app.ext.controller.OverViewPageExt"
    >             }
    >         },
    >         "sap.ui.viewExtensions": {
    >             "sap.ovp.app.Main": {
    >                 "SmartFilterBarControlConfigurationExtension|GlobalFilters": {
    >                     "className": "sap.ui.core.Fragment",
    >                     "fragmentName": "sap.ovp.demo.ext.customFilter",
    >                     "type": "XML"
    >                 }
    >             }
    >         }
    >     }
    > },
    > "sap.ovp": {
    >     "globalFilterModel": "salesOrder",
    >     "globalFilterEntitySet": "GlobalFilters",  
    >     ...
    > }
    > ```


