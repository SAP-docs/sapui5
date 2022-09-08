<!-- loioff0ae0b200e0488d928f87a043c4c747 -->

# Header Field Group

A field group defines the fields displayed within a specific reference facet. For example, the figure below shows the following fields within the *General Information* section \(created with a header facet\):

-   *Sales Organization*

-   *Distribution Channel*
-   *Division*

   
  
<a name="loioff0ae0b200e0488d928f87a043c4c747__fig_wbl_kqq_4lb"/>Object Page: Header Field Group

 ![](images/Header_Field_Group_379b975.png "Object Page: Header Field Group") 



<a name="loioff0ae0b200e0488d928f87a043c4c747__section_mjl_ck5_dnb"/>

## Sample Codes

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.FieldGroup" Qualifier="OrgData">
>     <Record Type="UI.FieldGroupType">
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="SalesOrganization"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="DistributionChannel"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                     <Annotation Term="UI.Hidden" Path="Delivered"/>
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="OrganizationDivision"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.fieldGroup: [
>   {
>     importance: #HIGH,
>     position: 10 ,
>     qualifier: 'OrgData'
>   }
> ]
> SALESORGANIZATION;
> 
> @UI.fieldGroup: [
>   {
>     importance: #HIGH,
>     hidden: true,
>     position: 20 ,
>     qualifier: 'OrgData'
>   }
> ]
> DISTRIBUTIONCHANNEL;
> 
> @UI.fieldGroup: [
>   {
>     importance: #HIGH,
>     position: 30 ,
>     qualifier: 'OrgData'
>   }
> ]
> ORGANIZATIONDIVISION;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.FieldGroup #OrgData : {
>     $Type : 'UI.FieldGroupType',
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : SalesOrganization,
>             ![@UI.Importance] : #High
>         },
>         {
>             $Type : 'UI.DataField',
>             Value : DistributionChannel,
>             ![@UI.Importance] : #High,
>             ![@UI.Hidden] : Delivered
>         },
>         {
>             $Type : 'UI.DataField',
>             Value : OrganizationDivision,
>             ![@UI.Importance] : #High
>         }
>     ]
> }
> 
> ```

