<!-- loio89b14ce0a65c44c3a96f68ecc50fcc11 -->

# Upgrading from a Version Below 1.89



## Removal of Third-party Software

Support for Microsoft Internet Explorer 11 ended with SAPUI5 1.88. Consequently, the following third-party code has now been removed:

-   ECMAScript 6 compatibility shims for legacy JavaScript engines
-   es6-promise
-   Flexie.js
-   Object.assign Polyfill
-   String.prototype Polyfill \(endsWith | includes | repeat | startswith\)
-   unorm.js

For a list of the third-party open source software used in SAPUI5, choose *More Information* → *About* and select the *Included Third-Party Software* link.



<a name="loio89b14ce0a65c44c3a96f68ecc50fcc11__section_c5d_d3q_gpb"/>

## jQuery Version Upgrade

As of SAPUI5 1.89, the jQuery third-party library is upgraded from jQuery 3.5.1 to jQuery 3.6.0. Typical UI5 applications should not be affected by this minor version upgrade, unlike the situation for the previous major version upgrade, for which you may again consult [Upgrading from a Version Below 1.82](upgrading-from-a-version-below-1-82-147eef9.md).

