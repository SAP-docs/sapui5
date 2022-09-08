<!-- loio36a5b130076e4b4aac2c27eebf324909 -->

# Reusing UI Parts: Fragments

Fragments are light-weight UI parts \(UI sub-trees\) which can be reused, defined similar to views, but do not have any controller or other behavior code involved.

UI parts which are to be used in several views cannot be easily defined. They either have to be created as new controls, or they have to be created as views. Creating them as new controls results in a development overhead, while creating them as separate views results in a runtime overhead. In the latter case they would have a separate controller instead of having the same controller as the view does. Also, views and popup controls like dialogs do not go well together. The dialog content can be defined as a view but the dialog control itself always has to be written in the program.

To solve these issues, fragments have been introduced. They can be reused and, if source code is required and for event handler methods, they can connect to existing controllers of the "owning" view. This means that one important characteristic of fragments is that they are independent of the model-view-controller \(MVC\) concept and can be used without using MVC. However, if fragments are used together with views and controllers, fragments can make use of them and integrate them neatly.

Similar to `DocumentFragments` in HTML, the fragment itself has no HTML representation when it is inserted into the UI tree. Instead, its content is inserted. This means that fragments are not like controls, but more like a factory creating the contained controls. They support reuse and view modularization without adding overhead.

SAPUI5 provides different types of fragments:

-   XML fragments
-   HTML fragments
-   JS fragments

More fragment types can be implemented and plugged in.

Defining a fragment is similar to defining views within a separate file. The fragments simply end with `*.fragment` instead of `*.view`. Also, the same rules for file location apply.

-   **[HTML Fragments](html-fragments-08d2206.md "HTML fragments have a similar syntax as HTML views, but without the
			<template> tag.")**  
HTML fragments have a similar syntax as HTML views, but without the `<template>` tag.
-   **[XML Fragments](xml-fragments-2c677b5.md " XML fragments are similar to XML view, but have no <View> tag as root element.
		Instead, there is an SAPUI5
		control.")**  
 XML fragments are similar to XML view, but have no <View\> tag as root element. Instead, there is an SAPUI5 control.
-   **[JS Fragments](js-fragments-9c06982.md "The structure of JS fragments is similar to the structure of the respective views:
		They have a name and an object with a createContent() function.")**  
The structure of JS fragments is similar to the structure of the respective views: They have a name and an object with a `createContent()` function.
-   **[Instantiation of Fragments](instantiation-of-fragments-04129b2.md "SAPUI5 provides two options to instantiate a fragment: If it is instantiated
		inside a controller extending sap.ui.core.mvc.Controller, the loadFragment() function is the way to go.
		However, if it is instantiated in a non-controller artefact, the generic function sap.ui.core.Fragment.load() can be
		used.")**  
SAPUI5 provides two options to instantiate a fragment: If it is instantiated inside a controller extending `sap.ui.core.mvc.Controller`, the`loadFragment()` function is the way to go. However, if it is instantiated in a non-controller artefact, the generic function `sap.ui.core.Fragment.load()` can be used.
-   **[Unique IDs](unique-ids-5da591c.md "You can use a unique ID for a fragment that will be used as a prefix for all controls in
		a fragment instance.")**  
You can use a unique ID for a fragment that will be used as a prefix for all controls in a fragment instance.
-   **[Dialogs and other Popups as Fragments](dialogs-and-other-popups-as-fragments-448c641.md "You can use fragments to declaratively define dialogs and other popup controls which are
		not part of the normal page UI structure.")**  
You can use fragments to declaratively define dialogs and other popup controls which are not part of the normal page UI structure.
-   **[Fragments with Multiple Root Nodes](fragments-with-multiple-root-nodes-23b9c77.md "XML fragments and JS fragments can have more than one root control.")**  
XML fragments and JS fragments can have more than one root control.

**Related Information**  


[Model View Controller \(MVC\)](model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")

[Walkthrough Step 16: Dialogs and Fragments](../03_Get-Started/step-16-dialogs-and-fragments-4da7298.md "In this step, we will take a closer look at another element which can be used to assemble views: the fragment.")

