<!-- loio91f217c46f4d1014b6dd926db0e91070 -->

# Localization

The framework concepts for text localization in SAPUI5 are aligned with the general concepts of the Java platform.

> ### Note:  
> When connected to an SAP NetWeaver Application Server \(ABAP\), you can use the SAPUI5 repository to trigger the translation process on the ABAP server. For more information, see: [Fallback: Translating Apps Using the SAPUI5 Text Repository](../05_Developing_Apps/fallback-translating-apps-using-the-sapui5-text-repository-5424938.md) 

-   **[Identifying the Language Code / Locale](identifying-the-language-code-locale-91f21f1.md "For the identification of languages, the framework uses a language code of type
			string.")**  
For the identification of languages, the framework uses a language code of type `string`.
-   **[Resource Bundles](resource-bundles-91f225c.md "A resource bundle file is a Java properties file (as described in the Javadoc of
		class java.util.Properties). It contains key-value pairs where the values
		are the language-dependent texts and the keys are language-independent and used by the
		application to identify and access the corresponding values.")**  
A resource bundle file is a Java properties file \(as described in the Javadoc of class `java.util.Properties`\). It contains key-value pairs where the values are the language-dependent texts and the keys are language-independent and used by the application to identify and access the corresponding values.
-   **[Supported Locales and Fallback Chain](supported-locales-and-fallback-chain-ec753bc.md "You can configure a list of supported locales and a fallback locale in your app’s manifest to control the loading of resource bundles and
		avoid ‘404 Not Found’ network responses. ")**  
You can configure a list of supported locales and a fallback locale in your app’s manifest to control the loading of resource bundles and avoid ‘404 Not Found’ network responses.
-   **[Use of Localized Texts in Applications](use-of-localized-texts-in-applications-91f3859.md "SAPUI5 provides two
		options to use localized texts in applications: The
			sap/base/i18n/ResourceBundle module and data binding.")**  
SAPUI5 provides two options to use localized texts in applications: The `sap/base/i18n/ResourceBundle` module and data binding.
-   **[Terminologies](terminologies-eba8d25.md "By defining terminologies together with additional resource bundles, an application can easily be switched from one scenario or industry
		to another. ")**  
By defining terminologies together with additional resource bundles, an application can easily be switched from one scenario or industry to another.

