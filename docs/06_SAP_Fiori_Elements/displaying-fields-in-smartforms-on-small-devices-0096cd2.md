<!-- loio0096cd2e7abb4c3fb11cf4dedc9fa740 -->

# Displaying Fields in Smartforms on Small Devices

SAP Fiori elements provide an option to show or hide fields based on their importance in small screen devices.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

Using the `UI.Importance` annotation, you can set the importance of a field. Based on the value set for this annotation, namely `High`, `Medium`, or `Low`, the fields are shown or hidden as depending on the screen size.


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

 `<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High" />` 



</td>
<td valign="top">

The field is visible in all device types \(desktops, tablets, or mobiles\).



</td>
</tr>
<tr>
<td valign="top">

 `<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium" />` 



</td>
<td valign="top">

The field is visible in desktops and tablets.



</td>
</tr>
<tr>
<td valign="top">

 `<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Low" />` 



</td>
<td valign="top">

The field is visible in desktops and tablets.



</td>
</tr>
</table>



> ### Note:  
> If you do not specify the `UI.Importance` annotation, the default is set to `None` \(= Medium importance\).

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.FieldGroup" Qualifier="GeneralInformation">
>     <Record>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="SalesOrder"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Label" String="Business Partner ID"/>
>                     <PropertyValue Property="Value" Path="BusinessPartnerID"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Low"/>
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Label" String="Opportunity ID"/>
>                     <PropertyValue Property="Value" Path="OpportunityID"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Medium"/>
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Label" String="Enabled"/>
>                     <PropertyValue Property="Value" Path="EnabledStatus"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="General Information"/>
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
>     position: 10,
>     qualifier: 'GeneralInformation',
>     groupLabel: 'General Information'
>   }
> ]
> SALESORDER;
> 
> @UI.fieldGroup: [
>   {
>     importance: #LOW,
>     label: 'Business Partner ID',
>     position: 20,
>     qualifier: 'GeneralInformation'
>   }
> ]
> BUSINESSPARTNERID;
> 
> @UI.fieldGroup: [
>   {
>     importance: #MEDIUM,
>     label: 'Opportunity ID',
>     position: 30,
>     qualifier: 'GeneralInformation'
>   }
> ]
> OPPORTUNITYID;
> 
> @UI.fieldGroup: [
>   {
>     label: 'Enabled',
>     position: 40,
>     qualifier: 'GeneralInformation'
>   }
> ]
> ENABLEDSTATUS;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.FieldGroup #GeneralInformation : {
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : SalesOrder,
>             ![@UI.Importance] : #High
>         },
>         {
>             $Type : 'UI.DataField',
>             Label : 'Business Partner ID',
>             Value : BusinessPartnerID,
>             ![@UI.Importance] : #Low
>         },
>         {
>             $Type : 'UI.DataField',
>             Label : 'Opportunity ID',
>             Value : OpportunityID,
>             ![@UI.Importance] : #Medium
>         },
>         {
>             $Type : 'UI.DataField',
>             Label : 'Enabled',
>             Value : EnabledStatus
>         }
>     ],
>     Label : 'General Information'
> }
> 
> 
> ```

> ### Note:  
> You cannot use the `UI.Importance` annotation to hide the entire `FieldGroup` and `Identification` on small screens. You have to set the `UI.Importance` for each of the data fields within a group. It is important to note that data fields rendered within the smartform are impacted by the `UI.Importance` settings.

