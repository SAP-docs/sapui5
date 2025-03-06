<!-- loio609c39a7498541559dbef503c1ffd194 -->

# Adapting the Filter Bar

You can adapt the filter bar using additional annotations or configuring the `manifest.json` file.



<a name="loio609c39a7498541559dbef503c1ffd194__section_spb_4vm_kmb"/>

## Additional Features in SAP Fiori Elements for OData V2

For information about setting the default filter value, see [Configuring Default Filter Values](configuring-default-filter-values-f27ad7b.md).

For more information about the smart filter bar API, see [SmartFilterBar](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar).



### Including Navigation Properties

From SAPUI5 version 1.126.0 onwards, the filters in the *Adapt Filters* dialog include properties only from the main entity set. The filterable fields from the navigation entities are not added as filters by default. You can add them by configuring the `manifest.json` file. You can choose to add either all properties or a specific property of the navigation entities as filters.

In the following sample code, you can see that only the `EmailAddress` property from the `Supplier` entity and all filterable properties of the navigation type `DeliveryStatus` \(except the properties annotated with `Hidden` or `HiddenFilter`\) are included as filters in the *Adapt Filters* dialog.

> ### Sample Code:  
> manifest.json
> 
> ```
> "ListReport|C_STTA_SalesOrder_WD_20": {
>     "entitySet": "C_STTA_SalesOrder_WD_20",
>     "component": {
>         "name": "sap.suite.ui.generic.template.ListReport",
>         "list": true,
>         "settings": {
>             "tableSettings": {
> …
>             },
>  
>             "filterSettings": {
>                 "navigationProperties": [
>                     "to_Supplier/EmailAddress ",
>                     "to_DeliveryStatus"
>                 ]
>             }
>         }
> ```



<a name="loio609c39a7498541559dbef503c1ffd194__section_q5m_cnn_d4b"/>

## Additional Features in SAP Fiori Elements for OData V4

The filter bar only shows filter fields defined using the `@com.sap.vocabularies.UI.v1.SelectionFields` annotation. Additional fields available for adaptation are all direct simple properties of the current entity type.



### Including Navigation Properties

To include navigation properties as filters, you can directly define them within the same `UI.SelectionFields` annotation. For more information about the annotation, see the [Annotation for UI.SelectionFields](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__section_rym_zkz_jqb) section in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

However, if you want to add the navigation properties only within the *Adapt Filters* dialog, use the `navigationProperties` setting in the `manifest.json` file.

The `navigationProperties` setting is an array of \(navigation\) property paths relative to the current entity type. If the path points to a navigation property or a complex property, all simple properties of that type are added to the *Adapt Filters* dialog. If the path points to a simple property, then only this field is available as a filter field within the*Adapt Filters* dialog.

> ### Sample Code:  
> manifest.json
> 
> ```
> "ListReport": {
>     ...
>     "options": {
>         "settings": {
>             ...
>             "controlConfiguration": {
>                 ...
>                 "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                     "navigationProperties":  [ "_DistributionChannel", "_Partner/FullName" ],
>                     ...
>                 }
>             },
>             ...
>         }
>     }
> },
> ```

-   All properties of the navigation type `_DistributionChannel` are added to the filter adaptation \(unless they are marked as `Hidden` or `HiddenFilter`\)

-   The single property `FullName` of the `Partner` association is added to the filter adaptation \(unless it is marked as `Hidden` or `HiddenFilter`\)


> ### Note:  
> You can only define navigation properties with one level. Nested navigation properties aren't supported.



### Using Case Insensitive Filtering

Case sensitivity in filtering depends on the back end that is consumed by the app:

-   RAP supports case insensitive filtering at DB level.

-   CAP Node.js and CAP Java support case sensitive filtering at DB level by default.


To override this behavior, use the `"@Org.OData.Capabilities.V1.FilterFunctions"` annotation defined in the `EntityContainer`. This annotation defines all the filter functions supported by the OData service. An example is shown in the following sample code:

> ### Sample Code:  
> `FilterFunctions` annotation
> 
> ```
> <Annotations Target="namespace.EntityContainer">
>     <Annotation Term="Org.OData.Capabilities.V1.FilterFunctions">
>       <Collection>
>         ....
>         <String>tolower</String>
>         ...
>       </Collection>
>     </Annotation>
> </Annotations>
> ```

SAP Fiori elements for OData V4 checks for the existence of the `tolower` filter function in the service metadata and sets the case sensitivity for filtering as shown in the following table:

**Case Sensitivity for FilterFunction**


<table>
<tr>
<th valign="top">

`FilterFunction`

</th>
<th valign="top">

`caseSensitive`

</th>
</tr>
<tr>
<td valign="top">

`tolower` exists

</td>
<td valign="top">

false \(back end is expected to convert all values, both the back-end values and the text provided in the filter fields, to lowercase before comparing for filtering\)

</td>
</tr>
<tr>
<td valign="top">

`tolower` does not exist

</td>
<td valign="top">

true \(back end decides the default behavior\)

</td>
</tr>
<tr>
<td valign="top">

No annotation is configured

</td>
<td valign="top">

false \(back end is expected to convert all values, both the back-end values and the text provided in the filter fields, to lowercase before comparing for filtering\)

</td>
</tr>
</table>

This logic is valid for filtering on the following use cases:

-   Filter bar

-   Table personalization filters

-   Filters created from semantic keys

-   Value help dialogs




### Adding a *Clear* Button

You can add a *Clear* button to the filter bar in the list report by making the following setting for the `showClearButton` in the `manifest.json` file:

> ### Sample Code:  
> `showClearButton`
> 
> ```
> "SalesOrderManageList": {
>     "options": {
>         "settings": {
>             "controlConfiguration": {
>                 "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                     "showClearButton": true,
>                 }
>             }
>         }
>     }
> }
> ```

The functionality of the *Clear* button is as follows:

-   All filter values are cleared when a user clicks the *Clear* button.

    Note that the filter values aren't restored to the default values, but really cleared.

-   If there's an active filter on the *Editing Status*, it is reset to the value *All* when a user clicks the *Clear* button.


You can add further clearing functionality by implementing the controller extension `onAfterClear` as shown in the following sample code:

> ### Sample Code:  
> `onAfterClear`
> 
> ```
> onAfterClear: function (oEvent) {    
>   var oView = this.getView();        
>   oView.byId("CustomSegmentedButton").setSelectedKey("none"); 
> }
> ```



### Moving Filter Fields to the *Adapt Filters* Dialog

You can move the explicitly included filter fields in the filter bar to the *Adapt Filters* dialog by configuring the `manifest.json` file as follows:

> ### Sample Code:  
> ```
> "SalesOrderManageList": {
>     "options": {
>         "settings": {
>             "controlConfiguration": {
>                 "@com.sap.vocabularies.UI.v1.SelectionFields": {
>                     "filterFields": {
>                         "postingDate": {
>                             "availability": "Adaptation"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```

For more information about other possible values for the `availability` property, see the V4-specific section in [Adding Custom Fields to the Filter Bar](adding-custom-fields-to-the-filter-bar-5fb9f57.md).

**Related Information**  


[Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md "The sap.ui.comp.smartfilterbar.SmartFilterBar control analyzes the $metadata document of an OData service and renders a FilterBar control that can be used to filter, for example, a table or a chart.")

[Enabling the Search Function](enabling-the-search-function-3cdebee.md "You can enable the Search function in the list report.")

[Enabling Semantic Operators in the Filter Bar](enabling-semantic-operators-in-the-filter-bar-fef65d0.md "You can use semantic date values, such as Today or Last Week, on the filter bar of list report and analytical list page applications.")

