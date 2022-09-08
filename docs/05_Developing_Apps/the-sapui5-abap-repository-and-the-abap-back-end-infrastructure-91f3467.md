<!-- loio91f346786f4d1014b6dd926db0e91070 -->

# The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure

The SAPUI5 ABAP repository is used to store SAPUI5 apps, components, and libraries. SAP uses it for delivering various types of SAPUI5 apps, for example SAP Fiori or High Performance Analytics \(HPA\) apps. The SAPUI5 ABAP repository can also be used by customers to store their own SAPUI5 apps and extension projects.

> ### Note:  
> This chapter is only relevant if you're using the SAPUI5 ABAP repository and the ABAP back-end infrastructure.

The SAPUI5 ABAP repository is part of the SAPUI5 ABAP back-end infrastructure and is the umbrella term for the single SAPUI5 repository of each application. Technically, this infrastructure is based on the Business Server Page \(BSP\) repository and each SAPUI5 repository is represented by an individual BSP application.

> ### Caution:  
> For data integrity reasons, don't modify content of the SAPUI5 ABAP repository directly by editing the corresponding BSP applications in ABAP Workbench \(transaction `SE80`\). For more information, see [Technical Remarks](technical-remarks-5a814d9.md).

The BSP runtime is not used at runtime and SAPUI5-specific request handlers are used instead. Therefore, the flow logic ABAP parts cannot be used as they are not executed at runtime.

The SAPUI5 text repository is part of the SAPUI5 ABAP repository. It's intended to be used as fallback mechanism if translation by properties files is not possible.

> ### Note:  
> SAPUI5 distribution layer artifacts, such as control libraries, are not stored in the SAPUI5 ABAP repository, but in a separate repository \(technically based on the MIME repository\). The runtime access is realized by SAPUI5-specific request handlers.

The following design time tools use the SAPUI5 ABAP repository:

-   SAP Business Application Studio
-   SAP Web IDE
-   Special SAPUI5 repository upload and download reports
-   OData services

For more information, see [Design Time Aspects](design-time-aspects-fde0f86.md).



**Further Features of the SAPUI5 ABAP Back-End Infrastructure**

-   SAPUI5 application index addressing the following:

    -   Indexing content of the descriptor for applications, components, and libraries \(for example, used by SAP Fiori apps\)
    -   Cache busting on the level of single and multiple application resources

    Fore more information, see [SAPUI5 Application Index](sapui5-application-index-c5e7098.md).

-   Cache busting on the level of single and multiple application resources

    Which cache busting mechanisms are used, and in which cases, depends on the SAPUI5 app.

    For more information, see [Cache Behavior for Application Resources](cache-behavior-for-application-resources-5449990.md) and [Cache Buster for SAPUI5 Application Resources](cache-buster-for-sapui5-application-resources-4cfe7ef.md).




**Availability**


<table>
<tr>
<th valign="top">

What?



</th>
<th valign="top">

Available with ...



</th>
</tr>
<tr>
<td valign="top">

 SAPUI5 ABAP repository



</td>
<td valign="top">

SAP Business Suite systems from version 7.00 containing the user interface \(UI\) add-on for SAP NetWeaver, which contains the software component `UI_INFRA` 



</td>
</tr>
<tr>
<td valign="top">

Team repository provider \(available in Eclipse\)



</td>
<td valign="top">

SAP Business Suite systems from version 7.31 containing the UI add-on for SAP NetWeaver, which contains the software components `UI_INFRA` and `UI5_731`

> ### Note:  
> The team repository provider, which is part of the SAPUI5 tools for Eclipse, is no longer updated after SAPUI5 release 1.71. For more information, see [SAPUI5 Tools for Eclipse – Now is the Time to Look for Alternatives](https://blogs.sap.com/2019/11/26/sapui5-tools-for-eclipse-now-is-the-time-to-look-for-alternatives/).



</td>
</tr>
<tr>
<td valign="top">

 SAPUI5 repository upload and download reports \(alternative for the team repository provider with similar functions\)



</td>
<td valign="top">

SAP Business Suite system from version 7.00

For more information, see [Using the SAPUI5 ABAP Repository Upload and Download Reports to Synchronize](using-the-sapui5-abap-repository-upload-and-download-reports-to-synchronize-a560bd6.md).



</td>
</tr>
<tr>
<td valign="top">

 SAPUI5 control libraries



</td>
<td valign="top">

SAP Business Suite systems from version 7.00 containing the UI add-on for SAP NetWeaver in the software component `UISAPUI5` 



</td>
</tr>
</table>

> ### Note:  
> From SAP NetWeaver 7.4 SP1, all required SAPUI5 parts listed above are already part of software component `SAP_UI`.

-   **[Big Picture: How Does it All Work?](big-picture-how-does-it-all-work-fc4f8ef.md "The following image shows an overview of the main tools, repositories, APIs, and parts of the ABAP back end.")**  
The following image shows an overview of the main tools, repositories, APIs, and parts of the ABAP back end.
-   **[Technical Remarks](technical-remarks-5a814d9.md "Here are more details about the SAPUI5 ABAP repository, the runtime
		handler, and content-specific functionality.")**  
Here are more details about the SAPUI5 ABAP repository, the runtime handler, and content-specific functionality.
-   **[Design Time Aspects](design-time-aspects-fde0f86.md "You can upload and download files from and to the SAPUI5 ABAP repository with the
		following tools:")**  
You can upload and download files from and to the SAPUI5 ABAP repository with the following tools:
-   **[Using an OData Service to Load Data to the SAPUI5 ABAP Repository](using-an-odata-service-to-load-data-to-the-sapui5-abap-repository-a883327.md "You can use the OData service /UI5/ABAP_REPOSITORY_SRV to upload a
			SAPUI5 app, component, or
		library to the SAPUI5 ABAP
		repository.")**  
You can use the OData service `/UI5/ABAP_REPOSITORY_SRV` to upload a SAPUI5 app, component, or library to the SAPUI5 ABAP repository.
-   **[Using the SAPUI5 ABAP Repository Upload and Download Reports to Synchronize](using-the-sapui5-abap-repository-upload-and-download-reports-to-synchronize-a560bd6.md "You can upload an SAPUI5 app
		to or download it from the SAPUI5
		ABAP repository by using the SAPUI5 ABAP repository upload and download reports.")**  
You can upload an SAPUI5 app to or download it from the SAPUI5 ABAP repository by using the SAPUI5 ABAP repository upload and download reports.
-   **[Runtime Aspects](runtime-aspects-4ebecc2.md "The BSP runtime is not used. Instead there's an SAPUI5-specific handler to that gets
		the resources from the SAPUI5 ABAP
		repository. This handler is assigned to the corresponding ICF nodes.")**  
The BSP runtime is not used. Instead there's an SAPUI5-specific handler to that gets the resources from the SAPUI5 ABAP repository. This handler is assigned to the corresponding ICF nodes.
-   **[Fallback: Translating Apps Using the SAPUI5 Text Repository](fallback-translating-apps-using-the-sapui5-text-repository-5424938.md "As a fallback mechanism for translating apps, you can use the SAPUI5 text repository for storing
		the target texts.")**  
As a fallback mechanism for translating apps, you can use the SAPUI5 text repository for storing the target texts.
-   **[Securing the SAPUI5 ABAP Repository](securing-the-sapui5-abap-repository-91f3ecc.md "Here's everything you need to know about securing the SAPUI5 ABAP repository
		when using the team repository provider and the repository upload and download reports, when executing apps from the repository, when tracking
		code changes or text changes, or when using the SAPUI5 application index REST
		API.")**  
Here's everything you need to know about securing the SAPUI5 ABAP repository when using the team repository provider and the repository upload and download reports, when executing apps from the repository, when tracking code changes or text changes, or when using the SAPUI5 application index REST API.
-   **[SAPUI5 Application Index](sapui5-application-index-c5e7098.md "This index provides an indexing and caching mechanism for information related to apps,
		components, and libraries in the SAPUI5 ABAP repository and related to
		components and libraries in the SAPUI5 distribution
		layer.")**  
This index provides an indexing and caching mechanism for information related to apps, components, and libraries in the SAPUI5 ABAP repository and related to components and libraries in the SAPUI5 distribution layer.
-   **[Creating a Login Screen](creating-a-login-screen-a773d42.md "Here's how you configure a login screen for SAP Fiori launchpad.")**  
Here's how you configure a login screen for SAP Fiori launchpad.
-   **[Browser Debugging for ABAP Developers](browser-debugging-for-abap-developers-1e52fde.md "To debug in SAPUI5, use your browser's debugging tool.")**  
To debug in SAPUI5, use your browser's debugging tool.

