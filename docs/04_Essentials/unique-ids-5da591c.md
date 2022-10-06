<!-- loio5da591c5a5a54740948acfe56b22fbc3 -->

# Unique IDs

You can use a unique ID for a fragment that will be used as a prefix for all controls in a fragment instance.

In SAPUI5, IDs are either automatically generated or given as string constants by the application developer.

In MVC views, another type of reusable components, all IDs that are given as static strings inside the declarative views \(XML, HTML, JSON\) are automatically prefixed with the view ID. For JS views and for controls created in the controller code of declarative views, no automated prefixing exists. Instead, we recommend using the `View.createId()` method to prefix the ID and ensure there are no ID collisions even when the view is used multiple times within the same page.

The method `View.byId()` is used to handle these prefixed IDs.

Fragments, however, are meant to be a more light-weight concept of separating and reusing UI parts. What's more, there are no fragment instances involved which could have IDs and handle ID prefixing helper functions \(in contrast to view instances\). For this reason, stable IDs in fragments are used "as is" by default, meaning they are not prefixed to make them unique. If no ID is given, it will be generated. However, if a fragment is intended to be used more than once within one application, the prefixing mechanism can still be used by giving an ID when instantiating the fragment.

The basic principle is as follows: When a control ID is defined, declarative views add a prefix and the code in views should add a prefix. Fragments also add a prefix if they have a defined ID.

To get rid of the prefixes, the instance method `View.byId()` can be used with the static method `sap.ui.core.Fragment.createID()` if required, that is, if a fragment added a prefix.

> ### Note:  
> Do **not** rely on the specific prefixing syntax because it may change at some point. Always use methods like `byId()` and `createId()`.

**Related Information**  


[IDs in Declarative XML or HTML Fragments](ids-in-declarative-xml-or-html-fragments-0715706.md "If a fragment with a control ID is instantiated twice without giving an ID, a duplicate ID error occurs.")

[IDs in JS Fragments](ids-in-js-fragments-896fa9a.md "The fragment logic of JS fragments cannot influence the IDs of controls that are created in the createContent() method.")

[IDs of Fragments in Views](ids-of-fragments-in-views-f10bf70.md "For fragments that are used within declarative views, generated IDs are not prefixed.")

