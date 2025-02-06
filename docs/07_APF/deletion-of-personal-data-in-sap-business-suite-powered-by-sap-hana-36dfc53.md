<!-- loio36dfc53c777647f18c3e6ff097790163 -->

# Deletion of Personal Data in SAP Business Suite powered by SAP HANA

This section explains how an administrator or a user can delete personal data in SAP Business Suite powered by SAP HANA.



<a name="loio36dfc53c777647f18c3e6ff097790163__section_ix1_fbm_xz"/>

## Deleting Analysis Paths

When you create an analysis path using an APF-based app, the path as well as the user who created the path are stored in a SAP HANA database table.



### Deletion by an Administrator

When a user does not have access to the system any longer, for example, because he or she left the company, an administrator can delete the user's analysis paths. The analysis paths are stored in the following HANA database table:

Table name: `"sap.hba.r.apf.core.db::ANALYSIS_PATH"`

Schema name: `"SAP_HBA". The user is stored in the table field "CREATED_BY_USER"`

The administrator can delete the analysis paths with an SQL statement such as the following:

`delete from "SAP_HBA"."sap.hba.r.apf.core.db::ANALYSIS_PATH" where "CREATED_BY_USER" = '<user name>'`



### Deletion by a User

Users who still have system access can delete their own saved analysis paths directly in the analysis path gallery of the runtime application. To do so, open the analysis path menu and choose *Delete*. This opens a list of all saved analysis paths, which can be deleted individually. Repeat this for each APF-based application since you can see only those analysis paths that were created in the application you're currently using.



<a name="loio36dfc53c777647f18c3e6ff097790163__section_dtm_zcm_xz"/>

## Personal Data in Analysis Paths

In an APF-based application, personal data can also appear in an analysis path, for example, as a measure in an analysis step such as 'revenue by consultant'. APF does not persist these measures, but only filter criteria that are relevant for selections made in a chart. When a user is deleted from the system, the personal data of this user is not displayed any longer in an analysis path. The filter criteria is also removed from the analysis path so that no personal data of the deleted user shows up.

