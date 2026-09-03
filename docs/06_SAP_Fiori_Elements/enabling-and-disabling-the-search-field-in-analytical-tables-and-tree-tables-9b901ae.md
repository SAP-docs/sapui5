<!-- loio9b901aefdecd469b8f61095ff0717f91 -->

# Enabling and Disabling the *Search* Field in Analytical Tables and Tree Tables

The search functionality filters large datasets in analytical tables and tree tables by text input across multiple properties. The *Search* field is enabled by default or requires the `search` transformation in SAP Fiori elements for OData V4.

When working with large datasets in analytical or hierarchical applications, users need to quickly locate specific records without scrolling through extensive lists. The *Search* field provides this capability by allowing users to filter data based on text input across multiple properties. For example, in a customer management application with thousands of customer records, users can search for specific customers by name, ID, or other attributes, significantly improving data discovery and user productivity.

The *Search* field is enabled by default if no `Transformations` annotation is available. If the `Transformations` annotation is available as part of the `ApplySupported` annotation, it must include the `search` transformation for the *Search* field to be enabled.

Include the `search` transformation as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="sap.fe.managepartners.ManagePartnersService.Customers">
>     <Annotation Term="Aggregation.ApplySupported">
>         <Record Type="Aggregation.ApplySupportedType">
>             <PropertyValue Property="Transformations">
>                 <Collection>
>                     <String>search</String>
>                     <String>topcount</String>
>                     <String>bottomcount</String>
>                     <String>identity</String>
>                     ...
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> Transformations aren't available in ABAP CDS. Instead, use the `OData.applySupportedForAggregation` annotation with the `#FULL` property. For more information, see [OData.applySupportedForAggregation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_626623472_ANNO.html).

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> @Aggregation.ApplySupported : {
>     Transformations : [
>         'search',
>         'topcount',
>         'bottomcount',
>         'identity',
>         ...
>     ],
> }
> ```

