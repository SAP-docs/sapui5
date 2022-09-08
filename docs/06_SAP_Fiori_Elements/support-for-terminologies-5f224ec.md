<!-- loio5f224ec48bdb4fcdaa1796ea82b296da -->

# Support for Terminologies

By defining terminologies together with additional resource bundles, an application can easily be switched from one scenario or industry to another.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.

To use the concept of terminologies provided by SAPUI5, the "model" definition in the app descriptor must first be enhanced with the terminologies:

```
"models": {
    "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
            "bundleUrl": "i18n/i18n.properties",
            "supportedLocales": ["en", “de”],
            "fallbackLocale": "en",
            "terminologies": {
                "travel": {
                    "bundleUrl": "i18n/terminologies/travel/i18n.terminologies.travel.properties",
                    "bundleUrlRelativeTo": "manifest",
                    "supportedLocales": ["en", "de"]
                }
            }
        }
    },
    ...
    ...
    ...
}
```

In the sample above, the resource model `i18n` is enhanced with a `travel` terminology.

> ### Note:  
> Enhancing resource models does not make them available to SAP Fiori elements, so you must add this model to the `enhanceI18n` setting of the SAP Fiori elements template.

```
"targets": {
    "LineItemsList": {
        "type": "Component",
        "id": "LineItemsList",
        "name": "sap.fe.templates.ListReport",
        "options": {
            "settings": {
                "entitySet": "LineItems",
                "enhanceI18n": ["i18n/ManageItemsListReport.properties", "i18n"],
                "variantManagement": "Page",
                "initialLoad": true,
                "navigation": {
                    "LineItems": {
                        "detail": {
                            "route": "LineItemsObjectPage"
                        }
                    }
                }
        }
    }
}
```

In the sample above, the list report is enhanced with an `i18n` bundle \(`i18n/ManageItemsListReport.properties`\) and a resource model \(`i18n`\) to which a terminology has already been added.

> ### Note:  
> -   `enhanceI18n` can take any combination of resource files and resource models. In the example above, a resource file `i18n/ManageItemsListReport.properties` and a resource model `i18n` are provided, but you can add further files and models.
> 
> -   `enhanceI18n` can also take models without terminology. In this case, even if a terminology is activated, it does not affect the UI.
> 
> -   When you enhance the SAP Fiori elements template texts via `enhanceI8n`, the last enhancement wins. In the example above, the template first looks for the keys in the `i18n` model, because it is the last enhancement \(that is, the last element in the array\). If the text is not found, the template looks in `i18n/ManageItemsListReport.properties`. If the text is still not found, the template falls back to the default texts.

For more information about the concept of terminologies, refer to [Terminologies](../04_Essentials/terminologies-eba8d25.md).

