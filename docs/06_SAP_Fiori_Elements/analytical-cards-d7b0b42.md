<!-- loiod7b0b420eccf4d50bfd1b8a75e7a0fed -->

# Analytical Cards

Analytical cards let you view data in a variety of chart formats. The card is divided into two areas \(header and chart\).



In the header area, you can view the aggregated value of a key performance indicator \(KPI\), the trend, and percentage of change. In the chart area, you can view a graphical representation of the data.

> ### Note:  
> If you configure the chart title, chart descriptions \(x- and y-axis\) are not displayed in the card \(except for bubble charts\). For example, the chart title *Net Sales by Days Payable*, already conveys that the y-axis is *Net Sales* and the x-axis represents *Days Payable*.





### Chart Responsiveness

To improve the responsiveness of charts, you can use `UI.PresentationVariant.MaxItems` to limit the number of records fetched from the backend that are rendered on the screen. For example:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.PresentationVariant" Qualifier="Column_Eval_by_Country_123">
>     <Record>      
>           <PropertyValue Property="MaxItems" Int="5" />
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.PresentationVariant: [
>   {
>     maxItems: 5,
>     qualifier: 'Column_Eval_by_Country_123'
>   }
> ]
> annotate view VIEWNAME with { }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.PresentationVariant #Column_Eval_by_Country_123 : {
>     MaxItems : 5
> }
> ```

> ### Tip:  
> If there are too many data records displayed in the chart, it is difficult to select a data point. If you are only interested in checking the top records, then use `UI.PresentationVariant.SortOrder`. For more information, see [Configuring Card Properties](configuring-card-properties-53b0791.md).



### Chart Interactivity

Users can choose specific data points to pass data in URL parameters to the target application. The target application can read these URL parameters and use them as required \(typically to filter the data set that they are displaying\).

When a user select a particular data point, the system passes a technical ID \(`"RegionID"="001"`\) instead of the display name \(`"Region"="EMEA"`\).



### Axis Scaling

Axis scaling lets you scale and display data for line, bubble, or scatter charts in the analytics card. You can choose any of the following axis scaling types:

1.  **Type 1: `ZeroAlwaysVisible`**

    The default behavior displays data in the respective chart format including the zero value. The graph is adjusted according to the available data range.

    Set the following property in the `UI.Chart` annotation:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <PropertyValue Property="AxisScaling">
    > >   <Record Type="UI.ChartAxisScalingType">
    > >       <PropertyValue Property="AutoScaleBehavior">
    > >           <Record Type="UI.ChartAxisAutoScaleBehaviorType">
    > >               <PropertyValue Property="ZeroAlwaysVisible" Bool="true"/>
    > >           </Record>
    > >       </PropertyValue>
    > >   </Record>
    > > </PropertyValue>
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > AxisScaling : { 
    > >     $Type : 'UI.ChartAxisScalingType',
    > >     AutoScaleBehavior: { 
    > >        $Type: 'UI.ChartAxisAutoScaleBehaviorType',
    > >        ZeroAlwaysVisible: true
    > >        }
    > >  }
    > ```

2.  **Type 2: `DataScope`**

    The adjust scale property displays data in the respective chart format based on the available data range. It determines the automatic scaling. Minimum and maximum axes values are determined from the entire data set.

    Set the following property in the \`UI.Chart\` annotation:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <PropertyValue Property="AxisScaling">
    > >   <Record Type="UI.ChartAxisScalingType">
    > >       <PropertyValue Property="AutoScaleBehavior">
    > >           <Record Type="UI.ChartAxisAutoScaleBehaviorType">
    > >               <PropertyValue Property="DataScope" EnumMember="DataSet"/>
    > >           </Record>
    > >       </PropertyValue>
    > >   </Record>
    > > </PropertyValue>>
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    >  AxisScaling : { 
    > >     $Type : 'UI.ChartAxisScalingType',
    > >     AutoScaleBehavior: { 
    > >        $Type: 'UI.ChartAxisAutoScaleBehaviorType',
    > >        DataScope: 'DataSet'
    > >        }
    > >  }
    > ```

3.  **Type 3: `FixedScale`**

    Scale Behaviour set to `FixedScale` lets you define the minimum and maximum data range to display data in the respective chart format. Fixed minimum and maximum values are applied, that are derived from the `@UI.MeasureAttributes.DataPoint/MinimumValue and .../MaximumValue` annotation by default.

    Set the following property in the `UI.Chart` annotation:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <PropertyValue Property="AxisScaling">
    > >   <Record Type="UI.ChartAxisScalingType">
    > >       <PropertyValue Property="ScaleBehavior" EnumMember="UI.ChartAxisScaleBehaviorType/FixedScale"/>
    > >   </Record>
    > > </PropertyValue>
    > ```

    > ### Sample Code:  
    > CAP
    > 
    > ```
    > AxisScaling : { 
    > >     $Type : 'UI.ChartAxisScalingType',
    > >     ScaleBehavior: #FixedScale
    > >  }
    > ```


You must define the `DataPoint` annotation to set the minimum and maximum values.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.DataPoint" Qualifier="DataPoint_Qualifier">
>   <Record Type="UI.DataPointType">
>     <PropertyValue Property="MinimumValue" Decimal="1" />
>     <PropertyValue Property="MaximumValue" Decimal="5" />
>     <PropertyValue Property="ValueFormat">
>       <Record>
>         .......
>       </Record>
>     </PropertyValue>
>   </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.dataPoint: { 
>     minimumValue: 1,
>     maximumValue: 2,
> 	valueFormat: { }
> }
> property_name;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.DataPoint #DataPointQualifier : {
>     $Type : 'UI.DataPointType',
>     MinimumValue : 1,
>     MaximumValue : 5,
>     NumberFormat : { }
> },
> 
> ```





### Descriptor Configuration Sample

> ### Sample Code:  
> The following is a snippet of a sample descriptor file:
> 
> ```
> "sap.app": {
>    "_version": "1.1.0",
>    "id": "sap.ovp.demo",
>    "type": "application",
>    "i18n": "i18n/i18n.properties",
>    "applicationVersion": {
>                            "version": "1.2.2"
>                          },
>    "title": "{{app_title}}",
>    "description": "{{app_description}}",
>    "dataSources": {
>       "salesShare": {
>                        "uri": "https://abc.com/SalesShare.xsodata",
>                        "type": "OData",
>                        "settings": {
>                                      "odataVersion": "2.0",
>                                      "annotations": [
> 		                             "salesShareAnno"
> 	                                 ]
>                                     }
>                       },
>        "salesShareAnno": {
>                        "uri": "data/salesshare/annotations.xml",
>                        "type": "ODataAnnotation",
>                        "settings": {
>                                    }
>                           }
>                    }
>                 }
> 
> "sap.ovp": {
>     "globalFilterModel": "salesShare",
>     "globalFilterEntityType": "GlobalFilters",
>     "cards": {
>                "cardBubble": {
>                                "model": "salesShare",
>                                "template": "sap.ovp.cards.charts.analytical",
>                                "settings": {
>                                              "entitySet": "SalesShare",
>                                              "selectionAnnotationPath" : "com.sap.vocabularies.UI.v1.SelectionVariant#Eval_by_CtryCurr",
>                                              "chartAnnotationPath" : "com.sap.vocabularies.UI.v1.Chart#Eval_by_CtryCurr",
>                                              "presentationAnnotationPath" : "com.sap.vocabularies.UI.v1.PresentationVariant#Eval_by_CtryCurr",
>                                              "dataPointAnnotationPath" : "com.sap.vocabularies.UI.v1.DataPoint#Eval_by_CtryCurr",
>                                              "identificationAnnotationPath" : "com.sap.vocabularies.UI.v1.Identification#Eval_by_CtryCurr"
>                                             }
>                                },
>                 "cardchartsline": {
>                                     "model": "salesShare",
>                                     "template": "sap.ovp.cards.charts.analytical",
>                                     "settings": {
>                                                   "entitySet": "SalesShare",
>                                                   "selectionAnnotationPath" : "com.sap.vocabularies.UI.v1.SelectionVariant#Eval_by_Country",
>                                                   "chartAnnotationPath" : "com.sap.vocabularies.UI.v1.Chart#Eval_by_Country",
>                                                   "presentationAnnotationPath" : "com.sap.vocabularies.UI.v1.PresentationVariant#Eval_by_Country",
>                                                   "dataPointAnnotationPath" : "com.sap.vocabularies.UI.v1.DataPoint#Eval_by_Country",
>                                                   "idenfiticationAnnotationPath" : "com.sap.vocabularies.UI.v1.Identification#Eval_by_Country"
>                                                  }
>                                           },
>                  "cardchartsdonut": {
>                                      "model": "salesShare",
>                                      "template": "sap.ovp.cards.charts.analytical",
>                                      "settings": {
>                                                    "entitySet": "SalesShare",
>                                                    "selectionAnnotationPath" : "com.sap.vocabularies.UI.v1.SelectionVariant#Eval_by_Currency",
>                                                    "chartAnnotationPath" : "com.sap.vocabularies.UI.v1.Chart#Eval_by_Currency",
>                                                    "presentationAnnotationPath" : "com.sap.vocabularies.UI.v1.PresentationVariant#Eval_by_Currency",
>                                                    "dataPointAnnotationPath" : "com.sap.vocabularies.UI.v1.DataPoint#Eval_by_Currency",
>                                                    "idenfiticationAnnotationPath" : "com.sap.vocabularies.UI.v1.Identification#Eval_by_Currency"
>                                                   }
>                                     }
>                                 }
>                 }
> ```

> ### Note:  
> In SAP Fiori elements for OData V4, add `sap.ovp.cards.v4.charts.analytical` as the `template`. All other manifest settings are the same as in SAP Fiori elements for OData V2.



## Related Information

For more information about configuring charts, see [Configuring Charts](configuring-charts-c7c5a82.md).

