<!-- loioe9fc648661d84ed89360bbec3ae02611 -->

# Setting Themes

You define which theme is used by your app either in the bootstrap, by using a URL parameter, or by using method `sap.ui.getCore.applyTheme`.

-   The initial theme can be hardcoded in the application \(in the script tag of the bootstrap loading SAPUI5\) or in a JS configuration object defined before SAPUI5 is loaded, for example:

    ```html
    <script id="sap-ui-bootstrap" 
    	type="text/javascript"
    	src="resources/sap-ui-core.js"
    	data-sap-ui-theme="sap_belize">
    </script>
    ```

    This setting has the lowest priority.

-   A URL parameter \(for example: `html?sap-ui-theme=sap_belize`\) can be used when starting a SAPUI5 application to set or override the initial theme.

    If you use the UI theme designer to define your own custom theme, you can append the location of the custom theme as a server-relative path to the `sap-ui-theme` parameter, separated by an `@` sign:

    ```html
    http://myserver.com/sap/myapp/?sap-ui-theme=my-theme@/sap/public/bc/themes/~client-111
    ```

    Although a full URL can be specified, the framework will only use the path information of the URL to prevent CSS-based attacks that would otherwise be possible by referencing CSS from a malicious server. In a more complex landscape, for example, if the infrastructure of the UI theme designer is running on a separate server, either a Web dispatcher can be used to combine both servers in one namespace, or you should set a full URL using method `sap.ui.getCore.applyTheme` for custom apps as described below.

    > ### Note:  
    > The UI theme designer infrastructure stores themes for multiple technologies in the same location, each in its own subdirectory \(`UI5/` for SAPUI5\). Other SAP products \(like SAP Enterprise Portal\) append only the common root URL to the `sap-theme` parameter. SAPUI5 therefore appends folder `UI5/` to any given path that is defined in the `sap-theme` parameter.

-   You can use method `sap.ui.getCore.applyTheme` to switch themes on the fly. The application state is not lost, and there is no server roundtrip \(except for loading the CSS, if not cached\). Only the style sheets are exchanged.

    You can specify a second parameter containing the root URL of the theme. The URL is not restricted in any way, therefore the caller has to make sure that the URL is valid and safe. If the URL points to the theme infrastructure, it must contain the folder suffix `UI5/`.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Core/methods/applyTheme).

    > ### Note:  
    > This option allows you to switch themes in your app during runtime.




## Using Custom Themes

To load an external custom theme, you set this theme either by static declaring in the page or by using the `Core.setThemeRoot()` method. This is very much like using `registerModulePath()` for libraries that are in a different location. You can do this as follows:

1.  Define the path to the theme with the following code: `sap.ui.getCore().setThemeRoot("my_theme", "http://url.to/the/root/dir");`. SAPUI5 then loads all theme resources from this URL. For example, the `library.css` file of the `sap.ui.core` library is loaded from: `http://url.to/the/root/dir/sap/ui/core/themes/my_theme/library.css`.

    This base directory can also be given as second argument to method `core.applyTheme(...)`.

    If some parts of the theme are in different locations, you can use the above call to set the default, but override the theme location for specific libraries by specifying them in an array as second parameter: `sap.ui.getCore().setThemeRoot("my_theme", ["my.lib.one","my.lib.two"], "http://url.to/the/other/root/dir");`

2.  Configure the theme by using one of the following options:

    -   Use the same object structure as JSON string in an attribute of the SAPUI5 bootstrap `script` tag, for example:

        ```html
        <script id="sap-ui-bootstrap" 
        	type="text/javascript"
        	src="resources/sap-ui-core.js"
        	data-sap-ui-theme-roots='{"my_theme" : "http://themes.org/ui5"}'>
        </script>
        ```

    -   Specify the location of a theme with a **URL parameter**:

        ```
        http://myserver.com/sap/myapp/?sap-ui-theme=my-theme@/sap/public/bc/themes/~client-111
        ```

    -   Use the global configuration object. Insert the following before the bootstrap `script` tag:

        ```html
        <script type="text/javascript">
        window["sap-ui-config"] = {
        	themeRoots : {
        		"my_preconfigured_theme" : "http://preconfig.com/ui5-themes",
        		
        		"my_second_preconfigured_theme" : {
        			"" : "http://preconfig.com/ui5-themes",
        			"sap.ui.core" : "http://core.com/ui5"
        		}
        	}
        }
        </script>
        ```

        The first theme is loaded for all libraries from the location specified. The second theme is loaded for the `sap.ui.core` library from the location specified. For all other libraries, the theme is loaded from the default location.





<a name="loioe9fc648661d84ed89360bbec3ae02611__section_u3q_gpj_43b"/>

## Theme Origin Allowlist

When configuring a theme with a `themeRoot` URL via the `sap-ui-theme`/`sap-theme` URL parameter, security restrictions apply. Absolute URLs to a different origin than the current page are stripped off by default. The path segment will be resolved relative to the current page origin.

In order to allow certain origins, according to RFC 6454, to be used via the URL parameter, a `<meta>` tag can be added to the `<head>` of the page:

`<meta name="sap-allowedThemeOrigins" content="https://example.com">`

This allows to load a theme from `https://example.com`, that is provided via the URL parameter:

`https://myserver.com/sap/myapp/?sap-theme=my_theme@https://example.com/custom-themes/`

Origins provided in the `<meta>` tag must contain the same protocol, host and port as the origin provided in the URL parameter. Multiple allowed origins can be separated with a comma.

A general wildcard \(\*\) can also be used to allow all origins. However this should only be used in combination with additional security mechanisms such as CSP style-src directives. Wildcards to allow sub-domains are not supported.



## Listening to the `ThemeChanged` Event

Whenever the theme is switched, an event is fired indicating that a theme switch has been triggered. If you want your application to react on this event, you can attach a handler to it:

```js

sap.ui.getCore().attachThemeChanged(function(){
	myFunction();
});
```

You can use the `sap.ui.getCore.applyTheme` method to switch themes.

