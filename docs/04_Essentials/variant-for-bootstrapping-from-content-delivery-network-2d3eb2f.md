<!-- loio2d3eb2f322ea4a82983c1c62a33ec4ae -->

# Variant for Bootstrapping from Content Delivery Network

SAPUI5 can either be loaded locally with a relative path from an SAP Web server or externally from a Content Delivery Network \(CDN\). 

> ### Note:  
> Loading SAPUI5 from a CDN improves your app performance: You can load from a server that \(in most cases\) is much closer to your location, and you can benefit from the caching mechanism and the language fallback logic.



<a name="loio2d3eb2f322ea4a82983c1c62a33ec4ae__section_CDN"/>

## Bootstrapping From SAPUI5 CDN

SAPUI5 application hosted on SAP BTP as well as applications loaded via the SAP Launchpad service into the launchpad on SAP BTP are allowed to leverage the SAPUI5 CDN to retrieve the SAPUI5 distribution layer artifacts.

> ### Note:  
> To ensure outdated versions no longer pose a potential security risk, SAP removes SAPUI5 versions from the SAPUI5 CDN one year after their end of maintenance. Also patches of versions in maintenance which are older than one year will be removed. For more information, see SAP Note [3001696](https://me.sap.com/notes/3001696). The end dates for the cloud provisioning of SAPUI5 versions and patches can be found at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html)



### Specific Version

The specific version allows you to select a particular fixed version for bootstrapping. You can refer to a specific version by using a versioned URL as in the following example:

```html
<script id="sap-ui-bootstrap"
    src="https://ui5.sap.com/1.129.0/resources/sap-ui-core.js"
    data-sap-ui-async="true"
    data-...="...">
</script>
```

The first segment of the URL after the host name is used to specify a concrete version, which needs to be provided in the following form: *`<majorVersion>.<minorVersion>.<patchNumber>`*. For more information, see [Versioning and Maintenance of SAPUI5](../02_Read-Me-First/versioning-and-maintenance-of-sapui5-91f0214.md).

Check the available versions with the respective maintenance status at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html).



### Evergreen Version

The evergreen version allows you to automatically select the latest available patch level of a specific \(minor\) long-term maintenance version for bootstrapping. You refer to a major.minor long-term maintenance version using a versioned URL as in the following example:

```html
<head>
    <!-- ... -->
    <script id="sap-ui-bootstrap"
        src="https://ui5.sap.com/1.120/resources/sap-ui-core.js"
        data-sap-ui-async="true"
        data-sap-ui-on-init="module:sap/ui/core/ComponentSupport"
        data-sap-ui-resource-roots='{ "my.app": "./" }'
        data-sap-ui-compat-version="edge">
    </script>
</head>
<body id="content" class="sapUiBody">
    <div data-sap-ui-component
        data-id="myComponentContainer"
        data-name="my.app"
        data-height="100%"
        data-settings='{ "id": "myComponent" }'
        data-...="...">
    </div>
</body>
```

The first segment of the URL after the host name is used to specify an evergreen version, which needs to be provided in the following version number combination: *`<majorVersion>.<minorVersion>`* without a patch number. For more information, see [Versioning and Maintenance of SAPUI5](../02_Read-Me-First/versioning-and-maintenance-of-sapui5-91f0214.md). All long-term maintenance versions \>= 1.71 can be used as evergreen versions to bootstrap SAPUI5 applications. You can find the available versions with long-term maintenance status at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html).

When using the patch-level independent bootstrap you must use `data-sap-ui-async="true"` and the `data-sap-ui-on-init` callback. Ideally, you refer to a module, for example `sap/ui/core/ComponentSupport` to bootstrap your Component; see [Declarative API for Initial Components](declarative-api-for-initial-components-82a0fce.md). You can also refer to a custom module.

> ### Note:  
> Evergreen versions only support asynchronous bootstrapping. Therefore, the `data-sap-ui-async` bootstrap attribute must be set to `true`.
> 
> A consequence of asynchronous bootstrapping is that `sap-ui-debug=true` does not work when you bootstrap an evergreen version. You need to explicitly include the namespace of the modules you want to see the debug sources for, for example by specifying `sap-ui-debug=sap/` to include the `sap/*` namespace, or `sap-ui-debug=sap/,xyz/app/` to include more than one namespace. For more information, see the blog post [SAPUI5 – Patch-Level Independent Bootstrap](https://blogs.sap.com/2022/04/14/sapui5-patch-level-independent-bootstrap/).



### Default Version

The default version of our libraries has the generic URL `https://ui5.sap.com/resources/sap-ui-core.js` \(SAPUI5\). Approximately 2 weeks after the release of a new SAPUI5 version, this version becomes the default version.

> ### Caution:  
> The default version is constantly being upgraded and this might have an impact on the stability of your application. Use this version for testing purposes only.



### Cache Control

The cache control is different for dynamic and static resources. If you refer to the latest maintenance version \(dynamic\), you have a maximum cache age of one week, if you refer to a specific \(static\) version, you have a maximum cache age of 10 years. In both cases, cross-origin resource sharing \(CORS\) headers are set, so that you can consume resources from the central location without any proxy in between.

> ### Note:  
> The Cache Buster is only needed if you consume SAPUI5 without a concrete version in the URL. When you consume SAPUI5 with the concrete version in the URL, this is not needed, as the content served by that unique URLs will never change and can be cached forever.



## Bootstrapping from Custom CDN

SAPUI5 applications hosted on platforms other than SAP BTP can leverage a custom CDN to retrieve the SAPUI5 distribution layer artifacts. For this, the SAPUI5 distribution layer artifacts must be deployed on an SAP web server.

To use your custom CDN with the SAPUI5 ABAP repository, you need to configure this CDN as an external location in the customizing. For more information, see the documentation for the customizing activity *Configure SAPUI5 Bootstrapping* in Customizing under *SAP NetWeaver* \> *UI Technologies* \> *SAPUI5*.

**Related Information**  


[Multi-Version Availability of SAPUI5](https://blogs.sap.com/2015/07/30/multi-version-availability-of-sapui5)

[Set Up a CDN for SAPUI5 on Your On-Premise SAP ABAP Server](https://blogs.sap.com/2021/08/17/set-up-a-cdn-for-sapui5-on-your-on-premise-sap-abap-server/)

[Versioning and Maintenance of SAPUI5](../02_Read-Me-First/versioning-and-maintenance-of-sapui5-91f0214.md "Versioning and maintenance strategy for SAPUI5.")

