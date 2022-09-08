<!-- loio91f080966f4d1014b6dd926db0e91070 -->

# Cache Buster for SAPUI5

A cache buster allows SAPUI5 to notify the browser to refresh the resources only when the SAPUI5 resources have been changed. As long as they are not changed, the resources can always be fetched from the browser's cache.

> ### Note:  
> SAPUI5 supports the cache buster concept for Java and ABAP servers and for SAP Business Technology Platform. SAP HANA XS does **not** support the cache buster concept.

When you want to cache your resources permanently, you simply need to change the URL in the SAPUI5 bootstrap tag from `resources/sap-ui-core.js` to `resources/sap-ui-cachebuster/sap-ui-core.js`.

The cache buster mechanism allows to always put the SAPUI5 resources into the browsers cache until a UI library or a web application has been changed. The default behavior of the SAPUI5 resource handler is either to cache the resources for a specific amount of time or alternatively in development mode it is using the `304/NOT MODIFIED` mechanism to check the SAPUI5 resources for being up-to-date. Both mechanisms are not optimal in a final, productive scenario - that is the reason for the implementation of the cache buster mechanism. Applications, which want to use the cache buster mechanism, have to explicitly decide to use it.

The cache buster mechanism is part of the resource servlet. In general, requests to JavaScript resources can be handled via the cache buster mechanism. Typically this is used for the initial request for the bootstrap JavaScript:

```html
  <script type="text/javascript" 
  	id="sap-ui-bootstrap"
  	src="resources/sap-ui-cachebuster/sap-ui-core.js"
  	data-sap-ui-libs="sap.ui.core,sap.m,sap.ui.table"
	data-sap-ui-theme="sap_belize"></script>
```

The bootstrap JavaScript will be included via the URL `resources/sap-ui-cachebuster/sap-ui-core.js` instead of `resources/sap-ui-core.js`.



<a name="loio91f080966f4d1014b6dd926db0e91070__section_854964900D904B06AC93A9948B313E31"/>

## Mechanism

The basic mechanism is implemented in the `ResourceServlet`. For the request to the bootstrap JavaScript it now serves a JavaScript file with the following content:

```js
(function() {
  var sTimeStamp = '~20120716-0201~';
  var sScriptPath = 'sap\x2dui\x2dcore.js';
  var aScriptTags = document.getElementsByTagName('script');
  for (var i = 0; i < aScriptTags.length; i++) {
    if (aScriptTags[i].src) {
      var iIdxCb = aScriptTags[i].src.indexOf('/sap-ui-cachebuster/');
      if (iIdxCb >= 0 && aScriptTags[i].src.substring(iIdxCb + '/sap-ui-cachebuster/'.length) == sScriptPath) {
        var sBasePath = aScriptTags[i].src.substring(0, iIdxCb);
        sBasePath += '/' + sTimeStamp + '/';
        window["sap-ui-config"] = window["sap-ui-config"] || {};
        window["sap-ui-config"].resourceRoots = window["sap-ui-config"].resourceRoots || {};
        window["sap-ui-config"].resourceRoots[''] = sBasePath;
        document.write('<script type="text/javascript" src="' + sBasePath + sScriptPath + '"></script>')
        break;
      }
    }
  }
})();
```

This script basically ensures that the global SAPUI5 configuration variable \(`window["sap-ui-config"]`\) exists, without modifying any existing values. It defines the resource root of SAPUI5 \(the location where SAPUI5 loads all JavaScript modules, controls and control related resources from\). Finally, another script tag is added to the page that points to the real boostrap JavaScript. The new resource root and the request path to the bootstrap JavaScript now contain a timestamp. Additionally the cache headers of the responses now look like the following:

```
Date: Mon, 16 Jul 2012 05:17:54 GMT
Expires: Sun, 14 Jul 2013 05:17:54 GMT
Cache-Control: max-age=315360000, public
```

By default all cache buster resources will be cached for one year.



<a name="loio91f080966f4d1014b6dd926db0e91070__section_CE7E0979C4904BAB8D627BDBF74DC262"/>

## Request Flow

When using the cache buster mechanism, the first request must never be cached because it is being used to determine the timestamp / and to finally redirect to the correct script. The following list explains the flow:

-   `resources/sap-ui-cachebuster/sap-ui-core.js` =\> NO\_CACHE

-   `resources/~201207160201~/sap-ui-core.js` =\>CACHE




<a name="loio91f080966f4d1014b6dd926db0e91070__section_EA1BCA523C48462CB21AC33F705872FA"/>

## Timestamp

If you are interested in the timestamp of the cache buster, you can grab it with the following request:

`resources/sap-ui-cachebuster` 

The response is `text/plain` with such value: `~20120716-0201~` 

