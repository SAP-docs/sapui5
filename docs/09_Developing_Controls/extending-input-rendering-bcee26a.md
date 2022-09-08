<!-- loiobcee26a4801748f39bf5698d83d903aa -->

# Extending Input Rendering

Example of an `Input` control with changed rendering.

The following code snippet creates a control type that inherits from `sap.m.Input`. The new control has all features from the `Input` control, but the rendering is changed to be highlighted with yellow background.

The control API and the `render` method can be inherited as it is and the `renderInnerAttributes` method of the `InputRenderer` is overwritten:

```js
  
sap.m.Input.extend("HighlightInput", {// call the new Control type "HighlightInput" 
                                      // and let it inherit from sap.m.Input

			renderer: {
				// note that no render() function is given here. The Input's render() function is used. 
				// But one function is overwritten:

				writeInnerAttributes : function(oRm, oInput) {
					sap.m.InputRenderer.writeInnerAttributes.apply(this, arguments); // the default method should be called
					                                                                 // this will make sure that all default input attributes will be there

					oRm.addStyle('background-color', '#ffff00');  // this change could also be done with plain CSS. 
					                                              // But you get the idea...
					  }
				  }
			  });
```

The `HighlightInput` control can be used in an application in the same way as `Input`:

```js

var myControl = new HighlightInput({value:"Highlighted editing"});
myControl.placeAt("content");
```

