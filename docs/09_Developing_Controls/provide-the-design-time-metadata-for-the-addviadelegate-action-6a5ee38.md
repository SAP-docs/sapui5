<!-- loio6a5ee386912c49b5ae7ad2ffc7130871 -->

# Provide the Design-Time Metadata for the *AddViaDelegate* Action

Provide the design-time metadata and the meta functions needed when the *addViaDelegate* action is performed.

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

Property

\(Level 6\)

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top" rowspan="12">

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

\-\>

</td>
<td valign="top">

Describes the aggregations of the element.

</td>
</tr>
<tr>
<td valign="top" rowspan="11">

`<aggregationName>: <object>`

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

\-\>

</td>
<td valign="top">

For more information, see [Providing Design-Time Metadata](providing-design-time-metadata-5866a47.md).

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

`childNames: <object> | <function>` \(optional/recommended\)

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

Provide or compute name for the controls inside the aggregation, which is understandable for the key user. This is needed for the `addViaDelegate` action to show the names in the context menu \(*Add <singular\>*, *Available <plural\>*\).

Name your control based on the general UI concept and follow the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design/). Example: Key users don't care about the difference between a smart, mobile, or responsive version of a form - they just call it "form".

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

\-\>

</td>
<td valign="top">

`i18n` key from library resource bundle or function returning the translated text if library resource bundles aren't used.

</td>
</tr>
<tr>
<td valign="top" rowspan="6">

`actions: <object>`

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

`"add":<object>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides `add` actions for an element.

</td>
</tr>
<tr>
<td valign="top" rowspan="4">

`"delegate": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the `addViaDelegate` action for an element as an object with following properties.

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

`changeOnRelevantContainer: <boolean>` \(optional\)

</td>
<td valign="top">

Defines whether the action is being performed on the relevant container.

For example, for the `SimpleForm`, the groups are created in runtime, so the action needs to be performed on the `SimpleForm` and not on the Group. The parameter needs to be `true`. For the `SmartForm`, the action is performed on the Group, so this parameter is not needed.

</td>
</tr>
<tr>
<td valign="top">

`filter: <function>` \(optional\)

</td>
<td valign="top">

Additional filter function to explicitly exclude elements from the list.

The function is called for each OData property being evaluated and the arguments provided are the relevant container \(for example, Form control\) and an object containing:

-   `bindingPath: <path of the property on the entity>`

-   `entityType: <name of the entity>`

-   `hideFromReveal: <whether the property is already hidden - for example due to UI.hidden annotation>`

-   `label: <property label>`

-   `name: <property name>`

-   `tooltip: <tooltip text>`


The function must return `false` for each property that you want to filter out.

</td>
</tr>
</table>

Here's an example for `FormContainer` on the `formElements` aggregation:

> ### Sample Code:  
> Group.designtime.js
> 
> ```
> sap.ui.define([],
>     return {
>         //...
>         aggregations: {
>             formElements: {
>                 domRef: ":sap-domref",
>                 childNames: {
>                     singular: "FIELD_CONTROL_NAME",
>                     plural: "FIELD_CONTROL_NAME_PLURAL"
>                 },
>                 actions: {
>                     //..
>                     add: {
>                        delegate: function(oFormContainer) {
>                             if (fnIsLayoutSupported(oFormContainer)) {
>                                 return {
>                                     changeType: "addFormField",
>                                     changeOnRelevantContainer: true,
>                                     filter: function(oFormContainer, mProperty) {
>                                         return mProperty.bindingPath !== "ForbiddenProperty";
>                                     }
>                                 };
>                             }
>                         }
>                     }
>                 }
>             }
>         },
> });
> ```

