<!-- loio4bda7d53b5c19456e10000000a423f68 -->

# The Step Object

The `step` object in the analytical configuration file defines static data such as labels. It is referenced in the `category` objects in which the step is displayed in the analysis step gallery.

The `step` object consists of a `request` object and a `binding` object. The `request` defines the access to the server resource, that is, it retrieves the data that is displayed on the UI. The `binding` maps the required representation types to the analysis step, which defines the way in which the data is displayed on the UI, for example, in a chart or a list.

On the UI, analysis steps are shown in the analysis step gallery as template objects. The step template object is derived from the `step` object in the configuration file, but contains only the information that is required on the UI, for example, the texts and the representations. When a user selects an analysis step from the gallery, a new step instance is created. An instance of a `step` object provides the representation type that is currently used both in the analysis step display as a chart or a list, and in the analysis path display as a thumbnail.

Optionally, the step object can contain the filter mapping configuration. Filter mapping can be useful when a selection that can be made in one analysis step cannot be handled by a subsequent step. In this case, the system determines the source filter property based on the selections made in a chart and maps them to another filter that can be used in the requests for subsequent steps in the path \(mapped filter property\).

The step object has the following format:

```

{
  "type" : "step",    // optional
  "id" : "<step ID>",
  "title" : <label>
  "longTitle" : <label>    // optional
  "request" : "<request ID>",
  "binding" : "<binding ID>",
  "topNSettings" : {    //optional
      "top" : "<number>",
      "orderby" : [{
          "property" : "<property name>",
          "ascending" : <boolean>
      }*]
  },
  "navigationTargets" : [ {"type" : "navigationTarget" , "id" : "<navigation target ID>"}* ]
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

-   **[The Hierarchical Step Object](the-hierarchical-step-object-f886aaf.md "")**  


**Related Information**  


[The Request Object](the-request-object-33da7d5.md)

[The Binding Object](the-binding-object-5e467c5.md)

