<!-- loio5b0b686a3b7a491a9ec654b4f1536fa8 -->

# Using Action Control for Context-Dependent Actions

Action control refers to the ability of applications to be able to configure app-specific actions so that they are only enabled for certain instances of the object, but not others.



<a name="loio5b0b686a3b7a491a9ec654b4f1536fa8__section_dhs_mjc_2nb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can use action control to display actions by adding the `sap:action-for` and `sap:applicable-path` terms to your action or function import.

Actions that you've defined using these annotations are context-dependent. This means that users have to select an item or a line in a list. Only then are the actions enabled.

In the applicable path, you specify a Boolean property for the entity type that controls whether the function import can be invoked. SAP Fiori elements evaluates the applicable path and sets the visibility of the corresponding action based on the Boolean property value.

If the condition, as defined by the applicable-path variable, is not fulfilled, the action is hidden or disabled as follows:

-   The action is hidden if it is on a page header level or for line item buttons in a table

-   The action is disabled for header buttons in a table

    > ### Note:  
    > In addition to `sap:applicable-path`, it is not recommended to use `UI.Hidden` for `DataFieldForAction` within page header. If `UI.Hidden` is defined, it takes the precedence and may result in a deviation from the UX recommended behaviour for button visibility.


> ### Sample Code:  
> ```
> <FunctionImport Name="SEPMRA_C_PD_ProductCopy" 
>                 ReturnType="SEPMRA_PROD_MAN.SEPMRA_C_PD_ProductType" 
>                 EntitySet="SEPMRA_C_PD_Product" m:HttpMethod="POST"
>                 sap:action-for="SEPMRA_PROD_MAN.SEPMRA_C_PD_ProductType" 
>                 sap:applicable-path="IsActiveEntity">
>     <Parameter Name="ProductDraftUUID" Type="Edm.Guid" Mode="In"/>
>     <Parameter Name="ActiveProduct" Type="Edm.String" Mode="In" MaxLength="10"/>
> </FunctionImport>
> 
> ```

> ### Note:  
> If the function import action parameters are dynamic, and if for a selected instance no parameter is required, then the parameter dialog is not displayed. This behavior is applicable only for single-context select actions.



<a name="loio5b0b686a3b7a491a9ec654b4f1536fa8__section_hhv_qjc_2nb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can use action control to enable or disable actions by adding the `OperationAvailable` term.

For more information, see *Enabling Custom Actions Defined via Annotations* in the SAP Fiori elements for OData V4 specific section in [Actions](actions-cbf16c5.md).



> ### Note:  
> If multi-select is available in a table, the action is allowed when at least one of the marked entries fulfills the condition.

