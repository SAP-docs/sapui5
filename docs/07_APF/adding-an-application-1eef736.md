<!-- loio1eef736f6096469b83e5e1bcad678461 -->

# Adding an Application

For an APF-based application to run, you need to add an application node and create at least one configuration under this node in the APF Configuration Modeler.

To add an application, choose *New* and enter the following:


<table>
<tr>
<th valign="top">

Field



</th>
<th valign="top">

Explanation



</th>
</tr>
<tr>
<td valign="top">

Description



</td>
<td valign="top">

Text used to distinguish the different applications at design time. This description is visible in the APF Configuration Modeler only and not at runtime. It is not translated.



</td>
</tr>
<tr>
<td valign="top">

Semantic Object



</td>
<td valign="top">

For SAP Business Suite powered by SAP HANA, this field is prefilled with ***FioriApplication***. Keep this default entry if you use the generic APF runtime application. You can change the semantic object any time, but the entry here must be the same as the one you make when configuring the Smart Business KPI tile. In the KPI tile configuration, the semantic object filters the list of configurations so that only those are listed that have been created for the specified semantic object. Otherwise you have to type in your configuration manually.

For SAP S/4HANA, this field is not relevant and can be left empty.



</td>
</tr>
</table>

To edit the description or the semantic object, choose the *Edit Application* icon for the application you want to change.

**Related Information**  


[Configuring the SAP Smart Business KPI Tile](configuring-the-sap-smart-business-kpi-tile-374364e.md "")

