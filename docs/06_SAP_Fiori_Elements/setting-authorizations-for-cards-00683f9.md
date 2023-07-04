<!-- loio00683f95eff64d3d9e2991a7fd9f1db8 -->

# Setting Authorizations for Cards

By setting authorization on cards, you can ensure that a user only sees cards or a preview of content from an application for which they have the proper authorization.

An overview page provides a wide overview to the end user so that they can look at and interact with business data in a specific domain. A user can perform key actions such as clicking on a particular card and navigating to another application. But what if the user does an intent-based navigation to another application and gets an error because they're not authorized to access that application?

To improve this user experience, during card configuration, you can add the property `requireAppAuthorization` in the `manifest.json` file. Once a user has entered an app, this property is checked against `isIntentSupported` to see if the user has the required authorizations to access the app. If so, then the card will be displayed. The advantage here is that the intent can be set explicitly as needed.

Also, `isIntentSupported` is standard functionality in the Cross Application Navigation Service.

> ### Note:  
> The `requireAppAuthorization` check does not work in design time for the overview page cards. As a result, it also does not work for creating adaptation project and extending using UI adaptation scenario \(creating extension project from BAS / SAP Web IDE\).

> ### Sample Code:  
> ```
> 
> "sap.ovp":{
> 	...
> 		"cards":{
> 			...
> 			"card01":{
>       		"model": "salesOrder",
>       		"template": "sap.ovp.cards.stack",
>       		"settings": {
>         		"title": "Stack Card Title",
>         		"subTitle": "Stack Card",
>         		"requireAppAuthorization" : "#Action-toappnavsample",
>         		 "entitySet": "SalesOrderSet"
> 					}
>      			},
> 	...
> }
> ```

