<!-- loio3b9f760da5b64adf8db7f95247879086 -->

# Types of Layout

Overview of the possible layouts for an `sap.f.FlexibleColumnLayout`, as defined in the `sap.f.LayoutType` enumeration.

Although the `FlexibleColumnLayout` can display 2 or 3 pages at one time, they can never have equal width \(50%/50% or 33%/33%/33%\). One of the pages is always larger \(expanded\) or even takes up the full width of the control \(fullscreen\). This is intentional because users should have a clear indication of what to focus their attention on at any given moment, for example, a list of items, one particular item, one item’s details.

Transitioning from a one-column layout to any two-column layout, and then to any three-column layout is seen by the user as new columns appearing/disappearing on desktop/tablet or the next column replacing the previous one - on phone \(small screen size\). The app does not need to provide separate logic for the different screen sizes, but only change the layout based on the user input and desired behavior. The `FlexibleColumnLayout` will internally manage column visibility and resizing. If at any time, the browser size changes, this will be reflected by the control automatically.

There are 9 allowed variations of width and visibility for the 3 columns. They are represented with the values of the `layout` property, which is of type `sap.f.LayoutType`.

The table below shows how each of the 9 layout types affects the column visibility and width, based on the control size:


<table>
<tr>
<th valign="top">

Layout Types

</th>
<th valign="top" align="center">

Desktop / Tablet / Phone

</th>
</tr>
<tr>
<td valign="top">

**`OneColumn`**

This is the default layout type for a `FlexibleColumnLayout`. Only the `Begin` column is displayed, no matter the control size.

Use to show the first logical information level \(master page\) only.

</td>
<td valign="top">

![](images/1_OneColumn_d791491.png)

</td>
</tr>
<tr>
<td valign="top">

**`TwoColumnsBeginExpanded`**

Use this layout type to display two logical levels of information \(master and detail pages, master being expanded\) on desktop/tablet, or the second logical level of information only \(detail page\) on phone. On desktop/tablet the transition from `OneColumn` to `TwoColumnsBeginExpanded` is seen by the user as the `Begin` column shrinking and `Mid` column opening, while on phone it's seen as the `Mid` column replacing the `Begin` column.

</td>
<td valign="top">

![](images/2_TwoColumnsBeginExpanded_9a60387.png)

</td>
</tr>
<tr>
<td valign="top">

**`TwoColumnsMidExpanded`**

Similar to `TwoColumnsBeginExpanded`, but this time the `Mid` column is the wider one.

</td>
<td valign="top">

![](images/3_TwoColumnsMidExpanded_c0d6936.png)

</td>
</tr>
<tr>
<td valign="top">

**`MidColumnFullScreen`**

Use this layout to display the second logical level of information \(detail page\) only. The `Mid` column takes up the whole available control width for all control sizes.

> ### Note:  
> On small screen sizes, the layouts `TwoColumnsBeginExpanded`, `TwoColumnsMidExpanded` and `MidColumnFullScreen` all lead to the same result for the user – the `Mid` column taking up the whole control width. However, if the user resizes the browser and makes space, the control will automatically apply the rules of the current layout for the new width.



</td>
<td valign="top">

![](images/4_MidColumnFullScreen_a01d72d.png)

</td>
</tr>
<tr>
<td valign="top">

**`ThreeColumnsMidExpanded`**

Use this layout to display up to three logical levels of information side by side \(master, detail, and detail-detail pages\), when the user should focus primarily on the content of the `Mid` column \(as it is wider than the other two\). On desktop, all three columns will be displayed, on tablet – the `Mid` and `End` columns only \(with a layout arrow to access the `Begin` column\), and on phone – the `End` column only.

</td>
<td valign="top">

![](images/5_ThreeColumnsMidExpanded_d1f89e8.png)

</td>
</tr>
<tr>
<td valign="top">

**`ThreeColumnsEndExpanded`**

Similar to `ThreeColumnsMidExpanded`, but this time the `End` column is expanded, and this is where the user is supposed to focus their attention.

</td>
<td valign="top">

![](images/6_ThreeColumnsEndExpanded_2cef71c.png)

</td>
</tr>
<tr>
<td valign="top">

**`ThreeColumnsMidExpandedEndHidden`**

Use this layout to show the `Begin` and `Mid` columns only \(`Mid` being expanded\), while the `End` column is hidden but accessible with a layout arrow. The difference between this layout and the `TwoColumnsMidExpanded` layout is that for `TwoColumnsMidExpanded` the user cannot access the `End` column at all, as only two logical levels of information are offered \(the third may not be loaded yet\), while for `ThreeColumnsMidExpandedEndHidden` the `End` column is not empty, but just not currently displayed. Its content is loaded and easily accessible \(most commonly already seen by the user, and now hidden so more space can be freed for the other columns\).

</td>
<td valign="top">

![](images/7_ThreeColumnsMidExpandedEndHidden_21a31d2.png)

</td>
</tr>
<tr>
<td valign="top">

**`ThreeColumnsBeginExpandedEndHidden`**

Similar to `ThreeColumnsMidExpandedEndHidden`, but this time the `Begin` column is expanded. A layout arrow is provided to shrink the `Begin` column, thus transitioning the layout to `ThreeColumnsMidExpandedEndHidden`.

</td>
<td valign="top">

![](images/8_ThreeColumnsBeginExpandedEndHidden_e98b27b.png)

</td>
</tr>
<tr>
<td valign="top">

**`EndColumnFullScreen`**

Use this layout to display the third logical level of information \(detail-detail page\) only. The `End` column takes up the whole available control width for all screen sizes.

> ### Note:  
> On small screen sizes all three-column layouts and `EndColumnFullScreen` lead to the same result for the user – the `End` column taking up the whole control width. However, if the user resizes the browser and makes space, the control will automatically apply the rules of the current layout for the new width.



</td>
<td valign="top">

![](images/9_EndColumnFullScreen_1129d11.png)

</td>
</tr>
</table>

For each value of the layout property, the `FlexibleColumnLayout` displays a different combination of columns, based on the available control width \(or screen width, if the control takes up the whole screen\).


<table>
<tr>
<th valign="top">

Control size

</th>
<th valign="top">

Columns

</th>
</tr>
<tr>
<td valign="top">

Up to 960px \(Phone\)

</td>
<td valign="top">

1 column max

</td>
</tr>
<tr>
<td valign="top">

960px – 1280px \(Tablet\)

</td>
<td valign="top">

2 column max

</td>
</tr>
<tr>
<td valign="top">

1280px and above \(Desktop\)

</td>
<td valign="top">

3 column max

</td>
</tr>
</table>

**Related Information**  


[API Reference: `sap.f.LayoutType`](https://ui5.sap.com/#/api/sap.f.LayoutType)

