<!-- loio8439949bbdc34141bd2b9194f91d42c2 -->

# TypeScript FAQ



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_llg_15n_hyb"/>

## Contents

-   [What is TypeScript about?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__whatists)
-   [What is the overall approach for using TypeScript in UI5 applications?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__approach)
-   [How to set up a new UI5 app for TypeScript development?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__howto)
-   [How can I get an end-to-end hands-on impression of creating and developing a UI5 app in TypeScript?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__handson)
-   [How to develop custom controls in TypeScript?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__customcontrols)
-   [How to use third-party libraries from npm in UI5 apps?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__thirdpartylib)
-   [How to test in TypeScript?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__test)
-   [How to profit from TypeScript even when doing plain JavaScript development?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__profitfromts)
-   [Are the type definitions ready for productive use?](typescript-faq-8439949.md#loio8439949bbdc34141bd2b9194f91d42c2__productiveuse)



<a name="loio8439949bbdc34141bd2b9194f91d42c2__section_vn1_b5n_hyb"/>

## FAQ



### What is TypeScript about?

TypeScript is an extension of JavaScript that enhances it with type information, enabling error detection through type checking and providing code assistance in numerous supporting code editors \(such as code completion and inline documentation\). It's important to note that browsers cannot directly execute TypeScript; a transpilation step is required.



### What is the overall approach for using TypeScript in UI5 applications?

We publish type definition files describing all the UI5 APIs and types. With the help of these definitions, the TypeScript tools can do their job and support writing UI5 apps in TypeScript.



### How to set up a new UI5 app for TypeScript development?

By adding TypeScript and the UI5 type definitions as dev dependencies and setting up the transpilation step. The [`ui5-typescript-helloworld`](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md) project can serve as copy template and provides a detailed step-by-step guide for setting up a TypeScript project.



### How can I get an end-to-end hands-on impression of creating and developing a UI5 app in TypeScript?

You can follow the [`ui5-typescript`](https://github.com/SAP-samples/ui5-typescript-tutorial) tutorial, starting from scratch using an app template, extending the resulting app, and also covering advanced topics later on, like control development and integrating third-party libraries from npm.

To start even faster, see one of the following app templates:

-   [generator-ui5-ts-app-fcl](https://github.com/ui5-community/generator-ui5-ts-app-fcl): A plain app template that contains one view and basic routing setup and is explained in this blog post: [Getting Started with TypeScript for UI5 Application Development](https://blogs.sap.com/2021/07/01/getting-started-with-typescript-for-ui5-application-development/).

-   [`generator-ui5-ts-app-fcl`](https://github.com/ui5-community/generator-ui5-ts-app-fcl): A more comprehensive template including a FlexibleColumnLayout and allowing OData service and entity configuration within the wizard.



### How to develop custom controls in TypeScript?

You can check the [TypeScript Guidelines](../09_Developing_Controls/typescript-guidelines-192397d.md).



### How to use third-party libraries from npm in UI5 apps?

Third-party libraries written for running in a browser environment can be easily used with very natural `npm install` and import `<moduleName>` from `dependencyName`, resulting in code completion for those libraries and automatic transpiling into UI5’s own AMD-like module format.



### How to test in TypeScript?

You can see the `testing` branch of the [`ui5-typescript-helloworld`](https://github.com/SAP-samples/ui5-typescript-helloworld/tree/testing) sample app.



### How to profit from TypeScript even when doing plain JavaScript development?

You can see the `js-with-typescript-support` branch of the [`ui5-cap-event-app`](https://github.com/SAP-samples/ui5-cap-event-app/blob/js-with-typescript-support/README.md) sample app. It explains how to add TypeScript-based benefits to an existing JavaScript app without actually switching to TypeScript development.



### Are the type definitions ready for productive use?

They are ready for use since version 1.116.

