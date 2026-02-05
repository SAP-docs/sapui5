<!-- loioa4e5efd7dcad4ddfb2e7e90835523aa0 -->

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

The horizontal scroll container is the default on mobile devices, while the dynamic or static header is the default on desktops.

![](images/Desktop_Carousels_for_Header_Facet_6113e92.jpg)

To enable the carousel header on desktops, set `"showHeaderAsCarouselOnDesktop": true` in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui.generic.app": {
>     ...
>     "pages": [
>         {
>             "entitySet": "STTA_C_MP_Product",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage",
>                 "settings": {
>                     "showHeaderAsCarouselOnDesktop": true,
>                     ...
>                 }
>             },
>             "pages": [
>                 {
>                     "navigationProperty": "to_ProductText",
>                     "entitySet": "STTA_C_MP_ProductText",
>                     "component": {
>                         "name": "sap.suite.ui.generic.template.ObjectPage",
>                         "settings": {
>                             "showHeaderAsCarouselOnDesktop": true,
>                             ...
>                         }
>                     }
>                 }
>             ]
>         }
>     ]
> }
> 
> ```

> ### Note:  
> This setting must be specified at each component level in the `manifest.json` file.

