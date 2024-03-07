<!-- loio4b2e306f4bcd4777b068e5a99e007e85 -->

# Step 16: Dialogs and Fragments \(TypeScript\)

In this step, we will take a closer look at another element which can be used to assemble views: the fragment.

Fragments are light-weight UI parts \(UI subtrees\) which can be reused but do not have any controller. This means, whenever you want to define a certain part of your UI to be reusable across multiple views, or when you want to exchange some parts of a view against one another under certain circumstances \(different user roles, edit mode vs read-only mode\), a fragment is a good candidate, especially where no additional controller logic is required.

A fragment can consist of 1 to n controls. At runtime, fragments placed in a view behave similar to "normal" view content, which means controls inside the fragment will just be included into the view’s DOM when rendered. There are of course controls that are not designed to become part of a view, for example, dialogs. But even for these controls, fragments can be particularly useful, as you will see in a minute.

We will now add a dialog to our app. Dialogs are special, because they open on top of the regular app content and thus do not belong to a specific view. That means the dialog must be instantiated somewhere in the controller code, but since we want to stick with the declarative approach and create reusable artifacts to be as flexible as possible, we will create an XML fragment containing the dialog. A dialog, after all, can be used in more than one view of your app.



## Preview

  
  
**A dialog opens when the new “Say Hello With Dialog” button is clicked**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_16_0916080.png "A dialog opens when the new “Say Hello With Dialog” button is clicked")



<a name="loio4b2e306f4bcd4777b068e5a99e007e85__section_kj4_41f_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 16: Dialogs and Fragments](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/16) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-16.zip).



<a name="loio4b2e306f4bcd4777b068e5a99e007e85__section_pd3_2my_nzb"/>

## webapp/view/HelloDialog.fragment.xml \(New\)

We add a new XML file to declaratively define our dialog in a fragment. The fragment assets are located in the `core` namespace, so we add an `xml` namespace for it inside the `FragmentDefinition` tag.

```xml
<core:FragmentDefinition
   xmlns="sap.m"
   xmlns:core="sap.ui.core">
   <Dialog
      id="helloDialog"
      title="Hello {/recipient/name}"/>
</core:FragmentDefinition>
```

The syntax is similar to a view, but since fragments do not have a controller this attribute is missing. Also, the fragment does not have any footprint in the DOM tree of the app, and there is no control instance of the fragment itself \(only the contained controls\). It is simply a container for a set of reuse controls.



<a name="loio4b2e306f4bcd4777b068e5a99e007e85__section_v4g_hmy_nzb"/>

## webapp/controller/HelloPanel.controller.ts

In the `HelloPanel` controller, we define a new event handler function `onOpenDialog`, which calls the dialog in the `HelloDialog` fragment when triggered. To do so, we need to import the `sap.m.Dialog` module.

We store the loading `Promise` of the dialog fragment on the controller instance. This allows us to handle the opening of the dialog asynchronously every time the event is triggered.

If the dialog in the fragment does not exist yet, the fragment is instantiated by calling the `loadFragment` API.

```js
import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

import Dialog from "sap/m/Dialog";
/**
 * @namespace ui5.walkthrough.controller
 */
export default class HelloPanel extends Controller {
    private dialogPromise: Promise<Dialog>;

    onShowHello(): void {
        ...
    }
    onOpenDialog(): void {
    // create dialog lazily
        if (!this.dialogPromise) {
            this.dialogPromise = <Promise<Dialog>> this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
        } 
        this.dialogPromise.then(function(oDialog) {
            oDialog.open();
        });
    }   
};
```

> ### Tip:  
> To reuse the dialog opening and closing functionality in other controllers, you can create a new file `ui5.walkthrough.controller.BaseController`, which extends `sap.ui.core.mvc.Controller`, and put all your dialog-related coding into this controller. Now, all the other controllers can extend from `ui5.walkthrough.controller.BaseController` instead of `sap.ui.core.mvc.Controller`.



<a name="loio4b2e306f4bcd4777b068e5a99e007e85__section_d5m_ypr_r2b"/>

## webapp/i18n/i18n.properties

We add a new text for the button to open the dialog to the text bundle. We will add this button to the `HelloPanel` view in the next step.

```ini
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of SAPUI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}
homePageTitle=UI5 TypeScript Walkthrough
helloPanelTitle=Hello World
openDialogButtonText=Say Hello With Dialog
```



<a name="loio4b2e306f4bcd4777b068e5a99e007e85__section_lj4_41f_syb"/>

## webapp/view/HelloPanel.view.xml

We add a new button to the view to open the dialog and assign an unique `id` to it. The button calls the `onOpenDialog` event handler function in the controller of the panel’s content view. We assign the new text to the text property of the button and refer its class to `sapUiResponsiveMargin` to pimp up the design.

```xml
<mvc:View
   controllerName="ui5.walkthrough.controller.HelloPanel"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Panel
      headerText="{i18n>helloPanelTitle}"
      class="sapUiResponsiveMargin"
      width="auto" >
      <content>
      <Button
         id="helloDialogButton"
         text="{i18n>openDialogButtonText}"
         press=".onOpenDialog"
         class="sapUiSmallMarginEnd"/>
      <Button
         text="{i18n>showHelloButtonText}"
         press=".onShowHello"
         class="myCustomButton"/>
      <Input
         value="{/recipient/name}"
         valueLiveUpdate="true"
         width="60%"/>
      <FormattedText
         htmlText="Hello {/recipient/name}"
         class="sapUiSmallMargin sapThemeHighlight-asColor myCustomText"/>
      </content>
   </Panel>
</mvc:View>
```

We will need the new `id="helloDialogButton"` in [Step 28: Integration Test with OPA](step-28-integration-test-with-opa-9bf4dce.md).

It is a good practice to set a unique ID like `helloWorldButton` to key controls of your app so that can be identified easily. If the `id` attribute is not specified, the SAPUI5 runtime generates unique but changing ID like "\_\_button23" for the control. Inspect the DOM elements of your app in the browser to see the difference.

**Related Information**  


[Reusing UI Parts: Fragments](../04_Essentials/reusing-ui-parts-fragments-36a5b13.md "Fragments are light-weight UI parts (UI sub-trees) which can be reused, defined similar to views, but do not have any controller or other behavior code involved.")

[Dialogs and other Popups as Fragments](../04_Essentials/dialogs-and-other-popups-as-fragments-448c641.md "You can use fragments to declaratively define dialogs and other popup controls which are not part of the normal page UI structure.")

[API Reference: `sap.m.Dialog`](https://ui5.sap.com/#/api/sap.m.Dialog)

[Samples: `sap.m.Dialog`](https://ui5.sap.com/#/entity/sap.m.Dialog)

[Stable IDs: All You Need to Know](../05_Developing_Apps/stable-ids-all-you-need-to-know-f51dbb7.md "Stable IDs are IDs for controls, elements, or components that you set yourself in the respective id property or attribute as opposed to IDs that are generated by SAPUI5. Stable means that the IDs are concatenated with the application component ID and do not have any auto-generated parts.")

[Instantiation of Fragments](../04_Essentials/instantiation-of-fragments-04129b2.md "SAPUI5 provides two options to instantiate a fragment: If it is instantiated inside a controller extending sap.ui.core.mvc.Controller, the loadFragment() function is the way to go. However, if it is instantiated in a non-controller artefact, the generic function sap.ui.core.Fragment.load() can be used.")

