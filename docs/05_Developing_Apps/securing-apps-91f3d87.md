<!-- loio91f3d8706f4d1014b6dd926db0e91070 -->

# Securing Apps

The following section provides information about security aspects of SAPUI5. The information is intended for SAPUI5 application and control developers, as well as to system administrators running applications based on SAPUI5.

SAPUI5 is a client-side JavaScript library, so while the library itself is designed and tested to be secure, it cannot ensure the application to be secure. Unlike WebDynpro, where the application is built against an abstract programming model and the framework handles the HTML rendering, JavaScript code and communication with the browser, in SAPUI5 the application controls the HTML output and provides its own JavaScript code. This code is executed on the client and it handles client/server communication.

While this brings a lot of freedom and possibilities for the application, it comes with a lot of responsibility with regards to security. Application developers need to understand the security threats and actively prohibit exploitation. Also important is the correct configuration of the used HTTP server.

Moreover, common security mechanisms, which are usually taken for granted, like user authentication, session handling, authorization handling, or encryption are not part of SAPUI5 and need to be handled by the server-side framework and/or custom code of the application.



## Further Reading

SAPUI5 is not bound to any server implementation or server-side programming language and can, thus, be used with SAP NetWeaver AS for ABAP, Java, HANA XS Engine, or any standard web server. Therefore, the corresponding Security Guides also apply to SAPUI5.

> ### Note:  
> We highly recommend that you implement SAP Note [1582870](https://launchpad.support.sap.com/#/notes/1582870) for ABAP XSS escaping support, in case you are running on SAP\_BASIS lower than 730.

-   **[Content Security Policy](content-security-policy-fe1a6db.md "Content Security Policy (CSP) adds an additional layer of security that can detect and mitigate certain types of attacks, such as
		cross-site scripting and data injection.")**  
Content Security Policy \(CSP\) adds an additional layer of security that can detect and mitigate certain types of attacks, such as cross-site scripting and data injection.
-   **[Browser Security](browser-security-91f3b66.md "Browser security comprises several topics such as cross-site scripting, clickjacking,
		and local storage.")**  
Browser security comprises several topics such as cross-site scripting, clickjacking, and local storage.
-   **[Transport Security](transport-security-91f3e60.md "Transport security comprises topics such as encryption and session
		security.")**  
Transport security comprises topics such as encryption and session security.
-   **[Server Security](server-security-91f3cac.md "Server security comprises topics such as cross-origin resource sharing and resource
		handlers.")**  
Server security comprises topics such as cross-origin resource sharing and resource handlers.
-   **[Third-Party Libraries](third-party-libraries-91f3df4.md "For the third party libraries shipped with SAPUI5, security-related issues have to be
		observed. ")**  
For the third party libraries shipped with SAPUI5, security-related issues have to be observed.
-   **[Secure Programming Aspects](secure-programming-aspects-91f3c40.md "The secure programming guide introduces topics that developers should note.")**  
The secure programming guide introduces topics that developers should note.
-   **[Cross-Site Scripting](cross-site-scripting-91f0bd3.md "Cross-site scripting (XSS) is a widely known vulnerability most web sites have. This
		page does not provide general information about cross-site scripting but focuses on what you
		as an application developer using SAPUI5 can do to avoid these security issues.")**  
Cross-site scripting \(XSS\) is a widely known vulnerability most web sites have. This page does not provide general information about cross-site scripting but focuses on what you as an application developer using SAPUI5 can do to avoid these security issues.
-   **[URL List Validation](url-list-validation-91f3768.md "The SAPUI5 framework provides a client-side API to manage allowed URLs using
		the URLListValidator. It can be used to validate arbitrary URLs.")**  
The SAPUI5 framework provides a client-side API to manage allowed URLs using the `URLListValidator`. It can be used to validate arbitrary URLs.
-   **[Allowlist Service](allowlist-service-d04a6d4.md "SAPUI5 supports the configuration of a central allowlist service.")**  
SAPUI5 supports the configuration of a central allowlist service.
-   **[Frame Options](frame-options-62d9c4d.md "frameOptions is used to prevent security vulnerabilities like
		clickjacking. With the frameOptions configuration you define whether SAPUI5 is allowed to run
		embedded in a frame or only from trusted origins or not at all.")**  
`frameOptions` is used to prevent security vulnerabilities like clickjacking. With the `frameOptions` configuration you define whether SAPUI5 is allowed to run embedded in a frame or only from trusted origins or not at all.

