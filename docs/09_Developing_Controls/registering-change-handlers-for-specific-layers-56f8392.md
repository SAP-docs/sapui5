<!-- loio56f8392f1f7d4af79638df315bf0bcc5 -->

# Registering Change Handlers for Specific Layers

Here's how to enable a change handler for certain layers.

By default, all change handlers are enabled for key user changes and developer changes, but not for personalization changes. If you want to enable a change handler for personalization, you can change the default permissions.

Here are the default permissions:

> ### Sample Code:  
> ```
> oSettings.defaultLayerPermissions = {
>     "VENDOR": true,
>     "CUSTOMER_BASE": true,
>     "CUSTOMER": true,
>     "USER": false
> };
> ```

To change the default layer permissions, you can add a `layer` property to the `changeType` flexibility object, containing the layer names for which you want to change the default values. For example, `CUSTOMER` and `USER` layer default permissions can be changed as shown in the following code sample:

> ### Sample Code:  
> sample.flexibility.js
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>  
>     return {
>         "<changeType>": {
>             "changeHandler": {
>                 applyChange: function(oChange, oControl, mPropertyBag) {
>                     ...
>                 },
>                 revertChange: function(oChange, oControl, mPropertyBag) {
>                     ...
>                 },
>                 completeChangeContent: function(oChange, mSpecificChangeInfo, mPropertyBag) {
>                     ...
>                 }
>             },
>             "layers": {
>                 "CUSTOMER": false,
>                 "USER": true
>             }
>         }
>     };
> });
> ```

To overwrite these defaults, specify the layers when you register the change handler. For this you have to use a slightly different form. You only have to specify the permissions that are different from the default, as shown in this example:

> ### Sample Code:  
> library.js
> 
> ```
> extensions: {
>     flChangeHandlers: {
>         "sap.uxap.ObjectPageLayout": {
>             "moveControls": {
>                 "changeHandler": "default",
>                 "layers": {
>                     "USER": true // Now also enabled for end user personalization; the other layers are not affected
>                 }
>             }
>         },
>         "<some other control>": {
>             "combineButtons": {
>                 "changeHandler": { ... },
>                 "layers": {
>                     "CUSTOMER": false // Too risky for key user, only allowed for upper (more developer-centric) layers
>                 }
>             },
>             "unhideControl": {  // Default layer for this change type
>                 "changeHandler": "default"
>             }
>         }
>     }
> }
> ...
> ```

