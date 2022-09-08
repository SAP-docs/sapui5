<!-- loiof57373d38df5413aab9422e185c9c9a6 -->

# Configuring the List Area



1.  Define `DataField` property to display values \(text\) for the list. For example:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotation Term="com.sap.vocabularies.UI.v1.LineItem" Qualifier="View4">
    >    <Collection>
    >       <Record Type="com.sap.vocabularies.UI.v1.DataField">
    >          <PropertyValue Property="Label" String="Order ID" />
    >          <PropertyValue Property="Value" Path="SalesOrderID" />
    >       </Record>
    >       <Record Type="com.sap.vocabularies.UI.v1.DataField">
    >          <PropertyValue Property="Label" String="Customer" />
    >          <PropertyValue Property="Value" Path="ToBusinessPartner/EmailAddress" />
    >       </Record>
    >       <Record Type="com.sap.vocabularies.UI.v1.DataField">
    >          <PropertyValue Property="Label" String="Customer" />
    >          <PropertyValue Property="Value" Path="CustomerName" />
    >       </Record>
    >       <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation">
    >          <PropertyValue Property="Label" String="TaxAmount" />
    >          <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.DataPoint#TaxAmount" />
    >       </Record>
    >    </Collection>
    > </Annotation>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
    > 
    > @UI.lineItem: [
    >   {
    >     label: 'Order ID',
    >     position: 10,
    >     qualifier: 'View4'
    >   }
    > ]
    > SALESORDERID;
    > 
    > @UI.lineItem: [
    >   {
    >     label: 'Customer',
    >     value: '_BUSINESSPARTNER.EMAILADDRESS',
    >     position: 20,
    >     qualifier: 'View4'
    >   }
    > ]
    > TOBUSINESSPARTNER/EMAILADDRESS;
    > 
    > @UI.lineItem: [
    >   {
    >     label: 'Customer',
    >     position: 30,
    >     qualifier: 'View4'
    >   }
    > ]
    > CUSTOMERNAME;
    > 
    > @UI.lineItem: [
    >   {
    >     label: 'TaxAmount',
    >     valueQualifier: 'TaxAmount',
    >     type: #AS_DATAPOINT,
    >     position: 40,
    >     qualifier: 'View4'
    >   }
    > ]
    > PROPERT_NAME;
    > 
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > 
    > UI.LineItem #View4 : [
    >     {
    >         $Type : 'UI.DataField',
    >         Label : 'Order ID',
    >         Value : SalesOrderID
    >     },
    >     {
    >         $Type : 'UI.DataField',
    >         Label : 'Customer',
    >         Value : ToBusinessPartner.EmailAddress
    >     },
    >     {
    >         $Type : 'UI.DataField',
    >         Label : 'Customer',
    >         Value : CustomerName
    >     },
    >     {
    >         $Type : 'UI.DataFieldForAnnotation',
    >         Label : 'TaxAmount',
    >         Target : '@UI.DataPoint#TaxAmount'
    >     }
    > ]
    > 
    > ```

2.  \(Optional\) Define `DataFieldforAnnotation` property using these annotations:

    -   `DataPoint`: To view numeric values in the list. For example:

        > ### Sample Code:  
        > XML Annotation
        > 
        > ```xml
        > <Annotation Term="com.sap.vocabularies.UI.v1.DataPoint" Qualifier="TaxAmount">
        >    <Record Type="com.sap.vocabularies.UI.v1.DataPointType">
        >       <PropertyValue Property="Title" String="TaxAmount" />
        >       <PropertyValue Property="Value" Path="TaxAmount" />
        >    </Record>
        > </Annotation>
        > ```

        > ### Sample Code:  
        > ABAP CDS Annotation
        > 
        > ```
        > 
        > @UI.dataPoint: {
        >   title: 'TaxAmount'
        > }
        > TaxAmount;
        > ```

        > ### Sample Code:  
        > CAP CDS Annotation
        > 
        > ```
        > UI.DataPoint #TaxAmount : {
        >     $Type : 'UI.DataPointType',
        >     Title : 'TaxAmount',
        >     Value : TaxAmount
        > }
        > ```

    -   `Contact`: To view quick view information in the list. For example, you can configure the list card to display contact information as shown here:

        > ### Sample Code:  
        > XML Annotation
        > 
        > ```xml
        > <Annotation Term="com.sap.vocabularies.Communication.v1.Contact">
        >    <Record>
        >       <PropertyValue Property="tel">
        >          <Collection>
        >             <Record>
        >                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/fax" />
        >                <PropertyValue Property="uri" Path="FaxNumber" />
        >             </Record>
        >             <Record>
        >                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/work com.sap.vocabularies.Communication.v1.PhoneType/preferred" />
        >                <PropertyValue Property="uri" Path="PhoneNumber" />
        >             </Record>
        >          </Collection>
        >       </PropertyValue>
        >       <PropertyValue Property="email">
        >          <Collection>
        >             <Record>
        >                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.ContactInformationType/preferred com.sap.vocabularies.Communication.v1.ContactInformationType/work" />
        >                <PropertyValue Property="address" Path="EmailAddress" />
        >             </Record>
        >          </Collection>
        >       </PropertyValue>
        >    </Record>
        > </Annotation>
        > ```

        > ### Sample Code:  
        > ABAP CDS Annotation
        > 
        > ```
        > 
        > define view VIEWNAME
        > {
        >   @Semantics.eMail.address: true
        >   @Semantics.eMail.type:  [#WORK]
        >   EmailAddress,
        >    
        >   @Semantics.telephone.type:  [ #FAX ] 
        >   FaxNumber,
        >   
        >   @Semantics.telephone.type:  [ #WORK]
        >   PhoneNumber
        > }
        > ```

        > ### Sample Code:  
        > CAP CDS Annotation
        > 
        > ```
        > Communication.Contact : {
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
        > ```


3.  \(Optional\) Define navigation properties for list area.

    For configuring navigation information:

    -   Use com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation to define intent based navigation to SAP Fiori application.

    -   Use com.sap.vocabularies.UI.v1.DataFieldWithUrl term to configure navigation to external apps and websites.



> ### Note:  
> The recommended way to configure intent-based navigation using `DataFieldForIntentBasedNavigation` property. However, you can also use `DataFieldWithUrl` for navigation to a specific application route that is not configured as target map. The overview page identify this as an intent-based navigation and opens the application in the same tab with relevant context.

