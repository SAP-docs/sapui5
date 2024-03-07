<!-- loiocfbbeab4e4b74124abac98ce268a0aba -->

# Step 7: JSON Model \(TypeScript\)

Now that we have set up the view and controller, it’s about time to think about the M in MVC.

We'll create a view model in our controller, add an input field to our app, bind its value to the model, and bind the same value to the description of the input field. The description will be directly updated as the user types.



## Preview

  
  
**An input field and a description displaying the value of the input field**

![The graphic has an explanatory text](images/UI5_Walkthrough_Step_07_afc1055.png "An input field and a description displaying the value of the input
					field")



<a name="loiocfbbeab4e4b74124abac98ce268a0aba__section_e2g_rvc_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 7: JSON Model](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/07) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-07.zip).



<a name="loiocfbbeab4e4b74124abac98ce268a0aba__section_f2g_rvc_syb"/>

## webapp/controller/App.controller.ts

We add an `onInit` function to the controller. This is one of SAPUI5’s lifecycle methods that is invoked by the framework when the controller is created, similar to the constructor of a control.

Inside the function we instantiate a JSON model. The data for the model only contains a single property for the “recipient”, and inside this it also contains one additional property for the name.

To be able to use this model from within the XML view, we call the `setModel` function on the view and pass on our newly created model.

```js
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
   onInit() : void {
      // set data model on view
        const data = {
           recipient: {
              name: "World"
           }
        };
        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel);
    }

    onShowHello(): void {
       MessageToast.show("Hello World");
     }
};
```

The model is now set on the view.



## webapp/view/App.view.xml

We add an `sap/m/Input` control to our view, allowing the user to enter a name for the person they want to greet.

To make this work, we connect, or "bind", the value of the input control to the `name` attribute of the `recipient` object in our JSON data model. We do this using a simple binding syntax, which is a straightforward way to link data of the model and the view.

> ### Note:  
> To bind a control property to your view model data, you need to specify a [`sap.ui.base.ManagedObject.PropertyBindingInfo`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject.PropertyBindingInfo) for the property. A binding info is always initiated by enclosing it in curly brackets `{…}`, and the properties defined in the binding info's API are placed within the brackets.
> 
> You can omit all properties of the binding info and just provide the binding path as a simple string. A binding path consists of path segments separated by forward slashes \(\`/\`\) which point to a property in the model that you want to bind to. This applies to all SAPUI5-provided models.
> 
> Binding paths can be either absolute or relative. Absolute binding paths start with a slash, while relative binding paths start with a name token and are resolved relative to the context of the control that is being bound \(we'll discuss this later on\).

We also create a greeting message by combining the static "Hello" text with the `name` attribute from our data model and assigning it to the `description` property of the input field. This means that the greeting message will dynamically update with whatever name the user enters. To ensure that the greeting message updates in real time as the user types, we set the `valueLiveUpdate` attribute of the input control to `true`.

```xml
<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Button
      text="Say Hello"
      press=".onShowHello"/>
   <Input
      value="{/recipient/name}"
      description="Hello {/recipient/name}"
      valueLiveUpdate="true"
      width="60%"/>
</mvc:View>
```

**Related Information**  


[Model View Controller \(MVC\)](../04_Essentials/model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")

[JSON Model](../04_Essentials/json-model-96804e3.md#loio96804e3315ff440aa0a50fd290805116 "The JSON model can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format.")

[Data Binding](../04_Essentials/data-binding-68b9644.md "You use data binding to bind UI elements to data sources to keep the data in sync and allow data editing on the UI.")

[Binding Path](../04_Essentials/binding-path-2888af4.md "Binding paths address the different properties and lists in a model and define how a node in the hierarchical data tree can be found.")

[Property Binding](../04_Essentials/property-binding-91f0652.md "With property binding, you can initialize properties of a control automatically and update them based on the data of the model.")

[API Reference: `sap.ui.base.ManagedObject.PropertyBindingInfo`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject.PropertyBindingInfo)

