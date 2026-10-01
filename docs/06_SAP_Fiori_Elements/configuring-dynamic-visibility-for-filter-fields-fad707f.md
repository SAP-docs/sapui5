<!-- loiofad707f57a85455db566f493f9ee0741 -->

# Configuring Dynamic Visibility for Filter Fields

You can control the visibility of filter fields within the filter bar at runtime using either the `UI.HiddenFilter` annotation or the `FilterBar` building block.

You must first configure the `usePropertyKeysMode` setting before using either approach. Configure it in the `manifest.json` file when using the `UI.HiddenFilter` annotation, or in the XML definition when using the API of the `FilterBar` building block.

The following sample code shows `usePropertyKeysMode` set to `true` in the `manifest.json` file:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "OrdersList": {
>     "type": "Component",
>     "name": "sap.fe.templates.ListReport",
>     "options": {
>         "settings": {
>             "contextPath": "/Orders",
>             "controlConfiguration": {
>                 "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                     "usePropertyKeysMode": true
>                 }
>             }
>         }
>     }
> }
> ```

The following sample code shows `usePropertyKeysMode` set to `true` directly in the `FilterBar` building block definition:

> ### Sample Code:  
> XML Definition
> 
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros" xmlns:f="sap.f">
>     <VBox>
>         <macros:FilterBar metaPath="@com.sap.vocabularies.UI.v1.SelectionFields" usePropertyKeysMode="true" id="FilterBar" />
>         <macros:Table metaPath="@com.sap.vocabularies.UI.v1.LineItem" id="LineItemTable" filterBar="FilterBar" initialLoad="false" />
>     </VBox>
> </core:FragmentDefinition>
> ```



## Using the `UI.HiddenFilter` Annotation

The `UI.HiddenFilter` annotation can reference a path or a complex expression using an `$edmJson` definition. When this annotation is defined at the property level, it determines the visibility of the corresponding filter field in the filter bar.

The following sample code shows how to define the `UI.HiddenFilter` annotation at the property level:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="sap.fe.core.ordersService.Customers/Country">
>     <Annotation Term="UI.HiddenFilter">
>         <Path>/FilterVisibility/hideCountry</Path>
>     </Annotation>
>     <Annotation Term="Common.QuickInfo" String="Country tooltip from annotation"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> annotate entity Customers with
> {
>   @UI.hiddenFilter: { $edmJson: { $Path: '/FilterVisibility/hideCountry' } }
>   @EndUserText.quickInfo: 'Country tooltip from annotation'
>   Country;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate ordersService.Customers with {
>   Country @UI.HiddenFilter : {$edmJson: {$Path: '/FilterVisibility/hideCountry'}};
> };
> ```

The `preloadConfigurationProperties` property in the `manifest.json` file defines the list of properties required by the dynamic expressions in the `UI.HiddenFilter` annotation. These properties are fetched when the list report page loads, allowing the filter bar to show or hide the corresponding fields.

For example, in the following sample code, the `Country` property is shown if the singleton value `FilterVisibility/hideCountry` equals `false`.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "OrdersList": {
>     "type": "Component",
>     "name": "sap.fe.templates.ListReport",
>     "options": {
>         "settings": {
>             "contextPath": "/Orders",
>             "preloadConfigurationProperties": ["/FilterVisibility/hideCountry"],
>             "controlConfiguration": {
>                 "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                     "usePropertyKeysMode": true
>                 }
>             }
>         }
>     }
> }
> ```

> ### Note:  
> -   When `UI.HiddenFilter` is set to `true`, the filter field isn't visible in the filter bar. However, any filter defined through the `SelectionVariant` annotation, custom code, or navigation is still applied.
> 
> -   Using the `preloadConfigurationProperties` key can result in an additional request to retrieve the listed properties before the page is displayed.



## Using the API of the `FilterBar` Building Block

The API of the `FilterBar` building block lets you manage the visibility of filter fields at runtime. You can also use it to update the label and tooltip of filter fields.

The following sample code shows how to use the `FilterBar` building block to show and hide filter fields, and to update their label and tooltip at runtime:

> ### Sample Code:  
> ```
> {
>     async onActivateFilters() {
>         const filterBar = sap.ui.getCore().byId('myFilterBarId');
>         await filterBar.setFilterFieldsActive([
>             { conditionPath: "_Customer/Country", active: true },
>             { conditionPath: "Status",            active: true }
>         ]);
>     },
> 
>     async onDeactivateFilters() {
>         const filterBar = sap.ui.getCore().byId('myFilterBarId');
>         await filterBar.setFilterFieldsActive([
>             { conditionPath: "_Customer/Country", active: false }
>         ]);
>         // Deactivating also clears any conditions held by those fields.
>     },
>     async onSetLabels() {
>         const filterBar = sap.ui.getCore().byId('myFilterBarId');
>         await filterBar.setFilterFieldsLabel([
>             { conditionPath: "_Customer/Country", label: "Country (custom)" },
>             { conditionPath: "Status",            label: "Status (custom)" }
>         ]);
>     },
>     async onSetTooltips() {
>         const filterBar = sap.ui.getCore().byId('myFilterBarId');
>         await filterBar.setFilterFieldsTooltip([
>             { conditionPath: "_Customer/Country", tooltip: "Filter by customer country" },
>             { conditionPath: "Status",            tooltip: "Filter by order status" }
>         ]);
>     }
> }
> ```

> ### Note:  
> The `setFilterFieldsActive`, `setFilterFieldsLabel`, and `setFilterFieldsTooltip` functions are experimental and subject to revisions.



## Related Links

You can also configure the dynamic visibility of columns in tables. For more information, see [Hiding or Showing Table Columns](hiding-or-showing-table-columns-fe45346.md).

