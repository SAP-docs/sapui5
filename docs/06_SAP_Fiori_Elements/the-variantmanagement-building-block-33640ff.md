<!-- loio33640ff8ccba4df48e23a92a25288651 -->

# The `VariantManagement` Building Block

You can use the `VariantManagement` building block to enable variant management for any flex-enabled control in flexible programming model-based SAPUI5 applications.

This building block can be applied at two levels:

-   Page level: The variant management feature applies to the entire page, enabling variant management for all linked flex-enabled controls.

    When the page-level variant management is enabled, end users can save all the personalization settings applied to the flex-enabled controls, such as the `FilterBar` building block, the `Table` building block, or the `Chart` building block, into a user-defined variant.

-   Control level: The variant management feature applies only to the controls that are linked to the `VariantManagement` building block, such as the `FilterBar` building block.

    If you need control-level variant management when using the `Table` building block or `Chart` building block, there's no need to use the `VariantManagement` building block. Instead, you can use the `variantManagement` property within the `Table` building block or `Chart` itself.

    For information about the `Table` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table). 




<a name="loio33640ff8ccba4df48e23a92a25288651__section_phc_vzc_zdc"/>

## Enabling the `VariantManagement` Building Block and Linking it to the Flex-Enabled Controls

The `VariantManagement` building block can be initialized as shown in the following sample code:

> ### Sample Code:  
> ```
> <f:DynamicPage id="FilterBarVMWithTable" class="sapUiResponsiveContentPadding">
>     <f:title>
>         <f:DynamicPageTitle id="_IDGenDynamicPageTitle1">
>             <f:heading>
>                 <macros:VariantManagement id="vm" for="FilterBar,LineItemTable" showSetAsDefault="true" headerLevel="H2" />
>             </f:heading>
>         </f:DynamicPageTitle>
>     </f:title>
>     <f:header>
>         <f:DynamicPageHeader id="_IDGenDynamicPageHeader1" pinnable="true">
>             <VBox id="_IDGenVBox1">
>                 <macros:FilterBar metaPath="@com.sap.vocabularies.UI.v1.SelectionFields" id="FilterBar" />
>             </VBox>
>         </f:DynamicPageHeader>
>     </f:header>
>     <f:content>
>         <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" readOnly="true" id="LineItemTable" filterBar="FilterBar" />
>     </f:content>
> </f:DynamicPage>
> ```

The `for` association enables linking of other flex-enabled controls to the `VariantManagement` building block. Once linked, the building block automatically captures all the flex-relevant user personalization changes on these controls and saves them whenever the end user creates a new variant.

In the sample code, the table and filter bar controls are linked to the `VariantManagement` building block. Any personalization changes made by the end user to these controls are saved within a user-created variant when the changes are saved to a variant.

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Filter Bar - With Variant Management and Chart](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/filterBar/filterBarVMWithChart).



<a name="loio33640ff8ccba4df48e23a92a25288651__section_ht5_nls_j5b"/>

## API

For information about the `VariantManagement` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.VariantManagement).

