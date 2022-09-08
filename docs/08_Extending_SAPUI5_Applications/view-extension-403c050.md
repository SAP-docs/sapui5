<!-- loio403c050da4ae4566b6aafec2bc590389 -->

# View Extension

SAPUI5 uses extension points for extending standard views with custom content. The assignment of a custom view to an extension point is done in component customizing.

You can add extension points in a standard view to indicate the position within the view where you can insert custom content. In XML views, the `<ExtensionPoint>` tag is used and replaced by the controls provided by the customer. The tag should therefore be placed in the view where also a control would be placed and document the types of controls that are suitable.

In the XML view below, for example, three extension points are defined: `extension1`, `extension2`, and `extension3`. The extension name together with the view name identifies an extension point.

```js
<mvc:View xmlns="sap.m"  xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    <core:ExtensionPoint name="extension1" />
    <TextView text="SAP View 'Sub2' - this one is extended by the customer and there should be a button after this text"></TextView>    
    <core:ExtensionPoint name="extension2" />   
    <core:ExtensionPoint name="extension3" />   
</mvc:View>

```

In JS views, extension points can be created within the `createContent` method by using the `sap.ui.extensionpoint` function. The following example shows the simplest way to initiate an extension point in a JS view.

```js
[...] 
      createContent(oController){
           return sap.ui.extensionpoint(this, "extension4");
      }
[...]
```

> ### Note:  
> This example creates a view with one extension point, which can be customized to hold controls, but do not show any default content.

You can add an extension point to an aggregation of another control by specifying the target control and, optionally, a target aggregation. The target aggregation is only required when you do not want to add the extension point to your target control's default aggregation. In the following example, an extension point is added to `VerticalLayout`:

```js
[...] 
      createContent(oController){
         var oLayout = new sap.ui.layout.VerticalLayout("Layout1");
         sap.ui.extensionpoint(this, "extension4", null, oLayout, "content" /*not mandatory, as content is the default aggregation*/);
      }
[...]
```

You can also use the JSON notation to create the surrounding control and add the extension point to an aggregation as follows:

```js
[...]
	var oLayout = new sap.ui.layout.VerticalLayout({
		content: [
		          new sap.m.Button({text: "I am preceding the extension point"}),
		          sap.ui.extensionpoint(this, "extension4"),
		          new sap.m.Button({text: "I am following the extension point"})
		         ]
	});
[...]

```

For table-like controls with aggregations that span two dimensions, for example, rows and columns, extension points must be provided for both dimensions. In the `sap.m.Table`, for example, one extension point needs to be provided in the `columns` aggregation, another one in the provided `cells` aggregation of the template`ColumnListItem`.



## Extension Points with Default Content

Applications can also use extension points to provide default content, which is used as long as no custom content is defined and ignored when custom content is defined. This feature is particularly interesting for aggregations, which are filled by data binding: In XML views, one item is given which is used as a template. In applications that enable exchanging these items by custom `ListItems`, the default list items can be enclosed in an `<ExtensionPoint>` tag.

```js
<mvc:View xmlns="sap.m"  xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    <ListBox items="{/names}">
        <core:ExtensionPoint name="extension1">
            <ListItem text="{firstName}" />
        </core:ExtensionPoint>
    </ListBox>  
</mvc:View>
```

This can be used for all multiple aggregations, not only for lists.

To define default content for extension points in JS views or fragments, specify the value of another parameter:

```js
sap.ui.extensionpoint(this, "extension4", fnCreateDefaultContent); // this extension point has a callback function creating default content

```

The function provided as a callback needs to return a control or an array of controls and is only executed when no customizing for the extension is configured, or when customizing is disabled.



## Extension Point Implementation

The extension content, which will then be inserted at the position of an extension point, is defined in the custom application. For example, for the extension points that have been defined in the standard application described in the section above, custom content can be defined for each extension. This is shown in the example below together with a description of the customizing that connects the extension point in the delivered standard application and the extension content in the customer application.

```js
extensions: {
        
    "sap.ui.viewExtensions": {
        "samples.components.ext.sap.Sub2": {
            "extension2": {
                className: "sap.ui.core.Fragment",
                fragmentName: "samples.components.ext.customer.CustomFrag1",
                type: "XML"
                id: "stableid"
            },
            "extension3": {
                className: "sap.ui.core.mvc.View",
                viewName: "samples.components.ext.customer.CustomSubSubView1",
                type: "XML"
            }
        },
    .....some more content

```

If you add an ID to the view extension, this ID overrules the original view ID. For view fragments like in the example, also IDs of nested controls are then prefixed with this ID.

Extension content in the custom application in `CustomFrag1.fragment.xml` file:

```js
<Button xmlns="sap.m" text="This Button is in an Extension Fragment" />

```

> ### Note:  
> You can also add multiple root-level controls using one fragment.

Extension content in the custom application in `CustomSubSubView1.view.xml` file.

```js
<mvc:View xmlns="sap.m"  xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    <core:ExtensionPoint name="extension1" />
    <TextView text="Customer View 'SubSubView1' - this one extends the original SAP View 'Sub2' - and even custom Views can be extended:"></TextView>   
    <core:ExtensionPoint name="extension2" />   
</mvc:View>

```

