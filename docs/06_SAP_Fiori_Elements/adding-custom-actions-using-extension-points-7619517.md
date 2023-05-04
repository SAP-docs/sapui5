<!-- loio7619517a92414e27b71f02094bd08d06 -->

# Adding Custom Actions Using Extension Points

You can use extension points to add custom actions to the list report and the object page.



## Context

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can define custom actions for:

-   List reports \(global action\)

    For global actions, you do not have to select a line in the list report table. This type of action refers to the whole list report, for example, *Display Log*. Global actions are placed in the list report filter bar next to the *Share* button.

-   Table toolbar of the list report
-   Header of the object page
-   Table toolbar for a specific table on the object page
-   Form in a section on the object page
-   Footer bar

    > ### Note:  
    > In SAP Fiori elements for OData V4, footer bar actions are available only on the object page.


These custom actions are displayed as buttons on the UI. When the user selects the action, the system calls a handler function that can be implemented within a controller extension.

 <a name="task_q5c_vrl_d4b"/>

<!-- task\_q5c\_vrl\_d4b -->

## Additional Features in SAP Fiori Elements for OData V2



<a name="task_q5c_vrl_d4b__steps_qpd_3tl_d4b"/>

## Procedure

1.  Implement controller extension

    1.  In your app, create a `.controller.js` file for your extension.

        In the code sample below, we assume the following:

        -   App name: `my_app`

        -   File names: `MyListReportExt.controller.js` \(extending the `ListReport` controller\), `MyObjectPageExt.controller.js` \(extending the `MainObjectPage` controller\), `MySubObjectPageExt.controller.js` \(extending the `SubObjectPage` controller\). Individual Controller extensions can be created for each object page. For more information, see [Extending SAP Fiori Elements-Based Apps](extending-sap-fiori-elements-based-apps-358cf25.md).

        -   Location of controller files: `my_app/webapp/ext/controller`

    2.  In your controller extension, implement the event handler functions to be executed when the user selects the action. For example, if you want to extend the `ListReport` controller, your controller extension should look like this:

        ```xml
        
        sap.ui.define([], function() {
            return {
                onCustomAction1 : function(oEvent) { … },
                onCustomAction2 : function(oEvent) { … },
                …
            }
          })
        
        ```


    When implementing the handler functions for your custom actions, you must use the [Using the extensionAPI](using-the-extensionapi-bd2994b.md).

2.  Extend the `manifest.json` file

    In your app's `manifest.json` file, under `sap.ui5 → extends → extensions`, you can specify extensions for the `ListReport` and the `ObjectPage` controllers.

    Specify the following information and extend the manifest files as described below:


    <table>
    <tr>
    <td valign="top">

     `<entity set>` 


    
    </td>
    <td valign="top">

    Entity set that is displayed on the list report or on the object page \(for example, `SMART_C_Product`\)

    > ### Note:  
    > If you use multiple views with different `entity sets` on the list report page, `Actions` need to be defined only for main entity set. It is not possible to execute `Actions` defined for other `entity sets`.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<Action 1>`, `<Action 2>`, …


    
    </td>
    <td valign="top">

    Action names


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<id>` 


    
    </td>
    <td valign="top">

    ID to be used for the action button

    > ### Note:  
    > The values of the action name and the ID should be identical.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<button text>` 


    
    </td>
    <td valign="top">

    nullText to be displayed on the button \(typically a binding to an i18n entry, for example, null<button text\>nullnull`{i18n>MY_BUTTON_TEXT}`\)


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<handler function>` 


    
    </td>
    <td valign="top">

    Handler function that is called when the user selects the action button


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<global>`\(required\)


    
    </td>
    <td valign="top">

    Indicates whether this is a global action. The default value is `false`.

    > ### Note:  
    > If a determining property is set along with the global property, the action is rendered as a global action since this takes precedence.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Relevant only for table toolbar actions in the list report and object page: `<requiresSelection>` \(optional\)


    
    </td>
    <td valign="top">

    Property that indicates whether the action requires a selection of items. The default value is `true`.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Relevant only for list report actions and object page header actions: `<determining>` \(optional\)


    
    </td>
    <td valign="top">

    Property that indicates whether the action should be displayed in the footer of the page. The default value is `false`.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

    Relevant only for object page actions: `<SmartTable Facet ID>` 


    
    </td>
    <td valign="top">

    ID that either comes from the annotation in which you have provided an ID for the facet or that's made up of the annotation term plus the navigation property. For example: <entity type association\>::com.sap.vocabularies.UI.v1.LineItem


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<applicablePath>` 


    
    </td>
    <td valign="top">

    Determines if a custom action should be visible or enabled.


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<command>` 


    
    </td>
    <td valign="top">

    Represents the command mapped to a keyboard shortcut defined under `sap.ui.commands`

    > ### Note:  
    > If you are adding the command settings to an existing custom action, the parameter i.e., `oEvent` passed to the event handler of that custom action, is changed. It requires code adaptation if the code in the event handler depends on the `oEvent` parameter.
    > 
    > You must not use a keyboard shortcut that is provided by default as custom action keyboard shortcut. For example,  [Ctrl\] + [E\] ,  [Ctrl\] + [Enter\]  and all other default keyboard shortcut should not be overridden.


    
    </td>
    </tr>
    </table>
    
    -   Table toolbar action for the list report

        ```xml
        
        ...
        "extends": {
            "extensions": {
                "sap.ui.commands": {
                    "<ComponentName>#<Component ID without app ID prefix>": {
                        "<CustomActionCommandName>": {
                            "shortcut": "Ctrl+G"
                        }
                    }
                },
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
                                            "requiresSelection": <true| false >,
                                            "command": "<CustomActionCommandName>"
                                         },
                                        "<Action 2>": {
                                            ...
                                        },
                                    ...
                                }
                                ...
                            }
                        }
                    }
                }
            }
        }
        
        ```

        An example of `<ComponentName>#<Component ID without app ID prefix>` is `sap.suite.ui.generic.template.ListReport#sap.suite.ui.generic.template.ListReport::STTA_C_MP_Product`.

        In order to construct this string, you need the following information:

        -   `<ComponentName>`: You can use the component name used in the pages structure of `sap.ui.generic.app` namespace in the manifest. For example, `sap.suite.ui.generic.template.ListReport`.

        -   `<Component ID without app ID prefix>`: You can get the corresponding component first,that can be fetched in the following ways:

            -   Using the correspoding xml view

                For example, `sap.ui.getCore().byId('STTA_MP::sap.suite.ui.generic.template.ListReport.view.ListReport::STTA_C_MP_Product').getController().getOwnerComponent().getId()` where `STTA_MP::sap.suite.ui.generic.template.ListReport.view.ListReport::STTA_C_MP_Product` is the `XmlView` ID.

            -   Using `ComponentContainer`

                `sap.ui.getCore().byId('__xmlview0-__clone0--host').getComponent()` where `__xmlview0-__clone0--host` is the `ComponentContainer` ID.


            The result is generated in this `<app component prefix>---<local component ID>` format. For example, a`pplication-EPMProduct-manage_st-component---sap.suite.ui.generic.template.ListReport::STTA_C_MP_Product`. You can remove the app component prefix from the string along with the dashes.


    -   Action for the object page header

        ```
        ...
        "extends": {
            "extensions": {
                "sap.ui.commands": {
                    "<ComponentName>#<Component ID without app ID prefix>": {
                        "<CustomCommandName>": {
                            "shortcut": "Ctrl+K"
                        }
                    }
                },
                "sap.ui.controllerExtensions": {
                    ...
                    "sap.suite.ui.generic.template.ObjectPage.view.Details#my_app::sap.suite.ui.generic.template.ObjectPage.view.Details:: <entity set>": {
                        "controllerName": "my_app.ext.controller.DetailsExtension",
                            "sap.ui.generic.app": {
                            "<entity set>": {
                                "EntitySet": "<entity set>",
                                    "Header" : {
                                    "Actions": {
                                        "<Action 1>": {
                                            "id" : "<id>",
                                            "text" : "<button text>",
                                            "press" : "<handler function>"
                                            "applicablePath": "<property name>",
                                            "command": "<CustomCommandName>"
                                        },
                                        "<Action 2>": { 
                                            ... 
                                        }
                                    }
                                },
        ...
        
        
        ```

    -   Table toolbar action for the object page

        ```xml
        
        ...
        "extends": {
          "extensions": {
            "sap.ui.controllerExtensions": {
              ...
              "sap.suite.ui.generic.template.ObjectPage.view.Details#my_app::sap.suite.ui.generic.template.ObjectPage.view.Details:: <entity set>":  {
                "controllerName": "my_app.ext.controller.DetailsExtension",
                  "sap.ui.generic.app": {
                    "<entity set>": {
                      "EntitySet": "<entity set>",
                      "Sections": {
                        "<SmartTable Facet ID>": {
                          "id" : "<SmartTable Facet ID>",
                          "Actions": {
                            "<SmartTable Action 1>": {
                              "id" : "<id>",
                              "text" : "<button text>",
                              "press" : "<handler function>",
                              "requiresSelection": <true|false>
                            },
                            "<SmartTable Action 2>": { ... }
                          }
        ...
        
        ```

    -   Form action for the object page

        ```xml
        
        
        ...
        "extends": {
          "extensions": {
            "sap.ui.controllerExtensions": {
              ...
              "sap.suite.ui.generic.template.ObjectPage.view.Details": {
                "controllerName": "my_app.ext.controller.DetailsExtension",
                  "sap.ui.generic.app": {
                    "<entity set>": {
                      "EntitySet": "<entity set>",
                      "Sections": {
                        "<Form Facet ID>": {
                          "id": "<Form Facet ID>",
                          "Actions": {
                            "<Action 1>": {
                              "id" : "<id>",
                              "text" : "<button text>",
                              "press" : "<handler function>"
                            },
                            "<Action 2>": { ... }
                          }
        ...
        
        ```

    -   Footer bar action in the list report:

        ```xml
        
        "sap.ui5": {
           "extends": {
              "extensions": {
                 "sap.ui.controllerExtensions": {
                    "sap.suite.ui.generic.template.ObjectPage.view.Details#my_app::sap.suite.ui.generic.template.ObjectPage.view.Details:: <entity set>":  {
                       "controllerName": "my_app.ext.controller.ListReportExtension",
                       "sap.ui.generic.app": {
                          "<entity set>": {
                             "EntitySet": "<entity set>",
                             "Actions": {
                                "<Action 1>": {
                                   "id": "<id>",
                                   "text": "<button text>",
                                   "press": "<handler function>",
                                   "determining": true
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

    -   Footer bar action in the object page:

        ```xml
        
        "sap.ui5": {
           "extends": {
              "extensions": {
                 "sap.suite.ui.generic.template.ObjectPage.view.Details#my_app::sap.suite.ui.generic.template.ObjectPage.view.Details:: <entity set>":  {
                    "sap.suite.ui.generic.template.ObjectPage.view.Detail": {
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
                                      "determining": true
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

    -   List report \(global action\)

        ```
        
        ...
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
                                "id" : "<id>",
                                "text" : "<button text>",
                                "press" : "<handler function>",
                             "global": <true|false>
                             },
                             "<Action 2>": {
                                ...
                             },
                             ...
                          }
                       ...
        
        ```



 <a name="task_mpc_ktl_d4b"/>

<!-- task\_mpc\_ktl\_d4b -->

## Additional Features in SAP Fiori Elements for OData V4



<a name="task_mpc_ktl_d4b__steps_a55_xtl_d4b"/>

## Procedure

1.  Create a custom action handler function in JavaScript.

2.  Extend the `manifest.json` file.

    In your app's `manifest.json` file, under `sap.ui5 → routing → targets → <target name> → options → settings → controlConfiguration → <control> → actions`, or in the footer, add actions as follows:

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > "<Action name>": {
    >      "press": "<handler function>",
    >      "visible": <true|false|handler function>,
    >      "enabled": <true|false|handler function>,
    >      "text": "<button text>",
    >      "position": {
    >           "placement": <"Before"|"After">,
    >           "anchor": "<Anchor action name>"
    >      }
    > }
    > ```

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "myCustomEnablement": {
    >      "press": "SalesOrder.custom.CustomActions.navigateExternal",
    >      "enabled": "SalesOrder.custom.CustomActions.enabledForCompletedOnly",
    >      "text": "Enabled for Completed"
    > }
    > ```

    > ### Sample Code:  
    > Example for Handler Function:
    > 
    > ```
    > enabledForCompletedOnly: function(oBindingContext, aSelectedContexts) {
    >      if (aSelectedContexts && aSelectedContexts.length === 1) {
    >           return true;
    >      }
    >     
    >     return false;
    > }
    > ```


    <table>
    <tr>
    <th valign="top">

    Property


    
    </th>
    <th valign="top">

    Description


    
    </th>
    </tr>
    <tr>
    <td valign="top">

     `The first parameter of<Action name>` 


    
    </td>
    <td valign="top">

    Name of the custom action


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<handler function>` 


    
    </td>
    <td valign="top">

    Handler function that is called when the user selects the action button

    It is of the format `<app ID from manifest>.<Folder Name>.<Script file>.<Method Name>`


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<button text>` 


    
    </td>
    <td valign="top">

    Text to be displayed on the button \(typically a binding to an i18n entry, for example `{i18n>BUTTON_TEXT}`\)


    
    </td>
    </tr>
    <tr>
    <td valign="top">

     `<Anchor action name>` 


    
    </td>
    <td valign="top">

    Name of another action with reference to which this action should be placed.

    Here are some examples:

    > ### Sample Code:  
    > ```
    > "position": {
    >      "placement": "Before",
    >      "anchor": "DataFieldForAction::Action"
    > }
    > ```

    This places the current action before the `DataFieldForAction` by the name `Action`.

    > ### Sample Code:  
    > ```
    > "position": {
    >      "placement": "After",
    >      "anchor": "DataFieldForIntentBasedNavigation::SO::Action"
    > }
    > ```

    This places the current action after the `DataFieldForIntentBasedNavigation` by the name `Action` defined on the semantic object `SO`.


    
    </td>
    </tr>
    </table>
    
3.  Define a handler function.

    1.  For a custom action, proceed as follows:

        > ### Sample Code:  
        > ```
        > "controlConfiguration": {
        >      "<NavigationPropertyFromRootEntityType>/@com.sap.vocabularies.UI.v1.LineItem": {
        >           "actions": {
        >                "myCustomAction": {
        >                     "press": "TestApplication.custom.CustomActions.message"
        >                     ....
        >                }
        >           }
        >      }
        > }
        > ```

    2.  Create a folder called *custom* in the webapp folder of the application.

    3.  Create a file called *CustomActions.js* in the *custom* folder.

    4.  Create a method called *message* in the *CustomActions.js* file.

        The signature of the method *message* looks as follows:

        > ### Sample Code:  
        > ```
        > sap.ui.define(
        >      [],
        >      function () {
        >           "use strict";
        >           return {
        >                message: function (oContext, aSelectedContexts) {
        >                     // oContext :  is the binding context of the current entity
        >                     // aSelectedContexts : contains an array of binding contexts corresponding to
        >                     //       selected items in case of table action (or)
        >                     //
        >                     alert("message");
        >                },
        >           };
        >      }
        > );
        > ```





<a name="task_mpc_ktl_d4b__result_nkw_dbm_d4b"/>

## Results

-   Table toolbar action for the list report

    > ### Sample Code:  
    > ```xml
    > 
    > {
    >     "sap.ui5": {
    >         "routing": {
    >             "targets": {
    >                 "<ListReportTargetName>": {
    >                     "options": {
    >                         "settings": {
    >                             "controlConfiguration": {
    >                                 "@com.sap.vocabularies.UI.v1.LineItem": {
    >                                     "actions": {
    >                                         "<ActionName>": {
    >                                             "press": "<ApplicationId.FolderName.ScriptFilename.methodName>",
    >                                             "text": "<button text>",
    >                                             "enabled": <true|false|handler function>,
    >                                             "visible": <true|false|handler function>
    >                                         }
    >                                     }
    >                                 }
    >                             }
    >                          }
    >                     }
    >                 }
    > ```

-   Action for the object page header

    > ### Sample Code:  
    > ```xml
    > 
    > {
    >      "sap.ui5": {
    >           "routing": {
    >                "targets": {
    >                     "<ObjectPageTargetName>": {
    >                          "options": {
    >                                "settings": {
    >                                     "content": {
    >                                          "header": {
    >                                               "actions": {
    >                                                    "<ActionName>": {
    >                                                    }
    >                                               }
    >                                          }
    >                                     }
    >                                }
    >                          }
    >                     }
    >                }
    >           }
    >      }
    > }
    > ```

-   Table toolbar action for the object page

    > ### Sample Code:  
    > ```xml
    > "sap.ui5": {
    >      "routing": {
    >           "targets": {
    >                "<ObjectPageTargetName>": {
    >                     "options": {
    >                          "settings": {
    >                               "controlConfiguration": {
    >                                    <NavigationPropertyFromRootEntityType>/@com.sap.vocabularies.UI.v1.LineItem": {
    >                                         "actions": {
    >                                              "<ActionName>": {
    >                                              }
    >                                         }
    >                                    }
    >                               }
    >                          }
    >                     }
    >                }
    >           }
    >      }
    > }
    > ```

-   Footer bar action in the object page:

    > ### Sample Code:  
    > ```xml
    > "sap.ui5": {
    >      "routing": {
    >           "targets": {
    >                "<ObjectPageTargetName>": {
    >                     "options": {
    >                          "settings": {
    >                               "content": {
    >                                    "footer": {
    >                                         "actions": {
    >                                              "<ActionName>": {
    >                                                   ...
    >                                              }
    >                                         }
    >                                    }
    >                               }
    >                          }
    >                     }
    >                }
    >           }
    >      }
    > }
    > 
    > ```

-   List report \(global action\)

    > ### Sample Code:  
    > ```xml
    > "sap.ui5": {
    >     "routing": {
    >         "targets": {
    >             "<ListReportTargetName>": {
    >                 "options": {
    >                     "settings": {
    >                         "content": {
    >                             "header": {
    >                                 "actions": {
    >                                     "<ActionName>": {
    >                                         ...
    >                                     }
    >                                 }
    >                             }
    >                         }
    >                     }
    >                 }
    >             }
    >         }
    >     }
    > }
    > 
    > ```

-   Section action

    To define a custom action in a section, you must extend the `controlConfiguration` of any of the `FieldGroups` in that section with an actions block in a structure as follows:

    > ### Sample Code:  
    > ```xml
    > "sap.ui5": {
    >         "routing": {
    >             "targets": {
    >                 "SalesOrderManageObjectPage": {
    >                     "options": {
    >                         "settings": {
    >                             "enhanceI18n": "i18n/SalesOrderObjectPage.properties",
    >                             "controlConfiguration": {
    >                                 "@com.sap.vocabularies.UI.v1.FieldGroup#OrderData": {
    >                                     "actions": {
    >                                         "customSectionAction": {
    >                                             "press": "SalesOrder.custom.CustomActions.alert",
    >                                             "visible": true,
    >                                             "enabled": true,
    >                                             "text": "Alert",
    >                                             "position": {
    >                                                 "placement": "After",
    >                                                 "anchor": "DataFieldForIntentBasedNavigation::SalesOrder::manageInline"
    >                                             }
    >                                         },
    >                                         "sectionAction2": {
    >                                             "press": "SalesOrder.custom.CustomActions.accountDetails",
    >                                             "visible": true,
    >                                             "enabled": true,
    >                                             "text": "Display account details",
    >                                             "position": {
    >                                                 "placement": "Before",
    >                                                 "anchor": "customSectionAction"
    >                                             }
    >                                         }
    >                                     }
    >                                 }
    >                             }
    >                         }
    >                     }
    >                 }
    >             }
    >         }
    >     }
    > 
    > ```

-   Form toolbar action

    When you set `inline=true`, a given action from a `FieldGroup` shows up directly in the form toolbar instead of the section toolbar.

    > ### Sample Code:  
    > ```xml
    > "sap.ui5": {
    >     "routing": {
    >         "targets": {
    >             "SalesOrderManageObjectPage": {
    >                 "options": {
    >                     "settings": {
    >                         "controlConfiguration": {
    >                             "@com.sap.vocabularies.UI.v1.FieldGroup#OrderData": {
    >                                 "actions": {
    >                                     "customSectionAction": {
    >                                         "press": "SalesOrder.custom.CustomActions.alert",
    >                                         "visible": true,
    >                                         "enabled": false,
    >                                         "text": "Action on Form",
    >                                         "inline": true
    >                                     },
    >                                     "customSectionAction2": {
    >                                         "press": "SalesOrder.custom.CustomActions.alert",
    >                                         "visible": true,
    >                                         "enabled": true,
    >                                         "text": "Action not on Form"
    >                                     }
    >                                 }
    >                             }
    >                         }
    >                     }
    >                 }
    >             }
    >         }
    >     }
    > }
    > ```

     ![](images/Placing_Form_Actions_Inside_the_Form_Toolbar_d513ccf.png) 




You can explore and work with the coding yourself. Check out our live example in the flexible programming model explorer at [Custom Action](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customElementsOverview/customActionContent).

