<!-- loio6cdc6ebf746e4d9f961a1358d4a3a74c -->

# Placeholder Handling in Transaction SE63

Source texts with placeholders are transformed when displayed in transaction `SE63`.


<table>
<tr>
<th valign="top">

Type

</th>
<th valign="top">

What is it?

</th>
<th valign="top">

How is it Displayed in Transaction SE63?

</th>
</tr>
<tr>
<td valign="top">

Placeholder

</td>
<td valign="top">

Number in braces

Example: `{0}`

</td>
<td valign="top">

Number in curly brackets

Example: `{0}`

</td>
</tr>
<tr>
<td valign="top">

Escaped placeholder

</td>
<td valign="top">

Placeholder enclosed in apostrophes

Example: `'{0}'`

</td>
<td valign="top">

Placeholder enclosed in apostrophes

Example: `'{0}'`

</td>
</tr>
</table>

To make the translator aware of an escaped placeholder in your string, make use of the comment option in the i18n.properties file. If a text contains a placeholder, you need to double any apostrophe \('\) in the text. Otherwise the apostrophe doesn't appear on the user interface during runtime.

> ### Note:  
> Translators don't need to take care of this, as transaction `SE63` automatically doubles apostrophes \('\) when writing the text to the database. Double apostrophes \(''\) in the source text, however, are displayed only as one apostrophe \('\) in transaction `SE63`. Examples:
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Source Text
> 
> </th>
> <th valign="top">
> 
> How is it Displayed in Transaction SE63?
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> Mark''s placeholder is used \{0\} times.
> 
> </td>
> <td valign="top">
> 
> Mark's placeholder is used \{0\} times.
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> Note that '\{0\}' is an escaped placeholder.
> 
> </td>
> <td valign="top">
> 
> Note that '\{0\}' is an escaped placeholder.
> 
> </td>
> </tr>
> </table>

As a developer, you must ensure that the source text is formally correct, for example by using the notation `{0}` for placeholders and enclosing placeholders in double apostrophes.

