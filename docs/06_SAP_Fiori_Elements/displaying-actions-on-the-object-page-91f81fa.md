<!-- loio91f81fadc288465495f347e9d8ac1073 -->

# Displaying Actions on the Object Page

Specific rules apply when displaying actions on the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Displaying Actions on the Object Page](displaying-actions-on-the-object-page-f65e8b1.md).



<a name="loio91f81fadc288465495f347e9d8ac1073__section_kxw_bmm_ghc"/>

## Order of Actions

The default display order of actions in the object page header is as follows:

1.  Generic actions

    Examples: *Save* and *Edit*

2.  Application-specific actions

    They follow the order defined in the metadata.

3.  Manifest-based custom actions

    For more information on manifest-based custom actions, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md).

4.  *Related Apps* button

5.  Other generic actions

    Example: *Share* functionality




<a name="loio91f81fadc288465495f347e9d8ac1073__section_lxw_bmm_ghc"/>

## Display Based on Mode

The display of actions depends on which mode the user is in:

-   In *Display* mode, the relevant actions are displayed in the header toolbar \(see [Elements of the Object Page](elements-of-the-object-page-642c36c.md)\).

-   In *Edit* or *Create* mode, the footer bar contains the relevant actions, for example, *Save* and *Cancel* in *Edit* mode \(see the mentioned figure\), and *Create* and *Cancel* in *Create* mode.


  
  
**Object Page: Action Triggered from Footer Bar \(Edit Mode\)**

![](images/Object_Page_Footer_Bar_Edit_Mode_2c8767f.png "Object Page: Action Triggered from Footer Bar (Edit Mode)")

You can add criticality to an action button through annotations. For more information, see [Setting the Criticality for Actions](setting-the-criticality-for-actions-475e4d8.md).

**Related Information**  


[Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-87566a3.md "You can enable generic actions in your object header.")

[Adding Action Buttons to Forms in Sections](adding-action-buttons-to-forms-in-sections-14338ee.md "You can add action buttons to the forms contained in sections. These forms are indicated by com.sap.vocabularies.UI.v1.FieldGroup. A form action button is then displayed in the toolbar of the object page section that contains the form.")

[Defining Determining Actions](defining-determining-actions-ee6c827.md "You can add a determining action button to the footer of the object page.")

[Setting the Criticality for Actions](setting-the-criticality-for-actions-475e4d8.md "You can add criticality to an action button by using annotations.")

[Generic Action Buttons in Tables on the Object Page: Additional Considerations](generic-action-buttons-in-tables-on-the-object-page-additional-considerations-d27ae99.md "You can use annotations to enable generic actions in tables on the object page.")

