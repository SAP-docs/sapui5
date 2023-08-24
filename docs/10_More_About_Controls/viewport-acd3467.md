<!-- loioacd34672ef33429e99a0247486e37c78 -->

# Viewport

The `sap.ui.vk.Viewport` control provides a rendering canvas for the 3D elements of a loaded scene/ loaded scenes.



<a name="loioacd34672ef33429e99a0247486e37c78__section_pp2_lx1_qz"/>

## API Reference / Sample

-   [`sap.ui.vk.Viewport`](https://ui5.sap.com/#/api/sap.ui.vk.Viewport) in the *API Reference* in the Demo Kit
-   [3D Viewer - Step 3 - 3D Viewer Using the Viewport Control](https://ui5.sap.com/#/entity/sap.ui.vk.tutorial.VIT/sample/sap.ui.vk.tutorial.VIT.03) in the Demo Kit



## Overview

The Viewport control's primary function is to provide a rendering surface for all or part of a loaded scene. The Viewport can occupy all or part of the user interface.



## Prerequisites

When initializing a Viewport instance, you must:

-   attach it to a `ContentConnector` instance, which handles the scenes loading process
-   create and add tools required for your use case
-   create and attach `DrawerToolbar` and configure options



## Details



### Loading Scenes Into the Viewport

The Viewport supports the loading of the VDS file format.

File formats that are natively supported by browsers are loaded by the Native Viewport control.



### Node Visibility in the Viewport

The Viewport can be connected to a `ViewStateManager` object to handle the selection and visibility states of nodes in the scene. This means is that when selecting a node in the scene, that node will be highlighted. In addition, if the Viewport is connected to a Scene Tree control, the selection of a node in the Viewport will highlight the associated item in the Scene Tree.

The visibility state of a node can be changed when the Viewport is connected to a Scene Tree, or when `DrawerToolbar` is created and show/hide buttons are enabled. Nodes can be hidden or displayed in the Viewport using the Scene Tree functionality or the Drawer Toolbar buttons.



### Keyboard Shortcuts in the Viewport

In addition to using mouse and touch gestures to navigate the scene in a Viewport, keyboard shortcuts are available.

**Viewport keyboard shortcuts**


<table>
<tr>
<th valign="top">

Keyboard Shortcut



</th>
<th valign="top">

Function



</th>
</tr>
<tr>
<td valign="top">

[DIRECTIONAL ARROW\]



</td>
<td valign="top">

Rotate the scene.



</td>
</tr>
<tr>
<td valign="top">

[SHIFT\] + [DIRECTIONAL ARROW\] 



</td>
<td valign="top">

Pan the scene.



</td>
</tr>
<tr>
<td valign="top">

[\+\]



</td>
<td valign="top">

Zoom into the scene.



</td>
</tr>
<tr>
<td valign="top">

[\-\]



</td>
<td valign="top">

Zoom out of the scene.



</td>
</tr>
</table>



## Constraints

-   The Viewport control loads 3D models in the SAP VDS \(`.vds`\) format only. Some 2D image formats can be loaded by the `sap.ui.vk.NativeViewport` control. See Native Viewport.



## Related Information

-   [Scene Tree](scene-tree-ab70215.md)
-   [Native Viewport](native-viewport-ab5acd7.md)

