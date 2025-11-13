<!-- loio5b1dd11bc3834b05aa9832f2a48a3dec -->

# Configuring Overview Pages Using Runtime Capabilities

End users can configure their overview pages by rearranging cards and controlling their visibility by hiding or showing them. They can also apply filters to the displayed information, which affects all relevant cards on the page.

End users can configure their overview pages in the following ways:

-   Rearranging cards

    End users can rearrange the cards on the overview page using drag and drop. They can do this using the mouse, or by pressing [Ctrl\] and the arrow keys on the keyboard. To highlight or drag an item without holding down the mouse button, enable the ClickLock option. To enable this option, proceed as follows:

    -   Open the *Settings* of your system.

    -   Select *Bluetooth and Devices* and choose *Touchpad*.

    -   Click *More touchpad settings*. The classic *Mouse Properties* dialog opens.

    -   Check the *Turn on ClickLock* option.


    To use ClickLock, perform a single-click on an item and move the mouse to enter the drag mode. The selected element starts dragging. A second click on the desired location commits the drag and drop operation.

    > ### Note:  
    > -   They can only personalize cards with same screen resolution and size.
    > 
    > -   The browser zoom level should be set at default size, that is, 100%.
    > 
    > -   They can arrange the source and target location of any card. The target location is saved only for the moved cards. The remaining cards are arranged based on the best fit in the layout. If you want to assign specific target location to each card, you need to move each card at least once.

-   Control the visibility of cards

    To hide cards, proceed as follows:

    1.  In the header bar, click or tap the *Options* icon and select *Manage Cards*.
    2.  Use the checkbox to hide or show the relevant card.
    3.  Click *OK*.
    4.  To reset the view to the default settings, in the *Manage Cards* window, click *Reset*.

-   Resize cards

    Resize a card in horizontal and vertical directions. Or, you can load cards with specific default size. For example, to set default size for a card, configure the card settings in the `manifest.json` file.

    End users can resize cards both horizontally and vertically.

    Cards can also be loaded with a specific size automatically. To enable this option, application developers can configure the card settings in the `manifest.json` file.

    Prerequisite: Set the property `containerLayout: "resizable"` in the `manifest.json` file.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "defaultSpan": {
    >   "rows": 7,
    >   "cols": 2
    > }
    > ```

    > ### Note:  
    > Resizing of stack card is not supported.

-   Filter the information displayed in cards by defining the values or range of values to be displayed for a specific field. For example, display only orders for which the supply date has passed.


