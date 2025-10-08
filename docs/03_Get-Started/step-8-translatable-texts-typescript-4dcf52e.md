<!-- loio4dcf52e0ca3048e3a08bfdccfc440442 -->

# Step 8: Translatable Texts \(TypeScript\)

In this step we move the texts of our UI to a separate resource file.

This way, they are all in a central place and can be easily translated into other languages. This process of internationalization – in short `i18n` – is achieved in SAPUI5 by using a special resource model and the standard data binding syntax, but without a preceding "`/`" character.



## Preview

  
  
**An input field and a description displaying the value of the input field \(No visual changes to last step\)**

![The graphic has an explanatory text](images/UI5_Walkthrough_Step_08_0eb579e.png "An input field and a description displaying the value of the input field (No
					visual changes to last step)")



<a name="loio4dcf52e0ca3048e3a08bfdccfc440442__section_b1m_wwc_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 8: Translatable Texts](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/08) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-08.zip).



<a name="loio4dcf52e0ca3048e3a08bfdccfc440442__section_c1m_wwc_syb"/>

## webapp/i18n/i18n.properties \(New\)

The `i18n` file allows you to store translated texts for multiple languages, making your application accessible to a wider audience. In order to achive this, the `properties` file for texts contains name-value pairs for each element. You can add any number of parameters to the texts by enclosing them in curly brackets with corresponding numbers. These numbers correspond to the sequence in which the parameters are accessed \(starting with 0\).

To set up the `i18n` file, we navigate to the `webapp` folder and create a new folder named `i18n`. Inside this folder, we place an `i18n.properties` file, which serves as a storage for our translated texts. We add two name-value pairs to our properties file: The `showHelloButtonText` name represents the text for the button on our app view. The `helloMsg` name represents the greeting message we'll display in the message toast. To include the appropriate recipient's name in the message, we use a placeholder with the greeting message text.

```
showHelloButtonText=Say Hello
helloMsg=Hello {0}
```

In this tutorial we'll have only one properties file. However, in real-world projects, you would have a separate file for each supported language with a suffix for the locale, for example`i18n_de.properties` for German, `i18n_en.properties` for English, and so on. When a user runs the app, SAPUI5 will load the language file that fits best to the user's environment.



## controller/App.controller.ts

In the `onInit` function of our controller, we instantiate a `ResourceModel` and specify the `bundleName` parameter to refer to our new resource bundle file \(`i18n.properties`\). Then, we use the `setModel` function on the view to assign our newly created model as a named model with the key `i18n` to the view. With this, we enable the binding of control properties in our view to translatable texts.

In the `onShowHello` event handler function, we replace the static "Hello World" message with a dynamic greeting text `helloMsg` from the resource bundle and substitute the placeholder in the text with the recipient's name from our data model. To retrieve the recipient's name, we access the JSON model associated with the view and use the `getProperty` method. This method allows us to retrieve the value for a specific model property using a given path. We pass the path to the recipient's name as an argument to the `getProperty` method to retrieve the corresponding value. Next, we need to obtain the resource bundle from the view's model named `i18n`. We achieve this by using the `getResourceBundle` method provided by the `ResourceModel` module. The resource bundle has a `getText` method, which returns a locale-specific string value for a given text key. It can also accept an array of strings as a second argument. When this argument is provided, the `getText` method uses the `sap/base/strings/formatMessage` API to replace placeholders in the text with the corresponding values from the arguments array. In our case, we use the second parameter of `getText` to replace the `helloMsg` text's placeholder with the recipient's name. The resulting string is then returned by `getText` and passed to the `show` method of the message toast control.

```js
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
   onInit(): void {
      // set data model on view
      const data = {
         recipient: {
            name: "World"
         }
      };
      const dataModel = new JSONModel(data);
      // because of "strict" mode in tsconfig.json a null check is required for this.getView()
      this.getView()?.setModel(dataModel);

      // set i18n model on view
      const i18nModel = new ResourceModel({
         bundleName: "ui5.walkthrough.i18n.i18n"
      });
      this.getView()?.setModel(i18nModel, "i18n");
   }
   
   onShowHello(): void {
      // read msg from i18n model
      const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
      const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
      const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
      // show message
      MessageToast.show(msg);
   }
};
```

The bundle name \(`ui5.walkthrough.i18n.i18n`\) consists of the application namespace `ui5.walkthrough` \(the application root as defined in the `index.html`\), the resource folder name `i18n`, and finally the base file name `i18n` without extension. The SAPUI5 runtime calculates the correct path to the resource, to which `.properties` is then appended.

During runtime, SAPUI5 tries to load the correct`i18n_*.properties` file based on your browser settings and your locale. In our case we have only created the base `i18n.properties` file to make it simple. However, you can see in the network traffic of your browser's developer tools that SAPUI5 tries to load one or more `i18n_*.properties` files before falling back to the default `i18n.properties` file.



## webapp/view/App.view.xml

We can now bind the text properties in our XML view to translatable texts. We connect the `text` property of the button control to the `showHelloButtonText` key in the `i18n` model. To correctly reference the model, the binding path should start with the model name `i18n` followed by a '`>`' character.

A resource bundle is a flat structure, therefore the preceding slash \(/\) can be omitted for the path to the text.

```xml
<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Button
      text="{i18n>showHelloButtonText}"
      press=".onShowHello"/>
   <Input
      value="{/recipient/name}"
      description="Hello {/recipient/name}"
      valueLiveUpdate="true"
      width="60%"/>
</mvc:View>
```

> ### Note:  
> The description text is not completely localized in this example for illustration purposes. To be on the safe side, we would have to use a similar mechanism as in the controller to use a string from the resource bundle and replace parts of it. This can be done with the `sap/base/strings/formatMessage` formatter.
> 
> Furthermore, `i18n` files only impact client-side application texts. Texts that are loaded from back-end systems can appear in all languages that are supported by the back-end system.



## Conventions

-   The resource model for internationalization is called the `i18n` model.

-   The default filename is `i18n.properties`.

-   Resource bundle keys are written in \(lower\) camelCase.

-   Resource bundle values can contain parameters like `{0}`, `{1}`, `{2}`, …

-   Never concatenate strings that are translated, always use placeholders.

-   Use Unicode escape sequences for special characters.


**Related Information**  


[Resource Model](../04_Essentials/resource-model-91f122a.md#loio91f122a36f4d1014b6dd926db0e91070 "The resource model is used as a wrapper for resource bundles. In data binding you use the resource model instance, for example, to bind texts of a control to language-dependent resource bundle properties.")

[Use of Localized Texts in Applications](../04_Essentials/use-of-localized-texts-in-applications-91f3859.md "SAPUI5 provides two options to use localized texts in applications: The sap/base/i18n/ResourceBundle module and data binding.")

[API Reference: `sap/base/i18n/ResourceBundle`](https://ui5.sap.com/#/api/module:sap/base/i18n/ResourceBundle)

[API Reference: `sap.ui.model.resource.ResourceModel`](https://ui5.sap.com/#/api/sap.ui.model.resource.ResourceModel)

[API Reference: `sap/base/strings/formatMessage`](https://ui5.sap.com/#/api/module:sap/base/strings/formatMessage)

[Binding Path](../04_Essentials/binding-path-2888af4.md "Binding paths address the different properties and lists in a model and define how a node in the hierarchical data tree can be found.")

