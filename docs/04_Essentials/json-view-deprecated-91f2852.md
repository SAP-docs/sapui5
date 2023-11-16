<!-- loio91f285256f4d1014b6dd926db0e91070 -->

# JSON View \(deprecated\)

The JSON view type is defined in a file. The file name has to either end with `.view.json` or as a JSON string. The file name and the folder structure together specify the name of the view that equals the SAPUI5 module name within the modularization concept.

> ### Caution:  
> Deprecated as of UI5 version 1.120, replaced by [XML View](xml-view-91f2928.md).

For the file `resources/sap/hcm/Address.view.json`, the view name is `sap.hcm.Address`. The application uses this view name for displaying an instance of this view.

The file looks as follows:

```js
{ 
   "Type":"sap.ui.core.mvc.JSONView",
   "controllerName":"sap.hcm.Address",
   "content": [{
      "Type":"sap.m.Image",
      "id":"MyImage",
      "src":"http://www.sap.com/global/ui/images/global/sap-logo.png"
   },
   {
      "Type":"sap.m.Button",
      "id":"MyButton",
      "text":"Press Me"

   }]

}
```

Nest the JSON objects analogous to the nesting of SAPUI5 controls and add the property values as attributes. The syntax is the same as the syntax of a JSON constructor for any control.

> ### Note:  
> You can use strings, Boolean values, and null in your JSON view.



<a name="loio91f285256f4d1014b6dd926db0e91070__section_37BCAE29E4604ABBA78979649D54CF04"/>

## Aggregation Handling

You add child controls as arrays. This is shown in the example above where an image and a button have been added to the view content aggregation.



## Event Handling

In JSON views, event handlers are bound as attributes with the attribute name as event name like `press` for a button and the attribute value as event handler name.

The following declaration causes `controller.doSomething()` to be executed when the button is pressed:

```js
...
   {
      "Type":"sap.m.Button",
      "id":"MyButton",
      "text":"Press Me",
      "press":"doSomething"
   }
...
```

The location in which an event handler is looked up, are similar to XML views \(see [Handling Events in XML Views](handling-events-in-xml-views-b0fb4de.md)\).



## Data Binding

You can bind data in JSON views. To bind the texts of a control to a language-dependent resource bundle, define the resource bundle via name \(`resourceBundleName` property\) or a URL \(`resourceBundleUrl` property\) and assign an alias \(`resourceBundleAlias` property\) for the bundle within the view definition. The binding path is the same for all other SAPUI5 data bindings.

Resource bundle content:

```
MY_TEXT=Hello World
```

> ### Example:  
> ```js
> {   "Type": "sap.ui.core.JSONView",
>     "controllerName":"my.own.views.test",
>     "resourceBundleName":"myBundle",
>     "resourceBundleAlias":"i18n",
>     "content": [{
>         "Type":"sap.m.Panel",
>         "id":"myPanel",
>         "content":[{
>             "Type":"sap.m.Button",
>             "id":"Button1",
>             "text":"{i18n>MY_TEXT}",
>             "press": "doIt"
>         }]
>     }]
> }
> 
> ```

The `ResourceModel` for binding this texts is created during view instantiation. The model is set as secondary model with the given alias to the view instance. To bind other properties to another model, create the model in the corresponding controller or HTML page and attach it to the view with another alias.

