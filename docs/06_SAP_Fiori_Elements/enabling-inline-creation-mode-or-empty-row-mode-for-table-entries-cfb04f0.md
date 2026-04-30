<!-- loiocfb04f0c58e7409992feb4c91aa9410b -->

# Enabling Inline Creation Mode or Empty Row Mode for Table Entries

You can enable the inline creation mode or empty row mode for table entries in apps that use draft handling.

> ### Tip:  
> We recommend that you use the inline creation mode or empty row mode only for tables that don't have a large number of columns. For complex tables, use create page instead.



## Inline Creation Mode

When adding new entries to a table section, a new line is created and the fields can be modified inline without triggering automatic navigation to the item's object page. When a new entry is created, the line is highlighted in blue. This highlight disappears once the data is saved.

By default, a new entry is created and the system automatically navigates to the item's object page.



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



## Empty Row Mode

When a user begins adding data to a field in an existing empty row, a new empty row is automatically created. In a responsive table, the empty row appears at the top, while in a grid table, it appears at the bottom. There is no corresponding entry in the draft table for the empty row.

The automatically added empty row is removed if the user doesn't add any data. It isn't required to manually remove the empty row.

The empty row mode has the following features:

-   The row actions, such as the navigation indicator using a chevron and inline deletion, are hidden in the empty row.

-   Sorting and grouping isn't applicable for the empty row, as it doesn't exist in a back-end table.

-   In a responsive table, the *Create* button is hidden.

-   In a grid table, the *Create* button is visible. When you select *Create* in the grid table toolbar, the table scrolls to the bottom of the table to display the empty row and automatically sets the focus on the first editable field of the empty row.


> ### Note:  
> You can see the newly created record at the top of the table. If a user repeatedly clicks the *Create* button, the "latest new" record is moved to the top of the new records.



### Behavior of Rows in Empty Row Mode

If you shift your focus away from the input field of a row, the current row is converted immediately to draft.

Deleting an empty row clears its contents and removes any error messages related to it. It is then replaced with a new empty row.



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



### Defining the Default Creation Mode

You can define the `InlineCreationRows` mode as the default creation mode that is used for all tables within an application, unless a specific creation mode has been set for a table.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.fe": {
>         …
>         "macros": {
>             "table": {
>                 "defaultCreationMode": "InlineCreationRows"
>             }
>         }
>         …
>     }
> ```



### Supporting `RequiredProperties` for Draft Creation in Empty Row Mode

If a field is marked with the `Capabilities.InsertRestrictions.RequiredProperties` annotation, an asterisk \(\*\) is displayed in the column header.

If the user doesn't enter a value to any of the required fields, an error message is shown. If the required fields aren't a part of the displayed table columns, an error message is displayed asking the user to add the required fields within the displayed table columns using the table settings.

> ### Note:  
> As a general guideline for `RequiredProperties`, we recommend that you set the `UI.Importance` to `High` for required properties in a `LineItem` annotation. If you don't set it, the framework still evaluates the `UI.Importance` as `High` so that the columns don't overflow and are hidden on small-screen devices.



### Support of Required Fields

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



### Support of Default Values

If you want to set default values for an empty row, use a `DefaultValuesFunction`.

> ### Sample Code:  
> `DefaultValuesFunction` for create entity
> 
> ```
> <FunctionImport Name="GetDefaultsForRoot" ReturnType="cds_zrc_dv_defaultvalues.ZRC_DV_A_Create" m:HttpMethod="GET"/> 
>  
> <Annotations xmlns=http://docs.oasis-open.org/odata/ns/edm Target="cds_zrc_dv_defaultvalues.cds_zrc_dv_defaultvalues_Entities/Root">
> <Annotation Term="com.sap.vocabularies.Common.v1.DefaultValuesFunction" String="GetDefaultsForRoot"/>
> </Annotations>
> 
> ```

For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-11ff444.md).

> ### Sample Code:  
> `DefaultValuesFunction` for navigation property/item create
> 
> ```
> <FunctionImport Name="GetDefaultsForItem" ReturnType="cds_zrc_dv_defaultvalues.ZRC_DV_A_Create" m:HttpMethod="GET" sap:action-for="cds_zrc_dv_defaultvalues.RootType">
> <Parameter Name="UUID" Type="Edm.Guid" Mode="In"/>
> </FunctionImport>
>  
> <Annotations xmlns=http://docs.oasis-open.org/odata/ns/edm Target="cds_zrc_dv_defaultvalues.RootType/to_Item">
> <Annotation Term="com.sap.vocabularies.Common.v1.DefaultValuesFunction" String="GetDefaultsForItem"/>
> </Annotations>
> 
> ```



### Recalculating Default Values

If you're using a property that influences the result of the `DefaultValuesFunction`, you must annotate a side effect for each table that uses the `DefaultValuesFunction`. Doing so ensures that the existing empty row always gets the new calculated value. In the side effects, use the navigation property that represents the table as the target entity.

> ### Sample Code:  
> ```
> SideEffects #TableIsRefreshed: {
>       SourceProperties: [CustomerNumber],
>       TargetEntities  : [_Item]
>   }
> 
> ```

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="Common.SideEffects" Qualifier=" TableIsRefreshed ">
>      <Record Type="Common.SideEffectsType">
>           <PropertyValue Property="SourceProperties">
>           <Collection>
>           <PropertyPath>CustomerNumber</PropertyPath>
>           </Collection>
>           </PropertyValue>
>           <PropertyValue Property="TargetEntities">
>           <Collection>
>           <NavigationPropertyPath>_Item</NavigationPropertyPath>
>           </Collection>
>      </Record>
> </Annotation>
> 
> ```



> ### Note:  
> -   You can make the object page tables insertable or not insertable using the `InsertRestrictions` annotation. For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).
> 
> -   If you've defined an ID for the reference facet of your table, use this ID instead of the generated one, for example, `to_ProductText::com.sap.vocabularies.UI.v1.LineItem`. For more information, see [Defining and Configuring Sections](defining-and-configuring-sections-facfea0.md).
> 
> -   For apps based on SAP NetWeaver 7.51 SP00 or lower, the following restriction applies: table filters in inline creation mode may not work properly, and the filtered data may not match the filter parameters. This only applies to apps that use draft handling.
> 
> -   The empty row is prefilled with default values when the `com.sap.vocabularies.Common.v1.DefaultValuesFunction` annotation is defined in the entity set that belongs to the table with which it's configured. For more information, see [Prefilling Fields Using the DefaultValuesFunction](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md).



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_alg_jt1_1gb"/>

## Display of the Newly Created Objects

By default, new objects created using the `Inline` or `InlineCreationRows` mode are shown at the top of the table. Sorting and filtering criteria aren't applied, ensuring that the newly created objects are in the visible area of the table.

When using the grid table, you can display newly created objects at the bottom of the table by setting the `createAtEnd` parameter to `true` as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "type": "GridTable",
>             "personalization": {
>                 "column": true,
>                 "sort": false
>             },
>             "creationMode": {
>                 "name": "Inline",
>                 "createAtEnd": true
>             }
>         }
>     }
> }
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-276cbe5.md).

