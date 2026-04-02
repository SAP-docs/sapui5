<!-- loiocce93e6f067a4133a8430c4f5d7b8fc7 -->

# Setting Up the Object Page Header

You can configure the object page header in different ways.

The object page supports the dynamic header. See also [Object Page Header](../10_More_About_Controls/object-page-header-6e340c1.md).

The object page header display is determined by the following vocabularies:

-   `com.sap.vocabularies.UI.v1.HeaderInfo/Title/Value` determines the object title.

-   `com.sap.vocabularies.UI.v1.HeaderInfo/Description/Value` determines the subtitle.

-   `com.sap.vocabularies.UI.v1.HeaderInfo/ImageUrl` determines the image.

-   `com.sap.vocabularies.UI.v1.HeaderInfo/TypeName` is used as the text for the link that navigates back to the list report page.

-   `com.sap.vocabularies.UI.v1.HeaderInfo/TypeImageUrl` determines the icon.

-   `com.sap.vocabularies.UI.v1.HeaderInfo/Initials` determines the initials




## Main Elements

This figure shows how to set up the following basic elements for your object page header in your annotations:


<table>
<tr>
<th valign="top">

Label in Figure

</th>
<th valign="top">

Element

</th>
</tr>
<tr>
<td valign="top">

*1*

</td>
<td valign="top">

Title \(Object Type\)

</td>
</tr>
<tr>
<td valign="top">

*2* 

</td>
<td valign="top">

Image of the object instance \(avatar\)

</td>
</tr>
<tr>
<td valign="top">

*3*

</td>
<td valign="top">

Language-dependent product text in SAP back-end systems

</td>
</tr>
<tr>
<td valign="top">

*4*

</td>
<td valign="top">

Product title in SAP back-end systems

</td>
</tr>
</table>

  
  
**Object Page Header**

![](images/Object_Page_Header_Main_Elements_698018b.png "Object Page Header")



<a name="loiocce93e6f067a4133a8430c4f5d7b8fc7__sample_code"/>

## Sample Code

This sample code is a selectable version of the code shown above for setting up the main elements on the object page header.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.HeaderInfo">
>      <Record Type="UI.HeaderInfoType">
>           <PropertyValue Property="Description">
>                <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="SalesOrderTypeName"/>
>                </Record>
>           </PropertyValue>
>           <PropertyValue Property="ImageUrl" Path="ImageUrl"/>
>           <PropertyValue Property="Title">
>                <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="SalesOrder"/>
>                </Record>
>           </PropertyValue>
>           <PropertyValue Property="TypeName" String="Sales Order"/>
>           <PropertyValue Property="TypeNamePlural" String="Sales Orders"/>
>      </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.headerInfo: {
>   typeName: 'Product',
>   typeNamePlural: 'Products',
>   imageUrl: 'PRODUCTPICTUREURL',
>   title: {
>     value: '_PRODUCTTEXTINCURRENTLANG.NAME',
>     type: #STANDARD
>   },
>   description: {
>     value: 'PRODUCT',
>     type: #STANDARD
>   }
> }
> annotate view STTA_C_MP_PRODUCT with {
> 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.HeaderInfo : {
>     TypeName : 'Product',
>     TypeNamePlural : 'Products',
>     ImageUrl : ProductPictureURL,
>     Title : {
>         $Type : 'UI.DataField',
>         Value : to_ProductTextInCurrentLang.Name
>     },
>     Description : {
>         $Type : 'UI.DataField',
>         Value : Product
>     }
> }
> 
> ```



## Avatar

The avatar displayed for the object in the header is determined based on the following logic, depending on the presence of the `HeaderInfo.ImageUrl` or `HeaderInfo.Initials` annotations:

![](images/Avatar_e9e8ed2.jpg)

For more information about displaying avatars, see [Using Images and Icons](using-images-and-icons-5760b63.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Setting Up the Object Page Header](setting-up-the-object-page-header-c4e45a3.md).

