<!-- loio5d49e31cd38048bc9557179cdc453e86 -->

# Navigation to Subpages

You can add additional subpages based on the object page template to your app, and, if required, remove them again.

We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to add, remove, and configure pages with the Page Map tool.



<a name="loio5d49e31cd38048bc9557179cdc453e86__section_aqf_fpr_1mb"/>

## Adding and Removing Further Subpages Manually

You can add further subpages manually in the `manifest.json` file post-generation.

To add a subpage manually, you need two objects in the `manifest.json` file.

1.  Route: to be added to the `routing` section. This specifies the target to be used.

2.  Target: to specify the component to be loaded.


```json
"sap.ui5": {
        ...
        "routing": {
                ...
                {
                    "pattern": "SalesOrderManage({key})/_Item({key2}):?query:",
                    "name": "SalesOrderItemObjectPage",
                    "target": "SalesOrderItemObjectPage"
                }
            ],
            "targets": {
                "SalesOrderItemObjectPage": {
                    "type": "Component",
                    "id": "SalesOrderItemObjectPage",
                    "name": "sap.fe.templates.ObjectPage",
                    "options": {
                        "settings": {
                            "contextPath": "/SalesOrderItem",
                            ...
                        }
                    }
                }
            }
        }
    }

```

To remove the `Subpage`, the route and the target must be removed.



<a name="loio5d49e31cd38048bc9557179cdc453e86__section_tcd_xsm_bmb"/>

## Related Links

For information about defining an external navigation target using intent-based navigation, see [Changing Navigation to Object Page](changing-navigation-to-object-page-8bd546e.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adding Subpages](adding-subpages-4119e93.md).

