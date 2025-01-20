<!-- loio33ef22e43c964f1c8f5acd9c6f6f99a2 -->

# Registering a Change Handler for a Specific Control Instance

Here's how to enable a change handler for certain instances.

There are some cases where you'd like to register a change handler to a specific control instance or a group of control instances without modifying the change handling in other instances of these controls. For example, you want a certain button in your application to implement a different *rename* action than the rest of the buttons in the application. Other use cases are virtual controls, for example, object page header facets, and controls that were created only for your application \(without a library\). It's easy to define an instance-specific change handler in your application view XML:

> ### Sample Code:  
> InstanceSpecificControlViewExample.xml
> 
> ```
> ...
> <smartForm:Group label="My Group" id="myGroup">
>     <smartForm:GroupElement label="With specific flexibility definition" id="myGroupElement" sap.ui.fl:flexibility="sap/ui/rta/test/GroupElementTest.flexibility">
>         <Input value="My label can only be renamed to capital letters" id="inputSpecificFlexibility"/>
>     </smartForm:GroupElement>
> </smartForm:Group>
> ...
> ```

> ### Note:  
> `sap.ui.fl` must be defined as a namespace in your XML file.
> 
> Example: `xmlns:sap.ui.fl="sap.ui.fl"`

Alternatively, you can also define an instance-specific change handler using JavaScript:

> ### Sample Code:  
> SetInstanceSpecificChangeHandlerInJS.js
> 
> ```
> var mCustomData = {
>     "key": "sap-ui-custom-settings",
>     "value": {
>         "sap.ui.fl": {
>             "flexibility": "sap/ui/rta/test/GroupElementTest.flexibility"
>         }
>     }
> };
> 
> var oGroupElement = new sap.ui.comp.smartform.GroupElement("myGroupElement", {'customData': mCustomData});
> ```

`"flexibility"` is a string with the path pointing to the flexibility file, for example `sap/m/flexibility/CustomPanel`. Any change handlers defined on this file take priority over the other existing change handlers for that control. As a result, the change handlers that you defined specifically for the desired change types are called to execute the changes.



<a name="loio33ef22e43c964f1c8f5acd9c6f6f99a2__section_nbh_rb2_2yb"/>

## Example

The following flexibility file replaces the change handler for the change type `renameField` on the control `myGroupElement` as defined in the previous examples. The redefined change handler converts the new text to uppercase before applying the change - but only on the `GroupElement` instances that were enriched with the `sap.ui.fl:flexibility` parameter from the previous examples.

> ### Sample Code:  
> GroupElementTest.flexibility.js
> 
> ```
> sap.ui.define([
>     "/sap/ui/comp/smartform/flexibility/changes/RenameField"
> ], function(RenameField) {
>     "use strict";
> 
>     return {
>         // New change handler only for "renameField" - the other available actions on this control will use the "normal" change handlers defined for the control + change type
>         "renameField": {
>             "changeHandler": {
>                 applyChange: async function(oChange, oControl, mPropertyBag) {
>                     const sValue = oChange.getText(CHANGE_PROPERTY_NAME);
>                     if (typeof sValue === "string") {
>                         const vOldValue = await this.setLabelPropertyOnControl(oControl, sValue, mPropertyBag.modifier, PROPERTY_NAME);
>                         oChange.setRevertData(vOldValue);
>                     }
>                 },
>                 revertChange: async function(oChange, oControl, mPropertyBag) {
>                     const vOldValue = oChange.getRevertData();
>                     if (vOldValue === "$$Handled_Internally$$") {
>                         vOldValue = undefined;
>                     }
> 
>                     await this.setLabelPropertyOnControl(oControl, vOldValue, mPropertyBag.modifier, PROPERTY_NAME);
>                     oChange.resetRevertData();
>                     return true;
>                 },
>                 completeChangeContent: function(oChange, mSpecificChangeInfo, mPropertyBag){
>                     return RenameField.completeChangeContent(oChange, mSpecificChangeInfo, mPropertyBag);
>                 }
>             }
>         }
>     };
> });
> ```

