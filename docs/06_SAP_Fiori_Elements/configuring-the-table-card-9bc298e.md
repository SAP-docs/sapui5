<!-- loio9bc298eeaeaa4bf39f1fae582c1443f6 -->

# Configuring the Table Card

You can configure the content on the table area with text alignment, filtering or grouping information.



<a name="loio9bc298eeaeaa4bf39f1fae582c1443f6__section_khq_q32_2fb"/>

## Configuring Text Arrangement in Table Area

You can use the `om.sap.vocabularies.UI.v1.TextArrangement` annotation to format content on the table area, as shown in the following sample code:

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

In the preceding example, the text `Customer` is bound to the `ContactID` property. The result depends on the text arrangement type, as shown in the following table:


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



<a name="loio9bc298eeaeaa4bf39f1fae582c1443f6__section_z4h_pj2_2fb"/>

## Filtering Data in the Table Card

You can add filters to table card by using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation, or by passing filter parameter in the URL. For more information, see [Configuring Card Filters](configuring-card-filters-ecde99f.md).



<a name="loio9bc298eeaeaa4bf39f1fae582c1443f6__section_zmn_qj2_2fb"/>

## Sorting or Grouping Data in the Table Card

You can sort information in the table card by using `sortBy` and `sortOrder` properties in the `manifest.json` file. For more information, see [Configuring Sort Properties](configuring-sort-properties-41af842.md).



## Additional Features in SAP Fiori Elements for OData V2



### Adding Smart Links

You can also enable smart links in the table area. Define a semantic object for the entity set and its property using the annotation target.

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

**Related Information**  


[Configuring the Table Card Header Area \(Optional\)](configuring-the-table-card-header-area-optional-05887bd.md "You can optionally configure the header area including the title, subtitle, KPI value, view switch, and navigation of a table card using the annotations and manifest.json file.")

[Configuring the Table Area](configuring-the-table-area-b408bfb.md "You can configure the columns of a table card, their header and valies, by using the com.sap.vocabularies.UI.v1.LineItem annotation.")

[Table Cards](table-cards-167bf7c.md "You can use a table card to display a list of records in a three-column table layout.")

