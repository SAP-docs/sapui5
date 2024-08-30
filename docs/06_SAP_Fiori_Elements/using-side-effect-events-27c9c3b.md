<!-- loio27c9c3bad6eb4d99bc18a661fdb5e246 -->

# Using Side Effect Events

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

In SAP Fiori elements for OData V4, you can annotate side effect events. In contrast to side effects with source properties or entities that are triggered by user interactions, side effect events are triggered by the application server. The server triggers the event by sending a message to the client through the `WebSocket` connection. The message contains the event name and the entity key of the entity type that should be refreshed. The client then checks if this entity is currently shown to the user, fetches the entity from the server, and updates the properties accordingly.

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

Whenever the  `MyEventName` event  is triggered on the server, the client is notified to refresh the  `Property1` and `Property2` properties of the  `MyEntityType` entity type.

The application can provide the `WebSocket` connection through the `WebSocketBaseURL` and the `WebSocketChannel` annotations.

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

SAP Fiori elements for OData V4 supports three interaction types if data is refreshed:

-   `"Notification"`: The data is automatically refreshed. A notification is shown to the user. This is the default setting.

-   `"Confirmation"`: A confirmation dialog is shown to the user. The user can decide whether to refresh the data.

-   `"None"`: The data is automatically refreshed without any UI interaction.


The interaction type can be defined in the `manifest.json`.

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

You can also define different interaction types for specific events, as shown in the following example. The interaction type defined as `default` is applied to all events that are not listed.

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

