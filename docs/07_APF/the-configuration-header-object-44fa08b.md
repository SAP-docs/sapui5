<!-- loio44fa08b1bee34a9f883e5f4e768d428d -->

# The Configuration Header Object

The configuration header holds administrative data of the analytical configuration. It is an optional part of the configuration, but it is automatically created when you export a configuration using the APF Configuration Modeler. If you manually create your own analytical configuration file, you don’t have to add a configuration header.

The configuration header has the following format:

```
"configHeader": {
    "Application": "<32-digit GUID>",
    "ApplicationName": "<application description>",
    "SemanticObject": "<semantic object name>",
    "AnalyticalConfiguration": "<32-digit GUID>",
    "AnalyticalConfigurationName": "<configuration title>",
    "UI5Version": "<your SAPUI5 version, for example, 1.38.1-SNAPSHOT>",
    "CreationUTCDateTime": "/Date(1415784024931)/",
    "LastChangeUTCDateTime": "/Date(1415815299519)/"
}
```

