<!-- loiodd78acad2f164560ad6b0e24ed2cd8ee -->

# Enabling Actions Added Using Extension Points

You can control the enablement of actions added using extension points in the list report and object page through certain settings in the `manifest.json` file.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



## Additional Features in SAP Fiori Elements for OData V2

In the list report and in tables on the object page, you can specify that a user must make a selection before an action button is enabled. In addition, you can use the `applicablePath` setting for the action, which will then use data from the back-end system to determine whether the action is valid for the selection, and thus whether the button should be enabled or disabled.

If more than one row is selected in the list report or table, or if one `applicablePath` setting from a selection evaluates to `true`, the action button will be enabled. The back-end system must then return the appropriate message for cases in which the action cannot be performed.

When an action is placed in the header or footer of the object page, it is enabled by default. In this case, the actions consider only the `applicablePath` setting for the product represented by the object page, as in this instance the object page itself is considered the selection. Therefore, when the `applicablePath` for the product evaluates to `false`, the action button is hidden \(not visible\) on the object page.

> ### Note:  
> Using the `applicablePath` setting is optional. If you do not use it, the action is always enabled.



### Code Samples

To set up and control the display of your actions, in the `manifest.json` file, use the properties `requiresSelection` and `applicablePath`.

**List Report \(Action in Table Header\)**

The following code sample shows how to enable an action based on a row selection and an applicable path

```xml

"sap.ui5": {
   "extends": {
      "extensions": {
         "sap.ui.controllerExtensions": {
            "sap.suite.ui.generic.template.ListReport.view.ListReport": {
               "controllerName": "my_app.ext.controller.ListReportExtension",
               "sap.ui.generic.app": {
                  "<entity set>": {
                     "EntitySet": "<entity set>",
                     "Actions": {
                        "<Action 1>": {
                           "id": "<id>",
                           "text": "<button text>",
                           "press": "<handler function>",
                           "requiresSelection": true,
                           "applicablePath": "<entity type property>"
                        },
                        "<Action 2>": {
                           "id": "<id>",
                           "text": "<button text>",
                           "press": "<handler function>",
                           "requiresSelection": true
                        }
                     }
                  }
               }
            }
         }
      }
   }
}


```

**Object Page \(Action in Header or Table Within a Section\)**

The following code sample shows examples of how to set up your `manifest.json` for application-specific actions in the object page header and table toolbar button in a section. The enable/disable behavior of the button is determined by the applicable path and row selection.

```xml

"sap.ui5": {
   "extends": {
      "extensions": {
         "sap.ui.controllerExtensions": {
            "sap.suite.ui.generic.template.ObjectPage.view.Details#my_app::sap.suite.ui.generic.template.ObjectPage.view.Details:: <entity set>":  {
               "controllerName": "my_app.ext.controller.DetailsExtension",
               "sap.ui.generic.app": {
                  "<entity set>": {
                     "EntitySet": "<entity set>",
                     "Header": {
                        "Actions": {
                           "<Action 1>": {
                              "id": "<id>",
                              "text": "<button text>",
                              "press": "<handler function>",
                              "applicablePath": "<entity type property>"
                           }
                        }
                     },
                     "Sections": {
                        "<entity type association>::com.sap.vocabularies.UI.v1.LineItem": {
                        "id": "<SmartTable Facet ID>",
                           "Actions": {
                              "<Action 2>": {
                                 "id": "<id>",
                                 "text": "<button text>",
                                 "press": "<handler function>",
                                 "requiresSelection": true,
                                 "applicablePath": "<entity type property>"
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}

```



### Displaying Custom Action Buttons Depending on the Mode

In case of draft-enabled applications, if the draft information of the object page needs to be found out in the controller / view extension \(if the object page is an own draft version or an active version with an existing own draft\), you can use the `DraftAdministrativeData` navigation property. For example, you might want to show a custom action button on the object page only in edit mode.

> ### Sample Code:  
> ```
> 
> onAfterRendering: function(oEvent) {
>     var oButton = sap.ui.getCore().byId("STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--action::ObjectPageCustomAction");
>     oButton.bindElement("DraftAdministrativeData");
>     oButton.bindProperty("visible", {
>         path: "DraftIsCreatedByMe"
>     });
> },
> 
> ```



<a name="loiodd78acad2f164560ad6b0e24ed2cd8ee__section_irc_zmm_d4b"/>

## Additional Features in SAP Fiori Elements for OData V4

To enable actions based on a selection, set the property `enabled` of the custom action in the `manifest.json`.

To enable an action in the list report only upon selection of one row in the table, set the property `enabled` of the action in the `manifest.json`, as follows:

> ### Sample Code:  
> ```
> "enabled": "SalesOrder.custom.CustomActions.enabledForCompletedOnly"
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



### Code Samples

**List Report \(Action in Table Header\)**

The following code sample shows an example of how to set up your `manifest.json` file to determine whether to enable or disable an action in the list report:

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

**Object Page \(Action in Header or Footer\)**

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



### Enabling Custom Action Buttons Depending on the Mode

To enable a custom action button on the object page only in edit mode, you can use a binding expression on the `ui` model.

To do so, set the property `enabled` of the action in the `manifest.json` as follows:

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



### Displaying Custom Action Buttons Depending on Custom Logic

You can also control the visibility of actions via a custom handler \(this is similar to the 'enablement' use case\).

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
>                                             "visible": "SalesOrder.custom.CustomActions.visibleForCompletedOnly"
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
> Proceed carefuly if you want to display and hide actions based on dynamic behavior that can be influenced by end users. We strongly recommend to consult the SAP Fiori Design Guidelines at [https://experience.sap.com/fiori-design-web/ui-element-states/](https://experience.sap.com/fiori-design-web/ui-element-states/).

