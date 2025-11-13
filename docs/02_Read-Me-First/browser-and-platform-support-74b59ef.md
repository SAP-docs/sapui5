<!-- loio74b59efa0eef48988d3b716bd0ecc933 -->

# Browser and Platform Support

Here you can find information on the browser and platform support for the SAPUI5 libraries on iOS, Android, macOS, and Windows platforms.

> ### Note:  
> The single source of truth about supported browsers and platforms is the Product Availability Matrix \(PAM\) that you can find at [https://support.sap.com/pam](https://support.sap.com/pam). SAPUI5 is not a product of its own, so please check the PAM for the product you're using SAPUI5 with. For more information, see SAP Note [1716423](https://me.sap.com/notes/1716423).
> 
> The following sections only contain additional information on restrictions and platform support information for specific SAPUI5 libraries in a summarized form.

As SAPUI5 is based on CSS3, HTML5, and modern ECMAScript, only browsers with corresponding capabilities are supported. In general, only major versions that are also supported by the respective platform can be supported by the SAPUI5 framework.

> ### Note:  
> Certain restrictions apply for the usage of modern ECMAScript by SAPUI5 applications. For more information, see [ECMAScript Support](ecmascript-support-0cb44d7.md).

Depending on the platform your SAPUI5 apps run on, different browsers in different versions are supported. If you know which platform and which browsers are used by your users, you can decide on which libraries to use for your app.



## Overview of Supported Browsers, Platforms, and Reference Devices

The following tables give a general overview of the browsers, platforms, and reference devices supported by the main SAPUI5 libraries. Combinations not included in the table may still function but are not part of the supported scope. Before you report an issue, make sure that it can be reproduced on one of the browser and platform combinations listed.Browsers and platforms that are no longer supported by their respective vendors are also not supported by SAP. There are certain known device-browser combinations that lead to visual degradations. For more information, see [Visual Degradations](visual-degradations-f08f296.md).

> ### Note:  
> Browsers are constantly evolving across various devices. Browser upgrades may introduce changes that are not backward compatible and can affect the behavior of SAPUI5. SAP has no control over these upgrades and doesn't provide any warranty regarding the features or qualities of these browsers.



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

Microsoft Edge \(Chromium\)<sup>3</sup>

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

Windows<sup>2</sup>

</td>
<td valign="top">

Desktop

</td>
<td valign="top">

Windows 10<sup>1</sup>

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

Latest version and latest Extended Support Release \(ESR\)<sup>10</sup>

</td>
<td valign="top" align="center">

\-

</td>
</tr>
<tr>
<td valign="top">

Touch<sup>6, 7, 9</sup>

</td>
<td valign="top">

Windows 10<sup>1</sup>

Windows 11

</td>
<td valign="top" align="center">

\-

</td>
<td valign="top">

Latest version

</td>
<td valign="top">

Latest version<sup>10</sup>

</td>
<td valign="top">

Latest version<sup>10</sup>

</td>
<td valign="top">

Latest version<sup>8</sup>

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

Latest version <sup>6</sup>

</td>
<td valign="top">

Latest version<sup>6</sup>

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

iOS & iPadOS<sup>4</sup>

</td>
<td valign="top">

Phone and Tablet<sup>6, 7, 9</sup>

</td>
<td valign="top">

Latest version

</td>
<td valign="top">

Latest version

</td>
<td valign="top">

Latest version<sup>10</sup>

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

Latest version<sup>8</sup>

</td>
</tr>
<tr>
<td valign="top">

Android<sup>5</sup>

</td>
<td valign="top">

Phone and Tablet<sup>6, 7, 9</sup>

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

Latest version<sup>8</sup>

</td>
</tr>
</table>

1\) Windows 10 is supported only until official end of support by Microsoft \(October 14, 2025\). Although applications are expected to continue to run on Windows 10, it is strongly recommended to upgrade to Windows 11 as soon as possible.  
 2\) The specified browsers are also supported in virtual environments, such as Citrix and VMware. Any issues found must be reproducible in a non-virtualized environment.  
 3\) SAPUI5 treats Microsoft Edge \(Chromium\) like Google Chrome from a technical perspective. However, if your personal or organizational tracking prevention settings in MS Edge are too strict, loading SAPUI5 from hostnames ending in `hana.ondemand.com` may be blocked. To prevent this, load SAPUI5 from `https://ui5.sap.com/`  \(see [Short and Powerful: Convenient URLs for SAPUI5/OpenUI5 CDN](https://community.sap.com/t5/technology-blog-posts-by-sap/short-and-powerful-convenient-urls-for-sapui5-openui5-cdn/bc-p/13525618)\). Alternatively, ensure that `[*.]hana.ondemand.com` is added to `edge://settings/privacy/trackingPrevention/trackerExceptions` as outlined in SAP Note [3216225](https://me.sap.com/notes/3216225).  
 4\) We use current Apple iPhone and iPad devices for testing and reproducing the reported issues.  
 5\) Android-based devices are very fragmented in matters of operating system variants and hardware diversity. We use current Samsung Galaxy S and Galaxy Tab S series devices for testing and reproducing the reported issues.  
 6\) Not supported for `sap.ui.commons` and `sap.ui.ux3`.  
 7\) Not supported for `sap.sac.df`.  
 8\) With the removal of the SAP Fiori Client from the Public App stores, preferable native browsers should be used on mobile devices. For more information see, [2992772](https://me.sap.com/notes/2992772).  
9\) Not supported for `sap.gantt`. Note that gantt charts consuming `sap.gantt` can be displayed on tablet devices.  
 10\) Not supported for `sap.ui.vbm`.



<a name="loio74b59efa0eef48988d3b716bd0ecc933__MS_IE"/>

## SAPUI5 Support Status for Microsoft Internet Explorer 11

Support for Microsoft Internet Explorer 11 \(IE11\) ended with the end of IE11 support by Microsoft, and for the sake of completeness Internet Explorer mode of MS Edge was never supported by SAPUI5.

For more information, see SAP Note [1672817](https://me.sap.com/notes/1672817).

