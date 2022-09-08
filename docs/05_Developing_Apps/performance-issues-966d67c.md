<!-- loio966d67c8cc5046419d1b35556cd9e447 -->

# Performance Issues

This section lists some of the most important issues that should be avoided to improve performance in SAPUI5 applications.



<a name="loio966d67c8cc5046419d1b35556cd9e447__section_LLAOD"/>

## Loading Large Amounts of Data

A critical factor for application performance is the loading of data from a server. The runtime of triggered requests depends on the number of records retrieved. Loading large amounts of data may also have a negative impact on memory consumption.

To this end, lists and tables offer mechanisms to load only a limited amount of data while still displaying required data to the user. For example, the `sap.ui.table.Table` requests the records to be displayed to the user plus a `threshold`. A reasonable default value for the threshold is provided by the table. Make sure to use such paging mechanisms to create applications with good performance. For more information, see [Tables: Which One Should I Choose?](../10_More_About_Controls/tables-which-one-should-i-choose-148892f.md)

Whenever you use methods like [`sap.ui.model.odata.v4.ODataListBinding#requestContexts`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/requestContexts), [`sap.ui.model.odata.v2.ODataModel#read`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel/methods/read), or [`sap.ui.model.json.JSONModel#loadData`](https://ui5.sap.com/#/api/sap.ui.model.json.JSONModel/methods/loadData), or create XHR requests in application code, **your application must not load large amounts of data.** This means in particular that **the following activities must not be performed on the client:**

-   Aggregating large amounts of data of which only a small amount is displayed. Such aggregations are preferably performed directly in the database to avoid moving all the raw data over the network and onto different computers.
-   Performing mass operations, such as mass changes. Such operations shall be performed by the server, e.g. by an [OData action](../04_Essentials/odata-operations-b54f789.md), without the need to load all affected records onto the client.

> ### Note:  
> SAPUI5 does not set limits on the amount of data to be loaded by your application. However, some browsers may do, which would cause your application to fail if it loads large amounts of data.



<a name="loio966d67c8cc5046419d1b35556cd9e447__1"/>

## Don't use visibility for lazy instantiation

When an application has areas that are not visible initially, or if only one of multiple options is visible at a time, **do not** create all UI controls and set most of them to non-visible! If you do, SAPUI5 will instantiate and initialize all of those controls, which consumes unnecessary time and memory, even when they are not rendered. On top of this, the data binding will also be initialized, which may trigger back-end requests that are not needed at this stage. The impact is particularly big when the parts of the UI that are not visible initially are complex or numerous.

Please note that lazy loading of views can be achieved with routing. For more information, see [Routing and Navigation](../04_Essentials/routing-and-navigation-3d18f20.md) and [Step 10: Implement "Lazy Loading"](../03_Get-Started/step-10-implement-lazy-loading-cdab0a1.md) of the Navigation and Routing tutorial.

> ### Example:  
> An application needs to display a `Panel` containing a `Table` in **display mode**, but the user can switch to **edit mode** to modify data, in which case a different `Panel` needs to be shown. Especially when using XML views, it is tempting for application developers to specify two panels in the view XML and set the `Panel` with the editable table to `visible="false"`. The *Edit* button could then just toggle visibility of both panels.

The following XML view is easy to handle, but leads to suboptimal performance when the `editPanel` has a lot of content.

View:

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" controllerName="my.own.controller">
	<Page>
                        
		<Panel id="displayPanel" headerText="Display Data">
			<Table...>
		</Panel>
                        
		<!-- edit panel is initially hidden, but still instantiated -->
		<Panel id="editPanel" headerText="Edit Data" visible="false">
			<Table...> 
		</Panel>
                        
		<Button text="Edit" press="toEditMode"/>
	</Page>
</mvc:View>
```

Controller code:

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (Controller, Fragment) {
	"use strict";
	return Controller.extend("my.own.controller", {
		toEditMode: function() {
			this.byId("displayPanel").setVisible(false);
			this.byId("editPanel").setVisible(true);
		}
	});
});
```

The following code is better in terms of initial performance because the second table is created lazily when the user switches to edit mode.

View:

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" controllerName="my.own.controller">
	<Page>
            
		<!—only the initially needed display panel -->
		<Panel id="displayPanel" headerText="Display Data">
			<Table...>
		</Panel>
      
		<Button text="Edit" press="toEditMode"/>
	</Page>
</mvc:View>
```

Additional fragment named `EditPanel.fragment.xml` for content that is initially hidden:

```xml
<Panel xmlns="sap.m" id="editPanel" headerText="Edit Data" visible="false">
	<Table...>
</Panel>
```

Controller code:

```js
	...
	toEditMode: function() {
		this.byId("displayPanel").setVisible(false);

		if (!this.pEditPanel) {
			// load and instantiate the edit panel lazily
			// we keep the Promise of the loadFragment() call,
			// so that we do not trigger the fragment loading everytime the user clicks the button
			this.pEditPanel = this.loadFragment({
				name: "myApp.EditPanel",
				// we don't add the fragment to the view's 'dependents' aggregation, since the fragment content
				//  will be added to the view's control tree via the 'myPage' instance
				addToDependents: false
			}).then(function (oFragment) {
				this.byId("myPage").insertContent(oFragment, 0); // for sake of simplicity inserts at position 0
			}.bind(this));
		}
		// we chain the visibility change of the "editPanel" to the loading Promise
		// Since we only load the fragment one we can chain ourselves to this Promise on each Button click
		this.pEditPanel.then(function() {
			var oEditPanel = this.byId("editPanel");
			oEditPanel.setVisible(true);
		}.bind(this));
	}
	...
```

In other scenarios, at the time of developing you may not know which UI part is displayed initially. In this case, you can define that the UI is empty \(showing none of the panels\) in the view definition, and the controller’s `onInit()` method decides which fragment to instantiate and display initially:

```js
	...
	toEditMode: function () {...},
	onInit: function () {
		// we keep the loading Promise, so we can chain ourselves to it later
		this.pEditPanel = this.loadFragment({
			name: bEditMode ? "myApp.EditPanel" : "myApp.DisplayPanel",
			// we don't add the fragment to the view's 'dependents' aggregation, since the fragment content
			//  will be added to the view's control tree via the 'myPage' instance
			addToDependents: false
		}).then(function (oFragment) {
			this.byId("myPage").insertContent(oFragment, 0); // for sake of simplicity inserts at position 0
		});
	}
	...
```

> ### Note:  
> Although the example above shows an XML view and an XML fragment, the problem and the solution apply to all view types.
> 
> Please also note that this guideline is not set in stone: If the hidden UI elements are just small or few in number, using fragments would not help but add additional overhead instead. Having said that, creating several big tables and displaying only one of them is **not** a good idea. There is no definite rule where to draw the line, it depends on many factors like application size, number of libraries being loaded, and additional data requested by those hidden controls. If in doubt, you can test the performance using the performance tracing tools in the browser’s developer console with the controls in question being hidden, against them being removed.

See also: [Reusing UI Parts: Fragments](../04_Essentials/reusing-ui-parts-fragments-36a5b13.md).

**Related Information**  


[Performance: Speed Up Your App](performance-speed-up-your-app-408b40e.md "If a web app has performance issues, finding the cause can be both a time-consuming and nerve-consuming task. To help you avoid and solve performance issues in your app, here are some good practices we've discovered while dealing with SAPUI5 apps.")

