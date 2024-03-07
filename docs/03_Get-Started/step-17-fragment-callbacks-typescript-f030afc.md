<!-- loiof030afccc30f461c9660724561cb7264 -->

# Step 17: Fragment Callbacks \(TypeScript\)

Now that we have integrated the dialog, it's time to add some user interaction. The user will definitely want to close the dialog again at some point, so we add a button to close the dialog and assign an event handler.



## Preview

  
  
**The dialog now has an "OK" button**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_17_c351bbd.png "The dialog now has an "OK" button")



<a name="loiof030afccc30f461c9660724561cb7264__section_mt1_5fk_syb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 17: Fragment Callbacks](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/17) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-17.zip).



<a name="loiof030afccc30f461c9660724561cb7264__section_nt1_5fk_syb"/>

## webapp/controller/HelloPanel.controller.ts

We add an event handler function into the `HelloPanel` controller file that closes the dialog when triggered. To get the dialog instance, we use the `byId` function and then call the `close` function of the dialog.

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
        ...
    }
    onCloseDialog(): void {
        // note: We don't need to chain to the pDialog promise, since this event-handler
        // is only called from within the loaded dialog itself.
        (<Dialog> this.byId("helloDialog"))?.close();
    }        
};
```



<a name="loiof030afccc30f461c9660724561cb7264__section_d5m_ypr_r2b"/>

## webapp/i18n/i18n.properties

We extend the text bundle by the new text for the dialog’s `Close` button.

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
dialogCloseButtonText=Ok
```



## webapp/view/HelloDialog.fragment.xml

In the fragment definition, we add a button to the `beginButton` aggregation of the dialog and refer the press handler to the event handler we just defined in the controller of the panel’s content view.

```xml
<core:FragmentDefinition
   xmlns="sap.m"
   xmlns:core="sap.ui.core">
   <Dialog
      id="helloDialog"
      title ="Hello {/recipient/name}">
      <beginButton>
         <Button
            text="{i18n>dialogCloseButtonText}"
            press=".onCloseDialog"/>
      </beginButton>
   </Dialog>
</core:FragmentDefinition>
```

By using the `loadFragment` function to create the fragment content in the controller of the panel’s content view, the method will be invoked there when the button is pressed. The dialog has an aggregation named `beginButton` as well as `endButton`. Placing buttons in both of these aggregations makes sure that the `beginButton` is placed before the `endButton` on the UI. What `before` means, however, depends on the text direction of the current language. We therefore use the terms `begin` and `end` as a synonym to “left” and “right". In languages with left-to-right direction, the `beginButton` will be rendered left, the `endButton` on the right side of the dialog footer; in right-to-left mode for specific languages the order is switched.

**Related Information**  


[Reusing UI Parts: Fragments](../04_Essentials/reusing-ui-parts-fragments-36a5b13.md "Fragments are light-weight UI parts (UI sub-trees) which can be reused, defined similar to views, but do not have any controller or other behavior code involved.")

[Instantiation of Fragments](../04_Essentials/instantiation-of-fragments-04129b2.md "SAPUI5 provides two options to instantiate a fragment: If it is instantiated inside a controller extending sap.ui.core.mvc.Controller, the loadFragment() function is the way to go. However, if it is instantiated in a non-controller artefact, the generic function sap.ui.core.Fragment.load() can be used.")

[API Reference: `sap.m.Dialog`](https://ui5.sap.com/#/api/sap.m.Dialog)

[Samples: `sap.m.Dialog`](https://ui5.sap.com/#/entity/sap.m.Dialog)

