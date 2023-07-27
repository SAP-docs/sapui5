<!-- loio3aa60841f1d542088ae85fda131ff094 -->

# Using the Generic Runtime Application

This section describes how to create an APF-based application using the generic APF runtime application.

The generic application already contains important elements that are required for an APF-based application. For example, a BSP application along with the `manifest.json` file is already there so that you only need to create a configuration using the APF Configuration Modeler. In addition, the semantic object and the action, which you need to integrate the application with SAP Smart Business, are already defined for the generic application so that you can easily configure a Smart Business KPI tile to launch the app.

To create a configuration and run it using the generic runtime application, proceed as follows:

1.  Open the APF Configuration Modeler
2.  Click the + icon to create a new application and enter a description. The *Semantic Object* field is already filled with `FioriApplication`. Save your application.

    > ### Note:  
    > This step is not required if you use an already existing APF application and just create an additional configuration.

3.  Open the application. If the application does not yet have any configurations, you are immediately directed to the screen where you can define one. If you want to create an additional configuration, click *Add* \> *New Configuration*. Add categories, steps, representations, filters, and navigation targets as required and save your configuration.

4.  You can now execute your application immediately from the APF Configuration Modeler using the *Execute* button or you can launch it from a Smart Business KPI tile or a Fiori app launcher tile.

    > ### Note:  
    > A few restrictions apply with regards to the execute feature. For more information, see [Executing a Configuration](executing-a-configuration-69bed7d.md).




## Generic APF Runtime Application

The generic APF runtime application can be used to execute APF configurations that have been created with the APF Configuration Modeler.

Some restrictions exist for the generic APF runtime application:

-   You can run it in one language only. This is because the repository where the APF Configuration Modeler saves the configuration and the texts supports only a single language. The generic application reads texts from this repository and not from the text properties files.
-   It cannot have coded elements, such as additional footer elements.
-   Using functions for setting default values in the filters is not possible. You can, however, select any of the other default value modes when configuring the filters.

If you don’t need more than one language, a footer toolbar, nor a function for defaults in the filters, you can use the generic application to set up an APF-based application in a quick and easy way.



## Settings for the Generic APF Runtime Application

The following settings are relevant when you use the generic APF runtime application:

-   You must activate the service `af_apf_launch` using transaction `SICF` in the Fiori frontend server system.

-   If you use BW OData queries, set the URL parameter `sap-apf-filter-reduction` to `true`.


**Related Information**  


[APF Configuration Modeler](apf-configuration-modeler-b57224b.md "")

[Configuring the SAP Smart Business KPI Tile](configuring-the-sap-smart-business-kpi-tile-374364e.md "")

