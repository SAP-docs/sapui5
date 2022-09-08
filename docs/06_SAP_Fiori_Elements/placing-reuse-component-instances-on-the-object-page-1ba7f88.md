<!-- loio1ba7f888dbf04121a62965b664496616 -->

# Placing Reuse Component Instances on the Object Page

Each reuse component instance defined for an object page belonging to an SAP Fiori elements-based app is realized by a section.



<a name="loio1ba7f888dbf04121a62965b664496616__section_k55_d1t_d4b"/>

## Additional Features in SAP Fiori Elements for OData V2

Each reuse component instance defined for an object page belonging to an SAP Fiori elements-based app is realized by a section that contains a subsection which in turn contains the content of the reuse component.

By default, these sections are added to the end of the object page in the same order as the reuse component instances are defined in the manifest. You can use the SAPUI5 Visual Editor to move these sections.



### Adding a Reuse Component as a Subsection to an Existing Section

You can add a reuse component to any existing section as a final subsection, using the manifest property `"leadingSectionIdOrPath"` to link it with the desired section. In the annotations, collection facets are used with their IDs, and reference facets are used with their annotation paths. This means you need to provide either the ID or the path of the required facet as a value to this property. During templating, the reuse component is attached as a subsection to the section. See an example manifest below:

> ### Sample Code:  
> ```
> "embeddedComponents": {
>                     "tableTest": {
>                         "id":"tableTest",
>                         "componentName": "STTA_MP.reuseComponents.tableTest",
>                         "title": "{{SalesPriceReuse}}",
>                         "leadingSectionIdOrPath": "GeneralInformation",
>                         "settings": {
>                             "navigationProperty": "to_ProductSalesPrice"
>                         }
>                     }
>                 }
> ```



### Grouping Reuse Components into a Single Section

You can group reuse components into a single section. Each reuse component has an ID. You can choose one to be the leading component, and the others can be grouped with it. See the example manifest below.

Use the `"groupTitle"` property for the title of the grouped reuse components. If there is no title, use the existing title as the group \(section\) title. If the configuration is incorrect, for example, if a reuse component that has already been used, is used in a grouping, the fallback solution is to show it as a separate section.

> ### Sample Code:  
> ```
> "embeddedComponents": {
>                     "stateTest": {
>                         "id": "stateTest",
>                         "componentUsage": "stateTest",
>                         "title": "{{stateReuse}}",
>                         "groupTitle":"{{reuseGroupTitle}}"
>                     },
>                     "situationsTest": {
>                         "id": "situationsTest",
>                         "componentName": "STTA_MP.reuseComponents.situationsTest",
>                         "title": "{{situationsReuse}}",
>                         "settings": {
>                             "productKey": "{ProductForEdit}"
>                         },
>                         "leadingSectionIdOrPath": "stateTest",
>                     }
>                 }
> ```

Reuse components grouped into a subsection in a existing section can be moved within the section, using the SAP Visual Editor. You can move all reuse components grouped together as a single section within the section.



### Hiding Reuse Components via API

You can use the extension API `SetSectionHidden` to hide reuse components. Use this API to hide only reuse components, not to hide other sections.

`sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI.SetSectionHidden` accepts only one Boolean argument, either `"true"` or `"false"`.

Call this API in the component.js of the reusable components.

> ### Sample Code:  
> ```
> function fnRegisterOnPageDataLoaded(oExtensionAPI){
>         oExtensionAPI.attachPageDataLoaded(function(oEvent){
>             var oContextData = oEvent.context.getObject();
>             (oExtensionAPI.setSectionHidden || jQuery.noop)(oContextData.ProductCategory !== "Notebooks"); 
>         });
>     }
> ```



### Refreshing Reuse Components

Reuse components expose a `stRefresh` function which is called by the SAP Fiori elements framework to refresh the component. You can trigger it using the manifest property `stRefreshTrigger`.

For example, if the reuse component is to react to the value change of more than one property, such as a price change, then annotate a side effect and add the target property`PriceTrigger`, as shown in the sample below.

This can also be achieved via a function import, by annotating a side effect against a function import.

> ### Sample Code:  
> Trigger refresh when changing the value of a property
> 
> ```
> "embeddedComponents": {        
>           "priceComponentEmbedding": {         
>              "id": "priceComponentEmbedding",         
>              "componentUsage": "priceComponentUsage",         
>              "title": "{{I18N_KEY_FOR_PRICE_COMPONENT_TITLE}}",
>              "settings": {
>                   "stRefreshTrigger": "{Price}"
>              }                 
>        },        
> 
> ```

> ### Sample Code:  
> Trigger refresh when changing the values of one of the properties
> 
> ```
> "embeddedComponents": {        
>           "priceComponentEmbedding": {         
>              "id": "priceComponentEmbedding",         
>              "componentUsage": "priceComponentUsage",         
>              "title": "{{I18N_KEY_FOR_PRICE_COMPONENT_TITLE}}",
>              "settings": {
>                   "stRefreshTrigger": "{Price}{Supplier}"
>              }                 
>        },        
> 
> ```

> ### Sample Code:  
> Trigger refresh when changing the values of a combination of properties
> 
> ```
> "embeddedComponents": {        
>           "priceComponentEmbedding": {         
>              "id": "priceComponentEmbedding",         
>              "componentUsage": "priceComponentUsage",         
>              "title": "{{I18N_KEY_FOR_PRICE_COMPONENT_TITLE}}",
>              "settings": {
>                   "stRefreshTrigger": "{= ${Price}+${Supplier}}"
>              }                 
>        },        
> 
> ```



<a name="loio1ba7f888dbf04121a62965b664496616__section_i1j_2bt_d4b"/>

## Additional Features in SAP Fiori Elements for OData V4

Each reuse component instance defined for an object page belonging to an SAP Fiori elements-based app is realized by a section that contains a custom subsection which in turn contains the content of the reuse component.

These sections, like any other custom sections, can be placed as described in the topic [Extension Points for Sections on the Object Page](extension-points-for-sections-on-the-object-page-92ad996.md).



### Adding a Reuse Component

You place reuse components into empty custom subsections using the SAPUI5 routing and the control ID of the subsection. This is possible either in an existing section, or as a new custom section. The reuse component itself is then included as a separate target in your SAPUI5 routing and its name has to be added as another target in the route to your object page.


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Value



</th>
</tr>
<tr>
<td valign="top">

type



</td>
<td valign="top">

component



</td>
</tr>
<tr>
<td valign="top">

controlAggregation



</td>
<td valign="top">

blocks



</td>
</tr>
<tr>
<td valign="top">

clearControlAggregation



</td>
<td valign="top">

true



</td>
</tr>
<tr>
<td valign="top">

name



</td>
<td valign="top">

path to your reuse component



</td>
</tr>
<tr>
<td valign="top">

parent



</td>
<td valign="top">

name of your object page



</td>
</tr>
<tr>
<td valign="top">

controlID



</td>
<td valign="top">

ID of your custom subsection



</td>
</tr>
<tr>
<td valign="top">

options \> settings



</td>
<td valign="top">

any settings of your reuse component



</td>
</tr>
</table>

In the example below, two reuse components are added to the same object page: one to an existing section \(`mySection`\) and one as a new section.

> ### Sample Code:  
> ```
> 
> { 
>    "sap.ui5": { 
>       "routing": { 
>          "routes": [ 
>             { 
>                "pattern": "myEntitySet({key}):?query:", 
>                "name": "myObjectPage", 
>                "target": ["myObjectPage", "ReuseComponent", "ReuseComponent2"] 
>             } 
>          ], 
>          "targets": { 
>             "myObjectPage": { 
>                "type": "Component", 
>                "id": "myObjectPage", 
>                "name": "sap.fe.templates.ObjectPage", 
>                "options": { 
>                   "settings": { 
>                      "content": { 
>                         "body": { 
>                            "sections": { 
>                               "mySection": { 
>                                  "subSections": { 
>                                     "ReuseContainer": { 
>                                        "title": "{i18n>reuseTitle}", 
>                                        "controlId": "firstReuseContainer", 
>                                        "position": { 
>                                           "placement": "After", 
>                                           "anchor": "someSubSection" 
>                                        } 
>                                     } 
>                                  } 
>                               }, 
>                               "ReuseComponentContainer": { 
>                                  "position": { 
>                                     "placement": "Before", 
>                                     "anchor": "mySubSection" 
>                                  }, 
>                                  "title": "Reuse Container", 
>                                  "subSections": { 
>                                     "ReuseContainer": { 
>                                        "controlId": "secondReuseContainer" 
>                                     } 
>                                  } 
>                               } 
>                            } 
>                         } 
>                      } 
>                   } 
>                } 
>             }, 
>             "ReuseComponent": { 
>                "type": "Component", 
>                "id": "Reuse", 
>                "name": "path/to/reuseComponent", 
>                "options": { 
>                   "settings": { 
>                      "exampleSettings": "{somePropertyName}" 
>                   } 
>                }, 
>                "parent": "myObjectPage", 
>                "controlId": "firstReuseContainer", 
>                "controlAggregation": "blocks", 
>                "clearControlAggregation": true 
>             }, 
>             "ReuseComponent2": { 
>                "type": "Component", 
>                "id": "Reuse2", 
>                "name": "path/to/reuseComponent2", 
>                "options": { 
>                   "settings": { 
>                      "exampleSettings": "{somePropertyName}" 
>                   } 
>                }, 
>                "parent": "myObjectPage", 
>                "controlId": "secondReuseContainer", 
>                "controlAggregation": "blocks", 
>                "clearControlAggregation": true 
>             } 
>          } 
>       } 
>    } 
> } 
> 
> ```

For more information, see [Adding a Section to an Object Page](adding-a-section-to-an-object-page-a357047.md).



### Hiding Reuse Components

A reuse component is bound to the subsection it is placed in. To hide a reuse component, the corresponding subsection must be hidden as described in the topic [Extension Points for Subsections on the Object Page](extension-points-for-subsections-on-the-object-page-ce8d468.md).



### Refreshing Reuse Components

A reuse component refreshes itself, based on its exposed properties. If a certain component property is changed due to a page change, then the component must react in the corresponding setter method of this property.

