<!-- loio9ef211e569ed4f819af904ba360ea7f6 -->

# Glossary

List of terms used in SAPUI5.


<table>
<tr>
<th valign="top">

Term

</th>
<th valign="top">

Meaning

</th>
<th valign="top">

Source/Comments

</th>
<th valign="top">

Link

</th>
</tr>
<tr>
<td valign="top">

SAPUI5 ABAP repository

</td>
<td valign="top">

Used to store SAPUI5 apps, components, and libraries; based on the Business Server Page \(BSP\) repository of the ABAP server.

A SAPUI5 application stored in the ABAP repository can be deployed and executed in a browser directly. It is connected to the ABAP transport system.

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](05_Developing_Apps/the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md)

</td>
</tr>
<tr>
<td valign="top">

actions

</td>
<td valign="top">

Action represents a business function in the application backend that can be triggered by the user from the UI using an action button.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Actions](06_SAP_Fiori_Elements/actions-cbf16c5.md) 

</td>
</tr>
<tr>
<td valign="top">

aggregation

</td>
<td valign="top">

An **aggregation** is a special relation between two UI element types. It is used to define the parent-child relationship within the tree structure. The parent end of the aggregation has cardinality 0..1, while the child end may have 0..1 or 0..\*. The element's API offers convenient and consistent methods to deal with aggregations \(e.g. to get, set, or remove target elements\). Examples are table rows and cells, or the content of a table cell.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

annotations

</td>
<td valign="top">

Annotations contain metadata that accompanies the application data. It is an interface between SAP Fiori elements client and assists application developers in implementing the display and behaviour of UI controls. For example, annotations and their properties control the:

-   Display and position of columns in a table

-   Sort order for the table rows

-   Measures, dimensions, and sort order in a chart

-   Enablement of a navigation button either always or only after the user has selected an item




</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Working With UI Annotations](06_SAP_Fiori_Elements/working-with-ui-annotations-83c89cc.md) 

</td>
</tr>
<tr>
<td valign="top">

association

</td>
<td valign="top">

An **association** is a type of relation between two UI element types which is independent of the parent-child relationship within the tree structure. Directed outgoing associations to a target of cardinality 0..1 are supported. They represent a loose coupling only and are thus implemented by storing the target element instance's ID. The most prominent example is the association between a label and its field.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

ARIA

</td>
<td valign="top">

*WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.* \(Quote from w3c.org\)

</td>
<td valign="top">

`w3c.org`

</td>
<td valign="top">

[W3C ARIA](https://www.w3.org/WAI/intro/aria)

</td>
</tr>
<tr>
<td valign="top">

asynchronous \(async\) processing

</td>
<td valign="top">

In contrast to synchronous processing this processing mode does not keep the browser thread busy but does the processing in the background and continues with the next task. Code can be executed asynchronously and a callback function is triggered when a certain condition is met. Similarly, a file can be loaded asynchronously. Asynchronous processing is highly recommended for performance reasons and to not freeze the UI.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

asynchronous module definition \(AMD\)

</td>
<td valign="top">

A mechanism for defining a module in a way that modules and their dependencies can be loaded asynchronously.

</td>
<td valign="top">

`requirejs.org`

</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

asynchronous action

</td>
<td valign="top">

An asynchronous action is one that the backend can execute sometime after the users initially trigger it. The users should then be allowed to work on the UI without any interruption to their flow.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

bootstrap

</td>
<td valign="top">

To use the SAPUI5 features in your web page, you have to load and initialize – or "bootstrap" – the SAPUI5 runtime in your HTML page.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Bootstrapping: Loading and Initializing](04_Essentials/bootstrapping-loading-and-initializing-a04b0d1.md)

</td>
</tr>
<tr>
<td valign="top">

BPMN

</td>
<td valign="top">

*A standard Business Process Model and Notation \(BPMN\) will provide businesses with the capability of understanding their internal business procedures in a graphical notation and will give organizations the ability to communicate these procedures in a standard manner. Furthermore, the graphical notation will facilitate the understanding of the performance collaborations and business transactions between the organizations.*

</td>
<td valign="top">

`bpmn.org`

</td>
<td valign="top">

[BPMN.org](http://www.bpmn.org)

</td>
</tr>
<tr>
<td valign="top">

\(application\) cache buster

</td>
<td valign="top">

A cache buster allows the application to notify the browser to refresh the resources only when the application resources have been changed. Otherwise the resources can always be fetched from the browser's cache. The application cache buster is a special mechanism to extend this function to application resources

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Cache Buster for SAPUI5](04_Essentials/cache-buster-for-sapui5-91f0809.md)

[Application Cache Buster](04_Essentials/application-cache-buster-ff7aced.md)

</td>
</tr>
<tr>
<td valign="top">

cache busting: single application resources

</td>
<td valign="top">

Cache busting on the level of a single app, component, or library in the SAPUI5 ABAP repository

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](05_Developing_Apps/the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md)

</td>
</tr>
<tr>
<td valign="top">

cache busting; multiple application resources

</td>
<td valign="top">

Cache busting on the level of multiple apps, components, or libraries in the SAPUI5 ABAP repository

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](05_Developing_Apps/the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md)

</td>
</tr>
<tr>
<td valign="top">

clickjacking

</td>
<td valign="top">

Clickjacking, or UI redressing, tricks the user into triggering actions within an application by redirecting clicks. This is done, for example, by using an invisible iFrame which is positioned above a fake UI. When the user clicks on something on the fake UI, the content of the invisible iFrame handles the click.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Browser Security](05_Developing_Apps/browser-security-91f3b66.md)

</td>
</tr>
<tr>
<td valign="top">

composite control

</td>
<td valign="top">

Composite controls are intended for reuse within control development and allow you to include existing controls in a complex control.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Standard Composite Controls](09_Developing_Controls/standard-composite-controls-c1512f6.md)

</td>
</tr>
<tr>
<td valign="top">

content density

</td>
<td valign="top">

The devices used to run apps that are developed with SAPUI5 run on various different operating systems and have very different screen sizes. SAPUI5 contains different content densities for certain controls that allow your app to adapt to the device in question, allowing you to display larger controls for touch-enabled devices and a smaller, more compact design for devices that are operated by mouse.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Content Densities](04_Essentials/content-densities-e54f729.md)

</td>
</tr>
<tr>
<td valign="top">

control

</td>
<td valign="top">

UI elements that can be used independently.

From a developer's point of view, a **control** \(e.g. `Button`, `Label`, `TextField`, or `Table`\) is the most important artifact. It is an object which controls the appearance and user interaction of a rectangular screen region. It is a special kind of user interface element which can be used as the root of such a tree structure. In this way, it serves as an entry point, especially for rendering. Besides controls, there are also other **non-control elements**, which cannot be used as the root of such a tree structure, but only as a dependent part within it \(e.g. `TableRow`, `TableCell`\).

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[More About Controls](10_More_About_Controls/more-about-controls-3ec6808.md)

[Samples](https://ui5.sap.com/explored.html)

[API Reference](https://ui5.sap.com/#/api/since)

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

controller

</td>
<td valign="top">

An application unit containing the active part of the application. It is the logical interface between a model and a view, and corresponds to the model view controller \(MVC\) concept.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Controller](04_Essentials/controller-121b8e6.md)

</td>
</tr>
<tr>
<td valign="top">

Cross-Site Scripting \(XSS\)

</td>
<td valign="top">

Cross-site scripting is about injecting script code into a web page, which is then executed in the context of the page. Therefore it can access any information which is currently displayed on the screen. Additionally, XSS attacks can access session information contained in cookies, or send new requests to the server within the current session, or even try to exploit browser vulnerabilities to get full access to the machine that the browser is running on.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Cross-Site Scripting](05_Developing_Apps/cross-site-scripting-91f0bd3.md)

</td>
</tr>
<tr>
<td valign="top">

data binding

</td>
<td valign="top">

A technique that binds two data sources together in order to keep them in sync. All changes in one data source are automatically reflected in the other; the involved layers are the view and the model.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Data Binding](04_Essentials/data-binding-68b9644.md)

</td>
</tr>
<tr>
<td valign="top">

data type

</td>
<td valign="top">

**Data types** are first-class entities in the meta model. This allows reuse of types across libraries and extensibility of the type system. The core library \(technically, this is the `sap.ui.core` library\) already defines a core set of types that can be used in other libraries.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

Demo Kit

</td>
<td valign="top">

The Demo Kit is the SAPUI5 software development kit \(SDK\). The Demo Kit is your one-stop shop for all information about SAPUI5: documentation, API reference, samples, demo apps.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

determining action

</td>
<td valign="top">

A finalizing action placed at the bottom of the page that applies to the entire page context \(and therefore only applicable to object page or subobject page\). Header actions are the other type of finalizing actions.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Defining Determining Actions](06_SAP_Fiori_Elements/defining-determining-actions-1743323.md) 

</td>
</tr>
<tr>
<td valign="top">

diagnostics

</td>
<td valign="top">

A diagnostics window is available in SAPUI5 applications.

To open it, use the following [shortcut](02_Read-Me-First/keyboard-shortcuts-for-sapui5-tools-154844c.md): [Ctrl\] + [Shift\] + [Alt\] /[Option\][S\] 

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Diagnostics](04_Essentials/diagnostics-6ec18e8.md#loio6ec18e80b0ce47f290bc2645b0cc86e6)

</td>
</tr>
<tr>
<td valign="top">

distribution layer

</td>
<td valign="top">

Contains the control libraries and theme libraries; also known as SAPUI5 distribution layer.

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Document Object Model \(DOM\)

</td>
<td valign="top">

*The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents. The document can be further processed and the results of that processing can be incorporated back into the presented page.* \(Quote from w3c.org\)

</td>
<td valign="top">

`w3c.org`

</td>
<td valign="top">

[W3C DOM](http://www.w3.org/DOM/)

</td>
</tr>
<tr>
<td valign="top">

element

</td>
<td valign="top">

A \(UI\) **element** is the basic building block of our user interfaces; it is a reusable entity with properties, events, methods, and relations. The most important relations are aggregations to other UI elements, and in this way a tree structure of elements can be created.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

entity

</td>
<td valign="top">

In an OData definition of a data model, an entity corresponds to a business object in an application.

The data model also defines the association among the entity types.

For example, for a sales order processing application, the data model can define sales order as an entity and sales order item as its child entity. In the application interface, this association allows the users to navigate from the sales order to the sales order item.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

extend

</td>
<td valign="top">

Extension of SAP Fiori elements application where you can add custom code, that must subsequently be maintained.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Extending SAP Fiori Elements-Based Apps](06_SAP_Fiori_Elements/extending-sap-fiori-elements-based-apps-358cf25.md)

[Extending List Reports and Object Pages Using App Extensions](06_SAP_Fiori_Elements/extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md)

[Configuring Analytical List Page App Extensions](06_SAP_Fiori_Elements/configuring-analytical-list-page-app-extensions-9504fb4.md)

[Configuring Overview Page App Extensions](06_SAP_Fiori_Elements/configuring-overview-page-app-extensions-b240f61.md)

</td>
</tr>
<tr>
<td valign="top">

facet

</td>
<td valign="top">

Facet is the basic building block of the object page. A facet can be:

-   A header facet that can be placed within the header.

-   A reference facet that is rendered as a form, table, or a chart, below the object page header.

-   A collection facet that is a section in the object page that can hold one or more reference facets within.




</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Setting Up the Object Page Header](06_SAP_Fiori_Elements/setting-up-the-object-page-header-cce93e6.md)

[Defining and Adapting Sections](06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md)

</td>
</tr>
<tr>
<td valign="top">

SAP Fiori 

</td>
<td valign="top">

SAP Fiori is the user experience \(UX\) for SAP software that applies modern design principles. SAP solutions are using the SAP Fiori UX to provide a personalized, responsive, and simple user experience.

</td>
<td valign="top">

SAP Fiori 

</td>
<td valign="top">

[http://www.sap.com/fiori](http://www.sap.com/fiori)

[http://help.sap.com/fiori](http://help.sap.com/fiori)

[https://experience.sap.com/fiori/](https://experience.sap.com/fiori/)

</td>
</tr>
<tr>
<td valign="top">

SAP Fiori launchpad

</td>
<td valign="top">

SAP Fiori launchpad is a shell that hosts SAP Fiori apps, and provides the apps with services such as navigation, personalization, embedded support, and application configuration.

</td>
<td valign="top">

SAP Fiori

</td>
<td valign="top">

[http://help.sap.com/fiori](http://help.sap.com/fiori)

</td>
</tr>
<tr>
<td valign="top">

event

</td>
<td valign="top">

An **event** has a name as well as any number of parameters. The element's API offers support to manage event subscriptions.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

iAppState

</td>
<td valign="top">

It is the inner app state that stores all the information required to retrieve the state of an app, when the same URL is reloaded. Reloading implies refreshing, back navigation, URL shared using *Save as Tile*, or *Send Email*. Usually, the filter applied, visible table columns, applied sort order etc. are stored.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Store/Restore the Application State](06_SAP_Fiori_Elements/store-restore-the-application-state-46bf248.md)

</td>
</tr>
<tr>
<td valign="top">

JAWS Screen Reader

</td>
<td valign="top">

*JAWS, Job Access With Speech, is the world's most popular screen reader, developed for computer users whose vision loss prevents them from seeing screen content or navigating with a mouse. JAWS provides speech and Braille output for the most popular computer applications on your PC.*

</td>
<td valign="top">

Freedom Scientific

</td>
<td valign="top">

[Freedom Scientific JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS)

</td>
</tr>
<tr>
<td valign="top">

jQuery

</td>
<td valign="top">

JavaScript library that is packaged with SAPUI5.

*jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.* \(Quote from jquery.com\)

</td>
<td valign="top">

`jquery.com`

</td>
<td valign="top">

[jQuery Home Page](https://jquery.com/)

</td>
</tr>
<tr>
<td valign="top">

key annotations

</td>
<td valign="top">

Key annotations are the most important annotations that defines the rendering or behavior of a control.

For example:

-   `LineItem` annotation defines the column seen when the table is rendered.

-   `SelectionFields` annotation defines the filter fields that are by default visible when the application is launched.

-   `InsertRestrictions` annotation checks if *Create* action should be allowed for the table or not.




</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

layout management

</td>
<td valign="top">

Layout Management refers to how the information in the object page is displayed on the UI. The SAPUI5 `ObjectPageLayout` controls the layout that enables the display of the business information \(for example, if the data should be displayed in a 2 column layout or a 3 column layout\). SAP Fiori elements allows some flexibility for the applications by allowing them to group the data in their own blocks \(individual subsection with no peer blocks\) or by making it part of a container that holds more than one block in the same row \(subsection with peers\).

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

library

</td>
<td valign="top">

The top-level structural unit is called a **library**. Libraries are the main artifacts in the extensibility concept. They bundle a set of controls and related types and make them consumable by Web applications. There are predefined and standard libraries, like `sap.m`, with many commonly used controls. At the same time, it treats custom UI libraries as first-class citizens, making it easy for you to write and use your own controls alongside the predefined ones.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

`LineItem` - Table

</td>
<td valign="top">

`LineItem` define the columns that can be seen in the table.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Configuring Tables](06_SAP_Fiori_Elements/configuring-tables-f4eb70f.md) 

</td>
</tr>
<tr>
<td valign="top">

manifest

</td>
<td valign="top">

The manifest is the main configuration file for an application and the place where application developers define settings for the application and the interface behavior.

For example, in the manifest, an application developer can set:

-   A filter field to render onscreen as both a compact filter field in the filter bar and a visual filter.

-   A table to allow the selection of one or more table rows


Annotations are another way application developers can implement the display and behavior of UI controls.

For more information, see annotations.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Checking Folder Structure and Project Artifacts](06_SAP_Fiori_Elements/checking-folder-structure-and-project-artifacts-f7abd1b.md) 

</td>
</tr>
<tr>
<td valign="top">

main entity

</td>
<td valign="top">

Main entity refers to the entry entity that holds the information displayed in the SAP Fiori elements template. For example, in a typical Manage Sales Order application, the `SalesOrder` is the main entity.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

mock server

</td>
<td valign="top">

A mock server is a mocking framework for HTTP and HTTPS that is used to simplify integration testing and to decouple development teams by allowing them to develop against a service that is incomplete or unstable. The mock server included with SAPUI5 mimics OData V2 back-end calls. Mock server functionality for OData V4 is included with CAP Node.js.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Mock Server](04_Essentials/mock-server-69d3cbd.md)

</td>
</tr>
<tr>
<td valign="top">

model

</td>
<td valign="top">

Data provider for the application where the model instance is assigned to the UI and the controls are bound to the model. Various model types are available; the model type used depends on the data format available on the server side.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Models](04_Essentials/models-e1b6259.md)

</td>
</tr>
<tr>
<td valign="top">

MVC concept

</td>
<td valign="top">

A UI programming model that separates the layout \(view\) from the content \(model\) and the behavior \(controller\). The MVC concept is used by the framework to model the architecture of the applications.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Model View Controller \(MVC\)](04_Essentials/model-view-controller-mvc-91f2334.md)

</td>
</tr>
<tr>
<td valign="top">

navigation: internal, external, outbound, inbound

</td>
<td valign="top">

-   **Internal Navigation**

    Internal navigation is triggered by SAP Fiori elements to the detail page. You remain within the list report, object page, or a sub object page. It does not involve any xAppState navigation.

-   **External Navigation**

    This navigation uses SAP Fiori launchpad navigation and is done using the Semantic Object-Action configuration. It uses the xAppState navigation to pass the current source context.

-   **Outbound Navigation**

    This navigation takes a user away to a target app.

-   **Inbound Navigation**

    This navigation is done into an app. User can navigate into the analytical list page, list report or an object page.


For more information, see xAppState.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Configuring Navigation](06_SAP_Fiori_Elements/configuring-navigation-a424275.md) 

</td>
</tr>
<tr>
<td valign="top">

navigation entity

</td>
<td valign="top">

Navigation entity refers to the other entities associated with the given entity set. The associated entity has more detailed information about the objects associated with the main object. For example, the `SalesOrder` entity might have `SalesOrderItems` entity as the navigation entity set. It can be a 1:n association \(1 `SalesOrder` can have n `SalesOrderItems` associated with it\), or a 1:1 association \(1 `SalesOrder` can have only 1 associated `PurchaseOrder`\).

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

notepad control

</td>
<td valign="top">

A control that is defined on the fly without a library definition or running generation steps.

</td>
<td valign="top">

SAPUI5/OpenUI5 

</td>
<td valign="top">

[Developing Controls](09_Developing_Controls/developing-controls-8dcab00.md) 

</td>
</tr>
<tr>
<td valign="top">

OData

</td>
<td valign="top">

OData \(Open Data Protocol\) is a standard protocol that defines best practices for building and consuming an interface to backend systems over the web.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

OData model

</td>
<td valign="top">

A model implementation for the Open Data \(OData\) Web Protocol format.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[OData V2 Model](04_Essentials/odata-v2-model-6c47b2b.md#loio6c47b2b39db9404582994070ec3d57a2)

[OData V4 Model](04_Essentials/odata-v4-model-5de13cf.md)

</td>
</tr>
<tr>
<td valign="top">

OPA5

</td>
<td valign="top">

OPA5 is an API for SAPUI5 controls. It hides asynchronicity and eases access to SAPUI5 elements. This makes OPA especially helpful for testing user interactions, integration with SAPUI5, navigation, and data binding.

</td>
<td valign="top">

SAPUI5/OpenUI5 

</td>
<td valign="top">

[Integration Testing with One Page Acceptance Tests \(OPA5\)](04_Essentials/integration-testing-with-one-page-acceptance-tests-opa5-2696ab5.md)

</td>
</tr>
<tr>
<td valign="top">

paginator buttons

</td>
<td valign="top">

Paging buttons in the object page header toolbar.

They allow users to navigate to the previous or next object page shown in the list report.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Object Page Elements](06_SAP_Fiori_Elements/object-page-elements-645e27a.md) 

</td>
</tr>
<tr>
<td valign="top">

property

</td>
<td valign="top">

A **property** has a name and an associated data type. It has a well-defined default value expressed as a literal of that data type. Properties are accessible to application code via the element's API as getters and setters, but are also used by a control's renderer in a read-only way.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Essentials](04_Essentials/essentials-ec699e0.md)

</td>
</tr>
<tr>
<td valign="top">

SAPUI5 repository upload and download reports

</td>
<td valign="top">

Alternative for the team repository provider, with similar functionality.

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](05_Developing_Apps/the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md)

</td>
</tr>
<tr>
<td valign="top">

right-to-left \(RTL\) text directionality

</td>
<td valign="top">

*The `dir` attribute is used to set the base direction of text for display. It is essential for enabling HTML in right-to-left scripts such as Arabic, Hebrew, Syriac, and Thaana. Numerous different languages are written with these scripts, including Arabic, Hebrew, Pashto, Persian, Sindhi, Syriac, Dhivehi, Urdu, Yiddish, etc.* \(Quote from w3c.org\)

</td>
<td valign="top">

`w3c.org`

</td>
<td valign="top">

[HTML Text Directionality](http://www.w3.org/TR/html4/struct/dirlang.html)

</td>
</tr>
<tr>
<td valign="top">

resource model

</td>
<td valign="top">

Used to bind texts of a control to language-dependent resource bundle properties.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Resource Model](04_Essentials/resource-model-91f122a.md#loio91f122a36f4d1014b6dd926db0e91070)

</td>
</tr>
<tr>
<td valign="top">

section

</td>
<td valign="top">

A section represents a top level grouping of the object page facets that can be seen below the header. A section can have subsections within it. Each of these subsections can then have a facet associated with them that is rendered as a form, table or a chart. Alternatively a section can have no subsections under it. In such cases a facet is availble that holds the form, table or a chart.

For more information, see facet.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Defining and Adapting Sections](06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md) 

</td>
</tr>
<tr>
<td valign="top">

semantic key fields

</td>
<td valign="top">

Semantic key fields are fields from the application tables that have a unique value assigned by the application logic. Such fields are usually not marked as key fields at the database level, that is why there is no enforcement for uniqueness from a database perspective. However, the business logic makes sure that there can be only unique values assigned to this field for every instance of the object. Applications mark such fields as semantic key fields using annotations.

For example: A `SalesOrder` entity might have a `SalesOrderID` field as a semantic key field.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Handling Semantic Key Fields](06_SAP_Fiori_Elements/handling-semantic-key-fields-aa2793c.md) 

</td>
</tr>
<tr>
<td valign="top">

service

</td>
<td valign="top">

A service is code that delivers one or more functionalities or capabilities on the backend system, such as, the retrieval of data or execution of a series of actions. The code can be reused for various purposes by different client applications.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

single SAPUI5 repository

</td>
<td valign="top">

The SAPUI5 ABAP repository consists of *n* single SAPUI5 repositories, each represented by an individual BSP application \(with specific characteristics\) in the BSP repository.

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](05_Developing_Apps/the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md)

</td>
</tr>
<tr>
<td valign="top">

SAP Fiori elements

</td>
<td valign="top">

App developers can use SAP Fiori elements to create SAP Fiori applications based on OData services and annotations requiring no JavaScript UI coding. An app based on SAP Fiori elements uses predefined template views and controllers that are provided centrally, so no application-specific view instances are required. The SAPUI5 runtime interprets metadata and annotations of the underlying OData service and creates the corresponding views for the SAP Fiori app at startup.

The predefined view templates and controllers ensure UI design consistency across similar apps. Additionally, the metadata-driven development model significantly reduces the amount of frontend code per app, so the developer can focus on the business logic.

SAP Fiori elements comprise templates for "List Report", "Object Page", and "Overview Page".

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[Developing Apps with SAP Fiori Elements](06_SAP_Fiori_Elements/developing-apps-with-sap-fiori-elements-03265b0.md)

</td>
</tr>
<tr>
<td valign="top">

scalable vector graphics \(SVG\)

</td>
<td valign="top">

*SVG is a markup language for describing two-dimensional graphics applications and images, and a set of related graphics script interfaces* \(Quote from w3c.org\)

</td>
<td valign="top">

`w3c.org`

</td>
<td valign="top">

[W3C SVG](https://www.w3.org/Graphics/SVG/)

</td>
</tr>
<tr>
<td valign="top">

side effects

</td>
<td valign="top">

Side effects allow applications to refresh entire controls \(for example, entire table\) or specific properties whenever a **source** property is updated.

For example, when user updates **Quantity** in the frontend, applications can configure side effects to ensure that **Discount rate** is refreshed so that the new discount \(based on the updated quantity\) is reflected in the UI.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Side Effects](06_SAP_Fiori_Elements/side-effects-18b17bd.md) 

</td>
</tr>
<tr>
<td valign="top">

synchronous \(sync\) processing

</td>
<td valign="top">

Synchronous processing keeps the current browser thread until the task is finished. The UI is not updated and no other tasks can be done in parallel. Consider using asynchronous processing for loading files and executing long-running code.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

synchronous action

</td>
<td valign="top">

A synchronous action is one that the backend executes immediately after the user triggers it. Until the execution is complete, the user is blocked from performing any other actions on the UI.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

SAPUI5 text repository

</td>
<td valign="top">

Part of the SAPUI5 ABAP repository; only to be used as a fallback mechanism if translation using properties files is not possible

</td>
<td valign="top">

SAPUI5 only

</td>
<td valign="top">

[The SAPUI5 ABAP Repository and the ABAP Back-End Infrastructure](05_Developing_Apps/the-sapui5-abap-repository-and-the-abap-back-end-infrastructure-91f3467.md)

</td>
</tr>
<tr>
<td valign="top">

text arrangement

</td>
<td valign="top">

This annotation property controls the information shown on the interface for a field value of ID-type or ID field value, as shown here:

****


<table>
<tr>
<th valign="top">

To Show

</th>
<th valign="top">

Property for textArrangement Annotation

</th>
<th valign="top">

Example

</th>
</tr>
<tr>
<td valign="top">

Only the text

</td>
<td valign="top">

Text Only

</td>
<td valign="top">

Germany

</td>
</tr>
<tr>
<td valign="top">

Both the text and the ID in a specific order

</td>
<td valign="top">

TextLast

</td>
<td valign="top">

001 \(Germany\)

</td>
</tr>
<tr>
<td valign="top">

Both the text and the ID in a specific order

</td>
<td valign="top">

TextFirst

</td>
<td valign="top">

Germany \(01\)

</td>
</tr>
</table>



</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Further Features of the Field](06_SAP_Fiori_Elements/further-features-of-the-field-f49a0f7.md) 

</td>
</tr>
<tr>
<td valign="top">

view

</td>
<td valign="top">

An application unit containing the control definitions for the user interface layer in the application, or in other words: defines how the user interface looks like.

</td>
<td valign="top">

SAPUI5/OpenUI5

</td>
<td valign="top">

[Views](04_Essentials/views-91f27e3.md)

</td>
</tr>
<tr>
<td valign="top">

wdi5

</td>
<td valign="top">

It is Webdriver.IO service, designed to run cross-platform end-to-end tests on a SAPUI5 applications, with selectors compatible to OPA5.

</td>
<td valign="top">

SAPUI5/OpenUI5 

</td>
<td valign="top">

[Testing](04_Essentials/testing-7cdee40.md) 

</td>
</tr>
<tr>
<td valign="top">

xAppState

</td>
<td valign="top">

It is the external app state that represents the state of the source app, as passed to the target app while navigating. It includes all the context from the source app, such as filter values, values from selected table rows, page context. However, it optionally includes the presentation aspects, such as sort order of the table in the source app.

For more information, see navigation: internal, external, outbound, inbound.

</td>
<td valign="top">

SAP Fiori elements 

</td>
<td valign="top">

[Configuring External Navigation](06_SAP_Fiori_Elements/configuring-external-navigation-1d4a0f9.md) 

</td>
</tr>
</table>

