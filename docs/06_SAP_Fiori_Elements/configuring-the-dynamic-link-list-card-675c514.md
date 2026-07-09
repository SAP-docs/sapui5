<!-- loio675c514720f04b06a6fdf7be42901187 -->

# Configuring the Dynamic Link List Card

You can configure dynamic link list card to display data such as links, images, and icons in the form of list items.



To display information in the link list card as either a standard list or carousel, configure the `listFlavor` property in the card settings.

The dynamic link list card also supports the `Contact` annotation as the default annotation without a qualifier, which enables quick view information.



To configure a dynamic link list card, proceed as follows:

1.  Configure the manifest settings.

    The following sample shows the manifest settings for a dynamic link list card, including the title, list flavor, sort order, and reference to the `HeaderInfo` annotation:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "card017": {
    >           "model": "salesOrder",
    >           "template": "sap.ovp.cards.v4.linklist",
    >           "settings": {
    >             "title": "Standard Dynamic Linklist Card",
    >             "targetUri": "https://en.abc.org/wiki/xyz _2",
    >             "subTitle": "Link Feature Test",
    >             "listFlavor": "standard",
    >             "entitySet": "ProductSet",
    >             "sortBy": "Name",
    >             "sortOrder": "ascending",
    >             "headerAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#header1",
    >             "defaultSpan": {
    >               "rows": 20,
    >               "cols": 2
    >             }
    >           }
    >         },
    > ```

    > ### Note:  
    > The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

2.  Configure list information using the `UI.HeaderInfo` annotation.

    -   List title: Set the `Title` property.

    -   List subtitle: Set the `Description` property.

    -   List item picture: Set the `ImageUrl` property to display the list image, or set the `typeImageUrl` property to display the list icon.

    -   Carousel picture: The configuration is similar to the list item picture. The carousel picture responds to a click event in the same way as the list title.


    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotation Term="com.sap.vocabularies.UI.v1.HeaderInfo" Qualifier="header1">
    >    <Record Type="com.sap.vocabularies.UI.v1.HeaderInfoType">
    >       <PropertyValue Property="TypeName" String="Product" />
    >       <PropertyValue Property="TypeNamePlural" String="Products" />
    >       <PropertyValue Property="Title">
    >          <Record Type="com.sap.vocabularies.UI.v1.DataField">
    >             <PropertyValue Property="Label" String="Product Name" />
    >             <PropertyValue Property="Value" Path="Name" />
    >          </Record>
    >       </PropertyValue>
    >       <PropertyValue Property="Description">
    >          <Record Type="com.sap.vocabularies.UI.v1.DataField">
    >             <PropertyValue Property="Label" String="Product Description" />
    >             <PropertyValue Property="Value" Path="Description" />
    >          </Record>
    >       </PropertyValue>
    >       <PropertyValue Property="TypeImageUrl" Path="ImageUrl" />
    >    </Record>
    > </Annotation>
    > 
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > @UI.headerInfo: {
    >   typeName: 'Product',
    >   typeNamePlural: 'Products',
    >   title: {
    >     label: 'Product Name',
    >     value: 'NAME',
    >     type: #STANDARD
    >   },
    >   description: {
    >     label: 'Product Description',
    >     value: 'DESCRIPTION',
    >     type: #STANDARD
    >   }
    > }
    > annotate view VIEWNAME with { 
    > 
    > }
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > UI.HeaderInfo #header1 : {
    >     $Type : 'UI.HeaderInfoType',
    >     TypeName : 'Product',
    >     TypeNamePlural : 'Products',
    >     Title : {
    >         $Type : 'UI.DataField',
    >         Label : 'Product Name',
    >         Value : Name
    >     },
    >     Description : {
    >         $Type : 'UI.DataField',
    >         Label : 'Product Description',
    >         Value : Description
    >     },
    >     TypeImageUrl : ImageUrl
    > },
    > ```

3.  Configure contact information using the `Communication.Contact` annotation.

    When a user clicks a list item, a contact card appears as a popover. The popover content comes from the `Communication.Contact` annotation.

    -   `fn`: Full name - Used as the headline of the contact card header.

    -   `photo`: URL for a picture – Used in the contact card header.

    -   `role`: Used as the description text in the contact card header.

    -   `tel`: When the property types are `work` and `pref`, the contact card displays it as *Phone*. When the property types are `cell` and `work`, it is displayed as *Mobile*.

    -   `email`: When the property types are `work` and `pref`, the contact card displays it as *E-Mail*.


    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotation Term="com.sap.vocabularies.Communication.v1.Contact">
    >    <Record>
    >        <PropertyValue Property="fn" Path="FullName" />
    >       <PropertyValue Property="title" Path="Title" />
    >       <PropertyValue Property="org" Path="CompanyName" />
    >       <PropertyValue Property="role" Path="OrganizationRole" />
    >       <PropertyValue Property="tel">
    >          <Collection>
    >             <Record>
    >                <PropertyValue Property="type"
    >                   EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/fax" />
    >                <PropertyValue Property="uri" Path="FaxNumber" />
    >             </Record>
    >             <Record>
    >                <PropertyValue Property="type"
    >                   EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/work com.sap.vocabularies.Communication.v1.PhoneType/preferred" />
    >                <PropertyValue Property="uri" Path="PhoneNumber" />
    >             </Record>
    >          </Collection>
    >       </PropertyValue>
    >       <PropertyValue Property="email">
    >          <Collection>
    >             <Record>
    >                <PropertyValue Property="type"
    >                   EnumMember="com.sap.vocabularies.Communication.v1.ContactInformationType/preferred com.sap.vocabularies.Communication.v1.ContactInformationType/work" />
    >                <PropertyValue Property="address" Path="EmailAddress" />
    >             </Record>
    >          </Collection>
    >       </PropertyValue>
    >    </Record>
    > </Annotation>
    > 
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > define view VIEWNAME
    > {
    >   @Semantics.name.fullName: true
    >   FullName,
    > 
    >   @Semantics.eMail.address: true
    >   @Semantics.eMail.type:  [#WORK, #PREF]
    >   EmailAddress,
    >    
    >   @Semantics.telephone.type:  [ #FAX ] 
    >   FaxNumber,
    >   
    >   @Semantics.telephone.type:  [ #PREF , #WORK]
    >   PhoneNumber,
    > 
    >   @Semantics.name: { jobTitle: true }   
    >   Title,
    > 
    >   @Semantics.organization: { name: true }
    >   CompanyName,
    > 
    >   @Semantics.organization: { role: true, unit: true }
    >   OrganizationRole
    > }
    > 
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > Communication.Contact : {
    >     fn : FullName,
    >     title : Title,
    >     org : CompanyName,
    >     role : OrganizationRole,
    >     tel : [
    >         {
    >             type : #fax,
    >             uri : FaxNumber
    >         },
    >         {
    >             type : [ #work, #pref ],
    >             uri : PhoneNumber
    >         }
    >     ],
    >     email : [
    >         {
    >             type : [ #pref, #work ],
    >             address : EmailAddress
    >         }
    >     ]
    > }
    > 
    > ```

4.  Configure the navigation type.

    The link list card supports the following navigation types:


    <table>
    <tr>
    <th valign="top">

    Navigation type
    
    </th>
    <th valign="top">

    How to configure
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    Intent-based navigation
    
    </td>
    <td valign="top">
    
    Define the `SemanticObject` and `Action` properties in the `UI.Identification` annotation to set the navigation target.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    Function import \(`DataFieldForAction`\)
    
    </td>
    <td valign="top">
    
    Define the `Action` property in the `LineItem` annotation to trigger a function import that performs an OData action on the entity.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    External navigation
    
    </td>
    <td valign="top">
    
    Define a `UI.LineItem` of type `WITH_URL`. The URL is taken from the entity-type field named in the line item's `url` property.
    
    </td>
    </tr>
    </table>
    
    The combination of annotations defined determines what users can do with each list item:

    **Navigation Behavior**


    <table>
    <tr>
    <th valign="top">

    Annotation
    
    </th>
    <th valign="top">

    Behavior
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    For any of these annotation configurations:

    -   `UI.Identification` annotation with the `Action` property

    -   `com.sap.vocabularies.UI.v1.LineItem` annotation with the `Action` property

    -   `com.sap.vocabularies.UI.v1.LineItem` annotation with the `Url` property



    
    </td>
    <td valign="top">
    
    Navigation is available from the line item.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    For any of these annotation configurations and the default contact annotation:

    -   `UI.Identification` annotation with the `Action` property

    -   `com.sap.vocabularies.UI.v1.LineItem` annotation with the `Action` property

    -   `com.sap.vocabularies.UI.v1.LineItem` annotation with the `Url` property



    
    </td>
    <td valign="top">
    
    Navigation is available from the line item and you can see the quick view information when clicking the title.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    Only for default contact annotation configuration
    
    </td>
    <td valign="top">
    
    Quick view information is available when clicking the title.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    If no navigation-based annotation or contact annotation exists
    
    </td>
    <td valign="top">
    
    Only the label is displayed.
    
    </td>
    </tr>
    </table>
    

**Related Information**  


[Configuring the Static Link List Card](configuring-the-static-link-list-card-4e81b77.md "You can configure a static link list card to display static data, such as links, images, and icons, as list items.")

[Link List Cards](link-list-cards-0326f91.md "You can use link list cards to display a list of links with a title, picture, icon, or subtitle. Link list cards support quick views to display contact annotation information.")

