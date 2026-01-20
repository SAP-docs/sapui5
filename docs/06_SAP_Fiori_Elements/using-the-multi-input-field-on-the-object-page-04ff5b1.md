<!-- loio04ff5b1a81344a8e8169ea99630ff4e5 -->

# Using the Multi-Input Field on the Object Page

When you can enter more than one value, the multi-input field is rendered on the object page.

If the system identifies a 1:n association of a `DataField`, the multi-input field is activated automatically.

You must define a 1:n association in the data model.

In the following example, `"_supportedMaterial"` is a one-to-many `navigationProperty` pointing to the `"SupportedMaterial"` entity:

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> composition [0..*] of SupportedMaterial as _SupportedMaterials
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> _SupportedMaterials : Composition of many SupportedMaterial on _SupportedMaterials.owner = $self;
> ```

You can use the navigation property inside a `UI.DataField` to display the values of the target entity. The following example shows how to display the `"material"` property of every associated `"SupportedMaterial"`:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.LineItem">
>   <Collection>
> <Record Type="UI.DataField">
> 	  <PropertyValue Property="Value" Path="_SupportedMaterials.Material " />
> 	</Record>
>   </Collection>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI: {  lineItem: [ { value: '_SupportedMaterials.Material', label: 'Supported Materials' } ] }  
> @UI.fieldGroup: [{position: 10, qualifier: 'FieldgroupID', value: '_SupportedMaterials.Material'} ]
> _SupportedMaterials;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem : {
> 	{
> 		$Type             : 'UI.DataField',
> 		Label			  : 'Supported Materials',
> 		Value             : _SupportedMaterials.Material,
> 	 },
> …
> }
> 
> ```

The following image shows the result on the UI:

![](images/Multi-Input_Control_on_the_Object_Page_d756a5b.png)

> ### Tip:  
> Define the value help on the target property to add and remove existing values from the multi-input field.

You can bind the values entered into a multi-input field to a JSON model. For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Field - Input Fields - Multi-Input Field](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/fieldMultiValueField).

> ### Note:  
> Multi-input fields are only supported in draft-enabled applications.

The multi-input field is also available for tables.

  
  
**Multi-Input Control on the Object Page Table**

![](images/Smart_MultiInput_Control_on_the_Object_Page_Table_dcb027c.png "Multi-Input Control on the Object Page Table")



<a name="loio04ff5b1a81344a8e8169ea99630ff4e5__section_x43_wmz_c1c"/>

## Additional Features in SAP Fiori Elements for OData V4

You can use the following annotations for multi-input fields:

-   `Capabilities.InsertRestrictions`: Specify whether the field can be edited.

-   `Capabilities.DeleteRestrictions`: Specify whether the field can be deleted.


You can also configure the availability and requirement of the multi-input field by setting the `Common.fieldControl` annotation to `ReadOnly` or `Mandatory` as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.FieldGroup" Qualifier="AdditionalInformation">
>     <Record Type="UI.FieldGroupType">
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="ToItemAvailableColors/ColorName" />
>                     <Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> 
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
> annotate RootElement with @UI: {
>   FieldGroup #GeneralInformation: {
>     Label: 'General Information',
>     Data : [
>       {Value: ID},
>       {
>         $Type : 'UI.DataField',
>         Value: PropWithUnit,
>         ![@Common.FieldControl]: #Mandatory
>       }
>     ]
>   }
> };
> 
> ```

When you set the `Common.fieldControl` annotation to `Mandatory`, a red asterisk is displayed next to the label of the field or in the column header if the field is in a table. However, the UI doesn't perform any additional checks, so they must be implemented in the back end.

> ### Restriction:  
> You can't use the multi-input field if you need to display more than 100 selected values. In this case, we recommend that you use a table instead.

**Related Information**  


[Tables](tables-c0f6592.md "SAP Fiori elements supports several table types.")

