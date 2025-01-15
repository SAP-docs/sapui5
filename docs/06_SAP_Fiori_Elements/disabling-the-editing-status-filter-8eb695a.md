<!-- loio8eb695ac473b4ab0a726e4021ce35cf4 -->

# Disabling the Editing Status Filter

The editing status filter is enabled by default in the list report page of draft enabled applications.

  
  
**Editing status filter**

![](images/Editing_Status_Filter_d6891a2.png "Editing status filter")

If required, you can disable this filter for your app. To do so, you can add the following sample code to your annotation file:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="TravelService.EntityContainer/Travel">
>    <Annotation Term="Capabilities.NavigationRestrictions">
>       <Record Type="Capabilities.NavigationRestrictionsType">
>          <PropertyValue Property="RestrictedProperties">
>             <Collection>
>                <Record Type="Capabilities.NavigationPropertyRestriction">
>                   <PropertyValue Property="NavigationProperty" NavigationPropertyPath="DraftAdministrativeData"/>
>                   <PropertyValue Property="FilterRestrictions">
>                      <Record Type="Capabilities.FilterRestrictionsType">
>                         <PropertyValue Property="Filterable" Bool="false"/>
>                      </Record>
>                   </PropertyValue>
>                </Record>
>            </Collection>
>         </PropertyValue>
>       </Record>
>    </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate TravelService.Travel with @(
> Capabilities: {
>    NavigationRestrictions : {
>        $Type : 'Capabilities.NavigationRestrictionsType',
>        RestrictedProperties : [
>            {
>                $Type : 'Capabilities.NavigationPropertyRestriction',
>                NavigationProperty : DraftAdministrativeData,
>                FilterRestrictions : {
>                    $Type : 'Capabilities.FilterRestrictionsType',
>                    Filterable : false,
>                },
>            },
>        ],
>    },
> });
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> No ABAP CDS annotation sample is available. Please use the local XML annotation.
> ```

