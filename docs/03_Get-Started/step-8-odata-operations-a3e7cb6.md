<!-- loioa3e7cb6f671b4b839f37eb5f88429e41 -->

# Step 8: OData Operations

Our OData service provides one OData operation: the `ResetDataSource` action. In this step, we add a button that resets all data changes we made during the tutorial to their original state using this action.



<a name="loioa3e7cb6f671b4b839f37eb5f88429e41__section_bt4_fxc_z1b"/>

## Preview

   
  
<a name="loioa3e7cb6f671b4b839f37eb5f88429e41__fig_ybl_pdx_4cb"/>A *Restart Tutorial* button is added

 ![](images/Tutorial_OData_V4_Step_8_e518deb.png "A Restart Tutorial button is added") 



<a name="loioa3e7cb6f671b4b839f37eb5f88429e41__section_tsr_gxc_z1b"/>

## Coding

You can view and download all files at [OData V4 - Step 8](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.odatav4/sample/sap.ui.core.tutorial.odatav4.08).



<a name="loioa3e7cb6f671b4b839f37eb5f88429e41__section_pvc_fyc_z1b"/>

## webapp/controller/App.controller.js

```js
...
		onResetChanges : function () {
			this.byId("peopleList").getBinding("items").resetChanges();
			this._setUIChanges();
		},

		onResetDataSource : function () {
			var oModel = this.getView().getModel(),
				oOperation = oModel.bindContext("/ResetDataSource(...)");

			oOperation.execute().then(function () {
					oModel.refresh();
					MessageToast.show(this._getText("sourceResetSuccessMessage"));
				}.bind(this), function (oError) {
					MessageBox.error(oError.message);
				}
			);
		},

		onSave : function () {
...

```

The `onResetDataSource` event handler calls the `ResetDataSource` action, which is an action of the *TripPin* OData service that resets the data of the service to its original state.

We call that action by first creating a deferred operation binding on the model. The `(…)` part of the binding syntax marks the binding as deferred. We use a deferred binding because we want to control when the action is executed. Since it is deferred, we need to explicitly call its `execute` method.

The execution is asynchronous, therefore the execute method returns a `Promise`. We attach simple success and error handlers to that `Promise` by calling its `then` method.

> ### Note:  
> Many of the methods in the OData V4 API of SAPUI5 return a `Promise` to manage asynchronous processing



<a name="loioa3e7cb6f671b4b839f37eb5f88429e41__section_pp2_mxc_z1b"/>

## webapp/view/App.view.xml

```xml
<mvc:View
	controllerName="sap.ui.core.tutorial.odatav4.controller.App"
	displayBlock="true"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Shell>
		<App busy="{appView>/busy}" class="sapUiSizeCompact">
			<pages>
				<Page title="{i18n>peoplePageTitle}">
					<headerContent>
						<Button
							id="resetChangesButton"
							text="{i18n>resetChangesButtonText}"
							enabled="{= !${appView>/hasUIChanges}}"
							press="onResetDataSource"
							type="Emphasized">
						</Button>
					</headerContent>
...
```

We add the **headerContent** aggregation to the **Page** and insert the new **Button**. We add the **onResetDataSource** event handler to the **press** event.



<a name="loioa3e7cb6f671b4b839f37eb5f88429e41__section_kl4_d1x_4cb"/>

## webapp/i18n/i18n.properties

```ini
...
# Toolbar
...
#XBUT: Button text for reset changes
resetChangesButtonText=Restart Tutorial
...
# Messages
...
#XMSG: Message for changes reverted
sourceResetSuccessMessage=All changes reverted back to start
```

We add the missing texts to the properties file.



And now we are done! We built a simple application with user data from an OData V4 service. We can display, edit, create, and delete users. And we use OData V4 features such as batch groups and automatic type detection.

**Parent topic:** [OData V4](odata-v4-bcdbde6.md "In this tutorial, we explore how features of OData V4 can be used in SAPUI5. We write a small app that consumes data from an OData V4 service to understand how to access, modify, aggregate, and filter data in an OData V4 model.")

**Next:** [Step 7: Delete](step-7-delete-12a0d1e.md "In this step, we make it possible to delete user data.")

**Previous:** [Step 9: List-Detail Scenario](step-9-list-detail-scenario-ec44581.md "In this step we add a detail area with additional information.")

**Related Information**  


[Bindings](../04_Essentials/bindings-54e0ddf.md "Bindings connect SAPUI5 view elements to model data, allowing changes in the model to be reflected in the view element and vice versa.")

[OData Operations](../04_Essentials/odata-operations-b54f789.md "The OData V4 model supports OData operations (ActionImport, FunctionImport, bound Actions and bound Functions). Unbound parameters are limited to primitive values.")

