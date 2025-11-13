<!-- loio40051b67edaf457cad37d552c37b497d -->

# Defining Custom Navigation Parameters

You can define custom parameters for intent-based navigation to the target application.



## Procedure

To define custom parameters for intent-based navigation, proceed as follows:

1.  Define the `onCustomParams` function in the controller file extension, as shown in the following sample code:

    > ### Sample Code:  
    > ```
    > onCustomParams: function(sCustomParams) {
    >     if (sCustomParams === "getParameters") {
    >         return this.getParameters;
    >     } else if (sCustomParams === "param2") {
    >         return this.param2;
    >     }
    > },
    > ```

    The custom parameter function inserts URL parameters when navigating to the target application. Configure the following properties:

    **Configuration Properties**


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
    
    `path` 
    
    </td>
    <td valign="top">
    
    Defines the property name
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `operator` 
    
    </td>
    <td valign="top">
    
    Specifies which operator to apply. Possible values are `EQ`,`NE`,`LE`,`GE`,`LT`,`GT`,`BT`,`CP`.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `value1`: First operator value applied
    
    </td>
    <td valign="top">
    
    Defines the first value for the operator.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `value2`: Second operator value. Use only for a range of operators, such as `BT`. If empty, set the value to null.
    
    </td>
    <td valign="top">
    
    Defines the second value for the operator. This is used only for range-based operators such as `BT`. The value is set to `null` if not used.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `sign`:
    
    </td>
    <td valign="top">
    
    Determines whether the current selection must be included or excluded from the filter. Use `I` to include and `E` to exclude.
    
    </td>
    </tr>
    </table>
    
    > ### Sample Code:  
    > ```
    > getParameters: function(oNavigateParams) {
    >     var aCustomSelectionVariant = [];
    >     var oCustomSelectionVariant = {
    >         path: "TaxTarifCode",
    >         operator: "EQ",
    >         value1: 5,
    >         value2: null,
    >         sign: "I"
    >     };
    >     aCustomSelectionVariant.push(oCustomSelectionVariant);
    >     return aCustomSelectionVariant;
    > },
    > 
    > param2: function(oNavigateParams) {
    >     oNavigateParams.TaxTarifCode = '3';
    >     return oNavigateParams;
    > }
    > ```

    > ### Sample Code:  
    > Adding parameters during navigation
    > 
    > ```
    > getParameters: function(oNavigateParams,oSelectionVariantParams) {
    >  
    >             // to get the select option property names, make use of this to check what values are available to modify
    >             var aSelectOptionNames = oSelectionVariantParams.getSelectOptionsPropertyNames();
    >  
    >             var oFilter1 = oSelectionVariantParams.getSelectOption("Filter1");
    >             var oFilter2 = oSelectionVariantParams.getSelectOption("Filter2");
    >  
    >              ///
    >                 Your logic to extract values from oFilter1 and oFilter2
    >             ///
    >   
    >             /// logic to remove Filter1 and Filter2
    >             /// assigning empty values to Filter1 and Filter2, with ignoreEmptyString as true, this will be removed from the Selection Variant
    >  
    >                  var Filter1 = {
    >                     path: "Filter1",
    >                     operator: "EQ",
    >                     value1: "",
    >                     value2: null,
    >                     sign: "I"
    >                 };
    >  
    >  
    >                 var Filter2 = {
    >                     path: "Filter2",
    >                     operator: "EQ",
    >                     value1: "",
    >                     value2: null,
    >                     sign: "I"
    >                 };
    >  
    > 
    >             /// logic to remove Filter1 and Filter2
    >   
    >             var aCustomSelectionVariant = [];
    >             var oFilter3 = {
    >                 path: "Filter3PropertyName",
    >                 operator: "EQ",
    >                 value1: "< Value you want to include >",
    >                 value2: null,
    >                 sign: "I"
    >             };
    >             aCustomSelectionVariant.push(oFilter3);
    >             aCustomSelectionVariant.push(oFilter2);
    >             aCustomSelectionVariant.push(oFilter1);
    >             return {
    >                 selectionVariant: aCustomSelectionVariant,
    >                 ignoreEmptyString: true
    >             };
    >         },
    > ```

    > ### Note:  
    > `ignoreEmptyString` and `selectionVariant` are deprecated as of SAPUI5 1.54. Use `bIgnoreEmptyString` and `aSelectionVariant` instead.

2.  Add a controller extension in the `manifest.json` file, and specify the path to the custom controller, as shown in the following sample code:

    ```
    "extends": {
        "extensions": {
            "sap.ui.controllerExtensions": {
                "sap.ovp.app.Main": {
                    "controllerName": "my_app.ext.controller.OverViewPageExt"
                }
            }
        }
    }
    ```

    > ### Note:  
    > Add the new extension code in the same file if a controller file already exists.

3.  To return the custom parameters during navigation, configure the `customParams` setting in the card definition. Include the name of the custom parameter function defined in your custom controller file.

    > ### Sample Code:  
    > ```
    > "card002_ReorderSoon": {
    >   "model": "purchaseOrder",
    >   "template": "sap.ovp.cards.list",
    >   "settings": {
    >     "title": "reorder Soon",
    >     "subTitle": "Less than 10 in stock",
    >     "listType": "condensed",
    >     "entitySet": "PurchaseSet",
    >     "customParams": "<function-name>"    // Depending on the logic you define in step 1, input the function name.
    >     ...
    >     ...
    > ```


