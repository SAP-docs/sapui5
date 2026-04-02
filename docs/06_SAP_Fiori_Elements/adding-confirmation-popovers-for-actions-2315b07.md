<!-- loio2315b0735caa4960922e969e9560f669 -->

# Adding Confirmation Popovers for Actions

You can display a confirmation popover when the user triggers an action.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Adding Confirmation Popovers for Actions](adding-confirmation-popovers-for-actions-87130de.md).

> ### Tip:  
> Confirmation popovers are only supported on actions without an action parameter dialog.

To display a confirmation popover, add the `IsActionCritical` annotation to your action as shown below:



> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="GWSAMPLE_BASIC.GWSAMPLE_BASIC_Entities/RegenerateAllData">
>         <Annotation Term="com.sap.vocabularies.Common.v1.IsActionCritical" Bool="true"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate GWSAMPLE_BASIC.RegenerateAllData with @(
>     Common.IsActionCritical : true
> );
> ```

Apps can add action-specific messages to confirmation dialog boxes. For more information, see [Localization of UI Texts](localization-of-ui-texts-91b525b.md).

