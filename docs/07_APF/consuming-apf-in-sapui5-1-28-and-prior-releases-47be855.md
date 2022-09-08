<!-- loio47be85530a5df37ae10000000a44176d -->

# Consuming APF in SAPUI5 1.28 and Prior Releases

The following code snippet is an example of how to consume APF in a UI5 based application up until SAPUI5 1.28:

```

sap.ui.define(["sap/apf/Component"], function(Component) {
    return Component.extend("myApp.Component", {
        metadata : {
            name : <name>,
            version : <version>
        },
        /**
        * Initialize the application
        *
        * @returns
        */
        init : function() {
            // Initialize application here. No APF specific operation done here, since APF API is not yet available.
            // Call APF Component init
            Component.prototype.init.apply(this, arguments);
        },
        /**
        * Creates the application layout and returns the outer layout of APF
        *
        * @returns {sap.ui.core.Control} the content
        */
        createContent : function() {
            // Attach APF start-up callbacks
            this.getApi().setCallbackBeforeApfStartup(this.onBeforeApfStartup);
            this.getApi().setCallbackAfterApfStartup(this.onAfterApfStartup);
 
            // Prepare path to application configuration file
            var modPath = sap.ui.require.toUrl('myApp');
            var configFilePath = modPath + "/config/myApplicationConfiguration.json";
            this.getApi().loadApplicationConfig(configFilePath);
 
            // Return whatever is returned by parent (APF Component) createContent method
            return Component.prototype.createContent.apply(this, arguments);
        },

        onBeforeApfStartup: function() {       //optional
            // Code executed before APF startup
        },

        onAfterApfStartup: function() {        //optional
            // Code executed after APF startup
        },
        destroy : function() {
            // Destroy application instances

            // Call destroy on APF Component
            Component.prototype.destroy.apply(this, arguments);
        }
    });
});
```

Replace *myApp* with the application-specific namespace.

Method `this.getApi()` provides a reference to the APF instance.

When you use the start parameter `sap-apf-app-config-path`, APF executes method `loadApplicationConfig()` in the `init()` method of `sap.apf.Component`, that is, before `createContent()` of the application component is executed. APF ensures that method `loadApplicationConfig()` is executed not more than once.

The function registered through `onBeforeApfStartup` is executed after the execution of method `init()`, at the beginning of method `createContent()` of `sap.apf.Component`. This registered function is useful, for example, for defining application-specific filters.

The function registered through `onAfterApfStartup` is executed after all asynchronous startup operations have been terminated, that is, at the end of method `createContent()` of `sap.apf.Component`. This registered function is useful, for example, for adding footer content to the APF UI.



## Footer Content

You can add footer content to your APF-based application, for example, to allow users to make settings such as defining a reporting currency or adjusting the exchange rate settings.

To add footer content, attach the following APF start-up callbacks at APF API level in the `Component.js` file inside the `createContent()` method:

1.  `setCallbackBeforeApfStartup`, where you can build footer controls.

2.  `setCallbackAfterApfStartup`, where you can insert the footer content into the UI layout using the `addMasterFooterContent` API.


Footer controls need to register a listener to the `contextChanged` event of APF to listen to context changes at startup or when a saved path is opened. The event listener for the `contextChanged` event is defined as follows: `oApi.setEventCallback(oApi.constants.eventTypes.contextChanged,fnCallbackForContextChange);`



### Creating Filters for the Footer Content

To ensure that the filters you create as footer content are recognized by APF, create them in the following format:

```
var oFilter = this.oApi.createFilter();
var orExpression = oFilter.getTopAnd().addOr();
orExpression.addExpression({
    name : "<name>",
    operator : "<operator>",
    value : "<value>",
  });
```

For example, if you want to configure a filter for the exchange rate type, the filter expression looks as follows:

```
orExpression.addExpression({
    name : "P_ExchangeRateType",
    operator : "EQ",
    value : "USD", 
  });
```

Use the API `addPathFilter()` to ensure that the created filter is applied to the analysis path. When the API `addPathFilter()` is called with the filter created above as a parameter, it returns an ID. The filter can be updated using the API `updatePathFilter()` by passing the filter ID and the filter as parameters:

> ### Source Code:  
> ```
> var sFilterId = this.oApi.addPathFilter(oFilter);
> this.oApi.updatePathFilter(sFilterId, oFilter);
> 
> ```

To retrieve the filter that was applied to the analysis path, use the API getPathFilter\(\) and pass the filter ID as a parameter:

```
var oFilter = this.oApi.getPathFilter(sFilterId);
var sValue = oFilter.getInternalFilter().getFilterTerms()[0].getValue();

```



## Security Considerations

For any application extension, ensure that both the extension and its libraries are trustworthy.

**Related Information**  


[Components](../04_Essentials/components-958ead5.md "Components are independent and reusable parts used in SAPUI5 applications.")

