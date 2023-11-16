<!-- loiocfb04f0c58e7409992feb4c91aa9410b -->

# Enabling Inline Creation Mode or Empty Row Mode for Table Entries

In apps that use draft handling, you can enable the inline creation mode or empty row mode for table entries.

> ### Tip:  
> We recommend that you use the inline creation mode or empty row mode only for tables that don't have a large number of columns. For complex tables, use create page instead.

The behavior of the available modes is as follows:

-   **Inline Creation Mode**: In create or edit mode, users can choose *Create Entry* to add new entries to a section in a table. By default, a new entry is created and the system automatically navigates to the item's object page.

    App developers can enable inline creation of entries. In this mode, a new line is created and the fields can be modified inline but automatic navigation isn't triggered. When a new entry is created, the line is highlighted in blue. This highlight disappears once the data is saved.

-   **Empty Row Mode**: In create or edit mode, one new empty row is added to the table. In a responsive table, the empty row is added at the top. In a grid table, the empty row is added at the bottom. There is no corresponding entry in the draft table for the empty row. When you begin to add data to a field in an existing empty row, a new empty row is automatically added.

    The automatically added empty row is removed if the user doesn't add any data. It isn't required to manually remove the empty row.

    The empty row mode has the following features:

    -   The row actions, such as the navigation indicator using a chevron and inline deletion, are hidden in the empty row.

    -   Sorting and grouping isn't applicable for the empty row, as it doesn't exist in a back-end table.

    -   In a responsive table, the *Create* button is hidden.

    -   In a grid table, the *Create* button is visible. When you select *Create* in the grid table toolbar, the table scrolls to the bottom of the table to display the empty row and automatically sets the focus on the first editable field of the empty row.



The empty row mode also supports required fields. These fields are declared using `Capabilities.InsertRestrictions.RequiredProperties`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/_Item">
>     <Annotation Term="Capabilities.InsertRestrictions">
>         <Record Type="Capabilities.InsertRestrictionsType">
>             <PropertyValue Property="RequiredProperties">
>                 <Collection>
>                     <PropertyPath>RequestedQuantity</PropertyPath>
>                     <PropertyPath>Material</PropertyPath>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Note:  
> -   You can make the object page tables insertable or not insertable using the `InsertRestrictions` annotation. For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).
> 
> -   If you've defined an ID for the reference facet of your table, use this ID instead of the generated one, for example, to\_ProductText::com.sap.vocabularies.UI.v1.LineItem. For more information, see [Defining and Adapting Sections](defining-and-adapting-sections-facfea0.md).
> 
> -   For apps based on SAP NetWeaver 7.51 SP00 or lower, the following restriction applies: table filters in inline creation mode may not work properly, and the filtered data may not match the filter parameters. This only applies to apps that use draft handling.
> 
> -   The empty row is prefilled with default values when the `com.sap.vocabularies.Common.v1.DefaultValuesFunction` annotation is defined in the entity set that belongs to the table with which it's configured. For more information, see [Prefilling Fields Using the DefaultValuesFunction](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md).





### Restricting Fields in the Empty Row Mode

Certain fields in the `inlineCreationRows` may become relevant only after the row has been created. They can be restricted from data entry in the empty row.

To restrict a field, use the `Capabilities.InsertRestrictions.NonInsertableProperties` annotation.

The list of `NonInsertableProperties` is first checked at the navigation property level. If it's not found there, it is checked at the entity set level.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/_Item">
>     ...
>     <Annotation Term="Capabilities.InsertRestrictions">
>         <Record Type="Capabilities.InsertRestrictionsType">
>             <PropertyValue Property="NonInsertableProperties">
>                 <Collection>
>                     <PropertyPath>RequestedQuantity</PropertyPath>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
>     ...
> </Annotations>
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> entity SalesOrderItem
> {
>     ...
>    RequestedQuantity : Decimal(15, 3);
>     ...
>     owner             : Association to one SalesOrderManage;
>     ...
> }
>  
> entity SalesOrderManage
> {
>     ...
>     _Item : Composition of many SalesOrderItem
>             on _Item.owner = $self @(Capabilities: {InsertRestrictions: {NonInsertableProperties: [RequestedQuantity]}});
>     ...
> }
>  
> 
> ```



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_app_g2l_hrb"/>

## Additional Features in SAP Fiori Elements for OData V2



### Enabling Inline Creation Mode

To enable inline creation mode in an object page table, set `"creationMode"` to `"Inline"`, as shown in the following sample code:

```

"sap.ui.generic.app": {
        "pages": [
            {
                "entitySet": "SEPMRA_C_PD_Product",
                "component": {
                    "name": "sap.suite.ui.generic.template.ListReport",
                    "list": true
                },
                "pages": [
                    {
                        "entitySet": "SEPMRA_C_PD_Product",
                        "component": {
                            "name": "sap.suite.ui.generic.template.ObjectPage",
                            "settings": {
                                "sections": {
                                                    "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
                                                            "navigationProperty": "to_ProductText",
                                                            "entitySet": "SEPMRA_C_PD_ProductText",
                                                            "createMode": "inline"
                                                    }
                                                }
                                            }
                        },
                        "pages": [
                            {
                                "navigationProperty": "to_ProductText",
                                "entitySet": "SEPMRA_C_PD_ProductText",
                                "component": {
                                    "name": "sap.suite.ui.generic.template.ObjectPage"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },

```

A section ID defined in the annotation must match the section ID defined in the manifest configuration, where the `createMode` setting is defined. For example, `<PropertyValue Property="ID" String="to_ProductText::com.sap.vocabularies.UI.v1.LineItem"/>`.



### Changing the Default Sort Order for New Inline Rows

By default, the table rows of the object page are sorted according to the sorting order defined in back end. End users can define own sorting order using the table personalization settings. Application developers can also modify the sort order using API extensions. For more information about the API extension, see [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions%23methods/Summary)..

In the edit mode, the newly created inline rows are placed at the top of the table, by default, irrespective of the existing sorting order defined for the table. This default sort order allows easy access for the end users to the new inline row. Application developers can turn off this feature by setting `disableDefaultInlineCreateSort` to `true` in the `manifest.json` file as shown in the following sample code. Once turned off, the new inline rows are sorted according to the sorting order applied on the table.

> ### Sample Code:  
> ```
> 
> "ObjectPage|STTA_C_MP_Product": {
>                         "entitySet": "STTA_C_MP_Product",
>                         "component": {
>                             "name": "sap.suite.ui.generic.template.ObjectPage",
>                             "settings": {
>                                 "showRelatedApps": true,
>                                 "tableType": "ResponsiveTable",
>                                 "editableHeaderContent": true,,
>                                 "sections": {
>                                     "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
>                                         "navigationProperty": "to_ProductText",
>                                         "entitySet": "STTA_C_MP_ProductText",
>                                         "multiSelect": true,
>                                         "createMode": "inline",
>                                         "disableDefaultInlineCreateSort":true,
>                                         "tableType": "ResponsiveTable"
>                                     }
>                                 }
>                             }
>                         },
> 
> ```

This flag is evaluated only if the `"createMode":"inline"` flag is available in the `manifest.json` file.

> ### Note:  
> You can see the newly created record at the top of the table. If a user repeatedly clicks the *Create* button, the "latest new" record is moved to the top of the new records.



### Behavior of Rows in Empty Row Mode

If you shift your focus away from the input field of a row, then the current row is converted to draft after an interval of 20 seconds. This behavior is similar to the behavior of generic draft handling .For more information, see [Draft Handling](draft-handling-ed9aa41.md).

The current row is converted to draft immediately only if a structural side effect is defined on the corresponding table.



### Enabling Empty Row Mode

Similar to inline creation mode, to enable empty row mode, set `"createMode"` to `"creationRows"`.

You can explicitly hide the empty row in edit mode and make the empty row available only in create mode. To hide the empty row in edit mode, set `"createMode"` to `"creationRowsHiddenInEditMode"`. With this configuration, the table doesn't contain an empty row upon loading. An empty row is added to the table only when you click the *Create* button.



### Supporting `RequiredProperties` for Draft Creation in Empty Row Mode

An empty row is converted to a draft row only if all the fields annotated with `RequiredProperties` have a value.

If the end user doesn't enter a value to any of the required fields, then an error message is displayed. If the required fields aren’t a part of the displayed table columns, then an error message is displayed asking the end user to add the required fields within the displayed table columns using the table settings.

**Defining Custom Error Messages for the Empty `Required` Field**

When a required field is empty, the application displays the standard message ***Enter a value***. You can override the standard text in the application’s `i18n` file, under the respective `entitySet` using the key format as shown here:

`REQUIRED_PROP_ERROR|<EntitySet>|<navigationProperty>| com.sap.vocabularies.UI.v1.LineItem|<Required Property Name>` 

An example using the key format is shown here:

`REQUIRED_PROP_ERROR|C_STTA_SalesOrder_WD_20|to_Item|com.sap.vocabularies.UI.v1.LineItem|so_item_pos=Enter an item position` 

> ### Note:  
> As a general guideline for `RequiredProperties`, application developers must set `UI.Importance` to `High` in the responsive table settings so that the columns don’t overflow and get hidden on small-screen devices.



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_alg_jt1_1gb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Enabling Inline Creation Mode

To enable inline creation mode in an object page table, set `"creationMode"` to `"Inline"`, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "SalesOrderManageObjectPage":{                  
>     "type": "Component",                  
>     "id": "SalesOrderManageObjectPage",                  
>     "name": "sap.fe.templates.ObjectPage",                  
>     "options":{
>         "settings":{
>             ....
>             ....                                
>             "controlConfiguration":{                              
>                 "_Item/@com.sap.vocabularies.UI.v1.LineItem":{
>                     "tableSettings": {
>                         ....
>                         ....           
>                         "creationMode":{                                          
>                             "name": "Inline",            // Results in Inline creation (default).                               
>                             ...                          
>                         }                                  
>                     }                              
>                 }                      
>             }      
>         } 
>     }
> }
> ```

If a field is annotated with `FieldControl` set to `mandatory`, an asterisk \(\*\) is displayed in its column header in edit mode.



### Behavior of Rows in Empty Row Mode

If you shift your focus away from the input field of a row, the current row is converted immediately to draft.



### Enabling and Disabling Empty Row Mode

To enable the empty row mode, set `"creationMode"` to `"InlineCreationRows"`.

The default behavior of the empty row mode is as follows:

-   The empty row is visible on grid and responsive tables when a new object is created.

-   The empty row is visible on grid and responsive tables when an existing object is edited.


To change this behavior, you can use the parameter `inlineCreationRowsHiddenInEditMode`. Its default value is `'false'`. If it's set to `'true'`, the empty row is hidden when editing an existing object. Selecting the table's *Create* button will display the empty row and set the focus on the first editable field. Selecting the *Create* button again will also set the focus on the empty row.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "SalesOrderManageObjectPage":{                  
>     "type": "Component",                  
>     "id": "SalesOrderManageObjectPage",                  
>     "name": "sap.fe.templates.ObjectPage",                  
>     "options":{
>         "settings":{
>             ....
>             ....                                
>             "controlConfiguration":{                              
>                 "_Item/@com.sap.vocabularies.UI.v1.LineItem":{
>                     "tableSettings": {
>                         ....
>                         ....           
>                         "creationMode":{                                          
>                             "name": "InlineCreationRows",            
>                             "inlineCreationRowsHiddenInEditMode": true
>                         }                                  
>                     }                              
>                 }                      
>             }      
>         } 
>     }
> }
> ```



### Supporting `RequiredProperties` for Draft Creation in Empty Row Mode

If a field is marked with the `Capabilities.InsertRestrictions.RequiredProperties` annotation, an asterisk \(\*\) is displayed in the column header.

If the end user doesn't enter a value to any of the required fields, an error message is shown. If the required fields aren’t a part of the displayed table columns, an error message is displayed asking the end user to add the required fields within the displayed table columns using the table settings.

> ### Note:  
> As a general guideline for `RequiredProperties`, the `UI.Importance` annotation is set as `High` in the responsive table settings by default so that the columns don’t overflow and get hidden on small-screen devices.

