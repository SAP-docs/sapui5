<!-- loio79a9c51057864e7abc3faf0e7c3073c6 -->

# ARIA Event Handling

When the UI of an application is changing or loading information, these state transitions and updates need to be passed on to the screen reader as well. You need to set the correct ARIA attributes \(for example, aria-live or aria-busy\) for the corresponding areas in your application.



## UI Updates

In some cases an app needs to stay non-responsive for longer periods of time. This may be caused by the app fetching data or updating the UI. In these cases, busy indicators are shown to inform the user that the app is processing data.

The affected regions of the UI should have the property `aria-live` set to `true`. This informs the screen reader that the region's DOM structure is currently subject to change and therefore internal processing should be applied.



## Event Handling

Accessible events are designed as a signaling mechanism for screen readers. An example for this is when parts of the UI update, either as a result of a direct user action \(such as performing a selection\) or by software \(such as "*incoming mail*" messages or popups\). Events like a dialog showing up or content updates of parts of the screen are handled by assigning specific roles and properties of the UI elements \(for example, an HTML `<input type=checkbox>` element, would need `role="dialog"` or property `aria-live` set accordingly\). Screen readers then listen to accessible events raised by browsers for these UI parts and react accordingly.

When the app is loading or fetching information, the ARIA property `aria-busy="true"` should be set for the corresponding region.

