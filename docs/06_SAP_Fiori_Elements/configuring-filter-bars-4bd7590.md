<!-- loio4bd7590569c74c61a0124c6e370030f6 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# Configuring Filter Bars

You can configure filter bars in both list report applications and analytical list pages.

By default, only the fields included in `UI.SelectionFields`, along with all mandatory filter fields, are displayed in the filter bar. The *Editing Status* filter is added automatically if you have a draft service.

The filter bar is available only if the service configured for the application supports filtering using the following annotations:

SAP Fiori elements for OData V2: `sap-filterable=true`

SAP Fiori elements for OData V4: `Capabilities.Filterable=true`



<a name="loio4bd7590569c74c61a0124c6e370030f6__section_rym_zkz_jqb"/>

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



<a name="loio4bd7590569c74c61a0124c6e370030f6__section_z2j_m4c_pdc"/>

## Configuring Search Behavior in Filter Bars



### *Go* Button Mode

In Go button mode, the search isn't invoked and the content area does not refresh when an end user modifies the filter fields unless they explicitly click *Go*. By default, the *Go* button is displayed on the filter bar. You can modify the default content loading behavior during the initial load of the application by configuring the `manifest.json` file. For more information, see [Loading Behavior of Data on Initial Launch of the Application](loading-behavior-of-data-on-initial-launch-of-the-application-9f4e119.md).



### Live Mode

In live mode, any changes made by an end user to the filter fields automatically invokes a search and refreshes the content area. In this mode, if the variant management feature is enabled, the application does not display the *Apply Automatically* checkbox, as selecting a variant automatically invokes the filter search.

This mode is ideal for applications with a small amount of data that have no performance issues from the underlying database layer, such as those requiring complex joins to execute actions.

For more information about enabling the live mode in OData V2, see the [Enabling Live Mode](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__live_mode_v2) subsection in the V2-specific section of this topic.

For more information about enabling the live mode in OData V4, see the [Enabling Live Mode](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__live_mode_v4) subsection in the V4-specific section of this topic.

> ### Caution:  
> Impact on performance
> 
> When live mode is enabled, the content area loads automatically during the initial load of the application, regardless of the initial load settings in the `manifest.json` file. Additionally, the content area refreshes each time a filter field value changes. This behavior can negatively impact the performance, especially when dealing with large datasets or complex database constraints, such as compiling complex join queries whenever there is a change in the filter field values. You must perform thorough testing to ensure acceptable end-to-end performance before enabling live mode.



<a name="loio4bd7590569c74c61a0124c6e370030f6__section_jl2_54v_wsb"/>

## Additional Features in SAP Fiori Elements for OData V2



### `entitySet` with Input Parameters

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



### Enabling Live Mode

You can enable live mode by setting `liveMode` to `true` using UI adaptation. For more information, see [Adapting the UI: List Report and Object Page](adapting-the-ui-list-report-and-object-page-0d2f1a9.md).



<a name="loio4bd7590569c74c61a0124c6e370030f6__section_dyt_hc2_wpb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Adding Filter Fields Using SAP Fiori Tools

1.  Launch the *Page Map*. You can launch the *Page Map* in several ways, for example by right-clicking the project folder and selecting*Show Page Map*. For more information, see [Define Application Structure](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/bae38e6216754a76896b926a3d6ac3a9.html).

2.  Launch the *Page Editor* for your list report page. Click the :pencil2: \(*Edit*\) icon next to *List Report*.
3.  Expand the *Filter Fields* node in the outline tree. Click the <span class="SAP-icons-V5"></span> \(*Arrow*\) icon next to *Filter Fields*.

    The following screenshot shows the outline of the application with the *Filter Fields* node expanded:

    ![](images/Fiori_Tools_-_Business_Application_Studio_-_Filter_Fields_Dropdown_5b1c16d.png)

4.  Click the :heavy_plus_sign: \(*Add*\) icon next to *Filter Fields*.
5.  Click *Add Filter Fields*.
6.  Select the fields you wish to add from the dropdown.
7.  Click *Add*.

    For more information about configuring filter fields using SAP Fiori tools, see [Filter Fields](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/0b8428645243486680ffa22c0b541039.html).

8.  To preview your new filter field, see [Previewing an Application](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/b962685bdf9246f6bced1d1cc1d9ba1c.html).

The following screenshot shows the filter fields in a previewed application:

![](images/Fiori_Tools_-_Business_Application_Studio_-_Filter_Fields_Preview_01c10c9.png)

> ### Tip:  
> You can reorder your filter fields by using drag and drop in the *Page Editor*.

The following screen recording shows how to add a new filter field:





### Hiding the Filter Bar

You can configure your application to hide the filter bar on a list report by making the corresponding settings in the `manifest.json` file.

You can choose to actively hide the filter bar, even if the entity set contains filterable fields. Your application then loads with the following behavior:

-   The content area is always loaded, irrespective of the `initialLoad` setting in the `manifest.json`.

-   The *Search* field is provided in the table toolbar.


The following sample code shows how to hide the filter bar by setting `hideFilterBar` to `true` in the `manifest.json` file:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>      "sap.ui5": {
>           "routing": {
>                "targets": {
>                     "SalesOrderManageList": {
>                          "options": {
>                               "settings": {
>                                    "hideFilterBar": true
>                               }
>                          }
>                     }
>                }
>           }
>      }
> }
> ```

> ### Note:  
> If the filter bar contains mandatory filter fields or parameter fields without a default value, then this setting is ignored and the filter bar is displayed.



### Enabling Live Mode

You can enable live mode by setting the `liveMode` to `true` in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> manifest.json
> 
> ```
> "routing": {
> 	"targets": {
>                     "MyEntitiesList": {
>                             "type": "Component",
>                             "name": "sap.fe.templates.ListReport",
>                             "id": "MyEntitiesList",
>                             "options": {
>                                             "settings": {
>                                                             "liveMode": true,
>                                                                  …..
>                                                                 ….
>                                                         }
>                                         }
>                                 }
>                 }
> }
> ```

Enabling live mode may have some impact on performance. For more information, see the Note in the [Live Mode](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__live_mode) subsection of this topic.



### Configuring Mandatory Filter Fields

You can configure the filter fields as mandatory using the `Capabilities.RequiredProperties` annotation. Such properties need a value before the filter fields can be triggered.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="SAP__self.Container/SalesOrder">
>    <Annotation Term="SAP__capabilities.FilterRestrictions">
>       <Record>
>          <PropertyValue Property="RequiredProperties">
>             <Collection>
>                <PropertyPath>OrderType</PropertyPath>
>             </Collection>
>          </PropertyValue>
>       </Record>
>    </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Consumption.filter.mandatory: true
> OrderType;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate service.SalesOrder with @Capabilities : {
>     FilterRestrictions : {
>         $Type : 'Capabilities.FilterRestrictionsType',
>         RequiredProperties : [
>             OrderType
>         ],
>     },
> };
> ```



### Configuring Fields to Remain Hidden in the Filter Bar and the *Adapt Filters* Dialog

Applications can ensure that a field within the entity to which the filter bar is bound remains hidden in both the filter bar and the *Adapt Filters* dialog. You can use the `Capabilities.NonFilterableProperties` annotation to achieve this behavior.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="SAP__self.Container/SalesOrder">
>    <Annotation Term="SAP__capabilities.FilterRestrictions">
>       <Record>
>          <PropertyValue Property="NonFilterableProperties">
>             <Collection>
>                <PropertyPath>DeliveryChannel</PropertyPath>
>             </Collection>
>          </PropertyValue>
>       </Record>
>    </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @ObjectModel.filter.enabled: false
> DeliveryChannel;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate service.SalesOrder with @Capabilities : {
>     FilterRestrictions : {
>         $Type : 'Capabilities.FilterRestrictionsType',
>         NonFilterableProperties : [
>             DeliveryChannel
>         ],
>     },
> };
> ```

> ### Note:  
> Properties annotated with `UI.Hidden` or `UI.HiddenFilter` are not displayed in either the filter bar or the *Adapt Filters* dialog.



### Supporting Parameterized Entities

When linked to a parameterized entity, the filter bar automatically includes fields for all required parameters. To access the data of a parameterized service, the parameter fields need to be supplied with parameter values when making the data call. These parameter values are then used to load the data for the view \(including the data in the object page or subobject page\). Furthermore, the invocation of any action that needs context to be passed, is also passed using these parameter values.

For example, the `"CustomerType"` in the following sample code represents the main entity set from which further data needs to be fetched. This has a `"Parameters"` navigation entity set defined as well:

> ### Sample Code:  
> Metadata of parameterized main entity type
> 
> ```
> <EntityType Name="CustomerType">
>     <Key>
>         <PropertyRef Name="Customer"/>
>         <PropertyRef Name="CompanyCode"/>
>         ……
>         ……
>     </Key>
>     <Property Name="Customer" Type="Edm.String" Nullable="false" MaxLength="10"/>
>     <Property Name="CompanyCode" Type="Edm.String" Nullable="false" MaxLength="4"/>
>     <Property Name="SalesOrganization" Type="Edm.String" Nullable="false" MaxLength="4"/>
>     ……
>     ……
>     ……
>     <NavigationProperty Name="Parameters" Type="com.sap.gateway.srvd.zrc_arcustomer_definition.v0001.CustomerParameters" Nullable="false"/>
>     ......
>     ......
> </EntityType>
> ```

Furthermore, the `"CustomerParameters"` entity type is annotated with the `"ResultContext"` annotation, indicating that the parent entity set \(in our example `"CustomerType"`\) is a parameterized entity set:

> ### Sample Code:  
> `"ResultContext"` annotation
> 
> ```
> <Annotations Target="SAP__self.CustomerParameters">
>     <Annotation Term="SAP__common.ResultContext"/>
>     ......
>     ......
> </Annotations>
> ```

In the `"CustomerParameters"` entity type, you can now find the parameters that need to be supplied with values to access the data from the main parameterized entity set:

> ### Sample Code:  
> Parameter entity type
> 
> ```
> <EntityType Name="CustomerParameters">
>     <Key>
>         <PropertyRef Name="P_DisplayCurrency"/>
>     </Key>
>     <Property Name="P_DisplayCurrency" Type="Edm.String" Nullable="false" MaxLength="3"/>
>     <NavigationProperty Name="Set" Type="Collection(com.sap.gateway.srvd.zrc_arcustomer_definition.v0001.CustomerType)" Partner="Parameters" ContainsTarget="true"/>
> </EntityType>
> ```

Note that the `"Partner"` term points to `"Parameters"` here, which was also the navigation entity set pointing to this `"CustomerParameter"` in the main entity type.

To access the data residing in the main entity set, that is, the entity set corresponding to the `"CustomerType"` entity type, we need to access it through the entity set corresponding to the navigation entity set, which is marked with the `"ResultContext"` annotation – so in this case through the entity set corresponding to the `"CustomerParameters"` entity type. `"Customer"` is the entity set that corresponds to the `"CustomerParameters"` entity type:

> ### Sample Code:  
> Entity set corresponding to `CustomerParameters`
> 
> ```
> <EntityContainer Name="Container">
>     <EntitySet Name="Customer" EntityType="com.sap.gateway.srvd.zrc_arcustomer_definition.v0001.CustomerParameters">
>         <NavigationPropertyBinding Path="Set/Parameters" Target="Customer"/>
>         .......
>         .......
>     </EntitySet>
>     ......
>     ......
> </EntityContainer>
> ```

Here's an example of how the call to fetch results from the main entity set in the above sample would look:

`http://<path>/Customer(P_DisplayCurrency='JPY')/Set?$count=true`

The call has to go through the `"Customer"` entity set by passing the values of all parameters to it. Then we have to call the entity set that holds the results \(in this case the `"Set"` entity set\).



### Specifying Filter Restrictions for the Main Entity Set \(Parameterized Entities Only\)

You can use one of the following two approaches:

-   Filter Restrictions at Main Entity with `PropertyPath` Pointing to the Filter Field of the Main Entity

    The restrictions can be defined at the main entity set with the property path pointing to the filter field or the main entity type \(containment\) \(for example, `SalesOrganization` from a previous example\) via the containment navigation \(`Set` in a previous example\)

    > ### Sample Code:  
    > XML Annotation: Filter restrictions with `PropertyPath` pointing to the filter field of the main entity set
    > 
    > ```xml
    > <Annotations Target="SAP__self.Container/Customer">
    >    <Record Type="SAP__capabilities.FilterRestrictionsType">
    >       <PropertyValue Property="FilterExpressionRestrictions">
    >          <Collection>
    >             <Record Type="Capabilities.FilterExpressionRestrictionType">
    >                <PropertyValue Property="Property" PropertyPath="Set/SalesOrganization" />
    >                <PropertyValue Property="AllowedExpressions" String="MultiValue" />
    >             </Record>
    >          </Collection>
    >       </PropertyValue>
    >    </Record>
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
    > entity Customer   @(
    >     Capabilities : {
    >         FilterRestrictions:{
    >             $Type: 'Capabilities.FilterRestrictionsType',
    >             FilterExpressionRestrictions: [{
    >                 Property: 'Set/SalesOrganization',
    >                 AllowedExpressions: 'MultiValue'
    >             }]
    >     }
    > }
    > ```

-   Navigation Restrictions at Main Entity

    The filter restrictions can be defined in the parameterized entity set \(in the previous example, via the ***"Customer"*** entity set\) through navigation restrictions with a path pointing to the target entity type, which is the containment navigation \(in our case ***"Set"***, which points to ***"CustomerType"***\).

    > ### Sample Code:  
    > XML Annotation: Filter Restrictions Using Navigation Restrictions
    > 
    > ```xml
    > <Annotations Target="SAP__self.Container/Customer">
    >    <Annotation Term="SAP__capabilities.NavigationRestrictions">
    >       <Record>
    >          <PropertyValue Property="RestrictedProperties">
    >             <Collection>
    >                <Record>
    >                   <PropertyValue Property="NavigationProperty" NavigationPropertyPath="Set" />
    >                      <PropertyValue Property="FilterRestrictions">
    >                         <Record>
    >                            ....
    >                            ....
    >                            <PropertyValue Property="FilterExpressionRestrictions">
    >                               <Collection>
    >                                  <Record>
    >                                     <PropertyValue Property="Property" PropertyPath="SalesOrganization" />
    >                                     <PropertyValue Property="AllowedExpressions" String="MultiValue" />
    >                                  </Record>
    >                               </Collection>
    >                            </PropertyValue>
    >                         </Record>
    >                      </PropertyValue>
    >                   </PropertyValue>
    >                </Record>
    >             </Collection>
    >          </PropertyValue>
    >       </Record>
    >    </Annotation>
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
    > service MyService {
    >     @Capabilities.NavigationRestrictions.RestrictedProperties : [{
    >         $Type              : 'Capabilities.NavigationPropertyRestriction',
    >         NavigationProperty : 'Set',
    >         FilterRestrictions : {
    >             $Type                        : 'Capabilities.FilterRestrictionsType',
    >             FilterExpressionRestrictions : [{
    >                 $Type              : 'Capabilities.FilterExpressionRestrictionType',
    >                 Property           : 'Set.SalesOrganization',
    >                 AllowedExpressions : 'MultiValue'
    >             }]
    >         }
    >     }]
    > }
    > ```


> ### Note:  
> If the filter restrictions are provided using `NavigationRestriction`, then this restriction is prioritized over other restrictions applied directly to the main entity.

> ### Restriction:  
> -   Parameter support is only available for read-only services. For editable services, parameter support is unavailable because of back-end restrictions.
> 
> -   Parameters aren't supported if multiple view mode is used – unless single-table mode is used, where the data from all views comes from the same table that is part of the main entity set.
> 
> -   None of the navigation entity sets associated with the main entity set can be parameterized.
> 
> -   Sort restrictions aren't supported for first-level navigation entity sets when used within parameterized scenarios \(meaning when a root node is a parameterized entity\).
> 
> -   Filtering on properties defined as measures is not supported.



<a name="loio4bd7590569c74c61a0124c6e370030f6__section_dqs_ppb_psb"/>

## More Information

For more information about how to configure filter bars, see [Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md).

For information about the initial loading of data, see [Loading Behavior of Data on Initial Launch of the Application](loading-behavior-of-data-on-initial-launch-of-the-application-9f4e119.md).

For more information about using extension APIs for custom filter fields, see [Adding Custom Fields to the Filter Bar](adding-custom-fields-to-the-filter-bar-5fb9f57.md).

