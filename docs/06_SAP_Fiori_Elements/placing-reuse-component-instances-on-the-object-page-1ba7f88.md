<!-- loio1ba7f888dbf04121a62965b664496616 -->

# Placing Reuse Component Instances on the Object Page

Each reuse component instance defined for an object page belonging to an SAP Fiori elements-based app is realized by a section.

Each reuse component instance defined for an object page belonging to an SAP Fiori elements-based app is realized by a section that contains a custom subsection which in turn contains the content of the reuse component.

These sections, like any other custom sections, can be placed as described in the topic [Extension Points for Sections on the Object Page](extension-points-for-sections-on-the-object-page-92ad996.md).



<a name="loio1ba7f888dbf04121a62965b664496616__section_i1j_2bt_d4b"/>

## Adding a Reuse Component

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

For more information, see [Adding a Custom Section to an Object Page](adding-a-custom-section-to-an-object-page-a357047.md).



## Hiding Reuse Components

A reuse component is bound to the subsection it is placed in. To hide a reuse component, the corresponding subsection must be hidden as described in the topic [Extension Points for Subsections on the Object Page](extension-points-for-subsections-on-the-object-page-ce8d468.md).



## Refreshing Reuse Components

A reuse component refreshes itself, based on its exposed properties. If a certain component property is changed due to a page change, then the component must react in the corresponding setter method of this property.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Placing Reuse Component Instances on the Object Page](placing-reuse-component-instances-on-the-object-page-a3da17c.md).

