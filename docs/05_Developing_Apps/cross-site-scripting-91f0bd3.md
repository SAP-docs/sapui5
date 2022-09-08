<!-- loio91f0bd316f4d1014b6dd926db0e91070 -->

# Cross-Site Scripting

Cross-site scripting \(XSS\) is a widely known vulnerability most web sites have. This page does not provide general information about cross-site scripting but focuses on what you as an application developer using SAPUI5 can do to avoid these security issues.

To give a short info on XSS: It is about injecting script code into a web page, which is then executed in the context of the page and therefore not only can access any information which currently displayed on the screen but can either access session information contained in cookies, or send new requests to the server within the current session, or even try to exploit browser vulnerabilities to get full access to the machine the browser is running on.



<a name="loio91f0bd316f4d1014b6dd926db0e91070__section_04390290F9604EFFB4DB3019FA3E9F73"/>

## Cross-site Scripting in SAPUI5-based Web Applications

AJAX frameworks in general are an interesting target for XSS exploits, as not only the HTML which is initially sent to the browser may contain vulnerabilities, but also the code which is used to visualize content on the client side may have bugs which can be exploited to get the JavaScript coding executed on the client side. In addition to that, once a script has injected an AJAX application, it will be alive for a long time, as usually navigation will not reload the whole page which would also clean up any running JavaScript code, but stays within the same HTML document and uses a delta update mechanism to show new content.

It is important to understand that SAPUI5 is not involved in creating the HTML page which is sent to the client, so there is no way SAPUI5 can prevent XSS vulnerabilities which are contained in the HTML page itself. The application which is using the SAPUI5 rendering has to take care, according to the documentation of their server-side rendering framework, to properly escape user data, in a way that no JavaScript can be injected.

The SAPUI5 framework will take care of proper escaping for all content which is created and displayed on the screen using the controls provided by SAPUI5. There is no need for the application to HTML-escape user data, but the control API expects all data to be unescaped, so that it can be escaped as needed for the context it will be visualized.



<a name="loio91f0bd316f4d1014b6dd926db0e91070__section_fdr_tzl_xcb"/>

## HTML Sanitizer

SAPUI5 reuses the HTML4 sanitizer by Google by adapting it for the use of HTML5 coding. The Google sanitizer also supports CSS3 coding. In addition, the HTML5 sanitizer uses the URL allowlist which checks embedded URLs for correct formatting or against a given allowlist.

For adapting the sanitizer to support HTML5, the HTML attributes and elements have been reorganized according to the current HTML5 specification from W3C. All types and flags have been reviewed as accurately as possible and HTML4 elements that are no longer used in HTML5 have been removed. You can, however, still see them as comments. New or changed rules for HTML5 have been marked are "new" within the comments. The comments also state which attributes and elements are assigned to respective types and flags. All rules which were not 100% clear were analyzed in a way of similarity, so for example "audio" and "video" content behaves like images etc. URIEFFECTS state if a URL is loaded inplace within a tag where the actual document is in control of what type of content is loaded like "image" or if a new document is loaded like with "a href". LOADERTYPES state if content is loaded as sandboxed which means it is loaded within a specific surrounding player like with video content for example or if it is loaded freely without restrictions. Internally controls which accept arbitrary HTML content like the `sap.ui.richttexteditor.RichTextEditor` or the `sap.ui.core.HTML` use the HTML5 Sanitizer to sanitize the HTML code of their content and value to not infiltrate any dangerous coding. The option to sanitize the value can be enabled or disabled in the respective control properly via property: `RichTextEditor.sanitizeValue` or `HTML.sanitizeContent`. For the HTML control, it is disabled by default whereas for the RichTextEditor the sanitize option is enabled.

**Related Information**  


[Prevention of Cross-site Scripting](../09_Developing_Controls/prevention-of-cross-site-scripting-4de64e2.md "Cross-site scripting (XSS) can be prevented by ensuring that it is not possible to inject script code into an application page that runs in a browser.")

