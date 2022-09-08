<!-- loio91f161996f4d1014b6dd926db0e91070 -->

# Declarative Support: Properties

For setting a property, define the property as a data attribute of the corresponding HTML tag.

To add text to the button, add the attribute `data-text` to its HTML tag:

```html

<div data-sap-ui-type="sap.m.Button" data-text="HelloWorld"></div>
```

> ### Note:  
> To define a property with upper case characters, you have to "escape" them with a dash character, similar to CSS attributes. The following code gives an example:
> 
> ```html
> 
> <div data-sap-ui-type="sap.ui.commons.ApplicationHeader" data-display-logoff="false" data-display-welcome="false"></div>
> ```
> 
> As the name of the attributes of HTML tags are case-insensitive, the properties `displayLogoff` and `displayWelcome` of the `ApplicationHeader` control have to be "escaped" as `data-display-logoff` and `data-display-welcome` for the name of the attributes of the HTML tag. Keep this in mind when matching properties, associations, or events as an attribute of the HTML tag.
> 
> The <code><code>id</code></code> attribute defines the ID of a control:
> 
> ```html
> 
> <div data-sap-ui-type="sap.m.Button" id="myButton"></div>
> ```
> 
> To add a CSS class to the control, use the class attribute:
> 
> ```html
> 
> <div data-sap-ui-type="sap.m.Button" class="my-button"></div>
> ```

