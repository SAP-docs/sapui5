<!-- loio1232241b99d7437ba3614698d53dfa4b -->

# Unsupported Superclass Methods and Events

Certain methods derived from SAPUI5 model and binding superclasses are not supported in OData V4 model classes or have limited support.

The following methods and events are affected by this. For more information, see the corresponding API documentation for each method and event in the Demo Kit.

**Unsupported Methods**


<table>
<tr>
<th valign="top">

Class



</th>
<th valign="top">

Method



</th>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataMetaModel`

\(See [sap.ui.model.odata.v4.ODataMetaModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel) in the Demo Kit\)



</td>
<td valign="top">

`bindTree`

`getOriginalProperty`

`isList`

`refresh`

`setLegacySyntax`



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataModel`

\(See [sap.ui.model.odata.v4.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel) in the Demo Kit\)



</td>
<td valign="top">

`bindTree`

`destroyBindingContext`

`getObject`

`getOriginalProperty`

`getProperty`

`isList`

`setLegacySyntax`



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataContextBinding`

\(See [sap.ui.model.odata.v4.ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) in the Demo Kit\)



</td>
<td valign="top">

`isInitial`

`refresh` \(limited support only\)

`resume` \(limited support only\)

`suspend` \(limited support only\)



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataListBinding`

\(See [sap.ui.model.odata.v4.ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding) in the Demo Kit\)



</td>
<td valign="top">

`getDistinctValues`

`isInitial`

`refresh` \(limited support only\)

`resume` \(limited support only\)

`suspend` \(limited support only\)



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataPropertyBinding`

\(See [sap.ui.model.odata.v4.ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding) in the Demo Kit\)



</td>
<td valign="top">

`isInitial`

`refresh` \(limited support only\)

`resume`

`setValue` \(limited support only\)

`suspend`



</td>
</tr>
</table>

**Unsupported Events**


<table>
<tr>
<th valign="top">

Class



</th>
<th valign="top">

Event



</th>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataMetaModel`

\(See [sap.ui.model.odata.v4.ODataMetaModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel) in the Demo Kit\)



</td>
<td valign="top">

`parseError`

`propertyChange`

`requestCompleted`

`requestFailed`

`requestSent`



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.v4.ODataModel`

\(See [sap.ui.model.odata.v4.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel) in the Demo Kit\)



</td>
<td valign="top">

`parseError`

`requestCompleted`

`requestFailed`

`requestSent`



</td>
</tr>
</table>

**Related Information**  


[sap.ui.model.odata.v4.ODataMetaModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel)

[sap.ui.model.odata.v4.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel)

[sap.ui.model.odata.v4.ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding)

[sap.ui.model.odata.v4.ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding)

[sap.ui.model.odata.v4.ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding)

