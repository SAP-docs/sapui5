<!-- loio8dca63439aac4ae88bbad4e124b584df -->

# Reducing Entity Sets in Metadata Using a Feature Toggle

You can reduce entity sets from the application metadata using a feature toggle.

To do so, create the feature toggle in the back-end system and place `@feature:'Toggle_Name'` in the corresponding CDS view. Depending on the state of the feature toggle \(*Activated* or *Deactivated*\), the entity information may be present or absent from the application metadata. If the state of the feature toggle is set as *Deactivated*, the entity will be removed from the application metadata.

In list reports with multiple tabs, reducing an entity set results in the removal of tabs corresponding to that entity. Similarly, for an object page, reducing an entity set results in the removal of the corresponding section from the object page.

  
  
**List Report Page and Object Page Showing All Tabs When the Feature Toggle is Active**

![](images/OP_with_all_tabs_when_feature_toggle_is_active_0ff5d08.png "List
				Report
				Page
				and
				Object
				Page
				Showing
				All
				Tabs
				When
				the
				Feature
				Toggle
				is
				Active")

  
  
**List Report and Object Page with Some Tabs Hidden When Related Entities Are Reduced by Deactivating the Feature Toggle**

![](images/OP_with_only_one_tab_when_other_related_entities_are_reduced_by_deactivating_the_toggle_42737b9.png "List
					Report and Object Page with Some Tabs Hidden When Related Entities Are Reduced
					by Deactivating the Feature Toggle")

