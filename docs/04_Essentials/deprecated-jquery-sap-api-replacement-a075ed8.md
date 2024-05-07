<!-- loioa075ed88ef324261bca41813a6ac4a1c -->

# Deprecated jQuery.sap API Replacement

Overview of the mapping of legacy APIs to the new APIs for the migration

The deprecation of the `jQuery.sap` API requires that it is replaced with the new API. The following list provides an overview of the required replacements.





### Replacement With New Modules

To migrate the simple replacements, add the new module dependency and replace the call with the added argument name as shown in the following example:

> ### Example:  
> 
> <table>
> <tr>
> <th valign="top">
> 
> Old API
> 
> </th>
> <th valign="top">
> 
> New API
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> ```js
> sap.ui.define([], function() {
>   jQuery.sap.log.info("My log message");
> });
> ```
> 
> 
> 
> </td>
> <td valign="top">
> 
> ```js
> sap.ui.define(['sap/base/Log'], function(Log) {
>   Log.info("My log message");
> });
> ```
> 
> 
> 
> </td>
> </tr>
> </table>


<table>
<tr>
<th valign="top">

Old API Call

</th>
<th valign="top">

New Module

</th>
<th valign="top">

Replacement Type

</th>
<th valign="top">

Replace with

</th>
</tr>
<tr>
<td valign="top">

`jQuery.sap.assert` 

</td>
<td valign="top">

`sap/base/assert` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`assert` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.resources` 

</td>
<td valign="top">

`sap/base/i18n/ResourceBundle`

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`ResourceBundle.create`

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log` 

</td>
<td valign="top">

`sap/base/Log`

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.addLogListener` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.addLogListener` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.debug` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.debug`

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.error` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.error` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.fatal` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.fatal` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.getLevel` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.getLevel` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.getLog` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Log.getLogEntries` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.getLogEntries` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.getLogEntries` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.getLogger` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.getLogger` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.info` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.info` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.isLoggable` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.isLoggable` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.Level` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.Level` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.logSupportInfo` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.logSupportInfo` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.removeLogListener` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.removeLogListener` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.trace` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.trace` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.log.warning` 

</td>
<td valign="top">

`sap/base/Log` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Log.warning` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.encodeCSS` 

</td>
<td valign="top">

`sap/base/security/encodeCSS` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`encodeCSS` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.encodeJS` 

</td>
<td valign="top">

`sap/base/security/encodeJS` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`encodeJS` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.encodeURL` 

</td>
<td valign="top">

`sap/base/security/encodeURL` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`encodeURL` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.encodeURLParameters` 

</td>
<td valign="top">

`sap/base/security/encodeURLParameters` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`encodeURLParameters` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.encodeHTML` 

</td>
<td valign="top">

`sap/base/security/encodeXML` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`encodeXML` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.encodeXML` 

</td>
<td valign="top">

`sap/base/security/encodeXML` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`encodeXML` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.addUrlWhitelist` 

</td>
<td valign="top">

`sap/base/security/URLListValidator` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`URLListValidator.add` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.clearUrlWhitelist` 

</td>
<td valign="top">

`sap/base/security/URLListValidator` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`URLListValidator.clear` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getUrlWhitelist` 

</td>
<td valign="top">

`sap/base/security/URLListValidator` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`URLListValidator.entries` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.removeUrlWhitelist` 

</td>
<td valign="top">

`sap/base/security/URLListValidator` 

</td>
<td valign="top">

Complex replacement

</td>
<td valign="top">

`URLListValidator.clear` and `URLListValidator.add` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.validateUrl` 

</td>
<td valign="top">

`sap/base/security/URLListValidator` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`URLListValidator.validate` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.camelCase` 

</td>
<td valign="top">

`sap/base/strings/camelize` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`camelize` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.charToUpperCase` 

</td>
<td valign="top">

`sap/base/strings/capitalize` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`capitalize` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.escapeRegExp` 

</td>
<td valign="top">

`sap/base/strings/escapeRegExp` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`escapeRegExp`

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.formatMessage` 

</td>
<td valign="top">

`sap/base/strings/formatMessage` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`formatMessage` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.hashCode` 

</td>
<td valign="top">

`sap/base/strings/hash` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`hash`

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.hyphen` 

</td>
<td valign="top">

`sap/base/strings/hyphenate` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`hyphenate` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.unicode`

`jQuery.sap.isStringNFC`

</td>
<td valign="top">

`sap/base/strings/NormalizePolyfill` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`NormalizePolyfill`

</td>
</tr>
<tr>
<td valign="top">

\-

</td>
<td valign="top">

`sap/base/strings/toHex`

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.arraySymbolDiff` 

</td>
<td valign="top">

`sap/base/util/array/diff` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`diff` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.unique` 

</td>
<td valign="top">

`sap/base/util/array/uniqueSort` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`uniqueSort` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.equal` 

</td>
<td valign="top">

`sap/base/util/deepEqual` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`deepEqual` 

</td>
</tr>
<tr>
<td valign="top">

\-

</td>
<td valign="top">

`sap/base/util/defineLazyProperty` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.each` 

</td>
<td valign="top">

`sap/base/util/each` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`each` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.forIn` 

</td>
<td valign="top">

`sap/base/util/each` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`each` 

</td>
</tr>
<tr>
<td valign="top">

\-

</td>
<td valign="top">

`sap/base/util/includes` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top">

`jQuery.isPlainObject` 

</td>
<td valign="top">

`sap/base/util/isPlainObject` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`isPlainObject` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.parseJS` 

</td>
<td valign="top">

`sap/base/util/JSTokenizer` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`JSTokenizer.parseJS` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.extend` 

</td>
<td valign="top">

`sap/base/util/merge` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

Old:

```
// Shallow
jQuery.sap.extend({}, sContent);

// Deep
jQuery.sap.extend(true, {}, sContent)
```

New:

```
// Shallow
//
// No actual replacement for shallow copies available, see the note below for more info.

// Deep
merge({}, sContent);
```

> ### Note:  
> **`jQuery.sap.extend` vs. `jQuery.extend`**
> 
> The use of `jQuery.sap.extend()` is the same as `jQuery.extend()`, but arguments that are `null` or `undefined` are **not** ignored.
> 
> **`Object.assign`**
> 
> The `Object.assign()` method only copies enumerable and own properties, but does not copy properties on the prototype chain and non-enumerable properties.
> 
> Considering this, `Object.assign()` might be a suitable replacement for `jQuery.sap.extend` for a shallow copy.
> 
> `null` and `undefined` arguments are **not** ignored.



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.now` 

</td>
<td valign="top">

`sap/base/util/now` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`now` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getObject` 

</td>
<td valign="top">

`sap/base/util/ObjectPath` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
ObjectPath.get("some.object.path", "someProperty");
```

If the object path does not exist, the method doesn't create it anymore. If the path needs to be create it has do be done separately:

```
ObjectPath.create("some.object.path", window.myLib);
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.setObject` 

</td>
<td valign="top">

`sap/base/util/ObjectPath` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
ObjectPath.set("some.object.path", "myValue", window.myLib);
```

The object path is created if it does not exist.

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.properties` 

</td>
<td valign="top">

`sap/base/util/Properties` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Properties.create` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.uid` 

</td>
<td valign="top">

`sap/base/util/uid` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`uid` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getUriParameters` 

</td>
<td valign="top">

`URLSearchParams`

`URL`

</td>
<td valign="top">

Use URL web standard classes

</td>
<td valign="top">

`jQuery.sap.getUriParameters()` can be migrated to `new URLSearchParams(window.location.search)`

`jQuery.sap.getUriParameters(sUrl)` can be migrated to `new URL(sUrl).searchParams`

**Caveats**

The APIs have already been designed to be drop-in replacements, but there are some important caveats to consider when switching to `URLSearchParams` / `URL`:

-   `new URL(input).searchParams` validates the given URL according to the [WHATWG URL Standard](https://url.spec.whatwg.org). `UriParameters.fromURL(input)` only extracts the query string from the given input but does not perform any validation.
-   In some edge cases, especially for incomplete/invalid encoding, decoding behaves differently. The factory method `jQuery.sap.getUriParameters` expects percentage-encoded input, whereas all other APIs expect and return decoded strings. After parsing the query string, any plus sign \(0x2b\) in names or values is replaced by a blank \(0x20\), and the resulting strings are percentage-decoded \(`decodeURIComponent`\).

    For details about the encoding/decoding of `URLSearchParams`, see the [WHATWG URL Standard](https://url.spec.whatwg.org).

-   The get method's second parameter, `bAll`, is not available; use the `getAll` method instead.
-   The `keys` method's return value contains an entry for every occurrence of the key within the query, in the defined order and including duplicates.

    In contrast, `UriParameters#keys()` yields unique key values, even when there are multiple values for the same key.

-   The internal `mParams` property is not available anymore \(you should never access internal properties of UI5 classes or objects\). With the predecessor of the new APIs, access to `mParams` was often used to check whether a parameter is defined at all. Using the `has` method or checking the result of `get` against `null` serves the same purpose.

```
var oUrlParams = new URLSearchParams(window.location.search);
oUrlParams.get("my-param");
```

```
var oUrlParams = new URL(sUrl).searchParams;
oUrlParams.get("my-param");
```



</td>
</tr>
<tr>
<td valign="top">

\-

</td>
<td valign="top">

`sap/base/util/values` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.Version` 

</td>
<td valign="top">

`sap/base/util/Version` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Version` 

</td>
</tr>
<tr>
<td valign="top">

\-

</td>
<td valign="top">

`sap/ui/core/support/HotKeys` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

\-

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.syncStyleClass` 

</td>
<td valign="top">

`sap/ui/core/syncStyleClass` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`syncStyleClass` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.android_phone` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.android && Device.system.phone
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.android_tablet` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.android && Device.system.tablet
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.desktop` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.system.desktop
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.ipad` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.ios && Device.system.ipad
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.iphone` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.ios && Device.system.phone
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.landscape` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.orientation.landscape
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.phone` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.system.phone
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.portrait` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.orientation.portrait
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.tablet` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.system.tablet
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.Android` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "Android"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.bb` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "bb"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.fVersion` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.version
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.iOS` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "iOS"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.linux` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "linux"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.mac` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "mac"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.os` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.version` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.versionStr
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.win` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "win"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.os.winphone` 

</td>
<td valign="top">

`sap/ui/Device` 

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
Device.os.name === "winphone"
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.containsOrEquals` 

</td>
<td valign="top">

`sap/ui/dom/containsOrEquals` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`containsOrEquals` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.denormalizeScrollBeginRTL` 

</td>
<td valign="top">

`sap/ui/dom/denormalizeScrollBeginRTL` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`denormalizeScrollBeginRTL` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.denormalizeScrollLeftRTL` 

</td>
<td valign="top">

`sap/ui/dom/denormalizeScrollLeftRTL` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`denormalizeScrollLeftRTL` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.ownerWindow` 

</td>
<td valign="top">

`sap/ui/dom/getOwnerWindow` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`getOwnerWindow` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.scrollbarSize` 

</td>
<td valign="top">

`sap/ui/dom/getScrollbarSize` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`getScrollbarSize` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.includeScript` 

</td>
<td valign="top">

`sap/ui/dom/includeScript` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`includeScript` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.includeStylesheet` 

</td>
<td valign="top">

`sap/ui/dom/includeStylesheet` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`includeStylesheet` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.replaceDOM` 

</td>
<td valign="top">

`sap/ui/dom/patch` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`patch` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.pxToRem` 

</td>
<td valign="top">

`sap/ui/dom/units/Rem` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Rem.fromPx` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.remToPx` 

</td>
<td valign="top">

`sap/ui/dom/units/Rem` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Rem.toPx` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.checkMouseEnterOrLeave` 

</td>
<td valign="top">

`sap/ui/events/checkMouseEnterOrLeave` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`checkMouseEnterOrLeave` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.bindAnyEvent` 

</td>
<td valign="top">

`sap/ui/events/ControlEvents` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`bindAnyEvent` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.ControlEvents` 

</td>
<td valign="top">

`sap/ui/events/ControlEvents` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`events` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.unbindAnyEvent` 

</td>
<td valign="top">

`sap/ui/events/ControlEvents` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`unbindAnyEvent` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.handleF6GroupNavigation` 

</td>
<td valign="top">

`sap/ui/events/F6Navigation` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`handleF6GroupNavigation` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.isMouseEventDelayed` 

</td>
<td valign="top">

`sap/ui/events/isMouseEventDelayed` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`isMouseEventDelayed` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.isSpecialKey` 

</td>
<td valign="top">

`sap/ui/events/isSpecialKey` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`isSpecialKey` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.touchEventMode` 

</td>
<td valign="top">

`sap/ui/events/jquery/EventSimulation` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`touchEventMode` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.keycodes` 

</td>
<td valign="top">

`sap/ui/events/KeyCodes` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`KeyCodes` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.PseudoEvents` 

</td>
<td valign="top">

`sap/ui/events/PseudoEvents` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`PseudoEvents` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.disableTouchToMouseHandling` 

</td>
<td valign="top">

`sap/ui/events/TouchToMouseMapping` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`disableTouchToMouseHandling` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.registerModulePath` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
sap.ui.loader.config({paths:{"myPath": "some/path"}});
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.registerResourcePath` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

Complex Replacement

</td>
<td valign="top">

```
sap.ui.loader.config({paths:{"myPath": "some/path"}});
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.add` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.add` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.average` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.average` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.clear` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.clear` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.end` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.end` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.filterMeasurements` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.filterMeasurements` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.getActive` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.getActive` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.getAllMeasurements` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.getAllMeasurements` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.getMeasurement` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.getMeasurement` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.pause` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.pause` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.registerMethod` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.registerMethod` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.remove` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.remove` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.resume` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.resume` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.setActive` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.setActive` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.start` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.start` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.unregisterAllMethods` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.unregisterAllMethods` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.unregisterMethod` 

</td>
<td valign="top">

`sap/ui/performance/Measurement` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Measurement.unregisterMethod` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.fesr.getActive` 

</td>
<td valign="top">

`sap/ui/performance/trace/FESR` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`FESR.getActive` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.fesr.setActive` 

</td>
<td valign="top">

`sap/ui/performance/trace/FESR` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`FESR.setActive` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.fesr.addBusyDuration` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Simple Replacement

</td>
<td valign="top">

`Interaction.addBusyDuration` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.interaction.*` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.*` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.clearInteractionMeasurements` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.clear` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.endInteraction` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.end` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.filterInteractionMeasurements` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.filter` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.getAllInteractionMeasurements` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.getAll` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.getPendingInteractionMeasurement` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.getPending` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.measure.startInteraction` 

</td>
<td valign="top">

`sap/ui/performance/trace/Interaction` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Interaction.start` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.fesr.getCurrentTransactionId` 

</td>
<td valign="top">

`sap/ui/performance/trace/Passport` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Passport.getTransactionId` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.fesr.getRootId` 

</td>
<td valign="top">

`sap/ui/performance/trace/Passport` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Passport.getRootId` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.passport.*` 

</td>
<td valign="top">

`sap/ui/performance/trace/Passport` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Passport.*` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getModulePath` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

Complex replacement

</td>
<td valign="top">

```
sap.ui.require.toUrl("some/path/to/module.js");
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getResourcePath` 

</td>
<td valign="top">

\-

</td>
<td valign="top">

Complex replacement

</td>
<td valign="top">

```
sap.ui.require.toUrl("some/path/to/resource.json");
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.FrameOptions` 

</td>
<td valign="top">

`sap/ui/security/FrameOptions` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`FrameOptions` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.act` 

</td>
<td valign="top">

`sap/ui/util/ActivityDetection` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`ActivityDetection` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.initMobile` 

</td>
<td valign="top">

`sap/ui/util/Mobile` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Mobile.init` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.setIcons` 

</td>
<td valign="top">

`sap/ui/util/Mobile` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Mobile.setIcons` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.setMobileWebAppCapable` 

</td>
<td valign="top">

`sap/ui/util/Mobile` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Mobile.setWebAppCabable` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.storage` 

</td>
<td valign="top">

`sap/ui/util/Storage` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Storage` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.storage.Type.*` 

</td>
<td valign="top">

`sap/ui/util/Storage` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Storage.Type` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getParseError` 

</td>
<td valign="top">

`sap/ui/util/XMLHelper` 

</td>
<td valign="top">

Simple replacement

</td>
<td valign="top">

`Helper.getParseError` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.parseXML` 

</td>
<td valign="top">

`sap/ui/util/XMLHelper` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Helper.parse` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.serializeXML` 

</td>
<td valign="top">

`sap/ui/util/XMLHelper` 

</td>
<td valign="top">

Method changed

</td>
<td valign="top">

`Helper.serialize` 

</td>
</tr>
</table>



### Replacement with Native Browser APIs


<table>
<tr>
<th valign="top">

Old API Call

</th>
<th valign="top">

New Native Replacement

</th>
</tr>
<tr>
<td valign="top">

`jQuery.device.is.standalone`

</td>
<td valign="top">

```
window.navigator.standalone
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.inArray`

</td>
<td valign="top">

```
var b = (aElements ? Array.prototype.indexOf.call(aElements, 4) : -1);
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.isArray`

</td>
<td valign="top">

```
Array.isArray
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.clearDelayedCall`

</td>
<td valign="top">

```
window.clearTimout
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.clearIntervalCall`

</td>
<td valign="top">

```
window.clearInterval
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.delayedCall`

</td>
<td valign="top">

```
window.setTimeout
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.domById`

</td>
<td valign="top">

```
window.document.getElementById
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.endsWith`

</td>
<td valign="top">

```
sMyString.endsWith("abc")
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.endsWithIgnoreCase`

</td>
<td valign="top">

```
sMyString.toLowerCase().endsWith(sMyOtherString.toLowerCase())
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.getter`

</td>
<td valign="top">

```
function(value) { return function() { return value; }; }(myValue);
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.intervalCall` 

</td>
<td valign="top">

```
window.setInterval
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.isEqualNode` 

</td>
<td valign="top">

```
Node.isEqualNode
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.newObject` 

</td>
<td valign="top">

```
Object.create
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.padLeft` 

</td>
<td valign="top">

```
"a".padStart(110, "0");
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.padRight` 

</td>
<td valign="top">

```
"a".padEnd(110, "0");
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.resources.isBundle` 

</td>
<td valign="top">

```
instanceof
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.startsWith` 

</td>
<td valign="top">

```
sMyString.startsWith("abc");
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.sap.startsWithIgnoreCase` 

</td>
<td valign="top">

```
sMyString.toLowerCase().startsWith(sMyOtherString.toLowerCase())
```



</td>
</tr>
<tr>
<td valign="top">

`jQuery.support.retina` 

</td>
<td valign="top">

```
window.devicePixelRatio >= 2
```



</td>
</tr>
</table>



### jQuery Extensions Dependencies

jQuery extensions have been extracted into different modules. If the jQuery extension is required, it needs to be added to the module dependencies.

> ### Example:  
> Change from the global dependencies to adding the module dependencies to the jQuery extensions:
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Previously the dependency was global
> 
> </th>
> <th valign="top">
> 
> Dependencies should be added
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> ```js
> sap.ui.define([], function() {
>   var oDomRef = jQuery("#myElement").firstFocusableDomRef();
> });
> ```
> 
> 
> 
> </td>
> <td valign="top">
> 
> ```js
> sap.ui.define(["sap/ui/thirdparty/jquery", "sap/ui/dom/jquery/Focusable"], function(jQuery) {
>   var oDomRef = jQuery("#myElement").firstFocusableDomRef();
> });
> ```
> 
> 
> 
> </td>
> </tr>
> </table>


<table>
<tr>
<th valign="top">

jQuery Call

</th>
<th valign="top">

Old Module

</th>
<th valign="top">

New Module

</th>
</tr>
<tr>
<td valign="top">

`jQuery.*` 

</td>
<td valign="top">

`jQuery.sap.global` 

</td>
<td valign="top">

`sap/ui/thirdparty/jquery` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.position` 

</td>
<td valign="top">

`jQuery.sap.global` 

</td>
<td valign="top">

`sap/ui/thirdparty/jqueryui/jquery-ui-position` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.control` 

</td>
<td valign="top">

`jquery.sap.ui` 

</td>
<td valign="top">

`Element.closestTo` in `sap/ui/core/Element` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.addLabelledBy` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Aria` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.removeLabelledBy` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Aria` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.addDescribedBy` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Aria` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.removeDescribedBy` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Aria` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.cursorPos` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/cursorPos` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.firstFocusableDomRef` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Focusable` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.lastFocusableDomRef` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Focusable` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.getSelectedText` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/getSelectedText` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.hasTabIndex` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/hasTabIndex` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.parentByAttribute` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/parentByAttribute` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.rect` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/rect` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.rectContains` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/rectContains` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.scrollLeftRTL` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/scrollLeftRTL` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.scrollRightRTL` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/scrollRightRTL` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.enableSelection` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Selection` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.disableSelection` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Selection` 

</td>
</tr>
<tr>
<td valign="top">

`:sapTabbable, :focusable, :sapFocusable` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/Selectors` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.selectText` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/selectText` 

</td>
</tr>
<tr>
<td valign="top">

`jQuery.fn.zIndex` 

</td>
<td valign="top">

`jquery.sap.dom` 

</td>
<td valign="top">

`sap/ui/dom/jquery/zIndex` 

</td>
</tr>
</table>

