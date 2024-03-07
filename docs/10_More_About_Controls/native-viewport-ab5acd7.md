<!-- loioab5acd7a755b4daca01c26616173b4fd -->

# Native Viewport

The Native Viewport control \(`sap.ui.vk.NativeViewport`\) provides a rendering canvas for 2D images loaded into the Viewer application.



<a name="loioab5acd7a755b4daca01c26616173b4fd__section_rcx_jw1_qz"/>

## API Reference / Sample

Here's where you can find the Native Viewport control in the Demo Kit:

-   [`sap.ui.vk.NativeViewport`](https://ui5.sap.com/#/api/sap.ui.vk.NativeViewport)



## Overview

The Native Viewport control \(`sap.ui.vk.NativeViewport`\) loads image files supported natively by the browser into a viewing area using standard HTML and CSS. Viewing of the loaded images is enhanced with standard VIT pan and zoom gesture support.

The `sap.ui.vk.NativeViewport` control can occupy all or part of the user interface.



## Details



### Loading Images into the Native Viewport

The `NativeViewport` control supports the loading of images that are natively supported by the browser.

Currently, the `NativeViewport` control supports the loading of the following file formats:

-   JPG / JPEG
-   PNG
-   GIF
-   TIFF \(not supported in all browsers\)
-   BMP
-   SVG

You must specify the extension of the file you want to load. Otherwise, the file will not load.

If it can be detected, a console message will be displayed when a problem occurs during file loading.



### Gesture Handling in the Native Viewport

Gestures such as pan and zoom are captured and processed by the `sap.ui.vk.Loco` library. A new `NativeViewport` instance is initialized with an instance of the `sap.ui.vk.Loco` library attached, so that gestures can be captured and processed.



### Keyboard Shortcuts in the Native Viewport

In addition to mouse and touch gestures, keyboard shortcuts are available for navigating around the `NativeViewport` instance:

**Native Viewport keyboard shortcuts**


<table>
<tr>
<th valign="top">

Keyboard shortcut

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

Pan the image.

</td>
</tr>
<tr>
<td valign="top">

[\+\]

</td>
<td valign="top">

Zoom into the image.

</td>
</tr>
<tr>
<td valign="top">

[\-\]

</td>
<td valign="top">

Zoom out of the image.

</td>
</tr>
</table>



## Constraints

The following restrictions apply:

-   The `NativeViewport` control only loads 2D images. For loading 3D models, use the `sap.ui.vk.Viewport` control.
-   Currently, the `NativeViewport` control does not support interactive SVG files; that is, any links in an SVG file will not work in the Native Viewport.

**Related Information**  


[Viewport](viewport-acd3467.md "")

