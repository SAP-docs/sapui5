<!-- loiob247999b1fb44f398f5d6ff63882657a -->

# Enhancing an APF-Based Application

You have installed an APF-based application that was shipped by SAP. If you want to make changes to the application, you can do so using the APF Configuration Modeler. Proceed as follows:

> ### Note:  
> Steps 1 through 8 are relevant for SAP Business Suite powered by SAP HANA only. If you use SAP S/4HANA, proceed with step 9.

1.  In your SAP Fiori frontend server system, run transaction `SE80`.

2.  In the Repository Browser, select `BSP Application` and enter the name of your Business Server Page \(BSP\) application.

3.  In the folder structure, open *Page Fragments* \> *config* and double-click the analytical configuration file to open it.

4.  Copy the entire content of the file and paste it into a text editor.

5.  Save the text file using the file extension `.json`.

6.  Go to *Page Fragments* \> *i18n* and double-click the .properties file for the required language.

7.  Copy the entire content of the file and paste it into a text editor.

8.  Save the text file using the file extension .properties.

9.  Import the JSON file and the `.properties` text file into the APF Configuration Modeler app in one of the following ways:

    -   If you use SAP Business Suite powered by SAP HANA, choose *Import* and specify the files you want to import.

        > ### Note:  
        > You can import the `.properties` file in any language. This allows you to switch the development language.

    -   If you use SAP S/4HANA, choose *Import Delivered Content* and select the desired configuration from the value help.

        > ### Note:  
        > You can import the `.properties` file in the development language only.


10. Make the required changes in the APF Configuration Modeler as explained under [APF Configuration Modeler](apf-configuration-modeler-b57224b.md) and save the configuration.

    For example:

    -   Change requests, for example, to replace the shipped data provisioning with your own one.
    -   Create new categories for the analysis step gallery.
    -   Reassign steps to other categories.
    -   Create new analysis steps.
    -   Add representation types to a step.
    -   Change filter configurations.
    -   Add or change navigation targets.

11. Ensure that the correct configuration has been specified in the tile definition. To do so, proceed as follows:
    -   For SAP Business Suite powered by SAP HANA:

        If you launch your application from a Smart Business KPI tile, ensure that the correct configuration is selected in the *Configure KPI Tiles* app.

        If you launch your application from a Fiori app launcher tile, maintain the configuration ID as the value for parameter `sap-apf-configuration-id`.

    -   For SAP S/4HANA:

        If you launch your application from a Smart Business KPI tile, ensure that the correct configuration is selected in the *Create Tile* app.

        If you launch your application from a Fiori app launcher tile, maintain the application ID and the configuration ID as the value for parameter `sap-apf-configuration-id` in the format *<application ID\>*.*<configuration ID\>*.


12. If you changed or created texts that must be translated into languages other than your development language, export the text pool into a .properties file and perform the file-based translation process.

**Related Information**  


[APF Configuration Modeler](apf-configuration-modeler-b57224b.md "")

[Configuring the SAP Smart Business KPI Tile](configuring-the-sap-smart-business-kpi-tile-374364e.md "")

[Import](import-6528aa8.md "")

[Translation](translation-4510c30.md "")

