<!-- loioc75861e33942410d9ac77322763db203 -->

# Reacting on User Input Events

User input events can either be handled automatically by the framework or manually by the application.



<a name="loioc75861e33942410d9ac77322763db203__section_tlz_s54_gpb"/>

## Automatic User Input Event Handling

User input errors can be detected automatically by the framework. This is the preferred way of handling such events and requires the use of a Component for your app in accordance with UI5 Best Practices. You can activate the automatic generation of validation messages in the "sap.ui5" section of the **manifest.json** file as follows:

> ### Example:  
> **Activating automatic user input event handling**
> 
> ```json
> {
>   ...
>   "sap.ui5": {
>     ...
>     "handleValidation": true
>     ...
>   }
> }
> ```

Controls implementing the `refreshDataState` method then automatically display messages corresponding to the following four [Core](https://ui5.sap.com/#/api/sap.ui.core.Core) events:

-   `FormatError` 
-   `ParseError`
-   `ValidationError` 
-   `ValidationSuccess` 

For more information, see [`sap.ui.model.DataState`](https://ui5.sap.com/#/api/sap.ui.model.DataState).



<a name="loioc75861e33942410d9ac77322763db203__section_l5c_554_gpb"/>

## Manual User Input Event Handling

If your app does not use a Component, you need to manage user input errors manually by creating the desired validation messages and adding them to the [message manager](https://ui5.sap.com/#/api/sap.ui.core.message.MessageManager). As the messages require the UI binding and type, you would have to manually type and bind your input fields. For more information, see [Validation Messages](../04_Essentials/validation-messages-a90d93d.md).

