<!-- loiod5762bcb9bf047d6a1b2db2b92f8fa69 -->

# Creating Navigation Targets

Users can use the *Open In…* button in the footer of an APF-based runtime application to navigate to other applications. The context of the current analysis path, including start filters and other filters, such as selections made in the charts up to the active analysis step, is handed over to the other application.

When the user navigates back to the APF-based application, the analysis path is reloaded in exactly the same status as it was when navigating to the other application; that is, all analysis steps and all selections made are retained.

The following video shows an introduction to navigation targets and how to configure them:



The following types of navigation targets exist:

-   Navigation targets that are relevant for all analysis steps

    Choose this type if the navigation target is always available no matter which analysis steps are added to the analysis path.

-   Step-specific navigation targets

    Choose this type if the navigation target is relevant only in the context of a specific dimension or selection. For example, navigating to a customer fact sheet is useful only when a customer has been selected. A step-specific navigation target is displayed in the *Open In…* dialog only if the step to which it is assigned is the active one.


Step-specific navigation targets can be assigned to multiple analysis steps. To assign a previously created navigation target to an analysis step, proceed in one of the following ways:

-   Select the navigation target and add the analysis step in the *Step Assignments* field.

-   Select the analysis step and add the navigation target in the *Navigation Target Assignment* section in the *Step-Specific* field.


You can define multiple navigation targets for each configuration. To create a navigation target, click *Add* \> *New Navigation Target* and enter the following:



## Basic Data


<table>
<tr>
<th valign="top">

Field



</th>
<th valign="top">

Explanation



</th>
</tr>
<tr>
<td valign="top">

Semantic Object



</td>
<td valign="top">

Semantic object as defined in the corresponding target mapping configured in the Fiori launchpad designer.

Semantic object as defined by the Fiori launchpad configuration.

> ### Note:  
> Currently, you can only navigate to other APF applications. Therefore, the semantic object must be ***FioriApplication***.



</td>
</tr>
<tr>
<td valign="top">

Action



</td>
<td valign="top">

As soon as you enter a semantic object, the value help for the action is filled with all actions that are available for this target mapping and that you are authorized for. The *Action* field is prefilled with the first action in this list.

> ### Note:  
> Currently, you can only navigate to other APF applications. Therefore, the action must be ***executeAPFConfiguration***.



</td>
</tr>
<tr>
<td valign="top">

Navigation Target Title



</td>
<td valign="top">

Taken over from the description in the target mapping.



</td>
</tr>
</table>



<a name="loiod5762bcb9bf047d6a1b2db2b92f8fa69__section_hzt_w5j_wbb"/>

## Navigation Parameters


<table>
<tr>
<th valign="top">

Field



</th>
<th valign="top">

Explanation



</th>
</tr>
<tr>
<td valign="top">

Use Dynamic Parameters



</td>
<td valign="top">

By default, this checkbox is not selected. In this case, the application context is handed over to the navigation target using an app state.

Select this checkbox to expose all single value filters and parameters from the context as URL parameters as well. In this case, each property of the context that has a single value only is exposed as key-value pair in the URL. This includes global filters set in the filter bar, selections in analysis steps, and filters and parameters handed over to APF from another application.

This is useful, for example, if the navigation target is unable to consume a context from the app state or if the intent of the navigation target has mandatory parameters that must be provided as URL parameters.

> ### Note:  
> Dynamic parameters occur in the URL of the called application. Therefore, data protection and privacy aspects have to be considered.



</td>
</tr>
<tr>
<td valign="top">

Static Parameter/Value



</td>
<td valign="top">

At runtime, static parameters are added to the URL of the navigation target. You can, for example, add a specific APF configuration ID to the navigation target to execute the generic APF runtime.



</td>
</tr>
</table>



## Assignment to Steps


<table>
<tr>
<th valign="top">

Field



</th>
<th valign="top">

Explanation



</th>
</tr>
<tr>
<td valign="top">

Assignment Type



</td>
<td valign="top">

Choose one of the following:

-   Assign to All Steps

    The navigation target is available in all analysis steps at runtime.

-   Assign to Specific Steps

    The navigation target is available only in the specified analysis steps.




</td>
</tr>
<tr>
<td valign="top">

Step Assignments



</td>
<td valign="top">

If you are creating a step-specific navigation target, assign one or more analysis steps to it. If you leave this field empty, you can still save the navigation target and assign it to steps at a later point in time.



</td>
</tr>
</table>



## Context Mapping

If a certain property is required for launching the navigation target, you can define a request for it. This ensures that the property is available as a context when navigating to this navigation target at runtime. The result of the context mapping request is a list of values for the specified property. If you have selected more than one property, the result is a list of value tuples. The results are added to the existing context that is handed over to the navigation target.


<table>
<tr>
<th valign="top">

Field



</th>
<th valign="top">

Explanation



</th>
</tr>
<tr>
<td valign="top">

Service



</td>
<td valign="top">

Path to the OData service root. If you use ABAP CDS views or BW OData queries, select a service from the value help, which lists all services available on SAP Gateway. If you use calculation views, you must enter the service manually.



</td>
</tr>
<tr>
<td valign="top">

Entity Set



</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view.



</td>
</tr>
<tr>
<td valign="top">

Mapped Properties



</td>
<td valign="top">

Select one or more properties from the list of properties that are available for the selected entity set.



</td>
</tr>
</table>



## Runtime

At runtime, the navigation targets are displayed in the *Open In…* menu. Step-specific navigation targets appear at the top of the list. Navigation targets that are relevant for all analysis steps appear at the bottom of the list so that this part of the *Open In…* menu is stable for all steps.

Navigation targets are displayed in the same order as they appear in the tree structure. You can change the order of the navigation targets by moving them up or down the tree structure using the arrow icons.

The list of navigation targets in the *Open In…* menu can be different from user to user. Whether a navigation target is visible for a user depends on the following:

-   The user is authorized for the target mapping of the navigation target. This is the case if the user has a role to which the catalog is assigned which contains the target mapping.

-   The navigation target supports the form factor the user is currently using: desktop, tablet, or smartphone. This is also configured in the target mapping.


**Related Information**  


[Outbound Navigation and Inbound Navigation](outbound-navigation-and-inbound-navigation-a2e3ed7.md "")

