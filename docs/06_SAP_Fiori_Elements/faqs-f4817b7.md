<!-- loiof4817b73671a4fb7af785b8fdd59f8e8 -->

# FAQs

You can get answers to the commonly asked questions, know more about SAP Fiori elements features, and troubleshoot common issues.



<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_uzg_2wp_nzb"/>

## General Questions

-   **I'm new to SAP Fiori elements development - where should I start? What is SAP Fiori elements anyway?** 

    We’ve put together a list of useful links to get you started, which you can see at [Developing Apps with SAP Fiori elements](https://ui5.sap.com/#/topic/03265b0408e2432c9571d6b3feb6b1fd).

-   **Is there a glossary where I can look up terms like annotations and extensions?**

    Yes, we do have a glossary that lists various terms used in SAP Fiori elements. For more information, see [Glossary](https://ui5.sap.com/#/topic/9ef211e569ed4f819af904ba360ea7f6).

-   **Is there a sample that showcases SAP Fiori elements?**

    Yes, SAP Fiori elements features two samples that are based on CAP and RAP. You can find them at [Feature Showcase Apps and Samples](https://ui5.sap.com/#/topic/521405cc719e4e699a25366461a516cb).

-   **Which features are available in SAP Fiori elements?**

    SAP Fiori elements supports multiple features, UI elements, and controls. These features are listed as a table that allows you to search, filter, and sort content in the table The table displays the links to the developer documentation and design guidelines documentation. The thumbnail provides a screenshot of the feature in the app. For more information, see [SAP Fiori elements Feature Map](https://ui5.sap.com/#/topic/62d3f7c2a9424864921184fd6c7002eb).

-   **What is the recommended IDE for developing SAP Fiori elements applications?**

    We recommend using SAP Fiori tools, which is a set of extensions for SAP Business Application Studio and Visual Studio Code. For more information, click on the **Tools** tile in [Developing Apps with SAP Fiori elements](https://ui5.sap.com/#/topic/03265b0408e2432c9571d6b3feb6b1fd).

-   **What is draft handling and can I disable it for apps built on SAP Fiori elements for OData V4?**

    SAP Fiori elements for OData V4 supports an edit-based scenario \(create/edit/delete\) only for a draft-enabled service. You can use non-draft services only for pure read-only applications where the user isn’t expected to perform any create/edit/delete operations. For more information about draft handling, see [Draft Handling](https://ui5.sap.com/#/topic/ed9aa41c563a44b18701529c8327db4d). Additionally, if you want to know the general information about tool support and the back end, see [Prerequisites for Using SAP Fiori elements](https://ui5.sap.com/#/topic/f2344b5e78164b2b9c27ef8b068f295c).

-   **Where can I find the right annotations for some of the commonly used UI elements?**

    To understand the most common annotations used when an app is loaded, see [Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](https://ui5.sap.com/#/topic/f2344b5e78164b2b9c27ef8b068f295c). If you’re interested to know about a specific annotation, check any of the following topics:

    -   To configure a table, see [Configuring Tables](https://ui5.sap.com/#/topic/f4eb70f4808b48adb6ea03a4017aba24).

    -   To configure a chart, see [Configuring Charts](https://ui5.sap.com/#/topic/653ed0f4f0d743dbb33ace4f68886c4e).

    -   To configure a filter bar, see [Configuring Filter Bars](https://ui5.sap.com/#/topic/4bd7590569c74c61a0124c6e370030f6).

    -   To configure object page headers, see [Setting Up the Object Page Header](https://ui5.sap.com/#/topic/cce93e6f067a4133a8430c4f5d7b8fc7).

    -   To configure the object page sections, see [Defining and Adapting Sections](https://ui5.sap.com/#/topic/facfea09018d4376acaceddb7e3f03b6).

    -   To now about the generic actions, see [Actions](https://ui5.sap.com/#/topic/cbf16c599f2d4b8796e3702f7d4aae6c).

    -   To know about value help, see [Field Help](https://ui5.sap.com/#/topic/a5608eabcc184aee99e1a7d88b28816c).

    -   To know about navigation links or buttons, see [Navigation from an App \(Outbound Navigation\)](https://ui5.sap.com/#/topic/d782acf8bfd74107ad6a04f0361c5f62).


-   **How can I better control the visibility and enablement of controls?** 

    You can control the visibility and enablement of control using the `UI.Hidden` annotation. For more information, see [Hiding Features Using the UI.Hidden Annotation](https://ui5.sap.com/#/topic/ca00ee45fe344a73998f482cb2e669bb).

    By using the `CreateHidden`/`UpdateHidden`/`DeleteHidden` annotations, you control the visibility of the standard *Create*/*Edit*/*Delete* buttons. For more information, see [Adding Actions to Tables](https://ui5.sap.com/#/topic/b623e0bbbb2b4147b2d0516c463921a0) and [Enabling Actions in the Object Page Header](https://ui5.sap.com/#/topic/5fe439613f9c4e259015951594c423dc).

    By using the `OperationAvailable` annotation, you control the enablement of an action button. For more information, see [Actions in the List Report](https://ui5.sap.com/#/topic/993e99eae4414b73bc7afef9518c79bf).

-   **How can I refresh data on the UI?**

    If a user changes the content of a field or performs another activity, this change can potentially influence other fields on the UI. This system behavior is called a side effect. Side effects are performed in the back end. However, you need to annotate the side effects implemented in the back end using side effect annotations to "inform" the front end which fields on the UI are influenced by a change, so that the front end can request new data for these fields. Otherwise, the UI may still display outdated data. For more information, see [Side Effects](https://ui5.sap.com/#/topic/18b17bdd49d1436fa9172cbb01e26544).

-   **Where can I see the list of standard keyboard shortcuts supported in SAP Fiori elements? Can I add my own keyboard shortcut for custom actions?**

    For detailed information about the keyboard shortcuts, see [Keyboard Shortcuts](https://ui5.sap.com/#/topic/0cd318c83ec5473d9a091c1782d03c21).

-   **How can I share an SAP Fiori elements app with other users?**

    Apps created with SAP Fiori elements provides a *Share* menu with options such as *Send E-Mail*, *Microsoft Teams*, and *Save as Tile*. For more information, see [The Share Functionality](https://ui5.sap.com/#/topic/022bf0dcae1d4d90961ebe23d642fca3).

-   **Can I override the standard texts or labels used in SAP Fiori elements?**

    Yes, you can. SAP Fiori elements provide the list of all the keys that you can use to overwrite the default texts. For more information, see [Localization of UI Texts](https://ui5.sap.com/#/topic/b8cb649973534f08a6047692f8c6830d).

-   **How can I create automated integration tests \(OPA\) for SAP Fiori elements for OData V4 applications?**

    We've provided a tutorial that can show you how to use the mock server functions and adopt the OPA \(One Page Acceptance\) Test Library to test your application. For more information, see [Use the Mockserver and OPA Test Library with SAP Fiori elements for OData V4 Applications](https://developers.sap.com/group.fiori-elements-mockserver-opa.html).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_vkf_5xp_nzb"/>

## Message Handling

-   **Why are some messages seen in the footer in a message popover while some are seen in a message dialog?**

    It actually depends on several factors like the message type \(state/transient\), the template used to create the app \(list report/object page, for example\), and even on the page state \(display/edit mode\). For more information, see [Using Messages](https://ui5.sap.com/#/topic/239b1922758645e7b451e01ded7f56bc).

-   **I need to show a warning message when a user triggers an action to ensure the user confirms that the action really should be executed. Can this be achieved?**

    Yes. For more information, see the *Confirmation Popup for Actions that Fail with 412 Warnings* section in [Confirmation Popups](https://ui5.sap.com/#/topic/9a536627a6a94de084b0605eb164d2c8).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_avw_5yp_nzb"/>

## Navigation

-   **How do I configure the next level navigation – the one that happens when the small arrow at the end of the table record \(chevron\) is clicked?**

    There are annotations that allow you to configure the table chevron navigation. For more information, see [Navigation to the Next Level](https://ui5.sap.com/#/topic/1559b2bb30134d8c9240bdd378d6543e). You can also change the default navigation to an external app instead of the object page . For more information, see [Changing Navigation to Object Page](https://ui5.sap.com/#/topic/8bd546e27a5f41cea6e251ba04534d70).

-   **What are the different means by which we can allow a user to navigate away from an SAP Fiori elements application?**

    We’ve put together an overview for you in the topic. Please check the different means outlined in [Navigation from an App \(Outbound Navigation\)](https://ui5.sap.com/#/topic/d782acf8bfd74107ad6a04f0361c5f62).

-   **How can I be sure that sensitive data isn't sent across when navigating between SAP Fiori elements applications? Can I explicitly keep certain information out of the navigation context?**

    You can check the *Handling Sensitive and Inapplicable Data* section of *Additional Features in SAP Fiori elements for OData V4* in [Navigation from an App \(Outbound Navigation\)](https://ui5.sap.com/#/topic/d782acf8bfd74107ad6a04f0361c5f62).

-   **My source app and target app use different field names for the same business field. How can I ensure that the correct context value for a field is passed during navigation?**

    You can use the mechanism described in the *Semantic Object Mapping* section in the *Additional Features in SAP Fiori elements for OData V4* of [Navigation from an App \(Outbound Navigation\)](https://ui5.sap.com/#/topic/d782acf8bfd74107ad6a04f0361c5f62).

-   **I don’t want users to see certain intents when using the navigation links. Can I exclude them?**

    Yes, you can use the `Common.SemanticObjectUnavailableActions` annotation as described in the *Hiding Unwanted Actions from a Semantic Object* section in *Additional Features in SAP Fiori elements for OData V4* in [Navigation from an App \(Outbound Navigation\)](https://ui5.sap.com/#/topic/d782acf8bfd74107ad6a04f0361c5f62).

-   **Is it possible to directly navigate to an object page or subobject page without loading the list report app?**

    Yes. Please use the Deep Linking mechanism as described in [Navigation to an App \(Inbound Navigation\)](https://ui5.sap.com/#/topic/c337d8bde8c544598969c8e4edaab262).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_zky_f1q_nzb"/>

## Actions

-   **Where can I get an overview of all the types of action buttons supported in SAP Fiori elements?**

    You can see the list of all types of action buttons that are supported by SAP Fiori elements for OData V4 in [Actions](https://ui5.sap.com/#/topic/cbf16c599f2d4b8796e3702f7d4aae6c).

-   **How can I ensure that my action is enabled only upon selection of table records? How can I ensure that the context is passed to the action?**

    You can configure your actions using specific annotations. For more information about bound/unbound actions, see the *Actions Calling OData Function Imports* section in the *Additional Features in SAP Fiori elements for OData V4* in [Actions](https://ui5.sap.com/#/topic/cbf16c599f2d4b8796e3702f7d4aae6c).

-   **How can end users pass additional parameters to the action? Can these action parameters have default values?**

    Yes, the action parameters can have default values. For more information, see the *Action Parameters* section in the *Additional Features in SAP Fiori elements for OData V4* in [Actions](https://ui5.sap.com/#/topic/cbf16c599f2d4b8796e3702f7d4aae6c).

-   **Is it possible to group my actions under a menu button?**

    Yes, you can group actions under a menu button. For more information, see the *Grouping Actions as Menu Button* section in the *Additional Features in SAP Fiori elements for OData V4* in [Actions](https://ui5.sap.com/#/topic/cbf16c599f2d4b8796e3702f7d4aae6c).

-   **How do I control the visibility/enablement of the standard *Create* button in a list report table?**

    You can control the visibility or enablement of the standard *Create* button in a list report table by using the `OperationAvailable` annotation. For more information, see the *Standard Action: Create* section in the *Additional Features in SAP Fiori elements for OData V4* in [Actions in the List Report](https://ui5.sap.com/#/topic/993e99eae4414b73bc7afef9518c79bf).

-   **Can I define app-level critical actions that are shown emphasized rather than the default emphasized buttons such as *Edit* and *Save* of SAP Fiori elements?** 

    Yes, you can define app-level critical actions. For more information, see [Setting the Criticality for Actions](https://ui5.sap.com/#/topic/12f2ba26f0d74853a0707597844c2961).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_qxt_k1q_nzb"/>

## Filter Bar

-   **Does the filter bar allow for semantic `date/datetime` operators so that users can choose something like *TODAY* or *TOMORROW* rather than exact dates?** 

    Yes, we support semantic date or datetime operators. For more information, see [Enabling Semantic Operators in the Filter Bar](https://ui5.sap.com/#/topic/fef65d03d01a4b2baca28983a5449cf7).

-   **How can I specify default filter values that show up whenever the app is loaded initially?**

    You can specify default filter values that appear when the app is initially loaded by using the appropriate annotations. For more information, see [Configuring Default Filter Values](https://ui5.sap.com/#/topic/f27ad7bc1f9c4b0d947b1fb18c37e94c).

-   **Is there a support for parameterized entities to ensure that the users can provide parameters \(for example, `DisplayCurrency`\) in the filter bar that are then handled accordingly in the back end? That is, not as filters but as parameters to normalize the unit of measure or currency, for example?**

    Yes, we support parameterized entity sets. For more information, see the *Supporting Parameterized Entities* section in the *Additional Features in SAP Fiori elements for OData V4* in [Configuring Filter Bars](https://ui5.sap.com/#/topic/4bd7590569c74c61a0124c6e370030f6).

-   **I want my users to be able to filter for a value based on the associated measure. For example, to filter the month that has the highest sales. Is this possible?**

    Yes, you can filter for a value based on the associated measure by using visual filters. For more information, see [Configuring the Visual Filter Bar](https://ui5.sap.com/#/topic/33f3d807c10b47d9a8141692d2619dc2).




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

    With the release of SAPUI5 1.87, SAP Fiori elements automatically calculates the default column width and provides an option to resize the column width in responsive tables, by default. For tables with fewer columns, there's a considerable amount of free space on the right side of the table. However, you can define a specific column width using annotations in the `manifest.json` file to adapt your needs. For more information, see [Setting the Default Column Width](https://ui5.sap.com/#/topic/a76525362b754354a85981a7389ca7af).

    SAP Fiori elements also supports several table types. You can show or hide columns of list report and object page tables depending on the screen width. For example, if the browser window is small or the app is running on a device with a small screen, or if you're using the flexible column layout.

    The value of the `UI.Importance` annotation for the field determines which columns are hidden or moved when the screen size is reduced. For more information, see the *Show/Hide Columns Based on Importance and Available Screen Size* section in [Tables](https://ui5.sap.com/#/topic/c0f6592a592e47f9bb6d09900de47412).

-   **Can I allow users to edit multiple records in one go \(mass edit or bulk edit\)?**

    Yes, you can edit multiple records at a time. For more information, see [Multiple Views on List Report Tables](https://ui5.sap.com/#/topic/a37df408044e41ef84e67207c8658d4f).

-   **Can a table be configured to show multiple views?**

    By default, the list report displays only one table. You can configure your list report to display one or more tables next to the main list report table in separate views. The users of your application can switch between the views using an icon tab bar. The tables in the views can be based on any entity in your service. The charts can be based on any entity, as long as it contains aggregatable and groupable properties. For more information, see [Multiple Views on List Report Tables](https://ui5.sap.com/#/topic/a37df408044e41ef84e67207c8658d4f)

    On the object page, you can use a segmented button to display different views of the same table. For more information, see [Adding Segmented Buttons to a Table Toolbar](https://ui5.sap.com/#/topic/5532c899e6e94137b18b8ee68df12efb).

-   **In SAP Fiori elements for OData V4, the analytical list report \(ALP\) isn't a separate floorplan, but rather a 'flavor' of the list report. Can I still use a multi-view table?**

    In the ALP flavor, we allow only multiple views of the same table \(that is, the same table has different filters in each view\). For more information, see [Defining Multiple Views of a Table in an Analytical List Page](https://ui5.sap.com/#/topic/664a79a0b06c400583ef8405789b7916).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_hxj_z1q_nzb"/>

## Chart

-   **What is the main difference in the handling of aggregations in OData V2 and OData V4?**

    In OData V2, the UI has to pass only the required properties in the call and the back end ensures that an aggregation is performed on all the measure properties. In OData V4, the client has to explicitly pass the properties as dimensions or measures when the call is made, thus allowing greater flexibility while using the property. For more information, see the *Enabling Aggregation in the Back End* section in the *Additional Features in SAP Fiori elements for OData V4* in [Configuring Charts](https://ui5.sap.com/#/topic/653ed0f4f0d743dbb33ace4f68886c4e).

-   **Can I use charts in the list report, especially in a draft-based lt report and an object page, or is the use of charts limited to the ALP flavor of the list report?**

    You can also use charts in the list report and object page floorplans, and also in draft-based apps. In a list report without the ALP flavor, you can only use charts within a multi-view setup.




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_ffp_dbq_nzb"/>

## Object Page

-   **What are the different facets that can be added to the header of an object page? What are the relevant annotations for the header facets in the object page? Is navigation supported from the header facet of an object page?**

    There are multiple facets that can be added using annotations to the object page. For more information, see [Setting Up the Object Page Header](https://ui5.sap.com/#/topic/cce93e6f067a4133a8430c4f5d7b8fc7).

-   **I have too much content and don’t want to show everything when the section is loaded. Can I hide some of the sections and show them only when a user wishes to see it?**

    Yes. You can configure this. For more information, see [Showing and Hiding Content in Object Page Facets](https://ui5.sap.com/#/topic/9fcea86d8ffd48459dd053eb5255a046).

-   **Can I configure section-level actions?** 

    Yes, you can configure section-level actions. For more information, see [Adding Action Buttons to Forms in Sections](https://ui5.sap.com/#/topic/e64efdad5bdf4264b54052bd7ab2229a).

-   **I have some sections that take a long time to load. I don’t want requests for these UI artifacts to go in the same call as the other requests so that the UI loads faster – what can I do here?**

    You can group the request for the element that takes a long time under the "LongRunners" group. For more information, see [Defining the Loading Behavior of Object Page Headers](https://ui5.sap.com/#/topic/ac035701f0f94bcca2d051bba9f1880d).

-   **Can I dynamically hide sections or parts of sections?** 

    Yes. For more information, see [Hiding Features Using the UI.Hidden Annotation](https://ui5.sap.com/#/topic/ca00ee45fe344a73998f482cb2e669bb).




<a name="loiof4817b73671a4fb7af785b8fdd59f8e8__section_vfz_hbq_nzb"/>

## Extensions and Building Blocks

-   **I want to use SAP Fiori elements, but my requirements aren't fully fulfilled by the standard behavior. Can I incorporate my own logic while still retaining most of the standard functionality?** 

    You can look at the possibility of using app extensions. In addition, you can also explore the use of building blocks to build your own custom section \(or even a free-style app\) that still allows you to get most of the standard behavior out-of-the-box.

    You can use app extensions to extend your app to suit your requirements. For more information, see [Extending List Reports and Object Pages Using App Extensions](https://ui5.sap.com/#/topic/a892eb8ae1fb498a9bc6c5194432e820).

-   **Where can I see some samples of extensions and building blocks?**

    You can find the examples in the [Flexible Programming Model Explorer](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/overview/introduction).

-   **How do I allow a key user to adapt my application?**

    There are multiple ways you can use to adapt your application for key users. For more information, see [Enabling an App for Key User Adaptation](https://ui5.sap.com/#/topic/ccd45ba3f0b446a0901b2c9d42b8ad53).


