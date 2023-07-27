<!-- loio28fa7538c67e4280a0b7708de2951278 -->

# Create a neo-app.json Project Configuration File

The `neo-app.json` file contains all project settings for SAP Web IDE and is created in the root folder of your project. It is a JSON format file consisting of multiple configuration keys. The most important setting for you to configure is the path where the SAPUI5 runtime is located when starting the app.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](app-development-using-sap-business-application-studio-6bbad66.md).



You do this using the “routes” key and defining an array of resource objects. For running an SAPUI5 tutorial, you only need two entries - one that configures SAPUI5 to be available with the path `/resources`, and another one that configures the test resources needed for the SAP Fiori launchpad integration with the path `/test-resources`.

Create two configuration objects that contain a `path`, a `target`, and a `description` attribute with more configuration settings. The `path` and the `entryPath` values will point to the location on the server where the SAPUI5 resources will be stored.

SAP Web IDE reads these settings automatically when running the app. You can see the whole configuration file in the code block below. Optionally, you can add the key `welcomeFile` to configure the entry point to your app. In web applications, this is typically the `index.html` file.

> ### Note:  
> Depending on which SAP Web IDE version you are using, you might have to configure the project to run against the "snapshot" version of SAPUI5, otherwise the application will be launched with the SAPUI5 release that is delivered with SAP Web IDE. This is usually the latest version that is released publicly to customers.
> 
> You can check which version of SAPUI5 is loaded by opening the SAPUI5 debugging tools with this [shortcut](../02_Read-Me-First/keyboard-shortcuts-for-sapui5-tools-154844c.md):
> 
>   [Ctrl\] + [Shift\] + [Alt\] / [Option\] + [P\] 
> 
> If the version is too old for certain features of the tutorial, you have to add the `version` attribute to the target configuration entry and set the value to `snapshot`.



## Procedure

1.  Select the *New File* icon and enter `neo-app.json` as the file name.
2.  Open the newly created file from the tree structure on the left side of the screen.
3.  Paste the following code in the `neo-app.json` and select *Save*:

    ```
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
        }
      ]
    }
    ```


Here's what the settings for the two resources mean:


<table>
<tr>
<td valign="top">

**Setting**



</td>
<td valign="top">

**Explanation**



</td>
</tr>
<tr>
<td valign="top">

`path`



</td>
<td valign="top">

Application path to be mapped



</td>
</tr>
<tr>
<td valign="top">

`type`



</td>
<td valign="top">

Type of resource



</td>
</tr>
<tr>
<td valign="top">

`name`



</td>
<td valign="top">

Name of the resource



</td>
</tr>
<tr>
<td valign="top">

`entyPath`



</td>
<td valign="top">

Path prepended to the request path



</td>
</tr>
</table>

For more information, see [Accessing SAPUI5 Resources](https://help.sap.com/viewer/ea72206b834e4ace9cd834feed6c0e09/Cloud/en-US/d18a9b0739264a4dbd0acbbc0232d614.html) in the SAP Business Technology Platform documentation.

