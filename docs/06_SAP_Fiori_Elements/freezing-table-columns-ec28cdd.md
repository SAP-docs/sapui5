<!-- loioec28cdddb020491f86dd65536986c009 -->

# Freezing Table Columns

Table column freezing keeps selected columns visible during horizontal scrolling in SAP Fiori elements for OData V4. Use this feature to maintain visibility of important columns while users are navigating large data tables.

You can freeze table columns to keep them visible when scrolling the table horizontally. To freeze columns, choose one of the following options:

-   You can use the *Column Settings* dialog to select a column to freeze. The selected column and all the columns to the left of it \(or right, if you use right-to-left mode\) are frozen.

-   You can use the `frozenColumnCount` parameter to choose a number of columns to freeze. To do this, add the `frozenColumnCount` parameter in the `manifest.json` file and specify how many columns to freeze. In the example below, the first three columns are frozen.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```json
    > 
    > "_Item/@com.sap.vocabularies.UI.v1.LineItem": {
    >     "tableSettings": {
    >         "type": "GridTable",
    >         "frozenColumnCount": 3,
    >         ...
    >     },
    >     ...
    > }
    > 
    > ```


You can disable freezing columns using the *Column Settings* dialog with the `disableColumnFreeze` parameter at the table level of the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "_Item/@com.sap.vocabularies.UI.v1.LineItem": {
>      "tableSettings": {
>           "type": "GridTable",
>           "disableColumnFreeze": true,
>           ...
>      },
>      ...
> }
> 
> ```

> ### Restriction:  
> Freezing table columns is not available in the responsive table.

