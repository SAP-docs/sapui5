<!-- loio91f225ce6f4d1014b6dd926db0e91070 -->

# Resource Bundles

A resource bundle file is a Java properties file \(as described in the Javadoc of class `java.util.Properties`\). It contains key-value pairs where the values are the language-dependent texts and the keys are language-independent and used by the application to identify and access the corresponding values.

Resource bundles are a collection of `*.properties` files. All files are named with the same base name \(prefix identifying the resource bundle\), an optional suffix that identifies the language contained in each file, and the fixed `.properties` extension. The language suffixes are formed according to the older JDK locale syntax. By convention, a file without a language suffix should exist and contain the raw untranslated texts in the developer's language. This file is used if no more suitable language can be found.

When a localized text is needed, the application uses the SAPUI5 APIs to load the properties file that matches the current language best. The same applies to any other localized data that can be represented as a string, for example, a date formatter string. To retrieve a text from the properties file, the application uses the \(language-independent\) key. If no text can be found for this key, the next best matching file is loaded and checked for the text. Finally, if no file matches, the raw file is loaded and checked.

> ### Note:  
> JDK uses old language names for a few ISO639 codes \("iw" for "he", "ji" for "yi", and "no" for "nb"\).
> 
> If you wish a finer control over the mapping from the desired locale to the corresponding file name, you have several options:
> 
> -   Make use of [Supported Locales](supported-locales-and-fallback-chain-ec753bc.md) \(recommended\).
> 
> -   Convert newer codes to older ones before creating the file names.

> ### Example:  
> The resource bundle `myapp.i18n.messagebundle` consists of the following individual files:
> 
> -   `sap.ui.commons.messagebundle.properties`: Contains the raw texts from the developer, determines the set of keys
> -   `sap.ui.commons.messagebundle_en.properties`: Contains English texts \(without a specific country\)
> -   `sap.ui.commons.messagebundle_en_US.properties`: Contains texts in American English
> -   `sap.ui.commons.messagebundle_en_UK.properties`: Contains texts in British English
> -   `sap.ui.commons.messagebundle_de.properties`: Contains texts in German

To enable proper translation, you classify the texts with additional information, at least with the text type. Place the additional information in the line directly above the text element, beginning with the number sign \(\#\). For more information, see [Text Classification](../05_Developing_Apps/text-classification-582ce93.md).

A `properties` file can, for example, look like this

```ini
# SAPUI5 TRANSLATION-KEY <GUID>
#XMSG: A message to greet the world
helloWorld=Hello World
#XBUT,10: Save button text
buttonSave=Save
#XFLD,30: Greetings displayed in the upper right corner of the screen
welcome=Welcome {0}

```

> ### Note:  
> To consume a properties files using a resource bundle, you can use the following snippet:
> 
> ```js
> // "ResourceBundle" required from module "sap/base/i18n/ResourceBundle"
> // load the resource bundle
> ResourceBundle.create({
> 	url : "myapp/i18n/messagebundle.properties",
> 	supportedLocales: ["en_US", "en_GB", "en", "de", ""],
> 	fallbackLocale: "en",
> 	async: true
> }).then(function(oBundle){
>    oBundle.getText("buttonSave");
>    oBundle.getText("welcome", ["Administrator"]);
> });
> ```

> ### Note:  
> If you are using SAPUI5 in SAP HANA, resource bundles files must have the extension `*.hdbtextbundle` instead of `*.properties`.
> 
> To load this bundle, you add the following code to the `createContent` function of your view:
> 
> ```js
> // "ResourceBundle" required from module "sap/base/i18n/ResourceBundle"
> // load the resource bundle
> ResourceBundle.create({
> // specify url of the .hdbtextbundle
> 	url : "myapp/i18n/messagebundle.hdbtextbundle";
> 	async: true
> }).then(function(oBundle){
> 	oBundle.getText("buttonSave");
> 	oBundle.getText("welcome", ["Administrator"]);
> });
> ```

**Related Information**  


[Resource Model](resource-model-91f122a.md#loio91f122a36f4d1014b6dd926db0e91070 "The resource model is used as a wrapper for resource bundles. In data binding you use the resource model instance, for example, to bind texts of a control to language-dependent resource bundle properties.")

[API Reference: `sap.ui.model.resource.ResourceModel`](https://ui5.sap.com/#/api/sap.ui.model.resource.ResourceModel)

