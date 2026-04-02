<!-- loioc7a7ac4e97a544638658d283e5bc9d20 -->

# Adapting the Filter Bar

You can adapt the filter bar using additional annotations or configuring the `manifest.json` file.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Adapting the Filter Bar](adapting-the-filter-bar-609c39a.md).

For information about setting the default filter value, see [Configuring Default Filter Values](configuring-default-filter-values-b221ce0.md).

For more information about the smart filter bar API, see [SmartFilterBar](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar).



<a name="loioc7a7ac4e97a544638658d283e5bc9d20__section_spb_4vm_kmb"/>

## Including Navigation Properties

From SAPUI5 version 1.126.0 onwards, the filters in the *Adapt Filters* dialog include properties only from the main entity set. The filterable fields from the navigation entities are not added as filters by default. You can add them by configuring the `manifest.json` file. You can choose to add either all properties or a specific property of the navigation entities as filters.

In the following sample code, you can see that only the `EmailAddress` property from the `Supplier` entity and all filterable properties of the navigation type `DeliveryStatus` \(except the properties annotated with `Hidden` or `HiddenFilter`\) are included as filters in the *Adapt Filters* dialog.

> ### Sample Code:  
> `manifest.json`
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

**Related Information**  


[Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md "The sap.ui.comp.smartfilterbar.SmartFilterBar control analyzes the $metadata document of an OData service and renders a FilterBar control that can be used to filter, for example, a table or a chart.")

[Enabling the Search Function](enabling-the-search-function-fffde60.md "You can enable the Search function on the list report page.")

[Enabling Semantic Operators in the Filter Bar](enabling-semantic-operators-in-the-filter-bar-c2b916c.md "You can use semantic date values, such as Today or Last Week, on the filter bar of the list report page and analytical list page applications.")

