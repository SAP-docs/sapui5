<!-- loio5260b9ca249f465ab33769b9edb442aa -->

# The `Field` Building Block

The `Field` building block provides an easy way to instantiate a property that was configured as part of the service metadata. The `Field` analyzes the different annotations that are defined for the property to create the most appropriate controls and additionally offers you configuration options for adjusting the behavior to fit your needs.



You can instantiate the building block by referencing the building block namespace within a fragment enabled for building block usage:

> ### Sample Code:  
> ```
> <macros:Field xmlns:macro="sap.fe.macros" metaPath="MyProperty"/>
> ```

This instantiates the actual control tree that corresponds to the `Field` building block.

You can use the `Field` building block either standalone or inside the `fields` aggregation of a `FormElement` building block for automatically getting a label for the field corresponding to the metadata. You can use the `Field` building block inside custom header facets, custom sections, custom pages, and custom table columns.

You can also use the `Field` building block to dynamically create fields at runtime. You can use this building block within controllers for more flexibility and a wider variety of use cases.

The following sample code shows an example of a field used inside a dialog:

> ### Sample Code:  
> ```
> createField: function () {
>     const maxLength = new FormatOptions({ textMaxLength: 10 });
>     const field = new Field({ metaPath: "/Entities/singleLine", formatOptions: maxLength });
> 
>     const newDialog = new Dialog({
>         title: "Dialog",
>         content: [
>             new Label({
>                 text: "My field",
>                 labelFor: field
>             }),
>             field,
>         ],
>         beginButton: new Button({
>             text: "OK",
>             press: function () {
>                 newDialog.close();
>             }
>         }),
>         endButton: new Button({
>             text: "Cancel",
>             press: function () {
>                 newDialog.close();
>             }
>         })
>     });
>     newDialog.addStyleClass("sapUiContentPadding");
>     newDialog.bindElement("/Entities(1)");
>     this.getExtensionAPI().addDependent(newDialog);
>     newDialog.open();
> }
> ```



<a name="loio5260b9ca249f465ab33769b9edb442aa__section_v3v_mjx_dfc"/>

## Configuration Using Manifest Settings

You can use manifest settings to configure the `Field` building block.

The following settings are available:

-   `readOnly`
-   `semanticObject`
-   The following `formatOptions` parameters:

    -   `textLinesEdit`
    -   `textMaxLines`
    -   `textMaxCharactersDisplay`
    -   `textExpandBehaviorDisplay`
    -   `textMaxLength`

    For more information about using the `formatOptions` settings, see the [Manifest-Based Definition](different-representations-of-a-field-c18ada4.md#loioc18ada4bc56e427a9a2df2d1898f28a5__ManifestBasedDefinition) subsection in [Different Representations of a Field](different-representations-of-a-field-c18ada4.md).


> ### Restriction:  
> You can only use the `readOnly` and `semanticObject` settings if you use the `Field` building block as follows:
> 
> -   If you use the `Field` building block in a standard UI, you must use the field within a field group.
> 
> -   If you use the `Field` building block in a custom section or a custom page, you must use the field within a `Form` building block with an assigned field group.

See the following sample code of using the `readOnly` setting:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "SalesOrderManageObjectPage": {
>                 "options": {
>                     "settings": {
>                         "controlConfiguration": {
>                             "@com.sap.vocabularies.UI.v1.FieldGroup#myQualifier": {
>                                 "fields": {
>                                     "DataField::myFormTextField": {
>                                         "readOnly": true
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



<a name="loio5260b9ca249f465ab33769b9edb442aa__section_idk_qmr_j5b"/>

## API

For information about the `Field` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Field).



<a name="loio5260b9ca249f465ab33769b9edb442aa__section_r5c_5mr_j5b"/>

## Examples

1.  When you use a `Field` building block, the differences in the bound data elements result in different UI appearances, as shown in the following examples:

    -   A data element of type `Time` appears as an input field with a time picker value help in edit mode.

        > ### Sample Code:  
        > Custom Section Fragment for Data Element `timeData` \(XML\)
        > 
        > ```xml
        > <core:FragmentDefinition
        > 	xmlns="sap.m"
        > 	xmlns:core="sap.ui.core"
        > 	xmlns:macro="sap.fe.macros"
        > >
        > 	<VBox width="30vw">
        > 		<Text text="Time Data Field: " />
        > 		<macro:Field metaPath="timeData" id="timeDataField" />
        > 	</VBox>
        > </core:FragmentDefinition>
        > ```

        The image below shows how it looks on the UI:

        ![](images/Building_Block_Time_Data_Field_f400a6e.png)

    -   A numerical field with a currency using the `Currency` type from `sap/cds/common` appears as 2 input fields.

        While the XML in the custom section fragment looks the same as in the previous example, a data element with a currency appears as 2 input fields: one for the numerical value and one for the selection of the currency in edit mode.

        > ### Sample Code:  
        > Custom Section Fragment for Data Element `numberWithCurrency` \(XML\)
        > 
        > ```xml
        > <core:FragmentDefinition
        > 	xmlns="sap.m"
        > 	xmlns:core="sap.ui.core"
        > 	xmlns:macro="sap.fe.macros"
        > >
        > 	<VBox width="30vw">
        > 		<Text text="Numeric Field with Currency: " />
        > 		<macro:Field metaPath="numberWithCurrency" id="numberWithCurrencyField" />
        > 	</VBox>
        > </core:FragmentDefinition>
        > ```

        The image below shows how it looks on the UI:

        ![](images/Building_Block_Currency_Data_Field_bbce28d.png)


2.  In addition to the automatic generation of controls fitting best to the bound data when using the `Field` building block, you can also influence the appearance using the `Field` building block API.

    -   The following example shows how to use the `formatOptions` and the parameter `measureDisplayMode` in order to influence input-readiness of the currency field or hide it completely.

        > ### Sample Code:  
        > Custom Section Fragment for Data Element `numberWithCurrency` with `formatOptions` and parameter `measureDisplayMode` \(XML\)
        > 
        > ```xml
        > <core:FragmentDefinition
        > 	xmlns="sap.m"
        > 	xmlns:core="sap.ui.core"
        > 	xmlns:macro="sap.fe.macros"
        > >
        > 	<VBox width="30vw">
        > 		<Text text="Numeric Field with Currency - no format Option: " />
        > 		<macro:Field metaPath="numberWithCurrency" id="numberWithCurrencyField" />
        > 		<Text text="Numeric Field with Currency - measureDisplayMode=ReadOnly: " />
        > 		<macro:Field metaPath="numberWithCurrency" id="numberWithCurrencyFieldCurrencyReadOnly">
        > 			<formatOptions measureDisplayMode="ReadOnly" />
        > 		</macro:Field>
        > 		<Text text="Numeric Field with Currency - measureDisplayMode=Hidden: " />
        > 		<macro:Field metaPath="numberWithCurrency" id="numberWithCurrencyFieldCurrencyHidden">
        > 			<formatOptions measureDisplayMode="Hidden" />
        > 		</macro:Field>
        > 	</VBox>
        > </core:FragmentDefinition>
        > ```

        The image below shows how it looks on the UI:

        ![](images/Building_Block_Currency_Data_Field_with_Format_Options_and_Parameter_measureDisplayMode_e80fd3f.png)

    -   The following example shows how to use the `formatOptions` and the parameter `displayMode` to influence the display of the value and description inside a currency field.

        > ### Sample Code:  
        > Custom Section Fragment for Data Element `currencyField_code` with `formatOptions` and parameter `displayMode` \(XML\)
        > 
        > ```
        > <core:FragmentDefinition
        > 	xmlns="sap.m"
        > 	xmlns:core="sap.ui.core"
        > 	xmlns:macro="sap.fe.macros"
        > >
        > 	<VBox width="30vw">
        > 		<Text text="Currency Field - displayMode=ValueDescription: " />
        > 		<macro:Field metaPath="currencyField_code" id="currencyFieldValueDescription">
        > 			<formatOptions displayMode="ValueDescription" />
        > 		</macro:Field>
        > 		<Text text="Currency Field - displayMode=DescriptionValue: " />
        > 		<macro:Field metaPath="currencyField_code" id="currencyFieldDescriptionValue">
        > 			<formatOptions displayMode="DescriptionValue" />
        > 		</macro:Field>
        > 	</VBox>
        > </core:FragmentDefinition>
        > ```

        The image below shows how it looks on the UI:

        ![](images/Building_Block_Currency_Field_Display_Mode_9e7718e.png)


3.  If the referenced data element is configured to have a value list with fixed values, you can use the `Field` building block to render the field as a radio button group. To do this, set `formatOption` as `fieldEditStyle="RadioButtons"` For more information, see [Value Help as a Dropdown List](value-help-as-a-dropdown-list-2a0a630.md).

    By default, the radio button group is rendered in a vertical layout. You can also configure the radio button group to render in a horizontal layout by setting `radioButtonsHorizontalLayout` as `true` in the `manifest.json` file.

    In the following sample code, the data element `FieldWithFixedValueList` has a value list containing fixed values, and the `Field` building block is configured to render the field as a radio button group in a horizontal layout.

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
    > <Text text="Field with fixed value list as radio buttons: " />
    > <macros:Field metaPath="FieldWithFixedValueList " id="FieldWithFixedValueListRadioButtonsHorizontal">
    > 		<formatOptions useRadioButtons="true" 
    > 		radioButtonsHorizontalLayout="true" />
    > </macros:Field>
    > ```

      
      
    **Radio Buttons in Horizontal Layout**

    ![](images/Radio_button-horizontal_layout_a267511.png "Radio Buttons in Horizontal Layout")

4.  The `Field` building block can be used for displaying and editing data from a JSON model. It can be used also for presenting a hard-coded string using the `value` property.

    > ### Note:  
    > This functionality supports text fields, date and time picker, fields with value help, and object status. It doesn't support editing of rating indicator field.

    > ### Sample Code:  
    > ```
    > <macros:Field 
    >     id="myCustomField" 
    >     metaPath="/RootEntity/name" 
    >     value="{myJSONModel>/customModelBindingPath}" 
    > />
    > ```

5.  You can bind the description of the `Field` with value help to a JSON model. To do it, use the `description` property.

    > ### Note:  
    > The `description` property should be used in conjunction with the `value` property.

    > ### Sample Code:  
    > ```
    > <macros:Field 
    >     id="myCustomField" 
    >     metaPath="/RootEntity/name" 
    >     value="{myJSONModel>/customModelBindingPath}"
    >     description="{myJSONModel>/customModelDescriptionBindingPath}" 
    > />
    > ```


