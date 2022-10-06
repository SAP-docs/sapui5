<!-- loio5b1dd11bc3834b05aa9832f2a48a3dec -->

# Customizing Overview Pages Using Runtime Capabilities

End users can customize their overview pages by rearranging cards and by hiding or showing cards. They can also apply a filter to the displayed information, which will affect all relevant cards.

End users can customize their overview pages in the following ways:

-   Drag and drop cards to rearrange them. You can do this using the mouse, or with the keyboard by pressing [Ctrl\] and the arrow buttons.

    > ### Note:  
    > -   You can only personalize cards with same screen resolution and size.
    > 
    > -   The browser zoom level should be set at default size, that is, 100%.
    > 
    > -   You can arrange the source and target location of any card. The target location is saved only for the moved cards. The remaining cards are arranged based on the best fit in the layout. If you want to assign specific target location to each card, you need to move each card at least once.

-   Hide cards by doing the following:

    1.  In the header bar, click or tap the *Options* icon and select *Manage Cards*.
    2.  Use the switch control to hide or show the relevant card.
    3.  Click *OK*.
    4.  To reset the view to the default settings, in the *Manage Cards* window, click *Reset*.

-   Resize a card in horizontal and vertical directions. Or, you can load cards with specific default size. For example, to set default size for a card, configure the card settings in the descriptor file.

    Prerequisite: Set the property `containerLayout: "resizable"` in descriptor configuration file.

    ```
    "defaultSpan": {
      "rows": 7,
      "cols": 2
    }
    ```

    > ### Note:  
    > Resizing of stack card is not supported.

-   Filter the information displayed in cards by defining the values or range of values to be displayed for a specific field. For example, display only orders for which the supply date has passed.


