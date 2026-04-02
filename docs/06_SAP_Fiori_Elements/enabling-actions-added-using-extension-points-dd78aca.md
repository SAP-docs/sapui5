<!-- loiodd78acad2f164560ad6b0e24ed2cd8ee -->

# Enabling Actions Added Using Extension Points

You can control the enablement of actions added using extension points on the list report page and the object page through certain settings in the `manifest.json` file.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

To enable actions based on a selection, set the property `enabled` of the custom action in the `manifest.json`file.

To enable an action on the list report page only upon selection of one row in the table, set the property `enabled` of the action in the `manifest.json` file as follows:

> ### Sample Code:  
> ```
> "myCustomEnablement": {
>      "press": "SalesOrder.ext.CustomActions.navigateExternal",
>      "enabled": "SalesOrder.ext.CustomActions.enabledForCompletedOnly",
>      "text": "Enabled for Completed"
> }
> ```

> ### Sample Code:  
> ```
> enabledForCompletedOnly: function(oBindingContext, aSelectedContexts) {
>    if (aSelectedContexts && aSelectedContexts.length === 1) {
>       return true;
>    }
>     
>     return false;
> }
> ```



<a name="loiodd78acad2f164560ad6b0e24ed2cd8ee__section_irc_zmm_d4b"/>

## Code Samples



### List Report Page \(Action in Table Header\)

The following code sample shows an example of how to set up your `manifest.json` file to determine whether to enable or disable an action on the list report page:

```json

{
    "sap.ui5": {
        "routing": {
            "targets": {
                "<ListReportTargetName>": {
                    "options": {
                        "settings": {
                            "content": {
                                "header": {
                                    "actions": {
                                        "<ActionName>": {
                                            "press": "<ApplicationId.FolderName.ScriptFilename.methodName>",
                                            "visible": <true|false|handler function>,
                                            "enabled": <true|false|handler function>,
                                            "text": "{i18n>key}"                                         
                                        }
                                    }
                                }
                            }
                         }
                    }
                }
```



### Object Page \(Action in Header or Footer\)

The following code sample shows an example of how to set up your `manifest.json` file to determine whether an action is enabled in the header or footer of the object page:

```json

{
    "sap.ui5": {
        "routing": {
            "targets": {
                "<ObjectPageTargetName>": {
                    "options": {
                        "settings": {
                            "content": {
                                "header": {
                                    "actions": {
                                        "<ActionName>": {
                                            "press": "<ApplicationId.FolderName.ScriptFilename.methodName>",
                                            "visible": <true|false|handler function>,
                                            "enabled": <true|false|handler function>,
                                            "text": "{i18n>key}"                                         
                                        }
                                    }
                                }
                            }
                         }
                    }
                }
```



## Enabling Custom Action Buttons Depending on the Mode

To enable a custom action button on the object page only in edit mode, you can use a binding expression on the `ui` model.

To do so, set the property `enabled` of the action in the `manifest.json` file as follows:

> ### Sample Code:  
> ```
> enabled:"{= ${ui>/editMode} === 'Editable'}"
> 
> ```

> ### Sample Code:  
> ```json
> 
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "<ObjectPageTargetName>": {
>                     "options": {
>                         "settings": {
>                             "content": {
>                                 "header": {
>                                     "actions": {
>                                         "<ActionName>": {
>                                             "press": "<ApplicationId.FolderName.ScriptFilename.methodName>",
>                                             "visible": <true|false|handler function>,
>                                             "enabled": "{= ${ui>/editMode} === 'Editable'}",
>                                             "text": "{i18n>key}"                                         
>                                         }
>                                     }
>                                 }
>                             }
>                          }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



## Displaying Custom Action Buttons Depending on Custom Logic

You can also control the visibility of actions through a custom handler \(this is similar to the 'enablement' use case\).

> ### Sample Code:  
> `manifest.json`: Configuration for Adjusting an Annotation-Based Action
> 
> ```json
> 
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "<ObjectPageTargetName>": {
>                     "options": {
>                         "settings": {
>                             "content": {
>                                 "header": {
>                                     "actions": {
>                                         "<ActionName>": {
>                                             "DataFieldForAction::com.c_salesordermanage_sd.ArchiveSalesOrder": {
>                                             "visible": "SalesOrder.ext.CustomActions.visibleForCompletedOnly"
>                                             }
>                                         }
>                                     }
>                                 }
>                              }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> `CustomActions.js`
> 
> ```
> visibleForCompletedOnly: function (oBindingContext) {
>   if (oBindingContext) {
>     return oBindingContext.requestObject("OverallSDProcessStatus").then(function (sStatus) {
>       return sStatus === "C";
>     });
>   } else {
>     return false;
>   }
> }
> ```

> ### Remember:  
> Proceed carefully if you want to display and hide actions based on dynamic behavior that can be influenced by end users. We strongly recommend to consult the SAP Design System guidelines at [https://experience.sap.com/fiori-design-web/ui-element-states/](https://experience.sap.com/fiori-design-web/ui-element-states/).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling Actions Added Using Extension Points](enabling-actions-added-using-extension-points-3ced305.md).

