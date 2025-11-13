<!-- loio3e2c725947574016bf145406fa2876c4 -->

# Provide the Design-Time Metadata for the *Split* Action

Provide the design-time metadata for the *split* action.

To provide the design-time information needed for the *split* action, use the file `<control>.designtime.js` file, which is located next to the control implementation in the Git directory structure. Create the file if it's missing. Ensure that the `designTime` attribute in the metadata of the control is set. For more information, see [Enable a Control for Design-Time Usage](enable-a-control-for-design-time-usage-6888c17.md).

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
<td valign="top" rowspan="7">

`actions: <object>` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Describes the actions that can be applied to the element.

</td>
</tr>
<tr>
<td valign="top" rowspan="6">

`"split": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or calculates the design-time metadata specific to the *remove* action for an element as an object with the following properties.

</td>
</tr>
<tr>
<td valign="top">

`changeType: <string>` \(mandatory\)

</td>
<td valign="top">

Provides the value of `changeType` from the previous step.

</td>
</tr>
<tr>
<td valign="top">

`additionalInfoKey: <string>` \(optional\)

</td>
<td valign="top">

Provides additional information to be displayed as a tooltip in the context menu.

</td>
</tr>
<tr>
<td valign="top">

`changeOnRelevantContainer: <boolean>` \(mandatory\)

</td>
<td valign="top">

Has to be set to `true`. This property is needed for setting of the selector to the relevant container.

</td>
</tr>
<tr>
<td valign="top">

`isEnabled: <function> |<boolean>` \(optional\)

</td>
<td valign="top">

Default is `true`. The `isEnabled` value or function is used to decide whether the *Split* action is available in SAPUI5 flexibility. You get the selected SAPUI5 element as a function parameter.

</td>
</tr>
<tr>
<td valign="top">

`getControlsCount: <integer>` \(mandatory\)

</td>
<td valign="top">

Provides the number of controls inside the selected container to be split.

</td>
</tr>
</table>

Here's an example:

> ### Sample Code:  
> `GroupElement.designtime.js` 
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>     const fnGetControlsCount = function(oSelectedElement) {
>         if (oSelectedElement.getFields && oSelectedElement.getFields()) {
>             return oSelectedElement.getFields().length;
>         }
>         return 0;
>     };
> 
>     return {
>         actions: {
>             split: {
>                 changeType: "splitField",
>                 changeOnRelevantContainer: true,
>                 getControlsCount: function(oGroupElement) {
>                     return fnGetControlsCount(oGroupElement);
>                 }
>             }
>         }
>     };
> });
> ```

