<!-- loio9375d6af95c648f4a5a30dfbfea3d1e3 -->

# Adding a Contact Facet

You can add a contact facet to a section of the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Adding a Contact Facet](adding-a-contact-facet-a6a8c0c.md).

To render a contact list and contact facet, add a `UI.ReferenceFacet` that points to a contact annotation \(`type`\). It shows the label of the `UI.ReferenceFacet`, and below it, the `fn` property of the contact annotation. If you click on the name, a quick view with the contact details is displayed, as shown here:

  
  
**Object Page: Contacts**

![](images/ObjectPage_Contacts_076fb4d.png "Object Page: Contacts")

The contact card reads the following annotation properties and displays them:

-   `fn`: the full name of the contact. It is displayed as the title of the card using a bigger font.

-   `title`: the job title of the contact. It is displayed below the title of the card using a smaller font.

-   `photo`: the photo assigned to the contact. It is displayed in the header of the contact card. If no photo is provided, a contact fallback icon is shown instead.

-   `role`: the role of the contact. It is displayed in the content of the card, as shown in the screenshot below.

-   `org`: the organization of the contact. It is displayed in the content of the card, as shown in the screenshot below.

-   `adr`: the address of the contact. It is displayed in the content of the card, as shown in the screenshot below The address has to follow the `addressType` definition. The order of the displayed address is street, code, locality, region and country simultaneously in a comma-separated string. Note that if the `label` property is used, then only this is shown and the other properties are ignored.

-   `mail`: the email addresses of the contact, together with the email type. Only `preferred` and `work` are supported type values. This information is displayed as a link in the content of the card, as shown in the screenshot below. When clicked, an email window opens.

-   `tel`: the telephone numbers of the contact, together with the types. This information is displayed as a link in the content of the card, as shown in the screenshot below. When clicked, the phone application defined in the user's browser settings opens. If the telephone number is a fax number, use `type: #fax`to display it as a fax number. The other supported types are preferred, cell, and work.


The facet annotation looks like this:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.ReferenceFacet">
>    <PropertyValue Property="Label" String="Supplier"/>
>    <PropertyValue AnnotationPath="to_Supplier/@Communication.Contact" Property="Target"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.facet: [
>  {
>   label: 'Supplier',
>   type:         #CONTACT_REFERENCE,
>   targetElement: '_Supplier',
>   purpose: #STANDARD
>  }
> ]
> product;
> ```

The Contact annotation looks like this:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="SEPMRA_PROD_MAN.SEPMRA_I_EmployeeType">
> 	<Annotation Term="Communication.Contact">
> 		<Record>
> 			<PropertyValue Property="fn" Path="FormattedName"/>
> 			<PropertyValue Property="title" Path="JobTitle"/>
> 			<PropertyValue Property="org" Path="CompanyName"/>
> 			<PropertyValue Property="role" Path="OrganizationRole"/>
> 			<PropertyValue Property="n">
> 				<Record>
> 					<PropertyValue Property="given" Path="FirstName"/>
> 					<PropertyValue Property="additional" Path="MiddleName"/>
> 					<PropertyValue Property="surname" Path="LastName"/>
> 				</Record>
> 										
> 			</PropertyValue>
> 			<PropertyValue Property="photo" Path="EmployeePictureURL"/>
> 			<PropertyValue Property="tel">
> 				<Collection>
> 					<Record>
> 						<PropertyValue Property="type" EnumMember="Communication.PhoneType/fax"/>
> 						<PropertyValue Property="uri" Path="FaxNumber"/>
> 					</Record>
> 					<Record>
> 						<PropertyValue Property="type" EnumMember="Communication.PhoneType/cell"/>
> 						<PropertyValue Property="uri" Path="MobilePhoneNumber"/>
> 					</Record>
> 					<Record>
> 						<PropertyValue Property="type" EnumMember="Communication.PhoneType/work"/>
> 						<PropertyValue Property="uri" Path="PhoneNumber"/>
> 					</Record>
> 					<Record>
> 						<PropertyValue Property="type" EnumMember=""/>
> 						<PropertyValue Property="address" Path="FaxNumber"/>
> 					</Record>
> 				</Collection>
> 			</PropertyValue>
> 			<PropertyValue Property="email">
> 				<Collection>
> 					<Record>
> 						<PropertyValue Property="type" EnumMember="Communication.ContactInformationType/work"/>
> 						<PropertyValue Property="address" Path="EmailAddress"/>
> 					</Record>
> 				</Collection> 
> 			</PropertyValue>
> 		</Record>
> 	</Annotation>
> </Annotations>				
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> define view VIEWNAME
> {
>   @Semantics.name.fullName: true
>   FormattedName,
> 
>   @Semantics.eMail.address: true
>   @Semantics.eMail.type:  [#WORK]
>   EmailAddress,
>    
>   @Semantics.telephone.type:  [ #FAX ] 
>   FaxNumber,
> 
>   @Semantics.telephone.type:  [ #CELL ]
>   MobilePhoneNumber,
>   
>   @Semantics.telephone.type:  [ #WORK]
>   PhoneNumber,
> 
>   @Semantics.name: { jobTitle: true }   
>   JobTitle,
> 
>   @Semantics.organization: { name: true }
>   CompanyName,
> 
>   @Semantics.organization: { role: true, unit: true }
>   OrganizationRole
> 
>   @Semantics.name: { givenName: true }   
>   FirstName,
> 
>   @Semantics.name: { additionalName: true }   
>   MiddleName,
> 
>   @Semantics.name: { familyName: true }   
>   LastName,
> 
>   @Semantics.address : { city: true }  
>   City,
> 
>   @Semantics.contact.photo: true
>   EmployeePictureURL
> }
> 
> ```

