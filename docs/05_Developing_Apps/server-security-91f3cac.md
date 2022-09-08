<!-- loio91f3cac16f4d1014b6dd926db0e91070 -->

# Server Security

Server security comprises topics such as cross-origin resource sharing and resource handlers.

SAPUI5 contains only a small server-side part to support loading of resources by the client framework. The use of the resource handlers is not mandatory, SAPUI5 also offers a static version of the libraries, which can be used with an arbitrary HTTP server.



<a name="loio91f3cac16f4d1014b6dd926db0e91070__section_57D82410C1E94F18919EB276AB273998"/>

## Cross-Origin Resource Sharing

Usually the `XMLHttpRequest` for security reasons only allows accessing resources from the same domain as the originating document. As there are a lot of web-based services available today, starting with RSS or Atom feeds, WebServices or OData services, there is a need to be able to also access data sources from different domains within the browser, which was addressed with the CORS \(Cross-Origin Resource Sharing\) standard. This allows the server to set special headers on their responses, which are telling the `XMLHttpRequest` object, whether it is allowed to process the requested data or not.

This CORS capability also plays an important role in SAPUI5 based applications. In case the application itself and the data visualized are coming from different servers, the CORS header has to be configured correctly on the data providing server, to allow the application server domain to access the data.

SAPUI5 is using CORS header on its CDN based library to be able to load additional scripts, styles, and resources from the CDN server.

