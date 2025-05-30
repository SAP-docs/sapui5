<!-- loio333f85086c2e43039f6773be15f3ed50 -->

# Configuring the Object Page Header Title and Description

You can use annotations to adapt the object page header title and description.



  
  
**Object Page Header: Title and Description**

![](images/Object_Page_Title_and_Subtitle_0430d3e.png "Object Page Header: Title and Description ")

To define or change the object page header title and description, adapt the OData annotations:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType">
>     <Annotation Term="UI.HeaderInfo">
>         <Record>
>             <PropertyValue Property="Title">
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="to_ProductTextInOriginalLang/Name"/>
>                 </Record>
>             </PropertyValue>
>             <PropertyValue Property="Description">
>                 <Record Type="UI.DataField">
>                      <PropertyValue Property="Value" Path="ProductForEdit"/>
>                 </Record>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.headerInfo: {
>   title: {
>     value: '_PRODUCTTEXTINORIGINALLANG.NAME',
>     type: #STANDARD
>   },
>   description: {
>     value: 'PRODUCTFOREDIT',
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
> annotate STTA_PROD_MAN.STTA_C_MP_ProductType with @(
>   UI.HeaderInfo : {
>     Title : {
>         $Type : 'UI.DataField',
>         Value : to_ProductTextInOriginalLang.Name
>     },
>     Description : {
>         $Type : 'UI.DataField',
>         Value : ProductForEdit
>     }
>   }
> );
> ```

**Related Information**  


[Changing Default Titles of New and Unnamed Objects](changing-default-titles-of-new-and-unnamed-objects-63946c0.md "When an end user creates new items in a list report or object page table, SAP Fiori elements provides a default title. Application developers are recommended to replace it with an application-specific title.")

