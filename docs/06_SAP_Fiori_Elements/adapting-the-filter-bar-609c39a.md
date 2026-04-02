<!-- loio609c39a7498541559dbef503c1ffd194 -->

# Adapting the Filter Bar

You can adapt the filter bar using additional annotations or configuring the `manifest.json` file.

The filter bar only shows filter fields defined using the `@com.sap.vocabularies.UI.v1.SelectionFields` annotation. Additional fields available for adaptation are all direct simple properties of the current entity type.



<a name="loio609c39a7498541559dbef503c1ffd194__section_q5m_cnn_d4b"/>

## Including Navigation Properties

To include navigation properties as filters, you can directly define them within the same `UI.SelectionFields` annotation. For more information about the annotation, see the [Annotation for UI.SelectionFields](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__section_rym_zkz_jqb) section in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

However, if you want to add the navigation properties only within the *Adapt Filters* dialog, use the `navigationProperties` setting in the `manifest.json` file.

The `navigationProperties` setting is an array of \(navigation\) property paths relative to the current entity type. If the path points to a navigation property or a complex property, all simple properties of that type are added to the *Adapt Filters* dialog. If the path points to a simple property, then only this field is available as a filter field within the*Adapt Filters* dialog.

> ### Sample Code:  
> `manifest.json`
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

-   When applying a filter on a field from a 1:n navigation entity, all main records that have at least one matching related record are fetched. However, once a main record is selected, the object page will display all related records from the 1:n association, not just those that matched the original filter.


> ### Note:  
> You can only define navigation properties with one level. Nested navigation properties aren't supported.



## Using Case Insensitive Filtering

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




<a name="loio609c39a7498541559dbef503c1ffd194__add_clear_button"/>

## Adding a *Clear* Button

You can add a *Clear* button to the filter bar on the list report page by making the following setting for the `showClearButton` in the `manifest.json` file:

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



## Moving Filter Fields to the *Adapt Filters* Dialog

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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adapting the Filter Bar](adapting-the-filter-bar-c7a7ac4.md).

**Related Information**  


[Enabling the Search Function](enabling-the-search-function-3cdebee.md "You can enable the Search function on the list report page.")

[Enabling Semantic Operators in the Filter Bar](enabling-semantic-operators-in-the-filter-bar-fef65d0.md "You can use semantic date values, such as Today or Last Week, on the filter bar of list report page and analytical list page applications.")

