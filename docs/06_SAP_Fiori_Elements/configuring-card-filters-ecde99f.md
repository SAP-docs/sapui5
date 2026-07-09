<!-- loioecde99ffaf2d4c5d8e95552415588b74 -->

# Configuring Card Filters

You can add filters to any card type to limit the data it displays. Filters can be defined using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation or by passing filter parameter in the URL.



> ### Note:  
> Filters are not passed to custom cards in SAP Fiori elements for OData V4.



<a name="loioecde99ffaf2d4c5d8e95552415588b74__section_h2m_v12_ldb"/>

## Filtering Cards Using the `SelectionVariant` Annotation

The `com.sap.vocabularies.UI.v1.SelectionVariant` annotation defines a filter that's applied to the card's data. Each filter is added to the `SelectOptions` collection. You can define multiple filters in a single `com.sap.vocabularies.UI.v1.SelectionVariant`.

The following code sample filters the data using the `TotalSum` property and returns values between 0 and 8000.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.SelectionVariant" Qualifier="bubble">
>     <Record>
>         <PropertyValue Property="SelectOptions">
>             <Collection>
>             <Record>
>                <PropertyValue Property="PropertyName" PropertyPath="TotalSum" />
>                <PropertyValue Property="Ranges">
>                   <Collection>
>                      <Record>
>                         <PropertyValue Property="Sign"
>                            EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeSignType/I" />
>                         <PropertyValue Property="Option"
>                            EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeOptionType/BT" />
>                         <PropertyValue Property="Low" String="0" />
>                         <PropertyValue Property="High" String="8000" />
>                      </Record>
>                   </Collection>
>                </PropertyValue>
>             </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionVariant #bubble: {
>     SelectOptions: [
>         {
>             PropertyName: TotalSum,
>             Ranges: [
>                 {
>                     Sign: #I,
>                     Option: #BT,
>                     Low: '0',
>                     High: '8000'
>                 }
>             ]
>         }
>     ]
> }
> ```

The currency type displayed in cards is taken from the SAP Fiori launchpad user settings in the `DisplayCurrency` field.



## Filtering Cards Using the URL Parameter

You can also set filters by passing a filter parameter in the URL. This applies when you launch the overview page from SAP Fiori launchpad or from any other application with a filter parameter.

The filter is applied automatically if the filter property exists in the entity set of the card.

For example:`http://abc#Equipment-overviewPage?EquipmentNumber=123456`

> ### Note:  
> You can only pass strings or integers as filter parameters.

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

