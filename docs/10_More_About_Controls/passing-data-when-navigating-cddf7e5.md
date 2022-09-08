<!-- loiocddf7e54277446a4a35c9fd9285da009 -->

# Passing Data when Navigating

When you use the `to(…)` and `back(…)` methods of the `NavContainer` to trigger navigation, you can also give an optional payload data object.

This object is then available in the page events, for example `beforeShow` and `afterShow`. You can also use this mechanism to decouple page implementations.

Example:

```js

app.to("detailPage", {id:"42"}); // trigger navigation and hand over a data object
                                 // this data object could also be a binding context when dealing with data binding
...


// and where the detail page is implemented:
myDetailPage.addEventDelegate({
   onBeforeShow: function(evt) {
      var idToRetrieve = evt.data.id;
      // ...now retrieve the data element with the given ID and update the page UI
   }
});
```

When you navigate back to a page, it receives the original data object which has been given when you first navigated to the page, but you can also give an additional data object with the back navigation.

**Related Information**  


[API Reference: `sap.m.NavContainer`](https://ui5.sap.com/#/api/sap.m.NavContainer)

[API Reference: `sap.m.NavContainerChild`](https://ui5.sap.com/#/api/sap.m.NavContainerChild)

