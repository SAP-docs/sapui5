<!-- loiob8312a4adde54f33a89480dbe12d8632 -->

# Adding a Micro Chart to a Table

You can add a micro chart to the column of a responsive table on the list report page and the object page.

To add a micro chart to a table, use the `UI.LineItem` annotation and the complex type `DataFieldForAnnotation`. The micro charts are then displayed within the table column, as shown in the following screenshot:

  
  
**Micro Chart on List Report Page Table**

![](images/Micro_Chart_in_List_Report_Table_b010c13.png "Micro Chart
                on
                List
                Report
                Page Table")

> ### Note:  
> You cannot sort and filter the measures and dimensions in a micro chart from the column header. These measures and dimensions are available in the *Settings* menu *Sorting and Filtering* menu if they are direct properties of the table entity.



In tables, the micro chart is displayed in size `XS` without additional information such as title, description, dimension, measure labels, or footers indicating the unit of measure.

To add a micro chart to a table, include `DataFieldForAnnotation`, which references the micro chart, in the `LineItem` annotation, as shown in the sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="UI.DataFieldForAnnotation">
>     <PropertyValue Property="Target" AnnotationPath="_CreditLimitDetails/@com.sap.vocabularies.UI.v1.Chart#RadialCriticalityPathHidden" />
>     <PropertyValue Property="Label" String="Credit Limit Details" />
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> {
> label: 'Credit Limit Details',
> type: #AS_CHART, valueQualifier: 'RadialCriticalityPathHidden', value: '_ CreditLimitDetails'
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> {
>             $Type             : 'UI.DataFieldForAnnotation',
>             Target            : '_CreditLimitDetails/@com.sap.vocabularies.UI.v1.Chart#RadialCriticalityPathHidden',
>             Label             : 'Credit Limit Details'
> }
> 
> ```



## Configuring a Micro Chart for Responsive Tables

You can specify the size of a micro chart in a responsive table. To do so, configure the `microChartSize` property in the `manifest.json` file. By default, the size of a micro chart is `XS`.

Additionally, you can control the visibility of chart labels by setting the `showMicroChartLabel` property to either `true` or `false`, in the `manifest.json` file. By default, `showMicroChartLabel` is set to `false`.

The following sample code shows how to define a micro chart of size `M` with labels in a responsive table:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "options":{
>     "settings":{
>         "controlConfiguration": {
>             "@com.sap.vocabularies.UI.v1.LineItem": {
>                 "actions":{},
>                 "tableSettings":{
>                     "type": "ResponsiveTable"
>                 },
>                 "columns" : {
>                         "DataFieldForAnnotation::_CreditLimitDetails::Chart::RadialCriticalityPathHidden ": {
>                             "settings" : {
>                                 " microChartSize": "M",
>                                 " showMicroChartLabel ": true
>                             }
>                         }
>                 }
>             }
>         }
>     }
> }
> ```

> ### Note:  
> A micro chart within a table may not be rendered if an error occurs while retrieving the data or if no data is available in the back end.



## Applying Sort Order to Micro Charts in Responsive Tables

You can define a sort order for the micro chart data using the `UI.PresentationVariant`, choosing either ascending or descending order. This sorting option is available for area micro charts, line micro charts, column micro charts, comparison micro charts, and stacked bar micro charts.

> ### Note:  
> Micro charts consider only the `SortOrderType` property and ignore other properties in the `PresentationVariantType`.

To enable sorting, add `UI.DataFieldForAnnotation` within `UI.LineItem`. Then, link `UI.PresentationVariant` to this`UI.DataFieldForAnnotation` instead of directly linking it to `UI.Chart`.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderItem">
> <Annotation Term="UI.LineItem">
>    <Collection>
>       ………
>       ………
>       <Record Type="UI.DataFieldForAnnotation">
>          <PropertyValue Property="Target" AnnotationPath=”_Item/@com.sap.vocabularies.UI.v1.PresentationVariant#AreaMaxPath” />
>          <PropertyValue Property="Label" String="Credit Limit Details"/>
>          <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Low"/>
>       </Record>
>    </Collection>
> </Annotation>
> 
> <Annotation Term="UI.PresentationVariant" Qualifier="AreaMaxPath">
>    <Record Type="UI.PresentationVariantType">
>       <PropertyValue Property="Visualizations">
>          <Collection>
>             <AnnotationPath>@UI.Chart#AreaMaxPath</AnnotationPath>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="SortOrder">
>         <Collection>
>             <Record Type="Common.SortOrderType">
>                <PropertyValue Property="Property" PropertyPath="NetAmount"/>
>                <PropertyValue Property="Descending" Bool="true"/>
>             </Record>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> 
> <Annotation Term="UI.Chart" Qualifier="AreaMaxPath">
>    ………
>    ………
> </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem: [
>       ………
>       ………
>       {
>         $Type            : 'UI.DataFieldForAnnotation',
>         Target           :'_Item/@com.sap.vocabularies.UI.v1.PresentationVariant#AreaMaxPath',
>         Label            : 'Credit Limit Details',
>         ![@UI.Importance]: #Low
>       }
>     ]
>   },
> 
> annotate c_salesordermanage_sd.SalesOrderItem with @(UI: {
>   PresentationVariant #AreaMaxPath: {
>      Visualizations: ['@UI.Chart#AreaMaxPath'],
>      SortOrder     : [{
>         Property  : 'NetAmount',
>         Descending: true
>      }]
>   },
>   Chart #AreaMaxPath: {
>      ………
>      ………
>   },
>   ………
>   ………
> });
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adding a Micro Chart to a Table](adding-a-micro-chart-to-a-table-6a52793.md).

