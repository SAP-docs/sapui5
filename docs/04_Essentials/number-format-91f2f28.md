<!-- loio91f2f2866f4d1014b6dd926db0e91070 -->

# Number Format

The `sap.ui.core.format.NumberFormat` class can be used to parse a string representing a number \(float or integer\) into a JavaScript `number` and vice versa \(also known as `format`\).

`NumberFormat` uses the parameters defined for the current locale. These parameters can be overwritten on each instance by setting the format options.

There are four types of formatters defined in `NumberFormat`:

-   Integer formatter: formats and parses only the integer digits; decimal digits are ignored

-   Float formatter: formats and parses both integer and decimal digits.

-   Percent formatter: formats the number into a string with percentage sign. It validates the number whether it contains the right percentage sign in its parser.

-   Currency formatter: formats the number by using the parameters defined for the given currency code. Either currency symbol, currency code, or none of both can be included in the final formatted string. It parses the given string into an array which contains both the currency number and currency code.




## Instantiation

The instantiation of `sap.ui.core.format.NumberFormat` is done by calling `getter` defined on `NumberFormat` \(and not by using the constructor\).

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oIntegerFormat = NumberFormat.getIntegerInstance();
var oFloatFormat = NumberFormat.getFloatInstance();
var oPercentFormat = NumberFormat.getPercentInstance();
var oCurrencyFormat = NumberFormat.getCurrencyInstance();
```



## Parameters

All parameters have their default value defined in the current locale. Therefore, if no parameter is given when instantiating the formatter instance, it fetches the parameters from the current locale. The samples here assume that the current locale is `en-US`.

All parameters can be overwritten by giving a format option object in the `getter` of the formatter. There are a bunch of parameter defined for the four types of formatters. Most of them are shared among the types, and the rest are specifically defined for a certain kind of formatter.



### Integer and Decimal Digits

-   `minIntegerDigits`: minimal number of non-fraction digits. If there are less integer digits in the number than the value here, `'0'(s)` is prepended in the final result.

-   `maxIntegerDigits`: maximal number of non-fraction digits. If there are more digits in the number than the value here, all integer digits in the final result are replace by `?`.

-   `minFractionDigits`: minimal number of fraction digits. If there are less decimal digits in the number than the value here, '0'\(s\) is appended in the final result.

-   `maxFractionDigits`: maximal number of fraction digits. If there are more decimal digits in the number than the value here, those digits are discarded from the result and the least significant digit is calculated by using the given `roundingMode` parameter.

-   `decimals`: number of decimal digits in the final result. Same result is achieved by setting both `minFractionDigits` and `maxFractionDigits` to this value.

-   `precision`: number of digits used to display the number, for example with precision 5 a number could be 1.3456 or 134.45.

-   `shortDecimals`: number of decimal digits in the shortifed number when parameter `style` is set to `short` or `long`. If this isn't set, the parameter `decimal` is used instead.


```js
var oFormatOptions = {
    minIntegerDigits: 3,
    maxIntegerDigits: 5,
    minFractionDigits: 2,
    maxFractionDigits: 4
};

// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oFloatFormat = NumberFormat.getFloatInstance(oFormatOptions);
oFloatFormat.format(1.1); // returns 001.10
oFloatFormat.format(1234.567); // returns 1,234.567
oFloatFormat.format(123456.56789); // returns ??,???.5679
```

```js
var oFormatOptions = {
    style: "short",
    decimals: 1,
    shortDecimals: 2
};

// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oFloatFormat = NumberFormat.getFloatInstance(oFormatOptions);
oFloatFormat.format(1234.56); // returns 1.23K (shortified number takes the shortDecimals parameter)
oFloatFormat.format(123.456); // returns 123.5 (non-shortified number takes the decimals parameter)
```



### Separator and Signs

-   `groupingEnabled` defines whether the integer digits are put into groups which are separated by the `groupingSeparator` parameter

-   `groupingType` defines the type of grouping. Either `Arabic` or `Indian` can be set here.

-   `groupingSeparator` defines the separator of grouping.

-   `decimalSeparator` defines the symbol of decimal point.

-   `groupingSize` only used if you don't want the locale-dependent grouping, for example 3 digits for de or en

-   `groupingBaseSize` only used if your locale uses a specific group size for the first group \(like Indian\), and you don't want to use the standard

-   `plusSign`

-   `minusSign`




### Compact Format

You can use compact format to format a number using a given scale. For example, 1000000 may be formatted under en-US locale as *1 Million*.

To format a number in compact format, set the option `style` to either `short` or `long`. These styles control which version of scale name is used. For example, 1000000 is formatted as *1M* with `short` and *1 Million* with `long`.

The scale can be selected automatically based on the given number, or you can set it explicitely by using `shortRefNumber`. You can set this option with a number which is then used for calculating the scaling factor for formatting all given numbers to this formatter.

To hide the scaling formatter from the formatted number and only be shown once on the screen, you can use option `showScale`. In order to get the scaling factor name of the number set to `shortRefNumber` under the current running locale, you use method `getScale`.

To control the start the starting point of numbers which should be displyed in compact format, you use `shortLimit`.

> ### Example:  
> In the following chart, all numbers both on the chart and axis should be formatted using the same scaling factor. The scaling factor should only appear in the chart title and be hidden from the formatted number. In order to achieve this, the option `shortRefNumber` is set to `1000000` and `showScale` is set to `false`. The corresponding scaling factor name is returned by calling the `getScale` method.
> 
> ![](images/NumberFormatShortRefNumber_dd8f106.png)



### Miscellaneous

-   `emptyString` defines what empty string \(`""`\) is parsed as and what is formatted as `emptyString`. The allowed values are only `NaN`, `null` or `0`. Default setting is `NaN`.

-   `pattern`: a pattern which follows the CLDR syntax. The number is then formatted according to the given pattern.

-   `roundingMode`: defines a rounding behavior for discarding the digits after the maximum decimal digits defined by `maxFractionDigits` or `decimals`. Rounding will only be applied, if the formatting value is of type number.

    **Rounding Modes \(with decimals parameter set to 1\)**


    <table>
    <tr>
    <th valign="top">

    Number
    
    </th>
    <th valign="top">

    `FLOOR` 
    
    </th>
    <th valign="top">

    `CEILING` 
    
    </th>
    <th valign="top">

    `TOWARDS_ZERO` 
    
    </th>
    <th valign="top">

    `AWAY_FROM_ZERO` 
    
    </th>
    <th valign="top">

    `HALF_FLOOR` 
    
    </th>
    <th valign="top">

    `HALF_CEILING` 
    
    </th>
    <th valign="top">

    `HALF_TOWARDS_ZERO` 
    
    </th>
    <th valign="top">

    `HALF_AWAY_FROM_ZERO` 
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    2.21
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    2.25
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    2.29
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.2
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.3.
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    <td valign="top">
    
    2.3
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    \-2.21
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    \-2.25
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    \-2.29
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.2
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    <td valign="top">
    
    \-2.3
    
    </td>
    </tr>
    </table>
    



<a name="loio91f2f2866f4d1014b6dd926db0e91070__section_NFP"/>

## Parsing and Validation of User Input

You can parse a formatted number, which can contain locale-dependent grouping separators, a locale-dependent decimal separator or a percentage sign, into a number object using `sap.ui.core.format.NumberFormat`. Such a number string may not be correctly parsed by using `parseInt` or `parseFloat` in JavaScript.

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oFloatFormat = NumberFormat.getFloatInstance();

oFloatFormat.parse("1,234.567"); // returns 1234.567
oFloatFormat.parse("12.34%"); // returns 0.1234
```

When users switch between multiple UIs, websites or editors, they may encounter different characters being used as decimal and grouping separators. This can lead to incorrect numerical input if the user assumes a locale different from the one actually used by the UI. For example, in English locales the grouping separator is a comma \(","\) and the decimal separator is a dot \("."\), whereas in German locales it is the other way around.

To prevent an accidental mix-up of decimal and grouping separator in the user input, we have introduced a stricter parsing logic of `sap.ui.core.format.NumberFormat` by using **decimal separator validation** with an optional **strict grouping validation**. Instead of ignoring the grouping separators when parsing user input, several checks are now carried out on the grouping to identify potential input errors.



### Decimal Separator Validation

If not otherwise mentioned, the examples below are based on the US locale standard settings \(en-US\):

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oOptions = {
  groupingSeparator : ",",
  decimalSeparator : ".",
  groupingSize : 3
};
var oFloatFormat = NumberFormat.getFloatInstance(oOptions);
```

The following user input is now considered to be potentially wrong and therefore **invalid**:

-   There is no decimal separator and only one grouping separator, which occurs at an unexpected position.

    ```js
    oFloatFormat.parse("1,2");            // NaN (before: 12)
    oFloatFormat.parse("1,23");           // NaN (before: 123)
    oFloatFormat.parse("1,2345");         // NaN (before: 12345)
    ```

    **Assumption:** As the position of the grouping separator does not match the locale-specific convention, the user might have intended to use a decimal separator but used a separator from a different locale by mistake.

-   There is no decimal separator, only a single grouping separator is present, and at least one additional grouping separator is missing, **including the least significant \(lowest\) grouping separator**.

    ```js
    oFloatFormat.parse("1234,567891");    // NaN (before: 1234567891)
    ```

    **Assumption:** Any user aware of the right grouping separator would probably have added the missing grouping separator\(s\) as well. It is therefore likely that the grouping separator was confused with the decimal separator.


> ### Note:  
> Regarding the return value, a number with invalid grouping is treated in the same way as user input that cannot be parsed:
> 
> -   Unit and currency instances return `null`.
> 
> -   Float, percent, and integer instances return `NaN`.
> 
> 
> ```js
> oFloatFormat.parse("1,2");            // NaN
>  
> NumberFormat
>  .getCurrencyInstance(oOptions)
>    .parse("1,2 EUR");                 // null
> ```

The following user input is considered to be **valid**:

-   There is no decimal separator, **only the least significant \(lowest\) grouping separator is present**, and at least one additional grouping separator is missing.

    ```js
    oFloatFormat.parse("1234,567");       // 1234567
    ```

    > ### Note:  
    > While the presence of a single grouping separator in combination with the absence of additional grouping separator\(s\) hints at a potential confusion with the decimal separator, the input is nevertheless accepted in this case. The reason for this is that UI5 validation would otherwise contradict the UI behavior implemented in classic SAP GUI applications.

    For an option to bring UI5 validation even closer to the behavior of the classic SAP GUI, see *Strict Grouping Validation* below.

-   At least 2 grouping separators are present in the input.

    ```js
    oFloatFormat.parse("1234,567,892");   // 1234567892
    ```

    **Assumption:** As more than one grouping separator was used and as decimal separators must only occur once, a mix-up of the separators can be ruled out.

-   One decimal separator and at least one grouping separator are present in correct sequential order.

    ```js
    oFloatFormat.parse("1234,567.89");    // 1234567.89
    ```

    **Assumption:** As both separators are used in the expected order, a wrong usage is not likely.

-   There are no decimal or grouping separators \(trivial as no misinterpretation possible\).

    ```js
    oFloatFormat.parse("1234567891");   // 1234567891
    ```




### Strict Grouping Validation \(optional\)

For an even stricter parsing of number strings, you have the option of additionally enforcing **strict grouping validation** by setting the `strictGroupingValidation` format option to `true`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat).

While grouping separators are then still treated as optional and can be wholly or partially absent from the input, all grouping separators that are present must be at a correct position according to the user's locale. Numbers with wrongly placed grouping separators are refused in all cases. This brings UI5 validation closer to the UI behavior implemented in classic SAP GUI applications.

**Example:**

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oOptions = {
  groupingSeparator : ",",
  decimalSeparator : ".",
  groupingSize : 3,
  strictGroupingValidation: true
};
var oFloatFormat = NumberFormat.getFloatInstance(oOptions);

oFloatFormat.parse("1,2,3");       // NaN (before: 123)
```

**Related Information**  


[API Reference: `sap.ui.core.format.NumberFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat)

[Unit Formatting](unit-formatting-8e618a8.md "SAPUI5 supports the formatting and parsing of units. These unit formats are by default taken from the CLDR. Besides the default units defined in the CLDR, you can also define custom units.")

[Currency Formatting](currency-formatting-e978728.md "")

