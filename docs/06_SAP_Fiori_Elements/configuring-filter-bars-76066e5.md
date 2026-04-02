<!-- loio76066e5973f74270b951a48f8e7b0591 -->

# Configuring Filter Bars

You can configure the filter bar on the list report page and the analytical list page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

By default, only the fields included in `UI.SelectionFields`, along with all mandatory filter fields, are displayed in the filter bar. The *Editing Status* filter is added automatically if you have a draft service.

The filter bar is available only if the service configured for the application supports filtering using the `sap-filterable=true` annotation.



<a name="loio76066e5973f74270b951a48f8e7b0591__section_rym_zkz_jqb"/>

## Annotation for `UI.SelectionFields`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
> <Annotation Term="UI.SelectionFields">
>    <Collection>
>      <PropertyPath>SalesOrder</PropertyPath>
>      <PropertyPath>SoldToParty</PropertyPath>
>      <PropertyPath>OverallSDProcessStatus</PropertyPath>
>      <PropertyPath>SalesOrderDate</PropertyPath>
>      <PropertyPath>_Item/Material</PropertyPath>
>    </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.SelectionField: [{ position: 10 }]
> SALESORDER;
> 
> @UI.SelectionField: [{ position: 20 }]
> SOLDTOPARTY;
>  
> @UI.SelectionField: [{ position: 30 }]
> OVERALLSDPROCESSSTATUS;
>  
> @UI.SelectionField: [{ position: 40 }]
> SALESORDERDATE;
> 
> @UI.SelectionField: [{ position: 50, element: '_Item.Material' }]
> _Item;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate service.SalesOrderManage with @(
>   UI.SelectionFields  : [
>      SalesOrder,
>      SoldToParty,
>      OverallSDProcessStatus,
>      SalesOrderDate,
>      Item.Material
> ]
> );
> ```



<a name="loio76066e5973f74270b951a48f8e7b0591__section_z2j_m4c_pdc"/>

## Configuring Search Behavior in Filter Bars



### *Go* Button Mode

In Go button mode, the search isn't invoked and the content area does not refresh when an end user modifies the filter fields unless they explicitly click *Go*. By default, the *Go* button is displayed on the filter bar. You can modify the default content loading behavior during the initial load of the application by configuring the `manifest.json` file. For more information, see [Loading Behavior of Data on Initial Launch of the Application](loading-behavior-of-data-on-initial-launch-of-the-application-b736ab6.md).



### Live Mode

In live mode, any changes made by an end user to the filter fields automatically invokes a search and refreshes the content area. In this mode, if the variant management feature is enabled, the application does not display the *Apply Automatically* checkbox, as selecting a variant automatically invokes the filter search.

This mode is ideal for applications with a small amount of data that have no performance issues from the underlying database layer, such as those requiring complex joins to execute actions.

For more information about enabling the live mode, see the [Enabling Live Mode](configuring-filter-bars-76066e5.md#loio76066e5973f74270b951a48f8e7b0591__live_mode_v2) section in this topic.

> ### Caution:  
> Impact on performance
> 
> When live mode is enabled, the content area loads automatically during the initial load of the application, regardless of the initial load settings in the `manifest.json` file. Additionally, the content area refreshes each time a filter field value changes. This behavior can negatively impact the performance, especially when dealing with large datasets or complex database constraints, such as compiling complex join queries whenever there is a change in the filter field values. You must perform thorough testing to ensure acceptable end-to-end performance before enabling live mode.



<a name="loio76066e5973f74270b951a48f8e7b0591__section_jl2_54v_wsb"/>

## `entitySet` with Input Parameters

If the `entitySet` has any input parameters, then it is shown in the filter bar automatically without the `UI.SelectionFields` annotation.

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <EntityType Name="SalesShareParametersType" sap:semantics="parameters">
>     <Key>          
>         <PropertyRef Name="P_Currency"/>
>         <PropertyRef Name="P_Country"/>
>         <PropertyRef Name="P_Optional"/>
>     </Key>
>     <Property Name="P_Currency" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Currency" sap:parameter="mandatory"/>
>     <Property Name="P_Country" Type="Edm.String" Nullable="false" DefaultValue="3" MaxLength="20" sap:label="CountryCode" sap:parameter="mandatory"/>
>     <Property Name="P_Optional" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Optional" sap:parameter="optional"/>
>     <NavigationProperty Name="Results" Relationship="sap.smartbusinessdemo.services.SalesShareParameters_SalesShareType" FromRole="SalesShareParametersPrincipal" ToRole="SalesShareDependent"/>
> </EntityType>
> 
> ```

In this example, `P_Currency` and `P_Country` are mandatory and they must be filled with a valid input value to trigger the filter query. However, `P_Optional` is an optional input parameter. If there is no parameter value defined, by default an empty string value is used.

> ### Note:  
> Current support for optional parameters only includes the `Edm.String` type.



<a name="loio76066e5973f74270b951a48f8e7b0591__live_mode_v2"/>

## Enabling Live Mode

You can enable live mode by setting `liveMode` to `true` using UI adaptation. For more information, see [Adapting the UI: List Report Page and Object Page](adapting-the-ui-list-report-page-and-object-page-0d2f1a9.md).



<a name="loio76066e5973f74270b951a48f8e7b0591__section_dqs_ppb_psb"/>

## More Information

For more information about how to configure filter bars, see [Adapting the Filter Bar](adapting-the-filter-bar-c7a7ac4.md).

For information about the initial loading of data, see [Loading Behavior of Data on Initial Launch of the Application](loading-behavior-of-data-on-initial-launch-of-the-application-b736ab6.md).

For more information about using extension APIs for custom filter fields, see [Adding Custom Fields to the Filter Bar](adding-custom-fields-to-the-filter-bar-b56bc11.md).

