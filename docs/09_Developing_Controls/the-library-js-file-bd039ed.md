<!-- loiobd039ed5f99e4d3f8d020b0da62f9d85 -->

# The library.js File

The `library.js` file is a JavaScript file that contains the JavaScript code for all enumeration types provided by the library as well as library-specific initialization code that is independent from the controls in the library.

The file calls the `sap/ui/core/Lib.init` method with an object that describes the content of the library \(list of contained controls, elements etc.\). For more informarion about the object parameter, see[`sap/ui/core/Lib.init`](https://ui5.sap.com/#/api/sap.ui.core.Lib%23methods/sap.ui.core.Lib.init)

The library style sheet file \(`library.css`\) contains all styles relevant for this library. For libraries that have been developed with the SAPUI5 application development tools, this file is also generated automatically during the build.

In a `library.js` file, the call to `sap/ui/core/Lib.init` takes care of creating the namespace object of the library and returns a library object that you can use to write types or helpers:

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

	// don’t forget to return the value
	return oThisLibrary;
 
});
```



<a name="loiobd039ed5f99e4d3f8d020b0da62f9d85__section_cxp_t22_2z"/>

## Enumerations and RegEx Types



We recommend to add all simple types of a library to the `library.js` module. Other modules that need to work with such types can simply include the respective library as a module dependency:

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
sap.ui.define(["sap/ui/core/Control", "./library"], function(Control, library) {
    // shortcut on Enum
    var SizeMode = library.SizeMode;
 
    var MyControl = Control.extend("my.lib.MyControl", {
        metadata : {
            library : "my.lib",
            properties : {
                sizeMode: {type : "my.lib.SizeMode", group : "Appearance", defaultValue : SizeMode.Auto}
            }
        }
    });
 
    MyControl.prototype.setSizeMode = function (sMode) {
        switch(sMode) {
            case SizeMode.Auto: ... break;
            case SizeMode.Full: ... break;
            ...
        }
    };
 
    return MyControl;
});
```

