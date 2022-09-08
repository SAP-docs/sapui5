<!-- loiob807931a353649859a92f7c7bf1111e3 -->

# Inline Definition and Instantiation of Fragments

Instead of defining fragments externally in a separate file, they can also be defined inline and can be instantiated immediately.

The content definition and also the instantiation syntax are just the same compared to an instantiation in a program. However, instead of the "fragmentName" the "fragmentContent" needs to be given. This feature can both be used for prototyping or for dynamic fragment composition or for loading fragment content from sources which are not accessible by the normal module loading mechanism. In general, inline definition of fragments plays only a minor role.

JS fragment definitions can be done both inline and within a separate file without any changes. Example inline definitions of XML and HTML fragments are displayed in the following code examples:



## Example of an Inline XML Fragment

```xml
// define the XML fragment as a string (or load it from anywhere)
var myXml = '<Panel xmlns="sap.m" text="Hello World"><Button text="Hello World"></Button></Panel>';

// use this XML string as "fragmentContent"
sap.ui.require(["sap/ui/core/Fragment"], function(Fragment){
    Fragment.load({
        type: "XML",
        definition: myXml
    }).then(function(oFragment){
        // put the Fragment content into the document
        oFragment.placeAt('content');
    });
});
```



## Example of an Inline HTML Fragment

```html
// define the HTML fragment as a string (or load it from anywhere)
var myHtml = '<div data-sap-ui-type="sap.m.Button" data-text="Hello World"></div>';

// use this HTML string as "fragmentContent"
sap.ui.require(["sap/ui/core/Fragment"], function(Fragment){
    Fragment.load({
        type: "HTML",
        definition: myHtml
    }).then(function(oFragment){
        // put the Fragment content into the document
        oFragment.placeAt('content');
    });
});
```

**Related Information**  


[Programmatically Instantiating JS Fragments](programmatically-instantiating-js-fragments-3cff5d0.md "For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.")

