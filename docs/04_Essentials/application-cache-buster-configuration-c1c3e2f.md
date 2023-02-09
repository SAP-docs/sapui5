<!-- loioc1c3e2f70066465dbb794c866b933ed5 -->

# Application Cache Buster: Configuration

The configuration `data-sap-ui-appCacheBuster="./"` must be added to the bootstrap script of the application page.

The following code shows an example how the configuration is added to activate the application cache buster:

```html

<script id="sap-ui-bootstrap"
  src="resources/sap-ui-core.js"
  data-sap-ui-libs="sap.ui.core,sap.m,sap.ui.table"
  data-sap-ui-theme="sap_belize"
  data-sap-ui-appCacheBuster="./"></script>
```

The parameter `data-sap-ui-appCacheBuster` is a `string[]` which means you can pass a comma-separated list of base URLs pointing to other applications which should be considered by the Application Cache Buster. By default it should contain the base path of your local application.

These base URLs are used to load the index files.

