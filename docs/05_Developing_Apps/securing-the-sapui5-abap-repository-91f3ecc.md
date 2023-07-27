<!-- loio91f3ecc06f4d1014b6dd926db0e91070 -->

# Securing the SAPUI5 ABAP Repository

Here's everything you need to know about securing the SAPUI5 ABAP repository when using the team repository provider and the repository upload and download reports, when executing apps from the repository, when tracking code changes or text changes, or when using the SAPUI5 application index REST API.



<a name="loio91f3ecc06f4d1014b6dd926db0e91070__section_FF322F8337114FF09D995A2965C673BA"/>

## Using the Team Repository Provider or the SAPUI5 ABAP Repository Upload and Download Reports

Using the team repository provider, you can synchronize the application resources between the team provider REST API and the SAPUI5 ABAP repository. Alternatively, you can use the interactive ABAP reports `/UI5/UI5_REPOSITORY_LOAD` or `/UI5/UI5_REPOSITORY_LOAD_HTTP`, which offer a similar functionality. Compared to the team repository provider, these interactive reports do not offer a built-in code merge. You can use a separate source code repository such as Git or Subversion \(SVN\).

**Authorization Objects for Team Repository Provider** 


<table>
<tr>
<th valign="top">

Authorization Object



</th>
<th valign="top">

Values



</th>
<th valign="top">

What is it for?



</th>
<th valign="top">

Needed for deployment from



</th>
</tr>
<tr>
<td valign="top">

`S_DEVELOP`



</td>
<td valign="top">

`OBJTYPE` = `SMIM, WAPA`

`ACTVT` = `01 Create`, `02: Change`, `03: Display`, `06: Delete`



</td>
<td valign="top">

Create, update, and delete applications in the SAPUI5 ABAP repository



</td>
<td valign="top">

All tools



</td>
</tr>
<tr>
<td valign="top">

`S_TRANSPORT`



</td>
<td valign="top">

 



</td>
<td valign="top">

Optional: Create a new transport request or new task



</td>
<td valign="top">

All tools



</td>
</tr>
<tr>
<td valign="top">

`S_ADT_RES`



</td>
<td valign="top">

`/sap/bc/adt/ato/*`

`/sap/bc/adt/discovery`

`/sap/bc/adt/filestore/ui5-bsp`

`/sap/bc/adt/filestore/ui5-bsp/*`



</td>
<td valign="top">

For the ABAP back-end communication via team repository provider REST API or RFC



</td>
<td valign="top">

Eclipse, SAP Web IDE



</td>
</tr>
<tr>
<td valign="top">

`S_RFC`



</td>
<td valign="top">

`Activity 16` \(Execute\), with `RFC_NAME=SADT_REST_RFC_ENDPOINT` and `RFC_TYPE=FUNC`



</td>
<td valign="top">

For the ABAP back-end communication via team repository provider API via RFC



</td>
<td valign="top">

Eclipse



</td>
</tr>
<tr>
<td valign="top">

`S_SERVICE`



</td>
<td valign="top">

`SRV_NAME` =

`7F064C27E28C93BB12D1A91DED20C1`

`88F999CBE44E096D4947A3E74BEDCC`

`SRV_TYPE` = Hash Value for TADIR Object



</td>
<td valign="top">

For the ABAP back-end communication via OData service



</td>
<td valign="top">

SAP Business Application Studio, SAP Fiori tools



</td>
</tr>
</table>

> ### Note:  
> In addition to assigning these authorization objects, you also have to activate certain ICF services . For more information, see [Configuring the ABAP Back-end for ABAP Development Tools](https://help.sap.com/doc/2e65ad9a26c84878b1413009f8ac07c3/latest/en-US/config_guide_system_backend_abap_development_tools.pdf)

**Delivered Virus Scan Profiles** 

When uploading files to the SAPUI5 ABAP repository, you can perform a virus scan. SAP delivers virus scan profile`/UI/UI5_INFRA_APP/REP_DT_PUT`, which is used to store files in theSAPUI5 ABAP repository. This profile is deactivated when delivered. To activate it, create at least one basis profile and save it as the default profile. You can then activate one of the delivered profiles.

By default, it links to a reference profile that is the default profile. For more information, search for `ABAB-Specific Configuration` in the documentation of your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.



<a name="loio91f3ecc06f4d1014b6dd926db0e91070__section_CDDA32FF380C43F9ABD63B501EF3649D"/>

## Executing SAPUI5 Applications from the SAPUI5 ABAP Repository

Using an ICF handler, you can execute SAPUI5 applications by retrieving their resources from the SAPUI5 ABAP repository.

**Delivered ICF Nodes** 

For the execution of SAPUI5 applications from the SAPUI5 ABAP repository, SAP delivers ICF node `/sap/bc/ui5_ui5/`. This node contains sub nodes for each application.

> ### Note:  
> Since all services delivered by SAP are inactive initially, please activate all required services.

For more information, search for `Activating and Deactivating ICF Services` in the documentation of your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.

**Authorization Objects** 

There are no specific authorization objects needed to execute SAPUI5 applications from the SAPUI5 ABAP repository.

As for ICF service nodes in general, authorization for specific ICF service nodes can be restricted. For more information, search for `Defining Service Data` in the documentation of your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.



<a name="loio91f3ecc06f4d1014b6dd926db0e91070__section_8ADD8616B4634A2089BC52C58C6CCD11"/>

## Tracking Coding Changes and Text Changes in the SAPUI5 ABAP Repository

You can track code changes by using the general ABAP version control of the corresponding resource file. A new version is created when a new transport is written.

You can track text changes by using *Table History* \(transaction `SCU3`\). The relevant tables for texts are `/UI5/TREP_TEXT` and `/UI5/TREP_TEXT_T` \(for translated text\). Bear in mind that you have to activate table logging in the system for this feature.



## Using the SAPUI5 Application Index REST API

The SAPUI5 application index REST API can be executed from ABAP systems with an ICF handler to get the transitive dependencies of an app.

> ### Note:  
> This API is not for public use. It's only used when packaging SAP Fiori apps with SAP Mobile Platform Hybrid SDK plugins.

**Delivered ICF Nodes**

For the execution of the SAPUI5 application index REST API, SAP delivers ICF node `/sap/bc/ui2/app_index`.

> ### Note:  
> Since all services delivered by SAP are inactive initially, please activate all required services.

For more information about ICF services and security, search for `Activating and Deactivating ICF Services` and `RFC/ICF Security Guide` in the documentation of your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.

For more information about the SAPUI5 application index, see [SAPUI5 Application Index](sapui5-application-index-c5e7098.md).

