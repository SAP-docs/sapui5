<!-- loio2b4fdb2547da485fa63461c335b68248 -->

# Provide the Design-Time Metadata for the *Move* Action

Provide the design-time metadata and the meta functions needed when the *move* action is performed.

The name of the design-time metadata file is `<control>.designtime.js`. The module returns an object literal with the following properties:


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

Property

\(Level 4\)

</th>
<th valign="top">

Property

\(Level 5\)

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top" rowspan="7">

`aggregations: <object>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Describes the aggregations of the element.

</td>
</tr>
<tr>
<td valign="top" rowspan="6">

`<aggregationName> : <object>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Describes the aggregation called `<aggregationName>`.

</td>
</tr>
<tr>
<td valign="top">

`domRef: <string | function>` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Describes the part of your DOM that contains the elements of the aggregation.

For more information, see [Aggregation domRef Property](aggregation-domref-property-5167730.md).

</td>
</tr>
<tr>
<td valign="top">

... other possible properties ...

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

For more information, see [Aggregation domRef Property](aggregation-domref-property-5167730.md).

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`actions: <object>`

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
<td valign="top" rowspan="2">

`move: <object | function | string>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the change type.

</td>
</tr>
<tr>
<td valign="top">

`changeType: <string>`

</td>
<td valign="top">

Change type for the *move* action.

</td>
</tr>
</table>

Here's an example:

> ### Sample Code:  
> VerticalLayout.designtime.js
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>     return {
>         aggregations: {
>             content: {
>                 domRef: ":sap-domref",
>                 actions: {
>                     move: "moveControls"
>                 }
>             }
>         }
>     };
> });
> ```

