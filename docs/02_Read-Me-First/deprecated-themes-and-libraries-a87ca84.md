<!-- loioa87ca843bcee469f82a9072927a7dcdb -->

# Deprecated Themes and Libraries

As SAPUI5 evolves over time, some of the UI controls are replaced by others, or their concepts abandoned entirely. This chapter gives an overview of the most important deprecations at theme and library level. Individual control deprecations and more information about the controls replacing them can be found in the API reference within the Demo Kit.



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

**Related Information**  


[Index of Deprecated APIs](https://ui5.sap.com/#/api/deprecated)

[Supported Library Combinations](supported-library-combinations-363cd16.md "SAPUI5 provides a set of JavaScript and CSS libraries, which can be combined in an application using the combinations that are supported.")

[Supported Themes](supported-themes-38ff8c2.md "This chapter gives an overview of the supported themes.")

[Available Themes](../04_Essentials/available-themes-da0d2e7.md "Provides a list of themes and their names.")

