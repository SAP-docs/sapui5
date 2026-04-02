<!-- loioeff5bdb137b441afad48e1b062f6573a -->

# Configuring the Table Card

You can configure the content on the table area with smart links, text alignment, filtering or grouping information.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Configuring the Table Card](configuring-the-table-card-9bc298e.md).



<a name="loioeff5bdb137b441afad48e1b062f6573a__section_nyw_bsr_fhc"/>

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
> annotate view SALESORDER with {
>  @Consumption.semanticObject: 'OVP'
>  salesorderid;
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



<a name="loioeff5bdb137b441afad48e1b062f6573a__section_khq_q32_2fb"/>

## Text Arrangement in Table Area

Define `Text` arrangement annotation to format content on the table area.

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
> annotate view SALESORDER with {
>  @UI.TextArrangement: #TEXT_LAST
>  customerid;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate GWSAMPLE_BASIC.SalesOrder with {
>   @Common.Text : Supplier_Name,
>   @UI.TextArrangement : #TextLast,
>   CustomerID
> };
> 
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



<a name="loioeff5bdb137b441afad48e1b062f6573a__section_z4h_pj2_2fb"/>

## Filtering

You can add filters to table card by using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term, or by passing filter parameter in the URL. For more information, see [Configuring Card Filters](configuring-card-filters-005970c.md)



<a name="loioeff5bdb137b441afad48e1b062f6573a__section_zmn_qj2_2fb"/>

## Sorting or Grouping

You can sort information in the table card by using `sortBy` and `sortOrder` properties in the `manifest.json` file. For more information, see [Configuring Sort Properties](configuring-sort-properties-ad8aa01.md)

