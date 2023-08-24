<!-- loio21ea0ea94614480d9a910b2e93431291 -->

# Icon and Icon Pool

The `sap-icon://` protocol supports the use of icons in your application based on the icon font concept, which uses an embedded font instead of a pixel image.

Compared to image-based icons, icon font is easily scalable and you can change the color and apply various effects via CSS. SAPUI5 provides the `Icon` control in the `sap/ui/core/Icon` module and a set of predefined icons available in `IconPool` in the `sap/ui/core/IconPool` module.

> ### Note:  
> The icon font will not work if Web fonts are blocked for the user's operating system, for example, by the *Blocking Untrusted Fonts* feature in Microsoft Windows \(see [Block untrusted fonts in an enterprise](https://technet.microsoft.com/en-us/itpro/windows/keep-secure/block-untrusted-fonts-in-enterprise) in the Microsoft Windows IT Center\).

> ### Restriction:  
> In SAP Fiori app, you should not use icons with active state to trigger actions, use icon-only buttons \(`sap.m.button`\) instead.



## Using Custom Icons

To display your custom icons in all browsers that SAPUI5 supports, you need the `woff2` version of your icon file. To use your own icon font file in the `Icon` control, the font file and the metadata for the icons in the font file need to be registered in the `IconPool`. You can register both of them by calling the `IconPool.registerFont` with a config object which contains the following options:

-   `fontFamily`: Name of the font file without the font extension

-   `fontURI`: URI of the folder where the `woff2` file is included. You can use the `sap.ui.require.toUrl` function to resolve a folder path based on the resource path setting.

-   `collectionName` \(optional\): Collection name which can be used in the `sap-icon` URI to reference the icons. If this is not provided, the `fontFamily` is used as `collectionName`.

-   `metadata` \(optional\): Object that contains the mapping of the icon name to the icon's hex code, for example `{ "code1": "e011", "code2": "e012", "spike-arrest": "e013", "verify-api": "e014" }`

-   `metadataURI` \(optional\): URI of a JSON file that contains the mapping of the icon name to the icon's hex code for every icon in the icon file and the path configuration for theme-dependent icon fonts

-   `lazy` \(optional\): Metadata for the icons is not loaded until the first icon from the icon set is used


> ### Note:  
> If neither `metadata` nor `metadataURI` is provided, a request is sent to `fontURI`/`fontFamily`.json to load the metadata.

> ### Example:  
> The `sap.tnt` library provides an extra icon set. The `sap/tnt/themes/base/fonts` folder contains the `SAP-icons-TNT.woff2` font file as well as the `SAP-icons-TNT.json` JSON file, which contains the mapping of the icon name and the icon's hex code:
> 
> ```
> {
>     "technicalsystem": "e000",
>     "systemjava": "e001",
>     "systemabap": "e002",
>     "systemrecommendations": "e003",
>     "system": "e004",
>     "systemtrex": "e005",
>     "systemtracks": "e006",
>     "technicalinstance": "e008",
>     "technicalscenario": "e007",
>     "throughput-backlog": "e009",
>     ...
> }
> ```



### Theme-Dependent Icons

Since UI5 version 1.117, a `config` section can be defined, into which the path configuration for the theme-dependent icon designs \(e.g. Horizon theme\) can be written. The **key** defines a regluar expression that matches the theme name, and the **value** represents the font file location for the respective theme. If the `config` property is defined, the mapping of the icons' names and hex codes must be defined under an `icons` property as shown below.

Since UI5 version 1.117, the `SAP-icons-TNT.json` file contains the theme-dependent path configuration:

```
{
    "config": {
        "path": {
            "^sap_horizon.*": "sap/tnt/themes/base/fonts/horizon"
        }
    },
    "icons": {
        "technicalsystem": "e000",
        "systemjava": "e001",
        "systemabap": "e002",
        "systemrecommendations": "e003",
        "system": "e004",
        "systemtrex": "e005",
        "systemtracks": "e006",
        "technicalinstance": "e008",
        "technicalscenario": "e007",
        "throughput-backlog": "e009",
        ...
    }
}
```

The JSON file has the same name as the `woff2` file, so it is not necessary to set `metadataURI`. To register the icon in the `IconPool`, use the following code. Note that in the example the metadata is not loaded until one icon from this icon set is used because `lazy` is set to true.

```js
// "IconPool" required from module "sap/ui/core/IconPool"
IconPool.registerFont({
    collectionName: "tnt",
    fontFamily: "SAP-icons-TNT",
    fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts"),
    lazy: true
});
```



## Referencing Icons

To reference icons, you assign the icon URI to a control by setting `sURI` for the control's corresponding property. To get the icon URI, the following two options exist:

-   Call `IconPool.getIconURI` with the `iconName` property:

    ```js
    
    // "IconPool" required from module "sap/ui/core/IconPool"
    var sURI = IconPool.getIconURI("accidental-leave"); //please change the parameter to the name of your desired icon
    ```

-   If you know the collection name and the icon name, write the icon URI directly in the following format:

    ```
    sap-icon://[collection-name]/[icon-name]
    ```

    > ### Note:  
    > You need the collection name only for custom icons. The URI for predefined icons does **not** need the collection name.




## Using Icons in Controls

The following code snippet shows how the sap.m.Dialog control that already supported image URI has been adapted to also support icon URI. `IconPool.createControlByURI` returns an instance of `Icon` if `sURI` is an icon URI. Otherwise, the second parameter is called as a constructor method to create an instance. The `sURI` is set for the `src` property of the instance.

```js
    // "IconPool" required from module "sap/ui/core/IconPool"
    // "Image" required from module "sap/m/Image"
    // "Device" required from module "sap/ui/Device"
    Dialog.prototype.setIcon = function(sURI){
        this.setProperty("icon", sURI, true);
        if (!Device.os.ios){
           //icon is only shown in non iOS platform
           if (this._iconImage) {
               this._iconImage.setSrc(sURI);
           } else {
               this._iconImage = IconPool.createControlByURI({
                   src: sURI //src is mandatory
                   /* other properties can be put here, such as id, ...*/
               }, Image);
           }
       }
       return this;
    };

```

If the `img` tag is rendered directly in the control, and not by creating an image control, use the `writeIcon` method on `sap/ui/core/RenderManager`. The `writeIcon` method accepts a URI as the first parameter. Depending on this parameter, it renders either an `img` or a `span` tag. The classes and attributes defined in the second and third parameter are also added to the rendered tag.

Font face is inserted into the style sheet dynamically when `Icon` or `writeIcon` are used for the first time. If the special character needs to be written into the CSS to show the icon in a control, call the `IconPool.insertFontFaceStyle` function to insert the built in font face in your CSS. This is shown in the following code snippet:

```js

    // "IconPool" required from module "sap/ui/core/IconPool"
    IconPool.insertFontFaceStyle();
});
```



## Styling the Icon Control

If you render the icon span directly in your control, or use icon font in your CSS, you have the maximal freedom to style the Icon control.

If you use the icon by creating an instance of `Icon` within your control, however, use the CSS class `sapUiIcon` to add a new style to the icon. To avoid influencing the style of icons used elsewhere, wrap the icon CSS class with your control's root DOM class.



<a name="loio21ea0ea94614480d9a910b2e93431291__section_whp_y2l_mmb"/>

## Consuming SAP Icon Font in a Non-UI5 Environment

You can consume the predefined `SAP-icons` icon font also in an environment where UI5 isn't available. An integration could look like the following:

-   Load the font-face declaration for the UI5 icon font in your HTML page.
-   Find the icon that fits your need via the [SAPUI5 Icon Explorer](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons). Write down the unicode identifier of the icon. For example, the `laptop` icon has the hexadecimal unicode `xe027`.
-   Use a CSS class with the character escape of the icon's unicode identifier and assign it to a "span" element.

    ```html
    <html>
    	<head>
    		<link
    			rel="stylesheet"
    			type="text/css"
    			href="https://ui5.sap.com/resources/sap/ui/core/themes/base/SAP-icons.css"
    		>
    		<style>
    			.laptop::before {
    				font-family: SAP-icons;
    				content: "\e027";
    			}
    		</style>
    	</head>
    
    	<body>
    		<span class="laptop"></span>
    	</body>
    </html>
    ```


