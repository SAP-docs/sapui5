<!-- loiob15e6afc5ae74227a661dc6ff104bf80 -->

# Extension Points

Extension points can be used in XML templating to extend the standard with custom content.

The extension point has a default content which is used unless the extension point is replaced via customizing. The extension point name can result from a binding, including an expression binding which evaluates to a constant. If the extension point is to be replaced by an XML fragment, the extension point element is replaced by the fragment's XML DOM and preprocessing takes place on the DOM as well. All currently available variable names and aliases are inherited into the fragment as usual. You get the same debug output as for fragment instructions, and you see the customized fragment name there.

```xml

<!-- expression binding just to showcase dynamic names -->
<core:ExtensionPoint name="{:= 'HeaderInfo' }">
    <form:SimpleForm>
        <form:title>
            <core:Title text="HeaderInfo"/>
        </form:title>
        <template:with path="entityType>com.sap.vocabularies.UI.v1.HeaderInfo">
            <!-- ... -->
        </template:with>
    </form:SimpleForm>
</core:ExtensionPoint>

```

**Related Information**  


[View Extension](../08_Extending_SAPUI5_Applications/view-extension-403c050.md "SAPUI5 uses extension points for extending standard views with custom content. The assignment of a custom view to an extension point is done in component customizing.")

