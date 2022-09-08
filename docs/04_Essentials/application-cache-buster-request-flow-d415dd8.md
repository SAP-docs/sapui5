<!-- loiod415dd8911a645759373dc1a70b93f3d -->

# Application Cache Buster: Request Flow

When using the application cache buster, a request order must be observed.

When using the Application Cache Buster mechanism, the first request must never be cached because it is being used to fetch the index file. The following list explains the flow:

1.  http://myserver/myapp/sap-ui-cachebuster-info.json ⇒ *NO\_CACHE* 
2.  http://myserver/myapp/~201106210204~/mvc/MyMVC.view.js ⇒ **CACHE** 
    -   http://myserver/myapp/mvc/MyMVC.view.js ⇒ *internally resolve to this URL* 


