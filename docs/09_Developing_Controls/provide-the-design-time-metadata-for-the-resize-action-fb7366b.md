<!-- loiofb7366baf86f41708f43ebddedb3e3d8 -->

# Provide the Design-Time Metadata for the *Resize* Action

Provide the design-time metadata and the meta functions needed when the *resize* action is performed.

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
<td valign="top" rowspan="8">

`"resize": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or computes the design-time metadata specific to the *resize* action for an element as an object with the following properties.

</td>
</tr>
<tr>
<td valign="top">

`changeType: <string>` \(mandatory if no handler is used\)

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

`isEnabled: <function> | <boolean>` \(optional\)

</td>
<td valign="top">

Default is `true`. The `isEnabled` value or function is used to decide whether the *rename* action is available in SAPUI5 flexibility. You get the selected SAPUI5 element as a function parameter.

If a selected UI element under some boundary conditions can't be renamed, `isEnabled` returns `false`.

</td>
</tr>
<tr>
<td valign="top">

`getSizeLimits: <function>` \(optional\)

</td>
<td valign="top">

Defines the minimum and maximum widths that the control is allowed to have. These values are used to restrict the position of the resize handle in key user adaptation. It doesn't move beyond the limits.

This function is called with the resized element as parameter and should return an object like this:

`{ minimumWidth: <minimum allowed width, integer in pixels>, maximumWidth: <maximum allowed width, integer in pixels> }`

</td>
</tr>
<tr>
<td valign="top">

`getHandleExtensionHeight: <function>` \(optional\)

</td>
<td valign="top">

During the resize operation, you sometimes want to extend the height of the handle to make it easier for the user to visualize the result.

For example: during a resize of a table column, it is a line that goes through all the lines of the table while the handle is being dragged, like in the table column resize personalization.

This method receives the resized element as a parameter and should return an integer value in pixels.

</td>
</tr>
<tr>
<td valign="top">

`getDoubleClickWidth: <function>` \(optional\)

</td>
<td valign="top">

Usually elements that can be resized offer a double-click functionality that defaults the size to an "optimal" value. If you implement this function, double-clicking the resize handle uses the value returned to define the new width for the control.

This function is called with the resized element and should return an integer value **in pixels**.

</td>
</tr>
<tr>
<td valign="top">

`handler: <function>` \(optional\)

</td>
<td valign="top">

This method handles everything concerning the changes for the resize of a control and returns a promise with an array of objects including change-specific data.

See the next paragraphs for examples and parameters.

</td>
</tr>
</table>

Here's an example without a handler:

> ### Sample Code:  
> `Column.designtime.js`
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>     return {
>         actions: { // mandatory
>            resize: {
>                 changeType: "resizeTableColumn", // mandatory if no handler is present
>                 getSizeLimits: function() { // optional
>                     return {
>                         minimumWidth: 100,
>                         maximumWidth: 400
>                     };
>                 },
>                 getHandleExtensionHeight: function(oElement) { // optional
>                     return oElement.getParent().$().height(); // In this case it is the height of the table
>                 },
>                 getDoubleClickWidth: function(oElement) { // optional
>                     return 150;
>                 }
>             }
>         }
>     };
> });
> ```



<a name="loiofb7366baf86f41708f43ebddedb3e3d8__section_tfy_mb5_hyb"/>

## Handler Function

We call the handler function with two parameters: `oElement` and `mPropertyBag`:

-   `oElement`: the resized element.

-   `mPropertyBag.newWidth`: integer with the new width retrieved from the plugin \(the position of the handle in the UI\) in pixels


Here's an example with a handler:

> ### Sample Code:  
> `<control>.designtime.js`
> 
> ```
> sap.ui.define([],
>     function() {
>     "use strict";
>     return {
>         actions: { // mandatory
>             ...
>             resize: function() {
>                 return {
>                     handler: function(oControl, mPropertyBag) {
>                          return new Promise(function(resolve) {
>                             // Handler code
>                             ...
> 
>                             // Resolve promise with data to create the corresponding changes
>                             resolve([{
>                                 selectorControl : oYourControl,
>                                 changeSpecificData : {
>                                     changeType : "yourChangeType",
>                                     content : "changeSpecificContent" // Can also be a deep object, your change handler has to handle it
>                                 }
>                             } ... ]); // It is possible to return multiple changes for the same resize action execution
>                         });
>                 }
>             };
>             ...
>         }
>     };
> });
> ```

