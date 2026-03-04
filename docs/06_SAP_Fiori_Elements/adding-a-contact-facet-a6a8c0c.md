<!-- loioa6a8c0c4849b483eb10e87f6fdf9383c -->

# Adding a Contact Facet

To render a contact list and contact facet, you add a `UI.ReferenceFacet` that points to a contact annotation \(`type`\). It shows the label of the `UI.ReferenceFacet`, and below it, the `fn` property of the contact annotation. If you click on the name, a quick view with the contact details is displayed, as shown in the following screenshot:

  
  
**Object Page: Contacts**

![](images/ObjectPage_Contacts_076fb4d.png "Object Page: Contacts")

The contact card reads the following annotation properties and displays them:

-   `fn`: the full name of the contact. It is displayed as the title of the card, using a bigger font.

-   `title`: the job title of the contact. It is displayed below the title of the card, using a smaller font.

-   `photo`: the photo assigned to the contact. It is displayed in the header of the contact card. If no photo is provided, a contact fallback icon is shown instead.

-   `role`: the role of the contact. It is displayed in the content of the card.

-   `org`: the organization of the contact. It is displayed in the content of the card.

-   `adr`: the address of the contact. It is displayed in the content of the card. The address must match the `addressType` definition. The order of the displayed address is street, code, locality, region, and country in a comma-separated string. Note that if the `label` property is used, then only this is shown and the other properties are ignored.

-   `email`: the email addresses of the contact, together with the email type. The supported type values are `preferred` and `work`. This information is displayed as a link in the content of the card. When the end user clicks on it, an email window opens.

-   `tel`: the telephone numbers of the contact, together with the types. This information is displayed as a link in the content of the card. When the end user clicks on it, the phone application defined in the user's browser settings opens. If the telephone number is a fax number, use `type: #fax`to display it as a fax number. The other supported types are `preferred`, `cell`, and `work`.


Applications can configure additional contact details to be displayed in a popover when users click on the link.

Configure the contact card using `com.sap.vocabularies.UI.v1.DataFieldForAnnotation` and `com.sap.vocabularies.Communication.v1.Communication`, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="clouds.products.CatalogService.Products">
>     <Annotation Term="UI.LineItem">
>         <Collection>
>             <Record Type="UI.DataFieldForAnnotation">
>                 <PropertyValue Property="Label" String="Supplier"/>
>                 <PropertyValue Property="Target" AnnotationPath="supplier/@Communication.Contact"/>
>             </Record>
>         </Collection>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> annotate view PRODUCTS.CATALOGSERVICE.PRODUCTS with {
> 
> 
> @UI.lineItem: [
>   {
>     label: 'Supplier',
>     value: 'SUPPLIER',
>     type: #AS_CONTACT,
>     position: 1 
>   }
> ]
> 
> test;
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem                         : [
>     {
>         $Type  : 'UI.DataFieldForAnnotation',
>         Target : 'supplier/@Communication.Contact',
>         Label  : 'Supplier'
>     }]
> 
> ```

You must then add the annotation given below to the `EntitySet` pointed to by the `Navigation` property \(`"Supplier"` in the code snippet above\) for the contents of the card. The following snippet controls the content of the card:

> ### Sample Code:  
> XML Annotation
> 
> `Communication.Contact`
> 
> ```xml
> <Annotations Target="clouds.products.CatalogService.Suppliers">
>     <Annotation Term="Communication.Contact">
>         <Record Type="Communication.ContactType">
>             <PropertyValue Property="email">
>                 <Collection>
>                     <Record Type="Communication.EmailAddressType">
>                         <PropertyValue Property="type">
>                             <EnumMember>Communication.ContactInformationType/work</EnumMember>
>                         </PropertyValue>
>                         <PropertyValue Property="address">
>                             <Path>emailAddress</Path>
>                         </PropertyValue>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="fn">
>                 <Path>name</Path>
>             </PropertyValue>
>             <PropertyValue Property="tel">
>                 <Collection>
>                     <Record Type="Communication.PhoneNumberType">
>                         <PropertyValue Property="type">
>                             <EnumMember>Communication.PhoneType/fax</EnumMember>
>                         </PropertyValue>
>                         <PropertyValue Property="uri">
>                             <Path>faxNumber</Path>
>                         </PropertyValue>
>                     </Record>
>                     <Record Type="Communication.PhoneNumberType">
>                         <PropertyValue Property="type">
>                             <EnumMember>Communication.PhoneType/work</EnumMember>
>                         </PropertyValue>
>                         <PropertyValue Property="uri">
>                             <Path>phoneNumber</Path>
>                         </PropertyValue>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> define view Suppliers
> {
>   @Semantics.name.fullName: true
>   name,
> 
>   @Semantics.eMail.address: true
>   @Semantics.eMail.type:  [#WORK]
>   emailAddress,
>    
>   @Semantics.telephone.type:  [ #FAX ] 
>   FaxNumber,
>   
>   @Semantics.telephone.type:  [ #WORK]
>   PhoneNumber
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> FieldGroup #HeaderGeneralInformation            : {Data : [{
>         $Type  : 'UI.DataFieldForAnnotation',
>         Target : '_SoldToParty/@Communication.Contact',
>         Label  : 'Contact Info'
>     }, ]},
> 
> 
> entity Customer                                        @(
>     cds.autoexpose,
>     title                  : 'Sold-to Party',
>     Communication.Contact  : {
>         email : [{
>             type    : #work,
>             address : EmailAddress
>         }],
>         fn    : CustomerName,
>         tel   : [{
>             type : #fax,
>             uri  : InternationalPhoneNumber
>         }],
>         adr   : [{
>             type     : #work,
>             code     : PostalCode,
>             country  : Country,
>             locality : CityName
>         }]
>     },
>     Common.IsNaturalPerson : true
> )
> 
> ```

The column in the table and the contact popover when clicking the link looks like this:

![](images/Contact_Card_with_Smart_Links_7282872.jpg)

> ### Tip:  
> If no "`@Contact.photo`" annotation is provided, a fallback icon for the contact is displayed.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adding a Contact Facet](adding-a-contact-facet-9375d6a.md).

