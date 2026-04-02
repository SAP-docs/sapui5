<!-- loiod9c146a4e0f049108cf8231bfca5585b -->

# Read Before Extending a Generated App

Review the extension guidelines before modifying your SAP Fiori elements app.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

Take the following into account:

-   Implementing an extension in your app means that the coding lies within the application's responsibility.

-   Create extensions based only on the use cases described in this documentation.




<a name="loiod9c146a4e0f049108cf8231bfca5585b__section_a4t_f5x_pdb"/>

## Using the Standard SAPUI5 API

In extension coding, you can use the standard SAPUI5 programming API. However, you should do so with care. For more information, see [Extension Points](../08_Extending_SAPUI5_Applications/extension-points-403c050.md).

After you have defined a view extension, you can access and modify the properties of all UI elements defined within these extensions \(such as changing the visibility\). You can access the elements you have created by their ID. However, you must not access any UI elements that are not defined within your view extensions.

> ### Caution:  
> If you do not adhere to this guideline, your app may not work with future SAPUI5 versions because SAP Fiori elements might exchange controls for new ones that have a different API.



<a name="loiod9c146a4e0f049108cf8231bfca5585b__section_c4t_f5x_pdb"/>

## Notes on Models

Several models \(instances of `sap.ui.model.Model`\) are attached to the list report page and object page, and analytical list page template artifacts.

-   **OData Model** 

    The most prominent is the default model. This is the OData model specified in the `manifest.json` file. You can use this model for data-binding in your own view extensions.

    Access the model \(through the standard SAPUI5 API methods\) with care, since side effects may interfere with the template coding that also uses this model.

-   **UI Model** 

    Each view has its own model attached that has the name `ui`. This model can be used in view and controller extensions for read purposes.

    This model contains the following property:

    -   `editMode`: Contains either `Editable` or `Display`.

    Note that it is also possible to register changes to these properties. However, the logic that determines at which point in time these properties are set and reset can still be changed.

    > ### Caution:  
    > It is strictly forbidden to perform any change operations on the properties of the UI model.

-   **SAP Fiori Elements Private Model** 

    Additional model that is attached to each view that contains properties used for internal purposes within the templates.

    > ### Caution:  
    > It is strictly forbidden to access this model in any way. Do not access any model other than the default model and the `ui` model unless you have attached it to the `ManagedObject` yourself.

-   **Application-Specific Models** 

    You may want to define your own JSON model and attach it to UI elements. You can do this easily if the model is attached to a UI element that exists only within the scope of an extension. However, use models that are attached to a higher level \(for example, to the whole view\) only if absolutely necessary. In this case, you should use a name containing your own namespace to clearly separate this model from models defined by other parts of the framework.




> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Read Before Extending a Generated App](read-before-extending-a-generated-app-a5d985e.md).

