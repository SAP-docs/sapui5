<!-- loio24c1304739dd4f19af0ce2482c4d9bbe -->

# Building Blocks

You can use the SAP Fiori elements for OData V4 building blocks to create a visual representation of your data in a convenient way.

Building blocks are reusable artifacts that are consistently orchestrated by SAP Fiori elements and are the basis for every OData V4 application. They contain standardized layout patterns or interaction behaviors which benefit from an annotation-driven UI. Building blocks support UI consistency, boost developer efficiency, and ensure enterprise readiness, for example, through personalization, key user support, and internationalization.

While extension points provide containers where you can then implement your own UI, building blocks are used to build the floorplans and extend them with predefined capabilities, such as integrating the *Share* functionality. These building blocks are not SAPUI5 controls, but rather a set of templating instructions that result in the creation of a specific control tree, depending on the bound data structures.

You can use building blocks to do the following:

-   Create your own layouts and depart from our predefined floorplans by combining the building blocks according to your needs.

-   Extend standard floorplans using building blocks in the extension points.


A building block is based on service metadata and annotations, and you can further configure it through inline XML parameters or manifest configuration. In case of a conflict, the manifest configuration overrides both the XML configuration and annotation definitions.

Invoking the `Field` building block for a string property and a date property, for example, applies the following different transformations:

> ### Sample Code:  
> Usage of the `Field` Building Block in a Custom Section
> 
> ```
> <macros:Field xmlns:macro="sap.fe.macros" metaPath="MyStringProperty" readOnly="true"/>
> <macros:Field xmlns:macro="sap.fe.macros" metaPath="MyDateProperty" readOnly="true"/>
> ```

> ### Sample Code:  
> Result, Simplified for the Sake of the Example
> 
> ```
> <m:Text xmlns:m="sap.m" value="{MyStringProperty}"/>
> <m:DatePicker xmlns:m="sap.m" value="{MyDateProperty}"/>
> ```

Building blocks provide a unified interface that creates an abstraction from the underlying implementation. As such, they usually don't exist in the Document Object Model \(DOM\), but they provide a dedicated API class that allows you to manipulate the controls that were created through a restricted set of APIs. Building blocks are like templates: depending on the bound data and the specified attributes, they result in different controls for representing your data.

> ### Remember:  
> If you use building blocks within a fragment that loads dynamically, ensure that the fragment loads using the `sap.fe.core.ExtensionAPI` method `loadFragment`.

For more information and live examples, see the SAP Fiori development portal at [Introduction](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/introduction).



<a name="loio24c1304739dd4f19af0ce2482c4d9bbe__section_gwt_f4f_4cc"/>

## Related Links

For more information about the `loadFragment` method, see [EditFlow](https://ui5.sap.com/#/api/sap.fe.core.ExtensionAPI%23overview) in the Demo Kit.

