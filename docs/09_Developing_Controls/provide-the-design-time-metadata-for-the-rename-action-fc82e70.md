<!-- loiofc82e70e4958410597a88ac65908c911 -->

# Provide the Design-Time Metadata for the *Rename* Action

Provide the design-time metadata and the meta functions needed when the *rename* action is performed.

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

Description

</th>
</tr>
<tr>
<td valign="top" rowspan="9">

`actions: <object>`\(mandatory\)

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
<td valign="top" rowspan="8">

`"rename": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *rename* action for an element as an object with the following properties.

</td>
</tr>
<tr>
<td valign="top">

`changeType: <string>`\(mandatory\)

</td>
<td valign="top">

Provides the value of `changeType` from the previous step.

</td>
</tr>
<tr>
<td valign="top">

`domRef: <function> |<string>` \(mandatory\)

</td>
<td valign="top">

Defines the DOM reference of the part of the DOM tree of your control that can be renamed.

The DOM reference is used to calculate the dimension of the part of your control that is indicated as renamable.

</td>
</tr>
<tr>
<td valign="top">

`getTextMutators: <function>` \(optional\)

</td>
<td valign="top">

Used to provide a customized setter and getter for manipulating the text in the DOM tree during the *rename* action.

The returned function is called with the control reference and returns a map with a `getText` and a `setText` function \(the latter being called with the new text\). If not implemented, text values are changed via `jQuery.text` using the `domRef` HTML element.

The functions must not impact the control property of the text, only the visual representation.

</td>
</tr>
<tr>
<td valign="top">

`isEnabled: <function> | <boolean>` \(optional\)

</td>
<td valign="top">

Default is `true`. The `isEnabled` value or function is used to decide whether the *rename* action is available in SAPUI5 flexibility. You get the selected SAPUI5 element as a function parameter.

If a selected UI element can't be renamed under some boundary conditions, `isEnabled` returns `false`.

</td>
</tr>
<tr>
<td valign="top">

`validators: <object> | <string> []` \(optional\)

</td>
<td valign="top">

The validators in the array will be called after the key user tries to rename something. If the input is invalid, a message box opens, telling why the rename didn't work. If multiple validators fail, only the first message is displayed.

If you use a custom validator, it has to be an object with the two following properties implemented. Alternatively, the value can be of type `string` if the predefined validators want to be used.

Current validators: `noEmptyText`.

</td>
</tr>
<tr>
<td valign="top">

`validators.validatorFunction: <function>`

</td>
<td valign="top">

Function that is called with the new text.

</td>
</tr>
<tr>
<td valign="top">

`validators.errorMessage: <string>`

</td>
<td valign="top">

Text that is displayed in the message box after an invalid input.

</td>
</tr>
</table>

Here's an example:

> ### Sample Code:  
> Button.designtime.js
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>     return {
>         actions: { // mandatory
>             rename: { // mandatory
>                 changeType: "rename", // mandatory
>                 domRef: function(oControl) { // mandatory
>                     return oControl.$().find(".sapMBtnContent")[0];
>                 },
>                 getTextMutators: function(oControl) { // optional
>                     return {
>                         getText: function() {
>                             return oControl.getDomRef().textContent;
>                         },
>                         setText: function(sNewText) {
>                             oControl.getDomRef().textContent = sNewText;
>                         }
>                     };
>                 }
>             }
>         }
>     };
> });
> ```

