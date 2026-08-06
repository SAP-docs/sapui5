<!-- loio8ad8d795e0b14ce79325cc0a4b383dcc -->

# Using an Analytical Table or Tree Table with a Draft-Enabled Service

Analytical tables and tree tables can be used with draft-enabled services in SAP Fiori elements for OData V4, displaying only active entities with draft indicators. This configuration has specific behaviors for creating and editing records, with some restrictions on object pages and the flexible column layout.

The list report page can display an analytical table or tree table with a draft-enabled service with the following behavior:

-   Only the active entities are displayed.

-   The *Editing Status* field is not displayed in the filter bar.

-   The draft indicator is shown if a draft exists for an active record.

-   When creating a new object, the new object needs to be saved or discarded.

-   The behavior of already saved objects remains unchanged: a draft can be saved, kept, or discarded. The navigation is also unchanged.


When used on an object page or on a custom page, the analytical table is displayed in read-only mode, and delete and create operations aren't available. This behavior doesn't apply to the tree table.

> ### Note:  
> When switching between edit mode and display mode, the expansion state of a tree table in an object page isn't kept.

> ### Restriction:  
> An analytical table or tree table can't be displayed with a draft-enabled service in the flexible column layout.

