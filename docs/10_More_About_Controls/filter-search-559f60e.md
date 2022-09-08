<!-- loio559f60eaf71b47bb9f11a07622880f7c -->

# Filter Search

The popover and dialog displayed by `FacetFilter` contain an `sap.m.SearchField` control. This enables the user to search for specific items in the list.

`FacetFilterList` internally handles the `search` and `liveChange` events by filtering the underlying data model: The search only works when the `FacetFilterList` items aggregation is bound to a model.

The default filtering behavior of the control can be prevented by calling `sap.ui.base.Event.prototype.preventDefault` function in the `search` event handler function. Preventing the default behavior is useful in cases when items aggregation could be taking long time fetching from the OData model. As a result, no list items are loaded initially. If the default filtering behavior is prevented, then application developer has to define the filtering behavior inside the `search` event and `reset` event handler functions.

Be careful when registering a handler for the `search` event at application side. If custom filtering behavior is defined and the default filtering behavior is not prevented, then filtering may occur on both control and application levels. This will result into additional and unnecessary call to the back end service.

If you enable the `liveSearch` property of the `FacetFilter` control, keep the performance in mind as this will result in a backend request for each search character typed by the user.

