<!-- loioeded636b85584cd586b1fe231d2b5dac -->

# JavaScript Coding Guidelines

Provides an overview of the guidelines for JavaScript coding for SAPUI5 with regard to code formatting, naming conventions, and creating classes.

For JavaScript, the following **general** guidelines apply:

-   Do **not** use global JavaScript variables; organize all global objects in an `sap.*` namespace structure. The module `sap/base/util/ObjectPath` assists in doing so. For more information, see [JavaScript Namespaces](javascript-namespaces-5a978fe.md) and [API Reference: `jQuery.sap.getObject`](https://ui5.sap.com/#/api/jQuery.sap/methods/jQuery.sap.getObject). 

    This also means: Do **not** use undeclared variables. When using global variables introduced by other libraries, declare the use in a special global comment: `/*global JSZip, OpenAjax */`.

-   Do **not** access internal \(private\) members of other objects.

-   Do **not** use `console.log()`

-   Use `window.document.getElementById("<someId>")` instead of `jQuery("#<someId>")` when `<someId>` is not a known string; certain characters in IDs need to be escaped for jQuery to work correctly.

-   Keep modifications of jQuery and other embedded Open Source to a minimum and document them clearly with the term *SAP modification*. Such modifications may **not** alter the standard behavior of the used library in a way that breaks other libraries




## Code Formatting

For any code becoming part of SAPUI5, an ESLint check needs to run successfully, see [Tools](tools-41de83f.md). The following list contains the most important formatting rules:

-   Add a semicolon after each statement, even if optional

-   No spaces before and after round braces \(function calls, function parameters\), but…

-   …use spaces after `if/else/for/while/do/switch/try/catch/finally`, around curly braces, around operators and after commas

-   Opening curly brace \(functions, for, if-else, switch\) is on the same line

-   Use "===" and "!==" instead of "==" and "!="; see the ESLint docu for special cases where "==" is allowed

-   The code should therefore look like this:

    ```js
    
    function outer(c, d) {
            var e = c * d;
            if (e === 0) {
                e++;
            }
            for (var i = 0; i < e; i++) {
                // do nothing
            }
    
            function inner(a, b) {
                return (e * a) + b;
            }
    
            return inner(0, 1);
        }
    
    ```




## Naming Conventions

We strongly recommend to use the Hungarian notation where name prefixes indicate the type for variables and object field names. But do **not** use the Hungarian notation for API method parameters: The documentation specifies the type in this case.

When using the Hungarian notation, use the prefixes highlighted below and continue with an uppercase letter \(camelCase\):


<table>
<tr>
<th valign="top">

Sample

</th>
<th valign="top">

Type

</th>
</tr>
<tr>
<td valign="top">

**s**Id

</td>
<td valign="top">

string

</td>
</tr>
<tr>
<td valign="top">

**o**DomRef

</td>
<td valign="top">

object

</td>
</tr>
<tr>
<td valign="top">

**$**DomRef

</td>
<td valign="top">

jQuery object

</td>
</tr>
<tr>
<td valign="top">

**i**Count

</td>
<td valign="top">

int

</td>
</tr>
<tr>
<td valign="top">

**m**Parameters

</td>
<td valign="top">

map / assoc. array

</td>
</tr>
<tr>
<td valign="top">

**a**Entries

</td>
<td valign="top">

array

</td>
</tr>
<tr>
<td valign="top">

**d**Today

</td>
<td valign="top">

date

</td>
</tr>
<tr>
<td valign="top">

**f**Decimal

</td>
<td valign="top">

float

</td>
</tr>
<tr>
<td valign="top">

**b**Enabled

</td>
<td valign="top">

boolean

</td>
</tr>
<tr>
<td valign="top">

**r**Pattern

</td>
<td valign="top">

RegExp

</td>
</tr>
<tr>
<td valign="top">

**fn**Function

</td>
<td valign="top">

function

</td>
</tr>
<tr>
<td valign="top">

**v**Variant

</td>
<td valign="top">

variant types

</td>
</tr>
<tr>
<td valign="top">

**p**Dialog

</td>
<td valign="top">

promise

</td>
</tr>
</table>

Use CamelCase for class names, starting with an uppercase letter. HTML element IDs starting with `sap-ui-` are reserved for SAPUI5. DOM attribute names starting with `data-sap-ui-` as well as URL parameter names starting with `sap-` and `sap-ui-` are reserved for SAPUI5.

The following IDs are currently used:


<table>
<tr>
<th valign="top">

ID

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`sap-ui-bootstrap`

</td>
<td valign="top">

ID of the bootstrap script tag

</td>
</tr>
<tr>
<td valign="top">

`sap-ui-theme-*`

</td>
<td valign="top">

Prefix for theme stylesheets link tags

</td>
</tr>
<tr>
<td valign="top">

`sap-ui-static`

</td>
<td valign="top">

ID of the static popup area of UI5

</td>
</tr>
</table>



## Creating Classes

For the creation of classes, the following rules and guidelines apply:

-   Initialize and describe instance fields in the constructor function: `this._bReady = false; // ready to handle requests`

-   Define instance methods as members of the prototype of the constructor function: `MyClass.prototype.doSomething = function(){...`

-   Define static members \(fields and functions\) as members of the constructor function object itself: `MyClass.doSomething = function(){...`

-   Start the name of private members with an underscore: `this._bFinalized`

-   Combine constructor + methods + statics in a single JS source file named and located after the qualified name of the class; this is a precondition for class loading

-   Static classes do not have a constructor but an object literal; there is no pattern for inheritance of such classes. If inheritance is needed, use a normal class and create a singleton in the class.

-   Do not use `SuperClass.extend(…)` for subclasses. If no base class exists, the prototype is automatically initialized by JavaScript as an empty object literal and must not be assigned manually. Consider inheriting from `sap/ui/base/Object`

-   Subclasses call \(or apply\) the constructor of their base class: `SuperClass.apply(this, arguments);`


For more information, see [Example for Defining a Class](example-for-defining-a-class-f6fba4c.md).

