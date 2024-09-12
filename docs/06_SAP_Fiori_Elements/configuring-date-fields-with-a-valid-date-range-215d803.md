<!-- loio215d80302a8444c4a5f49031a69043bc -->

# Configuring `Date` Fields with a Valid Date Range

You can use annotations to configure a valid date range for fields of type `Date`.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

Using the `Validation.Minimum` and `Validation.Maximum` annotations, you can disable the invalid date values in the date picker, thus allowing end users to select dates only within the valid date range.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Validation.V1.xml">
>        <edmx:Include Alias="Validation" Namespace="Org.OData.Validation.V1" />
> </edmx:Reference>
> ...
> ...
> <Annotations Target="com.service.Entity/DateProperty">
>         <Annotation Term="Validation.Minimum" Date="2024-07-01" />
> 	<Annotation Term="Validation.Maximum" Date="2024-12-31" />
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> DateProperty : 
>        Date @(Validation: {
>           Minimum: {$edmJson: {$Date: '2024-07-01'}},
>           Maximum: {$edmJson: {$Date: '2024-12-31'}}
>         });
> ```

You can also use the path value to set a valid date range for the `Date` fields.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Validation.V1.xml">
>        <edmx:Include Alias="Validation" Namespace="Org.OData.Validation.V1" />
> </edmx:Reference>
> ...
> ...
> <Annotations Target="com.service.Entity/DateProperty">
>         <Annotation Term="Validation.Minimum" Path="MinimumDate" />
> 	<Annotation Term="Validation.Maximum" Path="MaximumDate" />
> </Annotations>
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> MinimumDate: Date;
> MaximumDate: Date;
> DateProperty: Date @(Validation: {
>   Minimum: MinimumDate,
>   Maximum: MaximumDate
> });
> ```

> ### Note:  
> Date validation using `MinimumDate` and `MaximumDate` is not supported in ABAP CDS annotation. Please use the local XML annotation.

