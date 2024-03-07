<!-- loio62d9c4d8f5ad49aa914624af9551beb7 -->

# Frame Options

`frame-options` is used to prevent security vulnerabilities like clickjacking. With the `frame-options` configuration you define whether SAPUI5 is allowed to run embedded in a frame or only from trusted origins or not at all.

SAPUI5 provides the following configuration options for `frame-options`:


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

With `frame-options-config` the following additional configuration options can be set:


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
> The `frame-options-config` cannot be set via URL. Wildcards are not supported.



## Example: `deny`

If the application is not intended to run in a frame, set `frame-options` to `deny`:

```html
<script id='sap-ui-bootstrap'
    src='resources/sap-ui-core.js'
    data-sap-ui-frame-options='deny'>
</script>
```



## Example: `trusted` with `callback` 

To restrict the embedding to same-origin domains, set `frame-options` to `trusted`. The `callback` in the following code sample is called with a boolean as success state and can be used to implement an application-specific behavior.

```html

<script>
globalThis["sap-ui-config"] = {
    frame-options: 'trusted',
    frame-options-config: {
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
globalThis["sap-ui-config"] = {
    allowlist-service: 'url/to/allowlist/service',
    frame-options: 'trusted',
    frame-options-config: {
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

Alternatively, a `<meta>` tag can be used to configure the `sap-allowlist-service` and set the `sap-ui-frame-options` to `trusted`. This only applies if the `allowlist-service` or `frame-options` configuration is not set otherwise according to the [Configuration of the SAPUI5 Runtime](../04_Essentials/configuration-of-the-sapui5-runtime-91f08de.md).

```html
<meta name="sap-allowlist-service" content="url/to/allowlist/service" />
<script  id='sap-ui-bootstrap'
    src='resources/sap-ui-core.js'>
</script>
```

**Related Information**  


[Allowlist Service](allowlist-service-d04a6d4.md "SAPUI5 supports the configuration of a central allowlist service.")

[Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md "The following tables show available configuration options.")

