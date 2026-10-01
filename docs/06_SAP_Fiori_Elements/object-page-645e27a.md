<!-- loio645e27ae85d54c8cbc3f6722184a24a1 -->

# Object Page

This floorplan displays the details of a business object, supporting creation, editing, and draft management in SAP Fiori elements for OData V4. Use it to work with both simple and complex objects through an optimized interface.

The object page displays the details of a single business object. It also enables users to create new business objects, edit them, and save drafts. This floorplan is suitable for both simple objects and more complex, multi‑faceted objects, and provides an optimal experience across devices.

The object page is often reached by navigating from a list report page. For more information about the list report page, see [List Report Page](list-report-page-1cf5c7f.md).



![A typical object page showing the details of a sales order with key
							information, charts, and customer data.](images/Object_Page_-_new_3ca622e.png)



<a name="loio645e27ae85d54c8cbc3f6722184a24a1__section_mx4_xn1_rfc"/>

## Main Features

The object page view includes the following main features:

-   The **shell bar** displays the application title and the user menu icon.

    The application title is set based on the object type, such as *Sales Order* or *Product*.

    For more information, see [Configuring the Application Title](configuring-the-application-title-ac70343.md).

-   The **object page header** includes the following features:

    -   Title and subtitle \(description\) of the business object.

        For more information, see [Setting Up the Object Page Header](setting-up-the-object-page-header-cce93e6.md).

    -   Editing status icon, if a draft version of the object page exists.

        For more information, see [Draft Handling](draft-handling-ed9aa41.md) and [Toggling Between Draft and Saved Values](toggling-between-draft-and-saved-values-fd3950a.md).

    -   The header toolbar, containing the following buttons:

        -   Buttons for global actions in display mode.

            For more information, see [Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-5fe4396.md).

        -   The *Related Apps* button.

            For more information, see [Enabling the Related Apps Button](enabling-the-related-apps-button-8dcfe2e.md).

        -   A *Share* menu that allows users to share the content of the page using tools such as email or Microsoft Teams.

            For more information, see [The Share Functionality](the-share-functionality-022bf0d.md).

        -   Paging buttons that enable users to navigate to the previous or next business object without reopening the list. The paging buttons are visible if the following conditions are met:

            -   The user is on a subobject page.

            -   The user navigated to the current page from a list.

            -   The list contains at least two entries.


            Paging buttons can also be added using the `Paginator` building block. For more information, see [The Paginator Building Block](the-paginator-building-block-997292b.md).


    -   Header facets that highlight key information about the object. You can include the following facets:

        -   Label-field pairs to display details such as price or availability. We recommend using no more than five label-field pairs.

        -   Graphical features, such as a chart for credit limits or a rating indicator.


        For more information, see [Header Facets](header-facets-17dbd5b.md).


-   The **navigation bar** enables users to navigate to the individual content area sections.

    For more information, see the [Tab Representation vs. Anchor Representation](defining-and-configuring-sections-facfea0.md#loiofacfea09018d4376acaceddb7e3f03b6__section_wgv_fvx_4lb) section in [Defining and Configuring Sections](defining-and-configuring-sections-facfea0.md).

-   The **content area** organizes data into sections and subsections.

    For more information, see [Defining and Configuring Sections](defining-and-configuring-sections-facfea0.md).

-   The **footer toolbar** displays the closing and finalizing actions as well as the message popover button, if applicable.

    For more information, see [Defining Determining Actions](defining-determining-actions-1743323.md) and [Draft Handling](draft-handling-ed9aa41.md).


For more information about the object page, see the [SAP Design System guidelines](https://www.sap.com/design-system/fiori-design-web/page-types/floorplans/object-page).

For more information and live examples, see the SAP Fiori development portal at [Standard Floorplans - Object Page](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/floorplanObjectPage/simpleObjectPage).



## Typical Use Cases

Typical use cases of the object page include the following:

**Example Use Cases of the Object Page**


<table>
<tr>
<th valign="top">

Use Case

</th>
<th valign="top">

Example

</th>
</tr>
<tr>
<td valign="top">

Viewing and editing a single business object

</td>
<td valign="top">

Maintaining a sales order and its items

</td>
</tr>
<tr>
<td valign="top">

Creating and saving a draft

</td>
<td valign="top">

Creating a purchase order and saving it as a draft for later completion

</td>
</tr>
<tr>
<td valign="top">

Approving or releasing a business object

</td>
<td valign="top">

Releasing a blocked invoice or approving a journal entry

</td>
</tr>
<tr>
<td valign="top">

Working with subobjects

</td>
<td valign="top">

Managing item schedules and partner functions for a purchase order

</td>
</tr>
<tr>
<td valign="top">

Navigating between a list of business objects

</td>
<td valign="top">

Using the paging buttons to move through customer records

</td>
</tr>
<tr>
<td valign="top">

Comparing draft and saved values

</td>
<td valign="top">

Reviewing changes made in a sales order by toggling between draft and saved versions

</td>
</tr>
<tr>
<td valign="top">

Analyzing key metrics in context

</td>
<td valign="top">

Inspecting credit exposure or inventory charts in header facets

</td>
</tr>
<tr>
<td valign="top">

Accessing related content

</td>
<td valign="top">

Opening attachments or adding notes

</td>
</tr>
</table>



<a name="loio645e27ae85d54c8cbc3f6722184a24a1__section_s13_dsz_mlb"/>

## Related Information

-   For information about controls related to object pages, see [sap.uxap](../10_More_About_Controls/sap-uxap-de71337.md).

-   For information about displaying an object page and a list report, or multiple object pages, side by side, see [Enabling the Flexible Column Layout](enabling-the-flexible-column-layout-e762257.md).

-   For information about the create mode options, see [Creating New Business Objects](creating-new-business-objects-8c3819d.md).

-   For information about resources you can use to preview the features, see [Feature Showcase Apps and Samples](feature-showcase-apps-and-samples-521405c.md).




> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Elements of the Object Page](elements-of-the-object-page-642c36c.md).

