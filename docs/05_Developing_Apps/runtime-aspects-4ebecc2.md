<!-- loio4ebecc2ac72d4340b8bf5ae8c2a5f161 -->

# Runtime Aspects

The BSP runtime is not used. Instead there's an SAPUI5-specific handler to that gets the resources from the SAPUI5 ABAP repository. This handler is assigned to the corresponding ICF nodes.



## Accessing Resources

In general, you access a resource in the SAPUI5 ABAP repository at runtime with the following URL:

`- <protocol>://<host name>:<port number>/sap/bc/ui5_ui5/<namespace>/<application name>/<resource name>`



## Launching SAPUI5 Apps on an ABAP Server

You launch an SAPUI5 app located in the SAPUI5 ABAP repository by using its public URL in a browser.

-   **[Cache Behavior for Application Resources](cache-behavior-for-application-resources-5449990.md "By default, the application files are stored in the browser cache for one year to speed
		up the performance of an SAPUI5
		app in a productive environment. To get the latest changes, you need to force your SAPUI5 start page to refresh, for
		example, with 
			CTRL
			F5
		 on Windows systems. (If the refresh doesn't work, clear your browser
		cache.)")**  
By default, the application files are stored in the browser cache for one year to speed up the performance of an SAPUI5 app in a productive environment. To get the latest changes, you need to force your SAPUI5 start page to refresh, for example, with  [CTRL\] + [F5\]  on Windows systems. \(If the refresh doesn't work, clear your browser cache.\)
-   **[Cache Buster for SAPUI5 Application Resources](cache-buster-for-sapui5-application-resources-4cfe7ef.md "To avoid the need for end users to clean up the browser cache after a software update
		on the server, you can activate the cache buster for the following:")**  
To avoid the need for end users to clean up the browser cache after a software update on the server, you can activate the cache buster for the following:

