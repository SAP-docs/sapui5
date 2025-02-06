<!-- loio030fcd14963048218488048f407f8f34 -->

# JavaScript Code Issues

This section lists some of the most important issues that should be avoided when writing JavaScript code in SAPUI5.



<a name="loio030fcd14963048218488048f407f8f34__1"/>

## Don't use methods or properties that are not public

Don't use or override "private" methods or properties. Private functions are typically \(but not always\) prefixed with "`_`".

Use "protected" methods or properties only if you access it from the object itself or an object that extends that object. In the API Reference, protected functions are indicated by a label *Visibility: protected* below the description of the function.

Always double check in the API Reference. If SAPUI5 changes the implementation in a future release, your code will break if you fail to follow this guideline.

**Examples**


<table>
<tr>
<th valign="top">

Bad Examples

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

`var sText = oControl.mProperties["text"];`

</td>
<td valign="top">

`var sText = oControl.getText();`

</td>
</tr>
<tr>
<td valign="top">

`oSelectDialog._oList.setGrowing(false);`

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`var sPart = oEvent.oSource.oBindingContexts.description.sPath.split('/')[3];`

</td>
<td valign="top">

 

</td>
</tr>
</table>

For more information, see [Compatibility Rules](../02_Read-Me-First/compatibility-rules-91f0873.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui). 



<a name="loio030fcd14963048218488048f407f8f34__1a"/>

## Don't use references to global names

Use only local variables inside the AMD factory function, do not access the content of other modules via their global names, not even for such fundamental stuff like `jQuery` or `sap.ui.Device`. You can't be sure that the modules are already loaded and the namespace is available.


<table>
<tr>
<th valign="top">

Bad Example

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

Access the modules directly:

```js
sap.ui.define(['sap/m/Button'], function(Button) {
    var fnCreateContent = function() {
        // global reference on sap.m.Input, which might not be loaded yet
        return new sap.m.Input({
            color: ...,
        });
    };
});
```



</td>
<td valign="top">

Declare a dependency to `sap.m.Input` within `sap.ui.define`:

```js
sap.ui.define(['sap/m/Input'], function(Input) {
 
    var fnCreateContent = function() {
        // reference sap.m.Input via a dependency
        return new Input({
            color: ...,
        });
    };
});
```



</td>
</tr>
</table>



### Exceptions

SAPUI5 provides a couple of static functions that can be referred to via their global name:

-   `sap.ui.define`

-   `sap.ui.loader`

-   `sap.ui.require`




<a name="loio030fcd14963048218488048f407f8f34__2"/>

## Don't use deprecated APIs

Entities marked as "deprecated" in the API Reference documentation \(this includes properties, methods, events, and their parameters as well as entire controls and other APIs\) are no longer intended to be used. They will not get feature updates in the future. Alternatives, if available, are described in the API Reference documentation.

One prominent example is the old `jQuery.sap.device` API that has been replaced with `sap.ui.Device`.

For more information, see the [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).



<a name="loio030fcd14963048218488048f407f8f34__3"/>

## Don't override or add control methods

If you override methods like `onBeforeRendering`, `onAfterRendering`, or getters and setters, the original methods will no longer be called. You have to make sure that you call them in your method explicitly. Even if they are not implemented right now, they could be added in the future. This applies to control inheritance in particular.

Instead, you should consider using delegates.

**Examples**


<table>
<tr>
<th valign="top">

Bad Examples

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

```js

oControl.onAfterRendering = function() {
       // do something
};
```



</td>
<td valign="top">

```js

oControl.addEventDelegate({
    onAfterRendering:function() {
        // do something
    }
});
```



</td>
</tr>
<tr>
<td valign="top">

`oControl.prototype.setText = function(){ ... };`

</td>
<td valign="top">

 

</td>
</tr>
</table>

See also: [sap.ui.core.Element - addEventDelegate](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/addEventDelegate).



<a name="loio030fcd14963048218488048f407f8f34__4"/>

## Don't manipulate the DOM structure within controls

Manipulating the DOM structure of controls rendered by SAPUI5 can result in undesired behavior and only has a temporary effect. Changes will be overridden after the next rerendering or the DOM might change in a future version of SAPUI5, which can break your code. In addition, your DOM changes could break the code of the SAPUI5 control if it relies on a certain structure.

If you need to manipulate the DOM of an SAPUI5 control, attach a delegate to the `afterRendering` hook of the control, safeguard your code against DOM changes, but still be prepared to have to rework your code at any time when the DOM structure \(which is in no way guaranteed to remain stable!\) changes. The adaptation should be covered by your automated tests.

Even `onAfterRendering` may not be called when a control handles certain property changes without complete rerendering.

**Examples**


<table>
<tr>
<th valign="top">

Bad Examples

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

`oControl.$().find(".sapMLabel")[0].innerHTML = "reallybad";`

</td>
<td valign="top">

```js

oControl.addEventDelegate({
	"onAfterRendering": function() {
		var $label = oControl.$().find(".sapMLabel");
		if (/* sanity check whether the change still makes sense */) { 
		      // TODO: re-test after UI5 updates, create automated test
			$label.text("Better");
		}
	}
});
```



</td>
</tr>
<tr>
<td valign="top">

`oControl.$().find(".sapMLabel").remove();`

</td>
<td valign="top">

 

</td>
</tr>
</table>



<a name="loio030fcd14963048218488048f407f8f34__5"/>

## Don't attach DOM event handlers

Use `attachBrowserEvent()` if you need to listen to any DOM event on SAPUI5 controls. An even better approach is to use `addEventDelegate()` for the most important event types instead, as it avoids additional event registrations and listens to the regular SAPUI5 event dispatching.

If you are creating event handlers in custom controls, you can use listen to DOM events directly, but make sure that the listeners are properly deregistered in `onBeforeRendering()` and in `exit()`, and registered in `onAfterRendering()`.

Good example for arbitrary events:

```js

oControl.attachBrowserEvent("mousemove", function() {
	// do something
});
```

Good example for wide but limited selection of browser events:

```js

oControl.addEventDelegate({
        onmouseover:function() {
            // do something
        }
    });
```

See also: [sap.ui.core.Control - attachBrowserEvent](https://ui5.sap.com/#/api/sap.ui.core.Control/methods/attachBrowserEvent) and [sap.ui.core.Element - addEventDelegate](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/addEventDelegate).



<a name="loio030fcd14963048218488048f407f8f34__6"/>

## Don't create global IDs \(when running with other views or apps\)

When you create typed views or applications that will be running together with views or applications from other sources \(that are not owned by you\), or typed views that will be instantiated several times in parallel, you must not create stable IDs for your controls, fragments, or views in SAPUI5. Doing so might result in duplicate ID errors that will break your app. Especially when running together with other apps, there could be name clashes or other errors.

Use the `createId()` function of a view or controller instead. This is done automatically in XMLViewsand JSONViews \(**deprecated** as of UI5 version 1.120\). The `createId()` function adds the View ID as a prefix, thus recursively ensuring uniqueness of the ID \(for example: `__page0--__dialog0`\).

**Examples**


<table>
<tr>
<th valign="top">

Bad Example \(Inside a Typed View\)

</th>
<th valign="top">

Good Example \(Inside a Typed View\)

</th>
</tr>
<tr>
<td valign="top">

```js

createContent: function(oController) {
	var btn = new sap.m.Button("myBtn", {text: "Hello"});
	return btn;
}
```



</td>
<td valign="top">

```js

createContent: function(oController) {
	var btn = new sap.m.Button(this.createId("myBtn"), {text: "Hello"});
	return btn;
}
```



</td>
</tr>
</table>

See also: [sap.ui.core.mvc.View - createId](https://ui5.sap.com/#/api/sap.ui.core.mvc.View/methods/createId).



<a name="loio030fcd14963048218488048f407f8f34__7"/>

## Don't forget about control lifecycle management

SAPUI5 controls are kept alive until they are destroyed, so lifecycle management of controls is important since multiple apps can be opened and closed in the same user session. Controls that are not destroyed cause memory leaks and may slow down the browser after prolonged use.

Also clean up internal structures in controllers, views and your custom controls.

See also: [sap.ui.core.Element - destroy](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/destroy) \(for applications\) and [sap.ui.core.Element - exit](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/exit) \(for custom control implementation\).



<a name="loio030fcd14963048218488048f407f8f34__8"/>

## Don't hard code or concatenate strings that need to be translatable

Hard coding UI strings will exclude them from translation. In addition, concatenating translatable strings in applications might lead to errors in internationalization: the texts in question might have a different translation order in other languages and will then be syntactically wrong.

**Examples**


<table>
<tr>
<th valign="top">

Bad Example

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

Using separate texts like " you selected " and " items " in the translation file to construct sentences like: " you selected " + 10 + "items ". This would lead to a wrong word order in languages where the verb needs to be at the end of the sentence, for example.

</td>
<td valign="top">

Using a complete sentence including a placeholder in the translation file: " you selected \{0\} items ". This allows translators to change the word order and the position of the inserted placeholder value.

</td>
</tr>
</table>



<a name="loio030fcd14963048218488048f407f8f34__9"/>

## Don't forget about proper "this" handling

For developers new to JavaScript, it is often confusing to understand how the "this" keyword behaves. In event handlers in particular, but also for other callback functions, the "this"-pointer must be used correctly, so make sure you check what it actually refers to. Without proper usage of the execution context, unexpected results can occur \(this-pointer might be the global window object or a different control\).



<a name="loio030fcd14963048218488048f407f8f34__10"/>

## Don't use `console.log()`

There is a native browser API available for logging errors and warnings in the developer console of your browser \(`console`\). Calling it directly is not recommended as it doesn't allow control over the amount of log entries that are created and it provides no criteria to associate a log entry with a specific topic or software component. Instead, add a dependency to the `sap/base/Log` module and use its methods to write log entries, for example `Log.error` or `Log.warning`. Create a dedicated logger for a topic or use the `sComponent` parameter of the log calls to assign the log entry to a topic. Use `Log.setLevel()` to define the minimum severity to be logged.

Note that most errors and warnings in the developer console thrown by the SAPUI5 framework are potential bugs in your application and must be analyzed thoroughly!

**Examples**


<table>
<tr>
<th valign="top">

Bad Example

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

`console.error("Logon failed");`

</td>
<td valign="top">

`Log.error("Logon failed", "", "connectivity";)`

</td>
</tr>
</table>

See also: [Namespace sap/base/Log](https://ui5.sap.com/#/api/module%3Asap%2Fbase%2FLog).



<a name="loio030fcd14963048218488048f407f8f34__11"/>

## Don't use timeouts

Executing logic with timeouts is often a workaround for faulty behavior and does not fix the root cause. The timing that works for you may not work under different circumstances \(other geographical locations with greater network latency, or other devices that have slower processors\) or when the code is changed. Use callbacks or events instead, if available.

**Examples**


<table>
<tr>
<th valign="top">

Bad Example

</th>
<th valign="top">

Good Example

</th>
</tr>
<tr>
<td valign="top">

```js
jQuery.ajax("someData.json");
setTimeout(fnProcessResults, 300);
```



</td>
<td valign="top">

```js
jQuery.ajax("someData.json").done(fnProcessResults);
```



</td>
</tr>
</table>



<a name="loio030fcd14963048218488048f407f8f34__12"/>

## Don't build apps without reasonable automated tests

This should not come as surprise, but it is very difficult to refactor or modify apps that do not have any \(or have bad\) automated test cases. There are substantial risks when QUnit and OPA tests are missing in applications.

