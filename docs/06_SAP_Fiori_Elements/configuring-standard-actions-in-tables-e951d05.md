<!-- loioe951d0573110421dadd2c5cb682212fa -->

# Configuring Standard Actions in Tables

You can configure the various properties of standard actions in tables in SAP Fiori elements for OData V4.



## Configuring the Visibility and State of Standard Actions

You can configure the visibility and state of standard actions for individual table instances using the settings in the `manifest.json` file. Settings for a specific table instance are stored in the `controlConfiguration` section.

**Standard Action Settings**


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Description

</th>
<th valign="top">

Supported values

</th>
</tr>
<tr>
<td valign="top">

`visible` 

</td>
<td valign="top">

Controls if the standard action button appears on the UI.

</td>
<td valign="top" rowspan="2">

-   `true`

-   `false`

-   Expression binding




</td>
</tr>
<tr>
<td valign="top">

`enabled` 

</td>
<td valign="top">

Controls if the standard action button is enabled or disabled.

</td>
</tr>
</table>

> ### Caution:  
> Configure these actions with care. It's the application's responsibility to ensure compliance with SAP Fiori UX standards and guidelines.

The following sample code shows how to hide the *Delete* button in a specific table, by adding the `actions` configuration inside the table's control configuration:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "ProductsList": {
>                     "options": {
>                         "settings": {
>                             "entitySet": "Products",
>                             "controlConfiguration": {
>                                 "@com.sap.vocabularies.UI.v1.LineItem": {
>                                     "actions": {
>                                         "StandardAction::Delete": {
>                                             "visible": false
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

For applications with multiple tables, configure each table separately using its annotation path, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "actions": {
>             "StandardAction::Delete": {
>                 "visible": false
>             }
>         }
>     },
>     "_Items/@com.sap.vocabularies.UI.v1.LineItem": {
>         "actions": {
>             "StandardAction::Create": {
>                 "enabled": false
>             }
>         }
>     }
> }
> 
> ```



## Configuring the Order of Standard Actions

You can configure the order of standard actions in the table toolbar. To do so, define the `anchor` and `position` properties for each action corresponding to the action key in the `manifest.json` file. The following table shows the keys and the corresponding standard actions:


<table>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Standard Action

</th>
</tr>
<tr>
<td valign="top">

`Create`

</td>
<td valign="top">

`StandardAction::Create`

</td>
</tr>
<tr>
<td valign="top">

`Delete`

</td>
<td valign="top">

`StandardAction::Delete`

</td>
</tr>
<tr>
<td valign="top">

`MassEdit`

</td>
<td valign="top">

`StandardAction::MassEdit`

</td>
</tr>
<tr>
<td valign="top">

`Insights`

</td>
<td valign="top">

`StandardAction::Insights`

</td>
</tr>
</table>

> ### Sample Code:  
> ```
> { "sap.ui5": {
>      "routing": { 
>         "targets": { 
>             "SalesOrderManageList": { 
>                 "options": { 
>                     "settings": { 
>                         "controlConfiguration": { 
>                             "@com.sap.vocabularies.UI.v1.LineItem": { 
>                                 "actions": { "StandardAction::Delete": { 
>                                     "position": { 
>                                         "anchor": "StandardAction::Create", 
>                                         "placement": "Before" 
>                                         } 
>                                     }, 
>                                     "CustomAction": { 
>                                         "press": "SalesOrder.custom.CustomActions.CustomAction1", 
>                                         "enabled": true, "text": "Custom Action", 
>                                         "command": "COMMON", "position": { 
>                                             "anchor": "StandardAction::Create", 
>                                             "placement": "After" 
>                                             } 
>                                         } 
>                                     } 
>                                 } 
>                             } 
>                         } 
>                     } 
>                 } 
>             } 
>         } 
>     } 
> }
> ```

**Related Information**  


[Adding Actions to Tables](adding-actions-to-tables-b623e0b.md "You can add different buttons to tables in SAP Fiori elements for OData V4.")

