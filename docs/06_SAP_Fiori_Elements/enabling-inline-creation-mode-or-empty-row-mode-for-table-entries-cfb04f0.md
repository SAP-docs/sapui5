<!-- loiocfb04f0c58e7409992feb4c91aa9410b -->

# Enabling Inline Creation Mode or Empty Row Mode for Table Entries

In apps that use draft handling, you can enable the inline creation mode or empty row mode for table entries.

> ### Tip:  
> We recommend that you use the inline creation mode or empty row mode only for tables that don't have a large number of columns. For complex tables, use create page instead.

The behavior of the available modes is as follows:

-   **Inline Creation Mode**: In create or edit mode, users can choose *Create Entry* to add new entries to a section in a table. By default, a new entry is created and the system automatically navigates to the item's object page. You can enable inline creation of entries, that is, a new line is created and the fields can be modified inline but automatic navigation isn't triggered. When a new entry is created, the line is highlighted in blue. This highlight disappears once the data is saved.

-   **Empty Row Mode**: In create or edit mode, one new empty row is added to the table. In a responsive table, the empty row is added at the top. In a grid table, the empty row is added at the bottom. There is no corresponding entry in the draft table for the empty row. When you begin to add data to a field in an empty row, a new empty row is automatically added .However, the current row is converted to draft only when the focus is moved away from the input field. The automatically added empty row is removed if the user doesn't add any data. It isn't required to manually remove the empty row.

    The empty row mode has the following features:

    -   The row actions, such as the navigation indicator using a chevron, and inline deletion, are hidden in the empty row.

    -   Sorting and grouping isn't applicable for the empty row, as it doesn't exist in a back-end table.

    -   In a responsive table, the *Create* button is hidden.

    -   In a grid table, the *Create* button is visible. When you click *Create* in the grid table toolbar, the table scrolls to the bottom of the table to display the empty row, and automatically sets the focus on the first editable field of the empty row.



> ### Restriction:  
> The empty row mode isn't supported when immutable properties are required.

> ### Note:  
> -   You can make the object page tables insertable or not insertable using the `InsertRestrictions` annotation. For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).
> 
> -   If you've defined an ID for the reference facet of your table, use this ID instead of the generated one, for example, to\_ProductText::com.sap.vocabularies.UI.v1.LineItem. For more information, see [Defining and Adapting Sections](defining-and-adapting-sections-facfea0.md).
> 
> -   For apps based on releases below SAP NetWeaver 7.51 SP01, the following restriction applies: If a user sets a filter in a table that is enabled for inline creation, the filter conditions may not be evaluated correctly. This can result in data being displayed incorrectly and not according to the filter criteria that has been entered. This is relevant only for apps that use draft handling.
> 
> -   The empty row is prefilled with default values when the `com.sap.vocabularies.Common.v1.DefaultValuesFunction` annotation is defined in the entity set that belongs to the table with which it's configured. For more information, see [Prefilling Fields Using the DefaultValuesFunction](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md).





### Disabling Fields in the Empty Row Mode

Certain fields in the `inlineCreationRows` may become relevant only after the row has been created. They can be disabled so that they appear as read-only in the empty row.

To disable a field, use the `Capabilities.InsertRestrictions.NonInsertableProperties` annotation.

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

Similarly, to enable empty row mode, set `"createMode"` as `"creationRows"`. With this configuration, the table behaves as described in the Empty Row Mode section..

Users can explicitly hide the empty row in the edit mode and make the empty row available only in the create mode. To hide the empty row in edit mode, set `"createMode"` as `"creationRowsHiddenInEditMode"`. The table doesn't contain an empty row upon loading with this configuration. An empty row is added to the table only when you click the *Create* button.



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



### Enabling and Disabling Empty Row Mode

To enable the empty row mode, set `"creationMode"` to `"InlineCreationRows"`.

The default behavior of the empty row mode is as follows:

-   The empty row is visible on grid and responsive tables when a new object is created.

-   The empty row is visible on grid and responsive tables when an existing object is edited.


To change this behavior, you can use the parameter `inlineCreationRowsHiddenInEditMode`. Its default value is `'false'`. If it is set to `'true'`, the empty row will be hidden when editing an existing object. Selecting the table's *Create* button will display the empty row.

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



### 

