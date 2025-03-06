<!-- loio6ffb084e6d8247d1863005c14e8d5894 -->

# Finding the Right Key for the Anchor

You need to identify an anchor element using the browser's developer tools to correctly position the custom elements.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

To open the browser's developer tools, choose [CTRL\] + [SHIFT\] + [I\]  on Windows, and [CMD\] + [OPT\] + [I\]  on macOS.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_hgp_lbc_5nb"/>

## How to Find Anchors for the Header Facet

In the browser's developer tools, open the DOM \(Document Object Model\) element inspector and search for either `fe::HeaderFacetContainer` or `fe::HeaderFacetCustomContainer` string, depending on whether you want to place your custom header facet relative to a standard or a custom header facet. The name displayed directly after these strings are the facet keys that you must use as the `position.anchor`. For example, the anchor name to refer to a header facet with the element ID `AppName::AppNameObjectPage--fe::HeaderFacetContainer::AnchorHeaderFacetName` must be `AnchorHeaderFacetName`.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_qlb_5bc_5nb"/>

## How to Find Anchors for the Header Facet Field

To place a custom header field inside a given header facet, search for the `fe::HeaderFacet::Form` string in the DOM element inspector. The fields of these forms have the key pattern `DataFieldAbstractType::PropertyName` that you must specify as `position.anchor`. For example, if the field that you want to use as a position anchor has the `AppName:: AppName ObjectPage--fe::HeaderFacet::Form::HeaderFacetName::DataField::PropertyName::Field` element ID, you must use the `DataField::PropertyName` string as the `position.anchor`.

The key is a combination of the type and the property name. For most scenarios where the `DataField` is common, the key is `DataField::PropertyName`.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_kfj_bcc_5nb"/>

## How to Find Anchors for the Table Column

To position a custom column relative to the other columns, you need to specify the correct column key. For custom columns, this task involves two separate steps:

1.  Open the browser's developer tools and search for the string `fe::table::AppName::LineItem::C::` \(replace `AppName` with the name of your application\). The column IDs have an element ID with the search string as the prefix, followed by the column name. For example, `fe::table::AppName::LineItem::C::PersonName` or `fe::table::AppName::LineItem::C::FieldGroup::multipleFields`.

2.  To find the column type, open the browser's developer tools to investigate the metadata requests in the network log \(use `$metadata` to filter\). Once you have identified the metadata request, open the response XML and search for the string `<Annotation Term="UI.LineItem">` to find the line item annotations of your table. The line item annotation appears as shown in the following sample code:

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


The key that you must insert in `position.anchor` is composed as `DataFieldAbstractType::ColumnName`, consisting of the record type specified in the metadata and the property name retrieved from the DOM inspector. Here are some examples:

-   `DataField::PersonName`

-   `DataFieldForAction::ChangePresence`

-   `DataFieldForAnnotation::FieldGroup::multipleFields`


To use another custom column as a position anchor, directly use the custom column key that you specified in the `columns` collection of the `manifest.json` file.



<a name="loio6ffb084e6d8247d1863005c14e8d5894__section_gd3_tfp_4dc"/>

## How to Find Anchors for the Section or Subsection

In the browser's developer tools, open the DOM element inspector and search for either the `fe::FacetSection` or the `fe::FacetSubSection` string, depending on whether you want to place your custom view relative to a section or a subsection. The name displayed directly after these strings is the facet key that you must use as `position.anchor`. For example, the anchor name to refer to a section facet with the element ID `AppName::AppNameObjectPage--fe::FacetSection::AnchorSectionFacetName` is `AnchorSectionFacetName`.

