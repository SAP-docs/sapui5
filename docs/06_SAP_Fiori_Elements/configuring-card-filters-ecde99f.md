<!-- loioecde99ffaf2d4c5d8e95552415588b74 -->

# Configuring Card Filters

You can add filters to all card types, by using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term or by passing filter parameter in the URL.



The following example shows filter configuration in the annotation document. The record set is filtered by the `TotalSum` property and returns values between 0 and 8000. You can provide multiple filters in the `SelectOptions` collection.

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
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionVariant #bubble : {
>     SelectOptions : [
>         {
>             PropertyName : TotalSum,
>             Ranges : [
>                 {
>                     Sign : #I,
>                     Option : #BT,
>                     Low : '0',
>                     High : '8000'
>                 }
>             ]
>         }
>     ]
> }
> 
> ```



The preference for displaying the currency type is taken from the SAP Fiori Launchpad user settings in the `DisplayCurrency` field of an application. You can also set filters for SAP Fiori overview page by passing a filter paramter in the URL. Applicable when you launch SAP Fiori overview pages from SAP Fiori Launchpad or from any other application with a filter parameter.

> ### Note:  
> You can only pass strings or integers as filter parameters. The filter applies automatically if the filter property exists in the entityset.

For example: http://abc\#Equipment-overviewPage?EquipmentNumber=123456

