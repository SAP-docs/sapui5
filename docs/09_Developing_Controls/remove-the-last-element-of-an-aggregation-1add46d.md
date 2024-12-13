<!-- loio1add46d522fa4ed28b06b8f2bc27f2bb -->

# Remove the Last Element of an Aggregation

How to remove the last element of an aggregation.

By default, the last element of an aggregation can't be removed.

If you want to allow the removal of the last element, you can provide the parameter `removeLastElement` in the design time of the control that contains the aggregation.

Here's an example:

> ### Sample Code:  
> <control\>.designtime.js
> 
> ```
> sap.ui.define(["sap/ui/core/Lib"], function(Lib) {
>     "use strict";
>     return {
>         aggregations: {
>             headerContent: {
>                 childNames: {
>                     singular: function(){
>                         return Lib.getResourceBundleFor("sap.uxap").getText("HEADER_CONTROL_NAME");
>                     }
>                 },
>                 actions: {
>                     remove: {
>                         removeLastElement: true
>                     }
>                 }
> 
>             }
>         }
>     };
> });
> ```

