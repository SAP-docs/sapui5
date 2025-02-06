<!-- loio1daa46220969467faf04329308c24613 -->

# Step 5: Smart Filter Bar and Smart Table

In this step, we will look at the `SmartTable` control along with the `SmartFilterBar` control that allow you to filter table entries.

In the context of `SmartTable`, there are several central features that can be activated:

-   Table personalization

-   View management with the `VariantManagement` control

-   Export to Microsoft Excel


In this step, we will look at `SmartTable` without table personalization or view management. These will be treated as separate steps. In addition, we will first focus on `SmartTable` with `sap.m.Table` as the underlying table type. This table type is best suited for a responsive behavior and is even designed to be used on a smart phone or a tablet.



## Preview

  
  
**Initial Look of the Smart Filter Bar and the Smart Table, and the Results of Firing the Query**

![](images/Smart_Controls_Tutorial_Step_05a_928338e.png "Initial Look of the Smart Filter Bar and the Smart Table, and the Results of
					Firing the Query ")

When choosing the *Filters* link, you see a popup:

  
  
**Dialog for Changing the Filter Values and Defining the Fields Displayed in the Filter Bar**

![](images/Smart_Controls_Tutorial_Step_05b_3e467ed.png " Dialog for Changing the Filter Values and Defining the Fields Displayed in
					the Filter Bar")

You can now select *Currency* as an additional field in the filter bar of the first dialog.

After selecting this additional field, we return to the table with the filter bar again and can use the value help for the newly added *Currency* field to restrict the results to those with *Currency = "EUR"*. Firing the query with this restriction, we see fewer results:

  
  
**Query "EUR" Applied**

![](images/Smart_Controls_Tutorial_Step_05e_7f96bda.png "Query "EUR" Applied")



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Smart Controls - Step 5 - Smart Filter Bar and Smart Table](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls/sample/sap.ui.comp.tutorial.smartControls.05).



## SmartTable.view.xml

```xml
<mvc:View 
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"
	controllerName="sap.ui.demo.smartControls.SmartTable"
	xmlns:smartFilterBar="sap.ui.comp.smartfilterbar"
	xmlns:smartTable="sap.ui.comp.smarttable">
	<smartFilterBar:SmartFilterBar 
		id="smartFilterBar"
		entitySet="Products">
		<smartFilterBar:controlConfiguration>
			<smartFilterBar:ControlConfiguration
				key="Category" visibleInAdvancedArea="true"
				preventInitialDataFetchInValueHelpDialog="false">
			</smartFilterBar:ControlConfiguration>
		</smartFilterBar:controlConfiguration>
	</smartFilterBar:SmartFilterBar>
	<smartTable:SmartTable 
		id="smartTable_ResponsiveTable"
		smartFilterId="smartFilterBar" 
		tableType="ResponsiveTable" 
		editable="false"
		entitySet="Products" 
		useVariantManagement="false"
		useTablePersonalisation="false" 
		header="Products" 
		showRowCount="true"
		enableExport="false" 
		enableAutoBinding="true">
	</smartTable:SmartTable>
</mvc:View>
```

We see that two new controls have been added to the `view.xml`. In the `SmartFilterBar` control we refer to an `entityType` which we will see later in `metadata.xml`. With the `ControlConfiguration` element that is added to the `controlConfiguration` aggregation of `SmartFilterBar`, we include the `Category` field in the filter bar. This is the area that can be hidden \(or shown\) using the toolbar *Hide Filter Bar*. We set the `preventInitialDataFetchInValueHelpDialog` property to `false` for an automatic execution of the query and thus showing of the results as soon as you open the value help. For `SmartTable` we define a few properties, some of which deserve special attention:

-   `smartFilterId="smartFilterBar"`

    Ensures that the `SmartTable` can consume the `FilterBar` and the filter values defined there

-   `tableType="ResponsiveTable"`

    Defines the underlying table as responsive \(technically, it is an `sap.m.Table`\)

-   `useVariantManagement="false"`

    We will treat the case `true` in a later step.

-   `useTablePersonalisation="false"`

    We will treat the case `true` in a later step.

-   `header="Products"`

    Specifies the title for the table to be shown

-   `showRowCount="true"`

    Specifies that the number of products appears after the title. In order for this count to work, the `SmartTable` needs to do the binding internally, which will be the case if either `smartFilterId` is specified or `enableAutoBinding` is set to `true` \(see below\).

-   `enableExport="false"`

    Offers an export to Microsoft Excel. In our case, we must set this value to `false` since the mock server does not support the proper format needed for such an export.

-   `enableAutoBinding="true"`

    Defines whether the query is fired automatically initially, so `false` would mean the user must press *Go* to see any results in the table.




## SmartTable.controller.js

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.smartControls.SmartTable");
});
```

We notice that because the `enableAutoBinding` property has aready been set in the `view.xml`, we don't have to do any binding in the controller.



## metadata.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="1.0"
	xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"
	xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"
	xmlns:sap="http://www.sap.com/Protocols/SAPData">
	<edmx:DataServices m:DataServiceVersion="2.0">
		<Schema Namespace="com.sap.wt05" 
			sap:schema-version="1" xmlns="http://schemas.microsoft.com/ado/2008/09/edm">
			<EntityType Name="Product">
				<Key>
					<PropertyRef Name="ProductId" />
				</Key>
				<Property Name="ProductId" Type="Edm.String"
					sap:filterable="false" />
				<Property Name="Name" Type="Edm.String" MaxLength="30"
					sap:label="Name" sap:filterable="false" />
				<Property Name="Category" Type="Edm.String" sap:label="Category"
					sap:filterable="true" />
				<Property Name="Price" Type="Edm.String" sap:unit="CurrencyCode"
					MaxLength="3" sap:label="Price" sap:filterable="false" />
				<Property Name="CurrencyCode" Type="Edm.String" MaxLength="3"
					sap:label="Currency" sap:semantics="currency-code" sap:filterable="true" />
			</EntityType>
			<EntityType Name="Currency">
				<Key>
					<PropertyRef Name="CURR" />
				</Key>
				<Property Name="CURR" Type="Edm.String" MaxLength="4"
					sap:display-format="UpperCase" sap:text="DESCR" sap:label="Currency Code"
					sap:filterable="false" />
				<Property Name="DESCR" Type="Edm.String" MaxLength="25"
					sap:label="Description" />
			</EntityType>
			<EntityType Name="Category">
				<Key>
					<PropertyRef Name="CAT" />
				</Key>
				<Property Name="CAT" Type="Edm.String" MaxLength="4"
					sap:display-format="UpperCase" sap:text="DESCR" sap:label="Category"
					sap:filterable="false" />
				<Property Name="DESCR" Type="Edm.String" MaxLength="25"
					sap:label="Description" />
			</EntityType>
			<EntityContainer m:IsDefaultEntityContainer="true"
				sap:supported-formats="atom json">
				<EntitySet Name="Products" EntityType="com.sap.wt05.Product" />
				<EntitySet Name="Currency" EntityType="com.sap.wt05.Currency" />
				<EntitySet Name="Category" EntityType="com.sap.wt05.Category" />
			</EntityContainer>
			<Annotations Target="com.sap.wt05.Product/CurrencyCode"
				xmlns="http://docs.oasis-open.org/odata/ns/edm">
				<Annotation Term="com.sap.vocabularies.Common.v1.ValueList">
					<Record>
						<PropertyValue Property="Label" String="Currency" />
						<PropertyValue Property="CollectionPath" String="Currency" />
						<PropertyValue Property="SearchSupported" Bool="true" />
						<PropertyValue Property="Parameters">
							<Collection>
								<Record Type="com.sap.vocabularies.Common.v1.ValueListParameterOut">
									<PropertyValue Property="LocalDataProperty"
										PropertyPath="CurrencyCode" />
									<PropertyValue Property="ValueListProperty"
										String="CURR" />
								</Record>
								<Record
									Type="com.sap.vocabularies.Common.v1.ValueListParameterDisplayOnly">
									<PropertyValue Property="ValueListProperty"
										String="DESCR" />
								</Record>
							</Collection>
						</PropertyValue>
					</Record>
				</Annotation>
			</Annotations>
			<Annotations Target="com.sap.wt05.Product/Category"
				xmlns="http://docs.oasis-open.org/odata/ns/edm">
				<Annotation Term="com.sap.vocabularies.Common.v1.ValueList">
					<Record>
						<PropertyValue Property="Label" String="Category" />
						<PropertyValue Property="CollectionPath" String="Category" />
						<PropertyValue Property="SearchSupported" Bool="true" />
						<PropertyValue Property="Parameters">
							<Collection>
								<Record Type="com.sap.vocabularies.Common.v1.ValueListParameterOut">
									<PropertyValue Property="LocalDataProperty"
										PropertyPath="Category" />
									<PropertyValue Property="ValueListProperty"
										String="CAT" />
								</Record>
								<Record
									Type="com.sap.vocabularies.Common.v1.ValueListParameterDisplayOnly">
									<PropertyValue Property="ValueListProperty"
										String="DESCR" />
								</Record>
							</Collection>
						</PropertyValue>
					</Record>
				</Annotation>
			</Annotations>
			<Annotations Target="com.sap.wt05.Product"
				xmlns="http://docs.oasis-open.org/odata/ns/edm">
				<Annotation Term="com.sap.vocabularies.UI.v1.LineItem">
					<Collection>
						<Record Type="com.sap.vocabularies.UI.v1.DataField">
							<PropertyValue Property="Value" Path="ProductId" />
						</Record>
						<Record Type="com.sap.vocabularies.UI.v1.DataField">
							<PropertyValue Property="Value" Path="Price" />
						</Record>
						<Record Type="com.sap.vocabularies.UI.v1.DataField">
							<PropertyValue Property="Value" Path="Name" />
						</Record>
						<Record Type="com.sap.vocabularies.UI.v1.DataField">
							<PropertyValue Property="Value" Path="Category" />
						</Record>
					</Collection>
				</Annotation>
			</Annotations>
		</Schema>
	</edmx:DataServices>
</edmx:Edmx>						
```

The `LineItem` annotation used here defines the columns that are created in the table. Only records defined in this annotation are created as table columns. Apart from this annotation, we have seen the remaining part before: We have two `ValueList` annotations that trigger a value help to be created for the associated fields, in our case the `CurrencyCode` and the `Category`. For `EntityType Name="Product"`, we have defined two fields as filterable. These are the two fields on which you can filter \(and that are then also available as filter fields for table personalization as we will see in the next step\). For `EntityType Name="Currency"`, we have only defined the description to be filterable to ensure that we only see the description field as search field and not the `CurrencyCode` field. The same applies to `EntityType Name="Category"`.



## Category.json

```js
[{
	"CAT": "PRO",
	"DESCR": "Projector"
},
{	
	"CAT": "GCD",
	"DESCR": "Graphics Card"
},
{
	"CAT": "ACC",
	"DESCR": "Accessory"
},
{
	"CAT": "PRI",
	"DESCR": "Printer"
},
{
	"CAT": "MON",
	"DESCR": "Monitor"
},
{
	"CAT": "LAP",
	"DESCR": "Laptop"
},
{
	"CAT": "KBD",
	"DESCR": "Keyboard"
}]
```

This JSON file defines the possible value of the `Category`.



## Currency.json

```js
[{
	"CURR": "EUR",
	"DESCR": "European Euro"
},
{
	"CURR": "USD",
	"DESCR": "United States Dollar"
},
{
	"CURR": "GBP",
	"DESCR": "British Pound"
},
{
	"CURR": "DKK",
	"DESCR": "Danish Krone"
},
{
	"CURR": "INR",
	"DESCR": "Indian Rupee"
},
{
	"CURR": "NOK",
	"DESCR": "Norwegian Krone"
},
{
	"CURR": "SEK",
	"DESCR": "Swedish Krona"
},
{
	"CURR": "CHF",
	"DESCR": "Swiss Franc"
}]
```

This JSON file defines the possible value of the `CurrencyCode`, the same values we saw in step 2.



## Products.json

```js
[
  {
	"ProductId": "1239102",
	"Name": "Power Projector 4713",
	"Category": "Projector",
	"SupplierName": "Titanium",
	"Description": "A very powerful projector with special features for Internet usability, USB",
	"WeightMeasure": 1467,
	"WeightUnit": "g",
	"Price": 856.49,
	"CurrencyCode": "INR",
	"Status": "Available",
	"Quantity": 3,
	"UoM": "PC",
	"Width": 51,
	"Depth": 42,
	"Height": 18,
	"DimUnit": "cm"
  },
.
.
.
]
```

We have only listed a part of the `Products.json` entries since the actual values are not so relevant. Please note that for your convenience we have included additional properties in this file to make it easier to experiment with changes to the `metadata.xml`, and possibly of the `view.xml`, to allow for a more hands-on experience.

**Related Information**  


[Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md "The sap.ui.comp.smartfilterbar.SmartFilterBar control analyzes the $metadata document of an OData service and renders a FilterBar control that can be used to filter, for example, a table or a chart.")

[Smart Table](../10_More_About_Controls/smart-table-bed8274.md "The sap.ui.comp.smarttable.SmartTable control is used to create different types of tables based on OData V2 metadata. The control allows users to use a number of built-in features, such as personalized table settings with sorting and filtering options, the calculation of column widths, column header menus, and a document export.")

