<!-- loio51f589b65e9642c4949639fdb995257a -->

# Provide the Design-Time Metadata for the *Combine* Action

Provide the design-time metadata for the *combine* action.

To provide the design-time information needed for the *combine* action, use the `<control>.designtime.js` file, which is located next to the control implementation in the Git directory structure. Create the file if it's missing. Ensure that the `designTime` attribute in the metadata of the control is set. For more information, see [Enable a Control for Design-Time Usage](enable-a-control-for-design-time-usage-6888c17.md).

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
<td valign="top" rowspan="5">

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
<td valign="top" rowspan="4">

`"combine": <object>|<function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *combine* action for an element as an object with the following properties.

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

`isEnabled: <function>|<boolean>` \(optional\)

</td>
<td valign="top">

Default is `true`. The `isEnabled` value or function is used to decide whether the *combine* action is available in SAPUI5 flexibility. You get the selected SAPUI5 element as a function parameter.

</td>
</tr>
<tr>
<td valign="top">

`changeOnRelevantContainer: <boolean>` \(mandatory\)

</td>
<td valign="top">

Must be `true`. This property is needed for setting the selector to the relevant container.

</td>
</tr>
</table>

Here's an example:

> ### Sample Code:  
> Example of `sap.m.Button` design-time file
> 
> ```
> sap.ui.define(function () {
>    "use strict";
>    return {
>       actions: {
>          combine: {
>             changeType: "combineButtons", // Has to be equal to the registered name in <Control>.flexibility.js
>             changeOnRelevantContainer: true, // Has to be always `true` for combine action
>             isEnabled: true
>          }
>       }
>    };
> });
> ```

