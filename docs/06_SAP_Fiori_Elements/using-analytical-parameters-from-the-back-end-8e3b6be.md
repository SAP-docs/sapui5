<!-- loio8e3b6be7128344e9bdcfceb3219f0de7 -->

# Using Analytical Parameters from the Back End

You can use analytical parameters defined in the back end on the list report page and the object page.

Parameters are values that are passed to the back end and that influence the way the back end processes the incoming request. Typically, parameters are used to normalize entries that have different units of measure \(UoM\). If your app uses currency values \(for example in the *Sales Amount* field\), it is possible that these sales amount values are stored in different currencies in the back end. Users can only see the overall sales amount if the back end can aggregate it - and to do so all the values must have the same currency. Since the actual data in the back end of your app has different currencies and should not be altered, you can configure "`Currency`" as a parameter to convert the sales amount values into the desired currency at runtime. When a user now enters EUR, for example, as a value in the *Sales Amount* field, all entries in the back end are converted automatically to this currency when the data is fetched.

> ### Example:  
> Here's a sample that shows the parameter value being passed to the back end. Note that it is not part of `$filter` query but is directly passed to the back end as parameter key/value pair:
> 
> `http://<path>/Customer(P_DisplayCurrency='EUR')/Set?$count=true`

``



<a name="loio8e3b6be7128344e9bdcfceb3219f0de7__section_v24_gjw_5sb"/>

## Related Links

For more information, see the [Supporting Parameterized Entities](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__suppprting_parameterized_entities_subsection) section in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Using Analytical Parameters from the Back End](using-analytical-parameters-from-the-back-end-412a077.md).

