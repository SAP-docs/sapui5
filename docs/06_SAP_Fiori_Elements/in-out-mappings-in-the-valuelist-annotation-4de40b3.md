<!-- loio4de40b31324e4876a8421f6f642e0140 -->

# `In`/`Out` Mappings in the `ValueList` Annotation

This topic provides information how the `IN`/`OUT` parameters can be used within the value help definition to establish a link between the fields in the main entity and the fields in the value help entity.

> ### Note:  
> In SAP Fiori elements for OData V2, `In`/`Out` mappings are supported only for analytical list page.



**Annotation Terms**


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

`Common.ValueListParameterIn` 

</td>
<td valign="top">

Determines the property of a main entity set that is taken over into the filter query of the value help entity set.

</td>
</tr>
<tr>
<td valign="top">

`Common.ValueListParameterOut` 

</td>
<td valign="top">

Determines the property from the value help entity set that sets the property value in the main entity set.

</td>
</tr>
<tr>
<td valign="top">

`Common.ValueListParameterInOut` 

</td>
<td valign="top">

Combines both the `IN` and `OUT` parameters.

</td>
</tr>
<tr>
<td valign="top">

`LocalDataProperty` 

</td>
<td valign="top">

This refers to the property in the main entity, which corresponds to the entity where the field is defined.

</td>
</tr>
<tr>
<td valign="top">

`ValueListProperty` 

</td>
<td valign="top">

This refers to the corresponding field within the value help entity.

</td>
</tr>
</table>

> ### Tip:  
> When you use the value help in a filter field of the list report, the `Out` parameters are only applied if the target property \(`LocalDataProperty`\) is visible in the filter bar.



<a name="loio4de40b31324e4876a8421f6f642e0140__section_yfz_xrx_cqb"/>

## Example

Consider the entity set `"Z0020"` \(main entity set\) with the 3 filters: region, country, and plant. The `SelectionFields` annotation has the following fields:

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

The value help for these fields display values present in the main entity set only. However, with the `ValueList` annotation you can retrieve records from a selection list.

Consider the following table in which all of the entity sets refer to the same business object using different field names.

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

`RegionID` 

</td>
<td valign="top">

`RegionCode` 

</td>
<td valign="top">

`RegionIdentifier` 

</td>
<td valign="top">

`RegionNumber` 

</td>
</tr>
<tr>
<td valign="top">

Country

</td>
<td valign="top">

`CountryID` 

</td>
<td valign="top">

`CountryCode` 

</td>
<td valign="top">

`CountryIdentifier` 

</td>
<td valign="top">

`CountryNumber` 

</td>
</tr>
<tr>
<td valign="top">

Plant

</td>
<td valign="top">

`PlantID` 

</td>
<td valign="top">

`PlantCode` 

</td>
<td valign="top">

`PlantIdentifier` 

</td>
<td valign="top">

`PlantNumber` 

</td>
</tr>
</table>



<a name="loio4de40b31324e4876a8421f6f642e0140__section_nwb_whk_2qb"/>

## Understanding the `ValueList` Annotation

The following sample code specifies the `ValueList` annotation for the `"CountryID"` field in entity set `Z0020`, which is the main entity set:

> ### Sample Code:  
> ```
> <Annotations Target="Z0020_CDS.Z0020Type/CountryID">  
> 
> <Annotation Term="Common.ValueList" Qualifier="0020_Country">
> ```

The following sample code specifies that the entity set for fetching the value help is `Z0022`:

> ### Sample Code:  
> ```
> <Annotation Term="Common.ValueList" Qualifier="0020_Country">
>     <Record>
>         <PropertyValue Property="Label" String="Country"/>
>         <PropertyValue Property="CollectionPath" String="Z0022"/>
> ```

> ### Sample Code:  
> ```
> <PropertyValue Property="Parameters">
> ```

The following sample codes list all the `In` and `Out` parameters to map properties between the main entity set and the value help entity set. This mapping is necessary because the same business object can have different property names in the two entity sets.

`OUT` parameters determine which properties in the main entity and the value help entity are affected when a user selects a value from the value help dialog or dropdown list.

The `LocalDataProperty` points to the property in the main entity that receives the value selected by the user from the value help dialog or dropdown list.

The `ValueListProperty` refers to the property within the value help entity set that provides the `Value` for the field in the main entity.

In the following sample code, the value help lists all the `"CountryIdentifier"` values from the value help entity set. When a user selects a specific record, for example, `001`, the value `001` is added to the field specified by the `LocalDataProperty`, not the `ValueListProperty`. If the field is used in a filter context, the filter query appears as `$filter=CountryID="001"` rather than `$filter=CountryIdentifier="001"`.

> ### Sample Code:  
> ```
> <Record Type="Common.ValueListParameterOut">
>     <PropertyValue Property="LocalDataProperty" PropertyPath="CountryID"/>
>     <PropertyValue Property="ValueListProperty" String="CountryIdentifier"/>
> </Record> 
> ```

`In` parameters help in filtering the dataset of the value help entity set.

The `LocalDataProperty` specifies the property from the main entity set which, if present already in the filter query, influences the data fetched from the value help entity set and displayed in the value help dialog.

The `ValueListProperty` specifies the property from the value help entity set that is filtered based on the value coming from the `LocalDataProperty`.

If the user has already entered a value for the `Region` main entity—for example, `RegionID = "ABC"`, and `RegionID` is defined as an `IN` parameter for the *Country* value help, then the value help dialog for `CountryID` filters the records by applying `RegionIdentifier = "ABC"` on the value help entity. As a result, end users can select only those countries that belong to the specified region \(ABC\).

> ### Sample Code:  
> ```
> <Record Type="Common.ValueListParameterIn">
>     <PropertyValue Property="LocalDataProperty" PropertyPath="RegionID"/>
>     <PropertyValue Property="ValueListProperty" String="RegionIdentifier"/>
> </Record>  
> ```

The `ValueList` annotation for the `CountryID` filter field is as follows:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="Z0020_CDS.Z0020Type/CountryID">
>     <Annotation Term="Common.ValueList" Qualifier="0020_Country">
>         <Record>
>             <PropertyValue Property="Label" String="Country"/>
>             <PropertyValue Property="CollectionPath" String="Z0022"/>
>             <PropertyValue Property="SearchSupported" Bool="false"/>
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
>             <PropertyValue Property="SearchSupported" Bool="false"/>
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


