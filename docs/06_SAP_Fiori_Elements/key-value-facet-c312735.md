<!-- loioc312735b7417423ea239394b3b4f4018 -->

# Key Value Facet



If you add a `UI.ReferenceFacet` that points to `UI.DataPoint`, the title and value of the `UI.DataPoint` are rendered as follows:

![](images/Key_Value_Facet_aed9f13.jpg)

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.DataPoint" Qualifier="ProductCategory">
>       <Record>
>             <PropertyValue Property="Value" Path="ProductCategory"/>
>             <PropertyValue Property="Title" String="{@i18n>ProductCategory}"/>
>       </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.dataPoint: {
>   title: '{@i18n>@ProductCategory}'
> }
> ProductCategory;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.DataPoint #ProductCategory : {
>     Value : ProductCategory,
>     Title : '{@i18n>@ProductCategory}'
> }
> ```

The data point can also be colored based on criticality.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.DataPoint" Qualifier="StockAvailability">
>       <Record Type="UI.DataPointType">
>            <PropertyValue Property="Title" String="Availability" />
>            <PropertyValue Property="Value" Path="stock/availability" />
>            <PropertyValue Property="Criticality" Path="stock/availability"/>
>       </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.dataPoint: {
>   title: 'Availability',
>   criticality: 'stock/availability'
> }
> stock/availability;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.DataPoint #StockAvailability : {
>     Value : stock/availability,
>     Title : Availability,
>     Criticality : stock/availability
> }
> 
> ```

> ### Tip:  
> If you add a semantic object annotation to the value field of the `DataPoint`, the value is shown as a link but does not show any criticality information. For more information about adding the semantic object annotation, see the section *Using a Link Control* in [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).



<a name="loioc312735b7417423ea239394b3b4f4018__section_gp5_h2l_r4b"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Note:  
> You can also enable in-page and external navigation from a data point title. For more information, see [Navigation from Header Facet Title](navigation-from-header-facet-title-fa0ca22.md).

