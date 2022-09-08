<!-- loio37deb0bee3e2474887f1521cc583ab69 -->

# Whitespaces Concept

Whitespace characters represent the empty space between all the characters that you can see on the screen.

Whitespaces are not native to HTML. Their handling is delegated to the CSS because they are considered to have a formatting value. The reasoning and browser handling are described in detail here: [White Space and Wrapping](https://www.w3.org/TR/css-text-3/#white-space-property).

However, there might be cases when whitespaces can be meaningful for the HTML document. There are several options for handling such cases:


<table>
<tr>
<th valign="top">

Solution



</th>
<th valign="top">

Things to consider



</th>
</tr>
<tr>
<td valign="top">

Use HTML entities. For more information, see: [https://developer.mozilla.org/en-US/docs/Glossary/Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity).



</td>
<td valign="top">

HTML entities do not work in inputs. Also, they are usually escaped by sanitizers and are rendered as strings. For example, `&nbsp;`.



</td>
</tr>
<tr>
<td valign="top">

Use the CSS’s `white-space` property to format texts where needed.



</td>
<td valign="top">

The CSS’s `white-space` property could have already been used for some special formatting, for example, for text truncation, and you might not be able to reuse it.



</td>
</tr>
<tr>
<td valign="top">

Use Unicode characters to display spaces.



</td>
<td valign="top">

Unicode characters are displayed well in texts and inputs, however, they are Unicode characters and this could have an impact on the data.



</td>
</tr>
</table>

As you can see, there’s no single fit solution for all the scenarios, but you can use a mix to achieve the desired behavior.

For HTML inputs, you don’t have to do anything. The whitespaces are rendered properly there.

For text display controls, you could use either the `white-space` CSS property, or Unicode characters.

In terms of SAPUI5, you would need to use formatters to display whitespaces in your applications. Here’s a sample page where you can see how it's used for different controls: For more information, see the [Sample for `sap.m.WhitespacePattern`](https://ui5.sap.com/#/entity/sap.m.WhitespacePattern). 

