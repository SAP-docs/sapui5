<!-- loiof4eb70f4808b48adb6ea03a4017aba24 -->

# Configuring Tables

You can use the annotations and entries in the `manifest.json` to control various aspects of tables.



<a name="loiof4eb70f4808b48adb6ea03a4017aba24__section_yxw_dfl_blb"/>

## Additional Features in SAP Fiori Elements for OData V2

For information on smart tables, see [`sap.ui.comp.smarttable.SmartTable`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and [Tables: Which One Should I Choose?](../10_More_About_Controls/tables-which-one-should-i-choose-148892f.md).



<a name="loiof4eb70f4808b48adb6ea03a4017aba24__section_iqh_kgv_mtb"/>

## Additional Features in SAP Fiori Elements for OData V4

You use the `UI.LineItem` annotation to configure a table. It can also be packaged within the `UI.PresentationVariant` annotation to control other aspects, such as sorting. For more information about which `UI.PresentationVariant` is picked, see [Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md).

> ### Sample Code:  
> `PresentationVariant`
> 
> ```
> <Annotation Term="UI.PresentationVariant">
>   <Record>
>     <PropertyValue Property="Text" String="Default"/>
>     <PropertyValue Property="SortOrder">
>       <Collection>
>         <Record Type="Common.SortOrderType">
>           <PropertyValue Property="Property" PropertyPath="NetAmount"/>
>           <PropertyValue Property="Descending" Bool="true"/>
>         </Record>
>       </Collection>
>     </PropertyValue>
>     <PropertyValue Property="Visualizations">
>       <Collection>
>          <AnnotationPath>@UI.LineItem#Default</AnnotationPath>
>       </Collection>
>    </PropertyValue>
>   </Record>
> </Annotation>
> ```

> ### Sample Code:  
> `LineItem`
> 
> ```
> <Annotation Term="UI.LineItem" Qualifier="Default">
>   <Collection>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="DeliveryCalendarYear"/>
>         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="DeliveryCalendarMonth"/>
>         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="SalesOrder"/>
>         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataFieldForIntentBasedNavigation">
>       <PropertyValue Property="Label" String="Manage Sales Order"/>
>       <PropertyValue Property="SemanticObject" String="EPMSalesOrder"/>
>       <PropertyValue Property="Action" String="manage_st"/>
>       <PropertyValue Property="RequiresContext" Bool="false"/>
>         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Label" String="Item"/>
>       <PropertyValue Property="Value" Path="SalesOrderItem"/>
>       <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataField">
>       <PropertyValue Property="Value" Path="Product"/>
>       <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>     </Record>
>     <Record Type="UI.DataFieldForAction">
>          <PropertyValue Property="Label" String="Copy"/>
>          <PropertyValue Property="Action" String="CZ_EASILINEITEMS_SADL_CDS.CZ_EASILINEITEMS_SADLType/Copy"/>
>          <PropertyValue Property="InvocationGrouping" EnumMember="UI.OperationGroupingType/Isolated"/>
>          <PropertyValue Property="Determining" Bool="true"/>
>     </Record>
>     <Record Type="UI.DataFieldForIntentBasedNavigation">
>          <PropertyValue Property="Label" String="Manage Products (STTA)"/>
>          <PropertyValue Property="SemanticObject" String="EPMProduct"/>
>          <PropertyValue Property="Action" String="manage_st"/>
>          <PropertyValue Property="Determining" Bool="true"/>
>      </Record>  
> </Collection>
> </Annotation>
> ```

-   **[Defining Line Items](defining-line-items-f0e1e17.md "")**  

-   **[Tables](tables-c0f6592.md " SAP Fiori elements supports several table types.")**  
 SAP Fiori elements supports several table types.
-   **[Setting the Table Type](setting-the-table-type-7f844f1.md "In the manifest.json file, and through annotations, you can control
		which table type is rendered in the list report and on the object page.")**  
In the `manifest.json` file, and through annotations, you can control which table type is rendered in the list report and on the object page.
-   **[Setting the Table Header](setting-the-table-header-f996207.md "The header of the table is set using com.sap.vocabularies.UI.v1.HeaderInfo
			TypeNamePlural.")**  
The header of the table is set using `com.sap.vocabularies.UI.v1.HeaderInfo TypeNamePlural`.
-   **[Table Groupings](table-groupings-d344c5a.md "SAP Fiori elements
		handles
		table groupings automatically.")**  
SAP Fiori elements handles table groupings automatically.
-   **[Enabling Table Personalization](enabling-table-personalization-3e2b4d2.md "You can use table personalization to modify the settings of a table.")**  
You can use table personalization to modify the settings of a table.
-   **[Enabling Multiple Selection in Tables](enabling-multiple-selection-in-tables-116b5d8.md "This feature enables you to configure whether end users can select a single row or multiple rows in a table, while triggering table
    toolbar actions that require context.")**  
This feature enables you to configure whether end users can select a single row or multiple rows in a table, while triggering table toolbar actions that require context.
-   **[Adding Actions to Tables](adding-actions-to-tables-b623e0b.md "The table control offers a possibility to show both the generic actions, such as Create and
         Delete, as well as application-specific actions.")**  
The table control offers a possibility to show both the generic actions, such as *Create* and *Delete*, as well as application-specific actions.
-   **[Highlighting Line Items Based on Criticality](highlighting-line-items-based-on-criticality-0d501b1.md "You can add semantic highlights to line items in tables, based on their criticality.")**  
You can add semantic highlights to line items in tables, based on their criticality.
-   **[Adding a Rating Indicator to a Table](adding-a-rating-indicator-to-a-table-a797173.md "You can add a read-only rating indicator to a table.")**  
You can add a read-only rating indicator to a table.
-   **[Adding a Progress Indicator to a Table](adding-a-progress-indicator-to-a-table-43f6f0f.md "You can add a progress indicator to a table.")**  
You can add a progress indicator to a table.
-   **[Adding a Micro Chart to a Table](adding-a-micro-chart-to-a-table-b8312a4.md "You can add a micro chart to a column in both the list report and the object
        page.")**  
You can add a micro chart to a column in both the list report and the object page.
-   **[Adding a Contact Quick View to a Table](adding-a-contact-quick-view-to-a-table-677fbde.md "Using the @Communication.Contact annotation, you can enable a contact quick view in a table.")**  
Using the `@Communication.Contact` annotation, you can enable a contact quick view in a table.
-   **[Adding Multiple Fields to One Column in Responsive Tables](adding-multiple-fields-to-one-column-in-responsive-tables-d318e42.md "You can add multiple IDs, descriptions, and action buttons to one column in a responsive
        table.")**  
You can add multiple IDs, descriptions, and action buttons to one column in a responsive table.
-   **[Using the Condensed Table Layout](using-the-condensed-table-layout-f3cc057.md "You can set the content density to condensed for
			ui.table on the list report and object page applications.")**  
You can set the content density to `condensed` for `ui.table` on the list report and object page applications.
-   **[Enabling Editing Using a Dialog \(Mass Edit\)](enabling-editing-using-a-dialog-mass-edit-965ef5b.md "Mass editing allows users to simultaneously change multiple objects that share the same editable properties.")**  
Mass editing allows users to simultaneously change multiple objects that share the same editable properties.
-   **[Enabling the Full-Screen Mode for Tables](enabling-the-full-screen-mode-for-tables-1d3c2ff.md "When application developers enable the full-screen mode for tables, a button on the table toolbar is displayed that allows users to open
		the table in full-screen mode. This provides more space for displaying and working with table entries.")**  
When application developers enable the full-screen mode for tables, a button on the table toolbar is displayed that allows users to open the table in full-screen mode. This provides more space for displaying and working with table entries.
-   **[Overriding the Horizontal Alignment of Annotation-Based Table Columns](overriding-the-horizontal-alignment-of-annotation-based-table-columns-fb93920.md "Application developers can override the horizontal alignment of table columns via the manifest.")**  
Application developers can override the horizontal alignment of table columns via the manifest.
-   **[Handling Semantic Key Fields](handling-semantic-key-fields-aa2793c.md "Semantic key fields in tables are displayed with a special logic.")**  
Semantic key fields in tables are displayed with a special logic.
-   **[Displaying Images in Tables](displaying-images-in-tables-492bc79.md "To display images in tables, you must first add a data field with a value that relates to an image URL.")**  
To display images in tables, you must first add a data field with a value that relates to an image URL.

**Related Information**  


[Maintaining Standard Texts for Tables](maintaining-standard-texts-for-tables-aacfac5.md "In a table, if the system does not find any entries when using the filter, standard UI texts are displayed, which you can adapt in the i18n file of your app.")

[Maintaining Standard Texts for Charts](maintaining-standard-texts-for-charts-37cd601.md "For charts in analytical list pages, list reports, and object pages, if the system does not find any entries when using the filters, standard UI texts are displayed, which you can adapt in the i18n file of your app.")

[Setting the Default Column Width](setting-the-default-column-width-a765253.md "You can customize the width of a column defined in a line item via the com.sap.vocabularies.HTML5.v1.CssDefaults UI annotation.")

[Extension Points for Tables](extension-points-for-tables-d525522.md "You can use extension points to enhance tables in SAP Fiori elements apps.")

