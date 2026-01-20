<!-- loio3d18f20bd2294228acb6910d8e8a5fb5 -->

# Routing and Navigation

SAPUI5 offers hash-based navigation, which allows you to build single-page apps where the navigation is done by changing the hash. In this way the browser does not have to reload the page; instead there is a callback to which the app and especially the affected view can react. A hash string is parsed and matched against patterns which will then inform the handlers.

You use routing in the following cases:

-   Enable users to navigate back using the browser history, for example, the *Back* button of the browser or a physical back button on mobile devices.

-   Enable bookmarks and deep links to pages inside an app; this means that you can start the app and resume the bookmarked state.

-   Pass on data via the hash to application logic.


  
  
**Routing overview**

![](images/SAPUI5_Navigation_3b3a63b.png "Routing overview")

In SAPUI5, navigation and routing is implemented using a "router" to forward the hash change and the data in the hash to one or more views of the app.

You use **routes** to notify your application that the hash has changed to a certain value. For each route, you define the pattern that can be used in the app implementation.

With **targets**, you define where a view or a component is loaded and where the view or component is shown on the UI. By referring to one or multiple targets in a route's definition, you can load and show the views or components once the route's pattern matches the current hash.

You configure routing in SAPUI5 in the descriptor file \(`manifest.json`\) \(see [Manifest \(Descriptor for Applications, Components, and Libraries\)](manifest-descriptor-for-applications-components-and-libraries-be0cf40.md)\) or in the `Component.js` file \(see [Components](components-958ead5.md) \) to have it available globally throughout your app, but you can also define routes and targets locally by calling the constructors of the classes, for example under the `sap.ui.core.routing` and `sap.m.routing` namespaces.

> ### Note:  
> You can also define only routes or only targets, but then just have to make sure that you implement the counterpart elsewhere.

**Related Information**  


[Tutorial: Navigation and Routing](../03_Get-Started/navigation-and-routing-tutorial-1b6dcd3.md "SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.")

[API Reference: `sap.ui.core.routing`](https://ui5.sap.com/#/api/sap.ui.core.routing)

[API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router)

[API Reference: `sap.ui.core.routing.Route`: Constructor Detail](https://ui5.sap.com/#/api/sap.ui.core.routing.Route/constructor)

[Crossroads.js](https://millermedeiros.github.io/crossroads.js/)

[Hasher framework on GitHub](https://github.com/millermedeiros/hasher/)

