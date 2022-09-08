<!-- loioc5e7098474274d3eb7379047ab792f1f -->

# SAPUI5 Application Index

This index provides an indexing and caching mechanism for information related to apps, components, and libraries in the SAPUI5 ABAP repository and related to components and libraries in the SAPUI5 distribution layer.

> ### Caution:  
> The index is used by several different services such as the SAP Fiori launchpad and cache buster. This means you have to make sure that the index is updated using the calculation report whenever the content of the SAPUI5 ABAP repository has changed. For more information whether the report is executed automatically or you have to run it manually, see [Calculation Report - Automatic Run vs. Manual Scheduling](calculation-report-automatic-run-vs-manual-scheduling-fbce0ba.md).
> 
> Also descriptor and component IDs used in single SAPUI5 repositories have to be unique and valid. Fore more information, see [Check Your SAPUI5 Application](check-your-sapui5-application-3dd3736.md).

The index makes it possible to retrieve and find this information significantly faster than when carrying out the calculations each time it's requested. The index is also required, for example, for finding the paths to SAP Fiori libraries.

The index contains the following:

-   Cache busting information on the level of single and multiple application resources

-   Certain properties or attributes \(for example, component ID, used library, or dependencies\) stored in the descriptor for apps, components, and libraries

    For more information, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](../04_Essentials/descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).


**Also in this section:**

[How is the Index Calculated?](how-is-the-index-calculated-8a4856a.md)

[Calculation Issues](calculation-issues-d2babc9.md)

[Monitoring](monitoring-7b89328.md)

-   **[How is the Index Calculated?](how-is-the-index-calculated-8a4856a.md "The index is calculated by the report Calculation of SAPUI5 Application Index
			for SAPUI5 Repositories (/UI5/APP_INDEX_CALCULATE). The
		index is empty initially and needs to be calculated from scratch.")**  
The index is calculated by the report *Calculation of SAPUI5 Application Index for SAPUI5 Repositories* \(`/UI5/APP_INDEX_CALCULATE`\). The index is empty initially and needs to be calculated from scratch.
-   **[Calculation Report - Automatic Run vs. Manual Scheduling](calculation-report-automatic-run-vs-manual-scheduling-fbce0ba.md "Changes to the content of the SAPUI5 ABAP repository require the
		index to be updated using the calculation report /UI5/APP_INDEX_CALCULATE.
		Depending on how the content of the repository is changed, the report is executed
		automatically or you have to run it manually.")**  
Changes to the content of the SAPUI5 ABAP repository require the index to be updated using the calculation report `/UI5/APP_INDEX_CALCULATE`. Depending on how the content of the repository is changed, the report is executed automatically or you have to run it manually.
-   **[Check Your SAPUI5 Application](check-your-sapui5-application-3dd3736.md "There are two checks you can do: Are my component IDs unique and valid? Does my app have
		the necessary SAPUI5 ICF node or
		are there unnecessary ICF nodes?")**  
There are two checks you can do: Are my component IDs unique and valid? Does my app have the necessary SAPUI5 ICF node or are there unnecessary ICF nodes?
-   **[Calculation Issues](calculation-issues-d2babc9.md "Any issues during the calculation of the index are written as messages to the
		application log.")**  
Any issues during the calculation of the index are written as messages to the application log.
-   **[Monitoring](monitoring-7b89328.md "To monitor the execution of the report /UI5/APP_INDEX_CALCULATE and the
		calculation results, you can use Computing Center Management System
		(CCMS).")**  
To monitor the execution of the report `/UI5/APP_INDEX_CALCULATE` and the calculation results, you can use Computing Center Management System \(CCMS\).

