<!-- loio354f98ed2b514ba9960556333428d35e -->

# Step 17: Fragment Callbacks

Now that we have integrated the dialog, it's time to add some user interaction. The user will definitely want to close the dialog again at some point, so we add a button to close the dialog and assign an event handler.



## Preview

  
  
**The dialog now has an "OK" button**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_17_c351bbd.png "The dialog now has an "OK" button")



<a name="loio354f98ed2b514ba9960556333428d35e__section_mt1_5fk_syb"/>

## Coding

You can view and download all files at [Walkthrough - Step 17](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.17).



<a name="loio354f98ed2b514ba9960556333428d35e__section_nt1_5fk_syb"/>

## webapp/controller/HelloPanel.controller.js

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
		onShowHello() {
			// read msg from i18n model
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			const sRecipient = this.getView().getModel().getProperty("/recipient/name");
			const sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog() {
			// create dialog lazily
			this.pDialog ??= this.loadFragment({
				name: "ui5.walkthrough.view.HelloDialog"
			});

			this.pDialog.then((oDialog) => oDialog.open());
		},

		onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
	});

});
```

The event handler function is put into the same controller file, and it closes the dialog by using the `byId` function to get the dialog instance and the `close` function to close the dialog.



## webapp/view/HelloDialog.fragment.xml

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

In the fragment definition, we add a button to the `beginButton` aggregation of the dialog. The press handler refers to an event handler called `.onCloseDialog`. By using the `loadFragment` function to create the fragment content, the method will be invoked there when the button is pressed. The dialog has an aggregation named `beginButton` as well as `endButton`. Placing buttons in both of these aggregations makes sure that the `beginButton` is placed before the `endButton` on the UI. What `before` means, however, depends on the text direction of the current language. We therefore use the terms `begin` and `end` as a synonym to “left” and “right". In languages with left-to-right direction, the `beginButton` will be rendered left, the `endButton` on the right side of the dialog footer; in right-to-left mode for specific languages the order is switched.



<a name="loio354f98ed2b514ba9960556333428d35e__section_d5m_ypr_r2b"/>

## webapp/i18n/i18n.properties

```ini
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of SAPUI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}
homePageTitle=Walkthrough
helloPanelTitle=Hello World
openDialogButtonText=Say Hello With Dialog
dialogCloseButtonText=Ok
```

The text bundle is extended by the new text for the dialog’s close button.

**Related Information**  


[Reusing UI Parts: Fragments](../04_Essentials/reusing-ui-parts-fragments-36a5b13.md "Fragments are light-weight UI parts (UI sub-trees) which can be reused, defined similar to views, but do not have any controller or other behavior code involved.")

[Instantiation of Fragments](../04_Essentials/instantiation-of-fragments-04129b2.md "SAPUI5 provides two options to instantiate a fragment: If it is instantiated inside a controller extending sap.ui.core.mvc.Controller, the loadFragment() function is the way to go. However, if it is instantiated in a non-controller artefact, the generic function sap.ui.core.Fragment.load() can be used.")

