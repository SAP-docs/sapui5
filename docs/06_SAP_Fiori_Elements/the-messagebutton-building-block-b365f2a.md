<!-- loiob365f2af2e59456e831c7ee98a896d0e -->

# The `MessageButton` Building Block



The `MessageButton` building block provides an easy way to collect and display all relevant bound messages using a `MessageButton` control. This behavior is similar to how messages are handled in the footer of the object page.

> ### Remember:  
> This building block is an experimental feature and subject to revisions. It is not intended for productive usage.

You can embed the `MessageButton` building block within your application using the following syntax:

> ### Sample Code:  
> ```
> <macros:MessageButton visibilityChange=".handleMessageButtonVisibility" />
> 
> ```

When the message model detects a change, such as new messages being added or existing messages being deleted, the `MessageButton` building block is invoked. It filters for bound, non-technical messages in the model. If such messages exist, it invokes the controller extension hook `beforeShowMessageButton()`. This hook provides the following options for handling these messages:

-   Control message rendering - Choose whether the messages must be rendered by the `MessageButton` building block. For example, to handle specific messages in a custom way such as displaying them in a message strip instead of a message popover.

    > ### Note:  
    > Bound messages must appear only in the message popover when the page is in edit mode. To ensure this behavior, applications can determine, within the `beforeShowMessageButton()` hook, whether the page is in edit mode. If it is not, applications can filter all messages and display them in a message dialog, thereby preventing them from appearing in the message popover.

-   Group messages: Group the messages to provide an organized view for the end users. By default, all messages are linked to the *General* section.

-   Customize message link behavior: Override the default action when an end user clicks the message displayed as a link. By default, the building block focuses on the field set as the target for the message.


If any bound messages remain after hook processing, the `MessageButton` control becomes visible, handling message count and criticality. If a hook is defined using the `visibilityChange` property, it is invoked before the control is displayed. This hook allows the application to control the visibility of the parent container that holds the `MessageButton` control, such as the footer toolbar.

> ### Note:  
> You must manage the lifecycle of messages in the message model. For example, by clearing messages that are no longer relevant after an action or change, or by ensuring that state messages are only added after finalizing actions such as *Save*.

Check out our live example in the flexible programming model explorer at [MessageButton](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/features/messageButtonDefault).



<a name="loiob365f2af2e59456e831c7ee98a896d0e__section_htw_sjv_2fc"/>

## API

For information about the `MessageButton` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.MessageButton).

