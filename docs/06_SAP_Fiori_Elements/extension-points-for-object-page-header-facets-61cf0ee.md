<!-- loio61cf0ee828824903907464c80dd0d88c -->

# Extension Points for Object Page Header Facets

You can define application-specific header facets using annotations, but in some cases it might be necessary to integrate components in the front end that are not available with annotations.



<a name="loio61cf0ee828824903907464c80dd0d88c__section_svv_3r5_rnb"/>

## Adding Custom Header Facets

You have 2 options for including custom elements into the header area of an object page:

-   You can include complete header facets next to the existing annotation-based header facets. This option provides flexibility when creating your own XML fragment and the corresponding controller implementation.

-   You can extend an already existing header facet that displays a group of fields with your own custom field.


You can find further details in the sections below.

> ### Note:  
> You can only place 'Custom Header Facets' in the root collection of the header facet definition. You cannot place it in further-nested collection facet definitions.



### Using Custom Header Facets

Custom header facets provide the following features:

-   adding free-style headers through an `xmlfragment` definition

-   positioning relative to existing header elements defined by header facets or other custom headers

-   using a localized header facet title and subtitle


![](images/Custom_Header_Facet_8dd9f08.png)

To define a header facet on UI level – you do this if you want to add a custom look and feel, or to use controls that are not supported by default – you can extend the manifest of the corresponding object page with a content-based configuration or an annotation-based configuration. You define header facets by using a custom key that you later reference by providing the following properties:

-   a title and subtitle \(both optional\)

-   the UI5 fragment \(template\)

-   a second UI fragment for the editable header facet \(optional\) and

-   its relative position to an anchor facet


> ### Note:  
> Settings in the content-based configuration block have a higher priority and therefore overwrite settings in the annotation-based configuration block for identical keys.

> ### Sample Code:  
> Content-Based Configuration
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "SalesOrderManageObjectPage": {
>                     "options": {
>                         "settings": {
>                             "content": {
>                                 "header": {
>                                     "facets": {
>                                         "CustomHeaderFacet1": {
>                                             "template": "SalesOrder.ext.CustomHeaderFacetColumnChart",
>                                             "stashed": false,
>                                             "visible": "{= %{OverallSDProcessStatus} === 'C'}",
>                                             "position": {
>                                                 "placement": "After",
>                                                 "anchor": "NetValueDataHeader"
>                                             },
>                                             "flexSettings": {
>                                                 "designtime": "not-adaptable-visibility"
>                                             }
>                                         },
>                                         "CustomHeaderFacet2": {
>                                             "template": "SalesOrder.ext.CustomHeaderFacetDataPoint",
>                                             "templateEdit": "SalesOrder.ext.CustomHeaderFacetDataPointEdit",
>                                             "title": "{i18n>customHeaderFacet2-CustomDataPoint}",
>                                             "subTitle": "{i18n>customHeaderFacet2-CarRental}",
>                                             "requestGroupId": "LongRunners",
>                                             "stashed": false,
>                                             "position": {
>                                                 "placement": "After",
>                                                 "anchor": "CustomHeaderFacet1"
>                                             }
>                                         }
>                                     }
>                                 }
>                             },
>                             "controlConfiguration": {
>                                 "@com.sap.vocabularies.UI.v1.HeaderFacets": {
>                                    ... see below ...
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> Annotation-Based Configuration
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "SalesOrderManageObjectPage": {
>                     "options": {
>                         "settings": {
>                             "content": {
>                                 "header": {
>                                    ... see above ...
>                                 }
>                             },
>                             "controlConfiguration": {
>                                 "@com.sap.vocabularies.UI.v1.HeaderFacets": {
>                                     "facets": {
>                                         "CustomHeaderFacet2": {
>                                             "template": "SalesOrder.ext.CustomHeaderFacetOverwritten",
>                                             "title": "Custom Error",
>                                             "subTitle": "Should never appear!",
>                                             "stashed": false,
>                                             "position": {
>                                                 "placement": "After",
>                                                 "anchor": "CustomHeaderFacet1"
>                                             }
>                                         },
>                                         "CustomHeaderFacet3": {
>                                             "template": "SalesOrder.ext.CustomHeaderFacetHarveyBall",
>                                             "templateEdit": "SalesOrder.ext.CustomHeaderFacetHarveyBallEdit",
>                                             "title": "{i18n>customHeaderFacet2-CustomProgress}",
>                                             "stashed": false,
>                                             "position": {
>                                                 "placement": "After",
>                                                 "anchor": "CustomHeaderFacet2"
>                                             }
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

In this example, the second header facet with the key `CustomHeaderFacet2` occurs twice: once in the content-based configuration and a second time in the annotation-based configuration. Since the 1st configuration has a higher priority, the second entry will be skipped at runtime and you won't see the fragment `SalesOrder.ext.CustomHeaderFacetOverwritten` as a header facet.



### Settings for Custom Header Facets

You can define your custom header facet by implementing an `xmlfragment` and using the following properties:

**Properties of a Custom Header Facet**


<table>
<tr>
<th valign="top">

Property Name

</th>
<th valign="top">

Supported Values

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

template

</td>
<td valign="top">

Module Path of "XMLFragment"

</td>
<td valign="top">

Defining the target fragment follows the syntax of defining a fragment via `Fragment.load`.

</td>
</tr>
<tr>
<td valign="top">

templateEdit\*

</td>
<td valign="top">

Module Path of the editable "XMLFragment"

</td>
<td valign="top">

The fragment for the editable version of the header facet.

</td>
</tr>
<tr>
<td valign="top">

title\*

</td>
<td valign="top">

Text | Binding Expression

</td>
<td valign="top">

Title of the header facet \(usually a binding path to an i18n text\). If you do not specify it here, you should add the title in the `xmlfragment`.

</td>
</tr>
<tr>
<td valign="top">

subTitle\*

</td>
<td valign="top">

Text | Binding Expression

</td>
<td valign="top">

Subtitle of the header facet \(usually a binding path to an i18n text\).

</td>
</tr>
<tr>
<td valign="top">

stashed\*

</td>
<td valign="top">

Boolean

</td>
<td valign="top">

Defines if the header facet is stashed in personalization. The default setting is `false`.

</td>
</tr>
<tr>
<td valign="top">

visible\*

</td>
<td valign="top">

Boolean | Binding Expression

</td>
<td valign="top">

Defines if the header facet is displayed in the header area. The default setting is `true`.

</td>
</tr>
<tr>
<td valign="top">

position

</td>
<td valign="top">

 

</td>
<td valign="top">

The properties in this group define the position of the header facet relative to another facet.

</td>
</tr>
<tr>
<td valign="top">

position.placement\*

</td>
<td valign="top">

"Before" | "After"

</td>
<td valign="top">

Defines the placement: either "Before" or "After" \(default\) the referenced facet \(anchor\).

</td>
</tr>
<tr>
<td valign="top">

position.anchor

</td>
<td valign="top">

Facet Key

</td>
<td valign="top">

The key of another header facet to be used as the placement anchor. Header facets defined through the `Facet` annotation can be referenced by its `FacetKey`.

</td>
</tr>
<tr>
<td valign="top">

requestGroupId

</td>
<td valign="top">

"Heroes"

| "Decoration"

| "Workers"

| "LongRunners"

</td>
<td valign="top">

Enables the grouping of back-end requests retrieving the header facet data in different $batch groups according to their loading time. You should separate long runners from fast runners to optimize the overall user experience. For more information, see [Defining the Loading Behavior of Object Pages](defining-the-loading-behavior-of-object-pages-ac03570.md).

</td>
</tr>
<tr>
<td valign="top">

flexSettings

</td>
<td valign="top">

 

</td>
<td valign="top">

Defines the key user adaptation behavior of the header facet.

</td>
</tr>
<tr>
<td valign="top">

flexSettings.designtime

</td>
<td valign="top">

"Default"

| "not-adaptable-visibility"

| "not-adaptable"

| " not-adaptable-tree"

| "not-adaptable-visibility"

| "not-removable"

</td>
<td valign="top">

Defines which settings are available for key user adaptation at design time. For example, the value "not-adaptable-visibility" means that all actions that influence the visibility are disabled. Remove and make visible are not possible, but moving the header facet is enabled.

</td>
</tr>
</table>

\* = optional

**Using a Custom Header Facet to Display a Harvey Ball Micro Chart**

![](images/Custom_Header_Facet_Harvey_Ball_Micro_Chart_2517ecf.png)

The values are retrieved through value binding and the title is defined in the `manifest.json` file.

> ### Sample Code:  
> Custom Header Using a Harvey Ball Micro Chart
> 
> ```
> <core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mc="sap.suite.ui.microchart">
>     <VBox id="CustomHeaderFacetHarveyBall" displayInline="true">
>         <mc:HarveyBallMicroChart size="S" total="100" totalScale="%" press="press">
>             <mc:items>
>                 <mc:HarveyBallMicroChartItem
>                     fraction="{= ((100 > 0) ? ((${Progress} > 100) ? 100 : ((${Progress} &lt; 0) ? 0 : (${Progress} / 100 * 100))) : 0) }"
>                     color="Good"
>                     fractionScale="%"
>                 />
>             </mc:items>
>         </mc:HarveyBallMicroChart>
>     </VBox>
> </core:FragmentDefinition>
> ```

**Using a Custom Editable Header Facet to Edit the Values Used in a Custom Header Facet**

![](images/Using_a_Custom_Editable_Header_Facet_to_Edit_the_Values_Used_in_a_Custom_Header_Facet_d39631d.png)

In edit mode, header facets are displayed in a form. For the editable custom header facet, you need to structure the content by using `sap.ui.layout.FormElement`. The `FormElements` will then be displayed inside a `FormContainer` with the title defined in the `manifest.json` file.

> ### Sample Code:  
> Editable version of a header facet using `FormElement` and `macro:Field`
> 
> ```
> <core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:f="sap.ui.layout.form" xmlns:macro="sap.fe.macros">
>         <f:FormElement label="Number of Items">
>             <f:fields>
>                 <macro:Field id="NumberItems" metaPath="fieldControlType_item" />
>             </f:fields>
>         </f:FormElement>
>         <f:FormElement label="Classification">
>             <f:fields>
>                 <macro:Field id="IncotermsClassification" metaPath="IncotermsClassification" />
>             </f:fields>
>         </f:FormElement>
> </core:FragmentDefinition>
> ```



## Adding Custom Header Fields

Custom header fields provide the following features:

-   adding free-style headers through an `xmlfragment` definition

-   positioning relative to existing fields on a field group or other custom fields

-   using a localized header facet title


> ### Note:  
> Custom fields are supported only as read-only. To have editable fields for the information provided through custom fields, you need to extend the "Edit Header Section".

![](images/Custom_Header_Field_8c26693.png)



### Using Custom Header Fields

To define a field in a header field – you do this if you want to add a custom look and feel, or to use controls that are not supported by default – you can extend the manifest of the corresponding object page with an annotation-based configuration. You define custom header fields by using a custom key that you later reference by providing the following properties:

-   a label \(optional\)

-   the UI5 fragment \(template\) and

-   its relative position to an anchor facet


> ### Sample Code:  
> Annotation-Based Configuration
> 
> ```
> {
>    "sap.ui5": {
>       "routing": {
>          "targets": {
>             "LineItemsObjectPage": {
>                "options": {
>                   "settings": {
>                      "controlConfiguration": {
>                         "@com.sap.vocabularies.UI.v1.FieldGroup#ObjectPageHeaderData": {
>                            "fields": {
>                               "CustomField1": {
>                                  "label": "{i18n>ObjectPageHeaderFacetFieldLabel1}",
>                                  "template": "ManageItems.ext.CustomHeaderFacetFieldGroupForm",
>                                  "position": {
>                                     "placement": "Before",
>                                     "anchor": "DataField::headerDate"
>                                  }
>                               }
>                            }
>                         }
>                      }
>                   }
>                }
>             }
>          }
>       }
>    }
> }
> ```

You reference the `fieldGroup` through the annotation path with the corresponding qualifier: "`@com.sap.vocabularies.UI.v1.FieldGroup#ObjectPageHeaderData`". The qualifier can be found in the annotation as shown below:

> ### Sample Code:  
> Metadata Annotation
> 
> ```
> <Schema>
>     <Annotations Target="<PageName>">
>         <Annotation Term="UI.FieldGroup" Qualifier="ObjectPageHeaderData">
>             ... records
>         </Annotation>
>     </Annotations>
> </Schema>
> ```



### Settings for Custom Header Fields

You can define your custom header fields by implementing an `xmlfragment` and using the following properties:

**Properties of Custom Header Fields**


<table>
<tr>
<th valign="top">

Property Name

</th>
<th valign="top">

Supported Values

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

key

</td>
<td valign="top">

Module Path of "XMLFragment"

</td>
<td valign="top">

Defining the target fragment follows the syntax of defining a fragment via `Fragment.load`.

</td>
</tr>
<tr>
<td valign="top">

label\*

</td>
<td valign="top">

Text | Binding Expression

</td>
<td valign="top">

Label of the field \(usually a binding path to an i18n text\). If you do not specify it here, you should add a label in the `xmlfragment`.

</td>
</tr>
<tr>
<td valign="top">

template

</td>
<td valign="top">

Module Path of "XMLFragment"

</td>
<td valign="top">

Defining the target fragment follows the syntax of defining a fragment via `Fragment.load`.

</td>
</tr>
<tr>
<td valign="top">

position

</td>
<td valign="top">

 

</td>
<td valign="top">

The properties in this group define the position of the header facet relative to another facet.

</td>
</tr>
<tr>
<td valign="top">

position.placement\*

</td>
<td valign="top">

"Before" | "After"

</td>
<td valign="top">

Defines the placement: either "Before" or "After" \(default\) the referenced facet \(anchor\).

</td>
</tr>
<tr>
<td valign="top">

position.anchor

</td>
<td valign="top">

Facet Key

</td>
<td valign="top">

The key of another header field to be used as the placement anchor. Header fields defined through the field group, including a property annotation, can be referenced by the corresponding property name.

</td>
</tr>
</table>

\* = optional



### Finding the Right Key for the Anchor

For the correct positioning of your custom elements, you need to identify an anchor element. For more information, see [Finding the Right Key for the Anchor](finding-the-right-key-for-the-anchor-6ffb084.md).



## Live Example: Custom Header Facet with `MicroChart` and `FormElement` Building Blocks

You can explore and work with the coding yourself. For more information and live examples, see the SAP Fiori development portal at [Standard Floorplans - Extensions - Extensions for Object Pages - Custom Header Facet](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/floorplanObjectPage/customHeaderFacet).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Extension Points for Object Page Header Facets](extension-points-for-object-page-header-facets-51d8373.md).

