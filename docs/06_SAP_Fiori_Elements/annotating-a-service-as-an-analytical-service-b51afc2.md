<!-- loiob51afc2c1c9a41bb8ac6055ccce2baab -->

# Annotating a Service as an Analytical Service

Analytical services require the `@Aggregation.ApplySupported` annotation to enable data aggregation and transformation in SAP Fiori elements for OData V4. ABAP-based services must support several transformation functions.

Analytical services must support the `@Aggregation.ApplySupported` annotation. ABAP-based services must support the `@Aggregation.ApplySupported` annotation along with all of the following transformation functions:

-   `filter`
-   `identity`
-   `orderby`
-   `skip`
-   `top`
-   `groupby`
-   `concat`
-   `aggregate`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> 
> <Annotation Term="Aggregation.ApplySupported">
>     <Record>
>         <PropertyValue Property="Transformations">
>             <Collection>
>                 <String>filter</String>
>                 <String>identity</String>
>                 <String>orderby</String>
>                 <String>search</String>
>                 <String>skip</String>
>                 <String>top</String>
>                 <String>groupby</String>
>                 <String>aggregate</String>
>                 <String>concat</String>
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
> @OData.applySupportedForAggregation: #FULL
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> // at root level of your entity
> @Aggregation.ApplySupported : {
> }
> ```

> ### Note:  
> The analytical table displays only properties that are annotated as groupable, aggregatable, or both. Otherwise, the property isn't requested and has no value in the table.
> 
> For information about annotating properties as groupable, see [Defining Groupable Properties](defining-groupable-properties-9062f11.md).
> 
> For information about annotating properties as aggregatable, see [Defining Aggregatable Properties](defining-aggregatable-properties-564ac6e.md).

