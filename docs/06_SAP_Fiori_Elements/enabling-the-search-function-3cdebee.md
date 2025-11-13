<!-- loio3cdebeebb04b4205908140242c9d6817 -->

# Enabling the Search Function

You can enable the *Search* function in the list report.

The search is restricted to 1000 characters.



<a name="loio3cdebeebb04b4205908140242c9d6817__section_rbx_2bh_psb"/>

## Additional Features in SAP Fiori Elements for OData V2

To enable the search function, you must set `sap:searchable` to `true` for the root entity set.

  
  
**List Report: Search**



![](images/ListReport_Search_8f1dc18.png)



### Metadata XML

```xml
<EntitySet Name="SEPMRA_C_PD_Product"EntityType="SEPMRA_PROD_MAN.SEPMRA_C_PD_ProductType" sap:searchable="true" sap:content-version="1"/>
```





<a name="loio3cdebeebb04b4205908140242c9d6817__section_knm_fch_psb"/>

## Additional Features in SAP Fiori Elements for OData V4

The *Search* field is enabled by default. If the underlying entity doesn't support the search functionality, you can disable it by setting `Searchable` to `false` in the `SearchRestriction` annotation. The following sample code shows how to disable the search functionality for the `SalesOrder` entity:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="SAP__self.Container/SalesOrder">
>    <Annotation Term="SAP__capabilities.SearchRestrictions">
>       <Record>
>          <PropertyValue Property="Searchable" Bool="false" />
>       </Record>
>    </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Search.searchable: false
> annotate view ZC_SalesOrder with { };
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate SalesOrder with @Capabilities: {SearchRestrictions: {Searchable: false}};
> ```

> ### Note:  
> In SAP Fiori elements for OData V4, the search string entered by the user is passed to the back end using the `$search` parameter in the OData request. The back end interprets this input and returns the relevant results. For more information, see [Providing Services | capire](https://cap.cloud.sap/docs/guides/providing-services#cds-search).

For more information about how to enable and disable the *Search* field for analytical tables, see the corresponding section in [Setting the Table Type](setting-the-table-type-7f844f1.md).



<a name="loio3cdebeebb04b4205908140242c9d6817__section_q5w_tgf_nmb"/>

## More Information

For more information about configuring the filter bar in a list report, see [Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md).

