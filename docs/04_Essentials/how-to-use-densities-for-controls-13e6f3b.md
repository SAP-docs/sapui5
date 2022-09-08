<!-- loio13e6f3bfc54c4bd7952403e20ff447e7 -->

# How to Use Densities for Controls

How content densities are set and how they can be used in the SAP Fiori launchpad is explained and shown in the following code samples \(using the *Compact* density as an example\).

> ### Note:  
> The default design for all controls belonging to the `sap.m` library is the *Cozy* density \(larger dimensions and spacings\). If your application only uses the `sap.m` library, you can skip setting a CSS class if the *Cozy* density is exactly what you require. However, controls belonging to other libraries may also support a cozy design \(such as `sap.ui.table.Table`\) but the default might be different \(such as *Compact* density\). For this reason, if your application uses controls belonging to different libraries, we strongly recommend that you set the CSS class `sapUiSizeCozy` if you want to use the *Cozy* density \(and similarly, CSS class `sapUiSizeCompact` for the *Compact* density\).



## Using Densities

A density is triggered by the related CSS class, for example, `sapUiSizeCompact` for the *Compact* density, set on a parent element of the UI region for which you want to use the controls. This means that some parts of the UI or different apps inside a `sap.m.Shell` can use the standard density of the `sap.m` controls, while other parts can use a different density at the same time. However, sub-parts of the UI part that is set to *Compact* density **cannot** use the *Cozy* density because the CSS class affects the entire HTML subtree.

As dialogs and other popups are located at the root of the HTML document, you also have to set the CSS class for those elements to the respective density. The CSS class only affects child controls. You **cannot** make a control itself compact or cozy by adding the CSS class to it. Instead, set the CSS class on the parent container, for example a view or a component.

XML view definition - Example:

```xml
<mvc:View class="sapUiSizeCompact" xmlns=....>
   ...
</mvc:View>
```

JS view definition - Example:

```js
createContent: function(oController) {
   ...
   this.addStyleClass("sapUiSizeCompact"); // make everything inside this View appear in Compact density
   ...
}
```

JavaScript opening a dialog - Example:

```js
// "Dialog" required from module "sap/m/Dialog"
var myDialog = new Dialog({.....}).addStyleClass("sapUiSizeCompact");
myDialog.open();
```

JavaScript instantiating a view - Example:

```js
// "View" required from module "sap/ui/core/mvc/View"
View.create({ ... }).then(function(oView) {
    oView.addStyleClass("sapUiSizeCompact");
});
```

> ### Note:  
> It is also possible to apply the relevant density only under certain circumstances, for example, for devices that do **not** support touch interaction. In this case, add the class dynamically to the UI instead of statically. You can do this, for example, in the view controller:
> 
> ```js
> sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/Device'], function(Controller, Device) {
>     return Controller.extend("sap.my.controller", {
>             onInit: function() {
>                 // apply compact density if touch is not supported, the standard cozy design otherwise
>                 this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
>             }
>         }
>     );
> });
> ```

As the check depends on several factors, you may not want to repeat the same logic again and again. A dialog opened from a compact or cozy view should, for example, also be in *Compact* or *Cozy* density.



## Synchronizing a Density for a Dialog

As dialogs are rendered in a different part of the HTML tree, they do **not** automatically inherit the density. To decide if you set the relevant density for a dialog, either perform the same check as for the view or use the convenience function `syncStyleClass` from `sap/ui/core/syncStyleClass`. This convenience function synchronizes a style class between elements. The function accepts the following parameters: Name of the style class, source element, and destination element. The following code snippet shows an example:

```xml
<mvc:View
    controllerName="mycontroller"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
    <Button text="Show Dialog" press="onOpenDialog" />
</mvc:View>
```

```xml
<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core">
    <Dialog title="Alert" type="Message">
        <Text text="Lorem ipsum dolor sit amet" />
        <beginButton>
            <Button text="Close" press="onDialogClose" />
        </beginButton>
    </Dialog>
</core:FragmentDefinition>
```

```js
sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment", "sap/ui/core/syncStyleClass"], function(Controller, Fragment, syncStyleClass) {
    return Controller.extend("mycontroller", {
        onOpenDialog: function (oEvent) {
            var fnSync = function(oDialog) {
                // sync compact style
                syncStyleClass("sapUiSizeCompact", this.getView(), this.oDialog);
                this.oDialog.open();
            }.bind(this);

            if (!this.oDialog) {
                this.pDialog = this.loadFragment({
                    name: "mydialog"
                });
            }

            // chain the style-class sync to the fragment loading promise
            this.pDialog.then(fnSync);
        }
    });
});
```

When calling `syncStyleClass` from `sap/ui/core/syncStyleClass`, the source element can be a jQuery object, a SAPUI5 control, or the ID of an HTML element. The destination object can either be a jQuery object or a SAPUI5 control.



## Checking for the Density Style Class

To determine if the relevant style class is set anywhere above a certain HTML element, you can use the `closest` function from jQuery as shown in the following example:

```js
// "Button" required from module "sap/m/Button"
// "Dialog" required from module "sap/m/Dialog"
var btn = new Button({
    text: "Hello World",
    press: function(){
        var dialog = new Dialog({
            title: "Hello World",
            content: new Button({text:"Test Me"})
        });
        
        
        // add the 'sapUiSizeCompact' class if the Button is in an area using Compact density
        if (this.$().closest(".sapUiSizeCompact").length > 0) { // "this" in the event handler is the control that triggered the event
            dialog.addStyleClass("sapUiSizeCompact");
        }
        
        
        dialog.open();
    }
});
```



## Using Density Classes in the SAP Fiori launchpad

The SAP Fiori launchpad \(FLP\) optionally reads the supported content densities from the app descriptor \(`manifest.json`\) and - if available - sets the appropriate content density class on the `<body>` tag. On devices with mouse and touch support, the FLP also allows the desired content density to be configured by the user. To avoid situations where an application and the FLP write different content density classes, we recommend using the following logic within all applications that are intended to be used inside the FLP:

```js

getContentDensityClass : function() {
      if (this._sContentDensityClass === undefined) {
             // check whether FLP has already set the content density class; do nothing in this case
             if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
                   this._sContentDensityClass = "";
             } else {
                    // Store "sapUiSizeCompact" or "sapUiSizeCozy" in this._sContentDensityClass, depending on which modes are supported by the app.
                    // E.g. the “cozy” class in case sap.ui.Device.support.touch is “true” and “compact” otherwise.
             }
      }
      return this._sContentDensityClass;
}
```

This function returns an empty string if the FLP has already set a content density CSS class, or the proper CSS class to be set. The result of this function should then be set as a style class on the root view of the application and all dialogs and popups.



## Providing Density Support for a Control

If you want to apply content densities to your own controls, provide the default CSS styling for the *Cozy* density regardless of any size density classes and provide additional CSS styling to shrink the size, if an ancestor element has the `sapUiSizeCompact` class, for example, for the *Compact* density. The following code snippet shows you an example:

```
.myOwnControl { /* the standard (big) style */
   ...
   height: 3rem;
   ...
}

.sapUiSizeCompact .myOwnControl { /* reduce the height in compact density */
   height: 2rem;
}
```

