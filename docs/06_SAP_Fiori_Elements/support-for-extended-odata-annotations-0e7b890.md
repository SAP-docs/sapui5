<!-- loio0e7b890677c240b8ba65f8e8d417c048 -->

# Support for Extended OData Annotations

You can use OData `If` expressions for specific annotations in SAP Fiori elements for OData V4.

The following annotations are supported:

-   `FieldControl`

-   `UI.Hidden`

-   `Core.OperationAvailable`

-   `SAP__capabilities.UpdateRestrictions`

-   `SAP__capabilities.InsertRestriction`

-   `SAP__capabilities.DeleteRestriction`


The following sample code shows how to use `FieldControl`:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="sap.fe.core.FieldEdit.RootEntity/FieldControlDynamicIf"> 
>     <Annotation Term="com.sap.vocabularies.Common.v1.FieldControl"> 
>         <If> 
>             <Eq> 
>                 <Path>FieldControlDynamicIfValue</Path> 
>                 <Int>5</Int> 
>             </Eq> 
>             <EnumMember>Common.FieldControlType/ReadOnly</EnumMember> 
>             <EnumMember>Common.FieldControlType/Optional</EnumMember> 
>         </If> 
>     </Annotation> 
> </Annotations> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate sap.fe.core.FieldEdit.RootEntity with {
>     FieldControlDynamicIf @Common.FieldControl :
>         {
>             $If: [
>                 { $Eq: [ FieldControlDynamicIfValue, 5 ] },
>                 #ReadOnly,
>                 #Optional
>             ]
>         };
> };
> ```

The following sample code shows how to use `UpdateRestrictions`:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="Capabilities.NavigationRestrictions"> 
>     <Record Type="Capabilities.NavigationRestrictionsType"> 
>         <PropertyValue Property="RestrictedProperties"> 
>             <Collection> 
>                 <Record Type="Capabilities.NavigationPropertyRestriction"> 
>                     <PropertyValue Property="NavigationProperty" NavigationPropertyPath="_Item" /> 
>                     <PropertyValue Property="InsertRestrictions"> 
>                         <Record Type="Capabilities.InsertRestrictionsType"> 
>                             <PropertyValue Property="Insertable" Path="owner/isVerified" /> 
>                         </Record> 
>                     </PropertyValue> 
>                     <PropertyValue Property="UpdateRestrictions"> 
>                         <Record Type="Capabilities.UpdateRestrictionsType"> 
>                             <PropertyValue Property="Updatable"> 
>                                 <If> 
>                                     <Or> 
>                                         <Eq> 
>                                             <Null /> 
>                                             <Path>owner/isVerified</Path> 
>                                         </Eq> 
>                                         <Eq> 
>                                             <String /> 
>                                             <Path>owner/isVerified</Path> 
>                                         </Eq> 
>                                     </Or> 
>                                     <Bool>false</Bool> 
>                                     <Bool>true</Bool> 
>                                 </If> 
>                             </PropertyValue> 
>                         </Record> 
>                     </PropertyValue> 
>                 </Record> 
>             </Collection> 
>         </PropertyValue> 
>     </Record> 
> </Annotation> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate YourService.RootEntity with @Capabilities.NavigationRestrictions : {
>     RestrictedProperties : [
>         {
>             NavigationProperty : '_Item',
>             InsertRestrictions : {
>                 Insertable : owner.isVerified
>             },
>             UpdateRestrictions : {
>                 Updatable : {
>                     $If: [
>                         {
>                             $Or: [
>                                 { $Eq: [ owner.isVerified, null ] },
>                                 { $Eq: [ owner.isVerified, '' ] }
>                             ]
>                         },
>                         false,
>                         true
>                     ]
>                 }
>             }
>         }
>     ]
> };
> ```



<a name="loio0e7b890677c240b8ba65f8e8d417c048__section_i2h_pzv_wpb"/>

## Support of `odata.concat` function

The `odata.concat` function is supported on the title of the object page header. You can use it to set the title as a concatenation of a text and value from the database, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="SAP__self.BusinessPartner"> 
>     <Annotation Term="com.sap.vocabularies.UI.v1.HeaderInfo"> 
>         <Record Type="com.sap.vocabularies.UI.v1.HeaderInfoType"> 
>             <PropertyValue Property="TypeName" String="Business Partner" /> 
>             <PropertyValue Property="TypeNamePlural" String="Business Partners" /> 
>             <PropertyValue Property="Title"> 
>                 <Record Type="com.sap.vocabularies.UI.v1.DataField"> 
>                     <PropertyValue Property="Label" String="Name" /> 
>                     <PropertyValue Property="Value"> 
>                         <Apply Function="odata.concat"> 
>                             <Path>CompanyName</Path> 
>                             <String /> 
>                             <Path>LegalForm</Path> 
>                         </Apply> 
>                     </PropertyValue> 
>                 </Record> 
>             </PropertyValue> 
>         </Record> 
>     </Annotation> 
> </Annotation> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate SAP__self.BusinessPartner with @UI.HeaderInfo: {
>     TypeName: 'Business Partner',
>     TypeNamePlural: 'Business Partners',
>     Title: {
>         $Type: 'UI.DataField',
>         Label: 'Name',
>         Value: {
>             $Apply: {
>                 $Function: 'odata.concat',
>                 $Parameters: [
>                     CompanyName,
>                     '',
>                     LegalForm
>                 ]
>             }
>         }
>     }
> };
> ```

