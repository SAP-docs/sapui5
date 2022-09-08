<!-- loio5b0775397e394b1fb973fa207554003e -->

# Field Groups

Group of controls that belong together semantically. This group can be used, for example, for validating the data consistency for the field group.

Field groups are built by means of a common `fieldGroupIds` array for a group that can be set for each control. When the user changes the focus to a control with a different `fieldGroupIds` array, the `validateFieldGroup` event is raised and bubbled in the control hierarchy, that is, the event is propagated to the parent control until it reaches the top most control, or the event is handled and `oEvent.bCancelBubble` is set to `true`. The application developer can now validate the fields within the group. The `validateFieldGroup` event is also raised if the user presses Enter in a field without any modifier keys.



## Validation of Credit Card Information

Depending on the credit card vendor, different validation rules can be implemented for a field group, for example:

-   Vendor 1: First digit must be a 3 and second digit must be a 4 or 7, the valid length is 15 digits

-   Vendor 2: First digit must be a 5 and second digit must be in the range from 1 to 5 inclusive, the valid length is 16 digits


Plenty of other validation rules for vendors exist. In addition to this, the expiry date must not be in the past and, in case of Vendor 1, is only allowed to be 4 years in the future.



## Defining a Field Group ID

`fieldGroupIds` is a property of all `sap.ui.core.Control` instances and can be set there as an array of strings. The developer has to make sure that the ID is unique. Field group IDs can be added as a comma-separated string as it is usually done in an xml view declaration.

```
var myInput1 = new sap.m.Input({fieldGroupIds:["MyGroup","MyGroup2"]}),

myInput2 = new sap.m.Input({fieldGroupIds:["MyGroup","MyGroup2"]);
```

```
//XMLView declaration of multiple groups
<input fieldGroupIds="MyGroup,MyGroup2" /> 
```



## Validating Field Groups

The `validateFieldGroup` event is raised on the control that lost the focus and at least one field group was left. The event bubbles up the control hierarchy. In the example below, the surrounding `VerticalLayout` is handling the event for its fields.

```
var myVerticalLayout = new sap.ui.layout.VerticalLayout({content:[myInput1, myInput2], validateFieldGroup: function(oEvent) {
    var aFieldGroup = oEvent.getParameters().fieldGroupIds;
    if (aFieldGroup.indexOf("MyGroup") > -1) {
        //do validation
        oEvent.bCancelBubble = true; //stop bubbling to the parent control
    }
}});
```



## Accessing Controls in a Field Group

In some scenarios, it is required to find all controls that belong to a specific field group, or to all controls with a `fieldGroupId`. For this, the control implements the public `getControlsByFieldGroupId` method that gets a list of child controls in the application code.

```
var aAllControlsWithFieldGroupId = myVerticalLayout.getControlsByFieldGroupId();              //all where fieldGroupId is not empty 
var aMyGroupControls             = myVerticalLayout.getControlsByFieldGroupId("myGroup");     //exact matches to myGroup
```

Similar to the above you can use the `byFieldGroupId` method of `sap.ui.Core` to find/retrieve all controls with certain field group IDs.

```
var aAllControlsWithFieldGroupId = sap.ui.getCore().byFieldGroupId();              //all where fieldGroupId is not empty 
var aMyGroupControls             = sap.ui.getCore().byFieldGroupId("MyGroup");     //exact matches to myGroup 

```



## Using the `fieldGroupId` With Composite Controls

Composite controls that derive from control base class automatically support setting a `FieldGroupId`. Nevertheless, the `FieldGroupId` is not propagated to inner controls of the composite control as they are unknown to the SAPUI5 framework. Therefore, a composite control needs to propagate the `FieldGroupId` on its own. For all internally aggregated controls, the `FieldGroupId` should be propagated as follows:

```
MyCompositeControl.prototype.setFieldGroupIds = function(vValue, bSuppressInvalidate) {
    this._myAggregatedInnerControl.setFieldGroupIds(vValue, bSuppressInvalidate);
    this.setProperty("fieldGroupIds",vValue, bSuppressInvalidate);
} 
```



## Note

For a control with a `fieldGroupId` that currently has the focus, the following applies:

-   If the control is destroyed before the focus is moved to another control, the `validateFieldGroup` event is not fired.

-   If the control changes its `fieldGroupIds`, the `validateFieldGroup` event is fired for the new `fieldGroupIds` and **not** for the old.


**Related Information**  


[Sample: `Field Groups`](https://ui5.sap.com/#/entity/sap.ui.core.Control/sample/sap.ui.core.sample.FieldGroup)

