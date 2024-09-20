<!-- loio7bcdffc056a94731b4341db73251e32b -->

# Smart Filter Bar

The `sap.ui.comp.smartfilterbar.SmartFilterBar` control analyzes the `$metadata` document of an OData service and renders a `FilterBar` control that can be used to filter, for example, a table or a chart.

The frequently asked questions section aims at answering some basic questions that you might have when using this control.For more information, see the FAQ in the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23faq).

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar).

For more information about annotations for this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar/annotations/Summary). 



## Overview

The `SmartFilterBar` control is a wrapper control that analyzes the metadata and annotations of an OData service. It renders a `FilterBar` control and provides integration with the `VariantManagement` control that is easy to configure.

OData annotations are used to:

-   Determine the type of control \(for example, whether a field is shown as `MultiInput` control or as `DatePicker`\)
-   Enable the `Suggest` feature
-   Enable value help for filters



## Details

In addition to the `$metadata` document, you can also have an additional configuration for `SmartFilterBar` in the XML view. This additional configuration can be either `sap.ui.comp.smartfilterbar.ControlConfiguration` or `sap.ui.comp.smartfilterbar.GroupConfiguration`. Using this additional configuration, you can override certain settings from the OData metadata, such as labels, indexes, or the type of control. You can also add custom fields or custom groups to the filter bar that are not part of the OData `$metadata` document at all.

The `FieldGroup` annotation is used by the `SmartFilterBar` control to create a grouping of the fields. The grouping is shown in the filter dialog. Any label specified in this dialog is used to override the default label of the property. Only `sap:filterable` fields are enabled in the `SmartFilterBar` control by default \(default is `true` when `null`\).

The `SmartFilterBar` control creates filters lazily. This is done because applications often define a large number of filters, but then only use a subset of filters in the `SmartFilterBar` control. This way, only **visible** filters are created initially \(the property relevant for `FilterGroupItem` in the `FilterBar` control is `visibleInFilterBar` and a value\). All other filters will be created at a later point in time, once they have been made visible or requested via the APIs.

> ### Caution:  
> Calling `getFilterGroupItems` of the `FilterBar` control always leads to an instantiation of **all** filters that have been defined. If the application needs to react to specific filters only, it is recommended to use `determineFilterItemByName` to obtain a specific filter item instead of calling `getFilterGroupItems` and iterating through the filters.

Multi-value and unrestricted `Date` fields are supported if the annotation `sap:filter-restriction="multi-value"` is set for date properties.

For `MultiInput` filter fields, the `MultiLine` mode is active.

The `SmartFilterBar` control supports the `Edm.Time` OData type. The fields bound to OData properties of this type are represented by the `sap.m.TimePicker` control. The filter panel of the `SmartFilterBar` control containing the conditions allows filtering for time types using the `TimePicker` control.



<a name="loio7bcdffc056a94731b4341db73251e32b__section_lpn_j11_ybc"/>

## Configuration



### Text

The `Text` annotation defines the field description and where it is taken from. It can be configured with V2 or V4 annotations. For more information, see the [API Reference: `Text`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/Text).

The configuration takes place as follows:

-   For the local text annotation – it’s set at a property level. The description is derived from the local text or navigational property.
-   For the `ValueList` text annotation \(with applied `ValueList` annotation\) – it’s set at the `ValueList` `Collection` level. The text is derived from the `ValueList` `Collection` text configuration. If a local text annotation is applied, it will be taken into consideration at the start as initial text value. This prevents the initial call for description from taking place. If the value is changed, the description is taken accordingly from the `ValueList` `Collection` item.

> ### Note:  
> The local text annotation won’t be considered in scenarios with a dropdown list \(where the `SmartFilterBar` filter is configured with fixed values\).



### TextArrangement

The `TextArrangement` annotation describes the arrangement of an ID value and its description. For more information, see the [API Reference: `TextArrangement`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/TextArrangement).



<a name="loio7bcdffc056a94731b4341db73251e32b__section_cd5_r3j_dcc"/>

## Integration with SAP Companion

SAP Companion is an SAP tool providing end-users access to context sensitive field help in browser based UIs. The tool provides additional information directly on top of the application screen. For more information about SAP Companion, see [SAP Enable Now](https://help.sap.com/viewer/product/SAP_ENABLE_NOW/latest/en-US?task=use_task).

To enable SAP Companion on a `SmartFilterBar` control, you need to set custom data on the control with the `sap-ui-DocumentationRef` key. To do this, you can use the `com.sap.vocabularies.Common.v1.DocumentationRef` annotation with your `SmartFilterBar` control on each property for which you want to provide SAP Companion support. A metadata annotation should be associated with the property related to the filter. Here is an example of an annotation for a `ContactID` `string-type` property:

```
<Annotations Target="ContactID">
<Annotation Term="com.sap.vocabularies.Common.v1.DocumentationRef" String="VALUE"/>
<Annotations>
```



<a name="loio7bcdffc056a94731b4341db73251e32b__section_ojy_pnc_wz"/>

## Integration with Other Controls



### Support of Selection Variants with `SmartVariantManagement`

You can use the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation with your `SmartFilterBar` control in combination with the `considerSelectionVariants` property. `SelectionVariant` is based on OData and metadata-driven.

> ### Note:  
> You can only use this annotation if you use the `SmartVariantManagement` control **without** page variants.

`considerSelectionVariants` is set to `false` by default. It is only taken into account during the initialization of the `SmartFilterBar` control.

If the function is active, the provided metadata and annotations are checked for `SelectionVariant` annotations. Each one of these annotations is then added as a single variant item to the `SmartVariantManagement` control. The qualifier property determines the internal variant key. The variant items are added once the initialization of `SmartVariantManagement` has been completed.

**Use of Standard Views**

If a `SelectionVariant` annotation entry is provided without a qualifier, it will be treated as the new standard view entry if there is no application-delivered standard view.

> ### Note:  
> If an application-delivered standard view exists, the default `SelectionVariant` annotation will be completely ignored.

The new standard view has filter values based on the information provided in `SelectionVariant` and is enhanced by the \_CUSTOM part of the existing standard view.

> ### Tip:  
> Replacing the standard view greatly influences all other views, since views always show a delta of visible filters in comparison to the standard view.



## Related Information

[Filter Bar](filter-bar-2ae520a.md)

[Smart Variant Management](smart-variant-management-06a4c3a.md)

