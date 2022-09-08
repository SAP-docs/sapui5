<!-- loiob8561ff6f4c34c85a91ed06d20814cd3 -->

# Step 9: Allow Bookmarkable Tabs with Optional Query Parameters

The `resume` view contains four tabs as we have seen in the previous steps. However, when the user navigates to the `resume` page, only the first tab is displayed initially. Navigating directly to a specific tab or bookmarking a tab is not yet supported in our current app.

In this step, we implement a bookmarking feature by enabling deep linking to tabs with optional query parameters. A deep link is basically a link that directly references a deeper structure and parameters of the app in the URL. It is often bookmarked or shared to have a convenient entry point into the app for a certain task or action. The selected tab should be reflected in the URL but the tab can also be omitted, for example, when we initially navigate to the resume page.



## Preview

   
  
<a name="loiob8561ff6f4c34c85a91ed06d20814cd3__fig_r1j_pst_mr"/>Deep link to allow bookmarkable tabs

 ![](images/Tutorial_Navigation_and_Routing_Step_09_3eb33f8.png "Deep link to allow bookmarkable tabs") 



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Routing and Navigation - Step 9](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.navigation/sample/sap.ui.core.tutorial.navigation.09).



## webapp/manifest.json

```js
{
	"_version": "1.12.0",
	"sap.app": {
		...
	},
	"sap.ui": {
		...
	},
	"sap.ui5": {
		...
		"routing": {
			"config": {
				"routerClass": "sap.m.routing.Router",
				"type": "View",
				"viewType": "XML",
				"path": "sap.ui.demo.nav.view",
				"controlId": "app",
				"controlAggregation": "pages",
				"transition": "slide",
				"bypassed": {
					"target": "notFound"
				}
			},
			"routes": [{
				"pattern": "",
				"name": "appHome",
				"target": "home"
			}, {
				"pattern": "employees",
				"name": "employeeList",
				"target": "employees"
			}, {
				"pattern": "employees/{employeeId}",
				"name": "employee",
				"target": "employee"
			}, {
				"pattern": "employees/{employeeId}/resume:?query:",
				"name": "employeeResume",
				"target": "employeeResume"
			}],
			"targets": {
				...
			}
		}
	}
}
```

Up until now, you could only navigate to an employee’s resume with the deep link `webapp/index.html#/employees/3/resume`. This will always select the first tab as implemented by the `IconTabBar` control. In order to open the page directly with a specific tab selected and to make the tabs bookmarkable, we add the `?query` parameter to the URL pattern.

This allows URLs like `webapp/index.html#/employees/3/resume?tab=Projects` where the query parameter defines which tab shall be displayed. We change the pattern of the `employeeResume` route to `employees/{employeeId}/resume:?query:`. The new part `:?query:` allows to pass on queries with any parameters, for example, the hash `/#/employees/3/resume?tab=Projects` or `/#/employees/3/resume?tab=Projects&action=edit` matches the pattern and can be processed in the matched event.

The `:?query:` parameter starts and ends with "`:`", which means that it is optional. If you want to make it mandatory, you can use the `{?query}` syntax \(everything in between `{}` is considered as being mandatory\).



## webapp/view/employee/Resume.view.xml

```xml
<mvc:View
	controllerName="sap.ui.demo.nav.controller.employee.Resume"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Page
		title="{i18n>ResumeOf} {FirstName} {LastName}"
		id="employeeResumePage"
		showNavButton="true"
		navButtonPress=".onNavBack">
		<content>
			<IconTabBar
				id="iconTabBar"
				headerBackgroundDesign="Transparent"
				class="sapUiResponsiveContentPadding"
				binding="{Resume}"
				select=".onTabSelect"
				selectedKey="{view>/selectedTabKey}">
				<items>
					<IconTabFilter id="infoTab" text="{i18n>tabInfo}" key="Info">
						<Text text="{Information}"/>
					</IconTabFilter>
					<IconTabFilter id="projectsTab" text="{i18n>tabProjects}" key="Projects">
						<mvc:XMLView viewName="sap.ui.demo.nav.view.employee.ResumeProjects"></mvc:XMLView>
					</IconTabFilter>
					<IconTabFilter id="hobbiesTab" text="{i18n>tabHobbies}" key="Hobbies">
						<Text text="{Hobbies}"/>
					</IconTabFilter>
					<IconTabFilter id="notesTab" text="{i18n>tabNotes}" key="Notes">
						<Text text="{Notes}"/>
					</IconTabFilter>
				</items>
			</IconTabBar>
		</content>
	</Page>
</mvc:View>

```

To update the currently selected tab in the URL we listen to the select event of the `IconTabBar` by setting `select=".onTabSelect"` in the resume view. The `selectedKey` is bound to a view model. This allows to easily change the `selectedKey` according to the selected tab in the URL.



## webapp/controller/employee/Resume.controller.js

```js
sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel"

], function (BaseController, JSONModel) {
	"use strict";
	var _aValidTabKeys = ["Info", "Projects", "Hobbies", "Notes"];
	return BaseController.extend("sap.ui.demo.nav.controller.employee.Resume", {
		onInit: function () {
			var oRouter = this.getRouter();
			this.getView().setModel(new JSONModel(), "view");

			oRouter.getRoute("employeeResume").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			var oArgs, oView, oQuery;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
				path: "/Employees(" + oArgs.employeeId + ")",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
			oQuery = oArgs["?query"];
			if (oQuery && _aValidTabKeys.indexOf(oQuery.tab) > -1){
				oView.getModel("view").setProperty("/selectedTabKey", oQuery.tab);
			} else {
				// the default query param should be visible at all time
				this.getRouter().navTo("employeeResume", {
					employeeId: oArgs.employeeId,
					"?query": {
						tab: _aValidTabKeys[0]
					}
				}, true /*no history*/);
			}

		},
		_onBindingChange: function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		onTabSelect: function (oEvent){
			var oCtx = this.getView().getBindingContext();
			this.getRouter().navTo("employeeResume", {
				employeeId: oCtx.getProperty("EmployeeID"),
				"?query": {
					tab: oEvent.getParameter("selectedKey")
				}
			}, true /*without history*/);
		}

	});
});
```

When a tab is selected manually, its select handler is called. Therefore, let’s first have a look at the `onTabSelect` event handler that is added at the end of the `resume` controller. It detects the `selectedKey` of the tab and navigates to the `employeeResume` route to update the URL in the address bar. Additionally to the mandatory parameter `employeeId`, we pass on a custom `query` object with a parameter `tab` and fill it with the `selectedKey` value that we receive from the `select` event of the `IconTabBar`. By passing on `true` as the third argument we replace the current history to make sure that manually clicked tabs won’t be added to the browser history.

A dependency to `sap/ui/model/json/JSONModel` is added to the controller. Now, we modify the `onInit` function to instantiate a JSONModel and use it as the `view` model. `_aValidTabKeys` is added to the controller. We want to make sure that only valid tabs can be selected. Therefore, the `array _aValidTabKeys` contains all allowed tab keys that we can check against to validate the tab parameter from the URL later. The keys are equal to the keys of our `IconTabFilters` in the `resume` view.

In the `_onRouteMatched` event handler, we add the `oQuery` variable to store a reference to the query object from the router. This allows a more comfortable access to the query object.

In case a query object is passed on and the `tab` parameter has a valid value, we display the specific tab by updating the property `selectedTabKey` in the view model. As the `selectedKey` property of the `IconTabBar` is bound to `{view>/selectedTabKey}` the corresponding tab is selected.

The `else` case is called when either no or an invalid tab parameter is specified. We navigate to the *Info* tab to make sure that the tab parameter is reflected in the URL at all times. The actual requirements of your app might differ, feel free to change it accordingly...



From now on our tabs are bookmarkable. Try to access the following \(deep\) links directly:

-   `webapp/index.html#/employees/3/resume`

-   `webapp/index.html#/employees/3/resume?tab=Info`

-   `webapp/index.html#/employees/3/resume?tab=Projects`

-   `webapp/index.html#/employees/3/resume?tab=Hobbies`

-   `webapp/index.html#/employees/3/resume?tab=Notes`

-   `webapp/index.html#/employees/3/resume?tab=SomethingInvalid`


When you click on any tab you will see that the hash in the URL changes immediately, and when you change the hash in the URL parameter manually, you can see that the UI is also updated accordingly.

**Parent topic:** [Navigation and Routing](navigation-and-routing-1b6dcd3.md "SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.")

**Next:** [Step 8: Navigate with Flip Transition](step-8-navigate-with-flip-transition-3e5f6f3.md "In this step, we want to illustrate how to navigate to a page with a custom transition animation. Both forward and backward navigation will use the “flip” transition but with a different direction. We will create a simple link on the Employee view that triggers a flip navigation to a page that displays the resume data of a certain employee. Pressing the Back button will navigate back to the Employee view with a reversed flip transition.")

**Previous:** [Step 10: Implement Lazy Loading](step-10-implement-lazy-loading-cdab0a1.md "In the previous steps, we have implemented a Resume view that uses tabs to display data. The complete content of the tabs is loaded once, no matter which tab is currently displayed. We can increase the performance of our app by avoiding to load content that is not visible. Therefore, we implement a “lazy loading” feature that only loads the view and data when requested by the user.")

**Related Information**  


[API Reference: `sap.m.IconTabBar`](https://ui5.sap.com/#/api/sap.m.IconTabBar)

