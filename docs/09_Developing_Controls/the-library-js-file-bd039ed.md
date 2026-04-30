<!-- loiobd039ed5f99e4d3f8d020b0da62f9d85 -->

# The library.js File

The `library.js` file is a JavaScript file that contains the JavaScript code for all enumeration types provided by the library as well as library-specific initialization code that is independent from the controls in the library.

The file calls the `sap/ui/core/Lib.init` method with an object that describes the content of the library \(list of contained controls, elements etc.\). For more informarion about the object parameter, see[`sap/ui/core/Lib.init`](https://ui5.sap.com/#/api/sap.ui.core.Lib%23methods/sap.ui.core.Lib.init)

The library style sheet file \(`library.css`\) contains all styles relevant for this library. For libraries that have been developed with the SAPUI5 application development tools, this file is also generated automatically during the build.

In the `library.js` file, the call to `sap/ui/core/Lib.init` creates an object with the exports of the library \(enums, helpers, …\).

> ### Remember:  
> The object returned by `Library.init()` must be used as the return value of the `library.js` module. This ensures that consumers of the library can access the enums and other exports properly.

```js
sap.ui.define([
		'sap/ui/base/DataType',
		'sap/ui/core/Lib'
	], function(DataType, Library) {
 
	"use strict";

	// initialize the library with global name "my.lib"
	var oThisLibrary = Library.init({
		name: "my.lib",
		apiVersion: 2
		...
	});	
 
	/**
	* The "my.lib" library
	* @namespace
	* @alias my.lib
	*/
 
	/**
	* An addition to mylib. If you used the @alias tag above, JSDoc will recognize this as my.lib.ValueColor.
	* @ui5-metamodel The UI5 metamodel restoration logic also can handle this kind of definition and will create an enumeration type
	*         my/lib/ValueColor.type. The name of the variable (<code>oThisLibrary</code>) is not mandatory, just an example.
	*/
	oThisLibrary.ValueColor = {
		Color1: …
	};
 
	//  An enum type must be registered by calling the "DataType.registerEnum()" method
	DataType.registerEnum("my.lib.ValueColor", oThisLibrary.ValueColor);

	// don't forget to return the value
	return oThisLibrary;
 
});
```



<a name="loiobd039ed5f99e4d3f8d020b0da62f9d85__section_ENUM"/>

## Enumerations and RegEx Types

Add all managed property types \(instances of [`sap.ui.base.DataType`](https://ui5.sap.com/#/api/sap.ui.base.DataType)\) of a library to the `library.js` module. Define enums as properties on the object that `Library.init()` returns. Register each enum with `DataType.registerEnum` to make it available to the framework.



### Defining Enums

When defining an enum, make sure that the **enum keys and values match**:

```js
// Correct: keys and values match
oThisLibrary.Size = {
    Small: "Small",
    Medium: "Medium",
    Large: "Large"
};

// Register the enum to make it known to the framework
DataType.registerEnum("my.lib.Size", oThisLibrary.Size);
```



### Enums in Nested Namespaces

For enums that belong to a nested namespace, make sure to create the namespace object first before defining the enum:

```js
// Create the nested namespace first
oThisLibrary.cards = oThisLibrary.cards || {};

// Define the enum within the nested namespace
oThisLibrary.cards.Position = {
    Top: "Top",
    Bottom: "Bottom"
};

// Register with the fully qualified name
DataType.registerEnum("my.lib.cards.Position", oThisLibrary.cards.Position);
```



### Consuming Enums

Other modules that need to work with these types can include the relevant library as a module dependency:

```js
// requiring a library
sap.ui.require(["sap/ui/core/library"], function(library) {
    var sAlign = library.HorizontalAlign.Begin;
});
 
// defining a module with a library dependency
sap.ui.define(["sap/ui/core/library"], function(library) {
    var sAlign = library.HorizontalAlign.Begin;
});
```



<a name="loiobd039ed5f99e4d3f8d020b0da62f9d85__section_tx3_y22_2z"/>

## ManagedObject Metadata

In the metadata definition of `ManagedObject` subclasses, types for properties, aggregations, associations and event parameters have to be specified with global names as strings.

The default values, however, should be referenced via the correct type value from the `library.js` module because it avoids the usage of globals.

Define the `library.js` as static dependency and use it as a local variable for convenience:

```js
sap.ui.define([
    "sap/ui/core/Control",
    "./library"
], (Control, myLib) => {
    "use strict";
    const { SizeMode } = myLib;

    return Control.extend("my.lib.MyControl", {
        metadata: {
            library: "my.lib",
            properties: {
                sizeMode: {
                    type: "my.lib.SizeMode",
                    group: "Appearance",
                    defaultValue: SizeMode.Auto
                }
            },
            // ...
        },
        // ...
    });
});
```

