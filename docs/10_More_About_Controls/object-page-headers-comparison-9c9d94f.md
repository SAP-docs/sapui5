<!-- loio9c9d94fd28284539a9a5a57e9caf82a8 -->

# Object Page Headers Comparison

This section explains the differences and similarities between the two types of header of the `sap.uxap.ObjectPageLayout` control.

**Summary of the controls used in the classic and the dynamic header**


<table>
<tr>
<th valign="top">

Header Area

</th>
<th valign="top">

Classic Header

</th>
<th valign="top">

Dynamic Header

</th>
</tr>
<tr>
<td valign="top">

Title

</td>
<td valign="top">

`sap.uxap.ObjectPageHeader` 

</td>
<td valign="top">

`sap.uxap.ObjectPageDynamicHeaderTitle` 

</td>
</tr>
<tr>
<td valign="top">

Content \(controls are used internally\)

</td>
<td valign="top">

`sap.uxap.ObjectPageHeaderContent` 

</td>
<td valign="top">

`sap.uxap.ObjectPageDynamicHeaderContent` 

</td>
</tr>
</table>



<a name="loio9c9d94fd28284539a9a5a57e9caf82a8__section_szt_d3l_sbb"/>

## Differences between the classic and the dynamic header

The classic header title is largely semantic, meaning that it has properties, such as `objectTitle`, `objectSubtitle` and `objectImageURI`. It has a very specific layout based on these properties.

On the contrary, the dynamic header title is general-purpose. It doesn’t have any properties describing the represented object, but rather several aggregations, such as `heading` and `content`, which the app can use to display any information and build any layout. This requires more work by the app developer, but also more flexibility. The new header uses internally `sap.m.OverflowToolbar` for the implementation of the `actions` aggregation, which allows actions to have priority, grouping, and other `sap.m.OverflowToolbar` features.

The main difference between the classic and dynamic header content is that the dynamic header has the Pin functionality, allowing the user to prevent it from scrolling out of view.

> ### Note:  
> The controls, comprising the dynamic header title and header content, extend the `sap.f.DynamicPage` title and header controls. They are adapted for the `ObjectPageLayout` use case, but essentially they provide the same functionality.

**Relation between the sap.uxap.ObjectPageLayout dynamic header controls and the sap.f.DynamicPage controls:**


<table>
<tr>
<th valign="top">

Layout Control

</th>
<th valign="top">

Header Title

</th>
<th valign="top">

Header Content

</th>
</tr>
<tr>
<td valign="top">

`sap.uxap.ObjectPageLayout` 

</td>
<td valign="top">

`sap.uxap.ObjectPageDynamicHeaderTitle` 

</td>
<td valign="top">

`sap.uxap.ObjectPageDynamicHeaderContent` 

</td>
</tr>
<tr>
<td valign="top">

`sap.f.DynamicPage` 

</td>
<td valign="top">

`sap.f.DynamicPageTitle` 

</td>
<td valign="top">

`sap.f.DynamicPageHeader` 

</td>
</tr>
</table>



<a name="loio9c9d94fd28284539a9a5a57e9caf82a8__section_urf_2ll_sbb"/>

## Similarities between the classic and the dynamic header

Both header title controls have the `actions` aggregation, intended for buttons that perform actions on the represented object.

Both header content controls have the `content` aggregation.



<a name="loio9c9d94fd28284539a9a5a57e9caf82a8__section_msr_jll_sbb"/>

## Features exclusive to the classic or the dynamic header

Some `ObjectPageLayout` features associated with the behavior of the classic header are considered legacy \(although technically not deprecated\), and have more robust counterparts for the dynamic header.

Similarly, the dynamic header comes with a set of features \(apart from its general structure\) that are exclusive to itself, and are not taken into account in the use case of the classic header.

**Overview of features exclusive to the classic header \(all being ObjectPageLayout properties with the exception of the sap.uxap.ObjectPageHeaderLayoutData class\):**


<table>
<tr>
<th valign="top">

Features Exclusive to the Classic Header

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`showTitleInHeaderContent` 

</td>
<td valign="top">

Determines whether the title, image, markers and `selectTitleArrow` are displayed in the Header Content area.

</td>
</tr>
<tr>
<td valign="top">

`isChildPage` 

</td>
<td valign="top">

Determines whether the page is a child page and renders it with a different design. Child pages have an additional \(darker/lighter\) stripe on the left side of their header content area.

</td>
</tr>
<tr>
<td valign="top">

`alwaysShowContentHeader` 

</td>
<td valign="top">

Determines whether Header Content will always be expanded on desktop.

</td>
</tr>
<tr>
<td valign="top">

`showEditHeaderButton` 

</td>
<td valign="top">

Determines whether an *Edit* button will be displayed in the Header Content.

</td>
</tr>
<tr>
<td valign="top">

`sap.uxap.ObjectPageHeaderLayoutData` 

</td>
<td valign="top">

The `sap.uxap.ObjectPageHeaderLayoutData` can only be set on `headerContent` items for the classic header use case.

</td>
</tr>
</table>

**Overview of features exclusive to the dynamic header \(all being ObjectPageLayout properties\):**


<table>
<tr>
<th valign="top">

Features Exclusive to the Dynamic Header

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`headerContentPinnable` 

</td>
<td valign="top">

Determines whether the Header Content area can be pinned.

When set to true, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.

</td>
</tr>
<tr>
<td valign="top">

`toggleHeaderOnTitleClick` 

</td>
<td valign="top">

Determines whether the user can switch between the expanded/collapsed states of the dynamic header by clicking/tapping on the Header Title. If set to `false`, the Header Title is not clickable and the app must provide other means for expanding/collapsing the dynamic header, if necessary.

</td>
</tr>
<tr>
<td valign="top">

`preserveHeaderStateOnScroll` 

</td>
<td valign="top">

Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.

</td>
</tr>
<tr>
<td valign="top">

`toggleHeaderOnTitleClick` 

</td>
<td valign="top">

When the feature is enabled, arrow buttons below the Header Content appear, the Header Title and the arrow buttons can be clicked/tapped for collapsing/expanding the header and there is additional visual indication while hovering over the Header Title area or the arrow buttons.

</td>
</tr>
</table>

If a legacy property, for example `showTitleInHeaderContent` is set, but an instance of `sap.uxap.ObjectPageDynamicHeaderTitle` is used for the `headerTitle` aggregation \(which will be paired internally with an instance of `sap.uxap.ObjectPageDynamicHeaderContent` for the header content\), this property will be ignored.

Similarly, if `toggleHeaderOnTitleClick` is set, but the classic title is used \(`sap.uxap.ObjectPageHeader` passed as the value of the `headerTitle` aggregation\), the property will be ignored as this feature is not supported by the classic header title/header content pair.



<a name="loio9c9d94fd28284539a9a5a57e9caf82a8__section_q1f_rpl_sbb"/>

## Which header should I use in my app?

The dynamic header is recommended as it supports advanced features, such as pinning and collapse/expand visual indication.

Here is a sample usage of the dynamic header - the value of the `headerTitle` aggregation in an XML view:

```
<headerTitle>
	<ObjectPageDynamicHeaderTitle primaryArea="Left">
		<breadcrumbs>
			<m:Breadcrumbs currentLocationText="My Profile">
				<m:Link text='My Company' />
				<m:Link text='My Department' />
				<m:Link text='Employees' />
			</m:Breadcrumbs>
		</breadcrumbs>

		<expandedHeading>
			<m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Center">
				<m:Title text="Denise Smith" wrapping="true" class="sapUiTinyMarginEnd"/>
				<m:FlexBox wrap="NoWrap" fitContainer="true" alignItems="Center" class="sapUiTinyMarginEnd">
					<m:ObjectMarker type="Favorite" class="sapUiTinyMarginEnd"/>
					<m:ObjectMarker type="Flagged"/>
					<m:Button icon="sap-icon://private" type="Transparent"/>
					<m:Button icon="sap-icon://arrow-down" type="Transparent"/>
				</m:FlexBox>
			</m:FlexBox>
		</expandedHeading>

		<snappedHeading>
			<m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Center">
				<m:FlexBox wrap="NoWrap" fitContainer="true" alignItems="Center" class="sapUiTinyMarginEnd">
					<f:Avatar src="../../sap/f/images/Woman_avatar_02.png" displaySize="S" class="sapUiTinyMarginEnd"/>
					<m:Title text="Denise Smith" wrapping="true" class="sapUiTinyMarginEnd"/>
				</m:FlexBox>
				<m:FlexBox wrap="NoWrap" fitContainer="true" alignItems="Center" class="sapUiTinyMarginEnd">
					<m:ObjectMarker type="Favorite" class="sapUiTinyMarginEnd"/>
					<m:ObjectMarker type="Flagged"/>
					<m:Button icon="sap-icon://private" type="Transparent"/>
					<m:Button icon="sap-icon://arrow-down" type="Transparent"/>
				</m:FlexBox>
			</m:FlexBox>
		</snappedHeading>

		<expandedContent>
			<m:Text text="Senior Developer" />
		</expandedContent>

		<snappedContent>
		   <m:Text text="Senior Developer" />
		</snappedContent>

		<content>
			<m:OverflowToolbar>
				<m:Button text="KPI 1" class="sapUiTinyMargin"/>
				<m:Button text="KPI 2" class="sapUiTinyMargin"/>
				<m:Button text="KPI 3" class="sapUiTinyMargin"/>
				<m:Button text="KPI 4" class="sapUiTinyMargin"/>
				<m:Button text="KPI 5" class="sapUiTinyMargin"/>
				<m:Button text="KPI 6" class="sapUiTinyMargin"/>
			</m:OverflowToolbar>
		</content>

		<actions>
			<m:OverflowToolbarButton type="Transparent" icon="sap-icon://copy"/>
			<m:OverflowToolbarButton type="Transparent" icon="sap-icon://delete"/>
			<m:OverflowToolbarButton type="Transparent" icon="sap-icon://add"/>
			<m:OverflowToolbarButton type="Transparent" icon="sap-icon://paste"/>
		</actions>

		<navigationActions>
			<m:OverflowToolbarButton type="Transparent" icon="sap-icon://full-screen" tooltip="Enter Full Screen Mode"/>
			<m:OverflowToolbarButton type="Transparent" icon="sap-icon://decline" tooltip="Close column"/>
		</navigationActions>

	</ObjectPageDynamicHeaderTitle>
</headerTitle>

```

> ### Tip:  
> When `sap.uxap.ObjectPageLayout` is given the `sap.uxap.ObjectPageDynamicHeaderTitle`, it loads the `sap.f` library on demand as a lazy dependency. To speed up your app, you should preload the `sap.f` library directly in the SAPUI5 bootstrap along with the other libraries needed for your app.
> 
> Example:
> 
> ```
> data-sap-ui-libs="sap.m,sap.uxap,sap.ui.layout,sap.f"
> ```
> 
> This way, the `ObjectPageLayout` will already have `sap.f` loaded and it will not need to fetch it.

**Related Information**  


[API Reference: `sap.uxap.ObjectPageHeader`](https://ui5.sap.com/#/api/sap.uxap.sap.uxap.ObjectPageHeader)

[API Reference: `sap.uxap.ObjectPageDynamicHeaderTitle`](https://ui5.sap.com/#/api/sap.uxap.ObjectPageDynamicHeaderTitle)

[API Reference: `sap.f.DynamicPageTitle`](https://ui5.sap.com/#/api/sap.f.DynamicPageTitle)

[API Reference: `sap.f.DynamicPageHeader`](https://ui5.sap.com/#/api/sap.f.DynamicPageHeader)

