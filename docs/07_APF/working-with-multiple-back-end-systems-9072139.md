<!-- loio9072139676d740e7b05da293d5aa4269 -->

# Working with Multiple Back-End Systems

If you work with multiple back-end systems because, for example, you have a system landscape with regional back-end systems, you can use the `sap-system` parameter to ensure that SAP Gateway directs the OData service requests to the correct back-end system. For each back-end system, you can configure a SAP Fiori tile with the corresponding `sap-system` parameter, so you can have several tiles for the same APF-based app accessing data from different systems.

APF uses the general concept for SAP Fiori applications on multiple back-end systems. For more information, search for "Configuring Multiple Back-End Systems Using the sap-system Parameter" in the documentation of your SAP NetWeaver version on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).

In particular, you must do the following:

-   Assign all required back-end systems to your analytical OData services.

-   If you want to save your analysis paths on multiple back-end systems, you must also assign those back-end systems to the service `BSANLY_APF_RUNTIME_SRV`, which is used for path persistence.

-   If you use static app launcher tiles to launch an APF-based app, go to the tile configuration and add the parameter `sap-system=<SYSTEM_ALIAS>`. Create one tile for each back-end system you want to connect the app to. For each tile, enter the system alias of one back-end system as the `sap-system` parameter.

-   If you navigate to an APF-based app from somewhere else, for example, from a SAP Smart Business generic drill-down app that also uses the `sap-system` parameter, the `sap-system` parameter is handed over to APF via intent-based navigation.


As a result, APF interprets the `sap-system` parameter and reacts as follows:

-   All OData requests that are used when running an APF-based app are sent with an origin segment parameter `o` that corresponds to the specified `sap-system` parameter.

-   When navigating away from the APF-based app, the `sap-system` parameter is added to the URL of the navigation target.

-   When executing a configuration from the APF Configuration Modeler, the `sap-system` parameter is added to the URL of the generic runtime application.


