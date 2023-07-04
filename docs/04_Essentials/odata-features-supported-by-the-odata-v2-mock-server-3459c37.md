<!-- loio3459c372aaaa4c31ab87bb0e174adcc3 -->

# OData Features Supported by the OData V2 Mock Server

List of OData version 2.0 features supported or not supported by the mock server

The mock server only supports the JSON format for representing the resources it exposes, such as collections, entries, and links.

> ### Restriction:  
> The mock server cannot mock more than one service per application.

The following table lists the OData features that are supported by the mock server.

**Supported OData Features**


<table>
<tr>
<th valign="top">

Feature



</th>
<th valign="top">

Status



</th>
</tr>
<tr>
<td valign="top">

CRUD calls



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

Navigations



</td>
<td valign="top">

Supported; only single navigations are supported, e.g. "/a\(\)/b/". Further navigation chaining is not supported.



</td>
</tr>
<tr>
<td valign="top" colspan="2">

 **Query String options:** 



</td>
</tr>
<tr>
<td valign="top">

\- Orderby System Query Option \(`$orderby`\)



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

\- Top System Query Option \(`$top`\)



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

\- Skip System Query Option \(`$skip`\)



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

\- Filter System Query Option \(`$filter`\)



</td>
<td valign="top">

Supported; `eq`, `ne`, `gt`, `lt`, `ge`, `le`, `substringof`, `startswith`, `endswith`, `and`, `or` 



</td>
</tr>
<tr>
<td valign="top">

\- Expand System Query Option \(`$expand`\)



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

\- Select System Query Option \(`$select`\)



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

\- Inlinecount System Query Option \(`$inlinecount`\)



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

\- Format System Query Option \(`$format`\)



</td>
<td valign="top">

Supported; only JSON format is allowed



</td>
</tr>
<tr>
<td valign="top">

Batch processing



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

Multiple services



</td>
<td valign="top">

Supported; we recommend to create one Mock Server instance per service



</td>
</tr>
<tr>
<td valign="top">

Update via `MERGE`/`PATCH` 



</td>
<td valign="top">

Supported



</td>
</tr>
<tr>
<td valign="top">

ETag handling



</td>
<td valign="top">

Supported



</td>
</tr>
</table>

The following table lists the OData features that are **not** supported by the mock server.

**Unsupported OData Features**


<table>
<tr>
<th valign="top">

Feature



</th>
<th valign="top">

Status



</th>
</tr>
<tr>
<td valign="top">

Service operations \(function imports\)



</td>
<td valign="top">

Unsupported, but can be extended



</td>
</tr>
<tr>
<td valign="top">

Annotations



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Getting individual properties of an entity \(`$value`\)



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

 `Edm.DateTime` keys



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

 `Edm.DateTime` values



</td>
<td valign="top">

All dates have to be either before 2017 or after; you cannot use mixed values



</td>
</tr>
<tr>
<td valign="top">

 `metadata.xml` with properties from `datetimeoffset` 



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Key of type `Edm.Boolean` 



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Key of type `Edm.Int64` 



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

 `$links` and `#AddressingLinksBetweenEntries` 



</td>
<td valign="top">

Unsupported

For more information see [Addressing Links between Entries](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#AddressingLinksBetweenEntries) and [Referencing Requests in a Change Set](http://www.odata.org/documentation/odata-version-2-0/batch-processing/#ReferencingRequestsInAChangeSet) on [http://www.odata.org/](http://www.odata.org/).



</td>
</tr>
<tr>
<td valign="top">

Multiple navigation properties



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Response in byte array format



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Combination of the system queries `$select` and `$expand` in mocked OData services



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Filter query string operator \(`$filter`\) with one of the functions `substringof(string po, string p1)`, `endswith(string p0, string p1)` or `startswith(string p0, string p1)` 



</td>
<td valign="top">

Does not support input strings \(`p0` or `p1`\) containing a comma `,`.



</td>
</tr>
<tr>
<td valign="top">

Key values containing a comma



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

System query option `$expand` with multiple multi-level navigation properties with the same root navigation property



</td>
<td valign="top">

Unsupported



</td>
</tr>
<tr>
<td valign="top">

Filter query `$filter` on fields from type `edm.datetime` 



</td>
<td valign="top">

Unsupported



</td>
</tr>
</table>

