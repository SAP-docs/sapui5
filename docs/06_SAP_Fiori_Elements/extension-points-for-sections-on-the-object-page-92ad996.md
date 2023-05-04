<!-- loio92ad9968e41748aeb74971f7a08a91c8 -->

# Extension Points for Sections on the Object Page

You define application-specific sections in the form of annotations. However, in some cases you might need to integrate components into the front end, for example charts or attachments.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

> ### Tip:  
> In SAP Fiori elements for OData V2, you use the term `facet` to add a section to the object page in the `manifest.json`.
> 
> In SAP Fiori elements for OData V4, you use the term `section` to add a section to the object page in the `manifest.json`.



<a name="loio92ad9968e41748aeb74971f7a08a91c8__section_dxf_rcd_14b"/>

## Additional Features in SAP Fiori Elements for OData V2

On the object page, you can use extension points to add additional sections in these places:

-   `BeforeFacet`: The extension is inserted before a given section.

-   `ReplaceFacet`: The extension is rendered instead of an existing section.

-   `AfterFacet`: The extension is inserted after a given section.


You need to specify the section in the form of its annotation path. In addition, you must specify the `entitySet` name, as the same annotation path may exist for various entity sets.

You add this information to the `manifest.json` file, as in these examples:

```

"extends": {
    "extensions": {
        "sap.ui.viewExtensions": {
	   "sap.suite.ui.generic.template.ObjectPage.view.Details":
      "BeforeFacet|SEPMRA_C_PD_Product|to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.BeforeFacetTest",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout before Product Text LineItem"
      }
     },
     "BeforeFacet|SEPMRA_C_PD_Product|to_ProductText::com.sap.vocabularies.UI.v1.LineItem|1": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.BeforeFacetTestNew",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout before Product Text LineItem",
          "key" : "1"
      }
     }
     "AfterFacet|SEPMRA_C_PD_Product|to_Supplier::com.sap.vocabularies.UI.v1.Identification": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.AfterFacetTest",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout after Supplier Identification"
      }
     },
     "AfterFacet|SEPMRA_C_PD_Product|to_Supplier::com.sap.vocabularies.UI.v1.Identification|1": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.AfterFacetTest",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout after Supplier Identification",
         "key": 1
      }
}
}

```

> ### Note:  
> You can specify either a view or a fragment contained in the additional section. Either way, you do not need to use the object page \(uxap\) tags `ObjectPageSection`, `subSections`, or `ObjectPageSubSection`. These definitions are already part of the template for the object page view. Additional sections are rendered if an extension exists.

For an example with step-by-step instructions, see [Adding a Section to an Object Page](adding-a-section-to-an-object-page-a357047.md).

For more information, see [View Extension](../08_Extending_SAPUI5_Applications/view-extension-403c050.md).



<a name="loio92ad9968e41748aeb74971f7a08a91c8__section_c4r_2fd_14b"/>

## Additional Features in SAP Fiori Elements for OData V4



### Using Custom Sections

Custom sections provide the following features:

-   adding arbitrary sections via an `xmlfragment` definition

-   positioning relative to sections defined by facets or other custom facets

-   using a localized section title


To define a section on UI level - you do this if you want to add a custom look and feel, or to use controls that are not supported by default - you can extend the settings of the corresponding object page in the `manifest.json` with a **content** block. You can enrich the body of the object page with additional sections. To do so, you define header facets by using a custom key that you later reference by providing the following properties:

-   a title

-   the UI5 fragment \(template\) and

-   its position


> ### Sample Code:  
> ```json
> {
>    "sap.ui5": {
>       "routing": {
>          "targets": {
>             "SalesOrderManageObjectPage": {
>                "options": {
>                   "settings": {
>                      "content": {
>                         "body": {
>                            "sections": {
>                               "customSection": {
>                                  "template": "SalesOrder.custom.CustomSection",
>                                  "title": "{i18n>customSection}",
>                                  "position": {
>                                     "placement": "Before",
>                                     "anchor": "SalesOrderItems"
>                                  }
>                               },
>                               "anotherCustomSection": {
>                                  "title": "Multiple Subsections",
>                                  "subSections": {
>                                      "firstSubSectionKey": {
>                                          "title": "First Subsection",
>                                          "template": "SalesOrder.custom.CustomFieldForm"
>                                      },
>                                      "secondSubSectionKey": {
>                                          "title": "Second Subsection",
>                                          "template": "SalesOrder.custom.CustomFieldForm2",
>                                          "position": {
>                                              "placement": "After",
>                                              "anchor": "firstSubSectionKey"
>                                          }
>                                      }
>                                  }
>                                  "position": {
>                                     "placement": "After",
>                                     "anchor": "customSection"
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



### Settings for Custom Sections

You can define your custom header fields by implementing an `xmlfragment` and using the following properties:

**Properties of a Custom Section**


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

"<module\_path\_to\_a\_fragment\>"



</td>
<td valign="top">

Defining the target fragment follows the syntax of defining a fragment via Fragment.load



</td>
</tr>
<tr>
<td valign="top">

title\*



</td>
<td valign="top">

"<text\_or\_binding\_expression\>"



</td>
<td valign="top">

Title of the section \(usually a binding path to an i18n text\)



</td>
</tr>
<tr>
<td valign="top">

position



</td>
<td valign="top">

 



</td>
<td valign="top">

Defines the position of the section relative to other sections.



</td>
</tr>
<tr>
<td valign="top">

position.placement



</td>
<td valign="top">

"Before" | "After"



</td>
<td valign="top">

Defines the placement: either "Before" or "After" \(default\) the anchor section.



</td>
</tr>
<tr>
<td valign="top">

position.anchor\*



</td>
<td valign="top">

 



</td>
<td valign="top">

The key of another section to be used as the placement anchor. Sections defined via the `Facet` annotation can be referenced by its `FacetId`.



</td>
</tr>
<tr>
<td valign="top">

visible



</td>
<td valign="top">

Boolean | Binding Expression



</td>
<td valign="top">

Defines if the section is displayed in the body of the object page. The default setting is true.



</td>
</tr>
<tr>
<td valign="top">

actions



</td>
<td valign="top">

Actions Object



</td>
<td valign="top">

Allows you to add actions placed by the framework to the custom \(sub-\)sections in the same format as described in [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md).



</td>
</tr>
</table>

\* = mandatory



### Using Forms with Custom Sections

The form control needs `class="sapUxAPObjectPageSubSectionAlignContent"` to be aligned properly within a custom section. For more information, see [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSubSection%23aggregations).



### Using the UI Model

You can use the UI model within the fragment to react to changes of the `editMode`:

> ### Sample Code:  
> ```json
> "enabled="{= ${ui>/editMode} === 'Editable'}"
> ```



### Live Example: Custom Section with `FormElement` and `Table` Building Blocks

You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Custom Section](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customElementsOverview/customSectionContent).

> ### Note:  
> -   Ensure that you have a defined `LineItem` service available \(`service.cds` in the linked example\).
> 
> -   Don't forget to add your translations.

