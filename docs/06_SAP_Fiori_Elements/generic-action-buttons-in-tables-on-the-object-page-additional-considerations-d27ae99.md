<!-- loiod27ae998a20a4dbead161e3e7c0ac2e8 -->

# Generic Action Buttons in Tables on the Object Page: Additional Considerations

You can use annotations to enable generic actions in tables on the object page.

For more information, see [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).



Within your annotations, you set the `creatable-path` to a particular property of the root object \(entity\) in the back-end system that is either `true` or `false`. If the value of this property is `true`, the *Create* button is displayed; if it is `false`, it is hidden. Note that the `creatable-path` must point to a property of the root entity.



### Code Samples

`creatable-path` 

```xml
<NavigationProperty Name="to_ProductText" sap:creatable-path="CanCreateProductText".../>
```



### Enable or Disable Delete Button

You can enable or disable the *Delete* button in the toolbar of tables on the object page based on certain conditions in the back-end system. For example, you can disable the *Delete* button for a product's text if the text is in English.

Within your annotation, you set the `deletable-path` for an entity set to point to a particular Boolean property of the entity that has a value of either `true` or `false`. The *Delete* button is enabled if the selected item's property is `true`. If multiple selection is enabled for the table, the button is enabled if at least one selected item is deletable.



<a name="loiod27ae998a20a4dbead161e3e7c0ac2e8__section_l5d_srn_ghc"/>

## Display of the *Create* Button

The *Create* button is only displayed in the table toolbar when the object page is in *Edit* mode, as shown below.

  
  
**Create Button in Table Toolbar**

![](images/CreatablePath_ObPTable_1d6a9b1.png "Create Button in Table Toolbar")



<a name="loiod27ae998a20a4dbead161e3e7c0ac2e8__section_wmh_vbc_ztb"/>

## Code Samples

> ### Sample Code:  
> XML Annotation
> 
> ```
> 
> <EntitySet Name="STTA_C_MP_ProductText"
>     EntityType="STTA_PROD_MAN.STTA_C_MP_ProductTextType" 
>     sap:deletable-path="Delete_mc" 
>     sap:content-version="1"/>
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

**Related Information**  


[Example: Adding Custom Filter Fields in Table Toolbar](example-adding-custom-filter-fields-in-table-toolbar-e34f78f.md "You can add custom filter fields like selects, combo boxes, or date pickers to your object page table toolbar using view extensions.")

