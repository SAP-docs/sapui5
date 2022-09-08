<!-- loio0b73cbbeda344d88b5d0f8bea4d4498e -->

# Address Facet in the Object Page Header

If you add a `UI.ReferenceFacet` that points to an address annotation, an address facet is displayed in the object page header.

It shows the label of the `UI.ReferenceFacet` and, below, only the label property of the address annotation. This is why the label property needs to contain the whole formatted address, with \\n for new lines.

> ### Note:  
> Other properties of the address annotation are not interpreted and rendered.

Example value for the label property: "Mail Drop: TNE QB\\n123 Main Street\\nAny Town, CA 91921-1234\\nU.S.A.". This is shown as follows:

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

