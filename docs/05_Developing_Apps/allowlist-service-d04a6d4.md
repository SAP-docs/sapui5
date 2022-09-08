<!-- loiod04a6d41480c4396af16b5d2b25509ec -->

# Allowlist Service

SAPUI5 supports the configuration of a central allowlist service.

`frameOptions` uses the allowlist service to determine whether the application should run in the parent origin or not. The allowlist service call uses the parent origin as URI parameter \(URL encoded\) as follows:

```
GET url/to/allowlist/service?parentOrigin=https://parent.domain.com
```

The service responds to the request with a valid JSON:

```js

{
    "version" : "1.0",
    "active"  : true | false,                   // defines if entry is active (if not, framing will be allowed per default)
    "origin"  : "<same as passed to service>",
    "framing" : true | false                    // if active, describes if framing should be allowed (see FrameOptions)
}
```

**Related Information**  


[Frame Options](frame-options-62d9c4d.md "frameOptions is used to prevent security vulnerabilities like clickjacking. With the frameOptions configuration you define whether SAPUI5 is allowed to run embedded in a frame or only from trusted origins or not at all.")

[Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md "The complete list of configuration options available in SAPUI5 can be found in the API Reference under sap.ui.core.Configuration. The following table shows a subset of the available configuration options.")

