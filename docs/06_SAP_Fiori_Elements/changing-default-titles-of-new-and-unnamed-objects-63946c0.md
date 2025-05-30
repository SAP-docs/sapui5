<!-- loio63946c02df1d45efbbad5b1658fef3a5 -->

# Changing Default Titles of New and Unnamed Objects

When an end user creates new items in a list report or object page table, SAP Fiori elements provides a default title. Application developers are recommended to replace it with an application-specific title.



<a name="loio63946c02df1d45efbbad5b1658fef3a5__section_msb_g2s_qrb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can override the default titles provided by SAP Fiori elements using the `NEW_OBJECT` and `UNNAMED_OBJECT` keys in the `i18n.properties` file. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

**List Report** and **Object Page**

`XTIT: Title for new unsaved objects`

`NEW_OBJECT= My Custom Title for New Objects`

`XTIT: Default Title for objects that have a saved version`

`UNNAMED_OBJECT= My Custom Title for Unnamed Object`

-   `NEW_OBJECT`: Defines the custom title shown for newly created draft objects in draft-enabled apps and unsaved objects in non-draft apps.

-   `UNNAMED_OBJECT`: Defines a custom default title displayed in both display and edit modes for saved objects.


> ### Note:  
> -   For non-draft applications, the `NEW_OBJECT` and `UNNAMED_OBJECT` keys are not supported in the `i18n.properties` file for list reports.
> 
> -   In object pages, to display a custom default title for saved objects, the `UNNAMED_OBJECT` key must be overridden. SAP Fiori elements does not support specifying default titles for saved objects.



<a name="loio63946c02df1d45efbbad5b1658fef3a5__section_mb5_k2s_qrb"/>

## Additional Features in SAP Fiori Elements for OData V4

In list reports and object pages, the default title for a newly created object in a table is 'New Object'. If an end user saves the object without modifying this title, it is automatically updated to 'Unnamed Object'. If the title is editable, end users can modify this new title as needed. If the end user clears the title, it reverts to the default title 'Unnamed Object'.

To modify the default title, application developers can use the following i18n keys:

-   `T_NEW_OBJECT`: Override the default title 'New Object' for the newly created objects.

-   `T_ANNOTATION_HELPER_DEFAULT_HEADER_TITLE_NO_HEADER_INFO`: Override the default title 'Unnamed Object' for saved objects without a title.


> ### Note:  
> If `UI.HeaderInfo.Typename` is undefined, the title is set to an empty string \(""\) when the end user clears the title or saves the newly created item without modifying the default title 'New Object'.

For more information about i18n keys and how application developers can override them, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

