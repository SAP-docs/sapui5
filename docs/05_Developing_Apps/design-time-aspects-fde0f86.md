<!-- loiofde0f8602258412dbb44f8770db7463b -->

# Design Time Aspects

You can upload and download files from and to the SAPUI5 ABAP repository with the following tools:

-   SAP Business Application Studio
-   SAP Web IDE
-   SAPUI5 repository upload and download reports
-   OData service \(upload only\)

We recommend to use SAP Business Application Studio for developing complex apps with the latest innovations. Some advantages of SAP Business Application Studio:

-   Uses Git for version control of the sources

-   Supports a client-side build that generates minified files and packages preload bundles to optimize start-up performance

-   Pushes the SAP Business Application Studio state to the ABAP system in a one-way, overwrite-all operation


Don't manually edit the BSP application representing a single SAPUI5 repository.

The SAPUI5 ABAP repository supports typical code pages for transferring of text files. However, there are some code pages that are not supported, for example code page `CP932` containing Japanese characters. If in doubt, we recommend that you encode the files transferred to the SAPUI5 ABAP repository in `UTF-8`.

**Related Links**

-   [SAP Business Application Studio](https://help.sap.com/viewer/product/SAP%2520Business%2520Application%2520Studio/Cloud/en-US)

-   [Using the SAPUI5 ABAP Repository Upload and Download Reports to Synchronize](using-the-sapui5-abap-repository-upload-and-download-reports-to-synchronize-a560bd6.md)

-   [Using an OData Service to Load Data to the SAPUI5 ABAP Repository](using-an-odata-service-to-load-data-to-the-sapui5-abap-repository-a883327.md)

