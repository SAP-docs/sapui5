<!-- loio62d9c4d8f5ad49aa914624af9551beb7 -->

# Frame Options

`frameOptions` is used to prevent security vulnerabilities like clickjacking. With the `frameOptions` configuration you define whether SAPUI5 is allowed to run embedded in a frame or only from trusted origins or not at all.

SAPUI5 provides the following configuration options for `frameOptions`:


<table>
<tr>
<th valign="top">

Mode



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

allow



</td>
<td valign="top">

X



</td>
<td valign="top">

Allows to be embedded from all origins



</td>
</tr>
<tr>
<td valign="top">

deny



</td>
<td valign="top">



</td>
<td valign="top">

Denies to be embedded from all origins



</td>
</tr>
<tr>
<td valign="top">

trusted



</td>
<td valign="top">



</td>
<td valign="top">

Allows to be embedded from trusted origins according to the same-origin policy and to be embedded to origins allowed by the allowlist service



</td>
</tr>
</table>

With `frameOptionsConfig` the following additional configuration options can be set:


<table>
<tr>
<th valign="top">

Parameter



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

`callback` 



</td>
<td valign="top">

`function(bSuccess)` 



</td>
<td valign="top">



</td>
<td valign="top">

Function that is called with the success state

> ### Note:  
> The function can be synchronously called from the SAPUI5 bootstrap script. The DOM \(`document.body`\) may not be accessible.



</td>
</tr>
<tr>
<td valign="top">

`timeout` 



</td>
<td valign="top">

`number` 



</td>
<td valign="top">

`10000` 



</td>
<td valign="top">

After the delay, the page remains blocked and the provided callback is invoked \(milliseconds\)



</td>
</tr>
<tr>
<td valign="top">

`blockEvents` 



</td>
<td valign="top">

`boolean` 



</td>
<td valign="top">

`true` 



</td>
<td valign="top">

Defines whether keyboard, mouse and touch events are blocked



</td>
</tr>
<tr>
<td valign="top">

`showBlockLayer` 



</td>
<td valign="top">

`boolean` 



</td>
<td valign="top">

`true` 



</td>
<td valign="top">

Defines whether an invisible block layer is rendered to prevent interaction with the UI



</td>
</tr>
<tr>
<td valign="top">

`allowSameOrigin` 



</td>
<td valign="top">

`boolean` 



</td>
<td valign="top">

`true` 



</td>
<td valign="top">

Defines whether same origin domains are allowed or not



</td>
</tr>
<tr>
<td valign="top">

`allowlist` 



</td>
<td valign="top">

`string[]` 



</td>
<td valign="top">



</td>
<td valign="top">

Contains the domain allowlist, for example `[".example.com"]`, `["hana.ondemand.com"]`.



</td>
</tr>
</table>

> ### Note:  
> The `frameOptionsConfig` can only be set via `window["sap-ui-config"]`. Wildcards are not supported.



## Example: `deny`

If the application is not intended to run in a frame, set `frameOptions` to `deny`:

```html
<script id='sap-ui-bootstrap'
    src='resources/sap-ui-core.js'
    data-sap-ui-frameOptions='deny'>
</script>
```



## Example: `trusted` with `callback` 

To restrict the embedding to same-origin domains, set `frameOptions` to `trusted`. The `callback` in the following code sample is called with a boolean as success state and can be used to implement an application-specific behavior.

```html

<script>
window["sap-ui-config"] = {
    frameOptions: 'trusted',
    frameOptionsConfig: {
        callback: function(bSuccess) {
            if (bSuccess) {
                alert("App is allowed to run!");
            } else {
                alert("App is not allowed to run!");
            }
        }
    }
};
</script>
<script id='sap-ui-bootstrap'
    src='resources/sap-ui-core.js'>
</script>
```



## Example: Allowlist Service

To allow that the SAPUI5 application is embedded in cross-origin domains, configure an allowlist service. The allowlist service checks whether the application can run in the parent origin, or not.

```html
<script>
window["sap-ui-config"] = {
    allowlistService: 'url/to/allowlist/service',
    frameOptions: 'trusted',
    frameOptionsConfig: {
        callback: function(bSuccess) {
            if (bSuccess) {
                alert("App is allowed to run!");
            } else {
                alert("App is not allowed to run!");
            }
        }
    }
};
</script>
<script id='sap-ui-bootstrap'
    src='resources/sap-ui-core.js'>
</script>
```



## Example: Allowlist Service via `<meta>` Tag

Alternatively, a `<meta>` tag can be used to configure the `allowlistService` and set the `frameOptions` to `trusted`. This only applies if the `allowlistService` or `frameOptions` configuration is not set in the SAPUI5 configuration.

```html
<meta name="sap.allowlistService" content="url/to/allowlist/service" />
<script  id='sap-ui-bootstrap'
    src='resources/sap-ui-core.js'>
</script>
```

**Related Information**  


[Allowlist Service](allowlist-service-d04a6d4.md "SAPUI5 supports the configuration of a central allowlist service.")

[Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md "The complete list of configuration options available in SAPUI5 can be found in the API Reference under sap.ui.core.Configuration. The following table shows a subset of the available configuration options.")

