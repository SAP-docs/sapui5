<!-- loioe2e6f4127fe4450ab3cf1339c42ee832 -->

# Binding Syntax

You bind UI elements to data of a data source by defining a binding path to the model that represents the data source in the app.



When defining a binding path for a control, a binding context is created which connects this control to a data model. The UI control then gets the data through that context and displays it on the screen.

![A binding path connects a control in the View to data in the data model.](images/Binding_Syntax_493c875.png)



<a name="loioe2e6f4127fe4450ab3cf1339c42ee832__section_ezj_nhr_5cb"/>

## Simple Binding

To reference model data in a view , you can use the simple binding syntax "<code>{<i>/path/to/data</i>}</code>":

```xml
<Input value="{/firstName}"/>
```

You can add other properties, such as formatters, data types, or events:

-   Data type:

    ```xml
    <Input value="{path: '/firstName', type: 'sap.ui.model.type.String'}"/>
    ```

-   Formatter:

    ```xml
    <Input value="{path: '/firstName', formatter: 'my.globalFormatter'}"/>
    ```

-   Event:

    ```xml
    <Input value="{path: '/firstName', events: { dataRequested: '.onMyDataRequested'}"/>
    ```


For more information, see [Binding Path](binding-path-2888af4.md).

For more information about data types and formatters, see [Formatting, Parsing, and Validating Data](formatting-parsing-and-validating-data-07e4b92.md).



<a name="loioe2e6f4127fe4450ab3cf1339c42ee832__section_njl_ypr_5cb"/>

## Composite Binding

If a control requires data from multiple different model properties, you use a `parts` array of `path`s to define composite binding paths:

```xml
<TextField value="{
	parts: [
		{path:'birthday/day'},
		{path:'birthday/month'},
		{path:'birthday/year'}
	], 
	formatter:'my.globalFormatter'
}"/>
```

For more information, see [Composite Binding](composite-binding-a2fe8e7.md) and [Examples for Data Binding in Different View Types](examples-for-data-binding-in-different-view-types-25ab54b.md).



<a name="loioe2e6f4127fe4450ab3cf1339c42ee832__section_htn_jqr_5cb"/>

## Expression Binding in XML Views

Expression binding is a simple way to calculate values directly in the view. For example, if you want to change the color of the price depending on whether it is above or below some threshold. With expression binding you don't have to declare a separate formatter:

```xml
<ObjectStatus state="{= ${products>UnitPrice}  > ${/priceThreshold} ? 'Error' : 'Success' }"/>
```

For more information, see [Expression Binding](expression-binding-daf6852.md).



<a name="loioe2e6f4127fe4450ab3cf1339c42ee832__section_kft_lqr_5cb"/>

## Property Metadata Binding for OData Services

With metadata binding, you can bind properties of a control to the corresponding property that is defined in the metadata of an OData service:

```xml
<Input maxLength="{/#Company/ZipCode/@maxLength}"/>
```

For more information, see [Property Metadata Binding](property-metadata-binding-f5aa4bb.md).

**Related Information**  


[API Reference: `sap.ui.base.ManagedObject.bindProperty`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindProperty)

[API Reference: `sap.ui.base.ManagedObject.bindAggregation`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindAggregation)

[API Reference: `sap.ui.base.ManagedObject.bindObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindObject)

