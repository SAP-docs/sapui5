<!-- loio8f794e59480b486ea2a45f162b429608 -->

# Example: Enable `ScrollContainers`

Here's how you enable the `ScrollContainers` control.

The `ObjectPageLayout` has several aggregations that are scrolled in one scroll wrapper. In this case, the definition which aggregations are in the `scrollContainer` is dynamic, so there needs to be an update whenever the definition changes. In this case, the second argument in the function needs to be called with an object with `index` as property. The index refers to the index of the current `ScrollContainer` inside the array so that only this one is updated. After the `fnUpdateFunction` is called, the function to get the aggregations is called again to get the new state of the definition. This then updates the `ScrollContainer`.

The second `ScrollContainer` is for the extra `Scrollbar` of the `ObjectPageLayout`.

> ### Sample Code:  
> ObjectPageLayout.designtime.js
> 
> ```
> sap.ui.define([], function() {
>     "use strict";
>     return {
>         name: { ... },
>         aggregations: { ... },
>         scrollContainers: [
>             {
>                 domRef: "> .sapUxAPObjectPageWrapper",
>                 aggregations: function(oElement, fnUpdateFunction) {
>                     if (isHeaderInTitleArea(oElement)) {
>                         return ["sections"];
>                     } else if (oElement._bStickyAnchorBar){
>                         return ["sections", "headerContent"];
>                     } else {
>                         return ["sections", "_anchorBar", "headerContent"];
>                     }
>                 }
>             },
>             {
>                 domRef: function(oControl) {
>                     return oControl.$("vertSB-sb").get(0);
>                 }
>             }
>         ]
>     };
> });
> ```

