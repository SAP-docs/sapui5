<!-- loio69bed7d303e24b88a37578780c9d7ce7 -->

# Executing a Configuration

To get a preview of how your configuration looks at runtime, you can execute it using the *Execute* button on the footer of the APF Configuration Modeler. The configuration is launched in a separate browser window so that you can see the configuration and the corresponding runtime application side by side.

The configuration preview is generated using the generic APF runtime application. Since the generic APF runtime application does not support filters that use a function to determine the values, there is a restriction in previewing those filters: They are shown in the preview with all values selected by default, but it is not possible to select other values.

If a request in your configuration requires parameters or mandatory filters that will be handed over by another application in a productive system, for example, by a Smart Business KPI tile, the preview will not work properly. To simulate that the required parameters are handed over to the app, you can configure hidden filters and put them in front of all other filters. This ensures that the preview shows the correct data and you can test your application. The hidden filters do not show up on the runtime user interface. If a context value is handed over from outside at a later stage, this context value will take precedence over the default value in the configuration of the hidden filter, so you do not even have to remove the hidden filter.

