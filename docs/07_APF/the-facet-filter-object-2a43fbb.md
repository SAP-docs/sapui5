<!-- loio2a43fbb03ace4b9386ee57b16a632858 -->

# The Facet Filter Object

The analytical configuration can optionally contain one or more facet filter objects, which define the configuration of the facet filters used in an APF-based application. Facet filters provide global filters that are applied to all analysis steps of an analysis path.

The facet filter object has the following format:

```

{
  "type" : "facetFilter",    //optional
  "description" : <same as label text>
  "id" : "<id>",
  "property" : "<property>",
  "alias" : "<property>",   //optional
  "invisible" : <boolean>    //optional
  "valueHelpRequest" : "<request ID>",    //optional
  "filterResolutionRequest" : "<request ID>",    //optional
  "multiSelection" : <boolean>,    //optional
  "preselectionDefaults" : [ "<value>"* ],     //optional
  "preselectionFunction" : <function path>,    //optional
  "label" : <label>    //optional
}

```

The properties used in the facet filter object denote the following:


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

`description` 



</td>
<td valign="top">

Contains the string entered as label so that a specific facet filter object can easily be found in the file.



</td>
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

`property` 



</td>
<td valign="top">

Filter property for the facet filter.

If `alias` is not defined, `property` is also used as select property for `valueHelpRequest`.



</td>
</tr>
<tr>
<td valign="top">

`alias` 



</td>
<td valign="top">

Select property for `valueHelpRequest`.

Used if the field name of the property of the facet filter is different in the `valueHelpRequest`.

If `property` and `alias` are the same, `alias` can be omitted.



</td>
</tr>
<tr>
<td valign="top">

`valueHelpRequest` 



</td>
<td valign="top">

ID of the request used for providing a value help to select values in the facet filter.



</td>
</tr>
<tr>
<td valign="top">

`filterResolutionRequest` 



</td>
<td valign="top">

ID of the request used for resolving a filter into single values for the value help.



</td>
</tr>
<tr>
<td valign="top">

`multiSelection` 



</td>
<td valign="top">

Defines whether selection of multiple values is possible.



</td>
</tr>
<tr>
<td valign="top">

`preselectionDefaults` 



</td>
<td valign="top">

Array of values that are preselected in the facet filter.



</td>
</tr>
<tr>
<td valign="top">

`preselectionFunction` 



</td>
<td valign="top">

Path to the function used if the preselected values need to be calculated.



</td>
</tr>
<tr>
<td valign="top">

`label` 



</td>
<td valign="top">

Defines the label text.



</td>
</tr>
</table>

If a `preselectionFunction` is defined as string in the facet filter object, the system internally converts it into a callable function before the configuration object is returned. If the defined function string cannot be resolved or does not point to a function, the property `preselectFunction` is set to *undefined* .

