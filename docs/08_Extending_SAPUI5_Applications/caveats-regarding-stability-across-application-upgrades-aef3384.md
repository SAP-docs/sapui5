<!-- loioaef3384510724522a07df94ec90d1351 -->

# Caveats Regarding Stability Across Application Upgrades

There are a few restrictions in the compatibility of custom applications that have to be considered when extending SAPUI5 standard applications.

Offering modification-free extensions and customizing allows to ship new versions of the application without overwriting customer-specific modifications. Thus, these modifications can survive an application upgrade. However, the degree of compatibility which can be forseen is limited. If a view is replaced by a custom view but the original view is no longer used, the custom view will, of course, also no longer be used. Or, if a custom controller extension accesses a field in the original view, it has to be able to cope with the possibility that the field may no longer exist or have a different type in an upgraded version of the application, otherwise it will break.

Many possible reasons exist that modifications can not be applied any longer or even break the upgraded version of an application and it is, therefore, not possible to compile an exhaustive list of all possible reasons. The following list gives some examples:

-   View modifications \(hiding controls\)

    -   If the original control is no longer used or has a different or not a given ID, a view modification will no longer be applied.

    -   If the original view name is changed or the view is no longer used, an invalid view modification will no longer be applied.

    -   However, a view modification is simply ignored and will never lead to a crash.


-   View extensions \(added content in extension points\)

    -   If the extension point is removed or renamed or in an area or container which is invisible under certain conditions, the view extension will no longer be applied.

    -   If the view name is changed or the extension point is moved to a different view, the view extension will no longer be applied.

    -   If the controls around the extension point have changed or the extension point has been moved to a different environment inside the same view, view extensions may look weird, have a broken layout or display or do not really fit the new environment.

    -   If the updated application requires the extension to be of a certain control type, the view extension may break the application.

    -   If custom code relies on the presence of the extensions, the view extension may break the application.


-   View replacements

    -   If the original view name is changed or the view is no longer used, view replacements will no longer be applied.

    -   As long as no other custom code relies on the view to be present, view replacements should not cause a crash.


-   Controller extensions

    -   If the extension code accesses parts of the original application which are changed, for example, removed, have a different type or a different ID, controller extensions can cause a crash.

    -   If the extension code makes assumptions about the application which are no longer valid after an update, controller extensions can lead to a crash.

    -   If original code is overwritten which is required for the application to run properly, controller extensions can lead to a crash.

    -   If the controller name is changed, controller extensions are no longer applied.


-   Other extension types have similar caveats.


In addition to this, all content changes such as additions, removals, and structure changes may affect CSS and JavaScript code which relies on the position of certain elements in the DOM. Partly these caveats are compatibility requirements for applications, partly they are suggestions for customizing development how to create more robust extensions.

