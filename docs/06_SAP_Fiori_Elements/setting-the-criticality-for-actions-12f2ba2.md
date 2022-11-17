<!-- loio12f2ba26f0d74853a0707597844c2961 -->

# Setting the Criticality for Actions

You can add criticality to an action button via annotations.

When you set the criticality to an action, the corresponding action button renders a semantic action button \(positive semantic and negative semantic\).

Criticality of a data field \(`UI.DataFieldForAction`\) can be achieved by setting a value or status for the `Criticality` property in the annotation.

Actions that are a part of table rows \(inline\), an object page header, and an object page footer support `Criticality`.

 ![]() ![](images/Criticality_for_Actions_e60c298.png) 



> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForAction"> 
>     <PropertyValue Property="Determining" Bool="true"/> 
>     <PropertyValue Property="Label" String="Positive (Dummy)"/> 
>     <PropertyValue Property="Action" String="com.c_salesordermanage_sd_aggregate.DummyBoundAction"/> 
>     <PropertyValue Property="Criticality" EnumMember="UI.CriticalityType/Positive"/> 
> </Record> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.<lineItem/fieldGroup>: [  
>   {
>     label: 'Positive (Dummy)',
>     dataAction: 'PUSHDOWN:com.c_salesordermanage_sd_aggregate.DummyBoundAction',
>     type: #FOR_ACTION
>   }
> ]  
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataFieldForAction',
>     Determining : true,
>     Label : 'Positive (Dummy)',
>     Action : 'com.c_salesordermanage_sd_aggregate.DummyBoundAction',
>     Criticality : #Positive
> }
> ```

Two supported values for `Criticality` are:

**Criticality: Supported Values**


<table>
<tr>
<th valign="top">

Value



</th>
<th valign="top">

Outcome



</th>
</tr>
<tr>
<td valign="top">

UI.CriticalityType/Positive or 3



</td>
<td valign="top">

Positive/Green status \(Completed/Available/On Track/Acceptable\)



</td>
</tr>
<tr>
<td valign="top">

UI.CriticalityType/Negative or 1



</td>
<td valign="top">

Negative/Red status \(Attention/Overload/Alert\)



</td>
</tr>
</table>

> ### Note:  
> -   `Criticality` is currently supported only for `DataFieldForAction`.
> 
> -   When an action is marked as critical, the previously emphasized buttons \(SAVE, EDIT or APPLY\) no longer appear emphasized.
> 
> -   Emphasized buttons and semantic buttons \(critical actions\) cannot occur together on one page, as there can only be a single primary action \(so either the emphasized or the semantic button\).
> 
> -   In SAP Fiori elements for OData V4, the object page header currently only allows you to place a critical action as the left-most action.

