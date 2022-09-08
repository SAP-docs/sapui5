<!-- loioff7aceda0bd24039beb9bca8e882825d -->

# Application Cache Buster

The application cache buster \(short `AppCacheBuster`\) is similar to the cache buster but is used for application resources.

> ### Note:  
> SAPUI5 supports the application cache buster on SAP NetWeaver AS for ABAP only.
> 
> For Java apps on SAP NetWeaver AS for Java and SAP HANA XS the application cache buster concept is **not** supported.

Applications provide an index file named `sap-ui-cachebuster-info.json` \(created on the fly\) containing the last modified timestamps of all included files \(like scripts, properties, or any other file that we load via XHR programmatically\). Technically this file is a mapping between the request path \(below the context path of the application\) and the last modified time stamp.

The server instructs the client to cache all the above resources \(not using the 304/not modified mechanism\). For the index file we are using the 304/not modified mechanism to avoid to load when it has not been changed.

On the client side, we initially load this file of the application when enabled via configuration option `sap-ui-appcachebuster` and use this for the XHR requests. If the request path is contained in the above mentioned index file we simply add the time stamp as leading path segment to this request. If the time stamp doesn’t change the URL is unique and therefore it will be taken from cache. Once the file is modified the URL parameter will be changed and therefore loaded again from the back end.

The server has to delete the time stamp from this URL to look up the file properly. For SAP NetWeaver AS for ABAP, the logic is implemented in the ICF handler. Both back end implementations, SAP NetWeaver AS for Java and SAP NetWeaver AS for ABAP, also generate the index file on-the-fly.

> ### Note:  
> The application cache buster does **not** work across application borders. If you require resources from another application they are not loaded via this mechanism.

-   **[Application Cache Buster: Index File](application-cache-buster-index-file-fef5340.md "The index file includes all files that should use the cache buster.")**  
The index file includes all files that should use the cache buster.
-   **[Application Cache Buster: Configuration](application-cache-buster-configuration-c1c3e2f.md "The configuration data-sap-ui-appCacheBuster=&quot;./&quot; must be added to
		the bootstrap script of the application page.")**  
The configuration `data-sap-ui-appCacheBuster="./"` must be added to the bootstrap script of the application page.
-   **[Application Cache Buster: Request Flow](application-cache-buster-request-flow-d415dd8.md "When using the application cache buster, a request order must be observed.")**  
When using the application cache buster, a request order must be observed.
-   **[Application Cache Buster: Enhanced Concept](application-cache-buster-enhanced-concept-94e0c33.md "The enhanced concept for application cache buster takes care about most of the URLs in a
		general way.")**  
The enhanced concept for application cache buster takes care about most of the URLs in a general way.

