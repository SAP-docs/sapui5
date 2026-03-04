<!-- loio6314fcd2510648fbaad3cee8a421030d -->

# Developing Reuse Components

Follow these guidelines when developing reuse components that are to be included as sections in object pages.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_dlh_hyx_mfb"/>

## General Guidelines

As a provider of a reuse component that is used in several apps, create a library which can be included by the apps.

When providing a one-time reuse component, provide the reuse component within the same project that implements the application that uses the reuse component.

> ### Note:  
> -   The reuse component can define \(API\) properties on its own. These properties can be used to communicate with the application that embeds the reuse component. However, certain property names are predefined by SAP Fiori elements. These properties have specific semantics and cannot be used to communicate with the embedding application.
> 
> -   SAP Fiori elements for OData V4 does not provide an eventing API for reuse components to support draft handling \(creating or saving a draft entity\).
> 
> -   You can implement reuse components using your own internal OData model, which is independent of the embedding application. With SAP Fiori elements for OData V4, applications can embed reuse components that are based on an own SAP Fiori elements for OData V2 model. Provide a name for the internal model to avoid conflicts with the propagated unnamed OData model used by the application. For more information, see the [Model Propagation](developing-reuse-components-6314fcd.md#loio6314fcd2510648fbaad3cee8a421030d__section_dzb_4th_4fb)section in this topic.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_v1w_kyx_mfb"/>

## Reuse Components and Reuse Component Instances

A **reuse component** is a software artifact that can be used to embed a UI module into an object page . You can embed the same reuse component several times in the same app or even in one object page.

A **reuse component instance** is one occurrence of a reuse component within an application.

This means that the implementation of a reuse component must not store any information that should be considered at instance level, in a singleton object.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_jz2_jzx_mfb"/>

## Handling Properties

A reuse component may expose properties that can be used to communicate with the embedding application. For each of these properties, setter and getter methods are created automatically. The embedding application does not communicate with the reuse component instance by directly calling these methods. It does not even have access to the reuse component instance. For more information, see [Including Reuse Components on an Object Page](including-reuse-components-on-an-object-page-d869d7a.md).



### Overriding the Setters

To consume the properties, the reuse component can override the setters. If the reuse component is to react through coding to changes of its properties, override the setter method of the corresponding property within the reuse component.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_dzb_4th_4fb"/>

## Model Propagation

The unnamed model \(the OData model\) and a JSON model named 'ui' that are defined in the application are propagated to the reuse component.

> ### Note:  
> Additional JSON models which are used internally may also be propagated to the reuse component. However, the reuse component must not access these models in any way.

The binding context for the unnamed model is already preset. By default, if the reuse component is used in an object page, the binding context of the object page is propagated to the reuse component. The embedding application may add a relative binding to the definition of the embedding. This modifies the binding context of the reuse component accordingly.

> ### Note:  
> The propagation of the unnamed model is especially important if the data that is accessed by the reuse component is provided by the same OData service that is used by the embedding application.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_asg_s23_4fb"/>

## General Structure of a Reuse Component Project

A reuse component that can be used within a SAP Fiori elements-based application cannot be used in a freestyle SAPUI5 application. Provide two separate components that refer to a common implementation.

**Stable IDs**

For some purposes it is helpful if the IDs of the controls used within a reuse component instance are stable. As a prerequisite, the ID of the view hosting the content of the reuse component is stable. You should define this view declaratively. Specify the view within the `manifest.json` file of the reuse component.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Developing Reuse Components](developing-reuse-components-ba619bc.md).

