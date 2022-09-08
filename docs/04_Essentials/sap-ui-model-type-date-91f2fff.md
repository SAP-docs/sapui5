<!-- loio91f2fff06f4d1014b6dd926db0e91070 -->

# sap.ui.model.type.Date

The `Date` data type represents a date \(without time\).

This type transforms a source value \(given value in the model\) into a formatted date string and the other way round.

The format patterns must be defined in LDML Date Format notation. For the output, the use of a style \("short, "medium", "long" or "full"\) instead of a pattern is preferred, as it will automatically use a locale-dependent date pattern.

Examples how a `Date` type can be initialized:

```js
// "TypeDate" required  from "sap/ui/model/type/Date"

// The source value is given as Javascript Date object. The used output pattern depends on the locale settings (default).
var oType = new TypeDate();

// The source value is given as Javascript Date object. The used output pattern is "yy-MM-dd": e.g. 09-11-27
oType = new TypeDate({pattern: "yy-MM-dd"}); 

// The source value is given as string in "yyyy/MM/dd" format. The used output style is "long". The styles are language dependent.
// The following styles are possible: short, medium (default), long, full
// This might be the common use case.
oType = new TypeDate({source: {pattern: "yyyy/MM/dd"}, style: "long"}); 

// The source value is given as string in "yyyy/MM/dd" format. The used output pattern is "EEEE, MMMM d, yyyy": e.g. Saturday, August 22, 2043
oType = new TypeDate({source: {pattern: "yyyy/MM/dd"}, pattern: "EEEE, MMMM d, yyyy"}); 

// The source value is given as timestamp. The used output pattern is "dd.MM.yyyy": e.g. 22.12.2010
oType = new TypeDate({source: {pattern: "timestamp"}, pattern: "dd.MM.yyyy"}); 

// The source value is given as string. The used input pattern depends on the locale settings (default). The used output pattern is "dd '|' MM '|' yyyy": e.g. 22 | 12 | 2010
oType = new TypeDate({source: {}, pattern: "dd.MM.yyyy"});
```

The `Date` type supports the following validation constraints:

-   `maximum` \(expects a date presented in the source-pattern format\)
-   `minimum` \(expects a date presented in the source-pattern format\)

For more information, see the [API Reference: `sap.ui.model.type.Date`](https://ui5.sap.com/#/api/sap.ui.model.type.Date).

