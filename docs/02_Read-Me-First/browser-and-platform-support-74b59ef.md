<!-- loio74b59efa0eef48988d3b716bd0ecc933 -->

# Browser and Platform Support

Supported browsers and platforms for the SAPUI5 libraries.

> ### Note:  
> SAPUI5 is not a product of its own, so please check the Product Availability Matrix \(PAM\) at [https://support.sap.com/pam](https://support.sap.com/pam) for the product you're using SAPUI5 with. For more information, see SAP Note [1716423](https://me.sap.com/notes/1716423).



## SAP Vendor-Synchronized Policy

SAP does not provide support for browsers or platforms that are no longer under general support by their respective vendors. This policy also applies when a vendor offers extended support agreements.



<a name="loio74b59efa0eef48988d3b716bd0ecc933__section_bgw_kns_hnb"/>

## Browser Support

The following tables provide details on supported browsers and platforms.

**Supported Desktop Browsers and Operating Systems**


<table>
<tr>
<th valign="top" align="center">

Desktop

</th>
<th valign="top" align="center">

Google Chrome

</th>
<th valign="top" align="center">

Microsoft Edge

</th>
<th valign="top" align="center">

Mozilla Firefox

</th>
<th valign="top" align="center">

Apple Safari

</th>
</tr>
<tr>
<td valign="top">

**Windows** \(Version 11\)

</td>
<td valign="top" align="center">

Latest stable version

</td>
<td valign="top" align="center">

Latest stable version

</td>
<td valign="top" align="center">

Latest release and latest ESR

</td>
<td valign="top" align="center">

n/a

</td>
</tr>
<tr>
<td valign="top">

**macOS** \(Latest 2 major versions\)

</td>
<td valign="top" align="center">

Latest stable version

</td>
<td valign="top" align="center">

Latest stable version

</td>
<td valign="top" align="center">

\-

</td>
<td valign="top" align="center">

Latest version

</td>
</tr>
</table>

**Supported Mobile Browsers and Operating Systems**


<table>
<tr>
<th valign="top" align="center">

Mobile

</th>
<th valign="top" align="center">

Google Chrome

</th>
<th valign="top" align="center">

Apple Safari

</th>
</tr>
<tr>
<td valign="top">

**iOS & iPadOS** \(Latest version\)

</td>
<td valign="top" align="center">

\-

</td>
<td valign="top" align="center">

Latest version

</td>
</tr>
<tr>
<td valign="top">

**Android** \(Latest 3 major versions supported by Google\)

</td>
<td valign="top" align="center">

Latest stable version

</td>
<td valign="top" align="center">

n/a

</td>
</tr>
</table>



## Additional Information

-   Windows 10 support ended on October 14, 2025. Although SAPUI5 is expected to continue running on Windows 10, upgrade to Windows 11 is strongly recommended.
-   Touch input on Windows is supported, subject to the restrictions listed below.
-   For Firefox, ESR stands for Extended Support Release.
-   The SAP Fiori Client remains supported; however, it is no longer available in public app stores. Therefore, native browsers should be used on mobile devices. For more information, see SAP Note [2992772](https://me.sap.com/notes/2992772).
-   Support is provided for the latest WebView on Windows and iPadOS/iOS. Certain features may be limited compared to regular browsers.
-   If browser tracking-prevention settings \(for example, in Microsoft Edge\) block hostnames ending in hana.ondemand.com, SAPUI5 may not load. To avoid this, load SAPUI5 from https://ui5.sap.com/ or add \[\*.\]hana.ondemand.com to your browser’s tracking exceptions \(see SAP Note [3216225](https://me.sap.com/notes/3216225)\).




## Known Issues

Additional restrictions apply to specific SAPUI5 libraries as listed below:

-   `sap.gantt`, `sap.sac.df`, `sap.ui.commons`, `sap.ui.ux3`, and `sap.ui.vbm` libraries do not support touch input on Windows.
-   `sap.gantt`, `sap.sac.df`, `sap.ui.commons`, and `sap.ui.ux3` libraries are not supported on mobile devices. Note that Gantt charts consuming `sap.gantt` can be displayed on tablet devices.
-   `sap.ui.commons` and `sap.ui.ux3` are not supported in Google Chrome or Microsoft Edge on macOS.
-   `sap.ui.vbm` is not supported in Mozilla Firefox or in WebView on iPadOS/iOS.
-   [Visual Degradations](visual-degradations-f08f296.md) may occur for certain combinations of browsers and platforms.



## ECMAScript Support

SAPUI5 leverages modern ECMAScript, HTML5, and CSS3. Certain restrictions apply for the usage of ECMAScript by SAPUI5 applications. For more information, see [ECMAScript Support](ecmascript-support-0cb44d7.md).



<a name="loio74b59efa0eef48988d3b716bd0ecc933__MS_IE"/>

## Reproducing Support Issues

SAPUI5 may function on browser and platform combinations outside the officially supported scope. However, any reported issue must be reproducible on a supported browser and platform combination.

For Windows, the specified browsers are also supported in virtual environments, such as Citrix and VMware. However, any issues found must be reproducible in a non-virtualized environment.

For mobile devices, the reported issues must be reproducible on:

-   current Apple iPhone and iPad devices
-   current Samsung Galaxy S phone and Galaxy Tab S Android devices



> ### Note:  
> Browsers are constantly evolving across various platforms. Browser upgrades may introduce changes that are not backward compatible and can affect the behavior of SAPUI5. SAP doesn't provide any warranty regarding the features or qualities of these browsers.

