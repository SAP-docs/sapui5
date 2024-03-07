<!-- loio91f021426f4d1014b6dd926db0e91070 -->

# Versioning and Maintenance of SAPUI5

Versioning and maintenance strategy for SAPUI5.



SAPUI5 uses a three-number version identifier, for example 1.71.22 The numbers have the following meaning:

-   The first part \(1\) specifies the release number \(major version\).
-   The second part \(71\) specifies the version number \(minor version\).
-   The third part \(22\) specifies the patch number.

To view the documentation for a specific version, check at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html) which versions are available. You can view the version-specific Demo Kit by adding the version number to the URL, for example, `https://ui5.sap.com/1.71.22/`.

To get an overview of the new features of each version, see [What's New in SAPUI5](../01_Whats-New/what-s-new-in-sapui5-99ac68a.md), to see the fixes contained in each patch check the [Change Log](https://ui5.sap.com/#/releasenotes.html).



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


For example, the following versions have a long-term maintenance:

-   1.38, which is included in SAP\_UI 7.50 and UI add-on 2.0

-   1.52, which is included in SAP\_UI 7.52

-   1.60, which is included in SAP\_UI 7.53

-   1.71, which is included in SAP\_UI 7.54


In the version overview at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html), you can see which of the SAPUI5 versions have an extended maintenance.

For more information on the SAPUI5 maintenance strategy for SAP NetWeaver AS for ABAP, see SAP Note [2217489](https://me.sap.com/notes/2217489).



## Availability of Multiple Versions on the Akamai Content Delivery Network

SAPUI5 resources are available on the Akamai content delivery network. There, you can also find multiple SAPUI5 versions, and you can use them in your code as described in [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).

Check the available versions with respective maintenance status at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html).



<a name="loio91f021426f4d1014b6dd926db0e91070__section_b1g_xcw_dz"/>

## SAPUI5 Version vs. OpenUI5 Version \(Core Version\)

You can find which patch versions you use in your app in the technical information dialog \([Ctrl\] + [Left Alt\] + [Shift\] + [P\] \).

The patch version number of the SAPUI5 version and the OpenUI5 version that is included, may be different.

OpenUI5 includes the core runtime libraries and some additional libraries.

To access the SAPUI5 or OpenUI5 version at runtime, you can use the following code:

```js
sap.ui.require([
    "sap/ui/VersionInfo",
    "sap/base/util/Version"
], function(VersionInfo, VersionUtil) {
    //access the SAPUI5 version at runtime
    VersionInfo.load().then(function(oCurrentVersionInfo) {
        var oSAPUI5Version = new VersionUtil(oCurrentVersionInfo.version);
        // ...
    });
});
```

```js
sap.ui.require([
    "sap/ui/VersionInfo",
    "sap/base/util/Version"
], function(VersionInfo, VersionUtil) {
    //access the OpenUI5 version at runtime
    VersionInfo.load().then(function(oCurrentVersionInfo) {
        var oOpenUI5Version = new VersionUtil(oCurrentVersionInfo.version);
        // ...
    });
});
```

To access the OpenUI5 version \(core version\) at runtime, you use the following code:

```js
var oConfig = sap.ui.getCore().getConfiguration();
var oVersion = oConfig.getVersion();

```

For more information, see [SAPUI5 vs. OpenUI5](sapui5-vs-openui5-5982a97.md).

