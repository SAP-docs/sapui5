<!-- loio5d270547f113468e83e06dd7ee408a45 -->

# Setting the Table Type

You can control which table type is rendered on the list report page and on the object page by configuring the `manifest.json` file and by using annotations.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Setting the Table Type](setting-the-table-type-7f844f1.md).

The following `type` properties are available within `tableSettings`:

-   `ResponsiveTable`
-   `GridTable`
-   `AnalyticalTable`
-   `TreeTable`

The following logic is used to determine the table type of an analytical list page \(ALP\) and a list report page:

-   If the table type is specified in the `manifest.json` file and set to analytical, but the `entitySet` doesn't have analytical capabilities, a grid table is used as the fallback option. Otherwise, the table is created with the specified table type.

-   If the table type is **not** specified in the `manifest.json` file, the default table type is determined as follows:

    -   For smartphone and tablet devices, a responsive table is used.

    -   For desktop devices, the default table type depends on the kind of service:

        -   For an aggregate-based service, an analytical table is used.

        -   For a non-aggregate-based service, a responsive table is used.




> ### Tip:  
> For more information about the guidelines and restrictions that apply to grid tables, see [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/grid-table/).

In addition to using the `manifest.json` file, you can also use annotations to control which table type is rendered on the list report page and on the object page.

> ### Note:  
> -   List report page only: If the `type` property within `tableSettings` is `AnalyticalTable`, set the `sap:semantics` annotation to `aggregate` for the specified entity type. Note that `sap:semantics` is a back-end entity type definition and can't be changed in the SAP Web IDE.
> 
> -   If you don't maintain the `type` property within `tableSettings` and if `sap:semantics` has been set to `aggregate` in the back end, an analytical table is rendered.



<a name="loio5d270547f113468e83e06dd7ee408a45__section_hgw_tsq_tgc"/>

## Examples

Set the `type` property within `tableSettings` to the required value in the `sap.ui.generic.app` section of the `manifest.json` file:

Example for the list report page:

```js
"sap.ui.generic.app": {
    "pages": [
        {
            "entitySet": "Zfarvd_Bs_Hd_Bo",
            "component": {
                "name": "sap.suite.ui.generic.template.ListReport",
                "list": true,
                "settings": {
                    "tableSettings": {
                        "type": "GridTable"
                    }
                }
            }
        }
    ]
}
	
```

Examples for the object page:

```js
"sap.ui.generic.app": {
    "pages": [
        {
            "entitySet": "STTA_C_MP_Product",
            "component": {
                "name": "sap.suite.ui.generic.template.ListReport",
                "list": true
            },
            "pages": [
                {
                    "entitySet": "STTA_C_MP_Product",
                    "component": {
                        "name": "sap.suite.ui.generic.template.ObjectPage",
                        "settings": {
                            "sections": {
                                "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
                                    "navigationProperty": "to_ProductText",
                                    "entitySet": "STTA_C_MP_ProductText",
                                    "tableSettings": {
                                        "type": "TreeTable"
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        }
    ]
}

```

Defining `tableTypes` under the settings is supported for backward compatibility. However, using `tableSettings` is recommended for defining table types.

> ### Note:  
> If you maintain the `type` property within `tableSettings` in `sections`, it has a higher priority than the `type` property of `tableSettings` in an object page.

```js
"pages": [
    {
        "entitySet": "STTA_C_MP_Product",
        "component": {
            "name": "sap.suite.ui.generic.template.ObjectPage",
            "settings": {
                "showRelatedApps": true,
                "tableSettings": {
                    "type": "ResponsiveTable"
                },
                "sections": {
                    "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
                        "navigationProperty": "to_ProductText",
                        "entitySet": "STTA_C_MP_ProductText",
                        "tableSettings": {
                            "type": "GridTable"
                        }
                    }
                }
            }
        }
    }
]

```



<a name="loio5d270547f113468e83e06dd7ee408a45__section_ipf_sff_dmb"/>

## More Information

For a description of the available table types, see [Tables](tables-f242a02.md).

For information about setting up tables on the list report page through annotations, see [Settings for List Report Page Tables](settings-for-list-report-page-tables-4c2d17a.md).

For information about setting up a standard list or object list on the list report page, see [Enabling Standard List Items and Object List Items](enabling-standard-list-items-and-object-list-items-4ed47aa.md).

For information about setting up tables in the object page, see [Settings for Object Page Tables](settings-for-object-page-tables-47425bb.md).

For information about table groupings, see [Table Groupings](table-groupings-87d810a.md).

