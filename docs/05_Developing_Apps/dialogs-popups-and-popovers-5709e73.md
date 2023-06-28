<!-- loio5709e73d51f2401a9a5a89d8f5479132 -->

# Dialogs, Popups, and Popovers

SAPUI5 dialog controls can serve different purposes within the application and are therefore handled differently by the screen reader.



## General Behavior

Dialog controls are used to interact with the user in two main ways. Popups, message boxes, and busy dialogs interrupt the user and require some additional interaction. Message toast and message strip are used to just display some status information without interrupting the user. Interrupting dialogs have a more complex structure, but all generally follow the same structure - a title, content area and some actions. The title should be the first thing read by the screen reader. It should explain the general purpose of the dialog \(i.e. Data confirmation, Interruption\). If the dialog contains initially focused elements, like action buttons, those should be read after the title announcement. The contents of the dialog should be read in their respective order.



## Titles and Labels

The behavior of controls based on Dialog/Popup \(`role="dialog"`\) changes depending on their `aria-labelledby` attribute.

If the control has an `aria-labelledby` attribute, the screen reader will announce the following elements:

-   The provided label

-   The role of the dialog

-   The currently focused element


If the control does NOT have an `aria-labelledby` attribute, the screen reader will announce the following elements:

-   All elements in the dialog \(regardless if interactive or not\)

-   The role of the dialog

-   The currently focused element


The `title` property of a Popover/Dialog is used to display the title of the dialog. If the dialog has no visible title, but one is needed, it can be provided as a reference to another control in `ariaLabelledBy` association. All other text that needs to be read before the title, can be added there as well.

> ### Note:  
> A dialog without a title will be read completely when it appears. Users with screen readers will not be able to differentiate it from the rest of the application.

> ### Example:  
> Dialog with `ariaLabelledBy` 
> 
> ```
> 	var oDialog = new sap.m.Dialog({
> 				title: "Dialog Title",
> 				ariaLabelledBy: "textId",
> 				content: [
> 					new sap.m.Text({id: "textId", text: "A sample text that will be annoucned by JAWS after the title, when the dialog is opened."})
> 				]
> 			});
> 			
> 			var btn = new sap.m.Button({
> 				text:'Hello World',
> 				press: function(){
> 					oDialog.open();
> 				}
> 			});
> 			btn.placeAt('content');
> ```

