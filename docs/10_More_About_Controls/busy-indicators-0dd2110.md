<!-- loio0dd211065c714c0d8a35cecb5fea8557 -->

# Busy Indicators

You use busy indicators to inform users that something is going on in the background, for example, some data is being fetched from the back end and the user has to wait. As long as the busy indicator is shown, either all or a specific part of the UI is blocked, and no user interaction is possible.

Whenever busy indication is triggered, the default delay until the busy indicator is displayed on the UI is 1000 ms \(1 second\). If this delay were not in place, the busy indicator would always be displayed, even if there is no negotiable waiting time.

You can choose between the following busy indicators, depending on your use case:

-   `sap.ui.core.BusyIndicator`

-   `sap.m.BusyDialog`

-   `sap.m.BusyIndicator`




## Blocking the Whole UI

You can use the `sap.ui.core.BusyIndicator` busy indicator to block the whole UI. You can set the delay in ms by specifying the number:

```js
// BusyIndicator required from module "sap/ui/core/BusyIndicator"

BusyIndicator.show(<number>);
```

To release the UI again, the busy indication must be hidden again. This function call hides the busy indication immediately:

```js
BusyIndicator.hide();
```

[API Reference: `sap.ui.core.BusyIndicator`](https://ui5.sap.com/#/api/sap.ui.core.BusyIndicator)



## Busy Indication with Dialog

With the `sap.m.BusyDialog` busy indicator, you can block the whole UI like you do with `sap.ui.core.BusyIndicator`, but you can also show a dialog box. In this dialog box, you can also include a *Cancel* button that users can choose to stop the activity that's running in the background.

[API Reference: `sap.m.BusyDialog`](https://ui5.sap.com/#/api/sap.m.BusyDialog)

[API Overview and Samples: `sap.m.BusyDialog`](https://ui5.sap.com/#/entity/sap.m.BusyDialog)



## Busy Indication on Control Level

The `sap.m.BusyIndicator` busy indicator blocks specific UI areas that are defined by a control. For example, if a table in a complex UI is loading, only the table is blocked - the user can still carry on working with the rest of the UI.

If a control is set to busy, the complete control will be covered with a block layer, so no mouse events or keyboard interaction with the control are possible. If keyboard navigation is being used to step through the controls, controls that are set to `busy` are skipped and the focus jumps to the next control.

Here's how to do it:

```js
	
// Input required from module "sap/m/Input"
var oInput = new Input({
    value: 'Hello World'
});
...
oInput.setBusy(true);
```

The following code shows how you define the default state of a control as `busy` so that it will be displayed as busy when it has been rendered:

```js
	
var oInput = new Input({
    value: 'Hello World',
    busy: true
});   

```

To release the control's busy state again, the same API can be used. This has to be done by the application after some data has been loaded, for example with the following command:

```js
oMyListBox.setBusy(false);
```

To change the default delay of the local busy indicator, use:

```js
oMyListBox.setBusyIndicatorDelay(<number>);
```

[API Reference: `sap.m.BusyIndicator`](https://ui5.sap.com/#/api/sap.m.BusyIndicator)

[API Overview and Samples: `sap.m.BusyIndicator`](https://ui5.sap.com/#/entity/sap.m.BusyIndicator)

[API Overview and Samples: `sap.ui.core.Control`](https://ui5.sap.com/#/entity/sap.ui.core.Control)

