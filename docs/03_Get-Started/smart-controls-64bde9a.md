<!-- loio64bde9a8879d4f418e2849f7285dd757 -->

# Smart Controls

In this tutorial you learn how to work with smart controls.

Smart controls are a specific category of SAPUI5 controls that have some special features in addition to the standard SAPUI5 features and thus make it easier to use the control in certain scenarios.

A primary example of such a feature is OData support: Typically, a smart control interprets OData metadata. In some cases, a smart control even persists an adapted version of the user interface that the user has defined for later usage.

> ### Note:  
>  The controls in this library only support OData V2 and a default model \(named `undefined`\). 

In this tutorial, you see examples that should make the term “smart” even more tangible.

> ### Tip:  
> You don't have to do all tutorial steps sequentially, you can also jump directly to any step you want. Just download the code from the previous step, copy it to your workspace and make sure that the application runs by calling the `webapp/index.html` file.
> 
> You can view and download the files for all steps in the *Samples* in the Demo Kit at [Smart Controls](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls). Depending on your development environment you might have to adjust resource paths and configuration entries.
> 
> For more information check the following sections of the tutorials overview page \(see [Get Started: Setup, Tutorials, and Demo Apps](get-started-setup-tutorials-and-demo-apps-8b49fc1.md)\):
> 
> -   [Downloading Code for a Tutorial Step](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download)
> 
> -   [Adapting Code to Your Development Environment](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_adaptation)

1.  [Prerequisites](prerequisites-0e84ac7.md "Preparation steps for the Smart Controls tutorial ")  
Preparation steps for the *Smart Controls* tutorial
2.  [Step 1: Smart Field](step-1-smart-field-ed8fda6.md "One important building block of smart controls is the SmartField
		control that, depending on the OData metadata defined, allows you to render other controls
		and, for example, define fields with certain attributes based on the metadata. ")  
One important building block of smart controls is the `SmartField` control that, depending on the OData metadata defined, allows you to render other controls and, for example, define fields with certain attributes based on the metadata.
3.  [Step 2: Smart Field with Value Help](step-2-smart-field-with-value-help-3361e27.md "You can use the SmartField control in combination with the
			ValueHelpDialog control that allow you to carry out a complex search in
		order to identify the value you are looking for.")  
You can use the `SmartField` control in combination with the `ValueHelpDialog` control that allow you to carry out a complex search in order to identify the value you are looking for.
4.  [Step 3: Smart Field with Smart Link](step-3-smart-field-with-smart-link-c81d6b3.md "We now show yet another but quite different feature of the
			SmartField control, SmartField used in combination
		with SmartLink, which allow you to embed a dialog with related
		cross-application links.")  
We now show yet another but quite different feature of the `SmartField` control, `SmartField` used in combination with `SmartLink`, which allow you to embed a dialog with related cross-application links.
5.  [Step 4: Smart Form](step-4-smart-form-f712d30.md "The SmartForm control is used to obtain a form-like layout for
		several controls.")  
The `SmartForm` control is used to obtain a form-like layout for several controls.
6.  [Step 5: Smart Filter Bar and Smart Table](step-5-smart-filter-bar-and-smart-table-1daa462.md " In this step, we will look at the SmartTable control along with the
			SmartFilterBar control that allow you to filter table
		entries.")  
 In this step, we will look at the `SmartTable` control along with the `SmartFilterBar` control that allow you to filter table entries.
7.  [Step 6: Table Personalization](step-6-table-personalization-1953149.md "Table personalization offers you a dedicated dialog to specify which columns in the
		table are visible and in which order, how the data is sorted, whether grouping of the data
		is active, and whether table entries are filtered.")  
Table personalization offers you a dedicated dialog to specify which columns in the table are visible and in which order, how the data is sorted, whether grouping of the data is active, and whether table entries are filtered.
8.  [Step 7: View Management](step-7-view-management-97fc0ea.md "The VariantManagement control allows you to handle views and makes
		it possible for the user to persist changes carried out on the UI and then later retrieve
		these changes.")  
The `VariantManagement` control allows you to handle views and makes it possible for the user to persist changes carried out on the UI and then later retrieve these changes.
9.  [Step 8: Page Variant Management](step-8-page-variant-management-b1d4d26.md "In this step, we will look at the page variant of the
                  VariantManagement control, an enhanced function of the
                  SmartVariantManagement control that can handle multiple smart
            controls.")  
In this step, we will look at the page variant of the `VariantManagement` control, an enhanced function of the `SmartVariantManagement` control that can handle multiple smart controls.
10. [Step 9: Smart Chart with Chart Personalization and View Management](step-9-smart-chart-with-chart-personalization-and-view-management-0219b11.md "In this step, we will look at the SmartChart control with the chart
		personalization and in combination with the VariantManagement control that
		allow you to use complex graphics along with other smart control features.")  
In this step, we will look at the `SmartChart` control with the chart personalization and in combination with the `VariantManagement` control that allow you to use complex graphics along with other smart control features.
11. [Summary](summary-ec59a20.md "Summary of the Smart Controls tutorial")  
Summary of the *Smart Controls* tutorial

