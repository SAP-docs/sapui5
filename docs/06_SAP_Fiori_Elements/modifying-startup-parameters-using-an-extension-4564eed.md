<!-- loio4564eed27ead43cdb43f8d420470ddfd -->

# Modifying Startup Parameters Using an Extension

You can modify startup parameters using an extension method.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2

You can use the extension method `modifyStartupExtension` to do the following:

-   Modify selection variants: You can modify the filter context while navigating from the SAP Fiori launchpad or from another application to the list report, the overview page, or the analytical list page.

    -   List report

        A source app may provide parameters which need to be modified so that they can be applied to the SmartFilterBar in the target app. For example, the source app provides the parameters `FiscalYear` and `FiscalPeriod`, but the target app only understands the `FiscalYearPeriod` parameter. This means that the two source app parameters need to be combined into one parameter, `FiscalYearPeriod`, in the target app before the paramaters can be applied to the SmartFilterBar.

        In some cases, parameters need to be added, deleted, or renamed.

    -   Analytical list page and overview page

        The filter context is passed to the application using the standard `SelectionVariant` annotation format.

        In addition, the filter context may contain:

        -   Values from a default variant \(such as `DisplayCurrency`\)

        -   SAP Fiori launchpad user default values

        -   CDS default values that come from `Common.FilterDefaultValue`


        > ### Note:  
        > The analytical list page ensures that the `SelectionVariant` passed to the application via the extension is filled with the filter context that would otherwise be set to the filter bar. This filter context can have different values based on the scenario:
        > 
        > -   External navigation to the analytical list page: The `SelectionVariant` will have the navigation context passed by the source application. It could have the `DisplayCurrency` value set in the SAP Fiori launchpad user default settings.
        > 
        > -   Navigation to the analytical list page via SAP Fiori launchpad tile: If a default variant is maintained, the `SelectionVariant` has values from the default variant. If not, it has the values from the SAP Fiori launchpad user default values. If these values are also missing, the `SelectionVariant` has the CDS defaults that come from the `Common.FilterDefaultValue`.


-   Dynamically choose a particular tab when starting a list report with multiple views and multiple tables

    This can be relevant, for example, when launching an app from the SAP Fiori launchpad or during external navigation to a list report with multiple views and multible tables. For example, when navigating from an overview page, depending on the card clicked, a particular tab should be selected in the list report.


The object `oStartupObject` passed in this method has the following properties:

-   `selectionVariant`: Contains the selection variant object that is passed from source app. You can modify this object in the target app.

-   `urlParameters`: Is used to decide which tab is to be loaded dynamically. The data in `urlParameters` is used only as a deciding factor for dynamically selecting a tab \(relevant for list report only\).

    For example, if `urlParameters` contains the sales order status "paid", the system chooses the tab that contains the sales order status "paid" in the multiple views application.

-   `selectedQuickVariantSelectionKey`: Optional string that is the key provided while creating the tabs in the manifest. By setting this value, the default tab is set \(relevant for list report only\).

-   `semanticDates` contains the semantic date range fields. You can also modify this object in the target app.


> ### Note:  
> The call to the extension point is performed only if there's initial navigation to the analytical list page. It is not triggered at other times \(for example, when the user changes variants or when the user makes changes to selections in the filter bar, or when navigating back or refreshing an analytical list page app that has an `iAppState`.



<a name="loio4564eed27ead43cdb43f8d420470ddfd__section_uyr_qcg_v2b"/>

## Code Samples



### List Report

To pass the filter context during navigation or during the initial launch of app, overwrite the `modifyStartupExtension` extension method in the list report.

> ### Sample Code:  
> ```
> 
> modifyStartupExtension: function(oStartupObject) {
>        oSelectionVariant = oStartupObject.selectionVariant;
>        if (oSelectionVariant) {
>            oSelectionVariant.removeParameter("TaxAmount");
>               oSelectionVariant.addParameter("Product", "EPM-2365436");
>         // use        oSelectionVariant.addSelectOption(“Price”, “I”, “BT”, “1000”,”5000” ?)  To specify a range value
>              
>        }
> 
>        // to override the semanticDate object
>        oStartupObject.selectionVariant.addParameter ("PickingDate","");
>        oStartupObject.semanticDates = {
>              "Dates":[
>                     {
>                            "PropertyName":"PickingDate",
>                           "Data": {
>                                  "operation":"YESTERDAY",
>                                  "value1":null,
>                                  "value2":null,
>                                  "key":"filterPickingDate",
>                                  "calendarType":"Gregorian"
>                           }
>                     }
>              ]
>        };
>   oStartupObject.selectedQuickVariantSelectionKey = "_tab2";
> }
> 
> ```



### Analytical List Page

To pass the filter context during navigation, define the `oStartupObject` object in your application extension.controller.js file as shown here:

> ### Sample Code:  
> ```
> 
> modifyStartupExtension: function (oStartupObject) {
> 	var oSelectionVariant = oStartupObject.selectionVariant;
> 	if (oSelectionVariant.getSelectOption("CustomerCountry") &oSelectionVariant.getSelectOption("CustomerCountry")["0"].Low === "AR") {
> 		oSelectionVariant.addSelectOption("WBSElement", "I", "EQ", "BLUE PRINT VALIDATION");
> 		oSelectionVariant.addSelectOption("CompanyCode", "I", "EQ", "EASI");
> 	}
> 	oStartupObject.selectionVariant.addSelectOption("c","I","EQ","");
> 	oStartupObject.semanticDates = {
> 		"Dates":[
> 			{
> 				"PropertyName":"SemanticCustomDate",
> 				"Data": {
> 					"operation":"YESTERDAY",
> 					"value1":null,
> 					"value2":null,
> 					"key":"SemanticCustomDate",
> 					"calendarType":"Gregorian"
> 				}
> 			}
> 		]
> 	};
> }
> 
> ```



### Overview Page

To pass the filter context during navigation, define the `oCustomSelectionVariant` object in your application extension.controller.js file as shown here:

> ### Sample Code:  
> ```
> modifyStartupExtension: function (oCustomSelectionVariant) {
>  
>     oCustomSelectionVariant.addSelectOption("SupplierName", "I", "EQ", "Talpa");
> }
> 
> ```

