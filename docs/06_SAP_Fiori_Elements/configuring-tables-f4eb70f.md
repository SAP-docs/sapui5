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

**Related Information**  


[Maintaining Standard Texts for Tables](maintaining-standard-texts-for-tables-aacfac5.md "In a table, if the system does not find any entries when using the filter, standard UI texts are displayed which you can adapt in the i18n file of your app.")

[Maintaining Standard Texts for Charts](maintaining-standard-texts-for-charts-37cd601.md "For charts in analytical list pages, list reports, and object pages, if the system does not find any entries when using the filters, standard UI texts are displayed, which you can adapt in the i18n file of your app.")

[Setting the Default Column Width](setting-the-default-column-width-a765253.md "You can customize the width of a column defined in a line item via the com.sap.vocabularies.HTML5.v1.CssDefaults UI annotation.")

[Extension Points for Tables](extension-points-for-tables-d525522.md "You can use extension points to enhance tables in SAP Fiori elements apps.")

