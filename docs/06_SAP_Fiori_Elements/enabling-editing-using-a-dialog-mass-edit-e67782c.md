<!-- loioe67782c6704143b28ad62dd102ad06a4 -->

# Enabling Editing Using a Dialog \(Mass Edit\)

Mass editing allows end users to simultaneously change multiple objects that share the same editable properties.

The values that are changed within the mass edit dialog are applied to all selected records that are editable.

> ### Note:  
> -   When the request for each selected instance is sent, the update is executed with the following logic:
> 
>     -   If some of the records fail with errors or warnings, the updates for the other selected instances are still executed.
> 
>     -   Individual records are only updated if all fields can be updated.
> 
> 
> -   In the list report, mass edit is available for active records that don't have unsaved drafts from any end user.
> 
> -   To enhance performance, application developers must explicitly specify the fields to be displayed in the mass edit dialog.

Using the mass edit dialog is only available in the list report. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\) on the List Report Page](enabling-editing-using-a-dialog-mass-edit-on-the-list-report-page-c7be740.md).

