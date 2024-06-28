<!-- loiodc76640051524e35a4de9a366c43c405 -->

# What's New in SAPUI5 1.84

With this release SAPUI5 is upgraded from version 1.82 to 1.84.



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

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Asynchronous Loading of XML Content in Fragments** 

</td>
<td valign="top">

**Asynchronous Loading of XML Content in Fragments**

The `sap.ui.core.Fragment.load()` generic function to instantiate fragments is now fully asynchronic. Many scenarios, such as the declarative use of fragments in XML views, automatically benefit from the new asynchronous behavior. If your own code [instantiates fragments programmatically](../04_Essentials/programmatically-instantiating-xml-fragments-d6af195.md) and accesses dependent entities such as controls by ID, make sure you're correctly chaining to the Promise returned by `Fragment.load()`. We have adjusted samples, tutorials, and documentation to reflect the typical asynchronous usage of fragments.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Fragment/methods/sap.ui.core.Fragment.load) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Accessibility Enhancement** 

</td>
<td valign="top">

**Accessibility Enhancement**

We have enhanced SAPUI5’s accessibility support according to the latest WAI-ARIA 1.1 specification.

<sub>New•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 in the SAP Road Map Explorer** 

</td>
<td valign="top">

**SAPUI5 in the SAP Road Map Explorer**

SAPUI5 is now part of the SAP Road Map Explorer. Check out the innovations that are currently in development as well as planned features and functions for SAPUI5 here: [SAP Road Map Explorer](https://roadmaps.sap.com/board?PRODUCT=73554900100800001361)

<sub>New•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Card Explorer** 

</td>
<td valign="top">

**Card Explorer**

-   A new Troubleshooting page has been added to the Integrate section of the Card Explorer. It contains additional tips and solutions to the most common issues with Integration cards. For more information, see [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/calendar).

-   We have added detailed documentation about sizing and layouts in Integration cards. For more information, see the [Sizing](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/sizing) and the [Layouts](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/integrate/layouts) pages in the Card Explorer.


<sub>Changed•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Navigation with Dynamic Targets** 

</td>
<td valign="top">

**Navigation with Dynamic Targets**

In addition to the usual static definition of navigation targets in the [Routing Configuration](../04_Essentials/routing-configuration-9023130.md) of the manifest, we also provide APIs to allow the declaration and display of targets at runtime. This accounts for scenarios in which the necessary information is only available at runtime, for example depending on the specific user configuration.

Note that the static definition remains the preferred solution as it allows for performance optimization. Only use dynamic targets when a static declaration is not possible. For more information, see [Navigate with Dynamic Targets](../04_Essentials/navigate-with-dynamic-targets-856d6c6.md).

<sub>Changed•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Rule Builder Control** 

</td>
<td valign="top">

**Rule Builder Control**

You can now configure labels for condition expressions in a decision table. These labels appear in the column header of the decision table. For more information, see [Features](../03_Get-Started/features-f97c50c.md).

<sub>Changed•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V2 Model** 

</td>
<td valign="top">

**SAPUI5 OData V2 Model**

The new version of the SAPUI5 OData V2 model introduces the following features:

-   We have introduced a `persistTechnicalMessages` model parameter. If set to `true`, messages returned with failed requests are treated as persistent and aren't removed by the OData model.
-   An `expand` parameter can be provided to the `sap.ui.model.odata.v2.ODataModel#callFunction` method in `mParameters`. The expand is performed in a separate GET request within the same batch request as the POST request of the function import. The GET request references the result of the function import.

<sub>Changed•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

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

-   We now recommend using the [Manifest Model Preload](../04_Essentials/manifest-model-preload-26ba6a5.md). For an earlier request of the root `$metadata` and the security token you need to also set the `earlyRequests` model parameter.
-   The `sap.ui.model.odata.v4.Context#refresh` method is now supported for kept-alive contexts. A list binding context can be kept alive with the `sap.ui.model.odata.v4.Context#setKeepAlive` method introduced with SAPUI5 1.81.
-   The `com.sap.vocabularies.Common.v1.ValueListRelevantQualifiers` annotation is now automatically taken into account by `sap.ui.model.odata.v4.ODataPropertyBinding#requestValueListInfo`.
-   When using `groupLevels` with the `$$aggregation` list binding parameter, we now support the collapsing and re-expanding of previously expanded nodes.
-   The `DataStateIndicator` table plugin now also works with the OData V4 model.
-   Messages resulting from failed requests contain the HTTP status code in `technicalDetails.httpStatus`.
-   Query options starting with `sap-valid-` are allowed.
-   Dynamic "[14.5.5 Expression `edm:Collection`](http://docs.oasis-open.org/odata/odata/v4.0/csprd02/part3-csdl/odata-v4.0-csprd02-part3-csdl.html#_Toc360208903)" is supported by `sap.ui.model.odata.v4.AnnotationHelper#format` and `sap.ui.model.odata.v4.AnnotationHelper#value`.

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.GridContainer`** 

</td>
<td valign="top">

**`sap.f.GridContainer`**

You can now drag and drop items using the keyboard into an empty container. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.GridContainer).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Button`** 

</td>
<td valign="top">

**`sap.m.Button`**

The new `ariaHasPopup` property allows the `aria-haspopup` attribute to be set from another control that uses `sap.m.Button`. It indicates the availability and type of an interactive popup element that can be triggered by another control. This property is of type `sap.ui.core.aria.HasPopup`, which can have the following values: `None`\(default\), `Menu, ListBox, Tree, Grid`, and `Dialog`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Button).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ComboBox`** 

</td>
<td valign="top">

**`sap.m.ComboBox`**

We have updated the behavior of the control regarding the `selectedKey` and `value` properties, to be aligned with `sap.m.Input`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ComboBox).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.IconTabBar`** 

</td>
<td valign="top">

**`sap.m.IconTabBar`**

The control now supports the badge feature. You can use it to indicate that something new has been added in a tab. This visual eye catcher, in the shape of a circle inherits the semantic colors of the tab filters. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.BadgeCustomData) and the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBarBadges).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Input`** 

</td>
<td valign="top">

**`sap.m.Input`**

We have introduced a new `valueHelpIconSrc` property. It allows you to set a custom value help icon, instead of the default one, by setting `sap.ui.core.URI` as value of the `valueHelpIconSrc` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Input) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Input/sample/sap.m.sample.InputCustomValueHelpIcon).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`** 

</td>
<td valign="top">

**`sap.m.List`**

The new `accDescription` property allows applications to define their own application-specific text for screen readers to replace the default text of `CustomListItem`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.CustomListItem%23methods/getAccDescription).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ObjectStatus`** 

</td>
<td valign="top">

**`sap.m.ObjectStatus`**

We have made several visual improvements:

-   Samples have been updated to use the latest message and status icons.
-   Icons now have same width, which allows the text to be aligned when there are more than one items one below the other.
-   The control now supports light font in large state.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ObjectStatus) and the [Sample](https://ui5.sap.com/#/entity/sap.m.ObjectStatus/sample/sap.m.sample.ObjectStatus). 

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ProgressIndicator`** 

</td>
<td valign="top">

**`sap.m.ProgressIndicator`**

We have improved the control behavior when the available width is not enough and the text displayed inside `sap.m.ProgressIndicator` is truncated. Now, if the text value set in the `displayValue` property is truncated, the cursor becomes a pointer \(hand\). In such a scenario, the `ProgressIndicator` can be clicked/tapped to open an information popover that displays the full text value.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ProgressIndicator) and the [Sample](https://ui5.sap.com/#/entity/sap.m.ProgressIndicator/sample/sap.m.sample.ProgressIndicator).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

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

The icon of the Refresh button in the `sap.m.SearchField` is now changed from sap-icon://synchronize to sap-icon://refresh.

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Wizard` \(Experimental\)** 

</td>
<td valign="top">

**`sap.m.Wizard` \(Experimental\)**

We have enhanced the `sap.m.Wizard` to support rendering of the steps as separate pages, instead of being appended to the previous one. Enable this by setting the new `renderMode` property to `sap.m.WizardRenderMode.Page`. The default behavior is not changed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Wizard) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Wizard/sample/sap.m.sample.WizardSingleStep) .

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

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

-   We have introduced a new value `valueListNoValidation` to extend the options of the `textInEditModeSource` enumeration. It allows the `SmartField` to have `textArrangement` with `valueList` using a value that is not in the value list, without receiving an error. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.TextInEditModeSource%23properties).

-   We have added a new sample explaining the specific use of `SmartField` as a currency field. It represents the frontend validation, the currency scale configuration, and the communication with the backend when using `SmartField` of type `Currency`. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField/sample/sap.ui.comp.sample.smartfield.CurrencyValidation).


<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`**

Until now, the history of recently entered values could be switched on or off at the application level if enabled in SAP Fiori launchpad. Now, you can switch it off for a specific control with the new `historyEnabled` property. It is of type `boolean` with the default value `true`. For filters of type `sap.m.ComboBox` and `sap.m.MultiComboBox` or inner controls of the `SmartField` of type `sap.m.ComboBox` and `sap.m.MultiComboBox`, the history of recently entered values is disabled by default. To enable it for these controls, you need to set the `historyEnabled` property to `true`.

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

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

The new `headerLevel` property is now available to define the semantic level of the header of a table. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getHeaderLevel) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

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

Based on user experience testing, we have introduced the following visual and functional improvements for the `ValueHelpDialog`:

-   Now the *Define Conditions* tab has only one operation dropdown list and corresponding tokenizer for include and exclude operations, instead of the previous two.

    > ### Note:  
    > As a result of this change, any tests that depend on the exclude operations dropdown list and exclude tokenizer need to be adapted accordingly.

-   The title of the `ValueHelpDialog` is now left-aligned, the *Show Advanced Search* and *Hide Advanced Search* button is renamed to *Show Filters* and *Hide Filters* respectively.
-   Filters are aligned with labels in a grid and the number of items per row depends on the width of the `ValueHelpDialog`.

-   A new property, `isRunningInValueHelpDialog` in the `FilterBar`, allows you to choose whether or not to use the new filter alignment. By default, it’s set to `false`. If you set it to `true`, the items in the filter bar will show the new filter alignment designed for the `ValueHelpDialog`.

-   We've introduced counters next to the tab titles showing how many items or conditions have been selected in each tab. If there are no selected items in any of the tabs, the titles don’t show any number.

-   For clarity, the tab title *Select from List* is now renamed to *Search and Select*.


For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.valuehelpdialog.ValueHelpDialog/sample/sap.ui.comp.sample.valuehelpdialog.filterbar).

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

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

-   The Calendar card is no longer in experimental state. This card shows an overview of tasks for a single entity \(such as a person or resource\). It consists of an interactive calendar and a chronological list of appointments for a single date. For more information, see [Calendar Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/calendar) in the Card Explorer.
-   You can now dynamically fetch data to populate filters \(experimental\). For more information, see the `data` property in the [Filters](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/filters) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/filters) in the Card Explorer.
-   We have introduced `size` and `backgroundColor` icon properties \(experimental\). They are both available for the List, Object, and Table cards, while the default card header has only the `backgroundColor` \(experimental\) property. For more information, see the [List Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/list), [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/object) and [Table Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/table) sections in the Card Explorer.
-   You can now use the `oCard.triggerAction` \(experimental\) method to programmatically trigger an action from a Component card or from an extension. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.CardFacade%23methods/sap.ui.integration.widgets.CardFacade.triggerAction), [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/component/triggerAction) and the [Card Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions) section in the Card Explorer. 
-   You can now make HTTP POST requests with body encoding of type JSON. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/data/graphql) and the [Data](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data) section in the Card Explorer.

<sub>Changed•Control•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
<tr>
<td valign="top">

1.84 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements** 

</td>
<td valign="top">

**SAP Fiori Elements**

-   SAP Fiori elements now provide meaningful messages instead of technical error messages for e-tag mismatches.

-   Side effects in non-draft apps are now supported for own actions. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   Input fields with value help can now be configured to show texts and ID together in the *Edit* and *Display* modes of an object page. For more information, see [Displaying Text and ID for Value Help Input Fields](../06_SAP_Fiori_Elements/displaying-text-and-id-for-value-help-input-fields-080886d.md).

-   SAP Fiori elements now allow passing of multiple contexts for external navigation.

-   SAP Fiori elements list report and object page tables now provide visual indication on the last opened row.

-   List reports now store semantic date ranges in the inner app state. For more information, see [Modifying Startup Parameters Using an Extension](../06_SAP_Fiori_Elements/modifying-startup-parameters-using-an-extension-4564eed.md).

-   SAP Fiori elements now support `DraftRootType` annotation property `NewAction`. You can configure applications to call `NewAction` for new draft creations. For more information, see [Handling of the preferredMode Parameter](../06_SAP_Fiori_Elements/handling-of-the-preferredmode-parameter-bfaf3cc.md).

-   SAP Fiori elements now display a confirmation popup for 412 warning messages from function import actions and the *Save* action in non-draft apps. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   In object pages, you can now configure your own action buttons with semantic colors. For more information, see [Displaying Actions on the Object Page](../06_SAP_Fiori_Elements/displaying-actions-on-the-object-page-f65e8b1.md).

-   Overview pages now provide the following support in OData version V4:

    -   Support for list cards

    -   Support for table cards

    -   Filtering of list and table cards

    -   Navigation from card header and line items

    -   Navigation support for passing selected global and card filters



<sub>Changed•SAP Fiori Elements•Info Only•1.84</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-11-20

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.123](what-s-new-in-sapui5-1-123-9d00ac7.md "With this release SAPUI5 is upgraded from version 1.122 to 1.123.")

[What's New in SAPUI5 1.122](what-s-new-in-sapui5-1-122-5d078da.md "With this release SAPUI5 is upgraded from version 1.121 to 1.122.")

[What's New in SAPUI5 1.121](what-s-new-in-sapui5-1-121-91a4a2f.md "With this release SAPUI5 is upgraded from version 1.120 to 1.121.")

[What's New in SAPUI5 1.120](what-s-new-in-sapui5-1-120-2359b63.md "With this release SAPUI5 is upgraded from version 1.119 to 1.120.")

[What's New in SAPUI5 1.119](what-s-new-in-sapui5-1-119-0b1903a.md "With this release SAPUI5 is upgraded from version 1.118 to 1.119.")

[What's New in SAPUI5 1.118](what-s-new-in-sapui5-1-118-3eecbde.md "With this release SAPUI5 is upgraded from version 1.117 to 1.118.")

[What's New in SAPUI5 1.117](what-s-new-in-sapui5-1-117-029d3b4.md "With this release SAPUI5 is upgraded from version 1.116 to 1.117.")

[What's New in SAPUI5 1.116](what-s-new-in-sapui5-1-116-ebd6f34.md "With this release SAPUI5 is upgraded from version 1.115 to 1.116.")

[What's New in SAPUI5 1.115](what-s-new-in-sapui5-1-115-409fde8.md "With this release SAPUI5 is upgraded from version 1.114 to 1.115.")

[What's New in SAPUI5 1.114](what-s-new-in-sapui5-1-114-890fce1.md "With this release SAPUI5 is upgraded from version 1.113 to 1.114.")

[What's New in SAPUI5 1.113](what-s-new-in-sapui5-1-113-a9553fe.md "With this release SAPUI5 is upgraded from version 1.112 to 1.113.")

[What's New in SAPUI5 1.112](what-s-new-in-sapui5-1-112-34afc69.md "With this release SAPUI5 is upgraded from version 1.111 to 1.112.")

[What's New in SAPUI5 1.111](what-s-new-in-sapui5-1-111-7a67837.md "With this release SAPUI5 is upgraded from version 1.110 to 1.111.")

[What's New in SAPUI5 1.110](what-s-new-in-sapui5-1-110-71a855c.md "With this release SAPUI5 is upgraded from version 1.109 to 1.110.")

[What's New in SAPUI5 1.109](what-s-new-in-sapui5-1-109-3264bd2.md "With this release SAPUI5 is upgraded from version 1.108 to 1.109.")

[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-66e33f0.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-d4ff916.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-5b497b0.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-4d6c00e.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-69e567c.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-0e98c76.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-f038c99.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-7733b00.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-27dec1d.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-4f35848.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-d9f16f2.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-fa0e282.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-7a9269f.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-a1aea67.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-c40f1e6.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-f273340.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1ef345d.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-0a2bd79.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-91c10c2.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-e56cddc.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-e15a206.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-b506da7.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-4c1c959.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-1d18eb5.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-3a8dd13.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f5e2a21.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-8cee506.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-99c4cdc.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-f09b63e.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-c46b439.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-aad03b5.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-5cbb62d.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-c22208a.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-231dd13.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-521cad9.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-a93a6a3.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-f073d69.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-89a18bd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-f94bf93.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-a6b1472.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-c9896e9.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-0f5acfd.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-0e30822.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-e8d9da7.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-771f4d5.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-d991552.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-5a0e1f7.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-7c927aa.md "With this release SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-108b7fd.md "With this release SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-c838330.md "With this release SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-849e1b6.md "With this release SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-759e9f3.md "With this release SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-fa1efac.md "With this release SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-6307539.md "With this release SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-a0cb7a0.md "With this release SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-468b05d.md "With this release SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-fbab50e.md "With this release SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-f218918.md "With this release SAPUI5 is upgraded from version 1.36 to 1.38.")

