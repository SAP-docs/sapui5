<!-- loioaa5ffcf13b4c4e678ae129ad2561eca0 -->

# Implement and Register a *Combine* Change Handler

Implement and register a *combine* change type with its change handler to a control.

For the *combine* action, no default change handler exists, therefore, it's necessary to implement a change handler for combining controls \(see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md)\).

The change handler gets the following information from the SAPUI5 flexibility tool as change-specific information:


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Type

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`oSpecificChangeInfo`

</td>
<td valign="top">

Object

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`oSpecificChangeInfo.source`

</td>
<td valign="top">

`sap.ui.core.Element`|Node

</td>
<td valign="top">

ID of the control where the action is triggered.

</td>
</tr>
<tr>
<td valign="top">

`oSpecificChangeInfo.combineElements`

</td>
<td valign="top">

`Array<sap.ui.core.Element`|Node`>`

</td>
<td valign="top">

Array of control IDs to be combined.

</td>
</tr>
</table>

Find an example on GitHub at [https://github.com/UI5/openui5/blob/master/src/sap.m/src/sap/m/changeHandler/CombineButtons.js](https://github.com/UI5/openui5/blob/master/src/sap.m/src/sap/m/changeHandler/CombineButtons.js).

> ### Note:  
> When creating new controls inside `applyChange()`, make sure to move the original controls into the dependents aggregation of a **container**. In our example, the original buttons are to be moved to the `dependents` aggregation of `sap.m.Bar`, not to the `dependents` aggregation of `sap.m.MenuItem`.
> 
> Make sure that every new controls gets a stable ID, which is a prerequisite for UI adaptation.

You can then register it in the `library.js` file of the control's library, where you map the change type to the corresponding change handler and the control type. The change type for this action can be named `combineButtons`, for example. Register the change type for this action in the `<control>.flexibility.js` file. For more information, see [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).

