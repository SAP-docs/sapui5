<!-- loioee31761b27034a90bbb37c9463fbdd56 -->

# Extension Point for Reacting When Properties Are Updated in the Back End

You can add custom coding to react when properties are updated in the back end.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

You can use the `watchProperty` method of the `extensionAPI` to define a callback when selected properties are changed.

1:n navigation properties are not supported.

You can use the following parameters for the callback function:

-   `newValue`: the new value of the property
-   `oldValue`: the previous value of the property
-   `isInitial`: set to `true` if the property is retrieved from the back end for the first time
-   `context`: the page context

Call the `watchProperty` method within the controller extension of your page, as shown in the following sample code:

> ### Sample Code:  
> ```js
> sap.ui.define(
>     ["sap/ui/core/mvc/ControllerExtension", "sap/ui/core/message/Message", "sap/ui/core/message/MessageType"],
>     function (ControllerExtension, Message, MessageType) {
>         "use strict";
> 
>         return ControllerExtension.extend("watchProperties-basic.ext.OPExtend", {
>             override: {
>                 onInit: function () {
>                     this.base.getExtensionAPI().watchProperty("isHotCountry", (newValue, oldValue, isInitial, context) => {
>                         if (newValue === true) {
>                             const messages = [
>                                 new Message({
>                                     message: "Employee is in a hot country",
>                                     type: MessageType.Information
>                                 })
>                             ];
>                             this.base.getExtensionAPI().showMessages(messages);
>                         } else {
>                             this.base.getExtensionAPI().hideMessage();
>                         }
>                     });
>                 }
>             }
>         });
>     }
> );
> 
> ```

In the example above, a message is displayed when the property `isHotCountry` is set to `true`.

