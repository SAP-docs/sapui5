<!-- loio8594f6876efe4d90abbfb270e85842bf -->

# Authorization Information for SAP S/4HANA



## Configuration Persistence on the Front-End Server

Authorization object /UIF/LREP must be added to any role. Depending on what you want to do, select one of the following values for the field /UIF/ROLE of this authorization object:

-   To create configurations using the APF Configuration Modeler and to execute them, select APFADMIN.

-   To run a configuration, select APFUSER




## Path Persistence on the Back-End Server

To enable the path persistence on the back-end server, you must ensure that the user has the start authorization `S_SERVICE` for the OData service `BSANLY_APF_RUNTIME` both on the front-end server \(`IWSG`\) and on the back-end server \(`IWSV`\).

