<!-- loio9a1fe151094946098352abbc4b0e3fdc -->

# How to Migrate to the Legacy-Free Launchpad Sandbox

Learn how to migrate from the legacy SAP Fiori launchpad sandbox to the new 1.x-legacy-free sandbox \(also known as sandbox 2.0\). The migration is designed to be straightforward with minimal changes required.



## Overview of Changes


<table>
<tr>
<th valign="top">

Aspect

</th>
<th valign="top">

Legacy Sandbox

</th>
<th valign="top">

Legacy-Free Sandbox

</th>
</tr>
<tr>
<td valign="top">

Bootstrap

</td>
<td valign="top">

Multiple script files, manual `onInit`

</td>
<td valign="top">

Boot task + boot manifest \(auto `onInit`\)

</td>
</tr>
<tr>
<td valign="top">

Configuration

</td>
<td valign="top">

`window["sap-ushell-config"]`

</td>
<td valign="top">

`fioriSandboxAppConfig.json`

</td>
</tr>
<tr>
<td valign="top">

Applications

</td>
<td valign="top">

Inline in config object

</td>
<td valign="top">

Declarative tiles array

</td>
</tr>
<tr>
<td valign="top">

RTA Setup

</td>
<td valign="top">

Manual flexibility services

</td>
<td valign="top">

Automatic with optional fakeLrep

</td>
</tr>
<tr>
<td valign="top">

Mock Server

</td>
<td valign="top">

Manual initialization

</td>
<td valign="top">

`beforeFlpStart` hook

</td>
</tr>
</table>



<a name="loio9a1fe151094946098352abbc4b0e3fdc__step-1-replace-the-html-file"/>

## Migration Steps



### Step 1: Replace the HTML File

**Before** \(Legacy\):

```
<!DOCTYPEhtml>
<html>
<head>
	<meta charset="utf-8" />
	<title>Fiori Launchpad Sandbox</title>
	<!-- 1. Shell configuration -->
		<script type="text/javascript">
        	window["sap-ushell-config"]={
				defaultRenderer:"fiori2",
				renderers:{
					fiori2:{
						componentData:{
							config:{
								rootIntent:"MyApp-display",
								search:"hidden"
							}
						}
					}
				},
				applications:{
					"MyApp-display":{
					additionalInformation:"SAPUI5.Component=my.app",
					applicationType:"URL",
					url:"../",
					title:"My App",
					description:"Development"
				}
			}
		};
	</script>
	<!-- 2. Legacy sandbox bootstrap -->
	<script src="../test-resources/sap/ushell/bootstrap/sandbox.js"
            id="sap-ushell-bootstrap"></script>
	<!-- 3. UI5 bootstrap --><script id="sap-ui-bootstrap"
            src="../resources/sap-ui-core.js"
            data-sap-ui-theme="sap_horizon"
            data-sap-ui-libs="sap.m, sap.ushell"
            data-sap-ui-bindingSyntax="complex"
            data-sap-ui-preload="async"
            data-sap-ui-resourceroots='{"my.app": "../"}'
            data-sap-ui-frameOptions="allow">
	</script>
	<!-- 4. Manual renderer initialization -->
	<script type="text/javascript">
        sap.ui.getCore().attachInit(function(){
            sap.ushell.Container.createRenderer().placeAt("content");
		});
	</script>
</head>
<body class="sapUiBody">
	<div id="content"></div>
</body>
</html>
```

**After**\(Sandbox 2.0 - compatible with UI5 1.x and 2.x\):

```
<!DOCTYPEhtml>
<html>
<head>
	<meta charset="utf-8" />
	<title>Fiori Launchpad Sandbox</title>
	<!-- Boot task for UI5 1.x (ignored in 2.x) -->
	<!-- Note: SandboxBootTask.js is deprecated since 1.136, but still required for 1.x bootstrap -->
	<script src="resources/sap/ushell/sandbox/SandboxBootTask.js"></script><!-- UI5 bootstrap --><script id="sap-ui-bootstrap"
            src="resources/sap-ui-core.js"
            data-sap-ui-theme="sap_horizon"
            data-sap-ui-async="true"
            data-sap-ui-compat-version="edge"
            data-sap-ui-boot-manifest="sap/ushell/sandbox/sandboxManifest.json"
            data-sap-ui-resource-roots='{
                "my.app": "../"
            }'>
  < /script>
</head>
<body class="sapUiBody">
	<div id="canvas"></div>
</body>
</html>
```

**Key Changes**

-   Remove inline `window["sap-ushell-config"]` script
-   Remove `sap-ushell-bootstrap` script \(`sandbox.js`\)
-   Remove `attachInit()` and `createRenderer().placeAt()` - handled automatically
-   Add `SandboxBootTask.js` script before UI5 bootstrap \(for UI5 1.x compatibility\)
-   Add `data-sap-ui-boot-manifest="sap/ushell/sandbox/sandboxManifest.json"` \(for UI5 2.x\)
-   Add `data-sap-ui-compat-version="edge"` \(this is required for UI5 1.x, omitting it causes failures with modern APIs\)
-   Remove `data-sap-ui-oninit` / `data-sap-ui-on-init` - the sandbox sets this automatically
-   Remove `data-sap-ui-bindingSyntax`, `data-sap-ui-preload` - use defaults



### Step 2: Convert Application Configuration

**Before**\(Legacy - fioriSandboxConfig.js\):

```
window["sap-ushell-config"]={
defaultRenderer:"fiori2",
renderers:{
fiori2:{
componentData:{
config:{
enableSearch:false,
rootIntent:"MyApp-display"
}
}
}
},
applications:{
"MyApp-display":{
additionalInformation:"SAPUI5.Component=my.app",
applicationType:"URL",
url:"../",
description:"My Application"
},
"MyApp-edit":{
additionalInformation:"SAPUI5.Component=my.app",
applicationType:"URL",
url:"../?mode=edit",
description:"My Application (Edit)"
}
}
};
```

**After**\(Sandbox 2.0 - fioriSandboxAppConfig.json\):

```
{
    "tiles": [
        {
            "semanticObject": "MyApp",
            "action": "display",
            "rootPath": "../"
        },
        {
            "semanticObject": "MyApp",
            "action": "edit",
            "rootPath": "../",
            "parameters": {
                "mode": "edit"
            }
        }
    ],
    "rootIntent": "MyApp-display"
}
```

**Mapping Table:**


<table>
<tr>
<th valign="top">

Legacy Property

</th>
<th valign="top">

Sandbox 2.0 Property

</th>
</tr>
<tr>
<td valign="top">

Application key \(e.g., "MyApp-display"\)

</td>
<td valign="top">

`semanticObject` + `action`

</td>
</tr>
<tr>
<td valign="top">

`url`

</td>
<td valign="top">

`rootPath`

</td>
</tr>
<tr>
<td valign="top">

URL parameters \(e.g., `?mode=edit`\)

</td>
<td valign="top">

`parameters` object

</td>
</tr>
<tr>
<td valign="top">

`additionalInformation`

</td>
<td valign="top">

Extracted from manifest.json

</td>
</tr>
<tr>
<td valign="top">

`description`

</td>
<td valign="top">

Extracted from manifest.json

</td>
</tr>
<tr>
<td valign="top">

`applicationType`

</td>
<td valign="top">

Always UI5 component

</td>
</tr>
</table>



### Step 3: Migrate Mock Server Initialization

**Before** \(Legacy\):

```
<script>
	// Initialize mock server before FLP
    sap.ui.require([
		"sap/ui/core/util/MockServer"
	],function(MockServer){
		var oMockServer =newMockServer({
			rootUri:"/sap/opu/odata/sap/MY_SERVICE/"
		});
        oMockServer.simulate("localService/metadata.xml");
        oMockServer.start();
	});
</script>
```

**After** \(Sandbox 2.0\):

1.  Create a hook module \(`test/mockServer.js`\):

    ```
    sap.ui.define([
    	"sap/ui/core/util/MockServer"
    ],(MockServer)=>{
    	"use strict";
    
    	return{
    		execute:()=>{
    			return new Promise((resolve)=>{
    				const oMockServer =newMockServer({
    					rootUri:"/sap/opu/odata/sap/MY_SERVICE/"
    				});
    	    		 oMockServer.simulate("localService/metadata.xml",
    					{sMockdataBaseUrl:"localService/mockdata"
    				});
                 	  oMockServer.start();
                 	  console.log("Mock server started");
    				resolve();
    			});
    		}
    	};
    });
    ```

2.  Configure in `fioriSandboxAppConfig.json`:

    ```
    {
     "tiles": [...],
     "beforeFlpStart": "module:my/app/test/mockServer"
    }
    ```




### Step 4: Migrate RTA Configuration

**Before** \(Legacy\):

```
<script>
    window["sap-ui-config"]={
		"xx-flexibilityServices":[
			{
				"connector":"LocalStorageConnector"
			},
		{
			"connector":"ObjectPathConnector",
			"path":"localService/fakeLrep.json"
		}
	]
	};
</script>
```

**Or before** in JavaScript:

```
sap.ui.require([
	"sap/ui/fl/FakeLrepConnectorLocalStorage"
],function(FakeLrepConnectorLocalStorage){
    FakeLrepConnectorLocalStorage.enableFakeConnector();
});
```

**After** \(Sandbox 2.0\):

```
{
    "tiles": [...],
    "rta": "localService/fakeLrep.json"
}
```

> ### Note:  
> `LocalStorageConnector` is always enabled automatically. You only need to specify `rta` if you have a fake LREP JSON file.



### Step 5: Migrate Plugins Configuration

**Before** \(Legacy\):

```
window["sap-ushell-config"]={bootstrapPlugins:{RuntimeAuthoringPlugin:{component:"sap.ushell.plugins.rta",config:{validateAppVersion:false}},MyPlugin:{component:"my.custom.Plugin"}}};
```

After \(Sandbox 2.0\):

```
{
    "tiles": [...],
    "plugins": {
        "MyPlugin": {
            "component": "my.custom.Plugin"
        }
    }
}
```

> ### Note:  
> `RuntimeAuthoringPlugin` is included automatically and doesn't need to be specified.



### Step 6: Migrate Deprecated Services

The legacy sandbox silently migrated old service names to their V2 successors via `getV2MigrationConfig`. Sandbox 2.0 does **not**perform this migration. If your application or custom configuration explicitly references a deprecated service, it will throw a clear error at runtime.

**Deprecated Services**


<table>
<tr>
<th valign="top">

Deprecated Service

</th>
<th valign="top">

Successor

</th>
</tr>
<tr>
<td valign="top">

`Personalization`

</td>
<td valign="top">

`PersonalizationV2`

</td>
</tr>
<tr>
<td valign="top">

`LaunchPage`

</td>
<td valign="top">

`FlpLaunchPage`

</td>
</tr>
<tr>
<td valign="top">

`NavTargetResolution`

</td>
<td valign="top">

`NavTargetResolutionInternal`

</td>
</tr>
</table>

**Action:** Remove any explicit references to the deprecated service names from your configuration. The Sandbox 2.0 default configuration already includes the correct V2 successors. For example, if your legacy `window["sap-ushell-config"]` contained:`services:{Personalization:{adapter:{module:"sap.ushell.adapters.local.PersonalizationAdapter"}}}`, simply remove this entry. `PersonalizationV2` is already configured by default in Sandbox 2.0.



<a name="loio9a1fe151094946098352abbc4b0e3fdc__error-quotit39s-not-allowed-to-configure-the-sandbox-providing-configuration-directly-to-the-ushell-config-object-39sap-ushell-config39quot"/>

## Common Migration Issues



### Error: "It's not allowed to configure the sandbox providing configuration directly to the ushell config object 'sap-ushell-config'"

**Cause**: You still have a script setting `window["sap-ushell-config"]`.

**Solution**: Remove all direct ushell config assignments and move configuration to `fioriSandboxAppConfig.json`.



### Error: "It's not allowed to use 'sap/ushell' modules before the sandbox has been started"

**Cause**: A script is requiring ushell modules before the sandbox initializes.

**Solution**: Move the code to a `beforeFlpStart` hook module.



### Application tile not visible

**Cause:** `rootPath` may be incorrect.

**Solution:**

1.  Check that the path is relative to the HTML file location
2.  Verify manifest.json is accessible at `{rootPath}/manifest.json`
3.  Check browser console for loading errors



### AppState not working

**Cause:** AppState is transient by default.

**Solution:** If you need persistent AppState, set:

```
{
    "appStateMode": false
}
```



<a name="loio9a1fe151094946098352abbc4b0e3fdc__appstate-not-working"/>

## File Structure Comparison

**Before** \(Legacy\):

```
webapp/test/
├── flpSandbox.html              (60-80 lines, all config inline)
├── flpSandboxMockServer.html    (80-115 lines, mock + RTA inline)
└── localService/
    └── mockserver.js
```

**After** \(Sandbox 2.0\):

```
webapp/test/
├── flp2Sandbox.html             (25-32 lines, minimal bootstrap)
├── flp2SandboxMockServer.html   (25-32 lines, minimal bootstrap)
├── fioriSandboxAppConfig.json   (10-20 lines, declarative config)
├── sandbox/
│   └── fiori2SandboxMockServerInit.js  (15-20 lines, init module)
└── localService/
    └── mockserver.js
```

**Key differences:**

-   HTML files reduced from 60-115 lines to 25-32 lines
-   Configuration moved from inline JS to declarative JSON
-   Mock server initialization moved to separate module
-   Clear separation of concerns



<a name="loio9a1fe151094946098352abbc4b0e3fdc__checklist"/>

## Checklist

Use this checklist to ensure complete migration:

**HTML Bootstrap**

-   Add `SandboxBootTask.js` script before UI5 bootstrap
-   Add `data-sap-ui-boot-manifest="sap/ushell/sandbox/sandboxManifest.json"`
-   Add `data-sap-ui-compat-version="edge"`
-   Remove `sandbox.js` script \(`sap-ushell-bootstrap`\)
-   Remove inline `window["sap-ushell-config"]` scripts
-   Remove `attachInit()` and `createRenderer().placeAt()` code
-   Remove `data-sap-ui-on-init` \(if present\)

**Configuration**

-   Create `fioriSandboxAppConfig.json` \(optional, but recommended\)
-   Convert `applications` to `tiles` array with `semanticObject`/`action`
-   Add `rootIntent` if auto-navigating to app

**Mock Server**\(if applicable\):

-   Create init module \(e.g., `sandbox/fiori2SandboxMockServerInit.js`\)
-   Add `sandbox` resource root in HTML
-   Add `beforeFlpStart` pointing to init module
-   Module must export `{ execute: () => {...} }`

**RTA**\(if applicable\):

-   Remove manual LREP/FakeLrepConnector setup
-   Add `rta` property pointing to fakeLrep.json \(if needed\)

**Plugins**\(if applicable\):

-   Move `bootstrapPlugins` to `plugins` in JSON config
-   Remove `RuntimeAuthoringPlugin` \(included automatically\)

**Deprecated Services**:

-   Remove references to deprecated services \(`Personalization`, `LaunchPage`, `NavTargetResolution`\)

**Verification:**

-   Test application loading
-   Test cross-app navigation \(if applicable\)
-   Test RTA functionality \(if applicable\)
-   Test personalization



<a name="loio9a1fe151094946098352abbc4b0e3fdc__getting-help"/>

## Getting Help

If you encounter issues during migration:

1.  Check the browser console for error messages.
2.  Verify your `fioriSandboxAppConfig.json` is valid JSON.
3.  Ensure your manifest.json is accessible.
4.  Review the Configuration Reference.

