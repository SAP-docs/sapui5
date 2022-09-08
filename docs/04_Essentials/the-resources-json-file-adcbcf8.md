<!-- loioadcbcf8b50924556ab3f321fcd9353ea -->

# The `resources.json` File

The `resources.json` file lists all resources in a component or library folder. It resides next to each `manifest.json` in the generated results.

The file is generated during build time, and its main purpose is for mobile packaging, as `resources.json` mentions all files inside the application.

If an app has a `resources.json` file, it is mentioned in the `manifest.json` under `sap.app/resources`.

> ### Note:  
> This file is used by SAP Tools like the SAP Fiori Client Packager. It will be generated automatically when using SAP Web IDE.

The list of resources is stored in an array in the `resources` property of the top level JSON object. The top level object can also contain the `_version` property, which can be omitted if the value is `1.0.0`. For each resource, the following entries are possible:


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Mandatory



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `name` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

The relative path of the resource as accessible in a server. The path is relative to the location of the `resources.json` file, for example `Component.js`.



</td>
</tr>
<tr>
<td valign="top">

 `size` 



</td>
<td valign="top">

 `number` 



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

The size in bytes of the resource.



</td>
</tr>
<tr>
<td valign="top">

 `condRequired` 



</td>
<td valign="top">

 `string[]` 



</td>
<td valign="top">

 



</td>
<td valign="top">

A list of conditional dependencies of this resource. These dependencies can be required during execution of this resource.



</td>
</tr>
<tr>
<td valign="top">

 `designtime` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

 



</td>
<td valign="top">

When set to `true`, the resource is considered a designtime resource. The SAPUI5 build derives the flag from the naming convention \(could be `/designtime/`, `.designtime.js`, `.control`, `.interface`, `.type`, `.less`, `library.templates.xml`, `library.dependencies.xml`, or `library.dependencies.json`\).



</td>
</tr>
<tr>
<td valign="top">

 `dynRequired` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

 



</td>
<td valign="top">

When set to `true`, the resource has dynamic dependencies. The name of this dependency could not be resolved during build time.



</td>
</tr>
<tr>
<td valign="top">

 `exposedGlobalNames` 



</td>
<td valign="top">

 `string[]` 



</td>
<td valign="top">

 



</td>
<td valign="top">

A list of variables which are exposed to the global JS scope.



</td>
</tr>
<tr>
<td valign="top">

 `format` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 



</td>
<td valign="top">

Defines the format of this resource; `raw` means that it is not a UI5 module.



</td>
</tr>
<tr>
<td valign="top">

 `included` 



</td>
<td valign="top">

 `string[]` 



</td>
<td valign="top">

 



</td>
<td valign="top">

List of sub-modules which are included in this resource, e.g. the `Component-preload.js` typically has the `included` property.



</td>
</tr>
<tr>
<td valign="top">

 `isDebug` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

 



</td>
<td valign="top">

When set to `true`, the resource is a debug source, the SAPUI5 build derives the flag from the naming convention \(`-dbg(.controller .view .fragment).js`\).



</td>
</tr>
<tr>
<td valign="top">

 `locale` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 



</td>
<td valign="top">

Locale of the resource for known i18n resources; the SAPUI5 build derives the locale from the naming convention \(`*_[locale].properties`\).



</td>
</tr>
<tr>
<td valign="top">

 `merged` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 



</td>
<td valign="top">

Indicates whether the resource is a merged resource. By default, the SAPUI5 build determines this from naming conventions \(`library-preload.json`, `library-all.js`, `Component-preload.js`\), but it also allows to add more merged files by manual configuration of the build step. SAP Web IDE may use other knowledge for this; it knows, for example, that it merges the`Component-preload.js`.



</td>
</tr>
<tr>
<td valign="top">

 `module` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 



</td>
<td valign="top">

The name of the UI5 module, including the file extension.



</td>
</tr>
<tr>
<td valign="top">

 `raw` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 



</td>
<td valign="top">

The name of the corresponding resource in the raw \(developer\) language for known i18n resources; for example, for`messagebundle.en.properties`, the corresponding raw file is `messagebundle.properties`.



</td>
</tr>
<tr>
<td valign="top">

 `required` 



</td>
<td valign="top">

 `string[]` 



</td>
<td valign="top">

 



</td>
<td valign="top">

A list of dependencies of this resource. These dependencies are required prior to using this resource.



</td>
</tr>
<tr>
<td valign="top">

 `support` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

 



</td>
<td valign="top">

When set to `true`, the resource is considered a ssupport assistant resource.

The SAPUI5 build derives this flag from the naming convention `.support.js`.



</td>
</tr>
<tr>
<td valign="top">

 `theme` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 



</td>
<td valign="top">

Indicates a theme-dependent resource.

The SAPUI5 build determines this from the naming convention `**themes/<theme>/**`



</td>
</tr>
</table>



```js

{
    "resources": [
        {
            "name": ".library",
            "size": 473
        },
        {
            "name": ".theming",
            "size": 368
        },
        },
        {
            "name": "Component-preload.js",
            "module": "application/mine/Component-preload.js",
            "size": 361,
            "merged": true,
            "included": [
                "application/mine/Component.js",
                "application/mine/TodoComponent.js"
            ],
            "dynRequired": true,
            "condRequired": [
                "sap/m/MessageBox.js"
            ],
            "required": [
                "sap/base/Log.js"
            ]
        },
        {
            "name": "DynamicSideContent-dbg.js",
            "module": "application/mine/DynamicSideContent.js",
            "isDebug":true,
            "size": 115
        },
        {
            "name": "DynamicSideContent.js",
            "module": "application/mine/DynamicSideContent.js",
            "size": 78
        },
        {
            "name": "DynamicSideContentRenderer-dbg.js",
            "module": "application/mine/DynamicSideContentRenderer.js",
            "isDebug":true,
            "size": 110,
            "required": [
                "sap/ui/core/UIComponent.js"
            ]
        },
 
        ...
 
        {
            "name": "library-preload.json",
            "module": "application/mine/library-preload.json",
            "merged":true,
            "size": 294
        },

        ...

        {
            "name": "designtime/library.designtime.js",
            "module": "application/mine/designtime/library.designtime.js",
            "size": 84,
            "designtime": true
        },
 
        ...
 
        {
            "name": "messagebundle_de.properties",
            "module": "application/mine/i18n/messagebundle_de.properties",
            "raw":"messagebundle.properties",
            "locale":"de",
            "size": 163,
        },
 
        ...
 
        {
            "name": "themes/sap_belize/library.less",
            "theme":"sap_belize",
            "size": 311,
            "designtime": true
        }
 
        ...
        {
            "name": "plugin/LessSupport-dbg.js",
            "module": "sap/ui/core/plugin/LessSupport.js",
            "condRequired": [
                "sap/ui/core/theming/Parameters.js",
                "sap/ui/thirdparty/less.js"
            ],
            "exposedGlobalNames": ["globalLess"],
            "dynRequired": true,
            "format": "raw",
            "isDebug": true,
            "size": 18494
        }

        ...

        {
            "name": "resources.json",
            "dynRequired": true,
            "size": 1000000
        }
    ]
}
```

