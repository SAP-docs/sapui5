<!-- loio5ada91cc1ad8455bbfb7e6aee96383f2 -->

# Prefilling Fields Using the `DefaultValuesFunction`

When creating a new entity or item, or action parameters, you can provide default values using `DefaultValuesFunction`.

> ### Note:  
> This topic is currently only applicable to
> 
> -   SAP Fiori elements for OData V2 non-draft applications.
> 
> -   SAP Fiori elements for OData V2 draft applications in the empty rows mode. For more information, see [Enabling Inline Creation Mode or Empty Rows Mode for Table Entries](enabling-inline-creation-mode-or-empty-rows-mode-for-table-entries-cfb04f0.md).

For function import actions, the preference is given to the default values returned by the back end `DefaultValuesFunction`. If no value is returned by the `DefaultValuesFunction`, it is then read from the entity.

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

> ### Sample Code:  
> `DefaultValuesFunction` for function import actions
> 
> ```
> <FunctionImport Name="GetDefaultsForSetText" ReturnType="cds_zrc_dv_defaultvalues.ZRC_DV_A_SetText" m:HttpMethod="GET" sap:action-for="cds_zrc_dv_defaultvalues.RootType">
> <Parameter Name="UUID" Type="Edm.Guid" Mode="In"/>
> </FunctionImport>
>  
> <Annotations xmlns=http://docs.oasis-open.org/odata/ns/edm Target="cds_zrc_dv_defaultvalues.cds_zrc_dv_defaultvalues_Entities/SetText">
> <Annotation Term="com.sap.vocabularies.Common.v1.SideEffects" Qualifier="Action">
> <Record>
> <PropertyValue Property="TargetProperties">
> <Collection>
> <PropertyPath>Text</PropertyPath>
> </Collection>
> </PropertyValue>
> </Record>
> </Annotation>
> <Annotation Term="com.sap.vocabularies.Common.v1.DefaultValuesFunction" String="GetDefaultsForSetText"/>
> </Annotations>
> 
> ```

In case a single record is selected and an action is called that calls the `DefaultValuesFunction` function import, then the default values fetched from the function import gets populated in the parameter dialog, irrespective of the existing value present for the selected record. In case of multiple selections, default values fetched from the `DefaultValuesFunction` gets populated in the parameter dialog and the remaining input parameter remains empty.

> ### Note:  
> In case of multiselect only the `DefaultValuesFunction` without any input parameters is called.

**Related Information**  


[Actions](actions-cbf16c5.md "You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.")

