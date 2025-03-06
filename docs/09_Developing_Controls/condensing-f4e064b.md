<!-- loiof4e064b604c8460781b01b0a9247b105 -->

# Condensing

Condensing reduces overhead when creating changes.

Each UI change made by a developer, key user or end user with SAPUI5 flexibility results in a change file being stored in the back end. Multiple changes to the same control can lead to superfluous changes that are not required for the target UI, for example, a text being renamed multiple times. Condensing minimizes the number of changes to be stored as much as possible. Certain changes, however, can't be condensed - for example, if they have been made on different layers or in different versions. Change handlers therefore have to classify the type of changes they create.

When the `getCondenserInfo` function is implemented, the change type is enabled to be condensed. Redundant changes are deleted while preserving the target UI. There are several classifications available, but no option to define a custom classification. Depending on the classification, different properties have to be returned by the function:


<table>
<tr>
<th valign="top">

Classification

</th>
<th valign="top">

Description

</th>
<th valign="top">

Example

</th>
<th valign="top">

Required Properties

</th>
</tr>
<tr>
<td valign="top">

All classifications

</td>
<td valign="top">

 

</td>
<td valign="top">

 

</td>
<td valign="top">

`affectedControl, classification`

</td>
</tr>
<tr>
<td valign="top">

LastOneWins

</td>
<td valign="top">

All changes except for the last one are removed.

</td>
<td valign="top">

*rename*

</td>
<td valign="top">

`uniqueKey`

</td>
</tr>
<tr>
<td valign="top">

Reverse

</td>
<td valign="top">

Two change types reverse each other like a toggle. A maximum of one change is left.

</td>
<td valign="top">

*hide*/*unhide*

</td>
<td valign="top">

`uniqueKey`

The unique key has to be the same for both change types that reverse each other.

</td>
</tr>
<tr>
<td valign="top">

Move

</td>
<td valign="top">

A control is moved inside a container.After any number of *move* changes, only one change of this type remains per control.

</td>
<td valign="top">

 

</td>
<td valign="top">

`sourceContainer, targetContainer, sourceIndex, sourceAggregation, targetAggregation, setTargetIndex, getTargetIndex`

</td>
</tr>
<tr>
<td valign="top">

Create

</td>
<td valign="top">

A new control is created \(it's not just changing the visibility\) that was previously not in the container.

</td>
<td valign="top">

 

</td>
<td valign="top">

`targetContainer, targetAggregation, setTargetIndex, getTargetIndex`

</td>
</tr>
<tr>
<td valign="top">

Destroy

</td>
<td valign="top">

A control is destroyed or removed from the container.

</td>
<td valign="top">

 

</td>
<td valign="top">

`targetContainer, sourceIndex, targetAggregation`

</td>
</tr>
<tr>
<td valign="top">

Update

</td>
<td valign="top">

A change is deleted and integrated in another change.

</td>
<td valign="top">

*addIFrame* + *UpdateIFrame*

</td>
<td valign="top">

`uniqueKey, updateContent`

The `uniqueKey` and `affectedControl` have to be the same as in the change into which this change is integrated.

The updates themselves are last one wins, so only the newest *update* change gets integrated.

The *update* change must not have any impact on any indices.

The change that receives the update can be of any kind, but additionally needs the *update* property.

</td>
</tr>
</table>

