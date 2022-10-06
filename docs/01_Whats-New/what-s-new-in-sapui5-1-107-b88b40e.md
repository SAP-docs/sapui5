<!-- loiob88b40e124634bb4897f36846f23cd12 -->

# What's New in SAPUI5 1.107

With this release SAPUI5 is upgraded from version 1.106 to 1.107.



<a name="loiob88b40e124634bb4897f36846f23cd12__section_tlr_g1x_z5b"/>

## Preview and Announcements

The following information concerns important upcoming changes. UI changes may have an impact on the user experience and may require test cases to be adapted.


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
<th valign="top">

Available as of SAPUI5 Version



</th>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Reminder: Outdated SAPUI5 Versions to Be Removed from the CDN**

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/) as well as the UI5 notifications in the Demo Kit.



</td>
<td valign="top">

n/a



</td>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Documentation now open for contributions on GitHub**

The documentation under [https://ui5.sap.com/\#/topic](https://ui5.sap.com/#/topic) is now also available on GitHub as Markdown files. Every documentation page in the Demo Kit has a direct link to the corrresponding Markdown file in the new [https://github.com/SAP-docs/sapui5](https://github.com/SAP-docs/sapui5) repository:![](images/Edit_on_GitHub_Demo_Kit_e111aeb.png)

If you have any suggestions for improvements or if you spot an error, feel free to create an issue or a pull request there.

For more information, see [Open Documentation Initiative for SAPUI5 and SAP Fiori Elements – Help Us to Help You!](https://blogs.sap.com/?p=1579981)



</td>
<td valign="top">

1.107



</td>
</tr>
<tr>
<td valign="top">

UI Change \(Preview\)



</td>
<td valign="top">

**List Reports, Analytical List Pages, Object Pages: *Share* Button Replaced by Menu Button**

The current *Share* button available in list reports, analytical list pages, and object pages will be replaced by a menu button to better support new integration functions.



</td>
<td valign="top">

1.108



</td>
</tr>
<tr>
<td valign="top">

UI Change \(Preview\)



</td>
<td valign="top">

**Draft-Enabled Apps: New *Validate* Button for Drafts on Mobile Devices**

A new central *Validate* button will be introduced in draft object pages that are running on mobile phones and tablet devices. It allows the user to validate the draft object at any time.



</td>
<td valign="top">

1.109



</td>
</tr>
</table>

> ### Note:  
> Content marked as **Preview** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/viewer/wnp_disclaimer).



<a name="loiob88b40e124634bb4897f36846f23cd12__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

We now provide the `sap.ui.model.odata.v4.ODataModel#getServiceUrl`, `sap.ui.model.odata.v4.ODataModel#getKeyPredicate`, and`sap.ui.model.odata.v4.ODataModel#requestKeyPredicate` methods.For more information, see the API Reference for [`#getServiceUrl`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/getServiceUrl), [`#getKeyPredicate`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/getKeyPredicate), and [`#requestKeyPredicate`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/requestKeyPredicate).



</td>
</tr>
</table>



<a name="loiob88b40e124634bb4897f36846f23cd12__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`**

To improve performance, we have now made the initial rendering faster: Table, tree, and list items are now already created when the data is requested from the back end. When the data is received, the binding context is updated. This way, rendering the UI with the requested data becomes faster.



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.upload.UploadSet`**

We've introduced directory \(folder\) uploads using the `UploadSet` control. It allows you to directly upload files from directories and subdirectories by configuring the directory property. You can also use the drag and drop feature to upload directories.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

We have improved the usability of the pop-in behavior for toggling the visibility of hidden columns. If the user adds more columns in the *View Settings* dialog in a table where several columns are already in the pop-in area, and these new columns are also moved to the pop-in area because of their importance, these columns are not hidden but are now made visible automatically. This makes it easier for users to recognize which columns have been added. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getDetailsButtonSetting) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableShowDetails).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   The new \(experimental\) `titleMaxLines` and `subTitleMaxLines` properties enable you to limit the number of lines for the title and subtitle in both the Default and Numeric card headers. Additionally, with the new \(experimental\) `detailsMaxLines` property you can also limit the number of lines for the details in the Numeric card header. For more information, see the [Default Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/default) and [Numeric Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/numeric) sections in the Card Explorer.

-   You can now add items of type `Link` \(experimental\) in the `actionsStrip` of footers and list items. For more information, see the [Card Footer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/footer) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/footer) in the Card Explorer.

-   All icons now have a new `initials` property, which is used as a fallback if the `src` property is not set or there is an issue with the resource. For more information, see the [List Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/list) section in the Card Explorer.

-   You can now configure the visibility of card headers using the new `visible` Boolean property. Card developers can set this property in the manifest. Additionally, they can add it to the `Configuration.js`, which will also enable card administrators, who are using the Configuration editor, to control the visibility of the card header. For more information, see the [Default Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/default) and [Numeric Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/numeric) sections and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/designtimeAdmin) in the Card Explorer.

-   We have added a new \(experimental\) `stateChanged` event that is fired when the state of the card is changed. For example, when the card is initialized, a new page inside the card is selected, a filter is changed, or data is refreshed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card).




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

-   We have enabled TinyMCE version 6 to be used as the editor type with the `RichTextEditor`.

-   We have changed the default value of the `editorType` property to always point to the version of TinyMCE recommended by UI5, corresponding to `sap.ui.richtexteditor.EditorType.TinyMCE`, and it will be subject to change in the future. This means that **any** `RichTextEditor` that does not have the`editorType` property set, or uses the default value `sap.ui.richtexteditor.EditorType.TinyMCE`, will automatically start using TinyMCE 6.

-   TinyMCE 4 is being deprecated and will be removed in the upcoming releases.

For more information, see [sap.ui.richtexteditor](../10_More_About_Controls/sap-ui-richtexteditor-d4f3f15.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor).



</td>
</tr>
<tr>
<td valign="top">

**`sap.uxap.ObjectPageSection`**

We have added a new `wrapTitle` property. It allows long titles to wrap into multiple lines. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSection).



</td>
</tr>
</table>



<a name="loiob88b40e124634bb4897f36846f23cd12__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loiob88b40e124634bb4897f36846f23cd12__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   You can now define a side effect with only a trigger action and without any target property. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   Unbound actions can now have key fields as parameters. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   We now provide the possibility to configure a handler function to control the visibility of actions. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md) and [Enabling Actions Added Using Extension Points](../06_SAP_Fiori_Elements/enabling-actions-added-using-extension-points-dd78aca.md).

-   You can now also use the `UI.DataPoint` annotation to add minimum and maximum values to the chart measures. For more information, see [Comparison Micro Chart](../06_SAP_Fiori_Elements/comparison-micro-chart-9d126f1.md).

-   We now show a message strip on the object page with a status message for the object based on information received from the back end. For more information, see [Using Messages](../06_SAP_Fiori_Elements/using-messages-239b192.md).

-   You can now define different table configurations in a list report with multiple entity sets. For more information, see [Defining Multiple Views on a List Report with Different Entity Sets and Table Settings](../06_SAP_Fiori_Elements/defining-multiple-views-on-a-list-report-with-different-entity-sets-and-table-settings-b6b59e4.md).




</td>
</tr>
</table>



<a name="loiob88b40e124634bb4897f36846f23cd12__section_r5v_3h5_zcb"/>

## Demo Kit Improvements and Documentation


<table>
<tr>
<td valign="top">

***Edit on GitHub* Button**

We have enabled external collaboration for our documentation through `github.com`. You can now contribute to our content through pull requests or by asking for enhancements by opening GitHub issues.

![](images/Edit_on_GitHub_d5a8a29.png)



</td>
</tr>
</table>

