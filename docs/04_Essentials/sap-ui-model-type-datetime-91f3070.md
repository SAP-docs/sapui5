<!-- loio91f3070d6f4d1014b6dd926db0e91070 -->

# sap.ui.model.type.DateTime

The `DateTime` data type represents an exact point of time \(date and time\).

This data type transforms a source value \(given value in the model\) into a formatted date+time string and the other way round.

The format patterns must be defined in LDML Date Format notation. For the output, the use of a style \("short, "medium", "long" or "full"\) instead of a pattern is preferred, as it will automatically use a locale-dependent date and time pattern.

> ### Caution:  
> When talking about exact points in time, time zones are imported. The formatted output of the `DateTime` type currently shows the "local" time which equals the time settings of the machine on which the browser runs. If the source value is given as a JavaScript Date object or as a timestamp, the exact moment is sufficiently defined. For string source values this value is interpreted in "local" time if it does not explicitly have a time zone. Currently, all accepted time zone notations must be based on GMT/UTC.

Examples how a `DateTime` type can be initialized:

```js
// "TypeDateTime" required from "sap/ui/model/type/DateTime"

// The source value is given as JavaScript Date object. The used output pattern depends on the locale settings (default).
var oType = new TypeDateTime();

// The source value is given as JavaScript Date object. The used output pattern is "yyyy/MM/dd HH:mm:ss": e.g. 2011/04/11 09:11:27
oType = new TypeDateTime({pattern: "yyyy/MM/dd HH:mm:ss"}); 

// The source value is given as string in "yyyy/MM/dd HH:mm:ss" format. The used output style is "full". The styles are language dependent.
// The following styles are possible: short, medium (default), long, full
// This usecase might be the common one.
oType = new TypeDate({source: {pattern: "yyyy/MM/dd HH:mm:ss"}, style: "full"}); 

// The source value is given as string in "dd.MM.yyyy HH:mm:ss" format (no timezone given). The used output pattern is "MMMM d, yyyy, HH:mm:ss.SSS": e.g. August 22, 2043, 18:48:48.374
oType = new TypeDateTime({source: {pattern: "dd.MM.yyyy HH:mm:ss"}, pattern: "MMMM d, yyyy, HH:mm:ss.SSS"});

// The source value is given as timestamp. The used output pattern is "dd.MM.yyyy HH:mm": e.g. 22.12.2010 13:15
oType = new TypeDateTime({source: {pattern: "timestamp"}, pattern: "dd.MMM.yyyy HH:mm"}); 

// The source value is given as string. The used input pattern depends on the locale settings (default). The used output pattern is "hh-mm-ss '/' yy-MM-dd": e.g. 06-48-48 / 43-08-22
oType = new TypeDateTime({source: {}, pattern: "hh-mm-ss '/' yy-MM-dd"}); 

// The source value is given as string in "dd.MM.yyyy HH:mm:ss X" format (timezone is defined in ISO8601 format, e.g. "+02:00"). The used output pattern depends on the locale settings (default).
oType = new TypeDateTime({source: {pattern: "dd.MM.yyyy HH:mm:ss X"}});

// The source value is given as string in "dd.MM.yyyy HH:mm:ss Z" format (timezone is defined in RFC822 format, e.g. "+0200"). The used output pattern depends on the locale settings (default).
oType = new TypeDateTime({source: {pattern: "dd.MM.yyyy HH:mm:ss Z"}});

// The source value is given as string in "dd.MM.yyyy HH:mm:ss z" format (timezone is currently defined as e.g. "GMT+02:00", "UTC+02:00", "UT+02:00" or "Z" (shortcut for "UTC+00:00")).
// The used output pattern depends on the locale settings (default).
oType = new TypeDateTime({source: {pattern: "dd.MM.yyyy HH:mm:ss z"}});
```

The `DateTime` type supports the following validation constraints:

-   `maximum` \(expects a `dateTime` presented in the source-pattern format\)
-   `minimum` \(expects a `dateTime` presented in the source-pattern format\)

For more information, see the [API Reference: `sap.ui.model.type.DateTime`](https://ui5.sap.com/#/api/sap.ui.model.type.DateTime).

