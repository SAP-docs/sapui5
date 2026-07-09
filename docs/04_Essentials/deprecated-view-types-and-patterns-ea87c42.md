<!-- loioea87c42d1bdb4365b86b7359d083b306 -->

# Deprecated View Types and Patterns

As of SAPUI5 version 1.120, XML views and Typed Views are the only recommended view types. All other view types and related patterns are deprecated.

> ### Note:  
> We recommend using [XML views](xml-view-91f2928.md) for all new development. For programmatic view creation, use [Typed views](typed-view-e6bb33d.md) via `View.extend()`.


<table>
<tr>
<th valign="top">

Deprecated Pattern

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

**JSON View** \(`sap.ui.core.mvc.JSONView`\)

</td>
<td valign="top">

1.120

</td>
<td valign="top">

[XML View](xml-view-91f2928.md)

</td>
<td valign="top">

[JSON View \(deprecated\)](json-view-deprecated-91f2852.md)

</td>
</tr>
<tr>
<td valign="top">

**Declarative Support** \(`sap.ui.core.plugin.DeclarativeSupport`\)

</td>
<td valign="top">

1.120

</td>
<td valign="top">

[XML View](xml-view-91f2928.md)

</td>
<td valign="top">

[Declarative Support \(deprecated\)](declarative-support-deprecated-91f1301.md)

</td>
</tr>
<tr>
<td valign="top">

**View Cloning**

</td>
<td valign="top">

1.120

</td>
<td valign="top">

Call the view factory function again

</td>
<td valign="top">

[View Cloning \(deprecated\)](view-cloning-deprecated-a575619.md)

</td>
</tr>
<tr>
<td valign="top">

**Native HTML in XML Views**

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.ui.core.HTML` control or custom control

</td>
<td valign="top">

[Using Native HTML in XML Views \(deprecated\)](using-native-html-in-xml-views-deprecated-be54950.md)

</td>
</tr>
<tr>
<td valign="top">

**CSS in XML Views**

</td>
<td valign="top">

1.120

</td>
<td valign="top">

External CSS file

</td>
<td valign="top">

[Using CSS Style Sheets in XML Views \(deprecated\)](using-css-style-sheets-in-xml-views-deprecated-b564935.md)

</td>
</tr>
<tr>
<td valign="top">

**HTML View** \(`sap.ui.core.mvc.HTMLView`\)

</td>
<td valign="top">

1.108

</td>
<td valign="top">

[XML View](xml-view-91f2928.md)

</td>
<td valign="top">

No more known usages as HTML syntax brings no advantages over XML

</td>
</tr>
<tr>
<td valign="top">

**JS View** \(`sap.ui.core.mvc.JSView`\)

</td>
<td valign="top">

1.90

</td>
<td valign="top">

[Typed View](typed-view-e6bb33d.md) via `View.extend()`

</td>
<td valign="top">

Define view class in JavaScript using `sap.ui.core.mvc.View.extend()`

</td>
</tr>
<tr>
<td valign="top">

**XML Composite Controls** \(`sap.ui.core.XMLComposite`\)

</td>
<td valign="top">

1.88

</td>
<td valign="top">

[Standard Composite Controls](../09_Developing_Controls/standard-composite-controls-c1512f6.md)

</td>
<td valign="top">

[XML Composite Controls (deprecated)](https://help.sap.com/viewer/c442e2a74263451f845549bdbcdebe7b/1.150_SAPUI5_Internal/en-US/b83a4dcb7d0e46969027345b8d32fd44.html "An XML composite control allows you to define a composite control that clearly separates the behavior of the control from the visual part.") :arrow_upper_right:

</td>
</tr>
<tr>
<td valign="top">

**Template View** \(`sap.ui.core.mvc.TemplateView`\)

</td>
<td valign="top">

1.56

</td>
<td valign="top">

[XML View](xml-view-91f2928.md) or [Typed View](typed-view-e6bb33d.md)

</td>
<td valign="top">

Include Handlebars template support

</td>
</tr>
</table>

**Related Information**  


[Views](views-91f27e3.md "The view in the Model-View-Controller (MVC) concept is responsible for defining and rendering the UI. SAPUI5 supports predefined view types.")

[XML View](xml-view-91f2928.md "The XML view type is defined in an XML file, with a file name ending in .view.xml. The file name and the folder structure together specify the name of the view that equals the SAPUI5 module name.")

[Typed View](typed-view-e6bb33d.md "A view can also be defined by extending the sap.ui.core.mvc.View class. Such a view is referred to as a typed view. This means the view definition represents its own view class.")

