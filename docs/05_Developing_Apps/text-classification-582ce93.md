<!-- loio582ce93d326540f59d149031a44d5fb0 -->

# Text Classification

Texts in a properties file are simple value-key pairs separated by an equal sign \(=\). However, to enable proper translation for these texts, you have to classify the texts with additional information, at least with the text type. You must place the additional information in the line directly above the text element, beginning with the hash sign \(\#\).

The complete line must have one of the following patterns \(text type is mandatory, maximum length and additional context information are optional\):

-   `#<TextType>`

-   `#<TextType>,<MaximumLength>` 

-   `#<TextType>,<MaximumLength>:<AdditionalContextInformation>` 

-   `#<TextType>:<AdditionalContextInformation>` 


**Text Type \(Mandatory\)**

You need to assign a text type to each text. The text type indicates to which user interface element the text is related. You can use the following main text types:

-   For short texts \(up to 120 characters\) :


    <table>
    <tr>
    <th valign="top">

    **Text Type** 
    
    </th>
    <th valign="top">

    **Description** 
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `XACT`
    
    </td>
    <td valign="top">
    
    Accessibility
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XALT`
    
    </td>
    <td valign="top">
    
    Alternative text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XBCB`
    
    </td>
    <td valign="top">
    
    Breadcrumb step
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XBLI`
    
    </td>
    <td valign="top">
    
    Bullet list item text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XBUT`
    
    </td>
    <td valign="top">
    
    Button text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XCAP`
    
    </td>
    <td valign="top">
    
    Caption
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XCEL`
    
    </td>
    <td valign="top">
    
    Cell
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XCKL`
    
    </td>
    <td valign="top">
    
    Checkbox
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XCOL`
    
    </td>
    <td valign="top">
    
    Column header
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XCRD`
    
    </td>
    <td valign="top">
    
    Tabstrip
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XDAT`
    
    </td>
    <td valign="top">
    
    Data navigation text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XFLD`
    
    </td>
    <td valign="top">
    
    Label
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XFRM`
    
    </td>
    <td valign="top">
    
    Frame
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XGLS`
    
    </td>
    <td valign="top">
    
    Term
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XGRP`
    
    </td>
    <td valign="top">
    
    Group title
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XHED`
    
    </td>
    <td valign="top">
    
    Heading
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XLGD`
    
    </td>
    <td valign="top">
    
    Legend text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XLNK`
    
    </td>
    <td valign="top">
    
    Hyperlink
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XLOG`
    
    </td>
    <td valign="top">
    
    Log entry
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XLST`
    
    </td>
    <td valign="top">
    
    List box item
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XMEN`
    
    </td>
    <td valign="top">
    
    Menu header
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XMIT`
    
    </td>
    <td valign="top">
    
    Menu item
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XMSG`
    
    </td>
    <td valign="top">
    
    Message
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XRBL`
    
    </td>
    <td valign="top">
    
    Radio button
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XRMP`
    
    </td>
    <td valign="top">
    
    Roadmap step
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XROW`
    
    </td>
    <td valign="top">
    
    Table Row Heading
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XSEL`
    
    </td>
    <td valign="top">
    
    Selection
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XTBS`
    
    </td>
    <td valign="top">
    
    Tab strip text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XTIT`
    
    </td>
    <td valign="top">
    
    Table title
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XTND`
    
    </td>
    <td valign="top">
    
    Tree node text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XTOL`
    
    </td>
    <td valign="top">
    
    Quick info text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `XTXT`
    
    </td>
    <td valign="top">
    
    General text
    
    </td>
    </tr>
    </table>
    
-   For long texts \(more than 120 characters\):


    <table>
    <tr>
    <th valign="top">

    **Text Type** 
    
    </th>
    <th valign="top">

    **Description** 
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `YACT`
    
    </td>
    <td valign="top">
    
    Accessibility \(long\)
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YBLI`
    
    </td>
    <td valign="top">
    
    Bullet list item text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YDEF`
    
    </td>
    <td valign="top">
    
    Definition
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YDES`
    
    </td>
    <td valign="top">
    
    Description
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YEXP`
    
    </td>
    <td valign="top">
    
    Explanation
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YFAA`
    
    </td>
    <td valign="top">
    
    FAQ answer
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YFAQ`
    
    </td>
    <td valign="top">
    
    FAQ
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YGLS`
    
    </td>
    <td valign="top">
    
    Glossary definition
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YINF`
    
    </td>
    <td valign="top">
    
    Information
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YINS`
    
    </td>
    <td valign="top">
    
    Instruction
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YLOG`
    
    </td>
    <td valign="top">
    
    Log entry
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YMSE`
    
    </td>
    <td valign="top">
    
    Error message
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YMSG`
    
    </td>
    <td valign="top">
    
    Message text \(long\)
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YMSI`
    
    </td>
    <td valign="top">
    
    Information message long
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YMSW`
    
    </td>
    <td valign="top">
    
    Warning message
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YTEC`
    
    </td>
    <td valign="top">
    
    Technical text
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YTIC`
    
    </td>
    <td valign="top">
    
    Ticker / Marquee
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `YTXT`
    
    </td>
    <td valign="top">
    
    General text long
    
    </td>
    </tr>
    </table>
    
-   For text elements that are not supposed to be translated, use the text type `NOTR`.


**Maximum Length \(Optional\)**

If necessary, you can provide the maximum text length for translation. It must be greater than the source text length and must never exceed 255.

To ensure that translators have enough space for the translated texts, set an appropriate maximum text length for translation according to the source text length:


<table>
<tr>
<th valign="top">

Length of Source Text in Characters

</th>
<th valign="top">

How Is the Maximum Text Length for Translation Calculated?

</th>
</tr>
<tr>
<td valign="top">

< 8

</td>
<td valign="top">

Multiply by 5; minimum 12 characters

</td>
</tr>
<tr>
<td valign="top">

8 - 30

</td>
<td valign="top">

Multiply by 3

</td>
</tr>
<tr>
<td valign="top">

\> 31

</td>
<td valign="top">

Multiply by 1.5

</td>
</tr>
</table>

**Additional Context Information \(Optional\)**

You can also add a comment for the translator. This is recommended for all texts.

