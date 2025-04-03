<!-- loioe5577bbb63154a56a2f9797caf2e5e38 -->

# Step 34: Responsiveness \(TypeScript\)

In this step, we improve the responsiveness of our app. SAPUI5 applications can be run on phone, tablet, and desktop devices and we can configure the application to make best use of the screen estate for each scenario. Fortunately, SAPUI5 controls like the `sap.m.Table` already deliver a lot of features that we can use.



## Preview

  
  
**A responsive table is hiding some of the columns on small devices**

![The application contains a Hello World header with buttons and a text input. The lower part displays invoices with some details.](images/UI5_Walkthrough_Step_34_cc3f2e0.png "A responsive table is hiding some of the columns on small devices")



<a name="loioe5577bbb63154a56a2f9797caf2e5e38__section_jd5_1fn_tyb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 34: Responsiveness](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/34) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-34.zip).



<a name="loioe5577bbb63154a56a2f9797caf2e5e38__section_chg_f3w_4zb"/>

## webapp/i18n/i18n.properties

In this step we will exchange the list we used on the invoice list view by a responsive table. Obviously the column titles needs to be translatable texts. So we add text-value pairs for quantity, name, supplier, status, and price to our resource bundle file.

```ini
...
# Invoice List
invoiceListTitle=Invoices
invoiceStatusA=New
invoiceStatusB=In Progress
invoiceStatusC=Done
columnQuantity=Quantity
columnName=Name
columnSupplier=Supplier
columnStatus=Status
columnPrice=Price

# Detail Page
...
```



<a name="loioe5577bbb63154a56a2f9797caf2e5e38__section_kd5_1fn_tyb"/>

## webapp/view/InvoiceList.view.xml

On the invoice list view we exchange the list with a table simply by replacing the tag `<List>` with `<Table>`. The table has a built-in responsiveness feature that allows us to make the app more flexible. The table and the list share the same set of properties so we can simply reuse these and also the sorter.

Since a table has multiple cells in each row, we have to define columns for our table and name these according to the data. We add five `sap.m.Column` controls to the column aggregation and configure each one a bit differently:

-   **Quantity**

    This column will contain a short number, so we set the alignment to `End` \(which means "right" in LTR languages\) and the width to `4em` which is long enough for the column description. As a description text we use a `sap.m.Text` control that references a property of the resource bundle. We set the property `minScreenWidth` to `Small` to indicate that this column is not so important on phones. We will tell the table to display this column below the main column by setting the property `demandPopin` to `true`.

-   **Name**

    Our main column that has a pretty large **width** to show all the details. It will always be displayed.

-   **Status**

    The status is not so important, so we also display it below the `name` field on small screens by setting `minScreenWidth` to `small` and `demandPopin` to `true`

-   **Supplier**

    We completely hide the `Supplier` column on phone devices by setting `minScreenWidth` to `Tablet` and `demandPopin` to `false`.

-   **Price**

    This column is always visible as it contains our invoice price.


Instead of the `ObjectListItem` that we had before, we will now split the information onto the cells that match the columns defined above. Therefore we change it to a `ColumnListItem` control with the same attributes, but now with cells aggregation. Here we create five controls to display our data:

-   **Quantity**

    A simple `sap.m.ObjectNumber` control that is bound to our data field.

-   **Name**

    A `sap.m.ObjectIdentifier` control that specifies the name.

-   **Status**

    A `sap.m.Text control` with the same formatter as before.

-   **Supplier**

    A simple `sap.m.Text` control.

-   **Price**

    An `ObjectNumber` control with the same formatter as the attributes number and `numberUnit` from the previous steps.


```xml
<mvc:View
	controllerName="ui5.walkthrough.controller.InvoiceList"
	xmlns="sap.m"
	xmlns:core="sap.ui.core"
	xmlns:mvc="sap.ui.core.mvc">
	<Table
		id="invoiceList"
		class="sapUiResponsiveMargin"
		width="auto"
		items="{
				path : 'invoice>/Invoices',
				sorter : {
					path : 'ShipperName',
					group : true
				}
			}">
		<headerToolbar>
			<Toolbar>
				<Title text="{i18n>invoiceListTitle}" />
				<ToolbarSpacer />
				<SearchField
					width="50%"
					search=".onFilterInvoices"/>
			</Toolbar>
		</headerToolbar>
		<columns>
			<Column
				hAlign="End"
				minScreenWidth="Small"
				demandPopin="true"
				width="5em">
				<Text text="{i18n>columnQuantity}" />
			</Column>
			<Column>
				<Text text="{i18n>columnName}" />
			</Column>
			<Column
				minScreenWidth="Small"
				demandPopin="true">
				<Text text="{i18n>columnStatus}" />
			</Column>
			<Column
				minScreenWidth="Tablet"
				demandPopin="false">
				<Text text="{i18n>columnSupplier}" />
			</Column>
			<Column hAlign="End">
				<Text text="{i18n>columnPrice}" />
			</Column>
		</columns>
		<items>
			<ColumnListItem
				type="Navigation"
				press=".onPress">
				<cells>
					<ObjectNumber
						number="{invoice>Quantity}"
						emphasized="false"/>
					<ObjectIdentifier title="{invoice>ProductName}" />
					<Text
						core:require="{
								Formatter: 'ui5/walkthrough/model/formatter'
						}"
						text="{
								parts: [
									'invoice>Status',
									'i18n>invoiceStatusA',
									'i18n>invoiceStatusB',
									'i18n>invoiceStatusC'
								],
								formatter: 'Formatter.statusText.bind($controller)'
						}"/>
					<Text text="{invoice>ShipperName}" />
					<ObjectNumber
						core:require="{
							Currency: 'sap/ui/model/type/Currency'
						}"
						number="{
							parts: [
								'invoice>ExtendedPrice',
								'view>/currency'
							],
							type: 'Currency',
							formatOptions: {
								showMeasure: false
							}
						}"
						unit="{view>/currency}"
						state="{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }"/>
				</cells>
			</ColumnListItem>
		</items>
	</Table>
</mvc:View>
```

Now we have defined our table responsively and can see the results when we decrease the browser's screen size. The *Supplier* column is not shown on phone sizes and the two columns *Quantity* and *Status* will be shown below the name.

We can see the results when we decrease the browser's screen size or open the app on a small device.

> ### Tip:  
> You can test the device-specific features of your app with the developer tools of your browser. For example in Google Chrome, you can emulate a tablet or a phone easily and see the effects. Some responsive options of SAPUI5 are only set initially when loading the app, so you might have to reload your page to see the results.



## Conventions

-   Optimize your application for the different screen sizes of phone, tablet, and desktop devices.


**Related Information**  


[Configuring Responsive Behavior of a Table](../10_More_About_Controls/configuring-responsive-behavior-of-a-table-38855e0.md "SAPUI5 supports column-based and row-based solutions to support flexible and clearly arranged tables.")

