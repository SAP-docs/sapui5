<!-- loio91f28be26f4d1014b6dd926db0e91070 -->

# Support for Unique IDs

Stable IDs are used to identify and modify the controls within the controller during runtime. However, if you reuse or nest these views, these stable IDs are no longer unique. To avoid ambiguity, each view adds its own ID as prefix to all its child controls.

If the ID is created during instantiation of the control, it is unique by default. If you create further controls during runtime, the controller creates a unique ID by calling the `oController.createId("ID")` method. These methods add the necessary prefix to the ID.

If you want to modify the control with the ID `<ID>`, you can call the `byId(<ID>)` method on your view to get the correct control directly. You do not have to handle all the prefix stuff on your own.

The following view defines a button with the stable ID `aButton` \(in the `ButtonView`\):

```html
<mvc:View viewName="sap.hcm.ButtonView" controllerName="sap.hcm.myController" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
      <Button id="aButton" text="Click me"/><mvc:View>
```

The following view defines a view embedding the same view several times \(`ContainerView`\):

```html
<mvc:View viewName="sap.hcm.ContainerView" controllerName="sap.hcm.Address" xmlns="sap.ui.commons" xmlns:core="sap.ui.core"
           xmlns:html="http://www.w3.org/1999/xhtml">
      <mvc:View id="ButtonView1" viewName="sap.hcm.ButtonView"/>
      <mvc:View id="ButtonView2" viewName="sap.hcm.ButtonView"/>
<mvc:View>
```

The view is created as follows:

```js
...
   // "View" required from module "sap/ui/core/mvc/View"
   View.create().then(function(oView) {/* code */});
...
```

The container view has the following IDs:

Both child view IDs have the prefix `myContainerView--`:

`myContainerView--ButtonView1` 

`myContainerView--ButtonView2` 

To get one of the child views, use the following code: [Essentials](essentials-ec699e0.md)

```js
...
var oButtonView1 = oView.byId("ButtonView1");
...
```

The button view has the following IDs:

`ButtonView1--aButton` 

`ButtonView2--aButton` 

To get the button control, use the following code:

```js
...
   var oButton = oButtonView1.byId("aButton");
...
```

