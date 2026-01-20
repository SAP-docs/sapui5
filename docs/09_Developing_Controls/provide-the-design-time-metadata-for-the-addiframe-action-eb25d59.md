<!-- loioeb25d599143f48d4864c0b65e72373bc -->

# Provide the Design-Time Metadata for the *AddIFrame* Action

Provide the design-time metadata and the meta functions needed when the *addIFrame* action is performed.

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
<td valign="top" rowspan="14">

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
<td valign="top" rowspan="13">

`<aggregationName: <object>`

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

... other possible properties ...

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

For more information, see [Providing Design-Time Metadata](providing-design-time-metadata-5866a47.md).

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`childNames: <object> | <function>` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provide or compute a name for the controls inside the aggregation, which is understandable for the key user. This is needed for the *addIFrame* action to show the container title in the context menu \(*Embed Content to: <singular\>*\) . Currently only singular is required, but adding a value for the plural makes the implementation future-proof.

Name your control based on the general UI concept and follow the [SAP Design System guidelines](https://experience.sap.com/fiori-design/). Example: Key users don't care about the difference between a smart, mobile, or responsive version of a form - they just call it "form".

</td>
</tr>
<tr>
<td valign="top">

`"singular": <string> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

`i18n` key from library resource bundle or function returning the translated text if library resource bundles aren't used.

</td>
</tr>
<tr>
<td valign="top">

`"plural": <string> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

`i18n` key from library resource bundle or function returning the translated text if library resource bundles aren't used.

</td>
</tr>
<tr>
<td valign="top" rowspan="8">

`actions: <object>` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Describes the actions that can be applied to the element:

</td>
</tr>
<tr>
<td valign="top" rowspan="7">

`"addIFrame": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *createContainer* action for an element as an object with the following properties.

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

`text: <string>` \(mandatory\)

</td>
<td valign="top">

Provides the text to be displayed in the context menu. It will be used after `Embed Content: <text>`. As there's no fallback, this has to be implemented.

</td>
</tr>
<tr>
<td valign="top">

`additionalInfo: <string>` \(optional\)

</td>
<td valign="top">

Provides additional information to be displayed as a tooltip in the context menu.

</td>
</tr>
<tr>
<td valign="top">

`isEnabled: <function> | <boolean>` \(optional\)

</td>
<td valign="top">

Default is `true`. The `isEnabled` value or function is used to decide whether the *createContainer* action is available in SAPUI5 flexibility. You get the selected SAPUI5 element as a function parameter.

If under some boundary conditions you can't create containers inside, it returns `false`.

</td>
</tr>
<tr>
<td valign="top">

`getCreatedContainerId: <function>` \(optional\)

</td>
<td valign="top">

Defaults to the ID of the newly created container.

If the `newControlId` isn't the real container that was created \(but maybe only a wrapper around the control that really represents the newly created container\), you must return these IDs.

</td>
</tr>
<tr>
<td valign="top">

`validators: <object> | <string> []` \(optional\)

</td>
<td valign="top">

Only relevant if the embedded content is added as a container and can have a title. Should be the same validator configuration as for the rename action of the respective parent control. For configuration options, see [Provide the Design-Time Metadata for the Rename Action](provide-the-design-time-metadata-for-the-rename-action-fc82e70.md).

</td>
</tr>
</table>

Here's an example:

> ### Sample Code:  
> `<control>.designtime.js` 
> 
> ```
> sap.ui.define(["sap/ui/core/Lib"], function(Lib) {
>     "use strict";
>     return {
>         aggregations: {
>             headerContent: {
>                 childNames : {
>                     singular : function(){
>                         return Lib.getResourceBundleFor("sap.uxap").getText("HEADER_CONTROL_NAME");
>                     }
>                 },
>                 actions : {
>                     addIFrame: {
>                         changeType: "addIFrame"
>                     }
>                 }
> 
>             }
>         }
>     };
> });
> ```

