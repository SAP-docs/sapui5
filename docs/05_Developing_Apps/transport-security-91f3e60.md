<!-- loio91f3e6056f4d1014b6dd926db0e91070 -->

# Transport Security

Transport security comprises topics such as encryption and session security.

Security on the client and server side is not sufficient if the data transport between client and server can be read, intercepted, or even modified by an attacker. Per default, HTTP communication is stateless and unencrypted and this makes it necessary to configure it in a way that it uses encrypted connections and to add session handling on top using either cookies or URL rewriting.



<a name="loio91f3e6056f4d1014b6dd926db0e91070__section_745F982F3B5047529CC3C89AA359B4AF"/>

## Encryption

Sending the HTTP protocol over a SSL secured connection is not only standardized, but also required for SAP applications.

SAPUI5 fully supports the use of HTTPS, but there are some restrictions regarding the CDN version of SAPUI5 when HTTPS is used. It is recommended to enable or at least to test SSL connections in an early stage of application development, as usually switching to HTTPS causes some issues. When the application is started using HTTPS, the SAPUI5 library also has to be loaded from an HTTPS server.



<a name="loio91f3e6056f4d1014b6dd926db0e91070__section_EA424BD729FC44DABF009B60BBF59361"/>

## Session Security

Even if the data transport is secured using SSL or TLS, there are possibilities to hijack such a secure connection and send malicious requests from the client. Cross-site request forgery and session fixation are two of the prominent examples of this class of attacks.

SAPUI5 does only provide XSRF prevention for the data, which is sent to the server by SAPUI5. Currently this only happens in the OData Model, where a XSRF token is read from the server and used for subsequent write requests.

The application is responsible for using the XSRF header or other mechanisms to prevent XSRF for all other server communication triggered by the application.

