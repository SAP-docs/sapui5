<!-- loio284a036c8ff943238fb65bf5a2676fb7 -->

# Step 15: Aggregation Binding Using a Factory Function

Instead of hard-coding a single template control, we use a factory function to generate different controls based on the data received at runtime. This approach is much more flexible and allows complex or heterogeneous data to be displayed.



## Preview

  
  
**A different type of list item is displayed for a discontinued product**

![The graphic has an explanatory text](images/Tutorial_Data_Binding_Step_15_db27ba8.png "A different type of list item is displayed for a discontinued product")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 15](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.15).

1.  Create a `ProductSimple.fragment.xml` file in the `view` folder. Define an `sap.m.StandardListItem` that is used if the stock level is zero and the product has also been discontinued. This is a simple use case where you just define a warning icon and a "Product Discontinued" message in the `info` property.

    **webapp/view/ProductSimple.fragment.xml \(New\)**

    ```xml
    <core:FragmentDefinition
    	xmlns="sap.m"
    	xmlns:core="sap.ui.core">
    	<StandardListItem
    		id="productSimple"
    		icon="sap-icon://warning"
    		title="{products>ProductName} ({products>QuantityPerUnit})"
    		info="{i18n>Discontinued}"
    		type="Active"
    		infoState="Error"
    		press=".onItemSelected">
    	</StandardListItem>
    </core:FragmentDefinition>
    
    ```

2.  Create a new `ProductExtended.fragment.xml` file in the `view` folder. In the extended use case, you create an `ObjectListItem` to display more product details. The properties are bound to the fields of the current data binding context and therefore can use types, formatters, and all handlers that are defined in the assigned controller. However, more complex logic can’t be defined declaratively in XML. Therefore, we add a single `sap.m.ObjectAttribute` in a factory function of the controller using JavaScript, which displays an "Out of Stock" message when the stock level is zero.

    **webapp/view/ProductExtended.fragment.xml \(New\)**

    ```xml
    <core:FragmentDefinition
    	xmlns="sap.m"
    	xmlns:core="sap.ui.core">
    	<ObjectListItem
    		id="productExtended"
    		title="{products>ProductName} ({products>QuantityPerUnit})"
    		number="{
    			parts: [
    				{path: 'products>UnitPrice'},
    				{path: '/currencyCode'}
    			],
    			type: 'sap.ui.model.type.Currency',
    			formatOptions : {
    				showMeasure : false
    			}
    		}"
    		type="Active"
    		numberUnit="{/currencyCode}"
    		press=".onItemSelected">
    	</ObjectListItem>
    </core:FragmentDefinition>
    ```

3.  In the `App.view.xml` file, add an XML namespace for `sap.ui.core`. Now, remove the `items` aggregation from the `sap.m.List` XML element. Then, add an `id` attribute to the `sap.m.List` and include the factory function in the items' binding definition. Finally, add the two newly created fragments as dependents to the `sap.m.List`.

    **webapp/view/App.view.xml**

    ```xml
    <mvc:View
    	controllerName="ui5.databinding.controller.App"
    	xmlns="sap.m"
    	xmlns:core="sap.ui.core"
    	xmlns:form="sap.ui.layout.form"
    	xmlns:l="sap.ui.layout"
    	xmlns:mvc="sap.ui.core.mvc">
    ...
    	<Panel headerText="{i18n>panel3HeaderText}" class="sapUiResponsiveMargin" width="auto">
    		<List
    			id="ProductList"
    			headerText="{i18n>productListTitle}"
    			items="{
    				path: 'products>/Products',
    				factory: '.productListFactory'
    			}">
    			<dependents>
    				<core:Fragment fragmentName="ui5.databinding.view.ProductSimple" type="XML"/>
    				<core:Fragment fragmentName="ui5.databinding.view.ProductExtended" type="XML"/>
    			</dependents>
    		</List>
    	</Panel>
    ...
    </mvc:View>
    ```

    The `sap.m.List` that previously held the product list is now reduced simply to a named, but otherwise empty placeholder. Without a factory function to populate it, this `List` would always remain empty. As the fragments are declared as dependents, they also inherit the controller of the view, so that e.g. the `onItemSelect` function of the `App.controller.js` can still be used in the`ProductExtended.fragment.xml`.

4.  In the `App.controller.js` file, add a new import for the `sap.m.ObjectAttribute` class and create a new function called `productListFactory`. This factory function returns a control for the associated binding context, similar to the XML templates we have defined in the previous steps. The types of controls returned by this factory function must suit the items aggregation of the `sap.m.List` object. In this case, it returns either an `sap.m.StandardListItem` or an `sap.m.ObjectListItem` based on the data stored in the context of the item to be created.

    **webapp/controller/App.controller.js**

    ```js
    sap.ui.define([
    	"sap/m/library",
    	"sap/m/ObjectAttribute",
    	"sap/ui/core/mvc/Controller",
    	"sap/ui/model/type/Currency"
    ], (mobileLibrary, ObjectAttribute, Controller, Currency) => {
    	...
    		productListFactory(sId, oContext) {
    			let oUIControl;
    
    			// Decide based on the data which dependent to clone
    			if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
    				// The item is discontinued, so use a StandardListItem
    				oUIControl = this.byId("productSimple").clone(sId);
    			} else {
    				// The item is available, so we will create an ObjectListItem
    				oUIControl = this.byId("productExtended").clone(sId);
    
    				// The item is temporarily out of stock, so we will add a status
    				if (oContext.getProperty("UnitsInStock") < 1) {
    					oUIControl.addAttribute(new ObjectAttribute({
    						text : {
    							path: "i18n>outOfStock"
    						}
    					}));
    				}
    			}
    
    			return oUIControl;
    		}
    
    	});
    });
    ```

    The function decides which type of control to return by checking the current stock level and whether or not the product has been discontinued. For both options, it loads and clones the respective XML fragment so that the view logic can be defined dynamically. If the stock level is zero and the product has also been discontinued, the `ProductSimple` XML fragment is used, otherwise the `ProductExtended` XML fragment.

    For each item of the list, the corresponding control is cloned. This method creates a fresh copy of a control that can be bound to the context of the list item. Please note: In a factory function, you are responsible for the life cycle of the control you create.

    If the product is not discontinued but the stock level is zero, we are temporarily out of stock. In this case, a single `sap.m.ObjectAttribute` is added to the cloned control. The "Out of Stock" message is bound to the `sap.m.ObjectAttribute`'s `text` property using JavaScript. Similar to declarative definitions in the XML view or fragments, you can bind properties using data binding syntax. In this case, the text is bound to an entry in the resource bundle. Since the `sap.m.ObjectAttribute` is a child of the list item, it has access to all assigned models and the current binding context.

    Finally, the function returns the control that is then displayed inside the list.

5.  Finally, add the new texts to the `i18n.properties` and `i18n_de.properties` files.

    **webapp/i18n/i18n.properties**

    ```ini
    ...
    # Product Details
    ...
    outOfStock=Out of Stock
    ```

    **webapp/i18n/i18n\_de.properties**

    ```ini
    ...
    # Product Details
    ...
    outOfStock=Nicht vorr\u00e4tig
    ```


Congratulations! You completed the Data Binding tutorial.

**Related Information**  


[List Binding \(Aggregation Binding\)](../04_Essentials/list-binding-aggregation-binding-91f0577.md "List binding (or aggregation binding) is used to automatically create child controls according to model data.")

[XML Fragments](../04_Essentials/xml-fragments-2c677b5.md "XML fragments are similar to XML view, but have no <View> tag as root element. Instead, there is an SAPUI5 control.")

[Using Factory Functions](../04_Essentials/using-factory-functions-335848a.md "")

