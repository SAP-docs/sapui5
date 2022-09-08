<!-- loioe34f78f40c3c447eb53322dc4dafe12a -->

# Example: Adding Custom Filter Fields in Table Toolbar

To add custom filter fields in a table toolbar, follow the steps described below:



## Context

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

Using an extension in the object page table, you can define filter fields such as select, combo box, date picker, and text field. You can prevent the overflow of the control from the table toolbar by setting the value of the `OverflowToolbarLayoutData` property to `NeverOverflow`.

> ### Note:  
> Setting `OverflowToolbarLayoutData` property to `NeverOverflow` is specific to the overflow toolbar. This will not work for all controls.



## Procedure

1.  Make the following manifest changes under object page view extensions. The manifest key should be in the format `TableToolBarExtension|entitySet|facetId`.

    > ### Sample Code:  
    > ```
    > 
    > "TableToolBarExtension|STTA_C_MP_Product|to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
    > 	"className": "sap.ui.core.Fragment",
    > 	"fragmentName": "STTA_MP.ext.fragments.OPCustomFilter",
    > 	type": "XML"
    > }
    > 
    > ```

2.  Make the following XML fragment changes to `OPCustomFilter.fragment.xml`:

    > ### Sample Code:  
    > ```
    > 
    > <core:FragmentDefinition
    >         xmlns="sap.m"
    >         xmlns:smartfilterbar="sap.ui.comp.smartfilterbar"
    >         xmlns:core="sap.ui.core">
    > 		
    >     <Label text="{i18n|sap.suite.ui.generic.template.ListReport|STTA_C_MP_Product>ST_GENERIC_LANGUAGE_FILTER}" labelFor="filterId">
    >    	<layoutData>
    > 			<OverflowToolbarLayoutData priority="NeverOverflow"/>
    > 		</layoutData>
    > 	 </Label>
    >     <Select id="filterId" change="onCustomFilterChange">
    >     	<items>
    > 	        <core:Item key="0" text="{i18n|sap.suite.ui.generic.template.ListReport|STTA_C_MP_Product>ST_GENERIC_ENGLISH_LANGUAGE_FILTER}"/>
    > 	        <core:Item key="1" text="{i18n|sap.suite.ui.generic.template.ListReport|STTA_C_MP_Product>ST_GENERIC_MANDARIN_LANGUAGE_FILTER}"/>
    >         </items>
    >          <layoutData>
    > 			<OverflowToolbarLayoutData priority="NeverOverflow"/>
    > 		</layoutData>
    >     </Select>
    >      
    > </core:FragmentDefinition>
    > 
    > 
    > ```

3.  Make the following controller changes to add filters to the table using `onBeforeRebindTable` property, and rebind the table after selection change:

    > ### Sample Code:  
    > ```
    > 
    > onCustomFilterChange: function(oEvent) {
    > 			var smartTable = sap.ui.getCore().byId("STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--to_ProductText::com.sap.vocabularies.UI.v1.LineItem::Table");
    > 			smartTable.rebindTable();
    > 	},
    > 
    > onBeforeRebindTableExtension: function (oEvent) {
    > 	var oBindingParams = oEvent.getParameter("bindingParams");
    > 	oBindingParams.parameters = oBindingParams.parameters || {};
    > 	var customFilter = sap.ui.getCore().byId("STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--filterId");
    > 	var key = customFilter.getSelectedKey();
    > 	switch (key) {
    > 		case "0" :
    > 		oBindingParams.filters.push(new sap.ui.model.Filter("Language", "EQ", "EN"));
    > 		break;
    > 					 
    > 		case "1" :
    > 		oBindingParams.filters.push(new sap.ui.model.Filter("Language", "EQ", "ZH"));
    > 		break;
    > 					 
    > 		default:
    > 		return;
    >  }
    > },
    > 
    > ```


**Related Information**  


[Generic Action Buttons in Tables on the Object Page: Additional Considerations](generic-action-buttons-in-tables-on-the-object-page-additional-considerations-d27ae99.md "You can use annotations to enable generic actions in tables on the object page.")

