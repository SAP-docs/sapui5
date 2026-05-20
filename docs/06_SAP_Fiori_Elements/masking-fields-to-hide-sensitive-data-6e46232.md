<!-- loio6e46232975ba45ffab338cc515c57d9e -->

# Masking Fields To Hide Sensitive Data

You can hide the value of an input field from the UI in SAP Fiori elements for OData V4.

Values of certain input fields must be hidden from the UI to protect sensitive data. To achieve this, you can use the `Common.Masked` annotation to prevent data from being displayed in plain text.

  
  
**Masked Field**

![A screenshot of a field labeled Masked Field. Instead of the value, it shows a row of asterisks.](images/Masked_Password_Field_4cc5334.png "Masked Field")

In edit mode, the input field masks each character with a dot \(•\), so end users do not see the text they enter as plain text. In display mode, the input field replaces each character with an asterisk \(\*\).

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="sap.fe.core.FieldDisplayStyles.RootEntity/MaskedField"> 
>         <Annotation Term="Common. Masked" Bool="true"/> 
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
> MaskedField  : String  @Common : {Masked: true};
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Field - Masked Field](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldMasked).

This feature only provides casual visual protection against shoulder surfing and doesn't influence how data is transferred to the back end. The data is transferred to the client like any other property in plain text without masking.

Therefore, sensitive or high-security data must never be delivered from the back end in an unmasked or unencrypted state. In addition to using the `Common.Masked` annotation, we strongly recommend masking sensitive values in the back end before sending them to the client.

For more security-related information, see [Security Configuration](security-configuration-ba0484b.md).

