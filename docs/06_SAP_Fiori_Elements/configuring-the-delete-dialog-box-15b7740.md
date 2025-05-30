<!-- loio15b7740845b44b419a56eb63d34b8ab3 -->

# Configuring the *Delete* Dialog Box

You can adapt the text in the *Delete* dialog box to match your requirements.



<a name="loio15b7740845b44b419a56eb63d34b8ab3__section_lc5_jds_cnb"/>

## Additional Features in SAP Fiori Elements for OData V2

When a user deletes a record from the list report, the text in the dialog box "Delete Object 500000000?" is displayed in the delete confirmation, informing the user that object 500000000 is being deleted.

![](images/Delete_a435e28.png)

The corresponding i18n key for the text used by the SAP Fiori elements framework in the delete confirmation dialog is `ST_GENERIC_DELETE_SELECTED`. You can adapt it by maintaining a text for this key in the app's i18n file.

The context displayed in the *Delete* dialog box is taken from the `Title` property of the `HeaderInfo` annotation. In the following sample code, the value mapped to the `"so_id"` property is shown in the dialog text.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.HeaderInfo">
> <Record>
>   <PropertyValue Property="TypeName" String="Sales Order"/>
>      <PropertyValue Property="TypeNamePlural" String="Sales Orders"/>
>      <PropertyValue Property="Title">
>        <Record Type="UI.DataField">
>          <PropertyValue Property="Value" Path="so_id"/>
>        </Record>
>      </PropertyValue>
>    </Record>
>  </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.headerInfo: {
>   typeName: 'Sales Order',
>   typeNamePlural: 'Sales Orders',
>   title: {
>     value: 'SO_ID',
>     type: #STANDARD
>   }
> }
> annotate view STTA_C_MP_PRODUCT with {
> 
> }
> 
> ```



<a name="loio15b7740845b44b419a56eb63d34b8ab3__section_yfk_4ds_cnb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can override the keys that start with `C_TRANSACTION_HELPER_CONFIRM_DELETE` in the custom `i18n` file. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

**Related Information**  


[Adapting Texts in the Delete Dialog Box Using Extensions \(List Report\)](adapting-texts-in-the-delete-dialog-box-using-extensions-list-report-25885b6.md "You can adapt the text of the Delete dialog box that is displayed when you delete list report items.")

[Adapting Texts for Confirmation Dialog Box When Deleting Lines in a Table](adapting-texts-for-confirmation-dialog-box-when-deleting-lines-in-a-table-0d1fbf4.md "When a user deletes a line in a table on the object page, a confirmation dialog box is displayed. You can adapt the displayed default texts for every table.")

[Configuring the Delete Confirmation Dialog Box](configuring-the-delete-confirmation-dialog-box-84e4f89.md "You can adapt the text in the Delete dialog box to match your requirements while deleting an object or an item from the list report and object page tables.")

