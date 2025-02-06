<!-- loio8a4856a366284dac932b0f4fde3b3b17 -->

# How is the Index Calculated?

The index is calculated by the report *Calculation of SAPUI5 Application Index for SAPUI5 Repositories* \(`/UI5/APP_INDEX_CALCULATE`\). The index is empty initially and needs to be calculated from scratch.

The report `/UI5/APP_INDEX_CALCULATE` has to be executed in every system whenever the content of the SAPUI5 ABAP repository has changed. It's enough to run the report for one client per system. For more information whether the report is executed automatically or you have to run it manually, see [Calculation Report - Automatic Run vs. Manual Scheduling](calculation-report-automatic-run-vs-manual-scheduling-fbce0ba.md).

The report allows you to specify the basis for the calculation of the index. Here's what you can choose from:

-   Full update of all SAPUI5 repositories and the distribution layer regardless of any expiration dates

    This mode is active when you use the provided variant `SAP&ALL`.

    > ### Note:  
    > The *Full Calculation* option should only be used in exceptional cases. This will calculate the index of the entire SAPUI5 ABAP repository, even for content that hasn't changed.

-   Calculation for those repositories and the distribution layer for which either the expiration period you specified \(in hours and minutes\) has expired or where a transport changed the content of the repositories and the distribution layer since the last update \(delta mode\)

    This is the recommended mode. The default value for the expiration period is 24 hours.

    This mode is active when you use the provided variant `SAP&DELTA`.

    > ### Tip:  
    > We recommend to schedule a job to run this report with these settings every 15 minutes.

-   A single repository

-   The SAPUI5 distribution layer only


> ### Note:  
> The report `/UI5/APP_INDEX_CALCULATE` replaces the report `/UI5/UPDATE_CACHEBUSTER` used in the user interface add-on 1.0 for SAP NetWeaver.

