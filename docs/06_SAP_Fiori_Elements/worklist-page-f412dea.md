<!-- loiof412dea5317a4fc69a928acb7249c644 -->

# Worklist Page

You can use the worklist page floorplan to display a collection of items that the user must process.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Worklist Page](worklist-page-d1d588f.md).

Working through the item list usually involves reviewing details of the list items and taking action. In most cases, the user has to either complete or delegate a work item.

The focus of the worklist page is on processing the items. This differs from the list report page floorplan, which focuses on filtering content to create a list.



![](images/Image_Map_Worklist_b057362.jpg)



From a technical perspective, a worklist page is a simplified list report page. The following aspects differ from the list report page features:

-   You create a worklist page using SAP Fiori application generator. In the*Template Selection* step, choose *Worklist Page* as a template. For more information, see [Building an App](building-an-app-bc6313e.md).

-   The worklist page doesn't contain a smart filter bar. The search field is available in the table toolbar.

-   Variant management:
    -   By default, variant management is hidden. You can customize the worklist page to provide variant management at table level. To do so, set the `variantManagementHidden` flag to `false` in the `manifest.json` file. You can enable page level variant management by setting `smartVariantManagement` to `true` and the `variantManagementHidden` flag to `false` in the `manifest.json` file. Variants can also be shared.

    -   The *Execute on Select* action is not available.


-   Smart table:

    -   The multiselect function is enabled for all tables. If there are only line item actions, a no-selection table is enabled.

    -   The *Export to Microsoft Excel* feature is not available.

    -   The default table type is **responsive**. The table title contains the row count. A fixed layout and scroll-to-load are the default settings for the table content.





<a name="loiof412dea5317a4fc69a928acb7249c644__section_lvt_ht5_ghc"/>

## Worklist Types

You can create a category worklist page by defining multiple views within a table on your worklist page. For more information, see [Defining Multiple Views on a List Report Page Table - Single Table Mode](defining-multiple-views-on-a-list-report-page-table-single-table-mode-0f6901e.md).



<a name="loiof412dea5317a4fc69a928acb7249c644__section_ztv_3t5_ghc"/>

## Configuring the Worklist Page

For more information about any worklist page configuration options, see [List Report Page and Object Page](list-report-page-and-object-page-c0eec49.md). In addition to the features mentioned, you can also use the options described for the list report page, for example:

-   [Configuring Features of the List Report Page](configuring-features-of-the-list-report-page-3af1d03.md)

-   [Configuring Navigation](configuring-navigation-1a6c395.md)

-   [Configuring Tables](configuring-tables-3695931.md)

-   [Configuring Further Common Features](configuring-further-common-features-a4d3c46.md)

-   [Extending List Report Pages and Object Pages Using App Extensions](extending-list-report-pages-and-object-pages-using-app-extensions-a892eb8.md)




For general information about the worklist page floorplan, see [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/).

