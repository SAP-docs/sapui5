<!-- loio667851f2d0d746a387d7e2fc7766b743 -->

# The `TreeTable` Building Block

You can use the `TreeTable` building block to avoid exposing parameters that are specific to tree tables in the main `Table` building block.

> ### Sample Code:  
> `TreeTable` Building Block
> 
> ```
> <mvc:View
> 	xmlns="sap.m"
> 	xmlns:mvc="sap.ui.core.mvc"
> 	xmlns:macros="sap.fe.macros"
> 	controllerName="sap.fe.core.fpmExplorer.treeTable.TreeTable"
> >
> 	<Page enableScrolling="true">
> 		<Panel headerText="Tree table in Display Mode">
> 			<macros:TreeTable
> 				metaPath="/Products/@com.sap.vocabularies.UI.v1.LineItem"
> 				hierarchyQualifier="ProductsHierarchy"
> 				readOnly="true"
> 				id="treeTable"
> 			/>
> 		</Panel>
> 	</Page>
> </mvc:View>
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Tree Table](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/treeTable).

For more information about tree tables, see [Tree Tables](tree-tables-7cf7a31.md).



<a name="loio667851f2d0d746a387d7e2fc7766b743__section_ht5_nls_j5b"/>

## API

For information about the `TreeTable` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.TreeTable).

