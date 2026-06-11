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



### Defining tiles

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

    Adding startup parameters:

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




### Setting the rootIntent

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



### Configuring the appStateMode

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




### Adding plugins

Configures additional bootstrap plugins to load.

-   **Type**: `Object`
-   **Default**:`{}` \(only RuntimeAuthoringPlugin is loaded by default\)
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




### Configuring the rta

Configures Runtime Adaptation with predefined adaptation data that is applied to the app.

-   **Type**: `String` \(path to JSON file\)
-   **Default**: Not set \(only LocalStorageConnector is used\)
-   **Example**:

    ```
    {
        "rta": "localService/runtimeAdaptations.json"
    }
    ```

-   **runtimeAdaptations.json structure**:

    ```
    {
        "changes": [],
        "compVariants": [],
        "variants": []
    }
    ```




### beforeFlpStart

Specifies a module to execute before the launchpad starts.

-   **Type**: `String` \(module path with `module:` prefix\)
-   **Default**: Not set
-   **Example**:

    ```
    {
        "beforeFlpStart": "module:myapp/test/mockServer"
    }
    ```

-   **Module Requirements**:
    -   Must export an `execute` function
    -   May return a Promise \(sandbox waits for resolution\)

-   **Example of a module**

    ```
    // myapp/test/mockServer.js
    sap.ui.define([
        "sap/ui/core/util/MockServer"
    ], (
        MockServer
    ) => {
        return {
            execute: async () => {
                const oMockServer = newMockServer({ rootUri: "/sap/opu/odata/sap/MY_SERVICE/" });
                oMockServer.simulate("localService/metadata.xml", { sMockdataBaseUrl: "localService/mockdata" });
                oMockServer.start();
                console.log("Mock server started");
            }
        };
    });
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
        "CustomPlugin": {
            "component": "custom.plugins.customPlugin"
        }
    }
}
```



## HTML Bootstrap



### Bootstrap

Use this bootstrap:

```
<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8" />
      <title>My App - FLP Sandbox</title>
      <script src="resources/sap/ushell/sandbox/SandboxBootTask.js"></script>
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

> ### Note:  
> Do not specify `data-sap-ui-on-init` manually. The launchpad bootstrap script sets it internally.



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

Must be `"true"`.

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-compat-version`

</td>
<td valign="top">

Yes

</td>
<td valign="top">

Must be `"edge"`.

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

Path to `sap/ushell/sandbox/sandboxManifest.json`. Necessary for compatibility with future SAPUI5 versions.

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

## Information extracted from the app's manifest.json

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
> i18n placeholders \(for example, `{{title}}`\) are automatically resolved.



<a name="loioe6151c12b51649dbb873802861d2a06c__invalid-json-syntax"/>

## Troubleshooting Configuration Issues



### App not appearing on launchpad

1.  Check that the root path is relative to the HTML file location.
2.  Verify `manifest.json` is accessible at `{rootPath}/manifest.json`.
3.  Check browser console for loading errors.



### Conflicting configuration error

If the following error message is shown: "It's not allowed to configure the sandbox providing configuration directly to the ushell config object 'sap-ushell-config'. Please provide sandbox-specific configuration using 'fioriSandboxAppConfig.json'."

Then remove any `window["sap-ushell-config"]` assignments from your HTML or scripts.

