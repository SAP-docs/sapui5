<!-- loio5cfe2c19414f42abbc7a9a7363707ac3 -->

# The Navigation Target Object

The navigation target object defines applications that a user can navigate to from an APF-based application. It has the following format:

> ### Source Code:  
> ```
> {
>   "type" : "navigationTarget",    // optional
>   "id" : "<id>",  
>   "semanticObject" : "<semantic object>"    
>   "action" : "<action>"
>   "isStepSpecific" : <boolean>
> }
> 
> ```

The properties used in the navigation target object denote the following:

****


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`id` 

</td>
<td valign="top">

Unique ID of type string

</td>
</tr>
<tr>
<td valign="top">

`semanticObject` 

</td>
<td valign="top">

Semantic object as defined in the corresponding target mapping configured in the Fiori launchpad designer.

</td>
</tr>
<tr>
<td valign="top">

`action` 

</td>
<td valign="top">

Action as defined in the corresponding target mapping configured in the Fiori launchpad designer.

</td>
</tr>
<tr>
<td valign="top">

`isStepSpecific` 

</td>
<td valign="top">

Determines whether the navigation is assigned to all steps or to specific steps.

true = assigned to specific steps

false = assigned to all steps

</td>
</tr>
</table>

