<!-- loio3a9babace121497abea8f0ea66e156d9 -->

# Creating a Descriptor File for Existing Apps

Detailed description of the steps needed to create a descriptor V2 for applications file for an existing transactional app created by the customer based on SAP Fiori.

1.  Create the `manifest.json` file.

    You create the file in the web context root of your app on the same level as the `Component.js` file, using the content according to the instructions described from step 2 onwards. You can use the following code sample as a template. Make sure that you exchange or remove all placeholders \(`<...>`\) according to the instructions below.

    ```
    
    {
        "_version": "1.35.0",
    	
    	"start_url": "<startUrl>",
    	
        "sap.app": {
            "id": "<id>",
            "type": "application",
            "i18n": "<i18nPathRelativeToManifest>",
            "applicationVersion": {
                "version": "<version>"
            },
            "title": "{{<title>}}",
            "tags": {
                "keywords": [
                    "{{<keyword1>}}", "{{<keyword2>}}"
                ]
            },
            "dataSources": {
                "<dataSourceAlias>": {
                    "uri": "<uri>",
                    "settings": {
                        "localUri": "<localUri>"
                    }
                }
            }
        },
        "sap.ui": {
            "icons": {
                "icon": "<icon>",
                "favIcon": "<favIcon>",
                "phone": "<phone>",
                "phone@2": "<phone@2>",
                "tablet": "<tablet>",
                "tablet@2": "<tablet@2>"
            },
            "deviceTypes": {
                "desktop": true,
                "tablet": true,
                "phone": true
            },
            "supportedThemes": [
                "sap_hcb",
                "sap_belize"
            ]
        },
        "sap.ui5": {
            "resources": {
                "css": [
                    {
                        "uri": "<uri>",
                        "id": "<id>"
                    }
                ]
            },
            "dependencies": {
                "minUI5Version": "<minUI5Version>",
                "libs": {
                    "<ui5lib1>": {                   
                        "minVersion": "<minVersion1>"
                    },
                    "<ui5lib2>": {                   
                        "minVersion": "<minVersion2>"
                    }
                },
                "components": {
                    "<ui5component1>": {
                        "minVersion": "<minComp1Version>"
                    }
                }
            },
            "models": {
                "i18n": {
                    "type": "sap.ui.model.resource.ResourceModel",
                    "uri": "<uriRelativeToManifest>"
                },
                "": {
                    "dataSource": "<dataSourceAlias>",
                    "settings": {}
                }
            },
            "rootView": "<rootView>",
            "handleValidation": <true|false>,
            "config": {
              
            },
            "routing": {
              
            },
            "extends": {
                "component" : "<extendedComponentId>",
    			"minVersion": "<minComp1Version>",
    			"extensions": {}
            }
            "contentDensities": {
                "compact": <true|false>,
                "cozy": <true|false>
            }
        },
    
        "sap.platform.abap": {
            "uri": "<uri>"
        },
        "sap.platform.hcp": {
            "uri": "<uri>"
        }
    }
    
    ```

2.  Fill the `start_url` \(W3C namespace\).

    If applicable, replace the `<start_url>` placeholder with the start URL of your app, for example `index.html`. If no start URL is shipped, remove the `"start_url"` section in the `manifest.json` file.

    ```js
    {
        "start_url": "index.html",
        ...
    }
    ```

3.  Fill the `id` and `applicationVersion/version` attributes of the `sap.app` namespace.

    > ### Caution:  
    > `id` in the `sap.app` namespace must correspond to the component name in the `Component.js` file.

    To fill the ID and version information, open the `Component.js` file of your app and find the ID / namespace and version information:

    ```js
    sap.ui.define("cust.emp.myleaverequests.Component");
    sap.ui.require([
        "cust/emp/myleaverequests/Configuration", 
        "hcm/emp/myleaverequests/Component"], function(Configuration, ComponentBase) {
        ComponentBase.extend("cust.emp.myleaverequests.Component", { 
            metadata : {
                "name" : "My Leave Requests",
                "version" : "1.2.6"
                ...
    ```

    Open the `manifest.json` file and enter the values from the `Component.js` file as follows:

    -   Replace the `<id>` placeholder with the the id / namespace value from the argument of `sap.ui.define` \(`"cust.emp.myleaverequests.Component"` in the example above\).

    -   Replace the `<version>` placeholder with the `version` value \(`"1.2.6"` in the example above\).


    **Example: `sap.app/id` and `sap.app/applicationVersion/version` in the `manifest.json` file**:

    ```js
    "sap.app": {
        ...
        "id": "cust.emp.myleaverequests",
        ...
        "applicationVersion": {
            "version": "1.2.6"
        },
    
    ```

4.  Fill the `i18n` and `title` attributes of the `sap.app` namespace.

    You find the respective information in the `Component.js` file under `resourceBundle` for the `i18n` attribute, and under `titleResource` for the `title` attribute:

    ```js
    "config" : {
        "titleResource": "app.Identity",
        "resourceBundle": "i18n/i18n.properties",
    
    ```

    Open the `manifest.json` file and enter the values from the `Component.js` file as follows:

    -   Replace the `<title>` placeholder with the `titleResource` value \(`"app.Identity"` in the example above\)

    -   Replace the `<i18nPathRelativeToManifest>` placeholder with the `resourceBundle` value \(`"i18n/i18n.properties"` in the example above\).


    **Example: `sap.app/i18n` and `sap.app/title` in the `manifest.json` file**

    ```js
    "sap.app": {
        ...
        "i18n": "i18n/i18n.properties",
        ...
        "title": "{{app.Identity}}",
    
    ```

5.  Fill the `tags/keywords` attribute of the `sap.app` namespace.

    If you maintain keywords for the SAP Fiori launchpad tile configuration \(optional\), enter one or more text symbols from the `sap.app/i18n` file in the `keywords` attribute of the `manifest.json` file. If not, remove the tags/keywords section from the `manifest.json` file.

    **Example: `sap.app/tags/keywords` in the `manifest.json` file**

    ```js
    "sap.app": {
        ... 
        "tags": {
            "keywords": [
                "{{Leave}}"
            ]
        },
    
    ```

6.  Fill the `dataSource` attribute of the `sap.app` namespace with the data source you use for your app.

    For this, open the location where the service URL and the mock data source for the OData V2 mock server is defined.

    -   Open the `Component.js` file of your app to see the data source under `serviceUrl`, see the following example for `name`, `serviceUrl` and mock data URL in `Component.js`:

        ```js
        metadata : {
            ...
            "config" : {
                ...           
                "serviceConfig" : {
                    name: "LEAVEREQUEST",
                    serviceUrl: "/sap/opu/odata/GBHCM/LEAVEREQUEST;v=2/"
                }
            },
        ...
         
        init : function() {
            ...
                oMockServer.simulate(rootPath + "/model/metadata.xml", rootPath + "/model/");
        ```


    Return to the `manifest.json` file and do the following:

    -   Enter the `name` value in the placeholder for `<dataSourceAlias>`.

    -   Enter the value from the `serviceUrl` in the placeholder for `<uri>` to fill the value for the URI attribute.

    -   Enter the value from the URI of `oMockServer.simulate...` in the `Component.js` file in the placeholder for `<localUri>` to fill the value for the `localUri` attribute.


    **Example: `dataSources` with alias and URI in the `sap.app` namespace of the `manifest.json` file**

    ```js
    "sap.app": {
        ...       
        "dataSources": {
            "LEAVEREQUEST": {
                "uri": "/sap/opu/odata/GBHCM/LEAVEREQUEST;v=2/",
                "settings": {
                    "localUri": "model/metadata.xml"
                }
            }
        }
    ```

7.  Fill the `icons` attribute of the `sap.ui` namespace.

    Open the `Component.js` file of your app to see the `icons` in the `config` section.

    **Example: `icons` in the `Component.js` file:**

    ```js
    "config" : {
        ...
        "icon": "sap-icon://Fiori2/F0394",
        "favIcon": "./resources/sap/ca/ui/themes/base/img/favicon/My_Leave_Requests.ico",
        "homeScreenIconPhone": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/57_iPhone_Desktop_Launch.png",
        "homeScreenIconPhone@2": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/114_iPhone-Retina_Web_Clip.png",
        "homeScreenIconTablet": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/72_iPad_Desktop_Launch.png",
        "homeScreenIconTablet@2": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/144_iPad_Retina_Web_Clip.png"
    },
    ```

    Return to the `manifest.json` file:

    -   Enter the `icon` value in the `<icon>` placeholder.

    -   Enter the `favIcon` value in the `<favIcon>` placeholder.

    -   Enter the `homeScreenIconPhone` value in the `<phone>` placeholder. Do the same for the `<phone@2>`, `<tablet>` and `<tablet@2>` placeholders.


    **Example: `icons` in the `sap.ui` namespace of the `manifest.json` file**

    ```js
    "sap.ui": {
        ...
        "icons": {
            "icon": "sap-icon://Fiori2/F0394",
            "favIcon": "./resources/sap/ca/ui/themes/base/img/favicon/My_Leave_Requests.ico",
            "phone": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/57_iPhone_Desktop_Launch.png",
            "phone@2": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/114_iPhone-Retina_Web_Clip.png",
            "tablet": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/72_iPad_Desktop_Launch.png",
            "tablet@2": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/144_iPad_Retina_Web_Clip.png"
        },
    ```

    If your app does not have icons, remove the icons section or the corresponding icon attributes from the `manifest.json` file.

8.  Fill the `deviceTypes` and `supportedThemes` attributes in the `sap.ui` namespace in the `manifest.json` file.

    Return to the `manifest.json` file and ensure that the `deviceTypes` and `supportedThemes` attributes in the `manifest.json` are correct for your application. If not, adapt the entries accordingly.

    **Example: `deviceTypes` and `supportedThemes` in the `sap.ui` namespace in the `manifest.json` file**

    ```js
    "sap.ui": {
        ...       
        "deviceTypes": {
            "desktop": true,
            "tablet": true,
            "phone": true
        },
        "supportedThemes": [
            "sap_hcb",
            "sap_belize"
        ]
    ```

9.  Fill the `resources` attribute in the `sap.ui5` namespace.

    Open the `Component.js` file of your app to see the js and CSS resources under `includes`.

    **Example: `includes` in the `Component.js` file**

    ```js
    "includes": ["css/shopStyles.css", "myfile.js"],
    ```

    Return to the `manifest.json` file:

    -   Enter the js resource value under `"js"` in the `<uri>` placeholder.

    -   Enter the CSS resource value under `"css"` in the `<uri>` placeholder.


    > ### Note:  
    > Since 1.94 the usage of `js` resources is deprecated. Please use regular `dependencies` instead.

    **Example: `resources` attribute in the `sap.ui` namespace in the `manifest.json` file**

    ```js
    "sap.ui5": {
        ...
        "resources": {
            "js": [
                {
                    "uri": "myfile.js"
                }
            ],
            "css": [
                {
                    "uri": "css/shopStyles.css"
                }
            ]
        },
    ```

    > ### Note:  
    > The format in the `Component.js` file is an array, whereas the format in the `manifest.json` file is a map.

    If your app does not include resources, remove the `resources` section from the `manifest.json` file.

10. Fill the `dependecies` attribute of the `sap.ui5` namespace with the SAPUI5 dependencies that are used.

    Open the `Component.js` file of your app to see the dependencies for the `ui5` libs and components.

    **Example: `dependencies` in the `Component.js` file**

    ```js
    "dependencies": {
        "libs": [
            "sap.m",
            "sap.me"
        ],
        "components": ["sap.app.otherComponent"]
    } 
    ```

    Return to the `manifest.json` file and fill the corresponding entries in the `manifest.json`. Enter a value for the minimum SAPUI5 version in the `<ui5Version>` placeholder.

    > ### Caution:  
    > The format in the `Component.js` file is an array, whereas the format in the `manifest.json` file is a map. Ensure that **all** of the SAPUI5 libraries used by your app are mentioned under libs. Also make sure that all of the SAPUI5 components used by your app are mentioned under `components`. If there are no dependent components, remove the `components` entry.

    **Example: `dependencies` in the `sap.ui5` namespace in the `manifest.json` file**

    ```js
    "sap.ui5": {
        ...
        "dependencies": {
            "minUI5Version": "1.30",
            "libs": {
                "sap.m": {                   
                    "minVersion": "1.30"
                },
                "sap.me": {                   
                    "minVersion": "1.30"
                }
            },
            "components": {
                "sap.app.otherComponent": {                   
                    "minVersion": "1.2.0"
                }
            }
        },
    ```

    If your app requires a minimum version of a lib or component, specify the version under `minVersion` for information purposes. If not, remove the `minVersion` attribute.

11. Fill the `models` attribute of the `sap.ui5` namespace.

    If a `model` is entered in `sap.ui5/models` in the `manifest.json` file, SAPUI5 creates the model automatically and the coding for model creation inside the app can be removed.

    **Example: `model` creation in `Component.js`:**

    ```js
    init : function() {
        ...
        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : rootPath + "/i18n/i18n.properties"
        });
        this.setModel(i18nModel, "i18n");
         
        // set data model
        var m = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
        this.setModel(m);
    ```

    Return to the `manifest.json` file:

    -   i18n model

        Use the same model name as in the `Component.js` file, for example "i18n", and the type `sap.ui.model.resource.ResourceModel`. Enter the URI from the `Component.js` file in the `<uriRelativeToManifest>` placeholder relative to `manifest.json`, for example, `i18n/i18n.properties`

    -   OData model

        Use the same model name as in the `Component.js` file, for example "leave" or "" for the default model. Enter a reference to a data source from `sap.app/dataSource` in the `<dataSourceAlias>` placeholder; if needed, enhance it with more settings for SAPUI5.


    **Example: Models in the `sap.ui5` namespace in the `manifest.json` file**

    ```js
    "sap.ui5": {
        ...
        "models": {
            "i18n": {
                "type": "sap.ui.model.resource.ResourceModel",
                "uri": "i18n/i18n.properties"
            },
            "": {
                "dataSource": "LEAVEREQUEST",
                "settings": {
                }
            }
        },
    ```

12. Fill the `rootView`, `handleValidation`, `config` and `routing` attributes in the `sap.ui5` namespace.

    Open the `Component.js` file of your app to see the `rootView`, `handleValidation`, `routing`, `config` in the component metadata section.

    **Example: `rootView`, `handleValidation`, `config`, `routing` in `sap.ui5` namespace of the `manifest.json` file:**

    ```js
        ...
        "rootView": "myRootView",
        "handleValidation": true,
        "config": {
            ...
        },
        "routing": {
            ...
        }
    ```

    Return to the `manifest.json` file and copy this metadata from the `Component.js` file to the `sap.ui5` namespace in the `manifest.json` file.

    Only transfer those config parameters in the `config` section to the `manifest.json` file that have not yet been transferred in the steps before. In other words, do not transfer `resourceBundle`, `titleResource`, `icon`, `favicon`, `homeScreenIconPhone`, `homeScreenIconPhone2`, `homeScreenIconTablet` and `homeScreenIconTablet2`.

    **Example: `rootView`, `handleValidation`, `config` and `routing` in the `sap.ui5` namespace of the `manifest.json` file**

    ```js
    "sap.ui5": {
        ...
        "rootView": "myRootView",
        "handleValidation": true,
        "config": {
            ...
        },
        "routing": {
            ...
        },
    ```

    If there is no corresponding entry in the `Component.js` file, remove the section in the `manifest.json` file.

13. Fill the `extends` attribute of the `sap.ui5` namespace.

    Open the `Component.js` file of your app to see the component which your app extends:

    ```js
    
    hcm.emp.myleaverequests.Component.extend("cust.emp.myleaverequests.Component", {
    ```

    Return to the `manifest.json` file and enter the value from the `component` namespace in the `<extendedComponentId>` placeholder, for example `hcm.emp.myleaverequests`.

    **Example: `extends/component` in `sap.ui5` namespace in `manifest.json` file**

    ```js
    "sap.ui5": {
        ...
        "extends": {
            "component": "hcm.emp.myleaverequests",
            "minVersion": "1.1.0"
        }
    ```

    If your app requires a minimum version of a component, specify the version under `minVersion` for information purposes, otherwise remove the attribute. If your app uses the SAPUI5 extension concept with a `customizing` entry under component metadata in the `Component.js` file, move the content of that entry to `sap.ui5/extends/extensions` in the `manifest.json` file, or remove the `customizing` entry. If your app does **not** extend another component, remove the `extends` section from the `manifest.json` file.

14. Fill the `contentDensities` attribute of the `sap.ui5` namespace.

    Enter the correct values for the `compact` and `cozy` attributes \(`true` or `false`\) under `contentDensities` in the `manifest.json` file. The attributes specify the content density modes that your app supports, see [Content Densities](content-densities-e54f729.md).

    **Example: `contentDensities` in `sap.ui5` namespace of the `manifest.json` file:**

    ```js
    "sap.ui5": {
        ...       
        "contentDensities": {
            "compact": true,
            "cozy": true
        }
    ```

15. Verify that **no** placeholders exist.

    Return to the `manifest.json` file and make sure there are **no more** placeholders within it \(`<...>`\). If the file still contains placeholders, remove the corresponding sections.




## Code Changes

1.  Adapt the `Component.js` file.

    **Example: `Component.js` before making changes**

    ```js
    
    sap.ui.define("cust.emp.myleaverequests.Component");
    sap.ui.require([
        "cust/emp/myleaverequests/Configuration",
        "hcm/emp/myleaverequests/Component"], function(ComponentBase, Configuration) {
        ComponentBase.extend("hcm.emp.myleaverequests.Component", {
        	metadata : {
                "name" : "My Leave Requests",
                "version" : "...",
                "library" : "cust.emp.myleaverequests",
                "includes" : [],
                "dependencies" : {
                    "libs" : ["sap.m", "sap.me"],
                    "components" : ["sap.app.otherComponent"]
                },
                "rootView": ...,
                "handleValidation": ...,
                "config": {
                    ...
                },
                "routing": {
                    ...
                },
                "config" : {
                    "titleResource": "app.Identity",
                    "resourceBundle": "i18n/i18n.properties",
                    "icon": "sap-icon://Fiori2/F0394",
                    "favIcon": "./resources/sap/ca/ui/themes/base/img/favicon/My_Leave_Requests.ico",
                    "homeScreenIconPhone": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/57_iPhone_Desktop_Launch.png",
                    "homeScreenIconPhone@2": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/114_iPhone-Retina_Web_Clip.png",
                    "homeScreenIconTablet": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/72_iPad_Desktop_Launch.png",
                    "homeScreenIconTablet@2": "./resources/sap/ca/ui/themes/base/img/launchicon/My_Leave_Requests/144_iPad_Retina_Web_Clip.png"
                }
            }
        });
    });
    ```

    Apply the following changes:

    -   Comment or remove the line for the `require` statement for configuration \(if available\) `sap.ui.require("cust.emp.myleaverequests.Configuration");`

    -   Add the manifest reference to the metadata: `"manifest": "json"`.

    -   Remove the `name` section.

    -   Remove the `library` section.

    -   Remove the `version` section.

    -   Remove the `includes` section.

    -   Remove the `dependencies` section.

    -   Remove the `rootView` section.

    -   Remove the `handleValidation` section.

    -   Remove the `routing` section.

    -   Remove the `config` section.


    **Example: `Component.js` after making changes**

    ```js
    
    sap.ui.define("cust.emp.myleaverequests.Component");
    //sap.ui.require("cust.emp.myleaverequests.Configuration");
    sap.ui.require(["hcm/emp/myleaverequests/Component"], function(ComponentBase) {
    
        ComponentBase.extend("cust.emp.myleaverequests.Component", {
            metadata : {
                "manifest": "json",
                ...
    
    });
    ```

2.  Adapt the data source reference in the `Component.js` file.

    **Example: Data source reference in `Component.js` file before making changes**

    ```js
    metadata : {
        ...
        "config" : {
            ...           
            "serviceConfig" : {
                name: "LEAVEREQUEST",
                serviceUrl: "/sap/opu/odata/GBHCM/LEAVEREQUEST;v=2/"
            }
        },
    ...
     
    init : function() {
        ...
        var oServiceConfig = this.getMetadata().getConfig()["serviceConfig"];
        var sServiceUrl = oServiceConfig.serviceUrl;
        ...
        oMockServer.simulate(rootPath + "/model/metadata.xml", rootPath + "/model/");
    ```

    Apply the following changes:

    -   Remove `serviceConfig` under `config` in the component metadata.

    -   If you are still using the service URL in your coding for purposes other than model creation, change the lines for getting the service config / url and read the URI from the manifest via your component metadata, for example, `this.getMetadata().getManifestEntry("sap.app")...`; otherwise, remove that coding.

    -   Change the line for `oMockServer.simulate...` and read the URI from the manifest via your component metadata, for example, `this.getMetadata().getManifestEntry("sap.app")...`


    **Example: Data source reference in `Component.js` file after making changes**

    ```js
    metadata : {
        "manifest": "json",
        ...           
     
    init : function() {
        ...
        var sServiceUrl = this.getMetadata().getManifestEntry("sap.app").dataSources["LEAVEREQUEST"].uri;
        ...
        oMockServer.simulate(rootPath + "/" + this.getMetadata().getManifestEntry("sap.app").dataSources["LEAVEREQUEST"].settings.localUri, rootPath + "/model/");
    ```

3.  Remove the SAPUI5 model creation in the `Component.js` file.

    **Example: `Component.js` file before making changes**

    ```js
    init : function() {
        ...
        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : rootPath + "/i18n/i18n.properties"
        });
        this.setModel(i18nModel, "i18n");
         
        // set data model
        var m = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
        this.setModel(m);
    ```

    Apply the following changes:

    -   Delete the lines for the i18n model creation and model setting.

    -   Delete the lines for the data model creation and model setting.





## Smoke Test

To verify that your app works as before, perform checks to make sure the following is true:

-   OData service works as before

-   Mock data for OData V2 mock server works as before

-   Title, icons in SAP Fiori launchpad work as before

-   Navigation works as before


-   **[Migration Information for Upgrading the Descriptor File](migration-information-for-upgrading-the-descriptor-file-a110f76.md "Information how to add new attributes of descriptor versions higher than V2 (SAPUI5
		1.30) to the descriptor file.")**  
Information how to add new attributes of descriptor versions higher than V2 \(SAPUI5 1.30\) to the descriptor file.

