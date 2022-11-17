<!-- loioeeaa5de14e5f4fc1ac796bc0c1ada5fb -->

# JSDoc Guidelines

Provides an overview of guidelines for creating JSDoc documentation.

To document JavaScript coding, you can add documentation comments to the code. Based on these comments, the descriptions of the SAPUI5 entities are generated and shown in the *API Reference* of the Demo Kit. SAPUI5 uses the JSDoc3 toolkit, which resembles JavaDoc, to generate the descriptions. For an explanation of the available tags, see [https://jsdoc.app](https://jsdoc.app).



<a name="loioeeaa5de14e5f4fc1ac796bc0c1ada5fb__section_wjj_hys_l2b"/>

## Basics of JSDoc

Here are some general principles for writing comments:

-   Document the constructor with `@class`, `@author`, `@since`, and so on.

-   For subclasses, document the inheritance by using an `@extends` tag in their constructor doclet.

-   Document at least public and protected methods with JSDoc, mark them as `@public` or `@protected`. For more information on these and other tags that determine the visibility of your method in the *API Reference*, see [JSDoc Visibility Tags](jsdoc-visibility-tags-b0d5fe2.md).

-   Document method parameters with type \(in curly braces\) and parameter name \(in square brackets if optional\).

-   Use `@namespace` for static helper classes that only provide static methods.


For an example of how to create a class, see [Example for Defining a Class](example-for-defining-a-class-f6fba4c.md).



<a name="loioeeaa5de14e5f4fc1ac796bc0c1ada5fb__section_s55_3j2_p2b"/>

## Descriptions

A documentation comment should provide the following content:

-   Summary sentence at the beginning; the summary is reused, for example, for tooltips and in summaries in the *API Reference*

-   Background information required to understand the object

-   Special considerations that apply

-   Detailed description with additional information that does not repeat the self-explanatory API name or summary


> ### Note:  
> Avoid implementation details and dependencies unless they are important for usage.



### Dos and Don'ts

-   To avoid line wrapping, make sure that each line of the description has a similar length as the code. In the *API Reference*, the line breaks in a description are ignored, and it appears as a continuous text.

-   Use a period at the end of each summary sentence. The punctuation is required for JSDoc to identify the first sentence.

-   Don’t use a period inside a summary sentence. For example, don’t use “e.g.”, but write “for example” instead. Otherwise the summary sentence will be cut off.


> ### Note:  
> You can create links to external sources. The source should comply with standard legal requirements. The required icons are added to the link as described in the Demo Kit under *Terms of Use* \> *Disclaimer*. For more information about creating links, see the explanations below \(@see and \{@link\}\).



### Recommendations for Writing Descriptions

-   Don’t use exclamation marks.

-   Make sure you spell acronyms correctly, for example, ID, JSON, URL.

-   In the summary sentence, omit repetitive clauses like "This class" or "This method".

-   For actions, start directly with an appropriate verb in the third person: Adds, allocates, constructs, converts, deallocates, destroys, gets, provides, reads, removes, represents, returns, sets, saves, and so on.

    For methods, use the following verbs:


    <table>
    <tr>
    <th valign="top">

    Type


    
    </th>
    <th valign="top">

    Verb


    
    </th>
    </tr>
    <tr>
    <td valign="top">

    Constructor


    
    </td>
    <td valign="top">

    Constructs


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Boolean


    
    </td>
    <td valign="top">

    Indicates \(whether\)


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Getter


    
    </td>
    <td valign="top">

    Gets


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Setter


    
    </td>
    <td valign="top">

    Sets


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Other


    
    </td>
    <td valign="top">

    Adds/Removes/Creates/Releases/Other verb that applies


    
    </td>
    </tr>
    </table>
    
-   For objects, use a noun phrase.

    Example: Base class for navigation




<a name="loioeeaa5de14e5f4fc1ac796bc0c1ada5fb__section_cfg_hvt_l2b"/>

## Inline and HTML Tags

You can use inline and HTML tags in your comments.

**Inline tags** can be placed anywhere in the comments. Inline tags are denoted by curly brackets and have the following syntax: \{@tagname comment\}.

**HTML tags** are used to format documentation comments. HTML tags have the standard HTML syntax: <tag\>...</tag\>.

The table provides an overview of the most common inline and HTML tags.

**Inline and HTML Tags**


<table>
<tr>
<th valign="top">

Tag



</th>
<th valign="top">

Use



</th>
<th valign="top">

Example



</th>
<th valign="top">

How to Use / Details



</th>
<th valign="top">

Type of Tag



</th>
</tr>
<tr>
<td valign="top">

\{@link\}



</td>
<td valign="top">

Links within API Reference



</td>
<td valign="top">

`{@link sap.ui.generic.app.navigation.service.NavError Error}`

`{@link sap.ui.comp.smarttable.SmartTable#event:beforeRebindTable}` 



</td>
<td valign="top">

To replace the path with a display text, use it like this: \{@link <path\> space <display text\>\}.

You can also use `#myMethod` for links within a class or control to individual methods, for example. The leading hash will then be removed automatically.

For other links, use the required syntax, for example, `#event:name`.



</td>
<td valign="top">

Inline



</td>
</tr>
<tr>
<td valign="top">

Empty line



</td>
<td valign="top">

Creates a paragraph



</td>
<td valign="top">



</td>
<td valign="top">

Using <p\> is not necessary, since empty lines are used to define paragraphs.



</td>
<td valign="top" rowspan="8">

HTML



</td>
</tr>
<tr>
<td valign="top">

<code\>…</code\>



</td>
<td valign="top">

Technical entities \(optional\)



</td>
<td valign="top">

the <code\>Button</code\> control



</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

<pre\>…</pre\>



</td>
<td valign="top">

Code samples



</td>
<td valign="top">



</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

<ul\>

<li\>…</li\>

<li\>…</li\>

</ul\>



</td>
<td valign="top">

Unordered lists



</td>
<td valign="top">



</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

<ol\>

<li\>…</li\>

<li\>…</li\>

</ol\>



</td>
<td valign="top">

Ordered lists



</td>
<td valign="top">



</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

<strong\>… </strong\> or <b\>…</b\>



</td>
<td valign="top">

Bold font



</td>
<td valign="top">



</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

<i\>…</i\>



</td>
<td valign="top">

Italics



</td>
<td valign="top">



</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

&nbsp;



</td>
<td valign="top">

Non-breaking space



</td>
<td valign="top">



</td>
<td valign="top">



</td>
</tr>
</table>



<a name="loioeeaa5de14e5f4fc1ac796bc0c1ada5fb__section_agg_ncm_n2b"/>

## Block Tags

You can also use block tags in your comments.

**Block tags** can only be placed in the tag section below the comment. They are separated from the comment by an empty line \(recommended, but not a technical requirement\). Block tags have the following syntax: @tagname comment.

The table provides an overview of the most common block tags.

**Block Tags**


<table>
<tr>
<th valign="top">

Tag



</th>
<th valign="top">

Use



</th>
<th valign="top">

Example



</th>
<th valign="top">

How to Use / Details



</th>
</tr>
<tr>
<td valign="top">

@param



</td>
<td valign="top">

Adds parameters



</td>
<td valign="top">

```js
/**
 * ...
 * @param {string} statement The SQL statement to be prepared
 * ...
 */
```



</td>
<td valign="top">

Begin description with a capital letter.



</td>
</tr>
<tr>
<td valign="top">

@returns



</td>
<td valign="top">

Adds return values



</td>
<td valign="top">

 `@returns {type1|type2|...} Description` 



</td>
<td valign="top">

Begin description with a capital letter.



</td>
</tr>
<tr>
<td valign="top">

@throws



</td>
<td valign="top">

Adds the description of an exception if an error occurs



</td>
<td valign="top">

 `@throws {type} Description` 



</td>
<td valign="top">

Begin description with a capital letter.



</td>
</tr>
<tr>
<td valign="top">

@author



</td>
<td valign="top">

Adds the name of the developer responsible for the code



</td>
<td valign="top">

 `@author Max Mustermann` 



</td>
<td valign="top" rowspan="2">

This is an optional tag that is not displayed in JSDoc.

If you need to use the version tag, use $\{version\} so you don't have to update this manually for each new version.



</td>
</tr>
<tr>
<td valign="top">

@version



</td>
<td valign="top">

Names the version for an entity



</td>
<td valign="top">

 `@version 14.1.2` 



</td>
</tr>
<tr>
<td valign="top">

@see



</td>
<td valign="top">

Adds information \(for example, link to documentation or the SAP Fiori Design Guidelines\) in the header section of the *API Reference* 



</td>
<td valign="top">

`@see path`

`@see free text`

`@see {@link topic:bed8274140d04fc0b9bcb2db42d8bac2 Smart Table}` 

`@see {@link fiori:/flexible-column-layout/ Flexible Column Layout}`



</td>
<td valign="top">

@see \{@link topic:loio <semantic control name\>\} provides a link to the documentation \(developer guide\).

If there are several @see tags with documentation links, only the first one is shown in the header. The other ones are displayed under *Documentation Links* in the *Overview* section.

For more generic topics that are not directly related to a class or control, use inline links.



</td>
</tr>
<tr>
<td valign="top">

@since



</td>
<td valign="top">

Adds the version in which an entity was first introduced



</td>
<td valign="top">

 `@since 1.30` 



</td>
<td valign="top">

Be as specific as possible \(without mentioning patch levels for new development\), since this information is useful even for internal purposes. For example, mention 1.27, even though this is not an external release.



</td>
</tr>
<tr>
<td valign="top">

@deprecated



</td>
<td valign="top">

Adds the version in which an entity was deprecated



</td>
<td valign="top">

 `@deprecated As of version 1.28, replaced by {@link class name}` 



</td>
<td valign="top">

Be as specific as possible \(without mentioning patch levels\), since this information is useful even for internal purposes. For example, mention 1.27, even though this is not an external release.

Provide information about what replaces the deprecated entity.



</td>
</tr>
<tr>
<td valign="top">

@experimental



</td>
<td valign="top">

Classifies an entity that is not ready for production use yet, but available for testing purposes



</td>
<td valign="top">

 `@experimental As of version 1.56.0` 



</td>
<td valign="top">

The example provides the following output:

**Experimental API since 1.56.0**

Hence, no separate @since tag is required.



</td>
</tr>
<tr>
<td valign="top">

@example



</td>
<td valign="top">

Inserts a code sample after the comment



</td>
<td valign="top">

```js
/**
 * ...
 * @example
 * var id = myjob.schedules.add({
 *     description: "Added at runtime, run every 10 minutes",
 *     xscron: "* * * * * *\/10 0",
 *     parameter: {
 *         a: "c"
```



</td>
<td valign="top">

The code sample is inserted automatically with <pre\>. It is always inserted right after the comment.

To insert an example somewhere else, for example, in the middle of a comment, use <pre\>.

You can add a header for the example by using <caption\>.



</td>
</tr>
</table>



### Tips for Using Block Tags

-   The order of the block tags is not mandatory from a technical perspective, but recommended to ensure consistency.

    For parameters, however, a fixed order is mandatory.

-   There are more tags available, such as `@class`or `@name`.




<a name="loioeeaa5de14e5f4fc1ac796bc0c1ada5fb__section_rh4_3yr_kgb"/>

## Links to API Documentation

To refer to another entity within the *API Reference*, you can use `{@link}` in combination with the reference types shown in the table below.

**Reference Types within API Reference**


<table>
<tr>
<th valign="top">

Type of Reference



</th>
<th valign="top">

Description



</th>
<th valign="top">

Example



</th>
<th valign="top">

Comment



</th>
</tr>
<tr>
<td valign="top">

<full.path.ClassName\>



</td>
<td valign="top">

Refers to a class, interface, enumeration, or namespace



</td>
<td valign="top">

 `sap.ui.comp.smarttable.SmartTable` 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

full.path.ClassName**\#**method



</td>
<td valign="top">

Refers to an instance method of a class



</td>
<td valign="top">

 `sap.ui.comp.smarttable.SmartTable#getHeader` 



</td>
<td valign="top">

 `.prototype.` and \# are interchangeable



</td>
</tr>
<tr>
<td valign="top">

full.path.ClassName**.prototype.**method



</td>
<td valign="top">

Refers to an instance method of a class



</td>
<td valign="top">



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

full.path.ClassName**.**method



</td>
<td valign="top">

Refers to a static method \(or any other static property\)



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `#method` 



</td>
<td valign="top">

Refers to an instance method **within** a class



</td>
<td valign="top">

 `#getHeader` 



</td>
<td valign="top">

You must use this type of reference **within** an API that you are documenting, for example, within the `SmartTable` control documentation, if you want to link to a method that belongs to the control itself.



</td>
</tr>
<tr>
<td valign="top">

 `#.method` 



</td>
<td valign="top">

Refers to a static method **within** a class



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

full.path.ClassName**\#event:**name



</td>
<td valign="top">

Refers to an event fired by an instance of a class



</td>
<td valign="top">

 `sap.ui.comp.smarttable.SmartTable#event:beforeRebindTable` 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `#event:name` 



</td>
<td valign="top">

Refers to an event **within** a class



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

full.path.ClassName**\#annotation:**name



</td>
<td valign="top">

Refers to an instance annotation of a class



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `#annotation:name` 



</td>
<td valign="top">

Refers to an annotation **within** a class



</td>
<td valign="top">

`#annotation:Text Text`



</td>
<td valign="top">

 



</td>
</tr>
</table>

