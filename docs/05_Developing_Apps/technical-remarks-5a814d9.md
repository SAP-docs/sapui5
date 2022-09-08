<!-- loio5a814d9945d148b0a1ad941791c3c723 -->

# Technical Remarks

Here are more details about the SAPUI5 ABAP repository, the runtime handler, and content-specific functionality.



## SAPUI5 ABAP Repository

The SAPUI5 ABAP repository uses BSP applications to store SAPUI5 apps, components, and libraries. To be precise, for text files it uses the page fragments and pages with flow logic of the BSP applications, and for binary files the MIME objects of the BSP applications.

As mentioned above, don't edit the BSP applications in transaction `SE80`. Instead use the appropriate development tools which use the SAPUI5 ABAP repository APIs to ensure the integrity of the data.

The SAPUI5 ABAP repository supports explorer-like file and folder structures. Therefore the BSP repository is enhanced accordingly to also support file and folder structures. This means that the sources of an app might look different in a BSP application compared to the corresponding single SAPUI5 repository when viewing it in SAP Business Application Studio:

-   Path mapping in XML \(`UI5RepositoryPathMapping.xml`\)
-   GUID-like or hash-like names
-   Texts looking different to the version at runtime:
    -   Trailing spaces in text lines are escaped with `&nbsp;` in the respective BSP pages.
    -   Lines longer than 254 characters are broken into multiple lines and get a plus \(+\) on position 255.

-   A BSP application representing a single SAPUI5 repository uses the application class `/UI5/CL_UI5_BSP_APPLICATION`.




## Runtime Handler

-   For runtime access, each single SAPUI5 repository has an ICF node beneath node `/sap/bc/ui5_ui5`.
-   Handler classes are assigned to node `/sap/bc/ui5_ui5` for the following purposes:
    -   Accessing SAPUI5 ABAP repository content
    -   SAPUI5 distribution layer including SAPUI5 core libraries




## Content-Specific Functionality

In general, the SAPUI5 ABAP repository and runtime access to resources do not make assumptions regarding its content. However, there are the following exceptions:

-   The `index.html` files are realized as pages with flow logic in the BSP application \(whereas all other text files are realized as page fragments\). In this way, they can be tested directly in transaction `SE80`.
-   There is a special logic for runtime handling of properties files \(resource bundles\) in the form of a server-side locale fallback. This means that if a properties file for a specific locale is requested and does not exist, the next matching properties file is returned.

