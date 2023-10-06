<!-- loioa883327a82ef4cc792f3c1e7b7a48de8 -->

# Using an OData Service to Load Data to the SAPUI5 ABAP Repository

You can use the OData service `/UI5/ABAP_REPOSITORY_SRV` to upload a SAPUI5 app, component, or library to the SAPUI5 ABAP repository.



<a name="loioa883327a82ef4cc792f3c1e7b7a48de8__section_vvm_c1k_hmb"/>

## Prerequisites

-   Activate the `/UI5/ABAP_REPOSITORY_SRV` service in your back-end system as described here: [Activate and Maintain Services](https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/latest/en-US/bb2bfe50645c741ae10000000a423f68.html).

-   In transaction `SICF`, check for `/UI5/ABAP_REPOSITORY_SRV` that the `ui5` service \(namespace\) is activated as described here: [ICF Services](https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/latest/en-US/a5f72651c294256ee10000000a445394.html).



<a name="loioa883327a82ef4cc792f3c1e7b7a48de8__section_j3q_thz_rkb"/>

## Background

If you use a repository, for example git, and a build server, for example Jenkins, for the central coordination of your SAPUI5 developments, you can use the OData service `/UI5/ABAP_REPOSITORY_SRV` to upload the respective files that are collected in a zip file to the SAPUI5 ABAP repository. The OData service uploads the zip file to the SAP NetWeaver AS ABAP into a BSP application that is created or updated during the upload. This BSP application represents the SAPUI5 ABAP repository. From there, the app, for example, can be used in the SAP Fiori launchpad. The OData service `/UI5/ABAP_REPOSITORY_SRV` uses the SAP Gateway service builder project `/UI5/ABAP_REPOSITORY`.

The OData service offers the basic entity `Repository` and supports `GET`, `CREATE`, `UPDATE`, and `DELETE` operations. On return, the HTTP status reports either success or errors which may have occurred during the operation. The response header or the response body contain additional information.

The base64-encoded zip archive that contains the app, component, or library files is provided in the `ZipArchive` property. The operations `CREATE` and `UPDATE` use the file provided in the property for the operation. You use the `GET` method of the OData service to retrieve a basic XML form that you can use for the `CREATE` and `UPDATE` operations. To remove a SAPUI5 ABAP repository, you use the `DELETE` method that, if successful, deleted the corresponding BSP application and its SICF service and updates the SAPUI5 application index.



<a name="loioa883327a82ef4cc792f3c1e7b7a48de8__section_ysh_5hz_rkb"/>

## URL Parameters

The following URL parameters are provided for the communication of mandatory or optional parameters for the operations that are not part of the `Repository` entity itself:

-   `CodePage`: Contains the information about the code page of your text files, for example, `CodePage='UTF8'`

-   `TestMode`: If set to `TRUE`, the result shows which operations \(create, read, update, delete\) would be done in a real run for each file to help you make an informed decision. A successful `TestMode` execution does **not** necessarily mean that your upload will be successful.

-   `TransportRequest`: Specifies an ABAP transport request

-   `SafeMode` \(default setting: `false`\): Prevents accidentally breaking deployments. Example: If the deployment would overwrite a repository that contains an app with a different `sap.app/id` and `SafeMode` is `true`, HTTP status code `412 (Precondition Failed)` with further information would be returned.




### URL Parameters to Reduce the HTTP Response Header Size

If you want to reduce the HTTP response header size, for example because of the error message mentioned below, you can use the following URL parameters to the OData call:

-   `CondenseMessagesInHttpResponseHeader=X`

    This limits the number of detail messages for the load operation to 6. Any additional messages are omitted.

-   <code>DetailMessagesInHttpResponseHeaderUpTo=<i class="varname">&lt;number of detail messages&gt;</i></code>

    Enter the number of detail messages to be listed in the HTTP response header.




If you upload a zip archive containing a SAPUI5 app, component, or library into the SAP NetWeaver AS ABAP for deployment or for delivery, a SAPUI5 ABAP repository is created or updated and the Business Add-In \(BAdI\) *SAPUI5 Repository Load* \(`/UI5/BADI_REPOSITORY_LOAD`\) is called. You need to implement this BAdI on the SAP NetWeaver AS ABAP and use it to check and adjust the parameters that control the OData service, for example, if you want to determine or create an ABAP transport request automatically. For more information about the Business Add-In, see the BAdI documentation in the SAP system.

To further control the upload operation of the OData service, you can use the following text files in the archive to indicate file patterns to be ignored or file types to be recognized. The patterns have to be written as regular expressions.

> ### Note:  
> In regular expressions you can use `^` and `$` to ensure that the whole file path is taken into account. A `.` needs to be escaped to not match anything.
> 
> Example regex for the SVG file type:: `^.*\.svg$`

-   `'.Ui5RepositoryIgnore'`: Each line in this text file describes a pattern for files to be ignored during the upload. This setting overwrites the built-in default.

-   `'.Ui5RepositoryTextFiles'` and `'.Ui5RepositoryBinaryFiles'`: Each line in this text file describes a pattern for files to identify text or binary content, respectively, in addition to the built-in default. If it is not clear whether a file is text or binary, a warning is issued in the log and the file is not uploaded.


For testing the OData service, you can use the SAP NetWeaver AS ABAP with the SAP Gateway client \(transaction `/IWFND/GW_CLIENT`\).

> ### Note:  
> For operations on a SAPUI5 ABAP repository, you need the `S_DEVELOP` authorization.



### Error Message `io.netty.handler.codec.TooLongFrameException: HTTP header is larger than 8192 bytes`

You get this message if you use the SAP Cloud Connector to call `/UI5/ABAP_REPOSITORY_SRV` and your SAP Cloud Connector Configuration doesn't allow HTTP response headers larger than 8 kB \(which is the default setting\). You have two options to solve this:

-   Change the configuration of SAP Cloud Connector: Go to the installation directory of SAP Cloud Connector and open the XML file <code><i class="varname">&lt;sccdir&gt;</i>\scc_config\scc_config.ini</code>. Change the value for the parameter `httpProtocolProcessorMaxResponseHeaderSize` from `8` to `30` \(kB\). Restart the SAP Cloud Connector.
-   Use the URL parameters mentioned above to reduce the HTTP response header size.

For more information, see SAP Note [2875647](https://me.sap.com/notes/2875647).

**Related Information**  


[Activate and Maintain Services](https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/latest/en-US/bb2bfe50645c741ae10000000a423f68.html)

[ICF Services](https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/latest/en-US/a5f72651c294256ee10000000a445394.html)

[SAP Note 2875647](https://me.sap.com/notes/2875647 "SAPUI5 ABAP Repository Load via OData: URL parameters to reduce size of messages in HTTP response header")

