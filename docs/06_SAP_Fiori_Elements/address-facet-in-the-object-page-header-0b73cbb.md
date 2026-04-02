<!-- loio0b73cbbeda344d88b5d0f8bea4d4498e -->

# Address Facet in the Object Page Header

You can add an address facet to the object page header with the `UI.ReferenceFacet` annotation.

To display an address facet in the object page header, add a `UI.ReferenceFacet` that points to an address annotation. The address facet shows the label of the `UI.ReferenceFacet` and, below, only the label property of the address annotation. This is why the label property needs to contain the whole formatted address, with `\n` for new lines.

> ### Note:  
> Other properties of the address annotation are not interpreted and rendered.

For example, the value for the label property: `Mail Drop: TNE QB\n123 Main Street\nAny Town, CA 91921-1234\nU.S.A.` is shown as follows:

![](images/Address_Facet_8d92094.png)



> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Record Type="UI.ReferenceFacet">
>     <PropertyValue Property="Label" String="Shipping Address"/>
>     <PropertyValue AnnotationPath="@Communication.Address" Property="Target"/>
> </Record>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.facet: [
>  {
>   label: 'Shipping Address',
>   type:         #AS_ADDRESS,
>   purpose: #STANDARD
>  }
> ]
> product;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.ReferenceFacet',
>     Label : 'Shipping Address',
>     Target : '@Communication.Address'
> }
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Address Facet in the Object Page Header](address-facet-in-the-object-page-header-34f7175.md).

**Related Information**  


[Header Facets](header-facets-17dbd5b.md "You can include various types of header facets in your object page header, for example to display contact data or a rating indicator.")

