<!-- loio5424938fc60244c5b708d71b50a0eee4 -->

# Fallback: Translating Apps Using the SAPUI5 Text Repository

As a fallback mechanism for translating apps, you can use the SAPUI5 text repository for storing the target texts.



## What's the recommended translation approach?

The recommended translation approach is to store your target texts in properties files \(resource bundles\), a `<identifier>_<locale>.properties` file for every language the app is translated to \(<locale\> containing the language and an optional country code\). For example, `i18n_en_US.properties` would contain the American English texts of the `i18n.properties` source file. For more information, see [Resource Bundles](../04_Essentials/resource-bundles-91f225c.md).



## When can I use the SAPUI5 text repository?

You can use the SAPUI5 text repository as a fallback if you cannot use the recommended approach. Please only use it in this case.



## What's the fallback all about?

When you use the SAPUI5 text repository, the source texts are stored in the default properties file `<identifier>.properties` \(that is, there are not *n* properties files as with the recommended approach\). The SAPUI5 text repository writes the texts that are stored in the default properties file to a language-dependent database table. As usual, the texts can then be translated using transaction `SE63` \(usually in a separate system\). The original language of the SAPUI5 ABAP repository is taken as the source language for the submitted texts. Once the translated texts are transported back to the respective systems, they can be accessed at runtime when texts in a certain language are requested.



## What do I have to do to use the SAPUI5 text repository?

You have to set up the default properties file in a special way by adding the following key as the first line in the properties file with texts that you submit to the SAPUI5 ABAP repository:

`# SAPUI5 TRANSLATION-KEY <GUID with 32 characters>`

You can create the GUID with the ABAP function module `GUID_CREATE`, or you can create the complete line with the ABAP report `/UI5/TEXT_FILE_GEN_TRANS_KEY`. \(A UUID as used in Java is also supported.\)

> ### Caution:  
> The GUID serves as a unique identifier for the properties file. Never change the GUID or copy it to other properties files.

The properties file has to fulfill the following rules:

-   It doesn't contain any duplicate text elements.
-   The text must be on one line and can have a maximum of 255 characters.
-   A text type is assigned to every text element.

Accidental overwriting of texts in the SAPUI5 text repository with texts from other properties files is prevented. If a duplicate GUID is detected, the properties files cannot be synchronized. It's not possible to rename or relocate a properties file and to submit it once it's contained in the SAPUI5 text repository. Before you can rename or relocate a properties file, you have to remove the texts from the SAPUI5 text repository by using the report `/UI5/TEXT_ENTRIES_DELETE`.

> ### Caution:  
> If you run this report, all translated texts get lost. Therefore, only use it for texts that are not yet translated.

After running the report, submit the renamed or relocated properties file again.

If you reassign the BSP application on the ABAP server \(representing a single SAPUI5 repository\) from a local \(`$TMP`\) package to a non-local package, you also need to resubmit the properties file. All text elements are generated again with the new creation time stamp.

> ### Note:  
> Since the original language of the SAPUI5 ABAP repository serves as the source language of the texts, it's important that you use the same language for the creation of the repository that was used for the properties files. When you use the SAPUI5 repository team provider and create the BSP application manually, you have to choose the correct language on the logon screen.

