<!-- loiof269c0b310974d4480c264e1216c811f -->

# Which Action Has to Be Enabled for Which Control?

There are various actions and recommendations for implementing them in different types of controls.

Here's an overview of actions and some recommendations in which type of controls to implement them:


<table>
<tr>
<th valign="top">

Action

</th>
<th valign="top">

Description

</th>
<th valign="top">

Recommended For

</th>
</tr>
<tr>
<td valign="top">

remove

</td>
<td valign="top">

Remove or hide the control with all its children

</td>
<td valign="top">

Most controls

</td>
</tr>
<tr>
<td valign="top">

reveal

</td>
<td valign="top">

Make hidden/stashed controls visible for end users

</td>
<td valign="top">

Most controls

</td>
</tr>
<tr>
<td valign="top">

rename

</td>
<td valign="top">

Rename text properties of a control

</td>
<td valign="top">

Controls with textual properties that have a meaning to a user, such as:

-   Titles
-   Labels
-   Texts



</td>
</tr>
<tr>
<td valign="top">

move

</td>
<td valign="top">

Drag and drop / cut and paste elements inside containers/layouts

</td>
<td valign="top">

-   Containers
-   Composite controls \(like Forms, Tables, Charts\)
-   Layouts



</td>
</tr>
<tr>
<td valign="top">

addViaDelegate

</td>
<td valign="top">

Add properties from metadata via delegates attached to a control

</td>
<td valign="top">

-   Forms
-   Tables
-   Containers
-   Composite controls \(like Forms, Tables, Charts\)
-   Layouts
-   Charts



</td>
</tr>
<tr>
<td valign="top">

createContainer

</td>
<td valign="top">

Create a new \(sub-\)container to rearrange controls from a similar container

</td>
<td valign="top">

Container/layout controls with specific sub-containers, so it's clear what to provide as initial content for such a container

Examples: A form has groups, an object page layout has sections, sections have subsections.

</td>
</tr>
<tr>
<td valign="top">

localReset

</td>
<td valign="top">

Reset changes made on a particular scope, for example, inside a form, without resetting the other changes in the application

</td>
<td valign="top">

Containers

</td>
</tr>
<tr>
<td valign="top">

addIframe

</td>
<td valign="top">

Embed external content as iFrames

</td>
<td valign="top">

-   Containers
-   Layouts



</td>
</tr>
<tr>
<td valign="top">

settings

</td>
<td valign="top">

Modify additional control-specific settings in SAPUI5 flexibility

</td>
<td valign="top">

-   Controls that integrate additional settings using an own dialog
-   Controls that have personalization dialogs. Note: Personalization dialogs can be reused. We recommend to reuse them whenever it makes sense.



</td>
</tr>
<tr>
<td valign="top">

combine

</td>
<td valign="top">

Combine/join/group several controls into the first selected one

</td>
<td valign="top">

Especially form-related controls but also for other container, layout, or composite controls

</td>
</tr>
<tr>
<td valign="top">

split

</td>
<td valign="top">

Split combined controls into individual controls

</td>
<td valign="top">

Controls allowing the *combine* action

</td>
</tr>
<tr>
<td valign="top">

resize

</td>
<td valign="top">

Resize controls

It's currently only possible to change the width of controls.

</td>
<td valign="top">

Controls that aren't automatically sized, for example, table columns or pictures

</td>
</tr>
</table>



<a name="loiof269c0b310974d4480c264e1216c811f__section_hwz_zkd_2yb"/>

## Guidance for Composite Controls

In this section, we'll provide you with information on whether an action should be implemented on a composite control, even if it's already enabled for the individual controls used inside. Let's say a `RadioButton` control uses a `Label` control internally to present label functionality. Should the `RadioButton` control enable the *rename* action, or is it sufficient that the `Label` control enables it?

Here's the general guidance:

-   The action should be enabled by the plain control if it relies on the control itself, without changing the parent aggregation.

-   If the parent aggregation of the plain control is affected by the action, then the composite control should be enabled for the corresponding action.

-   If the inner control needs to behave differently within the context of a composite control, the design-time metadata/action should be propagated from the composite control to the inner control.


