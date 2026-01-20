<!-- loio63946c02df1d45efbbad5b1658fef3a5 -->

# Changing Default Titles of New and Unnamed Objects

When an end user creates new items in a list report or object page table, SAP Fiori elements provides a default title. We recommend application developers to replace it with an application-specific title.



<a name="loio63946c02df1d45efbbad5b1658fef3a5__section_msb_g2s_qrb"/>

## Additional Features in SAP Fiori Elements for OData V2

In list reports and object pages, the default title for a newly created object in a table is *New Object*. For saved unnamed items, the title remains *Unnamed Object* in list reports and stays empty on object pages.

To modify the default title, you can use the `NEW_OBJECT` and `UNNAMED_OBJECT` keys in the `i18n.properties` file. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

> ### Note:  
> -   For non-draft applications, the `NEW_OBJECT` and `UNNAMED_OBJECT` keys are not supported in the `i18n.properties` file for list reports.
> 
> -   SAP Fiori elements does not provide a default title for saved objects on object pages. To define a custom default title, you must override the `UNNAMED_OBJECT` key.



<a name="loio63946c02df1d45efbbad5b1658fef3a5__section_mb5_k2s_qrb"/>

## Additional Features in SAP Fiori Elements for OData V4

In list reports and object pages, the default title for a newly created object in a table is *New Object*. If an end user saves the object without modifying this title, it is automatically updated to 'Unnamed Object'. If the title is editable, end users can modify this new title as needed. If the end user clears the title, it reverts to the default title *Unnamed Object*.

To modify the default title, you can use the `T_NEW_OBJECT` and `T_ANNOTATION_HELPER_DEFAULT_HEADER_TITLE_NO_HEADER_INFO` keys in the `i18n.properties` file. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

> ### Note:  
> If `UI.HeaderInfo.Typename` is undefined, the title is set to an empty string \(""\) when the end user clears the title or saves the newly created item without modifying the default title 'New Object'.

