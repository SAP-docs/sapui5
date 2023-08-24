<!-- loio17d242da9f0a4b36a37d6d49acf4fe5f -->

# Information for Translators

The following information is relevant for translators.

-   Texts are treated as ABAP short texts with translation object type `UI5T`. You can translate them in transaction SE63.
-   The translation object name is a GUID, which is the key taken from the first line of the original properties file containing the text elements \(`# SAPUI5 TRANSLATION-KEY <GUID>`, as mentioned above\).
-   The text key of each text element consists of the text type and an individual GUID, separated by a blank.
-   The texts are stored in the following database tables which are stored with an SAP or customer namespace:


    <table>
    <tr>
    <th valign="top">

    Database Table


    
    </th>
    <th valign="top">

    What Does it Contain?


    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `/UI5/TREP_TEXT` \(master table\)


    
    </td>
    <td valign="top">
    
    -   Text name
    -   Unique text GUID
    -   Text type
    -   Additional context information
    -   Translation object name GUID \(from the properties file\)


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `/UI5/TREP_TEXT_T` \(language-dependent table\)


    
    </td>
    <td valign="top">
    
    -   Source and translated text
    -   Keys: text GUID as in table `/UI5/TREP_TEXT`, and language key


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `/UI5/TREP_FILES` 


    
    </td>
    <td valign="top">
    
    -   Translation object name \(GUID from the properties file\)
    -   Path information for the properties file



    
    </td>
    </tr>
    </table>
    

