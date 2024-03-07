<!-- loio91f21f176f4d1014b6dd926db0e91070 -->

# Identifying the Language Code / Locale

For the identification of languages, the framework uses a language code of type `string`.

The language can be set via the `language` parameter as described in [Available Configuration Options](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO).

> ### Note:  
> If you need to provide the language as a parameter, we recommend using the `sap-ui-language` parameter.
> 
> Besides `sap-ui-language`, also the `sap-locale` and `sap-language` parameters exist, which should only be used in the context of ABAP-based SAP application servers.

These SAPUI5 configuration options accept the following formats:

-   Language codes according to the de facto standard BCP-47, which are used by most browsers for language identification

    As of JDK 1.7 they are also supported by the Java locale class. Examples are `de`, `en-US`, `zh-Hans-CN`.

-   Java locale syntax that combines a lower case ISO 639 alpha-2 or alpha-3 language code with an ISO 3166 alpha-2 country code

    Both codes are combined with an underscore. An arbitrary sequence of variant identifiers \(also separated by underscores\) can be appended as a third component. Examples are `de`, `en_US`, `zh_TW_Traditional` 

-   SAP proprietary language codes \(only supported by URL parameter `sap-language`\)

    SAPUI5 applications are often used to connect to ABAP-based SAP application servers. These servers use SAP proprietary language codes for compatibility reasons. These language codes often match an ISO 639 alpha-2 language code, but not in all cases. If the language code for an SAPUI5 application is specified with the URL parameter `sap-language`, SAPUI5 assumes that it is an SAP proprietary language code and converts it to a BCP-47 language tag as follows:


    <table>
    <tr>
    <th valign="top">

    SAP Language Code
    
    </th>
    <th valign="top">

    BCP 47 Language Tag
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `ZH`
    
    </td>
    <td valign="top">
    
    `zh-Hans`
    
    </td>
    <td valign="top">
    
    `ZH` is the SAP language code for Simplified Chinese. The most generic representation in BCP 47 is `zh-Hans`. `zh-CN` \(Chinese, China\) is another representation, but SAPUI5 decided to use `zh-Hans`.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `ZF`
    
    </td>
    <td valign="top">
    
    `zh-Hant`
    
    </td>
    <td valign="top">
    
    `ZF` is the SAP language code for Traditional Chinese. The most generic representation in BCP 47 is `zh-Hant`. `zh-TW` \(Chinese, Taiwan\) is another representation, but SAPUI5`zh-Hant`.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `SH`
    
    </td>
    <td valign="top">
    
    `sr-Latn`
    
    </td>
    <td valign="top">
    
    `SH` is the SAP language code for Serbian \(Latin script\).
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `CT`
    
    </td>
    <td valign="top">
    
    `cnr`
    
    </td>
    <td valign="top">
    
    `CT` is the SAP language code for Montenegrin.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `6N`
    
    </td>
    <td valign="top">
    
    `en-GB`
    
    </td>
    <td valign="top">
    
    `6N` is the SAP language code for British English.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `1P`
    
    </td>
    <td valign="top">
    
    `pt-PT`
    
    </td>
    <td valign="top">
    
    `1P` is the SAP language code for Portuguese.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `1X`
    
    </td>
    <td valign="top">
    
    `es-MX`
    
    </td>
    <td valign="top">
    
    `1X` is the SAP language code for Mexican Spanish.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `3F`
    
    </td>
    <td valign="top">
    
    `fr-CA`
    
    </td>
    <td valign="top">
    
    `3F` is the SAP language code for Canadian French.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `1Q`
    
    </td>
    <td valign="top">
    
    `en-US-x-saptrc`
    
    </td>
    <td valign="top">
    
    `1Q` is a technical SAP language code used in support scenarios, for example for translation issues. When you select this language code, the technical keys are displayed instead of the actual data. As no ISO639 code for this exists, the information has been added as a BCP 47 private extension to the `en-US` language tag: "trc" stands for "trace" or "traceability".
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `2Q`
    
    </td>
    <td valign="top">
    
    `en-US-x-sappsd`
    
    </td>
    <td valign="top">
    
    `` is also used as a technical SAP language code in support scenarios and displays a pseudo translation \("psd" in the private extensions name\).
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `3Q`
    
    </td>
    <td valign="top">
    
    `en-US-x-saprigi`
    
    </td>
    <td valign="top">
    
    `3Q` is also used as a technical SAP language code in support scenarios and displays a pseudo translation \("rigi" in the private extensions name\).
    
    </td>
    </tr>
    </table>
    
    > ### Note:  
    > Only these SAP-proprietary language codes are understood by SAPUI5SAP Fiori launchpad, all other SAP-proprietary language codes are handled by the . Other SAP-proprietary language codes are not automatically transformed. If you develop your app to run in the SAP Fiori launchpad.
    > 
    > If you don't make use of the SAP Fiori launchpad. Other, you may have to explicitly implement the language handling. You can use the `sap/base/i18n/Localization.setLanguage()` method to provide both settings, a BCP 47 language code and the corresponding SAP-proprietary language\) in one call. SAPUI5 will then use one of the two codes where appropriate \(e.g. BCP 47 for the retrieval of translated texts or in HTTP Accept Headers, but the proprietary SAP language code when propagating the `sap-language` URL parameter to an OData service\).




<a name="loio91f21f176f4d1014b6dd926db0e91070__section_6CAF7D95C27C487CB201CE83345AC370"/>

## Current Language Code / Locale

SAPUI5 has the notion of a current language. It is determined during the SAPUI5 bootstrap from the following sources of information. The sources are ordered increasingly by priority and the last available user language/locale wins:

1.  Hard-coded SAPUI5 default locale `en`

2.  Browser-derived language

3.  `sap-ui-language` configuration parameter \(consider the order of the [Available Configuration Options](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)\)

4.  `sap-language` configuration parameter \(consider the order of the [Available Configuration Options](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)\)

5.  `sap-locale` configuration parameter \(consider the order of the [Available Configuration Options](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)\)

6.  Locale configured in the application coding \(for more information, see [API Reference: `sap/base/i18n/Localization.setLanguage`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization.setLanguage). \)

    ```js
        sap.ui.require(["sap/base/i18n/Localization"], (Localization) => {
            // Change the language using the API
            Localization.setLanguage(...);
    		
            // Retrieve the current language
            const sLanguage = Localization.getLanguage();
        });
    ```


> ### Note:  
> A call to the [`Localization.setLanguage`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization.setLanguage). method does not guarantee that all already existing translatable texts will be adapted.
> 
> The syntax of the value returned from `getLanguage` depends on the syntax used for configuration. If the information source is one of the browser language properties, the returned language most likely is in BCP-47 format. If it is configured as a URL parameter, the user might have chosen the JDK-locale syntax.

