<!-- loio24c1304739dd4f19af0ce2482c4d9bbe -->

# Building Blocks

SAP Fiori elements provides you with building blocks that allow you to create a visual representation of your data in a convenient way.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

While extension points provide you with containers where you can then implement your own UI, SAP Fiori elements exposes a set of building blocks that are used to build the templates. These building blocks are not SAPUI5 controls, but rather a set of templating instructions that result in the creation of a specific control tree, depending on the bound data structures.

Invoking the `Field` building block for a string property and a date property, for example, applies the following different transformations:

Usage of the `Field` building block in a custom section

> ### Sample Code:  
> ```
> <macros:Field xmlns:macro="sap.fe.macros" metaPath="MyStringProperty" readOnly="true"/>
> <macros:Field xmlns:macro="sap.fe.macros" metaPath="MyDateProperty" readOnly="true"/>
> ```

Result

> ### Sample Code:  
> ```
> <m:Text xmlns:m="sap.m" value="{MyStringProperty}"/>
> <m:DatePicker xmlns:m="sap.m" value="{MyDateProperty}"/>
> ```

The building blocks provide a unified interface that creates an abstraction from the underlying implementation. As such, they also do not exist at runtime, except for a dedicated API object that allows you to manipulate the controls that were created through a restricted set of APIs. Building blocks are like templates: depending on the bound data and the specified attributes, they result in different controls for representing your data.

For more information about building blocks as part of the flexible programming model, see [Flexible Programming Model](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/overview/introduction).

-   **[The Field Building Block](the-field-building-block-5260b9c.md "")**  

-   **[The Form Building Block](the-form-building-block-391aad2.md "")**  

-   **[The FormElement Building Block](the-formelement-building-block-b45f038.md "")**  

-   **[The Table Building Block](the-table-building-block-3801656.md "")**  

-   **[The FilterBar Building Block](the-filterbar-building-block-7838611.md "")**  

-   **[The FilterField Building Block](the-filterfield-building-block-2df7837.md "")**  

-   **[The MicroChart Building Block](the-microchart-building-block-74554b4.md "")**  

-   **[The Chart Building Block](the-chart-building-block-52d065a.md "")**  

-   **[The FlexibleColumnLayoutActions Building Block](the-flexiblecolumnlayoutactions-building-block-1ba680b.md "")**  

-   **[The Share Building Block](the-share-building-block-41b02df.md "")**  

-   **[The Paginator Building Block](the-paginator-building-block-997292b.md "")**  


