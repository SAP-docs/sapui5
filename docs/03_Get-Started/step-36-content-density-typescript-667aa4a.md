<!-- loio667aa4a5d4914dbf82f843b8954244c2 -->

# Step 36: Content Density \(TypeScript\)

In this step of our Walkthrough tutorial, we adjust the content density based on the user’s device. Content density refers to the spacing and sizing of the UI controls and elements within your application. SAPUI5 contains different content densities allowing you to display larger controls for touch-enabled devices and a smaller, more compact design for devices that are operated by mouse. In our app, we will detect the device and adjust the density accordingly.



## Preview

  
  
**The content density is compact on desktop devices and cozy on touch-enabled devices**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_36_f216b13.png "The content density is compact on desktop devices and cozy on touch-enabled
					devices")



## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 36: Content Density](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/36) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-36.zip).



## webapp/Component.ts

To prepare the content density feature we add a helper method `getContentDensityClass` to the app component. SAPUI5 controls can be displayed in multiple sizes, for example in a `compact` size that is optimized for desktop and non-touch devices, and in a `cozy` mode that is optimized for touch interaction. The controls look for a specific CSS class in the HTML structure of the application to adjust their size.

This helper method queries the `Device` API directly for touch support of the client and returns the CSS class `sapUiSizeCompact` if touch interaction is not supported and `sapUiSizeCozy` for all other cases. We will use it throughout the application coding to set the proper content density CSS class.

```js
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import Device from "sap/ui/Device";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json"
    };
    init(): void {
        // call the init function of the parent
        ...
    };
    getContentDensityClass(): string {
        return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
    }
};
```



## webapp/controller/App.controller.ts

We add an `onInit` method to the app controller that is called when the app view is instantiated. There, we query the helper function that we defined on the app component in order to set the corresponding style class on the app view. All controls inside the app view will now automatically adjust to either the compact or the cozy size, as defined by the style.

```js
import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
	onInit(): void {
        this.getView().addStyleClass((<Component> this.getOwnerComponent()).getContentDensityClass())
    }
};
```



## webapp/manifest.json

In the `sap.ui5` namespace of the app descriptor we add the `contentDensities` section to specify the modes that the application supports. Containers like the SAP Fiori launchpad allow switching the content density based on these settings.

As we have just enabled the app to run in both modes depending on the devices capabilities, we can set both to `true` in the application descriptor.

```json
...
  "sap.ui5": {
    ...  
    },
    "contentDensities": {
      "compact": true,
      "cozy": true
    }
    ...
  }
```

**Related Information**  


[Content Densities](../04_Essentials/content-densities-e54f729.md "The devices used to run apps that are developed with SAPUI5 run on various different operating systems and have very different screen sizes. SAPUI5 contains different content densities for certain controls that allow your app to adapt to the device in question, allowing you to display larger controls for touch-enabled devices and a smaller, more compact design for devices that are operated by mouse.")

[API Reference: `sap.ui.Device`](https://ui5.sap.com/#/api/sap.ui.Device)

