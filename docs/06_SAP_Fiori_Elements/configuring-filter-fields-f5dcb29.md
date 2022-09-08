<!-- loiof5dcb29da3bf4e0091eba3e7ccef4580 -->

# Configuring Filter Fields

Application developers can configure filter fields to ensure they only accept either a single value, multiple values, or a range of values.



<a name="loiof5dcb29da3bf4e0091eba3e7ccef4580__section_owj_3wk_cqb"/>

## Filter Restrictions

In SAP Fiori elements for OData V2, app developers can control the filter field configuration via the `sap:filter-restriction` annotation as shown in the following sample code:

> ### Sample Code:  
> `sap:filter-restriction`
> 
> ```
> <Property Name="StartDate" Type="Edm.DateTime" sap:display-format="Date" 
> sap:aggregation-role="dimension" sap:label="Date" sap:filter-restriction="single-value"/>
> 
> <Property Name="StartDate" Type="Edm.String" sap:semantics="yearmonthday" 
> sap:aggregation-role="dimension" sap:label="Date" sap:filter-restriction="single-value"/>
> ```

In SAP Fiori elements for OData V4, app developers can control the filter field configuration via `FilterRestrictions` as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <AnnotationsTarget="com.c_salesordermanage_sd.EntityContainer/SalesOrderManage">
>     <AnnotationTerm="Capabilities.FilterRestrictions">
>         <RecordType="Capabilities.FilterRestrictionsType">
>             <PropertyValueProperty="FilterExpressionRestrictions">
>                 <Collection>
>                     <RecordType="Capabilities.FilterExpressionRestrictionType">
>                         <PropertyValueProperty="Property" PropertyPath="SoldToParty"/>
>                         <PropertyValueProperty="AllowedExpressions" String="SingleValue"/>
>                     </Record>
>                     <RecordType="Capabilities.FilterExpressionRestrictionType">
>                         <PropertyValueProperty="Property" PropertyPath="SalesOrderDate"/>
>                         <PropertyValueProperty="AllowedExpressions" String="SingleRange"/>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
>     ….
>     ….
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity SalesOrderManage @(
>     title        : 'Manage Sales Order',
>     Capabilities : {
>         FilterRestrictions     : {FilterExpressionRestrictions : [
>         {
>             Property           : 'SoldToParty',
>             AllowedExpressions : 'SingleValue'
>         },
>         {
>             Property           : 'SalesOrderDate',
>             AllowedExpressions : 'SingleRange'
>         }
>         ]}
>     },
> 
> ```

> ### Remember:  
> If no filter-restriction is provided, the filter field is treated as a multi-valued field.



<a name="loiof5dcb29da3bf4e0091eba3e7ccef4580__section_bwq_hg4_kqb"/>

## More Information

For information about configuring field help for the filter fields, see [Field Help](field-help-a5608ea.md).

