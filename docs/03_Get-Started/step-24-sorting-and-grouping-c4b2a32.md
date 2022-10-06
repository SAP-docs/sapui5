<!-- loioc4b2a32bb72f483faa173e890e48d812 -->

# Step 24: Sorting and Grouping

To make our list of invoices even more user-friendly, we sort it alphabetically instead of just showing the order from the data model. Additionally, we introduce groups and add the company that ships the products so that the data is easier to consume.



## Preview

   
  
<a name="loioc4b2a32bb72f483faa173e890e48d812__fig_r1j_pst_mr"/>The list is now sorted and grouped by the shipping company

 ![](images/SAPUI5_Walkthrough_Step_25_80771b1.png "The list is now sorted and grouped by the shipping company") 



## Coding

You can view and download all files at [Walkthrough - Step 24](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.24).

```xml
<mvc:View
   controllerName="sap.ui.demo.walkthrough.controller.InvoiceList"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <List
      id="invoiceList"
      class="sapUiResponsiveMargin"
      width="auto"
      items="{
         path : 'invoice>/Invoices',
         sorter : {
            path : 'ProductName' 
         }
      }" >
      <headerToolbar>
         ...
      </headerToolbar>
      <items>
         ...
      </items>
   </List>
</mvc:View>
```

We add a declarative sorter to our binding syntax. As usual, we transform the simple binding syntax to the object notation, specify the path to the data, and now add an additional `sorter` property. We specify the data path by which the invoice items should be sorted, the rest is done automatically. By default, the sorting is ascending, but you could also add a property `descending` with the value `true` inside the sorter property to change the sorting order.

If we run the app now we can see a list of invoices sorted by the name of the products.



## webapp/view/InvoiceList.view.xml

```xml
<mvc:View
controllerName="sap.ui.demo.walkthrough.controller.InvoiceList"
xmlns="sap.m"
xmlns:mvc="sap.ui.core.mvc">
<List
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
			<Title text="{i18n>invoiceListTitle}"/>
			<ToolbarSpacer/>
			<SearchField width="50%" search=".onFilterInvoices"/>
		</Toolbar>
	</headerToolbar>
	<items>
		…
	</items>
</List>
</mvc:View>

```

We modify the view and add a different sorter, or better; we change the sorter and set the attribute `group` to true. We also specify the path to the `ShipperName` data field. This groups the invoice items by the shipping company.

As with the sorter, no further action is required. The list and the data binding features of SAPUI5 will do the trick to display group headers automatically and categorize the items in the groups. We could define a custom group header factory if we wanted by setting the `groupHeaderFactory` property, but the result looks already fine.

**Related Information**  


[API Reference: `sap.ui.model.Sorter`](https://ui5.sap.com/#/api/sap.ui.model.Sorter)

[Sample: List - Grouping](https://ui5.sap.com/#/entity/sap.m.List/sample/sap.m.sample.ListGrouping)

