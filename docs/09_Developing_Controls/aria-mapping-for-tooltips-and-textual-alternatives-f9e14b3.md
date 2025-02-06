<!-- loiof9e14b33a62d48ca82a3a9134258ade5 -->

# ARIA Mapping for Tooltips and Textual Alternatives

Tooltips and semantic colors are important aspects in apps. They have to be interpreted correctly by the screen reader and require some special ARIA labeling.



## Tooltips

Currently tooltips have to be disabled for all controls. An exception is made for images \(stand-alone or as part of controls, such as buttons with icons/images but without text on the button itself\).



## Graphics and Colors

All images and icons must have a textual explanation that the screen reader can read. This is done with the attributes `alt` or `aria-label`. Text and content colored with semantic colors need to have a textual alternative describing the semantics. Interactive graphics, like charts, need to follow these requirements:

-   An editable color scheme and possibility of color modification

-   Navigable using the keyboard

-   The screen reader information must be available at the focus points \(axis values, dialog info, legend\)


You should hide image controls or controls with background CSS images used for pure decoration purposes by using the `aria-hidden="true"` property.

