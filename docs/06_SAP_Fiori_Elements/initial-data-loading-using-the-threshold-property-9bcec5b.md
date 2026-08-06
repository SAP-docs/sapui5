<!-- loio9bcec5bbcfd94bddab3e73947f1e4f86 -->

# Initial Data Loading Using the `threshold` Property

You can use the `threshold` property to define the number of initially loaded rows in responsive, grid, tree, and analytical tables in SAP Fiori elements for OData V4.

You can configure the `threshold` property in the `manifest.json` file to specify the number of additional rows that can be preloaded from the back-end system. The specified value is added to the number of visible rows. For example, if `threshold` is set to 100 and there are ten visible rows, the table loads a total of 110 records. This property applies to actions such as initial loading, sorting, and filtering.

> ### Sample Code:  
> `manifest.json` 
> 
> ```
>  
> "targets": {
>     "EntityList": {
>         ...
>     },
>     "controlConfiguration": {
>         "@com.sap.vocabularies.UI.v1.LineItem#entityListItem": {
>             "tableSettings": {
>                 "threshold": 100,
>                 ...
>             }
>         },
>         ...
>     }
> }
> 
> ```

> ### Note:  
> If `threshold` is set to 0, no additional records are preloaded, and `scrollThreshold` is used instead.



## Configuring the `threshold` Property for Initial Data Loading

You can configure the `threshold` property in the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "targets": {
>     "SalesOrderManageList": {
>         "type": "Component",
>         "id": "SalesOrderManageList",
>         "name": "sap.fe.templates.ListReport",
>         "options": {
>             "settings": {
>                 "contextPath": "/SalesOrderManage",
>                 "controlConfiguration": {
>                     "@com.sap.vocabularies.UI.v1.LineItem": {
>                         "tableSettings": {
>                             "type": "ResponsiveTable",
>                             "threshold": 100
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

**Default threshold Values**


<table>
<tr>
<th valign="top" colspan="2">

Table Type

</th>
<th valign="top">

Number of Preloaded Rows

</th>
</tr>
<tr>
<td valign="top" rowspan="2">

Responsive table

</td>
<td valign="top">

List report page

</td>
<td valign="top">

30

</td>
</tr>
<tr>
<td valign="top">

Object page

</td>
<td valign="top">

10

</td>
</tr>
<tr>
<td valign="top" colspan="2">

Tree table

</td>
<td valign="top">

200

</td>
</tr>
<tr>
<td valign="top" colspan="2">

Grid table

</td>
<td valign="top">

100

</td>
</tr>
<tr>
<td valign="top" colspan="2">

Analytical table

</td>
<td valign="top">

100

</td>
</tr>
</table>

The `threshold` value set by this property overrides the `MaxItems` annotation in the presentation variant.

The `Table` building block also supports the threshold option. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table%23overview).

Key users can configure the `threshold` property using the UI adaptation mode. For more information, see [Extending Delivered Apps With Key User Adaptation](extending-delivered-apps-with-key-user-adaptation-59bfd31.md).

