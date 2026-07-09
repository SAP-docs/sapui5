<!-- loioecd9f108b99f45c8bec911181b763c69 -->

# Extending Custom View Switch

You can extend the view switch to respond dynamically based on filter conditions or custom configuration settings such as automatically switching a card to a different tab when a user selects a specific supplier in the filter bar.



## Procedure

To define the custom view switch, proceed as follows:

1.  Create a controller extension file, `customViewswitch.controller.js`, for example, and define the `onBeforeRebindPageExtension` function. This function is called before the cards are rebound and lets you choose which view \(tab\) each card should display. The function receives the following input parameters:


    <table>
    <tr>
    <th valign="top">

    Input Parameters
    
    </th>
    <th valign="top">

    Type
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `aCards` 
    
    </td>
    <td valign="top">
    
    Array
    
    </td>
    <td valign="top">
    
    Contains a list of all visible cards.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `oSelectionvariant` 
    
    </td>
    <td valign="top">
    
    Object
    
    </td>
    <td valign="top">
    
    Object containing filter values
    
    </td>
    </tr>
    </table>
    
2.  Build a tab-index map and call `setTabIndex()`.

    Inside `onBeforeRebindPageExtension`, build a map that pairs each card ID with the tab index you want to display. The value for `TabIndex` starts with `1` and must not exceed the number of tabs defined for the card. An example of the map is `oTabIndexList = {"card1" : 2, "card2": 1};`.

    The following example switches `card012` to a specific tab depending on the value of the `SupplierName` filter:

    > ### Sample Code:  
    > Breakout function
    > 
    > ```
    > /*
    > * Breakout function for dynamic view switch
    > * */
    > onBeforeRebindPageExtension: function (aCards, oSelectionVariant) {
    >     var oTabIndexList = {};
    >     var oFilterList = this._getFilterList(oSelectionVariant); //Sample logic
    >     var oTabIndexList = {};
    >     if (aCards && aCards.length > 0) {
    >         for (var i = 0; i < aCards.length; i++) {
    >             if (aCards[i].id == "card012") {
    >                 if (oFilterList && oFilterList.hasOwnProperty("SupplierName")) {
    >                     if (oFilterList.SupplierName == "SAP") {
    >                         oTabIndexList["card012"] = 1; 
    >                     } else if (oFilterList.SupplierName == "Talpa") {
    >                         oTabIndexList["card012"] = 2;
    >                     }
    >                 }
    >             }
    >         }
    >     }//End of sample logic	
    > 
    >     this.setTabIndex(oTabIndexList); //Pass updated oTabIndexList object here
    > }
    > 
    > ```

    The supporting helper function extracts filter values from a `SelectionVariant` object by iterating through its `Parameters` and `SelectOptions` arrays, returning only equality filters with non-empty values as a key-value object, as shown in the following sample code:

    > ### Sample Code:  
    > Supporting function
    > 
    > ```
    > //get all filters with values
    > _getFilterList: function (oSelectionVariant) {
    >     var oFilterList = {};
    >     if (oSelectionVariant && oSelectionVariant.Parameters && oSelectionVariant.Parameters.length > 0) {
    >         for (var i = 0; i < oSelectionVariant.Parameters.length; i++) {
    >             oFilterList[oSelectionVariant.Parameters[i].PropertyName] = oSelectionVariant.Parameters[i].PropertyValue;
    >         }
    >     }
    >     if (oSelectionVariant && oSelectionVariant.SelectOptions && oSelectionVariant.SelectOptions.length > 0) {
    >         for (var j = 0; j < oSelectionVariant.SelectOptions.length; j++) {
    >             var aRanges = oSelectionVariant.SelectOptions[j].Ranges;
    >             for (var k = 0; k < aRanges.length; k++) {
    >                 if (aRanges[k].Option == "EQ" && aRanges[k].Low !== "") {
    >                     oFilterList[oSelectionVariant.SelectOptions[j].PropertyName] = aRanges[k].Low;
    >                 }
    >             }
    >         }
    >     }
    >     return oFilterList;
    > },
    > 
    > ```

3.  Define the controller extension in the `manifest.json` file, under the `extends` section, as shown in the following sample code:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "extends": {
    >     "extensions": {
    >         "sap.ui.controllerExtensions": {
    >             "sap.ovp.app.Main": {
    >                 "controllerName": "sap.ovp.demo.ext.customController"
    >             }
    >         }
    >     }
    > }
    > 
    > ```


