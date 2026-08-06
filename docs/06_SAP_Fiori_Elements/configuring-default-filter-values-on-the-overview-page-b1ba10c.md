<!-- loiob1ba10c4a7604672b5e5c16c96858778 -->

# Configuring Default Filter Values on the Overview Page

You can set default filter values for the global filter bar in the overview page.

> ### Note:  
> -   This topic is relevant to SAP Fiori elements for OData V2.
> 
> -   The global filter bar is rendered using the `ap.ui.comp.smartfilterbar.SmartFilterBar` control.

For the *Standard* variant, you can configure default filter field values by using the `UI.SelectionVariant` annotation, the `Common.FilterDefaultValue` annotation, or user default parameters defined in target mapping in SAP Fiori launchpad.

For custom variants, filter fields with value help can additionally use user default values from the SAP Fiori launchpad. The filter fields must satisfy the following conditions:

-   A target mapping exists between the filter field and the corresponding user default field in the SAP Fiori launchpad.

-   A value has been maintained for the mapped user default value.


When these conditions are met, the *Define Condition* tab of the value help dialog displays an additional *User Defaults* option. Selecting this option configures the filter field to dynamically retrieve its value from the corresponding user default values in SAP Fiori launchpad. All other filter fields use the values persisted in the variant.



<a name="loiob1ba10c4a7604672b5e5c16c96858778__section_h5k_12n_dsb"/>

## Using the `SelectionVariant` Annotation

You can either provide the `UI.SelectionVariant` annotation directly, or as part of the `UI.SelectionPresentationVariant`. The following sample code shows a `SelectionVariant` with a default value for a parameter field \(`P_CompanyCode`\) and a filter field \(`Customer`\):

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

> ### Note:  
> `SelectionOption` is not supported in ABAP CDS annotation. Please use the local XML annotation.

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



<a name="loiob1ba10c4a7604672b5e5c16c96858778__section_dk1_x2n_dsb"/>

## Using the `Common.FilterDefaultValue` Annotation

If only single values need to be applied for the filter fields, you can use the `Common.FilterDefaultValue` annotation. This annotation doesn't support complex values \('Supplier StartsWith "AB"'\) or multiple values \('Status = "A" or Status = "B"\).

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
> -   If `SelectionVariant` is provided, it takes precedence and `Common.FilterDefaultValue` is ignored for all other filters.
> 
> -   Default values from the annotation are applied only on application load and only when the application is launched with a standard variant.
> 
> -   Default values from the annotation don't affect the visibility of the filter field values.
> 
> -   Filter values applied using the above logic are always cleared and overwritten by the incoming navigation context.
> 
> -   When adding a date value, use the YYYY-MM-DD format.
> 
> -   Note the special handling for the `DisplayCurrency` field, for which default values can also come from SAP Fiori launchpad \(FLP\).



<a name="loiob1ba10c4a7604672b5e5c16c96858778__section_jnl_whn_dsb"/>

## Combining Various Sources of Values for the Filter Field

In addition to the default values defined using annotations, a filter field can receive values from the variant, navigation context, or SAP Fiori launchpad. These sources are evaluated based on the following priority:


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

Overrides the custom variant and standard variant coming from the source application in the target application. The navigation context is applied.

> ### Note:  
> Navigation context also refers to any context coming from the tile's SAP Fiori launchpad target mapping configuration \(navigation source\), or default values that are configured in the SAP Fiori launchpad target mapping of the SAP Fiori elements application \(navigation target\).



</td>
</tr>
<tr>
<td valign="top">

Custom variant \(this variant isn't the standard variant, and there is no navigation context\)

</td>
<td valign="top">

When the application is launched with a custom variant, filter fields configured with the *User Default* option dynamically retrieve their values from the corresponding SAP Fiori launchpad user defaults. All other filter fields use the values persisted in the variant.

</td>
</tr>
<tr>
<td valign="top">

Standard variant as default \(no navigation context\) combined with optional `UI.SelectionVariant` or `Common.FilterDefaultValue` annotations

</td>
<td valign="top">

The user default values from SAP Fiori launchpad are merged with the default values from the annotation, using the following logic:

1.  If the filter field has only values from user defaults defined in theSAP Fiori launchpad, and none from the annotation, the user default values are retained.

2.  If the filter field has only values from the annotation but none from the user default values defined in theSAP Fiori launchpad, then the values from the annotation are retained.

3.  If the filter field has values from both sources, **only** the user default values defined in the SAP Fiori launchpad are considered.




</td>
</tr>
</table>

> ### Tip:  
> Unlike the default values from annotations or the manifest, the user default values from SAP Fiori launchpad mark the standard variant dirty.

**Related Information**  


[Configuring the Global Filter on the Overview Page](configuring-the-global-filter-on-the-overview-page-73d9693.md "You can configure the global filter to allow users to filter the data displayed on one or more cards.")

