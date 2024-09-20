<!-- loio74b59efa0eef48988d3b716bd0ecc933 -->

# Browser and Platform Support

Here you can find information on the browser and platform support for the SAPUI5 libraries on iOS, Android, macOS, and Windows platforms.

> ### Note:  
> The single source of truth about supported browsers and platforms is the Product Availability Matrix \(PAM\) that you can find at [https://support.sap.com/pam](https://support.sap.com/pam). SAPUI5 is not a product of its own, so please check the PAM for the product you're using SAPUI5 with. For more information, see SAP Note [1716423](https://me.sap.com/notes/1716423).
> 
> The following sections only contain additional information on restrictions and platform support information for specific SAPUI5 libraries in a summarized form.

As SAPUI5 is based on CSS3, HTML5, and modern ECMAScript \("ES2023"\), only browsers with corresponding capabilities are supported. In general, only major versions that are also supported by the respective platform can be supported by the SAPUI5 framework.

> ### Restriction:  
> With SAPUI5 1.116, the framework leverages features of modern ECMAScript up to and including [ECMAScript 2022 Language Specification](https://262.ecma-international.org/13.0/). Certain restrictions do apply, however. For more information, see [ECMAScript Support](ecmascript-support-0cb44d7.md).

Depending on the platform your SAPUI5 apps run on, different browsers in different versions are supported. If you know which platform and which browsers are used by your users, you can decide on which libraries to use for your app.



## Overview of Supported Browsers, Platforms, and Reference Devices

The following tables give a general overview of the browsers, platforms, and reference devices supported by the main SAPUI5 libraries. There are certain known device-browser combinations that lead to visual degradations. For more information, see [Visual Degradations](visual-degradations-f08f296.md).

> ### Note:  
> Browsers are constantly evolving across various devices. Browser upgrades may introduce changes that are not backward compatible and can affect the behavior of SAPUI5. SAP has no control over these upgrades and doesn’t provide any warranty regarding the features or qualities of these browsers.



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
<td valign="top" rowspan="2">

Windows<sup>1</sup>

</td>
<td valign="top">

Desktop

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

Latest version

</td>
<td valign="top">

Latest version

</td>
<td valign="top" rowspan="2">

Latest version and latest Extended Support Release \(ESR\)<sup>9</sup>

</td>
<td valign="top" align="center">

\-

</td>
</tr>
<tr>
<td valign="top">

Touch<sup>5, 6, 8</sup>

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

Latest version<sup>9</sup>

</td>
<td valign="top">

Latest version<sup>9</sup>

</td>
<td valign="top">

Latest version<sup>7</sup>

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

Latest major 2 versions

</td>
<td valign="top">

Latest version

</td>
<td valign="top" align="center">

\-

</td>
<td valign="top">

Latest version <sup>5</sup>

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

Phone and Tablet<sup>5,6, 8</sup>

</td>
<td valign="top">

Latest version

</td>
<td valign="top">

Latest version

</td>
<td valign="top">

Latest version<sup>9</sup>

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

Latest version<sup>7</sup>

</td>
</tr>
<tr>
<td valign="top">

Android<sup>4</sup>

</td>
<td valign="top">

Phone and Tablet<sup>5,6, 8</sup>

</td>
<td valign="top">

Latest major 3 versions supported by Google

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

Latest version<sup>7</sup>

</td>
</tr>
</table>

1\) The specified browsers are also supported in virtual environments, such as Citrix and VMware. Any issues found must be reproducible in a non-virtualized environment.  
 2\) SAPUI5 detects Microsoft Edge \(Chromium\) as Google Chrome and treats it the same. If your personal or your organization’s tracking prevention settings within Microsoft Edge are too strict, `*hana.ondemand.com` addresses are blocked. To prevent this, load SAPUI5 from `https://ui5.sap.com/`.  
 3\) We use current Apple iPhone and iPad devices for testing and reproducing the reported issues.  
 4\) Android-based devices are very fragmented in matters of operating system variants and hardware diversity. We use current Samsung Galaxy S and Galaxy Tab S series devices for testing and reproducing the reported issues.  
 5\) Not supported for `sap.ui.commons` and `sap.ui.ux3`.  
 6\) Not supported for `sap.sac.df`.  
 7\) With the removal of the SAP Fiori Client from the Public App stores, preferable native browsers should be used on mobile devices. For more information see, [2992772](https://me.sap.com/notes/2992772).  
8\) Not supported for `sap.gantt`. Note that gantt charts consuming `sap.gantt` can be displayed on tablet devices.  
 9\) Not supported for `sap.ui.vbm`.



<a name="loio74b59efa0eef48988d3b716bd0ecc933__MS_IE"/>

## SAPUI5 Support Status for Microsoft Internet Explorer 11

Support for Microsoft Internet Explorer 11 \(IE11\) ended with the end of IE11 support by Microsoft, and for the sake of completeness Internet Explorer mode of MS Edge was never supported by SAPUI5.

For more information, see SAP Note [1672817](https://me.sap.com/notes/1672817).

