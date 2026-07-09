<!-- loio022e31cfe812407f89378249fe1dfa83 -->

# Getting Started with the Launchpad Sandbox

Learn how to quickly set up and use the SAP Fiori launchpad sandbox for local development and testing.



## Prerequisites

-   SAPUI5 1.147 or higher

-   SAP Fiori application with a valid `manifest.json`

-   local development server \(for example, ui5 serve\)




## Quick Setup

1.  Create the sandbox HTML file

    Create a file named `sandbox.html` \(or `flpSandbox.html`\) in your application's test folder:

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

2.  Start your development server

    Start your local development server and navigate to the sandbox URL.

    ```
    # Using UI5 tooling
    ui5 serve
    
    # Open in browser
    # http://localhost:8080/test/sandbox.html
    ```

3.  In your launchpad sandbox, check if you see an orange bar at the top saying "SAP Fiori Launchpad Sandbox - For Testing Purposes Only!". Your app appears as a tile on the page \(with semantic object "MyApp" and action "display" if no configuration file is provided\).



That's it! Your application should now be running in the sandbox.



## Custom Configuration \(Optional\)

The sandbox works out of the box without additional configuration. However, for most scenarios, you should customize the behavior by creating a `fioriSandboxAppConfig.json` file.

See [How to Configure the Launchpad Sandbox](how-to-configure-the-launchpad-sandbox-e6151c1.md) for all available options and default values.



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

-   **Launchpad Shell**: Complete shell with header and navigation
-   **Spaces & Pages**: Spaces and pages layout
-   **User Menu**: Theme selection, user settings, about dialog
-   **Personalization**: Local storage-based personalization
-   **RTA Support**: Pre-configured Runtime Authoring plug-in
-   **Sample App**: NavigationSample app for testing cross-app navigation
-   **Orange Info Bar**: Clear indication that you're in sandbox mode

**Related Information**  


[How to Configure the Launchpad Sandbox](how-to-configure-the-launchpad-sandbox-e6151c1.md "Here's a complete reference of all configuration options available in the launchpad sandbox.")

[How to Migrate to the Legacy-Free Launchpad Sandbox](https://help.sap.com/viewer/c442e2a74263451f845549bdbcdebe7b/1.150_SAPUI5_Internal/en-US/9a1fe151094946098352abbc4b0e3fdc.html "Learn how to migrate from the legacy SAP Fiori launchpad sandbox to the new legacy-free sandbox. The migration is designed to be straightforward with minimal changes required.") :arrow_upper_right:

