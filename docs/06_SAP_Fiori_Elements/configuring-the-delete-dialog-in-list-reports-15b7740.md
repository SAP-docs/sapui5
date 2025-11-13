<!-- loio15b7740845b44b419a56eb63d34b8ab3 -->

# Configuring the *Delete* Dialog in List Reports

You can adapt the text in the *Delete* dialog to match your requirements.



<a name="loio15b7740845b44b419a56eb63d34b8ab3__section_lc5_jds_cnb"/>

## Additional Features in SAP Fiori Elements for OData V2

When a user deletes a record from the list report, the delete dialog displays the text *"Delete Object 500000000?"* to indicate that object 500000000 is being deleted.

![](images/Delete_a435e28.png)

You can use the i18n key `ST_GENERIC_DELETE_SELECTED` to modify the default text in the delete dialog.

The context displayed in the *Delete* dialog is taken from the `Title` property of the `HeaderInfo` annotation. In the following sample code, the value mapped to the `"so_id"` property is shown in the dialog text.

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


[Adapting Texts in the Delete Dialog Using Extensions \(List Report\)](adapting-texts-in-the-delete-dialog-using-extensions-list-report-25885b6.md "You can adapt the text of the Delete dialog that appears when users delete items from the list report.")

[Adapting Texts for Confirmation Dialog Box When Deleting Lines in a Table](adapting-texts-for-confirmation-dialog-box-when-deleting-lines-in-a-table-0d1fbf4.md "When a user deletes a line in a table on the object page, a confirmation dialog box is displayed. You can adapt the displayed default texts for every table.")

[Configuring the Delete Dialog](configuring-the-delete-dialog-84e4f89.md "You can adapt the text in the delete dialog to match your requirements when deleting an object or item from the tables in the list report or object page.")

