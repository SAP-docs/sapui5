<!-- loiof5df293b96dc41699b8b357e9bcf7ed6 -->

# Message Handling

Recommended guidelines for message handling.

We recommend to invest care and energy in good message content:

-   Provide short and crisp error messages to the user.
-   A message should always contain a 'Call for Action'.
-   To achieve the above, you need to map error messages from a back-end system.
-   Focus on the most common error situations and improve the messages there.
-   You need to detect all problems related to network connectivity and indicate them as such.



<a name="loiof5df293b96dc41699b8b357e9bcf7ed6__section_N10035_N10011_N10001"/>

## Messages Related to a Page

For showing messages to the user that are related to the currrent page, you have several possible controls. Each of these offers a different type of interaction from the user. Choose the control that fits best in you interaction pattern.



### Message Dialog

-   A message dialog interrupts the user's workflow by blocking the current page and needs to be closed by the user.
-   Use a message dialog if the message is important and must be acknowledged by the user.
-   The easiest way of showing a message dialog is to use the `sap.m.MessageBox`.
-   If you want full control of the content you can also use `sap.m.Dialog` control and set the type to `sap.m.DialogType.Message`.
-   As `MessageBox` is a static class, a `sap.ui.require("sap.m.MessageBox");` statement must be explicitly executed before the class can be used.

> ### Example:  
> ```js
> 	// load MessageBox asynchronously
> 	sap.ui.require(['sap/m/MessageBox'], function(MessageBox) {
> 	
> 		// and display message
> 		MessageBox.show(
> 			"This message should appear in the message box.", {
> 				icon: MessageBox.Icon.INFORMATION,
> 				title: "My message box title",
> 				actions: [MessageBox.Action.YES, MessageBox.Action.NO],
> 				onClose: function(oAction) { / * do something * / }
> 			}
> 		);
> 	});
> ```



### Message Toast

-   A message toast is an overlay that disappears after some time or if the user taps somewhere else. It does not block the user.
-   The message will automatically fade out, unless it is selected by the user.
-   Use this pattern if the message is less important and the user should not be blocked in his work.
-   You can open a message toast easily with the `sap.m.MessageToast` API.

> ### Example:  
> ```js
> 	// add MessageToast as import
> 	sap.ui.define([..., 'sap/m/MessageToast', ...], function(..., MessageToast, ...) {
> 
> 		...
> 		// show toast when needed
> 		MessageToast.show("Item deleted");
> 		...
> 
> 	});
> ```



### MessageStrip

`MessageStrip` enables the embedding of short application-related messages in the application. There are four types of messages and each is color-coded and has an icon corresponding to its type: `Information`, `Success`, `Warning` and `Error`.

> ### Example:  
> ```
> 	// add MessageStrip and MessageType as imports
> 	sap.ui.define([..., 'sap/m/MessageStrip', 'sap/ui/core/library', ...], function(..., MessageToast, coreLibrary, ...) {
> 	
> 	...
> 		var MessageType = coreLibrary.MessageType;
> 		
> 		var msg = new MessageStrip({
> 			id: "importantMessage",
> 			text: "This is a sample text",
> 			type: MessageType.Error,
> 			showIcon: true,
> 			showCloseButton: true
> 		});
> 		
> 	...
> 	});
> ```

The `MessageStrip` is useful when you want to display short notices, for example of finished background tasks, that do not require further user interaction.



### MessagePopover

`MessagePopover` displays a summarized list of different types of messages \(errors, warnings, success and information\). It provides a handy and systemized way to navigate and explore details for every message. You can find more information on `MessagePopover` [here](message-popover-52824a6.md).



### MessageView

`MessageView` displays the same type of summarized messages list as the `MessagePopover`. The main difference between the controls is that the `MessageView` can be embedded in any suitable control \(for example a `Dialog`\). This allows displaying of the message summary in any part of the application. As of version 1.46, the `MessagePopover` has been refactored to automatically instantiate and use a `MessageView` for its content. All other controls need to instantiate it themselves. Here is a sample for a `MessageView` in a `Dialog:`

```
...
	sap.ui.require(['sap/m/Dialog', 'sap/m/MessageView', 'sap/m/Bar', 'sap/m/Button', 'sap/m/Text'], 
		function(Dialog, MessageView, Bar, Button, Text) {
	
			// create message view 
			var oMessageView = new MessageView({
				showDetailsPageHeader: false,
				itemSelect: function () {
					that._oBackButton.setVisible(true);
				},
				items: {
					path: "/",
					template: oMessageTemplate
				}
			});

			...

			var oDialog = new Dialog({
				title: "Messages",
				resizable: true,
				content: oMessageView,
				state: 'Error',
				beginButton: new Button({
					press: function () {
						oDialog.close();
					},
					text: "Close"
				}),
				customHeader: new Bar({
					contentMiddle: [
						new Text({ text: "Error"})
					],
					contentLeft: [
						oBackButton
					]
				}),
				contentHeight: "300px",
				contentWidth: "500px",
				verticalScrolling: false
			});
	
			oDialog.open();
			...
		
		}
	);
...
```



<a name="loiof5df293b96dc41699b8b357e9bcf7ed6__section_N1008E_N10011_N10001"/>

## Messages Related to Elements of a Page

For showing messages to the user that are related to a specific element of a page there is no dedicated UI control available in `sap.m` in this version. We recommend to use the `sap.ui.core.HTML` control to show these error messages 'somewhere close to the input' or use some kind of overlay. Consider that the user will have the on screen keyboard open which might hide messages. Putting the message above an input field could help.

You can set the `ValueState` of the `sap.m.Input` control to `Error` to indicate that the content is not correct.



<a name="loiof5df293b96dc41699b8b357e9bcf7ed6__section_N100AF_N10011_N10001"/>

## Multiple Messages

SAPUI5 Mobile does **not** support multiple messages at the same time. Mobile Designs recommend to be 'more sparse' with messages, that is, only show one message at a time. This can also be achieved by combining and reducing multiple messages.

**Related Information**  


[Message Popover](message-popover-52824a6.md "Message Popover is used to display a summarized list of different types of messages (errors, warnings, success and information). It provides a handy and systemized way to navigate and explore details for every message.")

