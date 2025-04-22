<!-- loioab8ed1bb1bd845c28b310b9269149314 -->

# Step 35: Device Adaptation \(TypeScript\)

We now configure the visibility and properties of controls based on the device that we run the application on. By making use of the `sap.ui.Device` API and defining a device model we will make the app look great on many devices.



## Preview

  
  
**On phone devices, the panel is collapsed to save screen space and a button is hidden**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_35_0b0d57e.png "On phone devices, the panel is collapsed to save screen space and a button is
					hidden")



<a name="loioab8ed1bb1bd845c28b310b9269149314__section_qzn_hln_tyb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 35: Device Adaptation](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/35) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-35.zip).



<a name="loioab8ed1bb1bd845c28b310b9269149314__section_ut1_ffw_4zb"/>

## webapp/Component.ts

In the `app` component we add a dependency to `sap.ui.Device` and initialize the device model in the `init` method. We can simply pass the loaded dependency `Device` to the constructor function of the JSONModel. This will make most properties of the SAPUI5 device API available as a JSON model. The model is then set on the component as a named model, so that we can reference it in data binding as we have seen in the view above.

> ### Note:  
> We have to set the binding mode to `OneWay` as the device model is read-only and we want to avoid changing the model accidentally when we bind properties of a control to it. By default, models in SAPUI5 are bidirectional \(`TwoWay`\). When the property changes, the bound model value is updated as well.

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
        super.init();
        
        // set data model
        const data = {
            recipient: {
                name: "World"
            }
        };
        const model = new JSONModel(data);
        this.setModel(model);
        // set device model
        const deviceModel = new JSONModel(Device);
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");

        // create the views based on the url/hash
        this.getRouter().initialize();
    };
};
```



<a name="loioab8ed1bb1bd845c28b310b9269149314__section_rzn_hln_tyb"/>

## webapp/view/HelloPanel.view.xml

We add two new properties `expandable` and `expanded` to the panel control. The user can now close and open the panel to have more space for the table below on devices with small screens. The property `expandable` is bound to a model named `device` and the path `/system/phone`. So the panel can be expanded on phone devices only. The `expanded` property controls the state of the panel, and we use expression binding syntax to close it on phone devices and have the panel expanded on all other devices.

We can also hide single controls by device type when we set a CSS class like `sapUiVisibleOnlyOnDesktop` or `sapUiHideOnDesktop`. We only show the button that opens the dialog on desktop devices and hide it for other devices. For more options, see the documentation linked below.

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

The device API of SAPUI5 offers more functionality to detect various device-specific settings; please have a look at the [documentation](https://ui5.sap.com/#/api/sap.ui.Device) for more details.

> ### Note:  
> The `sap.ui.Device` API detects the device type \(Phone, Tablet, Desktop\) based on the user agent and many other properties of the device. Therefore simply reducing the screen size will not change the device type. To test this feature, you will have to enable device emulation in your browser or open it on a real device.

We can also hide single controls by device type when we set a CSS class like `sapUiVisibleOnlyOnDesktop` or `sapUiHideOnDesktop` . We only show the button that opens the dialog on desktop devices and hide it for other devices. For more options, see the documentation linked below.



<a name="loioab8ed1bb1bd845c28b310b9269149314__section_kdl_hfw_4zb"/>

## webapp/controller/Detail.controller.ts

In the `Detail` controller we simply add the view model with our currency definition to display the number properly. It is the same code as in the `InvoiceList` controller file.

```js
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/ UIComponent";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";
import MessageToast from "sap/m/MessageToast";
import ProductRating, { ProductRating$ChangeEvent } from "../control/ProductRating";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class Detail extends Controller {

    onInit(): void {
        const viewModel = new JSONModel({
            currency: "EUR"
        });
        this.getView().setModel(viewModel, "view");   

        const router = UIComponent.getRouterFor(this);
        router.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
    }
		…
};
```



<a name="loioab8ed1bb1bd845c28b310b9269149314__section_gjz_3fw_4zb"/>

## webapp/i18n/i18n.properties

We will introduce two new fields on our detail page: Shipped date and quantity. We therefore add a text-value pair for these two fields to our `i18n` file

```ini
# Detail Page
detailPageTitle=Walkthrough - Details
ratingConfirmation=You have rated this product with {0} stars
dateTitle=Order date
quantityTitle=Quantity
```



## webapp/view/Detail.view.xml

Some controls already have built-in responsive features that can be configured. The `ObjectHeader` control can be put in a more flexible mode by setting the attribute `responsive` to `true` and `fullScreenOptimized` to true as well. This will show the data that we add to the view now at different positions on the screen based on the device size.

We add the `number` and `numberUnit` field from the list of the previous steps also to the `ObjectHeader` and use the same formatter with the `currency` type as in the previous steps. We then define two attributes: The quantity of the invoice and the shipped date which is part of the data model. We have not used this `shippedDate` field from the invoices JSON file so far, it contains a date in `DateTime` format. As we only want to display the date without any time specification, we add the `Date` type to the BindingInfo.

```xml
<mvc:View
    controllerName="ui5.walkthrough.controller.Detail"
    xmlns="sap.m"
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:wt="ui5.walkthrough.control">
    <Page
        title="{i18n>detailPageTitle}"
        showNavButton="true"
        navButtonPress=".onNavBack">
        <ObjectHeader
            core:require="{
                Date: 'sap/ui/model/type/Date',
                Currency: 'sap/ui/model/type/Currency'
            }"
            responsive="true"
            fullScreenOptimized="true"
            number="{
                parts: [
                    'invoice>ExtendedPrice',
                    'view>/currency'
                ],
                type: 'Currency',
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
                        type: 'Date',
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

We can see the results when we decrease the browser's screen size or open the app on a small device.

> ### Tip:  
> You can test the device specific features of your app with the developer tools of your browser. For example in Google Chrome, you can emulate a tablet or a phone easily and see the effects. Some responsive options of SAPUI5 are only set initially when loading the app, so you might have to reload your page to see the results.



## Conventions

Optimize your application for the different screen sizes of phone, tablet, and desktop devices.

**Related Information**  


[API Reference: `sap.ui.Device`](https://ui5.sap.com/#/api/sap.ui.Device)

