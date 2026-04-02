<!-- loioa3da17cf792241bf9236f8891a99ab49 -->

# Placing Reuse Component Instances on the Object Page

You can add a reuse component instance to the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Placing Reuse Component Instances on the Object Page](placing-reuse-component-instances-on-the-object-page-1ba7f88.md).

Each reuse component instance defined for an object page belonging to an SAP Fiori elements-based app is realized by a section that contains a subsection which in turn contains the content of the reuse component. By default, these sections are added to the end of the object page in the same order as the reuse component instances are defined in the manifest. You can use the Adaptation Editor to move these sections.



<a name="loioa3da17cf792241bf9236f8891a99ab49__section_k55_d1t_d4b"/>

## Adding a Reuse Component as a Subsection to an Existing Section

You can add a reuse component to any existing section as a final subsection, using the manifest property `"leadingSectionIdOrPath"` to link it with the desired section. In the annotations, collection facets are used with their IDs, and reference facets are used with their annotation paths. This means you need to provide either the ID or the path of the required facet as a value to this property. During templating, the reuse component is attached as a subsection to the section. See an example manifest below:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "component": {
>     "name": "sap.suite.ui.generic.template.ObjectPage",
>     "settings": {
>         "sections": {
>             "ReuseComponentSection": {
>                 "type": "com.sap.vocabularies.UI.v1.ReferenceFacet",
>                 "component": {
>                     "name": "your.component.namespace",
>                     "settings": {
>                         "key": "value"
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



<a name="loioa3da17cf792241bf9236f8891a99ab49__section_swg_dqs_ghc"/>

## Grouping Reuse Components into a Single Section

You can group reuse components into a single section. Each reuse component has an ID. You can choose one to be the leading component, and the others can be grouped with it. See the example manifest below.

Use the `"groupTitle"` property for the title of the grouped reuse components. If there is no title, use the existing title as the group \(section\) title. If the configuration is incorrect, for example, if a reuse component that has already been used, is used in a grouping, the fallback solution is to show it as a separate section.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "embeddedComponents": {
>     "stateTest": {
>         "id": "stateTest",
>         "componentUsage": "stateTest",
>         "title": "{{stateReuse}}",
>         "groupTitle": "{{reuseGroupTitle}}"
>     },
>     "situationsTest": {
>         "id": "situationsTest",
>         "componentName": "STTA_MP.reuseComponents.situationsTest",
>         "title": "{{situationsReuse}}",
>         "settings": {
>             "productKey": "{ProductForEdit}"
>         },
>         "leadingSectionIdOrPath": "stateTest"
>     }
> }
> ```

Reuse components grouped into a subsection in a existing section can be moved within the section, using the Adaptation Editor. You can move all reuse components grouped together as a single section within the section.



<a name="loioa3da17cf792241bf9236f8891a99ab49__section_bh2_fqs_ghc"/>

## Hiding Reuse Components Through API

You can use the extension API `SetSectionHidden` to hide reuse components. Use this API to hide only reuse components, not to hide other sections.

`sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI.SetSectionHidden` accepts only one Boolean argument, either `true` or `false`.

Call this API in the component.js of the reusable components.

> ### Sample Code:  
> ```
> 
> function fnRegisterOnPageDataLoaded(oExtensionAPI){
>     oExtensionAPI.attachPageDataLoaded(function(oEvent){
>         var oContextData = oEvent.context.getObject();
>         (oExtensionAPI.setSectionHidden || jQuery.noop)(oContextData.ProductCategory !== "Notebooks"); 
>     });
> }
> ```



<a name="loioa3da17cf792241bf9236f8891a99ab49__section_xyq_gqs_ghc"/>

## Refreshing Reuse Components

Reuse components expose a `stRefresh` function which is called by the SAP Fiori elements framework to refresh the component. You can trigger it using the manifest property `stRefreshTrigger`.

For example, if the reuse component is to react to the value change of more than one property, such as a price change, then annotate a side effect and add the target property `PriceTrigger`, as shown in the following code samples:

This can also be achieved through a function import, by annotating a side effect against a function import.

> ### Sample Code:  
> Trigger refresh when changing the value of a property
> 
> ```
> 
> "embeddedComponents": {
>     "priceComponentEmbedding": {
>         "id": "priceComponentEmbedding",
>         "componentUsage": "priceComponentUsage",
>         "title": "{{I18N_KEY_FOR_PRICE_COMPONENT_TITLE}}",
>         "settings": {
>             "stRefreshTrigger": "{Price}"
>         }
>     }
> }      
> 
> ```

> ### Sample Code:  
> Trigger refresh when changing the value of one of the properties
> 
> ```
> 
> "embeddedComponents": {
>     "priceComponentEmbedding": {
>         "id": "priceComponentEmbedding",
>         "componentUsage": "priceComponentUsage",
>         "title": "{{I18N_KEY_FOR_PRICE_COMPONENT_TITLE}}",
>         "settings": {
>             "stRefreshTrigger": "{Price}{Supplier}"
>         }
>     }
> }
> 
> ```

> ### Sample Code:  
> Trigger refresh when changing the values of a combination of properties
> 
> ```
> 
> "embeddedComponents": {
>     "priceComponentEmbedding": {
>         "id": "priceComponentEmbedding",
>         "componentUsage": "priceComponentUsage",
>         "title": "{{I18N_KEY_FOR_PRICE_COMPONENT_TITLE}}",
>         "settings": {
>             "stRefreshTrigger": "{= ${Price}+${Supplier}}"
>         }
>     }
> }
> ```



<a name="loioa3da17cf792241bf9236f8891a99ab49__section_zr5_hqs_ghc"/>

## Setting Section Title to the Control within Reuse Component

You can use the `setAsTitleOwner` extension API to hide the title of the section or subsection. This API replaces the title of the required control with the section or subsection title.

**Scenario 1: Reuse component contains a table or chart**

-   Define the `initialise` method of a table or chart in the reuse component

    > ### Sample Code:  
    > ```
    > <st:SmartTable id="SalesPriceFacetID" initialise="SalesPriceInitialise"/>
    > ```

-   Define the same event in the controller and call the `setAsTitleOwner` extension API with the parameter `SmartTable` or `SmartChart`

    > ### Sample Code:  
    > ```
    > 
    > SalesPriceInitialise: function(oEvent) {
    >     var oSmartTable = oEvent.getSource();
    >     var oExtensionAPI = extensionAPI.getExtensionAPI(oSmartTable);
    >     oExtensionAPI.setAsTitleOwner(oSmartTable);
    > }
    > ```


**Scenario 2: Reuse component with other controls**

You must call the `setAsTitleOwner` extension API with the control as the parameter, during the `onInit` event of the controller. This allows you to hide the title of the section or subsection containing the reuse component, and merge it with the title of the control.

> ### Note:  
> The control must have a header or text property.

For more information, see [Adding Titles to Object Page Tables](adding-titles-to-object-page-tables-f0d679d.md).

