<!-- loio00683f95eff64d3d9e2991a7fd9f1db8 -->

# Setting Authorizations for Cards

By setting authorization on cards, you can ensure that a user only sees cards or a preview of content from an application for which they have the proper authorization.

An overview page provides end users a comprehensive view of the business data in a specific domain, allowing them to interact with it directly. Users can perform key actions, such as clicking a card to navigate to another application. However, if a user attempts an intent-based navigation to another application without the necessary authorization, they may encounter an access error.

To improve this user experience, during card configuration, you can add the property `requireAppAuthorization` in the `manifest.json` file. When the user accesses an app, this property is checked against `isIntentSupported` to verify whether the user has the required authorization. If authorized, the card is displayed. This approach allows you to explicitly control the intent as required.

To enhance this user experience, you can add the **requireAppAuthorization** property in the `manifest.json` file during card configuration. When a user accesses an app, this property is checked using **isIntentSupported** to verify whether the user has the required authorization. If authorized, the card is displayed. This approach allows you to explicitly control the intent as needed.

Also, `isIntentSupported` is standard functionality in the Cross Application Navigation Service.

> ### Note:  
> The `requireAppAuthorization` check does not work in design time for the overview page cards. Consequently, it is also not effective when creating adaptation project or extending using UI adaptation scenario, for example, when creating extension project from BAS or Visual Studio Code.

> ### Sample Code:  
> ```
> 
> {
>   "sap.ovp": {
>    ...
>     "cards": {
>      ...
>       "card01": {
>         "model": "salesOrder",
>         "template": "sap.ovp.cards.stack",
>         "settings": {
>           "title": "Stack Card Title",
>           "subTitle": "Stack Card",
>           "requireAppAuthorization": "#Action-toappnavsample",
>           "entitySet": "SalesOrderSet"
>         }
>       }
>     }
> ...
>   }
> }
> ```

