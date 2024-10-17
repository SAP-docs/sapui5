<!-- loiof4817b73671a4fb7af785b8fdd59f8e8 -->

# FAQs

You can get answers to the most frequently asked questions we receive from our users, get to know more about SAP Fiori elements features, and troubleshoot common issues.



<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_uzg_2wp_nzb"/>

## General Questions

-   **I'm new to SAP Fiori elements development - where should I start? What is SAP Fiori elements anyway?** 

    We’ve put together a list of useful links to get you started, which you can see at [Developing Apps with SAP Fiori Elements](developing-apps-with-sap-fiori-elements-03265b0.md).

-   **Is there a glossary where I can look up terms like annotations and extensions?**

    Yes, we do have a glossary that lists various terms used in SAP Fiori elements. For more information, see [Glossary](../glossary-9ef211e.md).

-   **Is there a sample that showcases SAP Fiori elements?**

    Yes, SAP Fiori elements features two samples that are based on CAP and RAP. You can find them at [Feature Showcase Apps and Samples](feature-showcase-apps-and-samples-521405c.md).

-   **Which features are available in SAP Fiori elements?**

    SAP Fiori elements supports multiple features, UI elements, and controls. These features are listed as a table that allows you to search, filter, and sort content in the table The table displays the links to the developer documentation and design guidelines documentation. The thumbnail provides a screenshot of the feature in the app. For more information, see [SAP Fiori Elements Feature Map](sap-fiori-elements-feature-map-62d3f7c.md).

-   **What is the recommended IDE for developing SAP Fiori elements applications?**

    We recommend using SAP Fiori tools, which is a set of extensions for SAP Business Application Studio and Visual Studio Code. For more information, click on the **Tools** tile in [Developing Apps with SAP Fiori Elements](developing-apps-with-sap-fiori-elements-03265b0.md).

-   **What are the required libraries when developing an app using SAP Fiori elements for OData V4 or when creating a custom app using the flexible programming model?**

    -   If you use a floorplan such as the list report or the object page, you can simply include `sap.fe.templates` in the `libs` section of your `manifest.json`.

    -   If you're creating a custom app you need at least `sap.fe.core`, and if you're leveraging the building blocks you also need to declare `sap.fe.macros`.


    By doing so you ensure the most efficient loading of resources for your application as well as the best performance.

-   **What is draft handling and can I disable it for apps built on SAP Fiori elements for OData V4?**

    SAP Fiori elements for OData V4 supports an edit-based scenario \(create/edit/delete\) only for a draft-enabled service. You can use non-draft services only for pure read-only applications where the user isn’t expected to perform any create/edit/delete operations. For more information about draft handling, see [Draft Handling](draft-handling-ed9aa41.md). Additionally, if you want to know the general information about tool support and the back end, see [Prerequisites for Using SAP Fiori Elements](prerequisites-for-using-sap-fiori-elements-f2344b5.md).

-   **Where can I find the right annotations for some of the commonly used UI elements?**

    To understand the most common annotations used when an app is loaded, see [Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md). If you’re interested to know about a specific annotation, check any of the following topics:

    -   To configure a table, see [Configuring Tables](configuring-tables-f4eb70f.md).

    -   To configure a chart, see [Configuring Charts](configuring-charts-653ed0f.md).

    -   To configure a filter bar, see [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

    -   To configure object page headers, see [Setting Up the Object Page Header](setting-up-the-object-page-header-cce93e6.md).

    -   To configure the object page sections, see [Defining and Adapting Sections](defining-and-adapting-sections-facfea0.md).

    -   To now about the generic actions, see [Actions](actions-cbf16c5.md).

    -   To know about value help, see [Field Help](field-help-a5608ea.md).

    -   To know about navigation links or buttons, see [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).


-   **How can I better control the visibility and enablement of controls?** 

    You can control the visibility and enablement of control using the `UI.Hidden` annotation. For more information, see [Hiding Features Using the UI.Hidden Annotation](hiding-features-using-the-ui-hidden-annotation-ca00ee4.md).

    By using the `CreateHidden`/`UpdateHidden`/`DeleteHidden` annotations, you control the visibility of the standard *Create*/*Edit*/*Delete* buttons. For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md) and [Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-5fe4396.md).

    By using the `OperationAvailable` annotation, you control the enablement of an action button. For more information, see [Actions in the List Report](actions-in-the-list-report-993e99e.md).

-   **How can I refresh data on the UI?**

    If a user changes the content of a field or performs another activity, this change can potentially influence other fields on the UI. This system behavior is called a side effect. Side effects are performed in the back end. However, you need to annotate the side effects implemented in the back end using side effect annotations to "inform" the front end which fields on the UI are influenced by a change, so that the front end can request new data for these fields. Otherwise, the UI may still display outdated data. For more information, see [Side Effects](side-effects-18b17bd.md).

-   **Where can I see the list of standard keyboard shortcuts supported in SAP Fiori elements? Can I add my own keyboard shortcut for custom actions?**

    For detailed information about the keyboard shortcuts, see [Keyboard Shortcuts](keyboard-shortcuts-0cd318c.md).

-   **How can I share an SAP Fiori elements app with other users?**

    Apps created with SAP Fiori elements provides a *Share* menu with options such as *Send E-Mail*, *Microsoft Teams*, and *Save as Tile*. For more information, see [The Share Functionality](the-share-functionality-022bf0d.md).

-   **Can I override the standard texts or labels used in SAP Fiori elements?**

    Yes, you can. SAP Fiori elements provide the list of all the keys that you can use to overwrite the default texts. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

-   **How can I create automated integration tests \(OPA\) for SAP Fiori elements for OData V4 applications?**

    We've provided a tutorial that can show you how to use the mock server functions and adopt the OPA \(One Page Acceptance\) Test Library to test your application. For more information, see [Use the Mockserver and OPA Test Library with SAP Fiori elements for OData V4 Applications](https://developers.sap.com/group.fiori-elements-mockserver-opa.html).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_vkf_5xp_nzb"/>

## Message Handling

-   **Why are some messages seen in the footer in a message popover while some are seen in a message dialog?**

    It actually depends on several factors like the message type \(state/transient\), the template used to create the app \(list report/object page, for example\), and even on the page state \(display/edit mode\). For more information, see [Using Messages](using-messages-239b192.md).

-   **I need to show a warning message when a user triggers an action to ensure the user confirms that the action really should be executed. Can this be achieved?**

    Yes. For more information, see the [Confirmation Popup for Actions that Fail with 412 Warnings](confirmation-popups-9a53662.md#loio9a536627a6a94de084b0605eb164d2c8__section_n3z_htm_vsb) section in [Confirmation Popups](confirmation-popups-9a53662.md).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_avw_5yp_nzb"/>

## Navigation

-   **How do I configure the next level navigation – the one that happens when the small arrow at the end of the table record \(chevron\) is clicked?**

    There are annotations that allow you to configure the table chevron navigation. For more information, see [Navigation to the Next Level](navigation-to-the-next-level-1559b2b.md).

    You can also change the default navigation to an external app instead of the object page . For more information, see [Changing Navigation to Object Page](changing-navigation-to-object-page-8bd546e.md).

-   **What are the different means by which we can allow a user to navigate away from an SAP Fiori elements application?**

    We’ve put together an overview for you in the topic. Please check the different means outlined in [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).

-   **How can I be sure that sensitive data isn't sent across when navigating between SAP Fiori elements applications? Can I explicitly keep certain information out of the navigation context?**

    You can check the [Handling Sensitive and Inapplicable Data](navigation-from-an-app-outbound-navigation-d782acf.md#loiod782acf8bfd74107ad6a04f0361c5f62__sensitive_inapplicable_data_subsection) subsection in [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).

-   **My source app and target app use different field names for the same business field. How can I ensure that the correct context value for a field is passed during navigation?**

    You can use the mechanism described in the [Semantic Object Mapping](navigation-from-an-app-outbound-navigation-d782acf.md#loiod782acf8bfd74107ad6a04f0361c5f62__semantic_object_mapping_subsection) subsection in [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).

-   **I don’t want users to see certain intents when using the navigation links. Can I exclude them?**

    Yes, you can use the `Common.SemanticObjectUnavailableActions` annotation as described in the [Hiding Unwanted Actions from a Semantic Object](navigation-from-an-app-outbound-navigation-d782acf.md#loiod782acf8bfd74107ad6a04f0361c5f62__hiding_unwanted_actions_subsection) subsection in [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).

-   **Is it possible to directly navigate to an object page or subobject page without loading the list report app?**

    Yes. Please use the Deep Linking mechanism as described in [Navigation to an App \(Inbound Navigation\)](navigation-to-an-app-inbound-navigation-c337d8b.md).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_zky_f1q_nzb"/>

## Actions

-   **Where can I get an overview of all the types of action buttons supported in SAP Fiori elements?**

    You can see the list of all types of action buttons that are supported by SAP Fiori elements for OData V4 in [Actions](actions-cbf16c5.md).

-   **How can I ensure that my action is enabled only upon selection of table records? How can I ensure that the context is passed to the action?**

    You can configure your actions using specific annotations. For more information about bound/unbound actions, see the [Actions Calling OData Function Imports](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__actions_calling_subsection) subsection in [Actions](actions-cbf16c5.md).

-   **How can end users pass additional parameters to the action? Can these action parameters have default values?**

    Yes, the action parameters can have default values. For more information, see the [Action Parameters](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__action_parameters_subsection) subsection in [Actions](actions-cbf16c5.md).

-   **Is it possible to group my actions under a menu button?**

    Yes, you can group actions under a menu button. For more information, see the [Grouping Actions as Menu Button](actions-cbf16c5.md#loiocbf16c599f2d4b8796e3702f7d4aae6c__grouping_actions_subsection) subsection in [Actions](actions-cbf16c5.md).

-   **How do I control the visibility/enablement of the standard *Create* button in a list report table?**

    You can control the visibility or enablement of the standard *Create* button in a list report table by using the `OperationAvailable` annotation. For more information, see the [Standard Action: Create](actions-in-the-list-report-993e99e.md#loio993e99eae4414b73bc7afef9518c79bf__standard_action_create_subsection) subsection in [Actions in the List Report](actions-in-the-list-report-993e99e.md).

-   **Can I define app-level critical actions that are shown emphasized rather than the default emphasized buttons such as *Edit* and *Save* of SAP Fiori elements?** 

    Yes, you can define app-level critical actions. For more information, see [Setting the Criticality for Actions](setting-the-criticality-for-actions-12f2ba2.md).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_qxt_k1q_nzb"/>

## Filter Bar

-   **Does the filter bar allow for semantic `date/datetime` operators so that users can choose something like *TODAY* or *TOMORROW* rather than exact dates?** 

    Yes, we support semantic date or datetime operators. For more information, see [Enabling Semantic Operators in the Filter Bar](enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   **How can I specify default filter values that show up whenever the app is loaded initially?**

    You can specify default filter values that appear when the app is initially loaded by using the appropriate annotations. For more information, see [Configuring Default Filter Values](configuring-default-filter-values-f27ad7b.md).

-   **Is there a support for parameterized entities to ensure that the users can provide parameters \(for example, `DisplayCurrency`\) in the filter bar that are then handled accordingly in the back end? That is, not as filters but as parameters to normalize the unit of measure or currency, for example?**

    Yes, we support parameterized entity sets. For more information, see the [Supporting Parameterized Entities](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__suppprting_parameterized_entities_subsection) subsection in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).

-   **I want my users to be able to filter for a value based on the associated measure. For example, to filter the month that has the highest sales. Is this possible?**

    Yes, you can filter for a value based on the associated measure by using visual filters. For more information, see [Configuring the Visual Filter Bar](configuring-the-visual-filter-bar-33f3d80.md).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_bqq_p1q_nzb"/>

## Field and Field Help

-   **In a field with a value help, only the key is displayed if I select an entry. Why do I see both the key and text in the field only after saving?**

    The key and text in the fields appears only after being saved because most likely you've used a text annotation only on the field property, but not on the corresponding property in the value help entity. You must maintain the text annotations in both places to avoid such behavior.

-   **I select a value from the value help and the value is taken over into the field. Next time I select another value, but then the field is empty instead of containing the new value. The value is empty every second time. Why does this happen?**

    The new value isn't appearing in the value help because the text annotation of the property in the value help entity points to the same property. You must use a different property instead.

    > ### Sample Code:  
    > Wrong Sample Code
    > 
    > ```
    > <Annotations Target="TestService.CategoryType/CatergoryId">
    > <Annotation Term="Common.Text" Path="CategoryId"/>
    > </Annotations>
    > ```

    > ### Sample Code:  
    > Correct Sample Code
    > 
    > ```
    > <Annotations Target="TestService.CategoryType/CatergoryId">
    > <Annotation Term="Common.Text" Path="CategoryDescription"/>
    > </Annotations>
    > ```

-   **The values entered in a field with a value help aren't validated. Why?**

    The value help, by default, is only a “support” mechanism to provide possible values. You can also enter values that aren't part of the value help.

    Validation happens in the following cases:

    -   The property is of type `Edm.Guid`

    -   The property has the annotation `Common.IsUnit`.

    -   The property has the annotation `Common.IsCurrency`.

    -   The property has the annotation `Common.ValueHelpWithFixedValues`.

    -   The property has the annotation `Common.ValueListForValidation`





<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_tsk_v1q_nzb"/>

## Table

-   **Why does the table not use the entire available width?**

    With the release of SAPUI5 1.87, SAP Fiori elements automatically calculates the default column width and provides an option to resize the column width in responsive tables, by default. For tables with fewer columns, there's a considerable amount of free space on the right side of the table. However, you can define a specific column width using annotations in the `manifest.json` file to adapt your needs. For more information, see [Setting the Default Column Width](setting-the-default-column-width-a765253.md).

    SAP Fiori elements also supports several table types. You can show or hide columns of list report and object page tables depending on the screen width. For example, if the browser window is small or the app is running on a device with a small screen, or if you're using the flexible column layout.

    The value of the `UI.Importance` annotation for the field determines which columns are hidden or moved when the screen size is reduced. For more information, see the [Showing or Hiding Columns Based on Importance and Available Screen Size in Responsive Tables](tables-c0f6592.md#loioc0f6592a592e47f9bb6d09900de47412__section_kgk_phh_wpb) section in [Tables](tables-c0f6592.md).

-   **Can I allow users to edit multiple records in one go \(mass edit or bulk edit\)?**

    Yes, you can edit multiple records at a time. For more information, see [Multiple Views on List Report Tables](multiple-views-on-list-report-tables-a37df40.md).

-   **Can a table be configured to show multiple views?**

    By default, the list report displays only one table. You can configure your list report to display one or more tables next to the main list report table in separate views. The users of your application can switch between the views using an icon tab bar. The tables in the views can be based on any entity in your service. The charts can be based on any entity, as long as it contains aggregatable and groupable properties. For more information, see [Multiple Views on List Report Tables](multiple-views-on-list-report-tables-a37df40.md)

    On the object page, you can use a segmented button to display different views of the same table. For more information, see [Adding Segmented Buttons to a Table Toolbar](adding-segmented-buttons-to-a-table-toolbar-5532c89.md).

-   **In SAP Fiori elements for OData V4, the analytical list report \(ALP\) isn't a separate floorplan, but rather a 'flavor' of the list report. Can I still use a multi-view table?**

    In the ALP flavor, we allow only multiple views of the same table \(that is, the same table has different filters in each view\). For more information, see [Defining Multiple Views of a Table in an Analytical List Page](defining-multiple-views-of-a-table-in-an-analytical-list-page-664a79a.md).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_hxj_z1q_nzb"/>

## Chart

-   **What is the main difference in the handling of aggregations in OData V2 and OData V4?**

    In OData V2, the UI has to pass only the required properties in the call and the back end ensures that an aggregation is performed on all the measure properties. In OData V4, the client has to explicitly pass the properties as dimensions or measures when the call is made, thus allowing greater flexibility while using the property. For more information, see the [Enabling Aggregation in the Back End](configuring-charts-653ed0f.md#loio653ed0f4f0d743dbb33ace4f68886c4e__enabling_aggregation_subsection) subsection in [Configuring Charts](configuring-charts-653ed0f.md).

-   **Can I use charts in the list report, especially in a draft-based list report and an object page, or is the use of charts limited to the ALP flavor of the list report?**

    You can also use charts in the list report and object page floorplans, and also in draft-based apps. In a list report without the ALP flavor, you can only use charts within a multi-view setup.




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_ffp_dbq_nzb"/>

## Object Page

-   **What are the different facets that can be added to the header of an object page? What are the relevant annotations for the header facets in the object page? Is navigation supported from the header facet of an object page?**

    There are multiple facets that can be added using annotations to the object page. For more information, see [Setting Up the Object Page Header](setting-up-the-object-page-header-cce93e6.md).

-   **I have too much content and don’t want to show everything when the section is loaded. Can I hide some of the sections and show them only when a user wishes to see it?**

    Yes. You can configure this. For more information, see [Showing and Hiding Content in Object Page Facets](showing-and-hiding-content-in-object-page-facets-9fcea86.md).

-   **Can I configure section-level actions?** 

    Yes, you can configure section-level actions. For more information, see [Adding Action Buttons to Forms in Sections](adding-action-buttons-to-forms-in-sections-e64efda.md).

-   **I have some sections that take a long time to load. I don’t want requests for these UI artifacts to go in the same call as the other requests so that the UI loads faster – what can I do here?**

    You can group the request for the element that takes a long time under the "LongRunners" group. For more information, see [Defining the Loading Behavior of Object Page Headers](defining-the-loading-behavior-of-object-page-headers-ac03570.md).

-   **Can I dynamically hide sections or parts of sections?** 

    Yes. For more information, see [Hiding Features Using the UI.Hidden Annotation](hiding-features-using-the-ui-hidden-annotation-ca00ee4.md).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_vfz_hbq_nzb"/>

## Extensions and Building Blocks

-   **I want to use SAP Fiori elements, but my requirements aren't fully fulfilled by the standard behavior. Can I incorporate my own logic while still retaining most of the standard functionality?** 

    You can look at the possibility of using app extensions. In addition, you can also explore the use of building blocks to build your own custom section \(or even a free-style app\) that still allows you to get most of the standard behavior out-of-the-box.

    You can use app extensions to extend your app to suit your requirements. For more information, see [Extending List Reports and Object Pages Using App Extensions](extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md).

-   **Where can I see some samples of extensions and building blocks?**

    You can find the examples in the [Flexible Programming Model Explorer](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/overview/introduction).

-   **How do I allow a key user to adapt my application?**

    There are multiple ways you can use to adapt your application for key users. For more information, see [Enabling an App for Key User Adaptation](enabling-an-app-for-key-user-adaptation-ccd45ba.md).


