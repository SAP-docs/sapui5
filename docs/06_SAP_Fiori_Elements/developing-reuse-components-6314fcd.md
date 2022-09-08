<!-- loio6314fcd2510648fbaad3cee8a421030d -->

# Developing Reuse Components

Follow these guidelines when developing reuse components that are to be included as sections in object pages.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_dlh_hyx_mfb"/>

## General Guidelines

As a provider of a reuse component that is used in several apps, create a library which can be included by the apps.

When providing a one-time reuse component provide the reuse component within the same project that implements the application that uses the reuse component.

> ### Note:  
> The reuse component can define \(API\) properties on its own. These properties can be used to communicate with the application that embeds the reuse component. However, certain property names are predefined by SAP Fiori elements. These properties have specific semantics and cannot be used to communicate with the embedding application.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_v1w_kyx_mfb"/>

## Reuse Components and Reuse Component Instances

A **reuse component** is a software artifact that can be used to embed a UI module into an object page . You can embed the same reuse component several times in the same app or even in one object page.

A **reuse component instance** is one occurrence of a reuse component within an application.

This means that the implementation of a reuse component must not store any information that should be considered at instance level, in a singleton object.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_jz2_jzx_mfb"/>

## Handling Properties

A reuse component may expose properties that can be used to communicate with the embedding application. For each of these properties, setter and getter methods are created automatically. The embedding application does not communicate with the reuse component instance by directly calling these methods. It does not even have access to the reuse component instance. For more information, see [Including Reuse Components on an Object Page](including-reuse-components-on-an-object-page-d869d7a.md) .



### Overriding the Setters

To consume the properties, the reuse component can override the setters. If the reuse component is to react via coding to changes of its properties, override the setter method of the corresponding property within the reuse component.



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

A reuse component that can be used within a SAP Fiori elements-based application cannot be used in a freestyle application. Provide two separate components that refer to a common implementation.

**Stable IDs**

For some purposes it is helpful if the IDs of the controls used within a reuse component instance are stable. As a prerequisite, the ID of the view hosting the content of the reuse component is stable. You should define this view declaratively. Specify the view within the `manifest.json` of the reuse component.



## Additional Features in SAP Fiori Elements for OData V2

Technically, a reuse component is a subclass of [`UIComponent`](https://ui5.sap.com/#/api/sap.ui.core.UIComponent) which calls [`ReuseComponentSupport.mixInto`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.extensionAPI.ReuseComponentSupport/methods/sap.suite.ui.generic.template.extensionAPI.ReuseComponentSupport.mixInto) within its `init()` method.

> ### Note:  
> -   The reuse component must not define any method starting with the prefix st or \_st. The only exceptions are the methods defined in this documentation. These methods have to be overwritten so you can use the functions provided by SAP Fiori elements.
> 
> -   If you want to use the component model functionality provided by SAP Fiori elements, note that the method name `getComponentModel` is reserved by SAP Fiori elements.



### Component Model

To consume the properties, the reuse component can override the setters or use the component model.

When calling the `ReuseComponentSupport.mixInto` method, the reuse component can provide an optional second \(string\) parameter. If this parameter is not faulty, it is used as the name of the JSON model this is automatically attached to the reuse component. You can retrieve this model from the reuse component by calling the `getComponentModel()` method that is automatically added to the reuse component.

The component model may contain arbitrary properties. However, if any of the reuse component's properties is changed, the corresponding property in the component model is changed accordingly. This can be used in particular for declaratively using the property values within binding definitions. You can also achieve this by creating a corresponding property binding and attach a change handler to this binding.

> ### Note:  
> If a property in the JSON model is modified by other means, this change is not transferred to the corresponding property of the reuse component. If you want to transfer the change, you can use the `bTwoWaySync` parameter of the `ReuseComponentSupport.mixInto` method. Handle this functionality with care, as there is a risk of accidentally modifying data in the enclosing application.
> 
> The reuse component may also use the component model to handle additional properties that aren't exposed as properties of the reuse component. These properties are controlled exclusively by the reuse component. They cannot be used to communicate with the embedding application. However, they can be used for data transfer between declarative and programmatic parts of the implementation of the reuse component.



### Predefined Properties

Although some properties are predefined by the SAP Fiori elements framework, the reuse component must declare them in the metadata. The values are then provided by the SAP Fiori elements framework.

Property names with the prefix st are reserved for the SAP Fiori elements framework. These properties are supported:

-   `uiMode`

    The possible values for this property are "Create", "Display", and "Edit". Note that this property should not provide information for setting up back-end requests \(for example, whether the active or the draft version of the object is currently displayed\). Use this property only to provide the correct mode for controls within the reuse component \(for example, input fields\).

-   `semanticObject`

    The semantic object displayed on the current object page.

-   `stIsAreaVisible`

    This Boolean property is set to true if the reuse component is in the visible area of the screen.

    We recommended postponing any performance-critical action if the value of this property is false. In this case, the action should be performed only if the value of this property is true \(if it is still necessary\). This type of system behavior is called lazy loading.


The following example shows a snippet of a reuse component that uses the predefined properties and an additional property `documentNumber` that is used to pass a key to the reuse component:

> ### Sample Code:  
> ```
> sap.ui.define([
>  "sap/ui/core/UIComponent",
>  "sap/suite/ui/generic/template/extensionAPI/ReuseComponentSupport"
> ], function(UIComponent, ReuseComponentSupport) {
>  "use strict";
> 
>  /* Definition of the reuse component */
>  return UIComponent.extend("MyReuseComponent", {
>   metadata: {
>    manifest: "json",
>    library: "myLibrary",   
>    properties: {
>     /* Standard properties for reuse components */
> 
>     uiMode: {
>      type: "string",
>      group: "standard"
>     },
>     semanticObject: {
>      type: "string",
>      group: "standard"
>     },
>     stIsAreaVisible: {
>      type: "boolean",
>      group: "standard"
>     },
>     
>     /* Component specific properties */
>    
>     documentNumber: {
>      type: "string",
>      group: "specific",
>      defaultValue: ""
>     }
>    }
>   },
>   
>   // Standard life time event of a component. Used to transform this component into a reuse component for Fiori Elements
>   init: function(){
>     //Transform this component into a reuse component for Fiori Elements:
>     ReuseComponentSupport.mixInto(this, "myPropertiesModelName");    
>     // Defensive call of init of the super class:
>     (UIComponent.prototype.init || jQuery.noop).apply(this, arguments);
>   }
>  });
> });
> 
> ```

Now the reuse component can declaratively use all the properties defined above, as shown in the following example:

> ### Sample Code:  
> ```
> 
> <sfo:SmartForm xmlns:sfo="sap.ui.comp.smartform"
>     editable="{= ${myPropertiesModelName>/uiMode} !== 'Display' }"
> </sfo:SmartForm>
> 
> ```

If the reuse component is to adapt to changes of the property programmatically, two alternative techniques can be used. They are shown in the following code snippet:

> ### Sample Code:  
> ```
> 
> sap.ui.define([
>  "sap/ui/core/UIComponent",
>  "sap/suite/ui/generic/template/extensionAPI/ReuseComponentSupport"
> ], function(UIComponent, ReuseComponentSupport) {
>  "use strict";
> 
> 
>  /* Definition of the reuse component */
>  return UIComponent.extend("MyReuseComponent", {
>   metadata: {
>    manifest: "json",
>    library: "myLibrary",   
>    properties: {
>     /* Standard properties for reuse components */
> 
> 
>     uiMode: {
>      type: "string",
>      group: "standard"
>     },
>     semanticObject: {
>      type: "string",
>      group: "standard"
>     },
>     stIsAreaVisible: {
>      type: "boolean",
>      group: "standard"
>     },
>      
>     /* Component specific properties */
>     
> 
>     documentNumber: {
>      type: "string",
>      group: "specific",
>      defaultValue: ""
>     }
>    }
>   },
>  
> 
>   // Technique 1: Redefine the predefined setter-method
>   setStIsAreaVisible: function(bIsAreaVisible){    
>    if (bIsAreaVisible !== this.getStIsAreaVisible()){     
>      this.setProperty("stIsAreaVisible", bIsAreaVisible); // ensure that the property is updated accordingly
>      // ... (any code that wants to consume the changed visibility of the reuse component)
>    }   
>   },  
>   
> 
>   // Standard life time event of a component. Used to transform this component into a reuse component for Fiori Elements and do some initialization
>   init: function(){
>    // Defensive call of init of the super class:
>    (UIComponent.prototype.init || jQuery.noop).apply(this, arguments);
>     //Transform this component into a reuse component for Fiori Elements:
>     ReuseComponentSupport.mixInto(this, "myPropertiesModelName");
>     // Technique 2: Attach to changes of the component model
>     var oMyPropertiesModel = this.getComponentModel();
>     var oPropertyBinding = oMyPropertiesModel.bindProperty("/documentNumber");
>     oPropertyBinding.attachChange(function(){
>       var sDocumentNumber = oMyPropertiesModel.getProperty("/documentNumber");
>       // ... (any code that wants to consume the changed document number)
>     }); 
>   }
>  });
> });
> 
> ```



### Change Events for the Reuse Components

For the implementation of the reuse component to be able to react to a change of the object key attached to the page it is embedded in , ensure that the model propagation has already taken place. The reuse component can then rely on the fact that the bindings of all controls have already been updated accordingly. In this case the reuse component can implement the `stRefresh(oModel, oBindingContext, oExtensionAPI)` method. This method is called if at least one of the following occurs:

-   A new binding context is defined for the embedding page

-   The binding context of the embedding page is forced to refresh

-   The key information for the embedding page changes


Note that method is called only after the model propagation to the reuse component.

The reuse component might also implement the `stStart(oModel, oBindingContext, oExtensionAPI)` method. This method is called at the same time as described for `stRefresh`, but `stStart` is only called once during the lifetime of the app. If both `stStart` and `stRefresh` have been implemented for the first occurrence of the specified events, `stStart` is called. For all other occurrences, `stRefresh` is called.

Note that the signature of the `stStart` and `stRefresh` methods are identical:

-   oModel is the standard OData model of this app

-   oBindingContext is the binding context of the current page. Note that this might be faulty, for example, if the reuse component is embedded on an object page that is currently in create mode in a non-draft app.

-   oExtensionAPI is the instance of the extension API attached to this reuse component \(instance\).


If the reuse component is to be used in change scenarios, we recommend implementing the `stRefresh` method. In this case, the framework might call this method to indicate that the reuse component should refresh its data \(even if the object instance displayed on the embedding object page did not change\).



### Lazy Loading and Refresh

The following coding example shows how lazy loading and the refresh function are combined:

> ### Sample Code:  
> ```
> 
> sap.ui.define([
>  "sap/ui/core/UIComponent",
>  "sap/suite/ui/generic/template/extensionAPI/ReuseComponentSupport"
> ], function(UIComponent, ReuseComponentSupport) {
>  "use strict";
> 
>  
> 
>  /* Definition of the Reuse Component */
>  return UIComponent.extend("MyReuseComponent", {
>   metadata: {
>    manifest: "json",
>    library: "myLibrary",   
>    properties: {
>     stIsAreaVisible: {
>      type: "boolean",
>      group: "standard"
>     },    
>   },
>  
> 
>   setStIsAreaVisible: function(bIsAreaVisible){    
>    if (bIsAreaVisible !== this.getStIsAreaVisible()){     
>      this.setProperty("stIsAreaVisible", bIsAreaVisible); // ensure that the property is updated accordingly
>      this.refreshImpl();
>    }   
>   },  
>    
> 
>   // Standard life time event of a component. Used to transform this component into a Reuse Component for Fiori Elements and do some initialization
>   init: function(){
>    // Defensive call of init of the super class:
>    (UIComponent.prototype.init || jQuery.noop).apply(this, arguments);
>     //Transform this component into a reuse component for Fiori Elements:
>     ReuseComponentSupport.mixInto(this);
>   },
> 
> 
> 
>   stRefresh: function(oModel, oBindingContext, oExtensionAPI) {
>     this.oModel = oModel;
>     this.oBindingContext = oBindingContext;
>     this.oExtensionAPI = oExtensionAPI;
>     this.refreshImpl();
>   },
>  
> 
>   refreshImpl: function(){
>      if (this.oBindingContext && this.getStIsAreaVisible()){
>        // ... (any code that loads the data for the Reuse Component according to this.oBindingContext)
>        this.oBindingContext = null;     
>      }
>   }
>  });
> });
> 
> ```



### Extension API

To each reuse component instance, an instance of the extension API is attached. This instance is a variant of the extension API which is provided for the corresponding [object page](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI) or [canvas page](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.Canvas.extensionAPI.ExtensionAPI). It is passed to the `stStart` and `stRefresh` method as a third parameter.

The `ReuseComponent.mixInto` method which has to be called by every reuse component within its `init()` method returns a Promise that resolves to this instance of the extension API.

Compared to the standard extension API attached to the current page, the extension API instance attached to the reuse component instance has the following modifications:

-   The `getNavigationController()` method provides a modified version of the [`NavigationController`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.extensionAPI.NavigationController) which is also able to navigate to the pages defined in the reuse component and shares a common communication object with these pages.

-   The `getCommunicationObject()` method, when called with no parameter \(or a number not greater 0 as a parameter\) behaves as usual. Calling `getCommunicationObject(1)` provides a communication object that can be used for communication with the pages defined in the reuse component. The subpages can retrieve this communication object via calling `getCommunicationObject()` \(without parameters\).

-   If the reuse component is embedded in an object page, the extension API has an additional `setSectionHidden(bHidden)` method that can be used to show or hide the section implemented by the reuse component instance.




### Reuse Components with Subpages

The embedding application needs to provide the definitions of the possible subpages within its manifest. That is, the provider of the reuse component has to publish a snippet that defines the subpages of the reuse component, and every consumer of the reuse component has to add this snippet to the declaration of his use of the reuse component. You can define additional pages for a reuse component. You can add them to the embedding app and use them to provide navigation within the reuse component.

The definition to be added within the definition of the reuse component must have the same structure as the one that is required for the normal way the subpages of an object page are defined within the pages structure of the manifest. See the following example for this:

> ### Sample Code:  
> ```
> 
> ...    
> "embeddedComponents": {        
>     "myComponentEmbedding": {         
>         "id": "myComponentEmbedding",         
>         "componentName": "theEmbeddedComponent",                  
>         "title": "{{I18N_KEY_FOR_REUSE_COMPONENT_TITLE}}",         
>         "settings": {  
>             "documentNumber": "{documentNumber}"
>             },         
>         "pages":{
>             // add sub-pages here
>         }
>     }
> }
> 
> ```



### Using Standard Object Pages as Subpages of a Reuse Component

Optimally, use a standard object page as a subpage for a reuse component. The manifest looks like this:

> ### Sample Code:  
> ```
> 
> ...     
> "embeddedComponents": {        
>     "myComponentEmbedding": {         
>         "id": "myComponentEmbedding",         
>         "componentName": "theEmbeddedComponent",                  
>         "title": "{{I18N_KEY_FOR_REUSE_COMPONENT_TITLE}}",         
>         "settings": {  
>             "theNavigationPropertyName": "myNavigationProperty"         },         
>         "pages":{
>                 "ObjectPage|myNavigationProperty":{           
>                 "navigationProperty": "myNavigationProperty",           
>                 "entitySet": "myDependingEntitySet",           
>                 "component": {            
>                     "name": "sap.suite.ui.generic.template.ObjectPage"          
>                 }          
>             }
>         }
>     }
> }
> 
> ```

There should be a navigation property called `myNavigationProperty` from the entity set of the object page hosting the reuse component, to `myDependingEntitySet`.

You need to explicitly trigger the navigation to the subpage. Use [`NavigationController.navigateInternal()`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.extensionAPI.NavigationController/methods/navigateInternal) for this purpose, as shown below:

> ### Sample Code:  
> ```
> 
> var oBindingContext = oEvent.getSource().getBindingContext();  // or any other way you have to get a binding context for the target page  
> var oNavigationController = oExtensionAPI.getNavigationController(); // oExtensionAPI is the instance of the extension api which has been discussed above
> var sNavigationProperty = this.getOwnerComponent().getTheNavigationPropertyName();   // retrieve the name of the navigation property (see comments below)
> var oNavigationData = {
>     navigationProperty: sNavigationProperty
> };
> oNavigationController.navigateInternal(oBindingContext, oNavigationData);
> 
> ```

The name of the navigation property \(in this case, `myNavigationProperty`\) must be available for the developer of the reuse component in order to trigger the navigation. However, this name is part of the OData service of the embedding application. To achieve a loose coupling, the developer of the reuse component does not need to hard-code this name. The reuse component should have a `theNavigationPropertyName` property which is used to transfer the name of the navigation property to the reuse component.



<a name="loio6314fcd2510648fbaad3cee8a421030d__section_a2z_kmt_d4b"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Note:  
> -   SAP Fiori elements for OData V4 currently does not provide an eventing API for reuse components to support draft handling \(creating or saving a draft entity\).
> 
> -   You can implement reuse components using your own internal OData model, which is independent of the embedding application. With SAP Fiori elements for OData V4, applications can embed reuse components that are based on an own SAP Fiori elements for OData V2 model. Provide a name for the internal model to avoid conflicts with the propagated unnamed OData model used by the application. For more information, see the section *Model Propagation* in this topic.

