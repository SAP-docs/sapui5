<!-- loio91f1539c6f4d1014b6dd926db0e91070 -->

# Defining Controls

For declarative support, define the controls in your HTML document as HTML tags.

For this, use the following data attribute that defines the SAPUI5 control that should be rendered in the HTML tag by using the HTML tag as its UI area:

```
data-sap-ui-type="sap.m.Button"
```

Rendering a button in the body of an HTML document without setting any property, association, event, or aggregation looks as follows:

```html

<body>
  <div data-sap-ui-type="sap.m.Button"></div>
</body>
```

> ### Note:  
> Make sure that you close the tags properly. HTML5 does not support self-closing tags.

> ### Note:  
> All attributes used to define properties, associations, events, or aggregations are data attributes except for attributes that exist in HTML, for example `id` or `class`. Data attributes are prefixed with `data-*`, for example `data-text`.

