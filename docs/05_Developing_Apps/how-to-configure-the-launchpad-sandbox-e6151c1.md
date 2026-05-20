<!-- loioe6151c12b51649dbb873802861d2a06c -->

# How to Configure the Launchpad Sandbox

Here's a complete reference of all configuration options available in the launchpad sandbox.



<a name="loioe6151c12b51649dbb873802861d2a06c__configuration-file"/>

## Configuration File

The sandbox can optionally be configured via a JSON file named `fioriSandboxAppConfig.json` placed in the same directory as your sandbox HTML file. The configuration file is not mandatory. The sandbox works without any additional configuration. Just set up the boot task/boot manifest in your HTML and you're ready to go. Default values are applied automatically. However, most applications will want to customize at least the `tiles` configuration to set the correct semantic object and action for their app.



<a name="loioe6151c12b51649dbb873802861d2a06c__default-behavior-no-configuration-file"/>

## Default Behavior \(Without Configuration File\)

When no `fioriSandboxAppConfig.json` is present, the sandbox uses these defaults:


<table>
<tr>
<th valign="top">

Option

</th>
<th valign="top">

Default Value

</th>
</tr>
<tr>
<td valign="top">

`tiles.semanticObject`

</td>
<td valign="top">

`"MyApp"`

</td>
</tr>
<tr>
<td valign="top">

`tiles.action`

</td>
<td valign="top">

`"display"`

</td>
</tr>
<tr>
<td valign="top">

`tiles.rootPath`

</td>
<td valign="top">

`"../"` \(parent directory of sandbox HTML\)

</td>
</tr>
<tr>
<td valign="top">

`rootIntent`

</td>
<td valign="top">

`"Shell-home"` \(shows FLP home page\)

</td>
</tr>
<tr>
<td valign="top">

`appStateMode`

</td>
<td valign="top">

`true` \(transient, not persisted\)

</td>
</tr>
<tr>
<td valign="top">

`plugins`

</td>
<td valign="top">

`{}` \(only RuntimeAuthoringPlugin loaded\)

</td>
</tr>
<tr>
<td valign="top">

`rta`

</td>
<td valign="top">

Not set \(only LocalStorageConnector used\)

</td>
</tr>
<tr>
<td valign="top">

`beforeFlpStart`

</td>
<td valign="top">

Not set

</td>
</tr>
</table>



<a name="loioe6151c12b51649dbb873802861d2a06c__tiles"/>

## Configuration Options



### tiles

Defines the apps that should be available in the sandbox.

-   Type: `Object` or `Array<Object>`
-   Default:

    ```
    {
        "tiles": [{
            "semanticObject": "MyApp",
            "action": "display"
        }]
    }
    ```

-   Properties


    <table>
    <tr>
    <th valign="top">

    Property
    
    </th>
    <th valign="top">

    Type
    
    </th>
    <th valign="top">

    Default
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `semanticObject`
    
    </td>
    <td valign="top">
    
    String
    
    </td>
    <td valign="top">
    
    `"MyApp"`
    
    </td>
    <td valign="top">
    
    The semantic object for navigation
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `action`
    
    </td>
    <td valign="top">
    
    String
    
    </td>
    <td valign="top">
    
    `"display"`
    
    </td>
    <td valign="top">
    
    The action for navigation
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `rootPath`
    
    </td>
    <td valign="top">
    
    String
    
    </td>
    <td valign="top">
    
    `"../"`
    
    </td>
    <td valign="top">
    
    Relative path to the application
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `parameters`
    
    </td>
    <td valign="top">
    
    Object
    
    </td>
    <td valign="top">
    
    `{}`
    
    </td>
    <td valign="top">
    
    Startup parameters for the app
    
    </td>
    </tr>
    </table>
    
-   **Examples**

    Single app:

    ```
    {
        "tiles": {
            "semanticObject": "SalesOrder",
            "action": "manage"
        }
    }
    ```

    Multiple apps:

    ```
    {
        "tiles": [
            {
                "semanticObject": "SalesOrder",
                "action": "display",
                "rootPath": "../"
            },
            {
                "semanticObject": "Product",
                "action": "manage",
                "rootPath": "../../product-app/"
            }
        ]
    }
    ```

    With parameters:

    ```
    {
        "tiles": [{
            "semanticObject": "Invoice",
            "action": "display",
            "parameters": {
                "company": "1000",
                "fiscalYear": "2024"
            }
        }]
    }
    ```




### rootIntent

Sets the initial navigation intent when the sandbox starts.

-   **Type**: `String`
-   **Default**: `"Shell-home"` \(shows the FLP home page\)
-   **Example**:

    ```
    {
        "rootIntent": "SalesOrder-display",
        "tiles": [{
            "semanticObject": "SalesOrder",
            "action": "display"
        }]
    }
    ```


This will directly open the SalesOrder-display app instead of showing the home page.



### appStateMode

Configures whether AppState should be transient \(not persisted\).

-   **Type**: `Boolean`

-   **Default**: `true` \(transient\)

-   **Example**:

    ```
    {
        "appStateMode": false
    }
    ```

    When set to `false`, AppState will be persisted to local storage.




### plugins

Configures additional bootstrap plugins to load.

-   **Type**: `Object`
-   **Default**`{}`: \(only RuntimeAuthoringPlugin is loaded by default\)
-   **Example**:

    ```
    {
        "plugins": {
            "MyCustomPlugin": {
                "component": "my.custom.Plugin",
                "config": {
                    "enabled": true
                }
            }
        }
    }
    ```




### rta

Configures Runtime Adaptation with a fake LREP connector.

-   **Type**: `String` \(path to JSON file\)
-   **Default**: Not set \(only LocalStorageConnector is used\)
-   **Example**:

    ```
    {
        "rta": "localService/fakeLrep.json"
    }
    ```

    This adds an `ObjectPathConnector` with the specified path to the flexibility services configuration.

-   **Fake LREP JSON Structure**:

    ```
    {
        "changes": [],
        "compVariants": [],
        "variants": []
    }
    ```




### beforeFlpStart

Specifies a module to execute before the FLP starts.

-   **Type**: `String` \(module path with `module:` prefix\)
-   **Default**: Not set
-   **Example**:

    ```
    {
        "beforeFlpStart": "module:myapp/test/mockServer"
    }
    ```

-   **Hook Module Requirements**:
    -   Must export an `execute` function
    -   May return a Promise \(sandbox waits for resolution\)

-   **Example of a Hook Module**:

    ```
    // myapp/test/mockServer.js
    sap.ui.define(["sap/ui/core/util/MockServer"],(MockServer)=>{return{execute:async()=>{const oMockServer =newMockServer({rootUri:"/sap/opu/odata/sap/MY_SERVICE/"});
                oMockServer.simulate("localService/metadata.xml",{sMockdataBaseUrl:"localService/mockdata"});
                oMockServer.start();
                console.log("Mock server started");}};});
    ```




## Complete Configuration Example

```
{
    "tiles": [
        {
            "semanticObject": "SalesOrder",
            "action": "display",
            "rootPath": "../",
            "parameters": {
                "mode": "view"
            }
        },
        {
            "semanticObject": "SalesOrder",
            "action": "create",
            "rootPath": "../"
        },
        {
            "semanticObject": "Customer",
            "action": "manage",
            "rootPath": "../../customer-app/"
        }
    ],
    "rootIntent": "SalesOrder-display",
    "appStateMode": true,
    "rta": "localService/fakeLrep.json",
    "beforeFlpStart": "module:myapp/test/initMockServer",
    "plugins": {
        "UsageAnalytics": {
            "component": "sap.ushell.plugins.usageAnalytics"
        }
    }
}
```



## HTML Bootstrap



### Recommended Bootstrap \(UI5 1.x and 2.x compatible\)

Use this bootstrap for compatibility with both UI5 versions:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>My App - FLP Sandbox</title>
    <!– Boot task for UI5 1.x (ignored in 2.x) →
    <!– Note: SandboxBootTask.js is deprecated since 1.136, but still required for 1.x bootstrap →
    <script src="resources/sap/ushell/sandbox/SandboxBootTask.js"></script>
    <!– UI5 bootstrap →
    <script
        id="sap-ui-bootstrap"
        src="resources/sap-ui-core.js"
        data-sap-ui-async="true"
        data-sap-ui-compat-version="edge"
        data-sap-ui-boot-manifest="sap/ushell/sandbox/sandboxManifest.json"
        data-sap-ui-theme="sap_horizon"
        data-sap-ui-resource-roots='{
            "my.app": "../"
        }'
    ></script>
</head>
<body class="sapUiBody">
    <div id="canvas"></div>
</body>
</html>
```



### How the Bootstrap Works


<table>
<tr>
<th valign="top">

Element

</th>
<th valign="top">

UI5 1.x Behavior

</th>
<th valign="top">

UI5 2.x Behavior

</th>
</tr>
<tr>
<td valign="top">

`SandboxBootTask.js`

</td>
<td valign="top">

Registers `xx-bootTask` which loads ConfigurationProvider

</td>
<td valign="top">

Script has no effect

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-boot-manifest`

</td>
<td valign="top">

Attribute is ignored

</td>
<td valign="top">

Loads `sandboxManifest.json` which registers ConfigurationProvider

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compat-version="edge"`

</td>
<td valign="top">

Required for modern APIs

</td>
<td valign="top">

Optional

</td>
</tr>
</table>

> ### Note:  
> Do NOT specify `data-sap-ui-on-init` manually. The ConfigurationProvider automatically provides `sapUiOnInit` pointing to `module:sap/ushell/sandbox/SandboxModule`.



### Bootstrap Attributes Reference


<table>
<tr>
<th valign="top">

Attribute

</th>
<th valign="top">

Required

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`data-sap-ui-async`

</td>
<td valign="top">

Yes

</td>
<td valign="top">

Must be `"true"` for async loading

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compat-version`

</td>
<td valign="top">

Yes \(1.x\)

</td>
<td valign="top">

Set to `"edge"` for modern APIs

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-boot-manifest`

</td>
<td valign="top">

Yes

</td>
<td valign="top">

Path to `sap/ushell/sandbox/sandboxManifest.json`

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-theme`

</td>
<td valign="top">

No

</td>
<td valign="top">

Initial theme \(default: `sap_horizon`\)

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-resource-roots`

</td>
<td valign="top">

No

</td>
<td valign="top">

Custom namespace mappings

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-libs`

</td>
<td valign="top">

No

</td>
<td valign="top">

Additional libraries to preload

</td>
</tr>
</table>



<a name="loioe6151c12b51649dbb873802861d2a06c__information-extracted-from-manifestjson"/>

## Information Extracted from manifest.json

The sandbox automatically reads these values from your app's `manifest.json`:


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Source

</th>
<th valign="top">

Fallback

</th>
</tr>
<tr>
<td valign="top">

Application ID

</td>
<td valign="top">

`sap.app.id`

</td>
<td valign="top">

`sap.ushell.sandbox.BusinessApp`

</td>
</tr>
<tr>
<td valign="top">

Title

</td>
<td valign="top">

`sap.app.title`

</td>
<td valign="top">

Last segment of app ID

</td>
</tr>
<tr>
<td valign="top">

Subtitle

</td>
<td valign="top">

`sap.app.description`

</td>
<td valign="top">

Empty string

</td>
</tr>
<tr>
<td valign="top">

Icon

</td>
<td valign="top">

`sap.ui.icons.icon`

</td>
<td valign="top">

`sap-icon://Fiori2/F0018`

</td>
</tr>
<tr>
<td valign="top">

Device Types

</td>
<td valign="top">

`sap.ui.deviceTypes`

</td>
<td valign="top">

All devices enabled

</td>
</tr>
</table>

> ### Note:  
> i18n placeholders \(e.g., `{{title}}`\) are automatically resolved.



<a name="loioe6151c12b51649dbb873802861d2a06c__invalid-json-syntax"/>

## Troubleshooting Configuration Issues



### Invalid JSON syntax

**Solution**: Validate your JSON at [jsonlint.com](https://jsonlint.com/)



### App not appearing on home page

1.  Check `rootPath` points to the correct location
2.  Verify `manifest.json` is accessible
3.  Check browser console for errors



### Conflicting configuration error

**Error message**: "It's not allowed to configure the sandbox providing configuration directly to the ushell config object 'sap-ushell-config'. Please provide sandbox specific configuration using 'fioriSandboxAppConfig.json'."

**Solution**: Remove any `window["sap-ushell-config"]` assignments from your HTML or scripts.

