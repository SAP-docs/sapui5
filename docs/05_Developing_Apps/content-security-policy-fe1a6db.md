<!-- loiofe1a6dba940e479fb7c3bc753f92b28c -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# Content Security Policy

Content Security Policy \(CSP\) adds an additional layer of security that can detect and mitigate certain types of attacks, such as cross-site scripting and data injection.



CSP restricts the sources from which the browser is allowed to load resources, such as scripts, fonts, and images:

-   CSP mitigates and reports XSS attacks; CSP-compatible browsers only execute scripts loaded in source files that are received from allowed sources.

-   CSP also mitigates packet sniffing attacks by specifying the protocols that may be used on the web server, for example, specifying that content must be loaded from HTTPS.


CSP is either enabled via a configuration in the web server to return the Content-Security-Policy HTTP header \(preferred solution\), or via the `<meta>` element in the meta tags of an HTML page.

For generic information about CSP, see [https://www.w3.org/TR/CSP2/](https://www.w3.org/TR/CSP2/).



<a name="loiofe1a6dba940e479fb7c3bc753f92b28c__section_chc_tmq_crb"/>

## CSP for SAPUI5 - Dos and Don'ts

For SAPUI5, we recommend that developers build their apps CSP-compliant, in particular regarding the loading of resources and the use of inline scripts.



### Policies Without `script-src 'unsafe-inline'`

To build CSP-compliant SAPUI5 without inline scripts, avoid the following:

-   `<script>` elements with inlined source code

-   Inline event handlers

-   `javascript:` URLs

-   `document.write()`, `createElement('script')`, and so on, if they are used to create inline scripts. Creating script references, such as `<script src="..."></script>`, or non-script content with them is okay.




### Policies Without `script-src 'unsafe-eval'`

`eval()` is currently still required in some parts of SAPUI5 for synchronous loading and other functionality. However, we recommend loading JavaScript resources asynchronously, which also avoids the use of `eval()`. For more information about asynchronous loading, see [Modules and Dependencies](../04_Essentials/modules-and-dependencies-91f23a7.md). For more information about avoiding synchronous APIs that might lead to synchronous loading, see [Legacy Factories Replacement](../04_Essentials/legacy-factories-replacement-491bd9c.md).

For a CSP policy that doesn't allow `eval()` you must also avoid the following elements when developing SAPUI5 apps:

-   `new Function()`

-   `<setTimeout(<non-fn>)`

    This will be ignored silently and not create a timer without `'unsafe-eval'`, that is, `<non-fn>` is never executed. `setTimeout(<fn>)` works with and without `'unsafe-eval'`.

-   `setInterval(<non-fn>)`

    This will be ignored silently and not create a repeated timer without `'unsafe-eval'`, that is, the `<non-fn>` is never executed. `setInterval(<fn>)` works with and without the `'unsafe-eval'`.




<a name="loiofe1a6dba940e479fb7c3bc753f92b28c__section_spl_4p3_2rb"/>

## Test Your Policies with `Report-Only`

> ### Note:  
> CSP is a complex subject with many interdependencies and dynamics. Example: A CSP-compliant control or function in your app might have a dependency to a deprecated API that is not fully CSP-compliant. In this case you may need to add `'unsafe-eval'` to the `script-src` directive. That's why it's important to test your policies to check this.

To test policies without enforcing them, set up CSP with the `Content-Security-Policy-Report-Only` response header and test with the **most restrictive** policy. Monitor the reports to add missing sources \(see [Directives](content-security-policy-fe1a6db.md#loiofe1a6dba940e479fb7c3bc753f92b28c__directives). When you have found the desired policy, replace the `Content-Security-Policy-Report-Only` header with `Content-Security-Policy` to enforce the policy.



<a name="loiofe1a6dba940e479fb7c3bc753f92b28c__directives"/>

## Directives

To run an app in an environment in which CSP has been enabled, SAPUI5 requires the following CSP directives and source entries:


<table>
<tr>
<th valign="top" rowspan="2">

Directive



</th>
<th valign="top" align="center" colspan="4">

Sources Required by the SAPUI5 Framework



</th>
<th valign="top" align="center">

Sources Required by the App



</th>
</tr>
<tr>
<th valign="top">

<code>&lt;source hosting SAPUI5&gt;</code>

\(equals `'self'` if SAPUI5 is hosted with the app\)



</th>
<th valign="top">

`data:`



</th>
<th valign="top">

`blob:`



</th>
<th valign="top">

Other Sources



</th>
<th valign="top">

Custom Sources \(Including 'self' for the App's Own Origin\)



</th>
</tr>
<tr>
<td valign="top">

`script-src`



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
<td valign="top">

`'unsafe-eval'`

Required for synchronous loading of JavaScript resources.

Required for the following libraries:

-   `sap.ca.ui` and scaffolding framework
-   `sap.landvisz`
-   `sap.makit`
-   `sap.me`
-   `sap.ui.commons`
-   `sap.ui.ux3`
-   `sap.uiext.inbox`
-   `sap.viz.*` \(deprecated part\)
-   `sap.zen.*`

Most likely required for deprecated APIs, especially for programming model APIs, like old factories in the `sap.ui` namespace.

Certain libraries at least partly still require `'unsafe-eval'`, including the following:

-   `sap.apf`
-   `sap.collaboration`
-   `sap.ovp`
-   `sap.suite.ui.generic.template`
-   `sap.rules.ui`
-   `sap.ui.vbm`
-   `sap.ushell`

The above list assumes that the app runs using library preloads \(recommended, see [Ensure that Library Preloads are Enabled](performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_LibraryPreloads)\). If the appication runs without preloads, more libraries require `unsafe-eval`.



</td>
<td valign="top">

-   Requires `'self'` for loading application resources.
-   May require `'unsafe-inline'` or `'unsafe-eval'` depending on custom scripts.



</td>
</tr>
<tr>
<td valign="top">

`style-src`



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
<td valign="top">

`'unsafe-inline'`

Required for the following libraries:

-   `sap.ca.ui` and scaffolding framework
-   `sap.landvisz`
-   `sap.makit`
-   `sap.me`
-   `sap.ui.richtexteditor`
-   `sap.ui.commons`
-   `sap.ui.ux3`
-   `sap.uiext.inbox`
-   `sap.viz.*` \(deprecated part\)
-   `sap.zen.*`

Most likely required for deprecated APIs.

Certain libraries at least partly still require `'unsafe-inline'`, including:

-   `sap.gantt`
-   `sap.rules.ui`
-   `sap.suite.ui.commons`
-   `sap.ui.vbm`
-   `sap.ui.vk`
-   `sap.ushell`



</td>
<td valign="top">

-   May require `'self'` and additional locations for application-specific styles and themes.
-   Requires `'unsafe-inline'` for custom controls using inline styles.



</td>
</tr>
<tr>
<td valign="top">

`img-src`



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

 



</td>
<td valign="top">

May require `'self'` or additional locations for application-specific images \(such as custom themes or images in the back end\).



</td>
</tr>
<tr>
<td valign="top">

`font-src`



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
<td valign="top">

May require `'self'` or additional locations for application-specific fonts.



</td>
</tr>
<tr>
<td valign="top">

`frame-src`



</td>
<td valign="top">

Required for using the support assistant and/or the diagnostics tool. Also required to avoid a fallback to `child-src`.\*



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

 



</td>
<td valign="top">

May require additional locations depending on the integration, application, or test scenario.



</td>
</tr>
<tr>
<td valign="top">

`worker-src`



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`child-src`\*\*



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

May be required by some specific SAPUI5 functionality.



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`connect-src`



</td>
<td valign="top" align="center">

<span style="color:#007833;"><span class="SAP-icons"></span></span>



</td>
<td valign="top">

 



</td>
<td valign="top">

 



</td>
<td valign="top">

Some specific SAPUI5 functionality may require `wss:`.



</td>
<td valign="top">

Requires `'self'` for loading application resources.



</td>
</tr>
</table>

\*In case `child-src` has been specified but no fallback for `frame-src` is intended, define `frame-src` with proper sources \(could also be `'none'`\).

\*\*`child-src` is still required for browsers that don't support `worker-src` yet.



<a name="loiofe1a6dba940e479fb7c3bc753f92b28c__section_c1k_gt3_2rb"/>

## Specific Restrictions

The following functions and features require additional CSP source entries or have certain restrictions:


<table>
<tr>
<th valign="top">

Library



</th>
<th valign="top">

Topic



</th>
<th valign="top">

Comment



</th>
</tr>
<tr>
<td valign="top" align="center" colspan="3">

<code><b>script-src 'unsafe-eval'</b></code>



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.support`



</td>
<td valign="top">

Support Assistant - Temporary Rules



</td>
<td valign="top">

For temporary rules in the Support Assistant, dynamic code execution is essential, so it can't be removed. Support Assistant detects whether dynamic code execution is allowed and informs the user if temporary rules can be used or not.



</td>
</tr>
<tr>
<td valign="top">

`sap.ushell`



</td>
<td valign="top">

Search, App Finder, Custom Tiles



</td>
<td valign="top">

`script-src 'unsafe-eval'` is required for the App Finder and the rendering of custom tiles. It's also required to start the search function via a deep link.



</td>
</tr>
<tr>
<td valign="top">

`sap.viz`



</td>
<td valign="top">

VizContainer, typed charts



</td>
<td valign="top">

VizContainer and old typed charts require synchronous loading of JavaScript.



</td>
</tr>
<tr>
<td valign="top">

`unified.shell`



</td>
<td valign="top">

Factsheets, Smart Business



</td>
<td valign="top">

Factsheets and Smart Business \(tiles\) have not been fully adopted to run without synchronous loading yet.



</td>
</tr>
<tr>
<td valign="top" align="center" colspan="3">

<code><b>script-src 'unsafe-inline'</b></code>



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.richtexteditor`



</td>
<td valign="top">

RichTextEditor



</td>
<td valign="top">

The following cases can cause CSP-relevant issues for inline scripts when the RichTextEditor is used:

-   If you're using one of the following plugins: `linkchecker`, `preview`
-   If you're using the `tinymce.ui.Iframe` widget

See also [sap.ui.richtexteditor](../10_More_About_Controls/sap-ui-richtexteditor-d4f3f15.md).



</td>
</tr>
<tr>
<td valign="top" align="center" colspan="3">

<code><b>script-src 'wasm-eval'</b></code>



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.core`



</td>
<td valign="top">

Hyphenation



</td>
<td valign="top">

`script-src` requires `wasm-eval`

When native hyphenation is not available, a third-party library \(Hyphenopoly\) is used. This library uses WASM, which leads to CSP issues due to browser limitations. There is a fallback to `asm.js`, if WASM can't be used.



</td>
</tr>
<tr>
<td valign="top" align="center" colspan="3">

<code><b>style-src 'unsafe-inline'</b></code>



</td>
</tr>
<tr>
<td valign="top">

`sap.m` and others



</td>
<td valign="top">

Controls that display provided HTML text \(for example `sap.m.FormattedText` and `sap.ui.core.HTML`\)



</td>
<td valign="top">

Certain controls display provided HTML text, for example `sap.m.FormattedText`. If the provided text contains a style attribute or a style element with inline styles, `'unsafe-inline'` is required for `style-src`.

It's recommended to use styling with the `class` attribute and external stylesheets.



</td>
</tr>
<tr>
<td valign="top">

`sap.ui.vk`



</td>
<td valign="top">

2D drawings \(`sap.ui.vk.svg.Viewport`\)



</td>
<td valign="top">

When a 2D drawing is loaded, `sap.ui.vk.svg.Viewport` creates an SVG document that uses inline styles to define SVG drawing elements, colors, line styles, etc.



</td>
</tr>
<tr>
<td valign="top">

`sap.ushell`



</td>
<td valign="top">

Company Logo



</td>
<td valign="top">

A console error related to the loading of the company logo is logged during startup of the SAP Fiori launchpad. Eventually, the logo is loaded as expected.



</td>
</tr>
<tr>
<td valign="top">

`sap.viz`



</td>
<td valign="top">

VizContainer, typed charts



</td>
<td valign="top">

VizContainer and old typed charts require synchronous loading of JavaScript.



</td>
</tr>
<tr>
<td valign="top">

`unified.shell`



</td>
<td valign="top">

Factsheets, Smart Business



</td>
<td valign="top">

Factsheets and Smart Business \(tiles\) have not been fully adopted to run without inline styles yet.



</td>
</tr>
</table>

