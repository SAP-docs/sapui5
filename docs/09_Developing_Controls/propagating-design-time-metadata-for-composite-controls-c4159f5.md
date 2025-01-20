<!-- loioc4159f5aa35349fabc2eeef26cc26307 -->

# Propagating Design-Time Metadata for Composite Controls

If you want the controls used inside a composite control to behave differently as compared to being used stand-alone, the composite control needs to propagate different design-time metadata to the inner controls.

Composite controls in SAPUI5 internally reuse other SAPUI5 controls to create the required structure and to achieve the requested functionality. For example, `SmartGroup` creates and renders a `sap.m.Title` control to display the group's title. If you want the controls used inside a composite control to behave differently as compared to being used stand-alone, the composite control needs to propagate different design-time metadata to the inner controls.

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

`aggregations: <object>`

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

`<aggregationName>: <object>`

</td>
<td valign="top">

\-

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`propagateMetadata: <function>` \(optional\)

</td>
<td valign="top">

For example, in forms, the form defines the context for all the groups and the fields inside the groups. So, the form propagates the relevant container information to all groups, fields, etc. It defines a design-time metadata object that extends or overrides existing metadata of a successor control.

If no metadata is to be propagated \(can be based on a condition inside the function\), the function is to return `false`.

The `propagateMetadata` function is called with two arguments: `oControl` and `oRelevantContainerContro`l. The second parameter is the control that has defined this propagation function. It can be used if you need to know the relevant container during the execution of the function.

</td>
</tr>
</table>



<a name="loioc4159f5aa35349fabc2eeef26cc26307__section_u4w_s52_2yb"/>

## Example

Let's imagine the following composite control:

> ### Sample Code:  
> Public API
> 
> ```
> new NewFioriLayout({
>     content : [
>         new FieldControl("field1"),
>         new FieldControl("field2")
>     ],
>     footer : [
>         new Button()
>     ]
> })
> ```

> ### Sample Code:  
> Actual UI5 control tree
> 
> ```
> new NewFioriLayout({
>     content: [ // Public API
>         new FieldControl("field1"),
>         new FieldControl("field2")
>     ],
>     _layout: // Hidden aggregation
>         new SomeLayout({ // Control used internally
>             left: {
>                 new FieldControl("field1") // Public controls are moved into the internal structure
>             },
>             right: {
>                 new FieldControl("field2") // Public controls are moved into the internal structure
>             }
>         })
>     footer: [
>         new Button()
>     ]
> })
> ```

To open up actions on the hidden aggregation that you want to map to the control's public API, and to define a different design-time behavior for inner controls, use `propagateMetadata`, like in the following example:

> ### Sample Code:  
> NewFioriLayout.designtime.js
> 
> ```
> var oSomeLayoutDesigntime = {
>     //designtime metadata that overwrites the regular designtime metadata of SomeLayout
> }
> var oButtonDesigntime = {
>     //designtime metadata that overwrites the regular designtime metadata of SomeLayout
> }
> {
>     ...
>     aggregations: {
>         content: {
>             ignore: true // We will use the hidden aggregation, so no need for the public aggregation
>         },
>         _layout: {
>             ignore: false, // Enable the hidden aggregation
>             propagateMetadata: function(oInnerControl) {  // Will be called for all successor controls
>                 var sType = oInnerControl.getMetadata().getName();
>                 if (sType === "SomeLayout") {
>                     return oSomeLayoutDesigntime;
>                 } else if (sType !== "FieldControl") {
>                     return {
>                         actions: null // Overwrites all actions for all other controls
>                                       // Property changes and other technical changes (for example addXml) are still possible
>                     };
>                 } else if (sType !== "AnotherFieldControl") {
>                     return {
>                         actions: "not-adaptable" // Overwrites all actions for all other controls and
>                                                  // no property changes or other technical changes are possible (not editable/selectable)
>                     };
>                 }
>             },
>             propagateRelevantContainer: true
>         },
>         footer: {
>             propagateMetadata: function(oInnerControl) { // For example, forbid button in footer removal
>                 var sType = oInnerControl.getMetadata().getName();
>                 if (sType === "Button") {
>                     return oButtonDesigntime;
>                 }
>             }
>         }
>     // ...
> }
> ```

