<!-- loiof2344b5e78164b2b9c27ef8b068f295c -->

# Prerequisites for Using SAP Fiori Elements

To create an app using SAP Fiori elements, some prerequisites apply.

> ### Note:  
> SAP Fiori elements only supports a single service as the service behind the data for all its controls.
> 
> The `ValueHelp` annotation in SAP Fiori elements for OData V4, or KPI tags used in the analytical list page, are exceptions to this rule.



<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_emj_tc5_tqb"/>

## Tool Support

We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to build your apps.

In SAP Fiori elements for OData V2, you can also use SAP Web IDE to build UI applications when using SAP Fiori elements.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../05_Developing_Apps/app-development-using-sap-business-application-studio-6bbad66.md).

For more information about SAP Web IDE, see the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).

> ### Note:  
> In SAP Fiori elements for OData V4, an edit scenario works in combination with a draft-enabled service.



<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_btp_xc5_tqb"/>

## Back End

For more information about building OData services, use the following links to access your required product and version:

-   [SAP S/4HANA: ABAP RESTful Application Programming Model](https://help.sap.com/viewer/fc4c71aa50014fd1b43721701471913d/latest/en-US)

-   [SAP BTP ABAP Environment: ABAP RESTful Application Programming Model](https://help.sap.com/viewer/923180ddb98240829d935862025004d6/Cloud/en-US/289477a81eec4d4e84c0302fb6835035.html)

-   [The SAP Cloud Application Programming Model](https://cap.cloud.sap/docs/)

    > ### Note:  
    > If you want to build an app using CAP and SAP Fiori elements, you need to create an OData V4 CAP service. OData V2 CAP service is currently not supported.




<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_bkp_wdt_1rb"/>

## System Requirements

-   To extend your apps, use SAP Web IDE 1.17 or higher. For more information, search for *Annotation Modeler* in the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).

-   The development of new transactional apps with draft capabilities requires ABAP Application Server as of SAP NetWeaver AS for ABAP 7.51 innovation package SP02 or higher. Draft capabilities are not available with SAP NetWeaver AS for ABAP 7.50. For more information, see [Draft Handling](draft-handling-ed9aa41.md).

-   If you want to use annotations in CDS: SAP NetWeaver

    > ### Note:  
    > We recommend that you download the most up-to-date version to ensure that you have the latest features. 7.5 SP01 or higher.




<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_wnb_1d5_tqb"/>

## Tutorials

-   [https://developers.sap.com/group.fiori-tools-odata-v4-travel.html](https://developers.sap.com/group.fiori-tools-odata-v4-travel.html)
-   [https://developers.sap.com/group.fiori-tools-odata-v4-incident.html](https://developers.sap.com/group.fiori-tools-odata-v4-incident.html)

