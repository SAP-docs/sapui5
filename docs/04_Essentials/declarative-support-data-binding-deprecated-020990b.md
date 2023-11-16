<!-- loio020990b1210e47c89a58a4f4e790c476 -->

# Declarative Support: Data Binding \(deprecated\)

Declarative support in SAPUI5 also enables data binding.

> ### Caution:  
> Deprecated as of UI5 version 1.120, replaced by [XML View](xml-view-91f2928.md).

Just add the model path in curly brackets and bind the model to the control \(or parent control\):

```html

<div data-sap-ui-type="sap.m.Button" data-text="{/stringValue}" data-enabled="{model2>/booleanValue}"></div>
```

0..n aggregations can define templates to use for the list binding:

```html

<div data-sap-ui-type="sap.m.Carousel" data-content="{/buttons}">
    <div data-sap-ui-type="sap.m.Button" data-text="{title}"></div>
</div>
```

In the example above, the button template is used for the carousel content data binding.

**Related Information**  


[Data Binding](data-binding-68b9644.md "You use data binding to bind UI elements to data sources to keep the data in sync and allow data editing on the UI.")

