<!-- loio75631b78e3444231bb31cf80b3b50922 -->

# Enabling the Flexible Column Layout

The flexible column layout is a feature that can show two or three columns on a single page.

For example, a list of items is shown in the first column, and when you choose an item to see its details, the related object page is shown in the second or third column. You can expand the column you want to focus on, switch between different layouts, and view the column on the right-hand side in full-screen mode.

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



End users can expand and collapse the columns using the focus buttons. They can change to full-screen mode by choosing the full-screen button.

![](images/FCL_Master_Detail_9ff7dd4.png)



<a name="loio75631b78e3444231bb31cf80b3b50922__section_e2b_ptj_3cc"/>

## Enabling the Flexible Column Layout Using SAP Fiori Tools

> ### Remember:  
> The flexible column layout isn't available for the overview page floorplan.

1.  Launch the *Page Map*. You can launch the *Page Map* in several ways, for example by right-clicking the project folder and selecting *Show Page Map*. For more information, see [Define Application Structure](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/bae38e6216754a76896b926a3d6ac3a9.html).

2.  To select the flexible column layout configuration, go to the *Property Panel* and switch on *Flexible Column Layout*.

3.  Select your desired layout. You can select a layout for two or three columns. You can also customize your layout settings further in the `manifest.json` file.

    > ### Note:  
    > -   For the overview page, the flexible column layout is not relevant.
    > 
    > -   The analytical list page supports only the `TwoColumnsBeginExpanded` layout. For more information, see [2409984](https://me.sap.com/notes/2409984).
    > 
    > -   The flexible column layout can be used in both draft and non-draft scenarios.
    > 
    > -   Both draft and non-draft applications support 2-column and 3-column layouts.
    > 
    >     In non-draft flexible column layout applications with create, read, update, and delete \(CRUD\) capabilities, only the last column shows the *Edit* and *Delete* buttons.

    To enable the flexible column layout in an application, you must create an entry in the `manifest.json` file as shown in the following sample code:

    ```
    "sap.ui.generic.app": {
            "_version": "1.1.0",
            "settings": {
                "flexibleColumnLayout": {
                    "defaultTwoColumnLayoutType": "TwoColumnsMidExpanded",
                    "defaultThreeColumnLayoutType": "ThreeColumnsEndExpanded"
                }
            },
            "pages": [...
    ```

    > ### Note:  
    > For optimum readability, you can set the `PopinLayout` property to `Block`, `GridLarge`, or `GridSmall`. For more information, see [Adapting the UI: List Report and Object Page](adapting-the-ui-list-report-and-object-page-0d2f1a9.md).

    The following screenshot shows the flexible column layout property in an application based on SAP Fiori elements for OData V2:

    ![](images/Fiori_Tools_-_Business_Application_Studio_-_Flexible_Column_Layout_Property_1bba2f4.png)

4.  Preview your chosen flexible column layout. For more information, see [Previewing an Application](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/b962685bdf9246f6bced1d1cc1d9ba1c.html).


The following screenshot shows the flexible column layout in a previewed application:

![](images/Fiori_Tools_-_Business_Application_Studio_-_Flexible_Column_Layout_Preview_19a666e.png)

The following screen recording shows how to enable the flexible column layout and preview your application:





<a name="loio75631b78e3444231bb31cf80b3b50922__section_cyk_syr_kdc"/>

## Saving Column Resize Information

The flexible column layout allows end users to resize the columns in both 2-column display and 3-column display, with SAP Fiori elements saving this information in the personalization settings. This information is specific to each application and device type, such as desktop, tablet, and phone.



<a name="loio75631b78e3444231bb31cf80b3b50922__section_grc_dmp_gmb"/>

## Defining a Default Layout

For each page configured in the `manifest.json` file, you can define a default layout that is used when the page is opened. You can use the `defaultLayoutType` property to do so. For example, you can use the `MidColumnFullScreen` property value to open a page in full-screen mode. This overrides the layout that has been defined in the global `flexibleColumnLayout` settings for the corresponding column. Note that this is only relevant if different pages in the same column need different default layouts.

For an object page, you can define `"defaultLayoutType": "OneColumn"`. By doing so, in the flexible column layout, this object page moves to the first column. All other object pages that are below the first one in the hierarchy move up accordingly. If they have the same setting, they also move to the first column.

Usually, this setting is made on the main object page. After navigating from the list report, the object page is then displayed in full-screen mode, that is, the main object page replaces the list report. When navigating to an item, the main object remains in the first column and the item is displayed in the second column.

> ### Sample Code:  
> ```
> 
> "sap.ui.generic.app": {
>     "settings": {
>             "flexibleColumnLayout": {
>                 "defaultTwoColumnLayoutType": "TwoColumnsMidExpanded",
>                 "defaultThreeColumnLayoutType": "ThreeColumnsEndExpanded"
>             }
>         },
>                       "pages": [{
>                                "entitySet": "…",
>                                "component": {
>                                      "name": "sap.suite.ui.generic.template.ListReport",
>                                      "settings": {
>                                               …
>                                        }
>                                  },
>                                   "pages": [{
>                                             "entitySet": "…",
>                                              "defaultLayoutType": "OneColumn",
>                                              "component": {
>                                                       "name": "sap.suite.ui.generic.template.ObjectPage",
>                                                       "settings": {
>                                                                  …
>                                                       }
>                                              },
> 
> ```

