<!-- loiof65e8b196335457cbfc891418ec25cfd -->

# Displaying Actions on the Object Page

Specific rules apply when displaying actions on the object page in SAP Fiori elements for OData V4.



## Order of Actions

The default display order of actions in the object page header is as follows:

1.  Generic actions

    Examples: *Save* and *Edit*

2.  Application-specific actions

    They follow the order defined in the metadata.

3.  Manifest-based custom actions

    For more information on manifest-based custom actions, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md).

4.  *Related Apps* button

5.  Other generic actions

    Example: *Share* functionality


If an application has set the criticality for an action, that is, if app developers have defined semantic actions, these are automatically placed first. This means semantic actions are placed before generic actions \(like *Save* and *Edit*\) and in this case the generic actions are no longer automatically emphasized.



## Display Based on Mode

The display of actions depends on which mode the user is in:

-   In *Display* mode, the relevant actions are displayed in the header toolbar \(see [Object Page](object-page-645e27a.md)\).

-   In *Edit* or *Create* mode, the footer bar contains the relevant actions, for example, *Save* and *Cancel* in *Edit* mode \(see the mentioned figure\), and *Create* and *Cancel* in *Create* mode.


  
  
**Object Page: Action Triggered from Footer Bar \(Edit Mode\)**

![](images/Object_Page_Footer_Bar_Edit_Mode_2c8767f.png "Object Page: Action Triggered from Footer Bar (Edit Mode)")

You can add criticality to an action button through annotations. For more information, see [Setting the Criticality for Actions](setting-the-criticality-for-actions-12f2ba2.md).



<a name="loiof65e8b196335457cbfc891418ec25cfd__section_ayc_fnz_qsb"/>

## Changing the Order of Action Buttons Specified by an Application

You can change the order of action buttons for both manifest-based actions and annotation-based actions. To do so, use `"position"` to define the placement of your action. For more information, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Displaying Actions on the Object Page](displaying-actions-on-the-object-page-91f81fa.md).

**Related Information**  


[Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-5fe4396.md "You can enable generic actions in the object page header in SAP Fiori elements for OData V4.")

[Adding Action Buttons to Forms in Sections](adding-action-buttons-to-forms-in-sections-e64efda.md "You can add action buttons to the forms contained in sections in SAP Fiori elements for OData V4.")

[Defining Determining Actions](defining-determining-actions-1743323.md "You can add a determining action button to the footer of the object page in SAP Fiori elements for OData V4.")

[Setting the Criticality for Actions](setting-the-criticality-for-actions-12f2ba2.md "You can add criticality to an action button by using annotations in SAP Fiori elements for OData V4.")

[Generic Action Buttons in Tables on the Object Page: Additional Considerations](generic-action-buttons-in-tables-on-the-object-page-additional-considerations-d27ae99.md "You can use annotations to enable generic actions in tables on the object page in SAP Fiori elements for OData V2.")

