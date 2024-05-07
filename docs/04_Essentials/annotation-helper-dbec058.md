<!-- loiodbec058964f545e4bb3b7e9fbaa0602d -->

# Annotation Helper

A collection of methods which help to consume OData Version 4.0 annotations in XML template views.

The `AnnotationHelper` connects all the pieces related to XML templating: It knows the OData meta model and its structure as well as the OData v4 annotations. The `AnnotationHelper` offers formatter functions and helper functions. You can call these methods directly from the JavaScript code without XML runtime templating. You do not need to require `sap.ui.model.odata.AnnotationHelper` before use.

> ### Tip:  
> You can see more information on the expressions, constants and functions used by the `AnnotationHelper`, in the respective chapters of the specification [OData Version 4.0 Specification: Part 3: Common Schema Definition Language](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html) .



<a name="loiodbec058964f545e4bb3b7e9fbaa0602d__section_evw_l4f_2zb"/>

## Formatter Functions

The formatter functions can be used in binding expressions and `<template:if>` instructions for test conditions. The following formatter functions exist:

-   `format`: General purpose method that handles proper escaping and formatting of constant values and provides binding expressions with suitable types. `format` supports the following constructs:

    -   The *"14.4 Constant Expressions"* for *"edm:Bool"*, *"edm:Date"*, *"edm:DateTimeOffset"*, *"edm:Decimal"*, *"edm:Float"*, *"edm:Guid"*, *"edm:Int"*, *"edm:TimeOfDay"*.

    -   Constant *"14.4.11 Expression edm:String"*: This constant is either turned into fixed text, for example *"Width"*, or into a data binding expression, for example `"{/##/dataServices/schema/0/entityType/1/com.sap.vocabularies.UI.v1.FieldGroup#Dimensions/Data/0/Label/String}"`. If XML template processing has been started with the setting `bindTexts : true`, data binding expressions are used. The constant is used to reference translatable texts from OData v4 annotations, especially for XML template processing at design time. The string constants that contain a simple binding `"{@i18n>...}"` to the hard-coded model name `"@i18n"` with an arbitrary path are not turned into a fixed text, but kept as a data binding expression. This enables local annotation files to refer to a resource bundle for internationalization. If you want to avoid this behaviour, add a space at the end of the string constant and it will be turned into a fixed text again.

    -   Dynamic *"14.5.1 Comparison and Logical Operators"*: Turned into an expression binding to perform the operations at runtime. It's strongly recommended to require the `sap.ui.model.odata.v4.ODataUtils` module in advance to avoid synchronous loading of this module.

    -   Dynamic *"14.5.3 Expression edm:Apply"*:

        -   *"14.5.3.1.1 Function odata.concat"*: Turned into a data binding expression relative to an entity

        -   *"14.5.3.1.2 Function odata.fillUriTemplate"*: Turned into an expression binding to fill the template at runtime. It's strongly recommended to require the `sap.ui.thirdparty.URITemplate` module in advance to avoid synchronous loading of this module.

        -   *"14.5.3.1.3 Function odata.uriEncode"*: Turned into an expression binding to encode the parameter at runtime. It's strongly recommended to require the `sap.ui.model.odata.ODataUtils` module in advance to avoid synchronous loading of this module.


        The *apply* functions can be nested arbitrarily.

    -   Dynamic *"14.5.12 Expression edm:Path"* and *"14.5.13 Expression edm.PropertyPath*: This dynamic expression is turned into a data binding relative to an entity including type information and constraints as available from metadata, for example `"{path : 'Name', type : 'sap.ui.model.odata.type.String', constraints : {'maxLength':'255'}}"`.

    -   Dynamic *"14.5.6 Expression edm:If"*: This dynamic expression is turned into an expression binding to be evaluated at runtime. The expression is conditional, for example, `"{=condition ? expression1 : expression2}"`.


    > ### Note:  
    > Unsupported values are turned into strings, and indicated as such. To ensure that the data binding syntax is not corrupted, proper escaping is used.

    ```
    <Text text="{path: 'meta>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}"/>
    ```

-   `getNavigationPath`: Special formatter that extracts a data binding expression for the navigation path from one of the following dynamic expressions: *14.5.2 Expression edm:AnnotationPath*, *"14.5.11 Expression edm:NavigationPropertyPath"*, *"14.5.12 Expression edm:Path"* and *"14.5.13 Expression edm:PropertyPath"*; example:

    -   The input value `{AnnotationPath : "ToSupplier/@com.sap.vocabularies.Communication.v1.Address"}` returns `"{ToSupplier}"`
    -   The input value `{AnnotationPath : "@com.sap.vocabularies.UI.v1.FieldGroup#Dimensions"}` returns `"{}"`
    -   The input value `{}` returns `""`

    ```xml
    
    <template:if test="{path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.getNavigationPath'}">
        <form:SimpleForm binding="{path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.getNavigationPath'}" />
    </template:if>
    ```

-   `isMultiple`: Special formatter that knows about the one of the following dynamic expressions: *14.5.2 Expression edm:AnnotationPath*, *"14.5.11 Expression edm:NavigationPropertyPath"*, *"14.5.12 Expression edm:Path"* and *"14.5.13 Expression edm:PropertyPath"*. The formatter returns the information whether the navigation path ends with an association end with multiple "\*". If the multiple "\*" are not the last characters, the formatter returns an error.

    ```xml
    
    <template:if test="{path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.isMultiple'}">
    ```

-   `simplePath`: Specialized method useful for design-time templating in connection with smart fields; it can only return simple binding expressions without type information. This has the advantage that the resulting XML view, which is shown at design-time, looks much simpler and nicer without `&quot;` escapes.

    **Example:**

    ```xml
    
    <mvc:View
      xmlns:mvc="sap.ui.core.mvc"
      xmlns:sfi="sap.ui.comp.smartfield"
      xmlns:sfo="sap.ui.comp.smartform"
      xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
      <sfo:SmartForm title="{path: 'meta>com.sap.vocabularies.UI.v1.HeaderInfo/TypeName', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}">
        <template:repeat list="{path:'meta>', filters: {path: 'RecordType', operator: 'EQ', value1: 'com.sap.vocabularies.UI.v1.FieldGroupType'}}">
          <sfo:Group label="{path: 'meta>Label', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}">
            <template:repeat list="{meta>Data}">
              <sfo:GroupElement label="{path: 'meta>Label', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}">
                <sfi:SmartField value="{path: 'meta>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.simplePath'}"/>
              </sfo:GroupElement>
            </template:repeat>
          </sfo:Group>
        </template:repeat>
      </sfo:SmartForm>
    </mvc:View>
    ```

    **Output:**

    ```xml
    
    <mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:sfi="sap.ui.comp.smartfield" xmlns:sfo="sap.ui.comp.smartform">
      <sfo:SmartForm title="Sales Order">
          <sfo:Group label="Order Note">
              <sfo:GroupElement label="Text">
                <sfi:SmartField value="{Note}"/>
              </sfo:GroupElement>
          </sfo:Group>
      </sfo:SmartForm>
    </mvc:View>
    ```


The formatter functions can also be called directly from JavaScript. The following code snippet shows an example for the use of a formatter function outside templating:

```
var oModel = this.getModel(),
    sPath = "##com.sap.vocabularies.UI.v1.HeaderInfo/Description/Label",
    oContext = oModel.getContext(oModel.resolve(sPath, this.getBindingContext())),
    oLabel = new sap.m.Label({
        text : sap.ui.model.odata.AnnotationHelper.format(oContext)
    }));
...
```

The formatter functions are called with a context object as first parameter. The second parameter \(`vRawValue`\) is optional. If the value is not provided, it is calculated in the formatter function. If the application has already calculated the value, it passes the raw value as second parameter, thus avoiding unnecessary further calculations of the raw value.



<a name="loiodbec058964f545e4bb3b7e9fbaa0602d__section_fvw_l4f_2zb"/>

## Helper Functions

The following helper functions can be used with `<template:with>`:

-   `gotoEntityset`: Helper function for a `with` instruction for the entity set with the given name or the entity set that depending on how it is called has been determined by the last navigation property of one of the following dynamic expressions: *14.5.2 Expression edm:AnnotationPath*, *"14.5.11 Expression edm:NavigationPropertyPath"*, *"14.5.12 Expression edm:Path"* and *"14.5.13 Expression edm:PropertyPath"*.

    ```xml
    
    <template:with path="facet>Target" helper="sap.ui.model.odata.AnnotationHelper.gotoEntitySet" var="entitySet" />
    <template:with path="associationSetEnd>entitySet" helper="sap.ui.model.odata.AnnotationHelper.gotoEntitySet" var="entitySet"/>
    ```

    The binding context passed to the helper function, as determined by the `template:with` instruction's `path` property, must point to a simple string or to an annotation \(or annotation property\) of type `Edm.AnnotationPath`, embedded within an entity set or type; the context's model must be an `sap.ui.model.odata.ODataMetaModel`.

-   `gotoEntityType`: Helper function for a `with` instruction that goes to the entity type with the given qualified name. The binding context passed to the helper function, as determined by the `template: with` instruction's `path` property, must point to the qualified name of an entity type; the context's model must be an `sap.ui.model.odata.ODataMetaModel`.

    **Example:** Assume that `entitySet` refers to an entity set within an OData meta model; the helper function is then called on the `entityType` property of that entity set \(which holds the qualified name of the entity type\) and in turn the path of that entity type is assigned to the variable `entityType`.

    ```xml
    
    <template:with path="entitySet>entityType" helper="sap.ui.model.odata.AnnotationHelper.gotoEntityType" var="entityType">
    ```

-   `resolvePath` is a helper function for a `template:with` instruction that resolves one of the following dynamic expressions: *14.5.2 Expression edm:AnnotationPath*, *"14.5.11 Expression edm:NavigationPropertyPath"*, *"14.5.12 Expression edm:Path"* and *"14.5.13 Expression edm:PropertyPath"*. The function supports navigation properties and term casts. The binding context passed to the helper function, as determined by the `template:with` instruction's path property, must point to an annotation or annotation property of type `Edm.AnnotationPath`, embedded within an entity type, The context's model must be `sap.ui.model.odata.ODataMetaModel`.

    ```xml
    
    <template:with path="meta>Value" helper="sap.ui.model.odata.AnnotationHelper.resolvePath" var="target">
    ```

-   `gotoFunctionImport`: Helper function for a `template:with` instruction that goes to the function import with the name which `oContext` points at. Example: Assume that `dataField` refers to a `DataFieldForAction` within an OData meta model; the helper function is then called on the `Action` property of that data field \(which holds an object with the qualified name of the function import in the String property\) and in turn the path of that function import is assigned to the variable `function`.

    ```xml
    
    <template:with path="dataField>Action" helper="sap.ui.model.odata.AnnotationHelper.gotoEntityType" var="function">
    ```


**Related Information**  


[sap.ui.model.odata.AnnotationHelper](https://ui5.sap.com/#/api/sap.ui.model.odata.AnnotationHelper)

[OData Version 4.0](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html)

