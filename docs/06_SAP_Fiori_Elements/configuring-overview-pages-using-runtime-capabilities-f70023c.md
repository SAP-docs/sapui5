<!-- loiof70023cdd95f48baa4ee328829097cb9 -->

# Configuring Overview Pages Using Runtime Capabilities

End users can configure their overview pages by rearranging cards and controlling their visibility by hiding or showing them. They can also apply filters to the displayed information, which affects all relevant cards on the page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Configuring Overview Pages Using Runtime Capabilities](configuring-overview-pages-using-runtime-capabilities-5b1dd11.md).

End users can configure their overview pages in the following ways:

-   Rearrange cards

    To rearrange cards using drag and drop, either use the mouse or press [Ctrl\] and the arrow keys on the keyboard. To highlight or drag items without holding down the mouse button, enable the ClickLock option. To enable this option, proceed as follows:

    1.  Open the system *Settings*.

    2.  Select *Bluetooth and Devices* and choose *Touchpad*.

    3.  Click *More touchpad settings*. The *Mouse Properties* dialog opens.

    4.  Under *ClickLock*, select the *Turn on ClickLock* checkbox.


    To use ClickLock, click the required card once and move the mouse to drag it. Click again to drop the card at the required location.

    > ### Note:  
    > -   Cards can be personalized only if the screen resolution and size resolution remain the same.
    > 
    > -   The browser zoom level must be set at default size, which is 100%.
    > 
    > -   Rearrange cards by defining their source and target location. The target location is saved only for the moved cards. The remaining cards are automatically arranged based on the best fit in the layout. To assign a specific target location to each card, move each card at least once.

-   Control the visibility of cards

    To hide cards, proceed as follows:

    1.  In the header bar, click the user menu, and then select the *Manage Cards* option.

    2.  In the *Manage Cards* dialog, select the checkbox to hide or show the relevant card.

    3.  Click *OK*.


    To reset the view to the default settings, in the *Manage Cards* dialog, click *Reset*.

-   Resize cards

    To resize a card, drag an edge to resize horizontally or vertically, or drag a corner to resize diagonally. Cards can also load with a predefined default size. To enable resizing, application developers must configure the card settings and set the `containerLayout: "resizable"` in the `manifest.json` file.

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
    > Resizing of stack cards is not supported.

-   Filter data in cards

    To filter the information displayed in cards, define specific values or value ranges for a field. For example, display only orders for which the supply date has passed.


