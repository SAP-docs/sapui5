<!-- loio75db2d1368f145ecae9a058727cfba59 -->

# Provide the Design-Time Metadata for the *Reveal* Action

Provide the design-time metadata and the meta functions needed when the *reveal* action is performed

To provide the design-time information needed for the *reveal* action, use the JavaScript code file `<control>.designtime.js`, which is located next to the control implementation. If the file is missing, please create it. Make sure that the `designTime` attribute in the metadata of the control includes the `designTime` attribute, which links to the `<control\>.designtime.js` file.

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

`"reveal": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *reveal* action for an element as an object with the following properties.

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

`getLabel: <function>` \(optional\)

</td>
<td valign="top">

Allows you to return the label texts of the control. The default implementation tries `getText()`, and then `getLabelText()`. If it's not available, it tries `getLabel().getText()`, then `getTitle()`, and then `getId()`.

```
function(oControl) {
    return oControl.getLabelTextInSpecialControlProperty()
}
```



</td>
</tr>
<tr>
<td valign="top">

`changeOnRelevantContainer: <boolean>` \(optional\)

</td>
<td valign="top">

Needs to be set to `true` if the change handler for the action is implemented on the relevant container.

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`name:<object> | <function>` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Specify or calculate a meaningful name for the control, which is understandable to key users. This is needed for the *reveal* action to show the names in the context menu: *Add <name in singular\>* and *Available <name in plural\>*.

Name your control based on the general UI concept and follow the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design/). Example: Key users don't care about the difference between a smart, mobile, or responsive version of a form - they just call it "form".

</td>
</tr>
<tr>
<td valign="top">

`singular: <string> | function` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

`i18n` key from library resource bundle or function returning the translated text \(if library resource bundles aren't used\).

</td>
</tr>
<tr>
<td valign="top">

`plural: <string>| function` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

`i18n` key from library resource bundle or function returning the translated text \(if library resource bundles aren't used\).

</td>
</tr>
<tr>
<td valign="top">

`isVisible: <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Needed for elements that aren't derived from `sap.ui.core.Control`. The function returns the visibility of the element.

As this function can be called before the DOM is ready, don't use functions such as `jQuery.is(":visible")`. Use an internal parameter instead.

</td>
</tr>
</table>



<a name="loio75db2d1368f145ecae9a058727cfba59__section_thx_1cs_gyb"/>

## Example

> ### Sample Code:  
> RadioButton.designtime.js
> 
> ```
> sap.ui.define([], function () {
>     "use strict";
>     return {
>         actions: {
>             reveal: {
>                 changeType: "unhideControl"
>             }
>         },
>         name: {
>             singular: "RADIOBUTTON_NAME",
>             plural: "RADIOBUTTON_NAME_PLURAL"
>         }
>     };
> });
> ```

