<!-- loio7bd2767a8f74423ca5fbdf84f1341782 -->

# The `RichTextEditor` Building Block

Use the `RichTextEditor` building block to add a control that allows users to view a formatted text in display mode and edit it directly in edit mode.

The building block is based on the rich text editor used in SAPUI5, allowing you to define the button groups and plugins the same way as you would in that control. See the following sample code:

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

Check out our live example in the flexible programming model explorer at [RichTextEditor](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/rte).



<a name="loio7bd2767a8f74423ca5fbdf84f1341782__section_ht5_nls_j5b"/>

## API

For information about the `RichTextEditor` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.RichTextEditor).

