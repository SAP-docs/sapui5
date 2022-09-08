<!-- loio35b8a947b95344958b776699c116ad12 -->

# List and Table Events

Both `sap.m.List` and `sap.m.Table` offer the same events, inheriting them from `sap.m.ListBase`.

The events are:

-   `delete`
-   `itemPress`
-   `selectionChange`
-   `swipe`
-   `updateFinished`
-   `updateStarted`

All of these events are handled in the same way: an event is fired, and the event object that is passed contains `listItem` data that tells you which items were affected.

To use these events, you can simply define handlers for them, as shown below:

```js

<Table
   delete="deleteHandler"
   swipe="swipeHandler"
   selectionChange="selectionChangeHandler"
   itemPress="itemPressHandler"
   updateStart="updataeStartHandler"
   updateFinish="updateFinishHandler"
...
```

An example for `delete` would look like this:

```js
<List
      id="list"
      mode="Delete"
      delete="handleDelete"
      enableBusyIndicator="true"
      headerText="Products"
      growing="true"
      items="{
           path: '/ProductCollection'
      }" >
...
```

An example for `selectionChange` would look like this:

```js
<List
      id="idList"
      items="{/ProductCollection}"
      selectionChange="onSelectionChange"
      mode="MultiSelect"
      includeItemInSelection="true" >
…
```

> ### Note:  
> Item press events are not fired for items that have the type `inactive`. As this is the default property of `listItemType`, change it to a different value if you want the event to be fired.
> 
> To test swipe gestures on desktop devices, open the Google Chrome developer tools, and within Settings → Overrides, check the "Emulate touch events" checkbox and reload the page.

