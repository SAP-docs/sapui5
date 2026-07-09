<!-- loio5b1dd11bc3834b05aa9832f2a48a3dec -->

# Configuring Overview Pages Using Runtime Capabilities

Users can configure overview pages by rearranging cards, controlling card visibility, resizing cards, and applying filters that affect all relevant cards on the page.



## Rearranging Cards

Users can rearrange cards on the overview page using drag and drop. They can also drag cards with the mouse, or press [Ctrl\] and the arrow keys on the keyboard.

When users rearrange cards, only the moved cards have their target location saved. The remaining cards are automatically arranged based on the best fit in the layout. To assign a specific target location to each card, move each card at least once.

**Prerequisites for personalization**

-   The screen resolution and size resolution remain the same.

-   The browser zoom level must be set at default size, which is 100%.


Users can enable the Windows ClickLock option to highlight or drag items without holding down the mouse button. To enable this option, proceed as follows:

1.  Open the system *Settings*.

2.  Select *Bluetooth and Devices* and choose *Touchpad*.

3.  Click *More touchpad settings*. The *Mouse Properties* dialog opens.

4.  Under *ClickLock*, select the *Turn on ClickLock* checkbox.


To use ClickLock, click the required card once and move the mouse to drag it. Click again to drop the card at the required location.



## Controlling Card Visibility

Users can hide or show cards on the overview page through the *Manage Cards* dialog.

To hide cards, proceed as follows:

-   In the header bar, click the user menu, and select the *Manage Cards* option.

-   In the *Manage Cards* dialog, select the checkbox to hide or show the relevant card.

-   Click *OK*.


To reset the view to the default settings, in the *Manage Cards* dialog, click *Reset*.



## Resizing Cards

Users can resize a card in any of the following ways:

-   Dragging an edge to resize horizontally or vertically

-   Dragging a corner to resize diagonally.


Cards can also load with a predefined default size.

> ### Note:  
> Resizing of stack cards is not supported. For more information about stack cards, see [Stack Cards](stack-cards-756c49c.md).

For users to resize cards, application developers must enable this capability. To do so, in the `manifest.json` file, set the `containerLayout: "resizable"`.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> { 
>   "card003": { 
>     "model": "salesOrder", 
>     "template": "sap.ovp.cards.v4.table", 
>     "settings": { 
>       "title": "New Contracts", 
>       "entitySet": "SalesOrderSet", 
>       "defaultSpan": { 
>         "rows": 7, 
>         "cols": 2 
>       } 
>     } 
>   } 
> } 
> 
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.



## Filtering Data in Cards

Users can filter the information displayed in cards by defining specific values or value ranges for a field. For example, users can display only orders for which the supply date has passed.

The applied filter affects all cards that share the filtered property in entity type.

> ### Note:  
> The type of filter bar is determined by the service \(entity\) bound to the filter configuration of the overview page application. If the service is an OData V4 service, a `FilterBar` building block is rendered; for OData V2, a smart filter bar is rendered.

Please note that, as opposed to other floorplans for SAP Fiori elements for OData V4, the overview page uses smart controls.

**Related Information**  


[Overview Page Card](overview-page-card-74332d5.md "Cards in are components that use UI annotation to render their content. They contain a header area and a content area.")

[The FilterBar Building Block](the-filterbar-building-block-7838611.md "You can user the FilterBar building block to add a filter bar to your application in SAP Fiori elements for OData V4.")

[Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md "The sap.ui.comp.smartfilterbar.SmartFilterBar control analyzes the $metadata document of an OData service and renders a FilterBar control that can be used to filter, for example, a table or a chart.")

