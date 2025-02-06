<!-- loiobc1408934c7a44189feb8b6329a8e16f -->

# Data Sources

APF consumes OData services. These OData services can be based on different data sources:

-   Calculation views

-   ABAP CDS views

-   BW OData queries


When you use **calculation views**, APF and the APF Configuration Modeler only support the consumption of OData Version 2.0 services provided on SAP HANA extended application services \(SAP HANA XS\).

All required OData services must exist and must fulfill the following requirements:

-   The service definition must contain:

    ```
    annotations {
        enable OData4SAP;
    }
    ```

-   For each entity set you must specify the key words "aggregates always".

    In addition, for each entity set that corresponds to an analytical query view, the statement "keys generate local" must be included.

    Example:

    ```
    service  {
        "sap.hba.ecc/YearMonthQuery.calculationview" as "YearMonthQueryResults"
            keys generate local "GenID"       
            aggregates always;
    }
    ```


When you use **ABAP CDS views**, SAP HANA XS is not required. ABAP CDS views are exposed using the SADL framework and SAP NetWeaver Gateway.

For more information about CDS views, go to SAP Help Portal at [http://help.sap.com/](http://help.sap.com/) and search for "ABAP CDS Entitiy".

**BW OData queries** are required when you use APF in SAP BW on SAP HANA. For more information about BW OData queries, search for "Creating Easy Queries and Creating OData Queries: A Comparison" in the documentation for your SAP NetWeaver version on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).

