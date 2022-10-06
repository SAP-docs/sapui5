<!-- loio91f0c3ee6f4d1014b6dd926db0e91070 -->

# Custom Data - Attaching Data Objects to Controls

SAPUI5 provides the `data()` method to attach data objects to controls.

The `data()` method is contained in `sap/ui/core/Element`. You can use this method to set and get data. The API is equivalent to `jQuery.data()`.

The following additional options exist for attaching data to SAPUI5 controls:

-   Attaching data declaratively in XML views and JSON views, see [XML View](xml-view-91f2928.md)
-   Using data binding, see [Data Binding](data-binding-68b9644.md)
-   For strings only: Writing data to the HTML DOM as "data-\*" attribute, see [Writing Data to the HTML DOM as DATA-\* Attribute](writing-data-to-the-html-dom-as-data-attribute-1ef9fef.md)



<a name="loio91f0c3ee6f4d1014b6dd926db0e91070__section_BAD4FC9765174E0EB7264A423F7C4ED6"/>

## Setting and Retrieving Data

To set and retrieve data, use the following code:

```js
myButton.data("myData", "Hello");  // attach some data to the Button

alert(myButton.data("myData"));     // alerts "Hello"

var dataObject = myButton.data();  // a JS object containing ALL data
alert(dataObject.myData);          // alerts "Hello"
```



<a name="loio91f0c3ee6f4d1014b6dd926db0e91070__section_798A4B993F764A04BAB08DEAACC5DFA9"/>

## Binding Data: Use in a List Binding

For list bindings, use the following code:

```js
// "CustomData" required from "sap/ui/core/CustomData"
// "JSONModel" required from module "sap/ui/model/json/JSONModel"
// "List" required from module "sap/m/List"
// "StandardListItem" required from module "sap/m/StandardListItem"

function giveAnswer(oEvent) {
  var oItem = oEvent.getSource();      // the StandardListItem
  var sData = oItem.data("theAnswer"); // access the custom data stored under the key "theAnswer"
  alert("The answer is: " + sData);
}

// create a JSONModel, fill in the data and bind the ListBox to this model
var oModel = new JSONModel(aData);         // aData.questions is an array of elements like {question:"Some question?",answer:"Some answer!"}
var oList = new List({select:giveAnswer}); // method giveAnswer() retrieves the custom data from the selected ListItem
oList.setModel(oModel);

// create an item template and bind the question data to the "text" property
var oItemTemplate = new StandardListItem({title: "{question}", press: giveAnswer, type: "Active"});

// create a CustomData template, set its key to "answer" and bind its value to the answer data
var oDataTemplate = new CustomData({key:"theAnswer", value: "{answer}"});

// add the CustomData template to the item template
oItemTemplate.addCustomData(oDataTemplate);

// bind the items to the "questions" (which is the name of the data array)
oList.bindAggregation("items", "/questions", oItemTemplate);
```

You can find a productive example in the SAPUI5 test suite by searching for `CustomData` in `sap.ui.core`.



<a name="loio91f0c3ee6f4d1014b6dd926db0e91070__section_CC5E82C4375146D9A40D05057ADFDB04"/>

## Use in XML Views

In XML views, `CustomData` objects can be written as normal aggregated objects. However, to reduce the amount of code and improve the readability, a shortcut notation has been introduced: You can directly write the data attributes into the control tags. Simply use the following namespace for the respective attributes:

`myNamespace="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"`.

The difference between this more formal namespace and the existing MVC namespaces is intentional.

> ### Example:  
> **Use without Data Binding** 
> 
> The following example shows how you attach the string "just great" to a button:
> 
> ```xml
> <mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" controllerName="my.own.controller"
>            xmlns:app="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1">
>      <Button id="myBtn" text="Click to show stored coordinates data" app:mySuperExtraData="just great" press="alertCoordinates"></Button>
> </mvc:View>
> ```
> 
> The string is returned at runtime by calling `button.data("mySuperExtraData")`.

> ### Example:  
> **Use with Data Binding** 
> 
> You can use data binding with the following notation:
> 
> ```xml
> <mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" controllerName="my.own.controller"
>            xmlns:app="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1">
>      <Button id="myBtn" text="Click to show stored coordinates data" app:coords="{data}" press="alertCoordinates"></Button>
> </mvc:View>
> ```



<a name="loio91f0c3ee6f4d1014b6dd926db0e91070__section_A34A9FCBC8DA4E8CB559743B7B48CDCE"/>

## Use in JSON Views

To add custom data to an element in a JSON view, add the following code to the element properties \(examples with data binding\):

```js
customData: {
  Type:"sap.ui.core.CustomData",
    key:"coords",
    value:"{data}" // bind custom data
  }
```

To add multiple data elements, use an array:

```js
customData: [{
  Type:"sap.ui.core.CustomData",
    key:"coords",
    value:"{data}" // bind custom data
  },
  {
  Type:"sap.ui.core.CustomData",
    key:"coords",
    value:"{data}" // bind custom data
  }]
```

In context, this looks as follows:

```js
var json =
  {
    Type: "sap.ui.core.mvc.JSONView",
    controllerName:"my.own.controller",
    content: [{
      Type:"sap.m.Panel",
      content:[{
        Type:"sap.m.Button",
        text:"{actionName}",
        press: "doSomething",
        customData: {
          Type:"sap.ui.core.CustomData",
          key:"coords",
          value:"{data}" // bind custom data
        }
      }]
    }]
  };
```



## Use in HTML Views

To add custom data objects to a control or an element in HTML views, use a specific HTML attribute with the following syntax: `data-custom-data:my-key="myValue"`. A custom data attribute starts with `data-custom-data:` followed by the name of the key. The dashes convert the respective following character into an upper case character. The value can be either a string or a binding expression:

```html
<div data-sap-ui-type="sap.m.Button" data-text="This button is added dynamically" data-custom-data:my-key="myValue" data-custom-data:my-bound-key="{/mypath}"></div>
```

