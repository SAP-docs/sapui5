<!-- loio0cb44d7a147640a0890cefa5fd7c7f8e -->

# ECMAScript Support

Since SAPUI5 1.116, the framework leverages features of modern ECMAScript, up to and including [ES2022](https://262.ecma-international.org/13.0/). You have to consider certain restrictions when using modern ECMAScript with your SAPUI5 project.

> ### Caution:  
> The restrictions described here apply to the usage of modern ECMAScript features in projects that are written in native JavaScript. If your project is written in TypeScript, you only have to make sure that the listed constraints are met by the transpiled code.



<a name="loio0cb44d7a147640a0890cefa5fd7c7f8e__section_zhq_133_ryb"/>

## Overview of Restrictions

The following restrictions apply when you use modern ECMAScript:

1.  Do not use ECMAScript modules, but use `sap.ui.define` / `sap.ui.require` for module loading.

    For more information, see [Defining and Loading SAPUI5 Modules](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Mod).

2.  Only use ES6+ classes for classes not deriving from SAPUI5 classes. When classes derive from SAPUI5 classes, do it the SAPUI5 way: `ClassName.extend()`.

    For more information, see [SAPUI5 Inheritance](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Inherit).

3.  Only use string literals \(that is, no variables, no variable template literals, no spread parameter\) for dependency names, class names, and library names.

    For more information, see [Defining and Loading SAPUI5 Modules](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Mod) \(*Expressions as Dependencies* and following\), [SAPUI5 Inheritance](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Inherit) \(*Expressions as Class Names* and following\), and [Library Initialization](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_libInit).

4.  Do not use async functions or Promises for defining a module.

    For more information, see *Asynchronous Factory Function* in [Defining and Loading SAPUI5 Modules](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Mod).

5.  Do not use async functions when implementing predefined lifecycle hooks, such as [`sap/ui/core/mvc/Controller#onInit`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller%23methods/onInit).

    For more information, see [Async Functions and Event Handlers](ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_EHR).




<a name="loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Mod"/>

## Defining and Loading SAPUI5 Modules

SAPUI5 implements an AMD-like way of [defining and loading modules](../04_Essentials/modules-and-dependencies-91f23a7.md). As Asynchronous Module Definition \(AMD\) is not fully compatible with ECMAScript modules, the use of ECMAScript modules is currently **not** supported.



### ECMAScript Modules

SAPUI5 provides `sap.ui.define` and `sap.ui.require` as the established ways to define and load modules. Using the `import` and `export` statements for loading and defining SAPUI5 modules is currently **not** supported.

Please continue to use the regular SAPUI5 APIs `sap.ui.define` and `sap.ui.require`.

> ### Example:  
> **Supported usage** 
> 
> ```
> // Best practice of loading a module delivered by SAPUI5
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], (Controller) => {
>     "use strict";
>     return Controller.extend("my.app.controller.MyController", {});
> });
> ```

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use ECMAScript import and export statements when loading/defining SAPUI5 modules
> import Controller from "sap/ui/core/mvc/Controller";
> export class MyController extends Controller {};
> ```



### Asynchronous Factory Functions

Do **not** use an `async` factory function when loading or defining SAPUI5 modules. The SAPUI5 Loader will not wait for a returned Promise.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use the ECMAScript async/await statements when loading/defining modules
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], async (Controller) => {
>     "use strict";
>     return Controller.extend("my.app.controller.MyController", {});
> });
> ```

Do **not** return a Promise when loading or defining SAPUI5 modules.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT return a Promise when loading/defining modules
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], (Controller) => {
>     "use strict";
>     return Promise.resolve(Controller.extend("my.app.controller.MyController", {}));
> });
> ```



### Expressions as Dependencies

Use only literals but **not** expressions for the dependencies in the context of the `sap.ui.define` and `sap.ui.require` calls.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use an expression in the list of dependencies
> // in an sap.ui.define or sap.ui.require call.
> const sController = "sap/ui/core/mvc/Controller";
> sap.ui.define([
>   sController
> ], (Controller) => {
> });
> ```



### Spread Elements as Dependencies

Do **not** use a spread element as a parameter in the context of the `sap.ui.define` and `sap.ui.require` calls.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use a spread element as a parameter
> // in an sap.ui.define or sap.ui.require call.
> const dependencies = [
>     "sap/ui/core/mvc/Controller", 
>     "sap/ui/mode/Filter", 
>     "sap/ui/model/FilterOperator", 
>     "sap/ui/model/json/JSONModel"
> ];
> sap.ui.define([
>   ...dependencies
> ], (Controller, Filter, FilterOperator, JSONModel) => {
> });
> ```



### Template Literals as Dependencies

The usage of template literals with one or more expressions in the context of the `sap.ui.define` and `sap.ui.require` calls is **not** supported.

> ### Example:  
> **Supported usage** 
> 
> ```
> // Using template literals without any expressions inside
> // an sap.ui.define or sap.ui.require call is supported
> sap.ui.define([
>   `sap/ui/core/mvc/Controller`
> ], (Controller) => {
> });
> ```

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use template literals with one or more
> // expressions inside an sap.ui.define or sap.ui.require call.
> const sLibName = `ui/core`;
>  
> sap.ui.define([
>   `sap/${sLibName}/mvc/Controller`
> ], (Controller) => {
> });
> ```



<a name="loio0cb44d7a147640a0890cefa5fd7c7f8e__section_EHR"/>

## Async Functions and Event Handlers



### SAPUI5 Lifecycle Hooks

Do **NOT** use async functions when implementing predefined SAPUI5 lifecycle hook methods. SAPUI5 might introduce an optional return type for such functions later. Using async functions here already would result in a return value that might conflict with such a later change.

Lifecycle hook methods should also refrain from returning a value in their implementation. The lifecycle hooks include the following methods:


<table>
<tr>
<th valign="top" align="center">

Framework Class

</th>
<th valign="top" align="center">

Lifecycle Hooks

</th>
</tr>
<tr>
<td valign="top">

`sap/ui/core/mvc/Controller`

</td>
<td valign="top">

`onInit()`

`onExit()`

`onBeforeRendering()`

`onAfterRendering()`

</td>
</tr>
<tr>
<td valign="top">

`sap/ui/core/Element`

`sap/ui/core/Control`

</td>
<td valign="top">

`init()`

`exit()`

</td>
</tr>
<tr>
<td valign="top">

`sap/ui/core/Control`

</td>
<td valign="top">

`onBeforeRendering()`

`onAfterRendering()`

</td>
</tr>
<tr>
<td valign="top">

`sap/ui/core/Component`

`sap/ui/core/UIComponent`

</td>
<td valign="top">

`init()`

`exit()`

`onActivate()`

`onDeactivate()`

</td>
</tr>
</table>

> ### Restriction:  
> **Not supported** 
> 
> ```
> sap.ui.require(["sap/ui/core/mvc/Controller"], (Controller) => {
>   return Controller.extend("my.controller.Sample", {
>       // Do NOT use async event handlers for lifecycle hooks such as "onInit" or "onExit"
>       onInit: async() => {
>           await doSomething();
>       },
>       onExit: async() => {
>           await doSomethingOnExit();
>       }
>   });
> });
> ```



### Control Event Listeners

You can implement an asynchronous event handler for control events. However, SAPUI5 directly invokes the event handler without taking into account the returned Promise or any execution order.

> ### Example:  
> **Supported usage** 
> 
> ```
> sap.ui.require(["sap/m/Button"], (Button) => {
>     const oButton = new Button({
>         text: "Press me",
>         press: async() => { // async "press" event handler
>           await doSomethingAsync();
>         }
>     });
> });
> ```

> ### Caution:  
> Error Handling
> 
> Errors in asynchronous event handlers must be carefully managed. If you use an `await` inside an event handler and it throws an error, this typically won't be caught by the control that fired the event.



<a name="loio0cb44d7a147640a0890cefa5fd7c7f8e__section_UI5Inherit"/>

## SAPUI5 Inheritance

SAPUI5 implements an own functionality to extend classes \(via the `sap.ui.core.ManagedObject#extend` method\). Using an ECMAScript class to extend a SAPUI5 class is currently **not** supported.



### ECMAScript Classes

SAPUI5 uses its own way of defining classes and extending them. Please stick to the current best practice and do **not** use ECMAScript classes when extending a delivered SAPUI5 class.

> ### Example:  
> **Supported usage** 
> 
> ```
> // Best practice of extending an existing class delivered by SAPUI5
> sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
>     "use strict";
>     return Controller.extend("my.app.controller.MyController", {});
> });
> ```

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do not use ECMAScript classes when extending a delivered SAPUI5 class
> sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
>     "use strict";
>     return class MyController extends Controller {};
> });
> ```



### Expressions as Class Name

Do **not** use an expression, only a literal, in the class name parameter inside the `extend` call.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use an expression in the class name parameter inside the extend call
> const sControllerPath = "my.app.controller.";
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], (Controller) => {
>     "use strict";
>     return Controller.extend(sControllerPath + "MyController", {});
> });
> ```



### Variable Usages as Class Name

Do **not** use a variable as the class name parameter inside the `extend` call.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use a variable as a parameter inside the extend call
> const sController = "sap/ui/core/mvc/Controller";
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], (Controller) => {
>     "use strict";
>     return Controller.extend(sController, {});
> });
> ```



### Template Literals as Class Name

The usage of template literals with one or more expressions as the class name parameter inside the `extend` call is **not** supported.

> ### Example:  
> **Supported usage** 
> 
> ```
> // Using template literals without any expressions inside the extend call
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], (Controller) => {
>     "use strict";
>     return Controller.extend(`my.app.controller.MyController`, {});
> });
> ```

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use template literals with one or more expressions inside the extend call
> const sControllerPath = "my.app.controller.";
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], (Controller) => {
>     "use strict";
>     return Controller.extend(`${sControllerPath}MyController`, {});
> });
> ```



<a name="loio0cb44d7a147640a0890cefa5fd7c7f8e__section_libInit"/>

## Library Initialization

An SAPUI5 library is typically initialized via an accompanying `library.js`. Within that file, the object which is supplied to the `sap/ui/core/Lib.init` method must consider the following restrictions:

> ### Example:  
> **Supported usage** 
> 
> ```
> // Best practice to initialize a library in the library.js file
> sap.ui.define([
>     "sap/ui/core/Lib"
> ], (Library) => {
>     "use strict";
>     const thisLib = Library.init(({
>         apiVersion: 2,
>         name: "my.lib",
>         version: "${version}",
>         designtime: "my/lib/designtime/library.designtime",
>         types: [
>             "my.lib.MyType"
>         ],
>         interfaces: [
>             "my.lib.MyInterface"
>         ],
>         controls: [
>             "my.lib.MyType"
>         ],
>         elements: [
>             "my.lib.MyElement"
>         ],
>         extensions: {}
>     });
> });
> ```



### Expressions as Parameter

Do **not** use an expression for the library name when initializing a library.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use an expression for the library name when initializing a library
> const libraryName = "lib";
> sap.ui.define([
>     "sap/ui/core/Lib"
> ], (Library) => {
>     "use strict";
>     const thisLib = Library.init({
>          name: "my." + libraryName
>     });
> });
> ```



### Variable Usages as Parameter

Do **not** use a variable for the library name when initializing a library.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use a variable for the library name when initializing a library
> const key = "name";
> sap.ui.define([
>     "sap/ui/core/Lib"
> ], (Library) => {
>     "use strict";
>     const thisLib = Library.init({
>         [key]: "my.lib"
>     });
> });
> ```



### Spread Elements as Parameter

Do **not** use a spread element for the library name when initializing a library.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use a spread element for the library name when initializing a library
> const mylib = {
>     name: "my.lib"
> };
> sap.ui.define([
>     "sap/ui/core/Lib"
> ], (Library) => {
>     "use strict";
>     const thisLib = Library.init({
>         ...mylib
>     });
> });
> ```



### Template Literals as Parameter

Do **not** use a template literal with one or more expressions for the library name when initializing a library.

> ### Restriction:  
> **Not supported** 
> 
> ```
> // Do NOT use a template literal with one or more expressions 
> // for the library name when initializing a library
> const libraryName = "lib";
> sap.ui.define([
>     "sap/ui/core/Lib"
> ], (Library) => {
>     "use strict";
>     const thisLib = Library.init({
>         name: `my.${libraryName}`
>     });
> });
> ```

