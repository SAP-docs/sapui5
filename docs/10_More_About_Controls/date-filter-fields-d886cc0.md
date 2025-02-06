<!-- loiod886cc08245d4a0cb3f870f7e8c176c9 -->

# Date Filter Fields

There are various scenarios in which you can use dates as filter fields in `SmartFilterBar`.

`SmartFilterBar` is a metadata driven control. The generated filter fields depend on the properties defined in the metadata. To use dates as filters fields, you need to ensure that the corresponding property is of type `Edm.DateTime` and it is annotated with the `sap:display-format="Date"` attribute.

In this document you can find more information about using dates and semantic dates as filter fields and as `InOut` parameters of the `ValueList` annotation.



<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_p11_lv1_d1c"/>

## Dates as Filter Fields

A property can be annotated with the [`sap:filter-restriction`](https://sap.github.io/odata-vocabularies/docs/v2-annotations.html#attribute-sapfilter-restriction) attribute in OData V2 expression syntax with values:

-   `single-value`;

-   `multi-value`;

-   `interval`.


`SmartFilterBar` supports the following [`FilterExpressionType`](https://github.com/oasis-tcs/odata-vocabularies/blob/main/vocabularies/Org.OData.Capabilities.V1.md#filterexpressiontype) values in OData V4 expression syntax:

-   `SingleValue`;

-   `MultiValue`;

-   `SingleRange`.




### Setting Filter Restrictions

-   **Date filter fields with `single-value` filtering**

    If `single-value` is set for `sap:filter-restriction`, a [`sap.m.DatePicker`](https://ui5.sap.com/#/api/sap.m.DatePicker) is rendered.

    OData V2 expression syntax

    ```
    <Property Name="DATE_SINGLE" Type="Edm.DateTime" sap:display-format="Date" sap:filter-restriction="single-value" sap:label="Date"/>
    ```

    OData V4 expression syntax

    ```
    <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="MyNamespace.MyEnitityContainer/MyEntitySet> 
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

    If `multi-value` is set for `sap:filter-restriction`, a multiple filter in `SmartFilterBar` is rendered.

    OData V2 expression syntax

    ```
    <Property Name="DATE_MULTI" Type="Edm.DateTime" sap:display-format="Date" sap:filter-restriction="multi-value" sap:label="Date"/>
    ```

    OData V4 expression syntax

    ```
    <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="MyNamespace.MyEnitityContainer/MyEntitySet> 
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

    If `interval` is set for `sap:filter-restriction`, a [`sap.m.DateRangeSelection`](https://ui5.sap.com/#/api/sap.m.DateRangeSelection) is rendered.

    OData V2 expression syntax

    ```
    <Property Name="DATE_INTERVAL" Type="Edm.DateTime" sap:display-format="Date" sap:filter-restriction="interval" sap:label="Date"/>
    ```

    OData V4 expression syntax

    ```
    <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="MyNamespace.MyEnitityContainer/MyEntitySet> 
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

If you need to use semantic dates such as today, yesterday and others, you need to enable the semantic operators in the `SmartFilterBar`. For more information on how to do it for SAP Fiori elements applications, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).



### Setting the `useDateRangeType` property

`SmartFilterBar` has two options to use semantic instead of non-semantic dates. The first one is to set the [`useDateRangeType`](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23controlProperties) property to `true`. By default, it is `false`. In this case, semantic date filter fields \(`sap.m.DynamicDateRange`\) are rendered only if the filter restriction is set to `single-value` or `interval`. If the filter restriction is not set or its value is `multi-value`, a multiple filter in `SmartFilterBar` is rendered. Below you can see the different options for the filter fields and their filter restriction:

**Setting the useDateRangeType Property on Semantic Date Filter Fields**


<table>
<tr>
<th valign="top">

Annotation

</th>
<th valign="top">

Value

</th>
<th valign="top">

Control/Rendered as

</th>
</tr>
<tr>
<td valign="top" rowspan="3">

`sap:filter-restriction` 

</td>
<td valign="top">

`single-value`

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

multiple filter in `SmartFilterBar`

</td>
</tr>
<tr>
<td valign="top">

`interval`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
</tr>
<tr>
<td valign="top">

none\*

</td>
<td valign="top">

`auto`

</td>
<td valign="top">

multiple filter in `SmartFilterBar`

</td>
</tr>
</table>

\*If no `sap:filter-restriction` attribute is set in OData V2 expression syntax or no `AllowedExpressions` property is set in OData V4 expression syntax



### Using the `DateRangeType` `conditionType`

The second option to use semantic dates is to set the `DateRangeType` as `conditionType` in the `SmartFilterBar` control configuration:

```
<smartFilterBar:controlConfiguration> 
       <smartFilterBar:ControlConfiguration key="DATE" visibleInAdvancedArea="true" conditionType="sap.ui.comp.config.condition.DateRangeType" /> 
</smartFilterBar:controlConfiguration> 
```

No matter the value for the `filter-restriction` attribute, a `sap.m.DynamicDateRange` is rendered in this case.

> ### Note:  
> The recommended way to use semantic dates in `SmartFilterBar` is to set the `useDateRangeType` property.



<a name="loiod886cc08245d4a0cb3f870f7e8c176c9__section_krm_nx1_d1c"/>

## Dates as InOut Parameters of ValueList

`InOut` parameters of the `ValueList` annotation support date filter fields, but there are some specific points described below.  

Let's call the `Edm.String` filter field with `ValueList` annotation a 'source' and the `Edm.DateTime` filter field a 'target'. The target has a `LocalDataProperty` which is a property from the main entity set and a `ValueListProperty` which is a property from the `ValueHelp` entity set. 

> ### Remember:  
> If `InOut` parameter is set, the `ValueListProperty` is filtered based on the value coming from the `LocalDataProperty`.  

`Out` parameter definition:

```
<Record Type="com.sap.vocabularies.Common.v1.ValueListParameterOut">
	    <PropertyValue Property="LocalDataProperty" PropertyPath="DATE" /> 
	    <PropertyValue Property="ValueListProperty" String="VALIDFROM" />
</Record>
```

`InOut` parameter definition:

```
<Record Type="com.sap.vocabularies.Common.v1.ValueListParameterInOut"> 
	     <PropertyValue Property="LocalDataProperty" PropertyPath="DATE" /> 
	     <PropertyValue Property="ValueListProperty" String="VALIDFROM" /> 
</Record>
```



### String filter field as 'source' and date filter field as 'target'

-   The target field has `single-value` filtering

    The selected value from the `String` source is populated in the target field \(`sap.m.DatePicker`\). If more than one value is selected, only the first one is propagated to the target field. 

-   The target field has `multiple-value` or auto filtering

    All selected values from the `String` source are propagated to the target field \(multiple filter\).  

-   The target field has `interval` filtering

    `Out` and `InOut` parameters are not supported for `interval` date fields \(`sap.m.DateRangeSelection`\). 


**Rendering of a string filter field in a 'target' field**


<table>
<tr>
<th valign="top">

Source filter field

</th>
<th valign="top" align="center" colspan="4">

Target filter field

</th>
</tr>
<tr>
<th valign="top">

Type

</th>
<th valign="top">

Annotation

</th>
<th valign="top">

Value

</th>
<th valign="top">

Control/Rendered as

</th>
<th valign="top">

Populated in target field\*

</th>
</tr>
<tr>
<td valign="top" align="center" rowspan="4">

`string`

</td>
<td valign="top" rowspan="3">

`sap:filter-restriction`

</td>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DatePicker`

</td>
<td valign="top">

first selected value

</td>
</tr>
<tr>
<td valign="top">

`multiple-value`

</td>
<td valign="top">

multiple filter in `SmartFilterBar`

</td>
<td valign="top">

all selected values

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

not supported\*\*

</td>
</tr>
<tr>
<td valign="top">

none

</td>
<td valign="top">

`auto`

</td>
<td valign="top">

multiple filter in `SmartFilterBar`

</td>
<td valign="top">

all selected values

</td>
</tr>
</table>

\* Indicates which selected value from the string 'source' is populated in the 'target' field.

\*\*`Out` and `InOut` parameters are not supported for `interval` date fields.



### String filter field as 'source' and semantic date filter field as 'target'

-   The target field has `single-value` filtering

    The selected value from the `String` source is populated in the target field \(`sap.m.DynamicDateRange`\).  

-   The target field has `interval` filtering

    If single value is selected from the `String` source, its value is propagated to the target field \(`sap.m.DynamicDateRange`\). If more than one value is selected, the last one is propagated to the target field.  

-   The target field has `multi-value` or auto filtering

    All selected values from the `String` source are propagated to the target field which in this case is a multiple filter.


**Rendering of a string filter field in a 'target' field**


<table>
<tr>
<th valign="top">

Source filter field

</th>
<th valign="top" align="center" colspan="4">

Target filter field

</th>
</tr>
<tr>
<th valign="top">

Type

</th>
<th valign="top">

Annotation

</th>
<th valign="top">

Value

</th>
<th valign="top">

Control/Rendered as

</th>
<th valign="top">

Populated in target field\*

</th>
</tr>
<tr>
<td valign="top" align="center" rowspan="4">

`string`

</td>
<td valign="top" rowspan="3">

`sap:filter-restriction`

</td>
<td valign="top">

`single-value`

</td>
<td valign="top">

`sap.m.DynamicDateRange`

</td>
<td valign="top">

first selected value

</td>
</tr>
<tr>
<td valign="top">

`multiple-value`

</td>
<td valign="top">

multiple filter in `SmartFilterBar`

</td>
<td valign="top">

all selected values

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

last selected value

</td>
</tr>
<tr>
<td valign="top">

none

</td>
<td valign="top">

`auto`

</td>
<td valign="top">

multiple filter in `SmartFilterBar`

</td>
<td valign="top">

all selected values

</td>
</tr>
</table>

\* Indicates which selected value from the string 'source' is populated in the 'target' field.

