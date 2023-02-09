<!-- loioeb37203f2b884b5097c3c858107cae1f -->

# Extension Points for Views in the List Report

You can use extension points to enhance views in the list report in SAP Fiori elements apps.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.



<a name="loioeb37203f2b884b5097c3c858107cae1f__section_nb5_455_3qb"/>

## Using Custom Views in the List Report

App developers can display custom content in a dedicated tab together with regular tabs defined through annotations.

> ### Restriction:  
> To use custom views in the list report, you need to have at least 1 annotation view.

Custom views provide the following features:

-   simple configuration by declaring custom tabs in the manifest as views \(similar to views corresponding to the `PresentationVariant` or `SelectionPresentationVariant` defined via annotations\)

-   adding a custom XML view \(via an `xmlfragment` definition\) along with a custom handler called from the manifest, if neessary

-   defining a controller extension for the list report

-   using a localized view title


To define a custom view, the path configuration for the custom view in the manifest must reference a fragment name, a label for the tab, and a key. The structure is as follows:

> ### Sample Code:  
> ```
> "BusinessPartnersList": {
>     "type": "Component",
>     "id": "BusinessPartnersList",
>     "name": "sap.fe.templates.ListReport",
>     "options": {
>         "settings": {
>             "entitySet": "BusinessPartners",
>             "views": {
>                 "paths": [
>                     {
>                         "key": "tab1",
>                         "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#All"
>                     },
>                     {
>                         "key": "tab2",
>                         "label": "Custom View with Table",
>                         "template": "BusinessPartners.custom.CustomViewTable"
>                     },
>                     {
>                         "key": "tab3",
>                         "label": "{i18n>LRCustomViewWithButton}",
>                         "template": "BusinessPartners.custom.CustomViewWithButton"
>                     }
>                 ],
>                 "showCounts": true
>             }
>         }
>     }
> }
> ```

Each view can contain any control users want to display on the tab. App developers manage the content of a custom tab. The previous example configuration defines 2 custom tabs.



<a name="loioeb37203f2b884b5097c3c858107cae1f__section_vcy_p55_3qb"/>

## Settings for Custom Views

You can define your custom view by using the following properties:

**Properties of a Custom View**


<table>
<tr>
<th valign="top">

Property Name



</th>
<th valign="top">

Supported Values



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

key



</td>
<td valign="top">

"<unique\_tab\_id\>"



</td>
<td valign="top">

Unique tab identifier.



</td>
</tr>
<tr>
<td valign="top">

label



</td>
<td valign="top">

"<tab\_title\>"



</td>
<td valign="top">

View title \(localization supported\).



</td>
</tr>
<tr>
<td valign="top">

template



</td>
<td valign="top">

"<name\_of\_custom\_xml\_view\>"



</td>
<td valign="top">

The name contains `sap.app.id` as a prefix, followed by the path in the app/webapp folder and the name of the XML view.



</td>
</tr>
</table>



<a name="loioeb37203f2b884b5097c3c858107cae1f__section_bqy_p55_3qb"/>

## Defining the Custom Tab

In the following sample code, a `sap.m.Table` has been added to a custom view:

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:u="sap.ui.unified">
>     <Table id="customViewWithTable" items="{
>         path: '/BusinessPartners',
>         sorter: {
>             path: 'Name'
>         }
>     }">
>         <headerToolbar>
>             <OverflowToolbar>
>                 <content>
>                     <Title text="Business partners" level="H2" />
>                     <ToolbarSpacer />
>                 </content>
>             </OverflowToolbar>
>         </headerToolbar>
>         <infoToolbar>
>             <OverflowToolbar>
>                 <Label text="List of business partners" />
>             </OverflowToolbar>
>         </infoToolbar>
>         <columns>
>             <Column width="15em">
>                 <Text text="Partner Name" />
>             </Column>
>             <Column minScreenWidth="Tablet" demandPopin="true">
>                 <Text text="Country" />
>             </Column>
>             <Column minScreenWidth="Desktop" demandPopin="true" hAlign="End">
>                 <Text text="Region" />
>             </Column>
>             <Column minScreenWidth="Desktop" demandPopin="true" hAlign="Center">
>                 <Text text="Segment" />
>             </Column>
>             <Column minScreenWidth="Desktop" demandPopin="true" hAlign="Center">
>                 <Text text="Sales Amount" />
>             </Column>
>             <Column minScreenWidth="Desktop" demandPopin="true" hAlign="Center">
>                 <Text text="Sales Amount (local currency)" />
>             </Column>
>         </columns>
>         <items>
>             <ColumnListItem type="Active">
>                 <cells>
>                     <ObjectIdentifier text="{Name}" />
>                     <Text text="{Country}" />
>                     <Text text="{Region}" />
>                     <Text text="{Segment}" />
>                     <u:Currency value="{SalesAmount}" currency="{Currency}" />
>                     <u:Currency value="{SalesAmountLocalCurrency}" currency="{LocalCurrency}" />
>                 </cells>
>             </ColumnListItem>
>         </items>
>     </Table>
> </core:FragmentDefinition>
> ```

In the following sample code, a simple button has been added inside a panel to a custom view:

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core">
>     <Panel
>         headerText="Business Partners"
>         class="sapUiResponsiveMargin"
>         width="auto"
>         core:require="{handler: 'BusinessPartners/custom/CustomButton'}"
>     >
>         <content>
>             <Button text="IBN" id="customButton1" class="sapUiSmallMarginEnd" press="handler.onPress" />
>         </content>
>     </Panel>
> </core:FragmentDefinition>
> ```



<a name="loioeb37203f2b884b5097c3c858107cae1f__section_rcz_p55_3qb"/>

## Custom Handler

If a custom handler is required for the custom tab, you must define it in the fragment file using `"core:require"`. As shown in the previous example, you can define a press handler on the `sap.m.Button`. In the corresponding custom controller implementation shown in the following example, the binding context of the press event is used for displaying a message box:

> ### Sample Code:  
> ```
> sap.ui.define(["sap/ui/core/Component"], function(Component) {
>     "use strict";
>  
>     return {
>         someHandler: function(oEvent) {
>             // Do something here
>         },
>         onPress: function(oEvent) {
>             MessageBox.show("You pressed the custom action");
>         }
>     };
> });
> ```



<a name="loioeb37203f2b884b5097c3c858107cae1f__section_hpz_p55_3qb"/>

## Using Filter Conditions in the Controller Extension for the List Report

For app developers who want a standard filtering behavior along with other annotation tabs in the list report based on the `filterConditions` from the filter bar, SAP Fiori elements provides 2 methods that you can overwrite. The controller extension for the list report must be registered in the manifest. To register the controller extension in the manifest, proceed as follows:

> ### Sample Code:  
> ```
> "sap.ui5": {
>     "extends": {
>         "extensions": {
>             "sap.ui.controllerExtensions": {
>                 "sap.fe.templates.ListReport.ListReportController": {
>                     "controllerName": "SalesOrder.custom.LRExtend"
>                 }
>             }
>         }
>     }
> }
> ```

The methods app developers can use are:

-   `onViewNeedsRefresh`: To be used to refresh the content of a custom tab in a list report view with multiple tabs. This happens either when there is a change on the filter bar and the search is triggered, or when a tab with custom content is selected. App developers can use the additional parameters added to this method to identify the refresh cause \(`"tabChanged"` or `"search"`\) and apply the filter conditions on a specific tab based on the ID of the tab.

-   `onPendingFilters`: To be used when a filter or search value has been changed in the filter bar but has not been validated yet by the end user \(using the *Go* or *Search* button\). Typically, the content of the current tab is grayed out until the filters are validated.


In the following sample code, the binding information is updated with filter conditions on a custom tab that has a table:

> ### Sample Code:  
> ```
> sap.ui.define(["sap/ui/core/mvc/ControllerExtension", "sap/ui/model/Filter"], function(ControllerExtension, Filter) {
>     "use strict";
>     return ControllerExtension.extend("BusinessPartners.custom.LRExtend", {
>         override: {
>             onViewNeedsRefresh: function(mParameters) {
>                 var oFilterInfo = mParameters.filterConditions;
>                 if (oFilterInfo) {
>                     var duplicateFilterInfo = Object.assign({}, oFilterInfo);
>                     if (
>                         duplicateFilterInfo.Region &&
>                         duplicateFilterInfo.Region.map(item => item.values).findIndex(i => i.includes("Bavaria")) !== -1
>                     ) {
>                         delete duplicateFilterInfo.Region;
>                     }
>                     var oTable = this.getView().byId("BusinessPartners::BusinessPartnersList--fe::CustomTab::tab2--customViewWithTable"),
>                         oBinding = oTable.getBinding("items"),
>                         oConvertedFilter = this.base.getExtensionAPI().createFiltersFromFilterConditions(duplicateFilterInfo);
>                     oTable.setShowOverlay(false);
>                     var oFilter = new Filter({ filters: oConvertedFilter.filters, and: true });
>                     oBinding.filter(oFilter);
>                     oBinding.changeParameters({$search: oConvertedFilter.search});
>                 }
>             },
>             onPendingFilters: function() {
>                 var oTable = this.getView().byId("BusinessPartners::BusinessPartnersList--fe::CustomTab::tab2--customViewWithTable");
>                 if (oTable) {
>                     oTable.setShowOverlay(true);
>                 }
>             }
>         }
>     });
> });
> ```

