<!-- loiocdab0a1123514cc08cf2c8deb22f312e -->

# Step 10: Implement “Lazy Loading”

In the previous steps, we have implemented a *Resume* view that uses tabs to display data. The complete content of the tabs is loaded once, no matter which tab is currently displayed. We can increase the performance of our app by avoiding to load content that is not visible. Therefore, we implement a “lazy loading” feature that only loads the view and data when requested by the user.



## Preview

   
  
<a name="loiocdab0a1123514cc08cf2c8deb22f312e__fig_r1j_pst_mr"/>Tabs with lazy loading

 ![](images/Tutorial_Navigation_and_Routing_Step_10_cb04056.png "Tabs with lazy loading") 



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Routing and Navigation - Step 10](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.navigation/sample/sap.ui.core.tutorial.navigation.10) .

   
  
<a name="loiocdab0a1123514cc08cf2c8deb22f312e__fig_vbk_bbp_ns"/>Folder Structure for this Step

 ![](images/Tutorial_Navigation_and_Routing_Step_10b_389058e.png "Folder Structure for this Step") 



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
					<IconTabFilter id="projectsTab" text="{i18n>Projects}" key="Projects">
						<mvc:XMLView viewName="sap.ui.demo.nav.view.employee.ResumeProjects"></mvc:XMLView>
					</IconTabFilter>
					<IconTabFilter id="hobbiesTab" text="{i18n>Hobbies}" key="Hobbies">
						<!-- place content via lazy loading -->
					</IconTabFilter>
					<IconTabFilter id="notesTab" text="{i18n>Notes}" key="Notes">
						<!-- place content via lazy loading -->
					</IconTabFilter>
				</items>
			</IconTabBar>
		</content>
	</Page>
</mvc:View>
```

To illustrate lazy loading, we implement that the content is loaded only when the user selects the corresponding tab for two of our tabs from the `IconTabBar`: *Hobbies* and *Notes*. The `IconTabFilter` controls each have a hard-coded ID so that we can address them later in our routing configuration. In real use cases, you would do this for tabs that contain a lot of content or trigger expensive service calls to a back-end service.

In the `resume` view we remove the content of the *Hobbies* and *Notes* tabs as we will now fill it dynamically with navigation features.



## webapp/view/employee/ResumeHobbies.view.xml \(New\)

```xml
<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
	<Text text="{Hobbies}"/>
</mvc:View>

```

Create the file `ResumeHobbies.view.xml` in the `webapp/view/employee` folder. Move the content for the tab that was previously in the `resume` view to that view. We don’t need a controller for this view as there is no additional logic involved. This view will be lazy-loaded and placed into the content of the *Hobbies* tab with navigation features.



## webapp/view/employee/ResumeNotes.view.xml \(New\)

```xml
<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
	<Text text="{Notes}"/>
</mvc:View>
```

Create the file `ResumeNotes.view.xml` in the `webapp/view/employee` folder similar to the *Hobbies* view to transform this tab to a separate view as well.



## webapp/controller/employee/Resume.controller.js

```js
sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	var _aValidTabKeys = ["Info", "Projects", "Hobbies", "Notes"];
	return BaseController.extend("sap.ui.demo.nav.controller.employee.Resume", {
		...
		_onRouteMatched : function (oEvent) {
			var oArgs, oView, oQuery;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
				...
			});
			oQuery = oArgs["?query"];
			if (oQuery && _aValidTabKeys.indexOf(oQuery.tab) > -1){
				oView.getModel("view").setProperty("/selectedTabKey", oQuery.tab);
				// support lazy loading for the hobbies and notes tab
				if (oQuery.tab === "Hobbies" || oQuery.tab === "Notes"){
					// the target is either "resumeTabHobbies" or "resumeTabNotes"
					this.getRouter().getTargets().display("resumeTab" + oQuery.tab);
				}

			} else {
				// the default query param should be visible at all time
				this.getRouter().navTo("employeeResume", {
					employeeId : oArgs.employeeId,
					"?query": {
						tab : _aValidTabKeys[0]
					}
				}, true /*no history*/);
			}
		},
		...
	});
});
```

Now we extend the `resume` controller a little and add additional logic to the part of the `_onRouteMatched` function where a new tab has been selected and validated. In case the `selectedKey` matches `Hobbies` or `Notes` we call `this.getRouter().getTargets().display("resumeTab" + oQuery.tab)` to display the corresponding target manually. Here the valid targets are `resumeTabHobbies` and `resumeTabNotes` as we have changed the behavior for these two tabs by creating separate views.

These lines of code make sure that the targets are only loaded when they are needed \(“lazy loading”\). But the router does not know the new targets yet, so let’s create them in our routing configuration.



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
				...
			}, {
				"pattern": "employees/{employeeId}/resume:?query:",
				"name": "employeeResume",
				"target": "employeeResume"
			}],
			"targets": {
				...
				"employeeResume": {
					"id": "resume",
					"name": "employee.Resume",
					"level" : 4,
					"transition": "flip"
				},
				"resumeTabHobbies": {
					"id": "resumeHobbies",
					"parent": "employeeResume",
					"path": "sap.ui.demo.nav.view.employee",
					"name": "ResumeHobbies",
					"controlId": "hobbiesTab",
					"controlAggregation": "content"
				},
				"resumeTabNotes": {
					"id": "resumeNotes",
					"parent": "employeeResume",
					"path": "sap.ui.demo.nav.view.employee",
					"name": "ResumeNotes",
					"controlId": "notesTab",
					"controlAggregation": "content"
				}
			}
		}
	}
}
```

We add the `resumeTabHobbies` and `resumeTabNotes` targets to the descriptor file with additional fields that override the default configuration as we now want to display the targets locally inside the `IconTabBar` control and not as pages of the app.

The `resumeTabHobbies` target sets the parent property to `employeeResume`. The parent property expects the name of another target. In our case, this makes sure that the view from the parent target `employeeResume` is loaded before the target `resumeTabHobbies` is displayed. This can be considered as a “view dependency”. By setting the `controlId` and `controlAggregation` properties the router places the view `ResumeHobbies` into the `content` aggregation of the `IconTabFilter` control with ID `hobbiesTab`. We also set a parameter `id` to a custom ID to illustrate how you could overrule a hard-coded ID inside a view.

> ### Note:  
> Each target can define only one parent with its parent property. This is similar to the SAPUI5 control tree where each control can have only one parent control \(accessed with the method `getParent()` of `sap.ui.base.ManagedObject`\). The `controlId` property always references a control inside the parent view that is specified with the `parent` target.

Now we add the `resumeTabNotes` target similar to the `Hobbies` target. The `resumeTabNotes` target defines the parent target `employeeResume` as well, because they share the same parent view. We place the `ResumeNotes` view into the `content` aggregation of the `IconTabFilter` control with ID `notesTab`.

We have now implemented lazy loading for the tabs *Hobbies* and *Notes*. These two tabs are now managed by the routing configuration and only loaded when we click on them the first time.

Try it out yourself: Open the *Network* tab of your browser's developer tools and click on the tabs of your app. In the network traffic you will see that `ResumeHobbies.view.xml` file is only loaded when the *Hobbies* tab is displayed the first time. The same applies for the *Notes* tab. Mission accomplished!



## Conventions

-   Lazy-load content that is not initially displayed to the user


**Parent topic:** [Navigation and Routing](navigation-and-routing-1b6dcd3.md "SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.")

**Next:** [Step 9: Allow Bookmarkable Tabs with Optional Query Parameters](step-9-allow-bookmarkable-tabs-with-optional-query-parameters-b8561ff.md "The resume view contains four tabs as we have seen in the previous steps. However, when the user navigates to the resume page, only the first tab is displayed initially. Navigating directly to a specific tab or bookmarking a tab is not yet supported in our current app.")

**Previous:** [Step 11: Assign Multiple Targets](step-11-assign-multiple-targets-b01840e.md "In this step, we will add a new button to the home page to illustrate the usage of multiple targets for a route. When the button is pressed, a new page opens that contains two parts: a header part at the top and a content part. The content part displays a table of employees that can be sorted and searched. We will use the array notation in the routing configuration to assign multiple targets to a route - a feature that we have not yet introduced.")

**Related Information**  


[API Reference: `sap.m.routing.Targets`](https://ui5.sap.com/#/api/sap.m.routing.Targets)

