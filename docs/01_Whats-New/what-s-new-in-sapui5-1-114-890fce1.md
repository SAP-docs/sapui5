<!-- loio890fce16801640459e67ec64da4daa00 -->

# What's New in SAPUI5 1.114

With this release SAPUI5 is upgraded from version 1.113 to 1.114.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

** **


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

 1.114 



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

We have \(experimentally\) introduced a new type of message – card-blocking messages. The three available types `NoData`, `Error`, and `Information` are listed in the `sap.ui.integration.CardBlockingMessageType` enumeration.

List, Table, Object, and the other declarative card types automatically show a card-blocking message when there is no data or an error has occurred. Additionally, the developers of Component cards, or those using extensions, can use the `showBlockingMessage` and `hideBlockingMessage` methods to programmatically control the message. For more information, see the [CardBlockingMessageType](https://ui5.sap.com/#/api/sap.ui.integration.CardBlockingMessageType) enumeration, the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card), and the [Blocking Message](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/blockingMessage) and [No Data Message](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/component/noDataMessage) samples in the Card Explorer.

<sub>Changed•Control•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



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

<sub>Deprecated•Feature•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.smarttable.SmartTable`** 



</td>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

-   We have introduced the `useColumnLabelsAsTooltips` property that allows you to automatically use a column label as a tooltip for a column. You can also use this property for custom columns. For more information, see the  [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getUseColumnLabelsAsTooltips).

-   We have provided a way to sort multiple properties of semantically connected fields. To enable this, we have added `additionalSortProperty` in the `p13nData`. The table will create a `QuickSortItem` for each listed property name. For more information, see [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23faq) and see question 27.

-   We have added the `copyProvider` aggregation that provides generic copy and paste functions along with a *Copy* button in the toolbar of the table. To enable the copy and paste functions, the `CopyProvider` plugin is used. For more information, see the  [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getCopyProvider)  for the `copyProvider` aggregation, the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CopyProvider) for the `CopyProvider` plugin, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

-   To improve the user experience, we have removed the *Reset* button from the control’s personalization dialog when the dialog is opened from the column header menu or from a custom button in the table's toolbar. This change was needed because when you open the dialog from one of these places it opens only one panel \(for example, Columns, Sort, Group, or Filter\). However, the *Reset* button resets all the panels and not only the one that is opened, which was confusing for the user.


<sub>Changed•Control•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 SAP Fiori Elements 



</td>
<td valign="top">

 **SAP Fiori elements for OData V2** 



</td>
<td valign="top">

**SAP Fiori elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   In draft-enabled applications, drafts are now saved after 20 seconds, thereby reducing the number of merge calls. For more information, see [Draft Handling](../06_SAP_Fiori_Elements/draft-handling-ed9aa41.md).

-   You now have an option to create cards for the *Insights* section of *My Home* in SAP S/4HANA Cloud from the list report and analytical list page apps. For more information, see [Creating Cards for the Insights Section of My Home in SAP S/4HANA Cloud](../06_SAP_Fiori_Elements/creating-cards-for-the-insights-section-of-my-home-in-sap-s-4hana-cloud-9b13559.md).

-   We've added another option to the *Share* menu button. When a user clicks the *Share* button and then the *Share Menu: Microsoft Teams* option, they can now also choose *As Tab*.

     ![](images/Share_Menu_Microsoft_Teams_Share_as_Tab_c0c2151.png) 

    For more information, see ["Share" Functionality](../06_SAP_Fiori_Elements/share-functionality-022bf0d.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 SAP Fiori Elements 



</td>
<td valign="top">

 **SAP Fiori elements for OData V4** 



</td>
<td valign="top">

**SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now freeze the first columns in grid and analytical tables so that they remain fixed when scrolling horizontally. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   Empty rows in object page tables can now contain disabled fields. For more information, see [Enabling Inline Creation Mode or Empty Rows Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-rows-mode-for-table-entries-cfb04f0.md).

-   We now provide filtering by draft-related properties. For more information, see [Draft Handling](../06_SAP_Fiori_Elements/draft-handling-ed9aa41.md).

-   You can now disable the `AddCardToInsights` option in the manifest. For more information, see [Creating Cards for the Insights Section of My Home in SAP S/4HANA Cloud](../06_SAP_Fiori_Elements/creating-cards-for-the-insights-section-of-my-home-in-sap-s-4hana-cloud-9b13559.md).

-   You now have an option to create cards for the *Insights* section of *My Home* in SAP S/4HANA Cloud from the list report and analytical list page apps. For more information, see [Creating Cards for the Insights Section of My Home in SAP S/4HANA Cloud](../06_SAP_Fiori_Elements/creating-cards-for-the-insights-section-of-my-home-in-sap-s-4hana-cloud-9b13559.md).

-   We've added more keys that can be overridden by application developers using the custom i18n file approach. You can now override the following keys:

    -   `OBJECTPAGESTATE_ISSUE`

    -   `OBJECTPAGESTATE_ERROR`

    -   `OBJECTPAGESTATE_WARNING`

    -   `OBJECTPAGESTATE_INFORMATION`

    -   `M_ILLUSTRATEDMESSAGE_TITLE`

    -   `M_ILLUSTRATEDMESSAGE_DESCRIPTION`


    For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   We've added another option to the *Share* menu button. When a user clicks the *Share* button and then the *Share Menu: Microsoft Teams* option, they can now also choose *As Tab*.

     ![](images/Share_Menu_Microsoft_Teams_Share_as_Tab_c0c2151.png) 

    For more information, see ["Share" Functionality](../06_SAP_Fiori_Elements/share-functionality-022bf0d.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **FLP Time Zone Support in SAPUI5** 



</td>
<td valign="top">

**FLP Time Zone Support in SAPUI5**

We now enable the configuration of a time zone in SAPUI5. The configured time zone affects all applications. Using a time zone that is different from the time zone of a user's computer can break existing applications. Changing the time zone while using an application can cause unexpected side effects.

**Action:** Check and, if necessary, adapt your application code if you plan to use a configured time zone that is different from your browser's time zone.

For more information, see [Dates, Times, Timestamps, and Time Zones](../04_Essentials/dates-times-timestamps-and-time-zones-6c9e61d.md) and [Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md).

<sub>Changed•Feature•Required•1.114</sub>



</td>
<td valign="top">

 Required 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.SearchField`** 



</td>
<td valign="top">

**`sap.m.SearchField`**

When the user clicks the search button \(the magnifier icon\), the `search` event is triggered with a new `searchButtonPressed` parameter. This behavior enables developers to differentiate between the actual click on the search button and keystrokes, such as [Enter\] and [Esc\], which also trigger the `search` event.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SearchField%23events/search) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SearchField/sample/sap.m.sample.SearchField).

<sub>Changed•Control•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



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

Only for fields without a `ValueList` annotation, we allow users to enter text with a maximum number of characters that is specified in the `maxLength` property of the control. When a user pastes a longer text from the clipboard, the text will be clipped to the allowed `maxLength` value.

<sub>Changed•Control•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.valuehelpdialog.ValueHelpDialog`** 



</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`**

-   We have improved the accessibility of the control and the screen readers can now announce when users add or remove conditions in the *Define Conditions* tab. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.Basic).
-   We have added a new \(default\) menu in the column headers of the built-in table that now also allows quick sorting. Additionally, for columns of this table that show both ID and description, now we enable users to sort using either the ID or the description. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField/sample/sap.ui.comp.sample.smartfield.TextInEditModeSource).

<sub>Changed•Control•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
<tr>
<td valign="top">

 1.114 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **Accessibility** 



</td>
<td valign="top">

**Accessibility**

We are now using JAWS 2023 as a reference testing environment in SAPUI5. For more information, see the *Assistive technologies reference testing environment for SAPUI5* SAP Note [2564165](https://launchpad.support.sap.com/#/notes/2564165).

<sub>Changed•Feature•Info Only•1.114</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-05-18



</td>
</tr>
</table>

