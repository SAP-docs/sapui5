<!-- loio50079678e0cc4c8298f764580fc223d3 -->

# Troubleshooting Common RTL Issues

The following table outlines some common issues that occur when implementing right-to-left \(RTL\) support for SAPUI5 controls and their solutions.



**RTL Issues and Solutions**


<table>
<tr>
<th valign="top">

Issue

</th>
<th valign="top">

Solution

</th>
</tr>
<tr>
<td valign="top">

In RTL mode \(right-to-left\) the image shown is not mirrored, but it should be.

</td>
<td valign="top">

Create the correct RTL version of the image manually and put it into the `img-RTL` folder, using the same name and path.

</td>
</tr>
<tr>
<td valign="top">

In RTL mode \(right-to-left\) the image shown is mirrored, but it should not be.

</td>
<td valign="top">

Make sure that there is no corresponding image with the same name in the `img-RTL` folder.

</td>
</tr>
<tr>
<td valign="top">

The background position in CSS is correctly mirrored, but the LTR version of the control works fine with the default background position: `left top`. This is not explicitly written in the CSS and is therefore not mirrored.

</td>
<td valign="top">

Specify the background position explicitly to display the RTL version correctly.

</td>
</tr>
<tr>
<td valign="top">

Text is incorrectly aligned because the CSS `text-align` property is not converted.

</td>
<td valign="top">

Do not use `text-align:left` if you want the text to change sides in RTL mode, but use `text-align:start` instead. `start` and `end` are handled automatically by the browser. Only use `right` and `left` if you want the text to stay on the same side in RTL mode.

</td>
</tr>
<tr>
<td valign="top">

If style is set using JavaScript \(for example, in the renderer or behavior of a control\), the conversion does not take place and the result looks incorrect.

</td>
<td valign="top">

Consider the RTL mode in your calculations, or when possible, use the CSS file instead \(which is automatically handled\) and write a CSS class.

</td>
</tr>
<tr>
<td valign="top">

The alignment of popups with the parent element is unaffected by RTL mode and is therefore often incorrect.

</td>
<td valign="top">

`sap.ui.core.Popup.Dock` has been extended by adding `Begin*` and"`End*`. Those will change sides in RTL mode. Use these instead of `Left*` and `Right*` if the popup alignment should change sides.

</td>
</tr>
<tr>
<td valign="top">

When JavaScript calculations are used to determine positions or dimensions, existing implementations might imply LTR mode and result in an incorrect layout.

</td>
<td valign="top">

Make these algorithms RTL-compliant by checking the SAPUI5 RTL configuration.

</td>
</tr>
<tr>
<td valign="top">

Some text elements inside the control may look incorrect, for instance parentheses may be shown in the wrong position, pointing to the wrong direction. For example **\(very\) short text** might be rendered as **very\) short text\)** in RTL mode.

</td>
<td valign="top">

This is a result of the browser's `bidi` algorithm considering the directionality of the characters used. As soon as there is LTR text in the control, the parentheses will be fine again. For controls that have mixed contents, see [API Properties for Right-to-Left Support in Text-Displaying Controls](../05_Developing_Apps/api-properties-for-right-to-left-support-in-text-displaying-controls-7e7cd0a.md) 

</td>
</tr>
<tr>
<td valign="top">

When a control has a `textAlign` property \(or something similar\), you need to use additional API properties to ensure the correct alignment of the text according to the directionality.

</td>
<td valign="top">

Use the [API Properties for Right-to-Left Support in Text-Displaying Controls](../05_Developing_Apps/api-properties-for-right-to-left-support-in-text-displaying-controls-7e7cd0a.md) .

Additionally, the static helper method `sap.ui.core.Renderer.getTextAlign(oTextAlign, oTextDirection)` is available. This method calculates the effective value of the CSS `text-align` property considering the property setting and the current or given RTL mode.

</td>
</tr>
</table>

