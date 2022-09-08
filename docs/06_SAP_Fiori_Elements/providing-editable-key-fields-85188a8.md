<!-- loio85188a85aae04c8181e093f9d0334f95 -->

# Providing Editable Key Fields

Users cannot edit key fields in draft applications. You can introduce an additional key field that is editable.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Note:  
> This topic is relevant only for applications using existing databases. If you build on a new data model, you can always use an artificial key \(typically, a GUID\) and model the fields with a semantic meaning only as non-key fields.
> 
> However, for existing databases that already use semantically important fields in the key and you need to be able to change them \(maybe only provide them by the user upon creation\), changing the model in such a way would lead to a data conversion with potentially high impact for customers with huge amounts of data.

> ### Note:  
> This topic is relevant only for applications that use draft handling. For non-draft applications, as all changes are transported to the back end only in one shot when the object is saved, from a UI point of view, a change in a key property would just mean, that the object returned from the save operation is a different instance than before.



In draft applications, users cannot edit key fields because changes are merged directly into the draft document, and since the key field is part of the draft document's identifier, users would need to navigate to a different document with each merge. From the user experience point of view, this is not a good solution.

As a workaround, you can introduce an additional field that is editable. In an active document, this field's value is always identical to the key field's value. While users work on the draft, only the additional field is changed. Only when the draft is activated, is the additional field's value transferred to the key field. When activated, the system automatically navigates from the draft to the active instance.

On the UI, only the additional field is displayed. However, you need to use the key field for the navigation parameters. It should be consistent with the semantic object attribute.

If a user navigates to a list report or object page application, and if the navigation parameters are not selective enough to directly navigate to the object, you need to set the needed navigation parameters in the filters. As the additional field is used here, SAP Fiori elements need to map the value of the navigation parameter to the additional field. To do this, use the `com.sap.vocabularies.Common.v1.EditableFieldFor` annotation.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrderItem_WD_20Type/SalesOrderForEdit">
>     <Annotation Term="com.sap.vocabularies.Common.v1..EditableFieldFor" PropertyPath="SalesOrder"/>
> </Annotations>
> 
> <Annotations Target="STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrderItem_WD_20Type/SalesOrderItemForEdit">
>     <Annotation Term="com.sap.vocabularies.Common.v1.EditableFieldFor" PropertyPath="SalesOrderItem"/>
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrderItem_WD_20Type with {
>   @Common.EditableFieldFor : SalesOrder
>   SalesOrderForEdit
> };
> 
> annotate STTA_SALES_ORDER_WD_20_SRV.C_STTA_SalesOrderItem_WD_20Type with { 
>    @Common.EditableFieldFor : SalesOrderItem
>    SalesOrderItemForEdit
> };
> ```

