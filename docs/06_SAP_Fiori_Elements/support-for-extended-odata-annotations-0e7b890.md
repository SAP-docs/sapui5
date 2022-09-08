<!-- loio0e7b890677c240b8ba65f8e8d417c048 -->

# Support for Extended OData Annotations

SAP Fiori elements for OData V4 supports OData IF-Expressions for specific annotations.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.

The following annotations are supported:

-   `FieldControl`

-   `UI.Hidden`

-   `Core.OperationAvailable`

-   `SAP__capabilities.UpdateRestrictions`

-   `SAP__capabilities.InsertRestriction`

-   `SAP__capabilities.DeleteRestriction`


> ### Sample Code:  
> Example on `FieldControl` 
> 
> ```
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
> Example on `UpdateRestrictions` 
> 
> ```
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



<a name="loio0e7b890677c240b8ba65f8e8d417c048__section_i2h_pzv_wpb"/>

## Support of `ODATA.Concat`

The `ODATA.Concat` function is supported on the title of the object page header. App developers can use it to set the title as a concatenation of a text and value from the database.

> ### Sample Code:  
> ```
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

