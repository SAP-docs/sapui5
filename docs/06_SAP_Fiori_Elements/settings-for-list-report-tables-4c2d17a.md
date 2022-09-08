<!-- loio4c2d17aec55b4162b19f1b573b5a4f99 -->

# Settings for List Report Tables

You can set up various aspects of the list report table through annotations and in the `manifest.json` file.



<a name="loio4c2d17aec55b4162b19f1b573b5a4f99__section_ufz_hmf_vrb"/>

## Displaying the Editing Status

In draft-enabled applications, the **Draft**, **Unsaved Changes by Another User**, and **Locked by Another User** statuses are displayed in the first column. You can add the semantic key as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="STTA_PROD_MAN.STTA_C_MP_ProductType">
>     <Annotation Term="Common.SemanticKey">
>         <Collection>
>             <PropertyPath>ProductForEdit</PropertyPath>
>         </Collection>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @ObjectModel: {
>   semanticKey: [ 'ProductForEdit' ]
> }
> 
> define view C_MP_PRODUCT {
> 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductType @(
>   Common.SemanticKey : [ ProductForEdit ]
> );
> ```

> ### Note:  
> This setting is only available for the default `DataField`.

For more information, see [Editing Status](editing-status-668ea18.md).



<a name="loio4c2d17aec55b4162b19f1b573b5a4f99__section_lqs_jzb_2nb"/>

## Additional Features in SAP Fiori Elements for OData V2

If you have not added a semantic key to the line items, the editing status is displayed in the *Title* or *Description* column, depending on the available information:

-   If a semantic key is available for the `entityType` and is part of the table, the draft information is shown in the column where the first semantic key is displayed.

-   If no semantic key annotation is available, the system checks whether the `headerInfo/Title/Value/Path` is available under the `LineItem` annotation.




<a name="loio4c2d17aec55b4162b19f1b573b5a4f99__section_un3_nzb_2nb"/>

## More Information

For more information, see [`SemanticKey`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable/Annotations/SemanticKey).

