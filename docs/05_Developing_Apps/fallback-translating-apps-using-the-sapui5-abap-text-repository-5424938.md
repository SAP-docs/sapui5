<!-- loio5424938fc60244c5b708d71b50a0eee4 -->

# Fallback: Translating Apps Using the SAPUI5 ABAP Text Repository

As a fallback mechanism for translating apps, you can use the SAPUI5 ABAP text repository for storing the target texts.



## What's the recommended translation approach?

The recommended translation approach is to store your target texts in properties files \(resource bundles\), a `<identifier>_<locale>.properties` file for every language the app is translated to \(<locale\> containing the language and an optional country code\). For example, `i18n_en_US.properties` would contain the American English texts of the `i18n.properties` source file. For more information, see [Resource Bundles](../04_Essentials/resource-bundles-91f225c.md).



## When can I use the SAPUI5 ABAP text repository?

You can use the SAPUI5 ABAP text repository as a fallback if you cannot use the recommended approach and want to use ABAP-based translation tools. You cannot use the SAPUI5 ABAP text repository in either SAP S/4HANA Cloud Public Edition or the SAP BTP ABAP environment.



## What's the fallback all about?

When you use the SAPUI5 ABAP text repository, the source texts are stored in the default properties file `<identifier>.properties` \(that is, there are not *n* properties files as with the recommended approach\). The SAPUI5 ABAP text repository writes the texts that are stored in the default properties file to a language-dependent database table. As usual, the texts can then be translated using transaction `SE63` \(optionally in a separate system\). The original language of the SAPUI5 ABAP repository is taken as the source language for the submitted texts. Once the translated texts are transported back to the respective systems, they can be accessed at runtime when texts in a certain language are requested.

> ### Note:  
> This documentation version describes anew version of theSAPUI5 ABAP text repository which is available as of ABAP Platform 2025 \(i.e. SAPUI5 1.136\). A previous version of it has been deprecated. For the previous documentation, change the documentation to an earlier version. SAPUI5 repository team provider and create the BSP application manually, you have to choose the correct language on the logon screen.



## What do I have to do to use the SAPUI5 ABAP text repository?

You need to set up the default properties file by adding the following kex as the first line in the properties file with texts that you submit to the SAPUI5 ABAP repository:

`# ABAP_TRANSLATION`

The properties file has to fulfill the following rules:

-   It doesn't contain any duplicate text elements.
-   The text must be on one line.
-   A text type is assigned to every text element.

> ### Caution:  
> Do not rename or relocate a properties file after it has been deployed and translated. Otherwise the translation would be lost.

> ### Note:  
> Since the original language of the SAPUI5 ABAP repository serves as the source language of the texts, it's important that you use the same language for the creation of the repository that was used for the properties files. Ensure that the correct language is set for your ABAP user when you deploy the app the first time which will create the SAPUI5 ABAP repository.

**Related Information**  


[Resource Bundles](../04_Essentials/resource-bundles-91f225c.md "A resource bundle file is a Java properties file (as described in the Javadoc of class java.util.Properties). It contains key-value pairs where the values are the language-dependent texts and the keys are language-independent and used by the application to identify and access the corresponding values.")

