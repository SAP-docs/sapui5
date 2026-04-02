<!-- loio8dcab0011d274051808f959800cabf9f -->

# Developing Controls

You can create own content for SAPUI5. To develop controls in JavaScript, you can either extend existing controls or create new ones.

> ### Note:  
> If you want to contribute to SAPUI5, you have to consider our guidelines and recommendations with regard to, for example, product standards, file names and encoding.

As a control developer, you create or modify libraries and their components, i.e. controls and types. You define the set of properties your control provides as well as events or aggregations. A major task is the implementation of a control-specific renderer, which knows how to create suitable HTML markup for a given control instance, taking its current state into account. A renderer is written in JavaScript and produces HTML output which is styled by means of CSS. Such style sheets are another important part of a library.

Custom controls can be defined within a component or application without requiring a library definition. When you want to develop several controls for reuse in different applications, we recommend creating a library containing your custom controls instead. Control libraries have additional features, such as automatic support for theming and right-to-left languages, but the implementation of the controls is the same as for controls defined directly within your app or component.

> ### Note:  
> This functionality is not restricted to controls. It can also be used to create or extend arbitrary objects, such as components, that are derived from `sap.ui.base.ManagedObject`. For more information, see [API Reference: `sap.ui.base.ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject). 

