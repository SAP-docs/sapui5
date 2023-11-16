<!-- loio91f130196f4d1014b6dd926db0e91070 -->

# Declarative Support \(deprecated\)

Declarative programming allows you to define the UI within the HTML document as elements.

> ### Caution:  
> Deprecated as of UI5 version 1.120, replaced by [XML View](xml-view-91f2928.md).

For this, SAPUI5 provides the `sap.ui.core.plugin.DeclarativeSupport` plugin that can be included either as required or marked as a module in the initial bootstrap script tag. The plugin parses the document and converts its tags with special attributes into SAPUI5 controls.

Declarative support is aware of properties, associations, events, and aggregations in a SAPUI5 control manner. This means that you can specify them within the markup of the HTML document either as data attributes or as child elements.

The following sections provide an overview of the declarative support and introduce the use of declarative support in SAPUI5.



<a name="loio91f130196f4d1014b6dd926db0e91070__section_C1D3894EF36F4766B06E27E5675CA11F"/>

## Example

The following example shows the concept by combining a `sap.m.input` with a `sap.m.Button` control. When you click the button, the value of the text field is displayed in an alert box:

```html
<!Doctype HTML>
<html>
<head>
	<title>Declarative Programming for SAPUI5 - sample01</title>
	<script id="sap-ui-bootstrap"
	     type="text/javascript"
	     src="resources/sap-ui-core.js"
	     data-sap-ui-theme="sap_belize"
	     data-sap-ui-libs="sap.m"
	     data-sap-ui-modules="sap.ui.core.plugin.DeclarativeSupport"
	     >
	</script>
</head>
<body class="sapUiBody">
  <div data-sap-ui-type="sap.m.Input" id="message" class="my-button" data-value="Hello World"></div>
  <div data-sap-ui-type="sap.m.Button" data-text="Click me!" data-press="handlePress"></div>
</body>
</html>
```



<a name="loio91f130196f4d1014b6dd926db0e91070__section_E477586F3CAD4371AC5E8CAEB1021D5E"/>

## Summary: Attributes Used by Declarative Support

The table summarizes the attributes used by declarative support and gives examples.


<table>
<tr>
<th valign="top">

Attribute

</th>
<th valign="top">

Description

</th>
<th valign="top">

Example

</th>
</tr>
<tr>
<td valign="top">

`data-sap-ui-type`

</td>
<td valign="top">

Type of control

</td>
<td valign="top">

`<div data-sap-ui-type="sap.m.Button"></div>`

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui-aggregation`

</td>
<td valign="top">

Defines the aggregation that shall be used for the element or child element

</td>
<td valign="top">

`<div data-sap-ui-type="sap.m.Panel"><div data-sap-ui-aggregation="content" data-sap-ui-type="sap.m.Button" data-text="My Button"></div></div>`

</td>
</tr>
<tr>
<td valign="top">

`data-sap-ui.default-aggregation`

</td>
<td valign="top">

Sets or overrides the default aggregation of a control

</td>
<td valign="top">

`<div data-sap-ui-type="sap.m.Panel" data-sap-ui-default-aggregation="headerToolbar"><div data-sap-ui-type="sap.m.Toolbar"></div></div>` 

</td>
</tr>
<tr>
<td valign="top">

`id`

</td>
<td valign="top">

Defines the ID property of a control

</td>
<td valign="top">

`<div data-sap-ui-type="sap.m.Button" id="myButton"></div>` 

</td>
</tr>
<tr>
<td valign="top">

`class`

</td>
<td valign="top">

Adds a style class to the control

</td>
<td valign="top">

`<div data-sap-ui-type="sap.m.Button" class="myButton"></div>` 

</td>
</tr>
</table>

