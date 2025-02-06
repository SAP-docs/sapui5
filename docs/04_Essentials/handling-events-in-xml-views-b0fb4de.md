<!-- loiob0fb4de7364f4bcbb053a99aa645affe -->

# Handling Events in XML Views

XML views use event handlers as attributes: The attribute name is the event name, such as "press" for a button, and the attribute value is the event handler name.



<a name="loiob0fb4de7364f4bcbb053a99aa645affe__section_rvt_hbm_ndb"/>

## Addressing the Event Handler

Depending on the syntax of its name, the event handler will be looked up by this name in different locations:

-   Names starting with a dot \('.'\) are always assumed to represent a method in the controller. They are resolved by removing the leading dot and reading the property with the resulting name from the controller instance. These names are relative to the view/controller. For example, `press=".myLocalHandler"` is resolved by `attachPress(oController["myLocalHandler"], oController);`

    > ### Note:  
    > This syntax is by intention consistent to the complex binding syntax for formatter functions.

-   Names defined in a `core:require` statement can be used to access static functions of the required modules. For example, `press= "Util.handler"` sets the static `handler` function of the required `Util` module as press handler for the respective control. For more information, see [Require Modules in XML View and Fragment](require-modules-in-xml-view-and-fragment-b11d853.md).

-   Names containing a dot at a later position are assumed to represent:

    -   Static functions from the modules which are loaded through the XML view required modules \(See [Require Modules in XML View and Fragment](require-modules-in-xml-view-and-fragment-b11d853.md)\)

    -   Global functions if the function cannot be resolved within the XML view require modules and are resolved by calling `ObjectPath.get` with the full name. For example, `name press= "some.global.handler"` is resolved by calling `attachPress(ObjectPath.get("some.global.handler"), oController);`.

        > ### Note:  
        > The use of globals is not recommended and they should be replaced, see [Require Modules in XML View and Fragment](require-modules-in-xml-view-and-fragment-b11d853.md).


-   Names without dot are interpreted as a relative name; if nothing is found, they are interpreted as an absolute name. This variant is only supported for backward compatibility.

    > ### Note:  
    > This legacy syntax is **not** supported for control properties of type `function`.


> ### Note:  
> When specified without parameters, the event handler will be called with one argument, the event object. This object can be used to retrieve the event parameters documented by the control's respective event documentation.



## The `"this"` Context

As long as no event handler parameters are specified and regardless of where the function was looked up, it will be executed with the controller as the context object \(`this`\). This is also true for global event handlers and makes the implementation of generic global handlers easier that may need an easy way back to the controller/view in which they are actually used, for example, to call `createId` or `byId`. This should make the development of global event handlers more consistent with controller local event handlers.

Therefore, the following declaration is equivalent to a call of `controller.doSomething()` when the button is pressed:

```xml

<Button text="Press Me" press=".doSomething"/>

```

However, once event parameters are specified using the syntax described below, the `this` context is always the object on which the handler function is defined. For controller methods, the controller remains the `this` context, but for methods defined in the XML view required modules or on global objects, that owner object is used as `this` context. In case the controller is still required in such global handler functions, it can be explicitly passed as `$controller` parameter \(see the *Passing Parameters* section below\). Functions defined directly on the XML view required modules or on the `window` object have an undefined `this` context.

By invoking the special JavaScript function .`call(...)` on your event handler function, you can also provide a different `this` context. For example, you can still have the controller as `this` in an event handler in a global helper object, even when you pass parameters, by doing:

```
<Button core:require="{Helper:'path/to/Helper'}" text="Press Me" press="Helper.doSomething.call($controller, 'Hello World')"/>
```



<a name="loiob0fb4de7364f4bcbb053a99aa645affe__section_qzw_5bm_ndb"/>

## Passing Parameters

In XMLViewsand JSONViews \(**deprecated** as of UI5 version 1.120\) it is also possible to directly specify the parameters that should be passed into the event handler function. These parameters then are passed instead of the event object. The syntax mimics the JavaScript syntax for function calls:

```
<Button text="Press Me" press=".doSomething('Hello World')"/>
```

Any JavaScript literals including objects and arrays can be passed:

```
<Button text="Press Me" press=".doSomething('string', 0, 5.5, {key1: 'value1', key2: 'value2'}, ['value1', 'value2'])"/>
```

It is also possible to access model properties. The syntax to be used is the one used within Expression Binding – binding paths are enclosed in **$\{…\}** :

```
<Button text="Press Me" press=".doSomething(${products>unitPrice})"/>
```

The binding context from which relative binding paths are resolved is the context of the control which triggers the event. This means that for a control in a table row, relative binding paths like the one above, always pass the data from the table row where the event occurred. This is very convenient, because it is no longer required to find out the data element to which the table row is bound.

Complex binding syntax can also be used \(to add formatters, types etc.\), as well as all expressions allowed by [Expression Binding](expression-binding-daf6852.md):

```
<Button text="Press Me" press=".doSomething(${path: 'products>unitPrice', formatter: '.formatPrice'})" />
<Button text="Press Me" press=".doSomething(10 * ${products>unitPrice})" />
<Button text="Press Me" press=".doSomething(${products>type} === 'Laptop')" />

```

> ### Restriction:  
> Even though complex bindings can have multiple parts \(use multiple data properties\) instead of just one data property path, this is not possible for the event parameters. Therefore, you cannot use `parts` in bindings.

Formatters are resolved the same way as the event handlers: a leading dot means the formatter is member of the controller.

> ### Note:  
> While it seems like regular JavaScript can be written directly in the event handler specification, this is not the case. The entire expression is evaluated as expression binding and only the syntax elements allowed there can be used.

There are two special named models available in event handlers to make accessing certain values easier:

The first one is named `$parameters` and contains the event parameters:

```
<Select change=".doSomething(${$parameters>/selectedItem})" />
```

Here the event parameter `selectedItem` is passed into the event handler.

The other one is named `$source` and is a `ManagedObjectModel` which wraps the control firing the event:

```
<Button text="Press Me" press=".doSomething(${$source>/text})" />
```

Here the text of the pressed button is passed into the event handler.

There are also two special values which can be used as parameters.

The first special value is named `$event` and represents the original event object. This event object is no longer passed to event handlers, once parameters are specified. This is because of the `$parameters` model, which provides access to the event parameters, and it is not needed in most cases. However, when access to the event object is still needed in the event handler, it can be explicitly passed:

```
<Button text="Press Me" press=".doSomething($event)" />
```

This leads to the same result as specifying `.doSomething` without any parameters, but further parameters can of course be given.

The second special value is `$controller`. As described above, as soon as parameters are specified, the `this` context inside the event handler function is always the object on which this function is defined. However, sometimes it is still required to access the controller even in a handler function which is NOT defined in the controller, but on some other helper object. In this case, the controller can be explicitly passed as one of the parameters:

```
<Button text="Press Me" press=".doSomething($controller)" />
```

