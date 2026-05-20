<!-- loio022e31cfe812407f89378249fe1dfa83 -->

# Getting Started with the Launchpad Sandbox

Learn how to quickly set up and use the SAP Fiori launchpad sandbox for local development and testing.



## Prerequisites

-   SAPUI5 1.147 or higher \(UI5 2.x is recommended\)

-   SAP Fiori application with a valid manifest.json

-   local development server \(for example, ui5 serve\)




## Quick Setup

1.  Create the sandbox HTML file

    Create a file named `sandbox.html` \(or `flpSandbox.html`\) in your application's test folder. The following bootstrap is compatible with **both UI5 1.x and UI5 2.x**:

    ```
    {
    
        "tiles": [
    
            {
    
                "semanticObject": "SalesOrder",
    
                "action": "display",
    
                "rootPath": "../sales-order-app/"
    
            },
    
            {
    
                "semanticObject": "SalesOrder",
    
                "action": "create",
    
                "rootPath": "../sales-order-create-app/"
    
            },
    
            {
    
                "semanticObject": "Product",
    
                "action": "manage",
    
                "rootPath": "../product-management-app/"
    
            }
    
        ]
    
    }
    ```

    > ### Note:  
    > `<div id="canvas">` is optional. The sandbox automatically creates it if it's not present. However, keeping it in the HTML avoids a flash of unstyled content during startup.
    > 
    > How the bootstrap works:
    > 
    > 
    > <table>
    > <tr>
    > <th valign="top">
    > 
    > Attribute/Script
    > 
    > </th>
    > <th valign="top">
    > 
    > UI5 1.x
    > 
    > </th>
    > <th valign="top">
    > 
    > UI5 2.x
    > 
    > </th>
    > </tr>
    > <tr>
    > <td valign="top">
    > 
    > `SandboxBootTask.js`
    > 
    > </td>
    > <td valign="top">
    > 
    > Registers boot task to load ConfigurationProvider
    > 
    > </td>
    > <td valign="top">
    > 
    > Ignored \(no effect\)
    > 
    > </td>
    > </tr>
    > <tr>
    > <td valign="top">
    > 
    > `data-sap-ui-boot-manifest`
    > 
    > </td>
    > <td valign="top">
    > 
    > Ignored
    > 
    > </td>
    > <td valign="top">
    > 
    > Loads sandboxManifest.json which registers ConfigurationProvider
    > 
    > </td>
    > </tr>
    > <tr>
    > <td valign="top">
    > 
    > `data-sap-ui-compat-version="edge"`
    > 
    > </td>
    > <td valign="top">
    > 
    > Required — omitting it causes failures with modern APIs
    > 
    > </td>
    > <td valign="top">
    > 
    > Optional
    > 
    > </td>
    > </tr>
    > </table>

    > ### Note:  
    > `SandboxBootTask.js` is deprecated since 1.136. The boot-manifest approach \(`data-sap-ui-boot-manifest`\) is recommended for UI5 2.x. However, `SandboxBootTask.js` must still be included for 1.x compatibility when targeting both versions.
    > 
    > Important for UI5 1.x: Always include `data-sap-ui-compat-version="edge"` when running against UI5 1.x. Omitting it will cause silent failures with modern APIs used by the sandbox.
    > 
    > The ConfigurationProvider automatically sets `data-sap-ui-on-init` to `module:sap/ushell/sandbox/SandboxModule`. you don't need to specify it manually.

2.  Start your development server

    Start your local development server and navigate to the sandbox URL.

    ```
    # Using UI5 tooling
    ui5 serve
    
    # Open in browser
    # http://localhost:8080/test/sandbox.html
    ```




That's it! Your application should now be running in the FLP sandbox with sensible defaults.



## Custom Configuration \(Optional\)

The sandbox works out of the box without additional configuration. However, for most scenarios, you should customize the behavior by creating a `fioriSandboxAppConfig.json` file.

See for all available options and default values.



## Example of a Project Structure

A typical project structure may look like this:

```
my-app/
├── webapp/
│   ├── Component.js
│   ├── manifest.json
│   ├── controller/
│   ├── view/
│   └── test/
│       ├── sandbox.html                # Sandbox HTML file
│       └── fioriSandboxAppConfig.json  # Optional: Sandbox configuration
└── package.json
```



## What's There Out of the Box?

The sandbox automatically provides:

-   **Fiori 2.0 Shell**: Complete shell with header, navigation, and footer
-   **Spaces & Pages**: Modern spaces-based navigation enabled by default
-   **User Menu**: Theme selection, user settings, about dialog
-   **Personalization**: Local storage-based personalization
-   **RTA Support**: Runtime Authoring plugin pre-configured
-   **Sample App**: NavigationSample app for testing cross-app navigation
-   **Orange Info Bar**: Clear indication that you're in sandbox mode



## Multiple Apps

The example shows how to configure multiple apps:

```
{

    "tiles": [

        {

            "semanticObject": "SalesOrder",

            "action": "display",

            "rootPath": "../sales-order-app/"

        },

        {

            "semanticObject": "SalesOrder",

            "action": "create",

            "rootPath": "../sales-order-create-app/"

        },

        {

            "semanticObject": "Product",

            "action": "manage",

            "rootPath": "../product-management-app/"

        }

    ]

}
```



## Adding Startup Parameters

Pass parameters to your application at startup:

```
{
    "tiles": [{
        "semanticObject": "MyApp",
        "action": "display",
        "parameters": {
            "orderId": "12345",
            "mode": "edit"
        }
    }]
}
```

Access them in your Component.js:

`init:function(){const oStartupParams =this.getComponentData().startupParameters;const sOrderId = oStartupParams.orderId?.[0];// "12345"}`



## Setting the Root Intent

Specify which app should open by default:

```
{
    "tiles": [{
        "semanticObject": "MyApp",
        "action": "display"
    }],
    "rootIntent": "MyApp-display"
}
```



## Verifying Your Setup

1.  Check the info bar: You should see an orange bar at the top saying "SAP Fiori Launchpad Sandbox - For Testing Purposes Only!"
2.  Check the console: Look for any errors in the browser console. A common issue is that the manifest for the application could not be loaded from default path. Verify if your app's manifest.json is accessible.
3.  Check the tile: Your application should appear as a tile on the FLP home page \(with semantic object "MyApp" and action "display" if no configuration file is provided\)

**Related Information**  


[How to Configure the Launchpad Sandbox](how-to-configure-the-launchpad-sandbox-e6151c1.md "Here's a complete reference of all configuration options available in the launchpad sandbox.")

[How to Migrate to the Legacy-Free Launchpad Sandbox](how-to-migrate-to-the-legacy-free-launchpad-sandbox-9a1fe15.md "Learn how to migrate from the legacy SAP Fiori launchpad sandbox to the new 1.x-legacy-free sandbox (also known as sandbox 2.0). The migration is designed to be straightforward with minimal changes required.")

