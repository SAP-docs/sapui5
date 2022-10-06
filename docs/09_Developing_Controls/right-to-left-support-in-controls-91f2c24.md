<!-- loio91f2c24b6f4d1014b6dd926db0e91070 -->

# Right-to-Left Support in Controls

SAPUI5 supports right-to-left directionality \(RTL\) in controls.

Unicode defines the direction in which a browser arranges characters to form words. CSS 2.1 also provides a `direction` property. The `dir` attribute in HTML overrides the overall direction of blocks and influences the text alignment, if not set explicitly. The `lang` attribute does **not** influence the text direction.

It is possible to use `document.dir` for text direction. The browser supports it and it can be set in the bootstrap. The `<bdo>` tag in HTML is used to control the bidirectional algorithm. This means that the character order is then not reversed if RTL and LTR words are mixed.

In a nutshell, this means the following:

-   Each character inherently belongs to an RTL or LTR script \(defined by Unicode\). Some characters like parentheses and dots have no inherent directionality.

-   Single words are interpreted by the browser as character sequences with the same directionality. For these, the browser knows the text direction and handles them as blocks that get their internal text direction **only** from the used characters.

-   The words themselves are separated by the direction-neutral characters like parentheses, spaces and dots. This makes it possible for a single sentence to contain words with either directionality.

    > ### Note:  
    > This behavior can be overridden by using the `<bdo>` tag or CSS `unicode-bidi:bidi-override`. This is done when the order of characters must follow the base direction regardless of the inherent character direction.

-   The overall direction and how the blocks are put next to each other depends on the base direction of the whole HTML content.

-   The default base direction of HTML is left-to-right \(LTR\), but can be inverted by setting the attribute `"dir='rtl'"`, either on the `<html>` tag or on any sub-region which should have a different base direction.

-   This base direction also determines the default text alignment, the order of columns in tables and the presentation of some direction-neutral characters. For example, opening parentheses are still opening parentheses when RTL mode is switched.

-   The algorithm for ordering blocks according to the base direction only covers one level of mixed directionality. To achieve deeper nesting, spans with a `dir` attribute can be used to define a sub-context with a different base direction.




<a name="loio91f2c24b6f4d1014b6dd926db0e91070__section_0B022A7E260F4CC4BAA335BBDBB43D3B"/>

## General Algorithm

If SAPUI5 is configured for RTL mode, the SAPUI5 core performs the following steps:

1.  `dir="rtl"` is set on the HTML tag.

    > ### Note:  
    > The W3C officially recommends using the HTML attribute instead of the CSS properties as directionality is determined by content and has nothing to do with the presentation. Another reason is that CSS properties can be ignored. They also recommend using the `<HTML>` tag instead of the `<BODY>` tag.

2.  The respective `library-RTL.css` files are loaded.

3.  The CSS generator includes an RTL flipping algorithm. This algorithm performs the following changes:

    -   `border-left:` is converted to`border-right:`, `padding-left:` is converted to `padding-right:`, `float:left` is converted to `float:right` and so on.

    -   If the `img-RTL` folder contains any images, their URL paths inside the `library-RTL.css` file are rewritten as they are considered to be mirrored versions of images with the same name in the `img` folder.

        > ### Note:  
        > If images need to be mirrored, you need to manually provide the correct RTL version of the image and save it under the same name in the corresponding subfolder within the `img-RTL` folder. Otherwise, ensure that the folder contains no image with the same name.



