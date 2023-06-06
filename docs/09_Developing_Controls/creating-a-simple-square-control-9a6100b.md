<!-- loio9a6100ba15564561b5439b7e7ba554a9 -->

# Creating a Simple Square Control

Example of a simple `Square` control that is rendered as a red square with text inside that pops up an alert when clicked

```js

// "Control" required from "sap/ui/core/Control"
var Square = Control.extend("my.Square", { // call the new Control type "my.Square" and let it inherit
                                           // from sap.ui.core.Control

      // the Control API:
      metadata : {
          properties : {           // setter and getter are created behind the scenes, 
                                   // incl. data binding and type validation
              "text" : "string",   // in simple cases, just define the type
              "size" : {type: "sap.ui.core.CSSSize", defaultValue: "200px"} 
                                   // you can also give a default value and more
          }
      },
      

      // the part creating the HTML:
      renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance
                                           // instead of "this" in the render function
              oRm.openStart("div", oControl);  // creates the root element incl. the Control ID and enables event handling - important!
              oRm.style("width", oControl.getSize());  // write the Control property size; the Control has validated it to be a CSS size
              oRm.style("height", oControl.getSize());
              oRm.class("mySquare");           // add a CSS class for styles common to all Control instances
              oRm.openEnd();                   // this call writes the above class plus enables support 
                                               // for Square.addStyleClass(...)
              oRm.text(oControl.getText());    // write another Control property, with protection against cross-site-scripting
              oRm.close("div");
          }
      },


      // an event handler:
      onclick : function(evt) {   // is called when the Control's area is clicked - no event registration required
          alert("Control clicked! Text of the Control is:\n" + this.getText());
      }
  });
```

The information for the visual appearance can be written to the control HTML in the `render` method in the same way as the instance-specific width and height. We recommend, however, to define style information that is common to all control instances in a CSS file or in a <style\> tag. Thus, it is only written once and can be easily modified by the application.

In general, however, when controls need their own CSS and are also supposed to participate in the theming concept, it is recommended not to use on-the-fly controls, but to create real control libraries. Those take care of loading the CSS, providing right-to-left support, and so on.

To add a grey background, a red border and some alignment information, use the following code:

```cs

<style>
    .mySquare {                  /* style the CSS class that has been written by the renderer method */
        display: inline-block;   /* enable squares to appear next to each other within one line */
        border: 1px solid red;   /* add some border, so the square can actually be seen */
        background-color: #ddd;
        padding: 8px;
        text-align: center;
        -moz-box-sizing: border-box; /* consider padding+border part of the width/height */
        box-sizing: border-box;
    }
</style>
```

This custom control can now be used like any SAPUI5 control:

```js

// "Square" required from "my/Square"
var myControl = new Square({text:"Hello", size: "100px"});
myControl.placeAt("content");
```

