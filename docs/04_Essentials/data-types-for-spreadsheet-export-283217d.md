<!-- loio283217d8f187401c8045723abc27e5e0 -->

# Data Types for Spreadsheet Export

Provides details about the data types supported by the spreadsheet export.

All data types supported by the spreadsheet export are listed in the `sap.ui.export.EdmType` enumeration. During the export, the values are converted to a value that is in compliance with the Office Open XML requirements.



<a name="loio283217d8f187401c8045723abc27e5e0__section_sg5_2z1_j3b"/>

## `String`

The type `String` handles textual values within cells. Strings are usually not formatted. The internal type text is the default type that gets applied if no other type is configured for a column.

It is possible to aggregate several property values into one column, for example, `firstname` and `lastname` are combined to `fullname`. This can be achieved by providing an array of property names within the `property` property of the column definition. In addition to that, the `template` property must be made available. This additional property has to be a non-empty string and can contain placeholders. A placeholder is a numerical index enclosed by curly brackets. The index must be greater than or equal zero and less than the length of the array that is assigned to the `property` property.

**Details for String**


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Sample



</th>
<th valign="top">

Optional



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `inputFormat` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 `"([0-9]{3})([0-9]{4})"` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Used as a regular expression that determines specific parts of the original value. This makes it possible to apply the template to a single property instead of multiple properties.

 `inputFormat` is ignored if no `template` is provided.



</td>
</tr>
<tr>
<td valign="top">

 `template` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

 `"{0} (Company code {1})"` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

A textual template that can be filled with multiple values from various business objects. Each placeholder is a number within curly brackets that represents an index of a property array.



</td>
</tr>
<tr>
<td valign="top">

 `wrap` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">



</td>
<td valign="top">

Yes



</td>
<td valign="top">

A Boolean value that indicates if the text column supports wrapping of the cell content. Apart from automatic text wrapping depending on the cell width, it automatically converts all \\n to \\r\\n line breaks. These manual line breaks are then visible in the generated xlsx file.



</td>
</tr>
</table>

Here is an example for a `String` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
                property: ["Firstname", "Lastname"],
                label: "Full name",
                width: 25,
                template: "{1}, {0}"
            }
        ]
    }
}
 
 
// This will result in "Doe, John" if the line item is {Firstname: "John", Lastname: "Doe"}
```



<a name="loio283217d8f187401c8045723abc27e5e0__section_qwh_fmb_j3b"/>

## `Boolean`

The type `Boolean` handles all variations of Boolean values. It allows for displaying these Boolean values in a pre-defined format. There are additional properties that are handled by this type to format their respective values. Since a `Boolean` type can be either `true` or `false`, the additional properties must be maintained for both cases for the type to take effect.

**Details for Boolean**


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `trueValue` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Defines the textual representation of a Boolean type that has the value `true`.



</td>
</tr>
<tr>
<td valign="top">

 `falseValue` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Defines the textual representation of a Boolean type that has the value `false`.



</td>
</tr>
</table>

Here is an example for a `Boolean` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
                property: "Onstock",
                label: "Availability",
                type: sap.ui.export.EdmType.Boolean,
                trueValue: "On stock",
                falseValue: "Out of stock"
            }
        ]
    }
}
```



<a name="loio283217d8f187401c8045723abc27e5e0__section_dnx_c3n_n3b"/>

## Number

The type `Number` represents a simple numeric value without any specific formatting. The value is displayed the way it is. For further adjustment use the additional properties `scale`, `delimiter`, `unit`, and `unitProperty`.

**Details for Number**


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Output Sample



</th>
<th valign="top">

Type



</th>
<th valign="top">

Optional



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `scale` 



</td>
<td valign="top">

1234

1234.5

1234.56

1234.567



</td>
<td valign="top">

 `number` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Sets a fixed number of decimals. The scale is applied to the whole column and displays exactly the number of decimals that is configured. If the actual value has fewer or more decimal places, it is filled with additional zeros or gets cut off to match the configured number of decimals. This property accepts a positive integer value. Negative values are treated like zero.



</td>
</tr>
<tr>
<td valign="top">

 `autoScale` 



</td>
<td valign="top">

17.493 kg

60 mp/h



</td>
<td valign="top">

`boolean`



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Allows you to automatically apply a specific scale for the given unit of measure. This functionality requires a particular unit of measure that is set via the `unit` property or a `unitProperty` property that can be used to resolve the specific unit during runtime. In addition to that, a code list is required to evaluate the corresponding scale. These code lists are available when using `ODataListBinding` as `dataSource` during initialization of the `Spreadsheet` class.

If no code list is available or the code list does not contain a particular unit of measure, the `scale` property is taken into account. If the `scale` property is not provided, the number is displayed in raw format.



</td>
</tr>
<tr>
<td valign="top">

 `delimiter` 



</td>
<td valign="top">

1,234

1,234,567



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Specifies if the numeric value is shown in groups of thousands. If set to `true`, the thousands delimiter is shown. The delimiter is embedded in the number format and therefore requires a particular scale. If the `scale` property is not defined, this is treated like a scale of zero, and float values might get rounded down . Default value is `false`.



</td>
</tr>
<tr>
<td valign="top">

 `unit` 



</td>
<td valign="top">

623 kg

89 %

120 km/h



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Specifies the unit of measurement \(UoM\). The UoM is shown next to the numeric value.

> ### Note:  
> The UoM is treated as a string and therefore has no influence on the value itself. For *%*, *mio*, or similar UoMs this can make a difference if the values are used in forms because multiplying by 150 % would mean x \* 150 instead of x \* 1.5.



</td>
</tr>
<tr>
<td valign="top">

 `unitProperty` 



</td>
<td valign="top">

623 kg

89 %

120 km/h



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

References a business object property that contains the UoM for this particular numeric type.



</td>
</tr>
</table>

Here is an example for a `Number` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
                property: "Weight",
                label: "Net weight (kg)",
                type: sap.ui.export.EdmType.Number,
                unit: "kg",
                scale: 3
            },
            {
                property: "Weight",
                label: "Net weight (g)",
                type: sap.ui.export.EdmType.Number,
                unit: "g",
                scale: 0,
                delimiter: true
            }
        ]
    }
}
```



<a name="loio283217d8f187401c8045723abc27e5e0__section_tg5_hyv_43b"/>

## `Date`, `Time`, and `DateTime`

The types `Date`, `DateTime`, and `Time` handle the date and time information. The application can pass additional parameters to adjust the visible representation of these types.

**Details for Date, Time, and DateTime**


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Output Sample



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `Date` 



</td>
<td valign="top">

03/24/2017

24.03.2017



</td>
<td valign="top">

Represents a date without time-related information. Due to the use of built-in formats, `Date` is displayed based on the user's locale in the operating system. This can lead to different representations for different users.



</td>
</tr>
<tr>
<td valign="top">

 `DateTime` 



</td>
<td valign="top">

08/31/2016 23:01

31.08.2016 23:01



</td>
<td valign="top">

Represents values that contain date- and time-related information. Due to the use of built-in formats, `DateTime` is displayed based on the user's locale in the operating system. This can lead to different representations for different users.

The locale has no effect on any time zone formatting. All values in columns of type `DateTime` are related to UTC because it is not possible to pass time zone offset information into the Office Open XML standard representation of time stamps. For columns of type `DateTime`, a UTC suffix is automatically added to the column header.



</td>
</tr>
<tr>
<td valign="top">

 `Time` 



</td>
<td valign="top">

13:21:14



</td>
<td valign="top">

Represents values that contain time-related information only. Time information can use the following units: hours, minutes, seconds, and milliseconds. Contrary to `Date` and `DateTime`, the built-in formats for `Time` are the same for every locale in the operating system.



</td>
</tr>
</table>


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Optional



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `calendar` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Allows users to select a calendar other than the Gregorian calendar. The following values are possible:

-   Islamic

-   Japanese

-   Gregorian \(default\)


The calendar property supports values of type `sap.ui.core.CalendarType` although not all options are available for the export. Islamic and Japanese representation only takes effect if the displayed `Date`/`DateTime` shows some date-related information. Therefore, it does not make sense to use it for the type `Time`.

If the `calendar` property has not been defined, the `sap.ui.core.Configuration#getCalendarType` function is used to determine the default value. In a SAP Fiori launchpad environment, the `sap.ui.core.Configuration#getCalendarType` function returns the configured `sap.ui.core.CalendarType`. If this function does not provide any `sap.ui.core.CalendarType`, it automatically uses `sap.ui.core.CalendarType.Gregorian` as fallback. If no value has been set, `Configuration#getCalendarType` automatically uses the calendar type preferred by the current session locale.



</td>
</tr>
<tr>
<td valign="top">

 `format` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Defines a specific format that gets applied to `Date`/`DateTime`/`Time`. The format overrides the default formatting of the respective type which means that you can assign a format that shows only time-related information even to a column of type `Date`, which usually shows no time-related information.

If the `format` property has not been defined, the `sap.ui.core.Configuration.FormatSettings#getDatePattern` and `sap.ui.core.Configuration.FormatSettings#getTimePattern` functions are used to determine the default format pattern. In a SAP Fiori launchpad environment, these functions return the patterns configured in the settings of the SAP Fiori launchpad. While columns of type `sap.ui.export.EdmType.Date` require a date pattern and columns of type `sap.ui.export.EdmType.Time` require a time pattern, for columns of type `sap.ui.export.EdmType.DateTime`, both patterns need to be maintained. If no related pattern is available, the `format` property remains undefined.

The format template needs to match the following regular expression to be valid:

`/^[gdhmsy\s-,.:/]+(AM\/PM)?$/`

The list below shows some sample formats and their output:


<table>
<tr>
<th valign="top">

Format Template



</th>
<th valign="top">

Output Sample



</th>
</tr>
<tr>
<td valign="top">

yyyy-mm-dd h:mm



</td>
<td valign="top">

2007-12-24 18:21



</td>
</tr>
<tr>
<td valign="top">

h:mm:ss AM/PM



</td>
<td valign="top">

9:32:24 AM



</td>
</tr>
<tr>
<td valign="top">

d-mmm-yy



</td>
<td valign="top">

12-Apr-17



</td>
</tr>
<tr>
<td valign="top">

dddd, d.mmmm yyyy



</td>
<td valign="top">

Wednesday, 22. April 2017



</td>
</tr>
</table>



</td>
</tr>
<tr>
<td valign="top">

 `inputFormat` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Allows you to parse a textual date representation based on a given pattern. The pattern has to be provided as a string with the literals y, m, d. Other literals are ignored.


<table>
<tr>
<th valign="top">

Value



</th>
<th valign="top">

Input Format



</th>
<th valign="top">

Parsed Value



</th>
</tr>
<tr>
<td valign="top">

20200123



</td>
<td valign="top">

yyyymmdd



</td>
<td valign="top">

01/23/2020



</td>
</tr>
<tr>
<td valign="top">

2020-04-21



</td>
<td valign="top">

yyyy-mm-dd



</td>
<td valign="top">

04/21/2020



</td>
</tr>
</table>

 `inputFormat` is case-insensitive.



</td>
</tr>
<tr>
<td valign="top">

 `utc` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

The date and time information is exported based on the UTC time zone. The default value is `true`. If this value is set to `false`, the date and time information will be exported in the user's local time zone.

> ### Note:  
> This property only affects the `DateTime` type.



</td>
</tr>
<tr>
<td valign="top">

 `timezone` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

The date and time information is exported based on the given IANA \(Internet Assigned Numbers Authority\) time zone. Each cell contains a reference to the time zone that is applied. If no time zone is given or if the time zone is invalid, it will fall back on the user's local time zone or UTC, depending on the `utc` property of the column. The default value is `undefined`.

> ### Note:  
> This property only affects the `DateTime` type.



</td>
</tr>
<tr>
<td valign="top">

 `timezoneProperty` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

References the OData property that contains the IANA time zone, which is used to format the date and time information of a particular column per line item. This makes it possible to have different time zones within one column. If the referenced `timezoneProperty` does not contain a valid IANA time zone, it will fall back on the time zone that is assigned via the `timezone` property. The default value is `undefined`.

> ### Note:  
> This property only affects the `DateTime` type.



</td>
</tr>
<tr>
<td valign="top">

 `displayTimezone` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Defines whether the IANA time zone is displayed within a cell. The default value is `true`.

> ### Note:  
> This property only affects the `DateTime` type in combination with `timezoneProperty`.



</td>
</tr>
</table>

Here is an example for a `Date/DateTime/Time` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
                property: "Duedate",
                label: "Due date (islamic)",
                type: sap.ui.export.EdmType.Date,
                calendar: "islamic"
            },
            {
                property: "Createdat",
                label: "Created at",
                type: sap.ui.export.EdmType.DateTime,
                format: "dddd, d.mmmm yyyy"
            },
            {
                property: "Dailymeeting",
                label: "Daily meeting",
                type: sap.ui.export.EdmType.Time,
            },
            {
                property: "stringDate",
                label: "Textual date representation",
                type: sap.ui.export.EdmType.Date,
                inputFormat: "yyyymmdd"
            }
        ]
    }
}
```



<a name="loio283217d8f187401c8045723abc27e5e0__section_gdf_spn_n3b"/>

## Currency

The type `Currency` handles currencies as an aggregation of a value and a particular UoM. This type might apply various styles on cell level because the scale of each currency cell depends on the corresponding UoM which in turn might vary for various cells in a currency column. The `Currency` type inherits from the `number` type but provides additional properties, including the `unitProperty` property as a mandatory property.

**Details for Currency**


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Mandatory



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `unitProperty` 



</td>
<td valign="top">

 `string` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

References the business object property that contains the UoM for this particular currency. This property is required even if the UoM is not displayed.



</td>
</tr>
<tr>
<td valign="top">

 `displayUnit` 



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

No



</td>
<td valign="top">

Defines if the UoM is shown in the column. If set to `true`, the UoM is displayed after the actual value. The default value is `true`.



</td>
</tr>
<tr>
<td valign="top">

 `scale` 



</td>
<td valign="top">

 `integer` 



</td>
<td valign="top">

No



</td>
<td valign="top">

Property that is equivalent to the `scale` property of the internal numeric type. It applies a fixed number of decimals to all cells within the currency column regardless of the corresponding UoM.



</td>
</tr>
</table>

Here is an example for a `Currency` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
             type: sap.ui.export.EdmType.Currency,
                property: "Amount",
                label: "Price",
                unitProperty: "Currency"
            }
        ]
    }
}
```



<a name="loio283217d8f187401c8045723abc27e5e0__section_zw5_53x_43b"/>

## Enumeration

The type `Enumeration` is used for mapping values to a particular key. This is useful if your SAPUI5 application is using formatters instead of raw data to display meaningful content because formatters are not supported directly.

**Details for Enumeration**


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Mandatory



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `valueMap` 



</td>
<td valign="top">

 `object|map` 



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Contains `object` as an associative array or `map`, which holds all the key value pairs that are used for mapping the raw data to an explicit value. The raw data is used as a key to look up the actual value.



</td>
</tr>
</table>

Here is an example for an `Enumeration` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
              type: sap.ui.export.EdmType.Enumeration,
                property: "Shipping",
                valueMap: {
                    a: "Standard Shipping",
                    b: "Premium Shipping",
                    c: "Express Shipping"
                }
            }
        ]
    }
}
```



<a name="loio283217d8f187401c8045723abc27e5e0__section_fhw_hqx_43b"/>

## BigNumber

The type `BigNumber` is used to represent numbers that contain more than 15 digits. This data type is required because of the internal number representation of Microsoft Excel as defined by the IEEE \(Institute of Electrical and Electronics Engineers\). This means that all numbers that contain more than 15 digits are filled with zeros at the end. This affects precision of the values although the difference is really small compared to the total amount. The `BigNumber` type inherits from the `Currency` type and uses the same properties as `Currency` and its superordinate class `Number`. This type creates a textual output which is why it is not possible to do any calculation with these values.



<a name="loio283217d8f187401c8045723abc27e5e0__section_wxf_zjj_l4b"/>

## Percentage

The type `Percentage` represents numeric values that are transformed into percentage. The raw value 1 corresponds to 100%.

**Details for Percentage**


<table>
<tr>
<th valign="top">

Additional Property



</th>
<th valign="top">

Output Sample



</th>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

 `scale` 



</td>
<td valign="top">

89.706%



</td>
<td valign="top">

 `number` 



</td>
<td valign="top">

Sets a fixed number of decimals. The scale is applied to the whole column and displays exactly the number of decimals that is configured. If the actual value has fewer or more decimal places, it is filled with additional zeros or gets cut off to match the configured number of decimals. This property accepts a positive integer value. Negative values are treated like zero.



</td>
</tr>
<tr>
<td valign="top">

 `delimiter` 



</td>
<td valign="top">

1,754%



</td>
<td valign="top">

 `boolean` 



</td>
<td valign="top">

Specifies if the numeric value is shown in groups of thousands. If set to `true`, the thousands delimiter is shown. The delimiter is embedded in the number format and therefore requires a particular scale. If the `scale` property is not defined, this is treated like a scale of zero, and float values might get rounded down . Default value is `false`.



</td>
</tr>
</table>

Here is an example for a `Percentage` column:

```js
var exportConfiguration = {
    workbook: {
        columns: [
            {
	    	type: sap.ui.export.EdmType.Percentage,
                property: "Fraction",
                scale: 2,
		delimiter: false
            }
        ]
    }
}
```

**Related Information**  


[API Reference: `sap.ui.export.EdmType`](https://ui5.sap.com/#/api/sap.ui.export.EdmType)

