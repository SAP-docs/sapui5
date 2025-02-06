<!-- loio4c2d17aec55b4162b19f1b573b5a4f99 -->

# Settings for List Report Tables

You can configure various aspects of the list report table through annotations and in the `manifest.json` file.



<a name="loio4c2d17aec55b4162b19f1b573b5a4f99__section_ufz_hmf_vrb"/>

## Displaying the Editing Status

In draft-enabled applications, the **Draft**, **Unsaved Changes by Another User**, and **Locked by Another User** statuses are displayed in the list report. In a responsive table, the statuses are displayed in the key column whereas in a grid table, they're displayed in a separate column next to the key column.

For more information, see [Editing Status](editing-status-668ea18.md) and [Handling Semantic Key Fields](handling-semantic-key-fields-aa2793c.md).



<a name="loio4c2d17aec55b4162b19f1b573b5a4f99__section_lqs_jzb_2nb"/>

## Additional Features in SAP Fiori Elements for OData V2



If a semantic key is not added to the line items, the editing status is displayed in either the *Title* or *Description* column, based on the available information:

-   If a semantic key is available for `entityType` and is part of the table, the draft information is shown in the column where the first semantic key is displayed.

-   If no semantic key annotation is available, the system checks whether `headerInfo/Title/Value/Path` is available under the `LineItem` annotation.


