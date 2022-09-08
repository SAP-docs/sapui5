<!-- loioec699e0817fb46a0817b0fa276a249f8 -->

# Essentials

This chapter and its sections describe the development concepts of SAPUI5, such as the Model View Controller, data binding, and components. Use this section as a reference.



<a name="loioec699e0817fb46a0817b0fa276a249f8__section_jdv_3zg_yz"/>

## SAPUI5 Architecture

 ![SAPUI5 Architecture Overview](images/SAPUI5_Architecture_Overview_99b4be7.png) 

SAPUI5 is a client UI technology based on JavaScript, CSS and HTML5.

Apps developed with SAPUI5 run in a browser on any device \(mobile, tablet or desktop PC\).

When users access an SAPUI5 app, a request is sent to the respective server to load the application into the browser. The view accesses the relevant libraries. Usually the model is also instantiated and business data is fetched from the database.

Depending on the environment in which SAPUI5 is used, the libraries or your applications can be stored, for example, on an SAP NetWeaver Application Server or an SAP Business Technology Platform, and business data can be accessed, for example, using the OData model through a SAP Gateway.



## Artifacts in the Framework

The top-level structural unit is called a **library**. Libraries are the master artifacts in the extensibility concept. They bundle a set of controls and related types and make them consumable by Web applications. There are predefined and standard libraries, like `sap.m`, with many commonly used controls. At the same time, it treats custom UI libraries as first-class citizens, making it easy for you to write and use your own controls alongside the predefined ones.

A UI **element** is the basic building block of our user interfaces; it is a reusable entity with properties, events, methods, and relations. The most important relations are aggregations to other UI elements, and in this way a tree structure of elements can be created.

From a developer's point of view, a **control** \(e.g. `Button`, `Label`, `TextField`, or `Table`\) is the most important artifact. It is an object which controls the appearance and user interaction of a rectangular screen region. It is a special kind of user interface element which can be used as the root of such a tree structure. In this way, it serves as an entry point, especially for rendering. Besides controls, there are also other **non-control elements**, which cannot be used as the root of such a tree structure, but only as a dependent part within it \(e.g. `TableRow`, `TableCell`\).

**Data types** are first-class entities in the meta model. This allows reuse of types across libraries and extensibility of the type system. The core library \(technically, this is the `sap.ui.core` library\) already defines a core set of types that can be used in other libraries.

-   **[Bootstrapping: Loading and Initializing](bootstrapping-loading-and-initializing-a04b0d1.md "To use SAPUI5 features
		in your HTML page, you have to load and initialize the SAPUI5 library.")**  
To use SAPUI5 features in your HTML page, you have to load and initialize the SAPUI5 library.
-   **[Structuring: Components and Descriptor](structuring-components-and-descriptor-dc9e11c.md "SAPUI5 provides Components as independent and reusable parts of UI5
		applications. They facilitate the encapsulation of closely related parts of an application, thus enabling developers to structure and maintain
		their applications more easily.")**  
SAPUI5 provides Components as independent and reusable parts of UI5 applications. They facilitate the encapsulation of closely related parts of an application, thus enabling developers to structure and maintain their applications more easily.
-   **[Model View Controller \(MVC\)](model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the
		representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")**  
The Model View Controller \(MVC\) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.
-   **[Data Binding](data-binding-68b9644.md "You use data binding to bind UI elements to data sources to keep the data in sync and
		allow data editing on the UI.")**  
You use data binding to bind UI elements to data sources to keep the data in sync and allow data editing on the UI.
-   **[Reusing UI Parts: Fragments](reusing-ui-parts-fragments-36a5b13.md "Fragments are light-weight UI parts (UI sub-trees) which can be reused, defined similar
		to views, but do not have any controller or other behavior code involved.")**  
Fragments are light-weight UI parts \(UI sub-trees\) which can be reused, defined similar to views, but do not have any controller or other behavior code involved.
-   **[XML Templating](xml-templating-5ee619f.md "The XML templating concept enables you to use an XML view as a template. This
		template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime
		just before an SAPUI5 control
		tree is created from the XML source.")**  
The XML templating concept enables you to use an XML view as a template. This template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime just before an SAPUI5 control tree is created from the XML source.
-   **[Working with Controls](working-with-controls-91f0a22.md "Controls are used to define the appearance and behavior of screen areas.")**  
Controls are used to define the appearance and behavior of screen areas.
-   **[Declarative Support](declarative-support-91f1301.md "Declarative programming allows you to define the UI within the HTML document as
		elements.")**  
Declarative programming allows you to define the UI within the HTML document as elements.
-   **[Error, Warning, and Info Messages](error-warning-and-info-messages-62b1481.md "
		SAPUI5 provides a central place
		for storing and managing info, warning, and error messages.")**  
 SAPUI5 provides a central place for storing and managing info, warning, and error messages.
-   **[Routing and Navigation](routing-and-navigation-3d18f20.md "SAPUI5 offers hash-based
        navigation, which allows you to build single-page apps where the navigation is done by
        changing the hash. In this way the browser does not have to reload the page; instead there
        is a callback to which the app and especially the affected view can react. A hash string is
        parsed and matched against patterns which will then inform the handlers.")**  
SAPUI5 offers hash-based navigation, which allows you to build single-page apps where the navigation is done by changing the hash. In this way the browser does not have to reload the page; instead there is a callback to which the app and especially the affected view can react. A hash string is parsed and matched against patterns which will then inform the handlers.
-   **[Modules and Dependencies](modules-and-dependencies-91f23a7.md "The SAPUI5 framework has
		built-in support for modularizing comprehensive JavaScript applications. That means, instead
		of defining and loading one large bundle of JavaScript code, an application can be split
		into smaller parts which then can be loaded at runtime at the time when they are needed.
		These smaller individual files are called modules.")**  
The SAPUI5 framework has built-in support for modularizing comprehensive JavaScript applications. That means, instead of defining and loading one large bundle of JavaScript code, an application can be split into smaller parts which then can be loaded at runtime at the time when they are needed. These smaller individual files are called modules.
-   **[Optimizing Applications](optimizing-applications-2f492c4.md "SAPUI5 supports several
		means of optimizing the loading time for applications.")**  
SAPUI5 supports several means of optimizing the loading time for applications.
-   **[Adapting to Operating Systems And Devices](adapting-to-operating-systems-and-devices-50eadaa.md "No need to worry about device specifics! SAPUI5 apps run on smartphones,
		tablets, and desktops. The UI controls automatically adapt themselves to each device's
		capabilities and make the most of the available real estate. supports several functions to
		adapt to operating systems and devices.")**  
No need to worry about device specifics! SAPUI5 apps run on smartphones, tablets, and desktops. The UI controls automatically adapt themselves to each device's capabilities and make the most of the available real estate. supports several functions to adapt to operating systems and devices.
-   **[SAPUI5 Flexibility: Adapting UIs Made Easy](sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md "Modification-free, cost-saving, easy to use, and performant: Discover the new flexibility when adapting SAP Fiori UIs using SAPUI5
		flexibility.")**  
Modification-free, cost-saving, easy to use, and performant: Discover the new flexibility when adapting SAP Fiori UIs using SAPUI5 flexibility.
-   **[Testing](testing-7cdee40.md "SAPUI5 provides several testing options, like to unit and integration tests
		and the OData V2 mock server.")**  
SAPUI5 provides several testing options, like to unit and integration tests and the OData V2 mock server.
-   **[Theming](theming-497c27a.md "SAPUI5 is an HTML UI
		library, therefore styling is done using Cascading Style Sheets (CSS). This allows for
		creating an impressive visual experience using a widely known standard technology which is
		well-accepted on the market.")**  
SAPUI5 is an HTML UI library, therefore styling is done using Cascading Style Sheets \(CSS\). This allows for creating an impressive visual experience using a widely known standard technology which is well-accepted on the market.
-   **[Localization](localization-91f217c.md "The framework concepts for text localization in SAPUI5 are aligned with the general
		concepts of the Java platform. ")**  
The framework concepts for text localization in SAPUI5 are aligned with the general concepts of the Java platform.
-   **[Accessibility](accessibility-322f55d.md "Accessibility features are essential for the usability of each application and essential
		for users with disabilities. In an ongoing approach, SAPUI5 controls aim to comply
		with various accessibility standards such as screen reader support, high contrast theming,
		and keyboard handling.")**  
Accessibility features are essential for the usability of each application and essential for users with disabilities. In an ongoing approach, SAPUI5 controls aim to comply with various accessibility standards such as screen reader support, high contrast theming, and keyboard handling.
-   **[Drag and Drop](drag-and-drop-3ddb6cd.md "Drag and drop allows you to easily move, rearrange, and restructure items, for example,
		in a list or hierarchy structure.")**  
Drag and drop allows you to easily move, rearrange, and restructure items, for example, in a list or hierarchy structure.
-   **[Spreadsheet Export](spreadsheet-export-2691788.md "The
		spreadsheet
		export allows you to export data to an Office Open XML
		spreadsheet.")**  
The spreadsheet export allows you to export data to an Office Open XML spreadsheet.
-   **[Troubleshooting](troubleshooting-615d9e4.md "This section describes the various tools that are available for troubleshooting apps
		developed with SAPUI5")**  
This section describes the various tools that are available for troubleshooting apps developed with SAPUI5

