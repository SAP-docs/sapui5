<!-- loio7c6a211e238c440b8e863cc19a349c7b -->

# Setting Transformation Filters on Aggregate Controls

Transformation filters enable filtering capabilities for aggregate controls like analytical tables in SAP Fiori elements for OData V4.

SAP Fiori elements for OData V4 assumes that the back end supports transformation filters for aggregate controls, such as analytical tables. For more information about transformation filters, see [OData Extension for Data Aggregation Version 4.0](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html).

You must ensure the following:

-   The back end supports transformation filters for aggregate controls.

-   The following annotations are added for aggregate entities:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <Annotations Target="sap.fe.managepartners.ManagePartnersService.Customers">
    >     <Annotation Term="Aggregation.ApplySupported">
    >         <Record Type="Aggregation.ApplySupportedType">
    >             <PropertyValue Property="Transformations">
    >                 <Collection>
    >                     <String>filter</String>
    >                     ...
    >                 </Collection>
    >             </PropertyValue>
    >         </Record>
    >     </Annotation>
    > </Annotations>
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > @Aggregation.ApplySupported : {
    >     Transformations : [
    >         'filter',
    >         ...
    >     ],
    > }
    > ```


