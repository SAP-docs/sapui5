<!-- loioe49832920f034638bf3ac6d9a0bd9af1 -->

# Events

`List` and `Table` provide a `swipe` event when a user swipes left to bring in a control on the right-hand side of the list item within a table or list. This event is fired before the `swipeContent` is shown and contains the following three important parameters:

-   `listItem`: List item that fired the swipe event
-   `swipeContent`: Specifies the `swipeContent` control to be shown on the right-hand side of a list item
-   `srcControl`: Specifies the control that fired the swipe event

This means that you can dynamically change the swipe content according to the respective list item. If a list item has not yet been approved, for example, then the *Approve* button is shown. After approval or if it is already approved, the *Disapprove* button is shown. See the following example:

```js

<List 
    id=... 
    swipe="handleSwipe" ... >
    ...
    <swipeContent>
      <Button
        text="Approve Item"
        type="Accept"
        press="handleApprove" />
    </swipeContent>
  </List>

```

And this is how it looks in the controller:

```js

handleSwipe: function(e) {   // register swipe event
        var oSwipeListItem = e.getParameter("listItem"),    // get swiped list item from event
            oSwipeContent = e.getParameter("swipeContent"); // get swiped content from event

        // Check swiped list item if it is already approved or not
        if (oSwipeListItem.data("approved")) {    
            // List item is approved, change swipeContent(button) text to Disapprove and type to Reject
            oSwipeContent.setText("Disapprove").setType("Reject");  
        } else  {
            // List item is not approved, change swipeContent(button) text to Approve and type to Accept
            oSwipeContent.setText("Approve").setType("Accept");     
        }
    },

```

Swipe events can be cancelled. The built-in controls that work with swipe left events like `Switch` or `Slider` cancel a swipe event by default. If you also want to disable swipe events for your custom use case, you can call the `preventDefault` method of the event object, as shown in the following example:

```js

handleSwipe : function(e) {
         // get which control inside the list item fired swipe event
        var oSrcControl = e.getParameter("srcControl");

        // check if the event is coming from Input
        if (oSrcControl instanceof sap.m.Input) {
            e.preventDefault();   // cancel swipe
        }
    },
    ...

```

