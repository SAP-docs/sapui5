<!-- loio276f001c5a934f6e8faedee6ea22aba1 -->

# Step 11: Using the Flexible Column Layout Semantic Helper

In this step, we use the `sap.f.FlexibleColumnLayoutSemanticHelper` class to implement the recommended UX patterns for layout changes in the app.

`FlexibleColumnLayout` gives you the freedom to implement any app logic that involves changing the layout \(showing/hiding columns\) as a result of the user’s actions. However, there are certain UX patterns that are considered as optimal and are recommended for SAP Fiori apps. The `FlexibleColumnLayoutSemanticHelper` class helps you implement them by giving you tips about what layout to display when.

> ### Note:  
> Using this class is NOT mandatory in order to build an app with the `FlexibleColumnLayout`, but makes it easier to achieve the optimal UX recommended in the SAP Fiori design guidelines.

For more information, see [Flexible Column Layout Semantic Helper](../10_More_About_Controls/flexible-column-layout-semantic-helper-623b01e.md).



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_yfh_d31_12b"/>

## Preview

   
  
<a name="loio276f001c5a934f6e8faedee6ea22aba1__fig_zfh_d31_12b"/>Master-detail-detail pattern using `sap.f.FlexibleColumnLayoutSemanticHelper`

 ![](images/With_Semantic_Helper_Fiori_2_0_Tutorial_fd98e0d.gif "Master-detail-detail pattern using
						sap.f.FlexibleColumnLayoutSemanticHelper") 



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_fd2_4dd_lbb"/>

## Coding

You can view and download all files at [Flexible Column Layout App - Step 11](https://ui5.sap.com/#/sample/sap.f.tutorial.fiori2.11/preview).



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_zv4_spj_l4b"/>

## webapp/Component.js \[MODIFY\]

```js
sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel',
	'sap/f/FlexibleColumnLayoutSemanticHelper',
	'sap/f/library'
], function(UIComponent, JSONModel, FlexibleColumnLayoutSemanticHelper, fioriLibrary) {
	'use strict';

	return UIComponent.extend('sap.ui.demo.fiori2.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oModel,
				oProductsModel,
				oRouter;

			UIComponent.prototype.init.apply(this, arguments);

			oModel = new JSONModel();
			this.setModel(oModel);

			// set products demo model on this sample
			oProductsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock') + '/products.json');
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');

			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
		},

		getHelper: function () {
			return this._getFcl().then(function(oFCL) {
				var oSettings = {
					defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: fioriLibrary.LayoutType.ThreeColumnsMidExpanded
				};
				return (FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
			});
		},

		_onBeforeRouteMatched: function(oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout,
				oNextUIState;

			// If there is no layout parameter, query for the default level 0 layout (normally OneColumn)
			if (!sLayout) {
				this.getHelper().then(function(oHelper) {
					oNextUIState = oHelper.getNextUIState(0);
					oModel.setProperty("/layout", oNextUIState.layout);
				});
				return;
			}

			oModel.setProperty("/layout", sLayout);
		},

		_getFcl: function () {
			return new Promise(function(resolve, reject) {
				var oFCL = this.getRootControl().byId('flexibleColumnLayout');
				if (!oFCL) {
					this.getRootControl().attachAfterInit(function(oEvent) {
						resolve(oEvent.getSource().byId('flexibleColumnLayout'));
					}, this);
					return;
				}
				resolve(oFCL);

			}.bind(this));
		}
	});
});
```

First, we add a `getHelper` function in the `Component.js` file in order to pass the default `sap.f.FlexibleColumnLayout` parameters.



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_whp_rpj_l4b"/>

## webapp/view/Detail.view.xml \[MODIFY\]

```xml
				...
				<snappedHeading>
					<m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Center">
						<m:FlexBox wrap="NoWrap" fitContainer="true" alignItems="Center" class="sapUiTinyMarginEnd">
							<f:Avatar
								src="https://ui5.sap.com/{products>ProductPicUrl}"
								displaySize="S"
								displayShape="Square"
								class="sapUiTinyMarginEnd"/>
							<m:Title text="{products>Name}" wrapping="true"/>
						</m:FlexBox>
					</m:FlexBox>
				</snappedHeading>

				<navigationActions>
					<m:OverflowToolbarButton
						type="Transparent"
						icon="sap-icon://full-screen"
						press=".handleFullScreen"
						tooltip="Enter Full Screen Mode"
						visible="{= ${/actionButtonsInfo/midColumn/fullScreen} !== null }"/>
					<m:OverflowToolbarButton
						type="Transparent"
						icon="sap-icon://exit-full-screen"
						press=".handleExitFullScreen"
						tooltip="Exit Full Screen Mode"
						visible="{= ${/actionButtonsInfo/midColumn/exitFullScreen} !== null }"/>
					<m:OverflowToolbarButton
						type="Transparent"
						icon="sap-icon://decline"
						press=".handleClose"
						tooltip="Close column"
						visible="{= ${/actionButtonsInfo/midColumn/closeColumn} !== null }"/>
				</navigationActions>

				<actions>
					<m:ToggleButton
						text="Edit"
						type="Emphasized"
						press=".onEditToggleButtonPress"/>
					<m:Button
						text="Delete"
						type="Transparent"/>
					<m:Button
						text="Copy"
						type="Transparent"/>
					<m:Button
						icon="sap-icon://action"
						type="Transparent"/>
				</actions>
			</ObjectPageDynamicHeaderTitle>
		</headerTitle>
		...
```

We add navigation actions for entering and exiting fullscreen and closing the column for the detail page.



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_f1n_qpj_l4b"/>

## webapp/controller/Detail.controller.js \[MODIFY\]

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.fiori2.controller.Detail", {
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();

			this.oRouter = this.oOwnerComponent.getRouter();
			this.oModel = this.oOwnerComponent.getModel();

			this.oRouter.getRoute("master").attachPatternMatched(this._onProductMatched, this);
			this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
			this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onProductMatched, this);
		},

		onSupplierPress: function (oEvent) {
			var supplierPath = oEvent.getSource().getBindingContext("products").getPath(),
				supplier = supplierPath.split("/").slice(-1).pop(),
				oNextUIState;

			this.oOwnerComponent.getHelper().then(function (oHelper) {
				oNextUIState = oHelper.getNextUIState(2);
				this.oRouter.navTo("detailDetail", {
					layout: oNextUIState.layout,
					supplier: supplier,
					product: this._product
				});
			}.bind(this));
		},

		_onProductMatched: function (oEvent) {
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
			this.getView().bindElement({
				path: "/ProductCollection/" + this._product,
				model: "products"
			});
		},

		onEditToggleButtonPress: function() {
			var oObjectPage = this.getView().byId("ObjectPageLayout"),
				bCurrentShowFooterState = oObjectPage.getShowFooter();

			oObjectPage.setShowFooter(!bCurrentShowFooterState);
		},

		handleFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
			this.oRouter.navTo("detail", {layout: sNextLayout, product: this._product});
		},

		handleExitFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
			this.oRouter.navTo("detail", {layout: sNextLayout, product: this._product});
		},

		handleClose: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
			this.oRouter.navTo("master", {layout: sNextLayout});
		},

		onExit: function () {
			this.oRouter.getRoute("master").detachPatternMatched(this._onProductMatched, this);
			this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched, this);
		}
	});
});
```

We create the handlers needed for the navigation actions.



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_vjq_ppj_l4b"/>

## webapp/view/DetailDetail.view.xml \[MODIFY\]

```xml
<mvc:View
	controllerName="sap.ui.demo.fiori2.controller.DetailDetail"
	xmlns="sap.f"
	xmlns:m="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<DynamicPage toggleHeaderOnTitleClick="false">
		<title>
			<DynamicPageTitle>
				<heading>
					<m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Center">
						<m:Title text="{products>text}" wrapping="true" class="sapUiTinyMarginEnd"/>
					</m:FlexBox>
				</heading>

				<navigationActions>
					<m:OverflowToolbarButton
						type="Transparent"
						icon="sap-icon://full-screen"
						press=".handleFullScreen"
						tooltip="Enter Full Screen Mode"
						visible="{= ${/actionButtonsInfo/endColumn/fullScreen} !== null }"/>
					<m:OverflowToolbarButton
						type="Transparent"
						icon="sap-icon://exit-full-screen"
						press=".handleExitFullScreen"
						tooltip="Exit Full Screen Mode"
						visible="{= ${/actionButtonsInfo/endColumn/exitFullScreen} !== null }"/>
					<m:OverflowToolbarButton
						type="Transparent"
						icon="sap-icon://decline"
						press=".handleClose"
						tooltip="Close column"
						visible="{= ${/actionButtonsInfo/endColumn/closeColumn} !== null }"/>
				</navigationActions>
			</DynamicPageTitle>
		</title>
		<content>
			<m:Link text="Navigate to next page…" press=".handleAboutPress"/>
		</content>
	</DynamicPage>
</mvc:View>
```

Again, we add navigation actions for entering and exiting fullscreen and closing the column for the detail-detail page.



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_alt_4pj_l4b"/>

## webapp/controller/DetailDetail.controller.js \[MODIFY\]

```js
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (JSONModel, Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.fiori2.controller.DetailDetail", {
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();

			this.oRouter = this.oOwnerComponent.getRouter();
			this.oModel = this.oOwnerComponent.getModel();

			this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
		},

		handleAboutPress: function () {
			var oNextUIState;
			this.oOwnerComponent.getHelper().then(function (oHelper) {
				oNextUIState = oHelper.getNextUIState(3);
				this.oRouter.navTo("page2", {layout: oNextUIState.layout});
			}.bind(this));
		},

		_onPatternMatch: function (oEvent) {
			this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
			this._product = oEvent.getParameter("arguments").product || this._product || "0";

			this.getView().bindElement({
				path: "/ProductCollectionStats/Filters/1/values/" + this._supplier,
				model: "products"
			});
		},

		handleFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/fullScreen");
			this.oRouter.navTo("detailDetail", {layout: sNextLayout, product: this._product, supplier: this._supplier});
		},

		handleExitFullScreen: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/exitFullScreen");
			this.oRouter.navTo("detailDetail", {layout: sNextLayout, product: this._product, supplier: this._supplier});
		},

		handleClose: function () {
			var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/closeColumn");
			this.oRouter.navTo("detail", {layout: sNextLayout, product: this._product});
		},

		onExit: function () {
			this.oRouter.getRoute("detailDetail").detachPatternMatched(this._onPatternMatch, this);
		}
	});
});
```

And respectively, we create the handlers needed for the navigation actions in the detail-detail controller.



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_t4v_npj_l4b"/>

## webapp/controller/Master.controller.js \[MODIFY\]

```js
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";

	return Controller.extend("sap.ui.demo.fiori2.controller.Master", {
		onInit: function () {
			this.oView = this.getView();
			this._bDescendingSort = false;
			this.oProductsTable = this.oView.byId("productsTable");
			this.oRouter = this.getOwnerComponent().getRouter();
		},

		onSearch: function (oEvent) {
			var oTableSearchState = [],
				sQuery = oEvent.getParameter("query");

			if (sQuery && sQuery.length > 0) {
				oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
			}

			this.oProductsTable.getBinding("items").filter(oTableSearchState, "Application");
		},

		onAdd: function () {
			MessageBox.information("This functionality is not ready yet.", {title: "Aw, Snap!"});
		},

		onSort: function () {
			this._bDescendingSort = !this._bDescendingSort;
			var oBinding = this.oProductsTable.getBinding("items"),
				oSorter = new Sorter("Name", this._bDescendingSort);

			oBinding.sort(oSorter);
		},

		onListItemPress: function (oEvent) {
			var productPath = oEvent.getSource().getBindingContext("products").getPath(),
				product = productPath.split("/").slice(-1).pop(),
				oNextUIState;
			this.getOwnerComponent().getHelper().then(function (oHelper) {
				oNextUIState = oHelper.getNextUIState(1);
				this.oRouter.navTo("detail", {
					layout: oNextUIState.layout,
					product: product
				});
			}.bind(this));
		}
	});
});
```

We get the next layout from the semantic helper rather than hard coding them ourselves.



<a name="loio276f001c5a934f6e8faedee6ea22aba1__section_rds_mpj_l4b"/>

## webapp/controller/App.controller.js \[MODIFY\]

```js
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (JSONModel, Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.fiori2.controller.App", {
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();
			this.oRouter = this.oOwnerComponent.getRouter();
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);
		},

		onRouteMatched: function (oEvent) {
			var sRouteName = oEvent.getParameter("name"),
				oArguments = oEvent.getParameter("arguments");

			this._updateUIElements();

			// Save the current route name
			this.currentRouteName = sRouteName;
			this.currentProduct = oArguments.product;
			this.currentSupplier = oArguments.supplier;
		},

		onStateChanged: function (oEvent) {
			var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
				sLayout = oEvent.getParameter("layout");

			this._updateUIElements();

			// Replace the URL with the new layout if a navigation arrow was used
			if (bIsNavigationArrow) {
				this.oRouter.navTo(this.currentRouteName, {layout: sLayout, product: this.currentProduct, supplier: this.currentSupplier}, true);
			}
		},

		// Update the close/fullscreen buttons visibility
		_updateUIElements: function () {
			var oModel = this.oOwnerComponent.getModel(),
				oUIState;
			this.oOwnerComponent.getHelper().then(function(oHelper) {
				oUIState = oHelper.getCurrentUIState();
				oModel.setData(oUIState);
			});
		},

		onExit: function () {
			this.oRouter.detachRouteMatched(this.onRouteMatched, this);
			this.oRouter.detachBeforeRouteMatched(this.onBeforeRouteMatched, this);
		}
	});
});
```

Finally, we create a function in the `App.controller.js` to update the visibility of the master, detail, and detail-detail pages.

