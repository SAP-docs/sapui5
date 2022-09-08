<!-- loio492bc791a7bd41cd9932fdf5d3aa2656 -->

# Displaying Images in Tables

To display images in tables, you must first add a data field with a value that relates to an image URL.



This is shown in the following example:

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



<a name="loio492bc791a7bd41cd9932fdf5d3aa2656__section_hwk_2nh_2nb"/>

## Additional Features in SAP Fiori Elements for OData V4

A property containing media data of type **stream**, such as an image, is also supported. The local annotation file needs to specify that this property contains a URL and a Media Content Type set to `image/<File_Format>`, as in the following example:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType/ProductPictureURL">
>    <Annotation Term="Common.Text" String="{Product}" /> 
>    <Annotation Term="Core.IsURL" Bool="true"/>
>    <Annotation Term="Core.MediaType" String="image/jpg"/>
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductType with {
>   @Common.Text : '{Product}'
>   @Core.IsURL : true
>   @Core.MediaType : 'image/jpg'
>   ProductPictureURL
> };
> ```

**Stream** properties are just supported for read-only cases, which means **stream** property data is only read via URL and isn't editable via URL. For more information, see [Stream Properties on OData v4](http://docs.oasis-open.org/odata/odata-json-format/v4.0/os/odata-json-format-v4.0-os.html#_Toc372793075).

You can also use media data of type **binary** instead of **stream**. The local annotation file only needs to include the property containing the Media Content Type set to `image/<File_Format>`, as shown in the example below:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType/ProductPictureURL">
>    <Annotation Term="Common.Text" String="{Product}" /> 
>    <Annotation Term="Core.MediaType" String="image/png"/>
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductType with {
>   @Common.Text : '{Product}'
>   @Core.MediaType : 'image/png'
>   ProductPictureURL
> };
> ```

