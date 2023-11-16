<!-- loio594f1111efd54bc8baef87ef4dcb2a75 -->

# Smart Filter Bar

The `SmartFilterBar` control uses the OData metadata of an entity set to create a filter bar. The metadata define, for example, the possible filter criteria by which you can filter, whether a field supports the type-ahead feature and whether it has a value help.

To configure a smart filter bar, enter the following:


<table>
<tr>
<th valign="top">

Field

</th>
<th valign="top">

Explanation

</th>
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

Entity set that corresponds to the data source, for example, the SAP HANA view.

</td>
</tr>
</table>

> ### Restriction:  
> If you use an entity set that has an associated entity set, you cannot use the properties from the associated entity set as filters in APF, because APF cannot process these properties. The properties from the associated entity set can be selected as filters in the filter bar settings and are shown in the smart filter bar, but they do not have any effect on the analysis path.



## Runtime

At runtime, the smart filter bar is rendered based on the annotations of the specified service. Whether certain filters are already visible or not depends on the metadata. You can add more filters and select data as required. The settings you make are applied to the analysis path as soon as you do one of the following:

-   Enter a value in one of the input fields

-   Use the value help to select values and choose *OK*


The annotations also define whether the smart filter bar has mandatory fields. If there are mandatory fields, you can start your analysis only if they are filled. Otherwise the *Add Analysis Step* button is inactive.

When an external context is handed over to the APF-based app, for example, from a Smart Business KPI tile, all properties from the context that are part of the smart filter bar are preselected in the filter bar. All other properties are applied to the analysis path in the background, like hidden filters.

> ### Restriction:  
> When you define conditions for filters, you cannot use the 'Exclude' option because APF cannot handle this.

As of SAPUI5 1.46, the property `useDateRangeType` is set to true for APF-based applications. This enables you to make dynamic time selections if a date field has the filter restriction interval. For example, you can select *Last X days* and define the number of days. When you save an analysis path with a dynamic time selection, the time selection is always updated in relation to the current date when you open the analysis path.

> ### Note:  
> For analysis paths and variants that have been saved prior to upgrading to SAPUI5 1.46, date intervals are lost and must be set again.



### Variant Management

When you have adjusted the smart filter bar, for example, you have added further filters or selected data, you can save these settings as a variant. Saving a variant is independent from saving a path. Therefore, if you use a certain variant for an analysis path, change the settings in the filter and then save the path, the path is saved including all filters, but the variant is not overwritten.

**Related Information**  


[API Reference: `sap.ui.comp.smartfilterbar.SmartFilterBar`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar)

[Sample: `sap.ui.comp.smartfilterbar.SmartFilterBar`](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar)

[API Reference: `sap.ui.comp.variants.VariantManagement`](https://ui5.sap.com/#/api/sap.ui.comp.variants.VariantManagement)

