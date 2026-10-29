<!-- loio90e4e130de47414fbfa54c96f33b25e6 -->

# Enabling Creation Using the *Add* Button and Value Help

You can use the `AddViaValueHelp` creation mode to let users add rows to a table through a value help dialog instead of creating each record manually.

The `AddViaValueHelp` creation mode lets users add rows to a table through a value help dialog. When this mode is used, the table toolbar displays *Add* and *Remove* buttons instead of the *Create* and *Delete* buttons.

The *Add* button opens a value help dialog, where users can select one or more rows to add to the table. This lets users create one or more records without manually creating each one. For example, a project record has a table called **Project-Employees** that displays records from the employees association, which refers to a master list of employees. Users can then assign employees to the project from this master list.

To activate this creation mode, set `creationMode` for the table to `AddViaValueHelp` in the `manifest.json` settings. Also set the `referenceProperty` to the field whose value help is linked to the association, such as the employee master list in the example.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "controlConfiguration": {
>     "Employees/@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "creationMode": {
>                 "name": "AddViaValueHelp",
>                 "addViaValueHelpSettings": {
>                     "referenceProperty": "employeeID"
>                 }
>             }
>         }
>     }
> }
> ```

When you use this configuration, the table displays an *Add* button that opens the value help associated with the field `employeeID`. This is the same value help that appears when the object is in *Edit* mode and the user opens the field's value help.

> ### Note:  
> Use this feature only in the following scenarios:
> 
> -   The entries from the value help are linked to an association that holds the master list, such as the employee master list as described in the previous example.
> 
> -   Most table fields display values directly from the associated master list. This includes fields hidden through personalization and fields visible only on the detail page.
> 
> -   Ensure that each value help entry is added to the main table only once. When you add an entry to the main table, the value help hides that entry until you remove it from the main table.



## Configuration Requirements

You must ensure certain configuration and setup at the application layer, including the back end, for this feature to function correctly. The following subsections describe the application configurations.



### Marking Non-Key Fields as Computed Fields

You must mark the non-key fields that are populated from user selections in the value help dialog as read-only in the main table. Because the values in the main table reflect the values from the master list through an association, editing these fields is not recommended. This edit changes the value only in the composition table and does not update the same field in the master list. This can result in data inconsistencies.

> ### Example:  
> Consider a **Project-Employee** table linked to the `ProjectEmployee` composition. This table is configured with the *Add* and *Remove* features. The reference field has a value help definition linked to the employee association, which is linked to the employee master list. The following tables illustrate this setup:
> 
> **Employees Table Connected to the Project Entity Through the ProjectEmployee Composition**
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Employee ID \(Key\)
> 
> </th>
> <th valign="top">
> 
> Name
> 
> </th>
> <th valign="top">
> 
> Designation
> 
> </th>
> <th valign="top">
> 
> Project Role
> 
> </th>
> <th valign="top">
> 
> Allocation Percentage
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> 001
> 
> </td>
> <td valign="top">
> 
> Emp1
> 
> </td>
> <td valign="top">
> 
> D1
> 
> </td>
> <td valign="top">
> 
> Architect
> 
> </td>
> <td valign="top">
> 
> 0.05
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> 002
> 
> </td>
> <td valign="top">
> 
> Emp2
> 
> </td>
> <td valign="top">
> 
> D2
> 
> </td>
> <td valign="top">
> 
> Engineer
> 
> </td>
> <td valign="top">
> 
> 1
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> 003
> 
> </td>
> <td valign="top">
> 
> Emp3
> 
> </td>
> <td valign="top">
> 
> D3
> 
> </td>
> <td valign="top">
> 
> Engineer
> 
> </td>
> <td valign="top">
> 
> 1
> 
> </td>
> </tr>
> </table>
> 
> **Employee Value Help Associated with the Employee Master List**
> 
> 
> <table>
> <tr>
> <th valign="top">
> 
> Emp\_ID \(Key\)
> 
> </th>
> <th valign="top">
> 
> Emp\_Name
> 
> </th>
> <th valign="top">
> 
> Emp\_Designation
> 
> </th>
> </tr>
> <tr>
> <td valign="top">
> 
> 001
> 
> </td>
> <td valign="top">
> 
> Emp1
> 
> </td>
> <td valign="top">
> 
> D1
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> 002
> 
> </td>
> <td valign="top">
> 
> Emp2
> 
> </td>
> <td valign="top">
> 
> D2
> 
> </td>
> </tr>
> <tr>
> <td valign="top">
> 
> 003
> 
> </td>
> <td valign="top">
> 
> Emp3
> 
> </td>
> <td valign="top">
> 
> D3
> 
> </td>
> </tr>
> </table>
> 
> Assume that all three columns of the value help dialog have an `OUT` mapping to the main table.
> 
> With this setup, when a user selects one or more employees from the value help dialog, the entries are added to the main table as follows:
> 
> -   Employee ID is the only key field that is populated from the selected rows in the value help dialog. As a result, it is the only field that is sent to the back end in the `POST` call.
> 
> -   The other non-key fields in the main table, such as name and designation, that are also defined with `OUT` mappings in the value help entity must be configured as computed fields. This ensures that values for these fields come from the back end based on the key field value. This also prevents users from editing these values in the main table, as changes to the master list are best made through a dedicated action or application. For more information, see [Additional Features of the Field](additional-features-of-the-field-f49a0f7.md).
> 
> -   Fields that do not come from a value help, such as the project role and allocation percentage, remain editable in the table entity so that the user can enter the values directly.



### Preventing Duplicate Entries from the Value Help

When a user opens the value help, the application back end must read the main table to exclude records already in the main table from the value help. In object page tables, this logic can depend on the parent object.

To create this linkage, define the value help as a parameterized entity and pass the parent object key as a parameter, for example, the Project ID in the **Project-Employee** example. To prevent users from accessing or changing this key value, annotate this parameter with `UI.HiddenFilter` in the value help entity. This ensures the parameter does not appear in the filter bar within the value help dialog. For more information, see [Annotations](value-help-fccb255.md#loiofccb255723d3489cae955648756411f6__Annotations) and [Supporting Parameterized Entities](configuring-filter-bars-4bd7590.md#loio4bd7590569c74c61a0124c6e370030f6__suppprting_parameterized_entities_subsection).



### Refreshing the Value Help After Adding or Removing Entries

When users add one or more entries to the main table, the value help entity must be refreshed to reflect the changes. Otherwise, the cached entries remain visible in the value help dialog the next time the user selects *Add*. The same applies after a user removes entries from the table. The application back end must refresh the value help entity to display the removed entries in the value help dialog, allowing users to select them again if needed.

You can ensure such a refresh by using side effects. For more information, see [Value Help Dialog](value-help-dialog-3faed83.md).

> ### Restriction:  
> -   This feature is not yet available for applications that you configure with hidden draft.
> 
> -   This feature is only supported in standard templates, such as list report or object page, and not in a custom page or section that uses a `Table` building block.

