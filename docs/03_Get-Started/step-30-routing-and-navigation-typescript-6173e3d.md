<!-- loio6173e3d583b84c3696503e1d7c3761c1 -->

# Step 30: Routing and Navigation \(TypeScript\)

So far, we have put all app content on one single page. As we add more and more features, we want to split the content and put it on separate pages.

In this step, we will use the SAPUI5 navigation features to load and show a separate detail page that we can later use to display details for an invoice. In the previous steps, we defined the page directly in the app view so that it is displayed when the app is loaded. We will now use the SAPUI5 router class to load the pages and update the URL for us automatically. We specify a routing configuration for our app and create a separate view for each page of the app, then we connect the views by triggering navigation events.



## Preview

  
  
**A second page is added to display the invoice**

![A page consisting of Walkthrough - Details header and Invoice as body text](images/UI5_Walkthrough_Step_30_94152a5.png "A second page is added to display the invoice")



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_ips_rvh_tyb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 30: Routing and Navigation](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/30) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-30.zip).



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_wd5_kcv_4zb"/>

## webapp/i18n/i18n.properties

First, we add a new text-value pair to our resource bundle to define a title for the new detail page we'd like to create.

```ini
…
# Invoice List
invoiceListTitle=Invoices
invoiceStatusA=New
invoiceStatusB=In Progress
invoiceStatusC=Done

# Detail Page
detailPageTitle=UI5 TypeScript Walkthrough - Details
```



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_anj_4cv_4zb"/>

## webapp/view/Detail.view.xml \(New\)

Now we add the new `Detail.view.xml` file to our view folder. Besides the root node of the XML structure and the required namespaces, it only contains a `Page` control that displays the title we just defined in our resource bundle and an `ObjectHeader` control with a static text *Invoice* assigned to the `title` attribute \(this we will change in the next step\).

```xml
<mvc:View
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Page
		title="{i18n>detailPageTitle}">
		<ObjectHeader title="Invoice"/>
	</Page>
</mvc:View>
```



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_lcd_qcv_4zb"/>

## webapp/view/Overview.view.xml \(New\)

Next, we create another view in the view folder, called `Overview.view.xml.` We add the root node of the XML structure including the required namespaces to it. Then we copy and paste from the app view everything between and including the `Page` control to our new view.

For simplicity, we reuse the controller `ui5.walkthrough.controller.App` for our new view as it only contains our helper method to open the dialog.

```xml
<mvc:View
    controllerName="ui5.walkthrough.controller.App"
    xmlns="sap.m"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true">
    <Page title="{i18n>homePageTitle}">
        <content>
            <mvc:XMLView viewName="ui5.walkthrough.view.HelloPanel" />
            <mvc:XMLView viewName="ui5.walkthrough.view.InvoiceList" />
        </content>
    </Page>
</mvc:View>
```

As we reuse the controller `ui5.walkthrough.controller.App` for two different views \(for the new overview and for the app view\), two instances of that controller are instantiated at runtime. In general, one instance of a controller is instantiated for each view that references the controller.



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_mcd_qcv_4zb"/>

## webapp/view/App.view.xml

In the app view, we now remove everything and between the control aggregation `pages`, as this content has a new home in the overview view we just created. We provide an `id` to the app control as we want to use this control for our router configuration in the app descriptor in the next step.

```xml
<mvc:View
    controllerName="ui5.walkthrough.controller.App"
    xmlns="sap.m"
    xmlns:mvc="sap.ui.core.mvc"
    displayBlock="true">
    <Shell>
        <App
            class="myAppDemoWT"
            id="app"/>
    </Shell>
</mvc:View>
```



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_jps_rvh_tyb"/>

## webapp/manifest.json

We thus have everything we need to define a routing from the start view to the details view we just defined. We'd like to start with the app view loading our new overview view by default and being replaced by the detail view when a specific route has been hit.

We add a new “routing" section to the `sap.ui5` part of the descriptor. There are three subsections that define the routing and navigation structure of the app:

-   `config`

    This section contains the global router configuration and default values that apply for all routes and targets. The property `routerClass` is special as it determines the router implementation. The default value is `sap.ui.core.routing.Router`. Here, we set it to `sap.m.routing.Router`, because our app is based on `sap.m`. All other properties in `config` are given to the router instance. For example, we define in `path` where our views are located in the app. As we want to specify view-to-view navigation and we only use XML views in our app, we preset also the parameters `type` and `viewType`. To load and display views automatically, we also specify the `controlId` of the control that will contain the views, and the aggregation \(`controlAggregation`\) of the control where the views will be added. Here, we specify that the views are loaded into the `pages` aggregation of the control with the ID we provided in the app view.

    > ### Note:  
    > The possible values for `routerClass` are `sap.ui.core.routing.Router`, `sap.m.routing.Router`, or any other subclass of `sap.ui.core.routing.Router`. Compared to `sap.ui.core.routing.Router`, the `sap.m.routing.Router` is optimized for mobile apps and adds the properties `level`, `transition` and `transitionParameters`, which can be specified for each route or target created by `sap.m.routing.Router`.

-   `routes`

    Each route defines a name, a pattern, and one or more targets to navigate to when the route has been hit. The pattern is basically the URL part that matches to the route, we define two routes for our app. The first one is a default route that will show the overview page with the content from the previous steps, and the second is the detail route with the URL pattern `detail` that will show our new details page.

-   `targets`

    A target defines a view, or even another component, that is displayed; it is associated with one or more routes, and it can also be displayed manually from within the app. Whenever a target is displayed, the corresponding view is loaded and shown in the app. In our app we simply define two targets with a view name that corresponds to the target name.


```
{
  ...
  "sap.ui5": {
  ...
    "routing": {
      "config": {
        "routerClass": "sap.m.routing.Router",
        "type": "View",
        "viewType": "XML",
        "path": "ui5.walkthrough.view",
        "controlId": "app",
        "controlAggregation": "pages"
      },
      "routes": [
        {
          "pattern": "",
          "name": "overview",
          "target": "overview"
        },
        {
          "pattern": "detail",
          "name": "detail",
          "target": "detail"
        }
      ],
      "targets": {
        "overview": {
          "id": "overview",
          "name": "Overview"
        },
        "detail": {
          "id": "detail",
          "name": "Detail"
        }
      }
    }
  }
}
```

The router will automatically add the view that corresponds to the current URL into the app control. The router identifies the app control with the ID that corresponds to the property `controlId: “app”` in the app descriptor\`.

The overview view is always shown when the hash is empty. The detail view is shown when the hash matches the pattern `detail`.

> ### Note:  
> The sequence of the routes in the routes definition is important. As soon as a pattern is matched, the following patterns are ignored. To prevent this for a specific route, you can use the `greedy` parameter. If set to `true`, the route is always taken into account.



## webapp/Component.ts

In the component initialization method, we now add a call to initialize the router.

```js
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json"
    };
    init(): void {
        // call the init function of the parent
        super.init();
        
        // set data model
        const data = {
            recipient: {
                name: "World"
            }
        };
        const model = new JSONModel(data);
        this.setModel(model);

        // create the views based on the url/hash
        this.getRouter().initialize();
    };
};
```

We do not need to instantiate the router manually, it is automatically instantiated based on our configuration in the app descriptor and assigned to the component.

Initializing the router will evaluate the current URL and load the corresponding view automatically. This is done with the help of the routes and targets that have been configured in the `manifest.json`. If a route has been hit, the view of its corresponding target is loaded and displayed.



## webapp/controller/InvoiceList.controller.ts

What is still missing is the event handler that performs a navigation to the detail page by clicking an item in the invoice list: To access the router instance for our app we first need to cast `this.getOwnerComponent()` to our component, then we can call the helper method `getRouter()`. On the router we call the `navTo` method passing the pattern name we defined in our app descriptor for routing to the details page.

```js
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "../model/formatter";
import { SearchField$SearchEvent } from "sap/m/SearchField";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";
import Component from "../Component";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
    public formatter = formatter;
		…
    onPress(): void {
        const router = (<Component> this.getOwnerComponent()).getRouter();
        router.navTo("detail");
    }
};
```



<a name="loio6173e3d583b84c3696503e1d7c3761c1__section_q2r_5cv_4zb"/>

## webapp/view/InvoiceList.view.xml

In the invoice list view we add a press event to the list item we just defined in the controller and set the item type to `Navigation` so that the item can actually be clicked.

```xml
<mvc:View
    controllerName="ui5.walkthrough.controller.InvoiceList"
    xmlns="sap.m"
    xmlns:mvc="sap.ui.core.mvc">
    ...
        <items>
            <ObjectListItem
                title="{invoice>Quantity} x {invoice>ProductName}"
                number="{
                    parts: [
                        'invoice>ExtendedPrice',
                        'view>/currency'
                    ],
                    type: 'sap.ui.model.type.Currency',
                    formatOptions: {
                        showMeasure: false
                    }
                }"
                numberUnit="{view>/currency}"
                numberState="{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }"
                type="Navigation"
                press=".onPress" >
                <firstStatus>
                    <ObjectStatus
                        text="{
                            path: 'invoice>Status',
                            formatter: '.formatter.statusText'
                        }"/>
                </firstStatus>
            </ObjectListItem>
        </items>
    </List>
</mvc:View>
```

If you open the app, you should now see the detail page when clicking an item in the list of invoices.



## Conventions

-   Define the routing configuration in the descriptor

-   Initialize the router at the end of your `Component#init` function

**Related Information**  


[Routing Configuration](../04_Essentials/routing-configuration-9023130.md "Routing configuration consists of routes, targets, config, and owner.")

[Methods and Events for Navigation](../04_Essentials/methods-and-events-for-navigation-516e477.md "SAPUI5 provides a method and events for navigation.")

[Initializing and Accessing a Routing Instance](../04_Essentials/initializing-and-accessing-a-routing-instance-acdb6cd.md "This topic describes how to initialize routing in a component and access the routing functions.")

[Tutorial: Navigation and Routing](navigation-and-routing-tutorial-1b6dcd3.md "SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.")

[API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router)

[Samples: `sap.m.routing.Router` ](https://ui5.sap.com/#/entity/sap.m.routing.Router)

