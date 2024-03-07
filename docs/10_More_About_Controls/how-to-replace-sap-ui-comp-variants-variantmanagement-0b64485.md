<!-- loio0b64485af6e4407d96ae27ae6773b401 -->

# How to replace `sap.ui.comp.variants.VariantManagement`

This documentation is meant to ease the transition from `sap.ui.comp.variants.VariantManagement` \(deprecated\) to `sap.m.VariantManagement`.

As of 1.120, `sap.ui.comp.variants.VariantManagement` has been deprecated and replaced by `sap.m.VariantManagement`. For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.m.VariantManagement) and the [sample](https://ui5.sap.com/#/entity/sap.m.VariantManagement/sample/sap.m.sample.VariantManagement). 



<a name="loio0b64485af6e4407d96ae27ae6773b401__section_qx2_d2b_mzb"/>

## Differences of Controls

There are some differences between the two controls that are listed in the following table, which compares the main attributes of the controls:

**Comparison of controls**


<table>
<tr>
<th valign="top">

`sap.ui.comp.variants.VariantManagement` 

</th>
<th valign="top">

`sap.m.VariantManagement` 

</th>
</tr>
<tr>
<td valign="top">

Standard variant available

</td>
<td valign="top">

No standard variant available, which is usually shown first

The application has to implement the standard variant via the `items` aggregation as required. A newly added standard variant has to be inserted at position 0.

</td>
</tr>
<tr>
<td valign="top">

Reordering of items

</td>
<td valign="top">

No reordering of items

The application has to implement ordering via the `items` aggregation as required. A newly added variant view has to be inserted at the required position \(otherwise, it is listed alphabetically\).

</td>
</tr>
<tr>
<td valign="top">

Default for title style H4 available

</td>
<td valign="top">

`titleStyle` property must be set to H4

</td>
</tr>
</table>



<a name="loio0b64485af6e4407d96ae27ae6773b401__section_jft_kfb_mzb"/>

## What applications need to do

Applications need to ensure the following:

-   Create a standard variant item with the `rename` and `remove` properties \(`variantItem` \)


The following code sample shows the way the former `VariantManagement` handled this:

```js

			var aVariants = [{
				key: "key1",
				text: "text1",
				author: "author1"
			}, {
				key: "key2",
				text: "text2",
				author: "author2"
			}];
			var oModel = new sap.ui.model.json.JSONModel({
				variants: aVariants
			});
			var oVariantManagement = new sap.ui.comp.variants.VariantManagement({
				variantItems: {
					path: "/variants",
					template: new sap.ui.comp.variants.VariantItem({
						key: "{key}",
						text: "{text}",
						author: "{author}"
					})
				},
				save: function (oEvent) {
					var oParameters = oEvent.getParameters();
					var aNewVariants = oModel.getProperty("/variants");
					
					aNewVariants.push({
						key: oParameters.key,
						text: oParameters.name,
						author: "authorX"
					});
					
					oModel.setProperty("/variants", aNewVariants);
				}
			}).setModel(oModel);

```

The following code sample shows the way it is handled now. It also shows the creation of a standard variant:

```js

			var aVariants = [{
				key: "keyStandard",
				text: "Standard",
				rename: false,
				author: "SAP"
			}, {			
				key: "key1",
				text: "text1",
				remove:true,				
				author: "author1"
			}, {
				key: "key2",
				text: "text2",
				remove:true,				
				author: "author2"
			}];
			var oModel = new sap.ui.model.json.JSONModel({
				variants: aVariants
			});
			var oVariantManagement = new sap.m.VariantManagement({
				supportFavorites: false,
				supportPublic: false,
				supportApplyAutomatically: false,
				selectedKey: "keyStandard",
				defaultKey: "keyStandard",
				popoverTitle: "My Views",
				titleStyle: "H4",
				items: {
					path: "/variants",
					template: new sap.m.VariantItem({
						key: "{key}",
						title: "{text}",
						rename: "{rename}",						
						remove: "{remove}",							
						author: "{author}"
					})
				},
				save: function (oEvent) {
					var oParameters = oEvent.getParameters();
					var aNewVariants = oModel.getProperty("/variants");
					
					aNewVariants.push({
						key: oParameters.key,
						text: oParameters.name,
						author: "authorX"
					});
					
					oModel.setProperty("/variants", aNewVariants);
				}
			}).setModel(oModel);

```

The following code sample shows the way the former `VariantManagement` handled the XML view definition:

```xml

		<core:View
			id="view1"
			height="100%"
			xmlns:mvc="sap.ui.core.mvc"
			xmlns:core="sap.ui.core"
			xmlns="sap.m"
			xmlns:variant="sap.ui.comp.variants"
			> 
			<variant:VariantManagement standardItemText="Standard" enabled="true" showExecuteOnSelection="false" showShare="false" id="variantManagement">
				<variant:variantItems>
					<variant:VariantItem text="variant1" key="variant1"/>
				</variant:variantItems>
			</variant:VariantManagement>
				
		</core:View>

```

The following code sample shows the way it is handled now:

```xml

		<mvc:View
			id="view1"
			height="100%"
			xmlns:mvc="sap.ui.core.mvc"
			xmlns:core="sap.ui.core"
			xmlns="sap.m"
			> 
			<VariantManagement supportApplyAutomatically="false" supportPublic="false" id="variantManagement"
			      titleStyle="H4" supportFavorites="false" selectedKey="keyStandard" defaultKey="keyStandard" popoverTitle="My Views">
				<items>
					<VariantItem title="Standard" key="keyStandard" rename="false"/>				
					<VariantItem title="variant1" key="variant1" remove="true"/>
				</items>
			</VariantManagement>
				
		</mvc:View>

```

