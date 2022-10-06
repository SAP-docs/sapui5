<!-- loio4ebecc2ac72d4340b8bf5ae8c2a5f161 -->

# Runtime Aspects

The BSP runtime is not used. Instead there's an SAPUI5-specific handler to that gets the resources from the SAPUI5 ABAP repository. This handler is assigned to the corresponding ICF nodes.



## Accessing Resources

In general, you access a resource in the SAPUI5 ABAP repository at runtime with the following URL:

`- <protocol>://<host name>:<port number>/sap/bc/ui5_ui5/<namespace>/<application name>/<resource name>`



## Launching SAPUI5 Apps on an ABAP Server

You launch an SAPUI5 app located in the SAPUI5 ABAP repository by using its public URL in a browser.

