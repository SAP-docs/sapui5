<!-- loio2180a6faa3ba4269aab16a77b905ee23 -->

# Smart Micro Chart

The `sap.ui.comp.smartmicrochart.SmartMicroChart` control is used to create different micro charts based on OData metadata.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartmicrochart.SmartMicroChart) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartmicrochart.SmartMicroChart) in the Demo Kit.



<a name="loio2180a6faa3ba4269aab16a77b905ee23__section_y4b_djc_wz"/>

## Overview

The `SmartMicroChart` control analyzes the metadata document of an OData service and renders a `MicroChart` control for a specified entitySet. If no annotations or metadata are provided, the chart will not be rendered.

According to the defined value in the `chartType` property of the *UI.Chart* annotation the corresponding `MicroChart` control is rendered. Currently, the following chart types are supported:

-   *Area* \(`sap.ui.comp.smartmicrochart.SmartAreaMicroChart` will be created\) based on the `UI.ChartType` *Area* and *Line*.

-   *Bullet* \(`sap.ui.comp.smartmicrochart.SmartBulletMicroChart` will be created\) based on `UI.ChartType` *Bullet*.

-   *Radial* \(`sap.ui.comp.smartmicrochart.SmartRadialMicroChart` will be created\) based on the `UI.ChartType` *Donut*.


> ### Note:  
> In case of a different *UI.ChartType* is provided than the mentioned above, the control does not render anything. The developer gets informed with a log statement.

The metadata should be annotated with the *UI.Chart* and the *UI.DataPoint* terms. Both terms need to annotate one and the same entityType \(see also the `entitySet` property of the `SmartMicroChart` control in the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartmicrochart.SmartMicroChart)\).



<a name="loio2180a6faa3ba4269aab16a77b905ee23__section_z4b_djc_wz"/>

## Details



### Property handling

All supported chart types of SmartMicroCharts need to handle the properties as follows:

-   *DataPoint* property of the *Chart* annotation should point to the *DataPoint* annotation. Example:

    ```xml
    <Property="DataPoint" AnnotationPath="@UI.DataPoint#BulletChartDataPoint">
    ```

    In this example, the `BulletChartDataPoint` is the qualifier of the *DataPoint* annotation.

-   *Measures* and *Measure* properties

    *Measures* property of the *Chart* annotation and *Measure* property of the *MeasureAttributes* property of the *Chart* annotation should point at the same property in the `entityType` \(Revenue in the sample below\). Example:

    ```xml
    <EntityType Name="ProductType" sap:label="Product Sales Data" sap:content-version="1">
    				<Key>
    					<PropertyRef Name="Product" />
    				</Key>
    				<Property Name="Product" Type="Edm.String" />
    				<Property Name="Revenue" Type="Edm.Decimal"/>
    				<Property Name="TargetRevenue" Type="Edm.Decimal"/>
    				<Property Name="ForecastRevenue" Type="Edm.Decimal"/>
    				<Property Name="Criticality" Type="Edm.String"/>
    				<Property Name="Currency" Type="Edm.String"/>
    				<Property Name="ChartTitle" Type="Edm.String"/>
    				<Property Name="ChartDescription" Type="Edm.String"/>
    			</EntityType>					
    ```

    ```xml
    <Annotations Target="BmcNamespace.ProductType" xmlns="http://docs.oasis-open.org/odata/ns/edm">
    				<Annotation Term="UI.Chart">
    					<Record>
    						<PropertyValue EnumMember="UI.ChartType/Bullet"
    							Property="ChartType" />
    						<PropertyValue Property="Title" Path="ChartTitle" />
    						<PropertyValue Property="Description" Path="ChartDescription" />
    						<PropertyValue Property="Measures">
    							<Collection>
    								<PropertyPath>Revenue</PropertyPath>
    							</Collection>
    						</PropertyValue>
    						<PropertyValue Property="MeasureAttributes">
    							<Collection>
    								<Record Type="UI.ChartMeasureAttributeType">
    									<PropertyValue Property="Measure" PropertyPath="Revenue" />
    									<PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1" />
    									<PropertyValue Property="DataPoint" AnnotationPath="@UI.DataPoint#BulletChartDataPoint" />
    								</Record>
    							</Collection>
    						</PropertyValue>
    					</Record>
    				</Annotation>
    				<Annotation Term="UI.DataPoint" Qualifier="BulletChartDataPoint">
    					<Record>
    						<PropertyValue String="Product" Property="Title" />
    						<PropertyValue Path="Revenue" Property="Value" />
    						<PropertyValue Path="TargetRevenue" Property="TargetValue" />
    						<PropertyValue Path="ForecastRevenue" Property="ForecastValue" />
    						<PropertyValue Decimal="0" Property="MinimumValue" />
    						<PropertyValue Decimal="200" Property="MaximumValue" />
    						<PropertyValue Path="Criticality" Property="Criticality" />
    					</Record>
    				</Annotation>
    			</Annotations>
    
    
    
    ```

    > ### Note:  
    > The same `entityType` property should be used as a path for the `Value` property of the *DataPoint* annotation.




### Qualifiers

With the qualifier for the *UI.Chart* annotation term, the SmartMicroChart control can support multiple *UI.Chart* annotations for an OData service. Depending on the qualifiers, you can separate these multiple annotations and handle the different OData Annotations in this control.

You can provide the qualifier name through the `CustomData`aggregation of the corresponding SmartMicroChart control. A qualifier for *UI.Chart* annotation with Qualifier can look like this:

```xml
<Annotation Term="UI.Chart" Qualifier="BulletChartQualifier">
```

The "BulletChartQualifier" string is the qualifier and can be any kind of string. The SmartMicroChart control needs this string to find the corresponding annotation. This is handled by providing the qualifier string as a custom data on the control instance.

```xml

		<SmartMicroChart id="smartChartBullet" entitySet="Products" enableAutoBinding="true" chartBindingPath="/Products('PC')" isResponsive="true">
			<customData>
			<core:CustomData key="chartQualifier" value="BulletChartQualifier" />
			</customData>
		</SmartMicroChart>
```

The custom data key is "chartQualifier". There are three different options supported how custom data can be provided:

-   as XML declaration
-   by calling data function
-   by calling addCustomData function

