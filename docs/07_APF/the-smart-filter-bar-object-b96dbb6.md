<!-- loiob96dbb603b004b399a5b787794d2fe60 -->

# The Smart Filter Bar Object

The analytical configuration can optionally contain a smart filter bar object, which defines the configuration of the smart filter bar used in an APF-based application. The smart filter bar can be used as an alternative for facet filters and provides global filters that are applied to all analysis steps of an analysis path. A configuration can have either facet filters or a smart filter bar, not both.

The annotation file of the service root defines which properties and parameters are displayed in the smart filter bar. Therefore, the manifest.json file of the component must contain the data source definition of the service root as well as the data source definition of the corresponding annotation file.

The smart filter bar object has the following format:

```
{
    "type" : "smartFilterBar",
    "id" : "SmartFilterBar ID",
    "service" : "<service root>",
    "entitySet" : "<entity set name>",
}

```

The properties used in the step object denote the following:


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

Unique ID of type string

</td>
</tr>
<tr>
<td valign="top">

`service` 

</td>
<td valign="top">

Path to OData service root

</td>
</tr>
<tr>
<td valign="top">

`entitySet` 

</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view. The entity set provides the properties and parameters that can be displayed in the smart filter bar.

</td>
</tr>
</table>

