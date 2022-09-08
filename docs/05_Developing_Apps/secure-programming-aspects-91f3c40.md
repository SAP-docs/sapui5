<!-- loio91f3c4016f4d1014b6dd926db0e91070 -->

# Secure Programming Aspects

The secure programming guide introduces topics that developers should note.



<a name="loio91f3c4016f4d1014b6dd926db0e91070__section_0272193CE8834F04B077ABFD272B4E78"/>

## Input Validation

From the application point of view, the validation of user input must be done on the server and, optionally, on the client. This can be achieved by using two-way data binding and model types.

From the control point of view, the input of control properties must be validated, so that integer properties only accept integers and enumeration properties only accept an existing enumeration value. While this sounds obvious, in JavaScript it is not. The type system of JavaScript does not do type validation on assignment.



<a name="loio91f3c4016f4d1014b6dd926db0e91070__section_ACC446022F8C4401A548DF60B98C25C2"/>

## Output Encoding

All data sent from the server must be properly output encoded according to the context they are contained in. For more information, see [Cross-Site Scripting](cross-site-scripting-91f0bd3.md).

Content, which is created on the client side either for display within the browser or for data transport, needs to be properly output encoded with the encoding methods provided by SAPUI5. There are methods for encoding HTML, XML, JavaScript, CSS and URI components.

All controls in SAPUI5 libraries properly encode their data, except for HTML-control and XMLView. The latter two are explicitly built to display arbitrary HTML content. If applications use these two controls and provide unsecure HTML content, they have to check/validate the content on their own.

> ### Note:  
> Using an XMLView with application controlled secure HTML content together with standard SAPUI5 controls \(other than HTML and XMLView\) containing potentially unsecure data is also safe. Only untrusted HTML content is critical.

For more information on SAPUI5 HTML code cleanup, see [HTML5 Sanitizer](cross-site-scripting-91f0bd3.md#loio91f0bd316f4d1014b6dd926db0e91070__section_fdr_tzl_xcb).



<a name="loio91f3c4016f4d1014b6dd926db0e91070__section_9DBB8FAC798E48829FAC407FD9A47D9E"/>

## URL Validation

URL validation should take place on the server-side when possible. In case URLs are entered on the client-side or are loaded from an external service, SAPUI5 offers a URL validator, which can be used to validate whether a URL is well formed and properly encoded. It also contains a configurable allowlist to restrict URLs to certain protocols or certain hosts. Initially, the allowlist only checks for the `http`, `https`, and `ftp` protocols, but nothing else. Applications should define their own allowlist.



<a name="loio91f3c4016f4d1014b6dd926db0e91070__section_EEC726E351C54D799F6479B24A685E80"/>

## Cache Settings

The application has to take care that caching of data is disabled by setting appropriate HTTP headers on the server-side.

Static resources from SAPUI5 or from the application are not security relevant and are excluded from this rule, so they can safely be cached on the client.



<a name="loio91f3c4016f4d1014b6dd926db0e91070__section_A2E00DC0967241E89AF9B3E54CF7FDF3"/>

## User Management / Authentication

SAPUI5 does not provide any authorization or user management. An application, which implements such facilities based on SAPUI5 has to make sure that SSL/TLS is enabled to prevent cleartext passwords sent over the wire. Applications must not store any logon information on the client.



<a name="loio91f3c4016f4d1014b6dd926db0e91070__section_6ABD0CE1F88C4767A82E92D7295274C3"/>

## Local Storage

The local storage of browsers is not a secure storage, so while it can be used for static data, like enumerations, applications must not store any user or application data within the local storage.

