<!-- loio87566a3813564b8c93c7b2227cb977d7 -->

# Enabling Actions in the Object Page Header

You can enable generic actions in your object header.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Enabling Actions in the Object Page Header](enabling-actions-in-the-object-page-header-5fe4396.md).

*Edit*, *Delete* and *Copy* are the generic actions.

All `com.sap.vocabularies.UI.v1.DataFieldForAction` within the unqualified `UI.Identification` are interpreted as actions. The system renders a button in the header displaying the text of the data field label.

  
  
**Object Page: Enable Actions in Header**

![](images/Object_Page_Enable_Actions_in_Header_b506b5c.png "Object Page: Enable Actions in Header")



Annotations for the *Copy with new supplier* Button:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Identification">
>       <Collection>
>             <Record Type="UI.DataFieldForAction">
>                   <PropertyValue Property="Label" String="Copy with new supplier" />
>                   <PropertyValue Property="Action"
>                         String="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy_new_supplier" />
>                   <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High" />
>             </Record>
>             ...
>       </Collection>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.identification: [
>   {
>     importance: #HIGH,
>     label: 'Copy with new supplier',
>     dataAction: 'PUSHDOWN:STTA_C_MP_ProductCopy_new_supplier',
>     type: #FOR_ACTION,
>     position: 1 
>   }
> ]
> product;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.Identification : [
>     {
>         $Type : 'UI.DataFieldForAction',
>         Label : 'Copy with new supplier',
>         Action : 'STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy_new_supplier',
>         ![@UI.Importance] : #High
>     }
> ]
> 
> ```

The object page context is always passed when a header action is invoked.



### *Edit* and *Delete* Buttons

The *Edit* and *Delete* buttons are displayed as shown above, if the following conditions are met:

-   *Edit* button: `sap:updatable` is not set to `false`

-   *Delete* button: `sap:deletable` is not set to `false`

> ### Note:  
> If you want to specify conditions for deletion or updates \(using the `deletable-path` or `updatable path` annotation\), you need to ensure that you have not made the `sap:deletable` or `sap:updatable` setting in your annotations.

For more information about the *Delete* button, see the *Enable or Disable *Delete* Button \(Using `deletable-path` Annotations\)* section in [Adding Actions to Tables](adding-actions-to-tables-c909f6b.md).



### Show or Hide the Edit Button \(Using `updatable-path` Annotation\)

You can choose to display or hide the *Edit* button on the object page based on certain conditions in your back-end system. For example, you may want to disable editing for a sales order that has already been paid.

In your annotation, set the `updatable-path` for the *Edit* button to point to a particular property of an object \(entity\) in the back-end system that is either `true` or `false`. If the value of this property is `true`, the *Edit* button is displayed; if it is `false`, it is hidden.

> ### Note:  
> If you want to specify conditions for the `updatable-path` annotation, you need to ensure that you have not made the `sap:updatable` setting in your annotations.



### Code Samples for `updatable-path`

The code sample below shows you how to set up your annotation to display or hide the *Edit* button, based on the value of the `Updatable_mc` property in the back-end system.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_Product">
>     <Annotation Term="Org.OData.Capabilities.V1.UpdateRestrictions">
>         <Record>
>             <PropertyValue Property="Updatable" Path="Updatable_mc"/>
>         </Record>
>     </Annotation>
> </Annotations>
> ```



### Edit Action on Subobject Page

The edit action is also available on the subobject page. Its behavior depends on the annotations on both levels:

-   The edit button is displayed on the subobject page only if it is also visible on the object page and if the subobject page entity is not annotated to hide it.

-   The edit button is enabled on the subobject page only if it is also enabled on the object page and if the subobject page entity is not annotated to disable it.


> ### Note:  
> Selecting the edit button on the subobject page enables the edit action for the entire object page, not just the subobject page where it was selected.



### Copy Action

The *Copy* button is not available by default. However, applications can define a standard copy action by annotating a `dataFieldForAction` with `isCopyAction`.

This *Copy* button is placed after the *Delete* button.

![](images/Copy_Action_in_the_Object_Page_c726782.png)

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Identification">
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
> UI.Identification : [
>     {
>         $Type : 'UI.DataFieldForAction',
>         Label : 'Copy',
>         Action : 'STTA_PROD_MAN.STTA_PROD_MAN_Entities/STTA_C_MP_ProductCopy',
>         ![@UI.IsCopyAction] : true,
>     },
> ],
> ```

Applications can define a label for this button. If a label is not provided, then by default this button is labeled as *Copy*.

> ### Note:  
> The copy action is only available on the object page, not on the subobject pages.

**Related Information**  


[Displaying Actions on the Object Page](displaying-actions-on-the-object-page-91f81fa.md "Specific rules apply when displaying actions on the object page.")

[Actions](actions-14418d7.md "You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.")

