<!-- loio5c2bc2ea8a7e482e968124959354d736 -->

# Create Mode as an External App

The *Create* button can trigger navigation to an external SAP Fiori launchpad-based app which manages creation of business objects.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4. For information about navigating to an external app in create mode in SAP Fiori elements for OData V2, see the [Additional Features in SAP Fiori Elements for OData V2](handling-of-the-preferredmode-parameter-bfaf3cc.md#loiobfaf3ccf3d6d4735990cc793b21f5529__V2_section) section in [Handling of the preferredMode Parameter](handling-of-the-preferredmode-parameter-bfaf3cc.md).

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

