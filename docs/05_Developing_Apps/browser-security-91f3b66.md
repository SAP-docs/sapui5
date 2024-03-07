<!-- loio91f3b66b6f4d1014b6dd926db0e91070 -->

# Browser Security

Browser security comprises several topics such as cross-site scripting, clickjacking, and local storage.

A browser is, by design, an untrusted client: A server cannot rely on any information sent from a browser, as a malicious user can use a JavaScript debugger to tamper with the client code, or a proxy server like fiddler to modify request data. Input validation on the client is just for convenience purposes as the server always has to validate the data again that is received from the client.

Browsers also offer possible attack vectors, such as Cross-Site-Scripting \(XSS\). The application has to take care of these.



<a name="loio91f3b66b6f4d1014b6dd926db0e91070__section_6C7CB6E84E7E42DB821D50A02BEFF849"/>

## Cross-Site Scripting

Cross-Site-Scripting has become the most prominent security issue of web applications within the last years and also the most dangerous one, as it allows several ways of exploitation. Once malicious code is running within your browser, it can be used to steal your session cookies, to trigger requests within the current session, or even to exploit a known browser vulnerability to do native code execution.

For SAPUI5 applications, XSS vulnerabilities can exist on the following different levels:

-   Within the HTML page or custom data transports sent to the browser from the server

-   Within the JavaScript code of the application, which is processing server responses

-   Within the HTML renderers of SAPUI5 controls


SAPUI5 can only prevent cross-site scripting in the processing and rendering of controls. For that purpose, input validation exists for all typed element properties and output encoding is done in the renderer class of controls. However, there are exceptions for controls that are especially built to include arbitrary HTML, for example, `sap.ui.core.HTML`.

The application is responsible for the following tasks:

-   Proper output encoding of all content embedded in the HTML page itself

-   Encoding JSON or XML data sent to the client

-   Secure processing of the JSON/XML data

-   Security of custom controls provided by the application


For more information, see [Cross-Site Scripting](cross-site-scripting-91f0bd3.md).



## Clickjacking

Clickjacking, or UI redressing, tricks the user into triggering actions within an application by redirecting clicks. This is done, for example, by using an invisible iFrame that is positioned above a fake UI. When the user clicks on something on the fake UI, the content of the invisible iFrame handles the click.

SAPUI5 provides a way to prevent clickjacking since version 1.28.0. This has to be configured, as needed, by the application. For more information, see [Frame Options](frame-options-62d9c4d.md).

> ### Note:  
> As of version 1.28.0, you no longer need to use the Business Add-In `/UI5/BADI_CONFIG_HTTP_HANDLER` to configure the X-Frame-Options response header \(SAP Note 2075016\). The SAPUI5 framework now handles clickjacking prevention and the add-in solution won't work on all browsers.

For more detailed information on clickjacking, refer to the following SAP Note: [2319727](https://me.sap.com/notes/2319727)



<a name="loio91f3b66b6f4d1014b6dd926db0e91070__section_94EDDC27FE5D45A29B1B7DC18C4E2F48"/>

## HTML5

HTML5 offers a lot of new functionality, which also brings a lot of potential new security issues. This is just an overview of some of the new features and possible security issues when they are used.

**Local Storage**

All browsers are now offering a local storage API. This API can be used to store a limited amount of data on the browser. Access to this data is limited to JavaScript code running from the same domain as it has been stored. SAPUI5 offers helper functions to access the local storage on different browsers.

The local storage of browsers is not a secure storage, so while it can be used for static data, like enumerations, applications must not store any user or application data within the local storage.

SAPUI5 is using the local storage of the browser for the history-capability of dropdown boxes and combo boxes.

**WEBGL**

While more and more browsers are supporting WEBGL by default, WEBGL allows accessing the graphics API of the computer on a very low level, which may also lead to low level exploits. This is the main reason why some browsers have no support for WebGL at all.

SAPUI5 is currently not using WEBGL.

**WebSockets**

While WebSockets offer great new possibilities for the client/server communication of web applications, there have been many security issues rising while the first implementations were done by the browser vendors. Standardization of WebSockets has reached a stable state with RFC 6455 and is now implemented as of, for example, Chrome 16 and Firefox 11. Even if the browser implementations themselves prove to be secure, using WebSockets may require additional security measures on the client.

SAPUI5 is currently not using WebSockets.

**Postmessage/Onmessage**

This is another feature in the HTML5 area, which can lead to massive security issues when not used correctly. `postMessage` allows inter-window-communication between windows from different domains. This opens a hole in the same origin policy currently implemented in the browser. As soon you subscribe to the `onMessage` event, you can receive messages from any other browser window. The application is responsible to check the originating domain and to process only messages that have been sent by trusted domains.

SAPUI5 uses postMessage for its debugging and tracing functionality.

