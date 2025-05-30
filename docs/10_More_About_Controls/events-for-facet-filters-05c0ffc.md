<!-- loio05c0ffca736f4336ae135ca108a07234 -->

# Events for Facet Filters

Facet filters support several events, such as reset and list open.

As the user interacts with the `FacetFilter` control, the following key events are fired for event handling in the application:

-   `confirm` event \(`FacetFilter` control\)

    Fired when the user confirms filter selection.

-   `reset` event \(`FacetFilter` control\)

    The `reset` event is fired when the user presses the *Reset* icon on the toolbar or summary bar.

    You can use the `showReset` property of the `FacetFilter` control to disable the *Reset* icon so that it is no longer displayed. The application is responsible for implementing the reset logic.

    To remove all selected filters from a facet filter list, call `removeSelections(true)`.

-   `listOpen` event \(`FacetFilterList` control\)

    The `listOpen` event is fired when the user selects a facet from the toolbar or when a facet is selected in the dialog.

    You can use this event to load the list with data the first time the user accesses it as opposed to loading all the lists with data when the application is initialized.

-   `listClose` event \(`FacetFilterList` control\)

    The `listClose` event is fired when the user closes a popover, navigates back from the filter items page in the dialog, or closes the dialog. You use this event to handle any processing that needs to occur based on facet filter item selections, such as filtering the target data set.

-   `search` event \(`FacetFilterList` control\)

    Triggered after the Search button is pressed or by pressing Enter in search input field.

    The default filtering behavior of the control can be prevented by calling `sap.ui.base.Event.prototype.preventDefault` function in the `search` event handler function. Preventing the default behavior is useful in cases when items aggregation could be taking long time fetching from the OData model. As a result, no list items are loaded initially. If the default filtering behavior is prevented then filtering behavior has to be defined at application level inside the `search` event handler function.

    Listeners may prevent the default action of this event by calling the `preventDefault` method on the event object.


