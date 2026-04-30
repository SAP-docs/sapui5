<!-- loioe762257125b34513b0859faa1610b09e -->

# Enabling the Flexible Column Layout

You can use the flexible column layout to show two or three columns on a single page.

In a flexible column layout, a list of items can be shown in the first column, and when you choose an item to see its details, the related object page is shown in the second or third column. You can expand the column you want to focus on, switch between different layouts, and view the column on the right-hand side in full-screen mode.

Use the following attributes to create the column layout you want:

-   `defaultTwoColumnLayoutType`: A 2-column layout with the following options:

    -   `TwoColumnsBeginExpanded`

        ![](images/Two_Columns_Begin_Expanded_c34a5e7.png)

    -   `TwoColumnsMidExpanded`

        ![](images/Two_Columns_Mid_Expanded_392c14f.png)


-   `defaultThreeColumnLayoutType`: A 3-column layout with the following options:

    -   `ThreeColumnsMidExpanded`

        ![](images/Three_Columns_Mid_Expanded_227c14d.png)

    -   `ThreeColumnsEndExpanded`

        ![](images/Three_Columns_End_Expanded_0f5a9cc.png)



Users can expand and collapse the columns using the focus buttons. They can change to full-screen mode by choosing the full-screen button.

![](images/FCL_Master_Detail_9ff7dd4.png)



<a name="loioe762257125b34513b0859faa1610b09e__section_e2b_ptj_3cc"/>

## Enabling the Flexible Column Layout Using SAP Fiori Tools

> ### Remember:  
> The flexible column layout isn't available for the overview page floorplan.

1.  Launch the *Page Map*. You can launch the *Page Map* in several ways, for example by right-clicking the project folder and selecting *Show Page Map*. For more information, see [Define Application Structure](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/bae38e6216754a76896b926a3d6ac3a9.html).

2.  To select the flexible column layout configuration, go to the *Property Panel* and switch on *Flexible Column Layout*.

3.  Select your desired layout. You can select a layout for two or three columns. You can also customize your layout settings further in the `manifest.json` file. For more information, see further in this topic.

4.  Preview your chosen flexible column layout. For more information, see [Previewing an Application](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/b962685bdf9246f6bced1d1cc1d9ba1c.html).


The following screenshot shows the flexible column layout in a previewed application:

![](images/Fiori_Tools_-_Business_Application_Studio_-_Flexible_Column_Layout_Preview_19a666e.png)

The following screen recording shows how to enable the flexible column layout and preview your application:





<a name="loioe762257125b34513b0859faa1610b09e__section_cyk_syr_kdc"/>

## Saving Column Resize Information

The flexible column layout allows users to resize the columns in both 2-column display and 3-column display, with SAP Fiori elements saving this information in the personalization settings. This information is specific to each application and device type, such as desktop, tablet, and phone.



<a name="loioe762257125b34513b0859faa1610b09e__section_enh_np2_ymb"/>

## Configuration in the `manifest.json` File

You must do the following configuration in the `manifest.json` file to enable the flexible column layout, compared to a full-screen mode:

1.  Add the `rootView` object to specify the use of the flexible column layout.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "sap.ui5":{
    >  …
    >         "rootView":{
    >             "viewName":"sap.fe.core.rootView.Fcl",
    >             "type":"XML",
    >             "async":true,
    >             "id":"appRootView"
    >         },
    > …
    >    }
    > ```

2.  Add a `config` object to the routing key, setting the `routerClass` to `sap.f.routing.Router` and optionally including a flexible column layout object. This allows you to define whether the default layout displays two columns or three columns.

    > ### Sample Code:  
    > ```
    > "routing":{
    >      "config":{
    >             "routerClass":"sap.f.routing.Router",
    >             "flexibleColumnLayout":{
    >                     "defaultTwoColumnLayoutType":"TwoColumnsMidExpanded",
    >                     "defaultThreeColumnLayoutType":"ThreeColumnsMidExpanded"
    >                 }
    >             },
    >            "routes":[
    >               …
    >             ]
    >     }
    > ```

    > ### Note:  
    > You must ensure that the `sap.f` library is added as a dependency under the `sap.ui5` key.




## Route Configuration

The route target leads to an array instead of a single element in the usual full-screen application. The pattern key format describes the pattern to be matched from a navigation to identify the route. It must end with an optional query parameter `:?query:` for a full-screen application.

You must set the following keys:

-   `name`: Unique identifier of the current route.

-   `target`: Array listing the targets to be displayed.


You can enable the flexible column layout and define the number of columns in the layout by configuring the `target` key in the `manifest.json` file.

The following sample code shows a 3-column layout that starts with a list report page:

The scenario is: List report page →List report page | Object page 1→List report page | Object page 1 | Object page 2 → Object page 3

> ### Sample Code:  
> manifest.json
> 
> ```
> "routes": [
>      	{
>         	"pattern": ":?query:",
>             "name": "SalesOrderManageList",
>             "target": ["SalesOrderManageList"]
>         },
>         {
>         	"pattern": "SalesOrderManage({key}):?query:",
>             "name": "SalesOrderManageObjectPage",
>             "target": ["SalesOrderManageList", "SalesOrderManageObjectPage"]
>         },
>         {
>         	"pattern": "SalesOrderManage({key})/_Item({key2}):?query:",
>             "name": "SalesOrderItemObjectPage",
>             "target": ["SalesOrderManageList", "SalesOrderManageObjectPage", "SalesOrderItemObjectPage"]
>          },
>          {
>          	"pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3}):?query:",
>             "name": "MaterialDetailsObjectPage",
>             "target": ["MaterialDetailsObjectPage"]
>          },
>          {
>          	"pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})/_MaterialRatings({key4}):?query:",
>             "name": "MaterialRatingsObjectPage",
>             "target": ["MaterialRatingsObjectPage"]
>          },
>          {
>           	"pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})/_MaterialRatings({key4})/_MaterialRatingsDetails({key5}):?query:",
>             "name": "MaterialRatingsDetailsObjectPage",
>             "target": ["MaterialRatingsDetailsObjectPage"]
>          }
> ],
> "targets": {
>    "SalesOrderManageList": {
>        "type": "Component",
>        "id": "SalesOrderManageList",
>        "name": "sap.fe.templates.ListReport",
>        "controlAggregation": "beginColumnPages",
>        "contextPattern": "",
>        "options": {
>                 ...
>        }
>    },
>    "SalesOrderManageObjectPage": {
>        "type": "Component",
>        "id":  "SalesOrderManageObjectPage",
>        "name": "sap.fe.templates.ObjectPage",
>        "controlAggregation": "midColumnPages",
>        "contextPattern": "/SalesOrderManage({key})",
>        "options": {
>                 ...
>        }
>    },
>    "SalesOrderItemObjectPage": {
>        "type": "Component",
>        "id":  "SalesOrderItemObjectPage",
>        "name": "sap.fe.templates.ObjectPage",
>        "controlAggregation": "endColumnPages",
>        "contextPattern": "/SalesOrderManage({key})/_Item({key2})",
>        "options": {
>                 ...
>        }
>    },
>    "MaterialDetailsObjectPage": {
>        "type": "Component",
>        "id":  "MaterialDetailsObjectPage",
>        "name": "sap.fe.templates.ObjectPage",
>        "controlAggregation": "endColumnPages",
>        "contextPattern": "/SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})",
>        "options": {
>                 ...
>        }
>    },
>    ...
> }
> ```

The following sample code shows a 2-column layout that starts with an object page:

The scenario is: List report page → Object page 1→ Object page 1 | Object page 2 → Object page 3

> ### Sample Code:  
> ```
> "routes": [
>                 {
>                "pattern": ":?query:",
>                "name": "SalesOrderManageList",
>                "target": ["SalesOrderManageList"]
>         },
>         {
>                "pattern": "SalesOrderManage({key}):?query:",
>                "name": "SalesOrderManageObjectPage",
>                "target": ["SalesOrderManageObjectPage"]
>         },
>         {
>                "pattern": "SalesOrderManage({key})/_Item({key2}):?query:",
>                "name": "SalesOrderItemObjectPage",
>                "target": ["SalesOrderManageObjectPage", "SalesOrderItemObjectPage"]
>          },
>          {
>                "pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3}):?query:",
>                "name": "MaterialDetailsObjectPage",
>                "target": ["MaterialDetailsObjectPage"]
>          },
>         …
> ],
> "targets": {
>        "SalesOrderManageList": {
>            "type": "Component",
>            "id": "SalesOrderManageList",
>            "name": "sap.fe.templates.ListReport",
>            "controlAggregation": "beginColumnPages",
>            "contextPattern": "",
>            "options": {
>                     ...
>            }
>        },
>        "SalesOrderManageObjectPage": {
>            "type": "Component",
>            "id":  "SalesOrderManageObjectPage",
>            "name": "sap.fe.templates.ObjectPage",
>            "controlAggregation": "beginColumnPages",
>            "contextPattern": "/SalesOrderManage({key})",
>            "options": {
>                     ...
>            }
>        },
>        "SalesOrderItemObjectPage": {
>            "type": "Component",
>            "id":  "SalesOrderItemObjectPage",
>            "name": "sap.fe.templates.ObjectPage",
>            "controlAggregation": "midColumnPages",
>            "contextPattern": "/SalesOrderManage({key})/_Item({key2})",
>            "options": {
>                     ...
>            }
>        },
>        "MaterialDetailsObjectPage": {
>            "type": "Component",
>            "id":  "MaterialDetailsObjectPage",
>            "name": "sap.fe.templates.ObjectPage",
>            "controlAggregation": "endColumnPages",
>            "contextPattern": "/SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})",
>            "options": {
>                     ...
>            }
>        },
>        ...
>    }
> ```

The following sample code shows a 3-column layout that starts with an object page:

The scenario is: List report page → Object page 1→ Object page 2 → Object page 2 | Object page 3 → Object page 2 | Object page 3 | Object page 4 →Object page 5

> ### Sample Code:  
> ```
> "routes": [
>     {
>         "pattern": ":?query:",
>         "name": "SalesOrderManageList",
>         "target": "SalesOrderManageList"
>     },
>     {
>         "pattern": "SalesOrderManage({key}):?query:",
>         "name": "SalesOrderManageObjectPage",
>         "target": ["SalesOrderManageObjectPage"]
>     },
>     {
>         "pattern": "SalesOrderManage({key})/_Item({key2}):?query:",
>         "name": "SalesOrderItemObjectPage",
>         "target": ["SalesOrderItemObjectPage"]
>     },
>     {
>         "pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3}):?query:",
>         "name": "MaterialDetailsObjectPage",
>         "target": ["SalesOrderItemObjectPage","MaterialDetailsObjectPage"]
>     },
>     {
>         "pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})/_MaterialRatings({key4}):?query:",
>         "name": "MaterialRatingsObjectPage",
>         "target": ["SalesOrderItemObjectPage","MaterialDetailsObjectPage","MaterialRatingsObjectPage"]
>     },
>     {
>         "pattern": "SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})/_MaterialRatings({key4})/_MaterialRatingsDetails({key5}):?query:",
>         "name": "MaterialRatingsDetailsObjectPage",
>         "target": ["MaterialRatingsDetailsObjectPage"]
>     }
> ],
> "targets": {
>     "SalesOrderManageList": {
>         "type": "Component",
>         "id": "SalesOrderManageList",
>         "name": "sap.fe.templates.ListReport",
>         "controlAggregation": "beginColumnPages",
>         "contextPattern": "",
>         "options": {
>             ...
>         }
>     },
>     "SalesOrderManageObjectPage": {
>         "type": "Component",
>         "id": "SalesOrderManageObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "controlAggregation": "beginColumnPages",
>         "contextPattern": "/SalesOrderManage({key})",
>         "options": {
>             ...
>         }
>     },
>     "SalesOrderItemObjectPage": {
>         "type": "Component",
>         "id": "SalesOrderItemObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "controlAggregation": "beginColumnPages",
>         "contextPattern": "/SalesOrderManage({key})/_Item({key2})",
>         "options": {
>            ...
>         }
>     },
>     "MaterialDetailsObjectPage": {
>         "type": "Component",
>         "id": "MaterialDetailsObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "controlAggregation": "midColumnPages",
>         "contextPattern": "/SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})",
>         "options": {
>             ...
>         }
>     },
>     "MaterialRatingsObjectPage": {
>         "type": "Component",
>         "id": "MaterialRatingsObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "controlAggregation": "endColumnPages",
>         "contextPattern": "/SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})/_MaterialRatings({key4})",
>         "options": {
>             ...
>         }
>     },
>     "MaterialRatingsDetailsObjectPage": {
>         "type": "Component",
>         "id": "MaterialRatingsDetailsObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "controlAggregation": "endColumnPages",
>         "contextPattern": "/SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})/_MaterialRatings({key4})/_MaterialRatingsDetails({key5})",
>         "options": {
>             ...
>         }
>     }
> }
> },
> ```



## Target Configuration

You must set the following keys for each target:

-   `type`: Component

-   `id`: unique identifier for the current target.

-   `name`: name of the template to be used by the view.

    -   `sap.fe.templates.ListReport` must be used for the first level, which is the initial view displayed when opening or navigating to the application.

    -   `sap.fe.templates.ObjectPage` must be used for any subsequent level.


-   `controlAggregation`: specify where to locate the view.

    -   `beginColumnPages`: must be used for the first page to be displayed or for any page before the flexible column layout.

    -   `midColumnPages`: must be used for the second page.

    -   `endColumnPages`: for the third page, or for any page after the flexible column layout.


-   `contextPattern`: navigation path of the current target.

-   All other keys remain unchanged, compared to the full-screen applications.


> ### Sample Code:  
> ```
> "targets": {
>         "SalesOrderManageList": {
>             "type": "Component",
>             "id": "SalesOrderManageList",
>             "name": "sap.fe.templates.ListReport",
>             "controlAggregation": "beginColumnPages",
>             "contextPattern": "",
>             "options": {
>                         ...
>                      // Same as fullscreen  //
>                         ...
>             }
>         },
>         "SalesOrderManageObjectPage": {
>             "type": "Component",
>             "id":  "SalesOrderManageObjectPage",
>             "name": "sap.fe.templates.ObjectPage",
>             "controlAggregation": "midColumnPages",
>             "contextPattern": "/SalesOrderManage({key})",
>             "options": {
>                         ...
>                      // Same as fullscreen  //
>                         ...
>             }
>         },
>         "SalesOrderItemObjectPage": {
>             "type": "Component",
>             "id":  "SalesOrderItemObjectPage",
>             "name": "sap.fe.templates.ObjectPage",
>             "controlAggregation": "endColumnPages",
>             "contextPattern": "/SalesOrderManage({key})/_Item({key2})",
>             "options": {
>                         ...
>                      // Same as fullscreen  //
>                         ...
>             }
>         },
>         "MaterialDetailsObjectPage": {
>             "type": "Component",
>             "id":  "MaterialDetailsObjectPage",
>             "name": "sap.fe.templates.ObjectPage",
>             "controlAggregation": "endColumnPages",
>             "contextPattern": "/SalesOrderManage({key})/_Item({key2})/_MaterialDetails({key3})",
>             "options": {
>                          ...
>                       // Same as fullscreen  //
>                          ...
>             }
>         },
>         ...
>     }
> 
> ```



> ### Restriction:  
> -   In edit mode on an object page, the subobject page closes automatically when you add or remove a column from a table.
> 
> -   If you have a list report page or an object page with multiple tables that are based on the same entity, only the first table is synchronized with its associated subobject page.
> 
> -   When you update a multi-input field on an object page, you need to first refresh the parent page \(either an object page or a list report page\) before the changes are visible.
> 
> -   In the flexible column layout, you can neither display a tree table nor an analytical table in the list report page with a draft-enabled service.

> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling the Flexible Column Layout](enabling-the-flexible-column-layout-75631b7.md).

