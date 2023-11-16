<!-- loio6f467c53595a6655e10000000a423f68 -->

# The Representation Type Object

> ### Note:  
> This step is required only if you want to define your own representation types in addition to the predefined ones shipped with APF. For more information, see [Predefined Representation Types](predefined-representation-types-74db7d5.md).

The `representation type` object defines how data is depicted on the UI. It has the following format:

```

{
  "type" : "representationType",    // optional
  "id" : "<id>",
  "constructor" : <constructor>,
  "picture" : "<path/file>",    // relative to Web application root
  "label" : <label>
}
```

The properties used in the `representation type` object denote the following:


<table>
<tr>
<th valign="top">

Properties

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

`constructor` 

</td>
<td valign="top">

Defines the implementing function object of the representation.

</td>
</tr>
<tr>
<td valign="top">

`picture` 

</td>
<td valign="top">

Icon indicating the representation type.

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

