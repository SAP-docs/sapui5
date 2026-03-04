<!-- loiod27ae998a20a4dbead161e3e7c0ac2e8 -->

# Generic Action Buttons in Tables on the Object Page: Additional Considerations

You can use annotations to enable generic actions in tables on the object page.

For more information, see [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).



## Display of the *Create* Button

The *Create* button is only displayed in the table toolbar when the object page is in *Edit* mode, as shown below.

  
  
**Create Button in Table Toolbar**

![](images/CreatablePath_ObPTable_1d6a9b1.png "Create Button in Table Toolbar")



<a name="loiod27ae998a20a4dbead161e3e7c0ac2e8__section_wmh_vbc_ztb"/>

## Code Samples

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductText">
>    <Annotation Term="Org.OData.Capabilities.V1.DeleteRestrictions">
>         <Record>
>             <PropertyValue Property="Deletable" Path="Delete_mc"/>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate STTA_PROD_MAN.STTA_C_MP_ProductText with @(
>   Capabilities.DeleteRestrictions : {
>     Deletable : Delete_mc
>   }
> );
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Generic Action Buttons in Tables on the Object Page: Additional Considerations](generic-action-buttons-in-tables-on-the-object-page-additional-considerations-510b6af.md).

**Related Information**  


[Example: Adding Custom Filter Fields in Table Toolbar](example-adding-custom-filter-fields-in-table-toolbar-e34f78f.md "To add custom filter fields in a table toolbar, follow the steps described below:")

