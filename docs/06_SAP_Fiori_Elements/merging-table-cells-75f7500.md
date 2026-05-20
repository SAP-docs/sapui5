<!-- loio75f7500572f6483d9a92c83b43eb9f87 -->

# Merging Table Cells

You can merge adjacent cells with identical values in responsive tables using the `Table` building block in SAP Fiori elements for OData V4.

Cell merging groups repeated values to make the data easier to read when rows in a column share the same value. Cell merging is supported in display mode for responsive tables. Cells automatically unmerge when the table switches to edit mode.

The following column types are supported:

-   `DataField`
-   `DataFieldForAnnotation`
-   `DataField` and `DataFieldForAnnotation` with a `SemanticObject` or `QuickView`: Requires using `mergeComparisionProperties`
-   `DataFieldWithUrl`: Requires using `mergeComparisonProperties`

Custom columns, field groups and connected fields are not supported.

You can enable cell merging using one of the following methods:

-   `@HTML5.RowSpanForDuplicateValues` annotation

    This method is best when you want to enable cell merging automatically whenever the table is rendered. If `mergeColumn` is set to `false` in the `manifest.json` file, the annotation is disregarded.

-   `mergeColumn` and `mergeComparisonProperties` manifest settings

    This method is best when you cannot change the OData annotation or you require per-column control. This method also supports `DataFieldWithUrl`, `QuickView`, and `SemanticObject` columns.

-   `ColumnOverride` in the `Table` building block

    This method is best if you want to enable cell merging directly in the XML fragment.


> ### Note:  
> Using the `manifest` settings and `ColumnOverride` override the `@HTML5.RowSpanForDuplicateValues` annotation.
> 
> Properties listed in the `mergeComparisonProperties` property are automatically requested even if they are not visible in the table.



## Using the `@HTML5.RowSpanForDuplicateValues` Annotation

To enable cell merging whenever the table is rendered, set the `@HTML5.RowSpanForDuplicateValues` annotation to a `DataField` inside a `LineItem`, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="TableMerging.Products">
>     <Annotation Term="UI.LineItem">
>         <Collection>
>             <Record Type="UI.DataField">
>                 <PropertyValue Property="Value" Path="Category"/>
>                 <Annotation Term="HTML5.RowSpanForDuplicateValues"/>
>             </Record>
>             <Record Type="UI.DataField">
>                 <PropertyValue Property="Value" Path="Status"/>
>             </Record>
>         </Collection>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate TableMerging.Products with @(
>     UI.LineItem: [
>         {
>             $Type: 'UI.DataField',
>             Value: Category,
>             ![@HTML5.RowSpanForDuplicateValues]
>         }
>     ]
> );
> ```



## Using the `mergeColumn` and `mergeComparisonProperties` Manifest Settings

To enable cell merging per column, set the `mergeColumn` property in the `controlConfiguration` section of the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "type": "ResponsiveTable"
>         },
>         "columns": {
>             "DataField::Category": {
>                 "settings": {
>                     "mergeColumn": true
>                 }
>             }
>         }
>     }
> }
> ```

Cell merging is disabled by default for columns that are displayed as links, for example, `DataFieldWithUrl` and columns with a `QuickView` or `SemanticObject` because these columns do not provide a suitable comparison key. To enable cell merging for these column types, you must set the `mergeComparisonProperties` property in the `manifest.json` file as a list of property paths whose values are used as the comparison key, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "ProductsList": {
>                 "options": {
>                     "settings": {
>                         "controlConfiguration": {
>                             "@com.sap.vocabularies.UI.v1.LineItem": {
>                                 "columns": {
>                                     "DataField::Supplier_ID": {
>                                         "settings": {
>                                             "mergeColumn": true,
>                                             "mergeComparisonProperties": [
>                                                 "toSupplier/Name",
>                                                 "toSupplier/Address",
>                                                 "toSupplier/ContactEmail"
>                                             ]
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



## Using `ColumnOverride` in the `Table` Building Block

You can also merge cells in tables that use the `Table` building block. To merge cells in the `Table` building block, use a `ColumnOverride`, as shown in the following sample code:

> ### Sample Code:  
> The `Table` Building Block
> 
> ```
> <core:FragmentDefinition
>     xmlns="sap.m"
>     xmlns:core="sap.ui.core"
>     xmlns:l="sap.ui.layout"
>     xmlns:macros="sap.fe.macros"
>     xmlns:macrosTable="sap.fe.macros.table"
> >
>     <l:VerticalLayout width="100%">
>         <macros:Table
>             metaPath="items/@com.sap.vocabularies.UI.v1.PresentationVariant#ByQuantity"
>             header="Items (Building Block)"
>             readOnly="true"
>             type="ResponsiveTable"
>             id="itemsBBTable"
>         >
>             <macros:columns>
>                 <macrosTable:ColumnOverride
>                     key="DataField::Supplier_ID"
>                     mergeCells="true"
>                 />
>             </macros:columns>
>         </macros:Table>
>     </l:VerticalLayout>
> </core:FragmentDefinition>
> ```

To enable cell merging for link columns, set the `mergeComparisonProperties` property in the `ColumnOverride` file as a list of property paths whose values are used as the comparison key, as shown in the following sample code:

> ### Sample Code:  
> The `Table` Building Block
> 
> ```
> <core:FragmentDefinition
>     xmlns="sap.m"
>     xmlns:core="sap.ui.core"
>     xmlns:l="sap.ui.layout"
>     xmlns:macros="sap.fe.macros"
>     xmlns:macrosTable="sap.fe.macros.table"
> >
>     <l:VerticalLayout width="100%">
>         <macros:Table
>             metaPath="items/@com.sap.vocabularies.UI.v1.PresentationVariant#ByQuantity"
>             header="Items (Building Block)"
>             readOnly="true"
>             type="ResponsiveTable"
>             id="itemsBBTable"
>         >
>             <macros:columns>
>                 <macrosTable:ColumnOverride
>                     key="DataField::Supplier_ID"
>                     mergeCells="true"
>                     mergeComparisonProperties="toSupplier/Name,toSupplier/Address"
>                 />
>             </macros:columns>
>         </macros:Table>
>     </l:VerticalLayout>
> </core:FragmentDefinition>
> ```

