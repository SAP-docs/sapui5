<!-- loioeded636b85584cd586b1fe231d2b5dac -->

# JavaScript Coding Guidelines

Provides an overview of the guidelines for JavaScript coding for SAPUI5.

For JavaScript, the following **general** guidelines apply:

-   Do **not** use global JavaScript variables. For more information, see [Modules and Dependencies](../04_Essentials/modules-and-dependencies-91f23a7.md).

-   Do **not** access internal \(private\) members of other objects.

-   Do **not** use the browser-native `console` object to produce a console output. Use the [`sap/base/log`](https://ui5.sap.com/#/api/module:sap/base/Log) module and its respective methods to create log entries.

-   Do **not** override SAPUI5 code \(JavaScript, CSS, etc.\). Such modifications may break parts of other SAPUI5 projects.


