<!-- loio4510c30482da4d438a7e76f991781845 -->

# Translation

Texts in the development language are stored in a text table. If you need more languages than just the development language, you must export the text pool from the table into a text properties file. Based on this file, translation can take place, resulting in one text properties file for each language.

> ### Note:  
> We recommend performing a text pool cleanup before the texts are exported for translation. Otherwise, obsolete texts may end up in the translation process.

Texts must be translated directly in the text properties file, that is, you must create one file for each language and maintain the translated texts manually. The following examples illustrate the naming convention for the files:

-   Original: *<texts\>*.properties
-   German: *<texts\>*\_de.properties
-   English: *<texts\>*\_en.properties

New texts are always added at the end of the file so that they can easily be identified after a new export.

Translated texts are always read from the text properties files and usually not reimported into the APF Configuration Modeler unless you want to change the development language.

**Related Information**  


[Export](export-7de4975.md "")

[Text Pool Cleanup](text-pool-cleanup-80fa245.md "")

