<!-- loiof65e8b196335457cbfc891418ec25cfd -->

# Displaying Actions on the Object Page

Specific rules apply when displaying actions on the object page.



## Order of Actions

The default display of order of actions in the object page header is as follows:

1.  Generic actions

    Examples: *Save* and *Edit*

2.  Application-specific actions

    They follow the order defined in the metadata.

3.  Manifest-based custom actions

    For more information on manifest-based custom actions, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md).

4.  *Related Apps* button

5.  Other generic actions

    Example: *Share* functionality




## Display Based on Mode

The display of actions depends on which mode the user is in:

-   In *Display* mode, the relevant actions are displayed in the header toolbar \(see [Object Page Elements](object-page-elements-645e27a.md)\).

-   In *Edit* or *Create* mode, the footer bar contains the relevant actions, for example, *Save* and *Cancel* in *Edit* mode \(see figure below\), and *Create* and *Cancel* in *Create* mode.


   
  
**Object Page: Action Triggered from Footer Bar \(Edit Mode\)**

 ![](images/Object_Page_Footer_Bar_Edit_Mode_2c8767f.png "Object Page: Action Triggered from Footer Bar (Edit Mode)") 

You can add criticality to an action button via annotations. For more information, see [Setting the Criticality for Actions](setting-the-criticality-for-actions-12f2ba2.md).



<a name="loiof65e8b196335457cbfc891418ec25cfd__section_igr_pyx_qmb"/>

## Additional Features in SAP Fiori Elements for OData V2

> ### Note:  
> In non-draft applications, users can choose the *Save and Edit* button to save the current changes. The object page stays in edit mode so that they can continue editing. You can enable this feature via SAPUI5 Visual Editor. For more information, see [Adapting the UI: List Report and Object Page](adapting-the-ui-list-report-and-object-page-0d2f1a9.md).
> 
> If this feature is enabled, you have to make following changes:
> 
> -   Change the type of the *Save and Edit* button to `Emphasized` and of the *Save* button to `Transparent`. You can do so by changing the `Type` property of both buttons in SAPUI5 Visual Editor.
> 
> -   Place the *Save and Edit* button as the first button in the footer and the *Save* button as the second button, using SAPUI5 Visual Editor.



<a name="loiof65e8b196335457cbfc891418ec25cfd__section_ayc_fnz_qsb"/>

## Additional Features in SAP Fiori Elements for OData V4

If an application has set the criticality for an action, that is, if app developers have defined semantic actions, these are automatically placed first. This means semantic actions are placed before generic actions \(like *Save* and *Edit*\) and in this case the generic actions are no longer automatically emphasized.



### Changing the Order of Action Buttons Specified by an Application

You can change the order of action buttons for both manifest-based actions and annotation-based actions. To do so, use `"position"` to define the placement of your action. For more information, see the *Additional Features in SAP Fiori elements for OData V4* section in [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md).

**Related Information**  


[Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-5fe4396.md "You can enable generic actions in your object header.")

[Adding Action Buttons to Forms in Sections](adding-action-buttons-to-forms-in-sections-e64efda.md "You can add action buttons to the forms contained in sections. These forms are indicated by com.sap.vocabularies.UI.v1.FieldGroup. A form action button is then displayed in the toolbar of the object page section that contains the form.")

[Defining Determining Actions](defining-determining-actions-1743323.md "You can add a determining action button to the footer of the object page.")

[Setting the Criticality for Actions](setting-the-criticality-for-actions-12f2ba2.md "You can add criticality to an action button via annotations.")

[Generic Action Buttons in Tables on the Object Page: Additional Considerations](generic-action-buttons-in-tables-on-the-object-page-additional-considerations-d27ae99.md "You can use annotations to enable generic actions in tables on the object page.")

