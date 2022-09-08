<!-- loio69a8e469fbde46e7b8916250080effbd -->

# The Device API

The device API \(`sap.ui.Device`\) is an API which provides information about device specifics, like the operating system along with its version, the browser and browser version, screen size, current orientation and support for specific features like touch event support, orientation change and so on.

For example, the `sap.ui.Device.orientation` object holds the current orientation information:

-   `landscape`: Flag indicating whether the current orientation is landscape

-   `portrait`: Flag indicating whether the current orientation is portrait


If you want to register a handler for a particular event like a resize or an orientation change, for example, you can do so easily by attaching to such an event:

```js

sap.ui.Device.orientationChange.attachHandler(function(){
	alert("orientation changed");
});
```

Both work across platforms, even in cases where the orientation change event is not natively supported by the device, for instance.

If you want to check for a certain system category \(phone, tablet, desktop\) in your code, you can ask for the value of `sap.ui.Device.system.phone`, which would be set to `true` if you are accessing the page from a phone.

> ### Note:  
> Categorization is based on various factors like screen size, touch enablement, operating system and user agent. Depending on the combination of features on a device, it could happen that more than one flag is set to `true`.

In the same way, you can also check for different browsers, different operating systems and available features for the current device or browser.

An API for screen width change events is available under `sap.ui.Device.media`. It allows you to attach handlers to screen width changes between certain intervals. Whenever such an interval is met, there is a certain CSS class added to the HTML root tag on the page. There are predefined range sets for these intervals for typical widths. The standard sets which are automatically initialized are as follows:

-   SAP\_3STEPS: A 3-step range set \(S-L\)

-   SAP\_STANDARD\_EXTENDED: A 4-step range set \(Phone, Tablet, Desktop, LargeDesktop\)


For more information about the exact values and corresponding css classes, see [sap.ui.Device.media.RANGESETS](https://ui5.sap.com/#/api/sap.ui.Device.media.RANGESETS) in the *API Reference* in the Demo Kit.

The range sets described above will add a CSS class to the body element of the HTML according to the following pattern: `sapUiMedia-Std-NAME_OF_THE_INTERVAL` and `sapUiMedia-StdExt-NAME_OF_THE_INTERVAL`.

The following ranges are available by default:

-   `"Phone"`: For screens smaller than 600 pixels.

-   `"Tablet"`: For screens greater than or equal to 600 pixels and smaller than 1024 pixels.

-   `"Desktop"`: For screens greater than or equal to 1024 pixels and smaller than 1440 pixels.

-   `"LargeDesktop"`: For screens greater than or equal to 1440 pixels \(coming from the Extended range set\)


You can use any of the available range sets to attach to a particular width interval change, like in this example here:

```js

// attach to event
sap.ui.Device.media.attachHandler(fnSizeChanged, null, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
// eventHandler: 
function fnSizeChanged(mParams) {
    switch(mParams.name) {
        case "Phone":
            // Do what is needed for a little screen
            break;
        case "Tablet":
            // Do what is needed for a medium sized screen
            break;
        case "Desktop":
            // Do what is needed for a large screen
    }
}

```

Your event handler will be called with a single argument, a map of parameters you can then access which contain the following information about the current interval after the width change:

-   `mParams.from`: The start value \(inclusive\) of the entered interval as a number

-   `mParams.to`: The end value \(exclusive\) range of the entered interval as a number or undefined for the last interval \(infinity\)

-   `mParams.unit`: The unit used for the values above, for example "px"

-   `mParams.name`: The name of the entered interval, if available


In your event handler, you can then easily check for the current interval or interval name and implement your code to update the UI for the new range set accordingly. If you want to work with a different range set, you need to make sure that you initialize it explicitly by using the `initRangeSet` method available with `sap.ui.Device.media`.

If your use case requires it, you can also define your own range set, which would again require explicit initialization from your side.

For more information, see [sap.ui.Device.media.initRangeSet](https://ui5.sap.com/#/api/sap.ui.Device.media/methods/sap.ui.Device.media.initRangeSet) in the *API Reference* in the Demo Kit.

