<!-- loio4b50f214f2444de7b092684f4529f29a -->

# Configuring Fields

A field can be represented in several ways.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

A field can react to many different annotations and render additional artifacts or information, such as showing a value help to allow users to choose a value, or showing semantic coloring to help indicate the criticality of the value it displays. A field can be rendered in many different forms, and its rendering can be controlled by using annotations. As for input fields, application developers can control the field editability, field help representations, and field validations ‒ to name only a few options. The subsequent topics provide detailed information about field configuration.



<a name="loio4b50f214f2444de7b092684f4529f29a__section_z5p_ml5_knb"/>

## Setting Placeholder Texts for Input Fields

Input fields, such as `sap.m.Input` or `sap.m.ComboBox`, have a property placeholder that defines which value is shown to users in edit mode before the users actively make any entries in these fields. You can use the `UI.Placeholder` annotation to define the value that is shown as a placeholder:

```xml
<Annotations Target="sap.fe.manageitems.TechnicalTestingService.LineItems/multiLineTextField">
    <Annotation Term="Common.Label" String="Test Multi Line Text Field"/>
    <Annotation Term="UI.MultiLineText" Bool="true"/>
    <Annotation Term="UI.Placeholder" String="Enter a multi line text"/>
</Annotations>
```

![](images/Placeholder_Texts_b565a6c.png)



<a name="loio4b50f214f2444de7b092684f4529f29a__section_szz_d32_5cc"/>

## Formatting `Date`, `Time`, and `DateTime` Fields

You can use the `DateTimeStyle` annotation with the following values to specify how the date and time are displayed in the input field and the text field in display mode:

**Values for the DateTimeStyle Annotation**


<table>
<tr>
<th valign="top">

Value

</th>
<th valign="top">

Description

</th>
<th valign="top">

Example

</th>
</tr>
<tr>
<td valign="top">

`short`

</td>
<td valign="top">

Displays a concise date and time format.

</td>
<td valign="top">

7/25/24, 1:11 PM

</td>
</tr>
<tr>
<td valign="top">

`medium`

</td>
<td valign="top">

Shows the date in a more readable format, including seconds.

</td>
<td valign="top">

Jul 25, 2024, 1:11:51 PM

</td>
</tr>
<tr>
<td valign="top">

`long`

</td>
<td valign="top">

Includes time zone details for a more precise display.

</td>
<td valign="top">

July 25, 2024 at 1:11:51 PM GMT+2

</td>
</tr>
<tr>
<td valign="top">

`full`

</td>
<td valign="top">

Provides the most complete format, including the full day of the week and time zone name.

</td>
<td valign="top">

Thursday, July 25, 2024 at 1:11:51 PM Central European Summer Time

</td>
</tr>
</table>

In the following example, the `DateTimeStyle` annotation is set to `short`:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/UI.xml">
>         <edmx:Include Namespace="com.sap.vocabularies.UI.v1" Alias="UI"/>
> </edmx:Reference>
>     
> <Annotations Target="SAP__self.TravelType/CreatedAt">
>         <Annotation Term="UI.DateTimeStyle" String="short"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> DatePropertyWithStyle          : Date          @UI: {DateTimeStyle: 'short'};
> TimePropertyWithStyle          : Time          @UI: {DateTimeStyle: 'short'};
> DateTimePropertyWithStyle.     : DateTime      @UI: {DateTimeStyle: 'short'};
> ```

If the date and time must be displayed in a different format, you can use the `pattern` property. It specifies the display format for both the input fields and text fields in display mode. This property is defined in the `manifest.json` file and follows the guidelines of the Unicode Locale Data Markup Language \(LDML\).

The LDML pattern allows for custom date and time formatting using specific symbols for year, month, day, hour, minute, and so on. For example, `yyyy-MM-dd` displays a date as *2023-09-24*. The different pattern letters are listed at [Date Format](https://sapui5.hana.ondemand.com/sdk/#/topic/91f2eba36f4d1014b6dd926db0e91070.html).



<a name="loio4b50f214f2444de7b092684f4529f29a__section_fsx_vll_4rb"/>

## Validating Currency and Unit-of-Measure \(UoM\) Fields

To validate currency fields without a related "value" field, use the `isCurrency` annotation:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/TransactionCurrency">
>     <Annotation Term="Common.isCurrency" Bool="true"/>
>     ...some more definition of property and/or value help...
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Semantics.currencyCode: true 
> TransactionCurrency
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> TransactionCurrency @(
>         Common         : {
>                IsCurrency : true
>         }
>   );
> 
> ```

To validate unit-of-measure fields without a related "value" field, use the `isUnit` annotation:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="com.c_salesordermanage_sd.SalesOrderManage/DocumentUnit">
>     <Annotation Term="Common.isUnit" Bool="true"/>
>     ...some more definition of property and/or value help...
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Semantics.unitOfMeasure: true 
> DocumentUnit
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> DocumentUnit @(
>         Common         : {
>                IsUnit : true
>         }
> );
> 
> ```



<a name="loio4b50f214f2444de7b092684f4529f29a__section_uyg_prz_2wb"/>

## Validating `Edm.Guid` Properties

Validation is automatically enabled for properties of type `Edm.Guid` that have a value help.

