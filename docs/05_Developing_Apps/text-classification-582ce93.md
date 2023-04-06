<!-- loio582ce93d326540f59d149031a44d5fb0 -->

# Text Classification

Texts in a properties file are simple value key pairs separated by an equal sign \(=\) or a comma \(,\). However, to enable proper translation for these texts, you have to classify the texts with additional information, at least with the text type. You must place the additional information in the line directly above the text element, beginning with the number sign \(\#\).

The complete line must have one of the following patterns \(text type is mandatory, maximum length and additional context information are optional\):

-    `#<TextType>`

-    `#<TextType>,<MaximumLength>` 

-    `#<TextType>,<MaximumLength>:<AdditionalContextInformation>` 

-    `#<TextType>:<AdditionalContextInformation>` 


**Text Type \(Mandatory\)**

We recommend that you assign a text type to each text. The text type indicates to which user interface element the text is related. You can use the following main text types:

-   For short texts \(less than 120 characters\) :


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

    `XBUT`


    
    </td>
    <td valign="top">

    Button


    
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

    `XFLD`


    
    </td>
    <td valign="top">

    Label


    
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

    `XSEL`


    
    </td>
    <td valign="top">

    Selection


    
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

    `XTOL`


    
    </td>
    <td valign="top">

    Tooltip


    
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

    `YINS`


    
    </td>
    <td valign="top">

    Instruction


    
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
    </table>
    
-   For text elements that are not supposed to be translated, use the text type `NOTR`.


**Maximum Length \(Optional\)**

You can provide the maximum text length for translation. It must be greater than the source text length and must never exceed 255.

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

You can also add a comment for the translator.

