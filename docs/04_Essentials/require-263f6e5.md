<!-- loio263f6e5a915f430894ee290040e7e220 -->

# require

The `template:require` attribute can be used at the root element of an XML template view or fragment. You can specify a list of required modules as Unified Resource Names, similar to `sap.ui.require`, and assign aliases to them using a JSON-like syntax. The aliases can then be used to access the modules in the same way `<template:alias>` works. \(This requires that the view is loaded asynchronously.\)

> ### Note:  
> The aliases can be used for formatter references \(first `text` element in the code sample\) as well as for function calls inside an expression binding \(second `text` element in the code sample\).



## "require" Template

```xml

<mvc:View
  controllerName="sap.ui.core.sample.ViewTemplate.scenario.Detail"
  template:require="{Helper: 'sap/ui/core/sample/ViewTemplate/scenario/Helper',
    AnnotationHelper: 'sap/ui/model/odata/AnnotationHelper'}"
  xmlns:mvc="sap.ui.core.mvc"
  xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
<template:alias name="bar" value="Helper.bar">
<Text text="{formatter: 'bar', path: '/foo'}"/>
<Text text="{= bar(${/foo}) }"/>

```

For compatibility reasons, especially if the view is loaded synchronously, the `template:require` attribute may contain a space-separated list of module names for `jQuery.sap.require`. These modules will then be required before processing. You have to access them via their global names.

`sap.ui.model.odata.AnnotationHelper` is automatically available.



```
<mvc:View
  controllerName="sap.ui.core.sample.ViewTemplate.scenario.Detail"
  template:require="sap.ui.core.sample.ViewTemplate.scenario.Helper"
  xmlns:mvc="sap.ui.core.mvc"
  xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
```

