<!-- loioe67782c6704143b28ad62dd102ad06a4 -->

# Enabling Editing Using a Dialog \(Mass Edit\)

You can enable the mass edit feature to allow users to simultaneously change multiple objects that share the same editable properties.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Enabling Editing Using a Dialog \(Mass Edit\)](enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

Mass editing allows users to simultaneously change multiple objects that share the same editable properties. The values that are changed within the mass edit dialog are applied to all selected records that are editable.

> ### Note:  
> -   When the request for each selected instance is sent, the update is executed with the following logic:
> 
>     -   If some of the records fail with errors or warnings, the updates for the other selected instances are still executed.
> 
>     -   Individual records are only updated if all fields can be updated.
> 
> 
> -   On the list report page, mass edit is available for active records that don't have unsaved drafts from any user.
> 
> -   To enhance performance, application developers must explicitly specify the fields to be displayed in the mass edit dialog.

Using the mass edit dialog is only available on the list report page. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\) on the List Report Page](enabling-editing-using-a-dialog-mass-edit-on-the-list-report-page-7cc4f04.md).

