<!-- loiof27ad7bc1f9c4b0d947b1fb18c37e94c -->

# Configuring Default Filter Values

You can set default filter values for filter bar fields, for example.

For the *Standard Variant*, application developers can configure default filter field values by using the `UI.SelectionVariant` annotation or the `Common.FilterDefaultValue` annotation.



<a name="loiof27ad7bc1f9c4b0d947b1fb18c37e94c__section_h5k_12n_dsb"/>

## Using the `SelectionVariant` Annotation

You can either provide the `UI.SelectionVariant` annotation directly, or as part of the `UI.SelectionPresentationVariant`. See [Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md) to know more on the manifest configuration to specify the `SelectionVariant` to be used. Here’s the sample `SelectionVariant` showing a default value for a parameter field \(`P_CompanyCode`\) and a filter field \(`Customer`\):

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.SelectionVariant" Qualifier="Default">
>     <Record>
>         <PropertyValue Property="Parameters">
>             <Collection>
>                 <Record Type="UI.Parameter">
>                     <PropertyValue Property="PropertyName" PropertyPath="P_CompanyCode" />
>                     <PropertyValue Property="PropertyValue" String="EASI" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="SelectOptions">
>             <Collection>
>                 <Record Type="UI.SelectOptionType">
>                     <PropertyValue Property="PropertyName" PropertyPath="Customer"/>
>                     <PropertyValue Property="Ranges">
>                         <Collection> 
>                             <Record Type="UI.SelectionRangeType">
>                                 <PropertyValue EnumMember="UI.SelectionRangeSignType/I" Property="Sign"/>
>                                 <PropertyValue EnumMember="UI.SelectionRangeOptionType/EQ" Property="Option"/>
>                                 <PropertyValue Property="Low" String="ABC"/>
>                             </Record>
>                         </Collection>
>                     </PropertyValue>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.selectionVariant: [
>   {
>     qualifier: 'SVForQuantity',
> 	  parameters: [{name: 'PropertyName', value: 'P_CompanyCurrency' },{ name: 'PropertyValue', value: 'EASI'}]
>   }
> ]
> ```
> 
> > ### Note:  
> > `SelectionOption` is not supported in ABAP CDS annotation. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionVariant #Default : {
>     Parameters : [
>         {
>             $Type : 'UI.Parameter',
>             PropertyName : P_CompanyCode,
>             PropertyValue : 'EASI'
>         }
>     ],
>     SelectOptions : [
>         {
>             $Type : 'UI.SelectOptionType',
>             PropertyName : Customer,
>             Ranges : [
>                 {
>                     $Type : 'UI.SelectionRangeType',
>                     Sign : #I,
>                     Option : #EQ,
>                     Low : 'ABC'
>                 }
>             ]
>         }
>     ]
> }
> 
> ```



<a name="loiof27ad7bc1f9c4b0d947b1fb18c37e94c__section_dk1_x2n_dsb"/>

## Using the `Common.FilterDefaultValue` Annotation

If only single values need to be applied for the filter fields, application developers can use the `Common.FilterDefaultValue` annotation. This doesn't allow complex values \('Supplier StartsWith "AB"'\) or multiple values \('Status = "A" or Status = "B"'\).

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType/Supplier">
>     <Annotation Term="Common.FilterDefaultValue" String="100000047"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @Consumption.filter.defaultValue: '100000047'
> Supplier;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductType with {
>     @Common.FilterDefaultValue : '100000047'
>     Supplier
> };
> ```

> ### Note:  
> 1.  If the `SelectionVariant` is provided, then this is used and the `Common.FilterDefaultValue` is ignored for all other filters.
> 
> 2.  The default values coming from the annotation are considered only on application load and only when the application is launched with a standard variant.
> 
> 3.  The default values coming from the annotation don't affect the visibility of the filter field values.
> 
> 4.  The filter values applied via the above logic are always cleared completely and overwritten by the incoming navigation context.
> 
> 5.  When adding a date value, be sure to use the YYYY-MM-DD format.
> 
> 6.  Note the special handling for the `DisplayCurrency` field, for which default values can also come from SAP Fiori launchpad \(FLP\). For more information, see the section *Handling Default Values from SAP Fiori Launchpad \(FLP\)* in [Navigation to an App \(Inbound Navigation\)](navigation-to-an-app-inbound-navigation-c337d8b.md).
> 
> 7.  For the analytical list page in SAP Fiori elements for OData V2, you must set the manifest property `filterDefaultsFromSelectionVariant`: true to ensure the filter defaults from the `SelectionVariant` are considered.



<a name="loiof27ad7bc1f9c4b0d947b1fb18c37e94c__section_jnl_whn_dsb"/>

## Combining Various Sources of Values for the Filter Field

Apart from the default values via annotation as described above, a filter field could also have values coming via the variant or navigation context or SAP Fiori launchpad. All these are considered based on the following priority:


<table>
<tr>
<th valign="top">

Parameters coming from ...



</th>
<th valign="top">

Result



</th>
</tr>
<tr>
<td valign="top">

Navigation context



</td>
<td valign="top">

Overrides user defined default variant and standard variant coming from the source app in the target app. The navigation context is applied.

> ### Note:  
> Navigation context also means any context coming from the tile's SAP Fiori launchpad target mapping configuration \(navigation source\), or default values that are configured in the SAP Fiori launchpad target mapping of the SAP Fiori elements application \(navigation target\).



</td>
</tr>
<tr>
<td valign="top">

User-defined default variant \(this variant is not equal to the standard variant and there is no navigation context\)



</td>
<td valign="top">

Overrides everything, including the user default values from SAP Fiori launchpad.



</td>
</tr>
<tr>
<td valign="top">

Standard variant as default \(there is no navigation context\) combined with optional `UI.SelectionVariant` or `Common.FilterDefaultValue` annotations.



</td>
<td valign="top">

User-defined default values are applied and combined with the values from the standard variant. The user default values from SAP Fiori launchpad are merged with the default values coming from the annotation with the following logic:

1.  If the filter field has only values from SAP Fiori launchpad user default values, but nothing from the annotation, the user default values are retained.

2.  If the filter field has only values coming from the annotation but nothing from the SAP Fiori launchpad user default values, then the default values from the annotation are retained.

3.  If the filter field has values from both the SAP Fiori launchpad user default values and the annotations, **only** the SAP Fiori launchpad user default values are considered.




</td>
</tr>
</table>

> ### Tip:  
> Unlike the default values from annotations or the manifest, the user default values from SAP Fiori launchpad mark the standard variant dirty.



<a name="loiof27ad7bc1f9c4b0d947b1fb18c37e94c__section_o4y_t5m_rnb"/>

## Additional Features in SAP Fiori Elements for OData V4

The filter fields that are applied as the default value are always made visible in the filter bar – even if they are not configured as part of `UI.SelectionFields`.

**Related Information**  


[Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md "You can define application-specific selection fields by using com.sap.vocabularies.UI.v1.SelectionFields and field groups for the filter popup.")

[Configuring the Visual Filter Bar](configuring-the-visual-filter-bar-33f3d80.md "The visual filter bar enables end users to select filter values based on measure values in addition to the filters and filter values already selected in the regular filter bar.")

