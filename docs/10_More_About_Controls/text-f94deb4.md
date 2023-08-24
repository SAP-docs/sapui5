<!-- loiof94deb45de184a3a87850b75d610d9c0 -->

# Text

The `sap.m.Text` control allows you to display longer texts in your app, with the possibility to manage the number of lines, the text wrapping, and the visualization of line breaks and spacing.



<a name="loiof94deb45de184a3a87850b75d610d9c0__section_odw_ffn_xdb"/>

## Multi-line Paragraphs and Text Wrapping

You can influence the maximum number of visible lines by setting the `maxLines` property to a numerical value. This option is only available when the `wrapping` property is set to true. For more information, see the [sap.m.Text - Max Lines Sample](https://ui5.sap.com/#/sample/sap.m.sample.TextMaxLines/preview). 



<a name="loiof94deb45de184a3a87850b75d610d9c0__section_xgk_hfn_xdb"/>

## Whitespace Handling

The Text control supports the rendering of new lines and the preservation of whitespace and tabs. Depending on whether you are using JavaScript or XML, or data binding, you need to consider specific aspects related to the definition of new lines and tabs.

**sap.m.Text: New lines and tabs definition in the different use cases**


<table>
<tr>
<th valign="top">

To visualize



</th>
<th valign="top">

JavaScript/Data binding defined string



</th>
<th valign="top">

XML View defined string



</th>
</tr>
<tr>
<td valign="top">

**New line** 



</td>
<td valign="top">

`\n` 



</td>
<td valign="top">

`&#xA;` 



</td>
</tr>
<tr>
<td valign="top">

**\\n**

For example, if you want to visualize `C:\NewFolder`



</td>
<td valign="top">

`\\n` 



</td>
<td valign="top">

`\n` 



</td>
</tr>
<tr>
<td valign="top">

**Tab** 



</td>
<td valign="top">

`\t` 



</td>
<td valign="top">

`&#x9;` 



</td>
</tr>
<tr>
<td valign="top">

**\\t**

For example, if you want to visualize `C:\TestFolder`



</td>
<td valign="top">

`\\t` 



</td>
<td valign="top">

`\t` 



</td>
</tr>
</table>

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Text) and the [sap.m.Text - Render Whitespace Sample](https://ui5.sap.com/#/sample/sap.m.sample.TextRenderWhitespace/preview). 



<a name="loiof94deb45de184a3a87850b75d610d9c0__section_qr2_lhn_xdb"/>

## Usage Guidelines and Restrictions

-   Use the Text control if you want to display text inside a form, table, or any other content area.

-   Do not use the Text control if you need a Label. For more information, see the [API Reference: `sap.m.Label`](https://ui5.sap.com/#/api/sap.m.Label). 

-   If you need special text formatting, use Formatted Text or HTML. For more information, see the [API Reference: `sap.m.FormattedText`](https://ui5.sap.com/#/api/sap.m.FormattedText) and [API Reference: `sap.ui.core.HTML`](https://ui5.sap.com/#/api/sap.ui.core.HTML). 


> ### Restriction:  
> When you use wrapping, bear in mind that the multi-line overflow indicator depends on whether the browser supports line clamping. If the browser supports it, it shows the overflow as an ellipsis; if not, the overflow indicator is not displayed.

