<!-- loioc4de2df385174e58a689d9847c7553bd -->

# Flexible Column Layout App Tutorial

In this tutorial, we showcase how to structure your SAPUI5 app using the layout patterns that comply with the SAP Fiori design guidelines.

The app provides the following features:

-   An up-to-three-column layout based on the `sap.f.FlexibleColumnLayout` control. This layout has predefined layout types and defined routing between them that enables smooth navigation between the list-detail and list-detail-detail patterns of the app.

-   A list page based on the `sap.f.DynamicPage` control that lists the available products and has filtering and sorting options.

-   A detail page based on the `sap.uxap.ObjectPageLayout` control containing detailed information about the selected object from the list page:

    -   It implements the dynamic header of the `ObjectPageLayout` control.

    -   The `sap.f.Avatar` control is used in the title area to display an image of the selected product.

    -   The header title area can be collapsed \(snapped to the title\) by scrolling down the content of the page or by clicking/tapping the title area. The header area can also be pinned so that it remains visible when the user scrolls down the content of the page.

    -   The title area has a set of actions on the right. The title area can display specific content when the header is snapped.

    -   The floating footer is positioned at the bottom of the page, on top of the page content. It holds finalizing actions on the right.


-   A detail-detail page based on `sap.f.DynamicPage` to display further details of the selected object from the detail page.

-   A simple about page based on `sap.f.DynamicPage` to display further details of the selected object from the detail-detail page.




<a name="loioc4de2df385174e58a689d9847c7553bd__section_d2n_dmw_mbb"/>

## Preview

  
  
**list-detail-detail pattern with sap.f.FlexibleColumnLayout, sap.f.DynamicPage and sap.uxap.ObjectPageLayout**

![](images/With_Semantic_Helper_Fiori_2_0_Tutorial_fd98e0d.gif "list-detail-detail pattern with sap.f.FlexibleColumnLayout,
						sap.f.DynamicPage and
						sap.uxap.ObjectPageLayout")



> ### Tip:  
> You don't have to do all tutorial steps sequentially, you can also jump directly to any step you want. Just download the code from the previous step, and start there.
> 
> You can view and download the files for all steps in the Demo Kit at [Flexible Column Layout App](https://ui5.sap.com/#/entity/sap.f.tutorial.fiori2). Copy the code to your workspace and make sure that the application runs by calling the `webapp/index.html` file. Depending on your development environment you might have to adjust resource paths and configuration entries.
> 
> For more information check the [Downloading Code for a Tutorial Step](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download) section of the tutorials overview page [Get Started: Setup, Tutorials, and Demo Apps](get-started-setup-tutorials-and-demo-apps-8b49fc1.md).

