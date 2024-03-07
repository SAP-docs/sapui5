<!-- loioa8bd1a8c4183412fb5ed6abb434a9ed2 -->

# Don't Use Deprecated or Experimental Features

To keep your apps future proof and up to date with the latest improvements, you should only use artifacts \(such as features, APIs, themes, etc.\) that are still actively developed.



<a name="loioa8bd1a8c4183412fb5ed6abb434a9ed2__section_dd2_pfb_rzb"/>

## Deprecated Artifacts

If an artifact is no longer developed, we mark it as deprecated. Usually, the deprecated artifact is replaced by a newer and better alternative.

You can usually still use deprecated artifacts for a while - they will remain part of the codeline until they are removed. However: This is not recommended since you can't expect the artifact to be developed any further. In addition, any deprecated artifact can be removed from the codeline entirely with one of the next SAPUI5 releases. If you update your app to a SAPUI5 version that doesn't contain the deprecated artifact any longer, your app will potentially break.

> ### Remember:  
> If you want to make sure that your app is future proof and stays compatible with new versions of SAPUI5, make sure that you don't use deprecated artifacts.

APIs that have been flagged as deprecated can be found in the API Reference: [API Reference: `deprecated`](https://ui5.sap.com/#/api/deprecated). To find more information on the topic of deprecations, check the **Related information** section.



<a name="loioa8bd1a8c4183412fb5ed6abb434a9ed2__section_g15_kvh_rzb"/>

## Experimental APIs

Some features delivered with SAPUI5 are flagged as **experimental**. These experimental features are not part of the officially delivered scope that is guaranteed for future releases. Their purpose is to get user feedback at an early point of time, allowing customers or partners to influence the potential future feature accordingly.

Feel free to test those features, but **do not** use experimental features or controls in a productive environment or with data that has not been sufficiently backed up.

> ### Remember:  
> Experimental features and controls can be changed or deleted at any time without notice and without a formal deprecation process. They may also be incompatible to changes provided in an upgrade. So, be careful!

APIs that have been flagged as experimental can be found in the API Reference: [API Reference: `experimental`](https://ui5.sap.com/#/api/experimental).

**Related Information**  


[Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md "The following sections describe what SAP can change in major, minor, and patch releases. Always consider these rules when developing apps, features, or controls with or for SAPUI5.")

[Deprecated Themes and Libraries](../02_Read-Me-First/deprecated-themes-and-libraries-a87ca84.md "As SAPUI5 evolves over time, some of the UI controls are replaced by others, or their concepts abandoned entirely. This chapter gives an overview of the most important deprecations at theme and library level. Individual control deprecations and more information about the controls replacing them can be found in the API reference within the Demo Kit.")

[Upgrading](../02_Read-Me-First/upgrading-9638e4f.md "The following sections describe what you have to consider when upgrading to a new version of SAPUI5.")

