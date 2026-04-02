<!-- loiobe7a23670d7d499094030ad1c1b1c915 -->

# Custom View Switch

Extend view switch so it reacts based on filter conditions or custom configuration.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Extending Custom View Switch](extending-custom-view-switch-ecd9f10.md).



<a name="loiobe7a23670d7d499094030ad1c1b1c915__section_hfm_rss_dhc"/>

## Procedure

To define the custom view switch:

1.  Create a controller extension \(example, `customViewswitch.controller.js` file\) and define the `onBeforeRebindPageExtension` function with these input parameters:

    -   `aCards` \[Type: Array\]: List of all visible cards

    -   `oSelectionvariant` \[Type: Object\]: Object containing filter values


2.  Define `setTabIndex()` method to pass *<Cardid\>* and *<TabIndex\>* as parameters. For example, var`oTabIndexList = {"card1" : 2, "card2": 1};`

    > ### Note:  
    > The *<TabIndex\>* starts with the value 1 and must not be greater than the length of tabs.

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

3.  Configure the controller extension in the `manifest.json` file.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "extends": {
    >             "extensions": {
    >                 "sap.ui.controllerExtensions": {
    >                     "sap.ovp.app.Main": {
    >                         "controllerName": "sap.ovp.demo.ext.customController"
    >                     }
    >                 }
    >             }
    >      }
    > 
    > ```


