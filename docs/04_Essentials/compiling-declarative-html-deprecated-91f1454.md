<!-- loio91f1454b6f4d1014b6dd926db0e91070 -->

# Compiling Declarative HTML \(deprecated\)

SAPUI5 provides a plugin for controls that are defined as declarative markup on startup time.

> ### Caution:  
> Deprecated as of UI5 version 1.120, replaced by [XML View](xml-view-91f2928.md).

To compile the declarative UI markup deferred, for example, when the markup is dynamically loaded and added to the DOM you can call the `sap.ui.core.plugin.DeclarativeSupport`.compile method, see the following code snippet:

```html
<div id="button">
  <div data-sap-ui-type="sap.m.Button" data-text="This button is added dynamically"></div>
</div>

<script>
  sap.ui.core.plugin.DeclarativeSupport.compile(document.getElementById("button"));
</script>
```

