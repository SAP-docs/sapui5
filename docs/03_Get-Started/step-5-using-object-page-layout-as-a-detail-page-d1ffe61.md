<!-- loiod1ffe611194b4c7891772b0cce84648e -->

# Step 5: Using Object Page Layout as a Detail Page

In this step, we add `sap.uxap.ObjectPageLayout` to the detail page to display more information about each product.

The `ObjectPageLayout` control provides a layout that allows apps to easily display information related to a business object.

As of version 1.52, the control can have the same dynamic header that is used in the `sap.f.DynamicPage`. This ensures the availability of the SAP Fiori features, such as, having breadcrumbs navigation, navigation actions, and expanding/collapsing the header by tapping/clicking the title area or by selecting the available arrow buttons. For more information, see [Object Page Headers](../10_More_About_Controls/object-page-headers-d2ef009.md).

Compared to `sap.f.DynamicPage`, the `sap.uxap.ObjectPageLayout` can provide a more structured page content using an optional anchor bar and block content wrapped in sections and subsections that structure the information. For more information, see [Object Page Layout](../10_More_About_Controls/object-page-layout-2e61ab6.md).



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_ed2_4dd_lbb"/>

## Preview

   
  
<a name="loiod1ffe611194b4c7891772b0cce84648e__fig_r1j_pst_mr"/>`ObjectPageLayout` with dynamic header for the detail page

 ![](images/ObjectPageLayout_with_Dynamic_Header_Fiori_2_0_Tutorial_da38488.gif "ObjectPageLayout with dynamic header for the detail
					page") 



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_fd2_4dd_lbb"/>

## Coding

You can view and download all files at [Flexible Column Layout App - Step 5](https://ui5.sap.com/#/sample/sap.f.tutorial.fiori2.05/preview).



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_qhh_ylj_l4b"/>

## webapp/manifest.json \[MODIFY\]

```json
{
	"_version": "1.12.0",
	"sap.app": {
		"id": "sap.ui.demo.fiori2",
		"type": "application",
		"applicationVersion": {
			"version": "1.0.0"
		}
	},
	"sap.ui5": {
		"rootView": {
			"viewName": "sap.ui.demo.fiori2.view.App",
			"type": "XML",
			"async": true,
			"id": "fcl"
		},
		"dependencies": {
			"minUI5Version": "1.60.0",
			"libs": {
				"sap.ui.core": {},
				"sap.m": {},
				"sap.f": {},
				"sap.uxap": {}
			}
		},
		"config": {
			"fullWidth": true
		}
	}
}
```

First, we add the related libraries that we will need to the dependencies in the `manifest.json`.



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_s1m_xlj_l4b"/>

## webapp/view/Detail.view.xml \[MODIFY\]

```xml
<mvc:View
	xmlns="sap.uxap"
	xmlns:m="sap.m"
	xmlns:f="sap.f"
	xmlns:form="sap.ui.layout.form"
	xmlns:mvc="sap.ui.core.mvc">
	<ObjectPageLayout
		id="ObjectPageLayout"
		showTitleInHeaderContent="true"
		alwaysShowContentHeader="false"
		preserveHeaderStateOnScroll="false"
		headerContentPinnable="true"
		isChildPage="true"
		upperCaseAnchorBar="false">
	</ObjectPageLayout>
</mvc:View>
```

We add an instance of the `sap.uxap.ObjectPageLayout` control.



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_hqw_vlj_l4b"/>

## webapp/view/Detail.view.xml \[MODIFY\]

```xml
<mvc:View
	xmlns="sap.uxap"
	xmlns:m="sap.m"
	xmlns:f="sap.f"
	xmlns:form="sap.ui.layout.form"
	xmlns:mvc="sap.ui.core.mvc">
	<ObjectPageLayout
		id="ObjectPageLayout"
		showTitleInHeaderContent="true"
		alwaysShowContentHeader="false"
		preserveHeaderStateOnScroll="false"
		headerContentPinnable="true"
		isChildPage="true"
		upperCaseAnchorBar="false">
		<headerTitle>
			<ObjectPageDynamicHeaderTitle>
				<actions>
					<m:ToggleButton
						text="Edit"
						type="Emphasized"/>
					<m:Button
						text="Delete"
						type="Transparent"/>
					<m:Button
						text="Copy"
						type="Transparent"/>
					<m:Button
						icon="sap-icon://action"
						type="Transparent"/>
				</actions>
			</ObjectPageDynamicHeaderTitle>
		</headerTitle>

	</ObjectPageLayout>
</mvc:View>
```

We add the recommended dynamic header with an instance of the `ObjectPageDynamicHeaderTitle` in the `headerTitle` aggregation of the `ObjectPageLayout`. For more information, see [Object Page Dynamic Header](../10_More_About_Controls/object-page-dynamic-header-6e340c1.md) and [Object Page Headers Comparison](../10_More_About_Controls/object-page-headers-comparison-9c9d94f.md).



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_rhj_slj_l4b"/>

## webapp/view/Detail.view.xml \[MODIFY\]

```xml
		...
		<headerTitle>
			<ObjectPageDynamicHeaderTitle>
				<actions>
					<m:ToggleButton
						text="Edit"
						type="Emphasized"/>
					<m:Button
						text="Delete"
						type="Transparent"/>
					<m:Button
						text="Copy"
						type="Transparent"/>
					<m:Button
						icon="sap-icon://action"
						type="Transparent"/>
				</actions>
			</ObjectPageDynamicHeaderTitle>
		</headerTitle>

		<headerContent>
			<m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Stretch">
				<f:Avatar
					displaySize="L"
					displayShape="Square"
					class="sapUiTinyMarginEnd">
				</f:Avatar>
				<m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
					<m:Label text="Main Category"/>
				</m:VBox>
				<m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
					<m:Label text="Subcategory"/>
				</m:VBox>
				<m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
					<m:Label text="Price"/>
				</m:VBox>
			</m:FlexBox>
		</headerContent>

	</ObjectPageLayout>
</mvc:View>
```

We add content in the `headerContent` aggregation. We're using `sap.f.Avatar` as the recommended SAP Fiori control for displaying images.



<a name="loiod1ffe611194b4c7891772b0cce84648e__section_yhv_qlj_l4b"/>

## webapp/view/Detail.view.xml \[MODIFY\]

```xml
		...
		<headerContent>
			<m:FlexBox wrap="Wrap" fitContainer="true" alignItems="Stretch">
				<f:Avatar
					displaySize="L"
					displayShape="Square"
					class="sapUiTinyMarginEnd">
				</f:Avatar>
				<m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
					<m:Label text="Main Category"/>
				</m:VBox>
				<m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
					<m:Label text="Subcategory"/>
				</m:VBox>
				<m:VBox justifyContent="Center" class="sapUiSmallMarginEnd">
					<m:Label text="Price"/>
				</m:VBox>
			</m:FlexBox>
		</headerContent>

		<sections>
			<ObjectPageSection title="General Information">
				<subSections>
					<ObjectPageSubSection>
						<blocks>
							<form:SimpleForm
								maxContainerCols="2"
								editable="false"
								layout="ResponsiveGridLayout"
								labelSpanL="12"
								labelSpanM="12"
								emptySpanL="0"
								emptySpanM="0"
								columnsL="1"
								columnsM="1">
								<form:content>
									<m:Label text="Product ID"/>
									<m:Label text="Description"/>
									<m:Label text="Supplier"/>
								</form:content>
							</form:SimpleForm>
						</blocks>
					</ObjectPageSubSection>
				</subSections>
			</ObjectPageSection>

			<ObjectPageSection title="Suppliers">
				<subSections>
					<ObjectPageSubSection>
						<blocks>
							<m:Table
								id="suppliersTable"
								items="{path : 'products>/ProductCollectionStats/Filters/1/values'}">
								<m:columns>
									<m:Column/>
								</m:columns>
								<m:items>
									<m:ColumnListItem type="Navigation">
										<m:cells>
											<m:ObjectIdentifier text="{products>text}"/>
										</m:cells>
									</m:ColumnListItem>
								</m:items>
							</m:Table>
						</blocks>
					</ObjectPageSubSection>
				</subSections>
			</ObjectPageSection>
		</sections>
	</ObjectPageLayout>
</mvc:View>
```

Finally, we add page content in two separate sections with blocks. For more information, see [Object Page Blocks](../10_More_About_Controls/object-page-blocks-4527729.md).

**Parent topic:** [Flexible Column Layout App](flexible-column-layout-app-c4de2df.md "In this tutorial, we showcase how to structure your SAPUI5 app using the layout patterns that comply with the SAP Fiori design guidelines.")

**Next:** [Step 4: Adding a Detail Page](step-4-adding-a-detail-page-4e4315c.md "In this step, we add an empty detail page.")

**Previous:** [Step 6: Adding a Floating Footer](step-6-adding-a-floating-footer-555ed73.md "In this step, we add a floating footer to the detail page.")

