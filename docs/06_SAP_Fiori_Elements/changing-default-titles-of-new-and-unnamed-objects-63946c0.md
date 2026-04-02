<!-- loio63946c02df1d45efbbad5b1658fef3a5 -->

# Changing Default Titles of New and Unnamed Objects

You can change the default titles of table items.

On list report pages and object pages, the default title for a newly created object in a table is *New Object*. If users save the object without modifying this title, it's automatically updated to 'Unnamed Object'. If the title is editable, users can modify this new title as needed. If the users clear the title, it reverts to the default title *Unnamed Object*.

To modify the default title, you can use the `T_NEW_OBJECT` and `T_ANNOTATION_HELPER_DEFAULT_HEADER_TITLE_NO_HEADER_INFO` keys in the `i18n.properties` file. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

> ### Note:  
> If `UI.HeaderInfo.Typename` is undefined, the title is set to an empty string \(""\) when the users clear the title or saves the newly created item without modifying the default title 'New Object'.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Changing Default Titles of New and Unnamed Objects](changing-default-titles-of-new-and-unnamed-objects-03bf617.md).

