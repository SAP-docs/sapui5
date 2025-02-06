<!-- loio328a340e3ab14029afbeb8901376030a -->

# Controls with Built-In Device Adaptation

SAPUI5 comes with several controls which are already able to react to the available screen real estate and resolution by themselves. Some require particular properties to be set, and with some, everything just works out of the box.

> ### Note:  
> This list does not claim to be comprehensive, but shows some widely used examples outlining the steps you can take to make use of this functionality. For more details, browse through the [Samples](https://ui5.sap.com/#/controls) in the Demo Kit and see what SAPUI5 has in store for your app.



## sap.m.SplitApp

The `SplitApp` is a control that can act as a root element of an application for mobile and desktop devices. It is designed to be used as the base for applications following the list-detail pattern.

It maintains two `NavContainers` if running on tablet or desktop, and one if running on a phone. In default mode, the list `NavContainer` will always be displayed on desktop screens and on tablets in landscape mode. It will be hidden on tablet-sized screens and can either be swiped in and out \(if the device is touch-enabled\) or the visibility can be toggled by clicking a button. On phone devices, either the list `NavContainer` or the detail `NavContainer` will be shown, and a true forward-backward navigation is established between the two.

For more information, see the [sap.m.SplitApp](https://ui5.sap.com/#/entity/sap.m.SplitApp) samples and [sap.m.SplitApp](https://ui5.sap.com/#/api/sap.m.SplitApp) in the *API Reference* in the Demo Kit.

As the `SplitApp` control inherits from `sap.m.SplitContainer`, you can alter this behavior by setting the corresponding mode property. You can set this property to `StretchCompressMode`, for instance, if you want the list to always be displayed on tablet-sized screens, irrespective of the current orientation. The different modes that are available are described under [sap.m.SplitAppMode](https://ui5.sap.com/#/api/sap.m.SplitAppMode) in the *API Reference* in the Demo Kit.

For more information about the `SplitContainer`, see the [sap.m.SplitContainer](https://ui5.sap.com/#/entity/sap.m.SplitContainer) samples and [sap.m.SplitContainer](https://ui5.sap.com/#/api/sap.m.SplitContainer) in the *API Reference* in the Demo Kit.



## sap.m.Table \(also called the "Responsive Table"\)

One control that is widely used across all kinds of different applications is `sap.m.Table`, which has several features you can use for device adaptation. On smaller devices, for example, you can set certain properties that will make particular columns pop in instead of being displayed as a normal column, or show and hide columns completely.

For example, you can set a `minScreenWidth` for the columns. This will cause columns to only show up if a certain screen width is matched. You can define this `minScreenWidth` in px or rem, but here you can also use the standard categories that come from the device API \(Phone, Tablet, or Desktop\). For more information about the device API, see [The Device API](the-device-api-69a8e46.md).

Setting the additional property `demandPopin` to `true` for a column will also react to the `minScreenWidth` you specify. In such a case, the column will be shown as a popin on smaller screens, instead of being completely hidden. For more information about responsive tables and their columns, see the [sap.m.Table](https://ui5.sap.com/#/entity/sap.m.Table) and [sap.m.Column](https://ui5.sap.com/#/entity/sap.m.Column) samples and [sap.m.Table](https://ui5.sap.com/#/api/sap.m.Table) in the *API Reference* in the Demo Kit.



## sap.m.ResponsivePopover

The `ResponsivePopover` is actually a combination of the functionality offered by a `sap.m.Dialog` and a `sap.m.Popover`. Depending on the device it is displayed on, it will either act as the former \(on a phone\) or as the latter \(on tablets and desktop\). For reuse, it is best placed within a fragment, which will be instantiated and displayed on demand, like when a user clicks a certain button, for example.

The `ResponsivePopover` does not need any additional properties to achieve proper device adaptation, it can simply be used "as is". There are, however, several properties that only take effect on one particular type of device, as some properties will not make any sense at all for a particular screen size.

For more details on these properties, see the documentation and sample for [sap.m.ResponsivePopover](https://ui5.sap.com/#/entity/sap.m.ResponsivePopover) in the *Samples* and [sap.m.ResponsivePopover](https://ui5.sap.com/#/api/sap.m.ResponsivePopover) in the *API Reference* in the Demo Kit.



## sap.m.OverflowToolbar

The `OverflowToolbar` is a special type of toolbar that allows you to decide if elements within should go into an overflow area when space on the screen is limited. All elements going into the overflow area can then be reached by clicking the overflow button.

As a developer, you can decide if there are elements that will never or always go into the overflow area by adding overflow layout data to particular content.

For detailed examples and more information about the `OverflowToolbar`, see the [sap.m.OverflowToolbar](https://ui5.sap.com/#/entity/sap.m.OverflowToolbar) samples and [sap.m.OverflowToolbar](https://ui5.sap.com/#/api/sap.m.OverflowToolbar) in the *API Reference* in the Demo Kit.



## sap.m.PullToRefresh

The `PullToRefresh` control allows users to trigger an update operation with touch or mouse interaction. On touch-enabled devices, the control will automatically be hidden, and users can swipe down the page to trigger it. On mouse-operated devices, the control will always be shown and can be clicked in order to trigger the functionality.

To use this control, it first needs to be placed within the content of any scroll container. In the corresponding controller, the refresh handler can be implemented, which in this use case would update the list of products in the view.

To see a full example and read more information about `PullToRefresh`, see the [sap.m.PullToRefresh](https://ui5.sap.com/#/entity/sap.m.PullToRefresh) samples and [sap.m.PullToRefresh](https://ui5.sap.com/#/api/sap.m.PullToRefresh) in the *API Reference* in the Demo Kit.



## sap.ui.layout.form.Form

`sap.ui.layout.form.Form` is a form that can also adapt to the available screen size, particularly when used with the corresponding `ResponsiveGridLayout`. A form consists of `FormContainers`, which in turn contain the fields and their labels. You can define general layout data for a form. For instance, you can decide how many columns you want to display depending on the available screen size, as shown here:

```
<f:layout>
	<f:ResponsiveGridLayout
		columnsL="4"
		columnsM="2"/>
</f:layout>
```

\(assuming that `f` is declared as the `sap.ui.layout.form` namespace under which the `ResponsiveGridLayout` is also available.\)

On a small screen, there will always be only one column for form containers.

Furthermore, you can define how much space labels will take when one or more columns are displayed, and you can also specify `sap.ui.layout.GridData` as layout data on the `FormContainers`, labels and content fields, as the `sap.ui.layout.Grid` is used internally in the form.

For more information about `sap.ui.layout.form.Form`, see the [sap.ui.layout.form.Form](https://ui5.sap.com/#/entity/sap.ui.layout.form.Form) samples and [sap.ui.layout.form.Form](https://ui5.sap.com/#/api/sap.ui.layout.form.Form) in the *API Reference* in the Demo Kit.

For more information about `ResponsiveGridLayout` and `GridData`, see [sap.ui.layout.form.ResponsiveGridLayout](https://ui5.sap.com/#/api/sap.ui.layout.form.ResponsiveGridLayout) and [sap.ui.layout.GridData](https://ui5.sap.com/#/api/sap.ui.layout.GridData) in the *API Reference* in the Demo Kit.

