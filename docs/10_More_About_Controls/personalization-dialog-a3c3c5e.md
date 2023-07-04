<!-- loioa3c3c5eb54bc4cc38e6cfbd8e90c6a01 -->

# Personalization Dialog

The `sap.m.p13n.Popup` control in the `sap.m.p13n` namespace provides a dialog or popover for personalizing content, for example, of a table, such as selecting columns and adapting their order.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.m.p13n) and the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Popup/sample/sap.m.sample.p13n.Popup).



## Overview

The `sap.m.p13n` namespace offers you personalization content and allows the consuming application to define various settings for controls, as shown in the example below for tables using panels. Different panels with reusable content for the various types of personalization are available for freestyle use in the application.

The panels represent the settings on the user interface. They are aggregated to `sap.m.p13n.Popup`. This control can be used as a container for these panels.



## Details

The following panels are available in the `sap.m.p13n.Popup` control:

-   `sap.m.p13n.SelectionPanel`

    Defines a number of custom properties that allow you to select and deselect fields as columns in your table, for example, and to change their order. You can also search for and toggle between selected and deselected fields.

-   `sap.m.p13n.SortPanel`

    Defines a number of properties that allow you to sort your items based on various criteria, for example, in ascending or descending order.

-   `sap.m.p13n.GroupPanel`

    Defines a number of properties that allow you to group your data.


The following buttons are available in the dialog:

-   *OK*

    Closes the personalization dialog.

-   *Cancel*

    Closes the personalization dialog.

    All changes made by the end user in the dialog that is currently open are rejected.

-   *Reset*

    Personalization dialog remains open.

    All changes made by the end user are set back to the initial state.

    > ### Note:  
    > The control only provides the visual representation of the table settings on the user interface. The consuming application must ensure the settings are actually changed in the table.


**Related Information**  


[Enablement of Personalization \(With Variant Management\)](enablement-of-personalization-with-variant-management-f280251.md "The simple concept of personalization allows the user to personalize a control and to persist these settings using a VariantManagement control.")

