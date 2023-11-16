<!-- loio5e467c53595a6655e10000000a423f68 -->

# The Binding Object

The `binding` object defines the relation between the requested data and one or more representations. It also defines the mapping of selections made on the UI to OData filter expressions. The `binding` object has the following format:

```

{
  "type" : "binding",    //optional
  "id" : "<id>"
  "requiredFilters" : [ "<property name>"* ]
  "representations" : [ <representation>* ],
}
```

The properties used in the `binding` object denote the following:


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

`requiredFilters` 

</td>
<td valign="top">

Contract between binding and request; specify the target properties for converting selected data into filter expressions

</td>
</tr>
<tr>
<td valign="top">

`representations` 

</td>
<td valign="top">

An array of `representation` objects.

</td>
</tr>
</table>

**Related Information**  


[The Representation Object](the-representation-object-6a467c5.md)

