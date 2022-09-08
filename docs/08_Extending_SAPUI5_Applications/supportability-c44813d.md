<!-- loioc44813ddee80464985d62c1f852b4a17 -->

# Supportability

In case of problems or errors in the custom application, several options exist that support you in resolving the issues.



## Disabling Extensions/Customizing

If a customized application does not run properly, you can disable the customizing. In a support case, for example, you can set a breakpoint early in the `sap-ui-core.js` and then execute the following code in the browser developer tool console:

```js
 
  window["sap-ui-config"] = window["sap-ui-config"] ||{};
  window["sap-ui-config"]["xx-disableCustomizing"] = true;
```

> ### Note:  
> For security reasons, it is not possible to use a URL parameter.



## Using the Log

The console log contains information about the processing of customizing or extensibility information. Depending on the importance of the respective information, different log levels are used. To enable a certain log level, execute the following code in the browser console:

```js

// "Log" required from module "sap/base/Log"
Log.setLevel(Log.Level.INFO)
```

As an alternative, you can set the log level to `INFO` in the support popup if you want to see all messages of level "INFO" or more important.

The following information is provided per log level:

-   `WARNING`/`ERROR`: Any critical or error situation; such messages must be checked because something may have gone wrong

-   `INFO`: Information about successful customizing activities, such as applying a view extension or modifying a control property

-   `DEBUG`: Information about "non-activities", for example, if no extension configured for an extension point was found; this provides comprehensive information for each situation where an extension might be configured. Exception: Non-existing control property modifications are **not** logged at this log level \(see below how you can enable this\). In addition, a complete dump of the extensibility configuration is logged when it is activated.


