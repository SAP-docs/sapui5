<!-- loio74b59efa0eef48988d3b716bd0ecc933 -->

# Browser and Platform Support

Browser and platform support for the SAPUI5 libraries on iOS, Android, macOS, and Windows platforms.

> ### Note:  
> The single source of truth about supported browsers and platforms is the Product Availability Matrix \(PAM\) that you can find at [https://support.sap.com/pam](https://support.sap.com/pam). SAPUI5 is not a product of its own, so please check the PAM for the product you're using SAPUI5 with. For more information, see SAP Note [1716423](https://launchpad.support.sap.com/#/notes/1716423).
> 
> The following sections only contain additional information on restrictions and platform support information for specific SAPUI5 libraries in a summarized form.

As SAPUI5 is based on CSS3, HTML5, and the ECMAScript 5 \(ES5\) JavaScript API, only browsers with HTML5 capabilities are supported. In general, only major versions that are also supported by the respective platform can be supported by the SAPUI5 framework.

> ### Restriction:  
> We currently do not guarantee that ECMAScript standards ES6/ES2015 or newer, work with SAPUI5.

Depending on the platform your SAPUI5 apps run on, different browsers in different versions are supported. If you know which platform and which browsers are used by your users, you can decide on which libraries to use for your app.



## Overview of Supported Browsers, Platforms, and Reference Devices

The following tables give a general overview of the browsers, platforms, and reference devices supported by the main SAPUI5 libraries. There are certain known device-browser combinations that lead to visual degradations. For more information, see [Visual Degradations](visual-degradations-f08f296.md).



<a name="loio74b59efa0eef48988d3b716bd0ecc933__section_bgw_kns_hnb"/>

## Browser and Platform Support Matrix


<table>
<tr>
<th valign="top" align="center">

Platform



</th>
<th valign="top" align="center">

Device Category



</th>
<th valign="top" align="center">

Platform Version



</th>
<th valign="top" align="center">

Safari



</th>
<th valign="top" align="center">

Web View



</th>
<th valign="top" align="center">

Microsoft Edge \(Chromium\)<sup>2</sup>



</th>
<th valign="top" align="center">

Google Chrome



</th>
<th valign="top" align="center">

Mozilla Firefox



</th>
<th valign="top" align="center">

SAP Fiori Client



</th>
</tr>
<tr>
<td valign="top" rowspan="3">

Windows<sup>1</sup>



</td>
<td valign="top" rowspan="2">

Desktop



</td>
<td valign="top">

Windows 8.1



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" rowspan="2">

Latest version



</td>
<td valign="top" rowspan="2">

Latest version



</td>
<td valign="top" rowspan="3">

Latest version and latest Extended Support Release \(ESR\)<sup>7</sup>



</td>
<td valign="top" align="center">

\-



</td>
</tr>
<tr>
<td valign="top">

Windows 10

Windows 11



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top">

Latest version



</td>
<td valign="top" align="center">

\-



</td>
</tr>
<tr>
<td valign="top">

Touch<sup>5, 6</sup>



</td>
<td valign="top">

Windows 10

Windows 11



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top">

Latest version



</td>
<td valign="top">

Latest version<sup>7</sup>



</td>
<td valign="top">

Latest version<sup>7</sup>



</td>
<td valign="top">

Latest version



</td>
</tr>
<tr>
<td valign="top">

macOS



</td>
<td valign="top">

Desktop



</td>
<td valign="top">

Latest 2 versions



</td>
<td valign="top">

Latest 2 versions



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top">

Latest version<sup>5</sup>



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
</tr>
<tr>
<td valign="top">

iOS & iPadOS<sup>3</sup>



</td>
<td valign="top">

Phone and Tablet<sup>5, 6</sup>



</td>
<td valign="top">

Latest 2 versions



</td>
<td valign="top">

Latest 2 versions



</td>
<td valign="top">

Latest version<sup>7</sup>



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top">

Latest version



</td>
</tr>
<tr>
<td valign="top">

Android<sup>4</sup>



</td>
<td valign="top">

Phone and Tablet<sup>5, 6</sup>



</td>
<td valign="top">

Latest 3 versions supported by Google



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top">

Latest version



</td>
<td valign="top" align="center">

\-



</td>
<td valign="top">

Latest version



</td>
</tr>
</table>

1\) The specified browsers are also supported in virtual environments, such as Citrix and VMware. Any issues found must be reproducible in a non-virtualized environment.  
 2\) SAPUI5 detects Microsoft Edge \(Chromium\) as Google Chrome and treats it the same.  
 3\) We use current Apple iPhone and iPad devices for testing and reproducing the reported issues.  
 4\) Android-based devices are very fragmented in matters of operating system variants and hardware diversity. We use current Samsung Galaxy S and Galaxy Tab S series devices for testing and reproducing the reported issues.  
 5\) Not supported for `sap.ui.commons` and `sap.ui.ux3`.  
 6\) Not supported for `sap.gantt`. Note that gantt charts consuming `sap.gantt` can be displayed on tablet devices.  
 7\) Not supported for `sap.ui.vbm`.



<a name="loio74b59efa0eef48988d3b716bd0ecc933__MS_IE"/>

## SAPUI5 Support Status for Microsoft Internet Explorer 11

Support for Microsoft Internet Explorer 11 \(IE11\) ended after SAPUI5 1.87. The last long-term maintenance version of SAPUI5 that supports IE11 is SAPUI5 1.84. Versions up to and including SAPUI5 1.87 will continue to support IE11 as long as they are in maintenance \(see [https://ui5.sap.com/versionoverview.html](https://ui5.sap.com/versionoverview.html)\).

> ### Note:  
> Products based on SAPUI5 have their own browser support strategy and may have dropped support for IE11 even though the underlying maintenance version of SAPUI5 still supports it. Keep this in mind when you decide to use a certain product version. For more information, check the [Product Availability Matrix \(PAM\)](https://support.sap.com/pam) for the product.

Legacy web applications using active browser plugins that require IE11 cannot run embedded inside an SAP Fiori launchpad that depends on an SAPUI5 version released after support ended. The same goes for integrating SAPUI5 applications into SAP GUI for Windows through the SAP HTML control: Your SAP GUI for Windows version needs to be higher than 7.60 for you to be able to configure a browser engine other than the Microsoft Internet Explorer Control, see SAP Note [2913405](https://launchpad.support.sap.com/#/notes/2913405).

In case you have legacy applications and you still need IE11 with an SAPUI5 version that no longer supports it, we recommend that you either use a dual browser strategy \(for example, your users use another supported browser in addition to IE11\) or you switch to Microsoft Edge \(Chromium\), which has an integrated Internet Explorer runtime mode.

-   **[Visual Degradations](visual-degradations-f08f296.md "Depending on the combination of device and browser, visual degradations may occur in
		certain libraries.")**  
Depending on the combination of device and browser, visual degradations may occur in certain libraries.
-   **[Keyboard Shortcuts for SAPUI5 Tools](keyboard-shortcuts-for-sapui5-tools-154844c.md "SAPUI5 provides tools for information, diagnostics and testing purposes that
		are accessible via keyboard shortcuts.")**  
SAPUI5 provides tools for information, diagnostics and testing purposes that are accessible via keyboard shortcuts.

