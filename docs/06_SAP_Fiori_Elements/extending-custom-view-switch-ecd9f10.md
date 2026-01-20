<!-- loioecd9f108b99f45c8bec911181b763c69 -->

# Extending Custom View Switch

You can extend view switch so it responds dynamically based on filter conditions or custom configuration settings.



## Procedure

To define the custom view switch, proceed as follows:

1.  Create a controller extension file, `customViewswitch.controller.js`, for example, and define the `onBeforeRebindPageExtension` function with the following input parameters:


    <table>
    <tr>
    <th valign="top">

    Input Parameters
    
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
    
    Contains a list of all visible cards in an array.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `oSelectionvariant` 
    
    </td>
    <td valign="top">
    
    \[Type: Object\]: Object containing filter values
    
    </td>
    </tr>
    </table>
    
2.  Define `setTabIndex()` method to pass `Cardid` and `TabIndex` as parameters. For example, var`oTabIndexList = {"card1" : 2, "card2": 1};`

    > ### Note:  
    > The value for `TabIndex` starts with `1` and must not be greater than the length of tabs.

    Configure the key value according to your filter values and pass the `oTabIndexList` object to `this.setTabIndex(oTabIndexList)`, as shown in the following sample code:

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

3.  Define the controller extension in the `manifest.json` file.

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


