<!-- loio7bcdffc056a94731b4341db73251e32b -->

# Smart Filter Bar

The `sap.ui.comp.smartfilterbar.SmartFilterBar` control analyzes the `$metadata` document of an OData service and renders a `FilterBar` control that can be used to filter, for example, a table or a chart.

The frequently asked questions section aims at answering some basic questions that you might have when using this control. For more information, see the FAQ in the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23faq).

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar).

For more information about annotations for this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar/annotations/Summary).



## Overview

The `SmartFilterBar` generates filter fields automatically from the entity set's metadata, with OData annotations driving the choice of input control, value help, and type-ahead suggestions. The key functionalities are:

-   Annotation-driven filter field generation

-   Automatic control type selection \(`MultiInput`, `ComboBox`, `DatePicker`, `TimePicker`, etc.\) based on Edm type and filter restrictions

-   Type-ahead suggestions for filter fields via `ValueList` annotations

-   Basic search field for free-text filtering

-   Live mode for automatic search triggering on filter value changes

-   Adapt Filters dialog for end-user personalization

-   Built-in variant management integration via `SmartVariantManagement`

-   Text arrangements \(`TextFirst`, `TextLast`, `TextOnly`, `TextSeparate`\) for ID/description display

-   Value help dependencies between filter fields via IN/OUT parameter annotations:

    -   `ValueListParameterIn` — passes a value from the filter bar to the value help as a pre-filter

    -   `ValueListParameterOut` — passes a selected value from the value help back to another filter field

    -   `ValueListParameterInOut` — combines both directions



> ### Note:  
> The `SmartFilterBar` supports only OData V2 services. For OData V4, use the `sap.ui.mdc.FilterBar` control instead. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.FilterBar).



## Details



### Overriding Metadata via `ControlConfiguration` and `GroupConfiguration`

Filter fields and groups can be customized via `ControlConfiguration` and `GroupConfiguration`, allowing you to override labels, control types, visibility, ordering, and to add custom controls not derived from the OData metadata. For more information, see the [API Reference: `ControlConfiguration`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.ControlConfiguration) and the [API Reference: `GroupConfiguration`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.GroupConfiguration).

Configuration priority \(highest to lowest\):

1.  `ControlConfiguration` \(XML view override\)

2.  OData annotations \(`ValueList`, `FieldControl`, `FilterRestrictions`, `FieldGroup`\)

3.  OData `$metadata` \(Edm types, properties, constraints\)




### Filter Restrictions and Control Selection

The `sap:filter-restriction` annotation determines how the filter field behaves:


<table>
<tr>
<th valign="top">

Annotation

</th>
<th valign="top">

Restriction

</th>
<th valign="top">

Behavior

</th>
<th valign="top">

Typical Control

</th>
</tr>
<tr>
<td valign="top" align="center" rowspan="3">

`sap:filter-restriction`

</td>
<td valign="top">

`single-value`

</td>
<td valign="top">

Accepts exactly one value

</td>
<td valign="top">

`Input`, `ComboBox`, `DatePicker`, `TimePicker`, `DateTimePicker`

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

Accepts a range \(from/to\)

</td>
<td valign="top">

`DateRangeSelection` or `DynamicDateRange`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top">

Accepts multiple values

</td>
<td valign="top">

multiple filter \(`MultiInput`\), multiple filter \(`MultiComboBox`\)

</td>
</tr>
<tr>
<td valign="top">

none

</td>
<td valign="top">

auto

</td>
<td valign="top">

Accepts multiple values

</td>
<td valign="top">

multiple filter in ***SmartFilterBar***

</td>
</tr>
</table>



### Field Groups

The `FieldGroup` annotation is used to create logical groupings of filter fields, shown in the Adapt Filters dialog. Labels specified in the annotation override the default property labels. Only fields marked as `sap:filterable="true"` \(the default\) are included in the filter bar.



### Lazy Filter Creation

The `SmartFilterBar` creates filter controls lazily — only **visible** filters are instantiated initially. All other filters are created on demand when they are made visible or accessed via APIs.

> ### Caution:  
> Calling `getFilterGroupItems` instantiates **all** filters. Use `determineFilterItemByName` to access a specific filter without triggering full instantiation.



### Supported Data Types

The following sections show which filter controls are rendered based on the EDM type and filter restriction.

**`Edm.String`**


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered \(standard\)

</th>
<th valign="top">

Control Rendered \(with fixed value\)

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.Input`

</td>
<td valign="top">

`sap.m.ComboBox`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" align="center" rowspan="2">

multiple filter \(`MultiInput`\)

</td>
<td valign="top" rowspan="2">

multiple filter \(`MultiComboBox`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
</table>

`Edm.Int16`, `Edm.Int32`, `Edm.Int64`, `Edm.Byte`, `Edm.SByte`, `Edm.Decimal`, `Edm.Single`, `Edm.Double`


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.Input`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

multiple filter `(MultiInput)`

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
</table>

**`Edm.Boolean`**


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.Select`

</td>
</tr>
</table>

**`Edm.DateTime` \(`sap:display-format="Date"`\)**


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DatePicker`

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.DateRangeSelection`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
<tr>
<td valign="top">

`single-value` / `interval` \(with `useDateRangeType=true`\)

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
</table>

**`Edm.DateTimeOffset`**


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DateTimePicker`

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.Input`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
</table>

**`Edm.Time`**


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.TimePicker`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
</table>

**`Edm.String` with `IsCalendarDate` annotation**

When an `Edm.String` property is annotated with `com.sap.vocabularies.Common.v1.IsCalendarDate`, it is treated as a date field and renders the same controls as `Edm.DateTime` with `sap:display-format="Date"`. The value format is `YYYYMMDD` \(string\).


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DatePicker`

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.DateRangeSelection`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
<tr>
<td valign="top">

`single-value` / `interval` \(with `useDateRangeType=true`\)

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
</table>

**`Edm.String` with Calendar semantic annotations**

When an `Edm.String` property is annotated with a calendar semantic annotation \(e.g. `IsCalendarYear`, `IsCalendarMonth`, `IsCalendarWeek`, `IsCalendarQuarter`, `IsCalendarYearWeek`, `IsCalendarYearMonth`, `IsCalendarYearQuarter`\), it renders as an input field with value help only \(no free-text entry\). A pattern-based placeholder is shown \(e.g. "YYYY" for year, "MM" for month\).


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
<th valign="top">

Notes

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.Input`

</td>
<td valign="top" rowspan="3">

Value help only, pattern placeholder

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
</table>

**`Edm.String` with Fiscal Date annotations**

When an `Edm.String` property is annotated with a fiscal date annotation \(e.g. `IsFiscalYear`, `IsFiscalPeriod`, `IsFiscalYearPeriod`, `IsFiscalQuarter`, `IsFiscalYearQuarter`, `IsFiscalWeek`, `IsFiscalYearWeek`, `IsDayOfFiscalYear`\), it renders as an input field with value help only \(no free-text entry\). A pattern-based placeholder is shown based on the fiscal type.


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
<th valign="top">

Notes

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.Input`

</td>
<td valign="top" rowspan="3">

Value help only, pattern placeholder

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
</table>

**`Edm.String` with `sap:display-format="NonNegative"` \(NUMC\)**

When an `Edm.String` property has `sap:display-format="NonNegative"` \(V2\) or is annotated with `com.sap.vocabularies.Common.v1.IsDigitSequence` \(V4\), it represents a numeric character \(NUMC\) field. Leading zeros are preserved and the field accepts only digit characters. It renders with value help only \(no free-text entry\).


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
<th valign="top">

Notes

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.Input`

</td>
<td valign="top" rowspan="3">

Value help only, digit sequence constraint

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
</table>

**`Edm.Guid`**

`Edm.Guid` properties are rendered as multi-value fields. They can be combined with a `ValueList` annotation to provide value help.


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Control Rendered

</th>
</tr>
<tr>
<td valign="top">

multi-value / none\* \(`auto`\)

</td>
<td valign="top">

multiple filter \(`MultiInput`\)

</td>
</tr>
</table>

\*If no `sap:filter-restriction` attribute is set in OData V2 expression syntax or no `AllowedExpressions` property is set in OData V4 expression syntax

> ### Note:  
> For `MultiInput` filter fields, the `MultiLine` mode is active.

> ### Note:  
> Custom controls configured via `ControlConfiguration.customControl` bypass all control selection logic.



<a name="loio7bcdffc056a94731b4341db73251e32b__section_lpn_j11_ybc"/>

## Configuration



### Text

The `Text` annotation defines the human-readable description for an ID field and specifies where the description value is derived from. It can be configured with V2 \(`sap:text`\) or V4 \(`com.sap.vocabularies.Common.v1.Text`\) annotations. For more information, see the [API Reference: `Text`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/Text).

The `SmartFilterBar` uses two approaches to resolve the description text for a filter field, depending on the annotation configuration:

-   Local text annotation — The `Text` annotation is set directly at a property level. The description is derived from the referenced local property or navigational property of the same entity. This approach does not require a back end request, as the text is available in the same entity data.

-   `ValueList` text annotation — When a `ValueList` annotation is applied to the property, the text is derived from the `ValueList` collection's text configuration \(the `descriptionField` of the value list entity\). A local text annotation must also be defined on the property; it provides the initial description at startup \(for example, for restored variants or preset values\), avoiding an extra back end call. When the user changes the value, the description is fetched from the `ValueList` collection item accordingly.


> ### Note:  
> The local text annotation is not considered in scenarios with a dropdown list \(where the `SmartFilterBar` filter is configured with fixed values via `sap:value-list="fixed-values"`\). In this case, the display text comes directly from the loaded dropdown items.



### `TextArrangement`

The `TextArrangement` annotation describes the arrangement of an ID value and its description. For more information, see the [API Reference: `TextArrangement`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/TextArrangement).

The `TextArrangement` annotation can be applied to an individual property to define how the ID and its description are displayed for that filter field. The arrangement applies wherever the field is rendered in the `SmartFilterBar` control: dropdown lists, tokens, and single-value input fields.

Supported display behaviors:


<table>
<tr>
<th valign="top">

`TextArrangement` Value

</th>
<th valign="top">

Display Behavior

</th>
<th valign="top">

Example Output

</th>
</tr>
<tr>
<td valign="top">

`TextFirst`

</td>
<td valign="top">

`descriptionAndId`

</td>
<td valign="top">

"Product Name \(001\)"

</td>
</tr>
<tr>
<td valign="top">

`TextLast`

</td>
<td valign="top">

`idAndDescription`

</td>
<td valign="top">

"001 \(Product Name\)"

</td>
</tr>
<tr>
<td valign="top">

`TextOnly`

</td>
<td valign="top">

`descriptionOnly`

</td>
<td valign="top">

"Product Name"

</td>
</tr>
<tr>
<td valign="top">

`TextSeparate`

</td>
<td valign="top">

`idOnly`

</td>
<td valign="top">

"001"

</td>
</tr>
</table>

Configuration priority \(highest to lowest\):

1.  Per-field override — `displayBehaviour` set via `ControlConfiguration` \(when not `"auto"`\).

2.  Per-area override — `defaultDropDownDisplayBehaviour`, `defaultTokenDisplayBehaviour`, or `defaultSingleFieldDisplayBehaviour` custom data on the `SmartFilterBar`.

3.  `TextArrangement` annotation nested inside the property's `Text` annotation — defines the arrangement for that filter field. For example:

    ```
    <Annotations
        Target="MyNamespace.MyEntityType/MyProperty"
                     xmlns="http://docs.oasis-open.org/odata/ns/edm">
            <Annotation Term="com.sap.vocabularies.Common.v1.Text" Path="TXT">
                <Annotation Term="com.sap.vocabularies.UI.v1.TextArrangement"
                            EnumMember="com.sap.vocabularies.UI.v1.TextArrangementType/TextLast" />
            </Annotation>
        </Annotations>
    ```

    The `MyProperty` property's description comes from the `TXT` property. The nested `TextArrangement` with `TextLast` formats the rendered value as `idAndDescription` \(e.g., "001 \(Product Name\)"\).

4.  Fallback — `descriptionAndId` \(equivalent to `TextFirst`\).


> ### Note:  
> The `TextArrangement` annotation is evaluated once during initialization of the `SmartFilterBar` control.

When a variant is saved, the text arrangement data for single-value input fields is stored as part of the variant. This ensures that when a variant is restored, the correct description text is displayed immediately without requiring an additional backend request.



<a name="loio7bcdffc056a94731b4341db73251e32b__section_cd5_r3j_dcc"/>

## Integration with SAP Companion

SAP Companion is an SAP tool providing end-users access to context sensitive field help in browser based UIs. The tool provides additional information directly on top of the application screen. For more information about SAP Companion, see [SAP Enable Now](https://help.sap.com/viewer/product/SAP_ENABLE_NOW/latest/en-US?task=use_task).

To enable SAP Companion on a `SmartFilterBar` control, you need to set custom data on the control with the `sap-ui-DocumentationRef` key. To do this, you can use the `com.sap.vocabularies.Common.v1.DocumentationRef` annotation with your `SmartFilterBar` control on each property for which you want to provide SAP Companion support.

```
<Annotations Target="ContactID">
    <Annotation Term="com.sap.vocabularies.Common.v1.DocumentationRef" String="VALUE"/>
    <Annotations>
```



<a name="loio7bcdffc056a94731b4341db73251e32b__section_ojy_pnc_wz"/>

## Integration with Other Controls



### Support of Selection Presentation Variants with `SmartVariantManagement`

You can use the `com.sap.vocabularies.UI.v1.SelectionPresentationVariant` annotation with the `SmartVariantManagement` control by setting its `entitySet` property. `SelectionPresentationVariant` is based on OData and metadata-driven.

Each `SelectionPresentationVariant` annotation entry is added as a variant item to the `SmartVariantManagement` control. The qualifier property determines the internal variant key. The variant items are added once the initialization of `SmartVariantManagement` has been completed.

**Use of Qualifiers and Standard Views**

Only `SelectionPresentationVariant` annotation entries that have a qualifier are processed and added as variant items to the `SmartVariantManagement` control. Entries without a qualifier are skipped.

> ### Note:  
> The `SelectionPresentationVariant` approach does not support overriding the standard view via annotations. The standard view is managed entirely through the SAPUI5 flexibility layer.

> ### Tip:  
> If you need to define a default variant, use the flexibility layer capabilities of `SmartVariantManagement` rather than relying on annotation qualifiers.



## Related Information

[Filter Bar](filter-bar-2ae520a.md)

[Smart Variant Management](smart-variant-management-06a4c3a.md)

