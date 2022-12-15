<!-- loiodbb44ae350ef456a9d1264d1a3f10718 -->

# View or Controller Extension is Not Loaded

You have extended a view or controller by defining `sap.ui5/extends/extensions/sap.ui.controllerExtensions` or `sap.ui5/extends/extensions/sap.ui.viewExtensions` in your Component's **manifest.json**, but at runtime neither are loaded.



## Potential Root Causes

There are mainly two possible reasons why you might encounter this scenario:

-   You have given a wrong view, fragment, or controller name in the manifest.json,

-   the **owner component** for your view/fragment/controller is missing.




## Resolution



### Wrong names and typos

You can easily resolve the first possibility why an extension is not loaded and applied by checking for the correct spelling of view-, fragment- and controller names in your manifest. The framework can only find an extension if the artifact names are correctly maintained in the manifest.json.

> ### Note:  
> The framework does not validate the existence of artifacts mentioned in `sap.ui5/extends/extensions/`. Therefore, no error will be shown if a name is misspelled.



### Missing owner component

The second possibility is also easily solvable by making sure that your views, fragments, or controllers are created in the correct owner-component scope.

The owner component is the \(UI\)Component which "owns" a view, fragment, or controller. It must provide the extension information in its manifest.json.

For a detailed explanation of the owner-component concept and some coding samples, see the **Related Information**.

**Related Information**  


[The Owner Component](the-owner-component-a7a3138.md "If you wish to extend your view or controller, you must define the extension in the manifest.json of their owner component.")

[`sap.ui.core.Component.getOwnerComponentFor`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/sap.ui.core.Component.getOwnerComponentFor)

[`sap.ui.core.Component.prototype.runAsOwner`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/runAsOwner)

[`sap.ui.core.Component.getOwnerIdFor`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/sap.ui.core.Component.getOwnerIdFor)

