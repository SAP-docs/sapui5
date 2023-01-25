<!-- loiocfb04f0c58e7409992feb4c91aa9410b -->

# Enabling Inline Creation Mode or Empty Rows Mode for Table Entries

In apps that use draft handling, you can enable the inline creation mode or empty rows mode for table entries.

> ### Tip:  
> We recommend that you use the inline creation mode or empty rows mode only for tables that don't have a large number of columns. For complex tables, use create page instead.

**Inline Creation Mode**: In edit mode, users can choose *Create Entry* to add new entries to a section in a table. By default, a new entry is created and the system automatically navigates to the item's object page. You can enable inline creation of entries, that is, a new line is created but automatic navigation isn't triggered. When a new entry is created, the line is highlighted in blue. This highlight disappears once the data is saved.

**Empty Rows Mode**: In create or edit mode, two new empty rows are added to the table. In a responsive table, the rows are added at the top. In a grid table, the rows are added at the top. The empty rows won't have any corresponding entry in the back end. Whenever a user modifies a field in an empty row and then moves the focus away from that field, the new row is automatically inserted into the table. In addition, another empty row is added automatically to the table, since empty rows mode always provides two empty new rows.

> ### Restriction:  
> The empty rows mode isn't supported when immutable properties are required.

Th empty rows mode has the following features:

-   The row actions, such as the navigation indicator using a chevron icon, and inline deletion, are hidden in the empty rows.

-   Sorting and grouping is not applicable for the empty rows, as they don’t exist in a back-end table.

-   The *Create* button is hidden in the responsive table toolbar.

-   In a grid table, the *Create* button is visible. When a user clicks the *Create* button in the grid table toolbar, the table is scrolled up to the top to display the empty rows and the focus is automatically set on the first editable field in the first empty row.


> ### Note:  
> If you've defined an ID for the reference facet of your table, use this ID instead of the generated one, for example, `to_ProductText::com.sap.vocabularies.UI.v1.LineItem`. For more information, see [Defining and Adapting Sections](defining-and-adapting-sections-facfea0.md).

> ### Note:  
> For apps based on releases below SAP NetWeaver 7.51 SP01, the following restriction applies: If a user sets a filter in a table that is enabled for inline creation, the filter conditions may not be evaluated correctly. This can result in data being displayed incorrectly and not according to the filter criteria that has been entered. This is relevant only for apps that use draft handling.



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_app_g2l_hrb"/>

## Additional Features in SAP Fiori Elements for OData V2

To enable inline creation, in the `pages` section within `manifest.json` of your app, set `"createMode"` to `"inline"` like this:

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

Similarly, to enable empty rows, in the `pages` section within `manifest.json` of your app, set `"createMode"` as `"createMode": "creationRows"`.

> ### Note:  
> The empty rows are prefilled with default values when the `com.sap.vocabularies.Common.v1.DefaultValuesFunction`annotation is defined in the entity set that belongs to the table with which it is configured. For more information see, [Prefilling Fields Using the `DefaultValuesFunction.`](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md)



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
>                                 "editableHeaderContent": true,
>                                 "showConfirmationOnDraftActivate": true,
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

To enable inline creation mode in an object page, set `"creationMode"` to `"Inline"` as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "SalesOrderManageObjectPage":{                  
>     "type": "Component",                  
>     "id": "SalesOrderManageObjectPage",                  
>     "name": "sap.fe.templates.ObjectPage",                  
>     "options":{
>         ....
>         ....                                
>         "controlConfiguration":{                              
>             "_Item/@com.sap.vocabularies.UI.v1.LineItem":{
>                 "tableSettings": {
>                     ....
>                     ....           
>                     "creationMode":{                                          
>                         "name": "Inline",            // Results in Inline creation (default).                               
>                         ...                          
>                     }                                  
>                 }                              
>             }                      
>         }      
>     }
> }
> ```

Similarly, to enable empty rows mode, set `"creationMode"` to `"InlineCreationRows"`.

