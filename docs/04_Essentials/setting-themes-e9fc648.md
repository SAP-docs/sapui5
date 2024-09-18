<!-- loioe9fc648661d84ed89360bbec3ae02611 -->

# Setting Themes

You define which theme is used by your app either by using the `theme` configuration parameter or the `sap/ui/core/Theming.setTheme` method.

-   By default, there is a default theme configured for each SAPUI5 version that is applied, if not configured differently. The following example shows how to overwrite the SAPUI5 default theme as part of the bootstrap configuration:

    ```html
    <script id="sap-ui-bootstrap"
        type="text/javascript"
        src="resources/sap-ui-core.js"
        data-sap-ui-theme="my_custom_theme">
    </script>
    ```

-   It is also possible to change the theme using any other source for configuration options, such as a URL parameter \(for example, `html?sap-ui-theme=my_custom_theme`\).

-   > ### Note:  
    > You can provide the theme parameter either as `sap-theme` or `sap-ui-theme`. The only exception is the `globalThis["sap-ui-config"]` object where only `theme` is valid, since a parameter must not be prefixed within the `globalThis` object. The configuration uses the `sap-theme` value, if both notations exist.
    > 
    > If you use the UI theme designer to define your own custom theme, you can append the location of the custom theme as a server-relative path to the `theme` parameter, separated by an `@` sign:
    > 
    > ```html
    > http://myserver.com/sap/myapp/?sap-ui-theme=my_custom_theme@/sap/public/bc/themes/~client-111
    > ```
    > 
    > Although a full URL can be specified, the framework will only use the path information of the URL to prevent CSS-based attacks that would otherwise be possible by referencing CSS from a malicious server, unless the origin has been added to `sap-allowed-theme-origins`. For more information, see [Theme Origin Allowlist](setting-themes-e9fc648.md#loioe9fc648661d84ed89360bbec3ae02611__section_TOA). In a more complex landscape, for example, if the infrastructure of the UI theme designer is running on a separate server, a Web dispatcher can be used to combine both servers in one endpoint.

    > ### Note:  
    > The UI theme designer infrastructure stores themes for multiple technologies in the same location, each in its own subdirectory \(`UI5/` for SAPUI5\). Other SAP products \(such as SAP Enterprise Portal\) append only the common root URL to the `theme` parameter. SAPUI5 therefore appends folder `UI5/` to any given path that is defined in the `theme` parameter.

-   You can use the `sap/ui/core/Theming.setTheme` method to switch themes during runtime. When setting the `theme` parameter via API, the application state is not lost, and only the style sheets are exchanged.




## Using Custom Themes

To load an external custom theme, you can either declare it statically on the page or by setting the `theme-root` configuration parameter.

-   You can configure the theme by using one of the following options:

    -   Use the same object structure as JSON string in an attribute of the SAPUI5 bootstrap `script` tag, for example:

        ```html
        <script id="sap-ui-bootstrap" 
        	type="text/javascript"
        	src="resources/sap-ui-core.js"
        	data-sap-ui-theme-roots='{"my_custom_theme" : "http://themes.org/ui5"}'>
        </script>
        ```

    -   Specify the location of a theme with a **URL parameter**:

        ```
        http://myserver.com/sap/myapp/?sap-ui-theme=my_custom_theme@/sap/public/bc/themes/~client-111
        ```

    -   Use the global configuration object. Create and load an additional `<additional-config.js>` file with the following content:

        ```js
         // Be mindful of already existing configuration options
            globalThis["sap-ui-config"] ??= {};
            globalThis["sap-ui-config"] = Object.assign(globalThis["sap-ui-config"]["theme-roots"] || {}, {
                "my_preconfigured_theme" : "http://preconfig.com/ui5-themes",
                "my_second_preconfigured_theme" : {
                    "" : "http://preconfig.com/ui5-themes",
                    "sap.ui.core" : "http://core.com/ui5"
                }
            });
        ```

        The first theme is loaded for all libraries from the location specified. The second theme is loaded for the `sap.ui.core` library from the location specified. For all other libraries, the theme is loaded from the default location.





<a name="loioe9fc648661d84ed89360bbec3ae02611__section_TOA"/>

## Theme Origin Allowlist

When configuring a theme with a `themeRoot` URL via the `theme` parameter, security restrictions apply. Absolute URLs to an origin other than the current page are cut off by default. The path segment will be resolved relative to the current page origin.

In order to allow other origins to be used via the URL parameter, the `sap-allowed-theme-origins` configuration option can be used:

`<meta name="sap-allowed-theme-origins" content="https://example.com">`

This allows you to load a theme from `https://example.com`, which is provided via the URL parameter:

`https://myserver.com/sap/myapp/?sap-theme=my_theme@https://example.com/custom-themes/`

> ### Note:  
> `sap-allowed-theme-origins` can only be provided using bootstrap or the `<meta>` tag. Origins provided via configuration must contain the same protocol, host, and port as the origin provided in the `theme` parameter. Multiple allowed origins can be separated by a comma.
> 
> A general wildcard \(\*\) can also be used to allow all origins. However, this should only be used in combination with additional security mechanisms, such as CSP style-src directives. Wildcards to allow sub-domains are not supported.



## Listening to the `Theming.applied` Event

Whenever the theme is switched, an event is fired indicating that a theme switch has been triggered. If your application needs to take theming into consideration, attach an event handler, like this:

```js
sap.ui.require([
    "sap/ui/core/Theming"
], (
    Theming
) => {
    "use strict";
     
    // Whenever the theme is switched, an event is fired,
    // indicating that a theme switch has been triggered.
    Theming.attachApplied((oEvent) => {
        // Note: The event callback has no longer a <this> context,
        // thus we use an arrow function here
 
        // Note: the Event object now has a different API than on the Core facade:
        // no more getParameters(), but simple properties like the Web API events.
        // Therefore, you can access the new "theme" like so:
        const sTheme = oEvent.theme;
    });
    ...
});
```

> ### Note:  
> The handler of the `applied` event will be executed immediately once if all `*.css` files are loaded and there are no further requests pending for the theme.
> 
> After that, it will only be executed in case of new `*.css` files, which may happen for a complete theme change or the loading of additional libraries. Keep in mind that the **`onThemeChanged`** hook is not executed initially if the theme has already been applied.

For more information, see the [API Reference](https://ui5.sap.com/#/api/module:sap/ui/core/Theming%23events/applied).

**Related Information**  


[Available Configuration Options](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)

[API Reference: `sap/ui/core/Theming.setTheme`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming%23methods/sap/ui/core/Theming.setTheme)

