<!-- loio374364eb58444ac5b56b357808603f98 -->

# Configuring the SAP Smart Business KPI Tile

The following tasks are performed using the Smart Business modeler apps.

Prerequisites:

-   You have used the SAP Smart Business modeler apps to create the following:
    -   A KPI
    -   An evaluation
    -   A KPI tile

-   You have deployed a shipped APF-based application or created your own APF configuration that you want to launch using an SAP Smart Business KPI tile.

You can now configure the KPI tile using the SAP Smart Business modeler apps. The data you must enter depends on, among other things, whether you use shipped content or content you created yourself.

You can create a KPI tile for the following use cases:


<table>
<tr>
<th valign="top">

Use Case



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

Shipped APF-based application – unchanged



</td>
<td valign="top">

A shipped Business Server Pages \(BSP\) application that you use as is without making any changes.



</td>
</tr>
<tr>
<td valign="top">

Shipped APF-based application – enhanced



</td>
<td valign="top">

A shipped BSP application that you have enhanced, that is, you have imported the APF configuration and changed it using the APF Configuration Modeler.



</td>
</tr>
<tr>
<td valign="top">

Generic runtime application



</td>
<td valign="top">

The generic APF runtime application is used to execute an APF configuration that you created using the APF Configuration Modeler.



</td>
</tr>
<tr>
<td valign="top">

New application



</td>
<td valign="top">

An application you have created using the APF Configuration Modeler without using the generic runtime application.

This requires defining your own BSP application and target mapping.



</td>
</tr>
</table>

The data you must enter also depends on the SAP Smart Business KPI Modeler version you are using. There are two versions of the KPI Modeler available:

-   A KPI Modeler for apps that use calculation views, which is used for SAP Business Suite powered by SAP HANA.

-   A KPI Modeler for apps that use ABAP CDS views, which is available both for SAP Business Suite powered by SAP HANA and for SAP S/4HANA.


The following sections differentiate the data you must enter depending on the use cases and the KPI Modeler version mentioned above:



## Using the SAP Smart Business Modeler Apps for SAP Business Suite powered by SAP HANA

To configure a KPI tile for an APF-based application, open the *Configure KPI Tiles* app, go to the *Navigation* area and select the *Other Drill-Down* radio button. Select ***Analysis Path Framework*** as drill-down.

Depending on your use case, enter the following data:


<table>
<tr>
<th valign="top">

 



</th>
<th valign="top">

Shipped BSP Application - Unchanged



</th>
<th valign="top">

Shipped BSP Application – Enhanced



</th>
<th valign="top">

Generic Runtime Application



</th>
<th valign="top">

New Application



</th>
</tr>
<tr>
<td valign="top">

**Semantic Object**



</td>
<td valign="top">

As defined in target mapping of the application



</td>
<td valign="top">

As defined in target mapping of the application



</td>
<td valign="top">

Prefilled: FioriApplication



</td>
<td valign="top">

As defined in your own target mapping



</td>
</tr>
<tr>
<td valign="top">

**Action**



</td>
<td valign="top">

As defined in target mapping of the application



</td>
<td valign="top">

As defined in target mapping of the application



</td>
<td valign="top">

Prefilled: executeAPFConfiguration



</td>
<td valign="top">

As defined in your own target mapping



</td>
</tr>
<tr>
<td valign="top">

**Configuration**



</td>
<td valign="top">

Not applicable



</td>
<td valign="top">

Select the configuration you want to launch



</td>
<td valign="top">

Select the configuration you want to launch



</td>
<td valign="top">

Select the configuration you want to launch



</td>
</tr>
</table>

If you use a shipped BSP application, a KPI tile may have been shipped along with it. In this case, semantic object and action are already filled.

> ### Note:  
> We recommend copying the shipped KPI, evaluation, and tile. You can then adapt them to your needs.



### Shipped BSP-Application - Unchanged

If you want to launch a shipped APF-based application without making any changes to it, entering a configuration title is not required. The configuration can be read directly from the analytical configuration file of the BSP application. The location of this file is specified in the `manifest.json` file, which is part of the BSP application.



### Shipped BSP-Application - Enhanced

If you have imported the JSON file of a shipped application into the APF Configuration Modeler, ensure that the semantic object entered in the APF Configuration Modeler app is the same as the one you enter here. The semantic object and the action are used to determine the KPIs navigation target.

You must select a configuration to be able to launch the application. The corresponding configuration ID takes precedence over the location of the analytical configuration file of the BSP application. To select the configuration title, use the value help. The semantic object filters the list of configurations so that only those are listed that have been created for the specified semantic object. A configuration title has a corresponding configuration ID, which is unique.



### Generic Runtime Application

Selecting a configuration is also mandatory if you use the generic runtime application. The generic runtime application does not contain a reference to the location of the analytical configuration file and therefore must be parameterized using a configuration ID. To select the configuration title, use the value help. The semantic object filters the list of configurations so that only those are listed that have been created for the specified semantic object. A configuration title has a corresponding configuration ID, which is unique.



### New Application

If you have used the APF Configuration Modeler to create a new application, ensure that the semantic object entered in the APF Configuration Modeler app is the same as the one you enter here. The semantic object and the action are used to determine the KPIs navigation target.

To select the configuration title, use the value help. The semantic object filters the list of configurations so that only those are listed that have been created for the specified semantic object. A configuration title has a corresponding configuration ID, which is unique.



### Navigating to the APF Configuration Modeler

By clicking *Save and Configure Drill-Down*, you can navigate to the APF Configuration Modeler to view or edit the configuration. This is useful because from here you can navigate directly to the relevant configuration. You cannot search for a configuration in the APF Configuration Modeler itself.

> ### Note:  
> When you click *Save and Configure Drill-Down*, your changes are saved as draft, but not yet activated.



## Using the SAP Smart Business Modeler Apps for SAP S/4HANA

> ### Note:  
> The KPI Modeler for SAP S/4HANA may also be used on SAP Business Suite powered by SAP HANA.

To configure a KPI tile for an APF-based application in the SAP Smart Business modeler apps for SAP S/4HANA, open the *Create Tile* app and select your tile or create a new one. In the *Navigation* area, go to the *Select Drill-Down* field and select ***Analysis Path Framework***.

Depending on your use case, enter the following data:


<table>
<tr>
<th valign="top">

 



</th>
<th valign="top">

Shipped BSP Application – Enhanced



</th>
<th valign="top">

Generic Runtime Application



</th>
<th valign="top">

New Application



</th>
</tr>
<tr>
<td valign="top">

**Semantic Object**



</td>
<td valign="top">

As defined in target mapping of the application



</td>
<td valign="top">

 ***FioriApplication*** \(automatically filled based on selected configuration\)



</td>
<td valign="top">

As defined in your own target mapping



</td>
</tr>
<tr>
<td valign="top">

**Action**



</td>
<td valign="top">

As defined in target mapping of the application



</td>
<td valign="top">

 ***executeAPFConfigurationS4HANA*** or ***executeAPFConfiguration***\(automatically filled based on selected configuration.\)



</td>
<td valign="top">

As defined in your own target mapping



</td>
</tr>
<tr>
<td valign="top">

**Configuration**



</td>
<td valign="top">

Select the configuration you want to launch.



</td>
<td valign="top">

Select the configuration you want to launch.



</td>
<td valign="top">

Select the configuration you want to launch.



</td>
</tr>
</table>

If you use a shipped BSP application, a KPI tile may have been shipped along with it. In this case, semantic object and action are already filled.

> ### Note:  
> We recommend copying the shipped KPI, evaluation, and tile. You can then adapt them to your needs.

By clicking *Save and Configure Drill-Down*, you can navigate to the APF Configuration Modeler to view or edit the configuration. This is useful because from here you can navigate directly to the relevant configuration. You cannot search for a configuration in the APF Configuration Modeler itself.



## Launching an APF-Based Application from an SAP Smart Business Generic Drill-Down

Instead of launching an APF-based app from an SAP Smart Business KPI tile, you can first launch an SAP Smart Business generic drill-down app and then navigate to an APF-based app from there using the *Open In…* menu. In this case, filters set in the generic drill-down app are also handed over as context to the APF-based app.

To configure the navigation from a generic drill-down app to the APF-based app, proceed as follows:

1.  Open the *KPI Workspace* app.

2.  Choose your evaluation and switch to edit mode.

3.  Enter the semantic object and, optionally, an action.


> ### Note:  
> If you don’t have your own BSP application and target mapping, but use the APF generic runtime, you must create a target mapping that launches the generic runtime and specifies the configuration as follows:
> 
> -   Name: `sap-apfconfigurationid`
> 
> -   Value: configuration ID in format *<application ID\>*.*<configuration ID\>*
> 
> 
> You can find the values for the configuration ID in the following places:
> 
> -   application ID: in the app URL behind the parameter "app"
> 
> -   configuration ID: in the app URL behind the parameter “config” or in the configuration details in the APF Configuration Modeler app



## Application Parameters

You can configure your KPI tile in a way that it launches an APF-based application and immediately opens a specific analysis step and representation. You can do so by entering the following application parameters:

-   Analysis step:
    -   Name: `sap-apf-step-id`
    -   Value: step ID, for example, “Step-23”

-   Representation:
    -   Name: `sap-apf-representation-id`
    -   Value: representation ID, for example, “ Step-23-Representation-1”


You can look up the step ID and representation ID in the JSON file of the configuration. You may have to export your configuration first to get an up-to-date JSON file. You can also find the IDs in the URL of the APF Configuration Modeler while you are editing a step or representation. You can find the step ID behind the parameter "step" and the representation ID behind the parameter "repn".

Entering a step ID is sufficient; you don’t have to enter a representation ID. If you only enter a step ID, the default representation is used.

