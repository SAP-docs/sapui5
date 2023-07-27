<!-- loioa7ee9617bc794b6fad21e4df38e31128 -->

# TypeScript in SAPUI5

TypeScript is an extension of JavaScript that adds type information to the language. It helps developers catch errors early through type checking and by providing code assist in supporting code editors, for example through code completion and inline documentation.

The types can be seen as a complementary addition to improve your development experience and help you write applications in modern JavaScript. You may always remove them from your app again in case of any issues. Browsers can’t execute TypeScript directly; it needs to be transpiled to JavaScript, which can then be executed as usual.



<a name="loioa7ee9617bc794b6fad21e4df38e31128__section_wg2_31v_4xb"/>

## Delivery of the SAPUI5 Type Information

When writing TypeScript code, the type information can be scattered across the code. But you can also create separate type definition files for existing JavaScript libraries. For SAPUI5, we provide separate definition files that describe the SAPUI5 APIs and types. With the help of these definitions, you can write SAPUI5 apps in TypeScript and enjoy all the benefits that come with it.

SAPUI5 type definitions are provided via npm under the name `@sapui5/types`\(published directly by the OpenUI5 development team\) and `@types/openui5` \(maintained in the DefinitelyTyped infrastructure\).

Providing the type definitions as a separate package allows you to retain an older version of the types while upgrading the UI5 runtime, which is one of the options to mitigate incompatible changes of the types. For more information, see our [compatibility statement](typescript-in-sapui5-a7ee961.md#loioa7ee9617bc794b6fad21e4df38e31128__section_CSTD).



<a name="loioa7ee9617bc794b6fad21e4df38e31128__section_CSTD"/>

## Compatibility Statement for the SAPUI5 Type Definitions



### Further information

-   Documentation and resources: [UI5 & TypeScript](https://sap.github.io/ui5-typescript/)
-   Tutorial: [Learn App Development in UI5 and TypeScript](https://github.com/SAP-samples/ui5-typescript-tutorial)

npm Packages \(check the individual packages for licensing information\):

-   [UI5 type signatures on npm](https://www.npmjs.com/package/@sapui5/ts-types-esm)
-   [Babel preset UI5 transformer on npm](https://www.npmjs.com/package/babel-preset-transform-ui5) to transform ES modules and classes to classic UI5 code

