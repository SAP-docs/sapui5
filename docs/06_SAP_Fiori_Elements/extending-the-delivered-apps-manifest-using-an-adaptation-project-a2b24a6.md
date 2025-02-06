<!-- loioa2b24a69baef4b91af2293ccc6b5871f -->

# Extending the Delivered Apps Manifest Using an Adaptation Project

You can extend the SAP-delivered list report and object page apps that are developed on SAP Fiori elements.

The delivered apps can be extended by adding a new node in the object page or by modifying the manifest configurations settings through the adaptation project. By configuring the adaptation project manifest, you can enable the following features:

-   Add a new subobject page for the newly extended node.

-   Define configurations for the newly extended node or existing pages.

-   Perform additional configurations that can be modified for an application.




<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_w5x_1vf_zcc"/>

## Additional Features in SAP Fiori Elements for OData V2



### Prerequisites

You're working on SAPUI5 1.108 or higher \(ABAP platform 2021 or higher\).

In the manifest file of the app, the pages and subpages section must be specified in the object format and not in the array format, within `sap.ui.generic.app`.



### Adding a New Subobject Page for the Newly Extended Node

As a prerequisite, the new node must be added in the back end, and the metadata properties for the new node must be available through service metadata. A detail page for the new node can be added using the following definition in the `manifest.appdescr_variant` file:

> ### Sample Code:  
> ```
> {
>     "changeType": "appdescr_ui_generic_app_addNewObjectPage",
>     "content": {
>             "parentPage": {
>                     "component": "sap.suite.ui.generic.template.ObjectPage",
>                     "entitySet": "C_STTA_SalesOrder_WD_20"
>                 },
>             "childPage": {
>                     "id": "customer.ObjectPage|to_extendedNode",
>                     "definition": {
>                             "navigationProperty": "to_extendedNode",
>                             "entitySet": "C_STTA_ExtendedNode"
>                     }
>             }
>       }
> }
> ```

You must add the parameters in the `changeType`, `layer`, `parentPage`, and `childPage` sections for the mergers to be executed.

-   `changeType` defines the merger to be invoked.

-   `parentPage` and `entitySet` are used to identify the location in the manifest file where the child page has to be added.

-   `childPage` defines the extended node to be added to the manifest, where the `id` is the unique page key and the `definition` object holds the `navigationProperty` and `entitySet` of the extended node. The `childPage.id` name should have a prefix using the target layer name. If the target layer name is `customer` or `customer_base`, add the `customer.` prefix. However, if the target layer name is `vendor`, a prefix is not required.




### Defining Configurations for a Node

The following sample code is a definition to set the `createMode` and table type for a node in the object page. It must be added to the `manifest.appdescr_variant` file of the adaptation project.

> ### Sample Code:  
> ```
> {
>     "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>     "content": {
>             "parentPage": {
>                     "component": "sap.suite.ui.generic.template.ObjectPage",
>                     "entitySet": "C_STTA_SalesOrder_WD_20"
>                     },
>             "entityPropertyChange": {
>                     "propertyPath": "component/settings/sections/extendedFacetId",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                             "createMode": "inline",
>                             "tableSettings": {
>                                     "tableType": "GridTable"
>                                 }
>                         }
>                 }
>         }
> }
> ```

You must add the parameters in the `changeType`, `parentPage`, and `entityPropertyChange` sections for the mergers to be executed.

-   `changeType` defines the merger to be invoked.

-   `layer` defines the target layer.

-   `parentPage` and `entitySet` are used to identify the location in the manifest where the setting has to be changed.

-   `entityPropertyChange` contains the following:

    -   `propertyPath` is the path in the manifest where the changes have to be added. For example, `component/settings/sections/extendedFacetId`, where `extendedFacetId` is the reference facet ID of the new node. If you are modifying an existing node using the adaptation project, you must specify the facet ID of the section.

    -   `operation` should be set as `UPSERT`.

    -   `propertyValue` defines the new properties to be included in the manifest.



For detailed steps explaining how to work in an adaptation project, see the *Procedure* section of [Extending Delivered Apps Using Adaptation Extensions](extending-delivered-apps-using-adaptation-extensions-52fc48b.md).



### Additional Configurations That Can Be Modified for an Application

You can perform additional configurations that can be modified for an application using the following settings:

-   Application-level settings

    -   `createMode`

    -   `flexibleColumnLayout`

    -   `inBoundParameters`

    -   `externalNavigationSettings`


-   List report page

    -   `filterSettings`

    -   `dataLoadSettings`

    -   `enableTableFilterInPageVariant`

    -   `condensedTableLayout`

    -   `tableSettings`


-   Object page

    -   `editableHeaderContent`

    -   `showRelatedApps`

    -   `tableSettings`



Define the following definition in the `manifest.appdescr_variant` file as part of the `content[]`:

> ### Sample Code:  
> Modifying `createMode` and `flexibleColumnLayout`
> 
> ```
> {
>     "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>     "content": {
>        "parentPage": {
>          "component": "sap.suite.ui.generic.template"
>        },
>        "entityPropertyChange": {
>          "propertyPath": "settings",
>          "operation": "UPSERT",
>          "propertyValue": {
>             "tableSettings": {
>                 "createMode": "creationRows"
>          },
>        "flexibleColumnLayout": {
>            "defaultTwoColumnLayoutType": "TwoColumnsMidExpanded",
>            "defaultThreeColumnLayoutType": "ThreeColumnsEndExpanded"
>          }
>        }
>      }
>    }
>  }
> ```

> ### Sample Code:  
> Modifying `externalNavigationSettings` and `inBoundParameters`
> 
> ```
> {
>    "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>    "content": {
>      "parentPage": {
>        "component": "sap.suite.ui.generic.template"
>      },
>      "entityPropertyChange": {
>        "propertyPath": "settings",
>        "operation": "UPSERT",
>        "propertyValue": {
>          "externalNavigationSettings": {
>            "defaultOutboundSettings": {
>              "refreshStrategyOnAppRestore": {
>                "entitySets": {
>                  "STTA_C_MP_Product": "self"
>                }
>              }
>            }
>          },
>          "inboundParameters": {
>            "Supplier": {
>              "useForCreate": true
>            }
>          }
>        }
>      }
>    }
>  }
> ```

> ### Sample Code:  
> Adding `filterSettings` with `historySettings` and `dateSettings`
> 
> ```
> {
>      "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>      "content": {
>          "parentPage": {
>              "component": "sap.suite.ui.generic.template.ListReport",
>              "entitySet": "STTA_C_MP_Product"
>          },
>          "entityPropertyChange": {
>              "propertyPath": "component/settings",
>              "operation": "UPSERT",
>              "propertyValue": {
>                  "filterSettings": {
>                      "historySettings": {
>                          "historyEnabled": "enabled"
>                      },
>                      "dateSettings": {
>                          "useDateRange": false,
>                          "selectedValues": "DAYS,WEEK,MONTH,DATERANGE",
>                          "fields": {
>                              "SemanticDate1": {
>                                  "selectedValues": "TOMORROW",
>                                  "exclude": true
>                              },
>                              "SemanticDate2": {
>                                  "defaultValue": {
>                                      "operation": "LASTYEAR"
>                                  }
>                              }
>                          }
>                      }
>                  }
>              }
>          }
>      }
>  }
> ```

> ### Sample Code:  
> Adding `enableTableFilterInPageVariant`, `dataLoadSettings`, and `condensedTableLayout`
> 
> ```
> {
>         "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>         "content": {
>                 "parentPage": {
>                      "component": "sap.suite.ui.generic.template.ListReport",
>                      "entitySet": "STTA_C_MP_Product"
>                  },
>                 "entityPropertyChange": {
>                      "propertyPath": "component/settings",
>                      "operation": "UPSERT",
>                      "propertyValue": {
>                          "enableTableFilterInPageVariant":true,
>                          "dataLoadSettings": {
>                              "loadDataOnAppLaunch": "never"
>                          },
>                          "condensedTableLayout":true
>             }
>         }
>     }
> }
> 
> ```

> ### Sample Code:  
> Adding or modifying `tableSettings` such as `type`, `multiselect`, `selectAll`, and `multiEdit`
> 
> ```
> {
>              "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>              "content": {
>                  "parentPage": {
>                      "component": "sap.suite.ui.generic.template.ListReport",
>                      "entitySet": "STTA_C_MP_Product"
>                  },
>                  "entityPropertyChange": {
>                      "propertyPath": "component/settings/tableSettings",
>                      "operation": "UPSERT",
>                      "propertyValue": {
>                          "type": "GridTable",
>                          "multiSelect": true,
>                          "selectAll": false,
>                          "multiEdit": {
>                              "enabled": true
>                 }
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> Adding fields to the `createWithDialogParameter` dialog
> 
> ```
> {
>                  "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>                  "content": {
>                      "parentPage": {
>                          "component": "sap.suite.ui.generic.template.ListReport",
>                          "entitySet": "STTA_C_SO_SalesOrder_ND"
>                      },
>                      "entityPropertyChange": {
>                          "propertyPath": "component/settings/tableSettings/createWithParameterDialog/fields",
>                          "operation": "UPSERT",
>                          "propertyValue": {
>                              "CurrencyCode":{"path":"CurrencyCode"}
>                              
>                          }
>                      }
>                  }
>              }
> ```

> ### Sample Code:  
> Modifying `editableHeaderContent` and `ShowRelatedApps`
> 
> ```
> {
>             "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>             "content": {
>                 "parentPage" : {
>                     "component": "sap.suite.ui.generic.template.ObjectPage",
>                     "entitySet": "STTA_C_MP_Product"
>                 },
>                 "entityPropertyChange": {
>                     "propertyPath": "component/settings",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                         "editableHeaderContent":false,
>                         "showRelatedApps":false
>                     }
>                 }
>                 
>             }
>     }
> 
> ```

> ### Sample Code:  
> Adding `createMode` for an object page
> 
> ```
> {
>  "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>  "content": {
>         "parentPage": {
>             "component": "sap.suite.ui.generic.template.ObjectPage",
>             "entitySet": "STTA_C_SO_SalesOrder_ND"
>             },
>         "entityPropertyChange": {
>             "propertyPath": "component/settings/tableSettings",
>             "operation": "UPSERT",
>             "propertyValue": {
>                 "createMode": "creationRows",
>                 "multiSelect": true,
>                 "selectAll": false
>             }
>         }
>     }
> }
> ```

> ### Note:  
> As part of `filterSettings`, adding or modifying `filter[]` configurations per field and `customDateRangeImplementation`, is not supported.

You must add the parameters in the `changeType`, `parentPage`, and `entityPropertyChange` for the mergers to be executed.

-   `changeType` defines the merger to be invoked.

    `changeType`: `appdescr_sap_ui_generic_app_changePageConfiguration.`

-   `parentPage` and `entitySet` are used to identify the location in the manifest where the setting has to be changed.

-   `entityPropertyChange` contains the following:

    -   `propertyPath` the path in the manifest where the changes have to be added. For example, `component/settings/`.

    -   `operation` should be set as `UPSERT`.

    -   `propertyValue` defines the new properties to be included in the manifest.



**Configuring a Selection Presentation Variant and Providing Corresponding Definition**

Define the following definition in the `manifest.appdescr_variant` file as part of the `content[]`:

> ### Sample Code:  
> Adding `annotationPath` to include a selection presentation variant in the list report page
> 
> ```
> {
>             "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>             "content": {
>                 "parentPage" : {
>                     "component": "sap.suite.ui.generic.template.ListReport",
>                     "entitySet": "STTA_C_MP_Product"
>                 },
>                 "entityPropertyChange": {
>                     "propertyPath": "component/settings",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                        "annotationPath": "com.sap.vocabularies.UI.v1.SelectionPresentationVariant#DefaultSPV"
>                     }
>                 }
>             }
>     }
> 
> ```

You must add the parameters in the `changeType`, `parentPage`, and `entityPropertyChange` for the mergers to be executed.

-   `changeType` defines the merger to be invoked

    `changeType`: `appdescr_sap_ui_generic_app_changePageConfiguration`

-   `parentPage` and `entitySet` are used to identify the location in the manifest where the setting has to be changed

-   `entityPropertyChange` contains the following:

    -   `propertyPath` the path in the manifest where the changes have to be added. For example, `component/settings/`

    -   `operation` should be set as `UPSERT`

    -   `propertyValue` defines the new properties to be included in the manifest



The definition of a selection presentation variant must be maintained by creating a local annotation file in the adaptation project. You can do so by following the procedure described in [Adding Annotation Files](https://help.sap.com/viewer/584e0bcbfd4a4aff91c815cefa0bce2d/Cloud/en-US/ef009e3d533940f6b93b6996af486389.html).

Once the annotation file is added, you can continue as follows:

> ### Sample Code:  
> ```
> <. Also, while running the app you should first use my
> 				workspace in the configuration. <edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
> 	<edmx:Reference
> 		Uri="https://fiorielementsqh3815snapshot-xdf25c17a.dispatcher.neo.ondemand.com/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName='%2FIWBEP%2FVOC_COMMON',Version='0001',SAP__Origin='LOCAL')/$value">
> 		<edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="Common"/>
> 	</edmx:Reference>edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
> 	<edmx:Reference
> 		Uri="https://fiorielementsqh3815snapshot-xdf25c17a.dispatcher.neo.ondemand.com/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName='%2FIWBEP%2FVOC_COMMON',Version='0001',SAP__Origin='LOCAL')/$value">
> 		<edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="Common"/>
> 	</edmx:Reference>
> 	<edmx:Reference Uri="/sap/bc/ui5_ui5/ui2/ushell/resources/sap/ushell/components/factsheet/vocabularies/UI.xml">
> 		<edmx:Include Alias="UI" Namespace="com.sap.vocabularies.UI.v1"/>
> 	</edmx:Reference>
> 	<edmx:Reference Uri="http://docs.oasis-open.org/odata/odata/v4.0/cs01/vocabularies/Org.OData.Capabilities.V1.xml">
> 		<edmx:Include Alias="Capabilities" Namespace="Org.OData.Capabilities.V1"/>
> 	</edmx:Reference>
> 	<edmx:Reference
> 		Uri="/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName='%2FIWBEP%2FVOC_COMMUNICATION',Version='0001',SAP__Origin='LOCAL')/$value">
> 		<edmx:Include Namespace="com.sap.vocabularies.Communication.v1" Alias="Communication"/>
> 	</edmx:Reference>
> 	<edmx:Reference Uri="http://docs.oasis-open.org/odata/odata/v4.0/cs01/vocabularies/Org.OData.Measures.V1.xml">
> 		<edmx:Include Alias="Measures" Namespace="Org.OData.Measures.V1"/>
> 	</edmx:Reference>
> 	<edmx:Reference Uri="/sap/opu/odata/sap/STTA_PROD_MAN/$metadata">
> 		<edmx:Include Alias="STTA_PROD_MAN" Namespace="STTA_PROD_MAN"/
> ```

```
Including newly createdPropertyValue Property="Label" String="New Activate Button"/> <PropertyValue Property="Action" String="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductActivation"/> <PropertyValue Property="InvocationGrouping" EnumMember="UI.OperationGroupingType/ChangeSet"/> </Record> <Record Type="UI.DataField"> <PropertyValue Property="Value" Path="ProductPictureURL"/> <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/> </Record> <Record Type="UI.DataField"> <PropertyValue Property="Value" Path="Supplier"/> <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/> </Record> <Record Type="UI.DataField"> <PropertyValue Property="Label" String="Product-ID/-Text"/> <PropertyValue Property="Value" Path="ProductForEdit"/> <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/> </Record> <Record Type="UI.DataField"> <PropertyValue Property="Label" String="Width"/> <PropertyValue Property="Value" Path="Width"/> <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/> </Record> </Collection> </Annotation> <Annotation Term="UI.SelectionFields"> <Collection> <PropertyPath>Width</PropertyPath> </Collection> </Annotation> <Annotation Term="UI.SelectionVariant" Qualifier="FilterDefaults"> <Record> <PropertyValue Property="Parameters"> <Collection></Collection> </PropertyValue> <PropertyValue Property="SelectOptions"> <Collection> <Record Type="UI.SelectOptionType"> <PropertyValue Property="PropertyName" PropertyPath="Width"/> <PropertyValue Property="Ranges"> <Collection> <Record> <PropertyValue Property="Sign" EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeSignType/I"/> <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/BT"/> <PropertyValue Property="Low" String="1.0"/> <PropertyValue Property="High" String="20.00"/> </Record> </Collection> </PropertyValue> </Record> </Collection> </PropertyValue> </Record> </Annotation> </Annotations> </Schema> </edmx:DataServices> </edmx:Edmx> {
            "changeType": "appdescr_app_addAnnotationsToOData",
            "content": {
                "dataSourceId": "mainService",
                "annotations": ["customer.localAnnotationsNew"],
                "annotationsInsertPosition": "END",
                "dataSource": {
                    "customer.localAnnotationsNew": {
                        "uri": "changes/annotations/annotations.xml",
                        "type": "ODataAnnotation"
                    }
                }
            }
        }

```



### Including a Reuse Component in an Adaption Project

This section describes the change mergers that are used to include a reuse component in an adaptation project. The following example shows an `Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType"`.

As a prerequisite, the reuse component must be present in the target backend system. Reuse component is to be cloned to the workspace and its library reference must be added in `</edmx:Reference> <edmx:Reference Uri="http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/vocabularies/Org.OData.Core.V1.xml"> <edmx:Include Alias="Core" Namespace="Org.OData.Core.V1"/> </edmx:Reference> <edmx:DataServices> <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm"neo-app.json`.

> ### Note:  
> You must follow corresponding reuse component configuration for the application to work. For example, attachment reuse component needs few parameters to be added in the `neo-app.json`. For more information, see [Attachments Development Guideline](https://wiki.wdf.sap.corp/wiki/display/PLMOH/Attachments+Development+Guideline).

The following parameters must be included as `headerWhiteList` in the consuming application's `neo-app.json` file.

> ### Sample Code:  
> `headerWhiteList`
> 
> ```
> "headerWhiteList": [
>        "objecttype",
>        "objectkey",
>        "slug",
>        "MarkForDeletion",
>        "documentType",
>        "documentNumber",
>        "documentVersion",
>        "documentPart",
>        "semanticobjecttype"
> ]
> 
> ```

These changes are to be added to `manifest.appdescr_variant` file in the adaptation project.

> ### Sample Code:  
> ```
> {
>     "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>     "content": {
>         "parentPage": {
>             "component": "sap.suite.ui.generic.template.ObjectPage",
>             "entitySet": "C_PaymentRunPlanTP"
>         },
>         "entityPropertyChange": {
>             "propertyPath": "embeddedComponents",
>             "operation": "UPSERT",
>             "propertyValue": {
>                 "simple::Attachments": {
>                     "id": "simple::Attachments",
>                     "componentUsage": "attachmentReuseComponent",
>                     "title": "Attachment",
>                     "settings": {
>                         "mode": "C",
>                         "objectType": "SCASE",
>                         "objectKey": "{PaymentRunPlanName}",
>                         "isGuid": true
>                     }
>                 }
>             }
>         }
>     }
> },
> 
> // Specifies the Component usage reference
> {
>     "changeType": "appdescr_ui5_addComponentUsages",
>     "content": {
>         "componentUsages": {
>             "attachmentReuseComponent": {
>                 "name": "sap.se.mi.plm.lib.attachmentservice.attachment.components.stcomponent",
>                 "settings": {}
>             }
>         }
>     }
> },
> {
>     "changeType": "appdescr_ui5_addLibraries",
>     "content": {
>         "libraries": {
>             "sap.se.mi.plm.lib.attachmentservice": {
>                 "minVersion": "Active",
>                 "lazy": true
>             }
>         }
>     }
> },
> ```



<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_qmw_cxf_zcc"/>

## Additional Features in SAP Fiori Elements for OData V4

For information about how to extend the delivered apps manifest for SAP Fiori elements for OData V4, see [Creating the Project](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/072f566ed1d845b6aa41cb01057700d5.html) in the User Guide for SAP Fiori tools.

