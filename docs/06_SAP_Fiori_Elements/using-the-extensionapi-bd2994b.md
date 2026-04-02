<!-- loiobd2994b69ef542998becbc69ab093f7e -->

# Using the `ExtensionAPI`

You can use `extensionAPI` to extend your application.

The `ExtensionAPI` consists of several elements that are described below. It can be used for the list report page and the object page.



## API Methods

When coding the implementation of an extension hook or an event handler used in a view extension, you can use the public methods of `sap.ui.core.mvc.Controller`. However: Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

Any other methods or properties of the controller \(in particular any components whose names start with `'_'`\) should be considered private and therefore should not be used.

You can also access services provided by the template framework. From the controller, you can access these services through `getExtensionAPI`.

This gets you an object that is specific to the template you are currently enhancing, as shown in the examples below:


<table>
<tr>
<th valign="top">

Template

</th>
<th valign="top">

Instance

</th>
</tr>
<tr>
<td valign="top">

List report page

</td>
<td valign="top">

`sap.fe.templates.ListReport.ExtensionAPI` 

</td>
</tr>
<tr>
<td valign="top">

Object page

</td>
<td valign="top">

`sap.fe.templates.ObjectPage.ExtensionAPI` 

</td>
</tr>
</table>

> ### Note:  
> Do not rely on the names of these classes in your coding, as they can still be changed. However, the set of methods provided by these objects will only be extended in a compatible way.

For information about the `ExtensionAPI`, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.ExtensionAPI).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).

