<!-- loiod2babc9f76fd432eaade6c348c19f1e9 -->

# Calculation Issues

Any issues during the calculation of the index are written as messages to the application log.


<table>
<tr>
<th valign="top">

Message Type

</th>
<th valign="top">

Classification

</th>
<th valign="top">

What's the Issue?

</th>
</tr>
<tr>
<td valign="top">

Error

</td>
<td valign="top">

Very high

</td>
<td valign="top">

Exception because manifest.json file is not valid or cache buster token could not be calculated

</td>
</tr>
<tr>
<td valign="top">

Error

</td>
<td valign="top">

High

</td>
<td valign="top">

Component ID occurs or is used more than once

</td>
</tr>
<tr>
<td valign="top">

Warning

</td>
<td valign="top">

Medium

</td>
<td valign="top">

Component ID is potentially not valid

</td>
</tr>
</table>

To access the application log, choose *View … Logs* in the report `/UI5/APP_INDEX_CALCULATE`. The application log is also persisted in client 000 by default and can be analyzed using transaction `SLG1`.

Technically, the application log is referenced by the object `/UI5/APPIDX`. This object has the following subobjects:


<table>
<tr>
<th valign="top">

Subobject

</th>
<th valign="top">

What Does It Contain?

</th>
</tr>
<tr>
<td valign="top">

GENERAL

</td>
<td valign="top">

General information like time and duration of the last calculation of the index, number of single repositories, and number of updated table entries

</td>
</tr>
<tr>
<td valign="top">

UI5REP

</td>
<td valign="top">

Error messages that occurred when a single repository was processed

The external ID is the name of the single repository.

</td>
</tr>
<tr>
<td valign="top">

UI5COMP

</td>
<td valign="top">

Component-related messages from a consistency check carried out at the end of the calculation of the index

The consistency check includes the following:

-   Whether the same component ID is contained in more than one repository

-   Whether the component ID is valid

-   Whether a reuse component defined in the dependencies is not contained in the application index


The external ID is the component ID.

</td>
</tr>
</table>

The application log contains only entries of the last run of the report `/UI5/APP_INDEX_CALCULATE` and any older entries are removed automatically. For more information, search for `Analyze Logs` in the documentation for your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.

