<!-- loiod9c146a4e0f049108cf8231bfca5585b -->

# Read Before Extending a Generated App

Before you start creating an extension for your app, make sure you have read the information provided in this topic.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

Take the following into account:

-   Implementing an extension in your app means that the coding lies within the application's responsibility.
-   Create extensions based only on the use cases described in this documentation.




<a name="loiod9c146a4e0f049108cf8231bfca5585b__section_a4t_f5x_pdb"/>

## Using the Standard SAPUI5 API

In extension coding, you can use the standard SAPUI5 programming API. However, you should do so with care. For more information, see [View Extension](../08_Extending_SAPUI5_Applications/view-extension-403c050.md).

After you have defined a view extension, you can access and modify the properties of all UI elements defined within these extensions \(such as changing the visibility\). You can access the elements you have created by their ID. However, you must not access any UI elements that are not defined within your view extensions.

> ### Caution:  
> If you do not adhere to this guideline, your app may not work with future SAPUI5 versions because SAP Fiori elements might exchange controls for new ones that have a different API.



<a name="loiod9c146a4e0f049108cf8231bfca5585b__section_c4t_f5x_pdb"/>

## Notes on Models

Several models \(instances of `sap.ui.model.Model`\) are attached to the list report and object page, and analytical list page template artifacts.

-    **OData Model** 

    The most prominent is the default model. This is the OData model specified in the `manifest.json` file. You can use this model for data-binding in your own view extensions.

    Access the model \(through the standard SAPUI5 API methods\) with care, since side effects may interfere with the template coding that also uses this model.

-    **UI Model** 

    Each view has its own model attached that has the name `ui`. This model can be used in view and controller extensions for read purposes.

    Note that it is also possible to register changes to these properties. However, the logic that determines at which point in time these properties are set and reset can still be changed.

    > ### Caution:  
    > It is strictly forbidden to perform any change operations on the properties of the UI model.

-    **SAP Fiori Elements Private Model** 

    Additional model that is attached to each view that contains properties used for internal purposes within the templates.

    > ### Caution:  
    > It is strictly forbidden to access this model in any way. Do not access any model other than the default model and the `ui` model unless you have attached it to the `ManagedObject` yourself.

-    **Application-Specific Models** 

    You may want to define your own JSON model and attach it to UI elements. You can do this easily if the model is attached to a UI element that exists only within the scope of an extension. However, use models that are attached to a higher level \(for example, to the whole view\) only if absolutely necessary. In this case, you should use a name containing your own namespace to clearly separate this model from models defined by other parts of the framework.




<a name="loiod9c146a4e0f049108cf8231bfca5585b__section_wsr_25p_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

Take the following into account:

-   For the extension of any system logic or functions that are related to existing controls or components provided by SAP Fiori elements, always use the extensionAPI. It is the official interface between the actual extension and the functions provided by SAP Fiori elements. SAP guarantees implemented system behavior, functions, and compatibility only if the official interface is used correctly. This is the prerequisite for receiving the necessary support and quality assurance.

-   If you interact only with controls that were generated within your extension, you don't need the ExtensionAPI.


Make sure you do not use the following:

-   Services provided by the namespace `sap.ui.generic.app` or `sap.fe.navigation`, since these services are intended for use only by freestyle-apps or within the generic list report and object page and analytical list page template implementation.
-   Services provided directly by the namespace `sap.ui.generic.template`. Unwanted side effects may occur if two layers \(template coding and extension coding\) access these services at the same time.



### Notes on Models

Access the model \(through the standard SAPUI5 API methods\) with care, since side effects may interfere with the template coding that also uses this model.

This applies in particular to function imports. Therefore, use method `invokeActions` of the extension API to call function imports.



### UI Model

This model contains the following properties, all of which have Boolean values:

-   `enabled`: Indicates whether active UI elements \(such as buttons\) should be enabled.
-   `editable`: Indicates whether input fields or similar UI elements should be in an editable state.
-   `createMode`: Indicates whether the UI displays an entity that is about to be created \(no active version exists yet\).



## Additional Features in SAP Fiori Elements for OData V4



### UI Model

This model contains the following property:

-   `editMode`: Contains either `Editable` or `Display`.

