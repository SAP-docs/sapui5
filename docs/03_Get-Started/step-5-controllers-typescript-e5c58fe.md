<!-- loioe5c58fe81fed4d31988be6899c1188e7 -->

# Step 5: Controllers \(TypeScript\)

In this step, we replace the text with a button and show the “Hello World” message when the button is pressed. The handling of the button's `press` event is implemented in the controller of the view.



## Preview

  
  
**A Say Hello button is added**

![A Say Hello button is added](images/UI5_Walkthrough_Step_05_cedfdf8.png "A Say Hello button is added")



<a name="loioe5c58fe81fed4d31988be6899c1188e7__section_yqd_crc_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 5: Controllers](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/05) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-05.zip).



<a name="loioe5c58fe81fed4d31988be6899c1188e7__section_cyr_snf_lzb"/>

## webapp/controller/App.controller.ts \(New\)

First of all, we need a controller for our app view that defines how the view should react to user inputs, such as a button press event.

We create the folder `webapp/controller` and a new file `App.controller.ts` inside. We define the app controller in its own file by extending the SAPUI5-provided `sap/ui/core/mvc/Controller`. In the beginning, it holds only a single function called `onShowHello` that shows an alert.

```js
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
    onShowHello(): void {
        // show a native JavaScript alert
        alert("Hello World");
     }
};
```



<a name="loioe5c58fe81fed4d31988be6899c1188e7__section_zqd_crc_syb"/>

## webapp/view/App.view.xml

We add a reference to the controller by setting the `controllerName` attribute of the view. This way we get access to the event handlers and other functionalities defined in the controller.

We also replace the text control with a button with text “Say Hello” and assign a press event to it. When pressed, the button triggers the `onShowHello` event handler function we introduced in the controller of the view. To point out that the press event handler of the button is located in the controller of the view and not in the Global Namespace, we prefix the handler name with a "`.`" character.

```xml
<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Button
      text="Say Hello"
      press=".onShowHello"/>
</mvc:View>
```

A view does not necessarily need an explicitly assigned controller. You do not have to create a controller if the view is just displaying information and no additional functionality is required. If a controller is specified, it is instantiated after the view is loaded.



## Conventions

-   Controller names are capitalized

-   All controllers are stored in the `controller` folder
-   Controllers carry the same name as the related view \(if there is a 1:1 relationship\)

-   Event handlers are prefixed with `on`

-   Controller names always end with `*.controller.js` \(in JavaScript\) or `*.controller.ts` \(in TypeScript\)


**Related Information**  


[Model View Controller \(MVC\)](../04_Essentials/model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")

[Controller](../04_Essentials/controller-121b8e6.md "A controller contains methods that define how models and views interact.")

[API Reference: `sap.ui.core.mvc.Controller`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller)

