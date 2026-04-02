<!-- loio5c2bc2ea8a7e482e968124959354d736 -->

# Create Mode as an External App

You can enable the *Create* button to trigger navigation to an external SAP Fiori launchpad-based app which manages the creation of business objects.

You can enable the *Create* button in the table settings by setting the creation mode to `External` and providing the outbound parameter as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "controlConfiguration": {
>     "/@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "creationMode": {
>                 "name": "External",
>                 "outbound": "MyExternalApp"
>             }
>         }
>     }
> }
> ```

The outbound parameter is used to identify the target in the `outbounds` section of the `manifest.json` file. The `semanticObject` and `action` parameters are mandatory. They ensure correct navigation to the target application. The context of the source application is provided when performing navigation.

You can define additional parameters in the `manifest.json` file. These parameters are provided to the target application. In the following example, an additional parameter `MyParam` is provided with the value `myValue`:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.app": {
>     "id": "DraftsManage",
>     "type": "application",
>     ...
>     "crossNavigation": {
>         "outbounds": {
>             "MyExternalApp": {
>                 "semanticObject": "mySemanticObject",
>                 "action": "myAction",
>                 "parameters": {
>                     "MyParam": {
>                         "value": {
>                             "value": "myValue",
>                             "format": "plain"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

