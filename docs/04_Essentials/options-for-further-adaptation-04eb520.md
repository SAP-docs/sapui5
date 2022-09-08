<!-- loio04eb5203d1c649b796fab12a09e600ef -->

# Options for Further Adaptation

In addition to those performed automatically by SAPUI5, the application can apply further platform adaptations.

You can use the `sap.ui.Device` API to check for touch enablement, a particular screen size, orientation, browser or operating system, for example. For more information about this API, see [The Device API](the-device-api-69a8e46.md).

Besides using this API, there are also several options available for you to use by using CSS, as outlined below.



<a name="loio04eb5203d1c649b796fab12a09e600ef__section_N10018_N10011_N10001"/>

## Hiding/Displaying Controls Depending on the Device

To determine a control’s visibility in a device-dependent way, you can use the following CSS classes:

-   `sapUiVisibleOnlyOnDesktop`

-   `sapUiHideOnDesktop`

-   `sapUiVisibleOnlyOnTablet`

-   `sapUiHideOnTablet`

-   `sapUiVisibleOnlyOnPhone`

-   `sapUiHideOnPhone`


The names are actually self-explanatory; for each device, you have a corresponding class that you can use to either explicitly hide or show the particular control.

> ### Note:  
> The control will still be part of the app but hidden by CSS only. For managing visibility on a generic level, consider controlling the visible property with the device API instead, as this means the controls will not be added to the DOM at all but just treated as invisible by SAPUI5.



<a name="loio04eb5203d1c649b796fab12a09e600ef__section_N100DD_N10011_N10001"/>

## Responsive Margin and Padding Classes

In order to make it possible for app developers to adjust margins and paddings in their apps without needing to write their own CSS, SAPUI5 provides them with convenience classes. For responsiveness, the classes `sapUiResponsiveMargin` and `sapUiResponsiveContentPadding` are particularly useful.

To read more detailed documentation about margins and padding classes, see [Using Predefined CSS Margin Classes](using-predefined-css-margin-classes-777168f.md) and [Using Container Content Padding CSS Classes](using-container-content-padding-css-classes-c71f6df.md) respectively.



## Writing Device-Dependent Custom CSS

It is easy to add your own device-dependent or screen-size-dependent custom CSS by prefixing your selectors with the classes that come from the device API \(for more information about the device API, see the link below under *Related Information*\). Whenever you need to set a particular style on, say, a small screen like a phone only, you can do so by picking the `sapUiMedia-Std-Phone` CSS class as part of your selector. For example, a particular style for phone only could look like this:

```js

.sapUiMedia-Std-Phone .yourSelector{
	Style-applied-to-phone-only: someValue;
}
```

Additionally, the information regarding which device you are currently on is available on the html root tag as one of these three CSS classes:

-   `sap-desktop`

-   `sap-tablet`

-   `sap-phone`


This means you can provide style for the phone use case using CSS cascades as follows:

```js

.sap-phone .myControl {
      font-size: small;
}
```

The main difference between the two options is that the first one makes assumptions based on the current range interval \(so the screen size\), whereas the latter is indeed set depending on which device is present.

You might also consider checking the screen size using media queries in CSS or the browser/jQuery APIS in JavaScript.

For more information about writing custom CSS in general, please also read [CSS Styling Issues](../05_Developing_Apps/css-styling-issues-9d87f92.md).

**Related Information**  


[The Device API](the-device-api-69a8e46.md "The device API (sap.ui.Device) is an API which provides information about device specifics, like the operating system along with its version, the browser and browser version, screen size, current orientation and support for specific features like touch event support, orientation change and so on.")

