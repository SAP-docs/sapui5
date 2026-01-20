<!-- loio3a16c7a2f1e944deb000db49e5ece6be -->

# Create a Northwind Destination

Configure a destination in the SAP BTP Cockpit in order to bypass the same-origin policy of the browser.

> ### Caution:  
> SAP Web IDE is no longer available from SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](app-development-using-sap-business-application-studio-6bbad66.md).



To be able to test your app, you can use a remote OData service that provides product data from the Northwind demo service of the OData group.

To do this, follow the steps described here: [Create a Destination in the SAP BTP Cockpit](https://developers.sap.com/tutorials/cp-cf-create-destination.html)



<a name="loio3a16c7a2f1e944deb000db49e5ece6be__section_ill_4vz_ghb"/>

## neo-app.json

With this configuration you can use the destination for any app inside SAP Web IDE. Whenever an app calls a \(local\) service beginning with `/destinations/northwind/*`, the created destination becomes active as a simple proxy. This helps to prevent any possible issues related to the same-origin policy of browsers. For this, you need to add another route to the `neo-app.json`:

```json
{
  "welcomeFile": "index.html",
  "routes": [
    {
      
      "path": "/resources",
      "target": {
        "type": "service",
        "name": "sapui5",
        "version": "snapshot",
        "entryPath": "/resources"
      },
      "description": "SAPUI5 Resources"
    },
    {
      "path": "/test-resources",
      "target": {
        "type": "service",
        "name": "sapui5",
        "entryPath": "/test-resources"
      },
      "description": "SAPUI5 Test Resources"
    },
    {
      "path": "/destinations/northwind",
      "target": {
        "type": "destination",
        "name": "northwind"
      },
      "description": "Northwind OData Service"
    }
  ]
}
```



<a name="loio3a16c7a2f1e944deb000db49e5ece6be__section_t5m_fwz_ghb"/>

## webapp/manifest.json

In the app descriptor, the service URL is then defined relative to the destination path specified above:

```json
...
"sap.app": {
 "dataSources": {
   "": {
     "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/",
     "type": "OData",
     "settings": {
       "odataVersion": "2.0"
     }
   }
 }
}
...
```

