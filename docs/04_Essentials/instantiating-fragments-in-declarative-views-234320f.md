<!-- loio234320f8d8ee45b39c60893116d60351 -->

# Instantiating Fragments in Declarative Views

Example how both types of fragments can be instantiated in an XML view.



## Context

In XML views, fragments are used like regular controls, or more precisely, like views.

The following code example shows an XML view that includes both types of fragments, that is an XML fragment and a JS fragment. Each type is instantiated once without a given ID and once with a given ID. These fragment references basically work like import statements including the fragment content controls.

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" controllerName="testdata.fragments.XMLViewController" >
    <!-- Runtime resource name of the fragment: my/useful/SimpleUiPart.fragment.xml -->
    <core:Fragment               fragmentName="my.useful.SimpleUiPart" type="XML" />
    <core:Fragment id="xmlInXml" fragmentName="my.useful.SimpleUiPart" type="XML" />

    <!-- Runtime resource name of the fragment: my/useful/UiPartX.js -->
    <core:Fragment              fragmentName="module:my/useful/UiPartX" />
    <core:Fragment id="jsInXml" fragmentName="module:my/useful/UiPartX" />

</mvc:View>
```

**Related Information**  


[Unique IDs](unique-ids-5da591c.md "You can use a unique ID for a fragment that will be used as a prefix for all controls in a fragment instance.")

[Using Other Objects Instead of Controllers](using-other-objects-instead-of-controllers-c24ea6d.md "For the instantiation of fragments, the oController object must not necessarily be a controller. It can also be another object.")

