<!-- loiod886cc08245d4a0cb3f870f7e8c176c9 -->

# Date Filter Fields

There are various scenarios in which you can use dates as filter fields in `SmartFilterBar`.



<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_overview"/>

## Overview

`SmartFilterBar` supports date properties as filter fields. To use a property as a date filter, it must be of type `Edm.DateTime` with the `sap:display-format="Date"` attribute.

This document covers:

-   How filter restrictions determine the rendered date control

-   How to enable semantic date operators \(today, yesterday, last week, etc.\)

-   How date fields work as `InOut` parameters of `ValueList` annotations




### Quick Reference

Date filter controls at a glance:

**Date Filter Controls Quick Reference**


<table>
<tr>
<th valign="top">

Filter Restriction

</th>
<th valign="top">

Standard Date Control

</th>
<th valign="top">

With `useDateRangeType=true`

</th>
<th valign="top">

With `conditionType`

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DatePicker`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top">

Multiple filter \(`MultiInput`\)

</td>
<td valign="top">

Multiple filter \(`MultiInput`\)

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.DateRangeSelection`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
<td valign="top">

Multiple filter \(`MultiInput`\)

</td>
<td valign="top">

Multiple filter \(`MultiInput`\)

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
</table>

\*If no `sap:filter-restriction` attribute is set in OData V2 expression syntax or no `AllowedExpressions` property is set in OData V4 expression syntax



<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_details"/>

## Details



<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_p11_lv1_d1c"/>

## Dates as Filter Fields

The [`sap:filter-restriction`](https://sap.github.io/odata-vocabularies/docs/v2-annotations.html#attribute-sapfilter-restriction) annotation \(V2\) or `FilterExpressionRestrictions` \(V4\) determines which date control is rendered:


<table>
<tr>
<th valign="top">

V2 \(`sap:filter-restriction`\)

</th>
<th valign="top">

V4 \(`AllowedExpressions`\)

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

`SingleValue`

</td>
<td valign="top">

`sap.m.DatePicker`

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top">

`MultiValue`

</td>
<td valign="top">

Multiple filter \(`MultiInput`\)

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`SingleRange`

</td>
<td valign="top">

`sap.m.DateRangeSelection`

</td>
</tr>
<tr>
<td valign="top">

none\*

</td>
<td valign="top">

none\*

</td>
<td valign="top">

Multiple filter \(`MultiInput`\)

</td>
</tr>
</table>

\*If no `sap:filter-restriction` attribute is set in OData V2 expression syntax or no `AllowedExpressions` property is set in OData V4 expression syntax



### Setting Filter Restrictions

-   **Date filter fields with `single-value` filtering**

    If `single-value` is set, a [`sap.m.DatePicker`](https://ui5.sap.com/#/api/sap.m.DatePicker) is rendered.

    OData V2 expression syntax

    ```
    <Property Name="DATE_SINGLE"
        Type="Edm.DateTime" sap:display-format="Date" sap:filter-restriction="single-value"
      sap:label="Date"/>
    ```

    OData V4 expression syntax

    ```
    <Annotations
        xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="MyNamespace.MyEnitityContainer/MyEntitySet>
          <Annotation Term="Org.OData.Capabilities.V1.FilterRestrictions">
                <Record>
                  <PropertyValue Property="FilterExpressionRestrictions">
                    <Collection>
                    <Record>
                    <PropertyValue Property="Property" PropertyPath=" DATE_SINGLE"/>
                    <PropertyValue Property="AllowedExpressions" String="SingleValue"/>
                    </Record>
                    </Collection>
                  </PropertyValue>
                </Record>
            </Annotation>
        </Annotations>
    ```

-   **Date filter fields with `multi-value` filtering**

    If `multi-value` is set, a multiple filter in `SmartFilterBar` is rendered.

    OData V2 expression syntax

    ```
    <Property Name="DATE_MULTI"
        Type="Edm.DateTime" sap:display-format="Date" sap:filter-restriction="multi-value" sap:label="Date"/>
    ```

    OData V4 expression syntax

    ```
    <Annotations
        xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="MyNamespace.MyEnitityContainer/MyEntitySet>
            <Annotation Term="Org.OData.Capabilities.V1.FilterRestrictions">
                <Record>
                  <PropertyValue Property="FilterExpressionRestrictions">
                    <Collection>
                    <Record>
                    <PropertyValue Property="Property" PropertyPath=" DATE_MULTI"/>
                    <PropertyValue Property="AllowedExpressions" String="MultiValue"/>
                    </Record>
                  </Collection>
                  </PropertyValue>
                </Record>
            </Annotation>
        </Annotations>
    ```

-   **Date filter fields with `interval` filtering**

    If `interval` is set, a [`sap.m.DateRangeSelection`](https://ui5.sap.com/#/api/sap.m.DateRangeSelection) is rendered.

    OData V2 expression syntax

    ```
    <Property Name="DATE_INTERVAL"
        Type="Edm.DateTime" sap:display-format="Date" sap:filter-restriction="interval" sap:label="Date"/>
    ```

    OData V4 expression syntax

    ```
    <Annotations
        xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="MyNamespace.MyEnitityContainer/MyEntitySet>
            <Annotation Term="Org.OData.Capabilities.V1.FilterRestrictions">
                <Record>
                  <PropertyValue Property="FilterExpressionRestrictions">
                    <Collection>
                    <Record>
                    <PropertyValue Property="Property" PropertyPath=" DATE_INTERVAL"/>
                    <PropertyValue Property="AllowedExpressions" String="SingleRange"/>
                    </Record>
                    </Collection>
                   </PropertyValue>
                  </Record>
            </Annotation>
        </Annotations>
    ```

-   **Date filter fields with `auto` filtering**

    If no `sap:filter-restriction` attribute is set in OData V2 or no `AllowedExpressions` property is set in OData V4, a multiple filter in `SmartFilterBar` is rendered.




<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_cgv_kx1_d1c"/>

## Semantic Dates as Filters

If you need to use semantic dates such as today, yesterday and others, you need to enable the semantic operators in the `SmartFilterBar`. For more information on how to do it for SAP Fiori elements applications, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-c2b916c.md).

Two approaches to enable semantic dates:


<table>
<tr>
<th valign="top">

Approach

</th>
<th valign="top">

Scope

</th>
<th valign="top">

When to use

</th>
</tr>
<tr>
<td valign="top">

`useDateRangeType` property

</td>
<td valign="top">

Global — applies to all date fields with `single-value` or `interval` restriction

</td>
<td valign="top">

Recommended. Set once on the `SmartFilterBar` control.

</td>
</tr>
<tr>
<td valign="top">

`conditionType="sap.ui.comp.config.condition.DateRangeType"`

</td>
<td valign="top">

Per-field — applies only to the specific field in `ControlConfiguration`

</td>
<td valign="top">

When you need semantic dates for a specific field regardless of its filter restriction.

</td>
</tr>
</table>



### Setting the `useDateRangeType` property

Set [`useDateRangeType="true"`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23controlProperties) on the `SmartFilterBar` to enable `sap.m.DynamicDateRange` for date fields with `single-value` or `interval` restriction. Fields with `multi-value` or no restriction remain as multiple filters.



### Using the `DateRangeType` `conditionType`

Set `conditionType` in `ControlConfiguration` to enable `sap.m.DynamicDateRange` for a specific field, regardless of its filter restriction:

```
<smartFilterBar:controlConfiguration>
           <smartFilterBar:ControlConfiguration key="DATE" visibleInAdvancedArea="true"
    conditionType="sap.ui.comp.config.condition.DateRangeType" />
    </smartFilterBar:controlConfiguration>
```

No matter the value for the `filter-restriction` attribute, a `sap.m.DynamicDateRange` is rendered in this case.

> ### Note:  
> The recommended way to use semantic dates in `SmartFilterBar` is to set the `useDateRangeType` property.



<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_krm_nx1_d1c"/>

## Dates as InOut Parameters of ValueList

`InOut` parameters of the `ValueList` annotation support date filter fields. The `Edm.String` filter field with `ValueList` is the 'source' and the `Edm.DateTime` filter field is the 'target'.

> ### Remember:  
> If an `InOut` parameter is set, the `ValueListProperty` is filtered based on the value coming from the `LocalDataProperty`.

`Out` parameter definition:

```
<Record
    Type="com.sap.vocabularies.Common.v1.ValueListParameterOut">
            <PropertyValue Property="LocalDataProperty" PropertyPath="DATE" />
            <PropertyValue Property="ValueListProperty" String="VALIDFROM" />
    </Record>
```

`InOut` parameter definition:

```
<Record
    Type="com.sap.vocabularies.Common.v1.ValueListParameterInOut">
             <PropertyValue Property="LocalDataProperty" PropertyPath="DATE" />
             <PropertyValue Property="ValueListProperty" String="VALIDFROM" />
    </Record>
```



### String source → Date target \(non-semantic\)

**Rendering of a string filter field in a 'target' field**


<table>
<tr>
<th valign="top">

Target restriction

</th>
<th valign="top">

Control

</th>
<th valign="top">

Behavior

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DatePicker`

</td>
<td valign="top">

First selected value propagated

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

Multiple filter in `SmartFilterBar`

</td>
<td valign="top" rowspan="2">

All selected values propagated

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.DateRangeSelection`

</td>
<td valign="top">

Not supported\*\*

</td>
</tr>
</table>

\*If no `sap:filter-restriction` attribute is set in OData V2 expression syntax or no `AllowedExpressions` property is set in OData V4 expression syntax

\*\*`Out` and `InOut` parameters are not supported for `interval` date fields.



### String source → Semantic date target

**Rendering of a string filter field in a semantic 'target' field**


<table>
<tr>
<th valign="top">

Target restriction

</th>
<th valign="top">

Control

</th>
<th valign="top">

Behavior

</th>
</tr>
<tr>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
<td valign="top">

First selected value propagated

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
<td valign="top">

Last selected value propagated

</td>
</tr>
<tr>
<td valign="top">

`multi-value`

</td>
<td valign="top" rowspan="2">

Multiple filter in `SmartFilterBar`

</td>
<td valign="top" rowspan="2">

All selected values propagated

</td>
</tr>
<tr>
<td valign="top">

none\* \(`auto`\)

</td>
</tr>
</table>

\*If no `sap:filter-restriction` attribute is set in OData V2 expression syntax or no `AllowedExpressions` property is set in OData V4 expression syntax

