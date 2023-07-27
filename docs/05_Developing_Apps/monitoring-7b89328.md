<!-- loio7b8932887dc94706a220e40264b49891 -->

# Monitoring

To monitor the execution of the report `/UI5/APP_INDEX_CALCULATE` and the calculation results, you can use Computing Center Management System \(CCMS\).


<table>
<tr>
<th valign="top">

Monitor What?



</th>
<th valign="top">

How?



</th>
</tr>
<tr>
<td valign="top">

Execution of the report



</td>
<td valign="top">

Set up alerts for the report by using the data collection method `CCMS_BATCH_MONITORING` and the analysis method `CCMS_BP_MON_ANALYZE`.

> ### Note:  
> This monitoring refers only to the execution of the job itself. It does not detect any application log entries with problems created by the report.

For more information, search for `Monitoring Jobs with the Alert Monitor` and `Setting Up the Monitoring of Jobs with the Alert Monitor` in the documentation for your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.



</td>
</tr>
<tr>
<td valign="top">

Calculation results



</td>
<td valign="top">

Build CCMS methods that evaluate the application logs for the object `/UI5/APPIDX` and the subobjects `GENERAL`, `UI5REP`, and `UI5COMP`.

For more information, search for `Creating a Data Supplier for the CCMS Alert Monitor` and `Application Log (BC-SRV-BAL)` in the documentation for your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.



</td>
</tr>
</table>

