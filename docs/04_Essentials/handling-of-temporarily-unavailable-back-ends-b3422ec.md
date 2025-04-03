<!-- loiob3422ec53888461d9c47ef0e809ff3f1 -->

# Handling of Temporarily Unavailable Back Ends

An OData back end cannot process incoming requests while it is under maintenance. Instead, it can respond with an HTTP 503 status code \(Service Unavailable\) and a "Retry-After" header.

For this scenario, SAPUI5 offers the [`v4.ODataModel#setRetryAfterHandler`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/setRetryAfterHandler) API, by which an application can set a handler to determine when requests should be repeated and how the app should behave in the meantime.

All requests which are sent after a model's initialisation and the registration of the handler via the `ODataModel#setRetryAfterHandler` API are supported by this feature.



<a name="loiob3422ec53888461d9c47ef0e809ff3f1__section_uqy_yc1_q2c"/>

## Implementing the Handler

The `ODataModel#setRetryAfterHandler` API expects a function as parameter, which receives an error object with the following properties:

-   `retryAfter` - The "Retry-After" value as a JavaScript `Date` instance. This property determines the point in time when the back end is presumed to be available again.
-   `message` - The error response body in plain text, e.g. "`503 Service Not Available DB migration in progress 2024-06-03 11:53:53`".

The handler must return a Promise which controls when the request is to be repeated. In the Promise constructor, an application can decide what to do while it is waiting for the given timespan to pass. By resolving the Promise, the application initiates the repetition of the request.

If the promise is rejected, the request will not be repeated. In this case, the given error object is passed to the reject function, and the error message is propagated to the [`MessageModel`](https://ui5.sap.com/#/api/sap.ui.model.message.MessageModel).

> ### Example:  
> `#retryAfter` handler
> 
> ```js
> this.getView().getModel().setRetryAfterHandler((oError) => {
>     const iNow = new Date().getTime();
>     const iEnd = oError.retryAfter.getTime();
>     const iRetryAfterMilliSeconds = iEnd - iNow;
>  
>     // Lock UI and show dialog with a progress bar here
>          
>     return new Promise((fnResolve, fnReject) => {               
>         setTimeout(() => {          
>             fnResolve();
>             // Close the previously shown dialog here
>         }, iRetryAfterMilliSeconds);
>     });
> });
> ```

In the above example, the application calculates a time at which it will retry the request.

The returned Promise is resolved after the calculated time, which results in the repetition of the request which received the 503 response. Additionally, failed requests which were sent in parallel to the first one are queued for repetition, too. The UI should be locked during the retry process, for example by using a dialog with a progress bar.

In case multiple models are available for the same back end, the application is responsible for ensuring that all handlers registered for the different models use the same Promise.

> ### Caution:  
> Overwriting a callback handler set by libraries
> 
> If your application was developed in an environment in which libraries register a callback handler, the application should not use the `ODataModel#setRetryAfterHandler` API to overwrite the set handler.For an example, see *Special Handling of 503 Messages \("Service Unavailable" \)* in [Using Messages](../06_SAP_Fiori_Elements/using-messages-239b192.md).

