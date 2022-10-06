<!-- loio3ddb6cde6a8d416598ac8ced3f5d82d5 -->

# Drag and Drop

Drag and drop allows you to easily move, rearrange, and restructure items, for example, in a list or hierarchy structure.



<a name="loio3ddb6cde6a8d416598ac8ced3f5d82d5__section_qkm_jpf_x2b"/>

## Overview

Drag and drop in SAPUI5 enhances the standard browser events. A drag session \(`DragSession`\) is created that contains all information relevant for the drag-and-drop operation.

The central `DragAndDrop` handler manages the drag-and-drop scenarios of an application. The handler also creates the drag session for the data transfer and supports the custom dragging ghost element. The handler plugs into the pre- and post-event processing of the UI area to enhance native HTML5 drag-and-drop events.



<a name="loio3ddb6cde6a8d416598ac8ced3f5d82d5__section_rck_nxz_w2b"/>

## Use

You can use drag and drop in various scenarios, for example, if you want to do the following:

-   Rearrange items in a list

-   Rearrange items in a hierarchy structure

-   Rearrange items in a calendar, such as appointments in a planning calendar

-   Move items from one control to another

-   Move files from one application to another, for example, during a spreadsheet export or a file upload




<a name="loio3ddb6cde6a8d416598ac8ced3f5d82d5__section_cm2_cpn_x2b"/>

## Details

To drag an HTML element in HTML5, the draggable attribute must be set to `true`. This is done by `sap.ui.core.RenderManager` while the element data is being written to the Document Object Model \(DOM\) tree.

When the dragging of an HTML element has started, the `DragAndDrop` handler determines the responsible control and its relevant `DragInfo` class using the related `dragDropConfig` aggregation of the control. Between the pre- and post-processing of the `dragStart` event, owners of a control can decide whether to allow the dragging in their `ondragstart` handler.

> ### Note:  
> Calling the `preventDefault` method on the `dragStart` event stops the dragging.

After that, the `dragStart` event is fired by the related `DragInfo` class of the control. At this point, application developers can change the default to prevent the dragging. Also, the drag session is now available and can be used to transfer data or to provide the custom dragging ghost element. After everything has been defined, the user can start dragging the control.

During the dragging and after the `dragEnter` event has been fired on an HTML element, the `DragAndDrop` handler determines the responsible control and its relevant `DropInfo` class using the related `dragDropConfig` aggregation of the control. Between the pre- and post-processing of the `dragEnter` event, the owner of a control can decide whether to allow the dropping in their `ondragenter` handler.

> ### Note:  
> Marking the `dragEnter` event with the `NonDroppable` key \(using the `setMark` method\) prevents the dropping.

After that, the `dragEnter` event is fired from the relevant `DropInfo` class of the control. At this point, application developers can change the default to prevent the dropping. If dropping is not allowed, the user will see a non-droppable cursor. If dropping is allowed, the user will see a droppable cursor and the drop indicator depending on the `dropPosition`, `dropLayout`, and `dropEffect` properties of the first relevant `DropInfo` class of the control.

If `dragEnter` is allowed, the user can now drop an object by releasing the mouse. After that, the `drop` event gets fired for further implementation.

> ### Note:  
> The `DragAndDrop` handler does not provide any default drop handler implementation. This is up to the application developers.

**Related Information**  


[API Reference: `sap.ui.core.dnd`](https://ui5.sap.com/#/api/sap.ui.core.dnd)

[Sample](https://ui5.sap.com/#/sample/sap.m.sample.TableDnD/preview)

