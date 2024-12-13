<!-- loiobcd64a15ac544b6cb01d7003be0c301f -->

# Example: Enable `VerticalLayout`

Here's how you enable the `VerticalLayout` control.

To enable the control `sap.ui.layout.VerticalLayout` for design time, create the design-time metadata file `VerticalLayout.designtime.js` and define the `domRef` property of the `content` aggregation.

You also have to add the `designtime` property to the metadata of the `sap.ui.layout.VerticalLayout` control.

You can then create the `VerticalLayout.designtime.js` file next to the location of the `VerticalLayout.js` control.

`VerticalLayout.designtime.js` is an SAPUI5 module that returns the design-time metadata.

> ### Sample Code:  
> ```
> var VerticalLayout = Control.extend("sap.ui.layout.VerticalLayout", /** @lends sap.ui.layout.VerticalLayout.prototype */ {
>     metadata: {
>         library: "sap.ui.layout",
>         properties: {
>             ...
>         },
>         defaultAggregation: "content",
>         aggregations: {
>             ...
>         },
>         designtime: sap/ui/layout/designtime/VerticalLayout.designtime.js
>     }
> });
> ```

The `":sap-domref"` value of the content aggregation's `domRef` property points to the DOM reference of the `VerticalLayout` control. This DOM reference is used to calculate the dimensions of the `AggregationOverlay` that represents the content aggregation at design time.

> ### Sample Code:  
> ```
> // Provides the design-time metadata for the sap.ui.layout.VerticalLayout control
> sap.ui.define([], function() {
>     "use strict";
> 
>     return {
>         aggregations: {
>             content: {
>                 domRef: ":sap-domref"
>             }
>         }
>     };
> 
> });
> ```

