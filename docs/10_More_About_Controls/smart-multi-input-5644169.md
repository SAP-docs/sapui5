<!-- loio5644169deb76438f800f269b0cb715fc -->

# Smart Multi Input

The `SmartMultiInput` control can be used to create a multi-input field or a multi-input combobox.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartmultiinput.SmartMultiInput) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartmultiinput.SmartMultiInput) in the Demo Kit.



<a name="loio5644169deb76438f800f269b0cb715fc__section_mxc_sbd_5db"/>

## Overview

The `SmartMultiInput` control acts as a wrapper control for the `sap.ui.comp.smartfield.SmartField` control and supports the same settings and annotations. It interprets OData metadata to create a multi-input field or a multi-input combobox, similar to `sap.m.MultiInput` and `sap.m.MultiComboBox` but with added annotation capabilities. Thanks to the annotations support, smart multi input fields and comboboxes can be embedded into other smart controls, such as `sap.ui.comp.smartform.SmartForm`.

 ![Smart Multi Input Fields in a Smart Form](../01_Whats-New/images/WhatsNew_156_Smart_Multi_Input_ece2f96.jpg) 



<a name="loio5644169deb76438f800f269b0cb715fc__section_xs2_lfm_l2b"/>

## Details

**Implementation**

-   You can create a `SmartMultiInput` control inside a [smart field](smart-field-4864403.md) or a [smart form](smart-form-99e33bd.md) control. For an example of smart multi input fields inside a smart form, see the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartmultiinput.SmartMultiInput) in the Demo Kit.


**Data Binding**

-   Smart multi input fields and comboboxes support three modes of data binding: two-way binding, one-way binding, and one-time binding. To learn more about binding modes, see [Data Binding](../04_Essentials/data-binding-68b9644.md).

-   The OData entity property that is displayed in the smart multi input field or combobox can be defined in the parent control's `value` property. When any of the data binding modes is used, the `value` property should be bound to a navigation property. When no data binding is used, the `value` property can be bound to an arbitrary property of the entity set specified in the parent control's `entitySet` property.


