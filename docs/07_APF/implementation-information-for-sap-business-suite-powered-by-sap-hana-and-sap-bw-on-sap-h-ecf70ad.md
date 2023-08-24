<!-- loioecf70adefd71445586b2fbe264306fdd -->

# Implementation Information for SAP Business Suite powered by SAP HANA and SAP BW on SAP HANA

The following products are required:

-   SAP Smart Business foundation component 1.0 \(SAP ANALYTICS FOUNDATION 1.0\)

    The following software component versions that are relevant for APF are included in this product and installed automatically:

    -   HANA CONTENT HBA APF CORE 100 \(technical name: HCO\_HBA\_R\_APF\_CORE\)

        This component contains the SAP HANA server part of APF.

    -   UISAFND1 100 SP01 \(technical name: UISAFND1\)

        This component contains the Fiori content for the APF Configuration Modeler.


    > ### Note:  
    > This product is also included in all SAP Smart Business products.

-   SAP HANA appliance software SPS08 or higher.



## Installation of APF on the Front-End Server

As of SAP NetWeaver 7.4, APF is part of software component User Interface Technology \(`SAP_UI`\) in SAP NetWeaver. For SAP NetWeaver 7.31 and lower releases, you install User Interface Add-On for SAP NetWeaver to use APF.



## Implementation of Fiori Content for APF

The following catalog, group, and role are relevant for the APF Configuration Modeler:

-   Catalog `SAP_APF_DT_TC_A`
-   Group `SAP_APF_DT_TCG_A`
-   Role `SAP_APF_DT_TCR_A`

The following catalog and role are relevant for the generic runtime application:

-   Catalog `SAP_APF_RT_TC_A`
-   Role `SAP_APF_RT_TCR_A`



## Implementation of SAP HANA Content for APF

The following role is relevant for the APF Configuration Modeler:

-   `sap.hba.r.apf.core.roles:AnalyticalConfiguration`

The following role is relevant for all APF-based applications :

-   `sap.hba.r.apf.core.roles::AnalysisPath`

