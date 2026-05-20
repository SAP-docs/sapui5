<!-- loioc5e38f91823a47a9abe3305970d39877 -->

# Requesting Additional Properties on the Object Page and Custom Page

You can request additional properties to be fetched when the page loads in SAP Fiori elements for OData V4.

By default, SAP Fiori elements for OData V4 only requests properties which are required to display the UI, that is, properties used for the content, visibility, or enablement of the UI.

> ### Note:  
> Properties used for a UI feature which is statically hidden aren't requested.

If you require property values to be available across multiple controls, you can request additional properties. For example, this is useful for conditional logic in both controller extensions and custom actions.

You can request additional properties at the page level with the following floorplans:

-   An object page
-   A custom page which uses the `sap.fe.core.fpm` component with a binding context

You can also request additional properties at the table level. For more information, see [Requesting Additional Properties](requesting-additional-properties-82e27ff.md).

This is useful when you need property values to be available across multiple controls, for example, for conditional logic in both controller extensions and custom actions.

To request additional properties at the page level, use any of the following:

-   ​The `Common.SecondaryKey` annotation
-   The `additionalProperties` parameter

    > ### Note:  
    > Using the `additionalProperties` parameter, you can request navigation properties, but you can't request 1:n navigation properties.




## Using `Common.SecondaryKey` Annotation

Use the `Common.SecondaryKey` annotation as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <EntityType Name="Product">
>     <Key>
>         <PropertyRef Name="ProductId"/>
>     </Key>
>     <Property Name="ProductId" Type="Edm.Int32" Nullable="false"/>
>     <Property Name="ProductCode" Type="Edm.String" Nullable="false"/>
>     <Property Name="ProductName" Type="Edm.String" Nullable="false"/>
> 
>     <!-- Secondary key annotation -->
>     <Annotations>
>         <Annotation Term="Common.SecondaryKey">
>             <Collection>
>                 <PropertyPath>ProductCode</PropertyPath>
>             </Collection>
>         </Annotation>
>     </Annotations>
> </EntityType>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate c_salesordermanage_sd.Product with @(
>     Common.SecondaryKey: ['ProductCode']
> );
> ```



## Using the `additionalProperties` Parameter

In the following sample code, the `StockQuantity`, `ReorderLevel`, `LeadTimeDays`, and `Supplier/Name` properties and the `_quantity/stock` navigation property are fetched when the object page loads, regardless of whether they appear in a control:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "ObjectPage": {
>                     "options": {
>                         "settings": {
>                             "additionalProperties": ["StockQuantity", "ReorderLevel", "LeadTimeDays", "Supplier/Name, "_quantity/stock"]
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

