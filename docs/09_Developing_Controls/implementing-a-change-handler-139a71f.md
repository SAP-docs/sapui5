<!-- loio139a71f866ad4692a3af9023c089998a -->

# Implementing a Change Handler

Here's how you write a change handler.

The custom change handler resides in the library of the control. Implement the following methods to write a change handler for a control:


<table>
<tr>
<th valign="top">

Method

</th>
<th valign="top">

Parameter

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top" rowspan="4">

`applyChange(oChange, oControl, mPropertyBag)`

`revertChange(oChange, oControl, mPropertyBag)`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Used at runtime to apply and revert the change. A change can be applied or reverted on a pure XML view or with the available SAPUI5 controls.

When the user clicks *Undo* in the in the UI adaptation header bar, the `revertChange` method is called. When the user clicks *Redo* in the in the UI adaptation header bar, the `applyChange` method is called again.

Always use the modifier from `mPropertyBag` to change the controls as this hides the difference between the XML node and real SAPUI5 controls.

The method is also used at design time to create the change and record the *undo* behavior.

It also interprets change data that have been created using `completeChangeContent()` and the change parameters of the control.

If a new control is created during the process, it needs to be returned, otherwise no return value is needed.

If the change doesn't pass a validation or if there's a problem, an error has to be thrown. This error is handled and shown in the console.

</td>
</tr>
<tr>
<td valign="top">

`oChange`

</td>
<td valign="top">

Instance of a SAPUI5 flexibility change.

</td>
</tr>
<tr>
<td valign="top">

`oControl`

</td>
<td valign="top">

Instance of a control or XML node representing the control from the change selector.

</td>
</tr>
<tr>
<td valign="top">

`mPropertyBag`

</td>
<td valign="top">

Contains the following:

```
{
     modifier: <JSControlTreeModifier or XMLTreeModifier>,
     view: <view instance of an XML view node>,
     appComponent: <instance of an application component>
}
```



</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`completeChangeContent(oChange, mChangeSpecificInfo)`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Converts the change-specfic information into the content of the change.

**Never store control IDs in the change!** They contain app component prefixes that prevent applying such changes if the component prefix changes. Instead, store selectors and mark controls as dependent.

If there are texts in your change content, such as labels from the *rename* action, make sure to add them to the text section of the control using the following code:

`oChange.setText(sKey, sText, sTranslationTextType)`

`sap.ui.fl.changeHandler.Base.setTextInChange(oChange, sKey, sText, sType)`

</td>
</tr>
<tr>
<td valign="top">

`oChange`

</td>
<td valign="top">

Instance of an SAPUI5 flexibility change containing the raw information.

The change content has to be filled in this method.

</td>
</tr>
<tr>
<td valign="top">

`mChangeSpecificInfo`

</td>
<td valign="top">

Object containing the action-specific information for the current change.

The concrete format is change-specific.

</td>
</tr>
<tr>
<td valign="top" rowspan="15">

`[getCondenserInfo(oChange, mPropertyBag)]` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Enables the [Condensing](condensing-f4e064b.md) information for the change handler.

Has to return an object with all necessary information depending on the classification.

</td>
</tr>
<tr>
<td valign="top">

`oChange`

</td>
<td valign="top">

Instance of an SAPUI5 flexibility change.

</td>
</tr>
<tr>
<td valign="top">

`mPropertyBag`

</td>
<td valign="top">

See `applyChange`.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.affectedControl`

</td>
<td valign="top">

Selector \(object containing `id` and the `idIsLocal` flag\) of the affected control, for example the moved control in case of a *move* action.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.classification`

</td>
<td valign="top">

Use the `sap.ui.fl.changeHandler.condenser.Classification` enum.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.uniqueKey`

</td>
<td valign="top">

Unique identifier.

Has to be unique per classification per control.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.sourceContainer`

</td>
<td valign="top">

Selector pointing to the source container.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.targetContainer`

</td>
<td valign="top">

Selector pointing to the target container.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.sourceIndex`

</td>
<td valign="top">

Source index.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.sourceAggregation`

</td>
<td valign="top">

Source aggregation name.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.targetAggregation`

</td>
<td valign="top">

Target aggregation name.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.setTargetIndex`

</td>
<td valign="top">

Function to set the target index in the change content.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.getTargetIndex`

</td>
<td valign="top">

Function to get the target index from the change content.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.updateContent`

</td>
<td valign="top">

Content that is passed to the update function of the receiving change.

</td>
</tr>
<tr>
<td valign="top">

`oReturn.update`

</td>
<td valign="top">

Function to update the change with the content passed to this function.

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`[onAfterXMLChangeProcessing(oElement, mPropertyBag)]` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Optional hook that is called for every control on each change handler that applied a change on that control during XML change application.

Called once all changes for the control have been processed.

</td>
</tr>
<tr>
<td valign="top">

`oElement`

</td>
<td valign="top">

The HTML element on which the change was applied.

</td>
</tr>
<tr>
<td valign="top">

`mPropertyBag`

</td>
<td valign="top">

See `applyChange`.

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`[getChangeVisualizationInfo(oChange, oAppComponent)]` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

See [Change Visualization](change-visualization-46e29bb.md).

</td>
</tr>
<tr>
<td valign="top">

`oChange`

</td>
<td valign="top">

Instance of an SAPUI5 flexibility change.

</td>
</tr>
<tr>
<td valign="top">

`appComponent`

</td>
<td valign="top">

Component instance used to retrieve IDs \(if needed\).

</td>
</tr>
</table>

