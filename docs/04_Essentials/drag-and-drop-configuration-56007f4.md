<!-- loio56007f46e7db494bbaadbfa5e8d50ea8 -->

# Drag-and-Drop Configuration

To use drag and drop, you have to provide the required configuration using the `dragDropConfig` aggregation in `sap.ui.core.Element`.



<a name="loio56007f46e7db494bbaadbfa5e8d50ea8__section_rn3_w3g_x2b"/>

## Overview

The `dragDropConfig` aggregation with multiplicity `0..n` is enabled for all controls and elements in SAPUI5. However, it has to be defined in the metadata first.

> ### Note:  
> This configuration might be ignored due to metadata restrictions of `sap.ui.core.Element.extend`. For more information, see the [API Reference: `sap.ui.core.Element.extend`](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/sap.ui.core.Element.extend). 

To enable configuration, the following configuration entities for the aggregation are available:

-   `DragInfo`

    This class can be used to enable dragging if the drop target is unknown, or if you are not the owner of the target. Additional checks can be done during the `dragStart` event, and the default behavior can be changed.

-   `DropInfo`

    This class can be used as a general drop target. Incoming data might have to be validated during the `dragEnter` event. Applications have to implement the `drop` event.


Both `DragInfo` and `DropInfo` provide the `groupName` property. If this property has been specified, the `DropInfo` object only interacts with the relevant `DragInfo` classes within the same group.

-   `DragDropInfo`

    This class can be used if the drag source and the drop target are closely connected, and both are known. The most common use case is rearranging items.


**Related Information**  


[API Reference: `dragDropConfig`](https://ui5.sap.com/#/api/sap.ui.core.Element/aggregations)

[Drag-and-Drop Metadata](drag-and-drop-metadata-da7f3fc.md "To influence the drag-and-drop behavior, use the metadata definition of a control.")

