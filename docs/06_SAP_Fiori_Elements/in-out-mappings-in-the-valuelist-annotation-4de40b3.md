<!-- loio4de40b31324e4876a8421f6f642e0140 -->

# `In`/`Out` Mappings in the `ValueList` Annotation

You can use the `In`/`Out` mappings as part of the `ValueList` annotation for linking purposes.

> ### Note:  
> In SAP Fiori elements for OData V2, `In`/`Out` mappings are supported only for analytical list page.

This topic provides information about the structure of the `ValueList` annotation and how the `In`/`Out` mappings there allow linking between fields of the main entity and fields of the value help entity.



**`Common.ValueList`**


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Details



</th>
</tr>
<tr>
<td valign="top">

Label \(Optional, String\)



</td>
<td valign="top">

Enter label information



</td>
</tr>
<tr>
<td valign="top">

 `CollectionPath` \(Required, String\)



</td>
<td valign="top">

Entity set for retrieving value help



</td>
</tr>
<tr>
<td valign="top">

 `SearchSupported` \(Required, Bool\)



</td>
<td valign="top">

True or False



</td>
</tr>
<tr>
<td valign="top">

Parameters



</td>
<td valign="top">

Parameters to map a main entity set to a value help entity set.

-   Record type `Common.ValueListParameterIn`: determines the property of a main entity set that is taken over into the filter query of the value help entity set

-   Record type `Common.ValueListParameterOut`: determines the property from the value help entity set that sets the property value in the main entity set

-   Record type `Common.ValueListParameterInOut`: combines both the `In` and `Out` parameters


Parameter properties:

-   `LocalDataProperty`
-   `ValueListProperty`



</td>
</tr>
</table>

> ### Tip:  
> When you use the value help in a filter field of the list report, the `Out` parameters are only applied if the target property \(`LocalDataProperty`\) is visible in the filter bar.



<a name="loio4de40b31324e4876a8421f6f642e0140__section_yfz_xrx_cqb"/>

## Example

Look at entity set `"Z0020"` \(main entity set\) with the 3 filters: region, country, and plant. The `SelectionFields` annotation has the following dimensions:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.SelectionFields">
> 	<Collection>
> 		<PropertyPath>RegionID</PropertyPath>
> 		<PropertyPath>CountryID</PropertyPath>
> 		<PropertyPath>PlantID</PropertyPath>
> 	</Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.SelectionField: [
>   {
>     position: 1 ,
>     element: 'REGIONID'
>   }
> ]
> REGIONID;
> 
> @UI.SelectionField: [
>   {
>     position: 2 ,
>     element: 'COUNTRYID'
>   }
> ]
> COUNTRYID;
> 
> @UI.SelectionField: [
>   {
>     position: 3 ,
>     element: 'PLANTID'
>   }
> ]
> PLANTID;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionFields : [
>     RegionID,
>     CountryID,
>     PlantID
> ]
> ```

The value help for these dimensions display values present in the main entity set only. However, with the `ValueList` annotation you can retrieve records from a selection list.

Consider the following table in which all of the entity sets refer to the same business object using different dimension names.

****


<table>
<tr>
<th valign="top">

Business Object



</th>
<th valign="top">

Z0020 \(Main Entity Set\)



</th>
<th valign="top">

Z0021 \(Entity Set\)



</th>
<th valign="top">

Z0022 \(Entity Set\)



</th>
<th valign="top">

Z0023 \(Entity Set\)



</th>
</tr>
<tr>
<td valign="top">

Region



</td>
<td valign="top">

RegionID



</td>
<td valign="top">

RegionCode



</td>
<td valign="top">

RegionIdentifier



</td>
<td valign="top">

RegionNumber



</td>
</tr>
<tr>
<td valign="top">

Country



</td>
<td valign="top">

CountryID



</td>
<td valign="top">

CountryCode



</td>
<td valign="top">

CountryIdentifier



</td>
<td valign="top">

CountryNumber



</td>
</tr>
<tr>
<td valign="top">

Plant



</td>
<td valign="top">

PlantID



</td>
<td valign="top">

PlantCode



</td>
<td valign="top">

PlantIdentifier



</td>
<td valign="top">

PlantNumber



</td>
</tr>
</table>



<a name="loio4de40b31324e4876a8421f6f642e0140__section_nwb_whk_2qb"/>

## Understanding the `ValueList` Annotation

> ### Sample Code:  
> ```
> <Annotations Target="Z0020_CDS.Z0020Type/CountryID">  
> 
> <Annotation Term="Common.ValueList" Qualifier="0020_Country">
> ```

This specifies the `ValueList` annotation is for the `"CountryID"` dimension in entity set `Z0020`, which is the main entity set.

> ### Sample Code:  
> ```
> <Annotation Term="Common.ValueList" Qualifier="0020_Country">
>     <Record>
>         <PropertyValue Property="Label" String="Country"/>
>         <PropertyValue Property="CollectionPath" String="Z0022"/>
> ```

This specifies that the entity set for fetching the value help is `Z0022`.

> ### Sample Code:  
> ```
> <PropertyValue Property="Parameters">
> ```

This lists all the `In` and `Out` parameters to map the main entity set property with the value help entity set property. This is required because the same business object can have different names in the two entity sets.

> ### Sample Code:  
> ```
> <Record Type="Common.ValueListParameterOut">
>     <PropertyValue Property="LocalDataProperty" PropertyPath="CountryID"/>
>     <PropertyValue Property="ValueListProperty" String="CountryIdentifier"/>
> </Record> 
> ```

`Out` parameters determine properties of the main entity set that make it to the filter query and also determine the properties from the value help entity set that influences their value.

`LocalDataProperty` points to the property in the main entity set – this is the property name with which it needs to be added to the filter query if it is to influence the contents.

`ValueListProperty` refers to the property within the value help entity set that provides the `"Value"` for the entity of the main entity set which makes up the filter query and is referred via the `LocalDataProperty`.

So the value help as configured above lists all the `"CountryIdentifier"` values from the value help entity set. Once a user chooses a particular record with `CountryIdentifier`, say `"001"`, the value `"001"` is added to the filter query but with the `LocalDataProperty` name instead of the `ValueListProperty` name. Therefore, the filter query reads `$filter=CountryID="001"` and **not** `$filter=CountryIdentifier="001"`, which is not understandable by the content area that deals only with main entity set.

> ### Sample Code:  
> ```
> <Record Type="Common.ValueListParameterIn">
>     <PropertyValue Property="LocalDataProperty" PropertyPath="RegionID"/>
>     <PropertyValue Property="ValueListProperty" String="RegionIdentifier"/>
> </Record>  
> ```

`In` parameters help in filtering the data set of the value help entity set.

The `LocalDataProperty` specifies the property from the main entity set which, if present already in the filter query, influences the data fetched from the value help entity set and displayed in the value help dialog.

The `ValueListProperty` specifies the property from the value help entity set that is filtered based on the value coming from the `LocalDataProperty`.

So in the example above, if the user has already filtered on `"Region"` resulting in `$filter= RegionID="ABC"` \(maybe via a `Region` filter field\), then, because `RegionID` is an `In` parameter for the `Country` value help, the value help dialog of `CountryID` only lists the records with `"RegionIdentifier"="ABC"`. So end users can only select the `Country` belonging to the chosen `Region` \(ABC\)

The complete `ValueList` annotation for the `CountryID` filter field is as follows:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="Z0020_CDS.Z0020Type/CountryID">
>     <Annotation Term="Common.ValueList" Qualifier="0020_Country">
>         <Record>
>             <PropertyValue Property="Label" String="Country"/>
>             <PropertyValue Property="CollectionPath" String="Z0022"/>
>             <PropertyValue Bool="false" Property="SearchSupported"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="CountryID"/>
>                         <PropertyValue Property="ValueListProperty" String="CountryIdentifier"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterIn">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="RegionID"/>
>                         <PropertyValue Property="ValueListProperty" String="RegionIdentifier"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Consumption.valueHelpDefinition:
>         [{
>           entity :{
>             name    : 'Z0022'
>           },
>             label  : 'Country',
>             additionalBinding: [
>               {
>                 localElement: 'CountryID',
>                 element: 'CountryIdentifier',
>                 usage: #RESULT // Common.ValueListParameterOut
>                },
> {
>                 localElement: 'RegionID',
>                 element: 'RegionIdentifier',
>                 usage: #FILTER // Common.ValueListParameterIn
>                }              
>             ]
>           }
>        ]
> CountryID;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> CountryID : UUID @(
>     Common : {
>         ValueList #0020_Country : {
>             Label : 'Country',
>             CollectionPath : 'Z0022',
>             Parameters : [
>             {
>                 $Type : 'Common.ValueListParameterOut',
>                 LocalDataProperty : CountryID,
>                 ValueListProperty : 'CountryIdentifier'
>             },
>             {
>                 $Type : 'Common.ValueListParameterIn',
>                 LocalDataProperty : RegionID,
>                 ValueListProperty : 'RegionIdentifier'
>             }
>             ]
>        }
>     }
> );
> ```

Similarly, we can have a `ValueList` annotation for the `Plant` field so that it reacts to values from `Region` as well as `Country` filter fields.

> ### Sample Code:  
> `ValueList` annotation for the `PlantID` filter field
> 
> ```
> <Annotations Target="Z0020_CDS.Z0020Type/PlantID">
>     <Annotation Term="Common.ValueList" Qualifier="0020_Plant">
>         <Record>
>             <PropertyValue Property="Label" String="Plant"/>
>             <PropertyValue Property="CollectionPath" String="Z0023"/>
>             <PropertyValue Bool="false" Property="SearchSupported"/>
>             <PropertyValue Property="Parameters">
>                 <Collection>
>                     <Record Type="Common.ValueListParameterOut">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="PlantID"/>
>                         <PropertyValue Property="ValueListProperty" String="PlantNumber"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterIn">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="RegionID"/>
>                         <PropertyValue Property="ValueListProperty" String="RegionNumber"/>
>                     </Record>
>                     <Record Type="Common.ValueListParameterIn">
>                         <PropertyValue Property="LocalDataProperty" PropertyPath="CountryID"/>
>                         <PropertyValue Property="ValueListProperty" String="CountryNumber"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations> 
> ```

Since both `CountryID` and `RegionID` are marked as `In` parameters in the `ValueList` annotation of the `PlantID`, a value in `CountryID` filter field and `RegionID``PlantID` filter field only shows the plants belonging to the chosen `Region` and `Country`:

-   A selection in `RegionID` filter field leads to:

    -   Only countries \(`"CountryIdentifier"`s\) belonging to the selected filter means that the value help dialog of the `Region` \(`"RegionID"`\) is shown within the `CountryID` value help dialog.

    -   Only plants \(`"PlantNumber"`s\) belonging to the selected `Region` \(`"RegionID"`\) are shown within the `PlantID` value help dialog.


-   A selection in both `RegionID` and `CountryID` filter fields leads to:

-   Only plants \(`"PlantNumber"`s\) belonging to both the selected `Region` filter means that the \(`"RegionID"`\) as well as the selected `Country` \(`"CountryID"`\) is shown within the `PlantID` value help dialog.


