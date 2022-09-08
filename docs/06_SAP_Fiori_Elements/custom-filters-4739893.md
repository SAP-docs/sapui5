<!-- loio4739893805f74a409e241698858ee424 -->

# Custom Filters

Add custom filters to your overview page application. It provides the end users an option to filter the data displayed in one or more cards.



<a name="loio4739893805f74a409e241698858ee424__section_uhm_ptp_zy"/>

## Steps

1.  Create a view extension fragment.


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

    Enter a group ID to associate the custom controller to a group.

    > ### Note:  
    > If the group ID does not exist, the filter is added to the default group.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `key` 


    
    </td>
    <td valign="top">

    Enter a property of an entity type to define the filter criteria.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `visibleInAdvancedArea` 


    
    </td>
    <td valign="top">

    Enable this property to view custom filters on the filter bar.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `Input id` 


    
    </td>
    <td valign="top">

    Enter a property of an entity type to define the input criteria.


    
    </td>
    </tr>
    </table>
    
    > ### Sample Code:  
    > For example, create a `customFilter.fragment.xml` file and provide the required information.
    > 
    > ```
    > <core:FragmentDefinition xmlns="sap.m" xmlns:smartfilterbar="sap.ui.comp.smartfilterbar" xmlns:core="sap.ui.core">
    >     <!-- Product ID Filter -->
    >     <smartfilterbar:ControlConfiguration groupId="_BASIC" key="ProductID"
    >                                          label="Product ID (Extension)"
    >                                          visibleInAdvancedArea="true">
    >         <smartfilterbar:customControl>
    >             <Input id="ProductID" type="Text"/>
    >         </smartfilterbar:customControl>
    >     </smartfilterbar:ControlConfiguration>
    >     <smartfilterbar:ControlConfiguration groupId="GlobalFilters" key="SalesOrderID"
    >                                          label="Sales Order ID (Extension)"
    >                                          visibleInAdvancedArea="false">
    >         <smartfilterbar:customControl>
    >             <Input id="SalesOrderID" type="Text"/>
    >         </smartfilterbar:customControl>
    >     </smartfilterbar:ControlConfiguration>
    > </core:FragmentDefinition>
    > ```

2.  Create a controller extension. For example, create a `customFilter.controller.js` file and define the following functions:
    -   Define `getCustomFilters()` to return a filter object.

        ```
                getCustomFilters: function () {
        
                    var oValue1 = this.oView.byId("ProductID").getValue();
                    var oValue2 = this.oView.byId("SalesOrderID").getValue();
        
        
                    var aFilters = [], oFilter1, oFilter2;
        
                    if (oValue1) {
                        oFilter1 = new Filter({
        
                            path: "ProductID",
                            operator: "EQ",
                            value1: oValue1
        
                        });
        
                        aFilters.push(oFilter1);
        
                    }
        
                    if (oValue2) {
                        oFilter2 = new Filter({
        
                            path: "SalesOrderID",
                            operator: "EQ",
                            value1: oValue2
        
                        });
        
                        aFilters.push(oFilter2);
                    }
        
                    if (aFilters && aFilters.length > 0) {
                        return (new Filter(aFilters, true));
                    }
                    
                },
        ```

    -   Define `getCustomAppStateDataExtension(oCustomData)` to store the application state.

        ```
                getCustomAppStateDataExtension: function (oCustomData) {
                    //the content of the custom field will be stored in the app state, so that it can be restored later, for example after a back navigation.
                    //The developer has to ensure that the content of the field is stored in the object that is returned by this method.
                    if (oCustomData) {
        
                        var oCustomField1 = this.oView.byId("ProductID");
                        var oCustomField2 = this.oView.byId("SalesOrderID");
                        if (oCustomField1) {
                            oCustomData.ProductID = oCustomField1.getValue();
                        }
                        if (oCustomField2) {
                            oCustomData.SalesOrderID = oCustomField2.getValue();
                        }
                    }
                },
        ```

    -   Define `restoreCustomAppStateDataExtension(oCustomData)` to restore the application state.

        ```
                restoreCustomAppStateDataExtension: function (oCustomData) {
                    //in order to restore the content of the custom field in the filter bar, for example after a back navigation,
                    //an object with the content is handed over to this method and the developer has to ensure that the content of the custom field is set accordingly
                    //also, empty properties have to be set
                    if (oCustomData) {
        
                        if (oCustomData.ProductID) {
                            var oCustomField1 = this.oView.byId("ProductID");
                            oCustomField1.setValue(oCustomData.ProductID);
                        }
        
                        if (oCustomData.SalesOrderID) {
                            var oCustomField2 = this.oView.byId("SalesOrderID");
                            oCustomField2.setValue(oCustomData.SalesOrderID);
                        }
                    }
        
                },
        ```


3.  Add the controller and view extension settings to the manifest.

    > ### Note:  
    > Ensure that you use the same entity type in both `viewExtensions` and `globalFilterEntityType` settings. For example, see
    > 
    > ```
    > 		"extends": {
    >                         "extensions": {
    >                                 "sap.ui.controllerExtensions": {
    >                                         "sap.ovp.app.Main": {
    >                                                 "controllerName": "my_app.ext.controller.OverViewPageExt"
    >                                         }
    >                                 },
    >                                 "sap.ui.viewExtensions": {
    >                                         "sap.ovp.app.Main": {
    >                                                 "SmartFilterBarControlConfigurationExtension|GlobalFilters": {
    >                                                         "className": "sap.ui.core.Fragment",
    >                                                         "fragmentName": "sap.ovp.demo.ext.customFilter",
    >                                                         "type": "XML"
    >                                                 }
    >                                         }
    >                                 }
    >                         }
    >                 }
    >         },
    >         "sap.ovp": {
    >                 "globalFilterModel": "salesOrder",
    >                 "globalFilterEntityType": "GlobalFilters",
    >                 ...
    >                 ...
    >                 }
    > 
    > ```


