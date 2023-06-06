<!-- loiocfb04f0c58e7409992feb4c91aa9410b -->

# Enabling Inline Creation Mode or Empty Rows Mode for Table Entries

In apps that use draft handling, you can enable the inline creation mode or empty rows mode for table entries.

> ### Tip:  
> We recommend that you use the inline creation mode or empty rows mode only for tables that don't have a large number of columns. For complex tables, use create page instead.

The behavior of the available modes is as follows:

-   **Inline Creation Mode**: In create or edit mode, users can choose *Create Entry* to add new entries to a section in a table. By default, a new entry is created and the system automatically navigates to the item's object page. You can enable inline creation of entries, that is, a new line is created and the fields can be modified inline but automatic navigation isn't triggered. When a new entry is created, the line is highlighted in blue. This highlight disappears once the data is saved.

-   **Empty Rows Mode**: In create or edit mode, two new empty rows are added to the table. In a responsive table, the empty rows are added at the top. In a grid table, the empty rows are added at the bottom. There are no corresponding entries in the draft table for these empty rows. When you modify a field in an empty row and move the focus away from that field, a new row is added automatically to the draft table. Since the empty rows mode always provides two new empty rows, another empty row is added below after the current row in the table.

    The empty rows mode has the following features:

    -   The row actions, such as the navigation indicator using a chevron, and inline deletion, are hidden in the empty rows.

    -   Sorting and grouping isn't applicable for the empty rows, as they don’t exist in a back-end table.

    -   In a responsive table, the *Create* button is hidden.

    -   In a grid table, the *Create* button is visible. When you click *Create* in the grid table toolbar, the table scrolls to the bottom of the table to display the empty rows, and automatically sets the focus on the first editable field of the first empty row.



> ### Restriction:  
> The empty rows mode isn't supported when immutable properties are required.

> ### Note:  
> -   If you've defined an ID for the reference facet of your table, use this ID instead of the generated one, for example, to\_ProductText::com.sap.vocabularies.UI.v1.LineItem. For more information, see [Defining and Adapting Sections](defining-and-adapting-sections-facfea0.md).
> 
> -   For apps based on releases below SAP NetWeaver 7.51 SP01, the following restriction applies: If a user sets a filter in a table that is enabled for inline creation, the filter conditions may not be evaluated correctly. This can result in data being displayed incorrectly and not according to the filter criteria that has been entered. This is relevant only for apps that use draft handling.



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_app_g2l_hrb"/>

## Additional Features in SAP Fiori Elements for OData V2

To enable inline creation, in the `pages` section within `manifest.json` of your app, set `"createMode"` to `"inline"`, as shown in the following sample code:

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

Similarly, to enable empty rows mode, set `"createMode"` as `"creationRows"`. With this configuration, the table behaves as described in the Empty Rows Mode section..

Users can explicitly hide empty rows in the edit mode and make the empty rows available only in the create mode. To hide empty rows in edit mode, set `"createMode"` as `"creationRowsHiddenInEditMode"`. The table doesn't contain any empty rows upon loading with this configuration. Empty rows are added to the table only when you click the *Create* button.

> ### Note:  
> The empty rows are prefilled with default values when the `com.sap.vocabularies.Common.v1.DefaultValuesFunction` annotation is defined in the entity set that belongs to the table with which it's configured. For more information, see [Prefilling Fields Using the DefaultValuesFunction](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md).



### Changing the Default Sort Order

Based on the default sort order, each newly created row is placed at the top of the table. You can disable this default sorting by using the `disableDefaultInlineCreateSort` flag as shown here in the `manifest.json`. You can then enter your own sorting logic.

This flag is evaluated only if the `"createMode":"inline"` flag is available in the `manifest.json`.

> ### Note:  
> You can see the newly created record at the top of the table. If a user repeatedly clicks the *Create* button, the "latest new" record is moved to the top of the new records.

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



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_alg_jt1_1gb"/>

## Additional Features in SAP Fiori Elements for OData V4

To enable inline creation mode in an object page per table, set `"creationMode"` to `"Inline"`, as shown in the following sample code:

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



### Enabling and Disabling Empty Rows Mode

To enable the empty rows mode, set `"creationMode"` to `"InlineCreationRows"`.

The default behavior of the empty rows mode is as follows:

-   The empty rows are visible on grid and responsive tables when a new object is created.

-   The empty rows are visible on grid and responsive tables when an existing object is edited.


To change this behavior, you can use the parameter `inlineCreationRowsHiddenInEditMode`. Its default value is `'false'`. If it is set to `'true'`, the empty rows will be hidden when editing an existing object. Selecting the table's *Create* button will display the empty rows.

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



### Disabling Fields in the Empty Rows Mode

Certain fields in the `inlineCreationRows` may become relevant only after the row has been created. They can be disabled so that they appear as read-only in the empty rows.

To disable a field, use the `Capabilities.InsertRestrictions.NonInsertableProperties` annotation.

The list of `NonInsertableProperties` is first checked at the navigation property level. If it's not found there, it is checked at the entity set level.

