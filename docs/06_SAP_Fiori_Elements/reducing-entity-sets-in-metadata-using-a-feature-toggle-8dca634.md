<!-- loio8dca63439aac4ae88bbad4e124b584df -->

# Reducing Entity Sets in Metadata Using a Feature Toggle

Application developers can choose to reduce entity sets from the application metadata using a feature toggle.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

To do so, create the feature toggle in the backend system and place `@feature:'Toggle_Name'` in the corresponding CDS view. Depending on the state of the feature toggle \(*Activated* or *Deactivated*\), the entity information may be present or absent from the application metadata. If the state of the feature toggle is set as *Deactivated*, the entity will be removed from the application metadata.

In list reports with multiple tabs, reducing an entity set results in the removal of tabs corresponding to that entity. Similarly, for an object page, reducing an entity set results in the removal of the corresponding section from the object page.

   
  
**List report and object page showing all tabs when the feature toggle is active**

 ![](images/OP_with_all_tabs_when_feature_toggle_is_active_0ff5d08.png "List report and object page showing all tabs when the feature toggle is
				active") 

   
  
**List report and object page with some tabs hidden when related entities are reduced by deactivating the feature toggle**

 ![](images/OP_with_only_one_tab_when_other_related_entities_are_reduced_by_deactivating_the_toggle_42737b9.png "List report and object page with some tabs hidden when related entities are
				reduced by deactivating the feature toggle") 

