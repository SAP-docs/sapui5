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
<td valign="top" rowspan="12">

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
<td valign="top" rowspan="11">

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
<td valign="top" rowspan="10">

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

`changeType: <string>` \(mandatory\)

</td>
<td valign="top">

Provides the value of `changeType`from the previous step.

</td>
</tr>
<tr>
<td valign="top">

`title: <function> | <string>` \(mandatory\)

</td>
<td valign="top">

The title that should be shown in the context menu entry.

</td>
</tr>
<tr>
<td valign="top">

`type: <string>` \(mandatory\)

</td>
<td valign="top">

The type of annotation. The UI is adjusted according to the type. Supported types can be taken from here.

`sap/ui/rta/plugin/annotations/AnnotationTypes`

</td>
</tr>
<tr>
<td valign="top">

`description: <string>` \(optional\)

</td>
<td valign="top">

Text that is shown in the dialog above the search field.

</td>
</tr>
<tr>
<td valign="top">

`icon: <string>` \(optional\)

</td>
<td valign="top">

Icon for the context menu entry. The default value for the StringType is "sap-icon://edit", for the rest it's "sap-icon://request"

</td>
</tr>
<tr>
<td valign="top">

`annotation: <string>` \(optional\)

</td>
<td valign="top">

Name of the annotation. This value will be passed to the delegate as property.

</td>
</tr>
<tr>
<td valign="top">

`singleRename: <boolean>` \(optional\)

</td>
<td valign="top">

Indicates the scenario of changing a label annotation for a specific control. This will bring up a reduced dialog, where only this single annotation can be changed.

</td>
</tr>
<tr>
<td valign="top">

`controlBasedRenameChangeType: <string>` \(optional\)

</td>
<td valign="top">

Must be provided together with the "singleRename" property. All changes of that change type for the given control will be deleted, so that the new annotation based label change will not be overwritten by those control-specific rename changes after a reload.

</td>
</tr>
<tr>
<td valign="top">

`delegate: <object>` \(mandatory\)

</td>
<td valign="top">

The delegate is responsible to fetch the available properties, the service url, the preselected properties, and the possible values. For this the function getAnnotationsChangeInfo needs to be implemented. The return value is defined here: For more information, see the [API Reference: `Annotationchangeinfo`](https://ui5.sap.com/#/api/sap.ui.rta.plugin.annotations.AnnotationChangeInfo). 

</td>
</tr>
</table>

Here is an example:

> ### Sample Code:  
> `GroupElement.designer.js`
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
>                         propertyName: "MyTechnicalName",
>                         annotationPath: "path/to/test/label",
>                         currentValue: TextOnly,
>                         label: "My Test Label",
>                         tooltip: "MyTestTooltip"
>                     },
>                     {
>                         propertyName: "MyOtherTechnicalName",
>                         annotationPath: "path/to/second/test/label",
>                         currentValue: IDFirst,
>                         label: "My Other Test Label",
>                         tooltip: "My Other Test Tooltip"
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

