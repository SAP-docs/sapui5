<!-- loio40051b67edaf457cad37d552c37b497d -->

# Custom Navigation Parameters

Add custom parameters for intent-based navigation to the target application.



## Procedure

1.  Define the `onCustomParams` function in the controller file extension.

    > ### Sample Code:  
    > ```
    >         onCustomParams: function(sCustomParams) {
    >             if (sCustomParams === "getParameters") {
    >                 return this.getParameters;
    >             } else if (sCustomParams === "param2") {
    >                 return this.param2;
    >             }
    >         },
    > ```

    The custom parameter function inserts URL parameters while navigating to the target application. Configure the following properties:

    -   `path`: Property name

    -   `operator`: Operator to apply. Possible operations are EQ,NE,LE,GE,LT,GT,BT,CP.

    -   `value1`: First operator value applied

    -   `value2`: Second operator value. Use only for a range of operators, such as `BT`. If empty, set the value to null.

    -   `sign`: Specify the current selection to be included or excluded from the filter. Use `I` to include and `E` to exclude.


    ```
            getParameters: function(oNavigateParams) {
                var aCustomSelectionVariant = [];
                var oCustomSelectionVariant = {
                    path: "TaxTarifCode",
                    operator: "EQ",
                    value1: 5,
                    value2: null,
                    sign: "I"
                };
                aCustomSelectionVariant.push(oCustomSelectionVariant);
                return aCustomSelectionVariant;
            },
    
            param2: function(oNavigateParams) {
                oNavigateParams.TaxTarifCode = '3';
                return oNavigateParams;
            }
    ```

    > ### Sample Code:  
    > Adding parameters during navigation
    > 
    > ```
    > getParameters: function(oNavigateParams,oSelectionVariantParams) {
    >  
    >  
    >             // to get the select option property names, make use of this to check what values are available to modify
    >             var aSelectOptionNames = oSelectionVariantParams.getSelectOptionsPropertyNames();
    >  
    >             var oFilter1 = oSelectionVariantParams.getSelectOption("Filter1");
    >             var oFilter2 = oSelectionVariantParams.getSelectOption("Filter2");
    >  
    >  
    >             ///
    >                 Your logic to extract values from oFilter1 and oFilter2
    >             ///
    >  
    >  
    >  
    >             /// logic to remove Filter1 and Filter2
    >             /// assigning empty values to Filter1 and Filter2, with ignoreEmptyString as true, this will be removed from the Selection Variant
    >  
    >  
    >                 var Filter1 = {
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
    > `ignoreEmptyString` and `selectionVariant` are deprecated from the 1.54 release. Alternatively you can use `bIgnoreEmptyString` and `aSelectionVariant`.

2.  Configure the descriptor file.

    1.  Add a controller extension and specify the path to the custom controller.

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
        > If a controller file already exists, add the new extension code in the same file.


3.  Configure the `customParams` card setting type to return custom parameters. Enter the name of the custom parameter function defined in your custom controller file.

    ```
    "card002_ReorderSoon": {
      "model": "purchaseOrder",
      "template": "sap.ovp.cards.list",
      "settings": {
        "title": "reorder Soon",
        "subTitle": "Less than 10 in stock",
        "listType": "condensed",
        "entitySet": "PurchaseSet",
        "customParams": "<function-name>"    // Depending on the logic you define in step 1, input the function name.
        ...
        ...
    ```


