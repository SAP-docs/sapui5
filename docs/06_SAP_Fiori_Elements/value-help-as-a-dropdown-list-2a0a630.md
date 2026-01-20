<!-- loio2a0a630e50c7472b803fb94dab922d18 -->

# Value Help as a Dropdown List

If your value help contains a fixed number of values, a dropdown list is rendered.



<a name="loio2a0a630e50c7472b803fb94dab922d18__section_nfd_b3f_ymb"/>

## Additional Features in SAP Fiori Elements for OData V2

If the entity set of a value help has a fairly stable number of instances, you can render an input field with a value help and dropdown list box \(`sap.m.ComboBox` and in cases of multi selection a `sap.m.MultiComboBox`\) using the metadata extension `sap:semantics='fixed-values'` on the entity set level and the `sap:value-list='fixed-values'` on the property level.

In the following sample code, the product category is implemented as a dropdown list box:

> ### Sample Code:  
> $metadata
> 
> ```
> 
> <EntityType Name="SMART_C_ProductType" sap:label="Product" sap:content-version="1">
>     <Key>
>         ...
>     </Key>
>     ...
>     <Property 
>         Name="ProductCategory" 
>         Type="Edm.String" 
>         Nullable="false" 
>         MaxLength="40" 
>         sap:label="Category" 
>         sap:value-list="fixed-values" />
>     ...
> </EntityType>
> 
> <EntityContainer 
>     Name="SMART_PROD_MAN_Entities" 
>     m:IsDefaultEntityContainer="true" 
>     sap:supported-formats="atom json xlsx">
>     ...
>     <EntitySet 
>         Name="SEPMRA_I_ProductCategory" 
>         EntityType="SMART_PROD_MAN.SEPMRA_I_ProductCategoryType"
>         sap:creatable="false" 
>         sap:updatable="false" 
>         sap:deletable="false" 
>         sap:searchable="true" 
>         sap:content-version="1" 
>         sap:semantics="fixed-values" />
> </EntityContainer>
> 
> ```

The following screenshot shows the *Category* field displayed as a dropdown list box:

  
  
**Product Category Values as Dropdown List Box**

![](images/Values_for_Product_Category_as_Drop-Down_List_Box_30ba33b.png "Product Category Values as Dropdown List Box")



<a name="loio2a0a630e50c7472b803fb94dab922d18__section_xdc_h3f_ymb"/>

## Additional Features in SAP Fiori Elements for OData V4

If the entity set of a value help has a fairly stable number of instances, you can render an input field with a value help and dropdown list box \(`sap.m.ComboBox` and in cases of multi selection a `sap.m.MultiComboBox`\) using the annotation `Common.ValueListWithFixedValues`.

In the following sample code, the currency code is implemented as a dropdown list box:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="sap.fe.officesupplies.CatalogAdminService.Products/currency_code">
>    <Annotation Term="Common.Label" String="Currency"/>
>    <Annotation Term="Common.Text" Path="currency/name">
>       <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextOnly"/>
>    </Annotation>
>    <Annotation Term="Common.ValueListWithFixedValues" Bool="true"/>
>    <Annotation Term="Common.ValueList">
>      <Record Type="Common.ValueListType">
>        <PropertyValue Property="Label" String="Currency"/
>        <PropertyValue Property="CollectionPath" String="Currencies"/>
>        <PropertyValue Property="Parameters">
>          <Collection>
>             <Record Type="Common.ValueListParameterInOut">
>                <PropertyValue Property="LocalDataProperty" PropertyPath="currency_code"/>
>                <PropertyValue Property="ValueListProperty" String="code"/>
>             </Record>
>             <Record Type="Common.ValueListParameterDisplayOnly">
>                <PropertyValue Property="ValueListProperty" String="name"/>
>             </Record>
>          </Collection>
>       </PropertyValue>
>     </Record>
>    </Annotation>
>    <Annotation Term="Core.Description" String="A currency code as specified in ISO 4217"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> annotate view PRODUCTS with {
> 	@Consumption.valueHelpDefinition:
> 	[{
> 	  entity :{
> 		 name    : 'Currencies',
> 		 element : 'code'
> 		},
> 	    label  : 'Currency'
> 	}]
> 
> 	@ObjectModel: {
> 		text: {
> 			element: [ 'name' ]
> 		 }
> 	}
> 	@UI.textArrangement: #TEXT_ONLY
>    currency_code;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate sap.fe.officesupplies.CatalogAdminService.Products with {
>     @Common.Label : 'Currency'
>     @Common : {
>         Text            : currency.name,
>         TextArrangement : #TextOnly
>     }
>     @Common.ValueListWithFixedValues : true
>     @Common.ValueList : {
>         $Type : 'Common.ValueListType',
>         Label : 'Currency',
>         CollectionPath : 'Currencies',
>         Parameters : [
>             {
>                 $Type : 'Common.ValueListParameterInOut',
>                 LocalDataProperty : currency_code,
>                 ValueListProperty : 'code'
>             },
>             {
>                 $Type : 'Common.ValueListParameterDisplayOnly',
>                 ValueListProperty : 'name'
>             }
>         ]
>     }
>     @Core.Description : 'A currency code as specified in ISO 4217'
>     currency_code
> };
> 
> ```

The following screenshot shows how the dropdown list box is rendered for the currency code field:

  
  
**Currency Code as Dropdown List Box**

![](images/Currency_Code_as_Dropdown_List_Box_edffc94.png "Currency Code as Dropdown List Box")

You can use `FilterRestrictions` annotations and set the `AllowedExpressions` property to `MultiValue` or `SingleValue`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="SAP__capabilities.FilterRestrictions">
>     <Record>
>        <PropertyValue Property="FilterExpressionRestrictions">
>          <Collection>
>             <Record>
>                <PropertyValue Property="Property" PropertyPath="currency_code" />
>                <PropertyValue Property="AllowedExpressions" String="MultiValue" />
>             </Record>
> 	 </Collection>
>        </PropertyValue>
>     </Record> 
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @ObjectModel: { 
>     filter.enabled: false 
> }
> currency_code;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> Capabilities.FilterRestrictions : {
>     FilterExpressionRestrictions : [
>         {
>             Property : currency_code,
>             AllowedExpressions : 'MultiValue'
>         }
>     ]
> }
> ```

Text handling and sorting in dropdown-based fields follows the same logic as in the value help dialog. For more information, see [Value Help Dialog](value-help-dialog-3faed83.md).

Value help based on fixed values doesn't show recently entered values. For more information, see [History of Recently Entered Values](field-help-a5608ea.md#loioa5608eabcc184aee99e1a7d88b28816c__HistoryofRecentlyEnteredValues) section in [Field Help](field-help-a5608ea.md).



<a name="loio2a0a630e50c7472b803fb94dab922d18__section_n55_vxx_dgc"/>

## Using a Radio Button Group to Display a Fixed Value List

If the value help has a fixed set of values, you can render the value help as a radio button group instead of a dropdown list. To do this, you can use the `Common.ValueListShowValuesImmediately` annotation or configure the format option in the `manifest.json` file as `fieldEditStyle="RadioButtons"`.

By default, the radio button group is rendered in a vertical layout. You can also configure the radio button group to render in a horizontal layout by setting `radioButtonsHorizontalLayout` as `true` in the `manifest.json` file.

> ### Note:  
> -   Radio buttons support only those fields with `ValueListWithFixedValues :true` and `ValueList` annotation.
> 
> -   The `ValueListParameterInOut` or `ValueListParameterOut` annotation must refer to the field itself using the `LocalDataProperty` parameter.
> 
> -   The radio button labels are obtained from the `Common.Text` annotation. The labels can also be obtained from the `ValueListParameterInOut` or `ValueListParameterOut` annotation. The `TextArrangement` annotation isn't supported.
> 
> -   We allow the use of a radio button group only for fields that contain non-Boolean values as the value list.
> 
> -   We don't recommend the use of radio button group for non-mandatory fields, because of their default selection behavior.

> ### Tip:  
> We recommend the use of a radio button group for fields with a value list that has no more than 8 values. For more information, see [Radio Button](https://experience.sap.com/fiori-design-web/radio-button/#do-not-use-the-radio-button-if).

> ### Restriction:  
> -   Radio buttons don't support multiple value lists and value lists within the `ValueListRelevantQualifiers` annotation.
> 
> -   Radio buttons must not be used for value lists with dependencies as specified in the `ValueListParameterInOut` or `ValueListParameterIn` annotation.
> 
> -   Radio buttons don't consider the filters specified in the `ValueListParameterConstant` annotation, thereby enabling all values to remain unfiltered and displayed on the UI.

The data element `FieldWithRadioButtons` is displayed as a radio button group using the `Common.ValueListShowValuesImmediately` annotation as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="sap.fe.core.ValueHelpRadioButtons.RootElement/PropWithValueList">
>   <Annotation Term="Common.Label" String="Radio button field via annotation"/>
>   <Annotation Term="Common.ValueListWithFixedValues" Bool="true">
>     <Annotation Term="Common.ValueListShowValuesImmediately" Bool="true"/>
>   </Annotation>
>   <Annotation Term="Common.ValueList">
>     <Record Type="Common.ValueListType">
>       <PropertyValue Property="Label" String="Value list with fixed values"/>
>       <PropertyValue Property="CollectionPath" String="FixedValueListEntity"/>
>       <PropertyValue Property="Parameters">
>         <Collection>
>           <Record Type="Common.ValueListParameterInOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="PropWithValueList"/>
>             <PropertyValue Property="ValueListProperty" String="KeyProp"/>
>           </Record>
>         </Collection>
>       </PropertyValue>
>     </Record>
>   </Annotation>
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
> FieldWithRadioButtons  : String @(Common: {
> 		ValueListWithFixedValues                                       : true,
> 		ValueListWithFixedValues.@Common.ValueListShowValuesImmediately: true,
> 		ValueList                                                      : {
> 			CollectionPath: 'FixedValueListEntity',
> 			Parameters    : [
> 				{
> 					$Type            : 'Common.ValueListParameterInOut',
> 					LocalDataProperty: FieldWithRadioButtons,
> 					ValueListProperty: 'KeyProp'
> 				}
> 			]
> 		}
> });
>  
> @cds.autoexpose
> entity FixedValueListEntity {
> 		key KeyProp     : Integer @Common.Text : Description;
> 			Description : String
> }
> ```

  
  
**Radio Buttons in Vertical Layout Using Annotation**

![](images/Radio_button-vertical_layout_6560590.png "Radio Buttons in Vertical Layout Using Annotation")

The data element `FieldWithFixedValueList` is rendered as a radio button group in a horizontal layout by setting the format option `fieldEditStyle= "RadioButton"` in the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="sap.fe.core.ValueHelpRadioButtons.RootElement/PropWithValueList">
>   <Annotation Term="Common.Label" String="Radio button field via annotation"/>
>   <Annotation Term="Common.ValueListWithFixedValues" Bool="true">
>   </Annotation>
>   <Annotation Term="Common.ValueList">
>     <Record Type="Common.ValueListType">
>       <PropertyValue Property="Label" String="Value list with fixed values"/>
>       <PropertyValue Property="CollectionPath" String="FixedValueListEntity"/>
>       <PropertyValue Property="Parameters">
>         <Collection>
>           <Record Type="Common.ValueListParameterInOut">
>             <PropertyValue Property="LocalDataProperty" PropertyPath="PropWithValueList"/>
>             <PropertyValue Property="ValueListProperty" String="KeyProp"/>
>           </Record>
>         </Collection>
>       </PropertyValue>
>     </Record>
>   </Annotation>
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
> FieldWithRadioButtonsViaManifest  : String @(Common: {
> 		ValueListWithFixedValues    : true,
> 		ValueList                   : {
> 			CollectionPath: 'FixedValueListEntity',
> 			Parameters    : [
> 				{
> 					$Type            : 'Common.ValueListParameterInOut',
> 					LocalDataProperty: FieldWithRadioButtonsViaManifest,
> 					ValueListProperty: 'KeyProp'
> 				}
> 			]
> 		}
> });
>  
> @cds.autoexpose
> entity FixedValueListEntity {
> key KeyProp     : Integer @Common.Text : Description;
>     Description : String
> }
>  
> UI.FieldGroup #MyFieldGroup : {
>     Label: 'Line item data',
>     Data : [
>       {Value: FieldWithRadioButtonsViaManifest}
> 	]
> }
>  
> 
> 
> ```

> ### Sample Code:  
> manifest.json
> 
> ```
> ...
> "controlConfiguration": {
> 	"@com.sap.vocabularies.UI.v1.FieldGroup#MyFieldGroup": {
> 		"fields": {
> 			"DataField::FieldWithRadioButtonsViaManifest": {
> 				"formatOptions": {
> 					"fieldEditStyle"              : "RadioButtons",
> 					"radioButtonsHorizontalLayout": true
> 				}
> 			}
> 		}
> 	}
> }
> ...
> 
> 
> ```

  
  
**Radio Buttons in Horizontal Layout Using Manifest Setting**

![](images/Radio_button-horizontal_layout_a267511.png "Radio Buttons in Horizontal Layout Using Manifest Setting")

