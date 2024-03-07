<!-- loio3510034eb6274fd8a8fb7d65c2f1aa46 -->

# Step 6: Modules \(TypeScript\)

In SAPUI5, resources are often referred to as modules. In this step, we replace the alert from the last exercise with a proper Message Toast from the `sap.m` library.



## Preview

  
  
**A message toast displays the "Hello World" message**

![A message toast displays the Hello World message](images/UI5_Walkthrough_Step_06_2f629a9.png "A message toast displays the "Hello World" message")



<a name="loio3510034eb6274fd8a8fb7d65c2f1aa46__section_nlr_cvc_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 6: Modules](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/06) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-06.zip).



<a name="loio3510034eb6274fd8a8fb7d65c2f1aa46__section_olr_cvc_syb"/>

## webapp/controller/App.controller.ts

We now replace the native `alert` function with the `show` method of the `sap/m/MessageToast` control of SAPUI5. For this, we extend the imports with the `sap/m/MessageToast` module.

```js
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
    onShowHello(): void {
        MessageToast.show("Hello World");
     }
};
```

For now, the message toast just displays a static "Hello World" message. We'll show how to load a translated text here in [Step 8: Translatable Texts \(TypeScript\)](step-8-translatable-texts-typescript-4dcf52e.md).

**Related Information**  


[API Reference: `sap.m.MessageToast`](https://ui5.sap.com/#/api/sap.m.MessageToast)

