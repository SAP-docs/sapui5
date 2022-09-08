<!-- loio39d25641086c42aaa745028e15562ba8 -->

# Creating a Simple Container Control

Example of a container control with arbitrary child controls that are rendered in a row and a colored box around each child

```js
sap.ui.core.Control.extend("ColorBoxContainer", { // call the new Control type "ColorBoxContainer"
    // and let it inherit from sap.ui.core.Control

    // the Control API:
    metadata : {
        properties : {            // setter and getter are created behind the scenes,
            // incl. data binding and type validation
            "boxColor" : "string"  // the color to use for the frame around each child Control
        },
        aggregations: {
            content: {singularName: "content"} // default type is "sap.ui.core.Control", multiple is "true"
        }
    },


    // the part creating the HTML:
    renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance
        // instead of "this" in the renderer function
        oRm.write("<div");
        oRm.writeControlData(oControl);  // writes the Control ID and enables event handling - important!
        oRm.writeClasses();              // there is no class to write, but this enables
                                         // support for ColorBoxContainer.addStyleClass(...)
        oRm.write(">");

        var aChildren = oControl.getContent();
        for (var i = 0; i < aChildren.length; i++) { // loop over all child Controls,
            // render the colored box around them
            oRm.write("<div");
            oRm.addStyle("display", "inline-block");
            oRm.addStyle("border", "3px solid " + oControl.getBoxColor()); // specify the border around the child
            oRm.writeStyles();
            oRm.write(">");

            oRm.renderControl(aChildren[i]);   // render the child Control
                                               // (could even be a big Control tree, but you don't need to care)


            oRm.write("</div>"); // end of the box around the respective child
        }

        oRm.write("</div>"); // end of the complete Control
    }
});
```

As the control itself has no appearance, no additional CSS is required.

You can use this container control like any SAPUI5 container:

```js
var oButton = new sap.m.Button({text:'Hello World'});
var oInput = new sap.m.Input({placeholder:'edit text here'});

var container = new ColorBoxContainer({
    boxColor: "#ff7700",
    content:[
        oButton,
        oInput
    ]});
container.placeAt('content');
```

