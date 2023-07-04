<!-- loioa2b24a69baef4b91af2293ccc6b5871f -->

# Extending the Delivered Apps Manifest Using an Adaptation Project

You can extend the SAP-delivered list report and object page apps that are developed on SAP Fiori elements.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

The delivered apps can be extended by adding a new node in the object page or by modifying the manifest configurations settings through the adaptation project. By configuring the adaptation project manifest, you can enable the following features:

-   Add a new subobject page for the newly extended node

-   Define configurations for the newly extended node or existing pages

-   Perform additional configurations that can be modified for an application




<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_bzq_d5f_krb"/>

## Prerequisites

ABAP platform 2021 or a higher version is installed.

In the manifest file of the app, the pages and sub pages section must be specified in the object format and not in the array format, within `sap.ui.generic.app`.



<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_iz2_wcl_4pb"/>

## Adding a New Subobject Page for the Newly Extended Node

As a prerequisite, the new node must be added in the back end, and the metadata properties for the new node must be available through service metadata. A detail page for the new node can be added using the following definition in the `manifest.appdescr_variant` file.

> ### Sample Code:  
> ```
> 
> {
>                                 "changeType": "appdescr_ui_generic_app_addNewObjectPage",
>                                 "content": {
>                                          "parentPage": {
>                                                    "component": "sap.suite.ui.generic.template.ObjectPage",
>                                                    "entitySet": "C_STTA_SalesOrder_WD_20"
>                                          },
>                                          "childPage": {
>                                                    "id": "customer.ObjectPage|to_extendedNode",
>                                                    "definition": {
>                                                                                    "navigationProperty": "to_extendedNode",
>                                                               "entitySet": "C_STTA_ExtendedNode"
>                                                    }
>                                          }
>                                 }
> }
> 
> 
> ```

You must add the parameters in the `changeType`, `layer`, `parentPage`, and `childPage` sections for the mergers to be executed.

-   `changeType` defines the merger to be invoked

-   `parentPage` and `entitySet` are used to identify the location in the manifest file where the child page has to be added

-   `childPage` defines the extended node to be added to the manifest, where the `id` is the unique page key and the `definition` object holds the `navigationProperty` and `entitySet` of the extended node. The `childPage.id` name should have a prefix using the target layer name. If the target layer name is `customer` or `customer_base`, add the `customer.` prefix. However, if the target layer name is `vendor`, a prefix is not required.




<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_n1d_xdl_4pb"/>

## Defining Configurations for the Newly Extended Node

Define the following definition in the `manifest.appdescr_variant` file as part of the `content[]`:

> ### Sample Code:  
> ```
> 
> {
>                                 "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>                                 "content": {
>                                          "parentPage": {
>                                                    "component": "sap.suite.ui.generic.template.ObjectPage",
>                                                    "entitySet": "C_STTA_SalesOrder_WD_20"
>                                          },
>                                          "entityPropertyChange": {
>                                                    "propertyPath": "component/settings/sections/extendedFacetId",
>                                                    "operation": "UPSERT",
>                                                    "propertyValue": {
>                                                               "createMode": "inline",
>                                                               "tableSettings": {
>                                                                                               "tableType": "GridTable"
>                                                               }
>                                                    }
>                                          }
>                                 }
> }
> 
> ```

You must add the parameters in the `changeType`, `parentPage`, and `entityPropertyChange` sections for the mergers to be executed.

-   `changeType` defines the merger to be invoked

-   `layer` defines the target layer

-   `parentPage` and `entitySet` are used to identify the location in the manifest where the setting has to be changed

-   `entityPropertyChange` contains the following:

    -   `propertyPath` is the path in the manifest where the changes have to be added. For example, `component/settings/sections/extendedFacetId`, where `extendedFacetId` is the reference facet ID of the new node.

    -   `operation` should be set as `UPSERT`.

    -   `propertyValue` defines the new properties to be included in the manifest.



For detailed steps explaining how to work in an adaptation project, see the *Procedure* section of [Extending Delivered Apps Using Adaptation Extensions](extending-delivered-apps-using-adaptation-extensions-52fc48b.md).



<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_xss_2pr_hrb"/>

## Additional Configurations That Can Be Modified for an Application

You can perform additional configurations that can be modified for an application using:

-   `editableHeaderContent`

-   `showRelatedApps`

-   `filterSettings`

-   `condensedTableLayout`

-   `enableTableFilterInPageVariant`

-   `dataLoadSettings`

-   `tableSettings`


Define the following definition in the `manifest.appdescr_variant` file as part of the `content[]`:

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
> Adding `filterSettings` with `historySettings`
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
>                         "filterSettings": {
>                                 "historySettings": {
>                                     "historyEnabled": "enabled"
>                                 }
>                             }
>                     }
>                 }
>                 
>             }
>     }
> 
> ```

> ### Sample Code:  
> Adding `filterSettings` with `dateSettings`
> 
> ```
> {
>             "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>             "content": {
>                 "parentPage" : {
>                     "component": "sap.suite.ui.generic.template.ListReport",
>                     "entitySet": "C_STTA_SalesOrder_WD_20"
>                 },
>                 "entityPropertyChange": {
>                     "propertyPath": "component/settings",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                         "filterSettings": {
>                             "dateSettings": {
>                                 "useDateRange": false,
>                                 "selectedValues":"DAYS,WEEK,MONTH,DATERANGE",
>                                 "fields": {
>                                     "SemanticDate1": {
>                                         "selectedValues": "TOMORROW",
>                                         "exclude": true
>                                     },
>                                     "SemanticDate2": {
>                                         "defaultValue": {
>                                             "operation": "LASTYEAR"
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>                 
>             }
>             }
> 
> ```

> ### Sample Code:  
> Adding `condensedTableLayout`
> 
> ```
> {
>             "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>             "content": {
>                 "parentPage": {
>                     "component": "sap.suite.ui.generic.template.ListReport",
>                     "entitySet": "STTA_C_MP_Product"
>                 },
>                 "entityPropertyChange": {
>                     "propertyPath": "component/settings",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                         "condensedTableLayout":true
>                        
>                     }
>                 }
>             }
>           }
> 
> ```

> ### Sample Code:  
> Adding `enableTableFilterInPageVariant` and `dataLoadSettings`
> 
> ```
> {
>             "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>             "content": {
>                 "parentPage": {
>                     "component": "sap.suite.ui.generic.template.ListReport",
>                     "entitySet": "STTA_C_MP_Product"
>                 },
>                 "entityPropertyChange": {
>                     "propertyPath": "component/settings",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                         "enableTableFilterInPageVariant":true,
>                         "dataLoadSettings": {
>                             "loadDataOnAppLaunch": "never"
>                         }
>                     }
>                 }
>             }
>           }
> 
> ```

> ### Sample Code:  
> Adding/Modifying `tableSettings` such as `type`, `multiselect`, and `selectAll`
> 
> ```
> {
>             "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>             "content": {
>                 "parentPage": {
>                     "component": "sap.suite.ui.generic.template.ListReport",
>                     "entitySet": "STTA_C_MP_Product"
>                 },
>                 "entityPropertyChange": {
>                     "propertyPath": "component/settings/tableSettings",
>                     "operation": "UPSERT",
>                     "propertyValue": {
>                         "type":"GridTable",
>                         "multiSelect": true,
>                        "selectAll": false
>                     }
>                 }
>             }
>           }
> 
> ```

> ### Sample Code:  
> Adding/Modifying the `multiEdit` dialog
> 
> ```
> {
> "changeType": "appdescr_ui_generic_app_changePageConfiguration",
> 	"content": {
> 		"parentPage": {
> 			"component": "sap.suite.ui.generic.template.ListReport",
> 			"entitySet": "STTA_C_SO_SalesOrder_ND"
> 			},
> 		"entityPropertyChange": {
> 			"propertyPath": "component/settings",
> 			"operation": "UPSERT",
> 			"propertyValue": {
> 				"tableSettings":{
> 				`"multiEdit":{
> 					"enabled":true
> 					}
> 				}
> 							
> 			}
> 		}
> }
> 
> ```

> ### Sample Code:  
> Adding fields to the `createWithDialogParameter` dialog
> 
> ```
> {
>                 "changeType": "appdescr_ui_generic_app_changePageConfiguration",
>                 "content": {
>                     "parentPage": {
>                         "component": "sap.suite.ui.generic.template.ListReport",
>                         "entitySet": "STTA_C_SO_SalesOrder_ND"
>                     },
>                     "entityPropertyChange": {
>                         "propertyPath": "component/settings/tableSettings/createWithParameterDialog/fields",
>                         "operation": "UPSERT",
>                         "propertyValue": {
>                             "CurrencyCode":{"path":"CurrencyCode"}
>                             
>                         }
>                     }
>                 }
>             }
> 
> ```

> ### Note:  
> As part of the `filterSettings`, adding or modifying `filter[]` configurations per field and `customDateRangeImplementation`, is currently not supported.

You must add the parameters in the `changeType`, `parentPage`, and `entityPropertyChange` for the mergers to be executed.

-   `changeType` defines the merger to be invoked

    `changeType`: `appdescr_sap_ui_generic_app_changePageConfiguration`

-   `parentPage` and `entitySet` are used to identify the location in the manifest where the setting has to be changed

-   `entityPropertyChange` contains the following:

    -   `propertyPath` the path in the manifest where the changes have to be added. For example, `component/settings/`

    -   `operation` should be set as `UPSERT`

    -   `propertyValue` defines the new properties to be included in the manifest





### Configuring a Selection Presentation Variant and Providing Corresponding Definition

Define the following definition in the `manifest.appdescr_variant` file as part of the `content[]`:

> ### Sample Code:  
> Adding `annotationPath` to include a Selection Presentation Variant in the list report page
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
> <edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
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
> 		<edmx:Include Alias="STTA_PROD_MAN" Namespace="STTA_PROD_MAN"/>
> 	</edmx:Reference>
> 	<edmx:Reference Uri="http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs02/vocabularies/Org.OData.Aggregation.V1.xml">
> 		<edmx:Include Alias="Aggregation" Namespace="Org.OData.Aggregation.V1"/>
> 	</edmx:Reference>
> 	<edmx:Reference Uri="http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/vocabularies/Org.OData.Core.V1.xml">
> 		<edmx:Include Alias="Core" Namespace="Org.OData.Core.V1"/>
> 	</edmx:Reference>
> 	<edmx:DataServices>
> 		<Schema xmlns="http://docs.oasis-open.org/odata/ns/edm">
> 			<Annotations Target="STTA_PROD_MAN.STTA_C_MP_ProductType">
> 				<Annotation Term="com.sap.vocabularies.UI.v1.SelectionPresentationVariant" Qualifier="DefaultSPV">
> 					<Record>
> 						<PropertyValue Property="ID" String=""/>
> 						<PropertyValue Property="Text" String="Default SPV"/>
> 						<PropertyValue Property="SelectionVariant" Path="@UI.SelectionVariant#FilterDefaults"/>
> 						<PropertyValue Property="PresentationVariant" Path="@UI.PresentationVariant#ManageProducts"/>
> 					</Record>
> 				</Annotation>
> 				<Annotation Term="com.sap.vocabularies.UI.v1.PresentationVariant" Qualifier="ManageProducts">
> 					<Record>
> 						<PropertyValue Property="SortOrder">
> 							<Collection>
> 								<Record Type="com.sap.vocabularies.Common.v1.SortOrderType">
> 									<PropertyValue Property="Property" PropertyPath="Price"/>
> 									<PropertyValue Property="Descending" Bool="false"/>
> 								</Record>
> 							</Collection>
> 						</PropertyValue>
> 						<PropertyValue Property="Visualizations">
> 							<Collection>
> 								<AnnotationPath>@com.sap.vocabularies.UI.v1.LineItem#ManageProducts</AnnotationPath>
> 							</Collection>
> 						</PropertyValue>
> 					</Record>
> 				</Annotation>
> 				<Annotation Term="UI.LineItem" Qualifier="ManageProducts">
> 					<Collection>
> 						<Record Type="UI.DataField">
> 							<PropertyValue Property="Value" Path="Price"/>
> 							<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
> 						</Record>
> 						<Record Type="UI.DataFieldForAction">
> 							<PropertyValue Property="Label" String="New Activate Button"/>
> 							<PropertyValue Property="Action" String="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductActivation"/>
> 							<PropertyValue Property="InvocationGrouping" EnumMember="UI.OperationGroupingType/ChangeSet"/>
> 						</Record>
> 						<Record Type="UI.DataField">
> 							<PropertyValue Property="Value" Path="ProductPictureURL"/>
> 							<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
> 						</Record>
> 						<Record Type="UI.DataField">
> 							<PropertyValue Property="Value" Path="Supplier"/>
> 							<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
> 						</Record>
> 						<Record Type="UI.DataField">
> 							<PropertyValue Property="Label" String="Product-ID/-Text"/>
> 							<PropertyValue Property="Value" Path="ProductForEdit"/>
> 							<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
> 						</Record>
> 						<Record Type="UI.DataField">
> 							<PropertyValue Property="Label" String="Width"/>
> 							<PropertyValue Property="Value" Path="Width"/>
> 							<Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
> 						</Record>
> 					</Collection>
> 				</Annotation>
> 				<Annotation Term="UI.SelectionFields">
> 					<Collection>
> 						<PropertyPath>Width</PropertyPath>
> 					</Collection>
> 				</Annotation>
> 				<Annotation Term="UI.SelectionVariant" Qualifier="FilterDefaults">
> 					<Record>
> 						<PropertyValue Property="Parameters">
> 							<Collection></Collection>
> 						</PropertyValue>
> 						<PropertyValue Property="SelectOptions">
> 							<Collection>
> 								<Record Type="UI.SelectOptionType">
> 									<PropertyValue Property="PropertyName" PropertyPath="Width"/>
> 									<PropertyValue Property="Ranges">
> 										<Collection>
> 											<Record>
> 												<PropertyValue Property="Sign" EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeSignType/I"/>
> 												<PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/BT"/>
> 												<PropertyValue Property="Low" String="1.0"/>
> 												<PropertyValue Property="High" String="20.00"/>
> 											</Record>
> 										</Collection>
> 									</PropertyValue>
> 								</Record>
> 							</Collection>
> 						</PropertyValue>
> 					</Record>
> 				</Annotation>	
> 			</Annotations>
> 		</Schema>
> 	</edmx:DataServices>
> </edmx:Edmx>
> 
> ```

> ### Sample Code:  
> Including newly created annotation
> 
> ```
> {
>             "changeType": "appdescr_app_addAnnotationsToOData",
>             "content": {
>                 "dataSourceId": "mainService",
>                 "annotations": ["localAnnotationsNew"],
>                 "annotationsInsertPosition": "END",
>                 "dataSource": {
>                     "localAnnotationsNew": {
>                         "uri": "changes/annotations/annotations.xml",
>                         "type": "ODataAnnotation"
>                     }
>                 }
>             }
>         }
> 
> ```



<a name="loioa2b24a69baef4b91af2293ccc6b5871f__section_evh_mpq_ltb"/>

## Including a Reuse Component in an Adaption Project

This section describes the change mergers that are used to include a reuse component in an adaptation project. The example here shows a way to include attachment service in the object page.

As a prerequisite, the reuse component should be present in the target backend system. Reuse component is to be cloned to the workspace and its library reference should be added in `neo-app.json`. Also, while running the app you should first use my workspace in the configuration.

> ### Note:  
> You must follow corresponding reuse component configuration for the application to work. For example, attachment reuse component needs few parameters to be added in the neo-app.json. For more information. see [Attachments Development Guideline](https://wiki.wdf.sap.corp/wiki/display/PLMOH/Attachments+Development+Guideline)

The following parameters have to be included as `headerWhiteList` in the consuming application’s `neo-app.json` file.

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

These changes are to be added to `manifest.appdescr_variant` file in the adaptation project. For more details on the mergers, see [Descriptor Change Types](https://wiki.wdf.sap.corp/wiki/display/UI/Descriptor+Change+Types#b0f58371-dfbf-460f-b9d7-fdb3c0edaad1-1884226546).

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

