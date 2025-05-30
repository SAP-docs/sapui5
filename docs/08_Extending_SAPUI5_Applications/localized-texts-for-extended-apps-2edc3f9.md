<!-- loio2edc3f99883e4a068f040d9e844f14fa -->

# Localized Texts for Extended Apps

You can add custom localized text files that contain additional texts or texts that overwrite the original texts to the `sap.ui.model.resource.ResourceModel` 

The enhanced resource model tries to resolve the localized texts from the custom resource bundle first. If a text does not exist there, it tries to look up the text in the resource bundle of the original app. Custom resource bundles cannot be added by standard extension configuration, but must be added as part of a controller extension as shown in the following example:

```js

var oModel = new sap.ui.model.resource.ResourceModel({bundleUrl:"./testdata/messages.properties"});
oModel.enhance({bundleUrl:"./testdata/messages_custom.properties"});
```



<a name="loio2edc3f99883e4a068f040d9e844f14fa__section_msz_3vg_yz"/>

## Specifics for Extended Apps in the ABAP Repository

For applications located in the ABAP back end, the resource model of the original application can be accessed by its relative path. If the code is not located at the root level of the application, adjust the path with an additional `../` at the beginning:

```js

var oModel = new sap.ui.model.resource.ResourceModel({bundleUrl:"../<original bsp application name>/i18n/i18n.properties"});
```

You can enhance this with an additional custom text properties file, which resides in the copied application:

```js

oModel.enhance({bundleUrl:"./other18n.properties"});
```

If an SAPUI5 application is extended or copied, the GUID in the SAPUI5 translation key in the copied properties file must be exchanged with a new one. Each properties file must contain a unique GUID. You can then upload the application with the new translation key in the text properties file to the ABAP back end by means of the team provider or the `/UI5/UI5_REPOSITORY_LOAD` upload report. To localize the custom texts in the copied application you can use transaction `se63`.

> ### Caution:  
> Although it is generally possible to copy SAPUI5 applications, copying and editing of applications in the SAPUI5 ABAP text repository must be avoided and we strongly recommend to only use the extension concepts.
> 
> If an application is copied, the texts stored in the SAPUI5 ABAP text repository of the original application are **not** copied and are, thus, not available in the copied SAPUI5 application. This also applies to applications using the extension concepts of SAPUI5.

