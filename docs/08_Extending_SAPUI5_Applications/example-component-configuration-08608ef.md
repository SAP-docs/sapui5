<!-- loio08608efbe1864607a80fb7c41a9645e5 -->

# Example: Component Configuration

The component configuration contains the information about the extension metadata and the objects that are replaced or extended in the custom view or control.

The configuration is stored in the component.js file of the custom application. The component of the custom application needs to inherit from the main component of the original application. To make the location of the original application or component known to SAPUI5, it may be necessary to use `registerModulePath(...)`. The configuration in the extension section contains the extension metadata and describes the objects that are replaced or extended.

The following code snippet shows an example of a configuration structure.

```js

some.sap.Component.extend("some.customer.Component", {
    
    metadata : {
        .....some configuration
        config: {
            .....some configuration
        },
        extensions: {
                      
            "sap.ui.viewExtensions": {        
                "samples.components.ext.sap.Sub2": {    
                    "extension2": {    
                        className: "sap.ui.core.Fragment",    
                        fragmentName: "samples.components.ext.customer.CustomFrag1",
                        type: "XML"
                    },    
                    "extension3": {    
                        className: "sap.ui.core.mvc.View",
                        viewName: "samples.components.ext.customer.CustomSubSubView1",            
                        type: "XML"
                    }    
                },
                "samples.components.ext.sap.Sub4": {
                    "extension4": {
                        className: "sap.ui.core.Fragment",
                        fragmentName: "samples.components.ext.customer.CustomFrag2",
                        type: "JS"
                    }
                }
            },
            
            "sap.ui.viewModifications": {        
                "samples.components.ext.sap.Sub3": {    
                    "someCustomizableTextControl": {    
                        "visible": false
                    }
                }    
            },

            "sap.ui.viewReplacements": {
                "samples.components.ext.sap.Sub1": {
                    viewName: "samples.components.ext.customer.CustomSub1",
                    type: "XML"
                }
            },
            
            "sap.ui.controllerExtensions": {    
                "samples.components.ext.sap.Main": {
                    "controllerName": "samples.components.ext.customer.MainExtension"
                }
            },
             
            "sap.ui.controllerReplacements": {   
                "samples.components.ext.sap.Main": "samples.components.ext.customer.MainReplacement"
            }
        }
    }
});
```

`"sap.ui.viewExtensions"`: Provides custom view content in a specified extension point in the delivered standard application

`"sap.ui.viewModifications"`: Used for overriding control properties of the delivered standard application

`"sap.ui.viewReplacements"`: Used for replacing a standard view with a custom view

`"sap.ui.controllerExtensions"`: Used for extending a controller in a delivered standard application with a custom controller

`sap.ui.controllerReplacements`: Used for replacing a controller in a delivered standard application with a custom controller

