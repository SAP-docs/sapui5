<!-- loio12a0d1ef150a42ef81e9f07fe6407018 -->

# Step 7: Delete

In this step, we make it possible to delete user data.



<a name="loio12a0d1ef150a42ef81e9f07fe6407018__section_bt4_fxc_z1b"/>

## Preview

   
  
<a name="loio12a0d1ef150a42ef81e9f07fe6407018__fig_m3r_hbx_4cb"/>A new *Delete User* button is added

 ![](images/Tutorial_OData_V4_Step_7_32509f4.png "A new Delete User button is added") 



<a name="loio12a0d1ef150a42ef81e9f07fe6407018__section_tsr_gxc_z1b"/>

## Coding

You can view and download all files at [OData V4 - Step 7](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.odatav4/sample/sap.ui.core.tutorial.odatav4.07).



<a name="loio12a0d1ef150a42ef81e9f07fe6407018__section_pvc_fyc_z1b"/>

## webapp/App.controller.js

```
...
		onInit: function () {
			...
		},
		onCreate : function () {
			var oList = this.byId("peopleList"),
				oBinding = oList.getBinding("items"),
				oContext = oBinding.create({
					"UserName" : "",
					"FirstName" : "",
					"LastName" : "",
					"Age" : "18"
				});

			this._setUIChanges();
			this.getView().getModel("appView").setProperty("/usernameEmpty", true);

			oList.getItems().some(function (oItem) {
				if (oItem.getBindingContext() === oContext) {
					oItem.focus();
					oItem.setSelected(true);
					return true;
				}
			});
		},

		onDelete : function () {
			var oSelected = this.byId("peopleList").getSelectedItem();

			if (oSelected) {
				oSelected.getBindingContext().delete("$auto").then(function () {
					MessageToast.show(this._getText("deletionSuccessMessage"));
				}.bind(this), function (oError) {
					MessageBox.error(oError.message);
				});
			}
		},

		onInputChange : function (oEvt) {
			if (oEvt.getParameter("escPressed")) {
				this._setUIChanges();
			} else {
				this._setUIChanges(true);
				if (oEvt.getSource().getParent().getBindingContext().getProperty("UserName")) {
					this.getView().getModel("appView").setProperty("/usernameEmpty", false);
				}
			}
		},

...
```

We add the `onDelete` event handler to the controller. In the event handler, we check whether an item is selected in the table and if so, the related data is deleted from the model. To do that, we retrieve the binding context of the selection and call its `delete` method.

We explicitly set the update group ID for the deletion to `$auto` to make sure that the request to the service is sent immediately as a batch request. Otherwise the `delete` function would apply the deferred batch processing that we defined for the table’s list binding event though, `delete` does not currently support deferred batch processing.



<a name="loio12a0d1ef150a42ef81e9f07fe6407018__section_pp2_mxc_z1b"/>

## webapp/App.view.xml

```
<mvc:View
	controllerName="sap.ui.core.tutorial.odatav4.controller.App"
	displayBlock="true"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Shell>
		<App busy="{appView>/busy}" class="sapUiSizeCompact">
			<pages>
				<Page title="{i18n>peoplePageTitle}">
					<content>
						<Table
							id="peopleList"
							growing="true"
							growingThreshold="10"
							items="{
								path: '/People',
								parameters: {
									$count: true,
									$$updateGroupId : 'peopleGroup'
								}
							}"
										mode="SingleSelectLeft">
							<headerToolbar>
								<OverflowToolbar>
									<content>
										<ToolbarSpacer/>
										<SearchField
										.../>
										<Button
										.../>
										<Button
											id="deleteUserButton"
											icon="sap-icon://delete"
											tooltip="{i18n>deleteButtonText}"
											press=".onDelete">
											<layoutData>
												<OverflowToolbarLayoutData priority="NeverOverflow"/>
											</layoutData>
										</Button>
										<Button
										.../>
										<Button
										...>
									</content>
								</OverflowToolbar>
							</headerToolbar>
							<columns>
								...
							</columns>
							<items>
								...
							</items>
						</Table>
					</content>
					<footer>
						...
					</footer>
				</Page>
			</pages>
		</App>
	</Shell>
</mvc:View>
```

We change the `mode` of the table to `SingleSelectLeft` to make it possible to select a row.

We add the *Delete* button to the toolbar. With the `OverflowToolbarLayoutData priority="NeverOverflow"` parameter, we make sure that the button is always visible.



<a name="loio12a0d1ef150a42ef81e9f07fe6407018__section_kl4_d1x_4cb"/>

## webapp/i18n/i18n.properties

```ini
...
# Toolbar
...
#XBUT: Button text for delete user
deleteButtonText=Delete User
...
# Messages
...
#XMSG: Message for user deleted
deletionSuccessMessage=User deleted
...
```

We add the missing texts to the properties file.

**Parent topic:** [OData V4](odata-v4-bcdbde6.md "In this tutorial, we explore how features of OData V4 can be used in SAPUI5. We write a small app that consumes data from an OData V4 service to understand how to access, modify, aggregate, and filter data in an OData V4 model.")

**Next:** [Step 6: Create and Edit](step-6-create-and-edit-b4f1266.md "In this step, we will make it possible to create and edit (update) user data from the user interface and send the data to the back end.")

**Previous:** [Step 8: OData Operations](step-8-odata-operations-a3e7cb6.md "Our OData service provides one OData operation: the ResetDataSource action. In this step, we add a button that resets all data changes we made during the tutorial to their original state using this action.")

**Related Information**  


[Deleting an Entity](../04_Essentials/deleting-an-entity-2613ebc.md "The v4.Context.delete method deletes an entity on the server and updates the user interface accordingly.")

