<!-- loioc9da7d53b5c19456e10000000a423f68 -->

# Application Configuration in SAPUI5 1.28 and Prior Releases

> ### Note:  
> As of SAPUI5 1.30, the application configuration file has been replaced with the `manifest.json` file. If you build your app based on SAPUI5 1.30 or higher, you can skip this section. For information about the `manifest.json` file, see [Descriptor \(manifest.json\)](descriptor-manifest-json-74038a5.md)

The application configuration file defines static information about the application, such as the name of the application or the location of various files. It is written in JavaScript Object Notation \(JSON\) format.

In addition to the properties described below, you can define further properties as required using method `getApplicationConfigurationProperties`. For example, you can define default values for fields on the UI.

> ### Note:  
> If you create an APF-based application using the generic APF runtime application, you can omit this step, because the application configuration is already contained in it. However, if you create your own BSP application, you must also create an application configuration file.

> ### Note:  
> Customer modifications may conflict with the SAP namespace and can be overwritten when updates are imported.

The application configuration file has the following format:

```

{
    "applicationConfiguration" : {
        "type" : "applicationConfiguration",
        "appName" : "<key>",
        "appTitle" : "<key> | <text>",
        "analyticalConfigurationLocation" : "<applicationPath>/config/configuration.json",
        "applicationMessageDefinitionLocation" : "<applicationPath>/config/applicationMessageDefinition.json",
        "textResourceLocations" : {
            "applicationMessageTextBundle" : "<applicationPath>/i18n/applicationMessages.properties",
            "applicationUiTextBundle" : "<applicationPath>/i18n/applicationUi.properties"
        },
        "persistence" : {
            "path" : {    
                "service" : "<service root>",
                "entitySet" : "<entity set name>"
            },
            "logicalSystem" : {    
                "service" : null         
            }
        }
        "smartBusiness" : {
            "runtime" : {
                "service" : "/sap/hba/r/sb/core/odata/runtime/SMART_BUSINESS.xsodata",
            }
        }
    }
}
```

> ### Note:  
> <code><i class="varname">&lt;applicationPath&gt;</i></code> denotes the location of the Web application on the Web server.

The properties used in the application configuration file denote the following:


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

`appName` 



</td>
<td valign="top">

The name of the application is displayed in the header of the application. It is retrieved from a translatable text property using a text key. Therefore, the value of the property `appName` must be a text key.



</td>
</tr>
<tr>
<td valign="top">

`appTitle` 



</td>
<td valign="top">

The title is displayed in the title bar of the Web browser. It is optional and can be used to overwrite the <code><i class="varname">&lt;title&gt;</i></code> tag of the index.html file. The property `appTitle` can be a text key, but it can also be text that is not translated.



</td>
</tr>
<tr>
<td valign="top">

`analyticalConfigurationLocation` 



</td>
<td valign="top">

The location of analytical configuration file for APF; for more information, see [Analytical Configuration](analytical-configuration-5a467c5.md).



</td>
</tr>
<tr>
<td valign="top">

`applicationMessageDefinitionLocation` 



</td>
<td valign="top">

The location of the message definition file for the application. If the application uses the `MessageHandling` component of APF, this definition is used to retrieve further information for message handling, such as a text.



</td>
</tr>
<tr>
<td valign="top">

`textResourceLocations` 



</td>
<td valign="top">

The location of the text resource files. Text resource files contain the texts that the text keys used in the code and the message definition files refer to.

Text resource files can be of type `*.hdbtextbundle` or `*.properties` and contain UI texts and message texts that can be translated.

At runtime, a text key is resolved by checking all specified resource files in turn.



</td>
</tr>
<tr>
<td valign="top">

`persistence` 



</td>
<td valign="top">

Contains two properties:

-   `path`

    Specifies the service to create, read, update, and delete analysis paths on the persistence layer. The property `service` defines the service document.

-   `logicalSystem`

    Specifies the service to determine the logical system.

    In most cases, you can set the service to ***null***.




</td>
</tr>
<tr>
<td valign="top">

 `smartBusiness` 



</td>
<td valign="top">

The Smart Business runtime service, which is used to fetch information related to Smart Business filters using the evaluation ID.



</td>
</tr>
</table>

