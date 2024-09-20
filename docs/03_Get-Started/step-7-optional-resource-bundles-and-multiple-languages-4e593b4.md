<!-- loio4e593b44e78a431e8b21be6b3915fb55 -->

# Step 7: \(Optional\) Resource Bundles and Multiple Languages

Resource bundles exist to enable an app to run in multiple languages without the need to change any code. To demonstrate this feature, let's create a German version of the app – in fact, all we need to do is create a German version of the resource bundle file. In our code, we activate the German locale for the ResourceModel.



## Preview

  
  
**The texts are now adapted for the German locale**

![The graphic has an explanatory text](images/Tutorial_Data_Binding_Step_7_d96cdf9.png "The texts are now adapted for the German locale")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 7](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.07).



<a name="loio4e593b44e78a431e8b21be6b3915fb55__section_stj_zdp_2mb"/>

## webapp/i18n/i18n\_de.properties \(New\)

In the `i18n` folder, duplicate the `i18n.properties` file and rename its copy to <code>i18n<b>_de</b>.properties</code>. Replace the English text with the German text provided below. The suffix `de` represents the locale for the German language. Since the `de` locale is already set in the `supportedLocales` configuration of the `manifest.json`, it will be taken into account.

```ini
# Field labels
firstName=Vorname
lastName=Nachname
enabled=Aktiviert

# Screen titles
panelHeaderText=Data Binding Grundlagen
```

To check the result, append the `sap-language=DE` URL parameter to the URL in your browser, for example `http://localhost:port/index.html?sap-language=DE`. Once you remove this parameter, your app reverts to your browser's default language.

**Related Information**  


[Localization](../04_Essentials/localization-91f217c.md "The framework concepts for text localization in SAPUI5 are aligned with the general concepts of the Java platform.")

