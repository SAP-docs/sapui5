<!-- loiob564935324f449209354c7e2f9903f22 -->

# Using CSS Style Sheets in XML Views

Style sheets are included in XML views in the same way as plain HTML. To add further CSS classes to SAPUI5 controls, use the `class` attribute.



## Context

> ### Tip:  
> We recommend to carefully choose the elements that you style as the CSS always affects the whole page and is **not** restricted to the view.



## Procedure

Here’s how you would add a style definition and define a button that uses it in an XML view:

```xml

<mvc:View controllerName="sap.hcm.Address" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc"
           xmlns:html="http://www.w3.org/1999/xhtml">
   <html:style>
      .mySuperRedButton {
         color: red;
      }
   </html:style>
   <Panel>
      <Button class="mySuperRedButton" text="Press Me"/>
   </Panel>
</mvc:View>
```

> ### Note:  
> To allow your view to be used in an environment with a Content Security Policy denying inline styles \(i.e. without the `unsafe-inline` source for the `style-src` directive\), you need to refer to an external style sheet instead of embedding the style sheet into your XML view. For more information, see the Walkthrough tutorial, [Step 14: Custom CSS and Theme Colors](../03_Get-Started/step-14-custom-css-and-theme-colors-723f4b2.md).

> ### Note:  
> The XML view offers special handling for style classes. You can specify them via the `class` attribute on a control's XML node. Please be aware that this attribute is not a property of the respective control and thus is not supported by a control's constructor.

To refer to a style class in JavaScript, for example in a controller, use the `addStyleClass` method on a control:

```js
    myButton.addStyleClass("mySuperRedButton");
```

and add the style definition to your CSS file.

**Related Information**  


[API Reference: `sap.ui.core.Control#addStyleClass`](https://ui5.sap.com/#/api/sap.ui.core.Control%23methods/addStyleClass)

[API Reference: `sap.ui.core.mvc.XMLView`](https://ui5.sap.com/#/api/sap.ui.core.mvc.XMLView)

