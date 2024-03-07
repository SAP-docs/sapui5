<!-- loio5982a9734748474aa8d4af9c3d8f31c0 -->

# SAPUI5 vs. OpenUI5

With SAPUI5 and OpenUI5 we provide two deliveries of our UI development toolkit. Both are very closely related, but have their differences.



## Licenses

The main difference is the license.

**OpenUI5** is Open Source, free to use, released under the Apache 2.0 license. Since we also use many Open Source libraries, we try to return the favor and also benefit from the experience and knowledge of developers all over the world.

**SAPUI5** is integrated, for example, in the following products:

-   SAP HANA

-   SAP Business Technology Platform

-   SAP NetWeaver 7.4 or higher as well as ABAP platform 1809 or higher \(included in the UI technologies \(`SAP_UI`\) component\)

-   User interface add-on for SAP NetWeaver Application Server 7.3x




## Content

The easiest way to get an overview of which libraries are delivered is to have a look at the *API Reference* of each Demo Kit. You'll see that the list of libraries in SAPUI5 is much longer... which in no way means that OpenUI5 provides just a very limited scope!

Most importantly, the core containing all central functionality and the most commonly used control libraries is identical in both deliveries. \(For example, `sap.m`, `sap.ui.layout`, `sap.ui.unified`.\)

So OpenUI5 also gives you all the important features needed to build feature-rich Web applications.

The additional libraries in SAPUI5 include more controls on top, like charts, and SAPUI5 also lets you use 'smart controls', for example, which are controls that are automatically configured by OData annotations from the back end. The exact feature range of SAPUI5 also depends on the platform you're using. For example, you can only use the ABAP repository with SAP NetWeaver and not on SAP BTP.



## Contributing to OpenUI5

OpenUI5 is Open Source, and is available on [GitHub](https://github.com/SAP/openui5/).

If you find a bug or have an idea for a new feature - just go ahead and propose a GitHub issue or a change. But before you do so, please just read our guidelines first: [Contributing to OpenUI5](https://github.com/SAP/openui5/blob/-/CONTRIBUTING.md).



## Resources

For the OpenUI5 version, visit [https://openui5.org/](https://openui5.org/) where you can download the runtime and the Demo Kit \(SDK\) at [https://openui5.org/releases/](https://openui5.org/releases/).

For the SAPUI5 resources, check your platform installation.

Both resources are also available online via the content delivery network provider Akamai at `https://sdk.openui5.org/` and `https://ui5.sap.com/`.



## Compatibility of OpenUI5 and SAPUI5

Technically, you can switch between OpenUI5 and SAPUI5 \(provided you have a product where SAPUI5 is included\), for example, if you want to use the SAPUI5-specific features.

Just check first which SAPUI5 version you need, because the version numbers of OpenUI5 and SAPUI5 might differ on patch level \(last number\). You can find this information in the technical information dialog \([Ctrl\] + [Alt\] + [Shift\] + [P\] \).

If you're using the content delivery network, you can simply replace the bootstrapping reference to `https://sdk.openui5.org/<1.xx.yy>/` with a reference to `https://ui5.sap.com/<1.xx.zz>/`. For more information, see [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).

For all other cases, replace the runtime. Since the technical names \(of controls, libraries, etc.\) and APIs are the same in both OpenUI5 and SAPUI5, the code will still work and you can start enhancing it directly.

