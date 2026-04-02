<!-- loio2f6aeb8e1d844589995bdd8932e4d6fa -->

# Displaying Images in Tables

You can display images in a table.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Displaying Images in Tables](displaying-images-in-tables-492bc79.md).



To display images in tables, you must first add a data field with a value that relates to an image URL. This is shown in the following example:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataField">
>     <PropertyValue Property="Value" Path="ProductPictureURL"/>
>     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
> </Record>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.lineItem: [{ importance: #HIGH }]
> PRODUCTPICTUREURL;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataField',
>     Value : ProductPictureURL,
>     ![@UI.Importance] : #High
> }
> ```

You also need to annotate the property with the `UI.IsImageUrl` annotation to specify that this property contains an image URL, as shown in the following example:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType/ProductPictureURL">
>     <Annotation Term="UI.IsImageUrl" />
>     <Annotation Term="Common.Text" String="{Product}" />
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @Semantics.imageUrl: true
> @UI.textArrangement: #TEXT_ONLY
> PRODUCTPICTUREURL;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductType with {
>   @UI.IsImageUrl : true
>   @Common.Text : '{Product}'
>   ProductPictureURL
> };
> 
> ```

The `Common.Text` annotation is optional. You can use it to provide textual information for the image, for example, for accessibility purposes. This text is not visible on the UI, but can be read by screen readers. From a technical perspective, the provided string \(in this example, the product\) is assigned to the `alt` property of the `sap.m.Image` instance.

