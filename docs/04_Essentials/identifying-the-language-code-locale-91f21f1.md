<!-- loio91f21f176f4d1014b6dd926db0e91070 -->

# Identifying the Language Code / Locale

For the identification of languages, the framework uses a language code of type `string`.

The language can be set, for example, by using the following options:

-   URL parameter `sap-ui-language` and configuration parameter `language`

-   Script tag attribute `data-sap-ui-language`

-   Global configuration variable `window["sap-ui-config"].language`

-   URL parameter `sap-language`


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

    BCP47 Language Tag


    
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

    `ZH` is the SAP language code for Simplified Chinese. The most generic representation in BCP47 is `zh-Hans`. `zh-CN` \(Chinese, China\) is another representation, but SAPUI5 decided to use `zh-Hans`.


    
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

    `ZF` is the SAP language code for Traditional Chinese. The most generic representation in BCP47 is `zh-Hant`. `zh-TW` \(Chinese, Taiwan\) is another representation, but SAPUI5 decided to use `zh-Hant`.


    
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

    `1Q` is a technical SAP language code used in support scenarios, for example for translation issues. When you select this language code, the technical keys are displayed instead of the actual data. As no ISO639 code for this exists, the information has been added as a BCP47 private extension to the `en-US` language tag: "trc" stands for "trace" or "traceability".


    
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

    `2Q` is also used as a technical SAP language code in support scenarios and displays a pseudo translation \("psd" in the private extensions name\).


    
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
    > Only these SAP-proprietary language codes are understood by SAPUI5. Other SAP-proprietary language codes are not automatically transformed. If you develop your app to run in the SAP Fiori launchpad, all other SAP-proprietary language codes are handled by the SAP Fiori launchpad.
    > 
    > If you don't make use of the SAP Fiori launchpad, you may have to explicitly implement the language handling. You can use the `sap.ui.getCore().setLanguage()` method to provide both settings, a BCP47 language code and the corresponding SAP-proprietary language\) in one call. SAPUI5 will then use one of the two codes where appropriate \(e.g. BCP47 for the retrieval of translated texts or in HTTP Accept Headers, but the proprietary SAP language code when propagating the `sap-language` URL parameter to an OData service\).




<a name="loio91f21f176f4d1014b6dd926db0e91070__section_6CAF7D95C27C487CB201CE83345AC370"/>

## Current Language Code / Locale

SAPUI5 has the notion of a current language. It is determined during the SAPUI5 bootstrap from the following sources of information. The sources are ordered increasingly by priority and the last available user language/locale wins:

1.  Hard-coded SAPUI5 default locale `en`

2.  Potentially configured browser language \(`window.navigator.browserLanguage`\)

3.  Potentially configured user language \(`window.navigator.userLanguage`\)

4.  General language information from the browser \(`window.navigator.language`\)

5.  Android: Language contained in the user agent string \(`window.navigator.userAgent`\)

6.  First language from the list of the user’s preferred languages \(`window.navigator.languages[0]`\) \(For more information, see [https://developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/API/NavigatorLanguage/languages).\)

7.  Locale configured in the application coding \(For more information, see [API Reference: `sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration). \)

8.  Locale configured via URL parameters


After the bootstrap, the language can be changed by calling `sap.ui.getCore().setLanguage(…)`. A call to this method does not guarantee that all already existing translatable texts will be adapted. You use the configuration API to retrieve the resulting current language as follows:

```js

var sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
```

For more information, see [API Reference: `sap.ui.core.Configuration.setLanguage`](https://ui5.sap.com/#/api/sap.ui.core.Configuration/methods/setLanguage).

> ### Note:  
> The syntax of the returned value depends on the syntax used for configuration. If the information source is one of the browser language properties, the returned language most likely is in BCP-47 format. If it is configured as a URL parameter, the user might have chosen the JDK Locale syntax.

