<!-- loiodb492368adbe490fa5d4ec7ebd98b187 -->

# Modernization Guide

This guide helps you modernize your SAPUI5 applications by providing a consolidated overview of all deprecated APIs, controls, themes, libraries, and patterns, along with their modern replacements.

Each of the following sections groups topics by library, listing the deprecated API, its modern replacement, and guidance on how to modernize your code. For detailed steps, follow the links to the dedicated pages.

For the full list of all deprecated APIs, see the [API Reference: `deprecated`](https://ui5.sap.com/#/api/deprecated).

> ### Tip:  
> Use [UI5 linter](https://github.com/SAP/ui5-linter) to detect deprecated API usage in your projects. UI5 linter is a static code analysis tool that checks your JavaScript, TypeScript, XML, and JSON files for issues. UI5 linter also provides autofixes for a selected number of issues. For more information, see [Scope of Autofix](https://github.com/SAP/ui5-linter/blob/main/docs/Scope-of-Autofix.md).
> 
> For practical, hands-on guidance on migrating your SAPUI5 application to modern APIs, check out [this SAP Community blog post](https://community.sap.com/t5/technology-blog-posts-by-sap/how-to-migrate-ui5-projects-to-the-latest-ui5-best-practices/ba-p/14340388), which covers step-by-step migration workflows and how UI5 linter can help automate parts of the process.

**On this page:**

-   [Deprecated Themes](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_DTS)
-   [Deprecated Libraries](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_DLS)
-   [Core Framework API Migration](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_CFM)
-   [jQuery.sap Module Migration](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_JMM)
-   [Deprecated View Types and Features](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_DVT)
-   [Deprecated Controls by Library](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_DCL)
-   [Deprecated Core Classes](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_DCC)
-   [OData and Model Migration](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_OMM)
-   [Manifest and Component Metadata Migration](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_MCM)
-   [SAP Fiori Elements Migration](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_FEM)
-   [Version-Specific Upgrade Notes](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_VSU)
-   [Analysis Path Framework](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_APF)
-   [Hybrid Web Container](modernization-guide-db49236.md#loiodb492368adbe490fa5d4ec7ebd98b187__section_HWC)



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_DTS"/>

## Deprecated Themes

All deprecated themes have been removed as of SAPUI5 1.136 or earlier. The recommended target theme is `sap_horizon`.


<table>
<tr>
<th valign="top">

Deprecated Theme

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Removed as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap_belize`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

1.136

</td>
<td valign="top">

`sap_horizon`

</td>
</tr>
<tr>
<td valign="top">

`sap_hcb`

</td>
<td valign="top">

1.46

</td>
<td valign="top">

1.136

</td>
<td valign="top">

`sap_horizon_hcb`

</td>
</tr>
<tr>
<td valign="top">

`sap_bluecrystal`

</td>
<td valign="top">

1.40

</td>
<td valign="top">

1.136

</td>
<td valign="top">

`sap_horizon`

</td>
</tr>
<tr>
<td valign="top">

`sap_ux`

</td>
<td valign="top">

1.40

</td>
<td valign="top">

1.48

</td>
<td valign="top">

`sap_horizon`

</td>
</tr>
<tr>
<td valign="top">

`sap_platinum`

</td>
<td valign="top">

1.40

</td>
<td valign="top">

1.48

</td>
<td valign="top">

`sap_horizon`

</td>
</tr>
<tr>
<td valign="top">

`sap_goldreflection`

</td>
<td valign="top">

1.40

</td>
<td valign="top">

1.48

</td>
<td valign="top">

`sap_horizon`

</td>
</tr>
</table>

For a list of the available themes, see [Available Themes](../04_Essentials/available-themes-da0d2e7.md).



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_DLS"/>

## Deprecated Libraries

The following libraries have been deprecated and/or removed entirely:


<table>
<tr>
<th valign="top">

Library

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.apf`

</td>
<td valign="top">

1.136

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.webc.common`

`sap.ui.webc.fiori`

`sap.ui.webc.main`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

> ### Remember:  
> Removed as of 1.147, see [this blog post](https://community.sap.com/t5/frontend-ui5-sap-fiori-blog-posts/removal-of-legacy-sap-ui-webc-web-component-ui-libraries-from-sapui5/ba-p/14358564). Modern usage of native web components in SAPUI5 is documented in [Using Web Components](../04_Essentials/using-web-components-1c80793.md).



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.suite`

</td>
<td valign="top">

1.108

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.landvisz`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

No replacement \(removed as of 1.120\)

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.vtm`

</td>
<td valign="top">

1.96

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.zen.commons`

`sap.zen.crosstab`

`sap.zen.dsh`

</td>
<td valign="top">

1.89

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.commons`

`sap.ui.ux3`

`sap.makit`

</td>
<td valign="top">

1.38

</td>
<td valign="top">

Replaced by `sap.m` and `sap.ui.layout` controls

</td>
</tr>
<tr>
<td valign="top">

`sap.me`

</td>
<td valign="top">

1.34

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.ca.ui`

</td>
<td valign="top">

1.28

</td>
<td valign="top">

No replacement

</td>
</tr>
</table>

To find out whether these libraries have been replaced by other content, check them at [API Reference: `deprecated`](https://ui5.sap.com/#/api/deprecated).



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_CFM"/>

## Core Framework API Migration \(`sap.ui.core`\)

The central `sap.ui.getCore()` singleton and the `sap.ui.core.Configuration` class have been deprecated and replaced by focused, modular facades. The following key pattern applies:

-   **Before \(deprecated\):** Access via `sap.ui.getCore()` or `sap.ui.getCore().getConfiguration()`
-   **After \(current\):** Import dedicated modules via `sap.ui.require` / `sap.ui.define`



### Core Facade \(`sap.ui.core.Core`\)

The `sap.ui.core.Core` API facade has been deprecated as of SAPUI5 version 1.119. Most of its 52 methods have been replaced by standalone modules. For the complete list of all 52 deprecated Core methods and their replacements, see [Deprecated Core API](../04_Essentials/deprecated-core-api-798dd9a.md).



### Configuration API \(`sap.ui.core.Configuration`\)

The `sap.ui.core.Configuration` class and its `FormatSettings` have been deprecated as of SAPUI5 version 1.120. The 55 methods have been replaced by focused modules. For the complete mapping of all 55 methods, see [Deprecated Configuration API](../04_Essentials/deprecated-configuration-api-2acafbf.md).

For deprecated bootstrap configuration options \(e.g. `animation`, `binding-syntax`, `manifest-first`, `preload`\), see [Deprecated Configuration Options](../04_Essentials/deprecated-configuration-options-b474a71.md).



### Synchronous Factory Functions

All legacy synchronous global view-, fragment-, controller- and component-factory functions have been deprecated. The modern replacements are asynchronous and return Promises. For the complete list, see [Deprecated Factories Replacement](../04_Essentials/deprecated-factories-replacement-491bd9c.md).



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_JMM"/>

## `jQuery.sap` Module Migration

The `jQuery.sap.*` API namespace has been deprecated. All utilities have been moved to dedicated ES modules under `sap/base/*` and `sap/ui/*`. For the complete mapping of all ~110 deprecated jQuery APIs, see [Replacement of Deprecated jQuery APIs](../04_Essentials/replacement-of-deprecated-jquery-apis-a075ed8.md).



### jQuery Compatibility

Future SAPUI5 versions **will not support jQuery 2**. Only jQuery 3 and above will be supported.

Additionally, the SAPUI5-jQuery migration compatibility layer \(previously shipping as a customized `jquery-migrate` integration\) will be removed in future SAPUI5 versions. Any `JQMIGRATE` log warnings that appear at runtime are indicators of jQuery 2-to-3 incompatibilities that must now be resolved. For migration instructions, see the [official jQuery upgrade guide](https://jquery.com/upgrade-guide/3.0/).



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_DVT"/>

## Deprecated View Types and Patterns

As of SAPUI5 version 1.120, [XML View](../04_Essentials/xml-view-91f2928.md) and [Typed View](../04_Essentials/typed-view-e6bb33d.md) are the only recommended view types. All other view types and related patterns are deprecated. Refer to the table below for recommendations when to use which replacement view type.


<table>
<tr>
<th valign="top">

Deprecated Pattern

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

**JSON View** \(`sap.ui.core.mvc.JSONView`\)

</td>
<td valign="top">

1.120

</td>
<td valign="top">

[XML View](../04_Essentials/xml-view-91f2928.md)

</td>
<td valign="top">

[JSON View \(deprecated\)](../04_Essentials/json-view-deprecated-91f2852.md)

</td>
</tr>
<tr>
<td valign="top">

**JS View** \(`sap.ui.core.mvc.JSView`\)

</td>
<td valign="top">

1.90

</td>
<td valign="top">

[Typed View](../04_Essentials/typed-view-e6bb33d.md) via `View.extend()`

</td>
<td valign="top">

Define view class in JavaScript using `sap.ui.core.mvc.View.extend()`

</td>
</tr>
<tr>
<td valign="top">

**HTML View** \(`sap.ui.core.mvc.HTMLView`\)

</td>
<td valign="top">

1.108

</td>
<td valign="top">

[XML View](../04_Essentials/xml-view-91f2928.md)

</td>
<td valign="top">

No more known usages as HTML syntax brings no advantages over XML

</td>
</tr>
<tr>
<td valign="top">

**Declarative Support** \(`sap.ui.core.plugin.DeclarativeSupport`\)

</td>
<td valign="top">

1.120

</td>
<td valign="top">

[XML View](../04_Essentials/xml-view-91f2928.md)

</td>
<td valign="top">

[Declarative Support \(deprecated\)](../04_Essentials/declarative-support-deprecated-91f1301.md)

</td>
</tr>
<tr>
<td valign="top">

**Template View** \(`sap.ui.core.mvc.TemplateView`\)

</td>
<td valign="top">

1.56

</td>
<td valign="top">

[XML View](../04_Essentials/xml-view-91f2928.md) or [Typed View](../04_Essentials/typed-view-e6bb33d.md)

</td>
<td valign="top">

Include Handlebars template support

</td>
</tr>
<tr>
<td valign="top">

**View Cloning**

</td>
<td valign="top">

1.120

</td>
<td valign="top">

Call the view factory function again

</td>
<td valign="top">

[View Cloning \(deprecated\)](../04_Essentials/view-cloning-deprecated-a575619.md)

</td>
</tr>
<tr>
<td valign="top">

**Native HTML in XML Views**

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.ui.core.HTML` control or custom control

</td>
<td valign="top">

[Using Native HTML in XML Views \(deprecated\)](../04_Essentials/using-native-html-in-xml-views-deprecated-be54950.md)

</td>
</tr>
<tr>
<td valign="top">

**CSS in XML Views**

</td>
<td valign="top">

1.120

</td>
<td valign="top">

External CSS file

</td>
<td valign="top">

[Using CSS Style Sheets in XML Views \(deprecated\)](../04_Essentials/using-css-style-sheets-in-xml-views-deprecated-b564935.md)

</td>
</tr>
<tr>
<td valign="top">

**XML Composite Controls** \(`sap.ui.core.XMLComposite`\)

</td>
<td valign="top">

1.88

</td>
<td valign="top">

[Standard Composite Controls](../09_Developing_Controls/standard-composite-controls-c1512f6.md)

</td>
<td valign="top">

[XML Composite Controls (deprecated)](https://help.sap.com/viewer/c442e2a74263451f845549bdbcdebe7b/1.148_SAPUI5_Internal/en-US/b83a4dcb7d0e46969027345b8d32fd44.html "An XML composite control allows you to define a composite control that clearly separates the behavior of the control from the visual part.") :arrow_upper_right:

</td>
</tr>
</table>



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_DCL"/>

## Deprecated Controls by Library

This section lists high-impact control deprecations that must be replaced.



### Library: `sap.m`


<table>
<tr>
<th valign="top">

Deprecated Control

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
<th valign="top">

Migration Notes

</th>
</tr>
<tr>
<td valign="top">

`sap.m.UploadCollection`

</td>
<td valign="top">

1.88

</td>
<td valign="top">

`sap.m.plugins.UploadSetwithTable`

</td>
<td valign="top">

[Upload Collection \(deprecated\)](../10_More_About_Controls/upload-collection-deprecated-124ee13.md). The original replacement `sap.m.upload.UploadSet` is itself deprecated since 1.129; use `sap.m.plugins.UploadSetwithTable` directly.

</td>
</tr>
<tr>
<td valign="top">

`sap.m.TablePersoController`, `sap.m.TablePersoDialog`, `sap.m.TablePersoProvider`

</td>
<td valign="top">

1.115

</td>
<td valign="top">

`sap.m.p13n.Engine`, `sap.m.p13n.Popup`

</td>
<td valign="top">

[Table Personalization \(deprecated\)](../10_More_About_Controls/table-personalization-deprecated-1c60212.md)

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nDialog`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.Popup`

</td>
<td valign="top">

Part of the old P13n framework; the entire `sap.m.P13n*` class family is deprecated

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nColumnsPanel`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.SelectionPanel`

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nSortPanel`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.SortPanel`

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nGroupPanel`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.p13n.GroupPanel`

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.P13nFilterPanel`, `sap.m.P13nConditionPanel`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.m.p13n` artifacts

</td>
<td valign="top">

All remaining `sap.m.P13n*` items, helpers, and panels deprecated since 1.120-1.124 \(16+ P13n classes in total\)

</td>
</tr>
<tr>
<td valign="top">

`sap.m.MessagePage`

</td>
<td valign="top">

1.112

</td>
<td valign="top">

`sap.m.IllustratedMessage`

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.MultiEditField`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

No replacement

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.routing.RouteMatchedHandler`

</td>
<td valign="top">

1.28

</td>
<td valign="top">

`sap.m.routing.Router` or `sap.m.routing.Targets`

</td>
<td valign="top">

Functionality is built into the router itself

</td>
</tr>
<tr>
<td valign="top">

`sap.m.Tile`, `sap.m.StandardTile`, `sap.m.CustomTile`, `sap.m.TileContainer`

</td>
<td valign="top">

1.50

</td>
<td valign="top">

`sap.m.GenericTile`

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.ActionSelect`

</td>
<td valign="top">

1.111

</td>
<td valign="top">

No replacement \(concept discarded\)

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`sap.m.upload.UploadSet`, `UploadSetItem`, `UploadSetToolbarPlaceholder`, `Uploader`

</td>
<td valign="top">

1.129

</td>
<td valign="top">

`sap.m.plugins.UploadSetwithTable`, `sap.m.upload.UploadItem`, `sap.m.upload.ActionsPlaceholder`, `sap.m.upload.UploaderTableItem`

</td>
<td valign="top">

Intermediate replacement between `UploadCollection` \(1.88\) and `UploadSetwithTable`

</td>
</tr>
</table>



### Library: `sap.f`


<table>
<tr>
<th valign="top">

Deprecated Control

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.f.Avatar`

</td>
<td valign="top">

1.73

</td>
<td valign="top">

`sap.m.Avatar`

</td>
</tr>
<tr>
<td valign="top">

`sap.f.IllustratedMessage`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.IllustratedMessage`

</td>
</tr>
<tr>
<td valign="top">

`sap.f.Illustration`

</td>
<td valign="top">

1.98

</td>
<td valign="top">

`sap.m.Illustration`

</td>
</tr>
</table>



### Library: `sap.ui.table`


<table>
<tr>
<th valign="top">

Deprecated Control

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.table.ColumnMenu`

</td>
<td valign="top">

1.117

</td>
<td valign="top">

`sap.m.table.columnmenu.Menu`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.table.AnalyticalColumnMenu`

</td>
<td valign="top">

1.117

</td>
<td valign="top">

`sap.m.table.columnmenu.Menu`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.table.TablePersoController`

</td>
<td valign="top">

1.115

</td>
<td valign="top">

`sap.m.p13n.Engine`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.table.Table` row-mode properties \(`visibleRowCount`, `visibleRowCountMode`, `fixedRowCount`, `fixedBottomRowCount`, `minAutoRowCount`, `rowHeight`\) and enum `VisibleRowCountMode`

</td>
<td valign="top">

1.119

</td>
<td valign="top">

`rowMode` aggregation with `sap.ui.table.rowmodes.Auto`, `.Fixed`, `.Interactive`

</td>
</tr>
</table>



### Library: `sap.ui.unified`


<table>
<tr>
<th valign="top">

Deprecated Control

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.unified.Shell`, `ShellLayout`, `ShellOverlay`, `ShellHeadItem`, `ShellHeadUserItem`

</td>
<td valign="top">

1.44

</td>
<td valign="top">

No replacement \(concept discarded\). Use `sap.f.ShellBar` or `sap.tnt.ToolPage` for app shell patterns.

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.unified.ContentSwitcher`

</td>
<td valign="top">

1.44

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.unified.SplitContainer`

</td>
<td valign="top">

1.44

</td>
<td valign="top">

No replacement

</td>
</tr>
</table>



### Library: `sap.ui.layout`


<table>
<tr>
<th valign="top">

Deprecated Control

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.layout.form.GridLayout`, `GridContainerData`, `GridElementData`

</td>
<td valign="top">

1.67

</td>
<td valign="top">

`sap.ui.layout.form.ColumnLayout` or `sap.ui.layout.form.ResponsiveGridLayout`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.layout.form.ResponsiveLayout`

</td>
<td valign="top">

1.93

</td>
<td valign="top">

`sap.ui.layout.form.ColumnLayout` or `sap.ui.layout.form.ResponsiveGridLayout`

</td>
</tr>
</table>



### Library: `sap.ui.comp`


<table>
<tr>
<th valign="top">

Deprecated Control

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.comp.variants.VariantManagement`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.m.VariantManagement`

</td>
<td valign="top">

[How to replace sap.ui.comp.variants.VariantManagement](../10_More_About_Controls/how-to-replace-sap-ui-comp-variants-variantmanagement-0b64485.md)

</td>
</tr>
</table>



### Library: `sap.ui.mdc`


<table>
<tr>
<th valign="top">

Deprecated

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.enum.*` \(14 enums\)

</td>
<td valign="top">

1.115

</td>
<td valign="top">

`sap.ui.mdc.enums.*` \(renamed namespace\)

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.filterbar.vh.FilterBar`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.ui.mdc.valuehelp.FilterBar`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.filterbar.vh.CollectiveSearchSelect`

</td>
<td valign="top">

1.124

</td>
<td valign="top">

`sap.ui.mdc.valuehelp.CollectiveSearchSelect`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.filterbar.aligned.FilterContainer`

</td>
<td valign="top">

1.144

</td>
<td valign="top">

`sap.ui.mdc.filterbar.FilterContainer`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.flp.FlpLinkDelegate`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap/ui/mdc/ushell/LinkDelegate`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.link.SemanticObjectMapping`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.ui.mdc.ushell.SemanticObjectMapping`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.link.SemanticObjectMappingItem`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.ui.mdc.ushell.SemanticObjectMappingItem`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.mdc.link.SemanticObjectUnavailableAction`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.ui.mdc.ushell.SemanticObjectUnavailableAction`

</td>
</tr>
</table>



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_DCC"/>

## Deprecated Core Classes

The following `sap.ui.core` classes have been deprecated entirely:


<table>
<tr>
<th valign="top">

Deprecated Class

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.core.message.MessageManager`

</td>
<td valign="top">

1.118

</td>
<td valign="top">

`sap/ui/core/Messaging`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.Message`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap.ui.core.message.Message`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.search.SearchProvider`, `OpenSearchProvider`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.LocalBusyIndicator`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

No replacement. Superseded by `sap.ui.core.Control` native busy indication \(refer to `Control#setBusy`\).

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.ScrollBar`

</td>
<td valign="top">

1.56

</td>
<td valign="top">

No replacement

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.util.Export`, `ExportCell`, `ExportColumn`, `ExportRow`, `ExportType`, `ExportTypeCSV`

</td>
<td valign="top">

1.73

</td>
<td valign="top">

`sap.ui.export.Spreadsheet` \(SAPUI5 only\) or third-party export solutions

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.tmpl.Template`, `HandlebarsTemplate`, `DOMElement`, `DOMAttribute`, `TemplateControl`

</td>
<td valign="top">

1.56

</td>
<td valign="top">

XML View or Typed View. Refer to [Deprecated View Types and Patterns](../04_Essentials/deprecated-view-types-and-patterns-ea87c42.md).

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.format.DateFormatTimezoneDisplay`

</td>
<td valign="top">

1.101

</td>
<td valign="top">

`DateFormat.getDateTimeWithTimezoneInstance()` with `showDate`, `showTime`, `showTimezone` options

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.CalendarType`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap/base/i18n/date/CalendarType`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.date.CalendarWeekNumbering`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap/base/i18n/date/CalendarWeekNumbering`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core.MessageType`

</td>
<td valign="top">

1.120

</td>
<td valign="top">

`sap/ui/core/message/MessageType`

</td>
</tr>
</table>



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_OMM"/>

## OData and Model Migration


<table>
<tr>
<th valign="top">

Deprecated Pattern

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

OData V2 consumption with an OData V4 model

</td>
<td valign="top">

\-

</td>
<td valign="top">

Native OData V4 service

</td>
<td valign="top">

[Consuming OData V2 Services with the OData V4 Model \(deprecated\)](../04_Essentials/consuming-odata-v2-services-with-the-odata-v4-model-deprecated-365bdbd.md)

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.analytics.AnalyticalBinding`, `AnalyticalTreeBindingAdapter`, `ODataModelAdapter`, `odata4analytics`, `BatchResponseCollector` 

</td>
<td valign="top">

1.138

</td>
<td valign="top">

OData V4 data aggregation

</td>
<td valign="top">

See [Data Aggregation and Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md)

</td>
</tr>
<tr>
<td valign="top">

OData V1:

`sap.ui.model.odata.ODataModel`, `sap.ui.model.odata.ODataListBinding`, `sap.ui.model.odata.ODataContextBinding`, `sap.ui.model.odata.ODataTreeBinding`, `sap.ui.model.odata.ODataAnnotations`, `sap.ui.model.odata.Filter`

</td>
<td valign="top">

1.48

</td>
<td valign="top">

`sap.ui.model.odata.v2.ODataModel` or `sap.ui.model.odata.v4.ODataModel`

</td>
<td valign="top">

The OData V1 model has been deprecated. Migrate to V2 or V4 model.

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.odata.ODataTreeBindingAdapter`

</td>
<td valign="top">

1.138

</td>
<td valign="top">

OData V4 recursive hierarchy functionality

</td>
<td valign="top">

See [Data Aggregation and Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md)

</td>
</tr>
</table>



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_MCM"/>

## Manifest and Component Metadata Migration


<table>
<tr>
<th valign="top">

Topic

</th>
<th valign="top">

Description

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

Component metadata to manifest

</td>
<td valign="top">

Migrate legacy `Component.js` metadata properties \(version, config, dependencies, customizing, includes, rootView, routing\) to their `manifest.json` equivalents.

</td>
<td valign="top">

[Migrating from Component Metadata to Manifest](../04_Essentials/migrating-from-component-metadata-to-manifest-e282db2.md)

</td>
</tr>
<tr>
<td valign="top">

Manifest file upgrade

</td>
<td valign="top">

Upgrade `manifest.json` to the latest version format. Manifest V2.0.0 \(SAPUI5 1.136\) introduces breaking changes to the routing configuration: `viewName` → `name`, `viewId` → `id`, `viewPath` → `path`, `viewLevel` → `level`.

</td>
<td valign="top">

[Migration Information for Upgrading the Manifest File](../04_Essentials/migration-information-for-upgrading-the-manifest-file-a110f76.md)

</td>
</tr>
</table>



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_FEM"/>

## SAP Fiori Elements Migration


<table>
<tr>
<th valign="top">

Deprecated API

</th>
<th valign="top">

Deprecated as of

</th>
<th valign="top">

Replacement

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

`registerControllerExtensions` API

</td>
<td valign="top">

1.120

</td>
<td valign="top">

Manifest-based controller extension via `sap.ui.controllerExtensions`

</td>
<td valign="top">

[Migrating from registerControllerExtensions API](../06_SAP_Fiori_Elements/migrating-from-registercontrollerextensions-api-4120052.md)

</td>
</tr>
</table>



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_VSU"/>

## Version-Specific Upgrade Notes

The following guides cover breaking changes that require attention when upgrading across specific version boundaries:


<table>
<tr>
<th valign="top">

Version Boundary

</th>
<th valign="top">

Key Changes

</th>
<th valign="top">

Details

</th>
</tr>
<tr>
<td valign="top">

Below 1.38

</td>
<td valign="top">

jQuery upgrade from 1.x to 2.2.3, manifest descriptor introduction

</td>
<td valign="top">

[Upgrading from a Version Below 1.38](upgrading-from-a-version-below-1-38-c1025c2.md)

</td>
</tr>
<tr>
<td valign="top">

Below 1.40

</td>
<td valign="top">

Only one jQuery version bundled \(2.2.3\)

</td>
<td valign="top">

[Upgrading from a Version Below 1.40](upgrading-from-a-version-below-1-40-278a8e5.md)

</td>
</tr>
<tr>
<td valign="top">

Below 1.82

</td>
<td valign="top">

jQuery upgrade from 2.x to 3.5.1 with compatibility layer

</td>
<td valign="top">

[Upgrading from a Version Below 1.82](upgrading-from-a-version-below-1-82-147eef9.md)

</td>
</tr>
<tr>
<td valign="top">

Below 1.89

</td>
<td valign="top">

IE11 polyfill removal, jQuery upgrade to 3.6.0

</td>
<td valign="top">

[Upgrading from a Version Below 1.89](upgrading-from-a-version-below-1-89-89b14ce.md)

</td>
</tr>
</table>

For general upgrade guidance, see [Upgrading](upgrading-9638e4f.md).



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_APF"/>

## Analysis Path Framework \(APF\)

The entire Analysis Path Framework \(`sap.apf`\) has been deprecated as of SAPUI5 version 1.140. There is no direct SAPUI5 replacement. For analytical applications, consider SAP Analytics Cloud or the analytical capabilities of SAP Fiori elements. For more information, see [Developing Apps with Analysis Path Framework \(APF\) \(deprecated\)](../07_APF/developing-apps-with-analysis-path-framework-apf-deprecated-1c457c5.md).



<a name="loiodb492368adbe490fa5d4ec7ebd98b187__section_HWC"/>

## Hybrid Web Container

The hybrid web container approach for mobile applications has been deprecated as of SAPUI5 version 1.147. It relies on Apache Cordova/PhoneGap, which is no longer maintained. For more information, see [Development for Hybrid Web Containers \(deprecated\)](../05_Developing_Apps/development-for-hybrid-web-containers-deprecated-293eb94.md).

**Related Information**  


[API Reference: `deprecated`](https://ui5.sap.com/#/api/deprecated)

[Compatibility Rules](compatibility-rules-91f0873.md "The following sections describe what SAP can change in major, minor, and patch releases. Always consider these rules when developing apps, features, or controls with or for SAPUI5.")

[Don't Use Deprecated or Experimental Features](../03_Get-Started/don-t-use-deprecated-or-experimental-features-a8bd1a8.md "To keep your apps future proof and up to date with the latest improvements, you should only use artifacts (such as features, APIs, themes, etc.) that are still actively developed.")

[Upgrading](upgrading-9638e4f.md "The following sections describe what you have to consider when upgrading to a new version of SAPUI5.")

[Deprecated Themes and Libraries](deprecated-themes-and-libraries-a87ca84.md "As SAPUI5 evolves over time, some of the UI controls are replaced by others, or their concepts abandoned entirely. This chapter gives an overview of the most important deprecations at theme and library level. Individual control deprecations and more information about the controls replacing them can be found in the API reference within the Demo Kit.")

