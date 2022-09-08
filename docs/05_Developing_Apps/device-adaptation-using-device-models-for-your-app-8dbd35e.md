<!-- loio8dbd35e1577b445d8077b2bc6ad8b958 -->

# Device Adaptation: Using Device Models for Your App

Depending on the capabilities of the device on which the app is running, the functionality and the design of the application might differ. By introducing a local JSON model holding the device-dependent data, we can bind properties of our views to the device's capabilities.

As an example, on big screens \(if the device is detected as a desktop device\), it is not necessary to show the *Back* button on a detail view in a list-detail scenario, because the list and detail views are shown at the same time. You can control the visibility of the *Back* button with a property from the device model.

You need to make the `sap.ui.Device` API available in a JSON model once in your component to allow controls to be adapted to the current platform using data binding. The code below shows an example of how to achieve this:

`Component.js`

```js

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (UIComponent, JSONModel, Device) {

[…]

init: function () {
// set the device model
	var oDeviceModel = new JSONModel(Device);
	oDeviceModel.setDefaultBindingMode("OneWay");
	this.setModel(oDeviceModel, "device");

[…]
}
```

This instantiates a named JSONModel \(`"device"`\) which contains all of the properties of the `sap.ui.Device` class, like browser, device type, or the current orientation of the screen. You can then bind the model properties in your views as follows:

`List.view.xml`

```xml

<Page showNavButton="{device>/system/phone}" />
...
<PullToRefresh visible="{device>/support/touch}" />
```

If you want to negate a value of the device model or make a simple case decision, you can use the expression binding syntax as shown below:

`List.view.xml`

```xml

<SearchField showRefreshButton="{= !${device>/support/touch} }" />
```

For more information, see [sap.ui.Device](https://ui5.sap.com/#/api/sap.ui.Device) in the *API Reference* in the Demo Kit, and the documentation under [The Device API](../04_Essentials/the-device-api-69a8e46.md).

