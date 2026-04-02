<!-- loio993e99eae4414b73bc7afef9518c79bf -->

# Actions on the List Report Page

You can configure various action buttons on the list report page.



<a name="loio993e99eae4414b73bc7afef9518c79bf__section_rfx_pry_cnb"/>

## Actions by Position on the UI



### Global Actions

Applications can define custom global actions by enhancing the `manifest.json` file.

For more information, see [Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md).



### Actions in the Table Toolbar

The table toolbar on the list report page contains buttons used to trigger actions for the entire list report page or for selected items. These actions can include generic functions offered by SAP Fiori elements or app-specific actions. For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).

  
  
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




<a name="loio993e99eae4414b73bc7afef9518c79bf__section_qzm_wjs_tnb"/>

## Standard Actions

You can display actions to allow users to perform an action for one or more lines in the table:

-   **Delete Action**

    Display the *Delete* button as an action on a table. For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).

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



### Create Action

The *Create* button on a list report page is enabled based on the presence of `NewAction` in the metadata. This is the default behavior for draft-based applications:

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <Annotation Term="Common.DraftRoot">
> <Record Type="Common.DraftRootType">
> <PropertyValue Property="ActivationAction" String="com.c_salesordermanage_sd.draftActivate"/>
> <PropertyValue Property="EditAction" String="com.c_salesordermanage_sd.draftEdit"/>
> <PropertyValue Property="PreparationAction" String="com.c_salesordermanage_sd.draftPrepare"/>
> <PropertyValue Property="NewAction" String="com.c_salesordermanage_sd.ReturnInProcess"/>
> </Record>
> </Annotation>
> ```

The `InsertRestrictions` on the table entity set is completely ignored when you enable *Create* on a list report page due to the presence of `NewAction`. The button is always enabled, if visible, and the visibility can be controlled with the `OperationAvailable` property through the following logic:

-   If `OperationAvailable=false`, then the *Create* button will not be displayed in the list report page table.

-   If `OperationAvailable=true` or is not specified, then the *Create* button will be displayed.

-   If `OperationAvailable=null` is ignored and the *Create* button is displayed, this is equivalent to `OperationAvailable` not being specified.


For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).



### Create Mode

Create mode is available as follows:

-   **Create page** \(default\): The application navigates to an object page where the user can enter values and create a new object. When using **Create page**, the application navigates to an object page and displays a dialog containing the immutable properties of the new object \(if applicable\). For more information about overriding the title of the dialog, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

-   **Create dialog**: A dialog opens where the user can enter values and trigger object creation. For more information, see [Enabling Object Creation Using the Dialog on the List Report Page](enabling-object-creation-using-the-dialog-on-the-list-report-page-ceb9284.md).

-   **`External`**: Clicking the *Create* button triggers navigation to an external SAP Fiori launchpad-based application which manages object creation. For more information, see [Create Mode as an External App](create-mode-as-an-external-app-5c2bc2e.md).




> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Actions on the List Report Page](actions-on-the-list-report-page-43ff607.md).

