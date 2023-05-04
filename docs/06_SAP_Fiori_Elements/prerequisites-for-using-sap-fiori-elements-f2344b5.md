<!-- loiof2344b5e78164b2b9c27ef8b068f295c -->

# Prerequisites for Using SAP Fiori Elements

To create an app using SAP Fiori elements, some prerequisites apply.

> ### Note:  
> SAP Fiori elements only supports a single service as the service behind the data for all its controls.
> 
> KPI tags used in the analytical list page and the `ValueHelp` annotation in SAP Fiori elements for OData V4 are exceptions to this rule.
> 
> Note the following for SAP Fiori elements for OData V4:
> 
> -   The service must support the following OData query options:
> 
>     -   `$count`
> 
>     -   `$skip`
> 
>     -   `$top`
> 
> 
> -   This requirement also applies to a value help service that is used via the `ValueListReference` annotation.



<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_emj_tc5_tqb"/>

## Tool Support

You can use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to build your apps. For more information about SAP Business Application Studio, see the documentation on the SAP Help Portal at [SAP Business Application Studio](https://help.sap.com/viewer/product/SAP%20Business%20Application%20Studio/Cloud/en-US).

> ### Note:  
> In SAP Fiori elements for OData V4, an edit scenario works in combination with a draft-enabled service.



<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_btp_xc5_tqb"/>

## Back End

For more information about building OData services, use the following links to access your required product and version:

-   [SAP S/4HANA: ABAP RESTful Application Programming Model](https://help.sap.com/viewer/fc4c71aa50014fd1b43721701471913d/latest/en-US)

-   [SAP BTP ABAP Environment: ABAP RESTful Application Programming Model](https://help.sap.com/viewer/923180ddb98240829d935862025004d6/Cloud/en-US/289477a81eec4d4e84c0302fb6835035.html)

-   [The SAP Cloud Application Programming Model](https://cap.cloud.sap/docs/)


> ### Note:  
> While CAP defaults to OData V4, the latest protocol version, some projects need to fallback to OData V2, for example, to keep using existing V2-based UIs.



<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_bkp_wdt_1rb"/>

## System Requirements

-   The development of new transactional apps with draft capabilities requires ABAP Application Server as of SAP NetWeaver AS for ABAP 7.51 innovation package SP02 or higher. Draft capabilities are not available with SAP NetWeaver AS for ABAP 7.50. For more information, see [Draft Handling](draft-handling-ed9aa41.md).

-   If you want to use annotations in CDS: SAP NetWeaver

    > ### Note:  
    > We recommend that you download the most up-to-date version to ensure that you have the latest features. 7.5 SP01 or higher.




<a name="loiof2344b5e78164b2b9c27ef8b068f295c__section_wnb_1d5_tqb"/>

## Tutorials

-   [https://developers.sap.com/group.fiori-tools-odata-v4-travel.html](https://developers.sap.com/group.fiori-tools-odata-v4-travel.html)
-   [https://developers.sap.com/group.fiori-tools-odata-v4-incident.html](https://developers.sap.com/group.fiori-tools-odata-v4-incident.html)

