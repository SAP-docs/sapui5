<!-- loio91f292806f4d1014b6dd926db0e91070 -->

# XML View

The XML view type is defined in an XML file. The file name either ends with `.view.xml` or as an XML string. The file name and the folder structure together specify the name of the view that equals the SAPUI5 module name.

> ### Example:  
> For `resources/sap/hcm/Address.view.xml`, the view name is `sap.hcm.Address`. The application uses this view name for displaying an instance of this view. If you define the XML view by means of an XML string, no file or define/require is needed.
> 
> The file looks as follows:
> 
> ```xml
> 
> <mvc:View controllerName="sap.hcm.Address" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
>    <Panel>
>       <Image src="http://www.sap.com/global/ui/images/global/sap-logo.png"/>
>       <Button text="Press Me!"/>
>    </Panel>
> </mvc:View>
> ```

Nest the XML tags analogous to the nesting sequence of SAPUI5 controls and add the property values as attributes \(see [Namespaces in XML Views](namespaces-in-xml-views-2421a2c.md)\).

Each control or element is represented by an XML tag with the name of the control. If you, for example, want to create an instance of a `sap.m.Button`, you use the `<Button>` tag with the `sap.m` namespace.

You can create a context binding for the control by using the `binding` attribute. For more information, see [Context Binding \(Element Binding\)](context-binding-element-binding-91f05e8.md).

You can refer to a style class for the control by using the `class` attribute. For more information, see [Using CSS Style Sheets in XML Views \(deprecated\)](using-css-style-sheets-in-xml-views-deprecated-b564935.md).

**Related Information**  


[API Reference: `sap.ui.core.mvc.XMLView`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.core.mvc.XMLView.create)

