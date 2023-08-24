<!-- loioe282db2865e94f69972c407469b801e9 -->

# Migrating from Component Metadata to Descriptor

Overview, how the component metadata are mapped to the descriptor.

For compatibility reasons, the mapping to the `manifest.json` file is done automatically. If a metadata property has been defined, it can also be consumed via the corresponding property of the `manifest.json` file. For a detailed step-by-step guide, see [Creating a Descriptor File for Existing Apps](creating-a-descriptor-file-for-existing-apps-3a9baba.md).

> ### Note:  
> To benefit from the performance improvements that can be achieved by using “manifest first”, we recommend to migrate the component metadata to the descriptor \(`manifest.json`\). For more information about manifest first, see the *Manifest First Function* section in [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).

**Mapping Table**


<table>
<tr>
<th valign="top">

Metadata



</th>
<th valign="top">

Descriptor



</th>
<th valign="top">

Comment



</th>
</tr>
<tr>
<td valign="top">

Component namespace



</td>
<td valign="top">

`sap.app/id` 



</td>
<td valign="top">

\-



</td>
</tr>
<tr>
<td valign="top">

`version` 



</td>
<td valign="top">

`sap.app/applicationVersion/version` 



</td>
<td valign="top">

\-



</td>
</tr>
<tr>
<td valign="top">

`config` 



</td>
<td valign="top">

`sap.ui5/config` 



</td>
<td valign="top">

\-



</td>
</tr>
<tr>
<td valign="top">

`dependencies` 



</td>
<td valign="top">

`sap.ui5/dependencies` 



</td>
<td valign="top">

Different format, see *Dependencies* section below



</td>
</tr>
<tr>
<td valign="top">

`customizing` 



</td>
<td valign="top">

`sap.ui5/extends/extensions` 



</td>
<td valign="top">

\-



</td>
</tr>
<tr>
<td valign="top">

`handleValidation` 



</td>
<td valign="top">

`sap.ui5/handleValidation` 



</td>
<td valign="top">

\-



</td>
</tr>
<tr>
<td valign="top">

`includes` 



</td>
<td valign="top">

`sap.ui5/resources` 



</td>
<td valign="top">

Different format, see *Resources* section below



</td>
</tr>
<tr>
<td valign="top">

`rootView` 



</td>
<td valign="top">

`sap.ui5/rootView` 



</td>
<td valign="top">

\-



</td>
</tr>
<tr>
<td valign="top">

`routing` 



</td>
<td valign="top">

`sap.ui5/routing` 



</td>
<td valign="top">

\-



</td>
</tr>
</table>



## Dependencies

Libraries and components are objects and not arrays. For the descriptor part, we use `minUI5Version` instead of `ui5version`.

**Metadata** 

```js

"dependencies": {
    "ui5version": "1.30.0",
    "libs": [
        "sap.m",
        "sap.ui.unified"
    ],
    "components": [ "sap.app.otherComponent" ]
}
```

**Descriptor**

```js

"dependencies": {
    "minUI5Version": "1.30.0",
    "libs": {
        "sap.m": {},
        "sap.ui.unified": {}
    },
    "components": {
        "sap.app.otherComponent": {}
    }
}
```



## Resources

Includes are renamed to resources and are objects and not an array.

**Metadata**

```js

"includes": ["script.js", "style.css"]
```

**Descriptor**

> ### Note:  
> Since 1.94 the usage of `js` resources is deprecated. Please use regular `dependencies` instead.

```js

"resources": {
    "js": [ //deprecated since 1.94
        {
            "uri": "script.js"
        }
    ],
    "css": [
        {
            "uri": "style.css"
        }
    ]
}
```

