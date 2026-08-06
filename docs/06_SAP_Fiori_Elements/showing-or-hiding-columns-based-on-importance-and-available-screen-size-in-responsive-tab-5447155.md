<!-- loio5447155fac344d6a917c6d383c354f30 -->

# Showing or Hiding Columns Based on Importance and Available Screen Size in Responsive Tables

Column visibility control in responsive tables automatically shows or hides columns based on the `UI.Importance` annotation and available screen width in SAP Fiori elements for OData V4. Use this feature to optimize table display on smaller screens while ensuring that critical information remains visible.

You can show or hide columns of the list report page and object page tables depending on the screen width. This feature is useful in situations like the following:

-   The browser window is small.

-   The application is running on a device with a smaller screen.

-   You are using the flexible column layout.


The value of the `UI.Importance` annotation for the field determines which columns are hidden or moved when the screen size is reduced.

You can use the `UI.Importance` annotation to set the importance for table columns as follows:

-   `High`: Columns with a `High` importance setting are visible on all screen sizes. When the screen size is reduced, the columns shift to a pop-in area but remain visible on the screen.

-   `Low`: Columns with a `Low` importance setting are hidden on the screen when the screen size is reduced.

-   `None` \(default\) and `Medium`: Columns with `None` \(default\) and `Medium` importance settings are hidden automatically when the screen size is reduced.


For columns with `Low`, `None`, and `Medium` settings, the *Show More per Row* / *Show Less per Row* buttons appear in the table toolbar only if there's at least one hidden column. When the user clicks the *Show More per Row* button, the hidden column information appears as a text in the pop-in area. To hide the pop-in area, click the *Show Less per Row* button.

> ### Note:  
> -   Columns that have no importance setting \(`None`\) but containing a semantic key are considered of `High` importance \(also when used in a `FieldGroup`\).
> 
> -   Columns with a `Low` importance setting are hidden first on smaller screens, followed by columns with the settings `None` \(default\) and `Medium`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductSalesPriceType">
>     <Annotation Term="UI.LineItem">
>         <Collection>
>             <Record Type="UI.DataField">
>                 <PropertyValue Property="Value" Path="PriceDay" />
>                 <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High" />
>             </Record>
>             <Record Type="UI.DataField">
>                 <PropertyValue Property="Value" Path="TargetPrice" />
>                 <!-- This will be treated with default importance "None" which is the same as "Medium" -->
>             </Record>
>             <Record Type="UI.DataField">
>                 <PropertyValue Property="Value" Path="DiscountPriceTarget" />
>                 <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Low" />
>             </Record>
>         </Collection>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [
>     {
>         position: 10,
>         importance: #HIGH
>     }
> ]
> PriceDay;
> 
> @UI.lineItem: [
>     {
>         position: 20
>         // Default importance is #MEDIUM
>     }
> ]
> TargetPrice;
> 
> @UI.lineItem: [
>     {
>         position: 30,
>         importance: #LOW
>     }
> ]
> DiscountPriceTarget;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate STTA_PROD_MAN.STTA_C_MP_ProductSalesPriceType with @(
>     UI.LineItem: [
>         {
>             $Type: 'UI.DataField',
>             Value: PriceDay,
>             ![@UI.Importance]: #High
>         },
>         {
>             $Type: 'UI.DataField',
>             Value: TargetPrice
>             // Default importance is Medium (same as None)
>         },
>         {
>             $Type: 'UI.DataField',
>             Value: DiscountPriceTarget,
>             ![@UI.Importance]: #Low
>         }
>     ]
> );
> ```

> ### Note:  
> Starting from SAPUI5 1.87, SAP Fiori elements automatically calculates the default column width and provides an option to resize the column width in responsive tables. This is the default behavior. Having fewer columns in a table increases the free space available on the right side of the table.

