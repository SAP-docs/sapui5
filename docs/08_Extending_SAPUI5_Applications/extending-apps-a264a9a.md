<!-- loioa264a9abf98d4caabbf9b027bc1005d8 -->

# Extending Apps

You can adapt an SAPUI5 app to your specific requirements. For example, you can adapt or replace views, extend or replace controllers, or change language-specific texts.

With SAPUI5 you have the option to extend your applications.You can do so by using SAPUI5 flexibility or component configuration.

 [SAPUI5 flexibility](using-sapui5-flexibility-72861c2.md) is the preferred way to extend SAP Fiori elements-based apps for versions 1.56 or higher. It uses a better interface, supports layering as well as lifecycle hooks.

 [Using Component Configuration](using-component-configuration-c264d66.md) is intended for versions below 1.56 and for freestyle applications. It is based on merge, supports only override of methods and requires additional component configurations. The extension information is stored in a specific area of the component configuration. It can be performed on a custom app that extends a delivered standard app. A replacement or extension of views and custom controllers can also be part of a custom app, but may not always be required. If no replacement and no custom controller exists, the custom app project only contains the component definition with the extension configuration. The standard app itself is not changed. The customized app becomes the start-up project and launches the standard app with the additional extension configuration.

For more information on how to create layered controller extensions in SAP Web IDE, see Related Information.

By using key user adaptation, users with the key user authorization role can also make extensive UI changes for apps without having to change the code. For more information, see [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md).

-   **[Using SAPUI5 Flexibility](using-sapui5-flexibility-72861c2.md "You can use SAPUI5 flexibility to extend your SAP Fiori apps.")**  
You can use SAPUI5 flexibility to extend your SAP Fiori apps.
-   **[Using Component Configuration](using-component-configuration-c264d66.md "SAPUI5 supports the
			extension of a base controller by merging the delivered standard controller with a
			custom controller on JavaScript object level.")**  
SAPUI5 supports the extension of a base controller by merging the delivered standard controller with a custom controller on JavaScript object level.
-   **[Localized Texts for Extended Apps](localized-texts-for-extended-apps-2edc3f9.md "You can add custom localized text files that contain additional texts or texts that
		overwrite the original texts to the sap.ui.model.resource.ResourceModel
	")**  
You can add custom localized text files that contain additional texts or texts that overwrite the original texts to the `sap.ui.model.resource.ResourceModel` 
-   **[Caveats Regarding Stability Across Application Upgrades](caveats-regarding-stability-across-application-upgrades-aef3384.md "There are a few restrictions in the compatibility of custom applications that have to be
		considered when extending SAPUI5 standard applications.")**  
There are a few restrictions in the compatibility of custom applications that have to be considered when extending SAPUI5 standard applications.
-   **[Supportability](supportability-c44813d.md "In case of problems or errors in the custom application, several options exist that
		support you in resolving the issues.")**  
In case of problems or errors in the custom application, several options exist that support you in resolving the issues.

**Related Information**  


[Layering Concept](../04_Essentials/layering-concept-9e63057.md "SAPUI5 flexibility uses a consistent layering concept to store the UI changes as semantic delta information. This layering concept applies consistently to all users of SAPUI5 flexibility (end users, key users, and developers).")

