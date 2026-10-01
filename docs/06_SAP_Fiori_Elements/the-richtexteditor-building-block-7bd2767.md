<!-- loio7bd2767a8f74423ca5fbdf84f1341782 -->

# The `RichTextEditor` Building Block

The `RichTextEditor` building block enables rich text editing and viewing capabilities in SAP Fiori elements for OData V4.

The `RichTextEditor` building block adds a control that allows users to view a formatted text in display mode and edit it directly in edit mode.

The building block is based on the rich text editor used in SAPUI5, which allows you to define the button groups and plugins in the same way as you would in the control. See the following sample code:

> ### Sample Code:  
> `RichTextEditor` Building Block
> 
> ```
> <macros:RichTextEditor value="{custom>/myFormattedValue}" id="myRichTextEditor" required="true">
> 	<macros:buttonGroups>
> 		<richtexteditor:ButtonGroup
> 			name="font-style"
> 			visible="true"
> 			priority="10"
> 			customToolbarPriority="10"
> 			buttons="bold,italic"
> 		/>
> 		<richtexteditor:ButtonGroup
> 			name="styleselect"
> 			visible="true"
> 			priority="10"
> 			customToolbarPriority="10"
> 			buttons="styleselect"
> 		/>
> 		<richtexteditor:ButtonGroup name="table" visible="true" priority="10" customToolbarPriority="10" buttons="table" />
> 	</macros:buttonGroups>
> 	<macros:plugins>
> 		<richtexteditor:Plugin name="autoresize" />
> 	</macros:plugins>
> </macros:RichTextEditor>
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Rich Text Editor - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/rte/rteDefault).



## Using Rich Text Formatting in Display Mode

In display mode, the `RichTextEditor` building block uses the SAPUI5 `sap.m.FormattedText` control by default. This control doesn't support some formatting options, such as images. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.FormattedText%23controlProperties).

You can control the appearance of fields that use rich text formatting in display mode by using the `displayType` property with any of the following values:

-   `formattedText` \(default\): The control ignores some HTML tags and doesn't display images.

-   `richTextEditor`: The control supports full HTML formatting, including images and code blocks.


You can also use the `height` property to define the rendered size of the field as shown in the following sample code:

> ### Sample Code:  
> XML View
> 
> ```xml
> 
> <macros:RichTextEditorWithMetadata
> 	id="rteDisplayTypeHeight"
> 	metaPath="Description"
> 	displayType="richTextEditor"
> 	height="300px"
> />
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Rich Text Editor - Display Mode Options](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/rte/rteDisplayMode).



<a name="loio7bd2767a8f74423ca5fbdf84f1341782__section_ht5_nls_j5b"/>

## API

For information about the `RichTextEditor` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.RichTextEditor).

