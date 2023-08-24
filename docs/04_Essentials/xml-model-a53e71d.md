<!-- loioa53e71d85fae4d0887a8b58431197a27 -->

# XML Model

The XML model allows to bind controls to XML data. It is a client-side model intended for small datasets, which are completely available on the client. The XML model does not contain mechanisms for server-based paging or loading of deltas. It supports two-way binding.

To instantiate the model, use the following code:

```js
var oModel = new sap.ui.model.xml.XMLModel();
```

The XML model allows to bind controls to XML data. It is a client-side model intended for small data sets, which are completely available on the client. The XML model does not contain mechanisms for server-based paging or loading of deltas. It supports two-way binding.

```js
oModel.setData(oXMLDocument);
```

To create inline XML data or to get XML data as a string, the XML model provides a `setXML` method. This method takes XML in text format and uses the browser's XML parser to create a document.

```js
oModel.setXML("<?xml version=\"1.0\"?><some><xml>data</xml></some>");
```

Usually, you load your data from the server using an HTTP-based service, so the `loadData` method provides an easy way to load XML data from the given URL:

```js
oModel.loadData("data.xml");
```

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.xml.XMLModel) in the Demo Kit.

**Related Information**  


[API Reference: `sap.ui.model.xml.XMLModel`](https://ui5.sap.com/#/api/sap.ui.model.xml.XMLModel)

<a name="loioab8ed73c5bbd4a2b9c9840401ebf25cf"/>

<!-- loioab8ed73c5bbd4a2b9c9840401ebf25cf -->

## Sorting and Filtering in XML Models

If you use an XML model for data binding, sorting and filtering is implemented in JavaScript because all data is available on the client. You can use custom methods for sorting and filtering in an XML model. To define custom methods, set the `fnCompare` method on the Sorter object or the `fnTest` method on the Filter object after creating it.

The `fnTest` method of the Filter gets the value to test as the only parameter and returns, whether the row with the given value should be filtered or not. To implement a filter, use the following code :

```js
var oFilter = new sap.ui.model.Filter("property");
oFilter.fnFilter = function(value) {
    return (value > 100);
};
```

The `fnCompare` method of the Sorter gets the two values to compare as parameters and returns -1, 0 or 1, dependent which of the two values should be ordered before the other. To implement a sorter, use the following code:

```js
var oSorter = new sap.ui.model.Sorter("property");
oSorter.fnCompare = function(value1, value2) {
    if (value1 < value2) return -1;
    if (value1 == value2) return 0;
    if (value1 > value2) return 1;
};
```

<a name="loio8674a69845c846d3bd68b60685bb5683"/>

<!-- loio8674a69845c846d3bd68b60685bb5683 -->

## XML Namespace Support

The XML model supports documents using XML namespaces.

For this purpose, you must declare namespaces using the `setNameSpace` method. The namespace prefixes do not necessarily need to be the same as in the XML document, they only used in the binding paths which are used to address nodes in the document.

Assumed this sample XML document:

```xml

<data xmlns="http://tempuri.org/base" xmlns:ext="http://tempuri.org/ext">
     <ext:entry id="0" value="foo" />
     <ext:entry id="1" value="foo" />
</data>
```

The namespaces must be declared in the JavaScript like this, to be able to bind to them:

```js

var oModel = new sap.ui.model.xml.XMLModel(oXMLDoc);
oModel.setNameSpace("http://tempuri.org/base");
oModel.setNameSpace("http://tempuri.org/ext", "e"); [...]
oTable.bindRows("/e:entry");
```

<a name="loiob8a2c24356c443228f7819d45697a2b8"/>

<!-- loiob8a2c24356c443228f7819d45697a2b8 -->

## Binding Path Syntax for XML Models

XML models differentiate between attributes and content. XML has no arrays and defines lists as multiple elements with the same name instead. This makes the binding path syntax for XML models more difficult than for JSON or OData models.

For attributes, a special selector using the "@" character exists and "text\(\)" can be used to reference the content text of an element. Lists are referenced by using the path to the multiple element.

> ### Note:  
> For the XML model the root must **not** be included in the path.

```xml

<companies>
  <company name="Treefish Inc">
    <info>
       <employees>3</employees>
    </info>
    <contact phone="873">Barbara</contact>
    <contact phone="734">Gerry</contact>
    <contact phone="275">Susan</contact>
  </company>
</companies>
```

Absolute binding paths within this model:

```
/company/@name
/company/info/employees
```

Relative binding paths within the `/company` context:

```
@name
info/employees/text()
```

Relative binding paths within a list binding of `/company/contact`:

```
text()
@phone
```

> ### Note:  
> In a similar JSON model you would use `/companies/company/locations` as binding path for the `locations` collection. In an XML model the respective collection binding path is: `/company/locations/location`.

