<!-- loiof302a97eaccf40c0abfec4ccbb62cc5e -->

# Enabling the Related Apps Button

You can enable the *Related Apps* button on the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Enabling the Related Apps Button](enabling-the-related-apps-button-8dcfe2e.md).

By default, the *Related Apps* button is disabled on object pages created with the object page template. When enabled, the button allows you to provide a link to any of the semantic object's navigation targets.

  
  
**Related Apps Button**

![](images/Related_Apps_Button_35f231c.png "Related Apps Button")

The *Related Apps* button is displayed on the object page if you set the `showRelatedApps` parameter to `true` in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> {
>     "sap.ui.generic.app": {
>         "pages": [
>             {
>                 "entitySet": "SEPMRA_C_PD_Product",
>                 "component": {
>                     "name": "sap.suite.ui.generic.template.ListReport",
>                     "list": true
>                 },
>                 "pages": [
>                     {
>                         "entitySet": "SEPMRA_C_PD_Product",
>                         "component": {
>                             "name": "sap.suite.ui.generic.template.ObjectPage",
>                             "settings": {
>                                 "showRelatedApps": true
>                             }
>                         },
>                         "pages": [
>                             {
>                                 "navigationProperty": "to_ProductText",
>                                 "entitySet": "SEPMRA_C_PD_ProductText",
>                                 "component": {
>                                     "name": "sap.suite.ui.generic.template.ObjectPage"
>                                 }
>                             }
>                         ]
>                     }
>                 ]
>             }
>         ]
>     }
> }
> ```

If the user selects this button, the navigation targets of the given semantic object are displayed. The semantic object is taken from the app that's currently open \(see the hash in the app's URL\). Apps with the same semantic object but different actions are shown in the popover.



<a name="loiof302a97eaccf40c0abfec4ccbb62cc5e__section_kd5_msk_dkb"/>

## Hiding Actions for a Semantic Object

You can hide actions of a semantic object in the specific context of an SAP Fiori elements app. To do so, you can use the `SemanticObjectUnavailableActions` annotation to define a list of actions that can be excluded in the context of a specific app.

For example, you can hide the `displayFactSheet` action associated with related app as shown here:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotations Target="SalesOrderService.SalesOrderManage"> 
>     …
>     <Annotation Term="Common.SemanticObjectUnavailableActions"> 
>         <Collection> 
>             <String>displayFactSheet</String> 
>         </Collection> 
>     </Annotation>
>     <Annotation Term="Common.SemanticObject" String="SalesOrder"/>
>     …
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotations
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> Common.SemanticObjectUnavailableActions : ['displayFactSheet']
> 
> 
> ```



<a name="loiof302a97eaccf40c0abfec4ccbb62cc5e__section_ysw_m3l_h4b"/>

## Adding Additional Links to Related Apps

Application developers can add additional links under the "Related Apps" button of the object page header. The links originate from the additional semantic objects defined in the `manifest.json` file.

> ### Note:  
> Links from additional semantic object are only considered if you have set the `showRelatedApps` parameter to `true` in the `manifest.json` file.



<a name="loiof302a97eaccf40c0abfec4ccbb62cc5e__section_off_j3n_ghc"/>

## Adding Semantic Objects as Related Apps

You can display multiple semantic objects under the *Related Apps* button in the `manifest.json` file.

You can configure the `relatedAppsSettings` parameter in the `manifiest.json` file as shown in the example below:

> ### Sample Code:  
> `manifiest.json`
> 
> ```
> 
> {
> ```

With this setting, all related apps from the app's URL and from the `manifest.json` file are displayed on the UI under the *Related Apps* button.



<a name="loiof302a97eaccf40c0abfec4ccbb62cc5e__section_bck_l3n_ghc"/>

## Adding Semantic Objects with Required Action on Related App Settings

You can display multiple semantic objects under the *Related Apps* button in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> {
>     "sap.ui.generic.app": {
>         "pages": [
>             {
>                 "entitySet": "SEPMRA_C_PD_Product",
>                 "component": {
>                     "name": "sap.suite.ui.generic.template.ListReport",
>                     "list": true
>                 },
>                 "pages": [
>                     {
>                         "entitySet": "SEPMRA_C_PD_Product",
>                         "component": {
>                             "name": "sap.suite.ui.generic.template.ObjectPage",
>                             "settings": {
>                                 "showRelatedApps": true,
>                                 "relatedAppsSettings": {
>                                     "0": {
>                                         "semanticObject": "EPMProduct"
>                                     }
>                                 }
>                             }
>                         },
>                         "pages": [
>                             {
>                                 "navigationProperty": "to_ProductText",
>                                 "entitySet": "SEPMRA_C_PD_ProductText",
>                                 "component": {
>                                     "name": "sap.suite.ui.generic.template.ObjectPage"
>                                 }
>                             }
>                         ]
>                     }
>                 ]
>             }
>         ]
>     }
> }
> ```

You must ensure that you define the same semantic object list object-key and there corresponding `semanticObject` value.

In the code sample for `"semanticObject" : "EPMProduct"`, `semanticObjectAction` is not defined. In this case, all the `semanticObjectAction` excluding the ones with `SemanticObjectUnavailableActions` annotation are displayed in the related apps list.

If `semanticObjectAction` list is defined in the manifest as shown for `"semanticObject": "STTA_WD20"`, then only the ones defined in the list are shown in the related apps. In this case, `SemanticObjectUnavailableActions` annotation is not considered.

If the `semanticObjectAction` list is defined in the manifest as an empty object such as `"semanticObjectAction":{}` provided in the sample code, then no action from the semantic object of the current application is considered.



<a name="loiof302a97eaccf40c0abfec4ccbb62cc5e__section_vz4_m3n_ghc"/>

## Overriding Related App Settings With Extension API

If the same project is deployed under multiple semantic objects or actions, and the application needs to display related apps based on the deployed semantics environment, you can override the related app settings using `modifyRelatedAppsSettings` extension API.

See the following sample code about modifying related app settings based on the deployed semantic environment:

> ### Sample Code:  
> ```
> 
> modifyRelatedAppsSettings: function (oRelatedAppSetting, sCurrentSemanticObject, sEntityTypeName) {
>     if (sCurrentSemanticObject === "EPMProduct") {
>         oRelatedAppSetting = {
>             ...oRelatedAppSetting,
>             // adding additional semantic object and action to the existing related app settings.
>             "EPMSalesOrder": {
>                 semanticObject: "EPMSalesOrder",
>                 semanticObjectAction: {
>                     0: {
>                         action: "display"
>                     }
>                 }
>             }
>         }
>     }
>     return oRelatedAppSetting;
> }
> 
> ```

