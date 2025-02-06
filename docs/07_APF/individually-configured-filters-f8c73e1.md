<!-- loiof8c73e17084f4b2baf2a35ad9c85f28b -->

# Individually Configured Filters

Use individually configured filters if you want to use more than one OData service to configure your filters.

The following video shows how to configure filters:



For each filter, you can configure the following:

-   The property for which a filter is displayed
-   The values that are listed in the value help for the property

    You may have to configure a value help request to generate the list of values that the user can choose from to filter the data.

    You can also maintain the values manually if you don't have a service available that produces the desired values.

-   The values that are preselected in the value help.

When you launch your APF-based application from a Smart Business KPI tile, you must also consider whether an additional filter is handed over with the Smart Business context and how that affects the filter you are configuring.

> ### Note:  
> Do not define a filter for URL parameters. For example, if you configure SAPClient as URL parameter, you cannot define an additional filter for SAPClient because this may result in an empty data response.

You can use the fields listed in the following table to configure a filter.

Not all of the fields are relevant for each use case. For example, you can configure a value help request to determine the entries in the value help list. A context resolution request is necessary if the Smart Business context contains not only single values, but also other operators. The context resolution request then resolves the context into a list of single values. This is necessary because a filter can only display single values. For details about possible use cases, see [Use Cases for Configuring Filters](use-cases-for-configuring-filters-146f649.md).


<table>
<tr>
<th valign="top" colspan="2">

Field

</th>
<th valign="top">

Explanation

</th>
</tr>
<tr>
<td valign="top" rowspan="4">

Basic Data

</td>
<td valign="top">

Filter Title

</td>
<td valign="top">

The label displayed for the filter at runtime.

</td>
</tr>
<tr>
<td valign="top">

Property

</td>
<td valign="top">

The property for which you want to configure a filter. The value help is populated with the properties of all entity sets that are used in the configuration.

> ### Note:  
> The value help is empty if you have not yet entered any request data in the configuration. To avoid this, ensure you enter the required request data before configuring a filter. Request data can be entered, for example, in the *Value Help* section below or in an analysis step.

The filter property is also used as the property displayed in the filter at runtime if an alias is not defined. Values that the user selects in the filter are handed over to the entire analysis path as filter.

</td>
</tr>
<tr>
<td valign="top">

Do Not Show Filter at Runtime

</td>
<td valign="top">

Select this checkbox if you do not want to expose this filter at runtime. This is useful when a request requires a mandatory filter or parameter that is not coming in from outside APF, for example, with the Smart Business context,and if it is not necessary that users see or change the filter.

> ### Note:  
> When you select this checkbox, any information you may have entered for value help request and context resolution request is deleted. When you decide later on to show the filter at runtime, you must fill in this information again as required.



</td>
</tr>
<tr>
<td valign="top">

Selection Mode

</td>
<td valign="top">

Choose whether you want to allow single selection or multiple selections.

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Default Values

</td>
<td valign="top">

Default Value Mode

</td>
<td valign="top">

Select *None* if you do not want any values to be selected by default. This option is useful for filters that are optional, have a lot of values, and support multiple selections.

Select *Automatic Values* if you want the system to determine the default values automatically. In case of single selection, the first entry in the value help of the filter is selected by default. In case of multiple selection, all values are selected by default.

Select *Fixed Values* if you want to list specific values that are preselected in the value help.

> ### Note:  
> Do not enter sensitive data as default values for filters. Other APF users can read the configuration and thus have access to this data.

Select *Function* if you want to specify a JavaScript function that calculates the default values. This function must be included in the Business Server Pages \(BSP\) application.

> ### Note:  
> Using a function to calculate the default values is not possible if you use the generic APF runtime application.



</td>
</tr>
<tr>
<td valign="top">

Default Values/Function

</td>
<td valign="top">

Depending on the default value mode, either specify the fixed default values or a function.

If you want to enter a date as a fixed default value, you can do so in one of the following formats:

-   <dd.mm.yyyy\>, for example, 28.04.2018
-   <mm/dd/yyyy\>, for example, 04/28/2018
-   <yyyy-mm-dd\>, for example, 2018-04-28

> ### Note:  
> If a context is handed over from a Smart Business KPI tile for this filter property, this context replaces the default values. The default values are used as a fallback only. This is necessary because it is not possible to have an empty filter.



</td>
</tr>
<tr>
<td valign="top" rowspan="7">

Value Help

</td>
<td valign="top">

Value Help Mode

</td>
<td valign="top">

Select *Value Help Request* if you want to specify a request to generate the list of values in the value help.

Select *Configured List of Values* if you want to enter the values for the value help manually.

Select *None* if none of the above options applies. The values in the value help can then result only from default values or from a context that is handed over from outside, for example, from a Smart Business KPI tile.

</td>
</tr>
<tr>
<td valign="top">

Values \(displayed only when you select *Configured List of Values*\)

</td>
<td valign="top">

Manual list of values for the value help.

</td>
</tr>
<tr>
<td valign="top" colspan="2">

The following fields are displayed only when you select *Value Help Request*.

</td>
</tr>
<tr>
<td valign="top">

Service

</td>
<td valign="top">

Path to the OData service root. If you use ABAP CDS views or BW OData queries, select a service from the value help, which lists all services available on SAP Gateway. If you use calculation views, you must enter the service manually.

</td>
</tr>
<tr>
<td valign="top">

Entity Set

</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view. This field is mandatory if a service has been entered.

</td>
</tr>
<tr>
<td valign="top">

Properties

</td>
<td valign="top">

The properties that determine the values in the value help. Select at least the filter property or the alias property. You can also select further properties. For example, you can select CompanyCode and Revenue so that the value help lists those company codes for which revenue exists.

If you select both a filter property and the corresponding text property, for example, CompanyCode and CompanyCodeName, a concatenation of key and text is displayed in the filter at runtime and you can search for both of them.

</td>
</tr>
<tr>
<td valign="top">

Alias

</td>
<td valign="top">

The property displayed in the filter. It is used if the field name of the filter's property is different in the value help request. If the property and the alias are the same, the alias can be omitted.

</td>
</tr>
<tr>
<td valign="top" rowspan="4">

Context Resolution

</td>
<td valign="top">

Use Value Help Request

</td>
<td valign="top">

You can configure the same request for both value help and context resolution by selecting the *Use Value Help Request* checkbox in the context resolution request.

When you select the checkbox, all context resolution fields are filled with the same entries as the corresponding value help fields and cannot be edited. When you deselect the checkbox, the value help entries remain but can now be edited.

If you change the value help entries, the context resolution entries are updated accordingly.

</td>
</tr>
<tr>
<td valign="top">

Service

</td>
<td valign="top">

The request used for resolving a context into single values for the value help.

Path to the OData service root. If you use ABAP CDS views or BW OData queries, select a service from the value help, which lists all services available on SAP Gateway. If you use calculation views, you must enter the service manually.

You should specify a context resolution request if there is a possibility that a context is handed over to the APF-based app that does not contain single values.

If you did not specify a context resolution request, but a context resolution is necessary to be able to display the values in the value help, the filter for the corresponding property is not displayed on the UI. Instead, the context is applied to the analysis path in the background.

</td>
</tr>
<tr>
<td valign="top">

Entity Set

</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view.

</td>
</tr>
<tr>
<td valign="top">

Properties

</td>
<td valign="top">

The properties that determine which values are preselected in the filter. Select at least the filter property or the alias property. You can also select further properties.

</td>
</tr>
</table>

