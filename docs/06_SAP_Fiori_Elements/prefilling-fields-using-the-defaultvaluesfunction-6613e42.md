<!-- loio6613e425af8a41d9b665d267983fa322 -->

# Prefilling Fields Using the `DefaultValuesFunction`

You can provide default values with `DefaultValuesFunction` when creating a new entity or when prefilling action parameters, you can provide default values.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Prefilling Fields Using the DefaultValuesFunction](prefilling-fields-using-the-defaultvaluesfunction-5ada91c.md).

> ### Note:  
> This topic is only applicable to the following cases:
> 
> -   Non-draft applications.
> 
> -   Draft applications in the empty row mode. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-276cbe5.md).

> ### Note:  
> In case of multiselect only the `DefaultValuesFunction` without any input parameters is called.

If you want to set default values for the newly created entity, use a `DefaultValuesFunction`.

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

For more information, see [Prefilling Fields When Creating a New Entity](prefilling-fields-when-creating-a-new-entity-20d1421.md) and [Prefilling Fields When Creating a New Entity Using an Extension Point](prefilling-fields-when-creating-a-new-entity-using-an-extension-point-189e2d8.md).

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

**Related Information**  


[Actions](actions-14418d7.md "You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.")

