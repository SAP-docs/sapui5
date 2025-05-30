<!-- loiob72ccb50eda94ac9b9be454a03ca4213 -->

# The UI5 Ecosystem

This page contains some of the complementary offerings from the UI5 ecosystem - toolchains, generators, and other cool community projects.

<a name="loiod8ab43d845cd42ceb0aa4e47b44a8fcc"/>

<!-- loiod8ab43d845cd42ceb0aa4e47b44a8fcc -->

## UI5 Tooling



UI5 Tooling is a state-of-the-art way to develop SAPUI5 projects by consuming SAPUI5 via npm. It's an open-source, modular, configurable, and extensible CLI for efficient development of applications, libraries, and reuse components with the SAPUI5 framework. Here's what you get with this build and development tooling:

-   Reuse of open source tooling
-   Flexibility and extensibility
-   Easy integration
-   Enablement of modern language features
-   Support for any IDE of your choice



### Further Information

-   [UI5 Tooling on GitHub](https://sap.github.io/ui5-tooling/)

<a name="loiof9c9470583b2455c94bed2bf934e0f1f"/>

<!-- loiof9c9470583b2455c94bed2bf934e0f1f -->

## UI5 Linter



UI5 linter is a static code analysis tool for SAPUI5 projects. It checks JavaScript, TypeScript, XML, JSON, and other files in your project and reports findings.

UI5 linter scans your SAPUI5 project and detects issues that can prevent the project from running smoothly with SAPUI5 2.x.

-   Usage of deprecated SAPUI5 libraries
-   Usage of deprecated SAPUI5 framework APIs
-   Usage of global variables
-   Possible CSP violations
-   Deprecated component and manifest configurations
-   and many more



### Further Information

-   [UI5 linter on GitHub](https://github.com/SAP/ui5-linter)

<a name="loio702f08a7481e46688c5603385b5bdc68"/>

<!-- loio702f08a7481e46688c5603385b5bdc68 -->

## Easy-UI5 Generator



Easy-UI5 is an open-source Yeoman generator that should be used by everybody working with CLI tools to create simpleSAPUI5-based web-apps and other SAPUI5-related projects within seconds.

This generator has been created to simplify the creation of SAPUI5 prototypes. Now you can scaffold simple SAPUI5 projects from the shell/terminal of your choice. The current best practices \(such as async\) are already baked into our templates so you don't have to worry about the definition of the metadata files.

The purpose of this generator is to guide you through your first steps with SAPUI5 and SAP BTP deployments. Once you're familiar with those technologies, you might want to tweak the projects to adapt them for productive use cases \(such as continuous deployment pipelines and full i18n\).



### Further Information

-   [Easy-UI5 on GitHub](https://github.com/SAP/generator-easy-ui5)
-   [Easy-UI5 on NPMJS](https://www.npmjs.com/package/generator-easy-ui5)
-   Blog post: [Easy-UI5 3.0 – From Community Contributions to Community Plugins](https://blogs.sap.com/2021/04/09/easy-ui5-3.0-from-community-contributions-to-community-plugins/)

<a name="loioab4f18de7652442da85fc08b38a8a8ce"/>

<!-- loioab4f18de7652442da85fc08b38a8a8ce -->

## UI5-TypeScript



TypeScript is an extension of JavaScript that adds type information to the language. It helps developers catch errors early through type checking and by providing code assist in many supporting code editors \(for example, through code completion and inline documentation\). Browsers can't execute TypeScript directly, it needs to be transpiled to JavaScript, which can then be executed as usual.

For SAPUI5, we have published definition files that contain type definitions describing the SAPUI5 APIs and types. With the help of these definitions, you can write SAPUI5 apps in TypeScript and enjoy all the benefits that come with it.



<a name="loioab4f18de7652442da85fc08b38a8a8ce__section_grr_32p_k5c"/>

## Related Information

[Main topic: TypeScript Support in UI5](typescript-support-a7ee961.md)

External resources:

-   Documentation and resources: [UI5 & TypeScript](https://sap.github.io/ui5-typescript/)
-   Tutorial: [Learn App Development in UI5 and TypeScript](https://github.com/SAP-samples/ui5-typescript-tutorial)

npm packages \(check the individual packages for licensing information\):

-   [UI5 type signatures on npm](https://www.npmjs.com/package/@sapui5/ts-types-esm)
-   [Babel preset UI5 transformer on npm](https://www.npmjs.com/package/babel-preset-transform-ui5) to transform ES modules and classes to classic UI5 code
-   [TypeScript interface generator for control development on npm](https://www.npmjs.com/package/@ui5/ts-interface-generator) to support UI5 control development in TypeScript

<a name="loio6978a6087e8540c4a268fccafd8474da"/>

<!-- loio6978a6087e8540c4a268fccafd8474da -->

## UI5 Web Components



**Web Components** \(`https://www.webcomponents.org/introduction`\) are custom HTML tags based on standard web APIs like Custom Elements and Shadow DOM, supported by all modern browsers and compatible with most HTML-based UI frameworks.

[**UI5 Web Components**](https://sap.github.io/ui5-webcomponents/) is an open-source library developed by the UI5 team according to the SAP Fiori design, offering lightweight, framework-agnostic components with theming, accessibility, and internationalization support. Built on native Web Components, they integrate easily into any UI framework.

SAPUI5 supports embedding UI5 Web Components, translating their metadata into SAPUI5 controls. This enables seamless integration, including properties, events, and methods, within SAPUI5 applications. For more information, see [Using Web Components](../04_Essentials/using-web-components-1c80793.md).



### Further Information

-   [GitHub repository](https://github.com/SAP/ui5-webcomponents)

-   [Official site](https://sap.github.io/ui5-webcomponents/)


<a name="loiof92b537272ba43abbfc157ba4ec8f010"/>

<!-- loiof92b537272ba43abbfc157ba4ec8f010 -->

## wdi5



wdi5 is a Webdriver.IO service that uses SAPUI5's test API. It is designed to run cross-platform end-to-end tests on a SAPUI5 application with selectors that are compatible to OPA5.



### Further Information

-   [wdi5 on GitHub](https://ui5-community.github.io/wdi5/#/)

-   [wdi5 on NPMJS](https://www.npmjs.com/package/wdio-ui5-service)


<a name="loio23a0a11a88df42578b5baae11c06a89b"/>

<!-- loio23a0a11a88df42578b5baae11c06a89b -->

## Best of UI5

The Best of UI5 page lists a number projects related to the UI5 ecosystem. It includes UI5 tooling extensions \(tasks and middlewares\), Easy-UI5 subgenerators, custom UI5 libraries, as well as custom UI5 controls \(as standalone NPM packages\). It's the central place to find reusable projects around UI5.

It's entirely comminuty-based, so any new additions are welcome!





### Further Information

-   [https://bestofui5.org/](https://bestofui5.org/)

