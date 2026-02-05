<!-- loioc007f4a7d2a442ba82a9fe1c443a4474 -->

# Defining Line Items

To define the line items of a table, use `com.sap.vocabularies.UI.v1.LineItem` as shown in the code samples below. The rendering result is as follows:

  
  
**List Report: LineItem of Root EntitySet**

![](images/ListReport_LineItem_69a7c44.png "List Report: LineItem of Root
					EntitySet")



<a name="loioc007f4a7d2a442ba82a9fe1c443a4474__section_vmv_cyw_l4b"/>

## Determining Column Names

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> ...
> <Annotation Term="UI.LineItem">
>   <Collection>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="Product"/>
>       <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="ProductCategory"/>
>       <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="Supplier"/>
>       <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>   </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.lineItem: [
>   {
>     importance: #HIGH,
>     value: 'PRODUCT',
>     type: #STANDARD,
>     position: 1 
>   }
> ]
> PRODUCT;
> 
> @UI.lineItem: [
>   {
>     importance: #HIGH,
>     value: 'PRODUCTCATEGORY',
>     type: #STANDARD,
>     position: 2 
>   }
> ]
> PRODUCTCATEGORY;
> 
> @UI.lineItem: [
>   {
>     importance: #HIGH,
>     value: 'SUPPLIER',
>     type: #STANDARD,
>     position: 3 
>   }
> ]
> SUPPLIER;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.LineItem : [
>     {
>         $Type : 'UI.DataField',
>         Value : Product,
>         ![@UI.Importance] : #High
>     },
>     {
>         $Type : 'UI.DataField',
>         Value : ProductCategory,
>         ![@UI.Importance] : #High
>     },
>     {
>         $Type : 'UI.DataField',
>         Value : Supplier,
>         ![@UI.Importance] : #High
>     }
> ]
> 
> ```



<a name="loioc007f4a7d2a442ba82a9fe1c443a4474__section_fkw_vr5_2hc"/>

## Related Links

For information about adding actions for line items, see [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).

For information about responsiveness options in tables, see [Responsiveness Options: Example](responsiveness-options-example-c095d2c.md).

