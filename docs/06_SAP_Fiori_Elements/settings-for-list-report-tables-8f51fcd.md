<!-- loio8f51fcd7c8494e26aa4c71cdb762a64c -->

# Settings for List Report Tables

You can configure various aspects of the list report table through annotations and in the `manifest.json` file.



<a name="loio8f51fcd7c8494e26aa4c71cdb762a64c__section_ufz_hmf_vrb"/>

## Displaying the Editing Status

In draft-enabled applications, the **Draft**, **Unsaved Changes by Another User**, and **Locked by Another User** statuses are displayed in the list report. In a responsive table, the statuses are displayed in the key column whereas in a grid table, they're displayed in a separate column next to the key column.

If a semantic key is not added to the line items, the editing status is displayed in either the *Title* or *Description* column, based on the available information:

-   If a semantic key is available for `entityType` and is part of the table, the draft information is shown in the column where the first semantic key is displayed.

-   If no semantic key annotation is available, the system checks whether `headerInfo/Title/Value/Path` is available under the `LineItem` annotation.


For more information, see [Editing Status](editing-status-66050ea.md) and [Handling Semantic Key Fields](handling-semantic-key-fields-94c1856.md).

