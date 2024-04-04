<!-- loio6c7c5c266b534e7ea9a28f861dc515f5 -->

# Step 13: Element Binding

Now we want to do something with that newly generated list. In most cases you will use a list to allow the selection of an item and then show the details of that item elsewhere. In order to achieve this, we use a form with relatively bound controls and bind it to the selected entity via element binding.



## Preview

  
  
**Element binding implemented, product details displayed per item**

![](images/Tutorial_Data_Binding_Step_13_872d2ed.png "Element binding implemented, product details displayed per item")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 13](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.13).

1.  In the `App.view.xml` file, add a `press` event handler to the items in the list. Below the panel with the list, add a new panel with an `sap.m.SimpleForm`. In order to fill the form with data, we will bind the whole panel to the path of the element which we clicked in the list.

    **webapp/view/App.view.xml**

    ```xml
    ...
      	<Panel headerText="{i18n>panel3HeaderText}" class="sapUiResponsiveMargin" width="auto">
    		<List headerText="{i18n>productListTitle}" items="{products>/Products}">
    			<items>
    				<ObjectListItem
    					press=".onItemSelected"
    					type="Active"
    					title="{products>ProductName}"
    					number="{
    						parts: [
    							{path: 'products>UnitPrice'},
    							{path: '/currencyCode'}
    						],
    						type: 'sap.ui.model.type.Currency',
    						formatOptions: { showMeasure: false }
    					}"
    					numberUnit="{/currencyCode}">
    					<attributes>
    						<ObjectAttribute text="{products>QuantityPerUnit}"/>
    						<ObjectAttribute title="{i18n>stockValue}"
    							text="{
    								parts: [
    									{path: 'products>UnitPrice'},
    									{path: 'products>UnitsInStock'},
    									{path: '/currencyCode'}
    								],
    								formatter: '.formatStockValue'
    							}"/>
    					</attributes>
    				</ObjectListItem>
    			</items>
    		</List>
    	</Panel>
    	<Panel id="productDetailsPanel" headerText="{i18n>panel4HeaderText}" class="sapUiResponsiveMargin" width="auto">
    		<form:SimpleForm editable="true" layout="ColumnLayout">
    			<Label text="{i18n>ProductID}"/>
    			<Input value="{products>ProductID}"/>
    
    			<Label text="{i18n>ProductName}"/>
    			<Input value="{products>ProductName}"/>
    
    			<Label text="{i18n>QuantityPerUnit}"/>
    			<Input value="{products>QuantityPerUnit}"/>
    
    			<Label text="{i18n>UnitPrice}"/>
    			<Input value="{products>UnitPrice}"/>
    
    			<Label text="{i18n>UnitsInStock}"/>
    			<Input value="{products>UnitsInStock}"/>
    
    			<Label text="{i18n>Discontinued}"/>
    			<CheckBox selected="{products>Discontinued}"/>
    		</form:SimpleForm>
    	</Panel>
    </mvc:View>
    ```

2.  In the controller, add a new function `onItemsSelected`, which binds the newly created panel to the correct item whenever it is pressed.

    **webapp/controller/App.controller.js**

    ```js
    sap.ui.define([
    	"sap/m/library",
    	"sap/ui/core/mvc/Controller",
    	"sap/ui/model/type/Currency"
    ], (mobileLibrary, Controller, Currency) => {
    	"use strict";
    
    	return Controller.extend("ui5.databinding.controller.App", {
    		formatMail(sFirstName, sLastName) {
    			const oBundle = this.getView().getModel("i18n").getResourceBundle();
    
    			return mobileLibrary.URLHelper.normalizeEmail(
    				sFirstName + "." + sLastName + "@example.com",
    				oBundle.getText("mailSubject", [sFirstName]),
    				oBundle.getText("mailBody"));
    		},
    
    		formatStockValue(fUnitPrice, iStockLevel, sCurrCode) {
    			const oCurrency = new Currency();
    			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
    		},
    
    		onItemSelected(oEvent) {
    			const oSelectedItem = oEvent.getSource();
    			const oContext = oSelectedItem.getBindingContext("products");
    			const sPath = oContext.getPath();
    			const oProductDetailPanel = this.byId("productDetailsPanel");
    			oProductDetailPanel.bindElement({ path: sPath, model: "products" });
    		}
    	});
    });
    ```

3.  Finally, add the new texts to the `i18n.properties` and `i18n_de.properties` files.

    **webapp/i18n/i18n.properties**

    ```ini
    ...
    # Screen titles
    panel1HeaderText=Data Binding Basics
    panel2HeaderText=Address Details
    panel3HeaderText=Aggregation Binding
    panel4HeaderText=Product Details
    
    ...
    
    # Product Details
    ProductID=Product ID
    ProductName=Product Name
    QuantityPerUnit=Quantity per Unit
    UnitPrice=Unit Price
    UnitsInStock=Number of Units in Stock
    Discontinued=Discontinued
    
    ```

    **webapp/i18n/i18n\_de.properties**

    ```ini
    # Screen titles
    panel1HeaderText=Data Binding Grundlagen
    panel2HeaderText=Adressdetails
    panel3HeaderText=Aggregation Binding
    panel4HeaderText=Produktdetails
     
    ...
    
    # Product Details
    ProductID=Produkt-ID
    ProductName=Produktname
    QuantityPerUnit=Menge pro Einheit
    UnitPrice=Preis pro Einheit
    UnitsInStock=Lagerbestand
    Discontinued=Eingestellt
    ```


We can now click on an element in the list and see its details in the panel below. We can even edit these details, and the changes are directly shown in the list because we use two-way binding.

> ### Note:  
> Element bindings can also be relative to their parent context.

**Related Information**  


[Context Binding \(Element Binding\)](../04_Essentials/context-binding-element-binding-91f05e8.md "Context binding (or element binding) allows you to bind elements to a specific object in the model data, which will create a binding context and allow relative binding within the control and all of its children. This is especially helpful in list-detail scenarios.")

