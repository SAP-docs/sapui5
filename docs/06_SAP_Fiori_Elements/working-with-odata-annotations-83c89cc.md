<!-- loio83c89ccef12f48ab98f6c3811bd025b3 -->

# Working With OData Annotations

OData annotations are metadata extensions used to enrich OData services with additional semantic information. These annotations enable SAP Fiori elements and other frameworks to automatically generate user interfaces based on the business context. The annotations define UI behavior, layout, and data relationships, such as labels, field groups, and navigation paths, without requiring manual coding for the UI. OData annotations are served with the `$metadata` document or contained in additional XML files.



<a name="loio83c89ccef12f48ab98f6c3811bd025b3__section_bth_5kw_chc"/>

## Vocabularies

OData annotations are defined using terms, and these terms are organized in vocabularies. Vocabularies are collections of related terms that provide a common semantic framework. The relevant vocabularies for SAP Fiori elements are:

-   [SAP defined vocabularies](https://github.com/sap/odata-vocabularies)
-   [OASIS vocabularies](https://github.com/oasis-tcs/odata-vocabularies)



<a name="loio83c89ccef12f48ab98f6c3811bd025b3__section_yxb_h4x_chc"/>

## Samples

You can use OData annotations as shown in the following sample code:

**Specify a Label for the `Name` Property of a Product Entity**

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="namespace.ServiceName.Products/Name">
>   <Annotation Term="Common.Label" String="Name"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @EndUserText.label: 'Name'
> name          as Name,
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> Name: String(100) @title: 'Name';
> ```

**Define Which Columns Are Shown in a Table for an Entity's Products**

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.LineItem">
>     <Collection>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="Name"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="Category"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="Price"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="Availability"/>
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [{ position: 10 }]
> Name;
> 
> @UI.lineItem: [{ position: 20 }]
> Category;
> 
> @UI.lineItem: [{ position: 30 }]
> Price;
> 
> @UI.lineItem: [{ position: 40 }]
> Availability;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate ServiceName.Products with @(UI.LineItem: [
>     {
>         $Type: 'UI.DataField',
>         Value: Name,
>     },
>     {
>         $Type: 'UI.DataField',
>         Value: Category
>     },
>     {
>         $Type: 'UI.DataField',
>         Value: Price,
>     },
>     {
>         $Type: 'UI.DataField',
>         Value: Availability,
>     }
> ]);
> ```



<a name="loio83c89ccef12f48ab98f6c3811bd025b3__section_xbt_npx_chc"/>

## Back-End Versus Front-End Annotations

OData annotations can be defined directly in the back end using CDS views, which allow developers to enrich service metadata at the data model level. When the front end requests the metadata, these back-end annotations are automatically translated into the appropriate XML format.

The following back ends support OData annotations in their CDS views:

-   SAP Cloud Application Programming Model \(CAP\).
-   RESTful Application Programming Model \(RAP\). RAP also allows metadata extensions.
-   ABAP Programming Model for SAP Fiori. ABAP Programming Model for SAP Fiori is the predecessor of RAP.

Additionally, annotations can be provided in separate `.xml` files within the UI application, enabling further customization or extension of UI behavior on the front end without modifying the back end. These `.xml` files for front-end annotations are maintained in the `manifest.json` file of the UI application as additional annotation sources.

> ### Note:  
> When an annotation term, such as `UI.LineItem`, is defined in an additional annotation source on the front end, it overwrites the annotation term which is defined in the back end \(CDS\), if one exists.

> ### Tip:  
> It is recommended to maintain annotations in the back end. This allows for the data model definition and semantic information to be in the same place with the same lifecycle. This also enables reuse, for example, when targeting different visualizations for the same data.

Front-end annotations are used when:

-   An annotation is not available in the back end \(only applicable to RAP\).
-   Back-end access isn't available to maintain annotations.
-   For a single UI, you want to override an annotation without changing the back end.

The disadvantages of front-end annotations include a discrepancy between the data model and front-end annotations, which leads to errors when they are no longer in sync, such as after renaming a property.

> ### Note:  
> When using back-end and front-end annotations simultaneously, it's important to consider that front-end annotations override back-end annotations on a term-by-term basis.



<a name="loio83c89ccef12f48ab98f6c3811bd025b3__section_ujg_4tx_chc"/>

## **SAP Fiori Tools Support**

SAP Fiori tools provides a powerful set of extensions for Visual Studio Code and SAP Business Application Studio. SAP Fiori tools simplifies the creation of SAP Fiori apps, which includes the maintenance of local annotations for SAP Fiori elements. They offer features such as the Page Map and Guided Development. These features help developers to generate and manage the UI and related annotations through visual editing.

They also offer editors for both CAP CDS and XML annotation files, making it easier to create, edit, and validate annotations directly within the development environment. For ABAP CDS annotations, use Guided Development.

Once an app is enabled for adaptation projects, developers can add new annotations to existing apps.

For more information, see the [SAP Fiori Tools Documentation](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/55bfb91591d84f658e6c9474a3c657c4.html?locale=en-US).

**Related Information**  


[Feature Showcase Apps and Samples](https://ui5.sap.com/#/topic/521405cc719e4e699a25366461a516cb)

[RESTful Application Programming Model](https://help.sap.com/docs/abap-cloud/abap-rap/abap-restful-application-programming-model)

[CAP Annotation Documentation](https://cap.cloud.sap/docs/advanced/fiori#fiori-annotations)

