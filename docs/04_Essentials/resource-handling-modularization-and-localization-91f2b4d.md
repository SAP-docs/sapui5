<!-- loio91f2b4d66f4d1014b6dd926db0e91070 -->

# Resource Handling: Modularization and Localization

The handling of resources in SAPUI5 is divided in a client-side and a server-side part. The two parts are complementary and don’t depend on each other.

The server-side resource handling is an optional component to improve the client-server interaction by providing a server-side locale fallback instead of a client-side fallback with multiple requests. The server-side resource handling is mainly used in Eclipse to support the modularized development of SAPUI5 applications and libraries.



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_866E1131207A4BD98456A7C2E53F12D3"/>

## Client-Side Resource Handling

SAPUI5 provides the following mechanism for handling resources on the client:

-   Modularization of JavaScript files, see [Modules and Dependencies](modules-and-dependencies-91f23a7.md)

-   Localization of application texts with resource bundles, see [Resource Bundles](resource-bundles-91f225c.md)


In both cases, SAPUI5 loads additional resources from a server. This server can be any kind of web server \(simple, Java, ABAP, ...\). Both do **not** depend on a specific server-side technology.



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_6913A7D3F65341FBA039B6231078E45C"/>

## Server-Side Resource Handling

For the Java server and the integration into Eclipse, SAPUI5 provides a resource handler to improve the interaction between client and server, for example by providing a server-side locale fallback for the language to avoid multiple requests to get the correct language. It’s also used to support modularized development of SAPUI5 applications and libraries. The Java resource handler is aligned with the concept of the JavaServer Faces.

-   The default implementation must support packaging resources in the web application root under the path `resources/<resourceIdentifier>` relative to the web app root.

-   Resources packaged in the classpath must reside under the JAR entry name `META-INF/resources/<resourceIdentifier>` 


The SAPUI5 resource handler extends this concept to support standard and test-relevant resources. The resources are therefore packaged into the following paths:

-   `resources/**` 

    Resources are all kind of JavaScript, CSS, Mimes, Resource Bundles, which are relevant for the runtime.

-    `test-resources/**` 

    Test resources are resources that are samples and only relevant for testing purposes, for example, the content of the SAPUI5 test suite.


The resource handler in SAPUI5 provides the following additional features:

-   Theme fallback:

    If resources aren’t available for a theme, the resource handler automatically checks the base theme for such resources and returns them instead of a 404 error message.

-   Resource bundle fallback:

    This fallback is similar to the client-side mechanism for loading resource bundles, but it negotiates the request on the server and returns the best found resource bundle instead of issuing a 404 error, for example:

    `messagebundle_en_US.properties > messagebundle_en.properties > messagebundle.properties` 




<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_A11484375D5A4FBBA47056785D2ECE32"/>

## Resource Servlet

For Java Servlet containers, SAPUI5 provides a `ResourceServlet` to manage the access to SAPUI5 resources within the web application and the various UI libraries in the classpath. The following snippet shows how to enable the resource servlet for SAPUI5:

```xml
  <!-- ============================================================ -->
  <!-- SAPUI5 resource servlet used to handle application resources -->
  <!-- ============================================================ -->
   

  <servlet>

    <display-name>ResourceServlet</display-name>

    <servlet-name>ResourceServlet</servlet-name>

    <servlet-class>com.sap.ui5.resource.ResourceServlet</servlet-class>

  </servlet>

  <servlet-mapping>

    <servlet-name>ResourceServlet</servlet-name>

    <url-pattern>/resources/*</url-pattern>

  </servlet-mapping>

  <servlet-mapping>

    <servlet-name>ResourceServlet</servlet-name>

    <url-pattern>/test-resources/*</url-pattern>

  </servlet-mapping>
```

Before you use it, make sure that the `ResourceServlet` is available in the classpath as JAR file.



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_2478D35EAEE94B4A990BA8F6D7C02F98"/>

## Configuration

The resource handler is configured via context parameters, which are defined in the `web.xml`. The following table gives an overview about configuration parameters:


<table>
<tr>
<th valign="top">

Key



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.USE_CACHE`



</td>
<td valign="top">

Flag for resource cache enabling; default: `true`



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.MAX_AGE`



</td>
<td valign="top">

Specifies the maximum age of resources in milliseconds; default: `604800000` = 1 week



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.ACCEPTED_ORIGINS`



</td>
<td valign="top">

List of accepted origins, for example `*`, `*mycompany.corp`, or `server.mycompany.corp`; default: empty



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.DEV_MODE`



</td>
<td valign="top">

Flag development mode enabling; default: `false`



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.TEMPLATE_PATH`



</td>
<td valign="top">

Specifies path to template for resource listing; default: `/templates/listing.html`



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.VERBOSE`



</td>
<td valign="top">

Specifies verbosity of the resource handler; default: `false`



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.REMOTE_LOCATION`



</td>
<td valign="top">

Specifies the location that is used to proxy requests to resources that aren’t available locally; default: empty



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.PREFER_REMOTE_LOCATION`



</td>
<td valign="top">

Flag to resolve the resource from the remote location before fallback to classpath; default: `false`



</td>
</tr>
<tr>
<td valign="top">

`com.sap.ui5.resource.USE_SERVER_CACHE`



</td>
<td valign="top">

Flag to enable caching of any resources in resource servlet; default: `true` \(default in dev mode: `false`



</td>
</tr>
</table>

Configuration parameters are added as context parameters to the web.xml.



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_4A80AABC6E614DBBB70B11702BE2FBBE"/>

## Development Mode

When you're starting to develop SAPUI5 controls and modules being located inside the servlet paths `resources/` or `test-resources/`, it makes the development process easier to disable the caching of such resources as well as to enable the resource browsing. To activate the development mode, add the following context parameter:

```xml
  <!-- BEGIN: DEV MODE -->
  <context-param>
    <param-name>com.sap.ui5.resource.DEV_MODE</param-name>
    <param-value>true</param-value>
  </context-param>
  <!-- END: DEV MODE -->
```



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_C8A8BF692B1C4DBE88D647F79CFD9F4F"/>

## Resource Browsing

If the development mode is active, you can browse resources via the resource browser:

-   `%SERVER_URL%!/resources/`
-   `%SERVER_URL%/test-resources/`



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_476438027C05487BBD11549BFA9580DC"/>

## Tunneling a Remote Location

You can use the `ResourceServlet` to tunnel/proxy requests to another server that provides SAPUI5 resources instead of referring to SAPUI5 from a remote location inside the bootstrap script tag and thus avoid cross domain issues. To activate the remote location tunneling/proxying, add the following context parameter to the web.xml of your application:

```xml
  <context-param>
    <param-name>com.sap.ui5.resource.REMOTE_LOCATION</param-name>
    <param-value>http://%server%:%port%/sapui5</param-value>
  </context-param>
```

This dispatches the requests from `resources/sap/m/Button.js` to `http://%server%:%port%/sapui5/resources/sap/m/Button.js`.

If you are located behind a proxy and the remote location is outside your localnetwork, you can configure the proxy settings via the standard Java Networking and Proxy configurations by setting the system properties \(for HTTP\): `http.proxyHost`, `http.proxyPort`, `http.nonProxyHosts`, or \(for HTTPS\) `https.proxyHost`, `https.proxyPort`, `https.nonProxyHosts` of your Java runtime environment.

In general, for the resources returned from the proxy the `ResourceServlet` is enabling caching. By default, it uses the configured `com.sap.ui5.resource.MAX_AGE` to avoid too much load on the `ResourceServlet`.

**Verify that a Resource was Retrieved from Remote Location**

When in development mode, it’s possible to verify that a resource was retrieved from the desired remote location by checking the response header of the respective request. In this case, the response header has an entry `x-sap-ResourceUrl = remote resource URL`, for example:

```
x-sap-ResourceUrl = http://%server%:%port%/sap/public/bc/ui5_ui5/resources/sap-ui-core.js
```



<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_265C4412784443DE8C2F6C3326954707"/>

## Resource Packaging

Resource packaging for web applications and Java modules can be any kind of JAR file, for example SAPUI5 UI library that is available in the classpath of the web application.

Store the resources as follows:

-   Web application:

    ```
    WebContent/
      resources/
        **/**
      test-resources/
        **/**
    ```

-   SAPUI5 UI libraries:

    ```
    META-INF/
      resources/
        **/**
      test-resources/
        **/**
    ```

    For custom JAR files, you need to apply to this on your own.




<a name="loio91f2b4d66f4d1014b6dd926db0e91070__section_EF657968B41745BCB39F62BB49AC7AFA"/>

## OSGi Servlet Container

When you run SAPUI5 as an OSGi web bundle and reference the UI libraries as OSGi bundles, you need to determine the SAPUI5 OSGi bundles:

-   Extend the `ResourceServlet` in the OSGi servlet container by using an OSGi fragment that is responsible to add the OSGi flavor for the determination of UI libraries. Now, the `ResourceServlet` is aware of the OSGi bundles and can search within the OSGi servlet container for UI libraries.

-   The `OSGiResourceServlet` uses the following entry in the `MANIFEST.MF` of the UI library's JAR files to determine the relevant UI libraries:

    ```
    x-sap-ui5-ContentTypes: UILibrary
    
    ```


-   **[SAPUI5 Library Location Used for Testing](sapui5-library-location-used-for-testing-61ee9ed.md "The location of the SAPUI5 library that is used for testing may differ depending on
		several parameters.")**  
The location of the SAPUI5 library that is used for testing may differ depending on several parameters.

