<!-- loio331413d46f37413fa235bcfe64610721 -->

# Configuring the Fiori App Launcher Tile

You can use a Fiori app launcher tile to launch your APF-based application.



## Prerequisites

Mandatory HANA view parameters must be filled to be able to launch the application. This can be implemented in the BSP application by extracting the parameter values from the URL created by the Fiori app launcher tile. Another option is to configure a filter for a parameter. In this case, the user can set the values at runtime.



## Procedure

Configure the Fiori app launcher tile using the Fiori launchpad designer. For more information, search for "Setting Up Content With the Launchpad Designer" and "About Navigation" in the documentation for your SAP NetWeaver version on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](http://help.sap.com/).

If required, enter fixed values for the HANA view parameters in the Fiori tile. This is relevant for parameters that shall not be displayed in the application and for which you therefore do not configure filters.

If you want to specify a configuration ID, you can also enter it as a parameter. The parameter name is sap-apf-configuration-id.

For SAP S/4HANA, you must maintain the application ID and the configuration ID as value for parameter `sap-apf-configuration-id` in the format *<application ID\>*.*<configuration ID\>*.

If you have imported the JSON file of a shipped application into the APF Configuration Modeler, the configuration ID takes precedence over the location of the analytical configuration specified in the `manifest.json` file.

You can also use parameters to define that a specific analysis step is immediately opened when launching the APF-based application. To do so, enter the following parameter name and value pairs:

-   sap-apf-step-id=*<step ID\>*
-   sap-apf-representation-ID=*<representation ID\>*

Example:

-   sap-apf-step-id=Step-23
-   sap-apf-representation-ID=Step-23-Representation-1

You can look up the step ID and representation ID in the JSON file of the configuration. You may have to export your configuration first to get an up-to-date JSON file.

Entering a step ID is sufficient; you don’t have to enter a representation ID. If you only enter a step ID, the default representation is used, that is, the representation that comes first in the tree structure of the APF Configuration Modeler.

> ### Note:  
> You can define the parameters either in the tile configuration or in the corresponding target mapping.

