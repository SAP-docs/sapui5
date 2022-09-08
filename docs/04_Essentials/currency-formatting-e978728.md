<!-- loioe978728a6ef6490c971248948f9101e0 -->

# Currency Formatting

Data formatting is one of the key features in SAPUI5 and enables applications to display data according to the user locale. For this, SAPUI5 uses the Common Locale Data Repository \(CLDR\), a third-party library that provides locale-specific patterns. SAPUI5 uses these patterns to adapt to the conventions of different languages.

One use case for data formatting is the ability to format and parse numbers including currency information. For this specific use case, the CLDR provides patterns with preconfigured currency information such as the number of decimals for a set of different currencies. It is also possible to define custom currencies by adding new custom currencies or reconfiguring existing currencies.



<a name="loioe978728a6ef6490c971248948f9101e0__section_uzt_q33_vgb"/>

## Available Functions for Currency Formatting

Use the `NumberFormat.getCurrencyInstance()` factory function for creating a currency format instance. On this instance, you can call the `format` and `parse` functions.



### Creating a Currency Format Instance

The `sap.ui.core.format.NumberFormat.getCurrencyInstance()` function accepts two arguments:

-   The first argument, `oFormatOptions`, is a set of format options that determines the output formatting. The format option `'decimals'`, for example, defines the number of decimal digits of the formatted value.

    For a full list of format options, see [`NumberFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat).

-   The second argument, `oLocale`, defines the locale.


The following example shows how you create a simple currency formatter instance:

```js
// create a simple currency formatting instance, without any additional options
sap.ui.require(["sap/ui/core/format/NumberFormat"], function(NumberFormat) {
   var oCurrencyFormat = NumberFormat.getCurrencyInstance();
});
```

> ### Note:  
> All code examples are based on locale English. If no locale is defined explicitly on the currency formatter instance, the locale setting of the configuration is used.

For more information, see [getCurrencyInstance](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat/methods/sap.ui.core.format.NumberFormat.getCurrencyInstance).



### `format` Function

The currency formatter instance allows you to combine a number value with a localized currency string.

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oCurrencyFormat = NumberFormat.getCurrencyInstance();

oCurrencyFormat.format(12345.678, "EUR"); // output: EUR 12,345.68
```

For more information, see [format](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat/methods/format)



### `parse` Function

The `'parse'` function turns a string containing a number and a currency code \(EUR, USD\) or symbol \(€, $\) back into its raw parts: the number value and the currency code. The results are returned in an array.

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oCurrencyFormat = NumberFormat.getCurrencyInstance();

oCurrencyFormat.parse("EUR 12,345.678"); // output: [12345.678, "EUR"]

```

For more information, see [parse](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat/methods/parse)



### Formatting Options for Currency Formatting

The following formatting options for currency formatting are available:

-   `currencyCode` defines whether the code or the symbol is used when `showMeasure` is set to true.

-   `trailingCurrencyCode` defines whether the currency codes are always shown after the amount, independent of the locale.

-   `currencyContext` defines the pattern that is used for formatting a currency number. It can be set to standard \(default\) or accounting.


Let's try out these format options and create a currency formatter that is able to format currency values with symbols:

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oCurrencyFormat = NumberFormat.getCurrencyInstance({
    currencyCode: false
});

oCurrencyFormat.format(1234.567, "USD"); // returns $1,234.57
oCurrencyFormat.format(1234.567, "JPY"); // returns ¥1,235

oCurrencyFormat.parse("$1,234.57"); // returns [1234.57, "USD"]
oCurrencyFormat.parse("¥1,235"); // returns [1235, "JPY"]
```



<a name="loioe978728a6ef6490c971248948f9101e0__section_u15_k33_vgb"/>

## Custom Currencies

As mentioned above, the Common Locale Data Repository \(CLDR\) provides patterns with preconfigured currency information according to the locale. It is possible, however, to add new custom currencies, or to reconfigure existing currencies. These custom currencies can be configured on currency format instances, or globally in the core configuration.



### Custom Currencies Configuration on Currency Format Instances

The currency `NumberFormat` instance allows you to specify custom currencies which can be used for formatting and parsing. All you have to do is to add your custom currencies as an additional format option in the `sap.ui.core.format.NumberFormat.getCurrencyInstance()` factory.

The following example shows how this is done for a specific instance:

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oCurrencyFormat = NumberFormat.getCurrencyInstance({
    customCurrencies: {
        "Bitcoin": {
            decimals: 5
         }
     }
});

oCurrencyFormat.format(10.1234567, "Bitcoin"); // 10,12346 Bitcoin
oCurrencyFormat.parse("12 Bitcoin"); // [12, "Bitcoin"];
```

If you want to define a custom currency that falls back on the currency symbol of an already existing currency, you can configure a respective currency code \(also called ISO code\):

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
var oCurrencyFormat = NumberFormat.getCurrencyInstance({
    currencyCode: false,
    customCurrencies: {
        "MyEuro": {
            decimals: 5,
            isoCode: "EUR"
        }
    }
});

oCurrencyFormat.format(10.1234567, "MyEuro"); // €10.12346
```

The custom currencies defined on the `NumberFormat` instance are exclusive to this instance, meaning that no other instances are affected. In addition, once you define custom currencies for an instance, only those currencies are formatted and parsed by that instance.

This also means that custom currencies defined via the configuration are not taken into account for this specific instance. This is done to circumvent ambiguities and conflicts with the CLDR currencies. So, in the above example, only Bitcoin can be formatted, but not EUR.

In the following example, the currency instance from above is used. Formatting and parsing the currency 'Bitcoin' works fine, but the instance does not know about the currency 'EUR' because of the exclusivity of the custom currencies:

```js
// formatting/parsing Bitcoin is fine
oCurrencyFormat.format(9001.987654, "Bitcoin");  // 9.001,98765 Bitcoin
oCurrencyFormat.parse("12 Bitcoin"); // [12, "Bitcoin"];

// formatting/parsing EUR does not work
oCurrencyFormat.format(1.21, "EUR"); // "": results in an empty string, as the currency is unknown
```

If you need both, CLDR predefined currencies and custom currencies, you create two separate number format instances, or use the second approach to define custom currencies as described in the next section.



### Global Custom Currencies Configuration in Core Configuration

You can also add custom currencies via the formatting settings in the core configuration. Contrary to the custom currencies defined exclusively on a single currency-formatter instance, these custom currencies are available in all currency formatter instances for the current locale, except for if they also define a set of custom currencies as described in the previous section.

Adding a currency with a key which is already available in the CLDR will overwrite the CLDR currency. By this, you can overdefine single currencies, in case the CLDR provided formatting is not sufficient.

```js
// "NumberFormat" required from module "sap/ui/core/format/NumberFormat"
sap.ui.getCore().getConfiguration().getFormatSettings().addCustomCurrencies({
	     "MyCoin": {
            "symbol": "MC"
        },
        "Bitcoin": {
            "digits": 3
        },
        "USD": { // overwrite of an existing CLDR currency
            "digits": 5
        }
});


var oCurrencyFormat = NumberFormat.getCurrencyInstance();

// formatting a custom currency
oCurrencyFormat.format(12, "MyCoin"); // 12,00 MyCoin


// formatting an existing CLDR currency
oCurrencyFormat.format(5, "EUR"); // 5,00 EUR


// formatting an existing CLDR currency
oCurrencyFormat.format(12, "USD"); // 12,00000 USD // Default decimal setting would have been two
```

