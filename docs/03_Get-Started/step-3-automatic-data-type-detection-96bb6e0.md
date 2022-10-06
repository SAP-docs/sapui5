<!-- loio96bb6e06fa22491fa65a5040f6da099c -->

# Step 3: Automatic Data Type Detection

In this step, we use the automatic data type detection of the OData V4 model to parse, validate, and format user entries. The service metadata contains type information for the properties of each entity.

The OData V4 Model utilizes this information to compute the corresponding SAPUI5 type, including constraints, and sets this type to the SAPUI5 property binding for the entity property. For example, for `<Input value={Age}/>` the SAPUI5 type `Int64` is used, which corresponds to the OData type `Edm.Int64`.



<a name="loio96bb6e06fa22491fa65a5040f6da099c__section_bt4_fxc_z1b"/>

## Preview

   
  
<a name="loio96bb6e06fa22491fa65a5040f6da099c__fig_zyb_mlb_mcb"/>Input does not match the underlying data type

 ![](images/Tutorial_OData_V4_Step_3_8320fcf.png "Input does not match the underlying data type") 



<a name="loio96bb6e06fa22491fa65a5040f6da099c__section_tsr_gxc_z1b"/>

## Coding

You can view and download all files at [OData V4 - Step 3](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.odatav4/sample/sap.ui.core.tutorial.odatav4.03).



<a name="loio96bb6e06fa22491fa65a5040f6da099c__section_pp2_mxc_z1b"/>

## webapp/manifest.json

```json
{
	"_version": "1.12.0",
	"sap.app": {...
	},
	"sap.ui": {
		"technology": "UI5",
		"deviceTypes": {
		   
		}
	},
	"sap.ui5": {
		"rootView": {
		...
		},
		"dependencies": {
			...
			}
		},
		"contentDensities": {
			...
		},
		"handleValidation": true,
		
		"models": {
			...
		}
	},
	...
}

```

In the `manifest.json` descriptor file, we add the `"handleValidation": true` setting. This makes sure that any validation errors that are detected by the SAPUI5 types are shown on the UI using the message manager.

We now run the app using the `index.html` file and enter values that don't match the type and constraints given in the metadata file. For example, enter the string value ***Young at Heart*** in field *Age*, which requires an integer input \(SAPUI5 type `sap.ui.model.odata.type.Int64`, corresponding to OData type `Edm.Int64`\), or remove an entry from the *User Name* or *First Name* fields, which are mandatory. Fields with incorrect entries are highlighted and an error message is displayed.

> ### Note:  
> If you explicitly define a type in the binding info of a control, the automatic type detection for that binding will be turned off. For example, if you change the `Input` for `Age` in the view to `<Input value="{path:'Age', type:'sap.ui.model.type.String'}/>`, the `String` type will be used, not the `Int64` type from the service metadata.



<a name="loio96bb6e06fa22491fa65a5040f6da099c__section_pvc_fyc_z1b"/>

## localService/metadata.xml

```xml
<EntityType Name="Person">
	<Key>
		<PropertyRef Name="UserName"/>
	</Key>
	<Property Name="UserName" Type="Edm.String" Nullable="false" />
	<Property Name="FirstName" Type="Edm.String" />
	<Property Name="LastName" Type="Edm.String"/>
	<Property Name="MiddleName" Type="Edm.String"/>
	<Property Name="Gender" Type="Microsoft.OData.Service.Sample.TrippinInMemory.Models.PersonGender"
			  Nullable="false"/>
	<Property Name="Age" Type="Edm.Int64" />
   
```

To make the *First Name* optional, we remove the parameter `Nullable="false"` from the `FirstName` property. You can play around with the settings for the other properties, for example, change the type of property `Age` to `Type="Edm.String"` to allow free text.



> ### Tip:  
> To see the metadata of an OData service, you append the `$metadata` variable to the URL of the service. You can try this, for example, with [http://services.odata.org/TripPinRESTierService/](http://services.odata.org/TripPinRESTierService/) and [http://services.odata.org/TripPinRESTierService/$metadata](http://services.odata.org/TripPinRESTierService/$metadata)

**Related Information**  


[Type Determination](../04_Essentials/type-determination-53cdd55.md "")

[API Reference: `sap.ui.model.odata.type`](https://ui5.sap.com/#/api/sap.ui.model.odata.type)

[Sample for `sap.ui.core.mvc.XMLView`: *XML Templating: UI5 OData types*](https://ui5.sap.com/#/entity/sap.ui.core.mvc.XMLView/sample/sap.ui.core.sample.ViewTemplate.types)

