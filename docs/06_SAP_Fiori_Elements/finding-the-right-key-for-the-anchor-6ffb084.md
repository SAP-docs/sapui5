<!-- loio6ffb084e6d8247d1863005c14e8d5894 -->

# Finding the Right Key for the Anchor

For the correct positioning of your custom elements, you need to identify an anchor element using the browser's developer tools.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.

To open the browser's developer tools, choose CTRL+OPT+I on Windows, and CMD+OPT+I on macOS.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_hgp_lbc_5nb"/>

## How to Find Anchors for the Header Facet

In the browser's developer tools, open the DOM element inspector and search for either the string `fe::HeaderFacetContainer` or `fe::HeaderFacetCustomContainer`, depending on whether you want to place your custom header facet relative to a standard or a custom header facet. The name displayed directly after these strings are the facet keys that you have to use as the `position.anchor`. For example, the anchor name you would use to refer to a header facet with element ID `AppName::AppNameObjectPage--fe::HeaderFacetContainer::AnchorHeaderFacetName` would be `AnchorHeaderFacetName`.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_qlb_5bc_5nb"/>

## How to Find Anchors for the Header Facet Field

To place a custom header field inside a given header facet, search for the string `fe::HeaderFacet::Form` in the DOM element inspector. The fields of these forms have the key pattern `DataFieldAbstractType::PropertyName` that you have to specify as `position.anchor`. For example, if the field that you want to use as position anchor has the element ID `AppName:: AppName ObjectPage--fe::HeaderFacet::Form::HeaderFacetName::DataField::PropertyName::Field`, you should use the string `DataField::PropertyName` for `position.anchor`.

The key is a combination of the type and the property name. For most scenarios the `DataField` would be common, the key would then be `DataField::PropertyName`.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_kfj_bcc_5nb"/>

## How to Find Anchors for the Table Column

To position a custom column in relation to the others, you need to specify the correct column key. In case of custom columns, this task requires two separate steps:

1.  Open the browser's developer tools and search for the string `fe::table::AppName::LineItem::C::` \(insert the name of your application for `AppName`\). The column IDs have an element ID with the search string as the prefix, followed by the column name, for example `fe::table::AppName::LineItem::C::PersonName` or `fe::table::AppName::LineItem::C::FieldGroup::multipleFields`.

2.  Find the column type. For this you open the browser's developer tools to investigate the metadata requests in the network log \(you can filter for `$metadata`\). Once you have identified the metadata request, open the response XML and search for the string `<Annotation Term="UI.LineItem">` to find the line item annotations of your table. The line-item annotation would look as follows:

    > ### Sample Code:  
    > ```
    > <Annotation Term="UI.LineItem">
    >     <Collection>
    >         <Record Type="UI.DataField">
    >             <PropertyValue Property="Value" Path="PersonName"/>
    >         </Record>
    >         <Record Type="UI.DataFieldForAction">
    >             <PropertyValue Property="Action" String="ChangePresence"/>
    >         </Record>
    >         <Record Type="UI.DataFieldForAnnotation">
    >             <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#multipleFields"/>
    >         </Record>
    >         ...
    >     </Collection>
    > </Annotation>
    > ```


The key that you have to insert in `position.anchor` is composed as `DataFieldAbstractType::ColumnName`, containing the record type given in the metadata and the property name you have retrieved from the DOM inspector before. Here are some examples:

-   `DataField::PersonName`

-   `DataFieldForAction::ChangePresence`

-   `DataFieldForAnnotation::FieldGroup::multipleFields`


If you want to use another custom column as a position anchor, you can directly use the custom column key that you have specified in the `columns` collection of your `manifest.json` file.

