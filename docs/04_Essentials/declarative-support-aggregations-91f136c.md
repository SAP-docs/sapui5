<!-- loio91f136c76f4d1014b6dd926db0e91070 -->

# Declarative Support: Aggregations

Aggregation support is required to allow nested controls for layout containers and/or add elements to a control, for example, for `ComboBox`.

SAPUI5 uses the control's default aggregation as default. If, for example, the panel control has the default aggregation content, all child elements of the `data-sap-ui-type="sap.ui.commons.Panel"` element are added to this aggregation:

```html

<div data-sap-ui-type="sap.ui.commons.Panel">
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 1"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 2"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 3"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 4"></div>
</div>
```

The markup in the example above generates an instance of the `sap.ui.commons.Panel` control and adds implicit four buttons to the default aggregation content of the control.

You can also explicitly declare an aggregation. In general, an explicit aggregation is expressed with a meta HTML tag between the parent controls HTML tag and the HTML tags of the children. The following code adds four buttons explicitly to the "content" aggregation of the declared panel:

```html

<div data-sap-ui-type="sap.ui.commons.Panel">
  <div data-sap-ui-aggregation="content">
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 1"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 2"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 3"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 4"></div>
  </div>
</div>
```

For aggregations with the cardinality "0..1" the `"data-sap-ui-aggregation"` attribute can be written directly to the control tag:

```html

<div data-sap-ui-type="sap.ui.commons.Panel">
  <div data-sap-ui-aggregation="title" div data-sap-ui-type="sap.ui.commons.Title" data-text="My Panel"></div>
</div>
```

The default aggregation of the declarative support is usually also the default aggregation of the control as defined in the control's meta information. However, when no default aggregation is set or another aggregation should be used as a default, for example to avoid unnecessary meta tags, it can be useful to define a so-called default aggregration attribute on the parent controls HTML tag. This is done as follows:

```
data-sap-ui-default-aggregation="title"
```

With this, all children which are not included in the `data-sap-ui-aggregation` meta tag are added to the default aggregation. This is shown in the following example:

```html

<div data-sap-ui-type="sap.ui.commons.Panel" data-sap-ui-default-aggregation="title">
  <div data-sap-ui-type="sap.ui.commons.Title" text="My Panel"></div>
  <div data-sap-ui-default-aggregation="content">
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 1"></div>
    <div data-sap-ui-type="sap.ui.commons.Button" data-text="My Button 2"></div>
  </div>
/div>
```

You can now apply this to the `MatrixLayout` as follows:

```html

<div data-sap-ui-type="sap.ui.commons.layout.MatrixLayout" data-layout-fixed="false">
  <div data-sap-ui-type="sap.ui.commons.layout.MatrixLayoutRow">
    <div data-sap-ui-type="sap.ui.commons.layout.MatrixLayoutCell">
      <div data-sap-ui-type="sap.ui.commons.TextField" data-value="Hello World"></div>
    </div>
    <div data-sap-ui-type="sap.ui.commons.layout.MatrixLayoutCell">
      <div data-sap-ui-type="sap.ui.commons.Button" data-text="Hello World"></div>
    </div>
  </div>
</div>
```

Or you can add `ListItems` to a `ComboBox`:

```html

<div data-sap-ui-type="sap.ui.commons.ComboBox" data-value="Item 1">
  <div data-sap-ui-type="sap.ui.core.ListItem" data-text="Item 1"></div>
  <div data-sap-ui-type="sap.ui.core.ListItem" data-text="Item 2"></div>
  <div data-sap-ui-type="sap.ui.core.ListItem" data-text="Item 3"></div>
  <div data-sap-ui-type="sap.ui.core.ListItem" data-text="Item 4"></div>
  <div data-sap-ui-type="sap.ui.core.ListItem" data-text="Item 5"></div>
</div>
```

