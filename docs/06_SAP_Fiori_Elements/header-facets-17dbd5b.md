<!-- loio17dbd5b7a61e4cdcb079062e976cd63f -->

# Header Facets

You can include various types of header facets in your object page header, for example to display contact data or a rating indicator.

You can use the annotation term `UI.HeaderFacets` to define which information is displayed in the header. The `UI.HeaderFacets` annotation contains a collection of `UI.ReferenceFacet`, with each reference facet, corresponding to a header element displayed on the UI. The following sample code shows such a structure:

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <Annotation Term="UI.HeaderFacets">
>     <Collection>
>         ...
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Price" />
>         </Record>
>         ...
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Target" AnnotationPath="to_StockAvailability/@UI.DataPoint#StockAvailability" />
>         </Record>
>         ...
>     </Collection>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.Facet: [
>     {
>         targetQualifier: 'Price',
>         type: #DATAPOINT_REFERENCE,
>         purpose: #HEADER
>     },
>     {
>         targetQualifier: 'StockAvailability',
>         targetElement: 'TO_STOCKAVAILABILITY',
>         type: #DATAPOINT_REFERENCE,
>         purpose: #HEADER
>     }
> ]Test;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> Annotate c_salesordermanage_sd.SalesOrderManage with @(
>     UI : {
>         HeaderFacets : [
>             {
>                 $Type  : 'UI.ReferenceFacet',
>                 Label  : 'Price',
>                 ID     : 'Price',
>                 Target : '@UI.DataPoint#Price'
>             },
>             {
>                 $Type  : 'UI.ReferenceFacet',
>                 Label  : 'Stock Availability',
>                 ID     : 'StockAvailability',
>                 Target : 'to_StockAvailability@UI.DataPoint#StockAvailability'
>             }
>         ]
>     }
> )
> 
> ```

On desktops, the dynamic or static header is used with the responsive layout.

![](images/Header_Facet_Desktop_Version_b1c531e.png)

On mobile devices, a header container is used with the horizontal layout, providing scrolling for header facets.

![](images/Header_Facets_Mobile_Version_8abec0d.png)

You can see the object page header facets within a horizontal scroll container.



<a name="loio17dbd5b7a61e4cdcb079062e976cd63f__section_mjc_ccs_hnb"/>

## Stashing

If an application developer has defined header facets as `stashed` in the `manifest.json` file, they are initially not visible on the UI. Such header facets are not loaded when the application is started. Key users can add these stashed header facets using the key user adaptation at runtime and make them visible for end users on the object page header.

For more information, see [Extending Delivered Apps With Key User Adaptation](extending-delivered-apps-with-key-user-adaptation-59bfd31.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Header Facets](header-facets-a4e5efd.md).

**Related Information**  


[Plain Text Facet in the Object Page Header](plain-text-facet-in-the-object-page-header-1da0926.md "You can add a plain text facet to the object page header.")

[Adding a Contact Facet](adding-a-contact-facet-a6a8c0c.md "You can use the Field building block to render a contact facet.")

[Micro Chart Facet in the Object Page Header](micro-chart-facet-in-the-object-page-header-e219fd0.md "You can add a MicroChart control to a facet within the header area of the object page.")

[Form Facet in the Object Page Header](form-facet-in-the-object-page-header-ff0ae0b.md "You can add a form facet to the object page header.")

[Data Points](data-points-c2a389a.md "You can use the Field building block to render data points.")

[Rating Indicator Facet in the Object Page Header](rating-indicator-facet-in-the-object-page-header-bcc12cb.md "You can add a read-only rating indicator to the object page header.")

[Progress Indicator Facet in the Object Page Header](progress-indicator-facet-in-the-object-page-header-3b5e01c.md "You can add a progress indicator to a header facet on the object page.")

[Key Value Facet in the Object Page Header](key-value-facet-in-the-object-page-header-c312735.md "You can render a data point as a key value facet.")

[Address Facet in the Object Page Header](address-facet-in-the-object-page-header-0b73cbb.md "You can add an address facet to the object page header with the UI.ReferenceFacet annotation.")

