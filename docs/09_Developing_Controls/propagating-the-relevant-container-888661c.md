<!-- loio888661cf00364c5c8067b7fd813a2bff -->

# Propagating the Relevant Container

The relevant container is the parent control that defines the context in which a control operates. By default, this is the direct parent. If you have a control that defines the context for controls several levels deep in the control tree, you need to propagate the relevant container information.

For example, in forms, the form defines the context for all the groups and fields inside the groups. So, the form propagates the relevant container information to all groups, fields, and so on.

The relevant container is used, for example, to define the boundaries of a *move* action. It also defines where change handlers for some actions need to be registered..

The following table shows a hierarchical overview of the properties:


<table>
<tr>
<th valign="top">

Property

\(Level 1\)

</th>
<th valign="top">

Property

\(Level 2\)

</th>
<th valign="top">

Property

\(Level 3\)

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top" rowspan="3">

`aggregations : <object>`

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

`<aggregationName> : <object>`

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top">

`propagateRelevantContainer : <function | boolean>` \(optional\)

</td>
<td valign="top">

Defines that this control is the relevant container for all successor elements.

</td>
</tr>
</table>

