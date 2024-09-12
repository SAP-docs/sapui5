<!-- loiocfb04f0c58e7409992feb4c91aa9410b -->

# Enabling Inline Creation Mode or Empty Row Mode for Table Entries

In apps that use draft handling, you can enable the inline creation mode or empty row mode for table entries.

> ### Tip:  
> We recommend that you use the inline creation mode or empty row mode only for tables that don't have a large number of columns. For complex tables, use create page instead.

The behavior of the available modes is as follows:

-   **Inline Creation Mode**: When adding new entries to a table section, a new line is created and the fields can be modified inline without triggering automatic navigation to the item's object page. When a new entry is created, the line is highlighted in blue. This highlight disappears once the data is saved.

    By default, a new entry is created and the system automatically navigates to the item's object page.

-   **Empty Row Mode** existing empty row, a new empty row is automatically added. In a responsive table, the empty row is added at the top. In a grid table, the empty row is added at the bottom. There is no corresponding entry in the draft table for the empty row. When you begin to add data to a field in an existing empty row, a new empty row is automatically added.

    The automatically added empty row is removed if the user doesn't add any data. It isn't required to manually remove the empty row.

    The empty row mode has the following features:

    -   The row actions, such as the navigation indicator using a chevron and inline deletion, are hidden in the empty row.

    -   Sorting and grouping isn't applicable for the empty row, as it doesn't exist in a back-end table.

    -   In a responsive table, the *Create* button is hidden.

    -   In a grid table, the *Create* button is visible. When you select *Create* in the grid table toolbar, the table scrolls to the bottom of the table to display the empty row and automatically sets the focus on the first editable field of the empty row.


    > ### Note:  
    > You can see the newly created record at the top of the table. If a user repeatedly clicks the *Create* button, the "latest new" record is moved to the top of the new records.

    **Support of Required Fields**

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

    **Support of Default Values**

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

    For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-11ff444.md) and [Prefilling Fields When Creating a New Entity Using an Extension Point](prefilling-fields-when-creating-a-new-entity-using-an-extension-point-189e2d8.md).

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

    **Recalculating Default Values**

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

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> No ABAP CDS annotation is required, since the setting is made according to the modelling (create, update, delete, etc.) in RAP BDEF (behavior definition).
> ```



<a name="loiocfb04f0c58e7409992feb4c91aa9410b__section_app_g2l_hrb"/>

## Additional Features in SAP Fiori Elements for OData V2

The `newPage` mode is the default mode to create new rows. In this mode, when the end user clicks *Create*, the application opens a new page where they can input their values.

You can configure the values for `createMode` using the `manifest.json` file. The possible values are `inline`, `creationRows`, `creationRowsHiddenInEditMode`, and `newPage`.

Unlike in `creationRows` mode, tables configured with `creationRowsHiddenInEditMode` mode don't include an empty row by default in edit mode. An empty row is added to the table once the user clicks *Create*.

> ### Note:  
> In `creationRows` mode, if a field in a row is modified, then this empty row is converted to draft only after an interval of 20 seconds. This behaviour is similar to that of generic draft handling. For more information, see [Draft Handling](draft-handling-ed9aa41.md).
> 
> Once the data is entered to an empty row, it is immediately converted to a draft row only if a structural side effect is defined on the corresponding table or the end user explicitly presses [Enter\].

> ### Sample Code:  
> manifest.json
> 
> ```
> {
>   "sap.ui.generic.app" : {
>     "_version" : "1.3.0",
>     "settings" : {
>       "tableSettings" : {
>         "createMode" : " creationRows"   // Applicable to all tables in object page and sub object page.
>       }
>     },
>     "pages" : {
>       "ListReport|C_STTA_SalesOrder_WD_20" : {
>         "entitySet" : "C_STTA_SalesOrder_WD_20",
>         "component" : {
>           "name" : "sap.suite.ui.generic.template.ListReport",
>           "list" : true
>         },
>         "pages" : {
>           "ObjectPage|C_STTA_SalesOrder_WD_20" : {
>             "entitySet" : "C_STTA_SalesOrder_WD_20",
>             "component" : {
>               "name" : "sap.suite.ui.generic.template.ObjectPage",
>               "settings" : {
>                 "createMode" : "inline",    // Applicable to all tables in the object page. Overrides the app level definition for create mode.
>                 "sections" : {
>                   "to_Item::com.sap.vocabularies.UI.v1.LineItem" : {
>                     "navigationProperty" : "to_Item",
>                     "entitySet" : "C_STTA_SalesOrderItem_WD_20",
>                     "createMode" : "newPage",     // Applicable to the table in the section. Overrides the object page and app level definition for create mode.
>                     "tableSettings" : {
>                       "inlineDelete" : true
>                     }
>                   }
>                 }
>               }
>             }
>           }
>         }
>       }
>     }
>   }
> }
> ```

In the sample code, the value of `createmode` for tables in all object pages is `creationRows`. However, the values of `createmode` for tables in the `C_STTA_SalesOrder_WD_20` and `C_STTA_SalesOrderItem_WD_20` object pages are `inline` and `newPage`, respectively.

A section ID defined in the annotation must match the section ID defined in the manifest configuration, where the `createMode` setting is defined. For example, `<PropertyValue Property="ID" String="to_ProductText::com.sap.vocabularies.UI.v1.LineItem"/>`.

The `createMode` value defined for tables in the section overrides the object page-level and application-level settings. The `createMode` value for the object page overrides the application-level setting.



### Changing the Default Sort Order for New Inline Rows

By default, the table rows of the object page are sorted according to the sort order defined in the back end. End users can define their own sort order using the table personalization settings. You can also modify the sort order using API extensions. For more information about the API extension, see [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions%23methods/Summary).

In edit mode, the newly created inline rows are placed at the top of the table by default, irrespective of the existing sort order defined for the table. This default sort order allows easy access to the new inline row for the end users. You can turn off this feature by setting `disableDefaultInlineCreateSort` to `true` in the `manifest.json` file as shown in the following sample code:

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
>                         }
>                    }
> ```

Once the `disableDefaultInlineCreateSort` setting is turned off, the new inline rows are sorted according to the sort order applied on the table.

The `disableDefaultInlineCreateSort` setting is evaluated only if the `"createMode":"inline"` flag is available in the `manifest.json` file.



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

If the end user doesn't enter a value to any of the required fields, an error message is shown. If the required fields aren’t a part of the displayed table columns, an error message is displayed asking the end user to add the required fields within the displayed table columns using the table settings.

> ### Note:  
> As a general guideline for `RequiredProperties`, the `UI.Importance` annotation is set as `High` in the responsive table settings by default so that the columns don’t overflow and get hidden on small-screen devices.

