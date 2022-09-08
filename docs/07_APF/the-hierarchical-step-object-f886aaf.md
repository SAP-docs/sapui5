<!-- loiof886aaf1a6c047a6b78dadad97f62030 -->

# The Hierarchical Step Object

The hierarchical step uses the tree table to visualize hierarchical data.

The hierarchical step object has the following format:

```

{
  "type" : "hierarchical step",    // optional
  "id" : "<step ID>",
  "title" : <label>
  "longTitle" : <label>    // optional
  "request" : "<request ID>",
  "binding" : "<binding ID>",
  "navigationTargets" : [ {"type" : "navigationTarget" , "id" : "<navigation target ID>"}* ]
  "hierarchyProperty": "<property name>"
  "thumbnail" : <thumbnail>,
  "filterMapping" : {    // optional
      "requestForMappedFilter" : "<request ID>",
      "target" : [ <mapped filter properties>*],
      "keepSource" : <boolean> 
  }
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

 `title` 



</td>
<td valign="top">

Title displayed in the analysis step gallery and in the analysis path display.



</td>
</tr>
<tr>
<td valign="top">

 `longTitle` 



</td>
<td valign="top">

Title displayed above the representation in the analysis step display. If no long title is defined, the title is used instead.



</td>
</tr>
<tr>
<td valign="top">

 `request` 



</td>
<td valign="top">

ID of the request used for this analysis step.



</td>
</tr>
<tr>
<td valign="top">

 `binding` 



</td>
<td valign="top">

ID of the binding used for this analysis step.



</td>
</tr>
<tr>
<td valign="top">

navigationTargets



</td>
<td valign="top">

IDs of the navigation targets used for this analysis step.



</td>
</tr>
<tr>
<td valign="top">

hierarchyProperty



</td>
<td valign="top">

The property that is provided in a hierarchical form.



</td>
</tr>
<tr>
<td valign="top">

 `thumbnail` 



</td>
<td valign="top">

Displayed in the analysis path display.



</td>
</tr>
<tr>
<td valign="top">

 `filterMapping` 



</td>
<td valign="top">

Maps a filter derived from the selection in a chart \(source filter property\) to another filter that can be used in the requests for subsequent steps in the path \(mapped filter property\). If the `filterMapping` property does not exist, no filter mapping is required for this step.



</td>
</tr>
<tr>
<td valign="top">

 `requestForMappedFilter` 



</td>
<td valign="top">

Contains the ID of the `request` object used to do the lookup request. The lookup request maps the source filter properties to the mapped filter properties. The source filter properties are derived from the selections made in the current step. They correspond to property `requiredFilter` of the `binding` object. Therefore, the properties used in the source filter must be contained as filterable properties in `requestForMappedFilter`.



</td>
</tr>
<tr>
<td valign="top">

 `target` 



</td>
<td valign="top">

Array of properties that are used to determine the mapped filter properties based on the response from `requestForMappedFilter`.



</td>
</tr>
<tr>
<td valign="top">

 `keepSource` 



</td>
<td valign="top">

Determines whether the source filter property is kept in the cumulative filter in addition to the mapped filter property.

true = Both filter properties are kept in the cumulative filter for subsequent steps.

false = The mapped filter property only is kept in the cumulative filter.



</td>
</tr>
</table>

