<!-- loio8e3b6be7128344e9bdcfceb3219f0de7 -->

# Using Analytical Parameters from the Back End

Both the list report and object page support analytical parameters that have been defined in the back end.

Parameters are values that are passed to the back end and that influence the way the back end processes the incoming request. Typically, parameters are used to normalize entries that have different units of measure \(UoM\). If your app uses currency values \(for example in the *Sales Amount* field\), it is possible that these sales amount values are stored in different currencies in the back end. Users can only see the overall sales amount if the back end can aggregate it - and to do so all the values must have the same currency. Since the actual data in the back end of your app has different currencies and should not be altered, you can configure “`Currency`” as a parameter to convert the sales amount values into the desired currency at runtime. When a user now enters EUR, for example, as a value in the *Sales Amount* field, all entries in the back end are converted automatically to this currency when the data is fetched.

> ### Example:  
> Here's a sample that shows the parameter value being passed to the back end. Note that it is not part of $filter query but is directly passed to the back end as parameter key/value pair:
> 
> http://<path\>/Customer\(P\_DisplayCurrency='EUR'\)/Set?$count=true

``



<a name="loio8e3b6be7128344e9bdcfceb3219f0de7__section_xd1_lrz_jsb"/>

## Additional Features in SAP Fiori Elements for OData V2

Analytical parameters are controlled by the `considerAnalyticalParameters` property, which is defined in the `manifest.json` of your application. As soon as the `considerAnalyticalParameters` flag is set to `true`, the framework automatically provides filters for the analytical parameter in the list report. These filters automatically become mandatory, and the data on the UI changes according to the value provided in the filter.

> ### Sample Code:  
> `manifest.json` showing the `considerAnalyticalParameters` property
> 
> ```
> "sap.ui.generic.app": {
>            "_version": "1.3.0",
>            "settings": {
>                 "considerAnalyticalParameters": true,
>                 "forceGlobalRefresh": true,
>                 "inboundParameters": {
>                               "Supplier": {
>                                     "useForCreate": true
>                                           }
>                                      },
>                 "objectPageDynamicHeaderTitleWithVM": true
>                        },
> }
> ```



<a name="loio8e3b6be7128344e9bdcfceb3219f0de7__section_v24_gjw_5sb"/>

## More Information

For more information applicable to SAP Fiori elements for OData V2, see the related section in this topic.

For more information about SAP Fiori elements for OData V4, see the section *Supporting Parameterized Entities* in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

