<!-- loiofe453464a121454ab58884f0739c22f9 -->

# Hiding or Showing Table Columns

You can control the visibility of table columns and specific fields within columns in SAP Fiori elements for OData V4.

This feature is applicable to analytical list page, list report page, and object page tables. You can either hide columns using a static value, or dynamically show or hide them using the `UI.Hidden` annotation, or the API of the `Table` building block.



## Hiding Table Columns Using a Static Value

You can hide the entire table column, by setting the `UI.Hidden` annotation value for any field as `static:true`. To hide a specific field within a table column, set the `UI.Hidden` annotation to a path-based value. Fields with `UI.Hidden` set to `true` are hidden in the table. For more information, see [Hiding Features Using the UI.Hidden Annotation](hiding-features-using-the-ui-hidden-annotation-ca00ee4.md).

> ### Note:  
> If the path-based value for `UI.Hidden` is set to `true` for all rows, then only the fields are hidden and not the entire column.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.LineItem">
>     <Collection>
>         <Record Type="UI.DataFieldForAnnotation">
>             <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#multipleActionFields" />
>             <PropertyValue Property="Label" String="Sold-To Party" />
>             <Annotation Term="UI.Hidden" Path="Delivered" />
>         </Record>
>     </Collection>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [{
>     type: #AS_FIELDGROUP,
>     valueQualifier: 'multipleActionFields',
>     label: 'Sold-To Party',
>     hidden: #( 'Delivered' )
> }]
> TEST;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem: {
>     $value: [
>         {
>             $Type: 'UI.DataFieldForAnnotation',
>             Target: '@UI.FieldGroup#multipleActionFields',
>             Label: 'Sold-To Party',
>             ![@UI.Hidden]: Delivered
>         }
>     ]
> }
> 
> ```



## Hiding or Showing Table Columns Dynamically

You can dynamically show or hide table columns using either the `UI.Hidden` annotation with a dynamic expression or the API of the `Table` building block.



### `UI.Hidden` Annotation with a Dynamic Expression

The `UI.Hidden` annotation can point to a path or to a complex expression using an `$edmJson` definition. You can define the `UI.Hidden` annotation either at the property level or at the line item level.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.LineItem">
>     <Collection>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="ID"/>
>             <PropertyValue Property="Label" String="ID"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="_Customer/Name"/>
>             <PropertyValue Property="Label" String="Customer Name"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="OrderDate"/>
>             <PropertyValue Property="Label" String="Order Date"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="Status"/>
>             <PropertyValue Property="Label" String="Status"/>
>         </Record>
>         <Record Type="UI.DataField">
>             <PropertyValue Property="Value" Path="_Customer/Country"/>
>             <PropertyValue Property="Label" String="Country (* Private data)"/>
>             <Annotation Term="UI.Hidden">
>                 <If>
>                     <Eq>
>                         <Path>/Role/Name</Path>
>                         <String>FullAccess</String>
>                     </Eq>
>                         <Bool>false</Bool>
>                         <Bool>true</Bool>
>                 </If>
>             </Annotation>
>         </Record>
>     </Collection>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> annotate entity OrderEntity with
> {
>   @UI.lineItem: [{ position: 10, label: 'ID' }]
>   ID;
> 
>   @UI.lineItem: [{ position: 20, label: 'Customer Name' }]
>   CustomerName;
> 
>   @UI.lineItem: [{ position: 30, label: 'Order Date' }]
>   OrderDate;
> 
>   @UI.lineItem: [{ position: 40, label: 'Status' }]
>   Status;
> 
>   @UI.lineItem: [{ position: 50, label: 'Country (* Private data)' }]
>   @UI.hidden: { $edmJson: { $If: [ { $Eq: [ { $Path: '/Role/Name' }, 'FullAccess' ] }, false, true ] } }
>   CustomerCountry;
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.LineItem                                  : [
>     {
>       $Type: 'UI.DataField',
>       Value: ID,
>       Label: 'ID',
>     },
>     {
>       $Type: 'UI.DataField',
>       Value: _Customer.Name,
>       Label: 'Customer Name',
>     },
>     {
>       $Type: 'UI.DataField',
>       Value: OrderDate,
>       Label: 'Order Date',
>     },
>     {
>       $Type: 'UI.DataField',
>       Value: Status,
>       Label: 'Status',
>     },
>     {
>       $Type        : 'UI.DataField',
>       Value        : _Customer.Country,
>       Label        : 'Country (* Private data)',
>       ![@UI.Hidden]: {$edmJson: {$If: [
>         {$Eq: [
>           {$Path: '/Role/Name'},
>           'FullAccess'
>         ]},
>         false,
>         true
>       ]}}
>     }
>   ]
> 
> ```

For example, the table column `Country (* Private data)` is shown if the singleton `/Role/Name` value is `FullAccess`.

In the `manifest.json` file, you must specify the `preloadConfigurationProperties` key. This key defines the list of properties needed by the dynamic expressions used by the UI.Hidden annotation. These properties are requested at page loading, allowing the associated columns to be shown or hidden at display time.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "OrdersList": {
>   "type": "Component",
>   "id": "OrdersList",
>   "name": "sap.fe.templates.ListReport",
>   "options": {
>     "settings": {
>       "preloadConfigurationProperties": [
>         "/Role/Name"
>       ],
>       "contextPath": "/Orders"
>     }
>   }
> }
> ```

> ### Note:  
> -   Using the `preloadConfigurationProperties` key can result in an additional request to retrieve the listed properties before the page is displayed.
> 
> -   When used on a list report page, the properties listed in the `preloadConfigurationProperties` key must point to singleton entities.
> 
> -   When used for a table on an object page, ensure that the values point to properties readable from the object page context, such as direct properties, 1:1 properties, or a singleton.



### Using the API of the `Table` Building Block

You can show or hide columns using the API of the `Table` building block with extension coding. To use this API, you must activate the `PropertyKeysMode` within the table definition.

> ### Sample Code:  
> `Table` API
> 
> ```json
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros">
> 	<macros:Table metaPath="_items_/@com.sap.vocabularies.UI.v1.LineItem" usePropertyKeysMode="true"/>
> </core:FragmentDefinition>
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "controlConfiguration": {
>   "_items/@com.sap.vocabularies.UI.v1.LineItem": {
>     "tableSettings": {
>       "type": "ResponsiveTable",
>       "usePropertyKeysMode": true
>     }
>   }
> }
> ```

Within your extension file, you can show or hide columns using the `showColumns` and `hideColumns` methods. You can also change column labels and tooltips using the `changeColumnsLabel` methods.

> ### Note:  
> The `showColumns`, `hideColumns` and `changeColumnsLabel` methods are experimental and subject to revisions.

The following sample code demonstrates how `showColumns`, `hideColumns`, and `changeColumnsLabel` methods toggle the visibility and the label change of certain columns:

> ### Sample Code:  
> `Table` API
> 
> ```
> {
> 	/**
> 	 * Toggle the visibility of the Order Date column.
> 	 */
> 	onToggleOrderDateColumn: async function () {
> 		const table = sap.ui.getCore().byId('salessOrders::OrdersList--fe::table::Orders::LineItem::Table');
> 		if (!table) {
> 			console.error("Table Building Block not found");
> 			return;
> 		}
> 
> 		if (this._bOrderDateHidden) {
> 			// Show the column at position 4 (0=Selection, 1=ID, 2=Customer Name, 3=Order Date position)
> 			await table.showColumns([{ key: "OrderDate", position: 3 }]);
> 			this._bOrderDateHidden = false;
> 		} else {
> 			// Hide the Order Date column
> 			await table.hideColumns(["OrderDate"]);
> 			this._bOrderDateHidden = true;
> 		}
> 	},
> 
> 	/**
> 	 * Rename the Order Date and Status columns.
> 	 */
> 	onRenameColumns: async function () {
> 		const table = sap.ui.getCore().byId('salessOrders::OrdersList--fe::table::Orders::LineItem::Table');
> 		if (!table) {
> 			console.error("Table Building Block not found");
> 			return;
> 		}
> 
> 		if (this._bColumnsRenamed) {
> 			// Restore original labels
> 			await table.changeColumnsLabel([
> 				{ key: "OrderDate", newLabel: "Order Date" },
> 				{ key: "Status", newLabel: "Status" }
> 			]);
> 			this._bColumnsRenamed = false;
> 		} else {
> 			// Rename columns
> 			await table.changeColumnsLabel([
> 				{ key: "OrderDate", newLabel: "Date of Order" },
> 				{ key: "Status", newLabel: "Delivery Status" }
> 			]);
> 			this._bColumnsRenamed = true;
> 		}
> 	}
> }
> ```

For more information, see [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table).



## Related Links

You can also show or hide filter fields in the filter bar. For more information, see [Configuring Dynamic Visibility for Filter Fields](configuring-dynamic-visibility-for-filter-fields-fad707f.md).

