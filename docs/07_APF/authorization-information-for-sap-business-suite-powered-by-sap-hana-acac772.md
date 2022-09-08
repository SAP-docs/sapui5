<!-- loioacac7720748646508c431036f2a9532d -->

# Authorization Information for SAP Business Suite powered by SAP HANA

The general authorization concept applies as described in the SAP HANA Security Guide on SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_HANA\_PLATFORM](https://help.sap.com/viewer/p/SAP_HANA_PLATFORM).

In particular, for APF runtime and design time, analytic privileges are needed for the following calculation views:


<table>
<tr>
<td valign="top" rowspan="4">

**Runtime**



</td>
<td valign="top">

`sap.hba.r.apf.core.v/AnalysisPathQuery`



</td>
</tr>
<tr>
<td valign="top">

`sap.hba.r.apf.core.v/AnalysisPathCountQuery`



</td>
</tr>
<tr>
<td valign="top">

`sap.hba.r.apf.core.v/AnalyticalConfigurationQuery`



</td>
</tr>
<tr>
<td valign="top">

`sap.hba.r.apf.core.v/TextElementQuery`



</td>
</tr>
<tr>
<td valign="top" rowspan="3">

**Design Time**



</td>
<td valign="top">

`sap.hba.r.apf.core.v/ApplicationQuery`



</td>
</tr>
<tr>
<td valign="top">

`sap.hba.r.apf.core.v/AnalyticalConfigurationQuery`



</td>
</tr>
<tr>
<td valign="top">

`sap.hba.r.apf.core.v/TextElementQuery`



</td>
</tr>
</table>



## Security Considerations

You can define various analytic privileges based on the `sap.hba.r.apf.core.v/AnalyticalConfigurationQuery` calculation view and assign them to different users. This can be useful if you use the generic runtime application to run several configurations with various configuration IDs and you want to ensure that only authorized users can see the content of an app. You can specify whether you want to restrict the access to certain applications or even configurations.

