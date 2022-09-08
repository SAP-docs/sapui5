<!-- loiobafc1f9ff60b49fca6d8bb8aa875f075 -->

# Example: Custom State Handling

This example shows how to implement inner app state handling for custom UI elements.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

The custom UI shows a map containing two state information items:

-   The `zoomFactor` is a number between 1 and 100. The `zoomFactor` should be passed to other instances on pagination. The `zoomFactor` should also remain valid for the whole session.

-   The `selectedCity` is information consisting of a country and a city. The selected state should not be passed to other instances. However, it should be bookmarkable for the current instance, when customers enable storage on the frontend server.


The following sample code shows this:

> ### Sample Code:  
> ```
> 
> onZoomFactorChange: function(iZoomFactor){
>     if (!this.isAdoptingState){ // ignore case where we are just adapting to the given state
>         this.zoomFactor = iZoomFactor;
>         // Inform framework that state of custom ui area has changed
>         this.extensionAPI.onCustomStateChange();
>     }
> },
>  
> 
> onSelectedCityChange: function(sCountry, sCity){
>     if (!this.isAdoptingState){ // ignore case where we are just adapting to the given state
>         this.city = sCity;
>         this.country = sCountry; 
>         // Inform framework that state of custom ui area has changed
>         this.extensionAPI.onCustomAppStateChange();
>     }
> },
>  
> 
> provideCustomStateExtension: function(oState){
>     oState.zoomFactor = {
>         data: this.zoomFactor,
>         lifecycle: {
>             session: true,
>             pagination: true
>         }
>     };
>     oState.selectedCity = {
>         data: {
>             country: this.country,
>             city: this.city
>         },
>         lifecycle: {
>             permanent: true
>         }
>     };
> },
>  
> 
> applyCustomStateExtension: function(oState, bIsSameAsLast){
>     if (bIsSameasLast){
>         return; // all controls are still in the correct state
>     }
>     this.isAdoptingState = true;
>     this.setZoomFactor(oState.zoomFactor);
>     this.setSelectedCity(oState.selectedCity.country, oState.selectedCity.city);
>     this.isAdoptingState = false;
> },
>  
> 
> setZoomFactor: function(iZoomFactor){
>     this.zoomFactor = iZoomFactor; 
>     //... custom code which brings the map to the given zoom factor
> },
>  
> 
> setSelectedCity: function(sCountry, sCity){ 
>     this.city = sCity; 
>     this.country = sCountry;
>     //... custom code which selects the specified city 
> }
> 
> ```

> ### Note:  
> We recommend introducing the controller property `isAdoptingState` if `setZoomFactor` and/or `setSelectedCity` trigger the event handlers calls `onZoomFactorChange` or `onSelectedCityChange`, respectively.

