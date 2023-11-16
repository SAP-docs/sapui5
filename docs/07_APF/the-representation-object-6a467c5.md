<!-- loio6a467c53595a6655e10000000a423f68 -->

# The Representation Object

The `representation` object defines the relation between the requested data and the representation type, for example, a particular chart type or a list. The format is as follows:

```

{
  "type" : "representation",    // optional
  "id" : "<id>"
  "representationTypeId" : "<representation type ID>",
  "parameter" : {
    "type" : "parameter"
    "dimensions" : [ <dimensions>* ]    //optional
    "measures" : [ <measures>* ]    // optional
    "properties" : [ <properties>* ]    //optional
    "hierarchicalProperty" : [ <hierarchical property> ]    //optional
    "width" : "<width>"
    "alternateRepresentationType" : "TableRepresentation"       //optional
    "top" : "<number>"       //optional
    "orderby" : [ <orderby>* ]             //optional
            }
}
```

The properties used in the `representation` object denote the following:


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`id` 

</td>
<td valign="top">

Unique ID of type string.

</td>
</tr>
<tr>
<td valign="top">

`representationTypeId` 

</td>
<td valign="top">

ID of the `representation type` 

</td>
</tr>
<tr>
<td valign="top">

`parameter` 

</td>
<td valign="top">

Defines specific information for the representation, for example, dimensions, measures, properties, the optional alternate table representation, and the column width for table representations. Dimensions, measures, properties and hierarchical property are all optional, but at least one of them must exist, depending on the representation type: Charts have dimensions and measures, tables have properties, and tree tables have a hierarchical property and optionally more properties.

At runtime, the constructor defined in the object, which contains a label, an image, and a reference to the constructor function of the representation type `representation type` object is called with the parameters defined by this property.

</td>
</tr>
</table>



<a name="loio6a467c53595a6655e10000000a423f68__section_jmd_psn_v1b"/>

## Properties

The `properties` property has the following format:

```
"properties": [
    {
        "fieldName": "Customer",
        "kind": "column",
        "fieldDesc": {
            "type": "label",
            "kind": "text",
            "key": "<key>"
        }
    }
],

```



<a name="loio6a467c53595a6655e10000000a423f68__section_wx1_fqn_v1b"/>

## Hierarchical Properties

The `hierarchicalProperty` property has the following format:

```
"hierarchicalProperty": [
    {
        "fieldName": "Customer",
        "kind": "hierarchicalColumn",
        "fieldDesc": {
            "type": "label",
            "kind": "text",
            "key": "<key>"
        },
		"labelDisplayOption": "text"
    }
],

```



## Dimensions and Measures

The `parameter` property can contain dimensions and measures for the representation.

The `dimensions` property has the following format:

```
*  object, which contains a"dimensions" : [
    {
        "fieldName" : "<field name>",
        "kind" : "<value>",
        "fieldDesc" : {
            "type" : "label",
            "kind" : "text",
            "key" : "<key>"
        },
        "labelDisplayOption": "text"
    }
]
```

The kind attribute provides the option to maintain multiple dimensions. It is mapped to `feedItemId`. The following table lists the `feedItemId` for the available charts:


<table>
<tr>
<th valign="top">

Chart Type

</th>
<th valign="top">

Dimension

</th>
<th valign="top">

feedItemId

</th>
</tr>
<tr>
<td valign="top" rowspan="2">

Line chart, line chart with two vertical axes, column chart, bar chart, stacked column chart, stacked bar chart, 100% stacked column chart, 100% stacked bar chart, combined column line chart, combined stacked column line chart, combined column line chart with two vertical axes, combined stacked column line chart with two vertical axes

</td>
<td valign="top">

First dimension

</td>
<td valign="top">

categoryAxis

</td>
</tr>
<tr>
<td valign="top">

Second dimension

</td>
<td valign="top">

color

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Line chart with time axis

</td>
<td valign="top">

First dimension

</td>
<td valign="top">

timeAxis

</td>
</tr>
<tr>
<td valign="top">

Second dimension

</td>
<td valign="top">

color

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Heatmap chart

</td>
<td valign="top">

First dimension

</td>
<td valign="top">

categoryAxis

</td>
</tr>
<tr>
<td valign="top">

Second dimension

</td>
<td valign="top">

valueAxis

</td>
</tr>
<tr>
<td valign="top">

Pie chart, donut chart

</td>
<td valign="top">

Dimension

</td>
<td valign="top">

color

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Scatter chart, bubble chart

</td>
<td valign="top">

First dimension

</td>
<td valign="top">

color

</td>
</tr>
<tr>
<td valign="top">

Second dimension

</td>
<td valign="top">

shape

</td>
</tr>
</table>

The `measures` property has the following format:

```
"measures" : [
    {
        "fieldName" : "<field name>",
        "kind" : "<value>",
        "fieldDesc" : {
            "type" : "label",
            "kind" : "text",
            "key" : "<key>"
        },
        "measureDisplayOption" : "bar"
    }
]
```

The kind attribute provides the option to maintain multiple measures. It is mapped to `feedItemId`. The following table lists the `feedItemId` for the available charts:


<table>
<tr>
<th valign="top">

Chart Type

</th>
<th valign="top">

Measure

</th>
<th valign="top">

feedItemId

</th>
</tr>
<tr>
<td valign="top">

Line chart, line chart with time axis, column chart, bar chart, stacked column chart, stacked bar chart, 100% stacked column chart, 100% stacked bar chart, combined column line chart, combined stacked column line chart

</td>
<td valign="top">

Measure

</td>
<td valign="top">

valueAxis

</td>
</tr>
<tr>
<td valign="top">

Heatmap chart

</td>
<td valign="top">

Measure

</td>
<td valign="top">

Color

</td>
</tr>
<tr>
<td valign="top">

Pie chart, donut chart

</td>
<td valign="top">

Measure

</td>
<td valign="top">

size

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Scatter chart, line chart with two vertical axes, combined column line chart with two vertical axes, combined stacked column line chart with two vertical axes

</td>
<td valign="top">

First measure

</td>
<td valign="top">

valueAxis

</td>
</tr>
<tr>
<td valign="top">

Second measure

</td>
<td valign="top">

valueAxis2

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

Bubble chart

</td>
<td valign="top">

First measure

</td>
<td valign="top">

valueAxis

</td>
</tr>
<tr>
<td valign="top">

Second measure

</td>
<td valign="top">

valueAxis2

</td>
</tr>
<tr>
<td valign="top">

Third measure

</td>
<td valign="top">

bubbleWidth

</td>
</tr>
</table>

The optional `fieldDesc` property of the `dimensions` and `measures` properties can be used for rendering the axis titles in the chart. For more information, see [Rendering of Charts](rendering-of-charts-0bdb7d5.md).



## Alternate Representation

For each representation, you can define an alternate representation. A user can switch to the alternate representation directly from any representation without having to access the gallery of available representation types.

To define an alternate representation, the configuration file must contain the following parameter:

`"alternateRepresentationType" : "tableRepresentation"`

The property `alternateRepresentationType` contains a reference to the `representation type ID` that is configured with details such as the constructor. The constructor of an alternate representation type is handed over to the representation instance using the parameter object.



## Ordering

Using the `orderby` property, you can define the properties by which the data depicted in the representation is ordered. You can also specify the ordering direction \(true = ascending, false = descending\).

The `orderby` property has the following format:

```
"orderby" : [{             //optional
        "property" : "<property name>",
        "ascending" : <boolean>
        }*]
```

