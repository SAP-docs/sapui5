<!-- loio91f322a06f4d1014b6dd926db0e91070 -->

# sap.ui.model.type.Time

The `Time` data type represents a time \(without date\).

This type transforms a source value \(given value in the model\) into a formatted time string and the other way round.

The format patterns must be defined in LDML Date Format notation. For the output, the use of a style \("short, "medium", "long" or "full"\) instead of a pattern is preferred, as it will automatically use a locale dependent time pattern.

Examples how a `Time` type can be initialized:

```js
// "TypeTime" required from module "sap/ui/model/type/Time"

// The source value is given as JavaScript Date object. The used output pattern depends on the locale settings (default).
var oType = new TypeTime();

// The source value is given as JavaScript Date object. The used output pattern is "hh-mm-ss": e.g. 09-11-27
oType = new TypeTime({pattern: "hh-mm-ss"}); 

// The source value is given as string in "hh-mm-ss" format. The used output style is "short". The styles are language dependent.
// The following styles are possible: short, medium (default), long, full
// This might be the common use case.
oType = new TypeTime({source: {pattern: "hh-mm-ss"}, style: "short"}); 

// The source value is given as string in "hh/mm/ss/SSS" format. The used output pattern is "HH:mm:ss '+' SSS 'ms'": e.g. 18:48:48 + 374 ms
oType = new TypeTime({source: {pattern: "hh/mm/ss/SSS"}, pattern: "HH:mm:ss '+' SSS 'ms'"}); 

// The source value is given as timestamp. The used output pattern is "HH 'Hours' mm 'Minutes'": e.g. 18 Hours 48 Minutes
oType = new TypeTime({source: {pattern: "timestamp"}, pattern: "HH 'Hours' mm 'Minutes'"}); 

// The source value is given as string. The used input pattern depends on the locale settings (default). The used output pattern is "hh:mm a": e.g. 06:48 PM
oType = new TypeTime({source: {}, pattern: "hh:mm a"});
```

The `Time` type supports the following validation constraints:

-   `maximum` \(expects a time presented in the source-pattern format\)
-   `minimum` \(expects a time presented in the source-pattern format\)

For more information, see the [API Reference: `sap.ui.model.type.Time`](https://ui5.sap.com/#/api/sap.ui.model.type.Time).

