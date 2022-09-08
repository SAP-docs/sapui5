<!-- loio24f340bdd59e4428aab30a20d14e2ebc -->

# File Size Format

The `sap.ui.core.format.FileSizeFormat` class can be used to format a number into a string which contains both the number and the most appropriate size unit. It supports all parameters defined in `sap.ui.core.format.NumberFormat`. It can also parse a file size string with or without unit into a number which represents the same size in unit byte.



## Instantiation

The instantiation of `sap.ui.core.format.FileSizeFormat` is done by calling the `getter` defined on the `FileSizeFormat` \(and not by calling the constructor\):

```js
var oFileSizeFormat = sap.ui.core.format.FileSizeFormat.getInstance();
```



## Parameters

`binaryFilesize`: if this is set to `true`, base `2` is used which means 1 Kilobyte = 1024 Byte. Otherwise base 10 is used which means 1 Kilobyte = 1000 Byte. The default value is `false`.

```js
var oFileSizeFormat =  sap.ui.core.format.FileSizeFormat.getInstance({
    binaryFilesize: true,
    decimals: 2
});
 
oFileSizeFormat.format(1023); //returns 1,023.00 Bytes because it's smaller than 1 KB (1024 Bytes)
 
oFileSizeFormat = sap.ui.core.format.FileSizeFormat.getInstance({
    binaryFilesize: false,
    decimals: 2
});
oFileSizeFormat.format(1023); //returns 1.02 KB because it's bigger than 1 KB (1000 Bytes)
```



## Parsing

`FileSizeFormat` can also parse a string which contains both number and unit of a number which represents the same amount of size in unit byte.

```js
var oFileSizeFormat =  sap.ui.core.format.FileSizeFormat.getInstance();
 
oFileSizeFormat.parse("1.23 MiB"); //returns 1289748.48
oFileSizeFormat.parse("1 MB"); // returns 1230000
```

**Related Information**  


[API Reference: `sap.ui.core.format.FileSizeFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.FileSizeFormat)

