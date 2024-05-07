<!-- loio91f021426f4d1014b6dd926db0e91070 -->

# Versioning and Maintenance of SAPUI5

Versioning and maintenance strategy for SAPUI5.



SAPUI5 uses a three-number version identifier, for example, 1.71.22. The numbers have the following meaning:

-   The first part \(1\) specifies the release number \(major version\).
-   The second part \(71\) specifies the version number \(minor version\).
-   The third part \(22\) specifies the patch number.

To view the documentation for a specific version, check at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html) which versions are available. You can view the version-specific Demo Kit by adding the version number to the URL, for example, `https://ui5.sap.com/1.71.22/` .

To get an overview of the new features of each version, see [What's New in SAPUI5](../01_Whats-New/what-s-new-in-sapui5-99ac68a.md). To see the fixes contained in each patch, check the [Change Log](https://ui5.sap.com/#/releasenotes.html).



<a name="loio91f021426f4d1014b6dd926db0e91070__section_dpk_pcw_dz"/>

## Maintenance Strategy

Every month, SAPUI5 releases a new version for productive usage:

-   On SAP Business Technology Platform, all SAPUI5 versions are shipped.

-   On AS ABAP, only two SAPUI5 versions per year are shipped as part of the SAP\_UI component.


The release strategy follows the principle of “one innovation code line”: Subsequent versions ensure continuous innovation with an evolving code line.The default version of our libraries has the generic URL [https://ui5.sap.com/resources/sap-ui-core.js](https://ui5.sap.com/resources/sap-ui-core.js) \(SAPUI5\). Approximately 2 weeks after the release of a new SAPUI5 version, this version becomes the default version.

Once a year, a version with long-term support is releasedand available on both SAP platforms. This SAPUI5 version is included in a release of the SAP\_UI component, usually as part of SP02 of the respective SAP\_UI release. All other versions do not have a maintenance period and no patches are provided. Required fixes are available with the next minor versions together with the new features. However, in exceptional cases, also the most recent version may be patched with correction code.

For the decision to consume a new version, we recommend the following guideline:

-   For SAP BTP, we recommend upgrading to the latest available SAPUI5 version, because this includes the latest capabilities, patches, and security fixes.

-   For AS ABAP/SAP Fiori front-end server, or in case regular version updates are not feasible, we recommend updating to the respective long-term maintenance versions as outlined in the *Minimal Installation Requirements* and *SAP Fiori Frontend Server* notes.


In the version overview at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html), you can see which of the SAPUI5 versions have an extended maintenance.

For more information on the SAPUI5 maintenance strategy for SAP NetWeaver AS for ABAP, see SAP Note [2217489](https://me.sap.com/notes/2217489).



## Availability of Multiple Versions on the Akamai Content Delivery Network

SAPUI5 resources are available on the Akamai content delivery network. There, you can also find multiple SAPUI5 versions, and you can use them in your code as described in [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).

Check the available versions with respective maintenance status at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html).



<a name="loio91f021426f4d1014b6dd926db0e91070__section_b1g_xcw_dz"/>

## SAPUI5 Version

You can find which framework versions you use in your app in the [Technical Information Dialog](../04_Essentials/technical-information-dialog-616a3ef.md#loio616a3ef07f554e20a3adf749c11f64e9) \([Ctrl\] + [Shift\] + [Left Alt\] /[Option\] + [P\] \).

To access the SAPUI5 version at runtime, you can use the following code:

```js
sap.ui.require([
    "sap/ui/VersionInfo",
    "sap/base/util/Version"
], (VersionInfo, VersionUtil) => {
    VersionInfo.load().then(oCurrentVersionInfo => {
    const oSAPUI5Version = new VersionUtil(oCurrentVersionInfo.version);
        // ...
    });
});
```

The patch version number of the OpenUI5 version \(contained in the SAPUI5 distribution\) may be different, as OpenUI5 includes mainly the core runtime libraries. For more information, see [SAPUI5 vs. OpenUI5](sapui5-vs-openui5-5982a97.md).

To access specifically the OpenUI5 version within an SAPUI5 application at runtime, simply use the `sap/ui/VersionInfo.load` API as in the sample above, but with "`sap.ui.core`" as a `library` argument.

> ### Note:  
> Standalone apps, e.g. apps using the `self-contained` build of [UI5 Tooling](https://sap.github.io/ui5-tooling), will report the version of the app itself. Only if the framework resources are provided by a content delivery network \(CDN\) or a similar shared installation will the main version of the framework be retrieved as shown above.

