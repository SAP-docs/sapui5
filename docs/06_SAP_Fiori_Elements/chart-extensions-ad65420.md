<!-- loioad65420dcb7744c39844b6fe2c325773 -->

# Chart Extensions

Define custom actions for a chart by configuring the descriptor and annotation files.



> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



## onBeforeRebindChartExtension

Use the `onBeforeRebindChartExtension` chart support controller extension to define application-specific actions. This allows you to bind additional parameters, such as custom filters or chart queries.

In the app-descriptor file, define the `sap.ui.controllerExtensions` and extend the ALP controller `sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage` as shown here:

```
"sap.ui5": {
    "_version": "1.1.0",
	…
	…
"extends": {
		"extensions": {
		"sap.ui.controllerExtensions": {
			"sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage": {
				"controllerName": "sap.poc.ftu.apps.alr.ext.controller.AnalyticalListPageExt",
				"sap.ui.generic.app": {
					…
					…
```

Define the extended behavior in the extension method. This enables ALP to pass the event object for extracting controls and other details.

```

sap.ui.define([], function() {
    return {
        onBeforeRebindChartExtension: function(oEvent) {
            alert('onBeforeRebindChartExtension called!');
        }
    }
})

```

**Related Information**  


[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

