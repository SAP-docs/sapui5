<!-- loioc264d66d6e3c4104818bc52c174a000c -->

# Configuration in the `manifest.json`

SAPUI5's extension configuration works through a `Component`'s `manifest.json` file, where you define your customization logic within the `sap.ui5/extends/extensions` section. This declarative approach allows you to specify which views, controllers, or UI elements you want to extend or replace, without the need to modify the original application code.



To set up extensions, your extending component needs to inherit from the original application's main component class using the standard `extend` mechanism in `Component.js`. You also need to declare `manifest: "json"` in your component's metadata to enable manifest-based configuration. This architectural pattern creates a clean separation of concerns: Your component class handles the inheritance structure, while the manifest file contains all your declarative extension definitions.

The following table provides an overview of the available extension mechanisms. Each approach serves specific use cases; you'll find detailed implementation guidance in their respective chapters.


<table>
<tr>
<th valign="top">

Extension Type

</th>
<th valign="top">

Manifest Section

</th>
<th valign="top">

When to Use

</th>
</tr>
<tr>
<td valign="top">

[**View Extension \(Extension Points\)**](extension-points-403c050.md)

</td>
<td valign="top">

`sap.ui.viewExtensions`

</td>
<td valign="top">

Use when you need to add custom content to pre-defined locations in views, especially in SAP Fiori elements applications. Ideal for adding new UI sections without modifying the original view structure.

</td>
</tr>
<tr>
<td valign="top">

[**Controller Extensions**](controller-extensions-21515f0.md)

</td>
<td valign="top">

`sap.ui.controllerExtensions`

</td>
<td valign="top">

Use when you need to add functionality to existing controllers without replacing them entirely. Great for extending SAP-delivered applications with additional event handlers, custom business logic, or overriding specific methods while preserving the original controller structure.

</td>
</tr>
<tr>
<td valign="top">

[**View Modification**](view-modification-aa93e1c.md)

</td>
<td valign="top">

`sap.ui.viewModifications`

</td>
<td valign="top">

Use when you need simple property changes to existing controls; currently only applicable to toggling the visibility of UI elements.

</td>
</tr>
<tr>
<td valign="top">

[**View Replacement**](view-replacement-98861cf.md)

</td>
<td valign="top">

`sap.ui.viewReplacements`

</td>
<td valign="top">

Use when extension points and view modifications are insufficient for your requirements and you need complete control over the view structure. Should only be used for radical UI changes or when the standard view doesn't meet your business needs at all.

</td>
</tr>
<tr>
<td valign="top">

[**Controller Replacement**](controller-replacement-b0b14bf.md)

</td>
<td valign="top">

`sap.ui.controllerReplacements`

</td>
<td valign="top">

Use when you need complete substitution of a controller, especially for typed controllers that require the `extend` syntax. Ideal when controller extensions are not sufficient and you need full control over the controller implementation, including lifecycle methods.

</td>
</tr>
</table>



## Example Extension Configuration

The following code snippets show an example of the full configuration structure using separate `Component.js` and `manifest.json` files including all the above-mentioned extension mechanisms.

> ### Note:  
> Note the plural suffix "`s`" in `controllerNames` for the controller extension definition for `samples.components.ext.sap.Details`. For more information, see [Manifest Configuration](controller-extensions-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_MC).

**`Component.js`** - Extending component class:

```js
sap.ui.define([
    "some/sap/Component"
], (BaseComponent) => {
    "use strict";

    return BaseComponent.extend("some.customer.Component", {
        metadata: {
            manifest: "json"
        }
    });
});
```

**`Component.ts`** - Extending component class \(TypeScript\):

```
import BaseComponent from "some/sap/Component";

/**
 * @namespace some.customer
 */
export default class Component extends BaseComponent {

    public static readonly metadata = {
        manifest: "json"
    };
}
```

**`manifest.json`** - Extension configuration:

```
{
    "sap.app": {
        "id": "some.customer.Component"
    },
    "sap.ui5": {
        "extends": {
            "extensions": {
                "sap.ui.viewExtensions": {        
                    "samples.components.ext.sap.Sub2": {    
                        "extension2": {    
                            "className": "sap.ui.core.Fragment",    
                            "fragmentName": "samples.components.ext.customer.CustomFrag1",
                            "type": "XML"
                        },    
                        "extension3": {    
                            "className": "sap.ui.core.mvc.View",
                            "viewName": "samples.components.ext.customer.CustomSubSubView1",            
                            "type": "XML"
                        }    
                    },
                    "samples.components.ext.sap.Sub4": {
                        "extension4": {
                            "className": "sap.ui.core.Fragment",
                            "fragmentName": "samples.components.ext.customer.CustomFrag2",
                            "type": "JS"
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
                        "viewName": "samples.components.ext.customer.CustomSub1",
                        "type": "XML"
                    }
                },

                "sap.ui.controllerExtensions": {    
                    "samples.components.ext.sap.Main": {
                        "controllerName": "samples.components.ext.customer.MainExtension"
                    },
                    "samples.components.ext.sap.Details": {
                        "controllerNames": ["samples.components.ext.customer.DetailsExt1", "samples.components.ext.customer.DetailsExt2"]
                    }
                },

                "sap.ui.controllerReplacements": {   
                    "samples.components.ext.sap.Main": "samples.components.ext.customer.MainReplacement"
                }
            }
        }
    }
}
```

