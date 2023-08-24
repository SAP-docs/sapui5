<!-- loio6528aa8787c94993a971697025cc4290 -->

# Import

To change the configuration of an APF-based application that was shipped by SAP, you must first import the corresponding JSON file as well as the text properties file into the APF Configuration Modeler.The options that are available for importing files depend on whether you use SAP Business Suite powered by SAP HANA or SAP S/4HANA.



## Importing Files on an SAP Business Suite powered by SAP HANA Platform

The following video shows how to import and export configurations:



[Open this video in a new window](https://www.kaltura.com/p/1921661/sp/192166100/embedIframeJs/uiconf_id/37285991/partner_id/1921661?iframeembed=true&playerId=kaltura_player&entry_id=1_umaqoyme) 

The files to be imported can either result from a configuration export or you can copy them from a shipped BSP application.

> ### Note:  
> Configuration files of APF-based applications that were not created using the APF Configuration Modeler cannot be imported. You can easily recognize these configuration files because they do not contain a configuration GUID.

To import the files, proceed as follows:

1.  In the toolbar of the *Application Overview* screen, click *Import*.
2.  Choose a configuration file for upload. The file must be in JSON format.
3.  Choose a text properties file for upload. The file must be in .properties format. It is also possible to upload a text properties file only, for example, after translation or to switch the development language.
4.  Click *Upload*.

During import, the content of the configuration file is written into a configuration table. The content of the text properties file is written into a text table.

If the application with the GUID specified in the JSON file does not yet exist in the APF Configuration Modeler, it is created and the description and semantic object are filled based on the information in the JSON file. Otherwise, the configuration of the JSON file is added to an existing application.

If a configuration with the same GUID already exists, you can decide whether you want to overwrite it or create a new one. You can now edit the configuration and save the changes.



## Importing Files on an SAP S/4HANA Platform

The following video shows how to import files on an SAP S/4HANA platform:



If you use SAP S/4HANA, you have the following options:

-   *Import Delivered Content*

-   *Import Files*


You can use *Import Files* to import files that result from a configuration export. The procedure is the same as described above for SAP Business Suite powered by SAP HANA.

If you want to import content that was delivered by SAP, you don’t have to copy the files from a BSP application. You can import them from the layered repository of SAPUI5 flexibility using the *Import Delivered Content* function.

The configuration file of a shipped application and the text properties file in the development language reside in the `VENDOR` layer of the layered repository. When you import the content, it is copied to the `CUSTOMER` layer. Changes you make to the configuration or the texts are also written into the `CUSTOMER` layer, so the original files in the `VENDOR` layer remain unchanged.

However, when a new version of a configuration is delivered with a support package, this update overwrites the version in the `VENDOR` layer, so in this case the version in the `CUSTOMER` layer remains unchanged. To see the updated version in the APF Configuration Modeler, you must first import the configuration again from the `VENDOR` layer into the `CUSTOMER` layer using the *Import Delivered Content* function.

> ### Caution:  
> When you have imported and edited a configuration and then later on import an updated version from the `VENDOR` layer, this new import overwrites the changes you have already made in the `CUSTOMER` layer. To prevent this, you can copy the configuration before editing it and then work on the copy.

At runtime, the system first checks whether there is a configuration file and a text properties file in the `CUSTOMER` layer. Only if there are no files in the `CUSTOMER` layer, is the application run from the files in the `VENDOR` layer.

**Related Information**  


[Enhancing an APF-Based Application](enhancing-an-apf-based-application-b247999.md "")

