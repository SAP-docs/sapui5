<!-- loiof0e1e1743bef4f519c34025ad4351f77 -->

# Defining Line Items

Table column configuration using `UI.LineItem` annotations defines which data fields appear as columns in tables in SAP Fiori elements for OData V4.

You can define table columns with `UI.LineItem` annotations. To define the line items of a table, use `com.sap.vocabularies.UI.v1.LineItem` as shown in the following sample code:

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

The rendering result is as follows:

  
  
**List Report Page: LineItem of Root EntitySet**

![](images/ListReport_LineItem_69a7c44.png "List Report Page: LineItem of Root EntitySet")

You can define the labels in the column headers in the `UI.DataField`. If you don't define custom labels, the column header uses the property labels.

The column header label isn't displayed if any of the following is true:

-   The column contains an inline action with navigation configured using `DataFieldForIntentBasedNavigation`.

    For more information, see the [App-Specific Actions](adding-actions-to-tables-b623e0b.md#loiob623e0bbbb2b4147b2d0516c463921a0__section_ifk_jqb_2nb) section in [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).

-   The column contains a field group without a statically visible label value for `dataField` or `dataFieldForAnnotation`.

    For more information, see the [Table Implementation](grouping-of-fields-2f84455.md#loio2f84455b793445e78485d6f4bf3d3561__section_fmx_nrt_n4b) section in [Grouping of Fields](grouping-of-fields-2f84455.md).




## Related Links

For information about adding actions for line items, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).

For information about responsiveness options in tables, see [Responsiveness Options: Example](responsiveness-options-example-69efbe7.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Defining Line Items](defining-line-items-c007f4a.md).

