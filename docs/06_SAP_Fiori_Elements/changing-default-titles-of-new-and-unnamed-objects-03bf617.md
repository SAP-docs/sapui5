<!-- loio03bf617bc3114713be683ca85b501680 -->

# Changing Default Titles of New and Unnamed Objects

When an end user creates new items in a list report or object page table, SAP Fiori elements provides a default title. We recommend application developers to replace it with an application-specific title.

In list reports and object pages, the default title for a newly created object in a table is *New Object*. For saved unnamed items, the title remains *Unnamed Object* in list reports and stays empty on object pages.

To modify the default title, you can use the `NEW_OBJECT` and `UNNAMED_OBJECT` keys in the `i18n.properties` file. For more information, see [Localization of UI Texts](localization-of-ui-texts-91b525b.md).

> ### Note:  
> -   For non-draft applications, the `NEW_OBJECT` and `UNNAMED_OBJECT` keys are not supported in the `i18n.properties` file for list reports.
> 
> -   SAP Fiori elements does not provide a default title for saved objects on object pages. To define a custom default title, you must override the `UNNAMED_OBJECT` key.

