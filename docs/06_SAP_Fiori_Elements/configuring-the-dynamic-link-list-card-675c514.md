<!-- loio675c514720f04b06a6fdf7be42901187 -->

# Configuring the Dynamic Link List Card

Allows you to display data such as links, images, and icons in the form of list items.



To display information in the link list card as either standard or carousal type, configure the `listFlavor` property in the card settings.

The dynamic link list card also supports the contact annotation as the default annotation without a qualifier, enabling quick view information.



1.  Configure the descriptor settings.

    ```
            "card017": {
              "model": "salesOrder",
              "template": "sap.ovp.cards.linklist",
              "settings": {
                "title": "Standard Dynamic Linklist Card",
                "targetUri": "https://en.abc.org/wiki/xyz _2",
                "subTitle": "Smartlink Feature Test",
                "listFlavor": "standard",
                "entitySet": "ProductSet",
                "sortBy": "Name",
                "sortOrder": "ascending",
                "headerAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#header1",
                "defaultSpan": {
                  "rows": 20,
                  "cols": 2
                }
              }
            },
    
    ```

2.  Configure the list information in the `UI.HeaderInfo` annotation.

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

3.  Configure the contact annotation.

    A contact card is displayed as a popover. The data displayed on the contact card is taken from the communication contact annotation of the card. The following elements of the contact annotation are evaluated:

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

    -   Intent-based navigation: Define the `SemanticObject` and `Action` properties in the `UI.Identification` annotation to set the navigation target.

    -   Function import \(`DataFieldForAction`\): Define the `Action` property in the `LineItem` annotation to trigger a function import that performs an OData action for an entity.

    -   External navigation: Define the `UI.LineItem` of type `WITH_URL`. The URL for this navigation is taken from the entity type field that is named in the line item's `url` property.


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
    

