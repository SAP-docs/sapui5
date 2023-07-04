<!-- loio16d43eb0472c4d5a9439ca1bf92c915d -->

# Enhancing `ValueList` Annotations for Visual Filters

The value list annotation lets you map an entity to another entity that is associated with a different entity set. The value list annotation defines the relationship between filter fields of the main entity set and the fields in the value help entity set.



You must enhance the value list annotation corresponding to a filter field with `"PresentationVariantQualifier"` as shown in the sample code below to ensure that the value list annotation \(and therefore the filter field\) is considered for the visual filter rendering. The value for this term must point to a `UI.PresentationVariant` that contains the `UI.Chart` annotation required to render the visual filter.

> ### Note:  
> The `UI.PresentationVariant` referred to by `"PresentationVariantQualifier"` is always associated with the value help entity set to which the value list annotation points, and **not** the main entity set of the analytical list page.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="Z0020_CDS.Z0020Type/CountryID">
> <Annotation Term="Common.ValueList" Qualifier="0020_Country">
>     <Record>
>         <PropertyValue Property="Label" String="Country"/>
>         <PropertyValue Property="CollectionPath" String="Z0022"/>
>         <PropertyValue Bool="false" Property="SearchSupported"/>
>         <PropertyValue Property="Parameters">
>             <Collection>
>                 <Record Type="Common.ValueListParameterOut">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="CountryID"/>
>                     <PropertyValue Property="ValueListProperty" String="CountryIdentifier"/>
>                 </Record>
>                 <Record Type="Common.ValueListParameterIn">
>                     <PropertyValue Property="LocalDataProperty" PropertyPath="RegionID"/>
>                     <PropertyValue Property="ValueListProperty" String="RegionIdentifier"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="PresentationVariantQualifier" String="Country_Chart"/>
>     </Record>
> </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Consumption.valueHelpDefinition:
>         [{
>           entity :{
>             name    : 'Z0022', //(collectionPath)
>             element : 'CountryIdentifier'   // (valuelistproperty in parameterInOut)
>           },
>           label  : 'Country',   // valuelist label
>           qualifier: '0020_Country',  //(valuelist qualifier)
>            presentationVariantQualifier: 'Country_Chart'  // value list presentvariantqualifier
>           }]
> CountryID
> 
> ```

> ### Note:  
> In ABAP CDS, `Common.ValueListParameterIn` and `Common.ValueListParameterOut` parameters cannot be modeled separately and only the `Common.ValueListParameterInOut` equivalent is supported.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> CountryID @(
>      Common         : {
>      ValueList     #0020_Country                  : {
>           Label          : ‘Country’,
>           CollectionPath : ‘Z0022’,
>           SearchSupported: false,
>           Parameters     : [
>           {
>                $Type             : 'Common. ValueListParameterOut,
>                LocalDataProperty : CountryID,
>                ValueListProperty : ‘CountryIdentifier’
>           },
>           {
>                $Type             : 'Common.ValueListParameterIn',
>                LocalDataProperty : RegionID,
>                ValueListProperty : ‘RegionIdentifier’
>           }
>           ],
>           PresentationVariantQualifier: ' Country_Chart '
>      }
>      }
> );
> ```

> ### Note:  
> In SAP Fiori elements for OData V4, the `"CollectionPath"` of the corresponding value list annotation must point to the result entity set in the same manner as described in *Supporting Parameterized Entities* under *Additional Features in SAP Fiori Elements for OData V4* in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

In continuation with the value list annotations given in the example in [In/Out Mappings in the ValueList Annotation](in-out-mappings-in-the-valuelist-annotation-4de40b3.md), assume that the following visual filters have been defined:

-   `RegionID` showing the top 3 regions from value help entity set Z0021 \(so each bar = RegionCode from Z0021\)

-   `CountryID` showing the top 3 countries from value help entity set Z0022 \(so each bar = CountryIdentifier from Z0022\)

-   `PlantID` showing the top 3 plants from value help entity set Z0023 \(so each bar = PlantNumber from Z0023\)




### Scenario 1: Selection in the Region Chart

If you select a bar in the region chart with this configuration, it then passes the `RegionID`=<chosen value from `RegionCode` of Z0021\> to the filter query in the main entity set. As a result, ALP refreshes the data in the main content area and the other 2 charts \(A `RegionID` is an IN parameter for the ValueList annotation of the `CountryID` and `PlantID`\). The top 3 countries and plants are displayed for the chosen region.



### Scenario 2: Selection in the Region Chart and Country Chart

After selecting the region chart, if you select a bar in the country chart then it passes the `CountryID`=<chosen value from `CountryIdentifier` of Z0022\> to the filter query in the main entity set. As a result, the ALP refreshes data in the main content area and the third chart \(A `CountryID` is an IN parameter only for "PlantID"\). Plants within the chosen region and country are displayed.



### Scenario 3: Selection in the Plant Chart

`PlantID` is an IN parameter used only for the `RegionID`. This means that along with the main content area only the first chart is refreshed and displays the top three countries for the chosen plant.

> ### Note:  
> -   The IN mapping defined for a field is ignored when the same field has a `ValueList` annotation defined for it. For example, when `PlantID` is the IN mapping for the `ValueList`of the `PlantID`. However, the existing mapping values of the `PlantID` in the filter query would have no impact on a visual filter. The ignored value is considered for the main filter query and shows up in the visual filter Selected button.
> 
> -   Mandatory filter field values are passed automatically to the visual filter query only if the valuehelp entity of the visual filter is same as the main entity. Otherwise, the application developer must explicitly define the IN mapping to ensure that the values are passed.

> ### Note:  
> The ALP ignores the `UI.Hidden` fields when you select filters if the IN mapping points to a field marked with `UI.Hidden` in the value list entity set. For example, the `Status_ID` from the main entity set points to `StatusCode` in the value help entity set \(of the visual filter\). If the `StatusCode` is marked as `UI.Hidden`, then the incoming value is ignored.

**Related Information**  


[Configuring the Visual Filter Bar](configuring-the-visual-filter-bar-33f3d80.md "The visual filter bar enables end users to select filter values based on measure values in addition to the filters and filter values already selected in the regular filter bar.")

[Choosing Filter Modes](choosing-filter-modes-00c19e1.md "ALP offers compact and visual filter modes. You can choose to set filters from both modes.")

