<!-- loio326a77d194fe4243849cc89b15221ec9 -->

# Provide the Design-Time Metadata for the *Settings* Action

Provide the design-time metadata and the meta functions needed when the *settings* action is performed.



<a name="loio326a77d194fe4243849cc89b15221ec9__section_mlz_vf4_hyb"/>

## Single Settings Action

The module returns an object literal with the following properties:


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
<td valign="top" rowspan="11">

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
<td valign="top" rowspan="10">

`"settings": <object> | <function>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Provides or calculates the design-time metadata specific to the *settings* action for an element as an object with the following properties.

</td>
</tr>
<tr>
<td valign="top">

`isEnabled: <function> | <boolean>` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

This method influences the enablement of settings in the context menu for a selected element. By default it's `true`. If a selected element under some boundary conditions doesn't have this context menu item, it returns `false`.

</td>
</tr>
<tr>
<td valign="top">

`name: <i18n key>|<function>` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

`i18n` key from library resource bundle or function returning translated text as string. This text is used in the context menu entry, otherwise it's called *Settings*.

</td>
</tr>
<tr>
<td valign="top">

`icon: <string>` \(optional\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

This property allows you to define an individual icon for the *Settings* action. The default icon is: `sap-icon://key-user-settings` 

</td>
</tr>
<tr>
<td valign="top">

`handler: <function>` \(mandatory\)

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

This method handles everything concerning the changes in the settings of a control and returns a promise with an object including change-specific data.

See the next sections for examples and parameters.

</td>
</tr>
<tr>
<td valign="top" rowspan="5">

`submenu: <object[]>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Array of submenu entries.

</td>
</tr>
<tr>
<td valign="top">

`name <string>`

</td>
<td valign="top">

Name to be shown on the UI.

</td>
</tr>
<tr>
<td valign="top">

`icon <string>` \(optional\)

</td>
<td valign="top">

Icon to be shown on the UI, default is blank.

</td>
</tr>
<tr>
<td valign="top">

`enabled <boolean>` \(optional\)

</td>
<td valign="top">

Controls if the button is enabled or not, default is `true`.

</td>
</tr>
<tr>
<td valign="top">

`key <string>` \(optional\)

</td>
<td valign="top">

This key will be available in the handler on the custom data of the `eventItem` object.

</td>
</tr>
</table>



<a name="loio326a77d194fe4243849cc89b15221ec9__section_htg_jh4_hyb"/>

## Multiple Settings Actions

Each action requires an identifier, a text to be displayed on the context menu and its own handler to execute. The order of the actions on the context menu is the same as the order in which they're described in the `designtime` file.


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
<td valign="top" rowspan="11">

`actions:<object>` \(mandatory\)

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

Describes the actions that can be applied to the element.

</td>
</tr>
<tr>
<td valign="top" rowspan="10">

`"settings": <object>|<function>`

</td>
<td valign="top">

`{`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

For multiple actions, return them in a map object. Entries are shown in this order in the context menu.

</td>
</tr>
<tr>
<td valign="top" rowspan="8">

 

</td>
<td valign="top">

`"<key>": <object>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

Describes the settings action called `<key>`

</td>
</tr>
<tr>
<td valign="top">

`{`

</td>
<td valign="top">

 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top" rowspan="4">

 

</td>
<td valign="top">

`name: <i18n key>|<function>` \(mandatory\)

</td>
<td valign="top">

The text for context menu entries is mandatory for multiple settings actions to distinguish the different entries.

</td>
</tr>
<tr>
<td valign="top">

`isEnabled: <function>` \(optional\)

</td>
<td valign="top">

This method influences the enablement of settings in the context menu for a selected element. By default it's `true`. If a selected element under some boundary conditions doesn't have this context menu item, it returns `false`.

</td>
</tr>
<tr>
<td valign="top">

`icon: <string>` \(optional\)

</td>
<td valign="top">

This property allows you to define an individual icon for the *Settings* action. The default icon is: `sap-icon://key-user-settings` 

</td>
</tr>
<tr>
<td valign="top">

`handler: <function>` \(mandatory\)

</td>
<td valign="top">

This method handles everything concerning the changes in the settings of a control and returns a promise with an object including change-specific data.

See the next sections for examples and parameters.

</td>
</tr>
<tr>
<td valign="top">

`},`

</td>
<td valign="top">

 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`<other action>`

</td>
<td valign="top">

\-\>

</td>
<td valign="top">

See previous rows. Other actions follow the same schema and have the same properties / functions.

</td>
</tr>
<tr>
<td valign="top">

`};`

</td>
<td valign="top">

 

</td>
<td valign="top">

 

</td>
<td valign="top">

 

</td>
</tr>
</table>



<a name="loio326a77d194fe4243849cc89b15221ec9__section_zsg_s34_hyb"/>

## Handler Function

We call the handler function with two parameters: `oElement` and `mPropertyBag`. Use the following methods:

-   `mPropertyBag.getUnsavedChanges`: Function that returns an array of unsaved changes.

-   `mPropertyBag.styleClass`: Contains the name of the CSS class that every dialog/popup from SAPUI5 flexibility \(including the settings-dialog\) needs to have. Add this style class to the control if you build a dialog or popup.


Here's an example with one action:

> ### Sample Code:  
> `<control>.designtime.js`
> 
> ```
> sap.ui.define(['<your namespace>/YourControl'], function(YourControl) {
>     "use strict";
>     return {
>         actions: {
>             settings: {
>                 handler: function(oYourControl, mPropertyBag) {
>                     return new Promise(function(resolve) {
>                         // For example, open a dialog to handle the settings
>                         YourControl.createDialog().addClass(mPropertyBag.styleClass) // Please attach the RTA style so that users will recognize your dialog belongs to key user adaptation and not the app
>                         // Handle dialog close and resolve promise with data to create the corresponding changes:
>                         resolve([{
>                             selectorControl: oYourControl,
>                             changeSpecificData: {
>                                 changeType: "yourChangeType",
>                                 content: "changeSpecificContent" // Can also be a deep object, your change handler has to handle it
>                             }
>                         },{
>                             selectorControl: { // If control doesn't exist at the moment you can return the following data
>                                 id: "idOfNotYetExistingControl",
>                                 controlType: "sap.ui.XXX.YourControlType", // Needed to retrieve the change handler
>                                 appComponent: oAppComponent  // You can use sap.ui.fl.Utils.getAppComponentForControl(oYourControl) for it
>                             },
>                             changeSpecificData: {
>                                 changeType: "yourChangeType",
>                                 content: "changeSpecificContent" // Can also be a deep object, your change handler has to handle it
>                             }
>                         }]);
>                     });
>                 }
>             };
>         }
>     }
> });
> ```

Here's an example with more actions:

> ### Sample Code:  
> `<control>.designtime.js`
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>     return {
>         actions: {
>             settings: {
>                 action1: { // This action will be always enabled and its context menu text (name) will be retrieved from i18n
>                     name: "ACTION1_i18n_KEY",
>                     handler: function(oControl, mPropertyBag) {
>                         return ActionExecuter.execute(oControl, mPropertyBag);
>                     }
>                 },
>                 action2: { // This action's context menu text (name) is retrieved by a function, and the enabled check is also a function
>                     name: function() {
>                         return "Execute Action 2"; // This is just an example! Remember to use translatable strings.
>                     },
>                     isEnabled: function(oControl) {
>                         return checkEnabled(oControl);
>                     },
>                     handler: function(oControl, mPropertyBag) {
>                         // You can, for example, build the changes inline; but it is recommended to implement a handler to keep the designtime.js file clean
>                         return new Promise(function(resolve) {
>                             resolve([{
>                                 selectorControl: oControl,
>                                 changeSpecificData: {
>                                     changeType: "myChangeType",
>                                     content: "changeSpecificContent"
>                                 }
>                             }]);
>                         });
>                     }
>                 }
>             }
>         }
>     };
> });
> ```



<a name="loio326a77d194fe4243849cc89b15221ec9__section_kxw_nys_hyb"/>

## Creating App Descriptor Changes Using Settings

In addition to the usual SAPUI5 flexibility changes, the *Settings* action can also create changes that modify the app descriptor.

App descriptor changes are used, for example, on an Overview Page \(OVP\), where adding a card modifies the app descriptor.

In most cases, the change must also be visible when the user creates it. For example, when users click on *Add Card*, they want to see the new card on the screen. For this reason, in the usual case, a flexibility change is created in parallel with the app descriptor change, as shown in this diagram:

![The Handler calls the Settuings Plugin with an array of mChangeContent, which contains the change types and all data required for each change. The Settings Plugin then creates a Settings Command and an AppDescritor Command. The Settings Command creates and executes the Flex Change on the UI and applies the change. The actual action execution requires a change handler. The AppDescriptor Command creates and executes an AppDescriptor Change and persists it. The app descriptor change is saved in the layered repository (LREP) to include the new card when the app is loaded.](images/Creating_App_Descriptor_Changes_Using_Settings_b1c32cb.png)

If the flexibility change is only relevant during the execution of SAPUI5 flexibility \(because the "real" change is saved on the app descriptor\), it needs to have parameter `runtimeOnly: true`. If you set this parameter, the change is not persisted.

On the other hand, a change that has the app descriptor as the target needs the `appDescriptorChangeType` parameter instead of `changeType`. Here's an example:

> ### Sample Code:  
> <control\>.designtime.js
> 
> ```
> actions: {
>     settings: {
>         handler: function(oSelectedElement, mPropertyBag) {
>             return openAddCardDialog(oSelectedElement, mPropertyBag.styleClass).then(function(mChangeContent)) {
>                 return [
>                     {
>                         // appDescriptorChange does not need a selector control
>                         appComponent: oSelectedElement.getAppComponent(), // example
>                         changeSpecificData: {
>                             appDescriptorChangeType: "appdescr_ovp_addNewCard",
>                             content: {
>                                 parameters: mChangeContent.parameters,
>                                 texts: mChangeContent.texts
>                             }
>                         }
>                     },
>                     {
>                         selectorControl: oSelectedElement,
>                         changeSpecificData: {
>                             runtimeOnly: true, // UI change would be used only at runtime to modify the app; it will not be persisted
>                             changeType: "addCard",
>                             content: toUIChange(mChangeContent) // Allows for different parameters in runtime or descriptor change
>                         }
>                     }
>                 ])
>             });
>         }
>     }
> }
> ```

This example is for a single action created with *Settings*, but there are no restrictions that prevent implementing multiple actions in *Settings*, which can create app descriptor changes as well.

