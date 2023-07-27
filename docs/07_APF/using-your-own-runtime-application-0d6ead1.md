<!-- loio0d6ead17f48b4ccab3ff53e7e8bcc173 -->

# Using Your Own Runtime Application

This section describes how to create an APF-based SAPUI5 application using your own runtime application.

You need your own runtime application if you can’t use the generic runtime application shipped with APF, for example, because you need more than one language or a footer toolbar, or because you want to implement extensions, such as your own start filters.

The following steps are required:

1.  Build content using the APF Configuration Modeler

    For more information, see [APF Configuration Modeler](apf-configuration-modeler-b57224b.md).

2.  Develop the Component.js file

    For more information, see [Consuming APF](consuming-apf-0109e67.md).

3.  Maintain the manifest.json file

    For more information, see [Descriptor \(manifest.json\)](descriptor-manifest-json-74038a5.md).

    In particular, you must maintain the following properties:


    <table>
    <tr>
    <th valign="top">

    Property


    
    </th>
    <th valign="top">

    Description


    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.app.i18n”` 


    
    </td>
    <td valign="top">
    
        The location of the text resource files. A text resource file contains the texts that the text keys used in the configuration refer to. When you export a configuration using the APF Configuration Modeler, a text file is also exported. More text files containing translations can be added in the same location.

    Enter the path of the text resource files relative to the web root of the component.


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.app.title”` 


    
    </td>
    <td valign="top">
    
        Enter “\{\{`AnalyticalConfigurationName`\}\}”. This refers to the text key included in the exported text properties file and defines the app name.


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.app.dataSources.AnalyticalConfigurationLocation“` 


    
    </td>
    <td valign="top">
    
        The location of the analytical configuration file, which is created when you export a configuration. Enter the path of the configuration file relative to the web root of the component.


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.app.dataSources.PathPersistenceServiceRoot“` 


    
    </td>
    <td valign="top">
    
        Enter the service root for the path persistence service. See [Descriptor \(manifest.json\)](descriptor-manifest-json-74038a5.md) for the correct values depending on the platform you use.


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.apf.activateFilterReduction”` 


    
    </td>
    <td valign="top">
    
        This property is relevant if you use CDS views that are executed on the Analytic Engine or BW OData queries. If this is the case, set it to true. If not, set it to false.


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.apf.activateLrep”` 


    
    </td>
    <td valign="top">
    
        If you use SAP S/4HANA, this property is mandatory and must be set to `true`. Otherwise set it to `false`.


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
         `“sap.ui5.dependencies”` 


    
    </td>
    <td valign="top">
    
        Enter your current SAPUI5 version.


    
    </td>
    </tr>
    </table>
    

