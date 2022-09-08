<!-- loio33da7d53b5c19456e10000000a423f68 -->

# The Request Object

The `request` object defines the access to a server resource by specifying an OData service and an entity set.

A `request` object has the following format:

```
<id>"
  "service" : "
{
  "type" : "request",    // optional
  "id" : "<service root>",
  "entitySet" : "<entity set name>",
  "selectProperties" : [ "<property name>"* ],
}
```

The properties used in the `request` object denote the following:


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

`service` 



</td>
<td valign="top">

Path to OData service root.

The service root is defined by an absolute path on the OData server according to the following pattern: <code><i class="varname">&lt;service root&gt;</i>: ".../odata/<i class="varname">&lt;odata-service-document&gt;</i>"</code>

The `request` \{ and its entity set name are absolute to the service root, which starts after the server and port information: <code>[protocol]://[server]:[port]/<i class="varname">&lt;service root&gt;</i></code>



</td>
</tr>
<tr>
<td valign="top">

`entitySet` 



</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view.



</td>
</tr>
<tr>
<td valign="top">

`selectProperties` 



</td>
<td valign="top">

Set of property names.

The selected properties determine which properties of the entity are contained in the server response. Therefore, they also determine the analytical processing of the request on the server.



</td>
</tr>
</table>

