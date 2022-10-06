<!-- loio91f057786f4d1014b6dd926db0e91070 -->

# List Binding \(Aggregation Binding\)

List binding \(or aggregation binding\) is used to automatically create child controls according to model data.

Let’s say we would like to display the following JSON model data in a `sap.m.List`:

```json
{
	companies : [
		{
			name : "Acme Inc.",
			city: "Belmont",
			state: "NH",
			county: "Belknap",
			revenue : "123214125.34"  
		},{
			name : "Beam Hdg.",
			city: "Hancock",
			state: "NH",
			county: "Belknap",
			revenue : "3235235235.23"  
		},{
			name : "Carot Ltd.",
			city: "Cheshire",
			state: "NH",
			county: "Sullivan",
			revenue : "Not Disclosed"  
		}]
}
```



<a name="loio91f057786f4d1014b6dd926db0e91070__AggregationBindingXMLViews"/>

## Declarative List Binding in XML Views

```xml
<mvc:View
	controllerName="sap.ui.sample.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<List id=”companyList” items="{path: '/companies', templateShareable:false}">
		<items>
			<StandardListItem
				title="{name}"
				description="{city}"
			/>
		</items>
	</List>
</mvc:View>
```

The `List` element has both an `items` attribute and a nested `items` element:

-   The attribute `items="{path: '/companies', templateShareable:false}"` binds the children of our json model’s `companies` array to the list. This by itself is not enough to display the companies, instead it sets the parent path for the binding of all contained list items and their descendants. In addition you need to declare a nested element.

-   The nested `items` element in our case contains a `StandardListItem`. This serves as a template for creating the individual list rows.


> ### Note:  
> The binding paths of `StandardListItem` for properties `title` and `description` are relative to `companies`. This means that instead of having to write the whole binding path `title={/companies/name}`, you can simply write `title={name}`. By omitting the slash ‘/’ at the beginning, `{name}` is marked as a relative binding path.

Instead of using a `StandardListItem` as a list row template, you can also use any other `sap.m.` list item, such as:

-   ActionListItem

-   DisplayListItem

-   CustomListItem

-   ObjectListItem


For more examples and details on when to use which list item control, see the various list items in the [Samples](https://ui5.sap.com/explored.html) in the Demo Kit.

> ### Note:  
> The model has a default size limit to avoid too much data being rendered on the UI. This size limit determines the number of entries used for the list bindings. The default size limit is 100 entries.
> 
> This means that controls that don't support paging or don't request data in chunks \(e.g. `sap.m.ComboBox`\) only show 100 entries even though the model contains more items.
> 
> To change this behavior, you can either set a size limit in the model by using `oModel.setSizeLimit` or set the `length` property of the `oBindingInfo` parameter of the  [`sap.ui.base.ManagedObject#bindAggregation`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindAggregation) method.



## List Binding in the JavaScript Code

You can define list binding directly in JavaScript either in the `settings` object in the constructor or by calling the `bindAggregation` method. List binding requires the definition of a template, which is cloned for each bound entry of the list. For each clone that is created, the binding context is set to the respective list entry, so that all bindings of the template are resolved relative to the entry. The aggregated elements are destroyed and recreated whenever the bound list in the data model is changed.

To bind a list, you create a template or provide a factory function, which is then passed when defining the list binding itself. In the `settings` object, this looks as follows:

```js
var oItemTemplate = new sap.ui.core.ListItem({text:"{name}"});
oComboBox = new sap.m.ComboBox({
	items: {
		path: "/companies",      //no curly brackets here!
		template: oItemTemplate
		templateShareable: false
	}
});
```

A template is not necessarily a single control as shown in the example above, but can also be a tree of controls. For each list entry, a deep clone of the template is created and added to the bound list.

You can also define the list binding by using the `bindAggregation` method of a control:

```js
var oItemTemplate = new sap.ui.core.ListItem({text:"{name}"});
oComboBox.bindAggregation("items", {
path: "/companies",
template: oItemTemplate,
templateShareable: false
});
```

In addition, some controls have a typed binding method for lists that are likely to be bound by the application:

```js
var oComboBox.bindItems("/companies", oItemTemplate);
```

To remove a list binding, you can use the `unbindAggregation` method:

```js
oComboBox.unbindAggregation("items");
```

Controls with typed binding methods also provide a typed unbind:

```js
oComboBox.unbindItems();
```

When a list is unbound, its aggregated controls are removed and destroyed by default. If you would like to keep the items in your `ComboBox`, for example, you can do so by using:

```js
oComboBox.unbindAggregation("items", true);
```

**Related Information**  


[Tutorial Step 12: Aggregation Binding Using Templates](../03_Get-Started/step-12-aggregation-binding-using-templates-97830de.md "Aggregation binding (or &quot;list binding&quot;) allows a control to be bound to a list within the model data and allows relative binding to the list entries by its child controls.")

[Binding Syntax](binding-syntax-e2e6f41.md "You bind UI elements to data of a data source by defining a binding path to the model that represents the data source in the app.")

[Formatting, Parsing, and Validating Data](formatting-parsing-and-validating-data-07e4b92.md "Data that is presented on the UI often has to be converted so that is human readable and fits to the locale of the user. On the other hand, data entered by the user has to be parsed and validated to be understood by the data source. For this purpose, you use formatters and data types.")

