<!-- loioed8fda66cd3b406cbd22f6019188ce82 -->

# Step 1: Smart Field

One important building block of smart controls is the `SmartField` control that, depending on the OData metadata defined, allows you to render other controls and, for example, define fields with certain attributes based on the metadata.

So we start our journey into the world of smart controls by looking at the `SmartField` control and, in particular, an example in which a price together with its currency is displayed. Later we will see more complex examples.



## Preview

  
  
**Smart Field**

![](images/Smart_Controls_Tutorial_Step_01_379bc52.png "Smart Field")



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Smart Controls - Step 1 - Smart Field](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls/sample/sap.ui.comp.tutorial.smartControls.01).



## SmartField.view.xml

```js
<mvc:View
	controllerName="sap.ui.demo.smartControls.SmartField"
	xmlns="sap.m"
	xmlns:smartForm="sap.ui.comp.smartform"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:sap.ui.layout="sap.ui.layout"
	xmlns:smartField="sap.ui.comp.smartfield">
	<smartForm:SmartForm editable="true">
		<smartForm:layout>
			<smartForm:ColumnLayout 
				emptyCellsLarge="4"
				labelCellsLarge="4"
				columnsM="1"
				columnsL="1"
				columnsXL="1"/>
		</smartForm:layout>
		<smartForm:Group>
			<smartForm:GroupElement>
				<smartField:SmartField value="{Price}" id="idPrice"/>
			</smartForm:GroupElement>
		</smartForm:Group>
	</smartForm:SmartForm>
</mvc:View>
```

This view basically specifies a form with an appropriate layout, the content of which consists of a `SmartLabel` control along with a `SmartField` control . The connection between `SmartLabel` and `SmartField` is essential since metadata for `SmartLabel` is controlled via the binding of `SmartField`. `SmartField` and `SmartLabel` are connected by `id` and `labelFor`, respectively, in this case `idPrice`.



## SmartField.controller.js

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.smartControls.SmartField", {
		onInit: function() {
			this.getView().bindElement("/Products('4711')");
		}
	});

});
```

In the `SmartField.controller.js` file you will see that we bind the view to `"/Products('4711')"`.



## metadata.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="1.0"
		   xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"
		   xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"
		   xmlns:sap="http://www.sap.com/Protocols/SAPData">
	<edmx:DataServices m:DataServiceVersion="2.0">
		<Schema Namespace="com.sap.wt01"
				sap:schema-version="1" xmlns="http://schemas.microsoft.com/ado/2008/09/edm">
			<EntityType Name="Product">
				<Key>
					<PropertyRef Name="ProductId"/>
				</Key>
				<Property Name="ProductId" Type="Edm.String"/>
				<Property Name="Price" Type="Edm.String"
						  sap:unit="CurrencyCode" sap:label="Price"
						  Precision="13" Scale="6"
						  sap:updatable="true"/>
				<Property Name="CurrencyCode" Type="Edm.String"
						  MaxLength="3" sap:label="Currency" sap:semantics="currency-code"
						  sap:updatable="true"/>
			</EntityType>
			<EntityContainer m:IsDefaultEntityContainer="true"
							 sap:supported-formats="atom json">
				<EntitySet Name="Products" EntityType="com.sap.wt01.Product"
						   sap:updatable="true"/>
			</EntityContainer>
		</Schema>
	</edmx:DataServices>
</edmx:Edmx>

```

The metadata document corresponds to the `$metadata` document of your OData service. You will find the `Price` and the `CurrencyCode` metadata here, and, in particular, you will see that the `Price` property defines `CurrencyCode` as its unit. The relationship is automatically picked up by `SmartField`, and it decides on the particular rendering of the price along with its currency based on additional metadata, such as `Type`, `Scale` and `Precision`. For more information, see [Currency Formatting](../04_Essentials/currency-formatting-e978728.md). With `sap:updatable="true"` we define that the field is editable; `sap:updatable="false"` would indicate that the field is read-only. All Boolean-like properties default to true if not specified otherwise. To make this clearer, however, we sometimes still include them in the `metadata.xml` document, like `sap:updatable="true`" in this case. Later, we will see other examples of how the `SmartField` control shows a "smart" behavior as to which controls are rendered on the UI.



## Products.json

```js
[{
	"ProductId": "4711",
	"Price": 856.49,
	"CurrencyCode": "EUR"
}]
```

Finally, we include the `Products.json` file \(as referred to in the `metadata.xml` as `EntitySet`\) in our example, which contains the data shown on the UI.

**Related Information**  


[Smart Field](../10_More_About_Controls/smart-field-4864403.md "The sap.ui.comp.smartfield.SmartField control offers a wrapper for other controls using OData metadata to determine which control has to be instantiated and makes it possible to add input-enabled fields to an application.")

