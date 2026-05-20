<!-- loio36ef70d6ccfc427ba2789da05bd20d4a -->

# Fields Representing Boolean Properties

You can render a Boolean property as a checkbox or radio button in SAP Fiori elements for OData V4.

By default, Boolean properties are rendered as checkboxes.

For information and live examples, see the SAP Fiori development portal at [Building Blocks - Field - Checkbox](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldCheckbox).

Instead of a checkbox, you can render a Boolean property as a radio button group with two options \(*Yes* / *No*\). Use this approach when users need to trigger an immediate change, such as when choosing an option that updates the data on the screen immediately without needing to press *Submit*.

To render a Boolean property as a group of radio buttons, use the field `formatOptions` either in your XML view or in the `manifest.json` file:

> ### Sample Code:  
> XML View
> 
> ```
> 
> <macros:Field metaPath="BooleanProperty" >
>     <macros:formatOptions>
>         <macrosF:FieldFormatOptions useRadioButtonsForBoolean="true"/>
>     </macros:formatOptions>
> </macros:Field>
> 
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.FieldGroup#GeneralInformation": {
>         "fields": {
>             "DataField::booleanField": {
>                 "formatOptions": {
>                     "useRadioButtonsForBoolean": true
>                 }
>             }
>         }
>     }
> }
> 
> ```

