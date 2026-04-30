<!-- loioc5e38f91823a47a9abe3305970d39877 -->

# Requesting Additional Properties on the Object Page and Custom Page

You can request additional OData properties to be fetched when the page loads.

By default, SAP Fiori elements for OData V4 only requests the visible properties displayed on a page. You can request additional properties at the page level on an object page and a custom page which uses the `sap.fe.core.fpm` component with a binding context. This is useful when you need property values to be available across multiple controls, for example, for conditional logic in controller extensions or custom actions.

You can request additional properties at the page level in the following ways:

-   ​Using the `Common.SecondaryKey` annotation
-   Using the `additionalProperties` parameter

You can request additional properties using the `Common.SecondaryKey` annotation, as shown in the following sample code:

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
> ){}
> ```

You can also request additional properties using the `additionalProperties` parameter.

> ### Note:  
> You can request navigation properties but you cannot request 1:n navigation properties.

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

You can also request additional properties at the table level. For more information, see [Requesting Additional Properties](requesting-additional-properties-82e27ff.md).

