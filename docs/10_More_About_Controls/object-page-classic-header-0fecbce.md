<!-- loio0fecbce45e39406aa939bd25e89823f4 -->

# Object Page Classic Header

Overview of the structure and features for `sap.uxap.ObjectPageLayout`'s classic header.



## Main Structure

The `ObjectPageHeader` control consists of two main parts - Header Title and Header Content.

![](images/ObjectPageHeader_Structure_e846820.png)

1.  Header Title \(`headerTitle`\) - Displayed at the top of the header and always remains visible above the scrollable content of the page. It contains the title and most prominent details of the object.

2.  The Header Content \(`headerContent`\) - Scrolls along with the content of the page until it disappears \(collapsed header\). When scrolled back to the top it becomes visible again \(expanded header\). It contains all the additional information of the object.


  
  
**Collapsing and Expanding the Header**

![](images/Collapsing_and_expanding_the_header_animation_4e08106.gif "Collapsing and Expanding the Header")



## Header Title

This part of the header contains the basic information of the object.

  
  
**Navigation bar, Breadcrumbs and Actions in the Header Title**

![](images/ObejctPageHeaderTitle_-_NavigationBar_Breadcrumbs_and_Actions_b245922.png "Navigation bar, Breadcrumbs and Actions in the Header Title")

The top area in the Header Title is for the navigation bar \(`navigationBar`\). It contains the top-most element \(`sap.m.Bar`\) and provides the option to have a *Back* button for returning to the previous selection and navigation actions on the opposite side.

The area below the navigation bar is reserved for breadcrumbs navigation on one side \(`breadcrumbs`\) and actions on the other \(`actions`\). The actions are declared as `sap.uxap.ObjectPageHeaderActionButton` instances.

  
  
**Title with Optional Indicators and Subtitle**

![](images/HeaderTitle_Title_Subtitle_Indicators_553c7d7.png "Title with Optional Indicators and Subtitle")

You can set title \(`objectTitle`\) and subtitle \(`objectSubtitle`\). On larger screens the subtitle is displayed next to the title. After a certain breakpoint, the subtitle moves below the title.

You can display several optional indicators right after the title. They are considered part of the title and when there is not enough space they are wrapped and moved to more lines along with the title text.

**Optional indicators in the title**


<table>
<tr>
<th valign="top">

Optional Indicator



</th>
<th valign="top">

API Properties



</th>
</tr>
<tr>
<td valign="top">

![](images/Favorite_icon_7813cf4.png)*Favorite* 



</td>
<td valign="top">

`markFavorite` 



</td>
</tr>
<tr>
<td valign="top">

![](images/Flagged_icon_4c5abbf.png)*Flagged* 



</td>
<td valign="top">

`markFlagged` 



</td>
</tr>
<tr>
<td valign="top">

![](images/Locked_icon_52d023e.png)*Locked* 



</td>
<td valign="top">

`markLocked` 



</td>
</tr>
<tr>
<td valign="top">

![](images/Unsaved_changes_icon_f89451a.png)*Unsaved changes* 



</td>
<td valign="top">

`markChanges` 



</td>
</tr>
<tr>
<td valign="top">

![](images/Title_selector_icon_d7144c2.png)*Selector* 



</td>
<td valign="top">

`showTitleSelector` 



</td>
</tr>
</table>

> ### Note:  
> Keep in mind that *Locked* and *Unsaved changes* are mutually exclusive. If both of them are set to be visible, only the *Locked* state is displayed.

You can show and hide both the markers \(*Favorite* and *Flagged*\) simultaneously with the `showMarkers` boolean property.

  
  
**Object Image in Circle and Square Shapes**

![](images/objectImageShape_-_Circle_and_Square_df92915.gif "Object Image in Circle and Square Shapes")

You can add an icon-sized image before the title by defining the image location in the `objectImageURI` property. You can set the text used for the `Alt` and `Tooltip` attributes of the image with the `objectImageAlt` property. To set the shape to `Circle` or `Square`, use the `objectImageShape` property.

You can control whether the image, title, subtitle, and actions are always visible or visible only when the header is collapsed \(snapped\).

> ### Tip:  
> To build a custom `headerTitle`, you can extend the `ObjectPageHeader` class and then use any control in the `headerTitle` aggregation. The `ObjectPageLayout`, however, needs correct values for the `objectImageURI` / `objectImageShape` and `headerDesign`, as those properties are important for the `headerContent` in order to style it properly.



## Header Content

The second part of the header is the Header Content. This is an aggregation of controls that are displayed in a float layout underneath the Header Title. The controls that can be used in the `headerContent` aggregation are the standard SAPUI5 controls and they are automatically styled to fit the current header style.

With the use of the `sap.uxap.ObjectPageHeaderLayoutData` class, you can specify for each control used in the `headerContent` aggregation, whether it's visible on small, medium or large-sized layouts, what width it takes and whether it has a visual separator displayed before and/or after itself.

  
  
**Header Content with sap.uxap.ObjectPageHeaderLayoutData - large, middle and small-sized layout**

![](images/Header_Content_ObjectPageHeaderLayoutData_40e357c.gif "Header Content with sap.uxap.ObjectPageHeaderLayoutData -
					large, middle and small-sized layout")

**Related Information**  


[API Reference: `sap.uxap.ObjectPageHeader`](https://ui5.sap.com/#/api/sap.uxap.ObjectPageHeader)

[API Reference: `sap.uxap.ObjectPageHeaderLayoutData`](https://ui5.sap.com/#/api/sap.uxap.ObjectPageHeaderLayoutData)

[API Reference: `sap.uxap.ObjectPageLayout`](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLayout)

[Object Page Headers](object-page-headers-d2ef009.md "The sap.uxap.ObjectPageLayout control has two types of header - classic header and dynamic header.")

[Object Page Headers Comparison](object-page-headers-comparison-9c9d94f.md "This section explains the differences and similarities between the two types of header of the sap.uxap.ObjectPageLayout control.")

