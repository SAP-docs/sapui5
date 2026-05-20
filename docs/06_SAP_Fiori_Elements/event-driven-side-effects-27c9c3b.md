<!-- loio27c9c3bad6eb4d99bc18a661fdb5e246 -->

# Event-Driven Side Effects

You can annotate side effect events in SAP Fiori elements for OData V4.

In contrast to side effects with source properties or entities that are triggered by user interactions, side effect events are triggered by the application server. The server triggers the event by sending a message to the client through the `WebSocket` connection. The message contains the event name and the entity key of the entity type that should be refreshed. The client then checks if this entity is currently shown to the user, fetches the entity from the server, and updates the properties accordingly.

See the following example of how to annotate a side effect event:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="MyService.MyEntityType"> 
>      <Annotation Term="com.sap.vocabularies.UI.v1.SideEffects"> 
>           <Record Type="SAP__common.SideEffectsType"> 
>                <PropertyValue Property="SourceEvents"> 
>                     <Collection> 
>                          <String>MyEventName</String> 
>                     </Collection> 
>                </PropertyValue> 
>                <PropertyValue Property="TargetProperties"> 
>                     <Collection> 
>                          <String>Property1</String> 
>                          <String>Property2</String> 
>                     </Collection> 
>                </PropertyValue> 
>           </Record> 
>      </Annotation> 
> </Annotations> 
> ```

Whenever the  `MyEventName` event  is triggered on the server, the client is notified to refresh `Property1` and `Property2` that belong to  `MyEntityType`.

On the list report page, a typical use case requires refreshing the entire table. To do that, use an absolute path for the `TargetEntities` property in the side effect definition, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="MyService.MyEntityType">
>     <Annotation Term="com.sap.vocabularies.UI.v1.SideEffects">
>         <Record Type="Common.SideEffectsType">
>             <PropertyValue Property="SourceEvents">
>                 <Collection>
>                         <String>MyEventName</String>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="TargetEntities">
>                 <Collection>
>                     <NavigationPropertyPath>/MyService.EntityContainer/MyEntity</NavigationPropertyPath>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

The application can provide the `WebSocket` connection through the `WebSocketBaseURL` and the `WebSocketChannel` annotations, as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="SAP__self.Container"> 
>      <Annotation Term="SAP__common.WebSocketBaseURL" String="testEndpoint" /> 
>      <Annotation Term="SAP__common.WebSocketChannel" Qualifier="sideEffects" String="cinema" /> 
> </Annotations>
> ```



<a name="loio27c9c3bad6eb4d99bc18a661fdb5e246__section_v52_l5c_3bc"/>

## Interaction Type

The following interaction types are supported if data is refreshed:

-   `"Notification"`: The data is automatically refreshed. A notification is shown to the user. This is the default setting.

-   `"Confirmation"`: A confirmation dialog is shown to the user. The user can decide whether to refresh the data.

-   `"None"`: The data is automatically refreshed without any UI interaction.


The interaction type can be defined in the `manifest.json` file as shown in the following sample code.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> { 
>      "sap.fe": { 
>           "app": { 
>                "sideEffectsEventsInteractionType": "Confirmation" 
>           }
>      } 
> }
> ```

You can also define different interaction types for specific events, as shown in the following sample code. The interaction type defined as `default` is applied to all events that are not listed.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> {
>     "sap.fe": {
>         "app": {
>             "sideEffectsEventsInteractionType": {
>                 "default": "None",
>                 "events": {
>                     "myEventName": "Confirmation",
>                     "myOtherEventName": "Notification"
>                 }
>             }
>         }
>     }
> }
> ```



## Adding Custom Logic Using a Controller Extension Hook

If you require programmatic control over event processing, for example, to run custom logic, override the interaction type at runtime, or stop the default processing, you can implement the `onEventDrivenSideEffectsReceived` hook in a controller extension, as shown in the following sample code:

> ### Sample Code:  
> Controller Extension
> 
> ```javascript
> override: {
>     sideEffects: {
>         onEventDrivenSideEffectsReceived: function (mParameters) {
>             var sEventName = mParameters.sideEffectEventName;
>  
>             if (sEventName === "StockUpdated") {
>                 // Override the interaction type. Ask the user to confirm
>                 // before the data is refreshed, instead of the default toast.
>                 return Promise.resolve({ interactionType: "Confirmation" });
>             }
>  
>             if (sEventName === "PriceChanged") {
>                 // Stop all SAP Fiori elements processing for this event and
>                 // handle the refresh with custom logic instead.
>                 this.myReuseComponent.refresh();
>                 return Promise.reject();
>             }
>  
>             // For all other events, apply the manifest setting or default behavior.
>             return Promise.resolve({});
>         }
>     }
> }
> ```

The hook is defined on the `SideEffects` controller extension and is called once per visible page, immediately after a `WebSocket` message has been validated and before any UI interaction or data refresh occurs.

The hook receives an `mParameters` object with the following properties:

-   `sideEffectEventName`: The name of the side-effects event, which matches the value in the `SourceEvents` annotation.
-   `sideEffectSource`: The OData path of the entity instance that triggered the event.

The return value of the hook determines what happens next, as one of the following outcomes:

-   If the promise from the hook resolves as `{}`, the interaction type from the `manifest.json` file is used or the default interaction type.
-   If the promise from the hook resolves as `interactionType: "Confirmation"`, `interactionType: "Notification"`, or `interactionType: "None"`, then the value of `interactionType` overrides the manifest setting.
-   If the promise from the hook is rejected, processing is stopped, that is, no data refresh, no confirmation dialog, and no notification toast. You can use this to execute custom logic instead of the default refresh workflow.

> ### Note:  
> When multiple pages are visible simultaneously, for example in a flexible column layout, the hook is called once per visible page. If multiple pages return an `interactionType` override, the value from the last resolved page takes effect. If any page rejects the promise, processing is stopped.

