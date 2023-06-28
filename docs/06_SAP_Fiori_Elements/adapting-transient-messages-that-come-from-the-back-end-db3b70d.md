<!-- loiodb3b70d6bab2485796128cb792429a00 -->

# Adapting Transient Messages that Come from the Back End

You can use an extension point to adapt transient messages that come from the back-end system for the list report and object page as well as for the analytical list page.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

The extension point \(`adaptTransientMessageExtension`\) is hit always before the transient message is displayed. If your app uses the flexible column layout, the extension point of the list report, the extension point of the object page, and the analytical list page extension point are hit. Note that you have to ensure that the message model has been adapted for list report, object page, and analytical list page.

Perform these steps:

1.  Register your extension in the `manifest.json`, as follows:

    ```
    "extends": {
       "extensions": {
          ... 
          "sap.ui.controllerExtensions": { 
             ...
             "sap.suite.ui.generic.template.ListReport.view.ListReport": { 
                ... 
                "controllerName": "STTA_MP.ext.controller.ListReportExtension",
                ...
             }
          } 
          ...
    
    ```

2.  Implement your controller extension.

    You have to implement the `adaptTransientMessageExtension` function within the list report controller extension, the object page controller extension, or the analytical list page extension, respectively.

    ```
    adaptTransientMessageExtension:function() {
    		if(sap.ui.getCore().getMessageManager().getMessageModel().oData.length) {
    				var msgText = "This message has been added through List Extension" ;
    				var consolidatedMessage = new sap.ui.core.message.Message({
    					message: msgText,
    					type: sap.ui.core.MessageType.Information,
    					target: '',
    					persistent: true
    				});
    				sap.ui.getCore().getMessageManager().addMessages(consolidatedMessage);
    		}		
    }
    
    ```


> ### Note:  
> The extension point is only available for transient messages. Do not make any changes to state messages from the message model \(`sap.ui.getCore().getMessageManager().getMessageModel()`\).
> 
> Do not alter the target of any message from the message model as this may cause the message model services to stop working.

