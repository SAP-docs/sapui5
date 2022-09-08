<!-- loiof638884d0d624ad8a243f4005f8e9972 -->

# Smart Link

The `sap.ui.comp.navpopover.SmartLink` control provides a popover with navigation links to related applications, for example, more detailed information about customer data.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.navpopover.SmartLink) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.navpopover.SmartLink).

For more information about annotations for this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.navpopover.SmartLink/annotations/Summary). 



## Overview

The `SmartLink` control provides further navigation information for a certain entity and offers the following options for navigation:

-   Main navigation target

-   Additional content, which can be customized

-   Links to related apps, for example


Navigation links can be personalized by selecting *Define Links* on the popover where users can select from a list which cross-application links they want to see. They can also restore the links they selected to the previous state.



## Details

Within a `SmartTable` or `SmartForm` control, the `SmartLink` control is created automatically if the `SemanticObject` annotation has been defined in the metadata of the OData service used. Navigation targets are determined by the `SmartLink` control and its classes using the `CrossApplicationNavigation` service of the unified shell. For more information about this service, see [CrossApplicationNavigation](https://ui5.sap.com/#/api/sap.ushell.services.CrossApplicationNavigation.html) in the Demo Kit.

The events of the `SmartLink` control allow the consuming application to do the following in the popover:

-   Add, edit, or remove

    -   Texts

    -   Parameters

    -   Navigation targets


-   Add an additional customized area

The `SmartLink` control can be created in an XML view or in the coding. However, it is recommended to use the `SemanticObject` definition of the OData metadata via the related annotation. This ensures that the `SmartLink` control is instantiated in a correct manner.



### Semantic Object Controller

Within a `SmartTable` or `SmartForm` control, the `SemanticObjectController` class is used as a central instance that is exposing the automatically generated events of the `SmartLink` control.

All events of the `SmartLink` control and the features of the navigation popover connected to it are registered with the `SemanticObjectController` class and are thus available for use by the consuming application from one single source.

In addition, the `SemanticObjectController` class enables further features that influence the behavior of the registered `SmartLink` controls within the `SmartTable` or `SmartForm` controls.

The `SemanticObjectController` class can be set up in the XML view as well as in the coding of the `SmartTable` and the `SmartForm` controls. All `SmartLink` controls in a `SmartTable` or `SmartForm` control will automatically get registered with the `SemanticObjectController` class provided.

