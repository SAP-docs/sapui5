<!-- loio99e33bdfde074bb48d2e603fa5ecd2d0 -->

# Smart Form

The `sap.ui.comp.smartform.SmartForm` control makes it possible to render a form. Depending on user authorizations, the form enables users, for example, to switch from display to edit mode, add and group fields, rename field labels, and implement a user input check.

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartform.SmartForm) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartform.SmartForm).



## Overview

The `SmartForm` control displays form content. If used in combination with the `SmartField` control and OData metadata annotations along with additional configuration, the control allows you to create a form with minimal effort.

The `SmartForm` control supports the following features:

-   Adaptation settings

    A key user can adapt the form for all users in one client by doing the following:

    -   Adding and hiding fields

    -   Adding and hiding groups

    -   Changing the order of fields and groups

    -   Renaming field labels


-   *Display/Edit* button

    This optional button allows the user to toggle from display to edit mode.

    > ### Note:  
    > Fields of type `SmartField` are automatically displayed with the appropriate control in the required mode, for example, texts on the user interface in display mode and user input in edit mode. If controls other than the `SmartField` control are used, the application in question has to handle the switch between display and edit mode.

-   Field labels

    For fields of type `SmartField`, the `SmartForm` control automatically creates a label based on the OData metadata annotations.

-   *Check* button

    This optional button allows the user to check the current user input.

    > ### Note:  
    > For fields of type `SmartField`, values will be checked based on the OData metadata annotations. Depending on which theme is defined, the fields with errors will be circled in red. When the user clicks on one of these fields, the relevant error message is displayed.




## Details



### Groups

A `SmartForm` control consists of groups \(`sap.ui.comp.smartform.Group`\) and group elements \(`sap.ui.comp.smartform.GroupElement`\).

A group element is a collection of controls that are displayed along with a label. Typically, a group element consists of exactly one control and the respective label. Multiple group elements can be grouped together. This group then also has a label.

The `SmartForm` control aggregates groups, and a group aggregates group elements. The group elements themselves aggregate elements of type `sap.ui.core.Control`.

The following example shows the `SmartForm` control and its entities:

```xml


<smartForm:SmartForm id="MainForm" title="General Data"
				entityType="Header, Tax" editTogglable="true" expandable="true"
				expanded="true" ignoredFields="AccountingDocumentCategory"
				checkButton="true">
	<smartForm:customData>
		<core:CustomData key="suppressUnit" value="false" />
		<core:CustomData key="dateFormatSettings" value='\{"style":"short"\}' />
		<core:CustomData key="defaultDropDownDisplayBehaviour" value='descriptionAndId' />
	</smartForm:customData>
	<smartForm:customToolbar>
		<Toolbar height="3rem">
			<Text text="Custom Toolbar with a header text" />
			<ToolbarSpacer />
			<Button icon="sap-icon://settings" />
			<Button icon="sap-icon://drop-down-list" />
		</Toolbar>
	</smartForm:customToolbar>
	<smartForm:Group id="GeneralLedgerDocument" label="General Ledger Document"
					expandable="true">
		<smartForm:layout>
			<layout:GridData span="L4 M4 S4" />
		</smartForm:layout>
		<smartForm:GroupElement id="GeneralLedgerDocument.CompanyCode">
			<smartField:SmartField value="{CompanyCode}"
							enabled="true" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="GeneralLedgerDocument.AccountingDocument">
			<smartField:SmartField value="{AccountingDocument}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="GeneralLedgerDocument.FiscalYear">
			<smartField:SmartField value="{FiscalYear}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement
						id="GeneralLedgerDocument.AccountingDocumentType">
			<smartField:SmartField value="{AccountingDocumentType}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement
						id="GeneralLedgerDocument.AccountingDocumentHeaderText">
			<smartField:SmartField value="{AccountingDocumentHeaderText}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement
						id="GeneralLedgerDocument.AccountingDocumentTypeName">
			<smartField:SmartField value="{AccountingDocumentTypeName}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="GeneralLedgerDocument.AmountInCoCodeCrcy">
			<smartField:SmartField value="{AmountInCoCodeCrcy}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="GeneralLedgerDocument.CoCodeCurrency">
			<smartField:SmartField value="{CoCodeCurrency}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="GeneralLedgerDocument.LedgerGroup">
			<smartField:SmartField value="{LedgerGroup}" />
		</smartForm:GroupElement>
	</smartForm:Group>
	<smartForm:Group label="Dates" id="Dates">
		<smartForm:layout>
			<layout:GridData span="L3 M3 S3" />
		</smartForm:layout>
		<smartForm:GroupElement id="Dates.DocumentDate">
			<smartField:SmartField value="{DocumentDate}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="Dates.PostingDate">
			<smartField:SmartField value="{PostingDate}" />
		</smartForm:GroupElement>
	</smartForm:Group>
	<smartForm:Group label="Reversal" id="Reversal">
		<smartForm:layout>
			<layout:GridData span="L3 M3 S3" />
		</smartForm:layout>
		<smartForm:GroupElement id="Reversal.ReversalDocument">
			<smartField:SmartField value="{ReverseDocument}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="Reversal.ReversalReasonName">
			<smartField:SmartField value="{ReversalReasonName}" />
		</smartForm:GroupElement>
	</smartForm:Group>
	<smartForm:Group label="Administrative Data" id="AdministrativeData">
		<smartForm:layout>
			<layout:GridData span="L3 M3 S3" linebreak="true" />
		</smartForm:layout>
		<smartForm:GroupElement id="AdministrativeData.CreatedByUser">
			<smartField:SmartField value="{CreatedByUser}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="AdministrativeData.CreatedByUserName">
			<smartField:SmartField value="{CreatedByUserName}" />
		</smartForm:GroupElement>
		<smartForm:GroupElement id="AdministrativeData.CreationDate">
			<smartField:SmartField value="{CreationDate}" />
		</smartForm:GroupElement>
	</smartForm:Group>
</smartForm:SmartForm>
```



### Layout

The `SmartForm` control uses a `ResponsiveGridLayout` that can be adjusted. The following properties are exposed in the aggregation layout:

-   `labelSpanXL`, `labelSpanL`, `labelSpanM`, `labelSpanS`

-   `emptySpanXL`, `emptySpanL` `emptySpanM`, `emptySpanS`

-   `columnsXL`, `columnsL`, `columnsM`

-   `breakpointXL`, `breakpointL`, `breakpointM` 

-   `gridDataSpan`


To display the fields next to each other with a label on top, you can use the `gridDataSpan` property of the `layout` element in combination with the `useHorizontalLayout` property.

The form will be embedded in an `sap.m.Panel` if the `expandable` property is set. Using this property, the form can also be collapsed and expanded.



### Group Layout

The `layoutData` aggregation of a group can be used to define a `GridData` layout. With this layout, the default span of a single group can be changed to allocate the number of columns available to each group. The number of columns allocated to each group depends on how many groups there are. Moreover, a line break can be inserted to display the group in a new line.



### Toolbar

The `SmartForm` control uses a toolbar for displaying the title of the form and the following buttons \(if configured\):

-   *Display/Edit*\(`editTogglable` property \)

-   *Check* \(`checkButton` property\)


Alternatively, the custom toolbar can be used \(`customToolbar` aggregation\). The `SmartForm` control will then replace the standard toolbar with the custom toolbar and add the title and the buttons if requested.



## Key-User-Specific Adaptation

To enable key user adaptation settings, the following prerequisites have to be fulfilled:

-   Use of stable IDs for every `Group`, `GroupElement`, and field in the XML view

    The adaptation settings use control IDs to identify the entities that can be modified.

-   Use of the `entityType` property

    The property determines the entity type of the OData service defining the fields that can be added to the form.

    Fields that must not be available on the adaptation dialog can be listed in the `ignoredFields` property: Separate the property names by commas without using spaces.


