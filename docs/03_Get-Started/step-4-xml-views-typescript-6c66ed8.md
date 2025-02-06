<!-- loio6c66ed843c5e4b18aacf6c5e52246e4d -->

# Step 4: XML Views \(TypeScript\)

Putting all our UI into the `index.ts` file will very soon result in a messy setup, and there is quite a bit of work ahead of us. So let's do a first modularization by putting the `sap/m/Text` control into a dedicated `view`.

When working with SAPUI5, we recommend the use of XML views, as this produces the most readable code and forces us to separate the view declaration from the controller logic. Yet the look of our UI will not change.



## Preview

  
  
**The "Hello World" text is now displayed by a SAPUI5 control \(No visual changes to last step\)**

![Hello World](images/UI5_Walkthrough_Step_04_05f6775.png "The "Hello World" text is now displayed by a SAPUI5 control (No
					visual changes to last step)")



<a name="loio6c66ed843c5e4b18aacf6c5e52246e4d__section_l3f_lgc_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 4: XML Views](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/04) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-04.zip).



<a name="loio6c66ed843c5e4b18aacf6c5e52246e4d__section_m3f_lgc_syb"/>

## webapp/view/App.view.xml \(New\)

We create a new `view` folder in our webapp folder and a new file called `App.view.xml` inside this folder. The root node of the XML structure is the `view`. Here, we reference the default namespace `sap.m` where the text control and the majority of our UI assets are located. We define an additional `sap.ui.core.mvc` namespace with alias `mvc`, where the SAPUI5 views and all other Model-View-Controller \(MVC\) assets are located.

```xml
<mvc:View
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
</mvc:View>
```

> ### Note:  
> The namespace identifies all resources of the project and has to be unique. If you develop your own application code or controls, you cannot use the namespace prefix `sap`, because this namespace is reserved for SAP resources. Instead, simply define your own unique namespace \(for example, `myCompany.myApp`\).

Inside the `View` tag, we add the declarative definition of our `text` control with the same properties as in the previous step. The XML tags are mapped to controls, and their attributes are mapped to control properties.

```xml
<mvc:View
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Text text="Hello World"/>
</mvc:View>

```



<a name="loio6c66ed843c5e4b18aacf6c5e52246e4d__section_nlq_g1w_xfb"/>

## webapp/index.ts

In our `index.ts` script, we replace the instantiation of the `sap/m/Text` control by our new `App.view.xml` file. The view is created by a factory function of SAPUI5. The name is prefixed with the namespace `ui5.walkthrough.view` in order to uniquely identify this resource.

```js
import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "ui5.walkthrough.view.App"
}).then(function (view) {
    view.placeAt("content");
});
```



## Conventions

-   View names are capitalized

-   All views are stored in the `view` folder

-   Names of XML views always end with `*.view.xml`

-   XML namespaces are declared in the root element of the view. As a general rule, the default XML namespace is `sap.m`

-   Other XML namespaces use the last part of the SAP namespace as alias \(for example, `mvc` for `sap.ui.core.mvc`\)


**Related Information**  


[Model View Controller \(MVC\)](../04_Essentials/model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")

[Views](../04_Essentials/views-91f27e3.md "The view in the Model-View-Controller (MVC) concept is responsible for defining and rendering the UI. SAPUI5 supports predefined view types.")

[API Reference: `sap.ui.core.mvc.View`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View)

[XML View](../04_Essentials/xml-view-91f2928.md "The XML view type is defined in an XML file, with a file name ending in .view.xml. The file name and the folder structure together specify the name of the view that equals the SAPUI5 module name.")

[API Reference: `sap.ui.core.mvc.XMLView`](https://ui5.sap.com/#/api/sap.ui.core.mvc.XMLView)

