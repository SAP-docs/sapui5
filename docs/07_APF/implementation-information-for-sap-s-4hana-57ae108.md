<!-- loio57ae108454d643f6b6e1e364144b1433 -->

# Implementation Information for SAP S/4HANA

The following product is required: `SAP Fiori 1.0 for SAP S/4HANA SPS 01`

The Fiori content for the APF Configuration Modeler is contained in the following software component: `UIS4HOP1 100 SP01`



## Installation of APF on the Front-End Server

As of SAP NetWeaver 7.4, APF is part of software component User Interface Technology \(`SAP_UI`\) in SAP NetWeaver. For SAP NetWeaver 7.31 and lower releases, you install User Interface Add-On for SAP NetWeaver to use APF.



## Implementation of Fiori Content for APF

The following technical catalog contains all tiles and target mappings required for APF-related apps: `SAP_TC_CA_APF_COMMON` \(SAP: APF Technical Catalog\)

The following role, group, and catalogs are relevant for the APF Configuration Modeler:

-   Group `SAP_CA_BCG_APF_MODELING` \(Analysis Path Framework\)
-   Business Role `SAP_BR_ANALYTICS_SPECIALIST` \(Analytics Specialist\)

    This role has the following business catalogs assigned:

    -   `SAP_CA_BC_APF_MODELING` \(APF Modeling\) for the APF Configuration Modeler

    -   `SAP_CA_BC_APF_EXECUTION` \(APF Execution\) for the generic runtime application



The following catalog is relevant for the generic runtime application: `SAP_CA_BC_APF_EXECUTION` \(APF Execution\)

Assign this catalog to a role. Users that are assigned this role can then use the generic runtime application.



## Path Persistence on the Back-End Server

To enable the path persistence on the back-end server, you must ensure that the OData service `BSANLY_APF_RUNTIME_SRV` is activated. If you also use a front-end server, you must also activate the service there.

You can activate the service using transaction `/IWFND/MAINT_SERVICE`.

