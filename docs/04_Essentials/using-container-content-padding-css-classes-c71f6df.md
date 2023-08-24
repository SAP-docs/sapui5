<!-- loioc71f6df62dae47ca8284310a6f5fc80a -->

# Using Container Content Padding CSS Classes

For many container controls in SAPUI5, such as a Dialog or a Page, you can define whether the container should have a padding within the content area. A padding clears the area between the container layout and the controls that are displayed in the content area.

You can either choose to have no padding, a small padding, or a responsive padding that is based on the user’s screen size.

The following CSS classes for content padding are provided by SAPUI5:

-   `sapUiNoContentPadding`
-   `sapUiContentPadding`
-   `sapUiResponsiveContentPadding`

The effects of these paddings will be different depending on the container that is being used:

-   If the container is defining a padding on its content area by default, then setting `sapUiNoContentPadding` in the application code will remove the padding and thus not display any space between the container layout and the content controls.
-   If the container is defining no padding on its content by default, then setting `sapUiContentPadding` will add 1rem \(16px\) of padding around the content area to layout the content controls.
-   Setting `sapUiResponsiveContentPadding` on the container control will add a padding based on the user’s screen size. On small screen devices such as smartphones, or when the browser window is resized to a small size, usually a smaller or no padding is displayed \(depending on the control and theme specifics\). On medium screen sizes or applications that are using a `SplitApp`, the control will get 1rem \(16px\) of padding.. Finally, on large screen sizes in full-screen mode, the container control will get 2rem \(32px\) of padding to the left and right and 1rem \(16px\) of padding at the top and bottom.

The following list of controls support container content padding CSS classes:

-   `sap.f.DynamicPage`
-   `sap.f.GridList`
-   `sap.f.semantic.SemanticPage`
-   `sap.m.Carousel`
-   `sap.m.Dialog`
-   `sap.m.FlexBox` using `FlexItemData` with `styleClass` property for each item
-   `sap.m.IconTabBar`
-   `sap.m.List`
-   `sap.m.Page`
-   `sap.m.Panel`
-   `sap.m.Popover`
-   `sap.m.ScrollContainer`
-   `sap.m.TabContainer`
-   `sap.m.Table`
-   `sap.ui.layout.BlockLayoutCell`
-   `sap.ui.layout.DynamicSideContent`
-   `sap.ui.layout.HorizontalLayout`
-   `sap.ui.layout.VerticalLayout`



## Example

```xml

<Page class="sapUiResponsiveContentPadding">
```



You can check how our container padding classes work in the following sample [Samples for `sap.ui.core.ContainerPadding`](https://ui5.sap.com/#/entity/sap.ui.core.ContainerPadding).

If you have to apply responsive paddings over separate parts of the control according to the control width, see [Enabling Responsive Paddings According to the Control Width](enabling-responsive-paddings-according-to-the-control-width-3b718b5.md)

