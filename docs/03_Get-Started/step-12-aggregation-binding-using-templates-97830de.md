<!-- loio97830de2d7314e93b5c1ee3878a17be9 -->

# Step 12: Aggregation Binding Using Templates

Aggregation binding, also known as "list binding", lets a control bind to a list within the model data. This binding allows relative binding to the list entries by its child controls.

The system automatically creates as many child controls as are needed to display the data in the model using one of two approaches:

-   It clones a template control as many times as necessary to display the data.

-   It uses a factory function to generate the correct control for each bound list entry, based on the data received at runtime.




## Preview

  
  
**A third panel with a list of products is displayed**

![The graphic has an explanatory text](images/Tutorial_Data_Binding_Step_12_1642433.png "A third panel with a list of products is displayed")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 12](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.12).

1.  Add a new entry named `products` to the `models` entry under `sap.ui5` in the `manifest.json` file:

    **webapp/manifest.json**

    ```
    ...
    	"sap.ui5": {
    		"handleValidation": true,
    		"dependencies": {
    			"minUI5Version": "1.120.0",
    			"libs": {
    				"sap.m": {},
    				"sap.ui.core": {},
    				"sap.ui.layout": {}
    			}
    		},
    		"models": {
    			"": {
    				"type": "sap.ui.model.json.JSONModel",
    				"uri": "./model/data.json"
    			},
    			"products" : {
    				"type": "sap.ui.model.json.JSONModel",
    				"uri": "./model/Products.json"
    			},
    			"i18n": {
    				"type": "sap.ui.model.resource.ResourceModel",
    				"settings": {
    					"bundleName": "ui5.databinding.i18n.i18n",
    					"supportedLocales": [
    						"",
    						"de"
    					],
    					"fallbackLocale": ""
    				}
    			}
    		},
    ...
    ```

2.  Create a new file named `Products.json` in the `model` folder. Enter the data for the products:

    **webapp/model/Products.json \(New\)**

    ```
    { "Products": [ {
         "ProductID": 1,
         "ProductName": "Chai",
         "SupplierID": 1,
         "CategoryID": 1,
         "QuantityPerUnit": "10 boxes x 20 bags",
         "UnitPrice": "18.0000",
         "UnitsInStock": 39,
         "UnitsOnOrder": 0,
         "ReorderLevel": 10,
         "Discontinued": false
        }, {
         "ProductID": 2,
         "ProductName": "Chang",
         "SupplierID": 1,
         "CategoryID": 1,
         "QuantityPerUnit": "24 - 12 oz bottles",
         "UnitPrice": "19.0000",
         "UnitsInStock": 17,
         "UnitsOnOrder": 40,
         "ReorderLevel": 25,
         "Discontinued": true
        }, {
         "ProductID": 3,
         "ProductName": "Aniseed Syrup",
         "SupplierID": 1,
         "CategoryID": 2,
         "QuantityPerUnit": "12 - 550 ml bottles",
         "UnitPrice": "10.0000",
         "UnitsInStock": 0,
         "UnitsOnOrder": 70,
         "ReorderLevel": 25,
         "Discontinued": false
        }, {
         "ProductID": 4,
         "ProductName": "Chef Anton's Cajun Seasoning",
         "SupplierID": 2,
         "CategoryID": 2,
         "QuantityPerUnit": "48 - 6 oz jars",
         "UnitPrice": "22.0000",
         "UnitsInStock": 53,
         "UnitsOnOrder": 0,
         "ReorderLevel": 0,
         "Discontinued": false
        }, {
         "ProductID": 5,
         "ProductName": "Chef Anton's Gumbo Mix",
         "SupplierID": 2,
         "CategoryID": 2,
         "QuantityPerUnit": "36 boxes",
         "UnitPrice": "21.3500",
         "UnitsInStock": 0,
         "UnitsOnOrder": 0,
         "ReorderLevel": 0,
         "Discontinued": true
        }]
      }
    ```

3.  In the `App.view.xml` file, add a new panel with an `sap.m.List` control containing the`sap.m.ObjectListItem` template control as shown below. Note that the template control is only present once in the XML view. It's automatically cloned for each entry in the products' JSON model.

    **webapp/view/App.view.xml**

    ```xml
    ...
    	<Panel headerText="{i18n>panel3HeaderText}" class="sapUiResponsiveMargin" width="auto">
    		<List headerText="{i18n>productListTitle}" items="{products>/Products}">
    			<items>
    				<ObjectListItem title="{products>ProductName}"
    					number="{
    						parts: [
    							{path: 'products>UnitPrice'},
    							{path: '/currencyCode'}
    						],
    						type: 'Currency',
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
    </mvc:View>
    ```

4.  Also, add another formatter to the `App.controller.js` file to calculate the value of the stock of each product.

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
    		}
    	});
    });
    ```

5.  Lastly, add the missing texts to the `i18n.properties` and `i18n_de.properties` files. These texts are used in the newly added UI elements.

    **webapp/i18n/i18n.properties**

    ```ini
    ... 
    # Screen titles
    panel1HeaderText=Data Binding Basics
    panel2HeaderText=Address Details
    panel3HeaderText=Aggregation Binding
    
    ...
    
    # Product list
    productListTitle=Product List
    stockValue=Current Stock Value
    ```

    **webapp/i18n/i18n\_de.properties**

    ```ini
    ...
    # Screen titles
    panel1HeaderText=Data Binding Grundlagen
    panel2HeaderText=Adressdetails
    panel3HeaderText=Aggregation Binding
    
    ...
    
    # Product list
    productListTitle=Artikelliste
    stockValue=Lagerbestand Wert
    ```


**Related Information**  


[List Binding \(Aggregation Binding\)](../04_Essentials/list-binding-aggregation-binding-91f0577.md "List binding (or aggregation binding) is used to automatically create child controls according to model data.")

