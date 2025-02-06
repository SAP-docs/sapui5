<!-- loio76c2124562b143a9a3a06e431242cf72 -->

# Deletion of Personal Data in SAP S/4HANA

This section explains how an administrator or a user can delete personal data in SAP S/4HANA.



<a name="loio76c2124562b143a9a3a06e431242cf72__section_ix1_fbm_xz"/>

## Deleting Analysis Paths

When you create an analysis path using an APF-based app, the path as well as the user who created the path are stored in a database table.



### Deletion by an Administrator

When a user left the company, the administrator deletes the user master record from the system. The user master record includes the personalization object `BSANLY_APF` \(Analysis Path Framework personalization object\). This ensures that deleting the user master record automatically also deletes analysis paths created by the user.



### Deletion by a User

Users who still have system access can delete their own saved analysis paths directly in the analysis path gallery of the runtime application. To do so, open the analysis path menu and choose *Delete*. This opens a list of all saved analysis paths, which can be deleted individually. Repeat this for each APF-based application since you can see only those analysis paths that were created in the application you're currently using.



<a name="loio76c2124562b143a9a3a06e431242cf72__section_dtm_zcm_xz"/>

## Personal Data in Analysis Paths

In an APF-based application, personal data can also appear in an analysis path, for example, as a measure in an analysis step such as 'revenue by consultant'. APF does not persist these measures, but only filter criteria that are relevant for selections made in a chart. When a user is deleted from the system, the personal data of this user is not displayed any longer in an analysis path. The filter criteria is also removed from the analysis path so that no personal data of the deleted user shows up.

