<!-- loio91f17d636f4d1014b6dd926db0e91070 -->

# Enabling Declarative Support

Declarative support needs to be enabled in the HTML document by adding an attribute to the SAPUI5 bootstrap script tag.

This is done as follows:

```
data-sap-ui-modules="sap.ui.core.plugin.DeclarativeSupport"
```

SAPUI5 then requires \(loads\) the plugin `sap.ui.core.plugin.DeclarativeSupport`. When started, the plugin parses and enhances special HTML tags in the HTML document. The complete bootstrap script tag for SAPUI5 \(based on a CDN version\) looks as follows:

```html
<script id="sap-ui-bootstrap"
  type="text/javascript"
  src="resources/sap-ui-core.js"
  data-sap-ui-theme="sap_belize"
  data-sap-ui-libs="sap.m"
  data-sap-ui-modules="sap.ui.core.plugin.DeclarativeSupport"
  >
</script>
```

