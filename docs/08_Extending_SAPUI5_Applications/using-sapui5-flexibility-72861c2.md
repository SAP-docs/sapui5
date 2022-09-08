<!-- loio72861c2eefd64ef392ae5b192a804d6b -->

# Using SAPUI5 Flexibility

You can use SAPUI5 flexibility to extend your SAP Fiori apps.



<a name="loio72861c2eefd64ef392ae5b192a804d6b__section_w4p_rgf_n2b"/>

## Overview

SAPUI5 flexibility \(see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md)\) allows you to extend SAPUI5 freestyle or SAP Fiori elements applications without modifications of base artefacts. To use this type of extensibility, you need an adaptation project in SAP Business Application Studio. It allows you to make changes that are also available in key user adaptation \(see [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md)\) as well as to extend views with XML fragments \(see [XML Fragments](../04_Essentials/xml-fragments-2c677b5.md)\) and extend controllers with controller extensions.



<a name="loio72861c2eefd64ef392ae5b192a804d6b__section_vjc_m3f_n2b"/>

## Using SAPUI5 Flexibility for Controller Extensions

Controller extensions add or override functionality of existing applications. For more information, see [Using Controller Extension](../04_Essentials/using-controller-extension-21515f0.md).

By using SAPUI5 flexibility and adaptation projects, controller extensions are added to the reserved `extension` namespace of the controller. This is done in order to avoid name clashes with already existing functionality in the controller, for example `oMainControllerInstance.extension.my.sample.ControllerExtension.publicMethod()`.



### Usage in a View

The controller extension functionality can be used in views in the same way as a regular controller function. Deep namespaces are already supported in this scenario and it should work without additional effort.

```
<Button press=".extension.my.sample.ControllerExtension.publicMethod" text="Execute"></Button>
```



### Override Extension Functionality

It is possible to override public or extend lifecycle methods of controller extension in another controller extension.

```
override: {
    //override other extensions method by the namespace extension name
    extension: {
        "my.sample.ControllerExtension": {
            publicMethod: function() {
                //...
            }
        }
    }
}
```

You can also override an extension directly in a controller.

> ### Sample Code:  
> ```js
> sap.ui.define(['sap/ui/core/mvc/Controller', 'my/extension/SampleExtension'],
>     function(Controller, SampleExtension) {
>     "use strict";
>     return MainController = Controller.extend("sample.Main", {
>         //inline override of an extension. E.g. to provide a hook implementation
>         sample: SampleExtension.override({
>             someHook: function() {},
>             someOtherMethod: function() {}
>         }),
>         onLifecycleHook: function() {
>         }
>     });
> });
> 
> ```

**Related Information**  


[What is SAPUI5 Flexibility?](https://help.sap.com/viewer/UI5_Flex/e36d19b3d24f47199a9a82d3faa508c3.html)

