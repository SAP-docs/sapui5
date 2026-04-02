<!-- loio3cdebeebb04b4205908140242c9d6817 -->

# Enabling the Search Function

You can enable the *Search* function on the list report page.

The search is restricted to 1000 characters.

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
> The search string entered by the user is passed to the back end using the `$search` parameter in the OData request. The back end interprets this input and returns the relevant results. For more information, see [Providing Services | capire](https://cap.cloud.sap/docs/guides/providing-services#cds-search).

For more information about how to enable and disable the *Search* field for analytical tables, see the corresponding section in [Setting the Table Type](setting-the-table-type-7f844f1.md).

> ### Restriction:  
> The following special characters are ignored as they cause an error in both RESTful Application Programming Model \(RAP\) and SAP Cloud Application Programming Model \(CAP\) back ends:
> 
> -   `"`
> 
> -   `(`
> 
> -   `)`
> 
> -   `;`



<a name="loio3cdebeebb04b4205908140242c9d6817__section_q5w_tgf_nmb"/>

## More Information

For more information about configuring the filter bar on a list report page, see [Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling the Search Function](enabling-the-search-function-fffde60.md).

