<!-- loio00683f95eff64d3d9e2991a7fd9f1db8 -->

# Setting Authorizations for Cards

You can set authorization on overview page cards to ensure that users only see cards or content previews for applications they're authorized access.

An overview page provides users a comprehensive view of the business data in a specific domain. Users can interact with the page by performing key actions such as clicking a card to navigate to another application However, if a user attempts an intent-based navigation to another application they aren't authorized, they may encounter an access error.

To control card visibility based on user authorization, define the `requireAppAuthorization` property in the `manifest.json` file. This property is checked against `isIntentSupported` to verify whether the user is authorized to access the application. The card is displayed only if the user is authorized. This approach allows you to explicitly control the intent as required.

Also, `isIntentSupported` is standard functionality in the Cross Application Navigation Service.

> ### Note:  
> The `requireAppAuthorization` check does not work in design time for the overview page cards. Consequently, it is not effective when creating adaptation projects or extending using UI adaptation scenario, for example, when creating extension project from SAP Business Application Studio or Visual Studio Code.

The following sample code shows how to define the `requireAppAuthorization` property to the navigation intent the card:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> {
>   "sap.ovp": {
>    ...
>     "cards": {
>      ...
>       "card01": {
>         "model": "salesOrder",
>         "template": "sap.ovp.cards.v4.stack",
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

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

