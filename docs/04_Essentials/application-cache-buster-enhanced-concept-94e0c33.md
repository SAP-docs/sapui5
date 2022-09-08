<!-- loio94e0c33e22474538a65f5f5b4920cdaf -->

# Application Cache Buster: Enhanced Concept

The enhanced concept for application cache buster takes care about most of the URLs in a general way.

The first iteration of the Application Cache Buster only supports files which have been loaded via `jQuery.ajax`. The enhanced concept supports the transformation of URLs for `sap.ui.dom.includeScript`, `sap.ui.dom.includeStyleSheet`, and properties of the type `sap.ui.core/URI`. Additionally the enhanced concept allows to register components or base URLs which are considered by the Application Cache Buster. This base URL is used to load the index file with the timestamp information.



<a name="loio94e0c33e22474538a65f5f5b4920cdaf__section_N10028_N10011_N10001"/>

## Registration of external URLs

If you do not specify all the applications in the bootstrap configuration, you can also register them during runtime. To register additional locations, use the following API:

```js

sap.ui.core.AppCacheBuster.register("/sap/bc/my/other/component");
```



<a name="loio94e0c33e22474538a65f5f5b4920cdaf__section_N1003A_N10011_N10001"/>

## Avoid handling of specific URLs

To avoid handling of specific URLs, you can override the default behavior as follows:

```js

sap.ui.core.AppCacheBuster.handleURL = function(sURL) {
  return sURL !== "my/specific/url";
};
```

