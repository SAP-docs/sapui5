<!-- loio4864403f08c64ca08a2b0ee1fa9cb5e2 -->

# Smart Field

The `sap.ui.comp.smartfield.SmartField` control offers a wrapper for other controls using OData metadata to determine which control has to be instantiated and makes it possible to add input-enabled fields to an application.

The frequently asked questions section aims at answering some basic questions that you might have when using this control.For more information, see the FAQ in the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23faq).

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField). 

For more information about annotations for this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField/annotations/Summary).



## Overview

The `SmartField` control provides an efficient way to add input-enabled fields to an SAP Fiori application. The control automatically adjusts to the metadata of the underlying OData service, for example, by doing the following:

-   Hosting controls for editing and displaying values of OData properties

-   Providing value help automatically

-   Performing input checks


In addition, the `SmartField` control implements field control and supports message handling.

The `SmartField` control can be used in the following ways:

-   As a standalone control, for example, in XML views

-   In combination with a `SmartForm` control

-   In combination with a `SmartTable` control

    Used in particular as cell editor in editing scenarios.


The `SmartField` control selects a control for displaying and a control for editing the OData property to which they are bound. The main criterion for selecting nested controls is the EDM type of the OData property to which a `SmartField` control is bound.



## Details



### Binding

The OData property that a `SmartField` control manages is determined by the binding of the value property of the control. Properties of a complex type are not supported.

The `SmartField` control allows for binding of navigation properties.

The entity set to which the bindings are related is either specified in the `entitySet` attribute of the control or derived from the binding context at runtime.

When binding the `SmartField` control against the OData service property of type `Edm.Boolean`, and if the `SmartField` control is in read-only mode, static texts are used for visual representation. In addition, a configuration parameter in the `SmartField` control can define the properties of the static texts of the `CheckBox`, such as `Yes/No` or `True/False`. For the `SmartForm` control, the custom data can be used for this purpose.



### Configuration

The `configuration` aggregation of `SmartField` provides the option to overwrite the default behavior of the `SmartField` control.

Using the `controlType` property, you can select the appropriate control for your use case.

The following control types are available:

-   Check box

-   Date picker

-   Drop-down list \(combo box\)

-   Input

-   Select drop-down list \(`sap.m.Select`\)


It depends on the related data types and configurations **which** control types are rendered, for example:

-   If the relevant OData property is of type `Edm.String`, the `SmartField` control can be configured to render a combo box or a select drop-down list.

-   If the relevant OData property is of type `Edm.Boolean`, the `SmartField` control can be configured to render a combo box.

-   If the relevant OData property is of type `Edm.DateTime`, the `SmartField` control can be configured to render a date picker.


The table below shows which controls are used if you **don't** overwrite the control type.

<a name="loio4864403f08c64ca08a2b0ee1fa9cb5e2__table_knt_l2v_yx"/>Control Selection


<table>
<tr>
<th valign="top" colspan="2">

Editing Use Cases



</th>
<th valign="top" colspan="2">

Display Use Cases



</th>
</tr>
<tr>
<th valign="top">

EDM Type



</th>
<th valign="top">

Control



</th>
<th valign="top">

EDM Type



</th>
<th valign="top">

Control



</th>
</tr>
<tr>
<td valign="top">

 `Edm.Boolean` 



</td>
<td valign="top">

 `sap.m.CheckBox` 



</td>
<td valign="top">

 `Edm.Boolean` 



</td>
<td valign="top" rowspan="14">

`sap.m.Text`



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Int16` 



</td>
<td valign="top" rowspan="10">

 `sap.m.Input` 



</td>
<td valign="top">

 `Edm.Int16` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Int32` 



</td>
<td valign="top">

 `Edm.Int32` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Int64` 



</td>
<td valign="top">

 `Edm.Int64` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.SByte` 



</td>
<td valign="top">

 `Edm.SByte` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Byte` 



</td>
<td valign="top">

 `Edm.Byte` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Single` 



</td>
<td valign="top">

 `Edm.Single` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Float` 



</td>
<td valign="top">

 `Edm.Float` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Double` 



</td>
<td valign="top">

 `Edm.Double` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Decimal` 



</td>
<td valign="top">

 `Edm.Decimal` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.String` 



</td>
<td valign="top">

 `Edm.String` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.Time` 



</td>
<td valign="top" rowspan="3">

`sap.m.DateTimePicker`



</td>
<td valign="top">

 `Edm.Time` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.DateTime` 



</td>
<td valign="top">

 `Edm.DateTime` 



</td>
</tr>
<tr>
<td valign="top">

 `Edm.DateTimeOffset` 



</td>
<td valign="top">

 `Edm.DateTimeOffset` 



</td>
</tr>
</table>

Using the `displayBehaviour` property, you can define how an ID and a description or Boolean values are represented in read-only mode.

You have the following options:

-   `sap.ui.comp.smartfield.DisplayBehaviour.descriptionAndId`: Description and ID are displayed for available values.

-   `sap.ui.comp.smartfield.DisplayBehaviour.descriptionOnly`: Only the description of the available values is displayed.

-   `sap.ui.comp.smartfield.DisplayBehaviour.idAndDescription`: ID and description are displayed for available values.

-   `sap.ui.comp.smartfield.DisplayBehaviour.idOnly`: Shows the ID only.

-   `sap.ui.comp.smartfield.DisplayBehaviour.OnOff`: Shows Boolean value as `On/Off`

-   `sap.ui.comp.smartfield.DisplayBehaviour.TrueFalse`: Shows Boolean value as `True/False`

-   `sap.ui.comp.smartfield.DisplayBehaviour.YesNo`: Shows Boolean value as `Yes/No`


Using the `preventInitialDataFetchInValueHelpDialog` property, you can prevent the query from being fired immediately when the value help dialog is opened.



### Field Control

The field control handles the visual representation of `SmartField` controls, such as:

-   Whether input is mandatory

-   Whether the controls are read-only

-   Whether the controls are hidden as defined by the SAP Fiori user interface programming model

    The following attributes are available to implement field control:

    -   `Enabled`

        Toggles from display to edit mode.

    -   `Visible`

        Hides the `SmartField` control.

    -   `Mandatory`

        Determines whether input is required.



Consumers of the `SmartField` control can further adapt the runtime behavior by binding these attributes.

The behavior can only be made more restrictive on client side, for example, if an OData property is mandatory, this cannot be overwritten on `SmartField` control level.

