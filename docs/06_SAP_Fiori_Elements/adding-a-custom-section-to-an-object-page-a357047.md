<!-- loioa357047be956436ebb1dfebf1aa29af2 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# Adding a Custom Section to an Object Page

You can add custom sections to your object page, as described in this document.



<a name="loioa357047be956436ebb1dfebf1aa29af2__section_nbx_fky_rcc"/>

## Adding a Custom Section to an Object Page Using SAP Fiori Tools

Find out how to add a section to an object page using SAP Fiori tools.

1.  Launch the *Page Map*. You can launch the *Page Map* in several ways, for example by right-clicking the project folder and selecting *Show Page Map*. For more information, see [Define Application Structure](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/bae38e6216754a76896b926a3d6ac3a9.html).
2.  Launch the *Page Editor* for your object page. Click the :pencil2: \(*Edit*\) icon next to *Object Page*.
3.  Click the :heavy_plus_sign: \(*Add*\) icon next to *Sections*.
4.  Click *Add Custom Section*.
5.  Provide a unique *Title*.
6.  Provide a unique *Fragment Name*.
7.  Select an *Anchor Section*.
8.  Click *Add*.
9.  To preview your new section, see [Previewing an Application](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/b962685bdf9246f6bced1d1cc1d9ba1c.html).

    The following screen recording shows how to add a new section:






<a name="loioa357047be956436ebb1dfebf1aa29af2__section_e23_tdf_d4b"/>

## Adding a Custom Section Manually



### Step 1: Create Fragment for the New Section

In the editor of your choice, open the folder structure of the project where you want to make the adaptation and proceed as follows:

1.  In the `webapp` folder, create a new subfolder called `ext`.
2.  In the folder `ext`, create the file `CustomSection.fragment.xml`.
3.  Define the XML fragment with its elements, in this example a `VerticalLayout` with several other controls is used. Bindings can be used as well.

    > ### Sample Code:  
    > ```xml
    > <core:FragmentDefinition
    >   xmlns:core="sap.ui.core"
    >   xmlns="sap.m"
    >   xmlns:l="sap.ui.layout">
    > 
    >   <l:VerticalLayout core:require="{handler: 'SalesOrder/ext/CustomColumn'}">
    >     <Button text="Custom Button" press="handler.buttonPressed" />
    >   </l:VerticalLayout>
    > 
    > </core:FragmentDefinition>
    > 
    > ```

4.  If a custom handler is required, you must define it in the XML fragment using `core:require` \(see the example of `VerticalLayout` in the sample code above\).

    > ### Sample Code:  
    > ```
    > sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
    >   "use strict";
    > 
    >   return {
    >     buttonPressed: function () {
    >       MessageBox.show("Button pressed!");
    >     }
    >   };
    > });
    > 
    > 
    > ```




### Step 2: Add Section Title to the `i18n` File

To make the section title translatable, add the text to the `i18n` file as follows:

> ### Sample Code:  
> ```
> #This is the resource bundle
> 					
> # XTIT: Title of a facet within an object page
> customSection=Custom Section		
> ```



### Step 3: Add Extension Definition to the `manifest.json` File

To add the extension definition to the `manifest.json` file, use a `template`.

The extension appears within the object page before or after the defined section. By default, it is the last section.

> ### Sample Code:  
> ```
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

To add multiple sections, the custom section added in sections needs to contain an ID. In the example above, the IDs are `customSection` and `anotherCustomSection`. In the application, these will be the actual IDs on the corresponding control.

You can enrich the body of the object page with additional sections. To do so, you define sections by using a custom key that you later reference by providing the following properties:

-   a title

-   the UI5 fragment \(type and name\) and

-   its position




### Results

The object page of the app shows the new section.



### Merging Section Title with Control Title in Custom Sections

If a custom section configured with the page layout mode contains only one control, and this control is one of the standard building blocks \(such as `Form`, `Chart`, or `Table`\), or of the reuse components, or if it's the `sap.m.Title` control, the section title is merged with the control title, hiding the section title. The merging of titles is automatic for custom sections that use standard building blocks without any layout.

For sections that use standard building blocks within a layout, you can define a `onSectionLoaded` property in the `manifest.json` file. This method is called for all sections when the object page is loaded for the first time or when the page is refreshed. The value of the `onSectionLoaded` property must be the name of the method defined in the custom controller. This method must invoke the `setAsSectionTitleOwner` extension API within `sap.fe.templates/src/sap/fe/templates/ObjectPage/ExtensionAPI.ts`. You must ensure that the correct control is passed while invoking the extension API, as the section title is merged with the title of this control.

> ### Sample Code:  
> Manifest setting for merging title within custom sections
> 
> ```
> "routing": {
>   "targets": {
>     "SalesOrderManageObjectPage": {
>       "options": {
>         "settings": {
>           "sectionLayout": "Page",
>           "content": {
>             "body": {
>               "sections": {
>                 "customSectionTableHBox": {
>                   "template": "SalesOrder.custom.CustomSectionBuildingBlockTableHBox",
>                   "title": "HBox Table",
>                   "onSectionLoaded": "SalesOrder.custom.CustomSection.callShowSectionTitle"
>                 }
>               }
>             }
>           }
>         }
>       }
>     }
>   }
> }
> 
> ```

> ### Sample Code:  
> Custom Controller Method That Sets the Right Control
> 
> ```
> callShowSectionTitle(section){
>    const control = section.getSubSections()[0].getBlocks()[0].getContent().getItems()[0];
>    this.setAsSectionTitleOwner(control);
> }
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adding a Custom Section to an Object Page](adding-a-custom-section-to-an-object-page-b75af69.md).

