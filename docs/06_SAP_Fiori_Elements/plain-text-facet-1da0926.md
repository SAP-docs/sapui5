<!-- loio1da0926a5d404c5586cd8b4f73d1cf4a -->

# Plain Text Facet

You can add a plain text facet to the header area. This type of facet is suitable if you wish to add a single field or block of text with a title, such as a description.

A plain text facet shows the label property of the `UI.ReferenceFacet` as the title. It also shows the value property of the `DataField` complex type of the `FieldGroup` annotation as the description.

To add a plain text facet, use the `UI.HeaderFacet` term and include the `UI.ReferenceFacet` complex type, and then reference the `FieldGroup` annotation.

This is displayed as shown below within the object page header:

   
  
**Plain Text Facet in Object Header**

 ![](images/Object_Page_Header_Plain_Text_Facet_c2970f8.png "Plain Text Facet in Object Header") 



## Code Samples

The following code samples show an example of how to create your annotations for a plain text header:



### `UI.ReferenceFacet`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Record Type="UI.ReferenceFacet">
>     <PropertyValue Property="Label" String="{@i18n>@ProductDescription}"/>
>     <PropertyValue Property="Target" AnnotationPath="to_ProductTextInCurrentLang/@UI.FieldGroup#PlainText"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
>  @UI.facet: [
>   {
>    label:        '{@i18n>@ProductDescription}',
>    purpose:      #STANDARD,
>    type:         #FIELDGROUP_REFERENCE,
>    targetElement: '_ProductTextInCurrentLang',
>    targetQualifier: 'PlainText'
>   }
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.ReferenceFacet',
>     Label : '{@i18n>@ProductDescription}',
>     Target : 'to_ProductTextInCurrentLang/@UI.FieldGroup#PlainText'
> }
> ```



### **UI.FieldGroup**

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.FieldGroup" Qualifier="PlainText">
>     <Record>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="Description"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.fieldGroup: [
>   {
>     qualifier: 'PlainText'
>   }
> ]
> DESCRIPTION;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.FieldGroup #PlainText : {
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : Description
>         }
>     ]
> }
> 
> ```



### `UI.MultilineText`

In addition, you must include a property annotation to indicate that this property contains a multiline text, as shown below:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductTextType/Description">
> 
>     <Annotation Term="UI.MultiLineText"/>
> 
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> annotate view STTA_C_MP_PRODUCTTEXTTYPE with {
>   @UI.multiLineText: true
>   description;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductTextType with {
> 	@UI.MultiLineText
> 	Description
> };
> ```



### CDS Annotations

If desired, you can set this up using a CDS annotation, as shown below:

**CDS Annotation Definition**

```xml

//@Scope: #ELEMENT

multiLineText: Boolean default true;

```

**CDS Source**

```xml

@UI.multiLineText

Description: String;

```

