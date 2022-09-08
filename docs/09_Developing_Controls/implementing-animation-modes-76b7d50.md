<!-- loio76b7d5065cf64304a1d2841046043c34 -->

# Implementing Animation Modes

Some UI elements can have animations like page transitions or dynamic buttons. There may be cases where the animation has to be suppressed, for example, for performance reasons or for specific users. As a control developer, you have to make sure that your control supports the animation modes that are offered to the users.

The following animation modes are available:

-   `full`: all animations are shown

-   `basic`: a reduced, more light-weight set of animations

-   `minimal`: no animations are shown, except animations of fundamental functionality

-   `none`: deactivates the animation completely


The animation mode can either be set using the configuration parameter `window['sap-ui-config]['animationMode']` or as URL parameter \(see [Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md)\).

The value for the attribute `data-sap-ui-animation-mode` on the `<html>` document root element is injected automatically on loading with the return value by using the `getAnimationMode` method of the configuration object.

If the mode is changed, the value of `data-sap-ui-animation-mode` is updated correspondingly.

The attribute can be selected in CSS with `html[data-sap-ui-animation-mode="<mode>"]`.

> ### Example:  
> The following implementation defines the duration for animation mode `full` with 1 sec, `minimal` and `basic` with 0.1 sec, and `none` with 0.0 sec.
> 
> ```
> html[data-sap-ui-animation-mode="full"] .someClassName{
>     transition-duration: 1.0s;
> }
> html[data-sap-ui-animation-mode="minimal"] .someClassName,
> html[data-sap-ui-animation-mode="basic"] .someClassName {
>     transition-duration: 0.1s;
> }
> 
> html[data-sap-ui-animation-mode="none"] .someClassName {
>     transition-duration: 0.0s;
> }
> ```

**Related Information**  


[Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md "The complete list of configuration options available in SAPUI5 can be found in the API Reference under sap.ui.core.Configuration. The following table shows a subset of the available configuration options.")

