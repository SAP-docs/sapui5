<!-- loio4e593b44e78a431e8b21be6b3915fb55 -->

# Step 7: \(Optional\) Resource Bundles and Multiple Languages

The reason we have resource bundles is to allow an app to run in multiple languages without the need to change any code. To demonstrate this feature, we will create a German version of the app – in fact all we need to do is create a German version of the resource bundle file. In our code, the German locale needs to be activated for the ResourceModel.



## Preview

  
  
**The texts are now adapted for the German locale**

![The graphic has an explanatory text](images/Tutorial_Data_Binding_Step_7_d96cdf9.png "The texts are now adapted for the German locale")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 7](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.07).



<a name="loio4e593b44e78a431e8b21be6b3915fb55__section_stj_zdp_2mb"/>

## webapp/i18n/i18n\_de.properties \(New\)

In the `i18n` folder, make a copy of the file `i18n.properties` and call it <code>i18n<b>_de</b>.properties</code>. Change the English text to the German text shown below. The suffix `de` is the locale for German language. As the locale `de` is already set in the `supportedLocales` configuration of the `manifest.json`, it will be taken into account.

```ini
# Field labels
firstName=Vorname
lastName=Nachname
enabled=Aktiviert

# Screen titles
panelHeaderText=Data Binding Grundlagen
```

To test the outcome, append the `sap-language=DE` URL parameter to the URL in your browser, e.g. `http://localhost:port/index.html?sap-language=DE`. Once you remove this parameter, your app will be displayed in your browser's default language again.

**Related Information**  


[Localization](../04_Essentials/localization-91f217c.md "The framework concepts for text localization in SAPUI5 are aligned with the general concepts of the Java platform.")

