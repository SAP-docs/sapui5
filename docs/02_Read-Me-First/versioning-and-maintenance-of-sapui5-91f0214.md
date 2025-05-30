<!-- loio91f021426f4d1014b6dd926db0e91070 -->

# Versioning and Maintenance of SAPUI5

Versioning and maintenance strategy for SAPUI5.



<a name="loio91f021426f4d1014b6dd926db0e91070__section_DC50B59D56AC4B52A2DBEFADFA4B0E98"/>

## Version Designation

SAPUI5 uses a three-number version identifier, for example, 1.71.22. The numbers have the following meaning:

-   The first part \(1\) specifies the release number \(major version\).
-   The second part \(71\) specifies the version number \(minor version\).
-   The third part \(22\) specifies the patch number.

To view the documentation for a specific version, check at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html) which versions are available. You can view the version-specific Demo Kit by adding the version number to the URL, for example, `https://ui5.sap.com/1.71.22/` .

To get an overview of the new features of each version, see [What's New in SAPUI5](../01_Whats-New/what-s-new-in-sapui5-99ac68a.md). To see the fixes contained in each patch, check the [Change Log](https://ui5.sap.com/#/releasenotes.html).



<a name="loio91f021426f4d1014b6dd926db0e91070__section_dpk_pcw_dz"/>

## Maintenance Strategy

The general maintenance strategy for SAPUI5 when used on SAP Business Technology Platform \(SAP BTP\) is outlined in [this document](https://dam.sap.com/mac/app/p/pdf/asset/preview/oXKnvZV?ltr=a&rc=10&doi=SAP1203848). It represents the standard approach for managing SAPUI5 on SAP BTP and serves as the primary guideline for customers utilizing this deployment method.

> ### Note:  
> SAPUI5 is also included in various other SAP products \(such as SAP S/4HANA Cloud Private Edition and ABAP platform\). Customers who utilize SAPUI5 as part of these products may encounter maintenance strategies that differ from the one described for SAP BTP. For information on the applicable maintenance approach, see the specific documentation and guidelines provided within the respective SAP product.



## Availability of Multiple Versions on the Akamai Content Delivery Network

SAPUI5 resources are available on the Akamai content delivery network. There, you can also find multiple SAPUI5 versions, and you can use them in your code as described in [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).

Check the available versions with respective maintenance status at [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html).



<a name="loio91f021426f4d1014b6dd926db0e91070__section_b1g_xcw_dz"/>

## SAPUI5 Version

You can find which framework versions you use in your app in the [Technical Information Dialog](../04_Essentials/technical-information-dialog-616a3ef.md#loio616a3ef07f554e20a3adf749c11f64e9) \([Ctrl\] + [Shift\] + [Left Alt / Left Option\] + [P\] .

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

