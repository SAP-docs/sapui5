<!-- loiodcc61a1050b844778277cf825d5058ad -->

# Provide the Design-Time Metadata for the Annotation Action

Provide the design-time metadata for the *annotation* action.

To provide the design-time information needed for the *annotation* action, use the `<control>.designtime.js` file, which is located next to the control implementation in the Git directory structure. Create the file if it's missing. Ensure that the `designTime` attribute in the metadata of the control is set, which links to `<control>.designtime.js` file.

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

Property

\(Level 4\)

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top" rowspan="6">

`actions: <object>` \(mandatory\)

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

Describes the actions that can be applied to the element.

</td>
</tr>
<tr>
<td valign="top" rowspan="5">

`"annotation": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *annotation* action for an element as an object with the following properties.

</td>
</tr>
<tr>
<td valign="top" rowspan="4">

`<key> | <object>` 

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Key to differentiate multiple annotation actions. This key is currently not evaluated.

</td>
</tr>
<tr>
<td valign="top">

`changeType: <string>`\(mandatory\)

</td>
<td valign="top">

Provides the value of `changeType`from the previous step.

</td>
</tr>
<tr>
<td valign="top">

`title: <funtion> | <string>`\(mandatory\)

</td>
<td valign="top">

The title that should be shown in the context menu entry.

</td>
</tr>
<tr>
<td valign="top">

`type: string`\(mandatory\)

</td>
<td valign="top">

The type of annotation. The UI is adjusted according to the type. Supported types can be taken from here.

`sap/ui/rta/plugin/annotations/AnnotationTypes`

</td>
</tr>
</table>

Here is an example:

> ### Sample Code:  
> GroupElement.designtime.js
> 
> ```
> sap.ui.define(["sap/ui/rta/plugin/annotations/AnnotationTypes"], function(AnnotationTypes) {
>     "use strict";
> 
>     const oTestDelegate = {
>         getAnnotationsChangeInfo: () => {
>             return {
>                 serviceUrl: "testServiceUrl",
>                 properties: [
>                     {
>                         propertyName: "My Test Label",
>                         annotationPath: "path/to/test/label",
>                         currentValue: oTextArrangementTypes.TextOnly
>                     },
>                     {
>                         propertyName: "My Other Test Label",
>                         annotationPath: "path/to/second/test/label",
>                         currentValue: oTextArrangementTypes.IDFirst
>                     }
>                 ],
>                 possibleValues: [
>                     {
>                         key: "TextOnly",
>                         text: "Text Only"
>                     },
>                     {
>                         key: "TextFirst",
>                         text: "Text First"
>                     }
>                 ]
>             };
>         }
>     };
> 
>     return {
>         actions: {
>             annotation: {
>                 annotation1: {
>                     changeType: "textArrangement_Test",
>                     title: () => "Change Text Arrangement",
>                     type: AnnotationTypes.ValueListType,
>                     delegate: oTestDelegate
>                 },
>                 annotation2: { ... }
>             }
>         }
>     };
> 
> });
> ```

