<!-- loiod63a15e5eebb45cdada317bae5f45bc2 -->

# Step 35: Device Adaptation

We now configure the visibility and properties of controls based on the device that we run the application on. By making use of the `sap.ui.Device` API and defining a device model we will make the app look great on many devices.



## Preview

  
  
**On phone devices, the panel is collapsed to save screen space and a button is hidden**

![](images/UI5_Walkthrough_Step_35_0b0d57e.png "On phone devices, the panel is collapsed to save screen space and a button is
					hidden")



<a name="loiod63a15e5eebb45cdada317bae5f45bc2__section_qzn_hln_tyb"/>

## Coding

You can view and download all files at [Walkthrough - Step 35](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.35).



<a name="loiod63a15e5eebb45cdada317bae5f45bc2__section_rzn_hln_tyb"/>

## webapp/view/HelloPanel.view.xml

```xml
<mvc:View
	controllerName="ui5.walkthrough.controller.HelloPanel"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Panel
		headerText="{i18n>helloPanelTitle}"
		class="sapUiResponsiveMargin"
		width="auto"
		expandable="{device>/system/phone}"
		expanded="{= !${device>/system/phone} }">
		<content>
			<Button
				id="helloDialogButton"
				icon="sap-icon://world"
				text="{i18n>openDialogButtonText}"
				press=".onOpenDialog"
				class="sapUiSmallMarginEnd sapUiVisibleOnlyOnDesktop"/>
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

We add two new properties `expandable` and `expanded` to the `HelloPanel`. The user can now close and open the panel to have more space for the table below on devices with small screens. The property `expandable` is bound to a model named `device` and the path `/system/phone`. So the panel can be expanded on phone devices only. The device model is filled with the `sap.ui.Device` API of SAPUI5 as we see further down. The `expanded` property controls the state of the panel and we use expression binding syntax to close it on phone devices and have the panel expanded on all other devices. The device API of SAPUI5 offers more functionality to detect various device-specific settings, please have a look at the [documentation](https://ui5.sap.com/#/api/sap.ui.Device) for more details.

> ### Note:  
> The `sap.ui.Device` API detects the device type \(Phone, Tablet, Desktop\) based on the user agent and many other properties of the device. Therefore simply reducing the screen size will not change the device type. To test this feature, you will have to enable device emulation in your browser or open it on a real device.

We can also hide single controls by device type when we set a CSS class like `sapUiVisibleOnlyOnDesktop` or `sapUiHideOnDesktop` . We only show the button that opens the dialog on desktop devices and hide it for other devices. For more options, see the documentation linked below.



## webapp/Component.js

```js
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], (UIComponent, JSONModel, Device) => {
	"use strict";

	return UIComponent.extend("ui5.walkthrough.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			const oData = {
				recipient: {
					name: "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});
```

In the `app` component we add a dependency to `sap.ui.Device` and initialize the device model in the `init` method. We can simply pass the loaded dependency `Device` to the constructor function of the JSONModel. This will make most properties of the SAPUI5 device API available as a JSON model. The model is then set on the component as a named model so that we can reference it in data binding as we have seen in the view above.

> ### Note:  
> We have to set the binding mode to `OneWay` as the device model is read-only and we want to avoid changing the model accidentally when we bind properties of a control to it. By default, models in SAPUI5 are bidirectional \(`TwoWay`\). When the property changes, the bound model value is updated as well.



## webapp/view/Detail.view.xml

> ### Tip:  
> You can test the device specific features of your app with the developer tools of your browser. For example in Google Chrome, you can emulate a tablet or a phone easily and see the effects. Some responsive options of SAPUI5 are only set initially when loading the app, so you might have to reload your page to see the results.

```xml
<mvc:View
    controllerName="ui5.walkthrough.controller.Detail"
    xmlns="sap.m"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:wt="ui5.walkthrough.control">
    <Page
        title="{i18n>detailPageTitle}"
        showNavButton="true"
        navButtonPress=".onNavBack">
        <ObjectHeader
            responsive="true"
            fullScreenOptimized="true"
            number="{
                parts: [
                    'invoice>ExtendedPrice',
                    'view>/currency'
                ],
                type: 'sap.ui.model.type.Currency',
                formatOptions: {
                    showMeasure: false
                }
            }"
            numberUnit="{view>/currency}"
            intro="{invoice>ShipperName}"
            title="{invoice>ProductName}">
            <attributes>
                <ObjectAttribute
                    title="{i18n>quantityTitle}"
                    text="{invoice>Quantity}"/>
                <ObjectAttribute
                    title="{i18n>dateTitle}"
                    text="{
                        path: 'invoice>ShippedDate',
                        type: 'sap.ui.model.type.Date',
                        formatOptions: {
                            style: 'long',
                            source: {
                            pattern: 'yyyy-MM-ddTHH:mm:ss'
                            }
                        }
                    }"/>
            </attributes>
        </ObjectHeader>
        <wt:ProductRating
            id="rating"
            class="sapUiSmallMarginBeginEnd"
            change=".onRatingChange"/>
    </Page>
</mvc:View>
```

Some controls already have built-in responsive features that can be configured. The `ObjectHeader` control can be put in a more flexible mode by setting the attribute `responsive` to `true` and `fullScreenOptimized` to true as well. This will show the data that we add to the view now at different positions on the screen based on the device size.

We add the `number` and `numberUnit` field from the list of the previous steps also to the `ObjectHeader` and use the same formatter with the `currency` type as in the previous steps. We then define two attributes: The quantity of the invoice and the shipped date which is part of the data model. We have not used this `shippedDate` field from the invoices JSON file so far, it contains a date in typical string format.

We now use the `Date` type and provide the pattern of our date format in the source section of the format options. It will display a more human-readable formatted date text that also fits to small screen devices.



## webapp/controller/Detail.controller.js

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], (Controller, History, MessageToast, JSONModel) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Detail", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");

			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},
		…
	});
});
```

In the `Detail` controller we simply add the view model with our currency definition to display the number properly. It is the same code as in the `InvoiceList` controller file.



## webapp/i18n/i18n.properties

```ini
# Detail Page
detailPageTitle=Walkthrough - Details
ratingConfirmation=You have rated this product with {0} stars
dateTitle=Order date
quantityTitle=Quantity
```

We add the column names and the attribute titles to our `i18n` file.

We can see the results when we decrease the browser's screen size or open the app on a small device.



## Conventions

Optimize your application for the different screen sizes of phone, tablet, and desktop devices.

**Related Information**  


[API Reference: `sap.ui.Device`](https://ui5.sap.com/#/api/sap.ui.Device)

