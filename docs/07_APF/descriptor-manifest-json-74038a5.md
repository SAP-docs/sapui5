<!-- loio74038a52dcd7404e82b38be6d5fb1458 -->

# Descriptor \(manifest.json\)

As of SAPUI5 version 1.30, APF uses the `manifest.json` file as descriptor. It replaces the application configuration file. The `manifest.json` file defines static information about the application, such as the name of the application or the location of various files. It is written in JavaScript Object Notation \(JSON\) format.

> ### Note:  
> If your application still uses the application configuration file, you can skip this section.
> 
> You can also omit this step if you create an APF-based application using the generic APF runtime application because the `manifest.json` file is already contained in it. However, if you create your own BSP application with a component that extends `sap.apf.base.Component`, you must also create a `manifest.json` file.

> ### Note:  
> Customer modifications may conflict with the SAP namespace and can be overwritten when updates are imported.

For information about the structure and content of the `manifest.json` file, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](../04_Essentials/descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).

APF expects certain entries in the manifest of a component that extends `sap.apf.core.Component`. Entries for four different data sources have to be defined in the `sap.app` namespace:

-   For the data source `AnalyticalConfigurationLocation`, you must specify the location of the analytical configuration file. Enter the relative path from the Component.js.

-   The following three data sources are predefined and must not be changed:

    -   `PathPersistenceServiceRoot`

    -   `SmartBusiness`

    -   `LogicalSystem`


    The data sources differ depending on whether you use SAP Business Suite powered by SAP HANA, or SAP S/4HANA. The following table gives an overview about the relevant entries that you must use in your own `manifest.json` file:


    <table>
    <tr>
    <th valign="top">

    Data Source


    
    </th>
    <th valign="top">

    ...for SAP Business Suite powered by SAP HANA and SAP BW on SAP HANA


    
    </th>
    <th valign="top">

    ...for SAP S/4HANA 


    
    </th>
    </tr>
    <tr>
    <td valign="top">

    `PathPersistenceServiceRoot`


    
    </td>
    <td valign="top">

    `/sap/hba/r/apf/core/odata/apf.xsodata`


    
    </td>
    <td valign="top">

    `/sap/opu/odata/sap/BSANLY_APF_RUNTIME_SRV`


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    `SmartBusiness`


    
    </td>
    <td valign="top">

    `/sap/hba/r/sb/core/odata/runtime/SMART_BUSINESS.xsodata`


    
    </td>
    <td valign="top">

    Not required


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    `LogicalSystem`


    
    </td>
    <td valign="top">

    `/sap/hba/apps/wca/dso/s/odata/wca.xsodata`


    
    </td>
    <td valign="top">

    Not required


    
    </td>
    </tr>
    </table>
    

The `sap.app` namespace also contains the title of the application. This “title” entry references the text key `AnalyticalConfigurationName`. When you export the text pool from APF Configuration Modeler, the up-to-date configuration title is written into the .properties file with the text key `AnalyticalConfigurationName`. Ensure you also keep the location of the .properties file up to date in the `manifest.json` file \(entry “i18n”\). At runtime, this title is displayed as the browser tab title.



```
{
        "_version": "1.1.0",
        "sap.app": {
                "_version": "1.1.0",
                "id": "<component ID>",
                "type": "application",
                "i18n": "i18n/texts.properties",
                "title": "{{AnalyticalConfigurationName}}",
                "description": "{{<key in .properties file>}}",
                "applicationVersion": {
                        "version": "${project.version}"
                },
                "ach": "<ach>",
                "dataSources": {
                        "<data source for analytical request>": {
                                "uri": "<service root of analytical request>",
                                "type": "OData",
                                "settings": {
                                        "annotations": [
                                                "<annotation data source>"
                                        ],
                                        "odataVersion": "2.0"
                                }
                        },
                        "<annotation data source>": {
                                "uri": "<location of annotation file>",
                                "type": "ODataAnnotation",
                                "settings": {
                                        "localUri": "<location of local annotation file>"
                                }
                        },
                        "PathPersistenceServiceRoot": {
                                "uri": "<URI of path persistence>",
                                "type": "OData",
                                "settings": {
                                        "odataVersion": "2.0"
                                }
                        },
                        "SmartBusiness": {
                                "uri": "/sap/hba/r/sb/core/odata/runtime/SMART_BUSINESS.xsodata",
                                "type": "OData",
                                "settings": {
                                        "odataVersion": "2.0"
                                }
                        },
                        "LogicalSystem": {
                                "uri": "/sap/hba/apps/wca/dso/s/odata/wca.xsodata",
                                "type": "OData",
                                "settings": {
                                        "odataVersion": "2.0"
                                }
                        }
                },
                "AnalyticalConfigurationLocation": {
                        "uri": "./config/analyticalConfiguration.json",
                        "type": "JSON"
                },
                "resources": "resources.json",
                "offline": false
        },
        "sap.fiori": {
                "_version": "1.1.0",
                "registrationIds": [
                        "<FioriId>"
                ],
                "archeType": "analytical"
        },
        "sap.ui": {
                "_version": "1.1.0",
                "technology": "UI5",
                "deviceTypes": {
                        "desktop": true,
                        "tablet": true,
                        "phone": false
                },
                "supportedThemes": [
                        "sap_hcb",
                        "sap_belize"
                ]
        },
        "sap.ui5": {
                "_version": "1.1.0",
                "dependencies": {
                        "minUI5Version": "1.38.1",
                        "libs": {
                                "sap.ui.core": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                                },
                                "sap.ca.ui": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                                },
                                "sap.m": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                                },
                                "sap.ui.layout": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                               },
                                "sap.ushell": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                                },
                                "sap.apf": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                                },
                                "sap.viz": {
                                        "minVersion": "1.38.1"
                                        "lazy" : false
                                }
                        }
                },
                "extends": {
                        "component": "sap.apf.base"
                },
                "contentDensities": {
                        "compact": true,
                        "cozy": true
                },
                "models": {
                        "i18n": {
                                "type": "sap.ui.model.resource.ResourceModel",
                                "uri": "i18n/texts.properties"
                        }
                }
                "config": {
                        "sapFiori2Adaptation": true
                },
        }
}
```



## APF-Specific Settings

The following settings reside in the `sap.apf` name space:

```
"sap.apf": {
	"activateFilterReduction" : true,
	"activateLrep" : true,
	},

```

-    `activateFilterReduction`:

    This property is relevant if you use CDS views that are executed on the Analytic Engine or BW OData queries. It defines whether filters that are generated during a path update are reduced so that the Analytic Engine can handle them.

    Alternatively, you can use the equivalent boolean URL parameter `sap-apf-filter-reduction`, which you can set to true. If a URL parameter exists, it overrules the entry in the `manifest.json`. If you use the generic APF runtime application, you must use the URL parameter.

    If you use filter reduction, make sure you don't use more than one property in the filter mapping configuration.

-   `activateLrep`

    > ### Note:  
    > If you use SAP S/4HANA, this property is mandatory and must be set to ***true***.

    This property defines that the layered repository of SAPUI5 flexibility is used for persistence of the analytical configuration.


