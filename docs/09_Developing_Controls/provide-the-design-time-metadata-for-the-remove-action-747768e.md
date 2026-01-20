<!-- loio747768ef03c14c0cb9c2cb89d1cfd2db -->

# Provide the Design-Time Metadata for the *Remove* Action

How to provide the design-time metadata for the *remove* action

To provide the design-time information needed for the *remove* action, use the JavaScript code file `<control>.designtime.js`, which is located next to the control implementation. If the file is missing, please create it. Make sure that the metadata of the control includes the `designTime` attribute, which links to the `<control\>.designtime.js` file.

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

`"remove": <object> |<function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *remove* action for an element as an object with the following properties.

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

Provides the additional information to be shown as tooltip in the context menu.

</td>
</tr>
<tr>
<td valign="top">

`isEnabled: <function> |<boolean>` \(optional\)

</td>
<td valign="top">

Default is `true`. The `isEnabled` value or function is used to decide whether the *remove* action is available in SAPUI5 flexibility. You get the selected SAPUI5 element as a function parameter.

</td>
</tr>
<tr>
<td valign="top">

`getConfirmationText: <function>` \(optional\)

</td>
<td valign="top">

You can provide the text for a confirmation dialog so that the key user has to confirm when removing the control. If it's not available or nothing is returned, then no dialog is shown.

Use `sap.ui.getCore().getLibraryResourceBundle("<library name>").getText("<text key>", ... )` to retrieve a translated text of your library.

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
</table>



<a name="loio747768ef03c14c0cb9c2cb89d1cfd2db__section_qj1_jfl_gyb"/>

## Example

> ### Sample Code:  
> GroupElement.designtime.js
> 
> ```
> sap.ui.define(["sap/ui/core/Lib"], function(Lib) {
>     "use strict";
> 
>     const fnHasMandatoryFields = function(oGroupElement) {
>         //...
>     };
> 
>     return {
>         actions: {
>             remove: {
>                 changeType: "hideControl",
>                 getConfirmationText: function(oGroupElement) {
>                     const oTextResources = Lib.getResourceBundleFor("sap.ui.comp");
>                     if (fnHasMandatoryFields(oGroupElement)) {
>                         const sGroupElement = oGroupElement.getLabelText() || oGroupElement.getId();
>                         return oTextResources.getText("GROUP_ELEMENT_DESIGN_TIME_REMOVE_MANDATORY_FIELD_MESSAGE", sGroupElement);
>                     }
>                 }
>             }
>         }
>     };
> 
> });
> ```

