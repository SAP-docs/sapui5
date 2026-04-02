<!-- loio7676a2ac551e46a69636753e4637eb89 -->

# What's New in SAPUI5 1.145

With this release SAPUI5 is upgraded from version 1.144 to 1.145.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

****


<table>
<tr>
<th valign="top">

Version

</th>
<th valign="top">

Type

</th>
<th valign="top">

Category

</th>
<th valign="top">

Title

</th>
<th valign="top">

Description

</th>
<th valign="top">

Action

</th>
<th valign="top">

Available as of

</th>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Deprecations** 

</td>
<td valign="top">

**Deprecations**

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.VariantManagement`** 

</td>
<td valign="top">

**`sap.m.VariantManagement`**

We have simplified the saving of views: Users can now save a new view more efficiently by pressing [Ctrl\]/ [Command\] + [Enter\] to confirm the save without having to navigate to the *Save* button. The field of the view name is now automatically focused and editable upon opening the *Save View* dialog, enhancing workflow speed and user experience. In a similar way, users can save changes in the *Manage Views* dialog by pressing [Ctrl\]/ [Command\] + [Enter\]. Also, users can now save changes of individual views in the list of views by pressing [Ctrl\]/ [Command\] + [S\]. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc/sample/sap.ui.mdc.demokit.sample.TableFilterBarJson).

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.FilterBar`** 

</td>
<td valign="top">

**`sap.ui.mdc.FilterBar`**

We have adapted the personalization in the *Adapt Filters* dialog: The new concept allows users to easily personalize filter bars while ensuring accessibility compliance with adapted screen reader announcements. This feature enhances user efficiency and satisfaction by providing a user experience that meets accessibility standards. We have made the following major changes:

-   We have moved *List View* and *Group View* to two new tab pages, *List* and *Group*.

-   All values are now always visible, so we have removed the *Show Values* button.

-   We have added the new *Sort* button under *List*, which users can use to switch to a sort mode to change the sort order of the fields. To switch back to the mode before, they can use the *Edit* button.

-   To make filters visible , users can press the *Visible* button.

-   To remove filters, users can press the *Remove* button.

-   Users can now add a new filter by selecting *Add Filter*.

-   To apply the filters, users can now use the new *Filter* button next to *OK* and *Cancel* instead of *Go*.


For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.FilterBar/sample/sap.ui.mdc.demokit.sample.FilterbarTypes).

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4 and SAP Fiori Elements for OData V2** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4 and SAP Fiori Elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V4 and SAP Fiori Elements for OData V2:

-   We have completely restructured our documentation to provide separate entry points for OData V4 and OData V2, making it easier to navigate the different feature sets. The new structure reflects our focus on SAP Fiori elements for OData V4 and its building blocks, and is modeled on the SAP Fiori development portal to ensure a consistent user experience. For more information, see [Developing Apps with SAP Fiori Elements](../06_SAP_Fiori_Elements/developing-apps-with-sap-fiori-elements-03265b0.md) and the SAP Fiori development portal at [Introduction](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/introduction).


<sub>Changed•SAP Fiori Elements•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   We've changed the default appearance of values in value help dialogs: Until now, values were displayed as links, which incorrectly suggested a navigation option. Now, these values are displayed as plain text. If you urgently need to revert to the previous behavior in your app, you can do so using the following global manifest setting:

    > ### Sample Code:  
    > manifest.json
    > 
    > ```
    >   "sap.fe": {
    >     "macros": {
    >       "valueHelp": {
    >         "enableLinksInDialogTable": true
    >       }
    >     }
    >   }
    > ```

-   You can now define whether a section or subsection is hidden and whether the *Show More* and *Show Less* buttons are displayed. For more information, see [Extension Points for Sections on the Object Page](../06_SAP_Fiori_Elements/extension-points-for-sections-on-the-object-page-92ad996.md).

-   You can now extend the `ReuseComponent` base class to implement reuse components. For more information, see [Developing Reuse Components](../06_SAP_Fiori_Elements/developing-reuse-components-6314fcd.md).

-   We now support input assistance for CAP back ends. For more information, see [Input Assistance](../06_SAP_Fiori_Elements/input-assistance-1a6324d.md).

-   We now ensure that the paginator buttons are only visible in fullscreen mode in flexible column layout apps. For more information, see [Flexible Column Layout](../10_More_About_Controls/flexible-column-layout-2abdefb.md).

-   The form adaptation dialog now supports navigation properties. For more information, see [Adapting the Form](../06_SAP_Fiori_Elements/adapting-the-form-ac54768.md).

-   We now validate the `ExternalID` against the target structure in value help scenarios. For more information, see [Value Help](../06_SAP_Fiori_Elements/value-help-48e5fa7.md).

-   You can now use the `imageFitType` property to determine how an image fits in the avatar's container. For more information, see [Using Images and Icons](../06_SAP_Fiori_Elements/using-images-and-icons-5760b63.md).

-   We've implemented the `AINotice` building block to display information related to AI features. For more information, see [The AINotice Building Block](../06_SAP_Fiori_Elements/the-ainotice-building-block-8c6e98b.md).

-   We've enhanced the `Page` building block: You can now use it to add breadcrumbs, as well as custom actions to the header and footer, for example. For more information, see the SAP Fiori development portal at [Building Blocks - Page](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/page/pageDefault).

-   You can now use the `Table` building block to dynamically create tables at runtime. For more information, see [The Table Building Block](../06_SAP_Fiori_Elements/the-table-building-block-3801656.md).

-   You can now configure navigation for `MicroChart` building block titles with the following properties:

    -   `titleAsLink`

    -   `linkAriaText`

    -   `linkPress`


    For more information, see [The MicroChart Building Block](../06_SAP_Fiori_Elements/the-microchart-building-block-74554b4.md).

-   The `FilterBar` building block now supports the `showMessages` and `required` manifest settings, and the `navigationPropertiesForPersonalization` property.

    For more information, see [The FilterBar Building Block](../06_SAP_Fiori_Elements/the-filterbar-building-block-7838611.md).

-   The `FilterField` building block now supports the following properties:

    -   `availability`

    -   `position`

    -   `required`


    For more information, see [The FilterField Building Block](../06_SAP_Fiori_Elements/the-filterfield-building-block-2df7837.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.gantt.simple.BaseShape`** 

</td>
<td valign="top">

**`sap.gantt.simple.BaseShape`**

You can now apply custom styling to shapes in the gantt chart when you hover over them using the new `hoverFillColor`, `hoverStrokeColor`, and `hoverStrokeWidth` properties. These properties are available at the `BaseShape` level.

The `hoverFillColor` property sets the fill color for the hover state. The `hoverStrokeColor` property sets the stroke color for the hover state. The `hoverStrokeWidth` property sets the stroke width for the hover state.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.gantt.simple.BaseShape) and the [Sample](https://ui5.sap.com/test-resources/sap/gantt/multiactivity/GanttChartMultiActivity.html).

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph.Graph`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph.Graph`**

You can now configure node ports and the *Connection Creation* button individually for each node in the network graph using the new node-level properties `nodePorts` and `showCreateConnectionButton`. When you define these properties at the node-level, the property settings take precedence over the corresponding graph-level configuration.

You can define node ports at the node-level properties to override graph-level settings for specific nodes. You can also show or hide the *Create Connection* button for individual nodes.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.networkgraph.Graph) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.networkgraph.Graph/sample/sap.suite.ui.commons.sample.NetworkGraphDND).

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V4 Model** 

</td>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   Refreshing a single entity using `v4.Context#refresh` or `v4.Context#requestRefresh` is now supported as an experimental feature for flat lists of unaggregated records with a grand total. In this case, the grand total is updated.For more information, see the API Reference for [`v4.Context#refresh`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/refresh) and [`v4.Context#requestRefresh`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestRefresh).

-   Filtering by dynamic property is now supported in data aggregation scenarios that don't use the `groupLevels` and `grandTotal` parameters.


<sub>Changed•Feature•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Chart`** 

</td>
<td valign="top">

**`sap.ui.mdc.Chart`**

-   The `sap.ui.mdc.Chart` control is no longer experimental. Its API has proven stable through extensive use.
-   The chart’s toolbar now provides expanded personalization options and greater flexibility for applications to position custom actions. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.Chart%23aggregations).


<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

`SmartField` in `SmartTable` now automatically adjusts its height for multi-line text areas, enabling a better editing experience for longer texts.

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`** 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

The `footer` aggregation of the `RichTextEditor` control is no longer marked as experimental, indicating its stability and readiness for general use. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor%23aggregations).

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`**

Until now, the `showWeekNumbers` property visualized only week numbers in the views showing dates \(*Days*, *Week*, and *Month* view\). Now, we have enabled the property to display week ranges in the *Months* view. For more information, see the [Sample](https://ui5.sap.com/#/entitysap.m.PlanningCalendar/samplesap.m.sample.PlanningCalendarWeekNumbering).

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
<tr>
<td valign="top">

1.145 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`** 

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   The updated Card Explorer documentation now includes a new section for Card actions. This section features examples of supported actions, including *Navigation*, *Submit*, *Custom \(Experimental\)*, and *Show/Hide Card \(Experimental\)*. Additionally, it includes new samples. Use it to learn how to implement interactive features, such as row-level actions, nested cards, dynamic data updates, and to show full details in a child card. For more information, see the [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/exploreOverview/actionCards).
-   As part of our ongoing effort to share the latest features and capabilities of UI Integration Cards with the broader SAP community, a new comprehensive article, [Declarative UI Integration Cards - Consistent Framework With Flexible Content Capabilities](https://community.sap.com/t5/technology-blog-posts-by-sap/declarative-ui-integration-cards-consistent-framework-with-flexible-content/ba-p/14320024), is now available in the SAP Community portal's **Technology Blog Posts by SAP** section. It offers an in-depth introduction to Declarative Integration Cards.
-   We have updated one of the most popular tutorials on UI Integration Cards: [https://developers.sap.com/tutorials/appstudio-sapui5-integrationcard-create.html](https://developers.sap.com/tutorials/appstudio-sapui5-integrationcard-create.html). The tutorial now uses the Northwind data service to guide learners through configuring an Integration Card that displays dynamic data.
-   UI Integration Cards of declarative card type Table now support inverted object status. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/table) and the [Documentation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/table/tableColumnProperties) in Card Explorer. 

<sub>Changed•Control•Info Only•1.145</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-02-19

</td>
</tr>
</table>

