<!-- loio43ff6075c0e04a30b947d8a246024fa4 -->

# Actions on the List Report Page

You can configure various action buttons on the list report page.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Actions on the List Report Page](actions-on-the-list-report-page-993e99e.md).



<a name="loio43ff6075c0e04a30b947d8a246024fa4__section_rfx_pry_cnb"/>

## Actions by Position on the UI



### Global Actions

Applications can define custom global actions by enhancing the `manifest.json` file.

For more information, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-3530e6b.md).



### Actions in the Table Toolbar

The table toolbar on the list report page contains buttons used to trigger actions for the entire list report page or for selected items. These actions can include generic functions offered by SAP Fiori elements or app-specific actions. For more information, see [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).

  
  
**Example: Table Toolbar Actions and Inline Actions**

![](images/Actions_in_the_Table_Toolbar_856c5a4.png "Example: Table Toolbar Actions and Inline Actions")



### **Generic and Application-Specific Actions**

**Generic Actions**

You can use the following generic actions in the table toolbar:

-   Create a new item if the entity set can be created.

-   Delete of one or more items if the entity set can be deleted.


**App-Specific Actions**

Depending on your use case, you can define actions that are displayed in the table toolbar for your app, for example, *Copy* and *Approve*. You can define the following types of actions for your app:

-   Actions that require user confirmation, for example, for critical actions that have severe consequences. The system opens a dialog in which the user has to confirm the action.

-   Actions that require additional user input, for example, an approval comment. The system opens a dialog with one or more entry elements in which the user enters the required data.

-   Actions that require none of the above. The system triggers the action.

-   Actions that trigger external navigation.




<a name="loio43ff6075c0e04a30b947d8a246024fa4__section_qzm_wjs_tnb"/>

## Standard Actions

You can display actions to allow users to perform an action for one or more lines in the table:

-   **Delete Action**

    Display the *Delete* button as an action on a table. For more information, see [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).

-   **Create Action**

    Set up your annotations so that the *Create* action is rendered in the table toolbar of the list report page.

-   **Copy Action**




### Copy Action

The *Copy* button is not available by default. However, applications can define a standard copy action by annotating `dataFieldForAction` with `isCopyAction`.

This *Copy* button is automatically placed after the *Create* button.

![](images/Copy_Action_in_the_List_Report_f337b65.png)

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.LineItem">
>   <Collection>
>       <Record Type="UI.DataFieldForAction">
>           <PropertyValue Property="Label" String="Copy" />
>           <PropertyValue Property="Action" String="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy" />
>           <Annotation Term="UI.IsCopyAction" Bool="true" />
>      </Record>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.LineItem : [
>     {
>         $Type : 'UI.DataFieldForAction',
>         Label : 'Copy',
>         Action : 'STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy',
>         ![@UI.IsCopyAction] : true,
>     },
> ], 
> 
> ```

Applications can define a label for this button. If no custom label is provided, the default label is *Copy*.



### Standard Action: Create

The *Create* action is enabled by default, because the entity set is creatable.

`sap:creatable="true"` is set for the entity set.

By default, a POST call is made when the *Create* button is clicked. However, in draft-enabled application, you can configure applications to make a call to a function import specified in `newAction` by making the `useNewActionForCreate` manifest setting. This is possible if `newAction` is defined in the `draftRoot` annotation as follows:

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <Annotation Term="Common.DraftRoot">
> <Record>
> <PropertyValue Property="NewAction" 
>     String="cds_zrc_ce_localized_srv.cds_zrc_ce_localized_srv_Entities/Create"/>
> </Record>
> </Annotation>
> ```

Configure the following setting in the `manifest.json` file to turn on draft creation with `newAction`:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "ListReport|Localized": {
> 	"entitySet": "Localized",
> 	"component": {
> 	"name": "sap.suite.ui.generic.template.ListReport",
> 	"list": true,
> 	"settings": {
> 	"useNewActionForCreate": true
> 	}
> },
> ```

For more information about actions, see [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).

When a new function import has parameters, a popup appears upon clicking *Create*. The following sample code shows how to define the title for the parameter dialog:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="SAP.FCLM_BAM_ACCOUNTWD_SRV_Entities/FunctionImportName">
> <Annotation Term="Common.Label" String="Create"/>
> </Annotations>
> 
> ```

If the title is not defined in the annotation, the default title is displayed from the `DIALOG_TITLE_NEW_ACTION_FOR_CREATE` i18n key. Applications can modify the title by using the same i18n key. For more information, see [Localization of UI Texts](localization-of-ui-texts-91b525b.md).

The button label for the new action within the list page table toolbar is *Create* by default. However, applications can overwrite it by modifying the `CREATE_OBJECT` i18n key.

The button within the dialog box says *Continue*. However, applications can overwrite it by modifying the `DIALOG_ACTION_BUTTON_NEW_ACTION_FOR_CREATE` i18n key.

