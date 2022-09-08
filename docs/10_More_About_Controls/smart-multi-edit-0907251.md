<!-- loio0907251507064f40b8f8a126aebd8740 -->

# Smart Multi Edit

`SmartMultiEdit` enables you to perform mass editing operations on objects that have the same structure.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartmultiedit) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartmultiedit.Container) in the Demo Kit.



<a name="loio0907251507064f40b8f8a126aebd8740__section_cqd_cfr_rcb"/>

## Overview

With `SmartMultiEdit`, you can edit multiple homogeneous objects simultaneously. It allows you to select a field value from a combo box for all objects being edited. `SmartMultiEdit` can also handle metadata for a specific OData property when you need to enable mass editing for multiple contexts.

`SmartMultiEdit` consists of two controls:

-   [`SmartMultiEdit.Field`](https://ui5.sap.com/#/api/sap.ui.comp.smartmultiedit.Field) – A field that allows you to select a new value and apply it to the selected objects that include this field in their structure.

-   [`SmartMultiEdit.Container`](https://ui5.sap.com/#/api/sap.ui.comp.smartmultiedit.Container) – A container that provides the layout and context bindings for the `SmartMultiEdit` fields it includes.


 ![Smart Multi Edit Fields in a Smart Form Dialog](../01_Whats-New/images/WhatsNew_154_SmartMultiEdit_d474f0c.jpg) 



<a name="loio0907251507064f40b8f8a126aebd8740__section_m3v_cfr_rcb"/>

## Details

**Implementation and Layout**

-   You can implement `SmartMultiEdit` along with a [smart table](smart-table-bed8274.md), adding a button for it to the smart table's toolbar. When you click the button, a dialog appears that contains a [smart form](smart-form-99e33bd.md) with editable `SmartMultiEdit` fields.

-   To specify the layout of the smart form dialog that contains the `SmartMultiEdit` fields, use the `layout` aggregation in the `SmartMultiEdit.Container` control.


**Data Binding**

-   You can define the [context binding](../04_Essentials/bindings-54e0ddf.md) and the OData entity set for your multi edit fields using the `contexts` and `entitySet` properties in the `SmartMultiEdit.Container` control.

-   To specify the OData property related to a specific `SmartMultiEdit` field, use the `propertyName` property of the `SmartMultiEdit.Field` control.


