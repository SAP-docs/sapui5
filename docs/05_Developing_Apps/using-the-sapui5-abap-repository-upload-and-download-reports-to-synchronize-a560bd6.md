<!-- loioa560bd6ed4654fd1b338df065d331872 -->

# Using the SAPUI5 ABAP Repository Upload and Download Reports to Synchronize

You can upload an SAPUI5 app to or download it from the SAPUI5 ABAP repository by using the SAPUI5 ABAP repository upload and download reports.



## Single SAPUI5 App

To upload a single SAPUI5 app from your local file system, download a single SAPUI5 app to your local file system, or delete a single SAPUI5 app, use the report `/UI5/UI5_REPOSITORY_LOAD`.

Enter the name of the SAPUI5 app and specify whether you want to update, download, or delete it. You can also specify whether or not the line endings are adjusted automatically during the upload. In contrast to the ABAP team repository provider, the report does not offer a built-in code merge.

For more information, see the report documentation in your ABAP system.



## Uploading SAPUI5 Apps From an Archive

Prerequisite: The files to be uploaded are located on an HTTP web server.

-   To upload an SAPUI5 app from a zip or war archive, use the report `/UI5/UI5_REPOSITORY_LOAD_HTTP`.
-   To upload multiple SAPUI5 apps from a zip or war archive at once, use the report `/UI5/UI5_REPOSITORY_LOAD_HTTPN`.

Enter the relevant parameters and specify whether or not the line endings are adjusted automatically during the upload. You can also provide the parameters in the file `.Ui5RepositoryUploadParameters` located in the archive. Each line represents a parameter. The format is `<parameter name> = <parameter value>`.

If you use SAP Business Application Studio for developing apps, we recommend that you deploy your app as described here: [Deploy to the SAPUI5 ABAP Repository](https://help.sap.com/viewer/584e0bcbfd4a4aff91c815cefa0bce2d/Cloud/en-US/340cf0109ec6451c88f7a0129990de59.html).

If you use the `/UI5/UI5_REPOSITORY_LOAD_HTTP` and `/UI5/UI5_REPOSITORY_LOAD_HTTPN` reports to upload your project to the SAPUI5 ABAP repository instead, make sure that you upload only the content of the `webapp` or `dist` folder without the folder itself. This ensures that the`manifest.json` is in the root of the structure in the SAPUI5 ABAP repository and the app index can be loaded.

You can also specify whether the reports run in delta or in test mode:

-   Delta mode: You only want to upload the files that are new or that have been modified.
-   Test mode: You want to see a log file displaying what the report is doing.

> ### Note:  
> If you use the reports, the SAPUI5 application index is updated automatically and any errors are displayed. For more information, see [SAPUI5 Application Index](sapui5-application-index-c5e7098.md).

The functions of the reports are also available in the RFC-enabled function module `/UI5/REPO_LOAD_FROM_ZIP_URL`. It can be called remotely, for example, from Maven builds. For more information, see the documentation of the reports and of the function module `/UI5/REPO_LOAD_FROM_ZIP_URL`.

