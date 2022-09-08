<!-- loio9d87f925dfbb4e99b9e2963693aa00ef -->

# CSS Styling Issues

This section lists some of the most important rules relating to CSS styling in SAPUI5.

SAPUI5 controls are styled with CSS, and as applications can provide their own CSS, they can adapt the styling. However, the deeper such adaptations are, the more likely is it that they break with future SAPUI5 updates or with other libraries and apps getting involved. If you follow the rules listed below, you will reduce the risk of this happening.



<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__1"/>

## Don't override control class styling directly

SAPUI5 does not guarantee the stability of style class names across versions. If the naming of style classes is changed in future versions, styling rules will no longer be applied to targeted elements. In addition, overriding control class styles directly might lead to style clashes when applications are run in shared runtime environments \(like SAP Fiori launchpad\).

Add your own namespaced classes instead.

<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__table_ehh_rkk_jq"/>Examples


<table>
<tr>
<th valign="top">

Bad Example



</th>
<th valign="top">

Good Example



</th>
</tr>
<tr>
<td valign="top">

```

.sapMInputBaseError {
	font-weight: bold;
}
```



</td>
<td valign="top">

Add a custom CSS class to the control in those situations where you want additional styling:

 `oButton.addStyleClass("poaAppError");`

Then provide the style for this class:

```

.poaAppError {
	font-weight: bold;
}

```



</td>
</tr>
</table>



<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__2"/>

## Don't style DOM element names directly

Styling DOM elements directly will lead to unpredictable results, as SAPUI5 does not guarantee the stability of the inner-control DOM-tree over time. In addition, this might lead to styling clashes when applications run in shared runtime environments \(like SAP Fiori launchpad\) or when custom HTML is added. It is better to limit styling changes to specifically used CSS classes.

<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__table_mdl_qcq_jq"/>Examples


<table>
<tr>
<th valign="top">

Bad Example



</th>
<th valign="top">

Good Example



</th>
</tr>
<tr>
<td valign="top">

```html

div {
	width: 120px;
}
```



</td>
<td valign="top">

```

.myStyleClass {
	width: 120px;
}
```



</td>
</tr>
</table>



<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__3"/>

## Don't use generated IDs in CSS selectors

SAPUI5 applications can create dynamic IDs for elements. Do not use these IDs as selectors in custom CSS as they can change over time. It is better to add and use CSS classes instead.

<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__table_lzk_5dq_jq"/>Examples


<table>
<tr>
<th valign="top">

Bad Example



</th>
<th valign="top">

Good Example



</th>
</tr>
<tr>
<td valign="top">

```

#__view1__button0 {
	font-weight: bold;
}
```



</td>
<td valign="top">

Add a style class as described above and then define the following:

```

.myEmphasizedButton {
	font-weight: bold;
}
```



</td>
</tr>
</table>



<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__4"/>

## Don't create selectors that are not namespaced

Custom selectors and CSS classes that are not namespaced might lead to style clashes in shared runtime environments like SAP Fiori launchpad, or when other JavaScript libraries are included that might use the same CSS class names.

<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__table_j2n_l2q_jq"/>Examples


<table>
<tr>
<th valign="top">

Bad Example



</th>
<th valign="top">

Good Example



</th>
</tr>
<tr>
<td valign="top">

```

.title {
	font-weight: bold;
}
```



</td>
<td valign="top">

```

.poaAppTitle {
	font-weight: bold;
}
```



</td>
</tr>
</table>



<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__5"/>

## Don't use hard-coded colors, font sizes and images if the app should be themable

Themability of applications relies on LESS calculations within the SAPUI5 theme CSS. Hard-coding colors, fonts and images in applications and custom controls means that these colors are not modified by theming, which leads to design issues or accessibility issues \(for example, in the High Contrast Black \(HCB\) theme\). You can use special CSS classes instead that are supplied by these LESS calculations.

<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__table_twd_s2q_jq"/>Examples


<table>
<tr>
<th valign="top">

Bad Example



</th>
<th valign="top">

Good Example



</th>
</tr>
<tr>
<td valign="top">

```

.myCustomHTML {
	color: #FFF;
	background-color: blue;
}
```



</td>
<td valign="top">

Add the CSS classes `sapThemeTextInverted` and `sapThemeHighlight-asBackgroundColor` to your custom HTML element.



</td>
</tr>
</table>

See also: [CSS Classes for Theme Parameters](../04_Essentials/css-classes-for-theme-parameters-ea08f53.md).



<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__6"/>

## Don't use theming parameters for attributes they were not intended for

SAPUI5 applications come with a built-in set of parameters which are used for theme-dependent styling, mainly for colors. They are accessible using the `sap.ui.core.theming.Parameters.get()` API \(and for library builds using the OpenUI5 build mechanism, also in the \*.less files in control libraries\). These theme parameters have descriptive names, meaning that by looking at a parameter name, you can see the usage it has been defined for.

To ensure that you do not use combinations of theme colors which may clash after future theme changes, do not use background colors for fonts or vice versa, for example, and do not use border colors for anything else but borders.

<a name="loio9d87f925dfbb4e99b9e2963693aa00ef__table_qsf_kfq_jq"/>Examples


<table>
<tr>
<th valign="top">

Bad Example



</th>
<th valign="top">

Good Example



</th>
</tr>
<tr>
<td valign="top">

```js

var sColor = sap.ui.core.theming.Parameters.get("sapUiButtonBorderColor");
$(oSomeDomElement).css("background-color", sColor);
```



</td>
<td valign="top">

```js

var sColor = sap.ui.core.theming.Parameters.get("sapUiButtonBorderColor");
$(oSomeDomElement).css("border-color", sColor);
```



</td>
</tr>
</table>

See also: [Namespace sap.ui.core.theming.Parameters](https://ui5.sap.com/#/api/sap.ui.core.theming.Parameters).

