<!-- loio2421a2c9fa574b2e937461b5313671f0 -->

# Namespaces in XML Views

The names of the SAPUI5 control libraries and the related subpackages are mapped to XML namespaces.

One of the required namespaces can be defined as the default namespace \(`xmlns="..."`\). The control tags for this namespace do not need a prefix.

The `View` tag is required and in the example below, the `sap.ui.core.mvc` namespace is defined with alias `mvc`. Technically, you can define any alias for namespaces. However, the convention is to use the last part of the full package name.

A control can be located in a subpackage of a control library, for example `sap.ui.layout.form.Form` is located in the `sap.ui.layout` library, but the full package name is `sap.ui.layout.form`. You have to specify this subpackage as a separate XML namespace, even if `sap.ui.layout` is already defined as namespace.

```xml
<mvc:View
     xmlns:mvc="sap.ui.core.mvc"
     xmlns:layout="sap.ui.layout"
     xmlns:form="sap.ui.layout.form"
     xmlns="sap.m">
</mvc:View>
```

