<!-- loio196a7cd972e24983ac891a7d1cf8fc5b -->

# Enable a Library for Design-Time Usage

To enable a library for design-time usage, follow the steps described here.



<a name="loio196a7cd972e24983ac891a7d1cf8fc5b__context_ffr_rgd_gyb"/>

## Context

These steps need to be done only once for a library that contains multiple controls.



## Procedure

1.  Create a `designtime` folder in the root of the library \(`<lib_namespace>/designtime`\).

2.  Create a `library.designtime.js` file in this folder \(`<lib_namespace>/designtime/library.designtime.js`\).

    > ### Sample Code:  
    > Initial Content \(replace `<lib_namespace>`\)
    > 
    > ```
    > /**
    >  * Initialization of design-time code and shared classes for the library <lib_namespace>.
    >  */
    > sap.ui.define([], function() {
    >     "use strict";
    >     return {};
    > });
    > ```

3.  Open the `library.js` file of the library and add the module path to the `library.designtime.js` file.

    > ### Sample Code:  
    > ```
    > sap.ui.define(['sap/ui/core/Lib'], function(Library) {
    > ...
    >     Library.init({
    >         name : "<lib_namespace>",
    >         apiVersion: 2,
    >         version: "${version}",
    >         dependencies : ["sap.ui.core"],
    >         designtime: "<lib_namespace>/designtime/library.designtime" //HERE
    >     });
    > });
    > ```

4.  If you're using translated texts in your `designtime` file, add a `messagebundle.properties` file and include the texts.

    Provide a new GUID for the message bundle, like in line 2 in the following example:

    > ### Sample Code:  
    > ```
    > #This is the resource bundle for design time of the <lib_namespace> library
    > #__ldi.translation.uuid=35653b13-1ec8-4fb2-83d9-ac4d31591f1d
    > 
    > #XMIT: Radio button control name caption
    > RADIOBUTTON_NAME=Radio Button
    > 
    > ```


