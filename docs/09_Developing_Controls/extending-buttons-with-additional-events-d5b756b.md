<!-- loiod5b756bf4e9a4d67961fa21e1ba12c9e -->

# Extending Buttons with Additional Events

Example of a button control that is extended with additional events.

To create a `HoverButton` control, that is, a button that fires a `hover` event when the mouse enters its area, use the following code:

```js
sap.m.Button.extend("HoverButton", { // call the new Control type "HoverButton" 
                                                // and let it inherit from sap.m.Button
      metadata: {
          events: {
              "hover" : {}  // this Button has also a "hover" event, in addition to "press" of the normal Button
          }
      },
  
      // the hover event handler:
      onmouseover : function(evt) {   // is called when the Button is hovered - no event registration required
          this.fireHover();
      },

      renderer: {} // add nothing, just inherit the ButtonRenderer as is; 
                   // In this case (since the renderer is not changed) you could also specify this explicitly with:  renderer:"sap.m.ButtonRenderer"
                   // (means you reuse the ButtonRenderer instead of creating a new view
  });
```

The `HoverButton` control is used in the application in the same way as a regular button. The following code snippet shows how to attach a handler to the `hover` event:

```js
  
var myControl = new HoverButton("myBtn", {
      text: "Hover Me",
      hover: function(evt) {
          alert("Button " + evt.getSource().getId() + " was hovered.");
      }
  });

  myControl.placeAt("content");
```

