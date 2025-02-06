<!-- loioa110f762148a4933a33d30751a37a743 -->

# Migration Information for Upgrading the Manifest File

Information how to add new attributes of manifest \(also known as descriptor\) versions higher than V2 \(SAPUI5 1.30\) to the manifest file.


<table>
<tr>
<th valign="top">

Attribute

</th>
<th valign="top">

Version\*

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`sap.ui5/dependencies/minUI5Version`

</td>
<td valign="top">

V64 \(1.124\)

</td>
<td valign="top">

The attribute `minUI5Version` can now be an array of versions where each major version can only be included once. If you specify an array that contains more than one version, and if version 1 is included, it must be at least 1.120.x.

</td>
</tr>
<tr>
<td valign="top">

`sap.fiori/cloudDevAdaptationStatus` 

</td>
<td valign="top">

V51 \(1.110\)

</td>
<td valign="top">

Release status for the developer adaptation in SAP S/4HANA Cloud Public Edition and SAP BTP, ABAP environment \(SAP-internal\).

Supported types:

-   `released`
-   `deprecated`
-   `obsolete`
-   No value means not released .

For more information, see [Releasing an SAP Fiori Application to Be Extensible in Adaptation Projects on SAP S/4HANA Cloud and SAP BTP, ABAP Environment](https://help.sap.com/docs/bas/developing-sap-fiori-app-in-sap-business-application-studio/releasing-sap-fiori-application-to-be-extensible-in-adaptation-projects-on-sap-s-4hana-cloud).

</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/resources/js`

\(deprecated\)

</td>
<td valign="top">

V37 \(1.94\)

</td>
<td valign="top">

Since 1.94 the usage of `js` resources is deprecated. Please use regular dependencies instead.

</td>
</tr>
<tr>
<td valign="top">

`sap.app/dataSources/<sourceName>/settings/objects` 

</td>
<td valign="top">

V35 \(1.92\)

</td>
<td valign="top">

Dictionary of \(catalog\) objects offered by an INA datasource, consisting of:

-   `objectName`: Mandatory CDS view name / analytical query name
-   `objectType` - mandatory type of object \(`2C<DDICNAME>` or `CDSViewName`\); values: `query`, `cdsprojectionview`, `view`, `inamodel`
-   `packageName`: Name of the package
-   `schemaName`: Name of the schema

```
{
...
        "dataSources": {
            "cdsService": {
                "uri": "/sap/bc/ina/ina1/sap/example_cds",
                "type": "INA",
                "settings": {
                    "localUri": "localService/metadata.xml",
                    "objects": {
                        "assets": {
                            "objectName": "SAPFinAssets",
                            "objectType": "cdsprojectionview",
                            "packageName": "package",
                            "schemaName":  "schema"
                        },
                        "liabilities": {
                            "objectName": "SAPFinLiabilities",
                            "objectType": "cdsprojectionview"  
                        }
                    }
                }
            }
        },
...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.fiori/abstract` 

</td>
<td valign="top">

V32 \(1.87\)

</td>
<td valign="top">

Indicates whether an app is an abstract \(generic\) app, which may not used directly, but needs to be specialized in the SAP Fiori launchpad content.

```
{
...
    "sap.fiori": {
        "registrationIds": [
            "F1234"
        ],
        "archeType": "transactional",
        "abstract": false
    },
...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/models/<modelName>/settings/supportedLocales`

`sap.ui5/models/<modelName>/settings/fallbackLocale`

`sap.ui5/models/<modelName>/settings/terminologies`

</td>
<td valign="top">

V22 \(1.77\)

</td>
<td valign="top">

The `supportedLocales` and `fallbackLocale` settings can be specified with a list of supported locales and a fallback locale to define a language fallback chain and optimize the loading performance of resource bundles.

Additional resource bundles can be made available by defining `terminologies`.

```
{
   ...
   "models": {
      "i18n": {
         "type": "sap.ui.model.resource.ResourceModel",
         "settings": {
            "bundleName": "myapp.i18n.i18n",
            "supportedLocales": ["de", "en"],
            "fallbackLocale": "de",
            "terminologies": {
               "sports": {
                  "bundleUrl": "i18n/terminologies/sports/i18n.terminologies.sports.properties",
                  "bundleUrlRelativeTo": "manifest",
                  "supportedLocales": ["en", "de"]
               },
               "travel": {
                  "bundleUrl": "i18n/terminologies/travel/i18n.terminologies.travel.properties",
                  "bundleUrlRelativeTo": "manifest",
                  "supportedLocales": ["en", "de"]
               },
               "services": {
                  "bundleUrl": "i18n/terminologies/services/i18n.terminologies.services.properties",
                  "bundleUrlRelativeTo": "manifest",
                  "supportedLocales": ["en", "de"]
               }
            }
         }
      }
   }
   ...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/routing/propagateTitle` 

</td>
<td valign="top">

V20 \(1.75\)

</td>
<td valign="top">

The `propagateTitle` property can be set to forward title information from a nested component to the router in the root component.

```
{
   ...
   "componentUsages": {
      "myreuse": {
         "name": "reuse.component",
         ...
         }
      },
   "routing": {
      "config": {
      ...
      },
      "routes": [{
         "name": "home",
         "pattern": "",
         "target": {
            "name": "attachment",
            "prefix": "atch",
            "propagateTitle": true     
         }
      }],
      "targets": {
         "attachment": {
            "type": "Component",
            "usage": "myreuse",
            "options": {
               ...
            },
            ...
         }
      }
   }
   ...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/commands` 

</td>
<td valign="top">

V17 \(1.70\)

</td>
<td valign="top">

Specifies provided commands with a unique key/alias.

```
{
   ...
   "commands": {
      "Save": {
         "shortcut": "Ctrl+S"
      }
   },
   ...
}
```



</td>
</tr>
<tr>
<td valign="top">

<code>sap.ui5/routing/routes/targets/<i class="varname">&lt;targetName&gt;</i>/usage</code> 

</td>
<td valign="top">

V16 \(1.66\)

</td>
<td valign="top">

A component can be configured as a routing target by defining it in the `componentUsages` section and providing its key to a target via the `usage` property.

```
{
   ...
   "componentUsages": {
      "myreuse": {
         "name": "reuse.component",
         "settings": {},
         "componentData": {},
         "lazy": false
         }
      },
   "routing": {
      "config": {
      ...
      },
      "routes": [{
         "name": "home",
         "pattern": "",
         "target": {
            "name": "attachment",
            "prefix": "atch"     
         }
      }],
      "targets": {
         "attachment": {
            "type": "Component",
            "usage": "myreuse",
            "options": {
               // optional
               // define the additional parameter for
               // instantiating the component instance
            },
            "containerOptions": {
               // optional
               // define the additional parameter for
               // instantiating the component container
               // which enables the component to be rendered
               // in the parent control
            },
            "controlId": "page",
            "controlAggregation": "content"
         }
      }
   }
   ...
}
```



</td>
</tr>
<tr>
<td valign="top">

<code>sap.ui5/routing/routes/targets/<i class="varname">&lt;targetName&gt;</i>/type</code>

<code>sap.ui5/routing/routes/targets/<i class="varname">&lt;targetName&gt;</i>/path</code>

<code>sap.ui5/routing/routes/targets/<i class="varname">&lt;targetName&gt;</i>/name</code>

<code>sap.ui5/routing/routes/targets/<i class="varname">&lt;targetName&gt;</i>/id</code>

</td>
<td valign="top">

V15 \(1.62\)

</td>
<td valign="top">

A routing target can load either a view or a component.

With the `type` option set to "Component", the `Component.js` which is available under the namespace generated by combining `path` and `name` is loaded and instantiated.

```
{
    "routing": {
        "config": {
            ...
        },
        "routes": [
            ...
        ],
        "targets": {
            "/attachment/": {
                "type": "Component",
                "path": "reuse.component",
                "name": "attachment",
                "options": {
                    ...
                },
                "containerOptions": {
                    ...
                },
                "controlId": "page",
                "controlAggregation": "content"
            }
        }
    }
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/models/<modelName>/settings/enhanceWith` 

</td>
<td valign="top">

V12 \(1.56\)

</td>
<td valign="top">

The attribute `enhanceWith` can be specified with `bundleUrl`, `bundleUrlRelativeTo` \(either component \(default\) or manifest\) or `bundleName` to provide a list of additional resource bundle configurations to enhance the resource model with.

Additional attributes can be found in [Terminologies](terminologies-eba8d25.md).

```
{
   ...
   "models": {
      "i18n": {
          "type": "sap.ui.model.resource.ResourceModel",
          "uri": "i18n/i18n.properties",
          "settings": {
             "enhanceWith": [{
                "bundleUrl": "i18n/i18n.properties",
                "bundleUrlRelativeTo": "manifest"
             }]
          }
      },
      ...
   },
   ...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/componentUsages/lazy` 

</td>
<td valign="top">

V12 \(1.56\)

</td>
<td valign="top">

Indicates whether the component usage should be lazily loaded. Default value: `true`

For more information see:[Using and Nesting Components](using-and-nesting-components-346599f.md)

```
{
     ...
	"componentUsages": {
		"myusage": {
			"name": "my.used",
			"settings": {},
			"componentData": {},
			"lazy": false
		}
	},
     ...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/library/i18n` 

</td>
<td valign="top">

V10 \(1.52\)

</td>
<td valign="top">

Determines whether the library contains an i18n resource. The value can be either a boolean, a string, or \(since 1.78\) an object.

A string value represents a bundle URL. Relative URLs are always resolved to the library origin. If no value is set, the default `messagebundle.properties` file is loaded.

An object can contain additional resource bundle configuration, e.g. terminologies and supported locales. For the supported features and for sample definitions, see the respective entries at [Terminologies](terminologies-eba8d25.md) \(without `bundleUrlRelativeTo`\) and [Supported Locales and Fallback Chain](supported-locales-and-fallback-chain-ec753bc.md) .

> ### Note:  
> This attribute is beneficial if the name of the main resource bundle \(properties file\) used by your UI5 library differs from the default name `messagebundle.properties`

```
{
   ...
   "library": {
      "i18n": true
   },
   ...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/componentUsages` 

</td>
<td valign="top">

V8 \(1.48\)

</td>
<td valign="top">

Specifies the used components with the a unique key/alias. Contains the following:

-   `name`: Mandatory name of the reuse component

-   `settings`: Settings of the component

-   `componentData`: Component data of the component


For more information see:[Using and Nesting Components](using-and-nesting-components-346599f.md)

```
{
     ...
	"componentUsages": {
		"myusage": {
			"name": "my.used",
			"settings": {},
			"componentData": {}
		}
	},
     ...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/routing/routes/target` 

</td>
<td valign="top">

V6 \(1.42\)

</td>
<td valign="top">

Allows to define titles declaratively in the configuration \(`title` under `targets/<target>` and `titleTarget` under `routes/<route>`\), see [Routing and Navigation](routing-and-navigation-3d18f20.md)

```
{
	...,
	"routes": [{
		"pattern": "product/{id}/parts",
		"name": "ProductParts",
			"target": ["product", "productParts"],
		"titleTarget": "productParts"

	}],
	"targets": {
		"product": {
			"type": "View",
			"path": "shop.products",
			"name": "Product",
			"title": "Product"
		},
		"productParts": {
			"type": "View",
			"path": "shop.products",
			"name": "Product",
			"title": "Product Parts"
		}
	},
	...
}
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/models/preload` 

</td>
<td valign="top">

V5 \(1.38\)

</td>
<td valign="top">

Defines whether or not the model is initialized \(preloaded\) before the component instance is created and while loading the component preload and its dependencies

```
"equipment": { 
    "preload": true,
    "dataSource": "equipment",
     ...
}

```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/routing/config/async` 

</td>
<td valign="top">

V4 \(1.34\)

</td>
<td valign="top">

General setting for routing that indicates how the views are loaded; if set to `true`, the views are loaded asynchronously \(default is `false`\)

For performance reasons, we recommend to always use the `async` setting. This recommendation implies that you have followed the SAPUI5 programming model in general and do **not** rely on any sync-execution depending event-orders.

```
"sap.ui5": {
   "_version": "1.2.0",
   ...
    "routing": {
        "config": {
            "viewType": "XML",
            "async": true
        ...
        },
        ...
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui5/dependencies/components/<componentname>/lazy` and `dependencies/libs/<libname>/lazy` 

</td>
<td valign="top">

V4 \(1.34\)

</td>
<td valign="top">

If `dependencies/components/<componentname>/lazy` and `dependencies/libs/<libname>/lazy` are set to `true`, the attribute indicates in an SAP Fiori app that a dependency shall be lazy loaded \(default is `false`\), see the example for `manifest.json` for the SAP Fiori app.

Example for `manifest.json` for the SAP Fiori app:

```
"sap.ui5": {
   "_version": "1.2.0",
   ...
   "dependencies": {
        "minUI5Version": "1.34.0",
        "libs": {
            "sap.m": {
                "minVersion": "1.34.0"
            },
            "sap.ui.commons": {
                "minVersion": "1.34.0",
                "lazy": true
            }
        },
        "components": {
            "sap.ui.app.other": {
                "minVersion": "1.1.0"
                "lazy": true
            }
        }
    },
```



</td>
</tr>
<tr>
<td valign="top">

`sap.ui/fullWidth` 

</td>
<td valign="top">

V4 \(1.34\)

</td>
<td valign="top">

Indicates whether an app shall run in full screen mode \(`true`\)

```
"sap.ui": {
    "_version": "1.3.0",
    "technology": "UI5",
    ...
    "fullWidth": true
```



</td>
</tr>
<tr>
<td valign="top">

`sap.app/crossNavigation/inbounds/<inboundname>/subTitle` 

</td>
<td valign="top">

V4 \(1.34\)

</td>
<td valign="top">

Used to overwrite the `subTitle` attribute per inbound; use the `{{...}}` syntax to add the attribute to the `manifest.json` file

> ### Note:  
> Text symbols must be part of the properties file which is defined in `sap.app/i18n` \(default `"i18n/i18n.properties"`\).

```
"sap.app": {
    "_version": "1.3.0",
    ...
    "crossNavigation": {
        "inbounds": {
            "contactCreate":
                {
                    "semanticObject": "Contact",
                    "action": "create",
                    "icon": "sap-icon://add-contact",
                    "title": "{{title}}",
                    "subTitle": "{{subtitleOther}}",
```



</td>
</tr>
<tr>
<td valign="top">

`sap.app/subTitle` 

</td>
<td valign="top">

V4 \(1.34\)

</td>
<td valign="top">

Added to the `manifest.json` file by using the `{{...}}` syntax

> ### Note:  
> Text symbols must be part of the properties file which is defined in `sap.app/i18n` \(default `"i18n/i18n.properties"`\).

```
"sap.app": {
    "_version": "1.3.0",
    ...
    "title": "{{title}}",
    "subTitle": "{{subtitle}}",
```



</td>
</tr>
<tr>
<td valign="top">

`sap.app/crossNavigation` 

</td>
<td valign="top">

V3 \(1.32\)

</td>
<td valign="top">

Contains navigation information and is a mandatory attribute in the `manifest.json` file for SAP Fiori apps; the attribute contains two sections:

-   `sap.app/crossNavigation/inbounds` - Contains inbound intents and signature information

-   `sap.app/crossNavigation/outbounds` - Contains required intents that are called explicitely by the app, for example, if a business process is split among different apps A and B. If A calls B, A has outbound the intent to address B.




</td>
</tr>
<tr>
<td valign="top">

`_version` 

</td>
<td valign="top">

V3 \(1.32\)

</td>
<td valign="top">

Needs to be updated in the `manifest.json` file when migrating to a new manifest version:

-   `_version` for V3 is 1.2.0

-   `_version` for V4 is 1.3.0

-   `_version` for V5 is 1.4.0 \(see example\)


```
{
    "_version": "1.4.0",
    "sap.app": {
        ...
```



</td>
</tr>
</table>

\* Available as of manifest version \(SAPUI5 version\)

