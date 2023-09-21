<!-- loio8439949bbdc34141bd2b9194f91d42c2 -->

# TypeScript FAQ

Frequently asked questions regarding TypeScript in SAPUI5.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_obw_l5f_myb"/>

## What is TypeScript about?

TypeScript is an extension of JavaScript that enhances it with type information, enabling error detection through type checking and providing code assistance in numerous supporting code editors \(such as code completion and inline documentation\). It's important to note that browsers cannot directly execute TypeScript; a transpilation step is required.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_slg_v5f_myb"/>

## What is the overall approach for using TypeScript in SAPUI5 applications?

We publish type definition files describing all the SAPUI5 APIs and types. With the help of these definitions, the TypeScript tools can do their job and support writing SAPUI5 apps in TypeScript.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_awv_z5f_myb"/>

## How to set up a new SAPUI5 app for TypeScript development?

For detailed information on developing applications with SAPUI5, see [Developing Apps](../05_Developing_Apps/developing-apps-23cfd95.md). To write SAPUI5 apps in TypeScript and take advantage of its benefits, you also need to add TypeScript and the SAPUI5 type definitions as dev dependencies. Additionally, you must set up the TypeScript transpilation step. The [`ui5-typescript-helloworld`](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) project can serve as copy template and provides a detailed step-by-step guide for setting up a TypeScript project.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_rhs_fvf_myb"/>

## How can I get an end-to-end hands-on impression of creating and developing a SAPUI5 app in TypeScript?

You can follow the [`ui5-typescript`](https://github.com/SAP-samples/ui5-typescript-tutorial) tutorial, starting from scratch using an app template, extending the resulting app, and also covering advanced topics later on, like control development and integrating third-party libraries from npm.

To start even faster, see one of the following app templates:

-   [`generator-ui5-ts-app`](https://github.com/ui5-community/generator-ui5-ts-app): A plain app template that contains one view and basic routing setup and is explained in this blog post: [Getting Started with TypeScript for UI5 Application Development](https://blogs.sap.com/2021/07/01/getting-started-with-typescript-for-ui5-application-development/).

-   [`generator-ui5-ts-app-fcl`](https://github.com/ui5-community/generator-ui5-ts-app-fcl): A more comprehensive template including a FlexibleColumnLayout and allowing OData service and entity configuration within the wizard.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_u3x_rvf_myb"/>

## How to convert an existing SAPUI5 app to TypeScript?

You can follow the four steps explained in the [Converting SAPUI5 Apps from JavaScript to TypeScript](https://github.com/SAP-samples/ui5-cap-event-app/blob/typescript/docs/typescript.md#converting-ui5-apps-from-javascript-to-typescript) .



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_zvl_5wf_myb"/>

## How to test in TypeScript?

You can check the `testing` branch of the [`ui5-typescript-helloworld`](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/testing) sample app.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_prp_pwf_myb"/>

## How to develop custom controls in TypeScript?

Check the [TypeScript Guidelines](../09_Developing_Controls/typescript-guidelines-192397d.md).



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_bbj_bxf_myb"/>

## How to profit from TypeScript even when doing plain JavaScript development?

Check the `js-with-typescript-support` branch of the [`ui5-cap-event-app`](https://github.com/SAP-samples/ui5-cap-event-app/blob/js-with-typescript-support/README.md) sample app. It explains how to add TypeScript-based benefits to an existing JavaScript app without actually switching to TypeScript development.



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_pv1_gxf_myb"/>

## What are the TypeScript projects and releases provided by the SAPUI5 development team?

We provide type definitions, samples, and various tools. provides generated type definitions for the UI5 APIs, which let TypeScript understand all the involved types, so it can do its job. These definitions are provided both for SAPUI5 in two different flavors. The two flavors are:

-   The new type definitions \(`types`, used to be named `ts-types-esm` before version 1.113\) which require the loading of dependencies as ES modules like import Button from `sap/ui/Button`, encouraging the use of modern JavaScript language features.
-   The legacy type definitions \(`ts-types`\) which allow the usage of global objects like `sap.ui.Button`. However, we do not recommend their usage.


These are the different type definition packages:

-   The new type definitions: [@sapui5/types](https://www.npmjs.com/package/@sapui5/types)
-   The legacy type definitions: [@sapui5/ts-types](https://www.npmjs.com/package/@sapui5/ts-types)
-   For versions before 1.113 the `types` definitions are available under a different name: [@sapui5/ts-types-esm](https://www.npmjs.com/package/@sapui5/ts-types-esm)



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_ahv_j1g_myb"/>

## Are the type definitions ready for productive use?

They are ready for use since version 1.116.



