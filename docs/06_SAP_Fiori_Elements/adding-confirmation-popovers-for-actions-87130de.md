<!-- loio87130de10c8a44269c605b0322df6b1a -->

# Adding Confirmation Popovers for Actions

You can display a confirmation popover when a user triggers an action.

> ### Tip:  
> Such a confirmation popover is only supported on actions without an action parameter dialog.

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
> ); CDS
> 				Annotation
> ```



<a name="loio87130de10c8a44269c605b0322df6b1a__section_acx_1nn_dzb"/>

## Additional Features in SAP Fiori Elements for OData V2

Apps can add action-specific messages to confirmation dialog boxes. For more information, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

