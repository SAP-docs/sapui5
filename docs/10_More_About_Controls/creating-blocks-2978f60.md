<!-- loio2978f6064742456ebed31c5ccf4d051d -->

# Creating Blocks

Important points when creating blocks for the `sap.uxap.ObjectPageLayout`



<a name="loio2978f6064742456ebed31c5ccf4d051d__section_ns2_rcx_kbb"/>

## Decide which kind of block to use:

-   Single view block if `Collapsed`, `Expanded`, and `Compact` modes are similar and easy to develop with a single view.

-   Multiple view blocks if it's easier to provide different views for the different modes.

-   Free form if none of the above suit your needs.




<a name="loio2978f6064742456ebed31c5ccf4d051d__section_ayv_scx_kbb"/>

## Single View Block Creation

-   Create the block folder in the sources of the app.

-   Add a `BlockName.js` file, which extends `sap.uxap.BlockBase`.

    > ### Note:  
    > Naming guideline: The block name should end with the word *Block*.

-   Add a `BlockName.view.xml` XML view.

-   If needed, add the associated controller: `BlockNameController.controller.js`.


> ### Note:  
> It's not mandatory to put the `BlockName.js` file and the related XML view in the same folder since you are able to provide the view file path by using the `sap.uxap.BlockBase's` API. However, if no path is provided, the `sap.uxap.BlockBase` will look for an XML view file with a matching name in the same folder where the `BlockName.js` is located.
> 
> For example, `sap.uxap.BlockBase` would match `AddressesBlock.js` with `AddressesBlock.view.xml`.



<a name="loio2978f6064742456ebed31c5ccf4d051d__section_ql5_tcx_kbb"/>

## Multiple View Block Creation

-   Create the block folder in the sources of the app.

-   Add a `BlockName.js` file, which extends `sap.uxap.BlockBase`.

-   Declare the views to be used for the different modes in the `views` section of the metadata.

-   Add the `Expanded` and `Collapsed` XML views.

    > ### Note:  
    > Naming guideline: Name these files as `BlockNameCollapsed.view.xml` and `BlockNameExpanded.view.xml`

-   If needed, add the associated controllers. Whether you use the same controller for all views or one controller per view is your decision.




<a name="loio2978f6064742456ebed31c5ccf4d051d__section_gz5_5cx_kbb"/>

## Free Form Block Creation

-   Create the block folder in the sources of the app.

-   Add a `BlockName.js` file, which extends `sap.uxap.BlockBase`.

-   Override the `setMode` method. From here on, all changes are up to you.


**Related Information**  


[API Reference: `sap.uxap.BlockBase`](https://ui5.sap.com/#/api/sap.uxap.BlockBase)

