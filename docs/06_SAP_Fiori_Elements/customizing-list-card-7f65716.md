<!-- loio7f65716d973b4c50bab37f9302c73afa -->

# Customizing List Card



<a name="loio7f65716d973b4c50bab37f9302c73afa__section_pds_tdl_2fb"/>

## Adding Smart Links

Define a semantic object for the entity set and its property using the annotation target to add smart links. For example:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="GWSAMPLE_BASIC.SalesOrder/SalesOrderID">
> <Annotation Term="com.sap.vocabularies.Common.v1.SemanticObject" String="OVP" />
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> annotate view SALESORDER with {
>   @Consumption.semanticObject: 'OVP'
>   salesorderid;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate GWSAMPLE_BASIC.SalesOrder with {
>   @Common.SemanticObject : 'OVP'
>   SalesOrderID
> };
> ```



<a name="loio7f65716d973b4c50bab37f9302c73afa__section_khq_q32_2fb"/>

## Text Arrangement in List Area

Define `Text` arrangement annotation to format content on the list area.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="GWSAMPLE_BASIC.SalesOrder/CustomerID">
> <Annotation Term="com.sap.vocabularies.Common.v1.Text" Path="Supplier_Name"/>
> <Annotation Term="com.sap.vocabularies.UI.v1.TextArrangement" EnumMember="com.sap.vocabularies.UI.v1.TextArrangementType/TextLast" />
> </Annotation> 
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> annotate view SALESORDER with {
>   @UI.TextArrangement: #TEXT_LAST
>   customerid;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate GWSAMPLE_BASIC.SalesOrder with {
>   @Common.Text : Supplier_Name
>   @UI.TextArrangement : #TextLast
>   CustomerID
> };
> ```

In the preceding example, the text `Customer` is bound to the `ContactID` property and appears as shown in the table:


<table>
<tr>
<th valign="top">

Text Arrangement Type



</th>
<th valign="top">

Result



</th>
</tr>
<tr>
<td valign="top">

`TextLast`



</td>
<td valign="top">

`ContractID (Customer)`



</td>
</tr>
<tr>
<td valign="top">

`TextFirst`



</td>
<td valign="top">

`Customer (ContractID)`



</td>
</tr>
<tr>
<td valign="top">

`TextOnly`



</td>
<td valign="top">

`Customer`



</td>
</tr>
</table>



<a name="loio7f65716d973b4c50bab37f9302c73afa__section_z4h_pj2_2fb"/>

## Filtering

You can add filters to list card by using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term, or by passing filter parameter in the URL. For more information, see [Configuring Card Filters](configuring-card-filters-ecde99f.md)



<a name="loio7f65716d973b4c50bab37f9302c73afa__section_zmn_qj2_2fb"/>

## Sorting or Grouping

You can sort information in the list card by using `sortBy` and `sortOrder` properties in the application descriptor file. For more information, see [Configuring Sort Properties](configuring-sort-properties-41af842.md)

